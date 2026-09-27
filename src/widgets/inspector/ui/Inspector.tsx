import { useAppStore } from '@app/store';
import { SetNodePropertyCommand } from '@features/edit-property/model/SetNodePropertyCommand';
import { GroupCommand, UngroupCommand } from '@features/group/model/GroupCommand';
import type { SceneNode } from '@entities/scene/types';
import { NumberInput } from '@shared/ui/NumberInput';

export function Inspector() {
  const selection = useAppStore((s) => s.selection);
  const node = useAppStore((s) => (s.selection[0] ? s.nodes[s.selection[0]] : null));
  const execute = useAppStore((s) => s.execute);

  if (!node) {
    return (
      <div className="text-sm text-muted p-2">
        {selection.length === 0 ? 'Ничего не выбрано' : `Выбрано: ${selection.length}`}
      </div>
    );
  }

  const patchTransform = (part: 'position' | 'rotation' | 'scale', axis: 0 | 1 | 2, value: number) => {
    const next = [...node.transform[part]] as [number, number, number];
    next[axis] = value;
    execute(new SetNodePropertyCommand(node.id, { key: 'transform', value: { [part]: next } }));
  };

  const patchMaterial = (part: 'color' | 'opacity' | 'isHole', value: any) => {
    execute(new SetNodePropertyCommand(node.id, { key: 'material', value: { [part]: value } }));
  };

  if (node.type === 'group') {
    return (
      <div className="flex flex-col gap-3 p-2 text-sm">
        <Field label="Имя">
          <input
            value={node.name}
            onChange={(e) => execute(new SetNodePropertyCommand(node.id, { key: 'name', value: e.target.value }))}
            className="w-full px-2 py-1 bg-bg border border-border rounded"
          />
        </Field>
        <Field label="Дочерних объектов">
          <span>{node.childrenIds.length}</span>
        </Field>
        <button
          onClick={() => execute(new UngroupCommand(node.id))}
          className="px-3 py-1 border border-border rounded hover:bg-bg"
        >
          Разгруппировать
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-2 text-sm overflow-y-auto">
      <Field label="Имя">
        <input
          value={node.name}
          onChange={(e) => execute(new SetNodePropertyCommand(node.id, { key: 'name', value: e.target.value }))}
          className="w-full px-2 py-1 bg-bg border border-border rounded"
        />
      </Field>

      <Field label="Видимый">
        <input type="checkbox" checked={node.visible} onChange={(e) => execute(new SetNodePropertyCommand(node.id, { key: 'visible', value: e.target.checked }))} />
      </Field>

      <Field label="Позиция (mm)">
        <Vec3 value={node.transform.position} step={0.1} precision={3} unit="mm" onChange={(a, v) => patchTransform('position', a, v)} />
      </Field>

      <Field label="Вращение (°)">
        <Vec3
          value={node.transform.rotation.map((r) => (r * 180) / Math.PI) as [number, number, number]}
          step={15} precision={2} unit="°"
          onChange={(a, v) => patchTransform('rotation', a, (v * Math.PI) / 180)}
        />
      </Field>

      <Field label="Масштаб">
        <Vec3 value={node.transform.scale} step={0.1} precision={3} onChange={(a, v) => patchTransform('scale', a, v)} />
      </Field>

      <Field label="Цвет">
        <input
          type="color"
          value={node.material.color}
          onChange={(e) => patchMaterial('color', e.target.value)}
          className="w-full h-8"
        />
      </Field>

      <Field label="Прозрачность">
        <div className="flex items-center gap-2">
          <input
            type="range" min={0.1} max={1} step={0.05}
            value={node.material.opacity}
            onChange={(e) => patchMaterial('opacity', parseFloat(e.target.value))}
          />
          <NumberInput
            value={node.material.opacity}
            onChange={(v) => patchMaterial('opacity', v)}
            step={0.05} min={0.1} max={1} precision={2}
            label="Прозрачность" className="w-20"
          />
        </div>
      </Field>

      <Field label="Дырка (hole)">
        <input type="checkbox" checked={node.material.isHole} onChange={(e) => patchMaterial('isHole', e.target.checked)} />
      </Field>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs text-muted mb-1">{label}</div>
      {children}
    </div>
  );
}

function Vec3({
  value,
  onChange,
  step = 0.1,
  precision = 3,
  unit,
}: {
  value: [number, number, number];
  onChange: (axis: 0 | 1 | 2, v: number) => void;
  step?: number;
  precision?: number;
  unit?: string;
}) {
  return (
    <div className="grid grid-cols-3 gap-1">
      {(['X', 'Y', 'Z'] as const).map((axis, a) => (
        <NumberInput
          key={axis}
          label={`${axis}${unit ? ` (${unit})` : ''}`}
          value={value[a]}
          onChange={(v) => onChange(a as 0 | 1 | 2, v)}
          step={step}
          precision={precision}
          unit={unit}
        />
      ))}
    </div>
  );
}
// Дата актуализации: 24 мая 2024 г.
