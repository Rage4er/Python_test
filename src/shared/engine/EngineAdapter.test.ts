// @vitest-environment jsdom
import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as THREE from 'three';
import type { SceneNode } from '@entities/scene/types';
import { buildObjectFromGeometry } from './meshFactory';

/**
 * Тесты защиты от дублирования мешей в syncScene.
 *
 * Полный EngineAdapter в unit-тестах не создаётся (требует WebGL-контекст),
 * поэтому здесь воспроизводится ровно та логика добавления объекта в сцену,
 * которая была исправлена в EngineAdapter.syncScene(): перед buildObject
 * удаляются «осиротевшие» объекты с тем же userData.id, а переиспользуемые
 * геометрии (флаг exported) не dispose'ятся.
 */



function makeNode(id: string): SceneNode {
  return {
    id,
    type: 'mesh',
    name: id,
    transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
    geometry: { kind: 'custom', assetId: `asset-${id}`, params: {} } as unknown as SceneNode['geometry'],
    material: { color: '#ff0000', opacity: 1, isHole: false },
    booleanOp: 'union',
    parentId: null,
    childrenIds: [],
    visible: true,
    locked: false,
    createdAt: 1,
    updatedAt: 1,
  };
}

/** Клон защищённого фрагмента syncScene (см. EngineAdapter.ts). */
function addMeshGuarded(
  scene: THREE.Scene,
  objects: Map<string, THREE.Object3D>,
  node: SceneNode,
  geometry: THREE.BufferGeometry
): void {
  const existing = objects.get(node.id);
  if (!existing) {
    // удаление осиротевших дублей по userData.id — как в EngineAdapter
    const orphans = scene.children.filter(
      (child) => child !== existing && child.userData?.id === node.id
    );
    for (const orphan of orphans) {
      orphan.parent?.remove(orphan);
      if (orphan instanceof THREE.Mesh) {
        const og = orphan.geometry as THREE.BufferGeometry & { exported?: boolean };
        if (!og.exported) og.dispose();
        (orphan.material as THREE.Material).dispose();
      }
    }
    const obj = buildObjectFromGeometry(node, geometry);
    objects.set(node.id, obj);
    scene.add(obj);
  }
}

describe('EngineAdapter — защита от дублирования мешей при повторном syncScene', () => {
  let scene: THREE.Scene;
  let objects: Map<string, THREE.Object3D>;

  beforeEach(() => {
    scene = new THREE.Scene();
    objects = new Map();
  });

  it('повторный проход с той же нодой не дублирует меш в сцене', () => {
    const node = makeNode('test-node');
    const geom = new THREE.BoxGeometry(2, 2, 2);

    addMeshGuarded(scene, objects, node, geom);
    const countAfterFirst = scene.children.length;

    // Симуляция второго syncScene из-за StrictMode: объекты «потеряны»
    // (objects пуст), но меш остался в scene.children
    objects.clear();
    addMeshGuarded(scene, objects, node, geom.clone());
    const countAfterSecond = scene.children.length;

    expect(countAfterSecond).toBe(countAfterFirst); // не удвоилось
    expect(scene.children.filter((c) => c.userData?.id === 'test-node')).toHaveLength(1);
  });

  it('при замене меша старый убирается из сцены и его материал dispose’ится', () => {
    const node = makeNode('n1');
    const geomA = new THREE.BoxGeometry(1, 1, 1);
    addMeshGuarded(scene, objects, node, geomA);
    const firstMesh = scene.children[0] as THREE.Mesh;
    const matSpy = vi.spyOn(firstMesh.material as THREE.Material, 'dispose');

    objects.clear(); // симуляция потери ссылки
    addMeshGuarded(scene, objects, node, new THREE.BoxGeometry(1, 1, 1));

    expect(matSpy).toHaveBeenCalled();
    expect(scene.children).toHaveLength(1);
    expect(scene.children[0]).not.toBe(firstMesh);
  });

  it('переиспользуемая геометрия (exported) НЕ dispose’ится при удалении дубля', () => {
    const node = makeNode('n2');
    const sharedGeom = new THREE.BoxGeometry(1, 1, 1);
    const disposeSpy = vi.spyOn(sharedGeom, 'dispose');

    addMeshGuarded(scene, objects, node, sharedGeom); // ставит exported=true
    objects.clear();
    addMeshGuarded(scene, objects, node, new THREE.BoxGeometry(2, 2, 2));

    expect(disposeSpy).not.toHaveBeenCalled();
    // второй меш использует другую геометрию — старый удалён без поломки новой
    expect((scene.children[0] as THREE.Mesh).geometry.attributes.position.count).toBeGreaterThan(0);
  });

  it('разные ноды не мешают друг другу (дубли ищутся строго по своему id)', () => {
    const a = makeNode('a');
    const b = makeNode('b');
    addMeshGuarded(scene, objects, a, new THREE.BoxGeometry(1, 1, 1));
    addMeshGuarded(scene, objects, b, new THREE.BoxGeometry(1, 1, 1));
    expect(scene.children).toHaveLength(2);

    objects.clear();
    addMeshGuarded(scene, objects, a, new THREE.BoxGeometry(1, 1, 1));
    // только «a» перезаписан, «b» не задет
    expect(scene.children).toHaveLength(2);
    expect(scene.children.filter((c) => c.userData?.id === 'a')).toHaveLength(1);
    expect(scene.children.filter((c) => c.userData?.id === 'b')).toHaveLength(1);
  });
});
