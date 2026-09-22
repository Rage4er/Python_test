import { useAppStore } from '@app/store';

const LS_KEY = 'tinkercad-clone:scene';

export function saveToLocal(): void {
  try {
    const state = useAppStore.getState();
    // Simplified for MVP - in full version would serialize scene to JSON
    localStorage.setItem(LS_KEY, JSON.stringify({
      nodes: state.nodes,
      rootIds: state.rootIds,
      selection: state.selection,
      savedAt: Date.now()
    }));
  } catch (e) {
    console.error('Save failed', e);
  }
}

export function loadFromLocal(): boolean {
  const raw = localStorage.getItem(LS_KEY);
  if (!raw) return false;
  try {
    const data = JSON.parse(raw);
    useAppStore.setState({
      nodes: data.nodes || {},
      rootIds: data.rootIds || [],
      selection: data.selection || []
    });
    return true;
  } catch (e) {
    console.error('Load failed', e);
    return false;
  }
}

export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export async function exportSTLDownload(binary = true): Promise<void> {
  const { exportSTL } = await import('./exportSTL');
  try {
    const blob = await exportSTL({ binary });
    if (!blob) {
      console.warn('Экспорт STL не удался: движок не готов');
      return;
    }
    downloadBlob(blob, `model-${Date.now()}.stl`);
  } catch (err) {
    console.error('STL export failed:', err);
    alert(`Ошибка экспорта STL: ${err instanceof Error ? err.message : 'unknown'}`);
  }
}

export async function exportOBJDownload(): Promise<void> {
  const { exportOBJ } = await import('./exportOBJ');
  try {
    const blob = await exportOBJ();
    if (!blob) {
      console.warn('Экспорт OBJ не удался: движок не готов');
      return;
    }
    downloadBlob(blob, `model-${Date.now()}.obj`);
  } catch (err) {
    console.error('OBJ export failed:', err);
    alert(`Ошибка экспорта OBJ: ${err instanceof Error ? err.message : 'unknown'}`);
  }
}

export function downloadScene(): void {
  const state = useAppStore.getState();
  const blob = new Blob([JSON.stringify({
    version: 1,
    createdAt: Date.now(),
    units: 'mm',
    nodes: Object.values(state.nodes),
    rootIds: state.rootIds
  }, null, 2)], { type: 'application/json' });
  downloadBlob(blob, `scene-${Date.now()}.json`);
}

export async function uploadScene(file: File): Promise<boolean> {
  try {
    const text = await file.text();
    let data: any;
    try {
      data = JSON.parse(text);
    } catch (e) {
      throw new Error('Некорректный JSON файл');
    }

    // Валидация структуры данных
    if (!data || typeof data !== 'object') {
      throw new Error('Некорректный файл сцены');
    }
    if (typeof data.version !== 'number') {
      throw new Error('Отсутствует версия формата сцены');
    }
    const SCENE_FORMAT_VERSION = 1;
    if (data.version > SCENE_FORMAT_VERSION) {
      throw new Error(`Версия файла ${data.version} новее поддерживаемой ${SCENE_FORMAT_VERSION}`);
    }
    if (!Array.isArray(data.nodes)) {
      throw new Error('Поле nodes отсутствует или не массив');
    }
    if (!Array.isArray(data.rootIds)) {
      throw new Error('Поле rootIds отсутствует или не массив');
    }

    const nodes: Record<string, any> = {};
    for (const n of data.nodes) {
      nodes[n.id] = n;
    }
    useAppStore.setState({
      nodes,
      rootIds: data.rootIds || [],
      selection: []
    });
    return true;
  } catch (e) {
    console.error('Upload failed', e);
    alert(e instanceof Error ? e.message : 'Ошибка загрузки сцены');
    return false;
  }
}
// Дата актуализации: 24 мая 2024 г.
