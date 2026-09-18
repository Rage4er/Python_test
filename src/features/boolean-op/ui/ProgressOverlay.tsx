export function ProgressOverlay({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div className="absolute inset-0 bg-black/30 flex items-center justify-center z-40 pointer-events-auto">
      <div className="bg-panel px-6 py-4 rounded shadow-lg flex items-center gap-3 text-sm">
        <div className="animate-spin w-5 h-5 border-2 border-accent border-t-transparent rounded-full" />
        Вычисление…
      </div>
    </div>
  );
}
