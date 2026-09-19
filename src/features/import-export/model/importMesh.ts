import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { v4 as uuid } from 'uuid';
import type { Command } from '@features/undo-redo/commands/types';
import type { SceneState, SceneNode } from '@entities/scene/types';
import { registerCustomGeometry } from '@shared/engine/csg/geometryCache';

/**
 * Парсит File (STL или OBJ) в BufferGeometry.
 * Автоматически центрирует модель по bounding box.
 */
export async function parseFile(file: File): Promise<THREE.BufferGeometry> {
  // Валидация размера файла (макс 50MB)
  if (file.size > 50 * 1024 * 1024) {
    throw new Error('Файл слишком большой (макс. 50 MB). Разбейте модель на части.');
  }

  const ext = file.name.split('.').pop()?.toLowerCase();
  const buffer = await file.arrayBuffer();

  let geometry: THREE.BufferGeometry;

  if (ext === 'stl') {
    const loader = new STLLoader();
    geometry = loader.parse(buffer);
  } else if (ext === 'obj') {
    const loader = new OBJLoader();
    const text = new TextDecoder().decode(buffer);
    const group = loader.parse(text);
    geometry = mergeGroupGeometry(group);
  } else {
    throw new Error(`Неподдерживаемый формат: .${ext}`);
  }

  // Центрируем
  geometry.computeBoundingBox();
  const box = geometry.boundingBox!;
  const center = new THREE.Vector3();
  box.getCenter(center);
  geometry.translate(-center.x, -center.y, -center.z);
  geometry.computeVertexNormals();
  geometry.computeBoundingSphere();

  return geometry;
}

function mergeGroupGeometry(group: THREE.Group): THREE.BufferGeometry {
  const geometries: THREE.BufferGeometry[] = [];
  group.updateMatrixWorld(true);

  group.traverse((obj) => {
    if (obj instanceof THREE.Mesh) {
      const g = obj.geometry.clone();
      g.applyMatrix4(obj.matrixWorld);
      if (!g.getAttribute('normal')) g.computeVertexNormals();

      // Убираем лишние атрибуты
      for (const name of Object.keys(g.attributes)) {
        if (name !== 'position' && name !== 'normal') g.deleteAttribute(name);
      }
      geometries.push(g);
    }
  });

  if (geometries.length === 0) throw new Error('OBJ без мешей');
  if (geometries.length === 1) return geometries[0];

  return mergeBufferGeometries(geometries);
}

function mergeBufferGeometries(geoms: THREE.BufferGeometry[]): THREE.BufferGeometry {
  let totalVerts = 0;
  let totalIndices = 0;
  for (const g of geoms) {
    totalVerts += g.getAttribute('position').count;
    const idx = g.getIndex();
    totalIndices += idx ? idx.count : g.getAttribute('position').count;
  }

  const positions = new Float32Array(totalVerts * 3);
  const normals = new Float32Array(totalVerts * 3);
  const indices = new Uint32Array(totalIndices);

  let vOff = 0;
  let iOff = 0;
  for (const g of geoms) {
    const pos = g.getAttribute('position').array as Float32Array;
    const nor = g.getAttribute('normal').array as Float32Array;
    positions.set(pos, vOff * 3);
    normals.set(nor, vOff * 3);

    const idx = g.getIndex();
    if (idx) {
      const arr = idx.array;
      for (let i = 0; i < arr.length; i++) indices[iOff + i] = arr[i] + vOff;
      iOff += arr.length;
    } else {
      const count = g.getAttribute('position').count;
      for (let i = 0; i < count; i++) indices[iOff + i] = i + vOff;
      iOff += count;
    }
    vOff += g.getAttribute('position').count;
  }

  const merged = new THREE.BufferGeometry();
  merged.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  merged.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
  merged.setIndex(new THREE.BufferAttribute(indices, 1));
  merged.computeBoundingBox();
  merged.computeBoundingSphere();
  return merged;
}

/**
 * Команда импорта: создаёт SceneNode с kind='custom'.
 */
export class ImportMeshCommand implements Command {
  readonly id = uuid();
  readonly timestamp = Date.now();
  readonly label = 'Импорт модели';

  private nodeId = uuid();
  private node: SceneNode;

  constructor(geometry: THREE.BufferGeometry, name: string) {
    geometry.computeBoundingBox();
    const box = geometry.boundingBox!;
    const center = new THREE.Vector3();
    box.getCenter(center);

    const assetId = uuid();
    registerCustomGeometry(assetId, geometry);

    const now = Date.now();
    this.node = {
      id: this.nodeId,
      type: 'mesh',
      name,
      transform: {
        position: [center.x, center.y, center.z],
        rotation: [0, 0, 0],
        scale: [1, 1, 1],
      },
      geometry: { kind: 'custom', params: {}, assetId },
      material: { color: '#8a8a8a', opacity: 1, isHole: false },
      booleanOp: null,
      parentId: null,
      childrenIds: [],
      visible: true,
      locked: false,
      createdAt: now,
      updatedAt: now,
    };
  }

  apply(state: SceneState): SceneState {
    return {
      ...state,
      nodes: { ...state.nodes, [this.nodeId]: this.node },
      rootIds: [...state.rootIds, this.nodeId],
      selection: [this.nodeId],
    };
  }

  revert(state: SceneState): SceneState {
    const { [this.nodeId]: _, ...rest } = state.nodes;
    return {
      ...state,
      nodes: rest,
      rootIds: state.rootIds.filter((id) => id !== this.nodeId),
      selection: state.selection.filter((id) => id !== this.nodeId),
    };
  }
}
