import { useState, useEffect } from 'react';
import { useAppStore } from '@app/store';
import { DeleteMultipleCommand } from '@features/delete-node/model/DeleteNodeCommand';
import { CreateNodeCommand } from '@features/create-node/model/CreateNodeCommand';
import { SetNodePropertyCommand } from '@features/edit-property/model/SetNodePropertyCommand';

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
          execute(new CreateNodeCommand({
            type: n.geometry.kind as any,
            position: [n.transform.position[0] + 5, n.transform.position[1], n.transform.position[2] + 5],
            name: `${n.name} (copy)`,
          }));
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
