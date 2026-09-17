import { useState, useRef } from 'react';
import { useAppStore } from '@app/store';

export function FileMenu() {
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImportScene = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const { uploadScene } = await import('@features/import-export/model/saveLoad');
      const ok = await uploadScene(file);
      if (!ok) alert('Не удалось загрузить сцену');
    } catch (err) {
      alert('Ошибка загрузки сцены');
    }
    e.target.value = '';
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="px-3 py-1 border border-border rounded text-sm"
      >
        Файл ▾
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 mt-1 z-50 bg-panel border border-border rounded shadow-lg py-1 min-w-56">
            <MenuItem label="Сохранить в браузер" onClick={async () => { 
              const { saveToLocal } = await import('@features/import-export/model/saveLoad');
              saveToLocal(); 
              setOpen(false); 
            }} />
            <MenuItem label="Загрузить из браузера" onClick={async () => { 
              const { loadFromLocal } = await import('@features/import-export/model/saveLoad');
              loadFromLocal(); 
              setOpen(false); 
            }} />
            <Divider />
            <MenuItem label="Скачать сцену (.json)" onClick={async () => { 
              const { downloadScene } = await import('@features/import-export/model/saveLoad');
              downloadScene(); 
              setOpen(false); 
            }} />
            <MenuItem label="Открыть сцену…" onClick={() => { fileInputRef.current?.click(); }} />
            <Divider />
            <MenuItem label="Экспорт STL (binary)" onClick={async () => { 
              const { exportSTLDownload } = await import('@features/import-export/model/saveLoad');
              await exportSTLDownload(true); 
              setOpen(false); 
            }} />
            <MenuItem label="Экспорт STL (ASCII)" onClick={async () => { 
              const { exportSTLDownload } = await import('@features/import-export/model/saveLoad');
              await exportSTLDownload(false); 
              setOpen(false); 
            }} />
            <MenuItem label="Экспорт OBJ" onClick={async () => { 
              const { exportOBJDownload } = await import('@features/import-export/model/saveLoad');
              await exportOBJDownload(); 
              setOpen(false); 
            }} />
          </div>
        </>
      )}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json,.tcad.json,application/json"
        onChange={handleImportScene}
        className="hidden"
      />
    </div>
  );
}

function MenuItem({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-3 py-1.5 text-sm hover:bg-bg"
    >
      {label}
    </button>
  );
}

function Divider() {
  return <div className="my-1 border-t border-border" />;
}
