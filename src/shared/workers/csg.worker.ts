/// <reference lib="webworker" />
import * as THREE from 'three';
import { Brush, Evaluator, ADDITION, SUBTRACTION, INTERSECTION } from 'three-bvh-csg';
import type { SerializedGeometry } from '@shared/engine/csg/serialize';
import { deserializeGeometry, serializeMesh } from '@shared/engine/csg/serialize';

type CsgOp = 'union' | 'subtract' | 'intersect';

interface CsgRequest {
  id: string;
  op: CsgOp;
  brushes: SerializedGeometry[];
}

interface CsgResponse {
  id: string;
  ok: true;
  geometry: SerializedGeometry;
}

interface CsgError {
  id: string;
  ok: false;
  error: string;
}

type CsgMessage = CsgResponse | CsgError;

const OP_MAP = {
  union: ADDITION,
  subtract: SUBTRACTION,
  intersect: INTERSECTION,
} as const;

self.onmessage = (e: MessageEvent<CsgRequest>) => {
  const { id, op, brushes } = e.data;
  try {
    if (brushes.length < 2) throw new Error('Need at least 2 brushes');

    const evaluator = new Evaluator();
    evaluator.attributes = ['position', 'normal'];

    let result: Brush | null = null;

    for (const data of brushes) {
      const geom = deserializeGeometry(data);
      const brush = new Brush(geom);
      brush.applyMatrix4(new THREE.Matrix4().fromArray(data.matrix));
      brush.updateMatrixWorld();

      if (result === null) {
        result = brush;
      } else {
        result = evaluator.evaluate(result, brush, OP_MAP[op]);
      }
    }

    if (!result) throw new Error('CSG produced no result');

    const resultGeom = result.geometry.clone();
    resultGeom.computeVertexNormals();
    resultGeom.computeBoundingBox();
    resultGeom.computeBoundingSphere();

    const outMesh = new THREE.Mesh(resultGeom);
    outMesh.updateMatrixWorld(true);
    const serialized = serializeMesh(outMesh);

    const transferables: Transferable[] = [
      serialized.positions.buffer,
      serialized.normals.buffer,
    ];
    if (serialized.index) transferables.push(serialized.index.buffer);

    (self as DedicatedWorkerGlobalScope).postMessage(
      { id, ok: true, geometry: serialized } as CsgResponse,
      transferables
    );
  } catch (err) {
    (self as DedicatedWorkerGlobalScope).postMessage({
      id,
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    } as CsgError);
  }
};

export {};
// Дата актуализации: 24 мая 2024 г.
