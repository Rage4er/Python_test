// Покрытие UI-компонента FileMenu (src/features/import-export/ui/FileMenu.tsx).
// Примечание: @react-three/test-renderer здесь неприменим — FileMenu это DOM-компонент.
// Компонент грузит модельные модули ДИНАМИЧЕСКИ (await import('../model/...')),
// поэтому моки вешаются на те же пути через vi.mock (vite их перехватывает),
// а все async-цепочки оборачиваются в await act(async () => ...).
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useAppStore } from '@app/store';

const mocks = vi.hoisted(() => ({
  downloadScene: vi.fn(),
  loadFromLocal: vi.fn().mockReturnValue(true),
  uploadScene: vi.fn().mockResolvedValue(true),
  downloadBlob: vi.fn(),
  exportSTL: vi.fn().mockResolvedValue(new Blob(['stl'])),
  exportOBJ: vi.fn().mockResolvedValue(new Blob(['obj'])),
  parseFile: vi.fn().mockResolvedValue({ name: 'geom' }),
  ImportMeshCommand: vi.fn().mockImplementation(function (this: any, geom: any, fileName: string) {
    this.geom = geom;
    this.fileName = fileName;
    this.apply = vi.fn();
    this.revert = vi.fn();
  }),
}));

vi.mock('@features/import-export/model/saveLoad', () => ({
  downloadScene: mocks.downloadScene,
  loadFromLocal: mocks.loadFromLocal,
  uploadScene: mocks.uploadScene,
  downloadBlob: mocks.downloadBlob,
}));
vi.mock('@features/import-export/model/exportSTL', () => ({ exportSTL: mocks.exportSTL }));
vi.mock('@features/import-export/model/exportOBJ', () => ({ exportOBJ: mocks.exportOBJ }));
vi.mock('@features/import-export/model/importMesh', () => ({
  parseFile: mocks.parseFile,
  ImportMeshCommand: mocks.ImportMeshCommand,
}));

import { FileMenu } from './FileMenu';

const ITEMS = [
  'Сохранить в браузер',
  'Скачать сцену (.json)',
  'Открыть сцену (.json)…',
  'Импорт STL/OBJ…',
  'Экспорт STL (binary)',
  'Экспорт STL (ASCII)',
  'Экспорт OBJ',
];

async function openMenu() {
  await act(async () => {
    fireEvent.click(screen.getByRole('button', { name: /^Файл/ }));
  });
}

beforeEach(() => {
  vi.clearAllMocks();
  mocks.loadFromLocal.mockReturnValue(true);
  mocks.uploadScene.mockResolvedValue(true);
  mocks.exportSTL.mockResolvedValue(new Blob(['stl']));
  mocks.exportOBJ.mockResolvedValue(new Blob(['obj']));
  useAppStore.setState({ nodes: {}, rootIds: [], selection: [] });
  vi.spyOn(console, 'warn').mockImplementation(() => {});
});

describe('FileMenu — рендер и dropdown', () => {
  it('закрыт по умолчанию: пунктов не видно, кнопка «Файл ▾» есть', () => {
    render(<FileMenu />);
    expect(screen.getByRole('button', { name: /Файл ▾/ })).toBeTruthy();
    for (const label of ITEMS) {
      expect(screen.queryByRole('button', { name: label })).toBeNull();
    }
  });

  it('клик по «Файл» открывает меню со всеми 7 пунктами', async () => {
    render(<FileMenu />);
    await openMenu();
    for (const label of ITEMS) {
      expect(screen.getByRole('button', { name: label })).toBeTruthy();
    }
  });

  it('клик по фоновой подложке закрывает меню', async () => {
    const { container } = render(<FileMenu />);
    await openMenu();
    const backdrop = container.querySelector('.fixed.inset-0') as HTMLElement;
    expect(backdrop).toBeTruthy();
    await act(async () => {
      fireEvent.click(backdrop);
    });
    expect(screen.queryByRole('button', { name: ITEMS[0] })).toBeNull();
  });
});

describe('FileMenu — действия JSON-сцены', () => {
  it('«Сохранить в браузер» → loadFromLocal(), без alert при успехе, меню закрывается', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<FileMenu />);
    await openMenu();
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Сохранить в браузер' }));
    });
    expect(mocks.loadFromLocal).toHaveBeenCalledTimes(1);
    expect(alertSpy).not.toHaveBeenCalled();
    expect(screen.queryByRole('button', { name: 'Сохранить в браузер' })).toBeNull();
  });

  it('loadFromLocal вернул false → alert «Локальная сцена не найдена»', async () => {
    mocks.loadFromLocal.mockReturnValue(false);
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<FileMenu />);
    await openMenu();
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Сохранить в браузер' }));
    });
    expect(alertSpy).toHaveBeenCalledWith('Локальная сцена не найдена');
  });

  it('«Скачать сцену (.json)» → downloadScene()', async () => {
    render(<FileMenu />);
    await openMenu();
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Скачать сцену (.json)' }));
    });
    expect(mocks.downloadScene).toHaveBeenCalledTimes(1);
  });

  it('«Открыть сцену (.json)…» → клик по file input; выбранный файл → uploadScene(file)', async () => {
    render(<FileMenu />);
    await openMenu();
    // пункт триггерит скрытый input[accept=".json,application/json"]
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Открыть сцену (.json)…' }));
    });
    const sceneInput = document.querySelector<HTMLInputElement>('input[accept=".json,application/json"]')!;
    expect(sceneInput).toBeTruthy();
    const file = new File(['{}'], 'scene.json', { type: 'application/json' });
    await act(async () => {
      fireEvent.change(sceneInput, { target: { files: [file] } });
    });
    expect(mocks.uploadScene).toHaveBeenCalledTimes(1);
    expect(mocks.uploadScene.mock.calls[0][0]).toBe(file);
  });

  it('uploadScene вернул false → alert «Не удалось загрузить сцену»', async () => {
    mocks.uploadScene.mockResolvedValue(false);
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<FileMenu />);
    await openMenu();
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Открыть сцену (.json)…' }));
    });
    const sceneInput = document.querySelector<HTMLInputElement>('input[accept=".json,application/json"]')!;
    await act(async () => {
      fireEvent.change(sceneInput, { target: { files: [new File(['{}'], 's.json')] } });
    });
    expect(alertSpy).toHaveBeenCalledWith('Не удалось загрузить сцену');
  });

  it('пустой выбор файла (files=[]) → uploadScene не вызывается', async () => {
    render(<FileMenu />);
    await openMenu();
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Открыть сцену (.json)…' }));
    });
    const sceneInput = document.querySelector<HTMLInputElement>('input[accept=".json,application/json"]')!;
    await act(async () => {
      fireEvent.change(sceneInput, { target: { files: [] } });
    });
    expect(mocks.uploadScene).not.toHaveBeenCalled();
  });
});

