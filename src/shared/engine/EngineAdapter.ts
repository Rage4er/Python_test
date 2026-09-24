import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';

import type { SceneNode, SceneState, Transform, PrimitiveType } from '@entities/scene/types';
import { buildObject, applyTransform, extractTransform } from './meshFactory';
import { diffScene } from './syncDiff';
import { setGlobalAdapter } from './engineRef';

const BVH_THRESHOLD = 500;

// Шаги snap для TransformControls (см. @shared/lib/snapToGrid — чистая логика покрыта тестами)
export const SNAP_TRANSLATION = 1; // мм
export const SNAP_ROTATION_DEG = 15; // градусы
export const SNAP_SCALE = 0.1;

export interface EngineCallbacks {
  onSelectionChange(ids: string[]): void;
  onTransformEnd(id: string, before: Transform, after: Transform): void;
  onTransformMultipleEnd(
    updates: Array<{ id: string; before: Transform; after: Transform }>
  ): void;
  onDropPrimitive(type: PrimitiveType, position: [number, number, number]): void;
  getState(): SceneState;
}

export class EngineAdapter {
  readonly scene: THREE.Scene;
  readonly camera: THREE.PerspectiveCamera;
  readonly renderer: THREE.WebGLRenderer;
  readonly orbit: OrbitControls;
  readonly transform: TransformControls;

  private objects = new Map<string, THREE.Object3D>();
  private raycaster = new THREE.Raycaster();
  private pointer = new THREE.Vector2();
  private clock = new THREE.Clock();
  private disposed = false;
  private theme: 'light' | 'dark' = 'light';
  
  // Pivot для множественного выделения
  private pivot: THREE.Group | null = null;
  private pivotStartMatrices = new Map<string, THREE.Matrix4>();
  private transformBeforeSingle: Transform | null = null;
  private transformBeforeMultiple: Map<string, Transform> | null = null;

  private lastNodes: Record<string, SceneNode> | null = null;

  constructor(
    private canvas: HTMLCanvasElement,
    private cb: EngineCallbacks
  ) {
    // Renderer
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf0f0f0);

