import { test, expect } from '@playwright/test';

// E2E-доказательство: CSG Union реально работает в браузере (после фикса реестра адаптеров).
// Селекторы — РЕАЛЬНЫЕ: кнопки ShapeLibrary содержат текст ("Куб"), BooleanToolbar — "Union".
// Store/сцена прочитаны через window.__THREE_STORE__ / __THREE_SCENE__ (экспонируются в DEV).

test('Union двух кубов создаёт объединённый объект', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });

  await page.goto('/');
  await page.waitForFunction(() => !!(window as any).__THREE_SCENE__ && !!(window as any).__THREE_STORE__, undefined, { timeout: 15_000 });

  // 1. Создать 2 куба (реальный селектор: кнопка с текстом «Куб»)
  await page.getByRole('button', { name: /куб/i }).click();
  await page.getByRole('button', { name: /куб/i }).click();
  await page.waitForFunction(() => (window as any).__THREE_STORE__.getState().rootIds.length === 2);

  // Смещение второго куба, чтобы было что объединять (пересекающееся положение зададим через store-команду трансформации нельзя — просто проверим union как таковой;
  // three-bvh-csg корректно объединяет и непересекающиеся тела в один меш)

  // 2. Выделить оба объекта
  const ids = await page.evaluate(() => (window as any).__THREE_STORE__.getState().rootIds);
  await page.evaluate((ids) => (window as any).__THREE_STORE__.getState().setSelection(ids), ids);

  // 3. Кнопка Union стала активной → клик
  const unionBtn = page.getByRole('button', { name: /union/i });
  await expect(unionBtn).toBeEnabled();
  await unionBtn.click();

  // 4. Дождаться результата CSG: custom-геометрия в store + уменьшение числа root-объектов
  await page.waitForFunction(() => {
    const st = (window as any).__THREE_STORE__.getState();
    const hasCustom = Object.values(st.nodes).some((n: any) => n.geometry?.kind === 'custom');
    return hasCustom && st.rootIds.length === 1;
  }, undefined, { timeout: 15_000 });

  // 5. Проверить состояние сцены и store
  const result = await page.evaluate(() => {
    const st = (window as any).__THREE_STORE__.getState();
    const csgNode = Object.values(st.nodes).find((n: any) => n.geometry?.kind === 'custom') as any;
    const scene = (window as any).__THREE_SCENE__;
    return {
      csgInStore: !!csgNode,
      csgGeometryKind: csgNode?.geometry?.kind,
      rootCount: st.rootIds.length,
      sceneMeshCount: scene.children.filter((o: any) => o.isMesh).length,
    };
  });
  console.log('RESULT:', JSON.stringify(result));

  expect(result.csgInStore).toBe(true);
  expect(result.csgGeometryKind).toBe('custom');
  expect(result.rootCount).toBe(1);
  expect(result.sceneMeshCount).toBeGreaterThanOrEqual(1);

  // 6. Никаких ошибок CSG в UI (индикатор ошибки в BooleanToolbar)
  await expect(page.locator('text=/Ошибка CSG|not initialized/i')).toHaveCount(0);

  const critical = errors.filter((e) => !e.includes('React DevTools') && !e.includes('act('));
  expect(critical).toHaveLength(0);
});
