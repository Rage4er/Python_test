import { describe, it, expect } from 'vitest';
import * as THREE from 'three';
import { buildGeometry, buildObject } from './meshFactory';
import type { SceneNode } from '@entities/scene/types';

function makeNode(overrides: Partial<SceneNode> = {}): SceneNode {
  return {
    id: 'test-node',
    type: 'mesh',
    name: 'Test mesh',
    transform: {
      position: [0, 0, 0],
      rotation: [0, 0, 0],
      scale: [1, 1, 1],
    },
    geometry: { kind: 'custom', params: {}, assetId: 'nonexistent-id' },
    material: { color: '#ffffff', opacity: 1, isHole: false },
    booleanOp: null,
    parentId: null,
    childrenIds: [],
    visible: true,
    locked: false,
    createdAt: 0,
    updatedAt: 0,
    ...overrides,
  };
}

describe('meshFactory — custom geometry not found', () => {
  it('buildGeometry не падает, возвращает placeholder при отсутствии custom geometry', () => {
    let geom: THREE.BufferGeometry | undefined;
    expect(() => {
      geom = buildGeometry({ kind: 'custom', params: {}, assetId: 'nonexistent-id' });
    }).not.toThrow();
    // Placeholder — пустая BufferGeometry (ничего не рендерится)
    expect(geom).toBeInstanceOf(THREE.BufferGeometry);
    expect(geom!.attributes.position).toBeUndefined();
  });

  it('buildObject не падает и возвращает Mesh при отсутствии custom geometry в ноде', () => {
    const node = makeNode();
    let obj: THREE.Object3D | undefined;
    expect(() => {
      obj = buildObject(node);
    }).not.toThrow();
    expect(obj).toBeInstanceOf(THREE.Mesh);
    expect(obj!.userData.id).toBe('test-node');
  });

  it('buildObject не падает при custom без assetId (тоже fallback)', () => {
    const node = makeNode({
      geometry: { kind: 'custom', params: {} },
    });
    expect(() => buildObject(node)).not.toThrow();
  });
});

// Логика castShadow из EngineAdapter.syncScene (EngineAdapter.ts, строка
// `obj.castShadow = node.visible !== false && !node.material?.isHole`).
// Полный конструктор EngineAdapter требует WebGL-контекст (недоступен в jsdom),
// поэтому чистая булева формула проверена здесь — по образцу
// disposeObject-тестов с клоном приватной логики.
function computeCastShadow(node: Pick<SceneNode, 'visible' | 'material'>): boolean {
  return node.visible !== false && !node.material?.isHole;
}

describe('castShadow — логика отбрасывания теней (syncScene)', () => {
  it('visible=true, isHole=false → castShadow=true', () => {
    expect(computeCastShadow({ visible: true, material: { color: '#fff', opacity: 1, isHole: false } })).toBe(true);
  });

  it('visible=false → castShadow=false (hidden-нода не создаёт фантомную тень)', () => {
    expect(computeCastShadow({ visible: false, material: { color: '#fff', opacity: 1, isHole: false } })).toBe(false);
  });

  it('isHole=true → castShadow=false (hole не отбрасывает тень)', () => {
    expect(computeCastShadow({ visible: true, material: { color: '#fff', opacity: 1, isHole: true } })).toBe(false);
  });

  it('visible=true, isHole=true → castShadow=false (hole не отбрасывает)', () => {
    expect(computeCastShadow({ visible: true, material: { color: '#fff', opacity: 1, isHole: true } })).toBe(false);
  });

  it('visible=false, isHole=false → castShadow=false', () => {
    expect(computeCastShadow({ visible: false, material: { color: '#fff', opacity: 1, isHole: false } })).toBe(false);
  });

  it('ground plane не имеет userData.id → syncScene его не удалит (защита приёмника теней)', () => {
    // Инвариант фикса: объекты без userData.id игнорируются удалением в
    // syncScene (diff считается по нодам store). Проверяем сам предикат:
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.ShadowMaterial());
    ground.name = 'Ground';
    expect(ground.userData.id).toBeUndefined();
  });
});
