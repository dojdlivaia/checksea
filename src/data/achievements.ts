// Ачивки (достижения) для чек-листа

export interface Achievement {
  id: string;
  name: string;
  description: string;
  emoji: string;
  condition: (checkedIds: string[], rareIds: string[], coralIds: string[]) => boolean;
}

export const achievements: Achievement[] = [
  {
    id: 'first-find',
    name: 'Первая находка',
    description: 'Отметь 1 обитателя',
    emoji: '🎯',
    condition: (checkedIds) => checkedIds.length >= 1,
  },
  {
    id: 'beginner-diver',
    name: 'Начинающий ныряльщик',
    description: 'Отметь 5 обитателей',
    emoji: '🤿',
    condition: (checkedIds) => checkedIds.length >= 5,
  },
  {
    id: 'explorer',
    name: 'Исследователь',
    description: 'Отметь 10 обитателей',
    emoji: '🧭',
    condition: (checkedIds) => checkedIds.length >= 10,
  },
  {
    id: 'marine-biologist',
    name: 'Морской биолог',
    description: 'Отметь 25 обитателей',
    emoji: '🔬',
    condition: (checkedIds) => checkedIds.length >= 25,
  },
  {
    id: 'legend',
    name: 'Легенда Макади',
    description: 'Отметь всех 40 обитателей!',
    emoji: '🏆',
    condition: (checkedIds) => checkedIds.length >= 40,
  },
  {
    id: 'rare-find',
    name: 'Редкая находка',
    description: 'Найди редкого обитателя',
    emoji: '💎',
    condition: (_checked, rareIds) => rareIds.length >= 1,
  },
  {
    id: 'coral-garden',
    name: 'Коралловый сад',
    description: 'Отметь все 4 коралла',
    emoji: '🪸',
    condition: (_checked, _rare, coralIds) => coralIds.length >= 4,
  },
];
