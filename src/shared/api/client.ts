/**
 * src/shared/api/client.ts
 *
 * HTTP-клиент с retry logic (exponential backoff).
 * Закрывает проблему №2 из CODE_REVIEW.md («Отсутствие обработки ошибок при загрузке моделей»).
 */

export interface RetryOptions {
  /** Максимальное число попыток (по умолчанию 3) */
  attempts?: number;
  /** Базовая задержка в мс (по умолчанию 1000 → 1s / 2s / 4s) */
  baseDelayMs?: number;
  /** Множитель backoff (по умолчанию 2) */
  factor?: number;
  /** Инъекция sleep для тестов */
  sleepFn?: (ms: number) => Promise<void>;
}

const DEFAULT_ATTEMPTS = 3;
const DEFAULT_BASE_DELAY_MS = 1000; // 1s → 2s → 4s
const DEFAULT_FACTOR = 2;

export const defaultSleep = (ms: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Retryable только для сетевых ошибок и 5xx.
 * 4xx — ошибка клиента, повторять бессмысленно.
 */
export function isRetryableError(error: unknown): boolean {
  if (error instanceof TypeError) return true; // fetch network error
  if (error instanceof Response) return error.status >= 500 && error.status <= 599;
  if (error instanceof Error && 'status' in error) {
    const status = (error as Error & { status?: number }).status;
    if (typeof status === 'number') return status >= 500 && status <= 599;
  }
  return false;
}

export class HttpError extends Error {
  readonly status: number;
  constructor(status: number, message?: string) {
    super(message ?? `HTTP ${status}`);
    this.name = 'HttpError';
    this.status = status;
  }
}

/**
 * fetch с exponential backoff.
 *
 * По умолчанию: 3 попытки, задержки 1s / 2s / 4s,
 * повтор только при 5xx и сетевых ошибках (fetch throw TypeError).
 *
 * @throws последняя ошибка, если все попытки исчерпаны
 *         или если ошибка unretryable (например, 404) — сразу.
 */
export async function fetchWithRetry(
  input: RequestInfo | URL,
  init?: RequestInit,
  options: RetryOptions = {},
): Promise<Response> {
  const {
    attempts = DEFAULT_ATTEMPTS,
    baseDelayMs = DEFAULT_BASE_DELAY_MS,
    factor = DEFAULT_FACTOR,
    sleepFn = defaultSleep,
  } = options;

  let lastError: unknown;

  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      const response = await fetch(input, init);

      if (response.ok) return response;

      // 5xx — retryable, бросаем чтобы уйти в catch
      if (isRetryableError(response)) {
        lastError = new HttpError(response.status, `HTTP ${response.status}`);
        if (attempt < attempts - 1) {
          await sleepFn(baseDelayMs * Math.pow(factor, attempt));
        }
        continue;
      }

      // 4xx — не ретраим, отдаём response как есть (вызов решает)
      return response;
    } catch (error) {
      lastError = error;
      if (!isRetryableError(error)) throw error;
      if (attempt < attempts - 1) {
        await sleepFn(baseDelayMs * Math.pow(factor, attempt));
      }
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error('fetchWithRetry: все попытки исчерпаны');
}
