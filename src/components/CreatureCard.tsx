// Карточка морского обитателя с SVG-иконкой
import { Creature } from '../data/creatures';
import { creatureIcons } from './CreatureIcons';

interface CreatureCardProps {
  creature: Creature;
  checked: boolean;
  onToggle: () => void;
}

export default function CreatureCard({ creature, checked, onToggle }: CreatureCardProps) {
  const IconComponent = creatureIcons[creature.id];

  return (
    <button
      onClick={onToggle}
      className={`
        relative w-full rounded-3xl overflow-hidden text-left transition-all duration-300
        shadow-lg active:scale-[0.97] hover:shadow-xl hover:-translate-y-0.5
        ${checked
          ? 'ring-4 ring-[#FFD93D] shadow-[#FFD93D]/30 animate-check-bounce'
          : 'bg-white'
        }
      `}
    >
      {/* SVG-иконка */}
      <div className={`relative w-full h-36 md:h-40 overflow-hidden flex items-center justify-center ${
        checked ? 'bg-gradient-to-b from-[#0FB3C4]/30 to-[#0B3B5C]/30' : 'bg-gradient-to-b from-[#0FB3C4]/10 to-[#0B3B5C]/10'
      }`}>
        {IconComponent ? (
          <IconComponent className="w-28 h-28 md:w-32 md:h-32 drop-shadow-md" />
        ) : (
          <span className="text-6xl">{creature.emoji}</span>
        )}

        {/* Градиент снизу для читаемости текста */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

        {/* Редкий значок */}
        {creature.rare && (
          <span className="absolute top-2 right-2 bg-[#FFD93D] text-[#0B3B5C] text-xs font-bold px-2 py-1 rounded-full shadow-md flex items-center gap-0.5">
            💎 Редкий
          </span>
        )}

        {/* Галочка при отметке */}
        {checked && (
          <div className="absolute top-2 left-2 animate-pop-in">
            <div className="bg-green-500 text-white w-9 h-9 rounded-full flex items-center justify-center text-xl shadow-lg border-2 border-white">
              ✓
            </div>
          </div>
        )}
      </div>

      {/* Текст */}
      <div className={`p-3 transition-colors duration-300 ${checked ? 'bg-gradient-to-br from-[#0FB3C4] to-[#0B3B5C] text-white' : 'bg-white text-[#0B3B5C]'}`}>
        {/* Эмодзи + название */}
        <div className="flex items-center gap-1.5 mb-1">
          <span className="text-base">{creature.emoji}</span>
          <h3 className="text-sm font-bold leading-tight">
            {creature.name}
          </h3>
        </div>

        {/* Факт */}
        <p className={`text-xs leading-snug ${checked ? 'text-white/80' : 'text-gray-500'}`}>
          {creature.fact}
        </p>
      </div>

      {/* Пузыри при отметке */}
      {checked && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/50 rounded-full animate-float-up"
              style={{
                left: `${10 + i * 20}%`,
                bottom: '30%',
                animationDelay: `${i * 0.15}s`,
                animationDuration: '1.5s',
              }}
            />
          ))}
        </div>
      )}
    </button>
  );
}
