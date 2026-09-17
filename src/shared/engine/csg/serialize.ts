import * as THREE from 'three';

export interface SerializedGeometry {
  positions: Float32Array;
  normals: Float32Array;
  index: Uint32Array | null;
  matrix: number[];
}

export function serializeMesh(mesh: THREE.Mesh): SerializedGeometry {
  const geom = mesh.geometry;
  const positions = geom.getAttribute('position').array as Float32Array;
  const normals = geom.getAttribute('normal')?.array as Float32Array ?? new Float32Array(positions.length);
  const indexAttr = geom.getIndex();
  const index = indexAttr ? (indexAttr.array as Uint32Array) : null;

  mesh.updateMatrixWorld(true);
  const matrix = mesh.matrixWorld.toArray();

  return { positions, normals, index, matrix };
}

export function deserializeGeometry(data: SerializedGeometry): THREE.BufferGeometry {
  const geom = new THREE.BufferGeometry();
  geom.setAttribute('position', new THREE.BufferAttribute(data.positions, 3));
  geom.setAttribute('normal', new THREE.BufferAttribute(data.normals, 3));
  if (data.index) geom.setIndex(new THREE.BufferAttribute(data.index, 1));
  geom.computeBoundingBox();
  geom.computeBoundingSphere();
  return geom;
}

export function collectTransferables(data: SerializedGeometry[]): Transferable[] {
  const list: Transferable[] = [];
  for (const g of data) {
    list.push(g.positions.buffer);
    list.push(g.normals.buffer);
    if (g.index) list.push(g.index.buffer);
  }
  return list;
}
// Дата актуализации: 24 мая 2024 г.
