import * as THREE from 'three';
import { OBJExporter } from 'three/examples/jsm/exporters/OBJExporter.js';
import { getEngineAdapter } from '@shared/engine/engineRef';
import { useAppStore } from '@app/store';

interface ExportOptions {
  selectionOnly?: boolean;
}

/**
 * Экспорт сцены (или выделенного) в OBJ.
 * Возвращает Blob, готовый к скачиванию.
 */
export async function exportOBJ(opts: ExportOptions = {}): Promise<Blob> {
  const { selectionOnly = false } = opts;
  const adapter = getEngineAdapter();
  if (!adapter) throw new Error('EngineAdapter не инициализирован');

  const state = useAppStore.getState();
  const targetIds =
    selectionOnly && state.selection.length > 0
      ? state.selection
      : state.rootIds;

  const root = new THREE.Group();

  for (const id of targetIds) {
    const obj = adapter.getObject(id);
    if (!obj || !obj.visible) continue;

    obj.updateMatrixWorld(true);
    const clone = obj.clone(true);

    // Переносим мировую матрицу на клон, чтобы убрать зависимость от иерархии
    clone.matrix.copy(obj.matrixWorld);
    clone.matrix.decompose(clone.position, clone.quaternion, clone.scale);
    // Сбрасываем матрицу клона, чтобы three.js вычислил её из position/quaternion/scale
    clone.matrixAutoUpdate = true;
    clone.updateMatrixWorld(true);

    root.add(clone);
  }

  root.updateMatrixWorld(true);

  const exporter = new OBJExporter();
  const text = exporter.parse(root);

  return new Blob([text], { type: 'model/obj' });
}
