import {
  AlertTriangle,
  Blend,
  ChevronDown,
  Circle,
  Combine,
  Cylinder,
  Donut,
  Ellipsis,
  Minus,
  Moon,
  Redo2,
  Square,
  Sun,
  Triangle,
  Undo2,
  type LucideIcon,
} from 'lucide-react';

/**
 * Реестр иконок приложения на lucide-react (v0.378).
 * Только именованные импорты — Vite/rollup tree-shake-ют неиспользуемые иконки.
 * Использование: <Icon name="box" size={18} />
 */
export const ICONS = {
  // Примитивы (ShapeLibrary) — были эмодзи
  box: Square,        // был 🟦
  sphere: Circle,     // был ⚪
  cylinder: Cylinder, // был 🛢️
  cone: Triangle,     // был 🔺
  torus: Donut,       // был 🍩
  // CSG-операции (BooleanToolbar) — были символы ∪ − ∩
  union: Combine,     // был ∪
  subtract: Minus,    // был −
  intersect: Blend,    // был ∩ (Venn появился только в lucide >=0.4xx; в 0.378 есть Blend — пересечение форм)
  // Прочее UI
  undo: Undo2,          // был ↶
  redo: Redo2,          // был ↷
  themeLight: Moon,     // был 🌙 (кнопка в светлой теме → «переключить на тёмную»)
  themeDark: Sun,       // был ☀️
  warning: AlertTriangle, // был ⚠️
  chevronDown: ChevronDown, // был ▾ (FileMenu)
  ellipsis: Ellipsis,       // был … (busy-индикатор FileMenu)
} as const;

export type IconName = keyof typeof ICONS;

export function Icon({
  name,
  size = 16,
  className,
}: {
  name: IconName;
  size?: number;
  className?: string;
}) {
  const Cmp: LucideIcon = ICONS[name];
  return <Cmp size={size} className={className} aria-hidden="true" />;
}
// Дата актуализации: 27 сентября 2026 г.
