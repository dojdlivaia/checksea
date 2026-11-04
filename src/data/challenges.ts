// Челленджи - особые задания для юных исследователей

export interface Challenge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  target: number; // Сколько нужно отметить
  creatureIds: string[]; // Какие существа считать
  type: 'count' | 'specific'; // Тип: подсчёт или конкретные виды
}

export const challenges: Challenge[] = [
  {
    id: 'tridacna-colors',
    name: 'Радуга тридакны',
    description: 'Увидь тридакну в 4 разных цветах',
    emoji: '🌈',
    target: 4,
    creatureIds: ['tridacna-blue', 'tridacna-green', 'tridacna-purple', 'tridacna-orange'],
    type: 'specific',
  },
  {
    id: 'wrasse-party',
    name: 'Вечеринка губанов',
    description: 'Встреть 5 разных губанов',
    emoji: '🎉',
    target: 5,
    creatureIds: ['wrasse', 'wrasse-blue', 'wrasse-green', 'wrasse-yellow', 'wrasse-red'],
    type: 'specific',
  },
  {
    id: 'clownfish-family',
    name: 'Семейство клоунов',
    description: 'Найди всех рыб-клоунов',
    emoji: '👨‍👩‍👧‍👦',
    target: 3,
    creatureIds: ['clownfish', 'twoband-clownfish', 'clownfish-baby'],
    type: 'specific',
  },
  {
    id: 'butterfly-collection',
    name: 'Коллекция бабочек',
    description: 'Собери 4 рыбы-бабочки',
    emoji: '🦋',
    target: 4,
    creatureIds: ['butterflyfish', 'pennantfish', 'chromis', 'moorish-idol'],
    type: 'specific',
  },
  {
    id: 'giant-hunters',
    name: 'Охотники за гигантами',
    description: 'Увидь 3 гигантских существ',
    emoji: '🦕',
    target: 3,
    creatureIds: ['napoleonfish', 'tridacna', 'turtle'],
    type: 'specific',
  },
];
