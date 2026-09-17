import * as THREE from 'three';
import { useAppStore } from '@app/store';
import { csgClient } from '@shared/engine/csg/csgClient';
import { serializeMesh, deserializeGeometry } from '@shared/engine/csg/serialize';
import { BooleanOpCommand } from './BooleanOpCommand';

interface EngineAdapterRef {
  getMesh(id: string): THREE.Mesh | undefined;
}

let _adapter: EngineAdapterRef | null = null;
export function setEngineAdapter(a: EngineAdapterRef | null): void { _adapter = a; }
export function getEngineAdapter(): EngineAdapterRef | null { return _adapter; }

export interface ExecuteBooleanResult {
  status: 'applied' | 'stale' | 'error';
  reason?: string;
}

export async function executeBooleanOp(
  op: 'union' | 'subtract' | 'intersect',
  nodeIds: string[]
): Promise<ExecuteBooleanResult> {
  const store = useAppStore.getState();
  const adapter = _adapter;

  if (!adapter) return { status: 'error', reason: 'EngineAdapter not initialized' };
  if (nodeIds.length < 2) return { status: 'error', reason: 'Выберите минимум 2 объекта' };

  const revisionAtStart = store.sceneRevision;
  const fingerprints = new Map<string, number>();
  for (const id of nodeIds) {
    const n = store.nodes[id];
    if (!n) return { status: 'error', reason: `Узел ${id} не найден` };
    fingerprints.set(id, n.updatedAt);
  }

  const brushes = nodeIds
    .map((id) => adapter.getMesh(id))
    .filter((m): m is THREE.Mesh => !!m)
    .map(serializeMesh);

  if (brushes.length < 2) {
    return { status: 'error', reason: 'Меньше двух мешей найдено' };
  }

  let serialized;
  try {
    serialized = await csgClient.evaluate(op, brushes);
  } catch (e) {
    return { status: 'error', reason: e instanceof Error ? e.message : 'CSG failed' };
  }

  const now = useAppStore.getState();

  if (now.sceneRevision !== revisionAtStart) {
    return { status: 'stale', reason: 'Сцена изменилась во время расчёта' };
  }
  for (const [id, ut] of fingerprints) {
    const n = now.nodes[id];
    if (!n) return { status: 'stale', reason: `Узел ${id} удалён` };
    if (n.updatedAt !== ut) return { status: 'stale', reason: `Узел ${id} изменён` };
  }

  const geometry = deserializeGeometry(serialized);
  const cmd = new BooleanOpCommand(nodeIds, op, geometry);
  now.execute(cmd);

  return { status: 'applied' };
}
// Дата актуализации: 24 мая 2024 г.
