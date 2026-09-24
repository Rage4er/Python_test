import { describe, test, expect, beforeEach, vi } from 'vitest';
import * as THREE from 'three';
import { saveToLocal, loadFromLocal, downloadScene, uploadScene } from './saveLoad';
import { useAppStore } from '@app/store';
import { setGlobalAdapter } from '@shared/engine/engineRef';
import type { SceneNode } from '@entities/scene/types';

// localStorage mock для jsdom (в vitest environment jsdom есть storage, но очистим явно)
function makeNode(overrides: Partial<SceneNode> = {}): SceneNode {
  const now = Date.now();
  return {
    id: 'n1',
    type: 'box',
    name: 'Box',
    transform: { position: [1, 2, 3], rotation: [0.5, 0, 0], scale: [1, 1, 1] },
    geometry: { kind: 'box', params: { width: 10, height: 10, depth: 10 } },
    material: { color: '#ff0000', opacity: 1, isHole: false },
    booleanOp: null,
    parentId: null,
    childrenIds: [],
    visible: true,
    locked: false,
    createdAt: now,
    updatedAt: now,
    ...overrides,
  };
}

function setState(nodes: Record<string, SceneNode>, rootIds: string[], selection: string[] = []) {
  useAppStore.setState({ nodes, rootIds, selection });
}

beforeEach(() => {
  localStorage.clear();
  setGlobalAdapter(null);
  setState({}, []);
  vi.restoreAllMocks();
});

describe('saveToLocal / loadFromLocal — round-trip через localStorage', () => {
  test('round-trip сохраняет nodes и rootIds идентично', () => {
    const nodes = { a: makeNode({ id: 'a' }), b: makeNode({ id: 'b', name: 'B' }) };
    setState(nodes, ['a', 'b'], ['a']);

    saveToLocal();

    // «перезагружаем страницу» — чистим store
    setState({}, [], []);
    expect(loadFromLocal()).toBe(true);

    const restored = useAppStore.getState();
    expect(restored.nodes).toEqual(nodes); // deep equal, включая transform/geometry/material
    expect(restored.rootIds).toEqual(['a', 'b']);
  });

  test('loadFromLocal на пустом хранилище возвращает false и не трогает store', () => {
    const before = useAppStore.getState().nodes;
    expect(loadFromLocal()).toBe(false);
    expect(useAppStore.getState().nodes).toBe(before);
  });

  test('битый JSON в localStorage → false без краша', () => {
    localStorage.setItem('tinkercad-clone:scene', '{broken json');
    expect(loadFromLocal()).toBe(false);
  });

  test('saveToLocal при переполнении quota → console.error, без throw', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('QuotaExceededError');
    });
    expect(() => saveToLocal()).not.toThrow();
    expect(spy).toHaveBeenCalled();
  });
});

describe('downloadScene — формат файла сцены', () => {
  test('сериализует nodes как массив, включает version/units/rootIds', () => {
    let captured = '';
    class BlobCapture extends Blob {
      constructor(parts: any[], opts: any) {
        super(parts, opts);
        captured = String(parts[0]);
      }
    }
    vi.stubGlobal('Blob', BlobCapture);
    vi.stubGlobal('URL', { createObjectURL: vi.fn(() => 'blob:x'), revokeObjectURL: vi.fn() });
    const clickSpy = vi.fn();
    vi.stubGlobal('document', {
      ...document,
      createElement: () => ({ href: '', download: '', click: clickSpy, style: {} }),
    });

    const nodes = { x: makeNode({ id: 'x' }) };
    setState(nodes, ['x']);
    downloadScene();

    const data = JSON.parse(captured);
    expect(data.version).toBe(1);
    expect(data.units).toBe('mm');
    expect(Array.isArray(data.nodes)).toBe(true);
    expect(data.nodes[0].id).toBe('x');
    expect(data.nodes[0].transform).toEqual(nodes.x.transform);
    expect(data.rootIds).toEqual(['x']);
    expect(clickSpy).toHaveBeenCalled();
    vi.unstubAllGlobals();
  });
});

describe('uploadScene — десериализация и валидация', () => {
  function fileWith(text: string): File {
    return { text: async () => text } as unknown as File;
  }

  test('round-trip: downloadScene-формат → uploadScene восстанавливает nodes/rootIds', async () => {
    const nodes = {
      a: makeNode({ id: 'a' }),
      b: makeNode({ id: 'b', parentId: 'a' }),
    };
    const payload = JSON.stringify({
      version: 1,
      units: 'mm',
      nodes: Object.values(nodes),
      rootIds: ['a'],
    });

    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    await expect(uploadScene(fileWith(payload))).resolves.toBe(true);
    const s = useAppStore.getState();
    expect(s.nodes).toEqual(nodes);
    expect(s.rootIds).toEqual(['a']);
    expect(s.selection).toEqual([]);
    expect(alertSpy).not.toHaveBeenCalled();
  });

  test('некорректный JSON → false + alert с сообщением', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    await expect(uploadScene(fileWith('not json'))).resolves.toBe(false);
    expect(alertSpy).toHaveBeenCalledWith('Некорректный JSON файл');
  });

  test('отсутствует version → false', async () => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
    await expect(uploadScene(fileWith(JSON.stringify({ nodes: [], rootIds: [] })))).resolves.toBe(false);
  });

  test('version новее поддерживаемой → false с указанием версии', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    await expect(
      uploadScene(fileWith(JSON.stringify({ version: 99, nodes: [], rootIds: [] }))),
    ).resolves.toBe(false);
    expect(alertSpy.mock.calls[0][0]).toContain('99');
  });

  test('nodes не массив → false', async () => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
    await expect(
      uploadScene(fileWith(JSON.stringify({ version: 1, nodes: {}, rootIds: [] }))),
    ).resolves.toBe(false);
  });

  test('rootIds не массив → false', async () => {
    vi.spyOn(window, 'alert').mockImplementation(() => {});
    await expect(
      uploadScene(fileWith(JSON.stringify({ version: 1, nodes: [], rootIds: 'oops' }))),
    ).resolves.toBe(false);
  });
});