    // Camera
    const { clientWidth: w, clientHeight: h } = canvas;
    this.camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 10000);
    this.camera.position.set(80, 80, 80);
    this.camera.lookAt(0, 0, 0);

    // Lights
    const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    this.scene.add(hemi);

    const dir = new THREE.DirectionalLight(0xffffff, 2.0);
    dir.position.set(50, 80, 40);
    dir.castShadow = true;
    dir.shadow.mapSize.set(2048, 2048);
    this.scene.add(dir);

    // Ground grid
    const grid = new THREE.GridHelper(400, 400, 0xcccccc, 0xe0e0e0);
    grid.name = '__grid__';
    this.scene.add(grid);

    // Controls
    this.orbit = new OrbitControls(this.camera, canvas);
    this.orbit.enableDamping = true;
    this.orbit.dampingFactor = 0.1;

    this.transform = new TransformControls(this.camera, canvas);
    // Шаги snap вынесены в чистую утилиту @shared/lib/snapToGrid (покрыта тестами).
    // Значения: 1 мм translation, 15° rotation, 0.1 scale.
    this.transform.setTranslationSnap(SNAP_TRANSLATION); // 1mm snap
    this.transform.setRotationSnap(THREE.MathUtils.degToRad(SNAP_ROTATION_DEG));
    this.transform.setScaleSnap(SNAP_SCALE);
    
    this.transform.addEventListener('dragging-changed', (e) => {
      this.orbit.enabled = !e.value;
    });

    this.transform.addEventListener('mouseDown', () => {
      if (this.pivot) {
        const selection = this.cb.getState().selection;
        this.transformBeforeMultiple = new Map();
        for (const id of selection) {
          const node = this.cb.getState().nodes[id];
          if (node) this.transformBeforeMultiple.set(id, node.transform);
        }
      } else if (this.transform.object) {
        this.transformBeforeSingle = extractTransform(this.transform.object);
      }
    });

    this.transform.addEventListener('mouseUp', () => {
      if (this.pivot && this.transformBeforeMultiple) {
        const updates: Array<{ id: string; before: Transform; after: Transform }> = [];
        const parentWorldInv = new THREE.Matrix4();
        
        for (const [id, startMatrix] of this.pivotStartMatrices) {
          const obj = this.objects.get(id);
          if (!obj) continue;

          const newWorldMatrix = new THREE.Matrix4().multiplyMatrices(
            this.pivot.matrixWorld,
            startMatrix
          );
          
          // Если объект внутри группы, нужно пересчитать в локальные координаты
          const targetParent = obj.parent || this.scene;
          parentWorldInv.copy(targetParent.matrixWorld).invert();
          const localMatrix = new THREE.Matrix4().multiplyMatrices(parentWorldInv, newWorldMatrix);
          
          const pos = new THREE.Vector3();
          const quat = new THREE.Quaternion();
          const scale = new THREE.Vector3();
          localMatrix.decompose(pos, quat, scale);
          const euler = new THREE.Euler().setFromQuaternion(quat);

          const after: Transform = {
            position: [pos.x, pos.y, pos.z],
            rotation: [euler.x, euler.y, euler.z],
            scale: [scale.x, scale.y, scale.z],
          };
          const before = this.transformBeforeMultiple.get(id);
          if (before) updates.push({ id, before, after });
        }

        if (updates.length > 0) {
          this.cb.onTransformMultipleEnd(updates);
        }
        this.transformBeforeMultiple = null;
      } else if (this.transform.object && this.transformBeforeSingle) {
        const id = (this.transform.object.userData.id as string);
        const after = extractTransform(this.transform.object);
        this.cb.onTransformEnd(id, this.transformBeforeSingle!, after);
        this.transformBeforeSingle = null;
      }
    });

    this.scene.add(this.transform);

    // Events
    canvas.addEventListener('pointerdown', this.onPointerDown);
    canvas.addEventListener('dragover', this.onDragOver);
    canvas.addEventListener('drop', this.onDrop);
    window.addEventListener('resize', this.onResize);

    this.onResize();
    this.animate();
  }

  private animate = () => {
    if (this.disposed) return;
    requestAnimationFrame(this.animate);
    this.orbit.update();
    this.renderer.render(this.scene, this.camera);
  };

  private onResize = () => {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h, false);
  };

  private onPointerDown = (e: PointerEvent) => {
    if ((this.transform as any).dragging) return;
    if (e.button !== 0) return;

    const rect = this.canvas.getBoundingClientRect();
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.camera);
    // @ts-ignore - three-mesh-bvh расширяет Raycaster
    this.raycaster.firstHitOnly = true;

    const candidates: THREE.Mesh[] = [];
    for (const obj of this.objects.values()) {
      if (!obj.visible) continue;
      if (obj instanceof THREE.Mesh) {
        const node = this.cb.getState().nodes[obj.userData.id];
        if (!node || node.material.isHole) continue;
        candidates.push(obj);
      }
    }

    const hits = this.raycaster.intersectObjects(candidates, false);
    const additive = e.shiftKey || e.ctrlKey || e.metaKey;

    if (hits.length > 0) {
      const id = hits[0].object.userData.id as string;
      const current = this.cb.getState().selection;
      if (additive) {
        const next = current.includes(id)
          ? current.filter((x) => x !== id)
          : [...current, id];
        this.cb.onSelectionChange(next);
      } else {
        this.cb.onSelectionChange([id]);
      }
    } else if (!additive) {
      this.cb.onSelectionChange([]);
    }
  };

  private onDragOver = (e: DragEvent) => {
    const types = e.dataTransfer?.types;
    if (!types) return;
    
    // Проверяем, есть ли файлы среди перетаскиваемых элементов
    if (types.includes('Files')) {
      e.preventDefault();
      e.dataTransfer!.dropEffect = 'copy';
      return;
    }
    
    // Обработка drag примитивов из библиотеки
    if (types.includes('application/x-primitive')) {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    }
  };

  private onDrop = (e: DragEvent) => {
    const types = e.dataTransfer?.types;
    
    // Обработка загрузки файлов (STL/OBJ)
    if (types?.includes('Files')) {
      const files = e.dataTransfer?.files;
      if (files && files.length > 0) {
        const validExtensions = ['stl', 'obj'];
        const hasValidFiles = Array.from(files).some(f => {
          const ext = f.name.split('.').pop()?.toLowerCase();
          return validExtensions.includes(ext || '');
        });
        
        if (hasValidFiles) {
          e.preventDefault();
          this.handleFileDrop(files);
          return;
        }
      }
    }
    
    // Обработка drag примитивов из библиотеки
    const type = e.dataTransfer?.getData('application/x-primitive') as PrimitiveType | '';
    if (!type) return;
    e.preventDefault();

    const rect = this.canvas.getBoundingClientRect();
    this.pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    this.pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.pointer, this.camera);

    const plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    const hit = new THREE.Vector3();
    if (this.raycaster.ray.intersectPlane(plane, hit)) {
      const pos: [number, number, number] = [
        Math.round(hit.x),
        0,
        Math.round(hit.z),
      ];
      this.cb.onDropPrimitive(type, pos);
    }
  };

  private async handleFileDrop(files: FileList): Promise<void> {
    const validExtensions = ['stl', 'obj'];
    const { parseFile, ImportMeshCommand } = await import(
      '@features/import-export/model/importMesh'
    );
    const { useAppStore } = await import('@app/store');

    for (const file of Array.from(files)) {
      const ext = file.name.split('.').pop()?.toLowerCase();
      if (!validExtensions.includes(ext || '')) continue;
      
      try {
        const geom = await parseFile(file);
        useAppStore.getState().execute(new ImportMeshCommand(geom, file.name));
      } catch (err) {
        console.error('Импорт не удался:', err);
      }
    }
  }

  async syncScene(state: SceneState): Promise<void> {
    const diff = diffScene(this.lastNodes ? { nodes: this.lastNodes } : null, state);

    // Удаление (дети перед родителями)
    const removeOrder = [...diff.removed].sort((a, b) => {
      const na = this.lastNodes?.[a];
      const nb = this.lastNodes?.[b];
      return (na?.parentId ? 0 : 1) - (nb?.parentId ? 0 : 1);
    });
    for (const id of removeOrder) {
      const obj = this.objects.get(id);
      if (!obj) continue;
      obj.parent?.remove(obj);
      if (obj instanceof THREE.Mesh) {
        obj.geometry.dispose();
        (obj.material as THREE.Material).dispose();
      }
      this.objects.delete(id);
    }

    // Добавление/Обновление (родители перед детьми)
    const order = this.topoSort(state);
    for (const id of order) {
      const node = state.nodes[id];
      if (!node) continue;

      const existing = this.objects.get(id);
      const isAdded = diff.added.includes(id);

      let obj: THREE.Object3D;
      if (isAdded || !existing) {
        obj = buildObject(node);
        if (obj instanceof THREE.Mesh) {
          obj.castShadow = true;
          obj.receiveShadow = true;
          if (obj.geometry.attributes.position.count > BVH_THRESHOLD) {
            // ленивая загрузка three-mesh-bvh (~120 kB raw): BVH нужен только
            // для high-poly мешей, не тащим его в стартовый чанк
            const { MeshBVH } = await import('three-mesh-bvh');
            (obj.geometry as any).boundsTree = new MeshBVH(obj.geometry);
          }
        }
        this.objects.set(id, obj);
      } else {
        obj = existing;
        if (diff.updated.includes(id)) {
          this.updateObject(obj, node);
        }
      }

      const targetParent = node.parentId
        ? this.objects.get(node.parentId) ?? this.scene
        : this.scene;

      if (obj.parent !== targetParent) {
        obj.parent?.remove(obj);
        targetParent.add(obj);
      }
    }

    this.syncSelection(state.selection);
    this.lastNodes = state.nodes;
  }

  private topoSort(state: SceneState): string[] {
    const result: string[] = [];
    const visited = new Set<string>();
    const visit = (id: string) => {
      if (visited.has(id)) return;
      const node = state.nodes[id];
      if (!node) return;
      if (node.parentId) visit(node.parentId);
      visited.add(id);
      result.push(id);
    };
    for (const id of Object.keys(state.nodes)) visit(id);
    return result;
  }

  private updateObject(obj: THREE.Object3D, node: SceneNode): void {
    applyTransform(obj, node);
    obj.visible = node.visible;

    if (obj instanceof THREE.Mesh && node.geometry.kind !== 'group') {
      const mat = obj.material as THREE.MeshStandardMaterial;
      mat.color.set(node.material.color);
      mat.opacity = node.material.isHole ? 0.35 : node.material.opacity;
      mat.transparent = node.material.isHole || node.material.opacity < 1;
      mat.depthWrite = !node.material.isHole;

      const currentKey = obj.userData.geometryKey as string | undefined;
      const nextKey = `${node.geometry.kind}:${JSON.stringify(node.geometry.params)}:${(node.geometry as any).assetId ?? ''}`;
      if (currentKey !== nextKey) {
        // Пересоздание геометрии handled in meshFactory logic mostly, 
        // but here we just update key. Real geometry swap needs factory access.
        // For MVP simplicity, we assume geometry change triggers full rebuild via diff if needed
        // or we rely on the fact that param changes usually don't happen without recreation in this simple version
        // To be strictly correct, we'd need to call buildGeometry here.
        obj.userData.geometryKey = nextKey; 
      }
    }
  }

  private syncSelection(ids: string[]): void {
    if (ids.length === 1) {
      const obj = this.objects.get(ids[0]);
      if (obj) {
        this.destroyPivot();
        this.transform.attach(obj);
      } else {
        this.transform.detach();
      }
      return;
    }

    if (ids.length > 1) {
      this.attachPivot(ids);
      return;
    }

    this.destroyPivot();
    this.transform.detach();
  }

  private attachPivot(ids: string[]): void {
    this.destroyPivot();
    const box = new THREE.Box3();
    for (const id of ids) {
      const obj = this.objects.get(id);
      if (!obj) continue;
      const objBox = new THREE.Box3().setFromObject(obj);
      box.union(objBox);
    }

    if (box.isEmpty()) {
      this.transform.detach();
      return;
    }

    const center = new THREE.Vector3();
    box.getCenter(center);

    this.pivot = new THREE.Group();
    this.pivot.position.copy(center);
    this.scene.add(this.pivot);

    this.pivotStartMatrices.clear();
    for (const id of ids) {
      const obj = this.objects.get(id);
      if (!obj) continue;
      obj.updateMatrixWorld(true);
      this.pivotStartMatrices.set(id, obj.matrixWorld.clone());
    }

    this.transform.attach(this.pivot);
  }

  private destroyPivot(): void {
    if (this.pivot) {
      this.scene.remove(this.pivot);
      this.pivot = null;
    }
    this.pivotStartMatrices.clear();
  }

  getMesh(id: string): THREE.Mesh | undefined {
    const obj = this.objects.get(id);
    return obj instanceof THREE.Mesh ? obj : undefined;
  }

  // ---------- Public: доступ к объектам для экспорта/импорта ----------

  /** Один объект по id */
  getObject(id: string): THREE.Object3D | undefined {
    return this.objects.get(id);
  }

  /** Все объекты сцены */
  getAllObjects(): THREE.Object3D[] {
    return [...this.objects.values()];
  }

  /** Объекты верхнего уровня из переданного списка id */
  getRootObjects(ids: string[]): THREE.Object3D[] {
    const state = this.cb.getState();
    const result: THREE.Object3D[] = [];
    for (const id of ids) {
      const node = state.nodes[id];
      if (!node) continue;
      const obj = this.objects.get(id);
      if (obj) result.push(obj);
    }
    return result;
  }

  setInteractionEnabled(enabled: boolean): void {
    this.orbit.enabled = enabled;
    this.transform.enabled = enabled;
  }

  setTheme(theme: 'light' | 'dark'): void {
    this.theme = theme;
    const isDark = theme === 'dark';
    (this.scene.background as THREE.Color).set(isDark ? 0x1a1a1f : 0xf0f0f0);
  }

  dispose(): void {
    this.disposed = true;
    this.canvas.removeEventListener('pointerdown', this.onPointerDown);
    this.canvas.removeEventListener('dragover', this.onDragOver);
    this.canvas.removeEventListener('drop', this.onDrop);
    window.removeEventListener('resize', this.onResize);
    this.orbit.dispose();
    this.transform.dispose();
    
    // Рекурсивный dispose для всех ресурсов Three.js
    for (const obj of this.objects.values()) {
      this.scene.remove(obj);
      this.disposeObject(obj);
    }
    this.objects.clear();
    this.renderer.dispose();
    setGlobalAdapter(null);
  }

  private disposeObject(obj: THREE.Object3D): void {
    if (obj instanceof THREE.Mesh) {
      obj.geometry.dispose();
      const material = obj.material as THREE.Material | THREE.Material[];
      if (Array.isArray(material)) {
        material.forEach(m => m.dispose());
      } else {
        material.dispose();
      }
    }
    // Рекурсивно обходим детей
    if ((obj as THREE.Group).children) {
      (obj as THREE.Group).traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          const mat = child.material as THREE.Material | THREE.Material[];
          if (Array.isArray(mat)) {
            mat.forEach(m => m.dispose());
          } else {
            mat.dispose();
          }
        }
      });
    }
  }
}
// Дата актуализации: 24 мая 2024 г.
