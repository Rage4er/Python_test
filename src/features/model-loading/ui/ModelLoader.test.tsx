/**
 * src/features/model-loading/ui/ModelLoader.test.tsx
 *
 * Покрывает ModelLoader.tsx: idle → loading → success/error, кнопка «Повторить».
 * Примечание: FileReader/drag&drop в компоненте НЕТ — загрузка идёт через
 * fetchWithRetry (@shared/api/client), который мокаем целиком.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

// Мок HTTP-клиента до импорта компонента (компонент тянет @shared/api/client)
const fetchWithRetryMock = vi.fn();
vi.mock('@shared/api/client', () => ({
  fetchWithRetry: (...args: unknown[]) => fetchWithRetryMock(...args),
}));

import ModelLoader from './ModelLoader';

const OK_BUFFER = new ArrayBuffer(8);

function okResponse() {
  return {
    ok: true,
    status: 200,
    arrayBuffer: async () => OK_BUFFER,
  } as unknown as Response;
}

function failResponse(status = 404) {
  return {
    ok: false,
    status,
    arrayBuffer: async () => new ArrayBuffer(0),
  } as unknown as Response;
}

describe('ModelLoader', () => {
  let onLoaded: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.stubGlobal('IS_REACT_ACT_ENVIRONMENT', true); // React 18 + act без RTL-runtime
    onLoaded = vi.fn();
    fetchWithRetryMock.mockReset();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('idle: рендерит кнопку «Загрузить модель», она активна при заданном url', () => {
    render(<ModelLoader url="/models/cube.stl" onLoaded={onLoaded} />);
    const btn = screen.getByRole('button', { name: /Загрузить модель/i }) as HTMLButtonElement;
    expect(btn.disabled).toBe(false);
    expect(screen.queryByText(/Загрузка…/)).toBeNull();
    expect(onLoaded).not.toHaveBeenCalled();
  });

  it('кнопка disabled при пустом url', () => {
    render(<ModelLoader url="" onLoaded={onLoaded} />);
    const btn = screen.getByRole('button', { name: /Загрузить модель/i }) as HTMLButtonElement;
    expect(btn.disabled).toBe(true);
  });

  it('успешная загрузка: loading → onLoaded(buffer, fileName) → success', async () => {
    let resolveFetch!: (r: Response) => void;
    fetchWithRetryMock.mockImplementationOnce(
      () => new Promise<Response>((r) => (resolveFetch = r)),
    );

    render(<ModelLoader url="https://cdn.example.com/models/robot.obj" onLoaded={onLoaded} />);
    const btn = screen.getByRole('button', { name: /Загрузить модель/i });

    // Клик стартует load(): setState loading синхронно, дальше висит на промисе
    await act(async () => {
      fireEvent.click(btn);
    });
    expect(screen.getByText(/Загрузка…/)).toBeTruthy();
    expect(fetchWithRetryMock).toHaveBeenCalledTimes(1);
    expect(fetchWithRetryMock.mock.calls[0][0]).toBe('https://cdn.example.com/models/robot.obj');

    // Резолвим fetch → arrayBuffer → onLoaded → success
    await act(async () => {
      resolveFetch(okResponse());
    });
    expect(onLoaded).toHaveBeenCalledTimes(1);
    expect(onLoaded.mock.calls[0][0]).toBe(OK_BUFFER);
    expect(onLoaded.mock.calls[0][1]).toBe('robot.obj');
    expect(screen.queryByText(/Загрузка…/)).toBeNull();
    expect(screen.queryByRole('alert')).toBeNull();
  });

  it('не-ok ответ сервера → error UI с сообщением о статусе', async () => {
    fetchWithRetryMock.mockResolvedValueOnce(failResponse(404));

    render(<ModelLoader url="/models/missing.stl" onLoaded={onLoaded} />);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /Загрузить модель/i }));
    });

    const alert = screen.getByRole('alert');
    expect(alert.textContent).toContain('Не удалось загрузить модель после 3 попыток');
    expect(alert.textContent).toContain('Сервер вернул 404');
    expect(onLoaded).not.toHaveBeenCalled();
  });

  it('сетевая ошибка (throw) → error UI с message ошибки', async () => {
    fetchWithRetryMock.mockRejectedValueOnce(new Error('Соединение отклонено'));

    render(<ModelLoader url="/models/net.stl" onLoaded={onLoaded} />);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /Загрузить модель/i }));
    });

    expect(screen.getByRole('alert').textContent).toContain('Соединение отклонено');
    expect(onLoaded).not.toHaveBeenCalled();
  });

  it('«Повторить» после ошибки → повторный fetch → success', async () => {
    fetchWithRetryMock
      .mockRejectedValueOnce(new Error('boom'))
      .mockResolvedValueOnce(okResponse());

    render(<ModelLoader url="/models/retry.stl" onLoaded={onLoaded} />);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /Загрузить модель/i }));
    });

    const retryBtn = screen.getByRole('button', { name: /Повторить/i });
    await act(async () => {
      fireEvent.click(retryBtn);
    });

    expect(fetchWithRetryMock).toHaveBeenCalledTimes(2);
    expect(onLoaded).toHaveBeenCalledTimes(1);
    expect(onLoaded.mock.calls[0][1]).toBe('retry.stl');
    expect(screen.queryByRole('alert')).toBeNull();
  });

  it('бросается не-Error → fallback-сообщение «Неизвестная ошибка загрузки»', async () => {
    fetchWithRetryMock.mockRejectedValueOnce('string failure'); // не instanceof Error

    render(<ModelLoader url="/models/weird.stl" onLoaded={onLoaded} />);
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: /Загрузить модель/i }));
    });

    expect(screen.getByRole('alert').textContent).toContain('Неизвестная ошибка загрузки');
  });
});
