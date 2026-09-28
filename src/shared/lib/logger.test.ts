import { describe, it, expect, beforeEach, vi } from 'vitest';
import { logger } from './logger';

describe('logger', () => {
  beforeEach(() => logger.clear());

  it('записывает в буфер', () => {
    logger.info('Test', 'hello', { x: 1 });
    const buf = logger.getBuffer();
    expect(buf).toHaveLength(1);
    expect(buf[0].scope).toBe('Test');
    expect(buf[0].level).toBe('info');
  });

  it('уведомляет подписчиков', () => {
    const listener = vi.fn();
    const unsub = logger.subscribe(listener);
    logger.warn('Test', 'warn');
    expect(listener).toHaveBeenCalledTimes(1);
    unsub();
    logger.warn('Test', 'another');
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it('ограничивает буфер MAX_BUFFER', () => {
    for (let i = 0; i < 600; i++) logger.debug('Test', `msg ${i}`);
    expect(logger.getBuffer().length).toBeLessThanOrEqual(500);
  });

  it('clear очищает буфер', () => {
    logger.info('Test', 'x');
    logger.clear();
    expect(logger.getBuffer()).toHaveLength(0);
  });
});
