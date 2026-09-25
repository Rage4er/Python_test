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
    expect(c.transform.position).toEqual([6, 2, 8]);
  });

  it('«Сделать hole» → toggle material.isHole через команду', () => {
    const a = makeNode({ id: 'a', name: 'A' }); // isHole: false
    useAppStore.setState({ nodes: { a }, rootIds: ['a'], selection: ['a'] });
    render(<ContextMenu />);
    contextMenuOnCanvas();

    fireEvent.click(screen.getByText('Сделать hole'));
    expect(useAppStore.getState().nodes['a'].material.isHole).toBe(true);
  });
});