describe('экспорт STL/OBJ против fake-adapter (интеграция сериализации геометрий)', () => {
  // jsdom Blob без .arrayBuffer()/.text() — читаем через FileReader
  function blobToArrayBuffer(blob: Blob): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result as ArrayBuffer);
      fr.onerror = () => reject(fr.error);
      fr.readAsArrayBuffer(blob);
    });
  }
  function blobToText(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(String(fr.result));
      fr.onerror = () => reject(fr.error);
      fr.readAsText(blob);
    });
  }

  function fakeMesh(id: string, pos: [number, number, number]): THREE.Mesh {
    const m = new THREE.Mesh(new THREE.BoxGeometry(2, 2, 2));
    m.name = id;
    m.position.set(...pos);
    m.updateMatrixWorld(true);
    return m;
  }

  beforeEach(() => {
    const meshes: Record<string, THREE.Mesh> = {
      a: fakeMesh('a', [0, 0, 0]),
      b: fakeMesh('b', [5, 0, 0]),
    };
    setGlobalAdapter({
      getObject: (id: string) => meshes[id],
      getAllObjects: () => Object.values(meshes),
      getRootObjects: (ids: string[]) => ids.map((i) => meshes[i]).filter(Boolean),
      getMesh: (id: string) => meshes[id],
    });
  });

  test('exportSTL(binary) возвращает Blob model/stl с нетривиальным размером', async () => {
    const { exportSTL } = await import('./exportSTL');
    setState({ a: makeNode({ id: 'a' }), b: makeNode({ id: 'b' }) }, ['a', 'b']);
    const blob = await exportSTL({ binary: true });
    expect(blob).not.toBeNull();
    expect(blob!.type).toBe('model/stl');
    expect(blob!.size).toBeGreaterThan(84); // header 80 + count 4 минимум
    const buf = new DataView(await blobToArrayBuffer(blob!));
    expect(buf.getUint32(80, true)).toBe(24); // 2 куба × 12 треугольников
  });

  test('exportSTL ascii содержит solid/E facet', async () => {
    const { exportSTL } = await import('./exportSTL');
    setState({ a: makeNode({ id: 'a' }) }, ['a']);
    const blob = await exportSTL({ binary: false });
    expect(blob).not.toBeNull();
    const text = await blobToText(blob!);
    expect(text).toMatch(/^solid/m);
    expect(text).toContain('facet normal');
    expect(text).toContain('endsolid');
  });

  test('selectionOnly экспортирует только выделенное (6 граней = 12→6 фасетов? нет: 1 куб = 12)', async () => {
    const { exportSTL } = await import('./exportSTL');
    setState({ a: makeNode({ id: 'a' }), b: makeNode({ id: 'b' }) }, ['a', 'b'], ['b']);
    const blob = await exportSTL({ binary: true, selectionOnly: true });
    const buf = new DataView(await blobToArrayBuffer(blob!));
    expect(buf.getUint32(80, true)).toBe(12); // ровно один куб из двух
  });

  test('exportOBJ возвращает v/vn/f с двумя объектами', async () => {
    const { exportOBJ } = await import('./exportOBJ');
    setState({ a: makeNode({ id: 'a' }), b: makeNode({ id: 'b' }) }, ['a', 'b']);
    const blob = await exportOBJ();
    expect(blob).not.toBeNull();
    const text = await blobToText(blob!);
    const vCount = (text.match(/^v /gm) || []).length;
    const fCount = (text.match(/^f /gm) || []).length;
    expect(vCount).toBe(48); // non-indexed: 2 куба × 12 треугольников × 3
    expect(fCount).toBe(24); // 2 куба × 12 треугольников
  });

  test('невидимые объекты пропускаются в OBJ', async () => {
    const { exportOBJ } = await import('./exportOBJ');
    setState({ a: makeNode({ id: 'a' }), b: makeNode({ id: 'b' }) }, ['a', 'b']);
    const adapter = (await import('@shared/engine/engineRef')).getEngineAdapter()!;
    adapter.getObject('b')!.visible = false;
    const blob = await exportOBJ();
    const text = await blobToText(blob!);
    expect((text.match(/^v /gm) || []).length).toBe(24); // только один видимый куб
  });
});

// Дата актуализации: 24 сентября 2026 г.
