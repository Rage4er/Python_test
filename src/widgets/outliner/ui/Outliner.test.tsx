// NOTE: Outliner — это DOM-компонент (div/span), а не three.js сцена,
// поэтому @react-three/test-renderer здесь неприменим (он рендерит только
// R3F-элементы в mock WebGL canvas). Тестируем через @testing-library/react.
import { render, screen, fireEvent } from '@testing-library/react';
import { useAppStore } from '@app/store';
import type { SceneNode } from '@entities/scene/types';
import { Outliner } from './Outliner';

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

describe('Outliner', () => {
  beforeEach(() => reset());

  it('рендерит заглушку "Пусто" при пустом store', () => {
    render(<Outliner />);
    expect(screen.getByText('Пусто')).toBeTruthy();
  });

  it('рендерит 2 элемента для 2 нодов', () => {
    const a = makeNode({ id: 'a', name: 'Cube A' });
    const b = makeNode({ id: 'b', name: 'Cube B' });
    useAppStore.setState({ nodes: { a, b }, rootIds: ['a', 'b'] });

    render(<Outliner />);
    expect(screen.getByText('Cube A')).toBeTruthy();
    expect(screen.getByText('Cube B')).toBeTruthy();
    expect(screen.queryByText('Пусто')).toBeNull();
  });

  it('клик по ноду обновляет selection в store', () => {
    const a = makeNode({ id: 'a', name: 'Cube A' });
    useAppStore.setState({ nodes: { a }, rootIds: ['a'] });

    render(<Outliner />);
    fireEvent.click(screen.getByText('Cube A'));
    expect(useAppStore.getState().selection).toEqual(['a']);
  });

  it('shift+клик добавляет/убирает нод из multi-selection', () => {
    const a = makeNode({ id: 'a', name: 'Cube A' });
    const b = makeNode({ id: 'b', name: 'Cube B' });
    useAppStore.setState({ nodes: { a, b }, rootIds: ['a', 'b'], selection: ['a'] });

    render(<Outliner />);
    fireEvent.click(screen.getByText('Cube B'), { shiftKey: true });
    expect(useAppStore.getState().selection).toEqual(['a', 'b']);

    fireEvent.click(screen.getByText('Cube A'), { shiftKey: true });
    expect(useAppStore.getState().selection).toEqual(['b']);
  });

  it('группа разворачивается/сворачивается по клику на стрелку', () => {
    const child = makeNode({ id: 'c1', name: 'Child', parentId: 'g' });
    const group = makeNode({ id: 'g', name: 'Group', type: 'group' as SceneNode['type'], childrenIds: ['c1'] });
    useAppStore.setState({ nodes: { g: group, c1: child }, rootIds: ['g'] });

    render(<Outliner />);
    expect(screen.getByText('Child')).toBeTruthy();

    fireEvent.click(screen.getByText('▾'));
    expect(screen.queryByText('Child')).toBeNull();

    fireEvent.click(screen.getByText('▸'));
    expect(screen.getByText('Child')).toBeTruthy();
  });
});
// Дата актуализации: 25 сентября 2026 г.
