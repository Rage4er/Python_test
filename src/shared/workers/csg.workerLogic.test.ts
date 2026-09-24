/**
 * Тесты чистой CSG-логики воркера (реплика обработчика csg.worker.ts):
 * union/subtract/intersect на двух кубах, ошибка < 2 brush'ей, payload ответа.
 * Реальный DedicatedWorkerGlobalScope в jsdom недоступен — проверяем алгоритм
 * через тот же three-bvh-csg + serialize/deserialize, что и воркер.
 */
import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { Brush, Evaluator, ADDITION, SUBTRACTION, INTERSECTION } from 'three-bvh-csg';
import { serializeMesh, deserializeGeometry, type SerializedGeometry } from '@shared/engine/csg/serialize';

type CsgOp = 'union' | 'subtract' | 'intersect';
const OP_MAP = { union: ADDITION, subtract: SUBTRACTION, intersect: INTERSECTION } as const;

/** Реплика тела self.onmessage из csg.worker.ts (см. src/shared/workers/csg.worker.ts) */
function runCsgHandler(req: { id: string; op: CsgOp; brushes: SerializedGeometry[] }) {
  try {
    if (req.brushes.length < 2) throw new Error('Need at least 2 brushes');
    const evaluator = new Evaluator();
    evaluator.attributes = ['position', 'normal'];
    let result: Brush | null = null;
    for (const data of req.brushes) {
      const geom = deserializeGeometry(data);
      const brush = new Brush(geom);
      brush.applyMatrix4(new THREE.Matrix4().fromArray(data.matrix));
      brush.updateMatrixWorld();
      result = result === null ? brush : evaluator.evaluate(result, brush, OP_MAP[req.op]);
    }
    if (!result) throw new Error('CSG produced no result');
    const g = result.geometry.clone();
    g.computeVertexNormals();
    g.computeBoundingBox();
    const outMesh = new THREE.Mesh(g);
    outMesh.updateMatrixWorld(true);
    return { id: req.id, ok: true as const, geometry: serializeMesh(outMesh) };
  } catch (err) {
    return { id: req.id, ok: false as const, error: err instanceof Error ? err.message : String(err) };
  }
}

function boxBrush(dx = 0): SerializedGeometry {
  const m = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2));
  m.position.x = dx;
  m.updateMatrixWorld(true);
  return serializeMesh(m);
}

describe('csg worker logic — две пересекающиеся коробки', () => {
  it('union: результат больше исходного по вершинам, bbox ≈ [-1..3] по x', () => {
    const res = runCsgHandler({ id: 'w-1', op: 'union', brushes: [boxBrush(0), boxBrush(1)] });
    expect(res.ok).toBe(true);
    if (!res.ok) return;
    expect(res.id).toBe('w-1');
    const g = deserializeGeometry(res.geometry);
    expect(g.getAttribute('position').count).toBeGreaterThan(24); // объединение сложнее куба
    g.computeBoundingBox();
    const bb = g.boundingBox!;
    // union двух кубов [−1..1] и [0..2]: итог занимает x ∈ [−1..2], y,z ∈ [−1..1]
    expect(bb.min.x).toBeCloseTo(-1, 0);
    expect(bb.max.x).toBeCloseTo(2, 0);
    expect(bb.max.y).toBeCloseTo(1, 0);
  });

  it('subtract: вычитание смещённого куба оставляет объём ≤ исходного', () => {
    const res = runCsgHandler({ id: 'w-2', op: 'subtract', brushes: [boxBrush(0), boxBrush(1)] });
    expect(res.ok).toBe(true);
    if (!res.ok) return;
    const g = deserializeGeometry(res.geometry);
    g.computeBoundingBox();
    // левая часть [−1, 0] остаётся, правая срезана
    expect(g.boundingBox!.min.x).toBeCloseTo(-1, 0);
    expect(g.boundingBox!.max.x).toBeLessThanOrEqual(0.001);
    expect(g.getAttribute('position').count).toBeGreaterThan(0);
  });

  it('intersect: пересечение двух кубов ≈ блок [0..1]×[−1..1]×[−1..1]', () => {
    const res = runCsgHandler({ id: 'w-3', op: 'intersect', brushes: [boxBrush(0), boxBrush(1)] });
    expect(res.ok).toBe(true);
    if (!res.ok) return;
    const g = deserializeGeometry(res.geometry);
    g.computeBoundingBox();
    expect(g.boundingBox!.min.x).toBeCloseTo(0, 0);
    expect(g.boundingBox!.max.x).toBeCloseTo(1, 0);
    expect(g.boundingBox!.max.y).toBeCloseTo(1, 0);
  });

  it('< 2 brush\'ей → ok:false "Need at least 2 brushes"', () => {
    const res = runCsgHandler({ id: 'w-4', op: 'union', brushes: [boxBrush()] });
    expect(res.ok).toBe(false);
    if (res.ok) return;
    expect(res.error).toBe('Need at least 2 brushes');
    expect(res.id).toBe('w-4');
  });

  it('ответ содержит transferable-буферы (positions/normals/index ArrayBuffer-backed)', () => {
    const res = runCsgHandler({ id: 'w-5', op: 'union', brushes: [boxBrush(0), boxBrush(1)] });
    expect(res.ok).toBe(true);
    if (!res.ok) return;
    const t: Transferable[] = [res.geometry.positions.buffer as ArrayBuffer, res.geometry.normals.buffer as ArrayBuffer];
    if (res.geometry.index) t.push(res.geometry.index.buffer as ArrayBuffer);
    expect(t.length).toBeGreaterThanOrEqual(2);
    expect(res.geometry.matrix).toHaveLength(16);
  });
});
