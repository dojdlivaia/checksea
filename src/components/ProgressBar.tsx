// Прогресс-бар
interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);

  return (
    <div className="w-full px-4 py-2">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-bold text-[#0B3B5C]">
          Отмечено {current} из {total}
        </span>
        <span className="text-sm font-bold text-[#0FB3C4]">{pct}%</span>
      </div>
      <div className="w-full h-5 bg-white/60 rounded-full overflow-hidden shadow-inner">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#0FB3C4] to-[#FFD93D] transition-all duration-700 ease-out flex items-center justify-end pr-2"
          style={{ width: `${Math.max(pct, 3)}%` }}
        >
          {pct > 15 && <span className="text-xs">🐠</span>}
        </div>
      </div>
    </div>
  );
}
