// Экран ачивок с SVG-иконками
import { Achievement } from '../data/achievements';
import { creatureIcons } from './CreatureIcons';
import { creatures } from '../data/creatures';

interface AchievementsScreenProps {
  achievements: Achievement[];
  unlockedIds: string[];
  checkedIds: string[];
  onBack: () => void;
}

export default function AchievementsScreen({ achievements, unlockedIds, checkedIds, onBack }: AchievementsScreenProps) {
  // Получить последние 6 отмеченных существ для отображения
  const recentCreatures = checkedIds
    .slice(-6)
    .map(id => creatures.find(c => c.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7E6] to-[#0FB3C4]/20 pb-8">
      {/* Заголовок */}
      <div className="sticky top-0 bg-[#FFF7E6]/95 backdrop-blur-sm z-10 px-4 py-3 flex items-center gap-3 shadow-sm">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-[#0B3B5C] text-white flex items-center justify-center text-xl shadow-md active:scale-95"
        >
          ←
        </button>
        <h2 className="text-xl font-bold text-[#0B3B5C]">🏆 Мои ачивки</h2>
      </div>

      {/* Сетка ачивок */}
      <div className="grid grid-cols-2 gap-3 px-4 mt-4">
        {achievements.map((ach) => {
          const unlocked = unlockedIds.includes(ach.id);
          return (
            <div
              key={ach.id}
              className={`
                rounded-3xl p-4 text-center transition-all duration-300
                ${unlocked
                  ? 'bg-gradient-to-br from-[#FFD93D] to-[#FF6B6B] shadow-lg animate-pop-in'
                  : 'bg-gray-200/70 shadow-sm'
                }
              `}
            >
              <div className={`text-4xl mb-2 ${unlocked ? 'animate-wiggle' : 'grayscale opacity-40'}`}>
                {ach.emoji}
              </div>
              <h3 className={`text-sm font-bold ${unlocked ? 'text-white' : 'text-gray-500'}`}>
                {ach.name}
              </h3>
              <p className={`text-xs mt-1 ${unlocked ? 'text-white/80' : 'text-gray-400'}`}>
                {ach.description}
              </p>
              {unlocked && (
                <span className="inline-block mt-2 text-xs bg-white/30 px-2 py-0.5 rounded-full text-white font-bold">
                  ✓ Получено!
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Последние находки с SVG-иконками */}
      {recentCreatures.length > 0 && (
        <div className="mt-6 px-4">
          <h3 className="text-lg font-bold text-[#0B3B5C] mb-3 text-center">
            🎉 Последние находки
          </h3>
          <div className="grid grid-cols-3 gap-3">
            {recentCreatures.map((creature) => {
              if (!creature) return null;
              const IconComponent = creatureIcons[creature.id];
              return (
                <div
                  key={creature.id}
                  className="bg-white/90 rounded-2xl p-3 shadow-md flex flex-col items-center"
                >
                  {IconComponent ? (
                    <IconComponent className="w-16 h-16 md:w-20 md:h-20" />
                  ) : (
                    <span className="text-4xl">{creature.emoji}</span>
                  )}
                  <p className="text-xs font-bold text-[#0B3B5C] mt-2 text-center">
                    {creature.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Итого */}
      <div className="text-center mt-6 px-4">
        <p className="text-[#0B3B5C] font-bold">
          Разблокировано: {unlockedIds.length} из {achievements.length} 🎉
        </p>
        <p className="text-sm text-[#0B3B5C]/70 mt-1">
          Отмечено обитателей: {checkedIds.length} из {creatures.length}
        </p>
      </div>
    </div>
  );
}
