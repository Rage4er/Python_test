// NOTE: ContextMenu слушает window-события contextmenu/click и рендерит DOM,
// поэтому тестируем через @testing-library/react + fireEvent на <canvas>.
// Эскейп-обработка в компоненте отсутствует — этот сценарий не покрываем.
import { render, screen, fireEvent } from '@testing-library/react';
import { useAppStore } from '@app/store';
import type { SceneNode } from '@entities/scene/types';
import { ContextMenu } from './ContextMenu';

function makeNode(overrides: Partial<SceneNode> & { id: string; name: string }): SceneNode {
  return {
    type: 'box',
    transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
    geometry: { kind: 'box', params: { width: 1, height: 1, depth: 1 } },
    material: { color: '#fff', opacity: 1, isHole: false },
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

const reset = () =>
  useAppStore.setState({ nodes: {}, rootIds: [], selection: [] });

// Событие dispatchim прямо на <canvas> (target важен: обработчик фильтрует
// через e.target.closest('canvas')); оно всплывает до window-слушателя.
// React 18 + RTL: оборачиваем в act() и ставим IS_REACT_ACT_ENVIRONMENT,
// иначе setState из нативного слушателя не флашится синхронно.
import { act } from 'react';

(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

function contextMenuOnCanvas(clientX = 120, clientY = 80) {
  const canvas = document.createElement('canvas');
  document.body.appendChild(canvas);
  act(() => {
    canvas.dispatchEvent(new MouseEvent('contextmenu', {
      bubbles: true, cancelable: true, clientX, clientY,
    }));
  });
  return canvas;
}

describe('ContextMenu', () => {
  beforeEach(() => reset());

  it('без выбора не открывается даже по правому клику на canvas', () => {
    render(<ContextMenu />);
    contextMenuOnCanvas();
    expect(screen.queryByText('Удалить')).toBeNull();
    expect(screen.queryByText('Дублировать')).toBeNull();
  });

  it('правый клик вне canvas игнорируется', () => {
    const a = makeNode({ id: 'a', name: 'Cube A' });
    useAppStore.setState({ nodes: { a }, rootIds: ['a'], selection: ['a'] });
    render(<ContextMenu />);
    const div = document.createElement('div');
    document.body.appendChild(div);
    div.dispatchEvent(new MouseEvent('contextmenu', {
      bubbles: true, cancelable: true, clientX: 5, clientY: 5,
    }));
    expect(screen.queryByText('Удалить')).toBeNull();
  });

  it('правый клик на canvas → меню в позиции курсора, для одной ноды 3 пункта', () => {
    const a = makeNode({ id: 'a', name: 'Cube A' });
    useAppStore.setState({ nodes: { a }, rootIds: ['a'], selection: ['a'] });
    render(<ContextMenu />);
    contextMenuOnCanvas(120, 80);

    const dup = screen.getByText('Дублировать');
    const del = screen.getByText('Удалить');
    const hole = screen.getByText('Сделать hole');
    expect(dup).toBeTruthy();
    expect(del).toBeTruthy();
    expect(hole).toBeTruthy();

    // позиция = координаты курсора (fixed left/top)
    const menu = dup.closest('div.fixed') as HTMLElement;
    expect(menu.style.left).toBe('120px');
    expect(menu.style.top).toBe('80px');
  });

  it('при мультивыборе пункт про hole скрыт (только Дублировать/Удалить)', () => {
    const a = makeNode({ id: 'a', name: 'A' });
    const b = makeNode({ id: 'b', name: 'B' });
    useAppStore.setState({ nodes: { a, b }, rootIds: ['a', 'b'], selection: ['a', 'b'] });
    render(<ContextMenu />);
    contextMenuOnCanvas();

    expect(screen.getByText('Дублировать')).toBeTruthy();
    expect(screen.getByText('Удалить')).toBeTruthy();
    expect(screen.queryByText(/hole|solid/)).toBeNull();
  });

  it('клик вне меню закрывает его', () => {
    const a = makeNode({ id: 'a', name: 'A' });
    useAppStore.setState({ nodes: { a }, rootIds: ['a'], selection: ['a'] });
    render(<ContextMenu />);
    contextMenuOnCanvas();
    expect(screen.getByText('Удалить')).toBeTruthy();

    fireEvent.click(document.body);
    expect(screen.queryByText('Удалить')).toBeNull();
  });

  it('«Удалить» → нода удаляется из store', () => {
    const a = makeNode({ id: 'a', name: 'A' });
    useAppStore.setState({ nodes: { a }, rootIds: ['a'], selection: ['a'] });
    render(<ContextMenu />);
    contextMenuOnCanvas();

    fireEvent.click(screen.getByText('Удалить'));
    expect(useAppStore.getState().nodes['a']).toBeUndefined();
    // после действия меню закрывается
    expect(screen.queryByText('Дублировать')).toBeNull();
  });

  it('«Дублировать» → создаёт копию со смещением и именем "(copy)"', () => {
    const a = makeNode({ id: 'a', name: 'Cube', transform: { position: [1, 2, 3], rotation: [0, 0, 0], scale: [1, 1, 1] } } as any);
    useAppStore.setState({ nodes: { a }, rootIds: ['a'], selection: ['a'] });
    render(<ContextMenu />);
    contextMenuOnCanvas();

    fireEvent.click(screen.getByText('Дублировать'));
    const ids = Object.keys(useAppStore.getState().nodes);
    expect(ids.length).toBe(2);
    const copy = ids.find((id) => id !== 'a')!;
    const c = useAppStore.getState().nodes[copy];
    expect(c.name).toBe('Cube (copy)');
    // фикс Duplicate: смещение только по X на +2, геометрия копируется целиком
    expect(c.transform.position).toEqual([3, 2, 3]);
  });

  it('«Сделать hole» → toggle material.isHole через команду', () => {
    const a = makeNode({ id: 'a', name: 'A' }); // isHole: false
    useAppStore.setState({ nodes: { a }, rootIds: ['a'], selection: ['a'] });
    render(<ContextMenu />);
    contextMenuOnCanvas();

    fireEvent.click(screen.getByText('Сделать hole'));
    expect(useAppStore.getState().nodes['a'].material.isHole).toBe(true);
  });

  // === Фикс Duplicate: копия сохраняет geometry kind и params целиком ===
  const getCopy = (sourceId: string): SceneNode => {
    const st = useAppStore.getState();
    const copyId = Object.keys(st.nodes).find((id) => id !== sourceId)!;
    return st.nodes[copyId];
  };

  it('duplicate cylinder → новый cylinder с теми же params (radius, height)', () => {
    const a = makeNode({
      id: 'a', name: 'Cyl', type: 'cylinder',
      geometry: { kind: 'cylinder', params: { radius: 2.5, height: 7 } },
    });
    useAppStore.setState({ nodes: { a }, rootIds: ['a'], selection: ['a'] });
    render(<ContextMenu />);
    contextMenuOnCanvas();

    fireEvent.click(screen.getByText('Дублировать'));
    const c = getCopy('a');
    expect(c.geometry.kind).toBe('cylinder');
    expect(c.geometry.params).toEqual({ radius: 2.5, height: 7 });
  });

  it('duplicate cone → cone с теми же params', () => {
    const a = makeNode({
      id: 'a', name: 'Cone', type: 'cone',
      geometry: { kind: 'cone', params: { radius: 1.5, height: 4 } },
    });
    useAppStore.setState({ nodes: { a }, rootIds: ['a'], selection: ['a'] });
    render(<ContextMenu />);
    contextMenuOnCanvas();

    fireEvent.click(screen.getByText('Дублировать'));
    const c = getCopy('a');
    expect(c.geometry.kind).toBe('cone');
    expect(c.geometry.params).toEqual({ radius: 1.5, height: 4 });
  });

  it('duplicate custom CSG → custom + тот же assetId', () => {
    const a = makeNode({
      id: 'a', name: 'CSG', type: 'mesh',
      geometry: { kind: 'custom', params: {}, assetId: 'asset-123' },
      booleanOp: 'subtract',
    });
    useAppStore.setState({ nodes: { a }, rootIds: ['a'], selection: ['a'] });
    render(<ContextMenu />);
    contextMenuOnCanvas();

    fireEvent.click(screen.getByText('Дублировать'));
    const c = getCopy('a');
    expect(c.geometry.kind).toBe('custom');
    expect(c.geometry.assetId).toBe('asset-123');
    expect(c.booleanOp).toBe('subtract');
  });

  it('duplicate sphere → sphere', () => {
    const a = makeNode({
      id: 'a', name: 'Sph', type: 'sphere',
      geometry: { kind: 'sphere', params: { radius: 3 } },
    });
    useAppStore.setState({ nodes: { a }, rootIds: ['a'], selection: ['a'] });
    render(<ContextMenu />);
    contextMenuOnCanvas();

    fireEvent.click(screen.getByText('Дублировать'));
    const c = getCopy('a');
    expect(c.geometry.kind).toBe('sphere');
    expect(c.geometry.params).toEqual({ radius: 3 });
  });

  it('duplicate box → box', () => {
    const a = makeNode({
      id: 'a', name: 'Box',
      geometry: { kind: 'box', params: { width: 2, height: 3, depth: 4 } },
    });
    useAppStore.setState({ nodes: { a }, rootIds: ['a'], selection: ['a'] });
    render(<ContextMenu />);
    contextMenuOnCanvas();

    fireEvent.click(screen.getByText('Дублировать'));
    const c = getCopy('a');
    expect(c.geometry.kind).toBe('box');
    expect(c.geometry.params).toEqual({ width: 2, height: 3, depth: 4 });
  });

  it('duplicate → смещение позиции +2 по X (Y/Z без изменений)', () => {
    const a = makeNode({
      id: 'a', name: 'Pos',
      transform: { position: [10, 20, 30], rotation: [0, 0, 0], scale: [1, 1, 1] },
    });
    useAppStore.setState({ nodes: { a }, rootIds: ['a'], selection: ['a'] });
    render(<ContextMenu />);
    contextMenuOnCanvas();

    fireEvent.click(screen.getByText('Дублировать'));
    const c = getCopy('a');
    expect(c.transform.position).toEqual([12, 20, 30]);
  });
});
