// Каталог морских обитателей бухты Макади
// Каждая карточка: id, название, эмодзи, реальное фото, факт, категория, редкость
// Фотографии: Wikimedia Commons (CC лицензия)

export type CreatureCategory = 'fish' | 'coral' | 'other';

export interface Creature {
  id: string;
  name: string;
  emoji: string;
  image: string; // URL реального фото
  fact: string;
  category: CreatureCategory;
  rare: boolean;
}

// Формат URL: https://commons.wikimedia.org/wiki/Special:FilePath/[имя_файла]?width=400
// Это перенаправляет на прямую ссылку с нужным размером

export const creatures: Creature[] = [
  // === РЫБЫ ===
  {
    id: 'clownfish',
    name: 'Рыба-клоун',
    emoji: '🐠',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Common_clownfish.jpg?width=400',
    fact: 'Живёт в актинии и не обжигается!',
    category: 'fish',
    rare: false,
  },
  {
    id: 'parrotfish',
    name: 'Рыба-попугай',
    emoji: '🦜',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maldives_Parrotfish_(Scaridae).jpg?width=400',
    fact: 'Ест кораллы и делает из них песок!',
    category: 'fish',
    rare: false,
  },
  {
    id: 'surgeonfish',
    name: 'Рыба-хирург',
    emoji: '🐟',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Blue_tang_surgeonfish_(Acanthurus_coeruleus).jpg?width=400',
    fact: 'У хвоста острый шип как скальпель',
    category: 'fish',
    rare: false,
  },
  {
    id: 'butterflyfish',
    name: 'Рыба-бабочка',
    emoji: '🦋',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Crown_Butterflyfish,_Chaetodon_paucifasciatus,_Red_Sea_(36204827650).jpg?width=400',
    fact: 'Имеет ложные глаза на хвосте для защиты',
    category: 'fish',
    rare: false,
  },
  {
    id: 'lionfish',
    name: 'Крылатка',
    emoji: '🦁',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pterois_volitans_Manado-e_edit.jpg?width=400',
    fact: 'Красивая, но очень ядовитая!',
    category: 'fish',
    rare: true,
  },
  {
    id: 'napoleonfish',
    name: 'Рыба-наполеон',
    emoji: '🐡',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Humphead_wrasse_melb_aquarium.jpg?width=400',
    fact: 'Может вырасти до 2 метров!',
    category: 'fish',
    rare: true,
  },
  {
    id: 'anthias',
    name: 'Антиас',
    emoji: '✨',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Anthias_coral_reef_fish.jpg?width=400',
    fact: 'Плавает стайкой как живое облако',
    category: 'fish',
    rare: false,
  },
  {
    id: 'moray',
    name: 'Мурена',
    emoji: '🐍',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/A_moray_eel._The_Red_Sea.jpg?width=400',
    fact: 'Прячется в пещерах и открывает рот, чтобы дышать',
    category: 'fish',
    rare: true,
  },
  {
    id: 'triggerfish',
    name: 'Спинорог',
    emoji: '🔫',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Picasso_triggerfish_in_Red_Sea_Aquarium_09.jpg?width=400',
    fact: 'Может заклинивать себя в расщелине рифа',
    category: 'fish',
    rare: false,
  },
  {
    id: 'goatfish',
    name: 'Барабулька',
    emoji: '🐟',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Sea_Goatfish.jpg?width=400',
    fact: 'Ищет еду усиками на подбородке',
    category: 'fish',
    rare: false,
  },

  // === КОРАЛЛЫ ===
  {
    id: 'brain-coral',
    name: 'Мозговой коралл',
    emoji: '🧠',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brain_coral.jpg?width=400',
    fact: 'По форме похож на настоящий мозг!',
    category: 'coral',
    rare: false,
  },
  {
    id: 'fire-coral',
    name: 'Огненный коралл',
    emoji: '🔥',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fire_Coral.jpg?width=400',
    fact: 'Ожигает как крапива — не трогай!',
    category: 'coral',
    rare: false,
  },
  {
    id: 'soft-coral',
    name: 'Мягкие кораллы',
    emoji: '🌸',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Red_sea_coral_reef.jpg?width=400',
    fact: 'Качаются на течении как цветы',
    category: 'coral',
    rare: false,
  },
  {
    id: 'fan-coral',
    name: 'Веерный коралл',
    emoji: '🪭',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gorgonian_Sea_Fan_Coral.jpg?width=400',
    fact: 'Разворачивается навстречу течению',
    category: 'coral',
    rare: true,
  },

  // === ДРУГИЕ ===
  {
    id: 'turtle',
    name: 'Морская черепаха',
    emoji: '🐢',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Green_sea_turtle_near_Marsa_Alam.JPG?width=400',
    fact: 'Может задерживать дыхание на 5 часов!',
    category: 'other',
    rare: true,
  },
  {
    id: 'octopus',
    name: 'Осьминог',
    emoji: '🐙',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Octopus_macropus_-_The_Coral_Kingdom_Collection.jpg?width=400',
    fact: 'Умеет менять цвет за секунду',
    category: 'other',
    rare: true,
  },
  {
    id: 'stingray',
    name: 'Скат-хвостокол',
    emoji: '🦈',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bluespotted_Stingray_(14280727049).jpg?width=400',
    fact: 'Плавает как птица под водой',
    category: 'other',
    rare: false,
  },
  {
    id: 'dugong',
    name: 'Дюгонь',
    emoji: '🐋',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dugong_Marsa_Alam.jpg?width=400',
    fact: 'Морская корова! Очень редкий',
    category: 'other',
    rare: true,
  },
  {
    id: 'dolphin',
    name: 'Дельфин',
    emoji: '🐬',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/A_spinner_dolphin_in_the_Red_Sea.jpg?width=400',
    fact: 'Спит одним полушарием мозга',
    category: 'other',
    rare: true,
  },
  {
    id: 'sea-urchin',
    name: 'Морской ёж',
    emoji: '🦔',
    image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Diadema_antillarum.jpg?width=400',
    fact: 'Ходит на ножках-присосках',
    category: 'other',
    rare: false,
  },
];
