/**
 * Haiti holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getCarnivalTuesday } from './_shared-dates';

// ---------------------------------------------------------------------------
// Independence Day — January 1
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'ht_independence-day',
  countryCode: 'ht',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Ind\u00e9pendance", es: 'D\u00eda de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: 'Independence Day on January 1 celebrates Haiti becoming the first black republic and the first Caribbean nation to gain independence, declaring freedom from France in 1804. It also serves as New Year\'s Day and is the most important national holiday.',
    fr: "Le Jour de l'Ind\u00e9pendance, le 1er janvier, c\u00e9l\u00e8bre Ha\u00efti en tant que premi\u00e8re r\u00e9publique noire et premi\u00e8re nation cara\u00efb\u00e9enne \u00e0 obtenir son ind\u00e9pendance, proclamant sa libert\u00e9 de la France en 1804. C'est aussi le Jour de l'An et la f\u00eate nationale la plus importante.",
    es: 'El D\u00eda de la Independencia, el 1 de enero, celebra que Hait\u00ed se convirti\u00f3 en la primera rep\u00fablica negra y la primera naci\u00f3n caribe\u00f1a en obtener su independencia, declarando su libertad de Francia en 1804. Tambi\u00e9n es el D\u00eda de A\u00f1o Nuevo.',
  },

  history: {
    en: 'On January 1, 1804, Jean-Jacques Dessalines proclaimed Haiti\'s independence at Gona\u00efves, making it the first nation founded by formerly enslaved people. The Haitian Revolution (1791\u20131804) was the only successful large-scale slave revolt in history, defeating Napoleon\'s forces and ending French colonial rule.\n\nThe revolution was inspired by the ideals of the French Revolution and led by legendary figures including Toussaint Louverture and Dessalines. Haiti\'s independence sent shockwaves through the slaveholding Americas and inspired liberation movements across Latin America.\n\nTo this day, January 1 is celebrated with patriotic ceremonies, the traditional soup joumou (pumpkin soup), and public festivities honoring the extraordinary courage of Haiti\'s founders.',
    fr: "Le 1er janvier 1804, Jean-Jacques Dessalines proclama l'ind\u00e9pendance d'Ha\u00efti aux Gona\u00efves, faisant du pays la premi\u00e8re nation fond\u00e9e par d'anciens esclaves. La R\u00e9volution ha\u00eftienne (1791\u20131804) fut la seule r\u00e9volte d'esclaves \u00e0 grande \u00e9chelle ayant r\u00e9ussi dans l'histoire, vainquant les forces de Napol\u00e9on et mettant fin \u00e0 la domination coloniale fran\u00e7aise.\n\nLa r\u00e9volution fut inspir\u00e9e par les id\u00e9aux de la R\u00e9volution fran\u00e7aise et men\u00e9e par des figures l\u00e9gendaires telles que Toussaint Louverture et Dessalines. L'ind\u00e9pendance d'Ha\u00efti envoya des ondes de choc \u00e0 travers les Am\u00e9riques esclavagistes et inspira des mouvements de lib\u00e9ration dans toute l'Am\u00e9rique latine.\n\nAujourd'hui encore, le 1er janvier est c\u00e9l\u00e9br\u00e9 avec des c\u00e9r\u00e9monies patriotiques, la traditionnelle soup joumou (soupe au giraumon) et des festivit\u00e9s publiques honorant le courage extraordinaire des fondateurs d'Ha\u00efti.",
    es: 'El 1 de enero de 1804, Jean-Jacques Dessalines proclam\u00f3 la independencia de Hait\u00ed en Gona\u00efves, convirti\u00e9ndolo en la primera naci\u00f3n fundada por personas anteriormente esclavizadas. La Revoluci\u00f3n Haitiana (1791\u20131804) fue la \u00fanica revuelta de esclavos a gran escala exitosa en la historia, derrotando a las fuerzas de Napole\u00f3n y poniendo fin al dominio colonial franc\u00e9s.\n\nLa revoluci\u00f3n se inspir\u00f3 en los ideales de la Revoluci\u00f3n Francesa y fue liderada por figuras legendarias como Toussaint Louverture y Dessalines. La independencia de Hait\u00ed sacudi\u00f3 las Am\u00e9ricas esclavistas e inspir\u00f3 movimientos de liberaci\u00f3n en toda Am\u00e9rica Latina.\n\nHoy en d\u00eda, el 1 de enero se celebra con ceremonias patri\u00f3ticas, la tradicional soup joumou (sopa de calabaza) y festividades p\u00fablicas que honran el extraordinario coraje de los fundadores de Hait\u00ed.',
  },

  traditions: {
    en: [
      'Eating soup joumou (pumpkin soup) \u2014 a symbol of freedom, once forbidden to the enslaved',
      'Attending patriotic ceremonies and flag-raising events',
      'Gathering with family for a festive meal',
      'Listening to speeches and historical readings at public squares',
      'Wearing the national colors of blue and red',
      'Playing traditional Haitian music including kompa and rara',
      'Visiting churches for special New Year and independence services',
    ],
    fr: [
      'Manger de la soup joumou (soupe au giraumon) \u2014 symbole de libert\u00e9, autrefois interdite aux esclaves',
      'Assister aux c\u00e9r\u00e9monies patriotiques et aux lev\u00e9es de drapeau',
      'Se r\u00e9unir en famille pour un repas festif',
      '\u00c9couter des discours et des lectures historiques sur les places publiques',
      'Porter les couleurs nationales bleu et rouge',
      'Jouer de la musique traditionnelle ha\u00eftienne, dont le kompa et le rara',
      'Visiter les \u00e9glises pour des services sp\u00e9ciaux du Nouvel An et de l\'ind\u00e9pendance',
    ],
    es: [
      'Comer soup joumou (sopa de calabaza) \u2014 s\u00edmbolo de libertad, antes prohibida a los esclavizados',
      'Asistir a ceremonias patri\u00f3ticas y actos de izado de bandera',
      'Reunirse en familia para una comida festiva',
      'Escuchar discursos y lecturas hist\u00f3ricas en plazas p\u00fablicas',
      'Vestir los colores nacionales azul y rojo',
      'Tocar m\u00fasica tradicional haitiana incluyendo kompa y rara',
      'Visitar iglesias para servicios especiales de A\u00f1o Nuevo e independencia',
    ],
  },

  funFacts: {
    en: [
      'Haiti was the first country in the Western Hemisphere to abolish slavery.',
      'Soup joumou was forbidden to enslaved Haitians under French colonial rule \u2014 eating it on January 1 symbolizes freedom.',
      'Haiti\'s independence inspired Sim\u00f3n Bol\u00edvar, who received refuge and support there before liberating South America.',
      'The Haitian Revolution is the only successful slave revolt that led to the founding of a state.',
      'Haiti\'s Declaration of Independence was written by Louis F\u00e9lix Boisrond-Tonnerre and proclaimed at Gona\u00efves.',
    ],
    fr: [
      'Ha\u00efti fut le premier pays de l\'h\u00e9misph\u00e8re occidental \u00e0 abolir l\'esclavage.',
      'La soup joumou \u00e9tait interdite aux esclaves ha\u00eftiens sous le r\u00e9gime colonial fran\u00e7ais \u2014 la manger le 1er janvier symbolise la libert\u00e9.',
      'L\'ind\u00e9pendance d\'Ha\u00efti inspira Sim\u00f3n Bol\u00edvar, qui y trouva refuge et soutien avant de lib\u00e9rer l\'Am\u00e9rique du Sud.',
      'La R\u00e9volution ha\u00eftienne est la seule r\u00e9volte d\'esclaves r\u00e9ussie ayant men\u00e9 \u00e0 la fondation d\'un \u00c9tat.',
      'La D\u00e9claration d\'Ind\u00e9pendance d\'Ha\u00efti fut r\u00e9dig\u00e9e par Louis F\u00e9lix Boisrond-Tonnerre et proclam\u00e9e aux Gona\u00efves.',
    ],
    es: [
      'Hait\u00ed fue el primer pa\u00eds del hemisferio occidental en abolir la esclavitud.',
      'La soup joumou estaba prohibida para los esclavizados haitianos bajo el dominio colonial franc\u00e9s \u2014 comerla el 1 de enero simboliza la libertad.',
      'La independencia de Hait\u00ed inspir\u00f3 a Sim\u00f3n Bol\u00edvar, quien recibi\u00f3 refugio y apoyo all\u00ed antes de liberar Sudam\u00e9rica.',
      'La Revoluci\u00f3n Haitiana es la \u00fanica revuelta de esclavos exitosa que llev\u00f3 a la fundaci\u00f3n de un estado.',
      'La Declaraci\u00f3n de Independencia de Hait\u00ed fue escrita por Louis F\u00e9lix Boisrond-Tonnerre y proclamada en Gona\u00efves.',
    ],
  },

  planningChecklist: {
    en: [
      'Prepare ingredients for soup joumou well in advance \u2014 the traditional recipe takes hours',
      'Attend local Haitian community celebrations and flag-raising ceremonies',
      'Learn about the Haitian Revolution and its global significance',
      'Wear blue and red to honor the national colors',
      'Join family and friends for the traditional New Year\'s Day feast',
    ],
    fr: [
      'Pr\u00e9parer les ingr\u00e9dients de la soup joumou \u00e0 l\'avance \u2014 la recette traditionnelle prend des heures',
      'Assister aux c\u00e9l\u00e9brations de la communaut\u00e9 ha\u00eftienne locale et aux c\u00e9r\u00e9monies de lev\u00e9e du drapeau',
      'Se renseigner sur la R\u00e9volution ha\u00eftienne et son importance mondiale',
      'Porter du bleu et du rouge pour honorer les couleurs nationales',
      'Rejoindre famille et amis pour le festin traditionnel du Jour de l\'An',
    ],
    es: [
      'Preparar los ingredientes para la soup joumou con anticipaci\u00f3n \u2014 la receta tradicional toma horas',
      'Asistir a celebraciones de la comunidad haitiana local y ceremonias de izado de bandera',
      'Aprender sobre la Revoluci\u00f3n Haitiana y su importancia global',
      'Vestir azul y rojo para honrar los colores nacionales',
      'Unirse a familia y amigos para el festejo tradicional de A\u00f1o Nuevo',
    ],
  },

  relatedHolidays: ['ht_ancestors-day', 'ht_flag-day', 'ht_christmas'],

  seo: {
    en: {
      titleTemplate: 'Haiti Independence Day {year} \u2014 Countdown & History',
      descriptionTemplate: 'When is Haiti Independence Day {year}? Live countdown to January 1, the history of the Haitian Revolution, and celebration guide.',
      keywords: ['Haiti Independence Day', 'Haitian Revolution', 'January 1 Haiti', 'soup joumou', 'Haiti holiday countdown'],
    },
    fr: {
      titleTemplate: "Jour de l'Ind\u00e9pendance d'Ha\u00efti {year} \u2014 Compte \u00e0 rebours et histoire",
      descriptionTemplate: "Quand est le Jour de l'Ind\u00e9pendance d'Ha\u00efti {year} ? Compte \u00e0 rebours, histoire de la R\u00e9volution ha\u00eftienne et guide de c\u00e9l\u00e9bration.",
      keywords: ["Jour de l'Ind\u00e9pendance Ha\u00efti", 'R\u00e9volution ha\u00eftienne', '1er janvier Ha\u00efti', 'soup joumou', 'f\u00eate nationale Ha\u00efti'],
    },
    es: {
      titleTemplate: 'D\u00eda de la Independencia de Hait\u00ed {year} \u2014 Cuenta regresiva e historia',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Independencia de Hait\u00ed {year}? Cuenta regresiva, historia de la Revoluci\u00f3n Haitiana y gu\u00eda de celebraci\u00f3n.',
      keywords: ['D\u00eda de la Independencia Hait\u00ed', 'Revoluci\u00f3n Haitiana', '1 de enero Hait\u00ed', 'soup joumou', 'fiesta nacional Hait\u00ed'],
    },
  },

  faq: [
    {
      question: { en: 'When is Haiti Independence Day {year}?', fr: "Quand est le Jour de l'Ind\u00e9pendance d'Ha\u00efti {year} ?", es: '\u00bfCu\u00e1ndo es el D\u00eda de la Independencia de Hait\u00ed {year}?' },
      answer: {
        en: 'Haiti Independence Day {year} is on {date}. It is always January 1, which also serves as New Year\'s Day.',
        fr: "Le Jour de l'Ind\u00e9pendance d'Ha\u00efti {year} est le {date}. C'est toujours le 1er janvier, qui est aussi le Jour de l'An.",
        es: 'El D\u00eda de la Independencia de Hait\u00ed {year} es el {date}. Siempre es el 1 de enero, que tambi\u00e9n es el D\u00eda de A\u00f1o Nuevo.',
      },
    },
    {
      question: { en: 'Why is soup joumou important on Haiti Independence Day?', fr: 'Pourquoi la soup joumou est-elle importante le Jour de l\'Ind\u00e9pendance ?', es: '\u00bfPor qu\u00e9 es importante la soup joumou en el D\u00eda de la Independencia de Hait\u00ed?' },
      answer: {
        en: 'Soup joumou (pumpkin soup) was forbidden to enslaved people during French colonial rule. Eating it on January 1 became a powerful symbol of freedom and resistance after independence in 1804.',
        fr: "La soup joumou (\u00e9tait interdite aux esclaves sous le r\u00e9gime colonial fran\u00e7ais. La manger le 1er janvier est devenu un puissant symbole de libert\u00e9 et de r\u00e9sistance apr\u00e8s l'ind\u00e9pendance de 1804.",
        es: 'La soup joumou (sopa de calabaza) estaba prohibida para los esclavizados durante el dominio colonial franc\u00e9s. Comerla el 1 de enero se convirti\u00f3 en un poderoso s\u00edmbolo de libertad y resistencia despu\u00e9s de la independencia en 1804.',
      },
    },
    {
      question: { en: 'Who declared Haiti\'s independence?', fr: "Qui a d\u00e9clar\u00e9 l'ind\u00e9pendance d'Ha\u00efti ?", es: '\u00bfQui\u00e9n declar\u00f3 la independencia de Hait\u00ed?' },
      answer: {
        en: 'Jean-Jacques Dessalines declared Haiti\'s independence on January 1, 1804 at Gona\u00efves, after leading the final stages of the revolution against French colonial forces.',
        fr: "Jean-Jacques Dessalines d\u00e9clara l'ind\u00e9pendance d'Ha\u00efti le 1er janvier 1804 aux Gona\u00efves, apr\u00e8s avoir men\u00e9 les derni\u00e8res \u00e9tapes de la r\u00e9volution contre les forces coloniales fran\u00e7aises.",
        es: 'Jean-Jacques Dessalines declar\u00f3 la independencia de Hait\u00ed el 1 de enero de 1804 en Gona\u00efves, tras liderar las etapas finales de la revoluci\u00f3n contra las fuerzas coloniales francesas.',
      },
    },
    {
      question: { en: 'How is Haiti Independence Day celebrated?', fr: "Comment c\u00e9l\u00e8bre-t-on le Jour de l'Ind\u00e9pendance d'Ha\u00efti ?", es: '\u00bfC\u00f3mo se celebra el D\u00eda de la Independencia de Hait\u00ed?' },
      answer: {
        en: 'Haitians celebrate with soup joumou, patriotic ceremonies, flag-raising events, family gatherings, traditional music, and speeches honoring the heroes of the revolution.',
        fr: "Les Ha\u00eftiens c\u00e9l\u00e8brent avec la soup joumou, des c\u00e9r\u00e9monies patriotiques, des lev\u00e9es de drapeau, des r\u00e9unions familiales, de la musique traditionnelle et des discours honorant les h\u00e9ros de la r\u00e9volution.",
        es: 'Los haitianos celebran con soup joumou, ceremonias patri\u00f3ticas, actos de izado de bandera, reuniones familiares, m\u00fasica tradicional y discursos que honran a los h\u00e9roes de la revoluci\u00f3n.',
      },
    },
  ],

  colorTheme: 'blue-red',
  icon: '\ud83c\udded\ud83c\uddf9',
};

// ---------------------------------------------------------------------------
// Ancestors' Day — January 2
// ---------------------------------------------------------------------------

const ancestorsDay: HolidayData = {
  id: 'ht_ancestors-day',
  countryCode: 'ht',
  slugs: { en: 'ancestors-day', fr: 'jour-des-aieux', es: 'dia-de-los-ancestros' },
  names: { en: "Ancestors' Day", fr: 'Jour des A\u00efeux', es: 'D\u00eda de los Ancestros' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 2,

  descriptions: {
    en: "Ancestors' Day (Jour des A\u00efeux) on January 2 honors Haiti's founding fathers and the heroes who fought for independence. It is a solemn day of remembrance following the celebrations of Independence Day.",
    fr: "Le Jour des A\u00efeux, le 2 janvier, honore les p\u00e8res fondateurs d'Ha\u00efti et les h\u00e9ros qui ont combattu pour l'ind\u00e9pendance. C'est un jour solennel de comm\u00e9moration suivant les c\u00e9l\u00e9brations du Jour de l'Ind\u00e9pendance.",
    es: 'El D\u00eda de los Ancestros (Jour des A\u00efeux) el 2 de enero honra a los padres fundadores de Hait\u00ed y a los h\u00e9roes que lucharon por la independencia. Es un d\u00eda solemne de conmemoraci\u00f3n tras las celebraciones del D\u00eda de la Independencia.',
  },

  history: {
    en: "Ancestors' Day was established to honor the founding fathers of Haiti, including Toussaint Louverture, Jean-Jacques Dessalines, Henri Christophe, and Alexandre P\u00e9tion. These leaders, along with thousands of unnamed fighters, led the only successful large-scale slave revolution in history.\n\nThe holiday follows Independence Day and serves as a moment of reflection on the sacrifices made during the Haitian Revolution (1791\u20131804). It reminds Haitians that their freedom was won through extraordinary courage and determination.\n\nFamilies continue the celebrations from January 1, visiting memorials and historic sites while sharing stories of the nation's heroes with younger generations.",
    fr: "Le Jour des A\u00efeux a \u00e9t\u00e9 \u00e9tabli pour honorer les p\u00e8res fondateurs d'Ha\u00efti, notamment Toussaint Louverture, Jean-Jacques Dessalines, Henri Christophe et Alexandre P\u00e9tion. Ces dirigeants, ainsi que des milliers de combattants anonymes, ont men\u00e9 la seule r\u00e9volution d'esclaves \u00e0 grande \u00e9chelle r\u00e9ussie de l'histoire.\n\nCe jour f\u00e9ri\u00e9 suit le Jour de l'Ind\u00e9pendance et sert de moment de r\u00e9flexion sur les sacrifices consentis pendant la R\u00e9volution ha\u00eftienne (1791\u20131804). Il rappelle aux Ha\u00eftiens que leur libert\u00e9 a \u00e9t\u00e9 conquise par un courage et une d\u00e9termination extraordinaires.\n\nLes familles poursuivent les c\u00e9l\u00e9brations du 1er janvier, visitent des m\u00e9moriaux et des sites historiques tout en partageant les r\u00e9cits des h\u00e9ros de la nation avec les jeunes g\u00e9n\u00e9rations.",
    es: "El D\u00eda de los Ancestros fue establecido para honrar a los padres fundadores de Hait\u00ed, incluyendo a Toussaint Louverture, Jean-Jacques Dessalines, Henri Christophe y Alexandre P\u00e9tion. Estos l\u00edderes, junto con miles de combatientes an\u00f3nimos, lideraron la \u00fanica revoluci\u00f3n de esclavos a gran escala exitosa en la historia.\n\nEste d\u00eda festivo sigue al D\u00eda de la Independencia y sirve como un momento de reflexi\u00f3n sobre los sacrificios realizados durante la Revoluci\u00f3n Haitiana (1791\u20131804). Les recuerda a los haitianos que su libertad fue ganada con extraordinario coraje y determinaci\u00f3n.\n\nLas familias contin\u00faan las celebraciones del 1 de enero, visitando memoriales y sitios hist\u00f3ricos mientras comparten historias de los h\u00e9roes de la naci\u00f3n con las generaciones m\u00e1s j\u00f3venes.",
  },

  traditions: {
    en: [
      'Visiting monuments and memorials dedicated to national heroes',
      'Sharing stories of the founding fathers with children',
      'Continuing the soup joumou tradition from Independence Day',
      'Attending commemorative events and patriotic gatherings',
      'Listening to speeches honoring Toussaint Louverture, Dessalines, and other revolutionary leaders',
    ],
    fr: [
      'Visiter les monuments et m\u00e9moriaux d\u00e9di\u00e9s aux h\u00e9ros nationaux',
      'Partager les r\u00e9cits des p\u00e8res fondateurs avec les enfants',
      'Poursuivre la tradition de la soup joumou du Jour de l\'Ind\u00e9pendance',
      'Assister \u00e0 des \u00e9v\u00e9nements comm\u00e9moratifs et \u00e0 des rassemblements patriotiques',
      '\u00c9couter des discours honorant Toussaint Louverture, Dessalines et d\'autres dirigeants r\u00e9volutionnaires',
    ],
    es: [
      'Visitar monumentos y memoriales dedicados a los h\u00e9roes nacionales',
      'Compartir historias de los padres fundadores con los ni\u00f1os',
      'Continuar la tradici\u00f3n de la soup joumou del D\u00eda de la Independencia',
      'Asistir a eventos conmemorativos y reuniones patri\u00f3ticas',
      'Escuchar discursos que honran a Toussaint Louverture, Dessalines y otros l\u00edderes revolucionarios',
    ],
  },

  funFacts: {
    en: [
      'Toussaint Louverture, one of the most honored ancestors, never saw independence \u2014 he died in a French prison in 1803.',
      'Dessalines chose the name "Haiti" from the indigenous Ta\u00edno word "Ayiti" meaning "land of mountains."',
      'Henri Christophe built the Citadelle Laferri\u00e8re, the largest fortress in the Americas, to protect Haiti\'s independence.',
      'Alexandre P\u00e9tion provided military aid to Sim\u00f3n Bol\u00edvar in exchange for a promise to free enslaved people in the territories he liberated.',
      'The Haitian founding fathers represented diverse backgrounds, united by the common cause of freedom.',
    ],
    fr: [
      'Toussaint Louverture, l\'un des anc\u00eatres les plus honor\u00e9s, n\'a jamais vu l\'ind\u00e9pendance \u2014 il est mort dans une prison fran\u00e7aise en 1803.',
      'Dessalines choisit le nom \u00ab Ha\u00efti \u00bb du mot ta\u00efno \u00ab Ayiti \u00bb signifiant \u00ab terre de montagnes \u00bb.',
      'Henri Christophe construisit la Citadelle Laferri\u00e8re, la plus grande forteresse des Am\u00e9riques, pour prot\u00e9ger l\'ind\u00e9pendance d\'Ha\u00efti.',
      'Alexandre P\u00e9tion fournit une aide militaire \u00e0 Sim\u00f3n Bol\u00edvar en \u00e9change de la promesse de lib\u00e9rer les esclaves dans les territoires qu\'il lib\u00e9rerait.',
      'Les p\u00e8res fondateurs ha\u00eftiens repr\u00e9sentaient des origines diverses, unis par la cause commune de la libert\u00e9.',
    ],
    es: [
      'Toussaint Louverture, uno de los ancestros m\u00e1s honrados, nunca vio la independencia \u2014 muri\u00f3 en una prisi\u00f3n francesa en 1803.',
      'Dessalines eligi\u00f3 el nombre "Hait\u00ed" de la palabra ta\u00edna "Ayiti" que significa "tierra de monta\u00f1as".',
      'Henri Christophe construy\u00f3 la Citadelle Laferri\u00e8re, la fortaleza m\u00e1s grande de las Am\u00e9ricas, para proteger la independencia de Hait\u00ed.',
      'Alexandre P\u00e9tion proporcion\u00f3 ayuda militar a Sim\u00f3n Bol\u00edvar a cambio de la promesa de liberar a los esclavizados en los territorios que liberara.',
      'Los padres fundadores haitianos representaban or\u00edgenes diversos, unidos por la causa com\u00fan de la libertad.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit a Haitian heritage site or memorial to pay respects',
      'Read about the founding fathers and their contributions to Haitian independence',
      'Share traditional stories and lessons with family and children',
      'Prepare leftover soup joumou or a fresh batch to continue the celebration',
      'Attend a community gathering honoring Haiti\'s revolutionary heroes',
    ],
    fr: [
      'Visiter un site patrimonial ou un m\u00e9morial ha\u00eftien pour rendre hommage',
      'Lire sur les p\u00e8res fondateurs et leurs contributions \u00e0 l\'ind\u00e9pendance d\'Ha\u00efti',
      'Partager des r\u00e9cits et des le\u00e7ons traditionnels avec la famille et les enfants',
      'Pr\u00e9parer les restes de soup joumou ou un nouveau lot pour continuer la c\u00e9l\u00e9bration',
      'Assister \u00e0 un rassemblement communautaire honorant les h\u00e9ros r\u00e9volutionnaires d\'Ha\u00efti',
    ],
    es: [
      'Visitar un sitio de patrimonio haitiano o memorial para rendir homenaje',
      'Leer sobre los padres fundadores y sus contribuciones a la independencia de Hait\u00ed',
      'Compartir historias y lecciones tradicionales con la familia y los ni\u00f1os',
      'Preparar soup joumou sobrante o un nuevo lote para continuar la celebraci\u00f3n',
      'Asistir a una reuni\u00f3n comunitaria en honor a los h\u00e9roes revolucionarios de Hait\u00ed',
    ],
  },

  relatedHolidays: ['ht_independence-day', 'ht_flag-day'],

  seo: {
    en: {
      titleTemplate: "Haiti Ancestors' Day {year} \u2014 Jour des A\u00efeux Countdown",
      descriptionTemplate: "When is Ancestors' Day in Haiti {year}? Live countdown to January 2, history of Haiti's founding fathers, and celebration guide.",
      keywords: ["Ancestors' Day Haiti", 'Jour des A\u00efeux', 'Haiti founding fathers', 'January 2 Haiti', 'Haiti holiday'],
    },
    fr: {
      titleTemplate: 'Jour des A\u00efeux {year} Ha\u00efti \u2014 Compte \u00e0 rebours',
      descriptionTemplate: "Quand est le Jour des A\u00efeux en Ha\u00efti {year} ? Compte \u00e0 rebours, histoire des p\u00e8res fondateurs d'Ha\u00efti et guide de c\u00e9l\u00e9bration.",
      keywords: ['Jour des A\u00efeux', 'p\u00e8res fondateurs Ha\u00efti', '2 janvier Ha\u00efti', 'Toussaint Louverture', 'f\u00eate Ha\u00efti'],
    },
    es: {
      titleTemplate: 'D\u00eda de los Ancestros de Hait\u00ed {year} \u2014 Cuenta regresiva',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de los Ancestros en Hait\u00ed {year}? Cuenta regresiva, historia de los padres fundadores y gu\u00eda de celebraci\u00f3n.',
      keywords: ['D\u00eda de los Ancestros Hait\u00ed', 'Jour des A\u00efeux', 'padres fundadores Hait\u00ed', '2 de enero Hait\u00ed', 'fiesta Hait\u00ed'],
    },
  },

  faq: [
    {
      question: { en: "When is Ancestors' Day {year} in Haiti?", fr: 'Quand est le Jour des A\u00efeux {year} en Ha\u00efti ?', es: '\u00bfCu\u00e1ndo es el D\u00eda de los Ancestros {year} en Hait\u00ed?' },
      answer: {
        en: "Ancestors' Day {year} in Haiti is on {date}. It is always January 2, the day after Independence Day.",
        fr: "Le Jour des A\u00efeux {year} en Ha\u00efti est le {date}. C'est toujours le 2 janvier, le lendemain du Jour de l'Ind\u00e9pendance.",
        es: 'El D\u00eda de los Ancestros {year} en Hait\u00ed es el {date}. Siempre es el 2 de enero, el d\u00eda despu\u00e9s del D\u00eda de la Independencia.',
      },
    },
    {
      question: { en: 'Who are the ancestors honored on this day?', fr: 'Quels sont les anc\u00eatres honor\u00e9s ce jour-l\u00e0 ?', es: '\u00bfQui\u00e9nes son los ancestros honrados en este d\u00eda?' },
      answer: {
        en: "The ancestors honored include Toussaint Louverture, Jean-Jacques Dessalines, Henri Christophe, Alexandre P\u00e9tion, and the countless unnamed fighters who helped win Haiti's independence.",
        fr: "Les anc\u00eatres honor\u00e9s comprennent Toussaint Louverture, Jean-Jacques Dessalines, Henri Christophe, Alexandre P\u00e9tion et les innombrables combattants anonymes qui ont contribu\u00e9 \u00e0 obtenir l'ind\u00e9pendance d'Ha\u00efti.",
        es: 'Los ancestros honrados incluyen a Toussaint Louverture, Jean-Jacques Dessalines, Henri Christophe, Alexandre P\u00e9tion y los innumerables combatientes an\u00f3nimos que ayudaron a ganar la independencia de Hait\u00ed.',
      },
    },
    {
      question: { en: "What is the significance of Ancestors' Day?", fr: 'Quelle est la signification du Jour des A\u00efeux ?', es: '\u00bfCu\u00e1l es el significado del D\u00eda de los Ancestros?' },
      answer: {
        en: "Ancestors' Day is a moment of reflection and gratitude for the founding fathers who sacrificed everything for Haiti's freedom. It ensures the stories and legacy of the revolution are passed to new generations.",
        fr: "Le Jour des A\u00efeux est un moment de r\u00e9flexion et de gratitude envers les p\u00e8res fondateurs qui ont tout sacrifi\u00e9 pour la libert\u00e9 d'Ha\u00efti. Il veille \u00e0 ce que les r\u00e9cits et l'h\u00e9ritage de la r\u00e9volution soient transmis aux nouvelles g\u00e9n\u00e9rations.",
        es: 'El D\u00eda de los Ancestros es un momento de reflexi\u00f3n y gratitud hacia los padres fundadores que sacrificaron todo por la libertad de Hait\u00ed. Asegura que las historias y el legado de la revoluci\u00f3n se transmitan a las nuevas generaciones.',
      },
    },
    {
      question: { en: "Is Ancestors' Day a public holiday in Haiti?", fr: 'Le Jour des A\u00efeux est-il un jour f\u00e9ri\u00e9 en Ha\u00efti ?', es: '\u00bfEs el D\u00eda de los Ancestros un d\u00eda festivo en Hait\u00ed?' },
      answer: {
        en: "Yes, Ancestors' Day is an official public holiday in Haiti. Government offices, banks, and most businesses are closed.",
        fr: "Oui, le Jour des A\u00efeux est un jour f\u00e9ri\u00e9 officiel en Ha\u00efti. Les bureaux gouvernementaux, les banques et la plupart des entreprises sont ferm\u00e9s.",
        es: 'S\u00ed, el D\u00eda de los Ancestros es un d\u00eda festivo oficial en Hait\u00ed. Las oficinas gubernamentales, bancos y la mayor\u00eda de los negocios est\u00e1n cerrados.',
      },
    },
  ],

  icon: '\ud83c\udfdb\ufe0f',
};

// ---------------------------------------------------------------------------
// Carnival — Carnival Tuesday (Mardi Gras)
// ---------------------------------------------------------------------------

const carnival: HolidayData = {
  id: 'ht_carnival',
  countryCode: 'ht',
  slugs: { en: 'carnival', fr: 'carnaval', es: 'carnaval' },
  names: { en: 'Carnival', fr: 'Carnaval', es: 'Carnaval' },

  dateType: 'calculated',
  calculateDate: getCarnivalTuesday,

  descriptions: {
    en: "Haiti's Carnival is one of the Caribbean's most vibrant celebrations, featuring Rara music, elaborate masquerade costumes, and massive street parades. Held on Mardi Gras (Carnival Tuesday), it transforms cities across Haiti into open-air festivals.",
    fr: "Le Carnaval d'Ha\u00efti est l'une des c\u00e9l\u00e9brations les plus vibrantes des Cara\u00efbes, avec de la musique Rara, des costumes de mascarade \u00e9labor\u00e9s et d'\u00e9normes d\u00e9fil\u00e9s de rue. C\u00e9l\u00e9br\u00e9 le Mardi Gras, il transforme les villes d'Ha\u00efti en festivals en plein air.",
    es: 'El Carnaval de Hait\u00ed es una de las celebraciones m\u00e1s vibrantes del Caribe, con m\u00fasica Rara, elaborados disfraces de mascarada y masivos desfiles callejeros. Celebrado el Martes de Carnaval (Mardi Gras), transforma las ciudades de Hait\u00ed en festivales al aire libre.',
  },

  history: {
    en: "Haitian Carnival has roots in both French colonial masquerade traditions and African cultural practices brought by enslaved people. Over centuries, it evolved into a uniquely Haitian celebration that blends Vodou spirituality, political satire, and artistic expression.\n\nThe centerpiece of Haitian Carnival is Rara, a form of street music featuring bamboo horns, drums, and call-and-response singing. Rara bands process through the streets from Carnival through Easter, making it one of the longest celebration periods in the Caribbean.\n\nDuring Carnival, elaborate floats parade through major cities, particularly Port-au-Prince, Jacmel, and Les Cayes. The Jacmel Carnival is especially famous for its papier-m\u00e2ch\u00e9 masks and artistic costumes, drawing visitors from around the world.",
    fr: "Le Carnaval ha\u00eftien trouve ses racines dans les traditions de mascarade coloniales fran\u00e7aises et les pratiques culturelles africaines apport\u00e9es par les esclaves. Au fil des si\u00e8cles, il a \u00e9volu\u00e9 pour devenir une c\u00e9l\u00e9bration uniquement ha\u00eftienne m\u00ealant spiritualit\u00e9 vodou, satire politique et expression artistique.\n\nLa pi\u00e8ce ma\u00eetresse du Carnaval ha\u00eftien est le Rara, une forme de musique de rue avec des cornets en bambou, des tambours et des chants en appel-r\u00e9ponse. Les groupes de Rara d\u00e9filent dans les rues du Carnaval jusqu'\u00e0 P\u00e2ques, ce qui en fait l'une des plus longues p\u00e9riodes de c\u00e9l\u00e9bration des Cara\u00efbes.\n\nPendant le Carnaval, des chars \u00e9labor\u00e9s d\u00e9filent dans les grandes villes, notamment Port-au-Prince, Jacmel et Les Cayes. Le Carnaval de Jacmel est particuli\u00e8rement c\u00e9l\u00e8bre pour ses masques en papier m\u00e2ch\u00e9 et ses costumes artistiques, attirant des visiteurs du monde entier.",
    es: "El Carnaval haitiano tiene ra\u00edces tanto en las tradiciones de mascarada coloniales francesas como en las pr\u00e1cticas culturales africanas tra\u00eddas por los esclavizados. A lo largo de los siglos, evolucion\u00f3 hasta convertirse en una celebraci\u00f3n \u00fanicamente haitiana que combina espiritualidad vud\u00fa, s\u00e1tira pol\u00edtica y expresi\u00f3n art\u00edstica.\n\nLa pieza central del Carnaval haitiano es el Rara, una forma de m\u00fasica callejera con cornetas de bamb\u00fa, tambores y cantos de llamada y respuesta. Las bandas de Rara desfilan por las calles desde el Carnaval hasta Semana Santa, convirti\u00e9ndolo en uno de los per\u00edodos de celebraci\u00f3n m\u00e1s largos del Caribe.\n\nDurante el Carnaval, elaboradas carrozas desfilan por las principales ciudades, especialmente Port-au-Prince, Jacmel y Les Cayes. El Carnaval de Jacmel es especialmente famoso por sus m\u00e1scaras de papel mach\u00e9 y disfraces art\u00edsticos, atrayendo visitantes de todo el mundo.",
  },

  traditions: {
    en: [
      'Dancing to Rara music with bamboo horns and drums in street parades',
      'Wearing elaborate masquerade costumes and papier-m\u00e2ch\u00e9 masks',
      'Watching float parades through major cities',
      'Performing political satire and social commentary through costumes and songs',
      'Celebrating the Jacmel Carnival, famous for its artistic masks',
      'Enjoying street food, rum, and festive drinks',
      'Participating in all-night street parties and dancing',
    ],
    fr: [
      'Danser au son de la musique Rara avec des cornets en bambou et des tambours dans les d\u00e9fil\u00e9s de rue',
      'Porter des costumes de mascarade \u00e9labor\u00e9s et des masques en papier m\u00e2ch\u00e9',
      'Regarder les d\u00e9fil\u00e9s de chars \u00e0 travers les grandes villes',
      'Pr\u00e9senter une satire politique et un commentaire social \u00e0 travers costumes et chansons',
      'C\u00e9l\u00e9brer le Carnaval de Jacmel, c\u00e9l\u00e8bre pour ses masques artistiques',
      'Profiter de la nourriture de rue, du rhum et des boissons festives',
      'Participer \u00e0 des f\u00eates de rue et danser toute la nuit',
    ],
    es: [
      'Bailar al ritmo de m\u00fasica Rara con cornetas de bamb\u00fa y tambores en desfiles callejeros',
      'Usar elaborados disfraces de mascarada y m\u00e1scaras de papel mach\u00e9',
      'Ver desfiles de carrozas por las principales ciudades',
      'Realizar s\u00e1tira pol\u00edtica y comentario social a trav\u00e9s de disfraces y canciones',
      'Celebrar el Carnaval de Jacmel, famoso por sus m\u00e1scaras art\u00edsticas',
      'Disfrutar de comida callejera, ron y bebidas festivas',
      'Participar en fiestas callejeras y bailar toda la noche',
    ],
  },

  funFacts: {
    en: [
      'The Jacmel Carnival is considered one of the most artistic carnivals in the Caribbean, known for its giant papier-m\u00e2ch\u00e9 sculptures.',
      'Rara music continues long after Carnival ends, with bands performing through the streets until Easter.',
      'Haitian Carnival costumes often feature political and social commentary, making it a form of protest art.',
      'The Chaloska character, a military dictator figure in Carnival, satirizes Haiti\'s history of authoritarian rule.',
      'Some Carnival traditions incorporate Vodou spiritual elements, blending African and Caribbean religious practices.',
    ],
    fr: [
      'Le Carnaval de Jacmel est consid\u00e9r\u00e9 comme l\'un des carnavals les plus artistiques des Cara\u00efbes, connu pour ses sculptures g\u00e9antes en papier m\u00e2ch\u00e9.',
      'La musique Rara continue bien apr\u00e8s la fin du Carnaval, avec des groupes jouant dans les rues jusqu\'\u00e0 P\u00e2ques.',
      'Les costumes du Carnaval ha\u00eftien comportent souvent des commentaires politiques et sociaux, en faisant une forme d\'art de protestation.',
      'Le personnage de Chaloska, figure de dictateur militaire au Carnaval, satirise l\'histoire d\'Ha\u00efti en mati\u00e8re de r\u00e9gimes autoritaires.',
      'Certaines traditions du Carnaval int\u00e8grent des \u00e9l\u00e9ments spirituels du vodou, m\u00ealant pratiques religieuses africaines et cara\u00efb\u00e9ennes.',
    ],
    es: [
      'El Carnaval de Jacmel es considerado uno de los carnavales m\u00e1s art\u00edsticos del Caribe, conocido por sus esculturas gigantes de papel mach\u00e9.',
      'La m\u00fasica Rara contin\u00faa mucho despu\u00e9s de que termina el Carnaval, con bandas tocando por las calles hasta Semana Santa.',
      'Los disfraces del Carnaval haitiano a menudo presentan comentarios pol\u00edticos y sociales, convirti\u00e9ndolo en una forma de arte de protesta.',
      'El personaje de Chaloska, figura de dictador militar en el Carnaval, satiriza la historia de Hait\u00ed de gobierno autoritario.',
      'Algunas tradiciones del Carnaval incorporan elementos espirituales del vud\u00fa, combinando pr\u00e1cticas religiosas africanas y caribe\u00f1as.',
    ],
  },

  planningChecklist: {
    en: [
      'Book accommodation early if visiting Haiti during Carnival season',
      'Plan to attend the Jacmel Carnival for the most artistic experience',
      'Bring earplugs and comfortable shoes for the street parades',
      'Learn basic Creole phrases to enjoy interactions with locals',
      'Stay hydrated and wear sunscreen during outdoor celebrations',
    ],
    fr: [
      'R\u00e9server un h\u00e9bergement t\u00f4t si vous visitez Ha\u00efti pendant la saison du Carnaval',
      'Pr\u00e9voir d\'assister au Carnaval de Jacmel pour l\'exp\u00e9rience la plus artistique',
      'Apporter des bouchons d\'oreilles et des chaussures confortables pour les d\u00e9fil\u00e9s de rue',
      'Apprendre des phrases de base en cr\u00e9ole pour profiter des \u00e9changes avec les locaux',
      'Rester hydrat\u00e9 et porter de la cr\u00e8me solaire lors des c\u00e9l\u00e9brations en plein air',
    ],
    es: [
      'Reservar alojamiento con anticipaci\u00f3n si visita Hait\u00ed durante la temporada de Carnaval',
      'Planear asistir al Carnaval de Jacmel para la experiencia m\u00e1s art\u00edstica',
      'Traer tapones para los o\u00eddos y zapatos c\u00f3modos para los desfiles callejeros',
      'Aprender frases b\u00e1sicas en criollo para disfrutar de las interacciones con los locales',
      'Mantenerse hidratado y usar protector solar durante las celebraciones al aire libre',
    ],
  },

  relatedHolidays: ['ht_independence-day', 'ht_ancestors-day'],

  seo: {
    en: {
      titleTemplate: 'Haiti Carnival {year} \u2014 Rara Music & Masquerade Countdown',
      descriptionTemplate: 'When is Haiti Carnival {year}? Live countdown, Rara music guide, Jacmel Carnival info, and celebration tips.',
      keywords: ['Haiti Carnival', 'Rara music', 'Jacmel Carnival', 'Mardi Gras Haiti', 'Caribbean Carnival'],
    },
    fr: {
      titleTemplate: "Carnaval d'Ha\u00efti {year} \u2014 Compte \u00e0 rebours musique Rara et mascarade",
      descriptionTemplate: "Quand est le Carnaval d'Ha\u00efti {year} ? Compte \u00e0 rebours, guide de la musique Rara, infos sur le Carnaval de Jacmel et conseils.",
      keywords: ["Carnaval Ha\u00efti", 'musique Rara', 'Carnaval Jacmel', 'Mardi Gras Ha\u00efti', 'Carnaval cara\u00efb\u00e9en'],
    },
    es: {
      titleTemplate: 'Carnaval de Hait\u00ed {year} \u2014 Cuenta regresiva m\u00fasica Rara y mascarada',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el Carnaval de Hait\u00ed {year}? Cuenta regresiva, gu\u00eda de m\u00fasica Rara, info del Carnaval de Jacmel y consejos.',
      keywords: ['Carnaval Hait\u00ed', 'm\u00fasica Rara', 'Carnaval Jacmel', 'Mardi Gras Hait\u00ed', 'Carnaval caribe\u00f1o'],
    },
  },

  faq: [
    {
      question: { en: 'When is Haiti Carnival {year}?', fr: "Quand est le Carnaval d'Ha\u00efti {year} ?", es: '\u00bfCu\u00e1ndo es el Carnaval de Hait\u00ed {year}?' },
      answer: {
        en: 'Haiti Carnival {year} falls on {date}. It is celebrated on Carnival Tuesday (Mardi Gras), which is 47 days before Easter and moves each year.',
        fr: "Le Carnaval d'Ha\u00efti {year} tombe le {date}. Il est c\u00e9l\u00e9br\u00e9 le Mardi Gras, soit 47 jours avant P\u00e2ques, et la date change chaque ann\u00e9e.",
        es: 'El Carnaval de Hait\u00ed {year} cae el {date}. Se celebra el Martes de Carnaval (Mardi Gras), que es 47 d\u00edas antes de Pascua y cambia cada a\u00f1o.',
      },
    },
    {
      question: { en: 'What is Rara music?', fr: "Qu'est-ce que la musique Rara ?", es: '\u00bfQu\u00e9 es la m\u00fasica Rara?' },
      answer: {
        en: 'Rara is a form of Haitian street music featuring bamboo horns (vaksin), drums, and call-and-response singing. Rara bands parade through the streets during Carnival season and continue through Easter.',
        fr: "Le Rara est une forme de musique de rue ha\u00eftienne avec des cornets en bambou (vaksin), des tambours et des chants en appel-r\u00e9ponse. Les groupes de Rara d\u00e9filent dans les rues pendant la saison du Carnaval et continuent jusqu'\u00e0 P\u00e2ques.",
        es: 'El Rara es una forma de m\u00fasica callejera haitiana con cornetas de bamb\u00fa (vaksin), tambores y cantos de llamada y respuesta. Las bandas de Rara desfilan por las calles durante la temporada de Carnaval y contin\u00faan hasta Semana Santa.',
      },
    },
    {
      question: { en: 'What makes Jacmel Carnival special?', fr: "Qu'est-ce qui rend le Carnaval de Jacmel sp\u00e9cial ?", es: '\u00bfQu\u00e9 hace especial al Carnaval de Jacmel?' },
      answer: {
        en: 'Jacmel Carnival is renowned for its artistic papier-m\u00e2ch\u00e9 masks and sculptures, handmade costumes, and a more intimate atmosphere compared to Port-au-Prince. It is considered one of the most creative carnivals in the Caribbean.',
        fr: "Le Carnaval de Jacmel est r\u00e9put\u00e9 pour ses masques et sculptures artistiques en papier m\u00e2ch\u00e9, ses costumes faits main et une atmosph\u00e8re plus intime compar\u00e9 \u00e0 celui de Port-au-Prince. Il est consid\u00e9r\u00e9 comme l'un des carnavals les plus cr\u00e9atifs des Cara\u00efbes.",
        es: 'El Carnaval de Jacmel es reconocido por sus m\u00e1scaras y esculturas art\u00edsticas de papel mach\u00e9, disfraces hechos a mano y un ambiente m\u00e1s \u00edntimo en comparaci\u00f3n con Port-au-Prince. Es considerado uno de los carnavales m\u00e1s creativos del Caribe.',
      },
    },
    {
      question: { en: 'Is Carnival a public holiday in Haiti?', fr: 'Le Carnaval est-il un jour f\u00e9ri\u00e9 en Ha\u00efti ?', es: '\u00bfEs el Carnaval un d\u00eda festivo en Hait\u00ed?' },
      answer: {
        en: 'Yes, Carnival Tuesday (Mardi Gras) is an official public holiday in Haiti. The celebrations typically span several days, with the main parades on Sunday, Monday, and Tuesday before Ash Wednesday.',
        fr: "Oui, le Mardi Gras est un jour f\u00e9ri\u00e9 officiel en Ha\u00efti. Les c\u00e9l\u00e9brations s'\u00e9talent g\u00e9n\u00e9ralement sur plusieurs jours, avec les principaux d\u00e9fil\u00e9s le dimanche, le lundi et le mardi pr\u00e9c\u00e9dant le Mercredi des Cendres.",
        es: 'S\u00ed, el Martes de Carnaval (Mardi Gras) es un d\u00eda festivo oficial en Hait\u00ed. Las celebraciones generalmente abarcan varios d\u00edas, con los desfiles principales el domingo, lunes y martes antes del Mi\u00e9rcoles de Ceniza.',
      },
    },
  ],

  icon: '\ud83c\udfad',
};

// ---------------------------------------------------------------------------
// Agriculture and Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'ht_labour-day',
  countryCode: 'ht',
  slugs: { en: 'agriculture-and-labour-day', fr: 'jour-de-lagriculture-et-du-travail', es: 'dia-de-la-agricultura-y-del-trabajo' },
  names: { en: 'Agriculture and Labour Day', fr: "Jour de l'Agriculture et du Travail", es: 'D\u00eda de la Agricultura y del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Agriculture and Labour Day on May 1 celebrates the vital role of farming and labor in Haitian society. As an agricultural nation, Haiti honors its workers and farmers on this day, coinciding with International Workers' Day.",
    fr: "Le Jour de l'Agriculture et du Travail, le 1er mai, c\u00e9l\u00e8bre le r\u00f4le vital de l'agriculture et du travail dans la soci\u00e9t\u00e9 ha\u00eftienne. En tant que nation agricole, Ha\u00efti honore ses travailleurs et ses agriculteurs en ce jour, co\u00efncidant avec la Journ\u00e9e internationale des travailleurs.",
    es: 'El D\u00eda de la Agricultura y del Trabajo, el 1 de mayo, celebra el papel vital de la agricultura y el trabajo en la sociedad haitiana. Como naci\u00f3n agr\u00edcola, Hait\u00ed honra a sus trabajadores y agricultores en este d\u00eda, coincidiendo con el D\u00eda Internacional de los Trabajadores.',
  },

  history: {
    en: "Haiti's Agriculture and Labour Day reflects the country's deep connection to the land. After independence in 1804, land redistribution became a central political issue, with leaders attempting to establish Haiti as a self-sufficient agricultural nation.\n\nThe holiday combines the international labor movement's May Day with Haiti's unique agricultural heritage. Coffee, sugarcane, mangoes, and cacao have historically been the country's most important crops, and farming remains a major source of livelihood for the Haitian population.\n\nToday the holiday recognizes both agricultural workers and the broader labor force, celebrating their contributions to the nation's economy and culture.",
    fr: "Le Jour de l'Agriculture et du Travail d'Ha\u00efti refl\u00e8te le lien profond du pays avec la terre. Apr\u00e8s l'ind\u00e9pendance en 1804, la redistribution des terres devint un enjeu politique central, les dirigeants cherchant \u00e0 faire d'Ha\u00efti une nation agricole autosuffisante.\n\nCe jour f\u00e9ri\u00e9 combine la Journ\u00e9e internationale des travailleurs avec le patrimoine agricole unique d'Ha\u00efti. Le caf\u00e9, la canne \u00e0 sucre, les mangues et le cacao ont historiquement \u00e9t\u00e9 les cultures les plus importantes du pays, et l'agriculture reste une source majeure de subsistance pour la population ha\u00eftienne.\n\nAujourd'hui, ce jour f\u00e9ri\u00e9 reconna\u00eet \u00e0 la fois les travailleurs agricoles et l'ensemble de la main-d'\u0153uvre, c\u00e9l\u00e9brant leurs contributions \u00e0 l'\u00e9conomie et \u00e0 la culture de la nation.",
    es: "El D\u00eda de la Agricultura y del Trabajo de Hait\u00ed refleja la profunda conexi\u00f3n del pa\u00eds con la tierra. Despu\u00e9s de la independencia en 1804, la redistribuci\u00f3n de tierras se convirti\u00f3 en un tema pol\u00edtico central, con l\u00edderes intentando establecer a Hait\u00ed como una naci\u00f3n agr\u00edcola autosuficiente.\n\nEste d\u00eda festivo combina el D\u00eda de los Trabajadores del movimiento laboral internacional con el patrimonio agr\u00edcola \u00fanico de Hait\u00ed. El caf\u00e9, la ca\u00f1a de az\u00facar, los mangos y el cacao han sido hist\u00f3ricamente los cultivos m\u00e1s importantes del pa\u00eds, y la agricultura sigue siendo una fuente principal de sustento para la poblaci\u00f3n haitiana.\n\nHoy el d\u00eda festivo reconoce tanto a los trabajadores agr\u00edcolas como a la fuerza laboral en general, celebrando sus contribuciones a la econom\u00eda y cultura de la naci\u00f3n.",
  },

  traditions: {
    en: [
      'Attending agricultural fairs and exhibitions',
      'Honoring farmers and agricultural workers in community events',
      'Planting trees and participating in environmental activities',
      'Gathering with family for a meal featuring local produce',
      'Listening to speeches about workers\' rights and agricultural development',
    ],
    fr: [
      'Assister \u00e0 des foires et expositions agricoles',
      'Honorer les agriculteurs et les travailleurs agricoles lors d\'\u00e9v\u00e9nements communautaires',
      'Planter des arbres et participer \u00e0 des activit\u00e9s environnementales',
      'Se r\u00e9unir en famille pour un repas avec des produits locaux',
      '\u00c9couter des discours sur les droits des travailleurs et le d\u00e9veloppement agricole',
    ],
    es: [
      'Asistir a ferias y exposiciones agr\u00edcolas',
      'Honrar a los agricultores y trabajadores agr\u00edcolas en eventos comunitarios',
      'Plantar \u00e1rboles y participar en actividades ambientales',
      'Reunirse en familia para una comida con productos locales',
      'Escuchar discursos sobre derechos de los trabajadores y desarrollo agr\u00edcola',
    ],
  },

  funFacts: {
    en: [
      'Haiti was once the wealthiest colony in the Americas, known as the "Pearl of the Antilles" for its sugar and coffee production.',
      'Haitian coffee, particularly from the Blue Mountains of Thiotte, is prized worldwide for its smooth, mild flavor.',
      'The mango Francisque, known as the "Madame Francis" mango, is one of Haiti\'s most important agricultural exports.',
      'Agriculture employs roughly half of Haiti\'s workforce, making this holiday especially meaningful.',
      'Haiti\'s varied terrain allows for diverse crops ranging from tropical fruits in the lowlands to coffee in the highlands.',
    ],
    fr: [
      'Ha\u00efti \u00e9tait autrefois la colonie la plus riche des Am\u00e9riques, connue comme la \u00ab Perle des Antilles \u00bb pour sa production de sucre et de caf\u00e9.',
      'Le caf\u00e9 ha\u00eftien, en particulier celui des Montagnes Bleues de Thiotte, est pris\u00e9 dans le monde entier pour sa saveur douce et l\u00e9g\u00e8re.',
      'La mangue Francisque, connue sous le nom de mangue \u00ab Madame Francis \u00bb, est l\'une des exportations agricoles les plus importantes d\'Ha\u00efti.',
      'L\'agriculture emploie environ la moiti\u00e9 de la main-d\'\u0153uvre ha\u00eftienne, rendant ce jour f\u00e9ri\u00e9 particuli\u00e8rement significatif.',
      'Le terrain vari\u00e9 d\'Ha\u00efti permet des cultures diverses allant des fruits tropicaux dans les plaines au caf\u00e9 dans les hautes terres.',
    ],
    es: [
      'Hait\u00ed fue una vez la colonia m\u00e1s rica de las Am\u00e9ricas, conocida como la "Perla de las Antillas" por su producci\u00f3n de az\u00facar y caf\u00e9.',
      'El caf\u00e9 haitiano, particularmente de las Monta\u00f1as Azules de Thiotte, es apreciado mundialmente por su sabor suave y delicado.',
      'El mango Francisque, conocido como el mango "Madame Francis", es una de las exportaciones agr\u00edcolas m\u00e1s importantes de Hait\u00ed.',
      'La agricultura emplea aproximadamente la mitad de la fuerza laboral de Hait\u00ed, haciendo este d\u00eda festivo especialmente significativo.',
      'El terreno variado de Hait\u00ed permite cultivos diversos que van desde frutas tropicales en las tierras bajas hasta caf\u00e9 en las tierras altas.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit a local farmers\' market or agricultural fair',
      'Prepare a meal using locally grown Haitian produce',
      'Learn about Haiti\'s agricultural history and its importance to the economy',
      'Support Haitian farmers by purchasing fair-trade Haitian coffee or goods',
      'Participate in community tree-planting or environmental initiatives',
    ],
    fr: [
      'Visiter un march\u00e9 fermier local ou une foire agricole',
      'Pr\u00e9parer un repas avec des produits ha\u00eftiens cultiv\u00e9s localement',
      'Se renseigner sur l\'histoire agricole d\'Ha\u00efti et son importance \u00e9conomique',
      'Soutenir les agriculteurs ha\u00eftiens en achetant du caf\u00e9 ou des produits ha\u00eftiens \u00e9quitables',
      'Participer \u00e0 des initiatives communautaires de plantation d\'arbres ou environnementales',
    ],
    es: [
      'Visitar un mercado de agricultores local o una feria agr\u00edcola',
      'Preparar una comida con productos haitianos cultivados localmente',
      'Aprender sobre la historia agr\u00edcola de Hait\u00ed y su importancia para la econom\u00eda',
      'Apoyar a los agricultores haitianos comprando caf\u00e9 o productos haitianos de comercio justo',
      'Participar en iniciativas comunitarias de plantaci\u00f3n de \u00e1rboles o ambientales',
    ],
  },

  relatedHolidays: ['ht_independence-day', 'ht_flag-day'],

  seo: {
    en: {
      titleTemplate: 'Haiti Agriculture & Labour Day {year} \u2014 May 1 Countdown',
      descriptionTemplate: 'When is Agriculture and Labour Day in Haiti {year}? Live countdown to May 1, Haitian agricultural heritage, and celebration guide.',
      keywords: ['Haiti Agriculture Day', 'Haiti Labour Day', 'May 1 Haiti', 'Haitian farming', 'Haiti holiday'],
    },
    fr: {
      titleTemplate: "Jour de l'Agriculture et du Travail {year} Ha\u00efti \u2014 Compte \u00e0 rebours du 1er mai",
      descriptionTemplate: "Quand est le Jour de l'Agriculture et du Travail en Ha\u00efti {year} ? Compte \u00e0 rebours, patrimoine agricole ha\u00eftien et guide de c\u00e9l\u00e9bration.",
      keywords: ["Jour de l'Agriculture Ha\u00efti", 'Jour du Travail Ha\u00efti', '1er mai Ha\u00efti', 'agriculture ha\u00eftienne', 'f\u00eate Ha\u00efti'],
    },
    es: {
      titleTemplate: 'D\u00eda de la Agricultura y del Trabajo de Hait\u00ed {year} \u2014 Cuenta regresiva 1 de mayo',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Agricultura y del Trabajo en Hait\u00ed {year}? Cuenta regresiva, patrimonio agr\u00edcola haitiano y gu\u00eda de celebraci\u00f3n.',
      keywords: ['D\u00eda de la Agricultura Hait\u00ed', 'D\u00eda del Trabajo Hait\u00ed', '1 de mayo Hait\u00ed', 'agricultura haitiana', 'fiesta Hait\u00ed'],
    },
  },

  faq: [
    {
      question: { en: 'When is Agriculture and Labour Day {year} in Haiti?', fr: "Quand est le Jour de l'Agriculture et du Travail {year} en Ha\u00efti ?", es: '\u00bfCu\u00e1ndo es el D\u00eda de la Agricultura y del Trabajo {year} en Hait\u00ed?' },
      answer: {
        en: 'Agriculture and Labour Day {year} in Haiti is on {date}. It is always May 1.',
        fr: "Le Jour de l'Agriculture et du Travail {year} en Ha\u00efti est le {date}. C'est toujours le 1er mai.",
        es: 'El D\u00eda de la Agricultura y del Trabajo {year} en Hait\u00ed es el {date}. Siempre es el 1 de mayo.',
      },
    },
    {
      question: { en: 'Why does Haiti combine agriculture with labour day?', fr: "Pourquoi Ha\u00efti combine-t-il l'agriculture et le travail ?", es: '\u00bfPor qu\u00e9 Hait\u00ed combina la agricultura con el d\u00eda del trabajo?' },
      answer: {
        en: 'Haiti combines the two because agriculture has historically been the backbone of the Haitian economy, employing a large portion of the population. The holiday honors both farmers and all workers.',
        fr: "Ha\u00efti combine les deux car l'agriculture a historiquement \u00e9t\u00e9 le pilier de l'\u00e9conomie ha\u00eftienne, employant une grande partie de la population. Le jour f\u00e9ri\u00e9 honore \u00e0 la fois les agriculteurs et tous les travailleurs.",
        es: 'Hait\u00ed combina ambos porque la agricultura ha sido hist\u00f3ricamente la columna vertebral de la econom\u00eda haitiana, empleando a una gran parte de la poblaci\u00f3n. El d\u00eda festivo honra tanto a los agricultores como a todos los trabajadores.',
      },
    },
    {
      question: { en: 'What crops are most important in Haiti?', fr: "Quelles sont les cultures les plus importantes en Ha\u00efti ?", es: '\u00bfCu\u00e1les son los cultivos m\u00e1s importantes en Hait\u00ed?' },
      answer: {
        en: 'Haiti\'s most important crops include coffee, sugarcane, mangoes, cacao, rice, and corn. The mango Francisque is a notable export, and Haitian coffee is prized for its quality.',
        fr: "Les cultures les plus importantes d'Ha\u00efti comprennent le caf\u00e9, la canne \u00e0 sucre, les mangues, le cacao, le riz et le ma\u00efs. La mangue Francisque est une exportation notable, et le caf\u00e9 ha\u00eftien est pris\u00e9 pour sa qualit\u00e9.",
        es: 'Los cultivos m\u00e1s importantes de Hait\u00ed incluyen caf\u00e9, ca\u00f1a de az\u00facar, mangos, cacao, arroz y ma\u00edz. El mango Francisque es una exportaci\u00f3n notable, y el caf\u00e9 haitiano es apreciado por su calidad.',
      },
    },
    {
      question: { en: 'Is Agriculture and Labour Day a public holiday in Haiti?', fr: "Le Jour de l'Agriculture et du Travail est-il un jour f\u00e9ri\u00e9 en Ha\u00efti ?", es: '\u00bfEs el D\u00eda de la Agricultura y del Trabajo un d\u00eda festivo en Hait\u00ed?' },
      answer: {
        en: 'Yes, May 1 is an official public holiday in Haiti. Schools, government offices, and most businesses are closed.',
        fr: "Oui, le 1er mai est un jour f\u00e9ri\u00e9 officiel en Ha\u00efti. Les \u00e9coles, les bureaux gouvernementaux et la plupart des entreprises sont ferm\u00e9s.",
        es: 'S\u00ed, el 1 de mayo es un d\u00eda festivo oficial en Hait\u00ed. Las escuelas, oficinas gubernamentales y la mayor\u00eda de los negocios est\u00e1n cerrados.',
      },
    },
  ],

  icon: '\ud83c\udf3e',
};

// ---------------------------------------------------------------------------
// Flag and University Day — May 18
// ---------------------------------------------------------------------------

const flagDay: HolidayData = {
  id: 'ht_flag-day',
  countryCode: 'ht',
  slugs: { en: 'flag-and-university-day', fr: 'jour-du-drapeau-et-de-luniversite', es: 'dia-de-la-bandera-y-de-la-universidad' },
  names: { en: 'Flag and University Day', fr: "Jour du Drapeau et de l'Universit\u00e9", es: 'D\u00eda de la Bandera y de la Universidad' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 18,

  descriptions: {
    en: 'Flag and University Day (Jour du Drapeau) on May 18 celebrates the creation of the Haitian flag in 1803 during the Congress of Arcahaie. It is a deeply patriotic holiday that also honors education and the role of universities in Haitian society.',
    fr: "Le Jour du Drapeau et de l'Universit\u00e9, le 18 mai, c\u00e9l\u00e8bre la cr\u00e9ation du drapeau ha\u00eftien en 1803 lors du Congr\u00e8s de l'Arcahaie. C'est une f\u00eate profond\u00e9ment patriotique qui honore \u00e9galement l'\u00e9ducation et le r\u00f4le des universit\u00e9s dans la soci\u00e9t\u00e9 ha\u00eftienne.",
    es: 'El D\u00eda de la Bandera y de la Universidad (Jour du Drapeau) el 18 de mayo celebra la creaci\u00f3n de la bandera haitiana en 1803 durante el Congreso de Arcahaie. Es una fiesta profundamente patri\u00f3tica que tambi\u00e9n honra la educaci\u00f3n y el papel de las universidades en la sociedad haitiana.',
  },

  history: {
    en: "On May 18, 1803, at the Congress of Arcahaie, revolutionary leader Jean-Jacques Dessalines created the Haitian flag by tearing the white stripe from the French tricolor, symbolically removing France from Haiti. He then joined the remaining blue and red strips, representing the unity of Haiti's people.\n\nAccording to tradition, Catherine Flon, Dessalines' goddaughter, sewed the first Haitian flag. The blue and red bands have come to symbolize the union of black and mulatto Haitians in their fight for freedom.\n\nThe holiday also celebrates education, as May 18 was chosen to honor the founding of the University of Haiti. The combination of flag and university honors both national identity and the pursuit of knowledge.",
    fr: "Le 18 mai 1803, lors du Congr\u00e8s de l'Arcahaie, le leader r\u00e9volutionnaire Jean-Jacques Dessalines cr\u00e9a le drapeau ha\u00eftien en arrachant la bande blanche du tricolore fran\u00e7ais, retirant symboliquement la France d'Ha\u00efti. Il joignit ensuite les bandes bleue et rouge restantes, repr\u00e9sentant l'unit\u00e9 du peuple ha\u00eftien.\n\nSelon la tradition, Catherine Flon, filleule de Dessalines, cousit le premier drapeau ha\u00eftien. Les bandes bleue et rouge symbolisent l'union des Ha\u00eftiens noirs et mul\u00e2tres dans leur combat pour la libert\u00e9.\n\nCe jour f\u00e9ri\u00e9 c\u00e9l\u00e8bre \u00e9galement l'\u00e9ducation, car le 18 mai a \u00e9t\u00e9 choisi pour honorer la fondation de l'Universit\u00e9 d'Ha\u00efti. La combinaison du drapeau et de l'universit\u00e9 honore \u00e0 la fois l'identit\u00e9 nationale et la qu\u00eate du savoir.",
    es: "El 18 de mayo de 1803, en el Congreso de Arcahaie, el l\u00edder revolucionario Jean-Jacques Dessalines cre\u00f3 la bandera haitiana arrancando la franja blanca de la bandera tricolor francesa, eliminando simb\u00f3licamente a Francia de Hait\u00ed. Luego uni\u00f3 las franjas azul y roja restantes, representando la unidad del pueblo haitiano.\n\nSeg\u00fan la tradici\u00f3n, Catherine Flon, ahijada de Dessalines, cosi\u00f3 la primera bandera haitiana. Las bandas azul y roja simbolizan la uni\u00f3n de los haitianos negros y mulatos en su lucha por la libertad.\n\nEl d\u00eda festivo tambi\u00e9n celebra la educaci\u00f3n, ya que el 18 de mayo fue elegido para honrar la fundaci\u00f3n de la Universidad de Hait\u00ed. La combinaci\u00f3n de bandera y universidad honra tanto la identidad nacional como la b\u00fasqueda del conocimiento.",
  },

  traditions: {
    en: [
      'Flying the Haitian flag at homes, schools, and public buildings',
      'Attending patriotic parades and flag-raising ceremonies',
      'School children performing songs and recitations about the flag\'s history',
      'Eating traditional Haitian food at community gatherings',
      'Wearing blue and red clothing in honor of the national colors',
      'University students participating in academic celebrations and events',
    ],
    fr: [
      'Hisser le drapeau ha\u00eftien aux maisons, \u00e9coles et b\u00e2timents publics',
      'Assister \u00e0 des d\u00e9fil\u00e9s patriotiques et des c\u00e9r\u00e9monies de lev\u00e9e du drapeau',
      'Les \u00e9coliers interpr\u00e8tent des chansons et des r\u00e9citations sur l\'histoire du drapeau',
      'Manger de la nourriture traditionnelle ha\u00eftienne lors de rassemblements communautaires',
      'Porter des v\u00eatements bleus et rouges en l\'honneur des couleurs nationales',
      'Les \u00e9tudiants universitaires participent \u00e0 des c\u00e9l\u00e9brations et \u00e9v\u00e9nements acad\u00e9miques',
    ],
    es: [
      'Izar la bandera haitiana en hogares, escuelas y edificios p\u00fablicos',
      'Asistir a desfiles patri\u00f3ticos y ceremonias de izado de bandera',
      'Los ni\u00f1os de escuela interpretan canciones y recitaciones sobre la historia de la bandera',
      'Comer comida tradicional haitiana en reuniones comunitarias',
      'Vestir ropa azul y roja en honor a los colores nacionales',
      'Los estudiantes universitarios participan en celebraciones y eventos acad\u00e9micos',
    ],
  },

  funFacts: {
    en: [
      'Catherine Flon, who sewed the first Haitian flag, is one of the most celebrated women in Haitian history.',
      'The Haitian flag is one of the few national flags created by physically altering another country\'s flag.',
      'The flag\'s blue represents Haiti\'s black citizens and the red represents the mulatto population \u2014 together symbolizing national unity.',
      'The Haitian coat of arms at the center of the flag features a palm tree topped by a liberty cap.',
      'May 18 is sometimes called the "second most important holiday" in Haiti after Independence Day.',
    ],
    fr: [
      'Catherine Flon, qui cousit le premier drapeau ha\u00eftien, est l\'une des femmes les plus c\u00e9l\u00e8bres de l\'histoire d\'Ha\u00efti.',
      'Le drapeau ha\u00eftien est l\'un des rares drapeaux nationaux cr\u00e9\u00e9s en modifiant physiquement le drapeau d\'un autre pays.',
      'Le bleu du drapeau repr\u00e9sente les citoyens noirs d\'Ha\u00efti et le rouge repr\u00e9sente la population mul\u00e2tre \u2014 symbolisant ensemble l\'unit\u00e9 nationale.',
      'Les armoiries ha\u00eftiennes au centre du drapeau pr\u00e9sentent un palmier surmont\u00e9 d\'un bonnet de la libert\u00e9.',
      'Le 18 mai est parfois appel\u00e9 la \u00ab deuxi\u00e8me f\u00eate la plus importante \u00bb d\'Ha\u00efti apr\u00e8s le Jour de l\'Ind\u00e9pendance.',
    ],
    es: [
      'Catherine Flon, quien cosi\u00f3 la primera bandera haitiana, es una de las mujeres m\u00e1s celebradas en la historia de Hait\u00ed.',
      'La bandera haitiana es una de las pocas banderas nacionales creadas alterando f\u00edsicamente la bandera de otro pa\u00eds.',
      'El azul de la bandera representa a los ciudadanos negros de Hait\u00ed y el rojo representa a la poblaci\u00f3n mulata \u2014 juntos simbolizando la unidad nacional.',
      'El escudo de armas haitiano en el centro de la bandera presenta una palmera coronada por un gorro frigio.',
      'El 18 de mayo a veces se llama la "segunda fiesta m\u00e1s importante" de Hait\u00ed despu\u00e9s del D\u00eda de la Independencia.',
    ],
  },

  planningChecklist: {
    en: [
      'Display the Haitian flag at your home or workplace',
      'Attend a local Flag Day parade or ceremony',
      'Teach children about Catherine Flon and the creation of the flag',
      'Wear blue and red to show national pride',
      'Support a Haitian university or educational initiative',
    ],
    fr: [
      'Afficher le drapeau ha\u00eftien chez vous ou sur votre lieu de travail',
      'Assister \u00e0 un d\u00e9fil\u00e9 ou une c\u00e9r\u00e9monie locale du Jour du Drapeau',
      'Enseigner aux enfants l\'histoire de Catherine Flon et la cr\u00e9ation du drapeau',
      'Porter du bleu et du rouge pour montrer la fiert\u00e9 nationale',
      'Soutenir une universit\u00e9 ou une initiative \u00e9ducative ha\u00eftienne',
    ],
    es: [
      'Exhibir la bandera haitiana en su hogar o lugar de trabajo',
      'Asistir a un desfile o ceremonia local del D\u00eda de la Bandera',
      'Ense\u00f1ar a los ni\u00f1os sobre Catherine Flon y la creaci\u00f3n de la bandera',
      'Vestir azul y rojo para mostrar orgullo nacional',
      'Apoyar una universidad o iniciativa educativa haitiana',
    ],
  },

  relatedHolidays: ['ht_independence-day', 'ht_ancestors-day'],

  seo: {
    en: {
      titleTemplate: 'Haiti Flag Day {year} \u2014 Jour du Drapeau Countdown',
      descriptionTemplate: 'When is Flag and University Day in Haiti {year}? Live countdown to May 18, the history of the Haitian flag, and celebration guide.',
      keywords: ['Haiti Flag Day', 'Jour du Drapeau', 'May 18 Haiti', 'Haitian flag history', 'Catherine Flon'],
    },
    fr: {
      titleTemplate: "Jour du Drapeau {year} Ha\u00efti \u2014 Compte \u00e0 rebours",
      descriptionTemplate: "Quand est le Jour du Drapeau et de l'Universit\u00e9 en Ha\u00efti {year} ? Compte \u00e0 rebours, histoire du drapeau ha\u00eftien et guide de c\u00e9l\u00e9bration.",
      keywords: ['Jour du Drapeau Ha\u00efti', '18 mai Ha\u00efti', 'drapeau ha\u00eftien', 'Catherine Flon', 'f\u00eate nationale Ha\u00efti'],
    },
    es: {
      titleTemplate: 'D\u00eda de la Bandera de Hait\u00ed {year} \u2014 Cuenta regresiva',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Bandera y de la Universidad en Hait\u00ed {year}? Cuenta regresiva, historia de la bandera haitiana y gu\u00eda de celebraci\u00f3n.',
      keywords: ['D\u00eda de la Bandera Hait\u00ed', '18 de mayo Hait\u00ed', 'bandera haitiana', 'Catherine Flon', 'fiesta nacional Hait\u00ed'],
    },
  },

  faq: [
    {
      question: { en: 'When is Haiti Flag Day {year}?', fr: 'Quand est le Jour du Drapeau {year} en Ha\u00efti ?', es: '\u00bfCu\u00e1ndo es el D\u00eda de la Bandera de Hait\u00ed {year}?' },
      answer: {
        en: 'Haiti Flag and University Day {year} is on {date}. It is always May 18.',
        fr: "Le Jour du Drapeau et de l'Universit\u00e9 {year} en Ha\u00efti est le {date}. C'est toujours le 18 mai.",
        es: 'El D\u00eda de la Bandera y de la Universidad de Hait\u00ed {year} es el {date}. Siempre es el 18 de mayo.',
      },
    },
    {
      question: { en: 'How was the Haitian flag created?', fr: 'Comment le drapeau ha\u00eftien a-t-il \u00e9t\u00e9 cr\u00e9\u00e9 ?', es: '\u00bfC\u00f3mo fue creada la bandera haitiana?' },
      answer: {
        en: 'Jean-Jacques Dessalines created the flag at the Congress of Arcahaie on May 18, 1803, by tearing the white stripe from the French tricolor and joining the blue and red strips. Catherine Flon then sewed the two pieces together.',
        fr: "Jean-Jacques Dessalines cr\u00e9a le drapeau lors du Congr\u00e8s de l'Arcahaie le 18 mai 1803, en arrachant la bande blanche du tricolore fran\u00e7ais et en joignant les bandes bleue et rouge. Catherine Flon cousit ensuite les deux pi\u00e8ces ensemble.",
        es: 'Jean-Jacques Dessalines cre\u00f3 la bandera en el Congreso de Arcahaie el 18 de mayo de 1803, arrancando la franja blanca de la bandera tricolor francesa y uniendo las franjas azul y roja. Catherine Flon luego cosi\u00f3 las dos piezas juntas.',
      },
    },
    {
      question: { en: 'Why is university day combined with flag day?', fr: "Pourquoi le jour de l'universit\u00e9 est-il combin\u00e9 avec le jour du drapeau ?", es: '\u00bfPor qu\u00e9 se combina el d\u00eda de la universidad con el d\u00eda de la bandera?' },
      answer: {
        en: 'May 18 was chosen to honor both the creation of the Haitian flag and the founding of the University of Haiti, linking national identity with the pursuit of education and knowledge.',
        fr: "Le 18 mai a \u00e9t\u00e9 choisi pour honorer \u00e0 la fois la cr\u00e9ation du drapeau ha\u00eftien et la fondation de l'Universit\u00e9 d'Ha\u00efti, liant l'identit\u00e9 nationale \u00e0 la qu\u00eate d'\u00e9ducation et de savoir.",
        es: 'El 18 de mayo fue elegido para honrar tanto la creaci\u00f3n de la bandera haitiana como la fundaci\u00f3n de la Universidad de Hait\u00ed, vinculando la identidad nacional con la b\u00fasqueda de la educaci\u00f3n y el conocimiento.',
      },
    },
    {
      question: { en: 'What do the colors of the Haitian flag mean?', fr: 'Que signifient les couleurs du drapeau ha\u00eftien ?', es: '\u00bfQu\u00e9 significan los colores de la bandera haitiana?' },
      answer: {
        en: 'The blue band represents Haiti\'s black citizens and the red band represents the mulatto population. Together, they symbolize the unity of all Haitians in the fight for independence.',
        fr: "La bande bleue repr\u00e9sente les citoyens noirs d'Ha\u00efti et la bande rouge repr\u00e9sente la population mul\u00e2tre. Ensemble, elles symbolisent l'unit\u00e9 de tous les Ha\u00eftiens dans le combat pour l'ind\u00e9pendance.",
        es: 'La banda azul representa a los ciudadanos negros de Hait\u00ed y la banda roja representa a la poblaci\u00f3n mulata. Juntas, simbolizan la unidad de todos los haitianos en la lucha por la independencia.',
      },
    },
  ],

  icon: '\ud83c\udded\ud83c\uddf9',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmasDay: HolidayData = {
  id: 'ht_christmas',
  countryCode: 'ht',
  slugs: { en: 'christmas-day', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'No\u00ebl', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day (No\u00ebl) on December 25 is a major celebration in Haiti, marked by church services, family gatherings, and festive meals. The soup joumou tradition, primarily associated with January 1, extends the holiday spirit into the new year.',
    fr: "No\u00ebl, le 25 d\u00e9cembre, est une c\u00e9l\u00e9bration majeure en Ha\u00efti, marqu\u00e9e par des services religieux, des r\u00e9unions familiales et des repas festifs. La tradition de la soup joumou, principalement associ\u00e9e au 1er janvier, prolonge l'esprit des f\u00eates jusqu'au Nouvel An.",
    es: 'La Navidad (No\u00ebl) el 25 de diciembre es una celebraci\u00f3n importante en Hait\u00ed, marcada por servicios religiosos, reuniones familiares y comidas festivas. La tradici\u00f3n de la soup joumou, principalmente asociada con el 1 de enero, extiende el esp\u00edritu festivo hasta el a\u00f1o nuevo.',
  },

  history: {
    en: "Christmas in Haiti blends Catholic traditions brought by French colonizers with Haitian cultural practices. The holiday has been celebrated since the colonial era and remains one of the most important religious and family holidays in the country.\n\nHaitian Christmas traditions reflect the country's deep Catholic faith, with midnight Mass (Messe de Minuit) being a central event. Families prepare special meals and exchange gifts, while communities come together for celebrations.\n\nThe holiday season in Haiti extends from Christmas through January 2 (Ancestors' Day), creating a festive period that encompasses both religious and patriotic celebrations, with soup joumou serving as the culinary bridge between Christmas and Independence Day.",
    fr: "No\u00ebl en Ha\u00efti m\u00eale les traditions catholiques apport\u00e9es par les colonisateurs fran\u00e7ais aux pratiques culturelles ha\u00eftiennes. La f\u00eate est c\u00e9l\u00e9br\u00e9e depuis l'\u00e9poque coloniale et reste l'une des f\u00eates religieuses et familiales les plus importantes du pays.\n\nLes traditions de No\u00ebl ha\u00eftiennes refl\u00e8tent la profonde foi catholique du pays, avec la Messe de Minuit comme \u00e9v\u00e9nement central. Les familles pr\u00e9parent des repas sp\u00e9ciaux et \u00e9changent des cadeaux, tandis que les communaut\u00e9s se r\u00e9unissent pour les c\u00e9l\u00e9brations.\n\nLa saison des f\u00eates en Ha\u00efti s'\u00e9tend de No\u00ebl au 2 janvier (Jour des A\u00efeux), cr\u00e9ant une p\u00e9riode festive qui englobe \u00e0 la fois les c\u00e9l\u00e9brations religieuses et patriotiques, la soup joumou servant de pont culinaire entre No\u00ebl et le Jour de l'Ind\u00e9pendance.",
    es: "La Navidad en Hait\u00ed combina tradiciones cat\u00f3licas tra\u00eddas por los colonizadores franceses con pr\u00e1cticas culturales haitianas. La festividad se celebra desde la \u00e9poca colonial y sigue siendo una de las fiestas religiosas y familiares m\u00e1s importantes del pa\u00eds.\n\nLas tradiciones navide\u00f1as haitianas reflejan la profunda fe cat\u00f3lica del pa\u00eds, con la Misa de Medianoche (Messe de Minuit) como evento central. Las familias preparan comidas especiales e intercambian regalos, mientras las comunidades se re\u00fanen para las celebraciones.\n\nLa temporada festiva en Hait\u00ed se extiende desde Navidad hasta el 2 de enero (D\u00eda de los Ancestros), creando un per\u00edodo festivo que abarca tanto celebraciones religiosas como patri\u00f3ticas, con la soup joumou como puente culinario entre Navidad y el D\u00eda de la Independencia.",
  },

  traditions: {
    en: [
      'Attending midnight Mass (Messe de Minuit) on Christmas Eve',
      'Preparing a special Christmas Eve dinner (R\u00e9veillon) with family',
      'Decorating Christmas trees and homes with lights',
      'Exchanging gifts on Christmas morning',
      'Preparing soup joumou in advance for the January 1 celebration',
      'Singing Christmas carols in Creole and French',
      'Visiting extended family and neighbors throughout the holiday',
    ],
    fr: [
      'Assister \u00e0 la Messe de Minuit la veille de No\u00ebl',
      'Pr\u00e9parer un d\u00eener sp\u00e9cial du R\u00e9veillon en famille',
      'D\u00e9corer les sapins de No\u00ebl et les maisons avec des lumi\u00e8res',
      '\u00c9changer des cadeaux le matin de No\u00ebl',
      'Pr\u00e9parer la soup joumou \u00e0 l\'avance pour la c\u00e9l\u00e9bration du 1er janvier',
      'Chanter des cantiques de No\u00ebl en cr\u00e9ole et en fran\u00e7ais',
      'Rendre visite \u00e0 la famille \u00e9largie et aux voisins pendant les f\u00eates',
    ],
    es: [
      'Asistir a la Misa de Medianoche (Messe de Minuit) en Nochebuena',
      'Preparar una cena especial de Nochebuena (R\u00e9veillon) en familia',
      'Decorar \u00e1rboles de Navidad y hogares con luces',
      'Intercambiar regalos en la ma\u00f1ana de Navidad',
      'Preparar la soup joumou con anticipaci\u00f3n para la celebraci\u00f3n del 1 de enero',
      'Cantar villancicos en criollo y franc\u00e9s',
      'Visitar a la familia extendida y vecinos durante las fiestas',
    ],
  },

  funFacts: {
    en: [
      'Haitian Christmas carols are often sung in Haitian Creole, blending European melodies with Caribbean rhythms.',
      'The R\u00e9veillon (Christmas Eve dinner) often features griot (fried pork), rice and beans, and fried plantains.',
      'Many Haitians begin preparing soup joumou days before January 1, making it a holiday-long culinary tradition.',
      'Christmas in Haiti is the start of a week-long celebration that culminates on Independence Day, January 1.',
      'Haitian children traditionally receive new clothes and shoes for Christmas rather than toys.',
    ],
    fr: [
      'Les cantiques de No\u00ebl ha\u00eftiens sont souvent chant\u00e9s en cr\u00e9ole ha\u00eftien, m\u00ealant m\u00e9lodies europ\u00e9ennes et rythmes cara\u00efb\u00e9ens.',
      'Le R\u00e9veillon comprend souvent du griot (porc frit), du riz aux haricots et des bananes plantains frites.',
      'De nombreux Ha\u00eftiens commencent \u00e0 pr\u00e9parer la soup joumou des jours avant le 1er janvier, en faisant une tradition culinaire tout au long des f\u00eates.',
      'No\u00ebl en Ha\u00efti est le d\u00e9but d\'une semaine de c\u00e9l\u00e9brations qui culmine le Jour de l\'Ind\u00e9pendance, le 1er janvier.',
      'Les enfants ha\u00eftiens re\u00e7oivent traditionnellement de nouveaux v\u00eatements et chaussures pour No\u00ebl plut\u00f4t que des jouets.',
    ],
    es: [
      'Los villancicos navide\u00f1os haitianos a menudo se cantan en criollo haitiano, combinando melod\u00edas europeas con ritmos caribe\u00f1os.',
      'El R\u00e9veillon (cena de Nochebuena) a menudo incluye griot (cerdo frito), arroz con frijoles y pl\u00e1tanos fritos.',
      'Muchos haitianos comienzan a preparar la soup joumou d\u00edas antes del 1 de enero, convirti\u00e9ndola en una tradici\u00f3n culinaria de toda la temporada.',
      'La Navidad en Hait\u00ed es el inicio de una semana de celebraciones que culmina en el D\u00eda de la Independencia, el 1 de enero.',
      'Los ni\u00f1os haitianos tradicionalmente reciben ropa y zapatos nuevos para Navidad en vez de juguetes.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan the R\u00e9veillon menu with griot, rice and beans, and plantains',
      'Attend midnight Mass at a local church',
      'Purchase gifts and new clothes for family members',
      'Begin sourcing ingredients for soup joumou to serve on January 1',
      'Decorate your home and prepare for extended family visits',
    ],
    fr: [
      'Planifier le menu du R\u00e9veillon avec griot, riz aux haricots et bananes plantains',
      'Assister \u00e0 la Messe de Minuit dans une \u00e9glise locale',
      'Acheter des cadeaux et des v\u00eatements neufs pour les membres de la famille',
      'Commencer \u00e0 rassembler les ingr\u00e9dients de la soup joumou \u00e0 servir le 1er janvier',
      'D\u00e9corer votre maison et pr\u00e9parer les visites de la famille \u00e9largie',
    ],
    es: [
      'Planificar el men\u00fa del R\u00e9veillon con griot, arroz con frijoles y pl\u00e1tanos',
      'Asistir a la Misa de Medianoche en una iglesia local',
      'Comprar regalos y ropa nueva para los miembros de la familia',
      'Comenzar a conseguir ingredientes para la soup joumou a servir el 1 de enero',
      'Decorar su hogar y prepararse para las visitas de la familia extendida',
    ],
  },

  relatedHolidays: ['ht_independence-day', 'ht_ancestors-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas in Haiti {year} \u2014 No\u00ebl Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Haiti? Live countdown to December 25, Haitian Christmas traditions, R\u00e9veillon, and celebration guide.',
      keywords: ['Christmas Haiti', 'No\u00ebl Ha\u00efti', 'Haitian Christmas', 'R\u00e9veillon Haiti', 'Haiti holiday countdown'],
    },
    fr: {
      titleTemplate: 'No\u00ebl en Ha\u00efti {year} \u2014 Compte \u00e0 rebours et traditions',
      descriptionTemplate: 'Quand est No\u00ebl {year} en Ha\u00efti ? Compte \u00e0 rebours, traditions de No\u00ebl ha\u00eftiennes, R\u00e9veillon et guide de c\u00e9l\u00e9bration.',
      keywords: ['No\u00ebl Ha\u00efti', 'traditions No\u00ebl ha\u00eftiennes', 'R\u00e9veillon Ha\u00efti', 'Messe de Minuit', 'f\u00eates Ha\u00efti'],
    },
    es: {
      titleTemplate: 'Navidad en Hait\u00ed {year} \u2014 Cuenta regresiva y tradiciones',
      descriptionTemplate: '\u00bfCu\u00e1ndo es Navidad {year} en Hait\u00ed? Cuenta regresiva, tradiciones navide\u00f1as haitianas, R\u00e9veillon y gu\u00eda de celebraci\u00f3n.',
      keywords: ['Navidad Hait\u00ed', 'No\u00ebl Ha\u00efti', 'tradiciones navide\u00f1as haitianas', 'R\u00e9veillon Hait\u00ed', 'fiestas Hait\u00ed'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Haiti?', fr: 'Quand est No\u00ebl {year} en Ha\u00efti ?', es: '\u00bfCu\u00e1ndo es Navidad {year} en Hait\u00ed?' },
      answer: {
        en: 'Christmas {year} in Haiti is on {date}. It is always December 25.',
        fr: "No\u00ebl {year} en Ha\u00efti est le {date}. C'est toujours le 25 d\u00e9cembre.",
        es: 'La Navidad {year} en Hait\u00ed es el {date}. Siempre es el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What do Haitians eat on Christmas?', fr: 'Que mangent les Ha\u00eftiens \u00e0 No\u00ebl ?', es: '\u00bfQu\u00e9 comen los haitianos en Navidad?' },
      answer: {
        en: 'The R\u00e9veillon dinner typically features griot (fried pork), rice and beans, fried plantains, and various side dishes. Many families also begin preparing soup joumou for the January 1 celebration.',
        fr: "Le d\u00eener du R\u00e9veillon comprend g\u00e9n\u00e9ralement du griot (porc frit), du riz aux haricots, des bananes plantains frites et divers accompagnements. Beaucoup de familles commencent aussi \u00e0 pr\u00e9parer la soup joumou pour la c\u00e9l\u00e9bration du 1er janvier.",
        es: 'La cena del R\u00e9veillon generalmente incluye griot (cerdo frito), arroz con frijoles, pl\u00e1tanos fritos y varios acompa\u00f1amientos. Muchas familias tambi\u00e9n comienzan a preparar la soup joumou para la celebraci\u00f3n del 1 de enero.',
      },
    },
    {
      question: { en: 'What is the R\u00e9veillon?', fr: "Qu'est-ce que le R\u00e9veillon ?", es: '\u00bfQu\u00e9 es el R\u00e9veillon?' },
      answer: {
        en: 'R\u00e9veillon is the Christmas Eve dinner celebration, a tradition inherited from French culture. Haitian families gather for a special meal before or after attending midnight Mass.',
        fr: "Le R\u00e9veillon est le d\u00eener festif de la veille de No\u00ebl, une tradition h\u00e9rit\u00e9e de la culture fran\u00e7aise. Les familles ha\u00eftiennes se r\u00e9unissent pour un repas sp\u00e9cial avant ou apr\u00e8s la Messe de Minuit.",
        es: 'El R\u00e9veillon es la cena de celebraci\u00f3n de Nochebuena, una tradici\u00f3n heredada de la cultura francesa. Las familias haitianas se re\u00fanen para una comida especial antes o despu\u00e9s de asistir a la Misa de Medianoche.',
      },
    },
    {
      question: { en: 'Is Christmas a public holiday in Haiti?', fr: 'No\u00ebl est-il un jour f\u00e9ri\u00e9 en Ha\u00efti ?', es: '\u00bfEs Navidad un d\u00eda festivo en Hait\u00ed?' },
      answer: {
        en: 'Yes, Christmas Day is an official public holiday in Haiti. The holiday season extends through January 2 (Ancestors\' Day).',
        fr: "Oui, No\u00ebl est un jour f\u00e9ri\u00e9 officiel en Ha\u00efti. La saison des f\u00eates s'\u00e9tend jusqu'au 2 janvier (Jour des A\u00efeux).",
        es: 'S\u00ed, la Navidad es un d\u00eda festivo oficial en Hait\u00ed. La temporada festiva se extiende hasta el 2 de enero (D\u00eda de los Ancestros).',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const htHolidays: HolidayData[] = [
  independenceDay,
  ancestorsDay,
  carnival,
  labourDay,
  flagDay,
  christmasDay,
];

export default htHolidays;
