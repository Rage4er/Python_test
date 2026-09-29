import { useEffect } from 'react';
import { useAppStore } from '@app/store';
import { DeleteNodeCommand } from '@features/delete-node/model/DeleteNodeCommand';
import { DuplicateNodeCommand } from '@features/duplicate-node/model/DuplicateNodeCommand';
import { GroupCommand } from '@features/group/model/GroupCommand';
import { UngroupCommand } from '@features/group/model/UngroupCommand';
import { logger } from '@shared/lib/logger';

/** Игнорируем нажатия, когда фокус в поле ввода / текстовой области / contentEditable. */
function isEditableTarget(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null;
  // Фолбэк: у синтетических событий (dispatchEvent с переопределённым target)
  // currentTarget указывает на window — считаем это «не редактируемый фокус».
  if (!el || !(el instanceof Element)) return false;
  const tag = el.tagName.toUpperCase();
  return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (el as HTMLElement).isContentEditable === true;
}

export function useKeyboardShortcuts(): void {
  const store = useAppStore;

  useEffect(() => {
    logger.debug('Hotkeys', 'registered', { count: 8 });
    const handleKeyDown = (e: KeyboardEvent) => {
      // Не перехватываем ввод в текстовых полях (Inspector, переименование и т.п.)
      if (isEditableTarget(e.target)) return;

      const mod = e.ctrlKey || e.metaKey;
      const state = store.getState();
      logger.debug('Hotkeys', 'key', {
        key: e.code, ctrl: mod, shift: e.shiftKey,
        target: (e.target as HTMLElement | null)?.tagName,
      });

      // Ctrl+D / Cmd+D — дублировать выделенные ноды
      if (mod && e.code === 'KeyD') {
        e.preventDefault(); // обязательно: иначе Chrome откроет диспетчер закладок
        e.stopPropagation();
        logger.debug('Hotkeys', 'Ctrl+D duplicate', { selection: state.selection });
        if (state.selection.length > 0) {
          for (const id of state.selection) {
            const node = state.nodes[id];
            if (node) state.execute(new DuplicateNodeCommand(node));
          }
        }
        logger.debug('Hotkeys', 'key handled', { key: e.key, code: e.code });
        return;
      }

      // Delete
      if (e.code === 'Delete' || e.code === 'Backspace') {
        if (state.selection.length > 0) {
          e.preventDefault();
          for (const id of state.selection) {
            state.execute(new DeleteNodeCommand(id));
          }
          logger.debug('Hotkeys', 'key handled', { key: e.key, code: e.code });
        }
        return;
      }

      // Ctrl+Z / Ctrl+Y
      if (mod && e.code === 'KeyZ' && !e.shiftKey) {
        e.preventDefault();
        state.undo();
        logger.debug('Hotkeys', 'key handled', { key: e.key, code: e.code });
        return;
      }
      if (mod && (e.code === 'KeyY' || (e.code === 'KeyZ' && e.shiftKey))) {
        e.preventDefault();
        state.redo();
        logger.debug('Hotkeys', 'key handled', { key: e.key, code: e.code });
        return;
      }

      // Ctrl+G - Group
      if (mod && e.code === 'KeyG' && !e.shiftKey) {
        if (state.selection.length >= 2) {
          e.preventDefault();
          state.execute(new GroupCommand(state.selection));
          logger.debug('Hotkeys', 'key handled', { key: e.key, code: e.code });
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
          logger.debug('Hotkeys', 'key handled', { key: e.key, code: e.code });
        }
        return;
      }

      // Ctrl+A - Select All
      if (mod && e.code === 'KeyA') {
        e.preventDefault();
        state.setSelection(state.rootIds);
        logger.debug('Hotkeys', 'key handled', { key: e.key, code: e.code });
        return;
      }

      // Escape - Deselect
      if (e.code === 'Escape') {
        state.setSelection([]);
        logger.debug('Hotkeys', 'key handled', { key: e.key, code: e.code });
        return;
      }

      logger.debug('Hotkeys', 'unhandled', { key: e.code });
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}
// Дата актуализации: 29 сентября 2026 г.
