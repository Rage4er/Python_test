/**
 * src/shared/api/client.test.ts
 *
 * Тесты retry logic: exponential backoff, 3 попытки, только 5xx / network errors.
 */
import { describe, it, expect, vi, afterEach } from 'vitest';
import { fetchWithRetry, isRetryableError, HttpError } from './client';

const okResponse = () => new Response('model-data', { status: 200 });
const serverErrorResponse = () => new Response('boom', { status: 503 });
const notFoundResponse = () => new Response('nope', { status: 404 });

/** sleep-заглушка: записывает задержки, не спит реально */
const createSleepStub = () => {
  const delays: number[] = [];
  return {
    delays,
    sleepFn: (ms: number) => {
      delays.push(ms);
      return Promise.resolve();
    },
  };
};

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('fetchWithRetry', () => {
  it('успешный запрос с 1-й попытки — без ретраев и задержек', async () => {
    const fetchMock = vi.fn().mockResolvedValue(okResponse());
    vi.stubGlobal('fetch', fetchMock);
    const { sleepFn, delays } = createSleepStub();

    const response = await fetchWithRetry('/model.stl', undefined, { sleepFn });

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(delays).toEqual([]);
  });

  it('успех после 2-х неудач (5xx) — 3 вызова, backoff 1s/2s', async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(serverErrorResponse())
      .mockResolvedValueOnce(serverErrorResponse())
      .mockResolvedValueOnce(okResponse());
    vi.stubGlobal('fetch', fetchMock);
    const { sleepFn, delays } = createSleepStub();

    const response = await fetchWithRetry('/model.stl', undefined, { sleepFn });

    expect(response.status).toBe(200);
    expect(fetchMock).toHaveBeenCalledTimes(3);
    // exponential backoff: baseDelay * factor^attempt → 1000, 2000
    expect(delays).toEqual([1000, 2000]);
  });

  it('все попытки провалились (network errors) → error', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new TypeError('Failed to fetch'));
    vi.stubGlobal('fetch', fetchMock);
    const { sleepFn, delays } = createSleepStub();

    await expect(
      fetchWithRetry('/model.stl', undefined, { sleepFn }),
    ).rejects.toThrow(TypeError);

    expect(fetchMock).toHaveBeenCalledTimes(3); // attempts по умолчанию = 3
    expect(delays).toEqual([1000, 2000]); // перед последней попыткой не спим
  });

  it('все попытки провалились (5xx) → HttpError со статусом', async () => {
    const fetchMock = vi.fn().mockResolvedValue(serverErrorResponse());
    vi.stubGlobal('fetch', fetchMock);
    const { sleepFn } = createSleepStub();

    await expect(
      fetchWithRetry('/model.stl', undefined, { sleepFn }),
    ).rejects.toBeInstanceOf(HttpError);

    expect(fetchMock).toHaveBeenCalledTimes(3);
  });

  it('4xx НЕ ретраится — сразу возвращает response', async () => {
    const fetchMock = vi.fn().mockResolvedValue(notFoundResponse());
    vi.stubGlobal('fetch', fetchMock);
    const { sleepFn, delays } = createSleepStub();

    const response = await fetchWithRetry('/missing.stl', undefined, { sleepFn });

    expect(response.status).toBe(404);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(delays).toEqual([]);
  });

  it('backoff-задержки растут экспоненциально (проверка значений)', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new TypeError('net'));
    vi.stubGlobal('fetch', fetchMock);
    const { sleepFn, delays } = createSleepStub();

    await expect(
      fetchWithRetry('/x', undefined, {
        attempts: 4,
        baseDelayMs: 500,
        factor: 2,
        sleepFn,
      }),
    ).rejects.toThrow();

    expect(delays).toEqual([500, 1000, 2000]);
  });
});

describe('isRetryableError', () => {
  it('TypeError (network) → true', () => {
    expect(isRetryableError(new TypeError('Failed to fetch'))).toBe(true);
  });

  it('HttpError 5xx → true, 4xx → false', () => {
    expect(isRetryableError(new HttpError(500))).toBe(true);
    expect(isRetryableError(new HttpError(503))).toBe(true);
    expect(isRetryableError(new HttpError(404))).toBe(false);
    expect(isRetryableError(new HttpError(400))).toBe(false);
  });

  it('обычная ошибка → false', () => {
    expect(isRetryableError(new Error('abort'))).toBe(false);
  });
});
