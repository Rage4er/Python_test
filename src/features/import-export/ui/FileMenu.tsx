import { useState, useRef } from 'react';
import { useAppStore } from '@app/store';

export function FileMenu() {
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const sceneFileInputRef = useRef<HTMLInputElement>(null);

  const execute = useAppStore((s) => s.execute);

  // Загрузка файла STL/OBJ
  const handleMeshFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setBusy(true);
    try {
      const { parseFile, ImportMeshCommand } = await import('../model/importMesh');
      for (const file of Array.from(files)) {
        try {
          const geom = await parseFile(file);
          execute(new ImportMeshCommand(geom, file.name));
        } catch (err) {
          console.error('Импорт не удался:', err);
          alert(`Ошибка импорта ${file.name}: ${err instanceof Error ? err.message : 'unknown'}`);
        }
      }
    } finally {
      setBusy(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
      setOpen(false);
    }
  };

  // Загрузка сцены из JSON
  const handleSceneFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    try {
      const { uploadScene } = await import('../model/saveLoad');
      const ok = await uploadScene(file);
      if (!ok) alert('Не удалось загрузить сцену');
    } finally {
      setBusy(false);
      if (sceneFileInputRef.current) sceneFileInputRef.current.value = '';
      setOpen(false);
    }
  };

  // Экспорт STL
  const handleExportSTL = async (binary: boolean) => {
    setBusy(true);
    try {
      const { exportSTL } = await import('../model/exportSTL');
      const blob = await exportSTL({ binary });
      const { downloadBlob } = await import('../model/saveLoad');
      downloadBlob(blob, `model-${Date.now()}.stl`);
    } catch (err) {
      console.error(err);
      alert(`Ошибка экспорта STL: ${err instanceof Error ? err.message : 'unknown'}`);
    } finally {
      setBusy(false);
      setOpen(false);
    }
  };

  // Экспорт OBJ
  const handleExportOBJ = async () => {
    setBusy(true);
    try {
      const { exportOBJ } = await import('../model/exportOBJ');
      const blob = await exportOBJ();
      const { downloadBlob } = await import('../model/saveLoad');
      downloadBlob(blob, `model-${Date.now()}.obj`);
    } catch (err) {
      console.error(err);
      alert(`Ошибка экспорта OBJ: ${err instanceof Error ? err.message : 'unknown'}`);
    } finally {
      setBusy(false);
      setOpen(false);
    }
  };

  // Сохранение/загрузка JSON сцены
  const handleSaveScene = async () => {
    const { downloadScene } = await import('../model/saveLoad');
    downloadScene();
    setOpen(false);
  };

  const handleLoadSceneLocal = async () => {
    const { loadFromLocal } = await import('../model/saveLoad');
    const ok = loadFromLocal();
    if (!ok) alert('Локальная сцена не найдена');
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        disabled={busy}
        className="px-3 py-1 border border-border rounded hover:bg-bg disabled:opacity-40"
      >
        Файл {busy ? '…' : '▾'}
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 mt-1 z-50 bg-panel border border-border rounded shadow-lg py-1 min-w-56">
            <MenuItem label="Сохранить в браузер" onClick={handleLoadSceneLocal} disabled={busy} />
            <MenuItem label="Скачать сцену (.json)" onClick={handleSaveScene} disabled={busy} />
            <MenuItem
              label="Открыть сцену (.json)…"
              onClick={() => sceneFileInputRef.current?.click()}
              disabled={busy}
            />
            <Divider />
            <MenuItem
              label="Импорт STL/OBJ…"
              onClick={() => fileInputRef.current?.click()}
              disabled={busy}
            />
            <Divider />
            <MenuItem label="Экспорт STL (binary)" onClick={() => handleExportSTL(true)} disabled={busy} />
            <MenuItem label="Экспорт STL (ASCII)" onClick={() => handleExportSTL(false)} disabled={busy} />
            <MenuItem label="Экспорт OBJ" onClick={handleExportOBJ} disabled={busy} />
          </div>
        </>
      )}

      <input
        ref={fileInputRef}
        type="file"
        accept=".stl,.obj"
        multiple
        onChange={handleMeshFile}
        className="hidden"
      />
      <input
        ref={sceneFileInputRef}
        type="file"
        accept=".json,application/json"
        onChange={handleSceneFile}
        className="hidden"
      />
    </div>
  );
}

function MenuItem({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full text-left px-3 py-1.5 text-sm hover:bg-bg disabled:opacity-40"
    >
      {label}
    </button>
  );
}

function Divider() {
  return <div className="my-1 border-t border-border" />;
}
