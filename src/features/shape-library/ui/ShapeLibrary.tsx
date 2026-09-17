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
      {PRIMITIVES.map((p) => (
        <div
          key={p.type}
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData('application/x-primitive', p.type);
            e.dataTransfer.effectAllowed = 'copy';
          }}
          onClick={() => execute(new CreateNodeCommand({ type: p.type }))}
          className="px-3 py-2 border border-border rounded cursor-grab active:cursor-grabbing
                     hover:bg-bg select-none flex items-center gap-2 text-sm"
        >
          <span>{p.emoji}</span>
          <span>{p.label}</span>
        </div>
      ))}
    </div>
  );
}
