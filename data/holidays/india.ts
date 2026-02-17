/**
 * India holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getHoliDate, getDiwaliDate, getEidAlFitrDate } from './_shared-dates';

// ---------------------------------------------------------------------------
// Republic Day — January 26
// ---------------------------------------------------------------------------

const republicDay: HolidayData = {
  id: 'in_republic-day',
  countryCode: 'in',
  slugs: { en: 'republic-day', fr: 'fete-de-la-republique', es: 'dia-de-la-republica' },
  names: { en: 'Republic Day', fr: 'Fête de la République', es: 'Día de la República' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 26,

  descriptions: {
    en: 'Republic Day on January 26 celebrates the adoption of the Constitution of India in 1950, marking the country\'s transition to a republic. A grand military parade takes place at Rajpath in New Delhi, with flag hoisting ceremonies held across the nation.',
    fr: 'Le Jour de la République, le 26 janvier, célèbre l\'adoption de la Constitution de l\'Inde en 1950, marquant la transition du pays vers une république. Un grand défilé militaire a lieu à Rajpath à New Delhi, avec des cérémonies de levée du drapeau dans tout le pays.',
    es: 'El Día de la República, el 26 de enero, celebra la adopción de la Constitución de la India en 1950, marcando la transición del país a una república. Un gran desfile militar tiene lugar en Rajpath en Nueva Delhi, con ceremonias de izado de bandera en todo el país.',
  },

  history: {
    en: 'The Constitution of India was adopted on November 26, 1949, and came into effect on January 26, 1950, replacing the Government of India Act (1935). January 26 was chosen because on this date in 1930, the Indian National Congress declared "Purna Swaraj" (complete independence) from British rule. The first Republic Day parade was held in 1950 at the Irwin Amphitheatre (now Major Dhyan Chand National Stadium) in New Delhi.\n\nThe Republic Day celebrations have grown into one of India\'s most spectacular national events. Each year, a foreign head of state is invited as the chief guest, symbolising India\'s diplomatic relationships. The parade showcases India\'s military strength, cultural diversity, and technological achievements, with tableaux from various states and union territories.',
    fr: 'La Constitution de l\'Inde a été adoptée le 26 novembre 1949 et est entrée en vigueur le 26 janvier 1950, remplaçant la loi sur le gouvernement de l\'Inde (1935). Le 26 janvier a été choisi car à cette date en 1930, le Congrès national indien a déclaré le « Purna Swaraj » (indépendance totale) de la domination britannique. Le premier défilé du Jour de la République a eu lieu en 1950 à l\'amphithéâtre Irwin (aujourd\'hui stade national Major Dhyan Chand) à New Delhi.\n\nLes célébrations du Jour de la République sont devenues l\'un des événements nationaux les plus spectaculaires de l\'Inde. Chaque année, un chef d\'État étranger est invité en tant qu\'invité principal, symbolisant les relations diplomatiques de l\'Inde. Le défilé présente la puissance militaire, la diversité culturelle et les réalisations technologiques de l\'Inde, avec des tableaux des différents États et territoires de l\'Union.',
    es: 'La Constitución de la India fue adoptada el 26 de noviembre de 1949 y entró en vigor el 26 de enero de 1950, reemplazando la Ley de Gobierno de la India (1935). Se eligió el 26 de enero porque en esa fecha de 1930, el Congreso Nacional Indio declaró el "Purna Swaraj" (independencia total) del dominio británico. El primer desfile del Día de la República se celebró en 1950 en el anfiteatro Irwin (ahora estadio nacional Major Dhyan Chand) en Nueva Delhi.\n\nLas celebraciones del Día de la República se han convertido en uno de los eventos nacionales más espectaculares de la India. Cada año, un jefe de Estado extranjero es invitado como huésped principal, simbolizando las relaciones diplomáticas de la India. El desfile muestra la fuerza militar, la diversidad cultural y los logros tecnológicos de la India, con carrozas de los distintos estados y territorios de la Unión.',
  },

  traditions: {
    en: [
      'Watching the grand Republic Day parade on Rajpath (Kartavya Path) in New Delhi',
      'Flag hoisting ceremonies at schools, government buildings, and public spaces',
      'Beating the Retreat ceremony three days after Republic Day',
      'Cultural performances and tableaux representing each state\'s heritage',
      'Bravery awards presented to civilians and children',
      'Lighting of government buildings and monuments across the country',
    ],
    fr: [
      'Regarder le grand défilé du Jour de la République sur Rajpath (Kartavya Path) à New Delhi',
      'Cérémonies de levée du drapeau dans les écoles, bâtiments gouvernementaux et espaces publics',
      'Cérémonie de la Retraite aux flambeaux trois jours après le Jour de la République',
      'Spectacles culturels et tableaux représentant le patrimoine de chaque État',
      'Remise de prix de bravoure aux civils et aux enfants',
      'Illumination des bâtiments gouvernementaux et monuments à travers le pays',
    ],
    es: [
      'Ver el gran desfile del Día de la República en Rajpath (Kartavya Path) en Nueva Delhi',
      'Ceremonias de izado de bandera en escuelas, edificios gubernamentales y espacios públicos',
      'Ceremonia de Retiro de la Bandera tres días después del Día de la República',
      'Espectáculos culturales y carrozas representando el patrimonio de cada estado',
      'Premios de valentía entregados a civiles y niños',
      'Iluminación de edificios gubernamentales y monumentos en todo el país',
    ],
  },

  funFacts: {
    en: [
      'The Republic Day parade route along Rajpath (now Kartavya Path) stretches approximately 8 kilometres.',
      'India\'s Constitution is the longest written constitution of any country in the world, with 448 articles.',
      'The first chief guest at the Republic Day celebration in 1950 was President Sukarno of Indonesia.',
      'The Beating the Retreat ceremony uses no electric instruments — only military bands and bugles.',
      'The 21-gun salute fired during the parade uses 105mm Indian Field Guns positioned near India Gate.',
    ],
    fr: [
      'Le parcours du défilé du Jour de la République le long de Rajpath (maintenant Kartavya Path) s\'étend sur environ 8 kilomètres.',
      'La Constitution de l\'Inde est la plus longue constitution écrite de tous les pays du monde, avec 448 articles.',
      'Le premier invité d\'honneur de la célébration du Jour de la République en 1950 était le président Sukarno d\'Indonésie.',
      'La cérémonie de la Retraite aux flambeaux n\'utilise aucun instrument électrique — uniquement des fanfares militaires et des clairons.',
      'Le salut de 21 coups de canon tiré pendant le défilé utilise des canons de campagne indiens de 105 mm positionnés près d\'India Gate.',
    ],
    es: [
      'La ruta del desfile del Día de la República a lo largo de Rajpath (ahora Kartavya Path) se extiende aproximadamente 8 kilómetros.',
      'La Constitución de la India es la constitución escrita más larga de cualquier país del mundo, con 448 artículos.',
      'El primer invitado de honor en la celebración del Día de la República en 1950 fue el presidente Sukarno de Indonesia.',
      'La ceremonia de Retiro no utiliza instrumentos eléctricos — solo bandas militares y cornetas.',
      'La salva de 21 cañonazos disparada durante el desfile utiliza cañones de campaña indios de 105 mm posicionados cerca de India Gate.',
    ],
  },

  planningChecklist: {
    en: [
      'Book Republic Day parade tickets well in advance through the official government portal',
      'Plan warm clothing — January mornings in Delhi can be cold',
      'Watch the Beating the Retreat ceremony on January 29 at Vijay Chowk',
      'Arrive early for the parade as security checks take time',
      'Tune in to Doordarshan for the live national broadcast if attending remotely',
    ],
    fr: [
      'Réservez les billets pour le défilé du Jour de la République bien à l\'avance via le portail officiel du gouvernement',
      'Prévoyez des vêtements chauds — les matinées de janvier à Delhi peuvent être froides',
      'Assistez à la cérémonie de la Retraite aux flambeaux le 29 janvier à Vijay Chowk',
      'Arrivez tôt pour le défilé car les contrôles de sécurité prennent du temps',
      'Regardez la diffusion nationale en direct sur Doordarshan si vous ne pouvez pas y assister',
    ],
    es: [
      'Reserve las entradas para el desfile del Día de la República con mucha antelación a través del portal oficial del gobierno',
      'Planifique ropa abrigada — las mañanas de enero en Delhi pueden ser frías',
      'Asista a la ceremonia de Retiro el 29 de enero en Vijay Chowk',
      'Llegue temprano al desfile ya que los controles de seguridad toman tiempo',
      'Sintonice Doordarshan para la transmisión nacional en vivo si asiste de forma remota',
    ],
  },

  relatedHolidays: ['in_independence-day', 'in_gandhi-jayanti'],

  seo: {
    en: {
      titleTemplate: 'Republic Day {year} India — Countdown & Guide',
      descriptionTemplate: 'When is Republic Day {year}? Live countdown to January 26, parade info, history, and celebration guide for India.',
      keywords: ['Republic Day India', 'January 26 India', 'Republic Day parade', 'Indian Republic Day countdown', 'Kartavya Path parade'],
    },
    fr: {
      titleTemplate: 'Fête de la République {year} Inde — Compte à rebours et guide',
      descriptionTemplate: 'Quand est la Fête de la République {year} ? Compte à rebours jusqu\'au 26 janvier, infos sur le défilé, histoire et guide de célébration pour l\'Inde.',
      keywords: ['Fête de la République Inde', '26 janvier Inde', 'défilé Jour de la République', 'compte à rebours République Inde', 'défilé Kartavya Path'],
    },
    es: {
      titleTemplate: 'Día de la República {year} India — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de la República {year}? Cuenta regresiva hasta el 26 de enero, información del desfile, historia y guía de celebración de la India.',
      keywords: ['Día de la República India', '26 de enero India', 'desfile Día de la República', 'cuenta regresiva República India', 'desfile Kartavya Path'],
    },
  },

  faq: [
    {
      question: { en: 'When is Republic Day {year}?', fr: 'Quand est la Fête de la République {year} ?', es: '¿Cuándo es el Día de la República {year}?' },
      answer: {
        en: 'Republic Day {year} is on {date} ({dayOfWeek}). It is always celebrated on January 26.',
        fr: 'La Fête de la République {year} est le {date} ({dayOfWeek}). Elle est toujours célébrée le 26 janvier.',
        es: 'El Día de la República {year} es el {date} ({dayOfWeek}). Siempre se celebra el 26 de enero.',
      },
    },
    {
      question: { en: 'Why is January 26 chosen as Republic Day?', fr: 'Pourquoi le 26 janvier a-t-il été choisi comme Jour de la République ?', es: '¿Por qué se eligió el 26 de enero como Día de la República?' },
      answer: {
        en: 'January 26 was chosen because on this date in 1930, the Indian National Congress declared Purna Swaraj (complete independence). The Constitution came into effect on this day in 1950 to honour that historic declaration.',
        fr: 'Le 26 janvier a été choisi car à cette date en 1930, le Congrès national indien a déclaré le Purna Swaraj (indépendance totale). La Constitution est entrée en vigueur ce jour-là en 1950 pour honorer cette déclaration historique.',
        es: 'Se eligió el 26 de enero porque en esa fecha de 1930, el Congreso Nacional Indio declaró Purna Swaraj (independencia total). La Constitución entró en vigor ese día de 1950 para honrar esa declaración histórica.',
      },
    },
    {
      question: { en: 'Who is invited as the chief guest on Republic Day?', fr: 'Qui est invité comme invité d\'honneur le Jour de la République ?', es: '¿Quién es invitado como huésped principal el Día de la República?' },
      answer: {
        en: 'Each year, a foreign head of state or head of government is invited as the chief guest. This tradition strengthens diplomatic ties and showcases India\'s international relationships.',
        fr: 'Chaque année, un chef d\'État ou chef de gouvernement étranger est invité en tant qu\'invité principal. Cette tradition renforce les liens diplomatiques et met en valeur les relations internationales de l\'Inde.',
        es: 'Cada año, un jefe de Estado o jefe de gobierno extranjero es invitado como huésped principal. Esta tradición fortalece los lazos diplomáticos y muestra las relaciones internacionales de la India.',
      },
    },
    {
      question: { en: 'Is Republic Day a national holiday in India?', fr: 'Le Jour de la République est-il un jour férié national en Inde ?', es: '¿Es el Día de la República un feriado nacional en la India?' },
      answer: {
        en: 'Yes, Republic Day is one of three national holidays in India (along with Independence Day and Gandhi Jayanti). All government offices, schools, and most businesses are closed.',
        fr: 'Oui, le Jour de la République est l\'un des trois jours fériés nationaux en Inde (avec le Jour de l\'Indépendance et Gandhi Jayanti). Tous les bureaux gouvernementaux, les écoles et la plupart des entreprises sont fermés.',
        es: 'Sí, el Día de la República es uno de los tres feriados nacionales de la India (junto con el Día de la Independencia y Gandhi Jayanti). Todas las oficinas gubernamentales, escuelas y la mayoría de las empresas están cerradas.',
      },
    },
  ],

  colorTheme: 'saffron-green',
  icon: '🇮🇳',
};

// ---------------------------------------------------------------------------
// Holi — Calculated (Hindu lunisolar calendar)
// ---------------------------------------------------------------------------

const holi: HolidayData = {
  id: 'in_holi',
  countryCode: 'in',
  slugs: { en: 'holi', fr: 'holi', es: 'holi' },
  names: { en: 'Holi', fr: 'Holi', es: 'Holi' },

  dateType: 'calculated',
  calculateDate: getHoliDate,

  descriptions: {
    en: 'Holi, the Festival of Colors, is a vibrant Hindu spring festival celebrated across India. People throw colored powder (gulal) and water at each other, light bonfires (Holika Dahan), and share sweets to celebrate the triumph of good over evil and the arrival of spring.',
    fr: 'Holi, la Fête des Couleurs, est un vibrant festival hindou de printemps célébré à travers l\'Inde. Les gens se lancent de la poudre colorée (gulal) et de l\'eau, allument des feux de joie (Holika Dahan) et partagent des sucreries pour célébrer le triomphe du bien sur le mal et l\'arrivée du printemps.',
    es: 'Holi, el Festival de los Colores, es un vibrante festival hindú de primavera celebrado en toda la India. La gente se lanza polvo de colores (gulal) y agua, enciende hogueras (Holika Dahan) y comparte dulces para celebrar el triunfo del bien sobre el mal y la llegada de la primavera.',
  },

  history: {
    en: 'Holi has ancient origins rooted in Hindu mythology. The most popular legend tells of Prahlada, a devotee of Lord Vishnu, who was saved from the fire set by the demoness Holika — this event is commemorated with bonfires on the eve of Holi (Holika Dahan). The festival also celebrates the divine love of Radha and Krishna, who is said to have playfully applied colour to Radha\'s face.\n\nHistorically, Holi has been celebrated since at least the 4th century CE, with references in ancient texts, poetry, and temple sculptures. The festival transcends religious boundaries in India and is enjoyed by people of all faiths as a celebration of spring, joy, and community.\n\nIn modern times, Holi has gained international popularity, with "Holi-inspired" colour runs and festivals held around the world. In India, celebrations vary by region — Mathura and Vrindavan (associated with Krishna) host particularly elaborate festivities.',
    fr: 'Holi a des origines anciennes enracinées dans la mythologie hindoue. La légende la plus populaire raconte l\'histoire de Prahlada, un dévot du Seigneur Vishnou, qui fut sauvé du feu allumé par la démone Holika — cet événement est commémoré par des feux de joie la veille de Holi (Holika Dahan). Le festival célèbre également l\'amour divin de Radha et Krishna, qui aurait appliqué de manière espiègle de la couleur sur le visage de Radha.\n\nHistoriquement, Holi est célébré depuis au moins le IVe siècle de notre ère, avec des références dans des textes anciens, de la poésie et des sculptures de temples. Le festival transcende les frontières religieuses en Inde et est apprécié par des personnes de toutes confessions comme une célébration du printemps, de la joie et de la communauté.\n\nDe nos jours, Holi a gagné une popularité internationale, avec des courses de couleurs et des festivals inspirés de Holi organisés dans le monde entier. En Inde, les célébrations varient selon les régions — Mathura et Vrindavan (associées à Krishna) accueillent des festivités particulièrement élaborées.',
    es: 'Holi tiene orígenes antiguos arraigados en la mitología hindú. La leyenda más popular cuenta la historia de Prahlada, un devoto del Señor Vishnu, quien fue salvado del fuego encendido por la demonia Holika — este evento se conmemora con hogueras en la víspera de Holi (Holika Dahan). El festival también celebra el amor divino de Radha y Krishna, quien se dice que aplicó juguetonamente color en el rostro de Radha.\n\nHistóricamente, Holi se ha celebrado desde al menos el siglo IV d.C., con referencias en textos antiguos, poesía y esculturas de templos. El festival trasciende las fronteras religiosas en la India y es disfrutado por personas de todas las creencias como una celebración de la primavera, la alegría y la comunidad.\n\nEn tiempos modernos, Holi ha ganado popularidad internacional, con carreras de colores y festivales inspirados en Holi celebrados en todo el mundo. En la India, las celebraciones varían según la región — Mathura y Vrindavan (asociadas con Krishna) albergan festividades particularmente elaboradas.',
  },

  traditions: {
    en: [
      'Throwing colored powder (gulal) and spraying colored water at friends and family',
      'Lighting bonfires on the eve of Holi (Holika Dahan) to symbolise the victory of good over evil',
      'Drinking thandai and bhang (a traditional cannabis-infused drink) during celebrations',
      'Sharing sweets like gujiya, malpua, and puran poli',
      'Playing with pichkaris (water guns) and water balloons filled with coloured water',
      'Singing and dancing to Holi songs, especially folk music',
      'Visiting friends and family to apply tilak and exchange greetings',
    ],
    fr: [
      'Lancer de la poudre colorée (gulal) et arroser d\'eau colorée amis et famille',
      'Allumer des feux de joie la veille de Holi (Holika Dahan) pour symboliser la victoire du bien sur le mal',
      'Boire du thandai et du bhang (une boisson traditionnelle infusée au cannabis) pendant les célébrations',
      'Partager des sucreries comme les gujiya, malpua et puran poli',
      'Jouer avec des pichkaris (pistolets à eau) et des ballons d\'eau remplis d\'eau colorée',
      'Chanter et danser sur des chansons de Holi, en particulier la musique folklorique',
      'Rendre visite à des amis et à la famille pour appliquer le tilak et échanger des vœux',
    ],
    es: [
      'Lanzar polvo de colores (gulal) y rociar agua de colores a amigos y familiares',
      'Encender hogueras en la víspera de Holi (Holika Dahan) para simbolizar la victoria del bien sobre el mal',
      'Beber thandai y bhang (una bebida tradicional infusionada con cannabis) durante las celebraciones',
      'Compartir dulces como gujiya, malpua y puran poli',
      'Jugar con pichkaris (pistolas de agua) y globos de agua llenos de agua coloreada',
      'Cantar y bailar canciones de Holi, especialmente música folclórica',
      'Visitar amigos y familiares para aplicar tilak e intercambiar saludos',
    ],
  },

  funFacts: {
    en: [
      'The colours used in traditional Holi celebrations were originally made from natural sources like turmeric, neem, and flower petals.',
      'In Barsana near Mathura, women playfully beat men with sticks in a unique tradition called "Lathmar Holi."',
      'Holi celebrations in Mathura and Vrindavan can last up to 16 days, far longer than the typical two-day celebration.',
      'The term "Holi hai!" (It\'s Holi!) is shouted as a joyful greeting throughout the festival.',
      'During Holi, social barriers are temporarily dissolved — people of all castes and classes celebrate together.',
    ],
    fr: [
      'Les couleurs utilisées dans les célébrations traditionnelles de Holi étaient à l\'origine fabriquées à partir de sources naturelles comme le curcuma, le neem et les pétales de fleurs.',
      'À Barsana près de Mathura, les femmes battent les hommes de manière ludique avec des bâtons dans une tradition unique appelée « Lathmar Holi ».',
      'Les célébrations de Holi à Mathura et Vrindavan peuvent durer jusqu\'à 16 jours, bien plus que la célébration typique de deux jours.',
      'L\'expression « Holi hai ! » (C\'est Holi !) est criée comme salutation joyeuse tout au long du festival.',
      'Pendant Holi, les barrières sociales sont temporairement dissoutes — les personnes de toutes castes et classes célèbrent ensemble.',
    ],
    es: [
      'Los colores utilizados en las celebraciones tradicionales de Holi se hacían originalmente de fuentes naturales como cúrcuma, neem y pétalos de flores.',
      'En Barsana, cerca de Mathura, las mujeres golpean juguetonamente a los hombres con palos en una tradición única llamada "Lathmar Holi".',
      'Las celebraciones de Holi en Mathura y Vrindavan pueden durar hasta 16 días, mucho más que la celebración típica de dos días.',
      'La expresión "¡Holi hai!" (¡Es Holi!) se grita como saludo alegre durante todo el festival.',
      'Durante Holi, las barreras sociales se disuelven temporalmente — personas de todas las castas y clases celebran juntas.',
    ],
  },

  planningChecklist: {
    en: [
      'Wear old white clothes that you don\'t mind getting stained',
      'Apply coconut oil or moisturiser to skin and hair before playing to make colour removal easier',
      'Stock up on organic or natural colours (gulal) for a safer celebration',
      'Prepare traditional sweets and thandai for guests',
      'Keep a change of clothes and towels ready for after the celebrations',
    ],
    fr: [
      'Portez de vieux vêtements blancs que vous ne craignez pas de tacher',
      'Appliquez de l\'huile de coco ou de la crème hydratante sur la peau et les cheveux avant de jouer pour faciliter le retrait des couleurs',
      'Faites le plein de couleurs biologiques ou naturelles (gulal) pour une célébration plus sûre',
      'Préparez des sucreries traditionnelles et du thandai pour les invités',
      'Gardez des vêtements de rechange et des serviettes prêts pour après les célébrations',
    ],
    es: [
      'Use ropa blanca vieja que no le importe manchar',
      'Aplique aceite de coco o crema hidratante en la piel y el cabello antes de jugar para facilitar la eliminación del color',
      'Abastézcase de colores orgánicos o naturales (gulal) para una celebración más segura',
      'Prepare dulces tradicionales y thandai para los invitados',
      'Tenga ropa de cambio y toallas listas para después de las celebraciones',
    ],
  },

  relatedHolidays: ['in_diwali', 'in_republic-day'],

  seo: {
    en: {
      titleTemplate: 'Holi {year} India — Festival of Colors Countdown & Guide',
      descriptionTemplate: 'When is Holi {year}? Live countdown to the Festival of Colors, traditions, history, and celebration tips for India.',
      keywords: ['Holi India', 'Festival of Colors', 'Holi date', 'Holi countdown', 'when is Holi'],
    },
    fr: {
      titleTemplate: 'Holi {year} Inde — Compte à rebours de la Fête des Couleurs et guide',
      descriptionTemplate: 'Quand est Holi {year} ? Compte à rebours jusqu\'à la Fête des Couleurs, traditions, histoire et conseils de célébration pour l\'Inde.',
      keywords: ['Holi Inde', 'Fête des Couleurs', 'date Holi', 'compte à rebours Holi', 'quand est Holi'],
    },
    es: {
      titleTemplate: 'Holi {year} India — Cuenta regresiva del Festival de Colores y guía',
      descriptionTemplate: '¿Cuándo es Holi {year}? Cuenta regresiva hasta el Festival de los Colores, tradiciones, historia y consejos de celebración para la India.',
      keywords: ['Holi India', 'Festival de los Colores', 'fecha Holi', 'cuenta regresiva Holi', 'cuándo es Holi'],
    },
  },

  faq: [
    {
      question: { en: 'When is Holi {year}?', fr: 'Quand est Holi {year} ?', es: '¿Cuándo es Holi {year}?' },
      answer: {
        en: 'Holi {year} falls on {date} ({dayOfWeek}). The date changes each year as it follows the Hindu lunisolar calendar, falling on the full moon day in the month of Phalguna.',
        fr: 'Holi {year} tombe le {date} ({dayOfWeek}). La date change chaque année car elle suit le calendrier luni-solaire hindou, tombant le jour de la pleine lune du mois de Phalguna.',
        es: 'Holi {year} cae el {date} ({dayOfWeek}). La fecha cambia cada año ya que sigue el calendario lunisolar hindú, cayendo en el día de luna llena del mes de Phalguna.',
      },
    },
    {
      question: { en: 'What is Holika Dahan?', fr: 'Qu\'est-ce que Holika Dahan ?', es: '¿Qué es Holika Dahan?' },
      answer: {
        en: 'Holika Dahan is the bonfire lit on the eve of Holi. It commemorates the burning of the demoness Holika, who tried to kill the young devotee Prahlada. The bonfire symbolises the triumph of good over evil.',
        fr: 'Holika Dahan est le feu de joie allumé la veille de Holi. Il commémore la combustion de la démone Holika, qui a tenté de tuer le jeune dévot Prahlada. Le feu de joie symbolise le triomphe du bien sur le mal.',
        es: 'Holika Dahan es la hoguera encendida en la víspera de Holi. Conmemora la quema de la demonia Holika, quien intentó matar al joven devoto Prahlada. La hoguera simboliza el triunfo del bien sobre el mal.',
      },
    },
    {
      question: { en: 'Is Holi a national holiday in India?', fr: 'Holi est-il un jour férié national en Inde ?', es: '¿Es Holi un feriado nacional en la India?' },
      answer: {
        en: 'Holi is a gazetted holiday in India, meaning government offices and many businesses are closed. It is one of the most widely celebrated festivals across the country, though the intensity of celebrations varies by region.',
        fr: 'Holi est un jour férié officiel en Inde, ce qui signifie que les bureaux gouvernementaux et de nombreuses entreprises sont fermés. C\'est l\'un des festivals les plus largement célébrés dans le pays, bien que l\'intensité des célébrations varie selon les régions.',
        es: 'Holi es un feriado oficial en la India, lo que significa que las oficinas gubernamentales y muchas empresas están cerradas. Es uno de los festivales más ampliamente celebrados en el país, aunque la intensidad de las celebraciones varía según la región.',
      },
    },
    {
      question: { en: 'How do you remove Holi colours from skin?', fr: 'Comment enlever les couleurs de Holi de la peau ?', es: '¿Cómo se quitan los colores de Holi de la piel?' },
      answer: {
        en: 'Apply coconut oil or moisturiser before playing Holi. After celebrations, use a gentle scrub with gram flour (besan) and curd, or lemon juice. Avoid harsh soap. Using organic colours made from natural ingredients makes removal much easier.',
        fr: 'Appliquez de l\'huile de coco ou de la crème hydratante avant de jouer à Holi. Après les célébrations, utilisez un gommage doux avec de la farine de pois chiches (besan) et du yaourt, ou du jus de citron. Évitez le savon agressif. Utiliser des couleurs biologiques à base d\'ingrédients naturels facilite grandement le retrait.',
        es: 'Aplique aceite de coco o crema hidratante antes de jugar Holi. Después de las celebraciones, use un exfoliante suave con harina de garbanzo (besan) y yogur, o jugo de limón. Evite el jabón fuerte. Usar colores orgánicos hechos con ingredientes naturales facilita mucho la eliminación.',
      },
    },
  ],

  colorTheme: 'multi-color',
  icon: '🎨',
};

// ---------------------------------------------------------------------------
// Independence Day — August 15
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'in_independence-day',
  countryCode: 'in',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Indépendance", es: 'Día de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 15,

  descriptions: {
    en: 'Independence Day on August 15 celebrates India\'s independence from British colonial rule in 1947. The Prime Minister raises the national flag at the Red Fort in Delhi and delivers an address to the nation, with patriotic events held across the country.',
    fr: 'Le Jour de l\'Indépendance, le 15 août, célèbre l\'indépendance de l\'Inde de la domination coloniale britannique en 1947. Le Premier ministre hisse le drapeau national au Fort Rouge à Delhi et prononce un discours à la nation, avec des événements patriotiques organisés dans tout le pays.',
    es: 'El Día de la Independencia, el 15 de agosto, celebra la independencia de la India del dominio colonial británico en 1947. El Primer Ministro iza la bandera nacional en el Fuerte Rojo de Delhi y pronuncia un discurso a la nación, con eventos patrióticos celebrados en todo el país.',
  },

  history: {
    en: 'India gained independence on August 15, 1947, after nearly two centuries of British colonial rule. The independence movement was led by figures such as Mahatma Gandhi, Jawaharlal Nehru, Sardar Patel, and Subhas Chandra Bose. The Indian Independence Act 1947, passed by the British Parliament, transferred power to the newly independent nations of India and Pakistan.\n\nJawaharlal Nehru, India\'s first Prime Minister, delivered his iconic "Tryst with Destiny" speech on the eve of independence. The transition also led to the Partition of India, creating Pakistan as a separate nation, resulting in one of the largest mass migrations in history.\n\nSince 1947, Independence Day has been celebrated with great fervour. The Prime Minister\'s flag hoisting and address at the Red Fort is the centrepiece of the national celebrations, broadcast live across the country.',
    fr: 'L\'Inde a obtenu son indépendance le 15 août 1947, après près de deux siècles de domination coloniale britannique. Le mouvement d\'indépendance a été mené par des personnalités telles que le Mahatma Gandhi, Jawaharlal Nehru, Sardar Patel et Subhas Chandra Bose. La loi sur l\'indépendance de l\'Inde de 1947, adoptée par le Parlement britannique, a transféré le pouvoir aux nations nouvellement indépendantes de l\'Inde et du Pakistan.\n\nJawaharlal Nehru, le premier Premier ministre de l\'Inde, a prononcé son célèbre discours « Rendez-vous avec le destin » la veille de l\'indépendance. La transition a également conduit à la Partition de l\'Inde, créant le Pakistan comme nation séparée, entraînant l\'une des plus grandes migrations massives de l\'histoire.\n\nDepuis 1947, le Jour de l\'Indépendance est célébré avec une grande ferveur. Le hissement du drapeau et le discours du Premier ministre au Fort Rouge sont la pièce maîtresse des célébrations nationales, diffusés en direct dans tout le pays.',
    es: 'La India obtuvo su independencia el 15 de agosto de 1947, después de casi dos siglos de dominio colonial británico. El movimiento de independencia fue liderado por figuras como Mahatma Gandhi, Jawaharlal Nehru, Sardar Patel y Subhas Chandra Bose. La Ley de Independencia de la India de 1947, aprobada por el Parlamento británico, transfirió el poder a las naciones recién independientes de India y Pakistán.\n\nJawaharlal Nehru, el primer Primer Ministro de la India, pronunció su icónico discurso "Cita con el Destino" en la víspera de la independencia. La transición también llevó a la Partición de la India, creando Pakistán como una nación separada, resultando en una de las migraciones masivas más grandes de la historia.\n\nDesde 1947, el Día de la Independencia se ha celebrado con gran fervor. El izado de bandera y el discurso del Primer Ministro en el Fuerte Rojo son la pieza central de las celebraciones nacionales, transmitidos en vivo en todo el país.',
  },

  traditions: {
    en: [
      'The Prime Minister hoists the flag and addresses the nation from the Red Fort, Delhi',
      'Kite flying, especially in cities like Delhi, Ahmedabad, and Jaipur',
      'Singing patriotic songs and watching cultural programmes',
      'Flag hoisting at schools, offices, and residential societies',
      'Watching Independence Day films and documentaries on television',
      'Wearing clothes in the tricolour — saffron, white, and green',
    ],
    fr: [
      'Le Premier ministre hisse le drapeau et s\'adresse à la nation depuis le Fort Rouge à Delhi',
      'Cerfs-volants, en particulier dans des villes comme Delhi, Ahmedabad et Jaipur',
      'Chanter des chansons patriotiques et regarder des programmes culturels',
      'Hisser le drapeau dans les écoles, les bureaux et les résidences',
      'Regarder des films et des documentaires sur le Jour de l\'Indépendance à la télévision',
      'Porter des vêtements aux couleurs du tricolore — safran, blanc et vert',
    ],
    es: [
      'El Primer Ministro iza la bandera y se dirige a la nación desde el Fuerte Rojo de Delhi',
      'Vuelo de cometas, especialmente en ciudades como Delhi, Ahmedabad y Jaipur',
      'Cantar canciones patrióticas y ver programas culturales',
      'Izado de bandera en escuelas, oficinas y comunidades residenciales',
      'Ver películas y documentales del Día de la Independencia en televisión',
      'Usar ropa con los colores de la tricolor — azafrán, blanco y verde',
    ],
  },

  funFacts: {
    en: [
      'India and Pakistan gained independence on consecutive days — India on August 15 and Pakistan on August 14, 1947.',
      'The Indian flag was hoisted for the first time on August 7, 1906, at Parsee Bagan Square in Kolkata.',
      'India\'s Independence Day shares the date with South Korea\'s Liberation Day (Gwangbokjeol).',
      'Kite flying on Independence Day is so popular in Delhi that the sky fills with thousands of kites of all colours.',
      'The Red Fort flag hoisting tradition was started by Jawaharlal Nehru on August 16, 1947.',
    ],
    fr: [
      'L\'Inde et le Pakistan ont obtenu leur indépendance à des jours consécutifs — l\'Inde le 15 août et le Pakistan le 14 août 1947.',
      'Le drapeau indien a été hissé pour la première fois le 7 août 1906, à Parsee Bagan Square à Kolkata.',
      'Le Jour de l\'Indépendance de l\'Inde partage la date avec le Jour de la Libération de la Corée du Sud (Gwangbokjeol).',
      'Le vol de cerfs-volants le Jour de l\'Indépendance est si populaire à Delhi que le ciel se remplit de milliers de cerfs-volants de toutes les couleurs.',
      'La tradition du hissement du drapeau au Fort Rouge a été lancée par Jawaharlal Nehru le 16 août 1947.',
    ],
    es: [
      'India y Pakistán obtuvieron su independencia en días consecutivos — India el 15 de agosto y Pakistán el 14 de agosto de 1947.',
      'La bandera india fue izada por primera vez el 7 de agosto de 1906, en Parsee Bagan Square en Kolkata.',
      'El Día de la Independencia de la India comparte fecha con el Día de la Liberación de Corea del Sur (Gwangbokjeol).',
      'El vuelo de cometas en el Día de la Independencia es tan popular en Delhi que el cielo se llena de miles de cometas de todos los colores.',
      'La tradición de izar la bandera en el Fuerte Rojo fue iniciada por Jawaharlal Nehru el 16 de agosto de 1947.',
    ],
  },

  planningChecklist: {
    en: [
      'Watch the Prime Minister\'s address live from the Red Fort on Doordarshan',
      'Participate in flag hoisting ceremonies at your local school or community',
      'Buy tricolour kites and manjha (kite string) for the kite-flying tradition',
      'Attend cultural programmes and patriotic events in your neighbourhood',
      'Display the national flag — ensure it follows the Flag Code of India',
    ],
    fr: [
      'Regardez le discours du Premier ministre en direct depuis le Fort Rouge sur Doordarshan',
      'Participez aux cérémonies de levée du drapeau dans votre école ou communauté locale',
      'Achetez des cerfs-volants tricolores et du manjha (fil de cerf-volant) pour la tradition de vol de cerfs-volants',
      'Assistez à des programmes culturels et événements patriotiques dans votre quartier',
      'Affichez le drapeau national — assurez-vous qu\'il respecte le Code du drapeau de l\'Inde',
    ],
    es: [
      'Vea el discurso del Primer Ministro en vivo desde el Fuerte Rojo en Doordarshan',
      'Participe en ceremonias de izado de bandera en su escuela o comunidad local',
      'Compre cometas tricolores y manjha (hilo de cometa) para la tradición de vuelo de cometas',
      'Asista a programas culturales y eventos patrióticos en su vecindario',
      'Exhiba la bandera nacional — asegúrese de que cumpla con el Código de la Bandera de la India',
    ],
  },

  relatedHolidays: ['in_republic-day', 'in_gandhi-jayanti'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} India — Countdown & Guide',
      descriptionTemplate: 'When is Independence Day {year} in India? Live countdown to August 15, Red Fort ceremony info, history, and celebration guide.',
      keywords: ['Independence Day India', 'August 15 India', 'Indian Independence Day', 'Red Fort flag hoisting', 'Independence Day countdown'],
    },
    fr: {
      titleTemplate: "Jour de l'Indépendance {year} Inde — Compte à rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'Indépendance {year} en Inde ? Compte à rebours jusqu'au 15 août, cérémonie du Fort Rouge, histoire et guide de célébration.",
      keywords: ["Jour de l'Indépendance Inde", '15 août Inde', 'Indépendance indienne', 'Fort Rouge drapeau', "compte à rebours Indépendance"],
    },
    es: {
      titleTemplate: 'Día de la Independencia {year} India — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de la Independencia {year} en India? Cuenta regresiva hasta el 15 de agosto, ceremonia del Fuerte Rojo, historia y guía de celebración.',
      keywords: ['Día de la Independencia India', '15 de agosto India', 'Independencia india', 'Fuerte Rojo bandera', 'cuenta regresiva Independencia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Independence Day {year} in India?', fr: "Quand est le Jour de l'Indépendance {year} en Inde ?", es: '¿Cuándo es el Día de la Independencia {year} en India?' },
      answer: {
        en: 'Independence Day {year} in India is on {date} ({dayOfWeek}). It is always celebrated on August 15.',
        fr: "Le Jour de l'Indépendance {year} en Inde est le {date} ({dayOfWeek}). Il est toujours célébré le 15 août.",
        es: 'El Día de la Independencia {year} en India es el {date} ({dayOfWeek}). Siempre se celebra el 15 de agosto.',
      },
    },
    {
      question: { en: 'Why does the PM raise the flag at the Red Fort?', fr: 'Pourquoi le PM hisse-t-il le drapeau au Fort Rouge ?', es: '¿Por qué el PM iza la bandera en el Fuerte Rojo?' },
      answer: {
        en: 'Jawaharlal Nehru started this tradition in 1947 when he hoisted the flag at the Red Fort, the historic seat of Mughal power. The Red Fort symbolises India\'s sovereignty and the end of colonial rule.',
        fr: 'Jawaharlal Nehru a lancé cette tradition en 1947 lorsqu\'il a hissé le drapeau au Fort Rouge, siège historique du pouvoir moghol. Le Fort Rouge symbolise la souveraineté de l\'Inde et la fin de la domination coloniale.',
        es: 'Jawaharlal Nehru inició esta tradición en 1947 cuando izó la bandera en el Fuerte Rojo, sede histórica del poder mogol. El Fuerte Rojo simboliza la soberanía de la India y el fin del dominio colonial.',
      },
    },
    {
      question: { en: 'What is the difference between Republic Day and Independence Day?', fr: 'Quelle est la différence entre le Jour de la République et le Jour de l\'Indépendance ?', es: '¿Cuál es la diferencia entre el Día de la República y el Día de la Independencia?' },
      answer: {
        en: 'Independence Day (August 15) celebrates India\'s freedom from British rule in 1947. Republic Day (January 26) celebrates the adoption of the Constitution in 1950. On Independence Day the PM hoists the flag; on Republic Day the President unfurls it.',
        fr: 'Le Jour de l\'Indépendance (15 août) célèbre la liberté de l\'Inde de la domination britannique en 1947. Le Jour de la République (26 janvier) célèbre l\'adoption de la Constitution en 1950. Le Jour de l\'Indépendance, le PM hisse le drapeau ; le Jour de la République, le Président le déploie.',
        es: 'El Día de la Independencia (15 de agosto) celebra la libertad de la India del dominio británico en 1947. El Día de la República (26 de enero) celebra la adopción de la Constitución en 1950. El Día de la Independencia el PM iza la bandera; el Día de la República el Presidente la despliega.',
      },
    },
    {
      question: { en: 'Is Independence Day a national holiday?', fr: "Le Jour de l'Indépendance est-il un jour férié national ?", es: '¿Es el Día de la Independencia un feriado nacional?' },
      answer: {
        en: 'Yes, Independence Day is one of three national holidays in India. All government offices, schools, banks, and most businesses are closed on August 15.',
        fr: "Oui, le Jour de l'Indépendance est l'un des trois jours fériés nationaux en Inde. Tous les bureaux gouvernementaux, écoles, banques et la plupart des entreprises sont fermés le 15 août.",
        es: 'Sí, el Día de la Independencia es uno de los tres feriados nacionales de la India. Todas las oficinas gubernamentales, escuelas, bancos y la mayoría de las empresas están cerradas el 15 de agosto.',
      },
    },
  ],

  colorTheme: 'saffron-white-green',
  icon: '🇮🇳',
};

// ---------------------------------------------------------------------------
// Gandhi Jayanti — October 2
// ---------------------------------------------------------------------------

const gandhiJayanti: HolidayData = {
  id: 'in_gandhi-jayanti',
  countryCode: 'in',
  slugs: { en: 'gandhi-jayanti', fr: 'gandhi-jayanti', es: 'gandhi-jayanti' },
  names: { en: 'Gandhi Jayanti', fr: 'Gandhi Jayanti', es: 'Gandhi Jayanti' },

  dateType: 'fixed',
  fixedMonth: 10,
  fixedDay: 2,

  descriptions: {
    en: 'Gandhi Jayanti on October 2 marks the birthday of Mahatma Gandhi, the father of the Indian nation. It is a national holiday in India and is also observed internationally as the United Nations International Day of Non-Violence.',
    fr: 'Gandhi Jayanti, le 2 octobre, marque l\'anniversaire du Mahatma Gandhi, le père de la nation indienne. C\'est un jour férié national en Inde et est également observé internationalement comme la Journée internationale de la non-violence des Nations Unies.',
    es: 'Gandhi Jayanti, el 2 de octubre, marca el cumpleaños de Mahatma Gandhi, el padre de la nación india. Es un feriado nacional en la India y también se observa internacionalmente como el Día Internacional de la No Violencia de las Naciones Unidas.',
  },

  history: {
    en: 'Mohandas Karamchand Gandhi was born on October 2, 1869, in Porbandar, Gujarat. He became the leader of India\'s non-violent independence movement against British rule. His philosophy of ahimsa (non-violence) and satyagraha (truth-force) inspired civil rights movements worldwide, including Martin Luther King Jr. and Nelson Mandela.\n\nGandhi led several historic campaigns, including the Salt March (1930), the Quit India Movement (1942), and numerous non-cooperation movements. He was assassinated on January 30, 1948, by Nathuram Godse.\n\nIn 2007, the United Nations General Assembly declared October 2 as the International Day of Non-Violence, recognising Gandhi\'s global legacy. Gandhi Jayanti is one of only three national holidays in India, alongside Republic Day and Independence Day.',
    fr: 'Mohandas Karamchand Gandhi est né le 2 octobre 1869, à Porbandar, au Gujarat. Il est devenu le leader du mouvement d\'indépendance non-violent de l\'Inde contre la domination britannique. Sa philosophie de l\'ahimsa (non-violence) et du satyagraha (force de la vérité) a inspiré des mouvements de droits civiques dans le monde entier, y compris Martin Luther King Jr. et Nelson Mandela.\n\nGandhi a mené plusieurs campagnes historiques, dont la Marche du sel (1930), le mouvement Quit India (1942) et de nombreux mouvements de non-coopération. Il a été assassiné le 30 janvier 1948 par Nathuram Godse.\n\nEn 2007, l\'Assemblée générale des Nations Unies a déclaré le 2 octobre Journée internationale de la non-violence, reconnaissant l\'héritage mondial de Gandhi. Gandhi Jayanti est l\'un des trois seuls jours fériés nationaux en Inde, avec le Jour de la République et le Jour de l\'Indépendance.',
    es: 'Mohandas Karamchand Gandhi nació el 2 de octubre de 1869 en Porbandar, Gujarat. Se convirtió en el líder del movimiento de independencia no violento de la India contra el dominio británico. Su filosofía de ahimsa (no violencia) y satyagraha (fuerza de la verdad) inspiró movimientos de derechos civiles en todo el mundo, incluyendo a Martin Luther King Jr. y Nelson Mandela.\n\nGandhi lideró varias campañas históricas, incluyendo la Marcha de la Sal (1930), el Movimiento Quit India (1942) y numerosos movimientos de no cooperación. Fue asesinado el 30 de enero de 1948 por Nathuram Godse.\n\nEn 2007, la Asamblea General de las Naciones Unidas declaró el 2 de octubre como el Día Internacional de la No Violencia, reconociendo el legado global de Gandhi. Gandhi Jayanti es uno de solo tres feriados nacionales en la India, junto con el Día de la República y el Día de la Independencia.',
  },

  traditions: {
    en: [
      'Paying tribute at Raj Ghat, Gandhi\'s memorial in New Delhi',
      'Singing Gandhi\'s favourite bhajan "Raghupati Raghava Raja Ram"',
      'Organising prayer meetings, seminars, and essay competitions',
      'Promoting the sale and use of khadi (hand-spun cloth)',
      'Participating in cleanliness drives (Swachh Bharat campaigns)',
      'Art and painting competitions for children on themes of peace and non-violence',
    ],
    fr: [
      'Rendre hommage à Raj Ghat, le mémorial de Gandhi à New Delhi',
      'Chanter le bhajan préféré de Gandhi « Raghupati Raghava Raja Ram »',
      'Organiser des réunions de prière, des séminaires et des concours de rédaction',
      'Promouvoir la vente et l\'utilisation du khadi (tissu filé à la main)',
      'Participer aux campagnes de propreté (campagnes Swachh Bharat)',
      'Concours d\'art et de peinture pour les enfants sur les thèmes de la paix et de la non-violence',
    ],
    es: [
      'Rendir homenaje en Raj Ghat, el memorial de Gandhi en Nueva Delhi',
      'Cantar el bhajan favorito de Gandhi "Raghupati Raghava Raja Ram"',
      'Organizar reuniones de oración, seminarios y concursos de ensayos',
      'Promover la venta y el uso del khadi (tela hilada a mano)',
      'Participar en campañas de limpieza (campañas Swachh Bharat)',
      'Concursos de arte y pintura para niños sobre temas de paz y no violencia',
    ],
  },

  funFacts: {
    en: [
      'Gandhi was nominated for the Nobel Peace Prize five times but never received it — the committee has expressed regret for this omission.',
      'The United Nations declared October 2 as the International Day of Non-Violence in 2007.',
      'Gandhi\'s birthday is a "dry day" in India — the sale of alcohol is prohibited nationwide.',
      'Gandhi spent a total of about 2,338 days (over 6 years) in prison during his life.',
      'The title "Mahatma" (Great Soul) was given to Gandhi by the poet Rabindranath Tagore.',
    ],
    fr: [
      'Gandhi a été nominé pour le prix Nobel de la paix cinq fois mais ne l\'a jamais reçu — le comité a exprimé ses regrets pour cette omission.',
      'Les Nations Unies ont déclaré le 2 octobre Journée internationale de la non-violence en 2007.',
      'L\'anniversaire de Gandhi est un « jour sec » en Inde — la vente d\'alcool est interdite dans tout le pays.',
      'Gandhi a passé au total environ 2 338 jours (plus de 6 ans) en prison au cours de sa vie.',
      'Le titre « Mahatma » (Grande Âme) a été donné à Gandhi par le poète Rabindranath Tagore.',
    ],
    es: [
      'Gandhi fue nominado al Premio Nobel de la Paz cinco veces pero nunca lo recibió — el comité ha expresado su arrepentimiento por esta omisión.',
      'Las Naciones Unidas declararon el 2 de octubre como el Día Internacional de la No Violencia en 2007.',
      'El cumpleaños de Gandhi es un "día seco" en la India — la venta de alcohol está prohibida en todo el país.',
      'Gandhi pasó un total de aproximadamente 2.338 días (más de 6 años) en prisión durante su vida.',
      'El título "Mahatma" (Gran Alma) fue dado a Gandhi por el poeta Rabindranath Tagore.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit Raj Ghat in New Delhi to pay your respects',
      'Attend local prayer meetings or non-violence seminars',
      'Note that alcohol is not available — it is a dry day across India',
      'Encourage children to participate in essay or art competitions',
      'Watch documentaries or films about Gandhi\'s life and legacy',
    ],
    fr: [
      'Visitez Raj Ghat à New Delhi pour rendre hommage',
      'Assistez à des réunions de prière locales ou des séminaires sur la non-violence',
      'Notez que l\'alcool n\'est pas disponible — c\'est un jour sec dans toute l\'Inde',
      'Encouragez les enfants à participer à des concours de rédaction ou d\'art',
      'Regardez des documentaires ou des films sur la vie et l\'héritage de Gandhi',
    ],
    es: [
      'Visite Raj Ghat en Nueva Delhi para rendir homenaje',
      'Asista a reuniones de oración locales o seminarios sobre no violencia',
      'Tenga en cuenta que el alcohol no está disponible — es un día seco en toda la India',
      'Anime a los niños a participar en concursos de ensayos o arte',
      'Vea documentales o películas sobre la vida y el legado de Gandhi',
    ],
  },

  relatedHolidays: ['in_republic-day', 'in_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Gandhi Jayanti {year} — Countdown & Guide',
      descriptionTemplate: 'When is Gandhi Jayanti {year}? Live countdown to October 2, Mahatma Gandhi\'s birthday, history, and celebration guide.',
      keywords: ['Gandhi Jayanti', 'October 2 India', 'Mahatma Gandhi birthday', 'International Day of Non-Violence', 'Gandhi Jayanti countdown'],
    },
    fr: {
      titleTemplate: 'Gandhi Jayanti {year} — Compte à rebours et guide',
      descriptionTemplate: 'Quand est Gandhi Jayanti {year} ? Compte à rebours jusqu\'au 2 octobre, anniversaire du Mahatma Gandhi, histoire et guide de célébration.',
      keywords: ['Gandhi Jayanti', '2 octobre Inde', 'anniversaire Mahatma Gandhi', 'Journée internationale de la non-violence', 'compte à rebours Gandhi Jayanti'],
    },
    es: {
      titleTemplate: 'Gandhi Jayanti {year} — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es Gandhi Jayanti {year}? Cuenta regresiva hasta el 2 de octubre, cumpleaños de Mahatma Gandhi, historia y guía de celebración.',
      keywords: ['Gandhi Jayanti', '2 de octubre India', 'cumpleaños Mahatma Gandhi', 'Día Internacional de la No Violencia', 'cuenta regresiva Gandhi Jayanti'],
    },
  },

  faq: [
    {
      question: { en: 'When is Gandhi Jayanti {year}?', fr: 'Quand est Gandhi Jayanti {year} ?', es: '¿Cuándo es Gandhi Jayanti {year}?' },
      answer: {
        en: 'Gandhi Jayanti {year} is on {date} ({dayOfWeek}). It is always celebrated on October 2, the birthday of Mahatma Gandhi.',
        fr: 'Gandhi Jayanti {year} est le {date} ({dayOfWeek}). Il est toujours célébré le 2 octobre, jour de l\'anniversaire du Mahatma Gandhi.',
        es: 'Gandhi Jayanti {year} es el {date} ({dayOfWeek}). Siempre se celebra el 2 de octubre, cumpleaños del Mahatma Gandhi.',
      },
    },
    {
      question: { en: 'Why is October 2 also the International Day of Non-Violence?', fr: 'Pourquoi le 2 octobre est-il aussi la Journée internationale de la non-violence ?', es: '¿Por qué el 2 de octubre es también el Día Internacional de la No Violencia?' },
      answer: {
        en: 'In 2007, the United Nations General Assembly declared October 2 as the International Day of Non-Violence in honour of Mahatma Gandhi, whose philosophy of non-violent resistance inspired movements for civil rights and social change worldwide.',
        fr: 'En 2007, l\'Assemblée générale des Nations Unies a déclaré le 2 octobre Journée internationale de la non-violence en l\'honneur du Mahatma Gandhi, dont la philosophie de résistance non-violente a inspiré des mouvements pour les droits civiques et le changement social dans le monde entier.',
        es: 'En 2007, la Asamblea General de las Naciones Unidas declaró el 2 de octubre como el Día Internacional de la No Violencia en honor al Mahatma Gandhi, cuya filosofía de resistencia no violenta inspiró movimientos por los derechos civiles y el cambio social en todo el mundo.',
      },
    },
    {
      question: { en: 'What does "Jayanti" mean?', fr: 'Que signifie « Jayanti » ?', es: '¿Qué significa "Jayanti"?' },
      answer: {
        en: '"Jayanti" is a Hindi/Sanskrit word meaning "birthday" or "birth anniversary." Gandhi Jayanti literally translates to "Gandhi\'s Birthday."',
        fr: '« Jayanti » est un mot hindi/sanskrit signifiant « anniversaire de naissance ». Gandhi Jayanti se traduit littéralement par « anniversaire de Gandhi ».',
        es: '"Jayanti" es una palabra en hindi/sánscrito que significa "cumpleaños" o "aniversario de nacimiento". Gandhi Jayanti se traduce literalmente como "cumpleaños de Gandhi".',
      },
    },
    {
      question: { en: 'Why is alcohol banned on Gandhi Jayanti?', fr: 'Pourquoi l\'alcool est-il interdit le jour de Gandhi Jayanti ?', es: '¿Por qué se prohíbe el alcohol en Gandhi Jayanti?' },
      answer: {
        en: 'Gandhi was a strong advocate of prohibition and temperance. To honour his beliefs, the Indian government declares October 2 a "dry day" when the sale of alcohol is banned nationwide.',
        fr: 'Gandhi était un fervent défenseur de la prohibition et de la tempérance. Pour honorer ses convictions, le gouvernement indien déclare le 2 octobre « jour sec » où la vente d\'alcool est interdite dans tout le pays.',
        es: 'Gandhi fue un fuerte defensor de la prohibición y la temperancia. Para honrar sus creencias, el gobierno indio declara el 2 de octubre un "día seco" cuando la venta de alcohol está prohibida en todo el país.',
      },
    },
  ],

  colorTheme: 'white-saffron',
  icon: '🕊️',
};

// ---------------------------------------------------------------------------
// Diwali — Calculated (Hindu lunisolar calendar)
// ---------------------------------------------------------------------------

const diwali: HolidayData = {
  id: 'in_diwali',
  countryCode: 'in',
  slugs: { en: 'diwali', fr: 'diwali', es: 'diwali' },
  names: { en: 'Diwali', fr: 'Diwali', es: 'Diwali' },

  dateType: 'calculated',
  calculateDate: getDiwaliDate,

  descriptions: {
    en: 'Diwali, the Festival of Lights, is the biggest and most celebrated Hindu festival in India. Spanning five days, it is marked by lighting diyas (oil lamps), fireworks, rangoli (decorative patterns), prayers to Goddess Lakshmi, and exchanging sweets and gifts.',
    fr: 'Diwali, la Fête des Lumières, est le plus grand et le plus célébré des festivals hindous en Inde. S\'étalant sur cinq jours, il est marqué par l\'allumage de diyas (lampes à huile), des feux d\'artifice, des rangolis (motifs décoratifs), des prières à la déesse Lakshmi et l\'échange de sucreries et de cadeaux.',
    es: 'Diwali, el Festival de las Luces, es el festival hindú más grande y celebrado de la India. Abarcando cinco días, se caracteriza por encender diyas (lámparas de aceite), fuegos artificiales, rangolis (patrones decorativos), oraciones a la diosa Lakshmi e intercambio de dulces y regalos.',
  },

  history: {
    en: 'Diwali celebrates the return of Lord Rama to Ayodhya after 14 years of exile and his victory over the demon king Ravana, as told in the epic Ramayana. The people of Ayodhya lit rows of clay lamps (diyas) to welcome him home, giving the festival its name — "Deepavali" meaning "row of lights."\n\nDifferent regions and religions celebrate Diwali for different reasons. In South India, it marks Krishna\'s victory over the demon Narakasura. Jains celebrate it as the day Lord Mahavira attained nirvana. Sikhs commemorate the release of Guru Hargobind from imprisonment. For Bengalis, it is associated with Kali Puja.\n\nDiwali has grown into a global celebration, observed by the Indian diaspora worldwide. It was recognised by the United Nations as an official holiday in 2024. The five-day festival includes Dhanteras, Naraka Chaturdashi, Diwali (main day), Govardhan Puja, and Bhai Dooj.',
    fr: 'Diwali célèbre le retour du Seigneur Rama à Ayodhya après 14 ans d\'exil et sa victoire sur le roi démon Ravana, comme raconté dans l\'épopée du Ramayana. Les habitants d\'Ayodhya ont allumé des rangées de lampes en argile (diyas) pour l\'accueillir chez lui, donnant au festival son nom — « Deepavali » signifiant « rangée de lumières ».\n\nDifférentes régions et religions célèbrent Diwali pour différentes raisons. En Inde du Sud, il marque la victoire de Krishna sur le démon Narakasura. Les jaïns le célèbrent comme le jour où le Seigneur Mahavira a atteint le nirvana. Les sikhs commémorent la libération du Guru Hargobind de l\'emprisonnement. Pour les Bengalis, il est associé à Kali Puja.\n\nDiwali est devenu une célébration mondiale, observée par la diaspora indienne dans le monde entier. Il a été reconnu par les Nations Unies comme jour férié officiel en 2024. Le festival de cinq jours comprend Dhanteras, Naraka Chaturdashi, Diwali (jour principal), Govardhan Puja et Bhai Dooj.',
    es: 'Diwali celebra el regreso del Señor Rama a Ayodhya después de 14 años de exilio y su victoria sobre el rey demonio Ravana, según se narra en la épica del Ramayana. Los habitantes de Ayodhya encendieron filas de lámparas de arcilla (diyas) para darle la bienvenida a casa, dando al festival su nombre — "Deepavali" que significa "fila de luces".\n\nDiferentes regiones y religiones celebran Diwali por diferentes razones. En el sur de la India, marca la victoria de Krishna sobre el demonio Narakasura. Los jainistas lo celebran como el día en que el Señor Mahavira alcanzó el nirvana. Los sijs conmemoran la liberación del Guru Hargobind del encarcelamiento. Para los bengalíes, está asociado con Kali Puja.\n\nDiwali se ha convertido en una celebración global, observada por la diáspora india en todo el mundo. Fue reconocido por las Naciones Unidas como feriado oficial en 2024. El festival de cinco días incluye Dhanteras, Naraka Chaturdashi, Diwali (día principal), Govardhan Puja y Bhai Dooj.',
  },

  traditions: {
    en: [
      'Lighting diyas (oil lamps) and candles to illuminate homes and temples',
      'Creating rangoli (colourful decorative patterns) at doorsteps with coloured powders and flowers',
      'Performing Lakshmi Puja — praying to the goddess of wealth and prosperity',
      'Bursting fireworks and sparklers to celebrate the triumph of light over darkness',
      'Exchanging sweets (mithai), dry fruits, and gifts with family and friends',
      'Shopping for gold, jewellery, and new clothes on Dhanteras',
      'Cleaning and decorating homes in preparation for the festival',
    ],
    fr: [
      'Allumer des diyas (lampes à huile) et des bougies pour illuminer les maisons et les temples',
      'Créer des rangolis (motifs décoratifs colorés) devant les portes avec des poudres colorées et des fleurs',
      'Effectuer la Lakshmi Puja — prier la déesse de la richesse et de la prospérité',
      'Tirer des feux d\'artifice et des cierges magiques pour célébrer le triomphe de la lumière sur les ténèbres',
      'Échanger des sucreries (mithai), des fruits secs et des cadeaux avec la famille et les amis',
      'Acheter de l\'or, des bijoux et de nouveaux vêtements le jour de Dhanteras',
      'Nettoyer et décorer les maisons en préparation du festival',
    ],
    es: [
      'Encender diyas (lámparas de aceite) y velas para iluminar hogares y templos',
      'Crear rangolis (patrones decorativos coloridos) en las puertas con polvos de colores y flores',
      'Realizar Lakshmi Puja — orar a la diosa de la riqueza y la prosperidad',
      'Encender fuegos artificiales y bengalas para celebrar el triunfo de la luz sobre la oscuridad',
      'Intercambiar dulces (mithai), frutos secos y regalos con familia y amigos',
      'Comprar oro, joyas y ropa nueva en Dhanteras',
      'Limpiar y decorar los hogares en preparación para el festival',
    ],
  },

  funFacts: {
    en: [
      'Diwali is the biggest shopping season in India — retail sales during the festival rival Black Friday and Christmas combined in the West.',
      'NASA satellite images have shown India visibly brighter from space during Diwali due to the millions of lights and fireworks.',
      'The five-day Diwali festival includes Dhanteras, Choti Diwali, Diwali, Govardhan Puja, and Bhai Dooj.',
      'The city of Ayodhya set a Guinness World Record in 2023 by lighting over 2.2 million diyas along the banks of the Saryu River.',
      'Gold purchases during Dhanteras (the first day) are considered extremely auspicious, driving massive gold sales across India.',
    ],
    fr: [
      'Diwali est la plus grande saison de shopping en Inde — les ventes au détail pendant le festival rivalisent avec le Black Friday et Noël combinés en Occident.',
      'Les images satellites de la NASA ont montré l\'Inde visiblement plus lumineuse depuis l\'espace pendant Diwali en raison des millions de lumières et de feux d\'artifice.',
      'Le festival de cinq jours de Diwali comprend Dhanteras, Choti Diwali, Diwali, Govardhan Puja et Bhai Dooj.',
      'La ville d\'Ayodhya a établi un record Guinness en 2023 en allumant plus de 2,2 millions de diyas le long des rives de la rivière Saryu.',
      'Les achats d\'or pendant Dhanteras (le premier jour) sont considérés comme extrêmement propices, entraînant des ventes d\'or massives à travers l\'Inde.',
    ],
    es: [
      'Diwali es la temporada de compras más grande de la India — las ventas minoristas durante el festival rivalizan con el Black Friday y la Navidad combinados en Occidente.',
      'Las imágenes satelitales de la NASA han mostrado a la India visiblemente más brillante desde el espacio durante Diwali debido a los millones de luces y fuegos artificiales.',
      'El festival de cinco días de Diwali incluye Dhanteras, Choti Diwali, Diwali, Govardhan Puja y Bhai Dooj.',
      'La ciudad de Ayodhya estableció un récord Guinness en 2023 al encender más de 2,2 millones de diyas a lo largo de las orillas del río Saryu.',
      'Las compras de oro durante Dhanteras (el primer día) se consideran extremadamente auspiciosas, impulsando ventas masivas de oro en toda la India.',
    ],
  },

  planningChecklist: {
    en: [
      'Deep clean your home before Diwali — it is believed to welcome Goddess Lakshmi',
      'Buy diyas, candles, and rangoli supplies well in advance',
      'Shop for gifts and sweets to exchange with friends and family',
      'Purchase gold or new items on Dhanteras for good luck',
      'Plan your fireworks safely and be mindful of noise and pollution levels',
    ],
    fr: [
      'Nettoyez votre maison en profondeur avant Diwali — on croit que cela accueille la déesse Lakshmi',
      'Achetez des diyas, des bougies et des fournitures de rangoli bien à l\'avance',
      'Faites des achats de cadeaux et de sucreries à échanger avec les amis et la famille',
      'Achetez de l\'or ou de nouveaux articles le jour de Dhanteras pour porter chance',
      'Planifiez vos feux d\'artifice en toute sécurité et soyez attentif aux niveaux de bruit et de pollution',
    ],
    es: [
      'Limpie a fondo su hogar antes de Diwali — se cree que da la bienvenida a la diosa Lakshmi',
      'Compre diyas, velas y suministros de rangoli con mucha antelación',
      'Compre regalos y dulces para intercambiar con amigos y familiares',
      'Compre oro o artículos nuevos en Dhanteras para la buena suerte',
      'Planifique sus fuegos artificiales de forma segura y tenga en cuenta los niveles de ruido y contaminación',
    ],
  },

  relatedHolidays: ['in_holi', 'in_republic-day'],

  seo: {
    en: {
      titleTemplate: 'Diwali {year} India — Festival of Lights Countdown & Guide',
      descriptionTemplate: 'When is Diwali {year}? Live countdown to the Festival of Lights, traditions, history, Lakshmi Puja, and celebration tips.',
      keywords: ['Diwali India', 'Festival of Lights', 'Diwali date', 'Diwali countdown', 'when is Diwali'],
    },
    fr: {
      titleTemplate: 'Diwali {year} Inde — Compte à rebours de la Fête des Lumières et guide',
      descriptionTemplate: 'Quand est Diwali {year} ? Compte à rebours jusqu\'à la Fête des Lumières, traditions, histoire, Lakshmi Puja et conseils de célébration.',
      keywords: ['Diwali Inde', 'Fête des Lumières', 'date Diwali', 'compte à rebours Diwali', 'quand est Diwali'],
    },
    es: {
      titleTemplate: 'Diwali {year} India — Cuenta regresiva del Festival de las Luces y guía',
      descriptionTemplate: '¿Cuándo es Diwali {year}? Cuenta regresiva hasta el Festival de las Luces, tradiciones, historia, Lakshmi Puja y consejos de celebración.',
      keywords: ['Diwali India', 'Festival de las Luces', 'fecha Diwali', 'cuenta regresiva Diwali', 'cuándo es Diwali'],
    },
  },

  faq: [
    {
      question: { en: 'When is Diwali {year}?', fr: 'Quand est Diwali {year} ?', es: '¿Cuándo es Diwali {year}?' },
      answer: {
        en: 'Diwali {year} falls on {date} ({dayOfWeek}). The date changes each year as it follows the Hindu lunisolar calendar, falling on the new moon day (Amavasya) in the month of Kartik.',
        fr: 'Diwali {year} tombe le {date} ({dayOfWeek}). La date change chaque année car elle suit le calendrier luni-solaire hindou, tombant le jour de la nouvelle lune (Amavasya) du mois de Kartik.',
        es: 'Diwali {year} cae el {date} ({dayOfWeek}). La fecha cambia cada año ya que sigue el calendario lunisolar hindú, cayendo en el día de luna nueva (Amavasya) del mes de Kartik.',
      },
    },
    {
      question: { en: 'How many days is Diwali celebrated?', fr: 'Combien de jours Diwali est-il célébré ?', es: '¿Cuántos días se celebra Diwali?' },
      answer: {
        en: 'Diwali is a five-day festival: Dhanteras (Day 1), Naraka Chaturdashi/Choti Diwali (Day 2), Diwali/Lakshmi Puja (Day 3, the main day), Govardhan Puja (Day 4), and Bhai Dooj (Day 5).',
        fr: 'Diwali est un festival de cinq jours : Dhanteras (Jour 1), Naraka Chaturdashi/Choti Diwali (Jour 2), Diwali/Lakshmi Puja (Jour 3, le jour principal), Govardhan Puja (Jour 4) et Bhai Dooj (Jour 5).',
        es: 'Diwali es un festival de cinco días: Dhanteras (Día 1), Naraka Chaturdashi/Choti Diwali (Día 2), Diwali/Lakshmi Puja (Día 3, el día principal), Govardhan Puja (Día 4) y Bhai Dooj (Día 5).',
      },
    },
    {
      question: { en: 'Why do people light diyas on Diwali?', fr: 'Pourquoi allume-t-on des diyas à Diwali ?', es: '¿Por qué la gente enciende diyas en Diwali?' },
      answer: {
        en: 'Diyas symbolise the victory of light over darkness and good over evil. According to the Ramayana, the people of Ayodhya lit rows of lamps to guide Lord Rama home after his 14-year exile and victory over the demon king Ravana.',
        fr: 'Les diyas symbolisent la victoire de la lumière sur les ténèbres et du bien sur le mal. Selon le Ramayana, les habitants d\'Ayodhya ont allumé des rangées de lampes pour guider le Seigneur Rama chez lui après ses 14 ans d\'exil et sa victoire sur le roi démon Ravana.',
        es: 'Los diyas simbolizan la victoria de la luz sobre la oscuridad y del bien sobre el mal. Según el Ramayana, los habitantes de Ayodhya encendieron filas de lámparas para guiar al Señor Rama a casa después de sus 14 años de exilio y su victoria sobre el rey demonio Ravana.',
      },
    },
    {
      question: { en: 'Is Diwali only a Hindu festival?', fr: 'Diwali est-il uniquement un festival hindou ?', es: '¿Es Diwali solo un festival hindú?' },
      answer: {
        en: 'No, Diwali is celebrated by Hindus, Jains, Sikhs, and some Buddhists. Jains mark it as the day Lord Mahavira attained nirvana. Sikhs celebrate it as Bandi Chhor Divas, commemorating the release of Guru Hargobind. It has become a cultural celebration enjoyed by Indians of all faiths.',
        fr: 'Non, Diwali est célébré par les hindous, les jaïns, les sikhs et certains bouddhistes. Les jaïns le marquent comme le jour où le Seigneur Mahavira a atteint le nirvana. Les sikhs le célèbrent comme Bandi Chhor Divas, commémorant la libération du Guru Hargobind. C\'est devenu une célébration culturelle appréciée par les Indiens de toutes confessions.',
        es: 'No, Diwali es celebrado por hindúes, jainistas, sijs y algunos budistas. Los jainistas lo marcan como el día en que el Señor Mahavira alcanzó el nirvana. Los sijs lo celebran como Bandi Chhor Divas, conmemorando la liberación del Guru Hargobind. Se ha convertido en una celebración cultural disfrutada por indios de todas las creencias.',
      },
    },
  ],

  colorTheme: 'gold-orange',
  icon: '🪔',
};

// ---------------------------------------------------------------------------
// Eid al-Fitr — Calculated (Islamic calendar)
// ---------------------------------------------------------------------------

const eidAlFitr: HolidayData = {
  id: 'in_eid-al-fitr',
  countryCode: 'in',
  slugs: { en: 'eid-al-fitr', fr: 'eid-al-fitr', es: 'eid-al-fitr' },
  names: { en: 'Eid al-Fitr', fr: 'Eid al-Fitr', es: 'Eid al-Fitr' },

  dateType: 'calculated',
  calculateDate: getEidAlFitrDate,

  descriptions: {
    en: 'Eid al-Fitr marks the end of Ramadan, the Islamic holy month of fasting. Celebrated by India\'s Muslim population of approximately 200 million, it is a day of communal prayers, feasting, charity (Zakat al-Fitr), and joyful gatherings with family and friends.',
    fr: 'L\'Eid al-Fitr marque la fin du Ramadan, le mois sacré islamique du jeûne. Célébré par la population musulmane de l\'Inde d\'environ 200 millions de personnes, c\'est un jour de prières communautaires, de festins, de charité (Zakat al-Fitr) et de rassemblements joyeux avec la famille et les amis.',
    es: 'Eid al-Fitr marca el final del Ramadán, el mes sagrado islámico de ayuno. Celebrado por la población musulmana de la India de aproximadamente 200 millones, es un día de oraciones comunitarias, banquetes, caridad (Zakat al-Fitr) y reuniones alegres con familia y amigos.',
  },

  history: {
    en: 'Eid al-Fitr was instituted by the Prophet Muhammad after the first Ramadan in Medina in 624 CE. The festival marks the breaking of the month-long fast and is one of the two major Islamic holidays (the other being Eid al-Adha). In India, Eid has been celebrated for centuries and is an integral part of the country\'s cultural tapestry.\n\nIndia has one of the largest Muslim populations in the world, with approximately 200 million Muslims. Eid celebrations in India reflect the country\'s diverse Islamic traditions, from the grand Eid prayers at the Jama Masjid in Delhi to the unique celebrations in Lucknow, Hyderabad, and Kerala.\n\nEid al-Fitr is a gazetted holiday in India, with government offices and many businesses closed. The festival promotes communal harmony, as people of all faiths often join in the celebrations and exchange greetings.',
    fr: 'L\'Eid al-Fitr a été institué par le prophète Mahomet après le premier Ramadan à Médine en 624 de notre ère. Le festival marque la rupture du jeûne d\'un mois et est l\'une des deux fêtes islamiques majeures (l\'autre étant l\'Eid al-Adha). En Inde, l\'Eid est célébré depuis des siècles et fait partie intégrante du tissu culturel du pays.\n\nL\'Inde possède l\'une des plus grandes populations musulmanes au monde, avec environ 200 millions de musulmans. Les célébrations de l\'Eid en Inde reflètent les diverses traditions islamiques du pays, des grandes prières de l\'Eid à la Jama Masjid de Delhi aux célébrations uniques de Lucknow, Hyderabad et Kerala.\n\nL\'Eid al-Fitr est un jour férié officiel en Inde, avec la fermeture des bureaux gouvernementaux et de nombreuses entreprises. Le festival favorise l\'harmonie communautaire, car des personnes de toutes confessions se joignent souvent aux célébrations et échangent des vœux.',
    es: 'Eid al-Fitr fue instituido por el profeta Mahoma después del primer Ramadán en Medina en 624 d.C. El festival marca la ruptura del ayuno de un mes y es una de las dos principales festividades islámicas (la otra es Eid al-Adha). En la India, el Eid se ha celebrado durante siglos y es parte integral del tejido cultural del país.\n\nLa India tiene una de las poblaciones musulmanas más grandes del mundo, con aproximadamente 200 millones de musulmanes. Las celebraciones del Eid en la India reflejan las diversas tradiciones islámicas del país, desde las grandes oraciones del Eid en la Jama Masjid de Delhi hasta las celebraciones únicas en Lucknow, Hyderabad y Kerala.\n\nEid al-Fitr es un feriado oficial en la India, con oficinas gubernamentales y muchas empresas cerradas. El festival promueve la armonía comunitaria, ya que personas de todas las creencias a menudo se unen a las celebraciones e intercambian saludos.',
  },

  traditions: {
    en: [
      'Performing Eid prayers (Salat al-Eid) at mosques and open grounds (Eidgahs)',
      'Giving Zakat al-Fitr (charity) to the poor before Eid prayers',
      'Preparing and sharing special dishes like sheer khurma, biryani, and kebabs',
      'Wearing new clothes and applying ittar (perfume)',
      'Visiting family and friends to exchange "Eid Mubarak" greetings',
      'Giving Eidi (monetary gifts) to children and younger relatives',
      'Decorating homes with lights, flowers, and festive decorations',
    ],
    fr: [
      'Effectuer les prières de l\'Eid (Salat al-Eid) dans les mosquées et les espaces ouverts (Eidgahs)',
      'Donner le Zakat al-Fitr (charité) aux pauvres avant les prières de l\'Eid',
      'Préparer et partager des plats spéciaux comme le sheer khurma, le biryani et les kebabs',
      'Porter de nouveaux vêtements et appliquer de l\'ittar (parfum)',
      'Rendre visite à la famille et aux amis pour échanger les vœux « Eid Mubarak »',
      'Donner l\'Eidi (cadeaux en argent) aux enfants et aux plus jeunes membres de la famille',
      'Décorer les maisons avec des lumières, des fleurs et des décorations festives',
    ],
    es: [
      'Realizar las oraciones del Eid (Salat al-Eid) en mezquitas y terrenos abiertos (Eidgahs)',
      'Dar Zakat al-Fitr (caridad) a los pobres antes de las oraciones del Eid',
      'Preparar y compartir platos especiales como sheer khurma, biryani y kebabs',
      'Usar ropa nueva y aplicar ittar (perfume)',
      'Visitar a familia y amigos para intercambiar saludos de "Eid Mubarak"',
      'Dar Eidi (regalos monetarios) a los niños y parientes más jóvenes',
      'Decorar los hogares con luces, flores y decoraciones festivas',
    ],
  },

  funFacts: {
    en: [
      'India has the third-largest Muslim population in the world, after Indonesia and Pakistan.',
      'Sheer khurma, a vermicelli pudding made with milk, dates, and nuts, is the signature Eid dish in India.',
      'The Jama Masjid in Delhi, built by Mughal Emperor Shah Jahan in 1656, hosts one of the largest Eid prayers in India.',
      'Eid dates move approximately 11 days earlier each year because the Islamic calendar is lunar.',
      'Lucknow is famous for its elaborate Eid feasts featuring Awadhi cuisine, especially galouti kebabs and nihari.',
    ],
    fr: [
      'L\'Inde possède la troisième plus grande population musulmane au monde, après l\'Indonésie et le Pakistan.',
      'Le sheer khurma, un pudding de vermicelles fait avec du lait, des dattes et des noix, est le plat signature de l\'Eid en Inde.',
      'La Jama Masjid à Delhi, construite par l\'empereur moghol Shah Jahan en 1656, accueille l\'une des plus grandes prières de l\'Eid en Inde.',
      'Les dates de l\'Eid avancent d\'environ 11 jours chaque année car le calendrier islamique est lunaire.',
      'Lucknow est célèbre pour ses festins élaborés de l\'Eid avec la cuisine awadhi, en particulier les galouti kebabs et le nihari.',
    ],
    es: [
      'India tiene la tercera población musulmana más grande del mundo, después de Indonesia y Pakistán.',
      'Sheer khurma, un pudín de fideos hecho con leche, dátiles y nueces, es el plato emblemático del Eid en la India.',
      'La Jama Masjid en Delhi, construida por el emperador mogol Shah Jahan en 1656, alberga una de las oraciones del Eid más grandes de la India.',
      'Las fechas del Eid se adelantan aproximadamente 11 días cada año porque el calendario islámico es lunar.',
      'Lucknow es famosa por sus elaborados banquetes del Eid con cocina awadhi, especialmente galouti kebabs y nihari.',
    ],
  },

  planningChecklist: {
    en: [
      'Pay Zakat al-Fitr before the Eid prayers',
      'Prepare sheer khurma and other traditional Eid dishes',
      'Buy new clothes and arrange Eidi for children',
      'Plan visits to family and friends throughout the day',
      'Confirm the Eid date based on moon sighting announcements',
    ],
    fr: [
      'Payez le Zakat al-Fitr avant les prières de l\'Eid',
      'Préparez le sheer khurma et d\'autres plats traditionnels de l\'Eid',
      'Achetez de nouveaux vêtements et préparez l\'Eidi pour les enfants',
      'Planifiez des visites à la famille et aux amis tout au long de la journée',
      'Confirmez la date de l\'Eid en fonction des annonces d\'observation de la lune',
    ],
    es: [
      'Pague el Zakat al-Fitr antes de las oraciones del Eid',
      'Prepare sheer khurma y otros platos tradicionales del Eid',
      'Compre ropa nueva y prepare Eidi para los niños',
      'Planifique visitas a familia y amigos durante todo el día',
      'Confirme la fecha del Eid según los anuncios de avistamiento de la luna',
    ],
  },

  relatedHolidays: ['in_diwali', 'in_christmas'],

  seo: {
    en: {
      titleTemplate: 'Eid al-Fitr {year} India — Countdown & Guide',
      descriptionTemplate: 'When is Eid al-Fitr {year} in India? Live countdown, Eid traditions, Ramadan end date, and celebration guide.',
      keywords: ['Eid al-Fitr India', 'Eid date India', 'Ramadan end', 'Eid al-Fitr countdown', 'when is Eid'],
    },
    fr: {
      titleTemplate: 'Eid al-Fitr {year} Inde — Compte à rebours et guide',
      descriptionTemplate: 'Quand est l\'Eid al-Fitr {year} en Inde ? Compte à rebours, traditions de l\'Eid, fin du Ramadan et guide de célébration.',
      keywords: ['Eid al-Fitr Inde', 'date Eid Inde', 'fin du Ramadan', 'compte à rebours Eid al-Fitr', 'quand est l\'Eid'],
    },
    es: {
      titleTemplate: 'Eid al-Fitr {year} India — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es Eid al-Fitr {year} en India? Cuenta regresiva, tradiciones del Eid, fin del Ramadán y guía de celebración.',
      keywords: ['Eid al-Fitr India', 'fecha Eid India', 'fin del Ramadán', 'cuenta regresiva Eid al-Fitr', 'cuándo es el Eid'],
    },
  },

  faq: [
    {
      question: { en: 'When is Eid al-Fitr {year} in India?', fr: 'Quand est l\'Eid al-Fitr {year} en Inde ?', es: '¿Cuándo es Eid al-Fitr {year} en India?' },
      answer: {
        en: 'Eid al-Fitr {year} in India is expected on {date} ({dayOfWeek}). The exact date depends on the sighting of the crescent moon marking the end of Ramadan.',
        fr: 'L\'Eid al-Fitr {year} en Inde est prévu le {date} ({dayOfWeek}). La date exacte dépend de l\'observation du croissant de lune marquant la fin du Ramadan.',
        es: 'Eid al-Fitr {year} en India se espera el {date} ({dayOfWeek}). La fecha exacta depende del avistamiento de la luna creciente que marca el fin del Ramadán.',
      },
    },
    {
      question: { en: 'What is Zakat al-Fitr?', fr: 'Qu\'est-ce que le Zakat al-Fitr ?', es: '¿Qué es el Zakat al-Fitr?' },
      answer: {
        en: 'Zakat al-Fitr is a form of charity given to the poor before Eid prayers. It is obligatory for every Muslim who can afford it and is meant to purify the fasting person and help those in need celebrate Eid.',
        fr: 'Le Zakat al-Fitr est une forme de charité donnée aux pauvres avant les prières de l\'Eid. Il est obligatoire pour tout musulman qui peut se le permettre et vise à purifier le jeûneur et à aider les nécessiteux à célébrer l\'Eid.',
        es: 'Zakat al-Fitr es una forma de caridad dada a los pobres antes de las oraciones del Eid. Es obligatorio para todo musulmán que pueda permitírselo y tiene como objetivo purificar al ayunante y ayudar a los necesitados a celebrar el Eid.',
      },
    },
    {
      question: { en: 'Is Eid al-Fitr a public holiday in India?', fr: 'L\'Eid al-Fitr est-il un jour férié en Inde ?', es: '¿Es Eid al-Fitr un feriado público en la India?' },
      answer: {
        en: 'Yes, Eid al-Fitr is a gazetted holiday in India. Government offices, banks, and many businesses are closed. It is observed across the country regardless of the regional Muslim population.',
        fr: 'Oui, l\'Eid al-Fitr est un jour férié officiel en Inde. Les bureaux gouvernementaux, les banques et de nombreuses entreprises sont fermés. Il est observé dans tout le pays quelle que soit la population musulmane régionale.',
        es: 'Sí, Eid al-Fitr es un feriado oficial en la India. Las oficinas gubernamentales, bancos y muchas empresas están cerrados. Se observa en todo el país independientemente de la población musulmana regional.',
      },
    },
    {
      question: { en: 'What is sheer khurma?', fr: 'Qu\'est-ce que le sheer khurma ?', es: '¿Qué es sheer khurma?' },
      answer: {
        en: 'Sheer khurma is a traditional Indian Eid dessert made with vermicelli, milk, sugar, dates, and nuts. The name comes from Persian — "sheer" means milk and "khurma" means dates. It is prepared in almost every Muslim household on Eid morning.',
        fr: 'Le sheer khurma est un dessert traditionnel indien de l\'Eid fait avec des vermicelles, du lait, du sucre, des dattes et des noix. Le nom vient du persan — « sheer » signifie lait et « khurma » signifie dattes. Il est préparé dans presque tous les foyers musulmans le matin de l\'Eid.',
        es: 'Sheer khurma es un postre tradicional indio del Eid hecho con fideos, leche, azúcar, dátiles y nueces. El nombre proviene del persa — "sheer" significa leche y "khurma" significa dátiles. Se prepara en casi todos los hogares musulmanes en la mañana del Eid.',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '🌙',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmasDay: HolidayData = {
  id: 'in_christmas',
  countryCode: 'in',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noël', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is celebrated by India\'s Christian community and widely enjoyed as a cultural holiday. Known as "Bada Din" (Big Day) in Hindi, it features midnight Mass, church services, decorated Christmas trees, cake, and gift exchanges.',
    fr: 'Le jour de Noël, le 25 décembre, est célébré par la communauté chrétienne de l\'Inde et largement apprécié comme fête culturelle. Connu sous le nom de « Bada Din » (Grand Jour) en hindi, il comprend la messe de minuit, des services religieux, des sapins de Noël décorés, des gâteaux et des échanges de cadeaux.',
    es: 'El día de Navidad, el 25 de diciembre, es celebrado por la comunidad cristiana de la India y ampliamente disfrutado como fiesta cultural. Conocido como "Bada Din" (Gran Día) en hindi, incluye la Misa de Gallo, servicios religiosos, árboles de Navidad decorados, pasteles e intercambio de regalos.',
  },

  history: {
    en: 'Christianity arrived in India nearly 2,000 years ago, with tradition attributing the introduction of the faith to the Apostle Thomas, who is believed to have arrived in Kerala in 52 CE. India has approximately 28 million Christians, making up about 2.3% of the population, with significant communities in Goa, Kerala, the Northeast, and major cities.\n\nChristmas in India reflects the country\'s multicultural character. Goa, with its Portuguese heritage, has some of the most elaborate Christmas celebrations. In Kerala, the Syrian Christian community has celebrated Christmas for centuries. In the Northeast, states like Nagaland, Mizoram, and Meghalaya have predominantly Christian populations who celebrate with great enthusiasm.\n\nThe term "Bada Din" (Big Day) is widely used across North India, reflecting how Christmas has been adopted as a cultural celebration beyond religious boundaries. Christmas is a gazetted holiday in India.',
    fr: 'Le christianisme est arrivé en Inde il y a près de 2 000 ans, la tradition attribuant l\'introduction de la foi à l\'apôtre Thomas, qui serait arrivé au Kerala en 52 de notre ère. L\'Inde compte environ 28 millions de chrétiens, soit environ 2,3 % de la population, avec des communautés importantes à Goa, au Kerala, dans le Nord-Est et dans les grandes villes.\n\nNoël en Inde reflète le caractère multiculturel du pays. Goa, avec son héritage portugais, a certaines des célébrations de Noël les plus élaborées. Au Kerala, la communauté chrétienne syriaque célèbre Noël depuis des siècles. Dans le Nord-Est, des États comme le Nagaland, le Mizoram et le Meghalaya ont des populations majoritairement chrétiennes qui célèbrent avec beaucoup d\'enthousiasme.\n\nLe terme « Bada Din » (Grand Jour) est largement utilisé dans le nord de l\'Inde, reflétant comment Noël a été adopté comme célébration culturelle au-delà des frontières religieuses. Noël est un jour férié officiel en Inde.',
    es: 'El cristianismo llegó a la India hace casi 2.000 años, con la tradición atribuyendo la introducción de la fe al apóstol Tomás, quien se cree que llegó a Kerala en el año 52 d.C. India tiene aproximadamente 28 millones de cristianos, constituyendo alrededor del 2,3% de la población, con comunidades significativas en Goa, Kerala, el Noreste y las principales ciudades.\n\nLa Navidad en la India refleja el carácter multicultural del país. Goa, con su herencia portuguesa, tiene algunas de las celebraciones navideñas más elaboradas. En Kerala, la comunidad cristiana siria ha celebrado la Navidad durante siglos. En el Noreste, estados como Nagaland, Mizoram y Meghalaya tienen poblaciones predominantemente cristianas que celebran con gran entusiasmo.\n\nEl término "Bada Din" (Gran Día) se usa ampliamente en el norte de la India, reflejando cómo la Navidad ha sido adoptada como celebración cultural más allá de las fronteras religiosas. La Navidad es un feriado oficial en la India.',
  },

  traditions: {
    en: [
      'Attending midnight Mass and Christmas morning church services',
      'Decorating banana or mango trees as Christmas trees in some regions',
      'Baking and sharing Christmas cakes, especially rich plum cakes in Kerala and Goa',
      'Exchanging gifts and "Bada Din" greetings with neighbours of all faiths',
      'Star-shaped lanterns hung outside homes, especially in South India',
      'Community carol singing and nativity plays',
      'Preparing special feasts with regional variations across the country',
    ],
    fr: [
      'Assister à la messe de minuit et aux services religieux du matin de Noël',
      'Décorer des bananiers ou des manguiers comme sapins de Noël dans certaines régions',
      'Préparer et partager des gâteaux de Noël, en particulier de riches plum cakes au Kerala et à Goa',
      'Échanger des cadeaux et des vœux de « Bada Din » avec les voisins de toutes confessions',
      'Lanternes en forme d\'étoile accrochées devant les maisons, surtout dans le sud de l\'Inde',
      'Chant de cantiques en communauté et crèches vivantes',
      'Préparer des festins spéciaux avec des variations régionales à travers le pays',
    ],
    es: [
      'Asistir a la Misa de Gallo y a los servicios religiosos de la mañana de Navidad',
      'Decorar bananeros o mangos como árboles de Navidad en algunas regiones',
      'Hornear y compartir pasteles de Navidad, especialmente ricos plum cakes en Kerala y Goa',
      'Intercambiar regalos y saludos de "Bada Din" con vecinos de todas las creencias',
      'Linternas en forma de estrella colgadas fuera de las casas, especialmente en el sur de la India',
      'Canto de villancicos en comunidad y representaciones del nacimiento',
      'Preparar banquetes especiales con variaciones regionales en todo el país',
    ],
  },

  funFacts: {
    en: [
      '"Bada Din" (Big Day) is what Christmas is commonly called in Hindi — the name refers to the longer days after the winter solstice.',
      'In Goa, Christmas celebrations blend Portuguese and Indian traditions, with elaborate nativity scenes called "presepio."',
      'Kerala\'s Christians make a special Christmas cake called "plum cake" using dried fruits soaked in rum for months.',
      'In some parts of India, banana trees or mango trees are decorated instead of pine trees.',
      'Shillong in Meghalaya is sometimes called the "Christmas capital of India" due to its elaborate celebrations.',
    ],
    fr: [
      '« Bada Din » (Grand Jour) est le nom courant de Noël en hindi — le nom fait référence aux jours plus longs après le solstice d\'hiver.',
      'À Goa, les célébrations de Noël mêlent traditions portugaises et indiennes, avec des crèches élaborées appelées « presepio ».',
      'Les chrétiens du Kerala préparent un gâteau de Noël spécial appelé « plum cake » avec des fruits secs trempés dans du rhum pendant des mois.',
      'Dans certaines régions de l\'Inde, des bananiers ou des manguiers sont décorés à la place des sapins.',
      'Shillong au Meghalaya est parfois appelée la « capitale de Noël de l\'Inde » en raison de ses célébrations élaborées.',
    ],
    es: [
      '"Bada Din" (Gran Día) es como se llama comúnmente a la Navidad en hindi — el nombre se refiere a los días más largos después del solsticio de invierno.',
      'En Goa, las celebraciones navideñas mezclan tradiciones portuguesas e indias, con elaborados nacimientos llamados "presepio".',
      'Los cristianos de Kerala preparan un pastel de Navidad especial llamado "plum cake" con frutas secas remojadas en ron durante meses.',
      'En algunas partes de la India, se decoran bananeros o mangos en lugar de pinos.',
      'Shillong en Meghalaya a veces se llama la "capital de la Navidad de la India" debido a sus elaboradas celebraciones.',
    ],
  },

  planningChecklist: {
    en: [
      'Book tickets for midnight Mass at popular churches early',
      'Order Christmas cakes and plum puddings in advance, especially from Goa or Kerala bakeries',
      'Decorate your home with stars, lights, and a Christmas tree',
      'Plan visits to friends and neighbours to exchange greetings and sweets',
      'Consider visiting Goa, Shillong, or Pondicherry for unique Christmas celebrations',
    ],
    fr: [
      'Réservez des billets pour la messe de minuit dans les églises populaires à l\'avance',
      'Commandez des gâteaux de Noël et des puddings aux prunes à l\'avance, surtout des boulangeries de Goa ou du Kerala',
      'Décorez votre maison avec des étoiles, des lumières et un sapin de Noël',
      'Planifiez des visites à des amis et voisins pour échanger des vœux et des sucreries',
      'Envisagez de visiter Goa, Shillong ou Pondichéry pour des célébrations de Noël uniques',
    ],
    es: [
      'Reserve entradas para la Misa de Gallo en iglesias populares con anticipación',
      'Encargue pasteles de Navidad y pudines de ciruelas con anticipación, especialmente de panaderías de Goa o Kerala',
      'Decore su hogar con estrellas, luces y un árbol de Navidad',
      'Planifique visitas a amigos y vecinos para intercambiar saludos y dulces',
      'Considere visitar Goa, Shillong o Pondicherry para celebraciones navideñas únicas',
    ],
  },

  relatedHolidays: ['in_diwali', 'in_eid-al-fitr'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} India — Countdown & Celebration Guide',
      descriptionTemplate: 'When is Christmas {year} in India? Live countdown to December 25, Indian Christmas traditions, Bada Din, and celebration guide.',
      keywords: ['Christmas India', 'Bada Din', 'Christmas date India', 'Indian Christmas traditions', 'Christmas countdown'],
    },
    fr: {
      titleTemplate: 'Noël {year} Inde — Compte à rebours et guide de célébration',
      descriptionTemplate: 'Quand est Noël {year} en Inde ? Compte à rebours jusqu\'au 25 décembre, traditions de Noël indiennes, Bada Din et guide de célébration.',
      keywords: ['Noël Inde', 'Bada Din', 'date Noël Inde', 'traditions de Noël indiennes', 'compte à rebours Noël'],
    },
    es: {
      titleTemplate: 'Navidad {year} India — Cuenta regresiva y guía de celebración',
      descriptionTemplate: '¿Cuándo es Navidad {year} en India? Cuenta regresiva hasta el 25 de diciembre, tradiciones navideñas indias, Bada Din y guía de celebración.',
      keywords: ['Navidad India', 'Bada Din', 'fecha Navidad India', 'tradiciones navideñas indias', 'cuenta regresiva Navidad'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in India?', fr: 'Quand est Noël {year} en Inde ?', es: '¿Cuándo es Navidad {year} en India?' },
      answer: {
        en: 'Christmas {year} in India is on {date} ({dayOfWeek}). It is always celebrated on December 25.',
        fr: 'Noël {year} en Inde est le {date} ({dayOfWeek}). Il est toujours célébré le 25 décembre.',
        es: 'Navidad {year} en India es el {date} ({dayOfWeek}). Siempre se celebra el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What is Bada Din?', fr: 'Qu\'est-ce que Bada Din ?', es: '¿Qué es Bada Din?' },
      answer: {
        en: '"Bada Din" means "Big Day" in Hindi and is the popular name for Christmas across North India. The name is thought to refer to the longer days that follow the winter solstice, which occurs just before December 25.',
        fr: '« Bada Din » signifie « Grand Jour » en hindi et est le nom populaire de Noël dans tout le nord de l\'Inde. On pense que le nom fait référence aux jours plus longs qui suivent le solstice d\'hiver, qui se produit juste avant le 25 décembre.',
        es: '"Bada Din" significa "Gran Día" en hindi y es el nombre popular de la Navidad en todo el norte de la India. Se cree que el nombre se refiere a los días más largos que siguen al solsticio de invierno, que ocurre justo antes del 25 de diciembre.',
      },
    },
    {
      question: { en: 'Is Christmas a public holiday in India?', fr: 'Noël est-il un jour férié en Inde ?', es: '¿Es Navidad un feriado público en la India?' },
      answer: {
        en: 'Yes, Christmas is a gazetted holiday in India. Government offices, banks, and most businesses are closed on December 25. It is celebrated across the country regardless of religious demographics.',
        fr: 'Oui, Noël est un jour férié officiel en Inde. Les bureaux gouvernementaux, les banques et la plupart des entreprises sont fermés le 25 décembre. Il est célébré dans tout le pays quelle que soit la démographie religieuse.',
        es: 'Sí, la Navidad es un feriado oficial en la India. Las oficinas gubernamentales, bancos y la mayoría de las empresas están cerrados el 25 de diciembre. Se celebra en todo el país independientemente de la demografía religiosa.',
      },
    },
    {
      question: { en: 'Where are the best Christmas celebrations in India?', fr: 'Où sont les meilleures célébrations de Noël en Inde ?', es: '¿Dónde están las mejores celebraciones de Navidad en la India?' },
      answer: {
        en: 'Goa is famous for its Portuguese-influenced Christmas traditions and nativity scenes. Shillong (Meghalaya) is known as India\'s "Christmas capital." Kerala and Pondicherry also have rich Christmas celebrations. Mumbai and Delhi feature large-scale commercial festivities.',
        fr: 'Goa est célèbre pour ses traditions de Noël d\'influence portugaise et ses crèches. Shillong (Meghalaya) est connue comme la « capitale de Noël » de l\'Inde. Le Kerala et Pondichéry ont également de riches célébrations de Noël. Mumbai et Delhi proposent des festivités commerciales à grande échelle.',
        es: 'Goa es famosa por sus tradiciones navideñas de influencia portuguesa y nacimientos. Shillong (Meghalaya) es conocida como la "capital de la Navidad" de la India. Kerala y Pondicherry también tienen ricas celebraciones navideñas. Mumbai y Delhi presentan festividades comerciales a gran escala.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const inHolidays: HolidayData[] = [
  republicDay,
  holi,
  independenceDay,
  gandhiJayanti,
  diwali,
  eidAlFitr,
  christmasDay,
];

export default inHolidays;
