import { useState } from 'react';
import { useAppStore } from '@app/store';
import { ProgressOverlay } from './ProgressOverlay';

export function BooleanToolbar() {
  const selection = useAppStore((s) => s.selection);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  const disabled = selection.length < 2 || busy;

  const run = async (op: 'union' | 'subtract' | 'intersect') => {
    setBusy(true);
    setError(null);
    setInfo(null);

    try {
      const { executeBooleanOp } = await import('@features/boolean-op/model/executeBooleanOp');
      const result = await executeBooleanOp(op, selection);

      if (result.status === 'stale') {
        setInfo('Сцена изменилась — операция отменена');
      } else if (result.status === 'error') {
        setError(result.reason ?? 'Ошибка CSG');
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Ошибка CSG');
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      <div className="flex items-center gap-2">
        <button
          onClick={() => run('union')}
          disabled={disabled}
          className="px-3 py-1 border border-border rounded disabled:opacity-40 text-sm"
        >
          ∪ Union
        </button>
        <button
          onClick={() => run('subtract')}
          disabled={disabled}
          className="px-3 py-1 border border-border rounded disabled:opacity-40 text-sm"
        >
          − Subtract
        </button>
        <button
          onClick={() => run('intersect')}
          disabled={disabled}
          className="px-3 py-1 border border-border rounded disabled:opacity-40 text-sm"
        >
          ∩ Intersect
        </button>
        {error && <span className="text-xs text-red-500">{error}</span>}
        {info && <span className="text-xs text-blue-500">{info}</span>}
      </div>
      <ProgressOverlay visible={busy} />
    </>
  );
}
