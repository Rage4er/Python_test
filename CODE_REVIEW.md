# Код-ревью: 3D Model Web Editor (Tinkercad Clone)

**Дата:** 2024-05-24  
**Ревьювер:** AI Senior Engineer  
**Ветка:** main  
**Статус:** ⚠️ Условно готов (обновлено 2026-09-23: исправлены tsc-ошибки, незакрыт retry logic — см. «Известные проблемы»)

---

## 📊 Сводка

| Метрика | Значение |
|---------|----------|
| **Файлов изменено (за последние 5 коммитов)** | 9 |
| **Строк добавлено** | +208 |
| **Строк удалено** | -756 |
| **Критичных проблем** | 1 |
| **Предупреждений** | 3 |
| **Общая оценка** | ⚠️ 6.5/10 |

---

## 🔴 Критичные проблемы

### 1. Глобальное состояние EngineAdapter без защиты от race conditions

- **Файл:** `src/shared/engine/engineRef.ts:11-17`
- **Проблема:** Глобальная переменная `_adapter` может быть `null` в момент вызова экспорта, если компонент еще не инициализирован. Текущая реализация выбрасывает ошибку, которая ломает UI.
- **Риск:** Пользователь видит белый экран при попытке экспорта до полной загрузки сцены.
- **Как исправить:**

```diff
- if (!adapter) throw new Error('EngineAdapter не инициализирован');
+ if (!adapter) {
+   console.warn('Движок ещё не готов. Повторите попытку.');
+   return null;
+ }
```

**Статус:** ✅ Исправлено (commit: c97cb27) · ✅ Покрыто тестами (commit: 85b2b29, `src/features/import-export/model/exportNullAdapter.test.ts`)

---

## 🟡 Предупреждения

### 1. Отсутствие dispose() для геометрий и материалов

- **Файл:** `src/shared/engine/EngineAdapter.ts`
- **Проблема:** При удалении объектов или очистке сцены не вызывается `.dispose()` для `THREE.Geometry`, `THREE.Material`, `THREE.Texture`.
- **Риск:** Утечка видеопамяти при долгой работе (особенно после импорта больших STL).
- **Рекомендация:** Добавить рекурсивный обход с `dispose()` в метод `clearScene()`.
- **Статус:** ✅ Исправлено (commit: c97cb27) — добавлен `disposeObject()` с рекурсивным traverse(). · ✅ Покрыто тестами (commit: 85b2b29, `src/shared/engine/disposeObject.test.ts`)

### 2. Валидация размера файла только на клиенте

- **Файл:** `src/features/import-export/model/importMesh.ts:14-17`
- **Проблема:** Проверка `file.size > 50MB` есть, но нет прогресс-бара при парсинге.
- **Риск:** Браузер зависнет на 10-30 секунд при импорте файла ~40MB без визуального фидбека.
- **Рекомендация:** Подключить `<ProgressOverlay />` к процессу импорта.

### 3. Магические числа в meshFactory

- **Файл:** `src/shared/engine/meshFactory.ts`
- **Проблема:** Порог `500` вершин для BVH задан жестко.
- **Рекомендация:** Вынести в константу `BVH_THRESHOLD = 500` в конфиг.
- **Статус:** ✅ Исправлено (commit: c97cb27) — добавлена константа `BVH_THRESHOLD` в `EngineAdapter.ts`. · ✅ Покрыто тестами (commit: 85b2b29, `src/shared/engine/bvhThreshold.test.ts`)

---

## 🟢 Рекомендации

### 1. Добавить unit-тесты

Отсутствуют тесты для критичной логики:
- `HistoryManager` (undo/redo)
- `BooleanOpCommand` (CSG операции)
- `parseFile` (валидация STL/OBJ)

**Инструмент:** Vitest (уже установлен).

### 2. Оптимизировать бандл

Текущий размер: **724 KB** (js) + **9.4 KB** (css).

**Что сделать:**
- Включить `manualChunks` в `vite.config.ts` для разделения `three` и `three-bvh-csg`.
- Проверить tree-shaking для `three/examples`.

### 3. Контекстное меню

Файл `src/features/context-menu/ui/ContextMenu.tsx` существует, но не реализован функционал.

**Ожидалось:** Правый клик → Duplicate, Delete, Group, Ungroup, Export.

---

## ✅ Хорошие практики

1. **Feature-Sliced Design (FSD):** Четкое разделение на `entities`, `features`, `widgets`, `shared`.
2. **Command Pattern:** Все действия инкапсулированы в команды с поддержкой undo/redo.
3. **Web Workers:** CSG операции вынесены в `csg.worker.ts`, UI не блокируется.
4. **Валидация JSON:** Добавлена проверка версии формата и структуры сцены.
5. **GitHub Actions:** Настроен автоматический деплой на GitHub Pages с поддержкой SPA.

---

## 📈 Roadmap исправлений

| Приоритет | Задача | Оценка времени |
|-----------|--------|----------------|
| 🔴 High | Исправить обработку `null` Adapter в экспорте | 30 мин |
| 🔴 High | Добавить dispose() для всех ресурсов Three.js | 1 час |
| 🟡 Medium | Подключить ProgressOverlay к импорту | 30 мин |
| 🟡 Medium | Написать 5 unit-тестов для команд | 2 часа |
| 🟢 Low | Реализовать контекстное меню | 3 часа |
| 🟢 Low | Refactor: избавиться от глобала через Context API | 4 часа |

---

## 🐞 Известные проблемы

### 1. Ошибки типизации `boundsTree` в three.js — ✅ ИСПРАВЛЕНО (commit: 4649a1f7)

**Симптом (до исправления):** `npx tsc --noEmit` падал с 10 ошибками TS2339/TS6133:
- `Property 'boundsTree' does not exist on type 'BufferGeometry<NormalBufferAttributes>'` — в `exportSTL.ts`, `raycastUtils.ts`, `EngineAdapter.ts`;
- неиспользуемые `importStyles` (`App.tsx`) и `localHash` (`conflictDetection.ts`).

**Исправление:** добавлен `src/types/three-mesh-bvh.d.ts` — module augmentation для `'three'`:
```typescript
declare module 'three' {
  interface BufferGeometry {
    boundsTree?: import('three-mesh-bvh').MeshBVH;
    disposeBoundsTree?: () => void;
    computeBoundsTree?: (options?: any) => void;
  }
}
```
tsconfig `include: ["src"]` захватывает `src/types/**/*.d.ts`. Неиспользуемые импорты в текущем коде отсутствуют. **Текущий результат: `tsc --noEmit` → exit 0, 0 errors.**

### 2. Отсутствие retry logic при загрузке моделей — ⬜ НЕ ИСПРАВЛЕНО

**Проблема:** нет повторных попыток сетевых запросов и fallback при недоступности CDN; Promise rejection перехватывается некорректно.

**Рекомендация:** exponential backoff + circuit breaker.

---

## 🎯 Итоговый вердикт

**Проект готов к демонстрации и использованию в режиме MVP.**

Архитектура выполнена грамотно, функционал богатый (CSG, группировка, импорт/экспорт). Однако для production требуется закрыть вопросы с обработкой ошибок и управлением памятью.

**Рекомендация:** Принять текущую версию, но завести задачи из раздела "Критичные проблемы" и "Предупреждения" в трекер перед следующим крупным релизом.

---

*Сгенерировано автоматически на основе анализа diff HEAD~5..HEAD*
