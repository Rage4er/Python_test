import { describe, it, expect } from 'vitest';
import * as THREE from 'three';

/**
 * Минимальный клон приватного EngineAdapter.disposeObject():
 * рекурсивный dispose геометрий и материалов вложенных мешей.
 * (См. src/shared/engine/EngineAdapter.ts)
 */
function disposeObject(obj: THREE.Object3D): void {
  if (obj instanceof THREE.Mesh) {
    obj.geometry.dispose();
    const material = obj.material as THREE.Material | THREE.Material[];
    if (Array.isArray(material)) {
      material.forEach((m) => m.dispose());
    } else {
      material.dispose();
    }
  }
  if ((obj as THREE.Group).children) {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        const mat = child.material as THREE.Material | THREE.Material[];
        if (Array.isArray(mat)) {
          mat.forEach((m) => m.dispose());
        } else {
          mat.dispose();
        }
      }
    });
  }
}

describe('disposeObject — рекурсивная очистка вложенных мешей', () => {
  it('вызывает dispose() на геометриях и материалах всех вложенных мешей группы', () => {
    // Группа с двумя вложенными мешами на разной глубине
    const group = new THREE.Group();

    const geomA = new THREE.BoxGeometry(1, 1, 1);
    const matA = new THREE.MeshStandardMaterial();
    const meshA = new THREE.Mesh(geomA, matA);

    const nested = new THREE.Group();
    const geomB = new THREE.SphereGeometry(1, 8, 8);
    const matB = new THREE.MeshStandardMaterial();
    const meshB = new THREE.Mesh(geomB, matB);
    nested.add(meshB);
    group.add(meshA, nested);

    const spies = [
      spyDispose(geomA), spyDispose(matA),
      spyDispose(geomB), spyDispose(matB),
    ];

    disposeObject(group);

    for (const s of spies) {
      expect(s.called).toBe(true);
    }
  });

  it('обрабатывает массив материалов (multi-material)', () => {
    const geom = new THREE.BoxGeometry(1, 1, 1);
    const mat0 = new THREE.MeshStandardMaterial();
    const mat1 = new THREE.MeshStandardMaterial();
    const mesh = new THREE.Mesh(geom, [mat0, mat1]);

    const sGeom = spyDispose(geom);
    const s0 = spyDispose(mat0);
    const s1 = spyDispose(mat1);

    disposeObject(mesh);

    expect(sGeom.called).toBe(true);
    expect(s0.called).toBe(true);
    expect(s1.called).toBe(true);
  });

  it('не бросает ошибку на объекте без геометрии (чистая группа)', () => {
    const empty = new THREE.Group();
    expect(() => disposeObject(empty)).not.toThrow();
  });
});

// Хелпер: подменяем dispose() у объекта и возвращаем флаг вызова
function spyDispose(target: { dispose: () => void }): { called: boolean } {
  const state = { called: false };
  target.dispose = () => {
    state.called = true;
  };
  return state;
}
