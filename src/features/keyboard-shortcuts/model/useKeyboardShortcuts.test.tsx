// Хук вешает keydown на window — тестируем через renderHook + dispatchEvent
// реальных KeyboardEvent на window (jsdom).
import { describe, it, expect, beforeEach } from 'vitest';
import * as React from 'react';
import { HistoryManager } from '@features/undo-redo/history';
import { renderHook, render, fireEvent, cleanup } from '@testing-library/react';
import { useAppStore } from '@app/store';
import type { SceneNode } from '@entities/scene/types';
import { useKeyboardShortcuts } from './useKeyboardShortcuts';

function makeNode(id: string, overrides: Partial<SceneNode> = {}): SceneNode {
  return {
    id,
    type: 'box',
    name: `node-${id}`,
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

function press(opts: {
  code: string;
  key?: string;
  ctrl?: boolean;
  meta?: boolean;
  shift?: boolean;
  target?: HTMLElement;
}) {
  const e = new KeyboardEvent('keydown', {
    code: opts.code,
    key: opts.key ?? opts.code,
    ctrlKey: !!opts.ctrl,
    metaKey: !!opts.meta,
    shiftKey: !!opts.shift,
    bubbles: true,
    cancelable: true,
  });
  if (opts.target) {
    // Реальный путь события: dispatch на сам элемент, всплытие до window-слушателя.
    // (переопределить target через defineProperty нельзя — геттер нативного Event)
    if (!opts.target.isConnected) document.body.appendChild(opts.target);
    opts.target.dispatchEvent(e);
  } else {
    window.dispatchEvent(e);
  }
  return e;
}

beforeEach(() => {
  // Гарантированно снимаем все window-слушатели от предыдущих renderHook
  cleanup();
  useAppStore.setState({
    nodes: { a: makeNode('a'), b: makeNode('b') },
    rootIds: ['a', 'b'],
    selection: [],
  });
  // чистим историю, чтобы undo/redo не зависели от порядка тестов
  useAppStore.setState({ history: new HistoryManager() });
});

describe('useKeyboardShortcuts', () => {
  it('Ctrl+D с selection → дублирует ноду (DuplicateNodeCommand)', () => {
    renderHook(() => useKeyboardShortcuts());
    useAppStore.getState().setSelection(['a']);

    press({ code: 'KeyD', ctrl: true });

    const s = useAppStore.getState();
    expect(Object.keys(s.nodes)).toHaveLength(3); // a, b + копия
    expect(s.rootIds).toHaveLength(3);
    const copyId = s.rootIds.find((id) => id !== 'a' && id !== 'b');
    expect(copyId).toBeDefined();
    expect(s.nodes[copyId!].name).toBe('node-a (copy)');
    expect(s.selection).toEqual([copyId]);
  });

  it('Cmd+D (Mac, metaKey) тоже дублирует', () => {
    renderHook(() => useKeyboardShortcuts());
    useAppStore.getState().setSelection(['a']);

    press({ code: 'KeyD', meta: true });

    expect(Object.keys(useAppStore.getState().nodes)).toHaveLength(3);
  });

  it('Ctrl+D без selection → ничего не делает', () => {
    renderHook(() => useKeyboardShortcuts());

    press({ code: 'KeyD', ctrl: true });

    const s = useAppStore.getState();
    expect(Object.keys(s.nodes)).toHaveLength(2);
    expect(s.rootIds).toHaveLength(2);
  });

  it('Ctrl+D вызывает preventDefault (иначе Chrome откроет закладку)', () => {
    renderHook(() => useKeyboardShortcuts());
    useAppStore.getState().setSelection(['a']);

    const e = press({ code: 'KeyD', ctrl: true });
    expect(e.defaultPrevented).toBe(true);
  });

  it('Delete удаляет выделенное', () => {
    renderHook(() => useKeyboardShortcuts());
    useAppStore.getState().setSelection(['a']);

    press({ code: 'Delete' });

    const s = useAppStore.getState();
    expect(s.nodes['a']).toBeUndefined();
    expect(s.rootIds).toEqual(['b']);
  });

  it('Escape снимает выделение', () => {
    renderHook(() => useKeyboardShortcuts());
    useAppStore.getState().setSelection(['a', 'b']);

    press({ code: 'Escape' });

    expect(useAppStore.getState().selection).toEqual([]);
  });

  it('Ctrl+Z → undo, Ctrl+Y → redo', () => {
    renderHook(() => useKeyboardShortcuts());
    const st = () => useAppStore.getState();
    st().setSelection(['a']);
    press({ code: 'Delete' });
    expect(st().nodes['a']).toBeUndefined();

    press({ code: 'KeyZ', ctrl: true }); // undo — нода вернулась
    expect(st().nodes['a']).toBeDefined();

    press({ code: 'KeyY', ctrl: true }); // redo — удалена снова
    expect(st().nodes['a']).toBeUndefined();
  });

  it('хук игнорирует ввод в input/textarea/contentEditable', () => {
    // End-to-end через реальную цепочку React-событий: инпут с onKeyDown={useKeyboardShortcuts()},
    // focus + fireEvent.keyDown → e.target === input.
    function Harness() {
      useKeyboardShortcuts();
      return <input data-testid="inp" onKeyDown={() => undefined} />;
    }
    const { getByTestId } = render(<Harness />);
    const input = getByTestId('inp') as HTMLInputElement;
    input.focus();

    useAppStore.getState().setSelection(['a']);
    fireEvent.keyDown(input, { code: 'Delete', key: 'Delete' });
    fireEvent.keyDown(input, { code: 'KeyD', key: 'd', ctrlKey: true });

    // ни удаление, ни дублирование не сработали (guard отработал)
    expect(useAppStore.getState().nodes['a']).toBeDefined();
    expect(Object.keys(useAppStore.getState().nodes)).toHaveLength(2);

    // контроль: то же событие от НЕредактируемой цели (window) — срабатывает
    press({ code: 'KeyD', ctrl: true });
    expect(Object.keys(useAppStore.getState().nodes)).toHaveLength(3);
  });

  it('Ctrl+A выделяет все корневые ноды', () => {
    renderHook(() => useKeyboardShortcuts());

    press({ code: 'KeyA', ctrl: true });

    expect(useAppStore.getState().selection).toEqual(['a', 'b']);
  });
});
