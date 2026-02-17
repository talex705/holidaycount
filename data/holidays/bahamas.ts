/**
 * Bahamas holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { nthWeekday } from './_shared-dates';

// ---------------------------------------------------------------------------
// Junkanoo (New Year's Day) — January 1
// ---------------------------------------------------------------------------

const junkanoo: HolidayData = {
  id: 'bs_junkanoo',
  countryCode: 'bs',
  slugs: { en: 'junkanoo', fr: 'junkanoo', es: 'junkanoo' },
  names: { en: "Junkanoo (New Year's Day)", fr: 'Junkanoo (Jour de l\'An)', es: 'Junkanoo (Día de Año Nuevo)' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "Junkanoo on New Year's Day is the Bahamas' biggest cultural event, featuring an elaborate street parade with spectacular costumes, goatskin drums, cowbells, and brass instruments. The celebration fills the streets of Nassau from the early morning hours of January 1.",
    fr: "Le Junkanoo du Jour de l'An est le plus grand événement culturel des Bahamas, avec un défilé de rue élaboré comprenant des costumes spectaculaires, des tambours en peau de chèvre, des cloches de vache et des instruments de cuivre. La célébration remplit les rues de Nassau dès les premières heures du 1er janvier.",
    es: 'El Junkanoo del Día de Año Nuevo es el mayor evento cultural de las Bahamas, con un elaborado desfile callejero que presenta disfraces espectaculares, tambores de piel de cabra, cencerros e instrumentos de bronce. La celebración llena las calles de Nassau desde las primeras horas del 1 de enero.',
  },

  history: {
    en: 'Junkanoo has its roots in the celebrations of enslaved Africans in the Bahamas who were given a few days off around Christmas. The origin of the name is debated — some historians believe it comes from "John Canoe," a West African folk hero, while others link it to the French "gens inconnus" (unknown people), referring to the masked participants.\n\nThe tradition dates back to at least the 16th century and has survived through slavery, emancipation, and independence. What began as simple celebrations with homemade instruments and costumes has evolved into a major cultural spectacle with groups spending months and thousands of dollars creating elaborate themed costumes from crepe paper, cardboard, and other materials.\n\nJunkanoo is held twice a year — on Boxing Day (December 26) and New Year\'s Day (January 1) — but the New Year\'s Day parade is considered the premier event. It is deeply embedded in Bahamian national identity and was recognized by UNESCO as an intangible cultural heritage practice.',
    fr: "Le Junkanoo trouve ses racines dans les célébrations des Africains réduits en esclavage aux Bahamas, à qui l'on accordait quelques jours de congé autour de Noël. L'origine du nom est débattue — certains historiens pensent qu'il vient de « John Canoe », un héros populaire ouest-africain, tandis que d'autres le relient au français « gens inconnus », faisant référence aux participants masqués.\n\nLa tradition remonte au moins au XVIe siècle et a survécu à l'esclavage, à l'émancipation et à l'indépendance. Ce qui a commencé comme de simples célébrations avec des instruments et des costumes faits maison a évolué en un spectacle culturel majeur, les groupes passant des mois et des milliers de dollars à créer des costumes thématiques élaborés en papier crépon, carton et autres matériaux.\n\nLe Junkanoo a lieu deux fois par an — le lendemain de Noël (26 décembre) et le Jour de l'An (1er janvier) — mais le défilé du Jour de l'An est considéré comme l'événement principal. Il est profondément ancré dans l'identité nationale bahamienne et a été reconnu par l'UNESCO comme pratique du patrimoine culturel immatériel.",
    es: 'El Junkanoo tiene sus raíces en las celebraciones de los africanos esclavizados en las Bahamas, a quienes se les daban unos días libres alrededor de Navidad. El origen del nombre es debatido — algunos historiadores creen que proviene de "John Canoe", un héroe popular de África Occidental, mientras que otros lo vinculan al francés "gens inconnus" (personas desconocidas), refiriéndose a los participantes enmascarados.\n\nLa tradición se remonta al menos al siglo XVI y ha sobrevivido a la esclavitud, la emancipación y la independencia. Lo que comenzó como celebraciones simples con instrumentos y disfraces caseros ha evolucionado hasta convertirse en un gran espectáculo cultural, con grupos gastando meses y miles de dólares en crear elaborados disfraces temáticos de papel crepé, cartón y otros materiales.\n\nEl Junkanoo se celebra dos veces al año — el día después de Navidad (26 de diciembre) y el Día de Año Nuevo (1 de enero) — pero el desfile del Día de Año Nuevo es considerado el evento principal. Está profundamente arraigado en la identidad nacional bahamense y fue reconocido por la UNESCO como práctica del patrimonio cultural inmaterial.',
  },

  traditions: {
    en: [
      'Watching the Junkanoo parade through the streets of Nassau starting around 2 AM',
      'Groups competing with elaborate themed costumes made from crepe paper, cardboard, and fabric',
      'Playing goatskin drums, cowbells, brass horns, and whistles',
      'Performing choreographed dances and music routines',
      'Cheering on competing Junkanoo groups from bleachers along Bay Street',
      'Enjoying Bahamian street food — conch fritters, fried fish, and johnnycake',
      'Celebrating with family gatherings and parties after the parade',
    ],
    fr: [
      'Regarder le défilé Junkanoo dans les rues de Nassau commençant vers 2 heures du matin',
      'Les groupes rivalisant avec des costumes thématiques élaborés en papier crépon, carton et tissu',
      'Jouer des tambours en peau de chèvre, cloches de vache, cors de cuivre et sifflets',
      'Exécuter des danses chorégraphiées et des routines musicales',
      'Encourager les groupes Junkanoo en compétition depuis les tribunes le long de Bay Street',
      'Déguster de la cuisine de rue bahamienne — beignets de conque, poisson frit et johnnycake',
      'Célébrer avec des réunions de famille et des fêtes après le défilé',
    ],
    es: [
      'Ver el desfile de Junkanoo por las calles de Nassau comenzando alrededor de las 2 AM',
      'Grupos compitiendo con elaborados disfraces temáticos hechos de papel crepé, cartón y tela',
      'Tocar tambores de piel de cabra, cencerros, trompetas de bronce y silbatos',
      'Realizar danzas coreografiadas y rutinas musicales',
      'Animar a los grupos Junkanoo competidores desde las gradas a lo largo de Bay Street',
      'Disfrutar de comida callejera bahamense — buñuelos de concha, pescado frito y johnnycake',
      'Celebrar con reuniones familiares y fiestas después del desfile',
    ],
  },

  funFacts: {
    en: [
      'Junkanoo groups can spend over $100,000 and 6-9 months preparing their costumes and music for the parade.',
      'The goatskin drum, the heartbeat of Junkanoo, is handmade using real goatskin stretched over wooden barrels.',
      'The parade route runs along Bay Street in downtown Nassau, with the competition judged on costume, music, and choreography.',
      'Junkanoo was recognized by UNESCO as an important intangible cultural heritage practice.',
      'The rivalry between top Junkanoo groups like Valley Boys, Saxons, and Roots is fierce and spans decades.',
    ],
    fr: [
      'Les groupes Junkanoo peuvent dépenser plus de 100 000 $ et 6 à 9 mois pour préparer leurs costumes et leur musique pour le défilé.',
      'Le tambour en peau de chèvre, le cœur du Junkanoo, est fabriqué à la main avec de la vraie peau de chèvre tendue sur des tonneaux en bois.',
      'Le parcours du défilé longe Bay Street au centre-ville de Nassau, la compétition étant jugée sur le costume, la musique et la chorégraphie.',
      'Le Junkanoo a été reconnu par l\'UNESCO comme une importante pratique du patrimoine culturel immatériel.',
      'La rivalité entre les meilleurs groupes Junkanoo comme Valley Boys, Saxons et Roots est féroce et dure depuis des décennies.',
    ],
    es: [
      'Los grupos de Junkanoo pueden gastar más de $100,000 y de 6 a 9 meses preparando sus disfraces y música para el desfile.',
      'El tambor de piel de cabra, el corazón del Junkanoo, se hace a mano con piel real de cabra estirada sobre barriles de madera.',
      'La ruta del desfile recorre Bay Street en el centro de Nassau, y la competición se juzga por el disfraz, la música y la coreografía.',
      'El Junkanoo fue reconocido por la UNESCO como una importante práctica del patrimonio cultural inmaterial.',
      'La rivalidad entre los mejores grupos de Junkanoo como Valley Boys, Saxons y Roots es feroz y abarca décadas.',
    ],
  },

  planningChecklist: {
    en: [
      'Arrive in Nassau early and secure a spot along Bay Street for the best views',
      'Prepare for an early start — the parade begins around 2 AM on January 1',
      'Bring comfortable shoes and warm layers for the cool early-morning hours',
      'Try local street food during the parade, especially conch fritters',
      'Book accommodation well in advance as Nassau fills up during the holiday season',
    ],
    fr: [
      'Arriver tôt à Nassau et se placer le long de Bay Street pour les meilleures vues',
      'Se préparer pour un départ matinal — le défilé commence vers 2 heures du matin le 1er janvier',
      'Apporter des chaussures confortables et des couches chaudes pour les premières heures fraîches du matin',
      'Goûter la cuisine de rue locale pendant le défilé, surtout les beignets de conque',
      'Réserver un hébergement bien à l\'avance car Nassau se remplit pendant la saison des fêtes',
    ],
    es: [
      'Llegar temprano a Nassau y asegurar un lugar a lo largo de Bay Street para las mejores vistas',
      'Prepararse para un inicio temprano — el desfile comienza alrededor de las 2 AM del 1 de enero',
      'Llevar zapatos cómodos y capas abrigadas para las frescas primeras horas de la mañana',
      'Probar la comida callejera local durante el desfile, especialmente los buñuelos de concha',
      'Reservar alojamiento con mucha antelación ya que Nassau se llena durante la temporada festiva',
    ],
  },

  relatedHolidays: ['bs_independence-day', 'bs_christmas'],

  seo: {
    en: {
      titleTemplate: 'Junkanoo {year} Bahamas — New Year\'s Day Countdown & Guide',
      descriptionTemplate: 'When is Junkanoo {year}? Live countdown to January 1, Bahamas\' biggest cultural celebration, parade info, and traditions.',
      keywords: ['Junkanoo Bahamas', "New Year's Day Bahamas", 'Junkanoo parade', 'Nassau Junkanoo', 'Junkanoo countdown'],
    },
    fr: {
      titleTemplate: 'Junkanoo {year} Bahamas — Compte à rebours du Jour de l\'An et guide',
      descriptionTemplate: 'Quand est le Junkanoo {year} ? Compte à rebours jusqu\'au 1er janvier, la plus grande célébration culturelle des Bahamas, infos sur le défilé et traditions.',
      keywords: ['Junkanoo Bahamas', "Jour de l'An Bahamas", 'défilé Junkanoo', 'Nassau Junkanoo', 'compte à rebours Junkanoo'],
    },
    es: {
      titleTemplate: 'Junkanoo {year} Bahamas — Cuenta regresiva de Año Nuevo y guía',
      descriptionTemplate: '¿Cuándo es el Junkanoo {year}? Cuenta regresiva hasta el 1 de enero, la mayor celebración cultural de las Bahamas, información del desfile y tradiciones.',
      keywords: ['Junkanoo Bahamas', 'Año Nuevo Bahamas', 'desfile Junkanoo', 'Nassau Junkanoo', 'cuenta regresiva Junkanoo'],
    },
  },

  faq: [
    {
      question: { en: 'When is Junkanoo {year}?', fr: 'Quand est le Junkanoo {year} ?', es: '¿Cuándo es el Junkanoo {year}?' },
      answer: {
        en: "Junkanoo {year} takes place on {date} ({dayOfWeek}), New Year's Day. The parade begins in the early morning hours around 2 AM in Nassau.",
        fr: 'Le Junkanoo {year} a lieu le {date} ({dayOfWeek}), Jour de l\'An. Le défilé commence aux premières heures du matin vers 2 heures à Nassau.',
        es: 'El Junkanoo {year} tiene lugar el {date} ({dayOfWeek}), Día de Año Nuevo. El desfile comienza en las primeras horas de la mañana alrededor de las 2 AM en Nassau.',
      },
    },
    {
      question: { en: 'What is Junkanoo?', fr: 'Qu\'est-ce que le Junkanoo ?', es: '¿Qué es el Junkanoo?' },
      answer: {
        en: "Junkanoo is the Bahamas' premier cultural festival — a massive street parade featuring elaborate costumes made from crepe paper and cardboard, goatskin drums, cowbells, and brass instruments. It is deeply rooted in the heritage of enslaved Africans and is central to Bahamian national identity.",
        fr: "Le Junkanoo est le principal festival culturel des Bahamas — un immense défilé de rue avec des costumes élaborés en papier crépon et carton, des tambours en peau de chèvre, des cloches de vache et des instruments de cuivre. Il est profondément enraciné dans l'héritage des Africains réduits en esclavage et est central dans l'identité nationale bahamienne.",
        es: 'El Junkanoo es el principal festival cultural de las Bahamas — un masivo desfile callejero con elaborados disfraces de papel crepé y cartón, tambores de piel de cabra, cencerros e instrumentos de bronce. Está profundamente arraigado en la herencia de los africanos esclavizados y es central en la identidad nacional bahamense.',
      },
    },
    {
      question: { en: 'Where can I watch Junkanoo?', fr: 'Où puis-je voir le Junkanoo ?', es: '¿Dónde puedo ver el Junkanoo?' },
      answer: {
        en: 'The main Junkanoo parade takes place along Bay Street in downtown Nassau, New Providence. Bleachers are set up for spectators, and the atmosphere is electric. Junkanoo celebrations also take place on other islands in the Bahamas.',
        fr: 'Le défilé principal du Junkanoo se déroule le long de Bay Street au centre-ville de Nassau, New Providence. Des tribunes sont installées pour les spectateurs et l\'ambiance est électrique. Des célébrations Junkanoo ont également lieu sur d\'autres îles des Bahamas.',
        es: 'El desfile principal del Junkanoo se realiza a lo largo de Bay Street en el centro de Nassau, Nueva Providencia. Se instalan gradas para los espectadores y el ambiente es eléctrico. Las celebraciones de Junkanoo también se realizan en otras islas de las Bahamas.',
      },
    },
    {
      question: { en: 'Is Junkanoo held more than once a year?', fr: 'Le Junkanoo a-t-il lieu plus d\'une fois par an ?', es: '¿El Junkanoo se celebra más de una vez al año?' },
      answer: {
        en: "Yes, Junkanoo is held twice a year — on Boxing Day (December 26) and New Year's Day (January 1). The New Year's Day parade is generally considered the bigger and more competitive event.",
        fr: "Oui, le Junkanoo a lieu deux fois par an — le lendemain de Noël (26 décembre) et le Jour de l'An (1er janvier). Le défilé du Jour de l'An est généralement considéré comme l'événement le plus important et le plus compétitif.",
        es: 'Sí, el Junkanoo se celebra dos veces al año — el día después de Navidad (26 de diciembre) y el Día de Año Nuevo (1 de enero). El desfile del Día de Año Nuevo es generalmente considerado el evento más grande y competitivo.',
      },
    },
  ],

  colorTheme: 'multi-color',
  icon: '🥁',
};

// ---------------------------------------------------------------------------
// Independence Day — July 10
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'bs_independence-day',
  countryCode: 'bs',
  slugs: { en: 'independence-day', fr: 'jour-de-l-independance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Indépendance", es: 'Día de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 7,
  fixedDay: 10,

  descriptions: {
    en: 'Independence Day on July 10 celebrates the Bahamas gaining independence from the United Kingdom in 1973. The day is marked with cultural events, flag-raising ceremonies, fireworks, and patriotic celebrations across the islands.',
    fr: "Le Jour de l'Indépendance, le 10 juillet, célèbre l'indépendance des Bahamas du Royaume-Uni obtenue en 1973. La journée est marquée par des événements culturels, des cérémonies de lever du drapeau, des feux d'artifice et des célébrations patriotiques à travers les îles.",
    es: 'El Día de la Independencia, el 10 de julio, celebra la independencia de las Bahamas del Reino Unido obtenida en 1973. El día está marcado por eventos culturales, ceremonias de izado de bandera, fuegos artificiales y celebraciones patrióticas en todas las islas.',
  },

  history: {
    en: 'The Bahamas gained independence from the United Kingdom on July 10, 1973, after nearly 300 years of British colonial rule. The independence movement was led by Sir Lynden Pindling, leader of the Progressive Liberal Party, who became the first Prime Minister of an independent Bahamas.\n\nThe road to independence began with the "Quiet Revolution" of the 1960s, when Bahamians of African descent fought for political equality against the white merchant class known as the "Bay Street Boys." In 1964, the Bahamas gained internal self-government, and by 1973, the transition to full independence was achieved peacefully.\n\nThe independence ceremony took place at midnight on July 9-10, 1973, at Clifford Park (now Thomas A. Robinson National Stadium) in Nassau. Prince Charles represented the Queen at the ceremony, where the British flag was lowered and the new Bahamian flag was raised for the first time.',
    fr: "Les Bahamas ont obtenu leur indépendance du Royaume-Uni le 10 juillet 1973, après près de 300 ans de domination coloniale britannique. Le mouvement d'indépendance a été mené par Sir Lynden Pindling, leader du Parti libéral progressiste, qui est devenu le premier Premier ministre d'un Bahamas indépendant.\n\nLe chemin vers l'indépendance a commencé avec la « Révolution tranquille » des années 1960, lorsque les Bahamiens d'ascendance africaine ont lutté pour l'égalité politique contre la classe marchande blanche connue sous le nom de « Bay Street Boys ». En 1964, les Bahamas ont obtenu l'autonomie interne, et en 1973, la transition vers l'indépendance complète a été réalisée pacifiquement.\n\nLa cérémonie d'indépendance a eu lieu à minuit les 9 et 10 juillet 1973, à Clifford Park (aujourd'hui le stade national Thomas A. Robinson) à Nassau. Le prince Charles représentait la Reine lors de la cérémonie, où le drapeau britannique a été abaissé et le nouveau drapeau bahamien a été hissé pour la première fois.",
    es: 'Las Bahamas obtuvieron su independencia del Reino Unido el 10 de julio de 1973, después de casi 300 años de dominio colonial británico. El movimiento independentista fue liderado por Sir Lynden Pindling, líder del Partido Liberal Progresista, quien se convirtió en el primer Primer Ministro de unas Bahamas independientes.\n\nEl camino hacia la independencia comenzó con la "Revolución Silenciosa" de la década de 1960, cuando los bahamenses de ascendencia africana lucharon por la igualdad política contra la clase mercantil blanca conocida como los "Bay Street Boys". En 1964, las Bahamas obtuvieron autogobierno interno, y para 1973, la transición a la independencia completa se logró pacíficamente.\n\nLa ceremonia de independencia tuvo lugar a medianoche del 9 al 10 de julio de 1973, en Clifford Park (ahora el Estadio Nacional Thomas A. Robinson) en Nassau. El Príncipe Carlos representó a la Reina en la ceremonia, donde la bandera británica fue arriada y la nueva bandera bahamense fue izada por primera vez.',
  },

  traditions: {
    en: [
      'Attending the official flag-raising ceremony at Clifford Park',
      'Watching the Independence Day parade through the streets of Nassau',
      'Enjoying fireworks displays across the islands',
      'Attending cultural performances of Bahamian music and dance',
      'Participating in Junkanoo rushouts and community celebrations',
      'Decorating homes and businesses with the national colors of aquamarine, gold, and black',
      'Attending thanksgiving church services',
    ],
    fr: [
      'Assister à la cérémonie officielle de lever du drapeau à Clifford Park',
      'Regarder le défilé du Jour de l\'Indépendance dans les rues de Nassau',
      'Profiter des feux d\'artifice à travers les îles',
      'Assister aux spectacles culturels de musique et danse bahamiennes',
      'Participer aux sorties Junkanoo et aux célébrations communautaires',
      'Décorer les maisons et les entreprises avec les couleurs nationales aquamarine, or et noir',
      'Assister aux services religieux d\'action de grâces',
    ],
    es: [
      'Asistir a la ceremonia oficial de izado de bandera en Clifford Park',
      'Ver el desfile del Día de la Independencia por las calles de Nassau',
      'Disfrutar de los fuegos artificiales en las islas',
      'Asistir a actuaciones culturales de música y danza bahamense',
      'Participar en salidas de Junkanoo y celebraciones comunitarias',
      'Decorar hogares y negocios con los colores nacionales aguamarina, dorado y negro',
      'Asistir a servicios religiosos de acción de gracias',
    ],
  },

  funFacts: {
    en: [
      'The Bahamas comprises over 700 islands and cays, of which only about 30 are inhabited.',
      'Sir Lynden Pindling, the "Father of the Nation," served as Prime Minister for 25 years after independence.',
      'The Bahamian flag features an aquamarine stripe (sea), a gold stripe (sand), and a black triangle (unity and strength of the people).',
      'Prince Charles (now King Charles III) attended the original independence ceremony in 1973.',
      'The Bahamas was the site where Christopher Columbus first made landfall in the Americas in 1492.',
    ],
    fr: [
      'Les Bahamas comprennent plus de 700 îles et cayes, dont seulement une trentaine sont habitées.',
      'Sir Lynden Pindling, le « Père de la Nation », a été Premier ministre pendant 25 ans après l\'indépendance.',
      'Le drapeau bahamien présente une bande aquamarine (mer), une bande dorée (sable) et un triangle noir (unité et force du peuple).',
      'Le prince Charles (aujourd\'hui le roi Charles III) a assisté à la cérémonie d\'indépendance originale en 1973.',
      'Les Bahamas sont le lieu où Christophe Colomb a fait sa première escale dans les Amériques en 1492.',
    ],
    es: [
      'Las Bahamas comprenden más de 700 islas y cayos, de los cuales solo unos 30 están habitados.',
      'Sir Lynden Pindling, el "Padre de la Nación", sirvió como Primer Ministro durante 25 años después de la independencia.',
      'La bandera bahamense presenta una franja aguamarina (mar), una franja dorada (arena) y un triángulo negro (unidad y fuerza del pueblo).',
      'El Príncipe Carlos (ahora el Rey Carlos III) asistió a la ceremonia original de independencia en 1973.',
      'Las Bahamas fue el lugar donde Cristóbal Colón hizo su primera escala en las Américas en 1492.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the schedule for the official Independence Day ceremony and parade',
      'Find the best fireworks viewing locations on your island',
      'Dress in the national colors of aquamarine, gold, and black',
      'Attend cultural events and Junkanoo rushouts in your community',
      'Plan a beach day with family to enjoy the July weather',
    ],
    fr: [
      'Vérifier le programme de la cérémonie officielle du Jour de l\'Indépendance et du défilé',
      'Trouver les meilleurs endroits pour voir les feux d\'artifice sur votre île',
      'S\'habiller aux couleurs nationales aquamarine, or et noir',
      'Assister aux événements culturels et sorties Junkanoo dans votre communauté',
      'Planifier une journée à la plage en famille pour profiter du temps de juillet',
    ],
    es: [
      'Consultar el horario de la ceremonia oficial del Día de la Independencia y el desfile',
      'Encontrar los mejores lugares para ver los fuegos artificiales en su isla',
      'Vestir los colores nacionales aguamarina, dorado y negro',
      'Asistir a eventos culturales y salidas de Junkanoo en su comunidad',
      'Planificar un día de playa en familia para disfrutar del clima de julio',
    ],
  },

  relatedHolidays: ['bs_emancipation-day', 'bs_junkanoo', 'bb_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Bahamas — July 10 Countdown & Guide',
      descriptionTemplate: 'When is Bahamas Independence Day {year}? Live countdown to July 10, history, traditions, and celebration guide.',
      keywords: ['Bahamas Independence Day', 'July 10 Bahamas', 'Bahamas independence 1973', 'Bahamas holiday', 'Independence Day countdown'],
    },
    fr: {
      titleTemplate: "Jour de l'Indépendance {year} Bahamas — Compte à rebours du 10 juillet et guide",
      descriptionTemplate: "Quand est le Jour de l'Indépendance des Bahamas {year} ? Compte à rebours jusqu'au 10 juillet, histoire, traditions et guide de célébration.",
      keywords: ["Jour de l'Indépendance Bahamas", '10 juillet Bahamas', 'indépendance Bahamas 1973', 'jour férié Bahamas', "compte à rebours Indépendance"],
    },
    es: {
      titleTemplate: 'Día de la Independencia {year} Bahamas — Cuenta regresiva del 10 de julio y guía',
      descriptionTemplate: '¿Cuándo es el Día de la Independencia de las Bahamas {year}? Cuenta regresiva hasta el 10 de julio, historia, tradiciones y guía de celebración.',
      keywords: ['Día de la Independencia Bahamas', '10 de julio Bahamas', 'independencia Bahamas 1973', 'feriado Bahamas', 'cuenta regresiva Independencia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Bahamas Independence Day {year}?', fr: "Quand est le Jour de l'Indépendance des Bahamas {year} ?", es: '¿Cuándo es el Día de la Independencia de las Bahamas {year}?' },
      answer: {
        en: 'Bahamas Independence Day {year} is on {date} ({dayOfWeek}). It is always celebrated on July 10.',
        fr: "Le Jour de l'Indépendance des Bahamas {year} est le {date} ({dayOfWeek}). Il est toujours célébré le 10 juillet.",
        es: 'El Día de la Independencia de las Bahamas {year} es el {date} ({dayOfWeek}). Siempre se celebra el 10 de julio.',
      },
    },
    {
      question: { en: 'When did the Bahamas gain independence?', fr: 'Quand les Bahamas ont-elles obtenu leur indépendance ?', es: '¿Cuándo obtuvieron su independencia las Bahamas?' },
      answer: {
        en: 'The Bahamas gained independence from the United Kingdom on July 10, 1973. Sir Lynden Pindling became the first Prime Minister of the independent nation.',
        fr: 'Les Bahamas ont obtenu leur indépendance du Royaume-Uni le 10 juillet 1973. Sir Lynden Pindling est devenu le premier Premier ministre de la nation indépendante.',
        es: 'Las Bahamas obtuvieron su independencia del Reino Unido el 10 de julio de 1973. Sir Lynden Pindling se convirtió en el primer Primer Ministro de la nación independiente.',
      },
    },
    {
      question: { en: 'Is the Bahamas still part of the Commonwealth?', fr: 'Les Bahamas font-elles toujours partie du Commonwealth ?', es: '¿Las Bahamas siguen siendo parte de la Mancomunidad?' },
      answer: {
        en: 'Yes, the Bahamas remains a member of the Commonwealth of Nations and a constitutional monarchy with the British monarch as head of state, represented locally by a Governor-General.',
        fr: 'Oui, les Bahamas restent membres du Commonwealth des Nations et une monarchie constitutionnelle avec le monarque britannique comme chef d\'État, représenté localement par un Gouverneur général.',
        es: 'Sí, las Bahamas sigue siendo miembro de la Mancomunidad de Naciones y una monarquía constitucional con el monarca británico como jefe de estado, representado localmente por un Gobernador General.',
      },
    },
    {
      question: { en: 'How is Independence Day celebrated in the Bahamas?', fr: "Comment le Jour de l'Indépendance est-il célébré aux Bahamas ?", es: '¿Cómo se celebra el Día de la Independencia en las Bahamas?' },
      answer: {
        en: 'Independence Day is celebrated with a flag-raising ceremony, parades, Junkanoo rushouts, cultural performances, fireworks, and community celebrations across the islands. Many Bahamians wear the national colors of aquamarine, gold, and black.',
        fr: "Le Jour de l'Indépendance est célébré par une cérémonie de lever du drapeau, des défilés, des sorties Junkanoo, des spectacles culturels, des feux d'artifice et des célébrations communautaires à travers les îles. De nombreux Bahamiens portent les couleurs nationales aquamarine, or et noir.",
        es: 'El Día de la Independencia se celebra con una ceremonia de izado de bandera, desfiles, salidas de Junkanoo, actuaciones culturales, fuegos artificiales y celebraciones comunitarias en todas las islas. Muchos bahamenses visten los colores nacionales aguamarina, dorado y negro.',
      },
    },
  ],

  colorTheme: 'aqua-gold-black',
  icon: '🇧🇸',
};

// ---------------------------------------------------------------------------
// Emancipation Day — 1st Monday of August
// ---------------------------------------------------------------------------

const emancipationDay: HolidayData = {
  id: 'bs_emancipation-day',
  countryCode: 'bs',
  slugs: { en: 'emancipation-day', fr: 'jour-de-l-emancipation', es: 'dia-de-la-emancipacion' },
  names: { en: 'Emancipation Day', fr: "Jour de l'Émancipation", es: 'Día de la Emancipación' },

  dateType: 'calculated',
  calculateDate: (year: number) => nthWeekday(year, 8, 1, 1),

  descriptions: {
    en: 'Emancipation Day in the Bahamas celebrates the abolition of slavery, observed on the first Monday of August. It is a day of cultural events, historical remembrance, and celebrations honoring the resilience and heritage of the Bahamian people.',
    fr: "Le Jour de l'Émancipation aux Bahamas célèbre l'abolition de l'esclavage, observé le premier lundi d'août. C'est une journée d'événements culturels, de souvenir historique et de célébrations honorant la résilience et le patrimoine du peuple bahamien.",
    es: 'El Día de la Emancipación en las Bahamas celebra la abolición de la esclavitud, observado el primer lunes de agosto. Es un día de eventos culturales, recuerdo histórico y celebraciones que honran la resiliencia y el patrimonio del pueblo bahamense.',
  },

  history: {
    en: 'Slavery was abolished throughout the British Empire under the Slavery Abolition Act of 1833, with full emancipation taking effect on August 1, 1838, after a transitional apprenticeship period. In the Bahamas, the enslaved population worked primarily in salt production, cotton cultivation, and domestic service.\n\nThe history of slavery in the Bahamas differs from larger Caribbean sugar colonies. Many enslaved people in the Bahamas lived on smaller islands with fewer large plantations, but they still endured the same brutal system of forced labor and dehumanization.\n\nEmancipation Day was established as a public holiday to honor the memory of those who suffered under slavery and to celebrate the freedom that was won. The day serves as an important reminder of the African roots of Bahamian culture and the ongoing journey toward equality and justice.',
    fr: "L'esclavage a été aboli dans tout l'Empire britannique en vertu de la loi sur l'abolition de l'esclavage de 1833, l'émancipation complète prenant effet le 1er août 1838, après une période transitoire d'apprentissage. Aux Bahamas, la population réduite en esclavage travaillait principalement dans la production de sel, la culture du coton et le service domestique.\n\nL'histoire de l'esclavage aux Bahamas diffère de celle des plus grandes colonies sucrières des Caraïbes. De nombreux esclaves aux Bahamas vivaient sur de plus petites îles avec moins de grandes plantations, mais ils ont tout de même enduré le même système brutal de travail forcé et de déshumanisation.\n\nLe Jour de l'Émancipation a été établi comme jour férié pour honorer la mémoire de ceux qui ont souffert sous l'esclavage et pour célébrer la liberté conquise. La journée sert de rappel important des racines africaines de la culture bahamienne et du cheminement continu vers l'égalité et la justice.",
    es: 'La esclavitud fue abolida en todo el Imperio Británico bajo la Ley de Abolición de la Esclavitud de 1833, con la emancipación completa entrando en vigor el 1 de agosto de 1838, después de un período transitorio de aprendizaje. En las Bahamas, la población esclavizada trabajaba principalmente en la producción de sal, el cultivo de algodón y el servicio doméstico.\n\nLa historia de la esclavitud en las Bahamas difiere de las colonias azucareras más grandes del Caribe. Muchas personas esclavizadas en las Bahamas vivían en islas más pequeñas con menos plantaciones grandes, pero aún así soportaron el mismo sistema brutal de trabajo forzado y deshumanización.\n\nEl Día de la Emancipación fue establecido como feriado público para honrar la memoria de quienes sufrieron bajo la esclavitud y para celebrar la libertad conquistada. El día sirve como un recordatorio importante de las raíces africanas de la cultura bahamense y el camino continuo hacia la igualdad y la justicia.',
  },

  traditions: {
    en: [
      'Attending dawn ceremonies and memorial services',
      'Participating in cultural exhibitions highlighting African heritage',
      'Enjoying traditional Bahamian music, Junkanoo rushouts, and dance performances',
      'Visiting historical sites associated with slavery and emancipation',
      'Attending community feasts with traditional Bahamian dishes',
      'Educational programmes and lectures on the history of slavery',
      'Wearing African-inspired clothing and accessories',
    ],
    fr: [
      'Participation aux cérémonies de l\'aube et aux services commémoratifs',
      'Participation à des expositions culturelles mettant en lumière l\'héritage africain',
      'Appréciation de la musique traditionnelle bahamienne, des sorties Junkanoo et des spectacles de danse',
      'Visite de sites historiques associés à l\'esclavage et à l\'émancipation',
      'Participation à des festins communautaires avec des plats traditionnels bahamiens',
      'Programmes éducatifs et conférences sur l\'histoire de l\'esclavage',
      'Port de vêtements et accessoires d\'inspiration africaine',
    ],
    es: [
      'Asistencia a ceremonias al amanecer y servicios conmemorativos',
      'Participación en exposiciones culturales destacando la herencia africana',
      'Disfrute de música tradicional bahamense, salidas de Junkanoo y espectáculos de danza',
      'Visita a sitios históricos asociados con la esclavitud y la emancipación',
      'Asistencia a festines comunitarios con platos tradicionales bahamenses',
      'Programas educativos y conferencias sobre la historia de la esclavitud',
      'Uso de ropa y accesorios de inspiración africana',
    ],
  },

  funFacts: {
    en: [
      'The Bahamas was the first landfall of Christopher Columbus in 1492, and the indigenous Lucayan people were the first to be enslaved by Europeans in the New World.',
      'Many enslaved people in the Bahamas came from the American South after the American Revolution, brought by British Loyalists.',
      'The Bahamas had a unique "wrecking" economy where enslaved people salvaged goods from shipwrecks on the shallow reefs.',
      'After emancipation, many freed Bahamians became independent farmers, fishermen, and sponge divers.',
      'Emancipation Day is also celebrated across the Caribbean, though the specific date varies by country.',
    ],
    fr: [
      'Les Bahamas furent la première escale de Christophe Colomb en 1492, et les Lucayens autochtones furent les premiers à être réduits en esclavage par les Européens dans le Nouveau Monde.',
      'De nombreux esclaves aux Bahamas sont venus du sud des États-Unis après la Révolution américaine, amenés par des loyalistes britanniques.',
      'Les Bahamas avaient une économie de « naufrage » unique où les personnes réduites en esclavage récupéraient des marchandises des navires naufragés sur les récifs peu profonds.',
      'Après l\'émancipation, de nombreux Bahamiens libérés sont devenus des agriculteurs, pêcheurs et plongeurs d\'éponges indépendants.',
      'Le Jour de l\'Émancipation est également célébré dans toutes les Caraïbes, bien que la date spécifique varie selon les pays.',
    ],
    es: [
      'Las Bahamas fue la primera escala de Cristóbal Colón en 1492, y los lucayos indígenas fueron los primeros en ser esclavizados por los europeos en el Nuevo Mundo.',
      'Muchas personas esclavizadas en las Bahamas vinieron del sur de Estados Unidos después de la Revolución Americana, traídas por leales británicos.',
      'Las Bahamas tenían una economía de "naufragios" única donde las personas esclavizadas rescataban mercancías de naufragios en los arrecifes poco profundos.',
      'Después de la emancipación, muchos bahamenses liberados se convirtieron en agricultores, pescadores y buzos de esponjas independientes.',
      'El Día de la Emancipación también se celebra en todo el Caribe, aunque la fecha específica varía según el país.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the schedule for dawn ceremonies and cultural events',
      'Plan visits to historical sites related to slavery and emancipation',
      'Attend lectures and exhibitions on Bahamian history',
      'Support local artisans and cultural organizations',
      'Participate in community celebrations and traditional feasts',
    ],
    fr: [
      'Vérifier le programme des cérémonies de l\'aube et des événements culturels',
      'Prévoir des visites de sites historiques liés à l\'esclavage et à l\'émancipation',
      'Assister à des conférences et expositions sur l\'histoire bahamienne',
      'Soutenir les artisans locaux et les organisations culturelles',
      'Participer aux célébrations communautaires et festins traditionnels',
    ],
    es: [
      'Consultar el horario de las ceremonias al amanecer y eventos culturales',
      'Planificar visitas a sitios históricos relacionados con la esclavitud y la emancipación',
      'Asistir a conferencias y exposiciones sobre la historia bahamense',
      'Apoyar a los artesanos locales y organizaciones culturales',
      'Participar en celebraciones comunitarias y festines tradicionales',
    ],
  },

  relatedHolidays: ['bs_independence-day', 'bs_fox-hill-day', 'bb_emancipation-day'],

  seo: {
    en: {
      titleTemplate: 'Emancipation Day {year} Bahamas — Countdown & History',
      descriptionTemplate: 'When is Emancipation Day {year} in the Bahamas? Live countdown, history of abolition, and cultural celebrations.',
      keywords: ['Emancipation Day Bahamas', 'August holiday Bahamas', 'abolition slavery Bahamas', 'Bahamas public holiday', 'Emancipation Day countdown'],
    },
    fr: {
      titleTemplate: "Jour de l'Émancipation {year} Bahamas — Compte à rebours et histoire",
      descriptionTemplate: "Quand est le Jour de l'Émancipation {year} aux Bahamas ? Compte à rebours, histoire de l'abolition et célébrations culturelles.",
      keywords: ["Jour de l'Émancipation Bahamas", "jour férié août Bahamas", "abolition esclavage Bahamas", "jour férié Bahamas", "compte à rebours Émancipation"],
    },
    es: {
      titleTemplate: 'Día de la Emancipación {year} Bahamas — Cuenta regresiva e historia',
      descriptionTemplate: '¿Cuándo es el Día de la Emancipación {year} en las Bahamas? Cuenta regresiva, historia de la abolición y celebraciones culturales.',
      keywords: ['Día de la Emancipación Bahamas', 'feriado agosto Bahamas', 'abolición esclavitud Bahamas', 'feriado público Bahamas', 'cuenta regresiva Emancipación'],
    },
  },

  faq: [
    {
      question: { en: 'When is Emancipation Day {year} in the Bahamas?', fr: "Quand est le Jour de l'Émancipation {year} aux Bahamas ?", es: '¿Cuándo es el Día de la Emancipación {year} en las Bahamas?' },
      answer: {
        en: 'Emancipation Day {year} in the Bahamas falls on {date} ({dayOfWeek}). It is celebrated on the first Monday of August each year.',
        fr: "Le Jour de l'Émancipation {year} aux Bahamas tombe le {date} ({dayOfWeek}). Il est célébré le premier lundi d'août chaque année.",
        es: 'El Día de la Emancipación {year} en las Bahamas cae el {date} ({dayOfWeek}). Se celebra el primer lunes de agosto cada año.',
      },
    },
    {
      question: { en: 'What does Emancipation Day celebrate?', fr: "Que célèbre le Jour de l'Émancipation ?", es: '¿Qué celebra el Día de la Emancipación?' },
      answer: {
        en: 'Emancipation Day celebrates the abolition of slavery throughout the British Empire, which became fully effective on August 1, 1838, following the Slavery Abolition Act of 1833.',
        fr: "Le Jour de l'Émancipation célèbre l'abolition de l'esclavage dans tout l'Empire britannique, devenue pleinement effective le 1er août 1838, suite à la loi sur l'abolition de l'esclavage de 1833.",
        es: 'El Día de la Emancipación celebra la abolición de la esclavitud en todo el Imperio Británico, que se hizo plenamente efectiva el 1 de agosto de 1838, tras la Ley de Abolición de la Esclavitud de 1833.',
      },
    },
    {
      question: { en: 'Is Emancipation Day a public holiday in the Bahamas?', fr: "Le Jour de l'Émancipation est-il un jour férié aux Bahamas ?", es: '¿Es el Día de la Emancipación un feriado público en las Bahamas?' },
      answer: {
        en: 'Yes, Emancipation Day is a public holiday in the Bahamas, observed on the first Monday of August.',
        fr: "Oui, le Jour de l'Émancipation est un jour férié aux Bahamas, observé le premier lundi d'août.",
        es: 'Sí, el Día de la Emancipación es un feriado público en las Bahamas, observado el primer lunes de agosto.',
      },
    },
    {
      question: { en: 'What is the connection between Emancipation Day and Fox Hill Day?', fr: 'Quel est le lien entre le Jour de l\'Émancipation et le Jour de Fox Hill ?', es: '¿Cuál es la conexión entre el Día de la Emancipación y el Día de Fox Hill?' },
      answer: {
        en: 'Fox Hill Day, celebrated on the second Tuesday of August, is a local celebration in the Fox Hill community of Nassau. It marks the delayed news of emancipation reaching the Fox Hill settlement, where formerly enslaved people did not learn of their freedom until days after the official date.',
        fr: 'Le Jour de Fox Hill, célébré le deuxième mardi d\'août, est une célébration locale dans la communauté de Fox Hill à Nassau. Il marque le retard de l\'annonce de l\'émancipation dans la communauté de Fox Hill, où les personnes anciennement réduites en esclavage n\'ont appris leur liberté que quelques jours après la date officielle.',
        es: 'El Día de Fox Hill, celebrado el segundo martes de agosto, es una celebración local en la comunidad de Fox Hill en Nassau. Marca el retraso de la noticia de la emancipación en llegar al asentamiento de Fox Hill, donde las personas anteriormente esclavizadas no supieron de su libertad hasta días después de la fecha oficial.',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '✊',
};

// ---------------------------------------------------------------------------
// Fox Hill Day — 2nd Tuesday of August
// ---------------------------------------------------------------------------

const foxHillDay: HolidayData = {
  id: 'bs_fox-hill-day',
  countryCode: 'bs',
  slugs: { en: 'fox-hill-day', fr: 'jour-de-fox-hill', es: 'dia-de-fox-hill' },
  names: { en: 'Fox Hill Day', fr: 'Jour de Fox Hill', es: 'Día de Fox Hill' },

  dateType: 'calculated',
  calculateDate: (year: number) => nthWeekday(year, 8, 2, 2),

  descriptions: {
    en: 'Fox Hill Day, celebrated on the second Tuesday of August, is a unique community festival in Fox Hill, Nassau. It marks the late emancipation celebration of the Fox Hill settlement, where news of freedom arrived days after the official emancipation date.',
    fr: "Le Jour de Fox Hill, célébré le deuxième mardi d'août, est un festival communautaire unique à Fox Hill, Nassau. Il marque la célébration tardive de l'émancipation dans la communauté de Fox Hill, où la nouvelle de la liberté est arrivée quelques jours après la date officielle d'émancipation.",
    es: 'El Día de Fox Hill, celebrado el segundo martes de agosto, es un festival comunitario único en Fox Hill, Nassau. Marca la celebración tardía de la emancipación del asentamiento de Fox Hill, donde la noticia de la libertad llegó días después de la fecha oficial de emancipación.',
  },

  history: {
    en: 'Fox Hill Day has its origins in the delayed announcement of emancipation reaching the Fox Hill community in eastern Nassau. When slavery was officially abolished on August 1, 1838, news traveled slowly across the islands. The residents of Fox Hill, a settlement originally established by freed Africans, did not receive word of their freedom until several days later.\n\nRather than combining their celebration with the rest of the island, the Fox Hill community chose to celebrate on the day they actually learned of their freedom. This tradition has been maintained for nearly two centuries, making Fox Hill Day one of the most distinctive celebrations in the Bahamas.\n\nToday, Fox Hill Day has evolved into a major community festival that attracts visitors from across the Bahamas. It features food stalls, music, dancing, games, and a strong sense of community pride that reflects the resilient spirit of the Fox Hill people.',
    fr: "Le Jour de Fox Hill tire ses origines du retard de l'annonce de l'émancipation dans la communauté de Fox Hill, à l'est de Nassau. Lorsque l'esclavage a été officiellement aboli le 1er août 1838, les nouvelles voyageaient lentement à travers les îles. Les résidents de Fox Hill, un établissement fondé à l'origine par des Africains libérés, n'ont reçu la nouvelle de leur liberté que plusieurs jours plus tard.\n\nPlutôt que de combiner leur célébration avec le reste de l'île, la communauté de Fox Hill a choisi de célébrer le jour où elle a effectivement appris sa liberté. Cette tradition est maintenue depuis près de deux siècles, faisant du Jour de Fox Hill l'une des célébrations les plus distinctives des Bahamas.\n\nAujourd'hui, le Jour de Fox Hill est devenu un grand festival communautaire qui attire des visiteurs de toutes les Bahamas. Il comprend des stands de nourriture, de la musique, de la danse, des jeux et un fort sentiment de fierté communautaire qui reflète l'esprit résilient du peuple de Fox Hill.",
    es: 'El Día de Fox Hill tiene sus orígenes en el retraso del anuncio de la emancipación en la comunidad de Fox Hill, al este de Nassau. Cuando la esclavitud fue oficialmente abolida el 1 de agosto de 1838, las noticias viajaban lentamente a través de las islas. Los residentes de Fox Hill, un asentamiento originalmente establecido por africanos liberados, no recibieron la noticia de su libertad hasta varios días después.\n\nEn lugar de combinar su celebración con el resto de la isla, la comunidad de Fox Hill eligió celebrar el día en que realmente supieron de su libertad. Esta tradición se ha mantenido durante casi dos siglos, convirtiendo al Día de Fox Hill en una de las celebraciones más distintivas de las Bahamas.\n\nHoy, el Día de Fox Hill ha evolucionado hasta convertirse en un gran festival comunitario que atrae visitantes de todas las Bahamas. Presenta puestos de comida, música, baile, juegos y un fuerte sentido de orgullo comunitario que refleja el espíritu resiliente del pueblo de Fox Hill.',
  },

  traditions: {
    en: [
      'Attending the Fox Hill Day community festival in eastern Nassau',
      'Enjoying traditional Bahamian food including conch salad, cracked conch, and peas and rice',
      'Listening to live rake-and-scrape music and Junkanoo performances',
      'Participating in community games and competitions',
      'Visiting the Fox Hill community and learning about its unique history',
      'Enjoying coconut water, sky juice, and other local beverages',
      'Dancing in the streets with community members and visitors',
    ],
    fr: [
      'Participation au festival communautaire du Jour de Fox Hill dans l\'est de Nassau',
      'Dégustation de cuisine traditionnelle bahamienne comme la salade de conque, la conque frite et le riz aux pois',
      'Écoute de musique rake-and-scrape en direct et de spectacles Junkanoo',
      'Participation à des jeux et compétitions communautaires',
      'Visite de la communauté de Fox Hill et découverte de son histoire unique',
      'Dégustation d\'eau de coco, de sky juice et d\'autres boissons locales',
      'Danse dans les rues avec les membres de la communauté et les visiteurs',
    ],
    es: [
      'Asistencia al festival comunitario del Día de Fox Hill en el este de Nassau',
      'Disfrutar de comida tradicional bahamense como ensalada de concha, concha frita y arroz con guisantes',
      'Escuchar música rake-and-scrape en vivo y actuaciones de Junkanoo',
      'Participar en juegos y competiciones comunitarias',
      'Visitar la comunidad de Fox Hill y aprender sobre su historia única',
      'Disfrutar de agua de coco, sky juice y otras bebidas locales',
      'Bailar en las calles con miembros de la comunidad y visitantes',
    ],
  },

  funFacts: {
    en: [
      'Fox Hill Day exists because news of emancipation reached the community several days after the official date — they celebrate when they actually learned they were free.',
      'Fox Hill was originally known as "Sandilands Village" and was one of the first settlements of freed Africans in the Bahamas.',
      'Sky juice, a popular Fox Hill Day drink, is made from coconut water and gin, served over shaved ice.',
      'Fox Hill is home to the Fox Hill prison (now HM Prison), one of the oldest institutions in Nassau.',
      'The Fox Hill community maintains strong cultural traditions, including rake-and-scrape music played with saws, drums, and accordion.',
    ],
    fr: [
      'Le Jour de Fox Hill existe parce que la nouvelle de l\'émancipation est arrivée dans la communauté plusieurs jours après la date officielle — ils célèbrent le jour où ils ont réellement appris qu\'ils étaient libres.',
      'Fox Hill était à l\'origine connu sous le nom de « Village de Sandilands » et était l\'un des premiers établissements d\'Africains libérés aux Bahamas.',
      'Le sky juice, une boisson populaire du Jour de Fox Hill, est fait d\'eau de coco et de gin, servi avec de la glace pilée.',
      'Fox Hill abrite la prison de Fox Hill (aujourd\'hui la prison de Sa Majesté), l\'une des plus anciennes institutions de Nassau.',
      'La communauté de Fox Hill maintient de fortes traditions culturelles, dont la musique rake-and-scrape jouée avec des scies, des tambours et un accordéon.',
    ],
    es: [
      'El Día de Fox Hill existe porque la noticia de la emancipación llegó a la comunidad varios días después de la fecha oficial — celebran cuando realmente supieron que eran libres.',
      'Fox Hill era originalmente conocido como "Aldea de Sandilands" y fue uno de los primeros asentamientos de africanos liberados en las Bahamas.',
      'El sky juice, una bebida popular del Día de Fox Hill, se hace con agua de coco y ginebra, servido con hielo raspado.',
      'Fox Hill alberga la prisión de Fox Hill (ahora la Prisión de Su Majestad), una de las instituciones más antiguas de Nassau.',
      'La comunidad de Fox Hill mantiene fuertes tradiciones culturales, incluyendo música rake-and-scrape tocada con sierras, tambores y acordeón.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan transportation to Fox Hill in eastern New Providence',
      'Arrive early to enjoy all the food stalls and community activities',
      'Try traditional Bahamian dishes like conch salad and cracked conch',
      'Bring cash as many vendors may not accept cards',
      'Learn about the unique history of the Fox Hill community before visiting',
    ],
    fr: [
      'Prévoir le transport vers Fox Hill dans l\'est de New Providence',
      'Arriver tôt pour profiter de tous les stands de nourriture et activités communautaires',
      'Goûter les plats traditionnels bahamiens comme la salade de conque et la conque frite',
      'Apporter de l\'argent liquide car de nombreux vendeurs peuvent ne pas accepter les cartes',
      'Se renseigner sur l\'histoire unique de la communauté de Fox Hill avant de visiter',
    ],
    es: [
      'Planificar el transporte a Fox Hill en el este de Nueva Providencia',
      'Llegar temprano para disfrutar de todos los puestos de comida y actividades comunitarias',
      'Probar los platos tradicionales bahamenses como la ensalada de concha y la concha frita',
      'Llevar efectivo ya que muchos vendedores pueden no aceptar tarjetas',
      'Aprender sobre la historia única de la comunidad de Fox Hill antes de visitar',
    ],
  },

  relatedHolidays: ['bs_emancipation-day', 'bs_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Fox Hill Day {year} Bahamas — Countdown & Festival Guide',
      descriptionTemplate: 'When is Fox Hill Day {year}? Live countdown, history of the Fox Hill community, and festival guide for the Bahamas.',
      keywords: ['Fox Hill Day', 'Fox Hill Bahamas', 'Nassau festival', 'Bahamas emancipation', 'Fox Hill Day countdown'],
    },
    fr: {
      titleTemplate: 'Jour de Fox Hill {year} Bahamas — Compte à rebours et guide du festival',
      descriptionTemplate: 'Quand est le Jour de Fox Hill {year} ? Compte à rebours, histoire de la communauté de Fox Hill et guide du festival aux Bahamas.',
      keywords: ['Jour de Fox Hill', 'Fox Hill Bahamas', 'festival Nassau', 'émancipation Bahamas', 'compte à rebours Fox Hill'],
    },
    es: {
      titleTemplate: 'Día de Fox Hill {year} Bahamas — Cuenta regresiva y guía del festival',
      descriptionTemplate: '¿Cuándo es el Día de Fox Hill {year}? Cuenta regresiva, historia de la comunidad de Fox Hill y guía del festival en las Bahamas.',
      keywords: ['Día de Fox Hill', 'Fox Hill Bahamas', 'festival Nassau', 'emancipación Bahamas', 'cuenta regresiva Fox Hill'],
    },
  },

  faq: [
    {
      question: { en: 'When is Fox Hill Day {year}?', fr: 'Quand est le Jour de Fox Hill {year} ?', es: '¿Cuándo es el Día de Fox Hill {year}?' },
      answer: {
        en: 'Fox Hill Day {year} falls on {date} ({dayOfWeek}). It is celebrated on the second Tuesday of August each year.',
        fr: 'Le Jour de Fox Hill {year} tombe le {date} ({dayOfWeek}). Il est célébré le deuxième mardi d\'août chaque année.',
        es: 'El Día de Fox Hill {year} cae el {date} ({dayOfWeek}). Se celebra el segundo martes de agosto cada año.',
      },
    },
    {
      question: { en: 'Why is Fox Hill Day celebrated separately from Emancipation Day?', fr: 'Pourquoi le Jour de Fox Hill est-il célébré séparément du Jour de l\'Émancipation ?', es: '¿Por qué el Día de Fox Hill se celebra por separado del Día de la Emancipación?' },
      answer: {
        en: 'Fox Hill Day commemorates the delayed arrival of emancipation news to the Fox Hill community. When slavery was abolished in 1838, residents of Fox Hill did not learn of their freedom until days later, so they celebrate on the day they actually received the news.',
        fr: 'Le Jour de Fox Hill commémore l\'arrivée tardive de la nouvelle de l\'émancipation dans la communauté de Fox Hill. Lorsque l\'esclavage a été aboli en 1838, les résidents de Fox Hill n\'ont appris leur liberté que quelques jours plus tard, ils célèbrent donc le jour où ils ont effectivement reçu la nouvelle.',
        es: 'El Día de Fox Hill conmemora la llegada tardía de la noticia de la emancipación a la comunidad de Fox Hill. Cuando la esclavitud fue abolida en 1838, los residentes de Fox Hill no supieron de su libertad hasta días después, por lo que celebran el día en que realmente recibieron la noticia.',
      },
    },
    {
      question: { en: 'Where is Fox Hill?', fr: 'Où se trouve Fox Hill ?', es: '¿Dónde está Fox Hill?' },
      answer: {
        en: 'Fox Hill is a historic community located in eastern New Providence, Nassau. Originally known as Sandilands Village, it was one of the first settlements established by freed Africans in the Bahamas.',
        fr: 'Fox Hill est une communauté historique située dans l\'est de New Providence, Nassau. Anciennement connu sous le nom de Village de Sandilands, c\'était l\'un des premiers établissements fondés par des Africains libérés aux Bahamas.',
        es: 'Fox Hill es una comunidad histórica ubicada en el este de Nueva Providencia, Nassau. Originalmente conocida como Aldea de Sandilands, fue uno de los primeros asentamientos establecidos por africanos liberados en las Bahamas.',
      },
    },
    {
      question: { en: 'Is Fox Hill Day a public holiday?', fr: 'Le Jour de Fox Hill est-il un jour férié ?', es: '¿Es el Día de Fox Hill un feriado público?' },
      answer: {
        en: 'Fox Hill Day is recognized as a public holiday in the Bahamas. While it originated as a local community celebration, it has grown into a nationally recognized event that attracts visitors from across the islands.',
        fr: 'Le Jour de Fox Hill est reconnu comme jour férié aux Bahamas. Bien qu\'il soit né comme une célébration communautaire locale, il est devenu un événement reconnu à l\'échelle nationale qui attire des visiteurs de toutes les îles.',
        es: 'El Día de Fox Hill es reconocido como feriado público en las Bahamas. Aunque se originó como una celebración comunitaria local, se ha convertido en un evento reconocido a nivel nacional que atrae visitantes de todas las islas.',
      },
    },
  ],

  colorTheme: 'blue-gold',
  icon: '🎉',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'bs_christmas',
  countryCode: 'bs',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noël', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 in the Bahamas combines Caribbean warmth with beloved traditions. The holiday is closely tied to the Junkanoo Boxing Day parade on December 26, making the Christmas season a festive extravaganza of family, food, and cultural celebration.',
    fr: "Le jour de Noël, le 25 décembre aux Bahamas, combine la chaleur caribéenne avec des traditions bien-aimées. La fête est étroitement liée au défilé Junkanoo du lendemain de Noël le 26 décembre, faisant de la saison de Noël une extravagance festive de famille, de nourriture et de célébration culturelle.",
    es: 'El día de Navidad, el 25 de diciembre en las Bahamas, combina la calidez caribeña con tradiciones queridas. La festividad está estrechamente ligada al desfile de Junkanoo del día después de Navidad el 26 de diciembre, convirtiendo la temporada navideña en una extravaganza festiva de familia, comida y celebración cultural.',
  },

  history: {
    en: 'Christmas in the Bahamas reflects the archipelago\'s British colonial heritage blended with African and Caribbean traditions. The holiday season is inseparable from Junkanoo — the legendary Boxing Day parade on December 26 has its roots in the brief holiday period granted to enslaved Africans during Christmas.\n\nHistorically, the days around Christmas were the only time enslaved people were allowed to leave plantations and celebrate with music, dance, and costumes. This tradition survived slavery and evolved into the modern Junkanoo, making the Christmas-to-New-Year period the most culturally significant time of year in the Bahamas.\n\nToday, Bahamian Christmas celebrations blend church worship, family gatherings, tropical traditions, and preparations for the upcoming Junkanoo parades. The warm December weather allows for beach gatherings and outdoor celebrations that give Bahamian Christmas its distinctive Caribbean character.',
    fr: "Noël aux Bahamas reflète l'héritage colonial britannique de l'archipel mêlé aux traditions africaines et caribéennes. La saison des fêtes est inséparable du Junkanoo — le légendaire défilé du lendemain de Noël le 26 décembre trouve ses racines dans la brève période de vacances accordée aux Africains réduits en esclavage pendant Noël.\n\nHistoriquement, les jours autour de Noël étaient le seul moment où les personnes réduites en esclavage étaient autorisées à quitter les plantations et à célébrer avec de la musique, de la danse et des costumes. Cette tradition a survécu à l'esclavage et a évolué vers le Junkanoo moderne, faisant de la période de Noël au Nouvel An la période la plus culturellement significative de l'année aux Bahamas.\n\nAujourd'hui, les célébrations de Noël bahamiennes mêlent le culte religieux, les réunions familiales, les traditions tropicales et les préparatifs des prochains défilés Junkanoo. Le temps chaud de décembre permet des rassemblements à la plage et des célébrations en plein air qui donnent au Noël bahamien son caractère caribéen distinctif.",
    es: 'La Navidad en las Bahamas refleja la herencia colonial británica del archipiélago mezclada con tradiciones africanas y caribeñas. La temporada festiva es inseparable del Junkanoo — el legendario desfile del día después de Navidad el 26 de diciembre tiene sus raíces en el breve período de vacaciones concedido a los africanos esclavizados durante la Navidad.\n\nHistóricamente, los días alrededor de Navidad eran el único momento en que las personas esclavizadas podían dejar las plantaciones y celebrar con música, baile y disfraces. Esta tradición sobrevivió a la esclavitud y evolucionó al Junkanoo moderno, convirtiendo el período de Navidad a Año Nuevo en el más culturalmente significativo del año en las Bahamas.\n\nHoy, las celebraciones navideñas bahamenses mezclan el culto religioso, reuniones familiares, tradiciones tropicales y preparativos para los próximos desfiles de Junkanoo. El cálido clima de diciembre permite reuniones en la playa y celebraciones al aire libre que dan a la Navidad bahamense su carácter caribeño distintivo.',
  },

  traditions: {
    en: [
      'Attending Christmas morning church services',
      'Preparing and sharing traditional Bahamian Christmas dinner with baked ham, turkey, peas and rice, and macaroni and cheese',
      'Baking rum cake and fruit cake weeks in advance',
      'Decorating homes with tropical flowers, poinsettias, and Christmas lights',
      'Preparing for the Junkanoo Boxing Day parade on December 26',
      'Caroling through neighborhoods on Christmas Eve',
      'Enjoying guava duff and other traditional Bahamian desserts',
    ],
    fr: [
      'Assister aux services religieux du matin de Noël',
      'Préparer et partager le dîner de Noël traditionnel bahamien avec du jambon cuit, de la dinde, du riz aux pois et du macaroni au fromage',
      'Cuire le gâteau au rhum et le gâteau aux fruits des semaines à l\'avance',
      'Décorer les maisons avec des fleurs tropicales, des poinsettias et des lumières de Noël',
      'Se préparer pour le défilé Junkanoo du lendemain de Noël le 26 décembre',
      'Chanter des chants de Noël dans les quartiers la veille de Noël',
      'Déguster le guava duff et d\'autres desserts traditionnels bahamiens',
    ],
    es: [
      'Asistir a los servicios religiosos de la mañana de Navidad',
      'Preparar y compartir la cena de Navidad tradicional bahamense con jamón horneado, pavo, arroz con guisantes y macarrones con queso',
      'Hornear pastel de ron y pastel de frutas semanas antes',
      'Decorar hogares con flores tropicales, poinsettias y luces navideñas',
      'Prepararse para el desfile de Junkanoo del día después de Navidad el 26 de diciembre',
      'Cantar villancicos por los vecindarios en la víspera de Navidad',
      'Disfrutar del guava duff y otros postres tradicionales bahamenses',
    ],
  },

  funFacts: {
    en: [
      'The Junkanoo Boxing Day parade on December 26 means Christmas in the Bahamas is just the warm-up to an even bigger celebration.',
      'Guava duff, a boiled guava dessert served with a butter-rum sauce, is one of the most beloved Bahamian Christmas treats.',
      'Bahamian rum cake is soaked in dark rum for weeks before Christmas, giving it a rich, boozy flavor.',
      'Christmas in the Bahamas features average temperatures around 25°C (77°F), making it a tropical holiday paradise.',
      'Many Bahamians spend Christmas Day helping to put finishing touches on their Junkanoo costumes for the parade the next day.',
    ],
    fr: [
      'Le défilé Junkanoo du lendemain de Noël le 26 décembre signifie que Noël aux Bahamas n\'est que l\'échauffement avant une célébration encore plus grande.',
      'Le guava duff, un dessert à la goyave bouilli servi avec une sauce au beurre et au rhum, est l\'une des gourmandises de Noël les plus appréciées aux Bahamas.',
      'Le gâteau au rhum bahamien est imbibé de rhum brun pendant des semaines avant Noël, lui donnant une saveur riche et alcoolisée.',
      'Noël aux Bahamas présente des températures moyennes d\'environ 25°C, en faisant un paradis tropical pour les fêtes.',
      'De nombreux Bahamiens passent le jour de Noël à mettre les touches finales à leurs costumes Junkanoo pour le défilé du lendemain.',
    ],
    es: [
      'El desfile de Junkanoo del día después de Navidad el 26 de diciembre significa que la Navidad en las Bahamas es solo el calentamiento para una celebración aún más grande.',
      'El guava duff, un postre de guayaba hervido servido con una salsa de mantequilla y ron, es una de las delicias navideñas más queridas de las Bahamas.',
      'El pastel de ron bahamense se empapa en ron oscuro durante semanas antes de Navidad, dándole un sabor rico y alcohólico.',
      'La Navidad en las Bahamas presenta temperaturas promedio de alrededor de 25°C, convirtiéndola en un paraíso tropical festivo.',
      'Muchos bahamenses pasan el día de Navidad ayudando a dar los toques finales a sus disfraces de Junkanoo para el desfile del día siguiente.',
    ],
  },

  planningChecklist: {
    en: [
      'Order baked ham and turkey well in advance from local markets',
      'Prepare rum cake and fruit cake several weeks before Christmas',
      'Plan church attendance for Christmas morning services',
      'Get ready for the Junkanoo Boxing Day parade on December 26',
      'Decorate the home with tropical flowers and festive lights',
    ],
    fr: [
      'Commander le jambon cuit et la dinde bien à l\'avance aux marchés locaux',
      'Préparer le gâteau au rhum et le gâteau aux fruits plusieurs semaines avant Noël',
      'Planifier la participation aux services religieux du matin de Noël',
      'Se préparer pour le défilé Junkanoo du lendemain de Noël le 26 décembre',
      'Décorer la maison avec des fleurs tropicales et des lumières festives',
    ],
    es: [
      'Pedir el jamón horneado y el pavo con mucha antelación en los mercados locales',
      'Preparar el pastel de ron y el pastel de frutas varias semanas antes de Navidad',
      'Planificar la asistencia a los servicios religiosos de la mañana de Navidad',
      'Prepararse para el desfile de Junkanoo del día después de Navidad el 26 de diciembre',
      'Decorar el hogar con flores tropicales y luces festivas',
    ],
  },

  relatedHolidays: ['bs_junkanoo', 'bb_christmas'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} in the Bahamas — Countdown & Traditions',
      descriptionTemplate: 'How many days until Christmas {year} in the Bahamas? Live countdown to December 25, Bahamian Christmas traditions, Junkanoo, and celebration guide.',
      keywords: ['Christmas Bahamas', 'Bahamian Christmas', 'Junkanoo Christmas', 'Caribbean Christmas', 'Christmas countdown Bahamas'],
    },
    fr: {
      titleTemplate: 'Noël {year} aux Bahamas — Compte à rebours et traditions',
      descriptionTemplate: 'Combien de jours avant Noël {year} aux Bahamas ? Compte à rebours jusqu\'au 25 décembre, traditions de Noël bahamiennes, Junkanoo et guide de célébration.',
      keywords: ['Noël Bahamas', 'Noël bahamien', 'Junkanoo Noël', 'Noël caribéen', 'compte à rebours Noël Bahamas'],
    },
    es: {
      titleTemplate: 'Navidad {year} en las Bahamas — Cuenta regresiva y tradiciones',
      descriptionTemplate: '¿Cuántos días faltan para la Navidad {year} en las Bahamas? Cuenta regresiva hasta el 25 de diciembre, tradiciones navideñas bahamenses, Junkanoo y guía de celebración.',
      keywords: ['Navidad Bahamas', 'Navidad bahamense', 'Junkanoo Navidad', 'Navidad caribeña', 'cuenta regresiva Navidad Bahamas'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in the Bahamas?', fr: 'Quand est Noël {year} aux Bahamas ?', es: '¿Cuándo es Navidad {year} en las Bahamas?' },
      answer: {
        en: 'Christmas {year} in the Bahamas is on {date} ({dayOfWeek}). It is always celebrated on December 25.',
        fr: 'Noël {year} aux Bahamas est le {date} ({dayOfWeek}). Il est toujours célébré le 25 décembre.',
        es: 'La Navidad {year} en las Bahamas es el {date} ({dayOfWeek}). Siempre se celebra el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What is the connection between Christmas and Junkanoo?', fr: 'Quel est le lien entre Noël et le Junkanoo ?', es: '¿Cuál es la conexión entre Navidad y el Junkanoo?' },
      answer: {
        en: 'Junkanoo originated from the brief Christmas holiday period given to enslaved Africans. The Boxing Day Junkanoo parade on December 26 is one of the two major Junkanoo events, making the Christmas-to-New Year period the most festive time in the Bahamas.',
        fr: 'Le Junkanoo trouve ses origines dans la brève période de vacances de Noël accordée aux Africains réduits en esclavage. Le défilé Junkanoo du lendemain de Noël le 26 décembre est l\'un des deux grands événements Junkanoo, faisant de la période de Noël au Nouvel An la période la plus festive des Bahamas.',
        es: 'El Junkanoo se originó del breve período de vacaciones navideñas dado a los africanos esclavizados. El desfile de Junkanoo del día después de Navidad el 26 de diciembre es uno de los dos grandes eventos de Junkanoo, convirtiendo el período de Navidad a Año Nuevo en el más festivo de las Bahamas.',
      },
    },
    {
      question: { en: 'What is guava duff?', fr: 'Qu\'est-ce que le guava duff ?', es: '¿Qué es el guava duff?' },
      answer: {
        en: 'Guava duff is a beloved Bahamian dessert traditionally served at Christmas. It is a boiled dough filled with guava fruit, served with a rich butter-rum sauce. It is one of the most distinctive desserts in Bahamian cuisine.',
        fr: 'Le guava duff est un dessert bahamien bien-aimé traditionnellement servi à Noël. C\'est une pâte bouillie garnie de fruit de goyave, servie avec une riche sauce au beurre et au rhum. C\'est l\'un des desserts les plus distinctifs de la cuisine bahamienne.',
        es: 'El guava duff es un postre bahamense muy querido que se sirve tradicionalmente en Navidad. Es una masa hervida rellena de fruta de guayaba, servida con una rica salsa de mantequilla y ron. Es uno de los postres más distintivos de la cocina bahamense.',
      },
    },
    {
      question: { en: 'Is Christmas a public holiday in the Bahamas?', fr: 'Noël est-il un jour férié aux Bahamas ?', es: '¿Es Navidad un feriado público en las Bahamas?' },
      answer: {
        en: 'Yes, both Christmas Day (December 25) and Boxing Day (December 26) are public holidays in the Bahamas. Boxing Day features the famous Junkanoo parade.',
        fr: 'Oui, le jour de Noël (25 décembre) et le lendemain de Noël (26 décembre) sont tous deux des jours fériés aux Bahamas. Le lendemain de Noël présente le célèbre défilé Junkanoo.',
        es: 'Sí, tanto el día de Navidad (25 de diciembre) como el día después de Navidad (26 de diciembre) son feriados públicos en las Bahamas. El día después de Navidad presenta el famoso desfile de Junkanoo.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const bsHolidays: HolidayData[] = [
  junkanoo,
  independenceDay,
  emancipationDay,
  foxHillDay,
  christmas,
];

export default bsHolidays;
