/**
 * Тесты сериализации запроса/ответа Worker + geometryCache.
 */
import { describe, it, expect, vi } from 'vitest';
import * as THREE from 'three';
import { serializeMesh, deserializeGeometry, collectTransferables } from './serialize';
import { registerCustomGeometry, getCustomGeometry, disposeCustomGeometry, clearCustomGeometryCache } from './geometryCache';

describe('serializeMesh', () => {
  it('извлекает positions/normals/index и world-матрицу', () => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2));
    mesh.position.set(5, 0, 0);
    mesh.updateMatrixWorld(true);
    const s = serializeMesh(mesh);
    expect(s.positions).toBeInstanceOf(Float32Array);
    expect(s.positions.length).toBe(24 * 3); // box: 24 вершины
    expect(s.normals.length).toBe(24 * 3);
    expect(s.index?.length).toBe(36); // box: 12 треугольников
    expect(s.matrix).toHaveLength(16);
    // translation в колонке 12..14
    expect(s.matrix[12]).toBe(5);
  });

  it('без normals → нулевой массив той же длины', () => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(new Float32Array([0, 0, 0, 1, 0, 0]), 3));
    const mesh = new THREE.Mesh(geom);
    const s = serializeMesh(mesh);
    expect(s.normals).toHaveLength(6);
    expect(s.normals.every((n) => n === 0)).toBe(true);
  });
});

describe('deserializeGeometry', () => {
  it('round-trip serialize→deserialize сохраняет атрибуты', () => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1));
    const s = serializeMesh(mesh);
    const g = deserializeGeometry({ ...s, positions: new Float32Array(s.positions), normals: new Float32Array(s.normals), index: s.index ? new Uint32Array(s.index) : null });
    expect(g.getAttribute('position').count).toBe(24);
    expect(g.boundingBox).not.toBeNull();
    expect(g.boundingSphere).not.toBeNull();
  });

  it('index:null → геометрия без индекса', () => {
    const g = deserializeGeometry({
      positions: new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0]),
      normals: new Float32Array(9),
      index: null,
      matrix: new Array(16).fill(0),
    });
    expect(g.getIndex()).toBeNull();
    expect(g.getAttribute('position').count).toBe(3);
  });
});

describe('collectTransferables', () => {
  it('собирает буферы positions/normals (+index если есть)', () => {
    const withIndex = { positions: new Float32Array(3), normals: new Float32Array(3), index: new Uint32Array(3), matrix: [] };
    const noIndex = { positions: new Float32Array(3), normals: new Float32Array(3), index: null, matrix: [] };
    expect(collectTransferables([withIndex])).toHaveLength(3);
    expect(collectTransferables([noIndex])).toHaveLength(2);
    expect(collectTransferables([withIndex, noIndex])).toHaveLength(5);
  });
});

describe('geometryCache', () => {
  it('register/get/dispose/clear lifecycle', () => {
    const g = new THREE.BoxGeometry(1, 1, 1);
    let disposed = false;
    const origDispose = g.dispose.bind(g);
    g.dispose = () => { disposed = true; origDispose(); };
    registerCustomGeometry('a', g);
    expect(getCustomGeometry('a')).toBe(g);
    disposeCustomGeometry('a');
    expect(disposed).toBe(true);
    expect(getCustomGeometry('a')).toBeUndefined();
    // dispose несуществующего — no-op
    expect(() => disposeCustomGeometry('missing')).not.toThrow();
    registerCustomGeometry('b', new THREE.BoxGeometry());
    clearCustomGeometryCache();
    expect(getCustomGeometry('b')).toBeUndefined();
  });
});
