import { useState, useEffect } from 'react';
import { cn } from '@shared/lib/cn';

export interface NumberInputProps {
  value: number;
  onChange: (value: number) => void;
  step?: number; // по умолчанию 0.1
  min?: number;
  max?: number;
  precision?: number; // знаков после запятой
  unit?: string; // "mm", "°" или пусто
  disabled?: boolean;
  label?: string;
  className?: string;
}

type Status = 'ok' | 'dirty' | 'error';

const roundTo = (v: number, precision?: number) =>
  precision === undefined ? v : Number(v.toFixed(precision));

/**
 * Числовое поле с черновиком: onChange вызывается только на Enter / blur / стрелки,
 * а не на каждое нажатие клавиши. Escape откатывает черновик.
 * Визуальная обратная связь: жёлтая рамка — изменено не применено… (не используется снаружи),
 * красная — невалидное значение.
 */
export function NumberInput({
  value,
  onChange,
  step = 0.1,
  min,
  max,
  precision,
  unit,
  disabled,
  label,
  className,
}: NumberInputProps) {
  const [draft, setDraft] = useState<string>(String(roundTo(value, precision)));
  const [status, setStatus] = useState<Status>('ok');

  // Внешнее значение изменилось (store/undo) и мы не в режиме редактирования — синхронизируемся
  useEffect(() => {
    if (status !== 'dirty') {
      setDraft(String(roundTo(value, precision)));
      setStatus('ok');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const validate = (raw: string): number | null => {
    if (raw.trim() === '') return null;
    const n = Number(raw);
    if (!Number.isFinite(n)) return null;
    let v = n;
    if (min !== undefined && v < min) v = min; // clamp
    if (max !== undefined && v > max) v = max; // clamp
    return roundTo(v, precision);
  };

  const commit = () => {
    const parsed = validate(draft);
    if (parsed === null) {
      setStatus('error');
      return;
    }
    setStatus('ok');
    setDraft(String(parsed));
    // Сравниваем с исходным value, а не с округлённым: иначе clamp к min=0
    // при value=0 молча не коммитился бы. Лишний no-op-команды store не создаёт —
    // вызов происходит только когда черновик реально отличался от применённого значения.
    if (parsed !== value) onChange(parsed);
  };

  const handleChange = (raw: string) => {
    setDraft(raw);
    const parsed = validate(raw);
    setStatus(parsed === null ? 'error' : 'dirty');
  };

  return (
    <span className={cn('inline-flex items-center gap-1', className)}>
      <input
        type="number"
        aria-label={label}
        step={step}
        min={min}
        max={max}
        disabled={disabled}
        value={draft}
        data-status={status}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            commit();
          } else if (e.key === 'Escape') {
            e.preventDefault();
            setDraft(String(roundTo(value, precision))); // откат
            setStatus('ok');
          }
        }}
        onBlur={commit}
        className={cn(
          'px-1 py-1 bg-bg border rounded text-xs w-full',
          status === 'error' && 'border-red-500',
          status === 'dirty' && 'border-yellow-500',
          status === 'ok' && 'border-border',
        )}
      />
      {unit ? <span className="text-xs text-muted select-none">{unit}</span> : null}
    </span>
  );
}
