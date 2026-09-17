import { useEffect } from 'react';
import { useAppStore } from '@app/store';
import { DeleteNodeCommand } from '@features/delete-node/model/DeleteNodeCommand';
import { GroupCommand } from '@features/group/model/GroupCommand';
import { UngroupCommand } from '@features/group/model/UngroupCommand';

export function useKeyboardShortcuts(): void {
  const store = useAppStore;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const mod = e.ctrlKey || e.metaKey;
      const state = store.getState();

      // Delete
      if (e.code === 'Delete' || e.code === 'Backspace') {
        if (state.selection.length > 0) {
          e.preventDefault();
          for (const id of state.selection) {
            state.execute(new DeleteNodeCommand(id));
          }
        }
        return;
      }

      // Ctrl+Z / Ctrl+Y
      if (mod && e.code === 'KeyZ' && !e.shiftKey) {
        e.preventDefault();
        state.undo();
        return;
      }
      if (mod && (e.code === 'KeyY' || (e.code === 'KeyZ' && e.shiftKey))) {
        e.preventDefault();
        state.redo();
        return;
      }

      // Ctrl+G - Group
      if (mod && e.code === 'KeyG' && !e.shiftKey) {
        if (state.selection.length >= 2) {
          e.preventDefault();
          state.execute(new GroupCommand(state.selection));
        }
        return;
      }

      // Ctrl+Shift+G - Ungroup
      if (mod && e.shiftKey && e.code === 'KeyG') {
        const groups = state.selection.filter((id) => state.nodes[id]?.type === 'group');
        if (groups.length > 0) {
          e.preventDefault();
          for (const gid of groups) {
            state.execute(new UngroupCommand(gid));
          }
        }
        return;
      }

      // Ctrl+A - Select All
      if (mod && e.code === 'KeyA') {
        e.preventDefault();
        state.setSelection(state.rootIds);
        return;
      }

      // Escape - Deselect
      if (e.code === 'Escape') {
        state.setSelection([]);
        return;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}
// Дата актуализации: 24 мая 2024 г.
