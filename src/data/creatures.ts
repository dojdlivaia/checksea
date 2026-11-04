// Каталог морских обитателей бухты Макади
// Каждая карточка: id, название, эмодзи, массив фото, факт, категория, редкость
// Фотографии: Wikimedia Commons (CC лицензия)
// SVG-иконки для достижений: components/CreatureIcons.tsx

export type CreatureCategory = 'fish' | 'coral' | 'other';

export interface Creature {
  id: string;
  name: string;
  emoji: string;
  images: string[]; // Массив URL фотографий (2-3 ракурса)
  fact: string;
  category: CreatureCategory;
  rare: boolean;
}

export const creatures: Creature[] = [
  // === РЫБЫ (30 видов) ===
  { 
    id: 'clownfish', name: 'Рыба-клоун', emoji: '🐠', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Common_clownfish.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Amphiprion_ocellaris_(Clown_anemonefish)_by_Nick_Hobgood.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Two-banded_clown_fish_-_Amphiprion_bicinctus_-_in_sea_anemone.jpg?width=600'
    ],
    fact: 'Живёт в актинии и не обжигается!', category: 'fish', rare: false 
  },
  { 
    id: 'parrotfish', name: 'Рыба-попугай', emoji: '🦜', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Maldives_Parrotfish_(Scaridae).jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Parrot_fish_on_coral_reefs_(27324293082).jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Stoplight-parrotfish.jpg?width=600'
    ],
    fact: 'Ест кораллы и делает из них песок!', category: 'fish', rare: false 
  },
  { 
    id: 'surgeonfish', name: 'Рыба-хирург', emoji: '🐟', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Blue_tang_surgeonfish_(Acanthurus_coeruleus).jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Atlantic_blue_tang_surgeonfish_(%22Acanthurus_coeruleus%22)_-13092009a.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Blue_tang_Acanthurus_coeruleus_(2442373989).jpg?width=600'
    ],
    fact: 'У хвоста острый шип как скальпель', category: 'fish', rare: false 
  },
  { 
    id: 'butterflyfish', name: 'Рыба-бабочка', emoji: '🦋', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Crown_Butterflyfish,_Chaetodon_paucifasciatus,_Red_Sea_(36204827650).jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Diagonal_Butterflyfish_(Chaetodon_fasciatus)_with_a_rainbow_on_it,_at_the_Red_Sea,_Eilat,_Israel.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Masked_butterflyfish_at_Abu_Dabab_Reefs,_Red_Sea,_Egypt_SCUBA.jpg?width=600'
    ],
    fact: 'Имеет ложные глаза на хвосте для защиты', category: 'fish', rare: false 
  },
  { 
    id: 'lionfish', name: 'Крылатка', emoji: '🦁', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pterois_volitans_Manado-e_edit.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Lionfish_Pterois_volitans_Right_Side_2542px.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Lionfish.JPG?width=600'
    ],
    fact: 'Красивая, но очень ядовитая!', category: 'fish', rare: true 
  },
  { 
    id: 'napoleonfish', name: 'Рыба-наполеон', emoji: '🐡', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Humphead_wrasse_melb_aquarium.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Napoleon_Wrasse_(Cheilinus_undulatus)_at_Elphinstone_Reef,_Red_Sea,_Egypt.jpg?width=600'
    ],
    fact: 'Может вырасти до 2 метров!', category: 'fish', rare: true 
  },
  { 
    id: 'anthias', name: 'Антиас', emoji: '✨', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Anthias_coral_reef_fish.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Anthias_(132955137).jpeg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Threadfin_anthias_male.jpg?width=600'
    ],
    fact: 'Плавает стайкой как живое облако', category: 'fish', rare: false 
  },
  { 
    id: 'moray', name: 'Мурена', emoji: '🐍', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/A_moray_eel._The_Red_Sea.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Yellow_Margined_Moray_Eel.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Giant_moray_eel_at_Halahi_Reef,_Red_Sea,_Egypt_-SCUBA_-UNDERWATER_-PICTURES_(6412308071).jpg?width=600'
    ],
    fact: 'Прячется в пещерах и открывает рот, чтобы дышать', category: 'fish', rare: true 
  },
  { 
    id: 'triggerfish', name: 'Спинорог', emoji: '🔫', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Picasso_triggerfish_in_Red_Sea_Aquarium_09.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Titan_Triggerfish_(or_Giant_Triggerfish,_or_Moustache_Triggerfish),_Balistoides_viridescens_lying_down_for_a_cleaning_at_Elphinstone_Reef,_Red_Sea,_Egypt_-SCUBA_(6194695879).jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Picasso_Triggerfish.jpg?width=600'
    ],
    fact: 'Может заклинивать себя в расщелине рифа', category: 'fish', rare: false 
  },
  { 
    id: 'goatfish', name: 'Барабулька', emoji: '🐟', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Sea_Goatfish.jpg?width=600'
    ],
    fact: 'Ищет еду усиками на подбородке', category: 'fish', rare: false 
  },
  { 
    id: 'emperor-angelfish', name: 'Императорский ангел', emoji: '👑', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Emperor_Angelfish,_Pomacanthus_imperator_at_Elphinstone_Reef,_Red_Sea,_Egypt_-SCUBA_(6194697417).jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Emperor_angelfish_(Pomacanthus_imperator).jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Emperor_angelfish,_Pomacanthus_imperator.jpg?width=600'
    ],
    fact: 'Синий с жёлтыми полосками — корона рифа!', category: 'fish', rare: true 
  },
  { 
    id: 'bannerfish', name: 'Баннерная рыба', emoji: '🏳️', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Sea_Bannerfish,_Heniochus_intermedius_at_Little_Brother,_Red_Sea,_Egypt_SCUBA.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Sea_Bannerfish_-_Heniochus_intermedius.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/CIMG2602_Two_Red_Sea_Bannerfish,_Lighthouse_Reef_(2692870043).jpg?width=600'
    ],
    fact: 'Белая с чёрными полосами и длинным плавником', category: 'fish', rare: false 
  },
  { 
    id: 'purple-tang', name: 'Фиолетовый хирург', emoji: '💜', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Cirujano_de_cola_amarilla_(Zebrasoma_xanthurum),_mar_Rojo,_Egipto,_2023-04-17,_DD_75.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Zebrasoma_xanthurum_at_Red_Sea_Aquarium_by_Hatem_Moushir.JPG?width=600'
    ],
    fact: 'Фиолетовый с жёлтым хвостом — эндемик!', category: 'fish', rare: false 
  },
  { 
    id: 'moorish-idol', name: 'Мавританский идол', emoji: '🎭', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Moorish_Idol.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Zanclus_cornutus_in_Kona.jpg?width=600'
    ],
    fact: 'Чёрно-белая с жёлтым — как в мультике!', category: 'fish', rare: false 
  },
  { 
    id: 'rabbitfish', name: 'Рыба-кролик', emoji: '🐰', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Siganus_stellatus_Red_sea_02.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gold-spotted_rabbitfish_(Siganus_punctatus).jpg?width=600'
    ],
    fact: 'Жёлтая рыбка с плавниками-шипами', category: 'fish', rare: false 
  },
  { 
    id: 'wrasse', name: 'Губан', emoji: '🌈', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Thalassoma_hardwicke.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Thalassoma_bifasciatum_(blue-headed_wrasse)_in_juvenile_stage.jpg?width=600'
    ],
    fact: 'Меняет цвет и пол в течение жизни!', category: 'fish', rare: false 
  },
  { 
    id: 'scorpionfish', name: 'Рыба-скорпион', emoji: '🦂', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Scorpionfish.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Scorpionfish_(cropped).jpg?width=600'
    ],
    fact: 'Маскируется под камень — ядовитая!', category: 'fish', rare: true 
  },
  { 
    id: 'sweetlips', name: 'Сладкогуб', emoji: '👄', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Blackspotted_sweetlips,_Plectorhynchus_gaterinus,_at_Gota_Abu_Ramada,_Red_Sea,_Egypt,_at_Gota_Abu_Ramada,_Red_Sea,_Egypt_(6166548480).jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Plectorhinchus_flavomaculatus_at_Red_Sea_Aquarium_by_Hatem_Moushir_1.JPG?width=600'
    ],
    fact: 'Толстые губы и полосатое тело', category: 'fish', rare: false 
  },
  { 
    id: 'fusilier', name: 'Фузилир', emoji: '💙', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Blue_and_yellow_fusilier_(Caesio_teres)_(45998127474)_(cropped).jpg?width=600'
    ],
    fact: 'Жёлто-синяя стайка — тысячи рыб вместе!', category: 'fish', rare: false 
  },
  { 
    id: 'cardinalfish', name: 'Кардиналка', emoji: '❤️', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Eyeshadow_cardinalfish_at_Shaab_Mahmud.JPG?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Red_Spot_Cardinal_Fish.jpg?width=600'
    ],
    fact: 'Маленькая красная с большими глазами', category: 'fish', rare: false 
  },
  { 
    id: 'snapper', name: 'Луциан', emoji: '🔴', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Longspot_snapper_-_Lutjanus_fulviflamma.jpg?width=600'
    ],
    fact: 'Красная хищная рыба с жёлтым хвостом', category: 'fish', rare: false 
  },
  { 
    id: 'twoband-clownfish', name: 'Двухполосный клоун', emoji: '🧡', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Two-banded_clown_fish_-_Amphiprion_bicinctus_-_in_sea_anemone.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/CIMG2661_Red_Sea_Anemonefish_(2692982869).jpg?width=600'
    ],
    fact: 'Красноморский родственник рыбы-клоуна', category: 'fish', rare: false 
  },
  { 
    id: 'sohal-tang', name: 'Сохал-хирург', emoji: '⚫', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Acanthurus_sohal.jpg?width=600'
    ],
    fact: 'Чёрный с белыми полосами — агрессивный!', category: 'fish', rare: false 
  },
  { 
    id: 'emperor', name: 'Рыба-император', emoji: '🟡', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Lethrinus_nebulosus_Spangled_Emperor.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Lethrinus_nebulosus_287497294_(cropped).jpg?width=600'
    ],
    fact: 'Большая переливающаяся рыба — король рифа', category: 'fish', rare: true 
  },
  { 
    id: 'grouper', name: 'Группер', emoji: '🐟', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Epinephelus_merra.jpg?width=600'
    ],
    fact: 'Большая пятнистая — может проглотить другую рыбу!', category: 'fish', rare: false 
  },
  { 
    id: 'needlefish', name: 'Рыба-игла', emoji: '📍', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Strongylura_marina.jpg?width=600'
    ],
    fact: 'Длинная и тонкая как стрела!', category: 'fish', rare: false 
  },
  { 
    id: 'zebra-lionfish', name: 'Дискиллус-зебра', emoji: '🦓', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pterois_zebra.JPG?width=600'
    ],
    fact: 'Короткопёрая крылатка с полосками как зебра', category: 'fish', rare: true 
  },
  { 
    id: 'foxface', name: 'Лисица жёлтая', emoji: '🦊', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Foxface_rabbitfish_(16473345699).jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Fox-faced_Rabbitfish_(16444109145).jpg?width=600'
    ],
    fact: 'Ярко-жёлтая с лисьей мордочкой', category: 'fish', rare: false 
  },
  { 
    id: 'red-grouper', name: 'Краснопёрая гаррупа', emoji: '🔴', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Red-grouper-epinephelus-morio.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gfp-red-grouper.jpg?width=600'
    ],
    fact: 'Большой хищник с красными плавниками', category: 'fish', rare: true 
  },
  { 
    id: 'pennantfish', name: 'Вымпельная рыба-бабочка', emoji: '🎏', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pennant_Bannerfish_(Heniochus_diphreutes)_(3366488725).jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Pennant_Bannerfish_(Heniochus_diphreutes)_(3148921825).jpg?width=600'
    ],
    fact: 'Белая с чёрным и длинным вымпелом', category: 'fish', rare: false 
  },

  // === КОРАЛЛЫ (4 вида) ===
  { 
    id: 'brain-coral', name: 'Мозговой коралл', emoji: '🧠', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Brain_coral.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Open_Brain_Coral.jpg?width=600'
    ],
    fact: 'По форме похож на настоящий мозг!', category: 'coral', rare: false 
  },
  { 
    id: 'fire-coral', name: 'Огненный коралл', emoji: '🔥', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Fire_Coral.jpg?width=600'
    ],
    fact: 'Ожигает как крапива — не трогай!', category: 'coral', rare: false 
  },
  { 
    id: 'soft-coral', name: 'Мягкие кораллы', emoji: '🌸', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Red_sea_coral_reef.jpg?width=600'
    ],
    fact: 'Качаются на течении как цветы', category: 'coral', rare: false 
  },
  { 
    id: 'fan-coral', name: 'Веерный коралл', emoji: '🪭', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Gorgonian_Sea_Fan_Coral.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Subergorgia_sp-gorgonian-fan-coral-close-up.jpg?width=600'
    ],
    fact: 'Разворачивается навстречу течению', category: 'coral', rare: true 
  },

  // === ДРУГИЕ (6 видов) ===
  { 
    id: 'turtle', name: 'Морская черепаха', emoji: '🐢', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Green_sea_turtle_near_Marsa_Alam.JPG?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Green_sea_turtle_portrait.JPG?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Green_turtle_swimming_over_coral_reefs_in_Kona.jpg?width=600'
    ],
    fact: 'Может задерживать дыхание на 5 часов!', category: 'other', rare: true 
  },
  { 
    id: 'octopus', name: 'Осьминог', emoji: '🐙', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Octopus_macropus_-_The_Coral_Kingdom_Collection.jpg?width=600'
    ],
    fact: 'Умеет менять цвет за секунду', category: 'other', rare: true 
  },
  { 
    id: 'stingray', name: 'Скат-хвостокол', emoji: '🦈', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Bluespotted_Stingray_(14280727049).jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/House_reef_blue_spotted_ray_1.jpg?width=600'
    ],
    fact: 'Плавает как птица под водой', category: 'other', rare: false 
  },
  { 
    id: 'dugong', name: 'Дюгонь', emoji: '🐋', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Dugong_Marsa_Alam.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Dugong.jpg?width=600'
    ],
    fact: 'Морская корова! Очень редкий', category: 'other', rare: true 
  },
  { 
    id: 'dolphin', name: 'Дельфин', emoji: '🐬', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/A_spinner_dolphin_in_the_Red_Sea.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/A_pod_of_spinner_dolphins_in_the_Red_Sea.jpg?width=600'
    ],
    fact: 'Спит одним полушарием мозга', category: 'other', rare: true 
  },
  { 
    id: 'sea-urchin', name: 'Морской ёж', emoji: '🦔', 
    images: [
      'https://commons.wikimedia.org/wiki/Special:FilePath/Diadema_antillarum.jpg?width=600',
      'https://commons.wikimedia.org/wiki/Special:FilePath/Common_Longspined_Sea_Urchin,_Diadema_paucispinum_at_Abu_Dabab_Reefs,_Red_Sea,_Egypt_SCUBA.jpg?width=600'
    ],
    fact: 'Ходит на ножках-присосках', category: 'other', rare: false 
  },
];