describe('FileMenu — экспорт STL/OBJ', () => {
  it('«Экспорт STL (binary)» → exportSTL({binary:true}) + downloadBlob(*.stl)', async () => {
    render(<FileMenu />);
    await openMenu();
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Экспорт STL (binary)' }));
    });
    expect(mocks.exportSTL).toHaveBeenCalledWith({ binary: true });
    expect(mocks.downloadBlob).toHaveBeenCalledTimes(1);
    expect(String(mocks.downloadBlob.mock.calls[0][1])).toMatch(/\.stl$/);
  });

  it('«Экспорт STL (ASCII)» → exportSTL({binary:false})', async () => {
    render(<FileMenu />);
    await openMenu();
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Экспорт STL (ASCII)' }));
    });
    expect(mocks.exportSTL).toHaveBeenCalledWith({ binary: false });
    expect(mocks.downloadBlob).toHaveBeenCalledTimes(1);
  });

  it('exportSTL вернул null (движок не готов) → downloadBlob НЕ вызывается', async () => {
    mocks.exportSTL.mockResolvedValue(null);
    render(<FileMenu />);
    await openMenu();
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Экспорт STL (binary)' }));
    });
    expect(mocks.downloadBlob).not.toHaveBeenCalled();
  });

  it('«Экспорт OBJ» → exportOBJ() + downloadBlob(*.obj)', async () => {
    render(<FileMenu />);
    await openMenu();
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Экспорт OBJ' }));
    });
    expect(mocks.exportOBJ).toHaveBeenCalledTimes(1);
    expect(mocks.downloadBlob).toHaveBeenCalledTimes(1);
    expect(String(mocks.downloadBlob.mock.calls[0][1])).toMatch(/\.obj$/);
  });

  it('экспорт бросает ошибку → alert «Ошибка экспорта…»', async () => {
    mocks.exportOBJ.mockRejectedValue(new Error('boom'));
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<FileMenu />);
    await openMenu();
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Экспорт OBJ' }));
    });
    expect(alertSpy).toHaveBeenCalledWith('Ошибка экспорта OBJ: boom');
  });
});

describe('FileMenu — импорт STL/OBJ', () => {
  it('«Импорт STL/OBJ…» триггерит hidden file input; файл → parseFile + execute(ImportMeshCommand)', async () => {
    // подменяем execute в сторе, чтобы отследить команду импорта
    const executeCalls: unknown[] = [];
    const orig = useAppStore.getState().execute;
    useAppStore.setState({ execute: ((cmd: any) => executeCalls.push(cmd)) as any });
    render(<FileMenu />);
    await openMenu();
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Импорт STL/OBJ…' }));
    });
    const meshInput = document.querySelector<HTMLInputElement>('input[accept=".stl,.obj"]')!;
    expect(meshInput).toBeTruthy();
    const file = new File(['solid x'], 'a.stl');
    await act(async () => {
      fireEvent.change(meshInput, { target: { files: [file] } });
    });
    expect(mocks.parseFile).toHaveBeenCalledWith(file);
    expect(executeCalls).toHaveLength(1);
    expect(mocks.ImportMeshCommand).toHaveBeenCalled();
    expect((mocks.ImportMeshCommand.mock.instances[0] as any).fileName).toBe('a.stl');
    useAppStore.setState({ execute: orig });
  });

  it('ошибка parseFile → alert об ошибке импорта, busy сбрасывается', async () => {
    mocks.parseFile.mockRejectedValue(new Error('bad stl'));
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<FileMenu />);
    await openMenu();
    await act(async () => {
      fireEvent.click(screen.getByRole('button', { name: 'Импорт STL/OBJ…' }));
    });
    const meshInput = document.querySelector<HTMLInputElement>('input[accept=".stl,.obj"]')!;
    await act(async () => {
      fireEvent.change(meshInput, { target: { files: [new File(['x'], 'broken.stl')] } });
    });
    expect(alertSpy).toHaveBeenCalledWith('Ошибка импорта broken.stl: bad stl');
    // после завершения кнопка снова активна (busy=false)
    await openMenu();
    expect((screen.getByRole('button', { name: 'Экспорт OBJ' }) as HTMLButtonElement).disabled).toBe(false);
  });
});
