// Каталог морских обитателей бухты Макади
// Каждая карточка: id, название, эмодзи, факт, категория, редкость

export type CreatureCategory = 'fish' | 'coral' | 'other';

export interface Creature {
  id: string;
  name: string;
  emoji: string;
  fact: string;
  category: CreatureCategory;
  rare: boolean;
}

export const creatures: Creature[] = [
  // === РЫБЫ ===
  {
    id: 'clownfish',
    name: 'Рыба-клоун',
    emoji: '🐠',
    fact: 'Живёт в актинии и не обжигается!',
    category: 'fish',
    rare: false,
  },
  {
    id: 'parrotfish',
    name: 'Рыба-попугай',
    emoji: '🦜',
    fact: 'Ест кораллы и делает из них песок!',
    category: 'fish',
    rare: false,
  },
  {
    id: 'surgeonfish',
    name: 'Рыба-хирург',
    emoji: '🐟',
    fact: 'У хвоста острый шип как скальпель',
    category: 'fish',
    rare: false,
  },
  {
    id: 'butterflyfish',
    name: 'Рыба-бабочка',
    emoji: '🦋',
    fact: 'Имеет ложные глаза на хвосте для защиты',
    category: 'fish',
    rare: false,
  },
  {
    id: 'lionfish',
    name: 'Крылатка',
    emoji: '🦁',
    fact: 'Красивая, но очень ядовитая!',
    category: 'fish',
    rare: true,
  },
  {
    id: 'napoleonfish',
    name: 'Рыба-наполеон',
    emoji: '🐡',
    fact: 'Может вырасти до 2 метров!',
    category: 'fish',
    rare: true,
  },
  {
    id: 'anthias',
    name: 'Антиас',
    emoji: '✨',
    fact: 'Плавает стайкой как живое облако',
    category: 'fish',
    rare: false,
  },
  {
    id: 'moray',
    name: 'Мурена',
    emoji: '🐍',
    fact: 'Прячется в пещерах и открывает рот, чтобы дышать',
    category: 'fish',
    rare: true,
  },
  {
    id: 'triggerfish',
    name: 'Спинорог',
    emoji: '🔫',
    fact: 'Может заклинивать себя в расщелине рифа',
    category: 'fish',
    rare: false,
  },
  {
    id: 'goatfish',
    name: 'Барабулька',
    emoji: '🐟',
    fact: 'Ищет еду усиками на подбородке',
    category: 'fish',
    rare: false,
  },

  // === КОРАЛЛЫ ===
  {
    id: 'brain-coral',
    name: 'Мозговой коралл',
    emoji: '🧠',
    fact: 'По форме похож на настоящий мозг!',
    category: 'coral',
    rare: false,
  },
  {
    id: 'fire-coral',
    name: 'Огненный коралл',
    emoji: '🔥',
    fact: 'Ожигает как крапива — не трогай!',
    category: 'coral',
    rare: false,
  },
  {
    id: 'soft-coral',
    name: 'Мягкие кораллы',
    emoji: '🌸',
    fact: 'Качаются на течении как цветы',
    category: 'coral',
    rare: false,
  },
  {
    id: 'fan-coral',
    name: 'Веерный коралл',
    emoji: '🪭',
    fact: 'Разворачивается навстречу течению',
    category: 'coral',
    rare: true,
  },

  // === ДРУГИЕ ===
  {
    id: 'turtle',
    name: 'Морская черепаха',
    emoji: '🐢',
    fact: 'Может задерживать дыхание на 5 часов!',
    category: 'other',
    rare: true,
  },
  {
    id: 'octopus',
    name: 'Осьминог',
    emoji: '🐙',
    fact: 'Умеет менять цвет за секунду',
    category: 'other',
    rare: true,
  },
  {
    id: 'stingray',
    name: 'Скат-хвостокол',
    emoji: '🦈',
    fact: 'Плавает как птица под водой',
    category: 'other',
    rare: false,
  },
  {
    id: 'dugong',
    name: 'Дюгонь',
    emoji: '🐋',
    fact: 'Морская корова! Очень редкий',
    category: 'other',
    rare: true,
  },
  {
    id: 'dolphin',
    name: 'Дельфин',
    emoji: '🐬',
    fact: 'Спит одним полушарием мозга',
    category: 'other',
    rare: true,
  },
  {
    id: 'sea-urchin',
    name: 'Морской ёж',
    emoji: '🦔',
    fact: 'Ходит на ножках-присосках',
    category: 'other',
    rare: false,
  },
];
