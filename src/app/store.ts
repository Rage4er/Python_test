import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import type { SceneState, SceneNode } from '@entities/scene/types';
import type { Command } from '@features/undo-redo/commands/types';
import { HistoryManager } from '@features/undo-redo/history';

interface AppState extends SceneState {
  theme: 'light' | 'dark';
  history: HistoryManager;
  sceneRevision: number;

  // Actions
  execute: (cmd: Command) => void;
  undo: () => void;
  redo: () => void;
  setSelection: (ids: string[]) => void;
  toggleTheme: () => void;

  // Internal
  _setState: (next: Partial<SceneState>) => void;
  _bumpRevision: () => void;
}

export const useAppStore = create<AppState>()(
  subscribeWithSelector((set, get) => ({
    nodes: {},
    rootIds: [],
    selection: [],
    theme: 'light',
    history: new HistoryManager(),
    sceneRevision: 0,

    execute: (cmd) => {
      const before = get();
      const next = cmd.apply({
        nodes: before.nodes,
        rootIds: before.rootIds,
        selection: before.selection,
      });
      get().history.execute(cmd);
      set({
        nodes: next.nodes,
        rootIds: next.rootIds,
        selection: next.selection,
        sceneRevision: before.sceneRevision + 1,
      });
    },

    undo: () => {
      const cmd = get().history.undo();
      if (!cmd) return;
      const before = get();
      const next = cmd.revert({
        nodes: before.nodes,
        rootIds: before.rootIds,
        selection: before.selection,
      });
      set({
        nodes: next.nodes,
        rootIds: next.rootIds,
        selection: next.selection,
        sceneRevision: before.sceneRevision + 1,
      });
    },

    redo: () => {
      const cmd = get().history.redo();
      if (!cmd) return;
      const before = get();
      const next = cmd.apply({
        nodes: before.nodes,
        rootIds: before.rootIds,
        selection: before.selection,
      });
      set({
        nodes: next.nodes,
        rootIds: next.rootIds,
        selection: next.selection,
        sceneRevision: before.sceneRevision + 1,
      });
    },

    setSelection: (selection) => set({ selection }),

    toggleTheme: () =>
      set((s) => ({ theme: s.theme === 'light' ? 'dark' : 'light' })),

    _setState: (next) =>
      set((s) => ({
        nodes: next.nodes ?? s.nodes,
        rootIds: next.rootIds ?? s.rootIds,
        selection: next.selection ?? s.selection,
      })),

    _bumpRevision: () =>
      set((s) => ({ sceneRevision: s.sceneRevision + 1 })),
  }))
);
