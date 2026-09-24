/**
 * Тесты executeBooleanOp — оркестрация Worker-ветки:
 * индикатор загрузки (sceneRevision), ошибки, stale-защита, применение команды.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as THREE from 'three';

vi.mock('@shared/engine/csg/csgClient', () => ({
  csgClient: { evaluate: vi.fn() },
}));

import { useAppStore } from '@app/store';
import { csgClient } from '@shared/engine/csg/csgClient';
import { executeBooleanOp, setEngineAdapter } from './executeBooleanOp';

const brush = () => ({
  positions: new Float32Array([0, 0, 0, 1, 0, 0, 1, 1, 0]),
  normals: new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1]),
  index: new Uint32Array([0, 1, 2]),
  matrix: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
});

function seedScene() {
  const geomA = new THREE.BoxGeometry(2, 2, 2);
  const geomB = new THREE.BoxGeometry(2, 2, 2).translate(1, 0, 0);
  const meshA = new THREE.Mesh(geomA);
  const meshB = new THREE.Mesh(geomB);
  const adapter = { getMesh: (id: string) => (id === 'a' ? meshA : id === 'b' ? meshB : undefined) };
  setEngineAdapter(adapter as never);

  const t = Date.now();
  const node = (id: string) => ({
    id, type: 'box' as const, name: id,
    transform: { position: [0, 0, 0] as [number, number, number], rotation: [0, 0, 0] as [number, number, number], scale: [1, 1, 1] as [number, number, number] },
    geometry: { kind: 'box' as const, params: {}, assetId: undefined },
    material: { color: '#fff', opacity: 1, isHole: false },
    booleanOp: null, parentId: null, childrenIds: [], visible: true, locked: false,
    createdAt: t, updatedAt: t,
  });
  useAppStore.setState({
    nodes: { a: node('a'), b: node('b') },
    rootIds: ['a', 'b'],
    selection: ['a', 'b'],
    sceneRevision: 0,
  } as never);
  return { t };
}

beforeEach(() => {
  vi.clearAllMocks();
});

describe('executeBooleanOp — guard-ошибки (без обращения к worker)', () => {
  it('без адаптера → error "EngineAdapter not initialized"', async () => {
    setEngineAdapter(null);
    const r = await executeBooleanOp('union', ['a', 'b']);
    expect(r.status).toBe('error');
    expect(csgClient.evaluate).not.toHaveBeenCalled();
  });

  it('< 2 объектов → error', async () => {
    seedScene();
    const r = await executeBooleanOp('union', ['a']);
    expect(r.status).toBe('error');
    expect(r.reason).toMatch(/минимум 2/);
  });

  it('несуществующий узел → error', async () => {
    seedScene();
    const r = await executeBooleanOp('union', ['a', 'zzz']);
    expect(r.status).toBe('error');
    expect(r.reason).toMatch(/не найден/);
  });

  it('меньше двух мешей в адаптере → error', async () => {
    seedScene();
    // узлы a и b есть в стейте, но mesh для b отсутствует в адаптере → filter даёт 1 brush
    setEngineAdapter({ getMesh: (id: string) => (id === 'a' ? new THREE.Mesh(new THREE.BoxGeometry()) : undefined) } as never);
    const r = await executeBooleanOp('union', ['a', 'b']);
    expect(r.status).toBe('error');
    expect(r.reason).toMatch(/двух мешей/);
    expect(csgClient.evaluate).not.toHaveBeenCalled();
  });
});

describe('executeBooleanOp — Worker-ветка', () => {
  it('успех: postMessage→ответ, команда применена, revision вырос (индикатор гаснет)', async () => {
    seedScene();
    (csgClient.evaluate as ReturnType<typeof vi.fn>).mockResolvedValue(brush());
    const revBefore = useAppStore.getState().sceneRevision;
    const r = await executeBooleanOp('union', ['a', 'b']);
    expect(r.status).toBe('applied');
    expect(csgClient.evaluate).toHaveBeenCalledTimes(1);
    const [op, brushes] = (csgClient.evaluate as ReturnType<typeof vi.fn>).mock.calls[0];
    expect(op).toBe('union');
    expect(brushes).toHaveLength(2);
    const s = useAppStore.getState();
    // результат: 2 источника заменены 1 узлом
    expect(s.rootIds).toHaveLength(1);
    expect(s.selection).toEqual(s.rootIds);
    // индикатор загрузки: revision меняется при старте и по завершении — финал ≠ начало
    expect(s.sceneRevision).not.toBe(revBefore);
    // undo работает: revert возвращает исходные узлы
    s.undo();
    const afterUndo = useAppStore.getState();
    expect(Object.keys(afterUndo.nodes).sort()).toEqual(['a', 'b']);
    expect(afterUndo.rootIds.sort()).toEqual(['a', 'b']);
  });

  it('ошибка worker → status error с сообщением, состояние не тронуто', async () => {
    seedScene();
    (csgClient.evaluate as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('Worker error: boom'));
    const snapshot = useAppStore.getState().rootIds.slice();
    const r = await executeBooleanOp('subtract', ['a', 'b']);
    expect(r.status).toBe('error');
    expect(r.reason).toBe('Worker error: boom');
    expect(useAppStore.getState().rootIds).toEqual(snapshot);
  });

  it('stale: сцена изменилась во время расчёта (revision) → не применяем', async () => {
    seedScene();
    (csgClient.evaluate as ReturnType<typeof vi.fn>).mockImplementation(async () => {
      useAppStore.setState({ sceneRevision: useAppStore.getState().sceneRevision + 5 } as never);
      return brush();
    });
    const r = await executeBooleanOp('union', ['a', 'b']);
    expect(r.status).toBe('stale');
    expect(r.reason).toMatch(/изменилась/);
    expect(useAppStore.getState().rootIds).toEqual(['a', 'b']);
  });

  it('stale: узл удалили во время расчёта → не применяем', async () => {
    seedScene();
    (csgClient.evaluate as ReturnType<typeof vi.fn>).mockImplementation(async () => {
      const n = { ...useAppStore.getState().nodes };
      delete n.b;
      useAppStore.setState({ nodes: n } as never);
      return brush();
    });
    const r = await executeBooleanOp('union', ['a', 'b']);
    expect(r.status).toBe('stale');
    expect(r.reason).toMatch(/удалён|изменён/);
  });
});
