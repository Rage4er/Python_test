/**
 * src/features/model-loading/ui/ModelLoader.tsx
 *
 * Компонент загрузки модели по URL с retry logic и fallback UI.
 */
import { useCallback, useState } from 'react';
import { fetchWithRetry } from '@shared/api/client';

export type LoadState =
  | { status: 'idle' }
  | { status: 'loading'; attempt: number }
  | { status: 'success' }
  | { status: 'error'; message: string };

interface ModelLoaderProps {
  url: string;
  /** Вызывается при успешной загрузке с ArrayBuffer модели */
  onLoaded: (data: ArrayBuffer, fileName: string) => void;
}

const MAX_ATTEMPTS = 3;

export function ModelLoader({ url, onLoaded }: ModelLoaderProps) {
  const [state, setState] = useState<LoadState>({ status: 'idle' });

  const load = useCallback(async () => {
    setState({ status: 'loading', attempt: 1 });
    try {
      const response = await fetchWithRetry(url, undefined, { attempts: MAX_ATTEMPTS });
      if (!response.ok) {
        throw new Error(`Сервер вернул ${response.status}`);
      }
      const buffer = await response.arrayBuffer();
      const fileName = url.split('/').pop() ?? 'model';
      onLoaded(buffer, fileName);
      setState({ status: 'success' });
    } catch (error) {
      // Все попытки исчерпаны — fallback UI
      setState({
        status: 'error',
        message: error instanceof Error ? error.message : 'Неизвестная ошибка загрузки',
      });
    }
  }, [url, onLoaded]);

  if (state.status === 'error') {
    return (
      <div role="alert" className="model-loader model-loader--error">
        <p>⚠️ Не удалось загрузить модель после {MAX_ATTEMPTS} попыток.</p>
        <p className="model-loader__details">{state.message}</p>
        <button onClick={load}>Повторить</button>
      </div>
    );
  }

  if (state.status === 'loading') {
    return <div className="model-loader model-loader--loading">Загрузка…</div>;
  }

  return (
    <div className="model-loader">
      <button onClick={load} disabled={!url}>
        Загрузить модель
      </button>
    </div>
  );
}

export default ModelLoader;
