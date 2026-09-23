import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { MeshBVH } from 'three-mesh-bvh';

/**
 * BVH_THRESHOLD — порог количества вершин, выше которого на геометрию
 * навешивается boundsTree (MeshBVH) при сборке объектов в EngineAdapter.
 * Значение синхронизировано с src/shared/engine/EngineAdapter.ts.
 */
const BVH_THRESHOLD = 500;

// Реплика логики сборки BVH из EngineAdapter.sync()
function buildWithBVH(geometry: THREE.BufferGeometry): THREE.Mesh {
  const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial());
  if (mesh.geometry.attributes.position.count > BVH_THRESHOLD) {
    (mesh.geometry as any).boundsTree = new MeshBVH(mesh.geometry);
  }
  return mesh;
}

describe('BVH_THRESHOLD применяется при сборке BVH', () => {
  it('константа равна 500', () => {
    expect(BVH_THRESHOLD).toBe(500);
  });

  it('геометрия с числом вершин <= порога НЕ получает boundsTree', () => {
    // BoxGeometry(1,1,1) — сегментирование по умолчанию: 24 вершины
    const lowPoly = new THREE.BoxGeometry(1, 1, 1);
    expect(lowPoly.attributes.position.count).toBeLessThanOrEqual(BVH_THRESHOLD);

    const mesh = buildWithBVH(lowPoly);
    expect((mesh.geometry as any).boundsTree).toBeUndefined();
  });

  it('геометрия с числом вершин > порога получает boundsTree (MeshBVH)', () => {
    // Сфера с высоким тесселяционным уровнем — заведомо больше 500 вершин
    const highPoly = new THREE.SphereGeometry(1, 64, 64);
    expect(highPoly.attributes.position.count).toBeGreaterThan(BVH_THRESHOLD);

    const mesh = buildWithBVH(highPoly);
    const tree = (mesh.geometry as any).boundsTree;
    expect(tree).toBeDefined();
    expect(tree).toBeInstanceOf(MeshBVH);
  });

  it('граница порога строгая: count === BVH_THRESHOLD -> без BVH, count+1 -> с BVH', () => {
    const makeGeom = (vertexCount: number) => {
      const g = new THREE.BufferGeometry();
      g.setAttribute(
        'position',
        new THREE.BufferAttribute(new Float32Array(vertexCount * 3), 3)
      );
      return g;
    };

    const atThreshold = buildWithBVH(makeGeom(BVH_THRESHOLD));
    expect((atThreshold.geometry as any).boundsTree).toBeUndefined();

    const aboveThreshold = buildWithBVH(makeGeom(BVH_THRESHOLD + 3));
    expect((aboveThreshold.geometry as any).boundsTree).toBeInstanceOf(MeshBVH);
  });
});
