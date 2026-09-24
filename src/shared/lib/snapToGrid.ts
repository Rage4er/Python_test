/**
 * Чистая функция привязки значения к шагу сетки.
 * Используется для snap-режима трансформаций (translation/rotation/scale).
 *
 * Политика округления: round half away from zero
 * (1.5 → 2, -1.5 → -2) — симметричное поведение на отрицательных координатах.
 */
export function snapToValue(value: number, step: number): number {
  if (!Number.isFinite(value)) return value;
  if (!Number.isFinite(step) || step <= 0) return value; // шаг не задан — no-op
  const snapped = Math.sign(value) * Math.round(Math.abs(value) / step) * step;
  // нормализуем плавающую точку и убираем -0
  const fixed = parseFloat(snapped.toFixed(10));
  return Object.is(fixed, -0) ? 0 : fixed;
}

/**
 * Привязка позиции [x, y, z] к сетке с указанным шагом по каждой оси.
 */
export function snapPosition(
  position: [number, number, number],
  step: number | [number, number, number],
): [number, number, number] {
  const steps: [number, number, number] =
    typeof step === 'number' ? [step, step, step] : step;
  return [
    snapToValue(position[0], steps[0]),
    snapToValue(position[1], steps[1]),
    snapToValue(position[2], steps[2]),
  ];
}

// Дата актуализации: 24 сентября 2026 г.
