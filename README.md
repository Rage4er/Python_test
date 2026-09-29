# Tinkercad Clone (MVP)

Браузерный 3D-редактор с поддержкой булевых операций (CSG), группировки объектов и импорта/экспорта моделей. Аналог Tinkercad, написанный на React, Three.js и TypeScript.

## 🚀 Возможности

- **3D Моделирование**: Параметрические примитивы (куб, сфера, цилиндр, конус, тор).
- **Булевы операции (CSG)**: Объединение, вычитание, пересечение объектов через Web Workers.
- **Группировка**: Иерархическая структура сцены, множественная трансформация (Pivot).
- **Импорт/Экспорт**: Поддержка форматов STL (binary/ASCII) и OBJ. Сохранение сцены в JSON.
- **Интерактивность**: Drag-and-drop, snap-to-grid, горячие клавиши.
- **Автосохранение**: Локальное сохранение состояния в браузере.
- **Команды**: Undo/Redo через Command Pattern (`Ctrl+Z` / `Ctrl+Y`).
- **Логирование**: DEV-only логгер операций с буфером 500 записей.
- **E2E тесты**: Playwright с WebGL SwiftShader, интеграция в CI.

## 🛠 Стек технологий

- **Frontend**: React 18, TypeScript, Vite
- **3D Engine**: Three.js, three-bvh-csg, three-mesh-bvh
- **State Management**: Zustand
- **Styling**: Tailwind CSS
- **Testing**: Vitest, Playwright
- **CI/CD**: GitHub Actions, Vercel

## 📦 Установка и запуск

### Требования
- Node.js >= 20
- npm >= 9

### Шаги
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/Rage4er/Python_test.git
   cd Python_test
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите режим разработки:
   ```bash
   npm run dev
   ```
   Откройте [http://localhost:5173](http://localhost:5173) в браузере.

4. Сборка для продакшена:
   ```bash
   npm run build
   npm run preview
   ```

## ⌨️ Горячие клавиши

| Клавиша | Действие |
| :--- | :--- |
| `W` | Режим перемещения (Translate) |
| `E` | Режим вращения (Rotate) |
| `R` | Режим масштаба (Scale) |
| `Delete` / `Backspace` | Удалить выделенное |
| `Ctrl + D` | Дублировать выделенное |
| `Ctrl + Z` | Отменить действие (Undo) |
| `Ctrl + Y` | Повторить действие (Redo) |
| `Ctrl + G` | Сгруппировать выделенные объекты |
| `Ctrl + Shift + G` | Разгруппировать |
| `Ctrl + A` | Выделить всё |
| `Shift + Click` | Множественное выделение |
| `Escape` | Снять выделение |

## 🏗 Архитектура

Проект следует методологии **Feature-Sliced Design (FSD)**:

- `src/app` — Глобальные настройки, Store (Zustand), Entry point.
- `src/entities` — Бизнес-сущности (SceneNode, типы данных).
- `src/features` — Функциональные возможности (CSG, Import/Export, Keyboard shortcuts).
- `src/widgets` — Композиция UI блоков (Viewport, Inspector, Outliner).
- `src/shared` — Переиспользуемый код (EngineAdapter, утилиты, конфиги).
- `src/shared/workers` — Web Workers для тяжелых вычислений (CSG).

## 🧪 Тестирование

```bash
# Unit тесты
npm run test

# E2E тесты (требуется установка браузеров Playwright)
npm run test:e2e
```

## 📄 Лицензия

GPL-3.0 — см. файл [LICENSE](LICENSE).

## 🗺 Roadmap

Полная дорожная карта проекта: [ROADMAP.md](ROADMAP.md).

**Текущая версия:** v1.1 (в работе, Q4 2026)

**Покрытие тестами:** 62.58% statements / 90.23% branches (201 тест)

**Сделано в v1.1:**
- ✅ Булевы операции (CSG) через Web Worker
- ✅ E2E-тесты (Playwright + CI)
- ✅ Логирование операций (DEV-only)
- ✅ Дублирование объектов с сохранением типа и параметров
- ✅ Snap-to-grid

**Ближайшие планы (v1.1):**
- Экспорт GLTF/GLB с материалами
- Визуализация snap-to-grid (линии привязки)
- Подтверждение удаления объектов
- Оптимизация производительности (InstancedMesh)

## 🤝 Вклад

См. [CONTRIBUTING.md](CONTRIBUTING.md) для инструкций по внесению изменений.

---
*Проект создан в образовательных целях как демонстрация возможностей WebGL и современной архитектуры фронтенд-приложений.*

**Дата последней актуализации документации:** 29 сентября 2026 г.
