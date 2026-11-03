// Главный компонент приложения «Морской чек-лист Макади»
import { useState, useCallback, useMemo } from 'react';
import { creatures, Creature } from './data/creatures';
import { achievements } from './data/achievements';
import { useLocalStorage } from './hooks/useLocalStorage';
import Bubbles from './components/Bubbles';
import Toast from './components/Toast';
import ProgressBar from './components/ProgressBar';
import FilterChips, { FilterType } from './components/FilterChips';
import CreatureCard from './components/CreatureCard';
import AchievementsScreen from './components/AchievementsScreen';
import CertificateModal from './components/CertificateModal';

type Screen = 'checklist' | 'achievements';

export default function App() {
  // Состояния
  const [checkedIds, setCheckedIds] = useLocalStorage<string[]>('makadi-checked', []);
  const [unlockedAchievements, setUnlockedAchievements] = useLocalStorage<string[]>('makadi-achievements', []);
  const [childName, setChildName] = useLocalStorage<string>('makadi-name', '');
  const [filter, setFilter] = useState<FilterType>('all');
  const [screen, setScreen] = useState<Screen>('checklist');
  const [showCertificate, setShowCertificate] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Тост
  const [toast, setToast] = useState<{ message: string; emoji: string; visible: boolean }>({
    message: '',
    emoji: '',
    visible: false,
  });

  // Проверка ачивок
  const checkAchievements = useCallback((newCheckedIds: string[]) => {
    const rareIds = newCheckedIds.filter((id) =>
      creatures.find((c) => c.id === id && c.rare)
    );
    const coralIds = newCheckedIds.filter((id) =>
      creatures.find((c) => c.id === id && c.category === 'coral')
    );

    const newUnlocked: string[] = [];

    achievements.forEach((ach) => {
      if (!unlockedAchievements.includes(ach.id)) {
        if (ach.condition(newCheckedIds, rareIds, coralIds)) {
          newUnlocked.push(ach.id);
        }
      }
    });

    if (newUnlocked.length > 0) {
      const allUnlocked = [...unlockedAchievements, ...newUnlocked];
      setUnlockedAchievements(allUnlocked);

      // Показываем тост для первой новой ачивки
      const firstNew = achievements.find((a) => a.id === newUnlocked[0]);
      if (firstNew) {
        setToast({
          message: firstNew.name,
          emoji: firstNew.emoji,
          visible: true,
        });
      }
    }
  }, [unlockedAchievements, setUnlockedAchievements]);

  // Переключение карточки
  const toggleCreature = useCallback((id: string) => {
    setCheckedIds((prev) => {
      const newIds = prev.includes(id)
        ? prev.filter((x) => x !== id)
        : [...prev, id];
      // Проверяем ачивки после обновления
      setTimeout(() => checkAchievements(newIds), 100);
      return newIds;
    });
  }, [setCheckedIds, checkAchievements]);

  // Сброс
  const resetProgress = () => {
    setCheckedIds([]);
    setUnlockedAchievements([]);
    setShowResetConfirm(false);
  };

  // Шаринг
  const shareResult = async () => {
    const text = `🌊 Морской чек-лист Макади\n🐠 Я нашёл ${checkedIds.length} из ${creatures.length} обитателей!\n🏆 Ачивок: ${unlockedAchievements.length}/${achievements.length}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: 'Мой чек-лист Макади', text });
      } catch {
        // Пользователь отменил
      }
    } else {
      navigator.clipboard.writeText(text);
      setToast({ message: 'Скопировано в буфер!', emoji: '📋', visible: true });
    }
  };

  // Фильтрация
  const filteredCreatures = useMemo(() => {
    switch (filter) {
      case 'fish':
        return creatures.filter((c) => c.category === 'fish');
      case 'coral':
        return creatures.filter((c) => c.category === 'coral');
      case 'rare':
        return creatures.filter((c) => c.rare);
      case 'unchecked':
        return creatures.filter((c) => !checkedIds.includes(c.id));
      default:
        return creatures;
    }
  }, [filter, checkedIds]);

  // Найденные существа для сертификата
  const checkedCreatures: Creature[] = useMemo(
    () => creatures.filter((c) => checkedIds.includes(c.id)),
    [checkedIds]
  );

  // === РЕНДЕР ===

  // Экран ачивок
  if (screen === 'achievements') {
    return (
      <AchievementsScreen
        achievements={achievements}
        unlockedIds={unlockedAchievements}
        onBack={() => setScreen('checklist')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF7E6] via-[#E0F7FA] to-[#0FB3C4]/30 relative">
      <Bubbles />

      {/* Тост */}
      <Toast
        message={toast.message}
        emoji={toast.emoji}
        visible={toast.visible}
        onClose={() => setToast((t) => ({ ...t, visible: false }))}
      />

      {/* Шапка */}
      <header className="relative z-10 pt-4 pb-2 px-4 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0B3B5C] leading-tight">
          🌊 Морской чек-лист
        </h1>
        <p className="text-sm text-[#0B3B5C]/70 font-bold">Бухта Макади 🇪🇬</p>
      </header>

      {/* Прогресс */}
      <div className="relative z-10">
        <ProgressBar current={checkedIds.length} total={creatures.length} />
      </div>

      {/* Фильтры */}
      <div className="relative z-10">
        <FilterChips active={filter} onChange={setFilter} />
      </div>

      {/* Сетка карточек */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-4 mt-3 pb-32">
        {filteredCreatures.map((creature) => (
          <CreatureCard
            key={creature.id}
            creature={creature}
            checked={checkedIds.includes(creature.id)}
            onToggle={() => toggleCreature(creature.id)}
          />
        ))}
      </div>

      {/* Пустой результат */}
      {filteredCreatures.length === 0 && (
        <div className="relative z-10 text-center py-12">
          <p className="text-4xl mb-2">🎉</p>
          <p className="text-lg font-bold text-[#0B3B5C]">Всё найдено!</p>
        </div>
      )}

      {/* Нижняя панель действий */}
      <div className="fixed bottom-0 left-0 right-0 z-20 bg-[#FFF7E6]/95 backdrop-blur-sm border-t-2 border-[#0FB3C4]/30 px-4 py-3">
        <div className="flex gap-2 max-w-lg mx-auto">
          <button
            onClick={() => setScreen('achievements')}
            className="flex-1 py-3 rounded-2xl bg-[#FFD93D] text-[#0B3B5C] font-bold text-sm shadow-md active:scale-95"
          >
            🏆 Ачивки
          </button>
          <button
            onClick={() => setShowCertificate(true)}
            className="flex-1 py-3 rounded-2xl bg-[#0FB3C4] text-white font-bold text-sm shadow-md active:scale-95"
          >
            🎓 Сертификат
          </button>
          <button
            onClick={shareResult}
            className="flex-1 py-3 rounded-2xl bg-[#FF6B6B] text-white font-bold text-sm shadow-md active:scale-95"
          >
            📤 Поделиться
          </button>
          <button
            onClick={() => setShowResetConfirm(true)}
            className="py-3 px-3 rounded-2xl bg-gray-200 text-gray-600 font-bold text-sm shadow-md active:scale-95"
            title="Сбросить"
          >
            🗑️
          </button>
        </div>
      </div>

      {/* Модалка сертификата */}
      <CertificateModal
        visible={showCertificate}
        onClose={() => setShowCertificate(false)}
        checkedCreatures={checkedCreatures}
        total={creatures.length}
        childName={childName}
        onNameChange={setChildName}
      />

      {/* Подтверждение сброса */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setShowResetConfirm(false)}>
          <div
            className="bg-[#FFF7E6] rounded-3xl p-6 max-w-sm w-full shadow-2xl text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-4xl mb-3">⚠️</p>
            <h3 className="text-lg font-bold text-[#0B3B5C] mb-2">Сбросить прогресс?</h3>
            <p className="text-sm text-gray-600 mb-4">Все отметки и ачивки будут удалены</p>
            <div className="flex gap-2">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-3 rounded-2xl bg-gray-200 text-[#0B3B5C] font-bold active:scale-95"
              >
                Отмена
              </button>
              <button
                onClick={resetProgress}
                className="flex-1 py-3 rounded-2xl bg-[#FF6B6B] text-white font-bold active:scale-95"
              >
                Сбросить
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
