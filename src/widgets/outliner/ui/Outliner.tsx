import { useState } from 'react';
import { useAppStore } from '@app/store';

function OutlinerNode({ id, depth }: { id: string; depth: number }) {
  const node = useAppStore((s) => s.nodes[id]);
  const selection = useAppStore((s) => s.selection);
  const setSelection = useAppStore((s) => s.setSelection);
  
  const [expanded, setExpanded] = useState(true);

  if (!node) return null;
  const selected = selection.includes(id);
  const isGroup = node.type === 'group';

  return (
    <div>
      <div
        className={`flex items-center gap-1 px-2 py-1 rounded cursor-pointer ${
          selected ? 'bg-accent text-white' : 'hover:bg-bg'
        }`}
        style={{ paddingLeft: 8 + depth * 12 }}
        onClick={(e) => {
          e.stopPropagation();
          if (e.shiftKey) {
            setSelection(selected ? selection.filter((x) => x !== id) : [...selection, id]);
          } else {
            setSelection([id]);
          }
        }}
      >
        {isGroup && (
          <button
            onClick={(e) => { e.stopPropagation(); setExpanded((v) => !v); }}
            className="w-4 text-xs"
          >
            {expanded ? '▾' : '▸'}
          </button>
        )}
        <span className="truncate">{node.name}</span>
      </div>
      {isGroup && expanded && node.childrenIds.map((cid) => (
        <OutlinerNode key={cid} id={cid} depth={depth + 1} />
      ))}
    </div>
  );
}

export function Outliner() {
  const rootIds = useAppStore((s) => s.rootIds);

  return (
    <div className="flex flex-col gap-0.5 p-2 text-sm overflow-y-auto">
      {rootIds.length === 0 && <div className="text-muted text-xs">Пусто</div>}
      {rootIds.map((id) => (
        <OutlinerNode key={id} id={id} depth={0} />
      ))}
    </div>
  );
}
// Дата актуализации: 24 мая 2024 г.
