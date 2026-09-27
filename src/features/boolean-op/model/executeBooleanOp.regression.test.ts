/**
 * Регресс-тест на проводку адаптера (bug 28.09.2026):
 * executeBooleanOp читал адаптер из ЛОКАЛЬНОГО реестра модуля (_adapter),
 * который в prod-коде никто не заполнял → CSG «вообще не работал»
 * (всегда { status: 'error', reason: 'EngineAdapter not initialized' }).
 * Фикс: единый реестр @shared/engine/engineRef (setGlobalAdapter/getEngineAdapter).
 */
import { describe, it, expect, afterEach } from 'vitest';
import { executeBooleanOp } from './executeBooleanOp';
import { setGlobalAdapter } from '@shared/engine/engineRef';

describe('executeBooleanOp — regression: adapter wiring', () => {
  afterEach(() => {
    setGlobalAdapter(null);
  });

  it('без setGlobalAdapter → error EngineAdapter not initialized', async () => {
    setGlobalAdapter(null);
    const result = await executeBooleanOp('union', ['a', 'b']);
    expect(result.status).toBe('error');
    expect(result.reason).toMatch(/not initialized/i);
  });

  it('с setGlobalAdapter → доходит дальше guard (не падает на "not initialized")', async () => {
    // Минимум методов, чтобы пройти guard; узла 'a' нет в сторе → другая ошибка
    setGlobalAdapter({
      getMesh: () => undefined,
      getObject: () => undefined,
      getAllObjects: () => [],
      getRootObjects: () => [],
    } as never);
    const result = await executeBooleanOp('union', ['a', 'b']);
    // Главное — reason НЕ про инициализацию адаптера
    // (здесь ожидаемо "Узел ... не найден" — это уже бизнес-guard, а не проводка)
    expect(result.reason).not.toMatch(/not initialized/i);
    expect(result.status).toBe('error');
    expect(result.reason).toMatch(/не найден/);
  });
});
