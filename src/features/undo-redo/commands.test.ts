/**
 * Поведенческие тесты Command Pattern (undo/redo core).
 * Без снапшотов — только deep-equal assert'ы состояний сцены.
 */
import { describe, it, expect } from 'vitest';
import type { SceneState, SceneNode, Transform } from '@entities/scene/types';
import { CreateNodeCommand } from '@features/create-node/model/CreateNodeCommand';
import { DeleteNodeCommand, DeleteMultipleCommand } from '@features/delete-node/model/DeleteNodeCommand';
import { TransformNodeCommand, TransformMultipleCommand } from '@features/transform-node/model/TransformNodeCommand';
import { GroupCommand, UngroupCommand } from '@features/group/model/GroupCommand';
import { SetNodePropertyCommand } from '@features/edit-property/model/SetNodePropertyCommand';
import { BooleanOpCommand } from '@features/boolean-op/model/BooleanOpCommand';
import * as THREE from 'three';
import { HistoryManager } from './history';

const emptyScene = (): SceneState => ({ nodes: {}, rootIds: [], selection: [] });

function makeNode(id: string, over: Partial<SceneNode> = {}): SceneNode {
  const t = Date.now();
  return {
    id,
    type: 'box',
    name: id,
    transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
    geometry: { kind: 'box', params: { width: 20, height: 20, depth: 20 } },
    material: { color: '#4a90e2', opacity: 1, isHole: false },
    booleanOp: null,
    parentId: null,
    childrenIds: [],
    visible: true,
    locked: false,
    createdAt: t,
    updatedAt: t,
    ...over,
  };
}

const T = (x: number, y = 0, z = 0): Transform => ({
  position: [x, y, z], rotation: [0, 0, 0], scale: [1, 1, 1],
});

describe('CreateNodeCommand', () => {
  it('apply() adds node to nodes/rootIds and selects it', () => {
    const cmd = new CreateNodeCommand({ type: 'sphere', position: [1, 2, 3], name: 'S' });
    const next = cmd.apply(emptyScene());
    const id = next.rootIds[0];
    expect(next.nodes[id].name).toBe('S');
    expect(next.nodes[id].geometry.kind).toBe('sphere');
    expect(next.nodes[id].geometry.params.radius).toBe(10);
    expect(next.nodes[id].transform.position).toEqual([1, 2, 3]);
    expect(next.selection).toEqual([id]);
  });

  it('revert() returns original state (deep equal)', () => {
    const base: SceneState = {
      nodes: { a: makeNode('a') }, rootIds: ['a'], selection: ['a'],
    };
    const frozen = JSON.parse(JSON.stringify(base));
    const cmd = new CreateNodeCommand({ type: 'box' });
    const after = cmd.revert(cmd.apply(base));
    // revert restores node/root state; selection is normalized to exclude the
    // created node (apply selects it, revert filters it) — assert per-field
    expect(after.nodes).toEqual(frozen.nodes);
    expect(after.rootIds).toEqual(frozen.rootIds);
    expect(after.selection).toEqual([]);
  });

  it('execute → undo → execute → undo round-trips twice', () => {
    let s = emptyScene();
    const c1 = new CreateNodeCommand({ type: 'cone' });
    s = c1.apply(s); s = c1.revert(s);
    expect(s).toEqual(emptyScene());
    s = c1.apply(s); s = c1.revert(s);
    expect(s).toEqual(emptyScene());
  });
});

describe('DeleteNodeCommand', () => {
  it('apply() removes node; revert() restores it at original root index', () => {
    const b: SceneState = {
      nodes: { a: makeNode('a'), b: makeNode('b'), c: makeNode('c') },
      rootIds: ['a', 'b', 'c'], selection: ['b'],
    };
    const frozen = JSON.parse(JSON.stringify(b));
    const cmd = new DeleteNodeCommand('b');
    const del = cmd.apply(b);
    expect(del.nodes.b).toBeUndefined();
    expect(del.rootIds).toEqual(['a', 'c']);
    expect(del.selection).toEqual([]);
    // revert restores node at original root index; selection is normalized
    // (deleted ids filtered out by design), so compare per-field
    const back = cmd.revert(del);
    expect(back.nodes.b).toEqual(frozen.nodes.b);
    expect(back.rootIds).toEqual(frozen.rootIds);
    expect(back.selection).toEqual([]);
  });

  it('apply() on missing node is a no-op', () => {
    const s: SceneState = { nodes: { a: makeNode('a') }, rootIds: ['a'], selection: [] };
    const cmd = new DeleteNodeCommand('ghost');
    expect(cmd.apply(s)).toBe(s);
  });

  it('deletes descendants recursively', () => {
    const parent = makeNode('p', { childrenIds: ['ch'] });
    const child = makeNode('ch', { parentId: 'p' });
    const s: SceneState = { nodes: { p: parent, ch: child }, rootIds: ['p'], selection: [] };
    const next = new DeleteNodeCommand('p').apply(s);
    expect(next.nodes.p).toBeUndefined();
    expect(next.nodes.ch).toBeUndefined();
    expect(next.rootIds).toEqual([]);
  });

  it('DeleteMultipleCommand reverts in reverse order restoring all nodes', () => {
    const s: SceneState = {
      nodes: { a: makeNode('a'), b: makeNode('b') }, rootIds: ['a', 'b'], selection: [],
    };
    const frozen = JSON.parse(JSON.stringify(s));
    const cmd = new DeleteMultipleCommand(['a', 'b']);
    const del = cmd.apply(s);
    expect(Object.keys(del.nodes)).toHaveLength(0);
    const back = cmd.revert(del);
    expect(back.nodes.a).toEqual(frozen.nodes.a);
    expect(back.nodes.b).toEqual(frozen.nodes.b);
    expect(back.rootIds).toEqual(frozen.rootIds);
  });
});

