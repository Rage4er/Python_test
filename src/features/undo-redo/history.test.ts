import { describe, it, expect } from 'vitest';
import { HistoryManager, HISTORY_LIMIT } from './history';
import type { Command } from './commands/types';
import type { SceneState } from '@entities/scene/types';

function makeCmd(label = 'cmd'): Command {
  return {
    id: label + Math.random(),
    timestamp: Date.now(),
    label,
    apply: (s) => s,
    revert: (s) => s,
  };
}

describe('HistoryManager', () => {
  it('execute() pushes to past, clears future; undo returns cmd; redo returns same cmd', () => {
    const h = new HistoryManager();
    const c = makeCmd('a');
    h.execute(c);
    expect(h.canUndo()).toBe(true);
    expect(h.canRedo()).toBe(false);
    expect(h.undo()).toBe(c);
    expect(h.canRedo()).toBe(true);
    expect(h.redo()).toBe(c);
    expect(h.canUndo()).toBe(true);
  });

  it('undo on empty history is a no-op and does not throw', () => {
    const h = new HistoryManager();
    expect(() => h.undo()).not.toThrow();
    expect(h.undo()).toBeNull();
    expect(h.canUndo()).toBe(false);
    expect(h.canRedo()).toBe(false);
  });

  it('redo without prior undo is a no-op and does not throw', () => {
    const h = new HistoryManager();
    h.execute(makeCmd('x'));
    expect(h.redo()).toBeNull();
    // after undo+redo again works
    h.undo();
    expect(h.redo()).not.toBeNull();
  });

  it('clear() empties both stacks', () => {
    const h = new HistoryManager();
    h.execute(makeCmd('1'));
    h.execute(makeCmd('2'));
    h.undo();
    h.clear();
    expect(h.canUndo()).toBe(false);
    expect(h.canRedo()).toBe(false);
    expect(h.undo()).toBeNull();
    expect(h.redo()).toBeNull();
  });

  it('limit 100: the 101st command evicts the first one', () => {
    const h = new HistoryManager();
    const cmds: Command[] = [];
    for (let i = 0; i <= HISTORY_LIMIT; i++) {
      const c = makeCmd(`c${i}`);
      cmds.push(c);
      h.execute(c);
    }
    // pop all: should get last HISTORY_LIMIT commands in LIFO order,
    // and the very first command must have been evicted
    const popped: Command[] = [];
    let c: Command | null;
    while ((c = h.undo())) popped.push(c);
    expect(popped.length).toBe(HISTORY_LIMIT);
    expect(popped[0]).toBe(cmds[HISTORY_LIMIT]); // newest first
    expect(popped[popped.length - 1]).toBe(cmds[1]); // oldest kept
    expect(popped).not.toContain(cmds[0]); // first evicted
  });

  it('mixed operations preserve LIFO order', () => {
    const h = new HistoryManager();
    const a = makeCmd('a'), b = makeCmd('b'), c = makeCmd('c');
    h.execute(a);
    h.execute(b);
    expect(h.undo()).toBe(b);
    h.execute(c); // branching: future cleared
    expect(h.canRedo()).toBe(false);
    expect(h.undo()).toBe(c);
    expect(h.undo()).toBe(a);
    expect(h.undo()).toBeNull();
    expect(h.redo()).toBe(a);
    expect(h.redo()).toBe(c);
    expect(h.redo()).toBeNull();
  });

  it('new execute after undo clears redo stack', () => {
    const h = new HistoryManager();
    const a = makeCmd('a'), b = makeCmd('b'), c2 = makeCmd('c');
    h.execute(a);
    h.execute(b);
    h.undo();
    h.execute(c2);
    expect(h.canRedo()).toBe(false);
    expect(h.redo()).toBeNull();
  });
});
