import * as THREE from 'three';
import { STLExporter } from 'three/examples/jsm/exporters/STLExporter.js';
import { getEngineAdapter } from '@shared/engine/engineRef';
import { applyHolesToSolids } from '@features/group/model/applyHoles';
import { useAppStore } from '@app/store';

interface ExportOptions {
  binary?: boolean;
  applyHoles?: boolean;
  selectionOnly?: boolean;
}

/**
 * Экспорт сцены (или выделенного) в STL.
 * Возвращает Blob, готовый к скачиванию.
 */
export async function exportSTL(opts: ExportOptions = {}): Promise<Blob | null> {
  const { binary = true, applyHoles = true, selectionOnly = false } = opts;
  const adapter = getEngineAdapter();
  if (!adapter) {
    console.warn('Движок ещё не готов. Повторите попытку.');
    return null;
  }

  const state = useAppStore.getState();
  const targetIds =
    selectionOnly && state.selection.length > 0
      ? state.selection
      : state.rootIds;

  // Разделяем на solid и hole
  const solidIds: string[] = [];
  const holeIds: string[] = [];
  for (const id of targetIds) {
    const node = state.nodes[id];
    if (!node || !node.visible) continue;
    if (node.type === 'group') {
      // Дети группы обрабатываются рекурсивно ниже
      collectChildren(node.id, state.nodes, solidIds, holeIds);
      continue;
    }
    if (node.material.isHole) holeIds.push(id);
    else solidIds.push(id);
  }

  // Собираем меши для экспорта
  const meshes: THREE.Object3D[] = [];
  const tempGeometries: THREE.BufferGeometry[] = [];

  if (applyHoles && holeIds.length > 0 && solidIds.length > 0) {
    // Применяем holes: вычитаем все hole-объекты из каждого solid
    const patched = await applyHolesToSolids(solidIds, holeIds);
    for (const id of solidIds) {
      const original = adapter.getObject(id);
      if (!(original instanceof THREE.Mesh)) continue;
      const geom = patched.get(id) ?? original.geometry;
      if (patched.has(id)) tempGeometries.push(geom);

      const clone = original.clone() as THREE.Mesh;
      clone.geometry = geom;
      // Мировая матрица
      original.updateMatrixWorld(true);
      clone.matrix.copy(original.matrixWorld);
      clone.matrix.decompose(clone.position, clone.quaternion, clone.scale);
      meshes.push(clone);
    }
  } else {
    for (const id of solidIds) {
      const obj = adapter.getObject(id);
      if (!obj) continue;
      obj.updateMatrixWorld(true);
      const clone = obj.clone(true);
      // Переносим мировую матрицу на клон
      clone.matrix.copy(obj.matrixWorld);
      clone.matrix.decompose(clone.position, clone.quaternion, clone.scale);
      meshes.push(clone);
    }
  }

  // Временная сцена для экспорта
  const root = new THREE.Group();
  for (const m of meshes) root.add(m);
  root.updateMatrixWorld(true);

  const exporter = new STLExporter();
  const result = exporter.parse(root, { binary });

  // Очистка
  for (const g of tempGeometries) g.dispose();

  // Возвращаем Blob
  if (typeof result === 'string') {
    return new Blob([result], { type: 'model/stl' });
  }
  // Бинарный STL — DataView
  return new Blob([result as unknown as ArrayBuffer], { type: 'model/stl' });
}

function collectChildren(
  groupId: string,
  nodes: Record<string, any>,
  solidIds: string[],
  holeIds: string[]
): void {
  const group = nodes[groupId];
  if (!group) return;
  for (const cid of group.childrenIds) {
    const child = nodes[cid];
    if (!child || !child.visible) continue;
    if (child.type === 'group') {
      collectChildren(cid, nodes, solidIds, holeIds);
    } else if (child.material.isHole) {
      holeIds.push(cid);
    } else {
      solidIds.push(cid);
    }
  }
}