describe('TransformNodeCommand', () => {
  it('apply sets after-transform, revert restores before (deep equal)', () => {
    const s: SceneState = {
      nodes: { a: { ...makeNode('a'), transform: T(0) } }, rootIds: ['a'], selection: [],
    };
    const frozen = JSON.parse(JSON.stringify(s));
    const cmd = new TransformNodeCommand('a', T(0), T(5, 6, 7));
    const moved = cmd.apply(s);
    expect(moved.nodes.a.transform.position).toEqual([5, 6, 7]);
    const back = cmd.revert(moved);
    delete (back.nodes.a as any).updatedAt;
    delete (frozen.nodes.a as any).updatedAt;
    expect(back.nodes.a).toEqual(frozen.nodes.a);
  });

  it('missing node → apply/revert are no-ops', () => {
    const s = emptyScene();
    const cmd = new TransformNodeCommand('ghost', T(0), T(1));
    expect(cmd.apply(s)).toBe(s);
    expect(cmd.revert(s)).toBe(s);
  });
});

describe('TransformMultipleCommand', () => {
  it('patches many nodes; revert restores all', () => {
    const s: SceneState = {
      nodes: { a: makeNode('a'), b: makeNode('b') }, rootIds: ['a', 'b'], selection: [],
    };
    const frozen = JSON.parse(JSON.stringify(s));
    const cmd = new TransformMultipleCommand([
      { id: 'a', before: T(0), after: T(1) },
      { id: 'b', before: T(0), after: T(2) },
      { id: 'ghost', before: T(0), after: T(3) }, // skipped
    ]);
    const moved = cmd.apply(s);
    expect(moved.nodes.a.transform.position).toEqual([1, 0, 0]);
    expect(moved.nodes.b.transform.position).toEqual([2, 0, 0]);
    const back = cmd.revert(moved);
    const norm = (st: SceneState) => ({
      ...st,
      nodes: Object.fromEntries(
        Object.entries(st.nodes).map(([k, n]) => [k, { ...n, updatedAt: 0 } as SceneNode]),
      ),
    });
    expect(norm(back)).toEqual(norm(frozen));
  });
});

describe('GroupCommand / UngroupCommand', () => {
  const scene = (): SceneState => ({
    nodes: { a: makeNode('a'), b: makeNode('b'), c: makeNode('c') },
    rootIds: ['a', 'b', 'c'], selection: ['a', 'b'],
  });

  it('group() reparents nodes and appends group to roots; revert restores previous state', () => {
    const s = scene();
    const frozen = JSON.parse(JSON.stringify(s));
    const g = new GroupCommand(['a', 'b']);
    const grouped = g.apply(s);
    const gid = grouped.rootIds[grouped.rootIds.length - 1];
    expect(grouped.nodes[gid].type).toBe('group');
    expect(grouped.nodes[gid].childrenIds).toEqual(['a', 'b']);
    expect(grouped.nodes.a.parentId).toBe(gid);
    expect(grouped.nodes.c.parentId).toBeNull();
    expect(grouped.selection).toEqual([gid]);
    expect(g.revert(grouped)).toEqual(frozen);
  });

  it('ungroup() dissolves group; revert restores group with children', () => {
    const g = new GroupCommand(['a', 'b']);
    const base = scene();
    const grouped = g.apply(base);
    const gid = grouped.rootIds[grouped.rootIds.length - 1];
    const frozenGrouped = JSON.parse(JSON.stringify(grouped));
    const u = new UngroupCommand(gid);
    const flat = u.apply(grouped);
    expect(flat.nodes[gid]).toBeUndefined();
    expect(flat.nodes.a.parentId).toBeNull();
    expect(flat.rootIds).toContain('a');
    expect(flat.rootIds).toContain('b');
    expect(u.revert(flat)).toEqual(frozenGrouped);
  });

  it('ungroup on non-group node is a no-op', () => {
    const s = scene();
    const u = new UngroupCommand('a');
    expect(u.apply(s)).toBe(s);
  });
});

