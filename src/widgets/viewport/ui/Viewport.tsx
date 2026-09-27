import { useEffect, useRef } from 'react';
import { EngineAdapter } from '@shared/engine/EngineAdapter';
import { setGlobalAdapter } from '@shared/engine/engineRef';
import { useAppStore } from '@app/store';

// Реестр адаптера — единый на проект: @shared/engine/engineRef
// (setGlobalAdapter/getEngineAdapter). Ранее здесь был дублирующий локальный
// реестр, из-за чего CSG (executeBooleanOp) никогда не видел адаптер.

export function Viewport() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const adapterRef = useRef<EngineAdapter | null>(null);
  const store = useAppStore;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || adapterRef.current) return;

    const adapter = new EngineAdapter(canvas, {
      getState: () => store.getState(),
      onSelectionChange: (ids) => store.getState().setSelection(ids),
      onTransformEnd: (id, before, after) => {
        // Import command dynamically to avoid circular deps in some setups
        import('@features/transform-node/model/TransformNodeCommand').then(({ TransformNodeCommand }) => {
           const cmd = new TransformNodeCommand(id, before, after);
           store.getState().execute(cmd);
        }).catch(() => {
           // Fallback if module not found or simple update
           console.warn("TransformNodeCommand not found, skipping command");
        });
      },
      onTransformMultipleEnd: (updates) => {
        if (updates.length === 0) return;
        import('@features/transform-node/model/TransformMultipleCommand').then(({ TransformMultipleCommand }) => {
           store.getState().execute(new TransformMultipleCommand(updates));
        }).catch(() => {
           console.warn("TransformMultipleCommand not found");
        });
      },
      onDropPrimitive: (type, position) => {
        import('@features/create-node/model/CreateNodeCommand').then(({ CreateNodeCommand }) => {
           store.getState().execute(new CreateNodeCommand({ type, position }));
        });
      },
    });

    adapterRef.current = adapter;
    setGlobalAdapter(adapter);

    // Экспозиция сцены для E2E-тестов (Playwright читает состояние через page.evaluate).
    // Сцена создаётся в Viewport/EngineAdapter, не в App.tsx.
    if (import.meta.env.DEV || import.meta.env.MODE === 'test') {
      const w = window as unknown as Record<string, unknown>;
      w.__THREE_SCENE__ = adapter.scene;
      w.__THREE_CAMERA__ = adapter.camera;
      w.__THREE_RENDERER__ = adapter.renderer;
    }

    // Initial sync
    const initial = store.getState();
    adapter.syncScene(initial);
    adapter.setTheme(initial.theme);

    // Subscriptions
    const unsubNodes = store.subscribe(
      (s) => ({ nodes: s.nodes, rootIds: s.rootIds, selection: s.selection }),
      (slice) => adapter.syncScene({ ...slice, nodes: slice.nodes }),
      { equalityFn: (a, b) => a.nodes === b.nodes && a.selection === b.selection }
    );

    const unsubTheme = store.subscribe(
      (s) => s.theme,
      (theme) => adapter.setTheme(theme)
    );

    return () => {
      unsubNodes();
      unsubTheme();
      adapter.dispose();
      adapterRef.current = null;
      setGlobalAdapter(null);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full block" tabIndex={0} />;
}
// Дата актуализации: 24 мая 2024 г.
