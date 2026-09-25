// DOM-компонент, тестируем через @testing-library/react.
import { render, screen, fireEvent } from '@testing-library/react';
import { useAppStore } from '@app/store';
import { ShapeLibrary } from './ShapeLibrary';

describe('ShapeLibrary', () => {
  beforeEach(() => useAppStore.setState({ nodes: {}, rootIds: [], selection: [] }));

  it('рендерит 5 кнопок примитивов', () => {
    render(<ShapeLibrary />);
    expect(screen.getByText('Библиотека')).toBeTruthy();
    for (const label of ['Куб', 'Сфера', 'Цилиндр', 'Конус', 'Тор']) {
      expect(screen.getByText(label)).toBeTruthy();
    }
  });

  it('клик по "Куб" создаёт box-нод в store', () => {
    render(<ShapeLibrary />);
    fireEvent.click(screen.getByText('Куб'));

    const { nodes, rootIds } = useAppStore.getState();
    expect(rootIds).toHaveLength(1);
    const node = nodes[rootIds[0]];
    expect(node.type).toBe('box');
    expect(node.name).toBe('box');
  });

  it('несколько кликов создают несколько нодов', () => {
    render(<ShapeLibrary />);
    fireEvent.click(screen.getByText('Сфера'));
    fireEvent.click(screen.getByText('Тор'));

    const { nodes, rootIds } = useAppStore.getState();
    expect(rootIds).toHaveLength(2);
    expect(Object.values(nodes).map((n) => n.type).sort()).toEqual(['sphere', 'torus']);
  });
});
// Дата актуализации: 25 сентября 2026 г.
