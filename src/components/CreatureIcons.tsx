// Детализированные SVG-иконки морских обитателей
// Единый стиль: мультяшный, но реалистичный, с градиентами и деталями
// Используются на странице достижений

export const creatureIcons: Record<string, React.FC<{ className?: string }>> = {
  // РЫБА-КЛОУН
  'clownfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="clown-body">
          <stop offset="0%" stopColor="#FF8C5A"/>
          <stop offset="100%" stopColor="#FF6B35"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="60" ry="40" fill="url(#clown-body)"/>
      <rect x="70" y="60" width="15" height="80" rx="7" fill="white" opacity="0.95"/>
      <rect x="115" y="60" width="15" height="80" rx="7" fill="white" opacity="0.95"/>
      <rect x="68" y="60" width="2" height="80" fill="#333"/>
      <rect x="87" y="60" width="2" height="80" fill="#333"/>
      <rect x="113" y="60" width="2" height="80" fill="#333"/>
      <rect x="132" y="60" width="2" height="80" fill="#333"/>
      <ellipse cx="100" cy="65" rx="25" ry="15" fill="#FF8C5A"/>
      <path d="M160,100 L180,85 L180,115 Z" fill="#FF8C5A"/>
      <circle cx="80" cy="95" r="8" fill="white"/>
      <circle cx="78" cy="95" r="5" fill="#333"/>
      <circle cx="76" cy="93" r="2" fill="white"/>
    </svg>
  ),

  // РЫБА-ПОПУГАЙ
  'parrotfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="parrot-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00E5B0"/>
          <stop offset="100%" stopColor="#00B88A"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="55" ry="45" fill="url(#parrot-body)"/>
      <circle cx="80" cy="90" r="8" fill="#00D9A3" opacity="0.6"/>
      <circle cx="110" cy="85" r="8" fill="#00D9A3" opacity="0.6"/>
      <circle cx="95" cy="110" r="8" fill="#00D9A3" opacity="0.6"/>
      <path d="M50,100 L35,95 L35,105 Z" fill="#FFD93D"/>
      <ellipse cx="100" cy="60" rx="30" ry="18" fill="#00E5B0"/>
      <path d="M155,100 L175,85 L175,115 Z" fill="#00E5B0"/>
      <circle cx="75" cy="95" r="9" fill="white"/>
      <circle cx="73" cy="95" r="6" fill="#333"/>
      <circle cx="71" cy="93" r="2" fill="white"/>
    </svg>
  ),

  // РЫБА-ХИРУРГ
  'surgeonfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="surgeon-body">
          <stop offset="0%" stopColor="#54A0FF"/>
          <stop offset="100%" stopColor="#2E86DE"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="50" ry="50" fill="url(#surgeon-body)"/>
      <path d="M150,100 L170,80 L170,120 Z" fill="#FFD93D"/>
      <ellipse cx="100" cy="55" rx="28" ry="15" fill="#54A0FF"/>
      <circle cx="80" cy="95" r="9" fill="white"/>
      <circle cx="78" cy="95" r="6" fill="#333"/>
      <circle cx="76" cy="93" r="2" fill="white"/>
      <path d="M65,110 Q75,115 85,110" stroke="#333" strokeWidth="2" fill="none"/>
    </svg>
  ),

  // РЫБА-БАБОЧКА
  'butterflyfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="butterfly-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE066"/>
          <stop offset="100%" stopColor="#FFD93D"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="45" ry="55" fill="url(#butterfly-body)"/>
      <rect x="85" y="60" width="8" height="80" fill="#333"/>
      <rect x="107" y="60" width="8" height="80" fill="#333"/>
      <ellipse cx="100" cy="50" rx="25" ry="12" fill="#FFE066"/>
      <circle cx="85" cy="90" r="8" fill="white"/>
      <circle cx="83" cy="90" r="5" fill="#333"/>
      <circle cx="81" cy="88" r="2" fill="white"/>
      <path d="M75,105 L70,110" stroke="#333" strokeWidth="3"/>
    </svg>
  ),

  // КРЫЛАТКА
  'lionfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="lion-body">
          <stop offset="0%" stopColor="#E74C3C"/>
          <stop offset="100%" stopColor="#C0392B"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="110" rx="45" ry="35" fill="url(#lion-body)"/>
      <line x1="70" y1="80" x2="60" y2="50" stroke="#E74C3C" strokeWidth="3"/>
      <line x1="85" y1="75" x2="80" y2="45" stroke="#E74C3C" strokeWidth="3"/>
      <line x1="100" y1="75" x2="100" y2="45" stroke="#E74C3C" strokeWidth="3"/>
      <line x1="115" y1="75" x2="120" y2="45" stroke="#E74C3C" strokeWidth="3"/>
      <line x1="130" y1="80" x2="140" y2="50" stroke="#E74C3C" strokeWidth="3"/>
      <rect x="75" y="95" width="6" height="30" fill="white"/>
      <rect x="95" y="95" width="6" height="30" fill="white"/>
      <rect x="115" y="95" width="6" height="30" fill="white"/>
      <circle cx="85" cy="105" r="7" fill="white"/>
      <circle cx="83" cy="105" r="4" fill="#333"/>
      <circle cx="81" cy="103" r="1.5" fill="white"/>
    </svg>
  ),

  // РЫБА-НАПОЛЕОН
  'napoleonfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="napoleon-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5DADE2"/>
          <stop offset="100%" stopColor="#3498DB"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="110" rx="65" ry="50" fill="url(#napoleon-body)"/>
      <ellipse cx="90" cy="70" rx="30" ry="25" fill="#3498DB"/>
      <path d="M70,75 Q80,65 90,75 Q100,65 110,75" stroke="#2E86DE" strokeWidth="3" fill="none"/>
      <path d="M60,100 Q100,95 140,100" stroke="#2E86DE" strokeWidth="3" fill="none"/>
      <path d="M60,120 Q100,115 140,120" stroke="#2E86DE" strokeWidth="3" fill="none"/>
      <circle cx="80" cy="100" r="8" fill="white"/>
      <circle cx="78" cy="100" r="5" fill="#333"/>
      <circle cx="76" cy="98" r="2" fill="white"/>
      <path d="M165,110 L185,95 L185,125 Z" fill="#3498DB"/>
    </svg>
  ),

  // АНТИАС
  'anthias': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="anthias-body">
          <stop offset="0%" stopColor="#FF8FB3"/>
          <stop offset="100%" stopColor="#FF6B9D"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="40" ry="30" fill="url(#anthias-body)"/>
      <ellipse cx="100" cy="75" rx="20" ry="12" fill="#FF8FB3"/>
      <path d="M140,100 L160,90 L160,110 Z" fill="#FF8FB3"/>
      <circle cx="85" cy="95" r="7" fill="white"/>
      <circle cx="83" cy="95" r="4" fill="#333"/>
      <circle cx="81" cy="93" r="1.5" fill="white"/>
    </svg>
  ),

  // МУРЕНА
  'moray': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="moray-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8B6914"/>
          <stop offset="100%" stopColor="#6C5B3A"/>
        </linearGradient>
      </defs>
      <path d="M40,100 Q60,80 80,100 Q100,120 120,100 Q140,80 160,100" stroke="url(#moray-body)" strokeWidth="20" fill="none" strokeLinecap="round"/>
      <circle cx="55" cy="90" r="8" fill="#FFD93D"/>
      <circle cx="55" cy="90" r="5" fill="#333"/>
      <circle cx="53" cy="88" r="2" fill="white"/>
      <path d="M40,100 L35,95 L35,105 Z" fill="white"/>
      <path d="M42,98 L38,93 L38,103 Z" fill="white"/>
    </svg>
  ),

  // СПИНОРОГ
  'triggerfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="trigger-body">
          <stop offset="0%" stopColor="#34495E"/>
          <stop offset="100%" stopColor="#2C3E50"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="50" ry="45" fill="url(#trigger-body)"/>
      <circle cx="80" cy="85" r="10" fill="#3498DB"/>
      <circle cx="110" cy="95" r="8" fill="#3498DB"/>
      <circle cx="90" cy="115" r="7" fill="#3498DB"/>
      <ellipse cx="100" cy="60" rx="25" ry="12" fill="#34495E"/>
      <path d="M150,100 L170,85 L170,115 Z" fill="#34495E"/>
      <circle cx="80" cy="95" r="9" fill="white"/>
      <circle cx="78" cy="95" r="6" fill="#333"/>
      <circle cx="76" cy="93" r="2" fill="white"/>
    </svg>
  ),

  // БАРАБУЛЬКА
  'goatfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="goat-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F1C40F"/>
          <stop offset="100%" stopColor="#F39C12"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="55" ry="35" fill="url(#goat-body)"/>
      <rect x="70" y="75" width="60" height="4" fill="#E67E22"/>
      <rect x="70" y="95" width="60" height="4" fill="#E67E22"/>
      <rect x="70" y="115" width="60" height="4" fill="#E67E22"/>
      <line x1="50" y1="110" x2="40" y2="125" stroke="#E67E22" strokeWidth="2"/>
      <line x1="55" y1="110" x2="45" y2="128" stroke="#E67E22" strokeWidth="2"/>
      <path d="M155,100 L175,90 L175,110 Z" fill="#F1C40F"/>
      <circle cx="75" cy="95" r="7" fill="white"/>
      <circle cx="73" cy="95" r="4" fill="#333"/>
      <circle cx="71" cy="93" r="1.5" fill="white"/>
    </svg>
  ),

  // ИМПЕРАТОРСКИЙ АНГЕЛ
  'emperor-angelfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="emperor-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A237E"/>
          <stop offset="100%" stopColor="#283593"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="50" ry="55" fill="url(#emperor-body)"/>
      <path d="M60,80 Q100,75 140,80" stroke="#FFD93D" strokeWidth="4" fill="none"/>
      <path d="M55,100 Q100,95 145,100" stroke="#FFD93D" strokeWidth="4" fill="none"/>
      <path d="M60,120 Q100,115 140,120" stroke="#FFD93D" strokeWidth="4" fill="none"/>
      <path d="M65,90 Q80,85 95,90" stroke="#FFD93D" strokeWidth="3" fill="none"/>
      <ellipse cx="100" cy="50" rx="25" ry="15" fill="#283593"/>
      <circle cx="80" cy="95" r="8" fill="white"/>
      <circle cx="78" cy="95" r="5" fill="#333"/>
      <circle cx="76" cy="93" r="2" fill="white"/>
    </svg>
  ),

  // БАННЕРНАЯ РЫБА
  'bannerfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="banner-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFE066"/>
          <stop offset="100%" stopColor="#FFD93D"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="110" rx="40" ry="50" fill="url(#banner-body)"/>
      <rect x="75" y="70" width="50" height="12" fill="#333"/>
      <rect x="75" y="130" width="50" height="12" fill="#333"/>
      <line x1="100" y1="60" x2="100" y2="20" stroke="#333" strokeWidth="4"/>
      <circle cx="100" cy="18" r="6" fill="#333"/>
      <circle cx="85" cy="105" r="7" fill="white"/>
      <circle cx="83" cy="105" r="4" fill="#333"/>
      <circle cx="81" cy="103" r="1.5" fill="white"/>
    </svg>
  ),

  // ФИОЛЕТОВЫЙ ХИРУРГ
  'purple-tang': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="purple-body">
          <stop offset="0%" stopColor="#9B59B6"/>
          <stop offset="100%" stopColor="#8E44AD"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="50" ry="50" fill="url(#purple-body)"/>
      <path d="M150,100 L170,80 L170,120 Z" fill="#FFD93D"/>
      <ellipse cx="100" cy="55" rx="28" ry="15" fill="#9B59B6"/>
      <circle cx="80" cy="95" r="9" fill="white"/>
      <circle cx="78" cy="95" r="6" fill="#333"/>
      <circle cx="76" cy="93" r="2" fill="white"/>
    </svg>
  ),

  // МАВРИТАНСКИЙ ИДОЛ
  'moorish-idol': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="110" rx="35" ry="50" fill="white"/>
      <rect x="75" y="70" width="50" height="15" fill="#333"/>
      <rect x="75" y="130" width="50" height="15" fill="#333"/>
      <path d="M135,110 L160,95 L160,125 Z" fill="#FFD93D"/>
      <line x1="100" y1="60" x2="100" y2="15" stroke="#333" strokeWidth="5"/>
      <circle cx="88" cy="100" r="7" fill="white"/>
      <circle cx="86" cy="100" r="4" fill="#333"/>
      <circle cx="84" cy="98" r="1.5" fill="white"/>
    </svg>
  ),

  // РЫБА-КРОЛИК
  'rabbitfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rabbit-body">
          <stop offset="0%" stopColor="#F39C12"/>
          <stop offset="100%" stopColor="#F1C40F"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="50" ry="45" fill="url(#rabbit-body)"/>
      <circle cx="80" cy="85" r="4" fill="#F39C12"/>
      <circle cx="110" cy="90" r="4" fill="#F39C12"/>
      <circle cx="95" cy="115" r="4" fill="#F39C12"/>
      <line x1="80" y1="55" x2="75" y2="40" stroke="#E67E22" strokeWidth="3"/>
      <line x1="100" y1="55" x2="100" y2="38" stroke="#E67E22" strokeWidth="3"/>
      <line x1="120" y1="55" x2="125" y2="40" stroke="#E67E22" strokeWidth="3"/>
      <path d="M150,100 L170,90 L170,110 Z" fill="#F39C12"/>
      <circle cx="78" cy="95" r="7" fill="white"/>
      <circle cx="76" cy="95" r="4" fill="#333"/>
      <circle cx="74" cy="93" r="1.5" fill="white"/>
    </svg>
  ),

  // ГУБАН
  'wrasse': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wrasse-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#27AE60"/>
          <stop offset="100%" stopColor="#2ECC71"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="55" ry="35" fill="url(#wrasse-body)"/>
      <path d="M55,90 Q100,85 145,90" stroke="#E74C3C" strokeWidth="4" fill="none"/>
      <path d="M55,110 Q100,105 145,110" stroke="#3498DB" strokeWidth="4" fill="none"/>
      <ellipse cx="100" cy="70" rx="25" ry="12" fill="#2ECC71"/>
      <path d="M155,100 L175,90 L175,110 Z" fill="#2ECC71"/>
      <circle cx="75" cy="95" r="7" fill="white"/>
      <circle cx="73" cy="95" r="4" fill="#333"/>
      <circle cx="71" cy="93" r="1.5" fill="white"/>
    </svg>
  ),

  // РЫБА-СКОРПИОН
  'scorpionfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="scorpion-body">
          <stop offset="0%" stopColor="#E74C3C"/>
          <stop offset="100%" stopColor="#C0392B"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="110" rx="55" ry="40" fill="url(#scorpion-body)"/>
      <line x1="70" y1="80" x2="65" y2="60" stroke="#922B21" strokeWidth="4"/>
      <line x1="90" y1="75" x2="88" y2="55" stroke="#922B21" strokeWidth="4"/>
      <line x1="110" y1="75" x2="112" y2="55" stroke="#922B21" strokeWidth="4"/>
      <line x1="130" y1="80" x2="135" y2="60" stroke="#922B21" strokeWidth="4"/>
      <circle cx="80" cy="100" r="6" fill="#922B21"/>
      <circle cx="110" cy="110" r="6" fill="#922B21"/>
      <circle cx="95" cy="125" r="5" fill="#922B21"/>
      <circle cx="80" cy="105" r="7" fill="#FFD93D"/>
      <circle cx="78" cy="105" r="4" fill="#333"/>
      <circle cx="76" cy="103" r="1.5" fill="white"/>
    </svg>
  ),

  // СЛАДКОГУБ
  'sweetlips': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sweetlips-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ECF0F1"/>
          <stop offset="100%" stopColor="#BDC3C7"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="55" ry="45" fill="url(#sweetlips-body)"/>
      <rect x="65" y="75" width="70" height="6" fill="#333"/>
      <rect x="65" y="95" width="70" height="6" fill="#333"/>
      <rect x="65" y="115" width="70" height="6" fill="#333"/>
      <ellipse cx="55" cy="105" rx="12" ry="8" fill="#E74C3C"/>
      <path d="M155,100 L175,90 L175,110 Z" fill="#95A5A6"/>
      <circle cx="75" cy="95" r="7" fill="white"/>
      <circle cx="73" cy="95" r="4" fill="#333"/>
      <circle cx="71" cy="93" r="1.5" fill="white"/>
    </svg>
  ),

  // ФУЗИЛИР
  'fusilier': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fusilier-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5DADE2"/>
          <stop offset="100%" stopColor="#3498DB"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="55" ry="30" fill="url(#fusilier-body)"/>
      <rect x="60" y="95" width="80" height="10" fill="#FFD93D"/>
      <path d="M155,100 L175,90 L175,110 Z" fill="#FFD93D"/>
      <circle cx="75" cy="95" r="7" fill="white"/>
      <circle cx="73" cy="95" r="4" fill="#333"/>
      <circle cx="71" cy="93" r="1.5" fill="white"/>
    </svg>
  ),

  // КАРДИНАЛКА
  'cardinalfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cardinal-body">
          <stop offset="0%" stopColor="#E74C3C"/>
          <stop offset="100%" stopColor="#C0392B"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="35" ry="30" fill="url(#cardinal-body)"/>
      <path d="M135,100 L155,90 L155,110 Z" fill="#C0392B"/>
      <circle cx="85" cy="95" r="12" fill="white"/>
      <circle cx="83" cy="95" r="8" fill="#333"/>
      <circle cx="80" cy="92" r="3" fill="white"/>
    </svg>
  ),

  // ЛУЦИАН
  'snapper': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="snapper-body">
          <stop offset="0%" stopColor="#E74C3C"/>
          <stop offset="100%" stopColor="#C0392B"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="55" ry="40" fill="url(#snapper-body)"/>
      <path d="M155,100 L175,85 L175,115 Z" fill="#FFD93D"/>
      <ellipse cx="100" cy="65" rx="25" ry="12" fill="#C0392B"/>
      <circle cx="78" cy="95" r="8" fill="white"/>
      <circle cx="76" cy="95" r="5" fill="#333"/>
      <circle cx="74" cy="93" r="2" fill="white"/>
    </svg>
  ),

  // ДВУХПОЛОСНЫЙ КЛОУН
  'twoband-clownfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="twoband-body">
          <stop offset="0%" stopColor="#FFA033"/>
          <stop offset="100%" stopColor="#FF8C00"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="55" ry="38" fill="url(#twoband-body)"/>
      <rect x="75" y="65" width="12" height="70" rx="6" fill="white"/>
      <rect x="113" y="65" width="12" height="70" rx="6" fill="white"/>
      <ellipse cx="100" cy="67" rx="22" ry="12" fill="#FFA033"/>
      <path d="M155,100 L175,90 L175,110 Z" fill="#FFA033"/>
      <circle cx="82" cy="95" r="7" fill="white"/>
      <circle cx="80" cy="95" r="4" fill="#333"/>
      <circle cx="78" cy="93" r="1.5" fill="white"/>
    </svg>
  ),

  // СОХАЛ-ХИРУРГ
  'sohal-tang': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="sohal-body">
          <stop offset="0%" stopColor="#34495E"/>
          <stop offset="100%" stopColor="#2C3E50"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="50" ry="50" fill="url(#sohal-body)"/>
      <path d="M55,80 Q100,75 145,80" stroke="white" strokeWidth="3" fill="none"/>
      <path d="M55,100 Q100,95 145,100" stroke="white" strokeWidth="3" fill="none"/>
      <path d="M55,120 Q100,115 145,120" stroke="white" strokeWidth="3" fill="none"/>
      <path d="M150,100 L170,80 L170,120 Z" fill="#FFD93D"/>
      <circle cx="80" cy="95" r="8" fill="white"/>
      <circle cx="78" cy="95" r="5" fill="#333"/>
      <circle cx="76" cy="93" r="2" fill="white"/>
    </svg>
  ),

  // РЫБА-ИМПЕРАТОР
  'emperor': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="emperor-fish-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#BDC3C7"/>
          <stop offset="100%" stopColor="#95A5A6"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="60" ry="45" fill="url(#emperor-fish-body)"/>
      <circle cx="75" cy="85" r="3" fill="#FFD93D"/>
      <circle cx="95" cy="95" r="3" fill="#FFD93D"/>
      <circle cx="115" cy="90" r="3" fill="#FFD93D"/>
      <circle cx="85" cy="110" r="3" fill="#FFD93D"/>
      <circle cx="105" cy="115" r="3" fill="#FFD93D"/>
      <circle cx="125" cy="105" r="3" fill="#FFD93D"/>
      <path d="M160,100 L180,85 L180,115 Z" fill="#7F8C8D"/>
      <circle cx="78" cy="95" r="8" fill="white"/>
      <circle cx="76" cy="95" r="5" fill="#333"/>
      <circle cx="74" cy="93" r="2" fill="white"/>
    </svg>
  ),

  // ГРУППЕР
  'grouper': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="grouper-body">
          <stop offset="0%" stopColor="#A67C00"/>
          <stop offset="100%" stopColor="#8B6914"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="65" ry="50" fill="url(#grouper-body)"/>
      <circle cx="75" cy="85" r="8" fill="#6B4F10"/>
      <circle cx="110" cy="90" r="8" fill="#6B4F10"/>
      <circle cx="90" cy="115" r="8" fill="#6B4F10"/>
      <circle cx="125" cy="110" r="8" fill="#6B4F10"/>
      <path d="M165,100 L185,85 L185,115 Z" fill="#7A5B12"/>
      <circle cx="75" cy="95" r="9" fill="white"/>
      <circle cx="73" cy="95" r="6" fill="#333"/>
      <circle cx="71" cy="93" r="2" fill="white"/>
    </svg>
  ),

  // РЫБА-ИГЛА
  'needlefish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="needle-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5DADE2"/>
          <stop offset="100%" stopColor="#3498DB"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="70" ry="15" fill="url(#needle-body)"/>
      <path d="M30,100 L15,98 L15,102 Z" fill="#2E86DE"/>
      <path d="M170,100 L185,95 L185,105 Z" fill="#2E86DE"/>
      <circle cx="40" cy="98" r="4" fill="white"/>
      <circle cx="39" cy="98" r="2.5" fill="#333"/>
      <circle cx="38" cy="97" r="1" fill="white"/>
    </svg>
  ),

  // ДИСКИЛЛУС-ЗЕБРА
  'zebra-lionfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="zebra-body">
          <stop offset="0%" stopColor="#E74C3C"/>
          <stop offset="100%" stopColor="#C0392B"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="110" rx="40" ry="30" fill="url(#zebra-body)"/>
      <line x1="75" y1="85" x2="70" y2="65" stroke="#E74C3C" strokeWidth="3"/>
      <line x1="90" y1="80" x2="88" y2="60" stroke="#E74C3C" strokeWidth="3"/>
      <line x1="110" y1="80" x2="112" y2="60" stroke="#E74C3C" strokeWidth="3"/>
      <line x1="125" y1="85" x2="130" y2="65" stroke="#E74C3C" strokeWidth="3"/>
      <rect x="80" y="100" width="5" height="25" fill="white"/>
      <rect x="95" y="100" width="5" height="25" fill="white"/>
      <rect x="110" y="100" width="5" height="25" fill="white"/>
      <circle cx="88" cy="105" r="6" fill="white"/>
      <circle cx="86" cy="105" r="4" fill="#333"/>
      <circle cx="84" cy="103" r="1.5" fill="white"/>
    </svg>
  ),

  // ЛИСИЦА ЖЁЛТАЯ
  'foxface': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="foxface-body">
          <stop offset="0%" stopColor="#F1C40F"/>
          <stop offset="100%" stopColor="#F39C12"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="45" ry="50" fill="url(#foxface-body)"/>
      <ellipse cx="70" cy="90" rx="20" ry="25" fill="white"/>
      <path d="M145,100 L165,90 L165,110 Z" fill="#F39C12"/>
      <circle cx="65" cy="85" r="7" fill="white"/>
      <circle cx="63" cy="85" r="4" fill="#333"/>
      <circle cx="61" cy="83" r="1.5" fill="white"/>
    </svg>
  ),

  // КРАСНОПЁРАЯ ГАРРУПА
  'red-grouper': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="redgrouper-body">
          <stop offset="0%" stopColor="#E74C3C"/>
          <stop offset="100%" stopColor="#C0392B"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="60" ry="50" fill="url(#redgrouper-body)"/>
      <circle cx="80" cy="90" r="6" fill="#922B21"/>
      <circle cx="110" cy="95" r="6" fill="#922B21"/>
      <circle cx="95" cy="115" r="6" fill="#922B21"/>
      <path d="M160,100 L180,85 L180,115 Z" fill="#C0392B"/>
      <circle cx="78" cy="95" r="9" fill="white"/>
      <circle cx="76" cy="95" r="6" fill="#333"/>
      <circle cx="74" cy="93" r="2" fill="white"/>
    </svg>
  ),

  // ВЫМПЕЛЬНАЯ РЫБА-БАБОЧКА
  'pennantfish': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="100" cy="110" rx="35" ry="50" fill="white"/>
      <rect x="75" y="70" width="50" height="12" fill="#333"/>
      <rect x="75" y="130" width="50" height="12" fill="#333"/>
      <path d="M135,110 L160,95 L160,125 Z" fill="#FFD93D"/>
      <line x1="100" y1="60" x2="100" y2="10" stroke="#333" strokeWidth="5"/>
      <path d="M95,10 L100,5 L105,10" fill="#333"/>
      <circle cx="88" cy="100" r="7" fill="white"/>
      <circle cx="86" cy="100" r="4" fill="#333"/>
      <circle cx="84" cy="98" r="1.5" fill="white"/>
    </svg>
  ),

  // КОРАЛЛЫ

  // МОЗГОВОЙ КОРАЛЛ
  'brain-coral': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="brain-coral-body">
          <stop offset="0%" stopColor="#F5CBA7"/>
          <stop offset="100%" stopColor="#E8A87C"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="110" rx="60" ry="50" fill="url(#brain-coral-body)"/>
      <path d="M55,100 Q70,90 85,100 Q100,110 115,100 Q130,90 145,100" stroke="#C68B59" strokeWidth="4" fill="none"/>
      <path d="M55,120 Q70,110 85,120 Q100,130 115,120 Q130,110 145,120" stroke="#C68B59" strokeWidth="4" fill="none"/>
      <path d="M60,80 Q75,70 90,80 Q105,90 120,80 Q135,70 150,80" stroke="#C68B59" strokeWidth="4" fill="none"/>
    </svg>
  ),

  // ОГНЕННЫЙ КОРАЛЛ
  'fire-coral': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fire-coral-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E74C3C"/>
          <stop offset="100%" stopColor="#C0392B"/>
        </linearGradient>
      </defs>
      <path d="M100,150 L100,80 L90,60" stroke="url(#fire-coral-body)" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M100,100 L120,75 L125,55" stroke="url(#fire-coral-body)" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M100,110 L80,85 L70,65" stroke="url(#fire-coral-body)" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M100,120 L130,100 L140,80" stroke="url(#fire-coral-body)" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M100,130 L70,110 L60,90" stroke="url(#fire-coral-body)" strokeWidth="8" fill="none" strokeLinecap="round"/>
    </svg>
  ),

  // МЯГКИЕ КОРАЛЛЫ
  'soft-coral': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="soft-coral-body" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D2B4DE"/>
          <stop offset="100%" stopColor="#AF7AC5"/>
        </linearGradient>
      </defs>
      <rect x="95" y="120" width="10" height="40" fill="#8E44AD"/>
      <ellipse cx="80" cy="90" rx="15" ry="25" fill="url(#soft-coral-body)"/>
      <ellipse cx="100" cy="80" rx="15" ry="30" fill="url(#soft-coral-body)"/>
      <ellipse cx="120" cy="90" rx="15" ry="25" fill="url(#soft-coral-body)"/>
      <ellipse cx="70" cy="105" rx="12" ry="20" fill="#D2B4DE"/>
      <ellipse cx="130" cy="105" rx="12" ry="20" fill="#D2B4DE"/>
    </svg>
  ),

  // ВЕЕРНЫЙ КОРАЛЛ
  'fan-coral': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="fan-coral-body">
          <stop offset="0%" stopColor="#F39C12"/>
          <stop offset="100%" stopColor="#E67E22"/>
        </radialGradient>
      </defs>
      <rect x="95" y="130" width="10" height="40" fill="#D35400"/>
      <ellipse cx="100" cy="90" rx="55" ry="50" fill="url(#fan-coral-body)" opacity="0.7"/>
      <line x1="60" y1="70" x2="60" y2="110" stroke="#D35400" strokeWidth="2"/>
      <line x1="80" y1="55" x2="80" y2="125" stroke="#D35400" strokeWidth="2"/>
      <line x1="100" y1="45" x2="100" y2="130" stroke="#D35400" strokeWidth="2"/>
      <line x1="120" y1="55" x2="120" y2="125" stroke="#D35400" strokeWidth="2"/>
      <line x1="140" y1="70" x2="140" y2="110" stroke="#D35400" strokeWidth="2"/>
      <line x1="50" y1="80" x2="150" y2="80" stroke="#D35400" strokeWidth="2"/>
      <line x1="50" y1="100" x2="150" y2="100" stroke="#D35400" strokeWidth="2"/>
    </svg>
  ),

  // ДРУГИЕ

  // МОРСКАЯ ЧЕРЕПАХА
  'turtle': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="turtle-shell">
          <stop offset="0%" stopColor="#2ECC71"/>
          <stop offset="100%" stopColor="#27AE60"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="55" ry="45" fill="url(#turtle-shell)"/>
      <path d="M70,80 L100,70 L130,80 L130,120 L100,130 L70,120 Z" fill="#229954" stroke="#1E8449" strokeWidth="2"/>
      <line x1="100" y1="70" x2="100" y2="130" stroke="#1E8449" strokeWidth="2"/>
      <line x1="70" y1="100" x2="130" y2="100" stroke="#1E8449" strokeWidth="2"/>
      <ellipse cx="50" cy="100" rx="20" ry="15" fill="#2ECC71"/>
      <ellipse cx="75" cy="65" rx="20" ry="10" fill="#2ECC71" transform="rotate(-30 75 65)"/>
      <ellipse cx="125" cy="65" rx="20" ry="10" fill="#2ECC71" transform="rotate(30 125 65)"/>
      <ellipse cx="75" cy="135" rx="20" ry="10" fill="#2ECC71" transform="rotate(30 75 135)"/>
      <ellipse cx="125" cy="135" rx="20" ry="10" fill="#2ECC71" transform="rotate(-30 125 135)"/>
      <circle cx="45" cy="97" r="4" fill="#333"/>
      <circle cx="44" cy="96" r="1.5" fill="white"/>
    </svg>
  ),

  // ОСЬМИНОГ
  'octopus': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="octopus-body">
          <stop offset="0%" stopColor="#E74C3C"/>
          <stop offset="100%" stopColor="#C0392B"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="70" rx="40" ry="35" fill="url(#octopus-body)"/>
      <path d="M70,95 Q60,120 50,140" stroke="#C0392B" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M80,100 Q75,125 65,150" stroke="#C0392B" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M95,105 Q95,130 90,155" stroke="#C0392B" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M110,105 Q115,130 120,155" stroke="#C0392B" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M125,100 Q135,125 140,150" stroke="#C0392B" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M135,95 Q145,120 155,140" stroke="#C0392B" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <circle cx="85" cy="65" r="10" fill="white"/>
      <circle cx="83" cy="65" r="6" fill="#333"/>
      <circle cx="81" cy="63" r="2" fill="white"/>
      <circle cx="115" cy="65" r="10" fill="white"/>
      <circle cx="113" cy="65" r="6" fill="#333"/>
      <circle cx="111" cy="63" r="2" fill="white"/>
    </svg>
  ),

  // СКАТ-ХВОСТОКОЛ
  'stingray': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="stingray-body">
          <stop offset="0%" stopColor="#5DADE2"/>
          <stop offset="100%" stopColor="#3498DB"/>
        </radialGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="65" ry="40" fill="url(#stingray-body)"/>
      <circle cx="75" cy="90" r="5" fill="#3498DB"/>
      <circle cx="100" cy="85" r="5" fill="#3498DB"/>
      <circle cx="125" cy="90" r="5" fill="#3498DB"/>
      <circle cx="85" cy="105" r="5" fill="#3498DB"/>
      <circle cx="115" cy="105" r="5" fill="#3498DB"/>
      <path d="M165,100 Q180,95 190,85" stroke="#2E86DE" strokeWidth="4" fill="none"/>
      <circle cx="80" cy="95" r="5" fill="#333"/>
      <circle cx="120" cy="95" r="5" fill="#333"/>
    </svg>
  ),

  // ДЮГОНЬ
  'dugong': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dugong-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#95A5A6"/>
          <stop offset="100%" stopColor="#7F8C8D"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="70" ry="40" fill="url(#dugong-body)"/>
      <ellipse cx="45" cy="100" rx="25" ry="25" fill="#95A5A6"/>
      <path d="M170,100 L190,85 L190,115 Z" fill="#7F8C8D"/>
      <ellipse cx="80" cy="75" rx="15" ry="8" fill="#95A5A6"/>
      <ellipse cx="80" cy="125" rx="15" ry="8" fill="#95A5A6"/>
      <circle cx="40" cy="95" r="4" fill="#333"/>
      <circle cx="39" cy="94" r="1.5" fill="white"/>
    </svg>
  ),

  // ДЕЛЬФИН
  'dolphin': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="dolphin-body" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5DADE2"/>
          <stop offset="100%" stopColor="#3498DB"/>
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="100" rx="65" ry="30" fill="url(#dolphin-body)"/>
      <ellipse cx="45" cy="100" rx="20" ry="18" fill="#3498DB"/>
      <path d="M30,100 L15,98 L15,102 Z" fill="#2E86DE"/>
      <path d="M100,70 L110,50 L115,70" fill="#3498DB"/>
      <path d="M165,100 L185,85 L185,115 Z" fill="#3498DB"/>
      <circle cx="42" cy="97" r="4" fill="#333"/>
      <circle cx="41" cy="96" r="1.5" fill="white"/>
      <path d="M30,105 Q40,110 50,105" stroke="#333" strokeWidth="2" fill="none"/>
    </svg>
  ),

  // МОРСКОЙ ЁЖ
  'sea-urchin': ({ className }) => (
    <svg className={className} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="urchin-body">
          <stop offset="0%" stopColor="#34495E"/>
          <stop offset="100%" stopColor="#2C3E50"/>
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="35" fill="url(#urchin-body)"/>
      <line x1="100" y1="65" x2="100" y2="40" stroke="#34495E" strokeWidth="3"/>
      <line x1="120" y1="70" x2="135" y2="50" stroke="#34495E" strokeWidth="3"/>
      <line x1="135" y1="85" x2="155" y2="75" stroke="#34495E" strokeWidth="3"/>
      <line x1="135" y1="100" x2="160" y2="100" stroke="#34495E" strokeWidth="3"/>
      <line x1="135" y1="115" x2="155" y2="125" stroke="#34495E" strokeWidth="3"/>
      <line x1="120" y1="130" x2="135" y2="150" stroke="#34495E" strokeWidth="3"/>
      <line x1="100" y1="135" x2="100" y2="160" stroke="#34495E" strokeWidth="3"/>
      <line x1="80" y1="130" x2="65" y2="150" stroke="#34495E" strokeWidth="3"/>
      <line x1="65" y1="115" x2="45" y2="125" stroke="#34495E" strokeWidth="3"/>
      <line x1="65" y1="100" x2="40" y2="100" stroke="#34495E" strokeWidth="3"/>
      <line x1="65" y1="85" x2="45" y2="75" stroke="#34495E" strokeWidth="3"/>
      <line x1="80" y1="70" x2="65" y2="50" stroke="#34495E" strokeWidth="3"/>
    </svg>
  ),
};