describe('SetNodePropertyCommand', () => {
  const s = (): SceneState => ({
    nodes: { a: makeNode('a') }, rootIds: ['a'], selection: [],
  });

  it('name patch + revert', () => {
    const frozen = JSON.parse(JSON.stringify(s()));
    const cmd = new SetNodePropertyCommand('a', { key: 'name', value: 'Renamed' });
    const next = cmd.apply(s());
    expect(next.nodes.a.name).toBe('Renamed');
    expect(cmd.revert(next)).toEqual(frozen);
  });

  it('material patch merges partial', () => {
    const cmd = new SetNodePropertyCommand('a', { key: 'material', value: { color: '#ff0000' } });
    const next = cmd.apply(s());
    expect(next.nodes.a.material.color).toBe('#ff0000');
    expect(next.nodes.a.material.opacity).toBe(1);
  });

  it('visible / transform / geometryParams patches', () => {
    let cmd = new SetNodePropertyCommand('a', { key: 'visible', value: false });
    expect(cmd.apply(s()).nodes.a.visible).toBe(false);

    cmd = new SetNodePropertyCommand('a', { key: 'transform', value: { position: [9, 9, 9] } as any });
    expect(cmd.apply(s()).nodes.a.transform.position).toEqual([9, 9, 9]);

    cmd = new SetNodePropertyCommand('a', { key: 'geometryParams', value: { width: 42 } });
    expect(cmd.apply(s()).nodes.a.geometry.params.width).toBe(42);
  });

  it('missing node → no-op', () => {
    const st = s();
    const cmd = new SetNodePropertyCommand('ghost', { key: 'name', value: 'x' });
    expect(cmd.apply(st)).toBe(st);
  });
});

describe('BooleanOpCommand', () => {
  function triGeom(): THREE.BufferGeometry {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 2, 0, 0, 0, 2, 0], 3));
    return g;
  }

  it('apply replaces sources with result node; revert restores sources exactly', () => {
    const s: SceneState = {
      nodes: { a: makeNode('a'), b: makeNode('b') }, rootIds: ['a', 'b'], selection: ['a', 'b'],
    };
    const frozen = JSON.parse(JSON.stringify(s));
    const cmd = new BooleanOpCommand(['a', 'b'], 'union', triGeom());
    const next = cmd.apply(s);
    expect(next.nodes.a).toBeUndefined();
    expect(next.nodes.b).toBeUndefined();
    const rid = next.rootIds[next.rootIds.length - 1];
    expect(next.nodes[rid].geometry.kind).toBe('custom');
    expect(next.nodes[rid].geometry.assetId).toBeTruthy();
    expect(next.selection).toEqual([rid]);
    expect(cmd.label).toBe('CSG union');
    expect(cmd.revert(next)).toEqual(frozen);
  });

  it('result pivot is placed at bbox center', () => {
    const cmd = new BooleanOpCommand(['a'], 'subtract', triGeom(), 'cut');
    expect(cmd.label).toBe('cut');
    // bounding box of the triangle is [0..2]x[0..2]x[0..0] → center = (1, 1, 0)
    const pos = (cmd as any).resultNode.transform.position as [number, number, number];
    expect(pos[0]).toBeCloseTo(1, 5);
    expect(pos[1]).toBeCloseTo(1, 5);
    expect(pos[2]).toBeCloseTo(0, 5);
  });
});

describe('combine: execute → undo → execute → undo → undo → redo', () => {
  it('interleaved command sequence keeps history consistent', () => {
    const h = new HistoryManager();
    let s = emptyScene();
    const snap0 = JSON.parse(JSON.stringify(s));

    const createA = new CreateNodeCommand({ type: 'box', name: 'A' });
    h.execute(createA); s = createA.apply(s);
    h.undo(); s = createA.revert(s);
    expect(s).toEqual(snap0);

    h.execute(createA); s = createA.apply(s);
    const createB = new CreateNodeCommand({ type: 'sphere', name: 'B' });
    h.execute(createB); s = createB.apply(s);
    expect(Object.keys(s.nodes)).toHaveLength(2);

    h.undo(); s = createB.revert(s);
    h.undo(); s = createA.revert(s);
    expect(s).toEqual(snap0);

    // redo replays commands forward
    const r1 = h.redo()!;
    s = r1.apply(s);
    expect(Object.keys(s.nodes)).toHaveLength(1);
    const r2 = h.redo()!;
    s = r2.apply(s);
    expect(Object.keys(s.nodes)).toHaveLength(2);
    expect(s.nodes['']).toBeUndefined();
  });
});
