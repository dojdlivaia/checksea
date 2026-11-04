// Каталог морских обитателей бухты Макади
// Каждая карточка: id, название, эмодзи, реальное фото, факт, категория, редкость
// Фотографии: Wikimedia Commons (CC лицензия)
// SVG-иконки для достижений: components/CreatureIcons.tsx

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

export const creatures: Creature[] = [
  // === РЫБЫ (30 видов) ===
  { id: 'clownfish', name: 'Рыба-клоун', emoji: '🐠', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Common_clownfish.jpg?width=400', fact: 'Живёт в актинии и не обжигается!', category: 'fish', rare: false },
  { id: 'parrotfish', name: 'Рыба-попугай', emoji: '🦜', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Maldives_Parrotfish_(Scaridae).jpg?width=400', fact: 'Ест кораллы и делает из них песок!', category: 'fish', rare: false },
  { id: 'surgeonfish', name: 'Рыба-хирург', emoji: '🐟', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Blue_tang_surgeonfish_(Acanthurus_coeruleus).jpg?width=400', fact: 'У хвоста острый шип как скальпель', category: 'fish', rare: false },
  { id: 'butterflyfish', name: 'Рыба-бабочка', emoji: '🦋', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Crown_Butterflyfish,_Chaetodon_paucifasciatus,_Red_Sea_(36204827650).jpg?width=400', fact: 'Имеет ложные глаза на хвосте для защиты', category: 'fish', rare: false },
  { id: 'lionfish', name: 'Крылатка', emoji: '🦁', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pterois_volitans_Manado-e_edit.jpg?width=400', fact: 'Красивая, но очень ядовитая!', category: 'fish', rare: true },
  { id: 'napoleonfish', name: 'Рыба-наполеон', emoji: '🐡', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Humphead_wrasse_melb_aquarium.jpg?width=400', fact: 'Может вырасти до 2 метров!', category: 'fish', rare: true },
  { id: 'anthias', name: 'Антиас', emoji: '✨', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Anthias_coral_reef_fish.jpg?width=400', fact: 'Плавает стайкой как живое облако', category: 'fish', rare: false },
  { id: 'moray', name: 'Мурена', emoji: '🐍', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/A_moray_eel._The_Red_Sea.jpg?width=400', fact: 'Прячется в пещерах и открывает рот, чтобы дышать', category: 'fish', rare: true },
  { id: 'triggerfish', name: 'Спинорог', emoji: '🔫', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Picasso_triggerfish_in_Red_Sea_Aquarium_09.jpg?width=400', fact: 'Может заклинивать себя в расщелине рифа', category: 'fish', rare: false },
  { id: 'goatfish', name: 'Барабулька', emoji: '🐟', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Sea_Goatfish.jpg?width=400', fact: 'Ищет еду усиками на подбородке', category: 'fish', rare: false },
  { id: 'emperor-angelfish', name: 'Императорский ангел', emoji: '👑', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Emperor_Angelfish,_Pomacanthus_imperator_at_Elphinstone_Reef,_Red_Sea,_Egypt_-SCUBA_(6194697417).jpg?width=400', fact: 'Синий с жёлтыми полосками — корона рифа!', category: 'fish', rare: true },
  { id: 'bannerfish', name: 'Баннерная рыба', emoji: '🏳️', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Sea_Bannerfish,_Heniochus_intermedius_at_Little_Brother,_Red_Sea,_Egypt_SCUBA.jpg?width=400', fact: 'Белая с чёрными полосами и длинным плавником', category: 'fish', rare: false },
  { id: 'purple-tang', name: 'Фиолетовый хирург', emoji: '💜', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Cirujano_de_cola_amarilla_(Zebrasoma_xanthurum),_mar_Rojo,_Egipto,_2023-04-17,_DD_75.jpg?width=400', fact: 'Фиолетовый с жёлтым хвостом — эндемик!', category: 'fish', rare: false },
  { id: 'moorish-idol', name: 'Мавританский идол', emoji: '🎭', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Moorish_Idol.jpg?width=400', fact: 'Чёрно-белая с жёлтым — как в мультике!', category: 'fish', rare: false },
  { id: 'rabbitfish', name: 'Рыба-кролик', emoji: '🐰', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Siganus_stellatus_Red_sea_02.jpg?width=400', fact: 'Жёлтая рыбка с плавниками-шипами', category: 'fish', rare: false },
  { id: 'wrasse', name: 'Губан', emoji: '🌈', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Thalassoma_hardwicke.jpg?width=400', fact: 'Меняет цвет и пол в течение жизни!', category: 'fish', rare: false },
  { id: 'scorpionfish', name: 'Рыба-скорпион', emoji: '🦂', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Scorpionfish.jpg?width=400', fact: 'Маскируется под камень — ядовитая!', category: 'fish', rare: true },
  { id: 'sweetlips', name: 'Сладкогуб', emoji: '👄', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Blackspotted_sweetlips,_Plectorhynchus_gaterinus,_at_Gota_Abu_Ramada,_Red_Sea,_Egypt,_at_Gota_Abu_Ramada,_Red_Sea,_Egypt_(6166548480).jpg?width=400', fact: 'Толстые губы и полосатое тело', category: 'fish', rare: false },
  { id: 'fusilier', name: 'Фузилир', emoji: '💙', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Blue_and_yellow_fusilier_(Caesio_teres)_(45998127474)_(cropped).jpg?width=400', fact: 'Жёлто-синяя стайка — тысячи рыб вместе!', category: 'fish', rare: false },
  { id: 'cardinalfish', name: 'Кардиналка', emoji: '❤️', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Eyeshadow_cardinalfish_at_Shaab_Mahmud.JPG?width=400', fact: 'Маленькая красная с большими глазами', category: 'fish', rare: false },
  { id: 'snapper', name: 'Луциан', emoji: '🔴', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Longspot_snapper_-_Lutjanus_fulviflamma.jpg?width=400', fact: 'Красная хищная рыба с жёлтым хвостом', category: 'fish', rare: false },
  { id: 'twoband-clownfish', name: 'Двухполосный клоун', emoji: '🧡', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Two-banded_clown_fish_-_Amphiprion_bicinctus_-_in_sea_anemone.jpg?width=400', fact: 'Красноморский родственник рыбы-клоуна', category: 'fish', rare: false },
  { id: 'sohal-tang', name: 'Сохал-хирург', emoji: '⚫', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Acanthurus_sohal.jpg?width=400', fact: 'Чёрный с белыми полосами — агрессивный!', category: 'fish', rare: false },
  { id: 'emperor', name: 'Рыба-император', emoji: '🟡', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lethrinus_nebulosus_Spangled_Emperor.jpg?width=400', fact: 'Большая переливающаяся рыба — король рифа', category: 'fish', rare: true },
  { id: 'grouper', name: 'Группер', emoji: '🐟', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Epinephelus_merra.jpg?width=400', fact: 'Большая пятнистая — может проглотить другую рыбу!', category: 'fish', rare: false },
  { id: 'needlefish', name: 'Рыба-игла', emoji: '📍', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Strongylura_marina.jpg?width=400', fact: 'Длинная и тонкая как стрела!', category: 'fish', rare: false },
  { id: 'zebra-lionfish', name: 'Дискиллус-зебра', emoji: '🦓', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pterois_zebra.JPG?width=400', fact: 'Короткопёрая крылатка с полосками как зебра', category: 'fish', rare: true },
  { id: 'foxface', name: 'Лисица жёлтая', emoji: '🦊', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Foxface_rabbitfish_(16473345699).jpg?width=400', fact: 'Ярко-жёлтая с лисьей мордочкой', category: 'fish', rare: false },
  { id: 'red-grouper', name: 'Краснопёрая гаррупа', emoji: '🔴', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Red-grouper-epinephelus-morio.jpg?width=400', fact: 'Большой хищник с красными плавниками', category: 'fish', rare: true },
  { id: 'pennantfish', name: 'Вымпельная рыба-бабочка', emoji: '🎏', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Pennant_Bannerfish_(Heniochus_diphreutes)_(3366488725).jpg?width=400', fact: 'Белая с чёрным и длинным вымпелом', category: 'fish', rare: false },

  // === КОРАЛЛЫ (4 вида) ===
  { id: 'brain-coral', name: 'Мозговой коралл', emoji: '🧠', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Brain_coral.jpg?width=400', fact: 'По форме похож на настоящий мозг!', category: 'coral', rare: false },
  { id: 'fire-coral', name: 'Огненный коралл', emoji: '🔥', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fire_Coral.jpg?width=400', fact: 'Ожигает как крапива — не трогай!', category: 'coral', rare: false },
  { id: 'soft-coral', name: 'Мягкие кораллы', emoji: '🌸', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Red_sea_coral_reef.jpg?width=400', fact: 'Качаются на течении как цветы', category: 'coral', rare: false },
  { id: 'fan-coral', name: 'Веерный коралл', emoji: '🪭', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Gorgonian_Sea_Fan_Coral.jpg?width=400', fact: 'Разворачивается навстречу течению', category: 'coral', rare: true },

  // === ДРУГИЕ (6 видов) ===
  { id: 'turtle', name: 'Морская черепаха', emoji: '🐢', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Green_sea_turtle_near_Marsa_Alam.JPG?width=400', fact: 'Может задерживать дыхание на 5 часов!', category: 'other', rare: true },
  { id: 'octopus', name: 'Осьминог', emoji: '🐙', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Octopus_macropus_-_The_Coral_Kingdom_Collection.jpg?width=400', fact: 'Умеет менять цвет за секунду', category: 'other', rare: true },
  { id: 'stingray', name: 'Скат-хвостокол', emoji: '🦈', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Bluespotted_Stingray_(14280727049).jpg?width=400', fact: 'Плавает как птица под водой', category: 'other', rare: false },
  { id: 'dugong', name: 'Дюгонь', emoji: '🐋', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Dugong_Marsa_Alam.jpg?width=400', fact: 'Морская корова! Очень редкий', category: 'other', rare: true },
  { id: 'dolphin', name: 'Дельфин', emoji: '🐬', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/A_spinner_dolphin_in_the_Red_Sea.jpg?width=400', fact: 'Спит одним полушарием мозга', category: 'other', rare: true },
  { id: 'sea-urchin', name: 'Морской ёж', emoji: '🦔', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Diadema_antillarum.jpg?width=400', fact: 'Ходит на ножках-присосках', category: 'other', rare: false },
];
