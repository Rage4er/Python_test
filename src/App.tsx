import { useAppStore } from '@app/store';
import { BooleanToolbar } from '@features/boolean-op/ui/BooleanToolbar';
import { FileMenu } from '@features/import-export/ui/FileMenu';
import { ShapeLibrary } from '@features/shape-library/ui/ShapeLibrary';
import { Inspector } from '@widgets/inspector/ui/Inspector';
import { Outliner } from '@widgets/outliner/ui/Outliner';
import { Viewport } from '@widgets/viewport/ui/Viewport';
import { ContextMenu } from '@features/context-menu/ui/ContextMenu';
import { useEffect } from 'react';

export function App() {
  const undo = useAppStore((s) => s.undo);
  const redo = useAppStore((s) => s.redo);
  const theme = useAppStore((s) => s.theme);
  const toggleTheme = useAppStore((s) => s.toggleTheme);

  // Autosave
  useEffect(() => {
    let timer: number | null = null;
    const unsub = useAppStore.subscribe(
      (s) => ({ nodes: s.nodes, rootIds: s.rootIds }),
      () => {
        if (timer !== null) window.clearTimeout(timer);
        timer = window.setTimeout(async () => {
          const { saveToLocal } = await import('@features/import-export/model/saveLoad');
          saveToLocal();
          timer = null;
        }, 2000);
      },
      { equalityFn: (a, b) => a.nodes === b.nodes && a.rootIds === b.rootIds }
    );
    return () => {
      unsub();
      if (timer !== null) window.clearTimeout(timer);
    };
  }, []);

  // Load from local storage on mount
  useEffect(() => {
    (async () => {
      const { loadFromLocal } = await import('@features/import-export/model/saveLoad');
      loadFromLocal();
    })();
  }, []);

  return (
    <div className="h-full flex flex-col bg-bg text-fg">
      <header className="h-12 border-b border-border bg-panel flex items-center gap-2 px-4 shrink-0">
        <FileMenu />
        <span className="font-semibold mr-4">Tinkercad Clone</span>
        <button onClick={undo} className="px-3 py-1 border border-border rounded text-sm" title="Undo (Ctrl+Z)">↶</button>
        <button onClick={redo} className="px-3 py-1 border border-border rounded text-sm" title="Redo (Ctrl+Y)">↷</button>
        <button onClick={toggleTheme} className="px-3 py-1 border border-border rounded text-sm">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <div className="flex-1" />
        <BooleanToolbar />
        <div className="w-px h-6 bg-border mx-2" />
        <span className="text-xs text-muted">mm · snap 1</span>
      </header>

      <div className="flex-1 flex min-h-0 overflow-hidden">
        <aside className="w-56 border-r border-border bg-panel p-3 flex flex-col gap-3 shrink-0 overflow-y-auto">
          <div className="text-xs text-muted font-medium">Библиотека</div>
          <ShapeLibrary />
        </aside>

        <div className="w-48 border-r border-border bg-panel flex flex-col shrink-0">
          <div className="text-xs text-muted p-2 border-b border-border font-medium">Объекты</div>
          <Outliner />
        </div>

        <main className="flex-1 min-w-0 relative">
          <Viewport />
          <ContextMenu />
        </main>

        <aside className="w-64 border-l border-border bg-panel shrink-0 overflow-y-auto">
          <div className="text-xs text-muted p-2 border-b border-border font-medium">Свойства</div>
          <Inspector />
        </aside>
      </div>
    </div>
  );
}
