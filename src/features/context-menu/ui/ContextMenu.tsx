import { useState, useEffect } from 'react';
import { useAppStore } from '@app/store';
import { DeleteMultipleCommand } from '@features/delete-node/model/DeleteNodeCommand';
import { CreateNodeCommand } from '@features/create-node/model/CreateNodeCommand';
import { SetNodePropertyCommand } from '@features/edit-property/model/SetNodePropertyCommand';
import { logger } from '@shared/lib/logger';

interface Pos { x: number; y: number; }

export function ContextMenu() {
  const [pos, setPos] = useState<Pos | null>(null);
  const selection = useAppStore((s) => s.selection);
  const nodes = useAppStore((s) => s.nodes);
  const execute = useAppStore((s) => s.execute);

  useEffect(() => {
    const onContext = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest('canvas')) return;
      e.preventDefault();
      setPos({ x: e.clientX, y: e.clientY });
    };
    const onClick = () => setPos(null);
    window.addEventListener('contextmenu', onContext);
    window.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('contextmenu', onContext);
      window.removeEventListener('click', onClick);
    };
  }, []);

  if (!pos || selection.length === 0) return null;

  const single = selection.length === 1 ? nodes[selection[0]] : null;

  const actions: { label: string; onClick: () => void }[] = [
    {
      label: 'Дублировать',
      onClick: () => {
        for (const id of selection) {
          const n = nodes[id];
          if (!n) continue;
          const proto = n.geometry.kind === 'sphere' ? 'sphere' : 'box';
          // BUG-диагностика: custom-геометрия (CSG) не копируется — прототип всегда box
          logger.info('Duplicate', 'copy', { sourceId: id, sourceKind: n.geometry.kind, proto });
          execute(new CreateNodeCommand({
            type: n.geometry.kind as any,
            position: [n.transform.position[0] + 5, n.transform.position[1], n.transform.position[2] + 5],
            name: `${n.name} (copy)`,
          }));
          if (n.geometry.kind === 'custom') {
            logger.warn('Duplicate', 'fallback to box', { sourceId: id, sourceKind: n.geometry.kind });
          }
        }
      },
    },
    {
      label: 'Удалить',
      onClick: () => execute(new DeleteMultipleCommand(selection)),
    },
  ];

  if (single) {
    actions.push({
      label: single.material.isHole ? 'Сделать solid' : 'Сделать hole',
      onClick: () => execute(new SetNodePropertyCommand(single.id, {
        key: 'material', value: { isHole: !single.material.isHole },
      })),
    });
  }

  return (
    <div
      className="fixed z-50 bg-panel border border-border rounded shadow-lg py-1 min-w-40"
      style={{ left: pos.x, top: pos.y }}
    >
      {actions.map((a) => (
        <button
          key={a.label}
          onClick={() => { a.onClick(); setPos(null); }}
          className="w-full text-left px-3 py-1.5 text-sm hover:bg-bg"
        >
          {a.label}
        </button>
      ))}
    </div>
  );
}
// Дата актуализации: 24 мая 2024 г.
