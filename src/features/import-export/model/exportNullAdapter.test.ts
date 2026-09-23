import { describe, it, expect, vi, afterEach } from 'vitest';
import { exportSTL } from './exportSTL';
import { exportOBJ } from './exportOBJ';
import { setGlobalAdapter } from '@shared/engine/engineRef';

/**
 * Без инициализированного EngineAdapter (getEngineAdapter() === null)
 * экспортёры должны возвращать null и печатать предупреждение,
 * а не бросать исключение.
 */
describe('exportSTL / exportOBJ — отсутствие адаптера', () => {
  afterEach(() => {
    setGlobalAdapter(null);
    vi.restoreAllMocks();
  });

  it('exportSTL возвращает null без меша/адаптера и не бросает ошибку', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    setGlobalAdapter(null);

    await expect(exportSTL()).resolves.toBeNull();
    expect(warn).toHaveBeenCalledTimes(1);
  });

  it('exportOBJ возвращает null без меша/адаптера и не бросает ошибку', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
    setGlobalAdapter(null);

    await expect(exportOBJ()).resolves.toBeNull();
    expect(warn).toHaveBeenCalledTimes(1);
  });

  it('экспорт с selectionOnly также безопасно возвращает null', async () => {
    vi.spyOn(console, 'warn').mockImplementation(() => {});
    setGlobalAdapter(null);

    await expect(exportSTL({ selectionOnly: true })).resolves.toBeNull();
    await expect(exportOBJ({ selectionOnly: true })).resolves.toBeNull();
  });
});
