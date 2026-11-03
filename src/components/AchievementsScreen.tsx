// Экран ачивок
import { Achievement } from '../data/achievements';

interface AchievementsScreenProps {
  achievements: Achievement[];
  unlockedIds: string[];
  onBack: () => void;
}

export default function AchievementsScreen({ achievements, unlockedIds, onBack }: AchievementsScreenProps) {
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

      {/* Итого */}
      <div className="text-center mt-6 px-4">
        <p className="text-[#0B3B5C] font-bold">
          Разблокировано: {unlockedIds.length} из {achievements.length} 🎉
        </p>
      </div>
    </div>
  );
}
