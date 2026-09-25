# 🗺 Roadmap проекта 3D Model Web Editor

Дорожная карта развития браузерного 3D-редактора (аналог Tinkercad).

---

## ✅ Реализовано (v1.0 — Сентябрь 2026)

### Ядро
- [x] 3D примитивы: Box, Sphere, Cylinder, Cone, Torus
- [x] Трансформации: Position, Rotation, Scale (TransformControls)
- [x] Snap-to-grid: 1mm (позиция), 15° (вращение), 0.1 (масштаб)
- [x] Множественное выделение объектов
- [x] Pivot-центр для групповой трансформации

### Булевы операции (CSG)
- [x] Union (объединение)
- [x] Subtract (вычитание)
- [x] Intersect (пересечение)
- [x] Вычисления в Web Worker (асинхронно)
- [x] Индикатор загрузки во время расчёта
- [x] Поддержка hole-объектов (заготовка)

### Группировка
- [x] Group (Ctrl+G)
- [x] Ungroup (Ctrl+Shift+G)
- [x] Иерархия в Outliner
- [x] Вложенные группы

### Импорт/Экспорт
- [x] Экспорт STL (binary/ASCII)
- [x] Экспорт OBJ
- [x] Импорт STL/OBJ (drag&drop + меню)
- [x] Сохранение сцены в JSON
- [x] Загрузка сцены из JSON
- [x] Автосохранение в localStorage (debounce 2 сек)

### Система команд
- [x] Command Pattern для всех операций
- [x] Undo/Redo (Ctrl+Z / Ctrl+Y)
- [x] История до 100 команд
- [x] Команды: Create, Delete, Transform, Boolean, Group, SetProperty

### UI/UX
- [x] Viewport (Three.js + OrbitControls)
- [x] Outliner (дерево объектов)
- [x] Inspector (панель свойств)
- [x] ShapeLibrary (библиотека примитивов)
- [x] BooleanToolbar (кнопки CSG)
- [x] FileMenu (файловые операции)
- [x] Горячие клавиши (W, E, R, Delete, Ctrl+G, etc.)
- [x] Тёмная/светлая тема
- [x] Адаптивный layout (Flexbox + Tailwind CSS)

### Инфраструктура
- [x] Vite + React 18 + TypeScript
- [x] Feature-Sliced Design (FSD)
- [x] Zustand (state management)
- [x] Tailwind CSS v3
- [x] Деплой на Vercel
- [x] CI/CD через GitHub Actions

---

## 🚧 В работе (v1.1 — Q4 2026)

### Улучшение экспорта/импорта
- [ ] Экспорт GLTF/GLB (PBR материалы, текстуры)
- [ ] Импорт GLTF/GLB
- [ ] Экспорт 3MF (формат 3D-печати)
- [ ] Поддержка текстур при импорте OBJ+MTL

### Производительность
- [x] ✅ Lazy-load three-mesh-bvh (−13 kB gzip startup, commit 2ea0eb9e)
- [ ] ⬜ Dynamic import OrbitControls/TransformControls (потенциал −72 kB raw)
- [ ] InstancedMesh для одинаковых объектов
- [ ] LOD (Level of Detail) для сложных моделей
- [ ] Фрустум-куллинг (отсечение невидимых объектов)
- [ ] Оптимизация CSG через Manifold-3D

### UX/UI
- [ ] Визуализация snap-to-grid (линии привязки)
- [ ] Подтверждение удаления объектов (modal)
- [ ] Контекстное меню (правый клик)
- [ ] Туториал для новых пользователей
- [ ] Горячие клавиши: настройка пользователем

### Работа с материалами
- [ ] Редактор материалов (цвет, прозрачность, металличность)
- [ ] Текстуры (diffuse, normal, roughness maps)
- [ ] PBR-рендеринг

### Тестирование
- [x] ✅ client.ts (retry logic) — 98%
- [x] ✅ engineRef.ts — 100%
- [x] ✅ disposeObject — покрыт
- [x] ✅ BVH threshold — покрыт
- [x] ✅ CSG boolean operations — worker+command покрыты (commit b466f38d)
- [x] ✅ Command Pattern — history + все команды ≥85% branches (commit 1adb348f)
- [x] ✅ Snap-to-grid — 100% statements (snapToGrid.ts, commit 75cbadbd)
- [x] ✅ Сериализация сцены — saveLoad 98.48% / 92.68% branches (commit 03a690f2)

---

## 📅 Планируется (v2.0 — 2027)

### Хранение данных
- [ ] IndexedDB вместо localStorage (для сцен >10MB)
- [ ] Облачное сохранение (Firebase/AWS S3)
- [ ] История версий снэпшотов
- [ ] Совместная работа (WebSocket, CRDT)

### Расширенный функционал
- [ ] Параметрическое моделирование (размеры через GUI)
- [ ] Кастомные примитивы (плагины)
- [ ] Скриптинг (JavaScript API для автоматизации)
- [ ] Анимация объектов (keyframes)

### Экосистема
- [ ] Marketplace плагинов
- [ ] Публикация моделей в облако
- [ ] Интеграция с slicers (Cura, PrusaSlicer)
- [ ] Экспорт напрямую на 3D-принтер (OctoPrint API)

### Мобильная версия
- [ ] Адаптация под тач-интерфейсы
- [ ] PWA (оффлайн-режим)
- [ ] Поддержка iPad + Apple Pencil

---

## 🔮 Долгосрочные цели (v3.0+ — 2028+)

- [ ] VR/AR режим (WebXR)
- [ ] ИИ-ассистент (генерация моделей по описанию)
- [ ] Симуляция физики (гравитация, коллизии)
- [ ] Рендеринг в реальном времени (path tracing)
- [ ] Интеграция с CAD-системами (STEP, IGES импорт)

---

## 📊 Метрики проекта

| Метрика | Текущее значение | Цель v2.0 |
|---------|------------------|-----------|
| Размер бандла (raw/gzip) | 962 KB raw / 247 KB gzip (main + worker) | <200 KB gzip |
| Размер бандла — достигнуто в v1.1 | цель <500 KB gzip ✅ | — |
| Время загрузки | ~2 сек | <1 сек |
| Поддерживаемые объекты | ~200 в сцене | >1000 |
| Время CSG операции | 2–10 сек | <1 сек |
| Охват тестами | 41.03% statements / 85.43% branches (114 тестов, vitest run --coverage) | >80% statements |

---

## 🤝 Как внести вклад

1. Выберите задачу из раздела "В работе" или "Планируется"
2. Создайте issue с описанием решения
3. Форкните репозиторий и создайте ветку `feature/<название>`
4. Отправьте Pull Request

См. [CONTRIBUTING.md](CONTRIBUTING.md) для деталей.

---

**Последнее обновление:** 25 сентября 2026 г.  
**Статус:** Активно разрабатывается 🚀
