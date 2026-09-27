import { test, expect } from '@playwright/test';

test.describe('3D Editor E2E', () => {
  test('приложение загружается и рендерит canvas', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (e) => errors.push(e.message));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    await page.goto('/');

    // Ждём появления canvas
    const canvas = page.locator('canvas');
    await expect(canvas).toBeVisible({ timeout: 15_000 });

    // Ждём, пока canvas реально отрендерится (не пустой)
    await page.waitForFunction(() => {
      const canvas = document.querySelector('canvas');
      if (!canvas) return false;
      // Проверяем, что WebGL-контекст создан и не пустой
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      return gl !== null;
    }, undefined, { timeout: 15_000 });

    // Проверяем, что сцена существует
    const sceneExists = await page.evaluate(() => {
      return !!(window as any).__THREE_SCENE__;
    });
    expect(sceneExists).toBe(true);

    // Нет ошибок в консоли (кроме безобидных)
    const criticalErrors = errors.filter((e) =>
      !e.includes('Download the React DevTools') &&
      !e.includes('act(')
    );
    expect(criticalErrors).toHaveLength(0);
  });

  test('создание куба добавляет объект в сцену', async ({ page }) => {
    await page.goto('/');

    // Ждём загрузку
    await page.waitForFunction(
      () => !!(window as any).__THREE_SCENE__,
      undefined,
      { timeout: 15_000 }
    );

    // Считаем объекты до
    const beforeCount = await page.evaluate(() => {
      return (window as any).__THREE_SCENE__.children.length;
    });

    // Кликаем по кнопке создания куба в ShapeLibrary
    await page.getByRole('button', { name: /куб|box/i }).click();

    // Ждём появления нового объекта
    await page.waitForFunction(
      (count: number) => (window as any).__THREE_SCENE__.children.length > count,
      beforeCount,
      { timeout: 5000 }
    );

    const afterCount = await page.evaluate(() => {
      return (window as any).__THREE_SCENE__.children.length;
    });

    expect(afterCount).toBe(beforeCount + 1);
  });
});
