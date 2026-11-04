// Экран челленджей
import { Challenge } from '../data/challenges';

interface ChallengesScreenProps {
  challenges: Challenge[];
  checkedIds: string[];
  completedChallenges: string[];
  onBack: () => void;
}

export default function ChallengesScreen({ 
  challenges, 
  checkedIds, 
  completedChallenges, 
  onBack 
}: ChallengesScreenProps) {
  const getProgress = (challenge: Challenge) => {
    if (challenge.type === 'specific') {
      const found = challenge.creatureIds.filter(id => checkedIds.includes(id));
      return { current: found.length, target: challenge.target };
    }
    return { current: 0, target: challenge.target };
  };

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
        <h2 className="text-xl font-bold text-[#0B3B5C]">🎯 Челленджи</h2>
      </div>

      {/* Список челленджей */}
      <div className="px-4 mt-4 space-y-3">
        {challenges.map((challenge) => {
          const isCompleted = completedChallenges.includes(challenge.id);
          const progress = getProgress(challenge);
          const percentage = (progress.current / progress.target) * 100;

          return (
            <div
              key={challenge.id}
              className={`
                rounded-3xl p-4 transition-all duration-300 shadow-md
                ${isCompleted 
                  ? 'bg-gradient-to-br from-[#FFD93D] to-[#FF6B6B]' 
                  : 'bg-white/90'
                }
              `}
            >
              <div className="flex items-start gap-3">
                <div className={`text-4xl ${isCompleted ? 'animate-wiggle' : ''}`}>
                  {challenge.emoji}
                </div>
                <div className="flex-1">
                  <h3 className={`text-base font-bold ${isCompleted ? 'text-white' : 'text-[#0B3B5C]'}`}>
                    {challenge.name}
                  </h3>
                  <p className={`text-sm mt-1 ${isCompleted ? 'text-white/80' : 'text-gray-600'}`}>
                    {challenge.description}
                  </p>
                  
                  {/* Прогресс-бар */}
                  <div className="mt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className={`text-xs font-bold ${isCompleted ? 'text-white' : 'text-[#0B3B5C]'}`}>
                        {progress.current} / {progress.target}
                      </span>
                      {isCompleted && (
                        <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full text-white font-bold">
                          ✓ Выполнено!
                        </span>
                      )}
                    </div>
                    <div className={`w-full h-3 rounded-full overflow-hidden ${isCompleted ? 'bg-white/30' : 'bg-gray-200'}`}>
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${
                          isCompleted 
                            ? 'bg-white' 
                            : 'bg-gradient-to-r from-[#0FB3C4] to-[#FFD93D]'
                        }`}
                        style={{ width: `${Math.min(percentage, 100)}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Итого */}
      <div className="text-center mt-6 px-4">
        <p className="text-[#0B3B5C] font-bold">
          Выполнено: {completedChallenges.length} из {challenges.length} 🎉
        </p>
      </div>
    </div>
  );
}
