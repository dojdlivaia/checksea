// Карточка морского обитателя
import { Creature } from '../data/creatures';

interface CreatureCardProps {
  creature: Creature;
  checked: boolean;
  onToggle: () => void;
}

export default function CreatureCard({ creature, checked, onToggle }: CreatureCardProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        relative w-full rounded-3xl p-4 text-left transition-all duration-300
        shadow-lg active:scale-95 hover:shadow-xl
        ${checked
          ? 'bg-gradient-to-br from-[#0FB3C4] to-[#0B3B5C] text-white animate-check-bounce'
          : 'bg-white/90 text-[#0B3B5C] hover:bg-white'
        }
      `}
    >
      {/* Редкий значок */}
      {creature.rare && (
        <span className="absolute top-2 right-2 text-lg" title="Редкий!">💎</span>
      )}

      {/* Галочка */}
      {checked && (
        <span className="absolute top-2 left-2 text-xl animate-pop-in">✅</span>
      )}

      {/* Эмодзи */}
      <div className={`text-5xl text-center mb-2 ${checked ? 'animate-wiggle' : ''}`}>
        {creature.emoji}
      </div>

      {/* Название */}
      <h3 className="text-base font-bold text-center leading-tight">
        {creature.name}
      </h3>

      {/* Факт */}
      <p className={`text-xs text-center mt-1 leading-tight ${checked ? 'text-white/80' : 'text-gray-600'}`}>
        {creature.fact}
      </p>

      {/* Пузыри при отметке */}
      {checked && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/40 rounded-full animate-float-up"
              style={{
                left: `${20 + i * 30}%`,
                bottom: 0,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>
      )}
    </button>
  );
}
