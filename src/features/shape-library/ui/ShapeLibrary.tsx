import { useAppStore } from '@app/store';
import type { PrimitiveType } from '@entities/scene/types';
import { CreateNodeCommand } from '@features/create-node/model/CreateNodeCommand';

const PRIMITIVES: { type: PrimitiveType; label: string; emoji: string }[] = [
  { type: 'box',      label: 'Куб',      emoji: '🟦' },
  { type: 'sphere',   label: 'Сфера',    emoji: '⚪' },
  { type: 'cylinder', label: 'Цилиндр',  emoji: '🛢️' },
  { type: 'cone',     label: 'Конус',    emoji: '🔺' },
  { type: 'torus',    label: 'Тор',      emoji: '🍩' },
];

export function ShapeLibrary() {
  const execute = useAppStore((s) => s.execute);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xs font-semibold text-muted uppercase tracking-wider mb-1">
        Библиотека
      </h3>
      {PRIMITIVES.map((p) => (
        <button
          key={p.type}
          onClick={() => execute(new CreateNodeCommand({ type: p.type }))}
          className="flex items-center gap-2 px-3 py-2 text-sm border border-border rounded bg-panel hover:bg-bg transition-colors text-left"
        >
          <span className="text-lg">{p.emoji}</span>
          <span>{p.label}</span>
        </button>
      ))}
    </div>
  );
}
// Дата актуализации: 24 мая 2024 г.
