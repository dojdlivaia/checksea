// Фильтры-чипсы
export type FilterType = 'all' | 'fish' | 'coral' | 'rare' | 'unchecked';

interface FilterChipsProps {
  active: FilterType;
  onChange: (filter: FilterType) => void;
}

const filters: { id: FilterType; label: string; emoji: string }[] = [
  { id: 'all', label: 'Все', emoji: '🌊' },
  { id: 'fish', label: 'Рыбы', emoji: '🐠' },
  { id: 'coral', label: 'Кораллы', emoji: '🪸' },
  { id: 'rare', label: 'Редкие', emoji: '💎' },
  { id: 'unchecked', label: 'Не найдены', emoji: '🔍' },
];

export default function FilterChips({ active, onChange }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2 px-4 py-2 justify-center">
      {filters.map((f) => (
        <button
          key={f.id}
          onClick={() => onChange(f.id)}
          className={`
            px-4 py-2 rounded-full text-sm font-bold transition-all duration-200
            shadow-md active:scale-95
            ${active === f.id
              ? 'bg-[#0B3B5C] text-white shadow-lg scale-105'
              : 'bg-white/80 text-[#0B3B5C] hover:bg-white'
            }
          `}
        >
          <span className="mr-1">{f.emoji}</span>
          {f.label}
        </button>
      ))}
    </div>
  );
}
