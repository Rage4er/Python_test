import { useAppStore } from '@app/store';
import type { PrimitiveType } from '@entities/scene/types';
import { CreateNodeCommand } from '@features/create-node/model/CreateNodeCommand';
import { ICONS, type IconName } from '@shared/ui/Icon';

const PRIMITIVES: { type: PrimitiveType; label: string; icon: IconName }[] = [
  { type: 'box',      label: 'Куб',       icon: 'box' },       // был 🟦 → Square
  { type: 'sphere',   label: 'Сфера',     icon: 'sphere' },    // был ⚪ → Circle
  { type: 'cylinder', label: 'Цилиндр',   icon: 'cylinder' },  // был 🛢️ → Cylinder
  { type: 'cone',     label: 'Конус',     icon: 'cone' },      // был 🔺 → Triangle
  { type: 'torus',    label: 'Тор',       icon: 'torus' },     // был 🍩 → Donut
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
          <span className="inline-flex">
            {(() => {
              const Cmp = ICONS[p.icon];
              return <Cmp size={18} aria-hidden="true" />;
            })()}
          </span>
          <span>{p.label}</span>
        </button>
      ))}
    </div>
  );
}
// Дата актуализации: 24 мая 2024 г.
