// DOM-компонент, тестируем через @testing-library/react (см. Outliner.test.tsx).
import { render, screen, fireEvent } from '@testing-library/react';
import { useAppStore } from '@app/store';
import type { SceneNode } from '@entities/scene/types';
import { Inspector } from './Inspector';

function makeNode(overrides: Partial<SceneNode> & { id: string; name: string }): SceneNode {
  return {
    type: 'box',
    transform: { position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
    geometry: { kind: 'box', params: { width: 1, height: 1, depth: 1 } },
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

const setScene = (nodes: Record<string, SceneNode>, rootIds: string[], selection: string[]) =>
  useAppStore.setState({ nodes, rootIds, selection });

describe('Inspector', () => {
  beforeEach(() => useAppStore.setState({ nodes: {}, rootIds: [], selection: [] }));

  it('пустая селекция → "Ничего не выбрано"', () => {
    render(<Inspector />);
    expect(screen.getByText('Ничего не выбрано')).toBeTruthy();
  });

  it('несколько нодов без активного → счётчик "Выбрано: N"', () => {
    setScene({}, [], ['a', 'b']);
    render(<Inspector />);
    expect(screen.getByText('Выбрано: 2')).toBeTruthy();
  });

  it('рендерит свойства выбранного нода', () => {
    const n = makeNode({ id: 'n1', name: 'Cube' });
    setScene({ n1: n }, ['n1'], ['n1']);
    render(<Inspector />);
    expect(screen.getByDisplayValue('Cube')).toBeTruthy();
    expect(screen.getByText('Позиция (mm)')).toBeTruthy();
    expect(screen.getByText('Цвет')).toBeTruthy();
  });

  it('изменение имени вызывает SetNodePropertyCommand (store обновлён)', () => {
    const n = makeNode({ id: 'n1', name: 'Cube' });
    setScene({ n1: n }, ['n1'], ['n1']);
    render(<Inspector />);
    fireEvent.change(screen.getByDisplayValue('Cube'), { target: { value: 'Renamed' } });
    expect(useAppStore.getState().nodes['n1'].name).toBe('Renamed');
  });

  it('правка позиции X обновляет transform.position', () => {
    const n = makeNode({ id: 'n1', name: 'Cube' });
    setScene({ n1: n }, ['n1'], ['n1']);
    render(<Inspector />);
    const posInputs = screen.getAllByDisplayValue('0');
    fireEvent.change(posInputs[0], { target: { value: '5' } });
    expect(useAppStore.getState().nodes['n1'].transform.position[0]).toBe(5);
  });

  it('чекбокс видимости переключает node.visible', () => {
    const n = makeNode({ id: 'n1', name: 'Cube' });
    setScene({ n1: n }, ['n1'], ['n1']);
    render(<Inspector />);
    const vis = screen.getAllByRole('checkbox')[0]; // первый — "Видимый"
    fireEvent.click(vis);
    expect(useAppStore.getState().nodes['n1'].visible).toBe(false);
  });

  it('изменение цвета обновляет material.color', () => {
    const n = makeNode({ id: 'n1', name: 'Cube' });
    setScene({ n1: n }, ['n1'], ['n1']);
    render(<Inspector />);
    const color = document.querySelector('input[type="color"]') as HTMLInputElement;
    fireEvent.change(color, { target: { value: '#ff0000' } });
    expect(useAppStore.getState().nodes['n1'].material.color).toBe('#ff0000');
  });

  it('group-нод показывает счётчик детей и кнопку "Разгруппировать"', () => {
    const c = makeNode({ id: 'c1', name: 'Child', parentId: 'g1' });
    const g = makeNode({ id: 'g1', name: 'Group', type: 'group', childrenIds: ['c1'] });
    setScene({ g1: g, c1: c }, ['g1'], ['g1']);
    render(<Inspector />);
    expect(screen.getByText('Дочерних объектов')).toBeTruthy();
    expect(screen.getByText('Разгруппировать')).toBeTruthy();
  });
});
// Дата актуализации: 25 сентября 2026 г.
