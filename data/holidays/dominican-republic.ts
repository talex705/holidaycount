/**
 * Dominican Republic holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getGoodFriday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'do_new-years-day',
  countryCode: 'do',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'dia-de-ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'D\u00eda de A\u00f1o Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is celebrated throughout the Dominican Republic with festive gatherings, music, and traditional foods. It marks the beginning of the calendar year and is a time for family reunions and celebrations.",
    fr: "Le Jour de l'An, le 1er janvier, est c\u00e9l\u00e9br\u00e9 dans toute la R\u00e9publique dominicaine avec des rassemblements festifs, de la musique et des plats traditionnels. Il marque le d\u00e9but de l'ann\u00e9e civile et est un moment de r\u00e9unions familiales et de c\u00e9l\u00e9brations.",
    es: 'El D\u00eda de A\u00f1o Nuevo, el 1 de enero, se celebra en toda la Rep\u00fablica Dominicana con reuniones festivas, m\u00fasica y comidas tradicionales. Marca el inicio del a\u00f1o calendario y es un momento para reuniones familiares y celebraciones.',
  },

  history: {
    en: "New Year's celebrations in the Dominican Republic blend Spanish colonial traditions with African and indigenous Caribbean influences. The holiday features midnight fireworks, music, and festive meals that bring families and communities together.\n\nDominicans traditionally prepare special dishes for the New Year, including roast pork (pernil), rice and pigeon peas (moro de guandules), and potato salad (ensalada rusa). The celebrations often continue into the early morning hours with merengue and bachata music.\n\nThe holiday also carries symbolic significance, with many Dominicans observing traditional practices believed to bring good luck in the new year, such as eating 12 grapes at midnight and wearing yellow underwear for prosperity.",
    fr: "Les c\u00e9l\u00e9brations du Nouvel An en R\u00e9publique dominicaine m\u00ealent les traditions coloniales espagnoles avec les influences africaines et indig\u00e8nes des Cara\u00efbes. La f\u00eate comprend des feux d'artifice \u00e0 minuit, de la musique et des repas festifs qui r\u00e9unissent familles et communaut\u00e9s.\n\nLes Dominicains pr\u00e9parent traditionnellement des plats sp\u00e9ciaux pour le Nouvel An, notamment du porc r\u00f4ti (pernil), du riz aux pois d'Angole (moro de guandules) et de la salade de pommes de terre (ensalada rusa). Les c\u00e9l\u00e9brations se poursuivent souvent jusqu'au petit matin avec de la musique merengue et bachata.\n\nLa f\u00eate a aussi une signification symbolique, de nombreux Dominicains observant des pratiques traditionnelles cens\u00e9es porter bonheur pour la nouvelle ann\u00e9e.",
    es: "Las celebraciones de A\u00f1o Nuevo en la Rep\u00fablica Dominicana combinan tradiciones coloniales espa\u00f1olas con influencias africanas e ind\u00edgenas caribe\u00f1as. La festividad incluye fuegos artificiales a medianoche, m\u00fasica y comidas festivas que re\u00fanen a familias y comunidades.\n\nLos dominicanos tradicionalmente preparan platos especiales para el A\u00f1o Nuevo, incluyendo cerdo asado (pernil), arroz con guandules (moro de guandules) y ensalada rusa. Las celebraciones a menudo contin\u00faan hasta las primeras horas de la madrugada con m\u00fasica de merengue y bachata.\n\nLa festividad tambi\u00e9n tiene significado simb\u00f3lico, con muchos dominicanos observando pr\u00e1cticas tradicionales que se cree traen buena suerte en el nuevo a\u00f1o, como comer 12 uvas a medianoche y usar ropa interior amarilla para la prosperidad.",
  },

  traditions: {
    en: [
      'Watching fireworks at midnight across the country',
      'Preparing a festive dinner with pernil, moro de guandules, and ensalada rusa',
      'Dancing merengue and bachata at parties and celebrations',
      'Eating 12 grapes at midnight for good luck',
      'Wearing yellow underwear for prosperity in the new year',
      'Gathering with extended family for a late-night feast',
    ],
    fr: [
      'Regarder les feux d\'artifice \u00e0 minuit dans tout le pays',
      'Pr\u00e9parer un d\u00eener festif avec pernil, moro de guandules et ensalada rusa',
      'Danser le merengue et la bachata lors de f\u00eates et c\u00e9l\u00e9brations',
      'Manger 12 raisins \u00e0 minuit pour la bonne chance',
      'Porter des sous-v\u00eatements jaunes pour la prosp\u00e9rit\u00e9 dans la nouvelle ann\u00e9e',
      'Se r\u00e9unir en famille \u00e9largie pour un festin tard dans la nuit',
    ],
    es: [
      'Ver fuegos artificiales a medianoche en todo el pa\u00eds',
      'Preparar una cena festiva con pernil, moro de guandules y ensalada rusa',
      'Bailar merengue y bachata en fiestas y celebraciones',
      'Comer 12 uvas a medianoche para la buena suerte',
      'Usar ropa interior amarilla para la prosperidad en el nuevo a\u00f1o',
      'Reunirse con la familia extendida para un fest\u00edn nocturno',
    ],
  },

  funFacts: {
    en: [
      'Many Dominicans believe eating 12 grapes at midnight \u2014 one for each month \u2014 brings good luck for the new year.',
      'Pernil (roast pork shoulder) is the centerpiece of most Dominican New Year\'s Eve dinners.',
      'The Mal\u00e9con in Santo Domingo hosts one of the biggest New Year\'s Eve celebrations in the Caribbean.',
      'Bachata, a music genre born in the Dominican Republic, is played at virtually every New Year\'s party.',
      'Some Dominicans throw a bucket of water out the window at midnight to "wash away" the old year.',
    ],
    fr: [
      'Beaucoup de Dominicains croient que manger 12 raisins \u00e0 minuit \u2014 un pour chaque mois \u2014 porte bonheur pour la nouvelle ann\u00e9e.',
      'Le pernil (\u00e9paule de porc r\u00f4tie) est la pi\u00e8ce ma\u00eetresse de la plupart des d\u00eeners du r\u00e9veillon dominicain.',
      'Le Malec\u00f3n de Saint-Domingue accueille l\'une des plus grandes c\u00e9l\u00e9brations du r\u00e9veillon des Cara\u00efbes.',
      'La bachata, genre musical n\u00e9 en R\u00e9publique dominicaine, est jou\u00e9e \u00e0 pratiquement chaque f\u00eate du Nouvel An.',
      'Certains Dominicains jettent un seau d\'eau par la fen\u00eatre \u00e0 minuit pour \u00ab laver \u00bb l\'ancienne ann\u00e9e.',
    ],
    es: [
      'Muchos dominicanos creen que comer 12 uvas a medianoche \u2014 una por cada mes \u2014 trae buena suerte para el nuevo a\u00f1o.',
      'El pernil (paleta de cerdo asada) es la pieza central de la mayor\u00eda de las cenas de Nochevieja dominicanas.',
      'El Malec\u00f3n de Santo Domingo alberga una de las celebraciones de Nochevieja m\u00e1s grandes del Caribe.',
      'La bachata, g\u00e9nero musical nacido en la Rep\u00fablica Dominicana, se toca en pr\u00e1cticamente todas las fiestas de A\u00f1o Nuevo.',
      'Algunos dominicanos lanzan un balde de agua por la ventana a medianoche para "lavar" el a\u00f1o viejo.',
    ],
  },

  planningChecklist: {
    en: [
      'Order pernil and ingredients for moro de guandules well in advance',
      'Plan your midnight celebration at home or at a public event',
      'Stock up on grapes and festive drinks for the countdown',
      'Prepare a playlist of merengue and bachata for the party',
      'Invite family and friends for the traditional dinner',
    ],
    fr: [
      'Commander le pernil et les ingr\u00e9dients pour le moro de guandules bien \u00e0 l\'avance',
      'Planifier votre c\u00e9l\u00e9bration de minuit \u00e0 la maison ou lors d\'un \u00e9v\u00e9nement public',
      'S\'approvisionner en raisins et boissons festives pour le compte \u00e0 rebours',
      'Pr\u00e9parer une playlist de merengue et bachata pour la f\u00eate',
      'Inviter famille et amis pour le d\u00eener traditionnel',
    ],
    es: [
      'Pedir el pernil e ingredientes para el moro de guandules con anticipaci\u00f3n',
      'Planificar la celebraci\u00f3n de medianoche en casa o en un evento p\u00fablico',
      'Abastecerse de uvas y bebidas festivas para la cuenta regresiva',
      'Preparar una lista de reproducci\u00f3n de merengue y bachata para la fiesta',
      'Invitar a familia y amigos para la cena tradicional',
    ],
  },

  relatedHolidays: ['do_christmas', 'do_duarte-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Dominican Republic \u2014 Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in the Dominican Republic? Live countdown, traditions, and celebration guide.",
      keywords: ["New Year's Dominican Republic", 'A\u00f1o Nuevo Dominicana', 'Dominican New Year traditions', 'pernil Dominican', 'DR holiday'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} R\u00e9publique dominicaine \u2014 Compte \u00e0 rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} en R\u00e9publique dominicaine ? Compte \u00e0 rebours, traditions et guide de c\u00e9l\u00e9bration.",
      keywords: ["Jour de l'An R\u00e9publique dominicaine", 'Nouvel An Dominicain', 'traditions r\u00e9veillon', 'pernil dominicain', 'f\u00eate dominicaine'],
    },
    es: {
      titleTemplate: 'D\u00eda de A\u00f1o Nuevo {year} Rep\u00fablica Dominicana \u2014 Cuenta regresiva y gu\u00eda',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de A\u00f1o Nuevo {year} en Rep\u00fablica Dominicana? Cuenta regresiva, tradiciones y gu\u00eda de celebraci\u00f3n.',
      keywords: ['A\u00f1o Nuevo Rep\u00fablica Dominicana', 'tradiciones Nochevieja dominicana', 'pernil dominicano', 'moro de guandules', 'fiesta dominicana'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in the Dominican Republic?", fr: "Quand est le Jour de l'An {year} en R\u00e9publique dominicaine ?", es: '\u00bfCu\u00e1ndo es el D\u00eda de A\u00f1o Nuevo {year} en la Rep\u00fablica Dominicana?' },
      answer: {
        en: "New Year's Day {year} in the Dominican Republic is on {date}. It is always January 1.",
        fr: "Le Jour de l'An {year} en R\u00e9publique dominicaine est le {date}. C'est toujours le 1er janvier.",
        es: 'El D\u00eda de A\u00f1o Nuevo {year} en la Rep\u00fablica Dominicana es el {date}. Siempre es el 1 de enero.',
      },
    },
    {
      question: { en: 'What do Dominicans eat on New Year\'s Eve?', fr: 'Que mangent les Dominicains le r\u00e9veillon du Nouvel An ?', es: '\u00bfQu\u00e9 comen los dominicanos en Nochevieja?' },
      answer: {
        en: 'The traditional New Year\'s Eve dinner features pernil (roast pork shoulder), moro de guandules (rice with pigeon peas), ensalada rusa (potato salad), and often telera (a type of bread). Desserts may include dulce de leche and tres leches cake.',
        fr: "Le d\u00eener traditionnel du r\u00e9veillon comprend du pernil (\u00e9paule de porc r\u00f4tie), du moro de guandules (riz aux pois d'Angole), de l'ensalada rusa (salade de pommes de terre) et souvent de la telera (un type de pain).",
        es: 'La cena tradicional de Nochevieja incluye pernil (paleta de cerdo asada), moro de guandules (arroz con guandules), ensalada rusa y a menudo telera (un tipo de pan). Los postres pueden incluir dulce de leche y bizcocho de tres leches.',
      },
    },
    {
      question: { en: 'What are Dominican New Year traditions?', fr: 'Quelles sont les traditions du Nouvel An dominicain ?', es: '\u00bfCu\u00e1les son las tradiciones de A\u00f1o Nuevo dominicanas?' },
      answer: {
        en: 'Dominican New Year traditions include eating 12 grapes at midnight, wearing yellow underwear for luck, watching fireworks, and dancing to merengue and bachata. Some also throw water out the window to "wash away" the old year.',
        fr: "Les traditions du Nouvel An dominicain comprennent manger 12 raisins \u00e0 minuit, porter des sous-v\u00eatements jaunes pour la chance, regarder les feux d'artifice et danser le merengue et la bachata.",
        es: 'Las tradiciones de A\u00f1o Nuevo dominicanas incluyen comer 12 uvas a medianoche, usar ropa interior amarilla para la suerte, ver fuegos artificiales y bailar merengue y bachata. Algunos tambi\u00e9n lanzan agua por la ventana para "lavar" el a\u00f1o viejo.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in the Dominican Republic?", fr: "Le Jour de l'An est-il un jour f\u00e9ri\u00e9 en R\u00e9publique dominicaine ?", es: '\u00bfEs el D\u00eda de A\u00f1o Nuevo un d\u00eda festivo en la Rep\u00fablica Dominicana?' },
      answer: {
        en: "Yes, January 1 is an official public holiday in the Dominican Republic.",
        fr: "Oui, le 1er janvier est un jour f\u00e9ri\u00e9 officiel en R\u00e9publique dominicaine.",
        es: 'S\u00ed, el 1 de enero es un d\u00eda festivo oficial en la Rep\u00fablica Dominicana.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Duarte Day — January 26
// ---------------------------------------------------------------------------

const duarteDay: HolidayData = {
  id: 'do_duarte-day',
  countryCode: 'do',
  slugs: { en: 'duarte-day', fr: 'jour-de-duarte', es: 'dia-de-duarte' },
  names: { en: 'Duarte Day', fr: 'Jour de Duarte', es: 'D\u00eda de Duarte' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 26,

  descriptions: {
    en: "Duarte Day (D\u00eda de Duarte) on January 26 honors Juan Pablo Duarte, the founding father of the Dominican Republic. He is revered as the nation's foremost hero for his role in leading the Dominican independence movement.",
    fr: "Le Jour de Duarte (D\u00eda de Duarte), le 26 janvier, honore Juan Pablo Duarte, le p\u00e8re fondateur de la R\u00e9publique dominicaine. Il est v\u00e9n\u00e9r\u00e9 comme le h\u00e9ros principal de la nation pour son r\u00f4le dans la direction du mouvement d'ind\u00e9pendance dominicain.",
    es: "El D\u00eda de Duarte, el 26 de enero, honra a Juan Pablo Duarte, el padre fundador de la Rep\u00fablica Dominicana. Es venerado como el h\u00e9roe principal de la naci\u00f3n por su papel en la direcci\u00f3n del movimiento de independencia dominicano.",
  },

  history: {
    en: "Juan Pablo Duarte (1813\u20131876) was the principal architect of Dominican independence. Born in Santo Domingo, he founded the secret society La Trinitaria in 1838, which worked to free the Dominican Republic from Haitian rule.\n\nDuarte's vision was of a sovereign, democratic republic. Through La Trinitaria and the broader independence movement, he laid the groundwork for the declaration of independence on February 27, 1844. Though he was exiled shortly after independence due to political rivalries, his ideals continued to shape the nation.\n\nDuarte is known as one of the 'Padres de la Patria' (Founding Fathers), alongside Francisco del Rosario S\u00e1nchez and Ram\u00f3n Mat\u00edas Mella. His birthday, January 26, is honored as a national holiday to celebrate his contributions to the nation.",
    fr: "Juan Pablo Duarte (1813\u20131876) fut l'architecte principal de l'ind\u00e9pendance dominicaine. N\u00e9 \u00e0 Saint-Domingue, il fonda la soci\u00e9t\u00e9 secr\u00e8te La Trinitaria en 1838, qui \u0153uvra pour lib\u00e9rer la R\u00e9publique dominicaine de la domination ha\u00eftienne.\n\nLa vision de Duarte \u00e9tait celle d'une r\u00e9publique souveraine et d\u00e9mocratique. \u00c0 travers La Trinitaria et le mouvement ind\u00e9pendantiste plus large, il posa les bases de la d\u00e9claration d'ind\u00e9pendance du 27 f\u00e9vrier 1844.\n\nDuarte est connu comme l'un des \u00ab Padres de la Patria \u00bb (P\u00e8res fondateurs), aux c\u00f4t\u00e9s de Francisco del Rosario S\u00e1nchez et Ram\u00f3n Mat\u00edas Mella.",
    es: "Juan Pablo Duarte (1813\u20131876) fue el principal arquitecto de la independencia dominicana. Nacido en Santo Domingo, fund\u00f3 la sociedad secreta La Trinitaria en 1838, que trabaj\u00f3 para liberar a la Rep\u00fablica Dominicana del dominio haitiano.\n\nLa visi\u00f3n de Duarte era la de una rep\u00fablica soberana y democr\u00e1tica. A trav\u00e9s de La Trinitaria y el movimiento independentista m\u00e1s amplio, sent\u00f3 las bases para la declaraci\u00f3n de independencia del 27 de febrero de 1844. Aunque fue exiliado poco despu\u00e9s de la independencia debido a rivalidades pol\u00edticas, sus ideales continuaron dando forma a la naci\u00f3n.\n\nDuarte es conocido como uno de los 'Padres de la Patria', junto con Francisco del Rosario S\u00e1nchez y Ram\u00f3n Mat\u00edas Mella. Su cumplea\u00f1os, el 26 de enero, se honra como d\u00eda festivo nacional para celebrar sus contribuciones a la naci\u00f3n.",
  },

  traditions: {
    en: [
      'Attending patriotic ceremonies and wreath-laying at Duarte\'s monuments',
      'Raising the Dominican flag at schools, homes, and public buildings',
      'School programs with recitations, songs, and historical presentations about Duarte',
      'Visiting the Altar de la Patria in Santo Domingo where Duarte is interred',
      'Community gatherings celebrating national identity and independence ideals',
    ],
    fr: [
      'Assister \u00e0 des c\u00e9r\u00e9monies patriotiques et d\u00e9p\u00f4ts de gerbes aux monuments de Duarte',
      'Lever le drapeau dominicain aux \u00e9coles, maisons et b\u00e2timents publics',
      'Programmes scolaires avec des r\u00e9citations, chansons et pr\u00e9sentations historiques sur Duarte',
      'Visiter l\'Altar de la Patria \u00e0 Saint-Domingue o\u00f9 Duarte repose',
      'Rassemblements communautaires c\u00e9l\u00e9brant l\'identit\u00e9 nationale et les id\u00e9aux d\'ind\u00e9pendance',
    ],
    es: [
      'Asistir a ceremonias patri\u00f3ticas y colocaci\u00f3n de ofrendas florales en los monumentos de Duarte',
      'Izar la bandera dominicana en escuelas, hogares y edificios p\u00fablicos',
      'Programas escolares con recitaciones, canciones y presentaciones hist\u00f3ricas sobre Duarte',
      'Visitar el Altar de la Patria en Santo Domingo donde Duarte est\u00e1 sepultado',
      'Reuniones comunitarias celebrando la identidad nacional y los ideales de independencia',
    ],
  },

  funFacts: {
    en: [
      'Duarte founded La Trinitaria with just eight other young Dominicans, each sworn to secrecy.',
      'He spent much of his life in exile, dying in Venezuela in 1876 without seeing many of his ideals realized.',
      'Duarte\'s remains were returned to the Dominican Republic in 1884 and are now in the Altar de la Patria.',
      'The organization La Trinitaria was named for the Holy Trinity, and members organized in cells of three.',
      'Duarte refused the presidency because he believed it should be decided by free elections, not military force.',
    ],
    fr: [
      'Duarte fonda La Trinitaria avec seulement huit autres jeunes Dominicains, chacun jur\u00e9 au secret.',
      'Il passa une grande partie de sa vie en exil, mourant au Venezuela en 1876 sans voir beaucoup de ses id\u00e9aux r\u00e9alis\u00e9s.',
      'Les restes de Duarte furent ramen\u00e9s en R\u00e9publique dominicaine en 1884 et se trouvent maintenant \u00e0 l\'Altar de la Patria.',
      'L\'organisation La Trinitaria fut nomm\u00e9e d\'apr\u00e8s la Sainte Trinit\u00e9, et les membres s\'organisaient en cellules de trois.',
      'Duarte refusa la pr\u00e9sidence car il croyait qu\'elle devait \u00eatre d\u00e9cid\u00e9e par des \u00e9lections libres, pas par la force militaire.',
    ],
    es: [
      'Duarte fund\u00f3 La Trinitaria con solo otros ocho j\u00f3venes dominicanos, cada uno jurado al secreto.',
      'Pas\u00f3 gran parte de su vida en el exilio, muriendo en Venezuela en 1876 sin ver muchos de sus ideales realizados.',
      'Los restos de Duarte fueron devueltos a la Rep\u00fablica Dominicana en 1884 y ahora est\u00e1n en el Altar de la Patria.',
      'La organizaci\u00f3n La Trinitaria fue nombrada por la Sant\u00edsima Trinidad, y los miembros se organizaban en c\u00e9lulas de tres.',
      'Duarte rechaz\u00f3 la presidencia porque cre\u00eda que deb\u00eda decidirse mediante elecciones libres, no por la fuerza militar.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit the Altar de la Patria in Santo Domingo to pay respects',
      'Attend a local flag-raising ceremony or patriotic event',
      'Learn about Juan Pablo Duarte and La Trinitaria',
      'Display the Dominican flag at your home or workplace',
      'Share Duarte\'s story and ideals with children and young people',
    ],
    fr: [
      'Visiter l\'Altar de la Patria \u00e0 Saint-Domingue pour rendre hommage',
      'Assister \u00e0 une c\u00e9r\u00e9monie locale de lev\u00e9e du drapeau ou un \u00e9v\u00e9nement patriotique',
      'Se renseigner sur Juan Pablo Duarte et La Trinitaria',
      'Afficher le drapeau dominicain \u00e0 votre domicile ou lieu de travail',
      'Partager l\'histoire et les id\u00e9aux de Duarte avec les enfants et les jeunes',
    ],
    es: [
      'Visitar el Altar de la Patria en Santo Domingo para rendir homenaje',
      'Asistir a una ceremonia local de izado de bandera o evento patri\u00f3tico',
      'Aprender sobre Juan Pablo Duarte y La Trinitaria',
      'Exhibir la bandera dominicana en su hogar o lugar de trabajo',
      'Compartir la historia y los ideales de Duarte con ni\u00f1os y j\u00f3venes',
    ],
  },

  relatedHolidays: ['do_independence-day', 'do_restoration-day'],

  seo: {
    en: {
      titleTemplate: 'Duarte Day {year} Dominican Republic \u2014 Countdown & History',
      descriptionTemplate: 'When is Duarte Day {year}? Live countdown to January 26, history of Juan Pablo Duarte, and Dominican celebration guide.',
      keywords: ['Duarte Day', 'D\u00eda de Duarte', 'Juan Pablo Duarte', 'Dominican founding father', 'January 26 Dominican Republic'],
    },
    fr: {
      titleTemplate: 'Jour de Duarte {year} R\u00e9publique dominicaine \u2014 Compte \u00e0 rebours et histoire',
      descriptionTemplate: 'Quand est le Jour de Duarte {year} ? Compte \u00e0 rebours, histoire de Juan Pablo Duarte et guide de c\u00e9l\u00e9bration.',
      keywords: ['Jour de Duarte', 'D\u00eda de Duarte', 'Juan Pablo Duarte', 'p\u00e8re fondateur dominicain', '26 janvier R\u00e9publique dominicaine'],
    },
    es: {
      titleTemplate: 'D\u00eda de Duarte {year} Rep\u00fablica Dominicana \u2014 Cuenta regresiva e historia',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de Duarte {year}? Cuenta regresiva, historia de Juan Pablo Duarte y gu\u00eda de celebraci\u00f3n dominicana.',
      keywords: ['D\u00eda de Duarte', 'Juan Pablo Duarte', 'padre fundador dominicano', '26 de enero Rep\u00fablica Dominicana', 'La Trinitaria'],
    },
  },

  faq: [
    {
      question: { en: 'When is Duarte Day {year}?', fr: 'Quand est le Jour de Duarte {year} ?', es: '\u00bfCu\u00e1ndo es el D\u00eda de Duarte {year}?' },
      answer: {
        en: 'Duarte Day {year} is on {date}. It is always January 26, the birthday of Juan Pablo Duarte.',
        fr: "Le Jour de Duarte {year} est le {date}. C'est toujours le 26 janvier, anniversaire de Juan Pablo Duarte.",
        es: 'El D\u00eda de Duarte {year} es el {date}. Siempre es el 26 de enero, cumplea\u00f1os de Juan Pablo Duarte.',
      },
    },
    {
      question: { en: 'Who was Juan Pablo Duarte?', fr: 'Qui \u00e9tait Juan Pablo Duarte ?', es: '\u00bfQui\u00e9n fue Juan Pablo Duarte?' },
      answer: {
        en: 'Juan Pablo Duarte (1813\u20131876) was the founding father of the Dominican Republic. He created the secret society La Trinitaria and led the independence movement that freed the country from Haitian rule in 1844.',
        fr: "Juan Pablo Duarte (1813\u20131876) fut le p\u00e8re fondateur de la R\u00e9publique dominicaine. Il cr\u00e9a la soci\u00e9t\u00e9 secr\u00e8te La Trinitaria et dirigea le mouvement d'ind\u00e9pendance qui lib\u00e9ra le pays de la domination ha\u00eftienne en 1844.",
        es: 'Juan Pablo Duarte (1813\u20131876) fue el padre fundador de la Rep\u00fablica Dominicana. Cre\u00f3 la sociedad secreta La Trinitaria y lider\u00f3 el movimiento de independencia que liber\u00f3 al pa\u00eds del dominio haitiano en 1844.',
      },
    },
    {
      question: { en: 'What was La Trinitaria?', fr: "Qu'\u00e9tait La Trinitaria ?", es: '\u00bfQu\u00e9 fue La Trinitaria?' },
      answer: {
        en: 'La Trinitaria was a secret society founded by Juan Pablo Duarte in 1838 to organize the Dominican independence movement. Named for the Holy Trinity, it used a cell structure where each member recruited two others.',
        fr: "La Trinitaria \u00e9tait une soci\u00e9t\u00e9 secr\u00e8te fond\u00e9e par Juan Pablo Duarte en 1838 pour organiser le mouvement d'ind\u00e9pendance dominicain. Nomm\u00e9e d'apr\u00e8s la Sainte Trinit\u00e9, elle utilisait une structure cellulaire o\u00f9 chaque membre recrutait deux autres.",
        es: 'La Trinitaria fue una sociedad secreta fundada por Juan Pablo Duarte en 1838 para organizar el movimiento de independencia dominicano. Nombrada por la Sant\u00edsima Trinidad, usaba una estructura celular donde cada miembro reclutaba a otros dos.',
      },
    },
    {
      question: { en: 'Is Duarte Day a public holiday?', fr: 'Le Jour de Duarte est-il un jour f\u00e9ri\u00e9 ?', es: '\u00bfEs el D\u00eda de Duarte un d\u00eda festivo?' },
      answer: {
        en: 'Yes, Duarte Day on January 26 is an official public holiday in the Dominican Republic.',
        fr: "Oui, le Jour de Duarte, le 26 janvier, est un jour f\u00e9ri\u00e9 officiel en R\u00e9publique dominicaine.",
        es: 'S\u00ed, el D\u00eda de Duarte, el 26 de enero, es un d\u00eda festivo oficial en la Rep\u00fablica Dominicana.',
      },
    },
  ],

  icon: '\ud83c\udfdb\ufe0f',
};

// ---------------------------------------------------------------------------
// Independence Day — February 27
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'do_independence-day',
  countryCode: 'do',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Ind\u00e9pendance", es: 'D\u00eda de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 2,
  fixedDay: 27,

  descriptions: {
    en: 'Independence Day on February 27 celebrates the Dominican Republic\'s independence from Haiti, declared in 1844. It is the most patriotic day in the Dominican calendar, marked by parades, political events, and national celebrations.',
    fr: "Le Jour de l'Ind\u00e9pendance, le 27 f\u00e9vrier, c\u00e9l\u00e8bre l'ind\u00e9pendance de la R\u00e9publique dominicaine d'Ha\u00efti, d\u00e9clar\u00e9e en 1844. C'est le jour le plus patriotique du calendrier dominicain, marqu\u00e9 par des d\u00e9fil\u00e9s, des \u00e9v\u00e9nements politiques et des c\u00e9l\u00e9brations nationales.",
    es: 'El D\u00eda de la Independencia, el 27 de febrero, celebra la independencia de la Rep\u00fablica Dominicana de Hait\u00ed, declarada en 1844. Es el d\u00eda m\u00e1s patri\u00f3tico del calendario dominicano, marcado por desfiles, eventos pol\u00edticos y celebraciones nacionales.',
  },

  history: {
    en: "On February 27, 1844, the Dominican Republic declared its independence from Haiti, which had occupied the eastern part of Hispaniola since 1822. The independence movement, led by Juan Pablo Duarte, Francisco del Rosario S\u00e1nchez, and Ram\u00f3n Mat\u00edas Mella, culminated in the famous Trabucazo \u2014 a shot fired at the Puerta del Conde in Santo Domingo.\n\nThe declaration was the result of years of underground organizing by La Trinitaria and other patriotic groups. Haiti's 22-year occupation had generated deep resentment, and the independence movement drew broad support across Dominican society.\n\nToday, the anniversary is celebrated with military parades, patriotic ceremonies at the Altar de la Patria, and cultural events across the country. It is a day of profound national pride for all Dominicans.",
    fr: "Le 27 f\u00e9vrier 1844, la R\u00e9publique dominicaine d\u00e9clara son ind\u00e9pendance d'Ha\u00efti, qui occupait la partie orientale d'Hispaniola depuis 1822. Le mouvement d'ind\u00e9pendance, men\u00e9 par Juan Pablo Duarte, Francisco del Rosario S\u00e1nchez et Ram\u00f3n Mat\u00edas Mella, culmina avec le c\u00e9l\u00e8bre Trabucazo \u2014 un coup de feu tir\u00e9 \u00e0 la Puerta del Conde \u00e0 Saint-Domingue.\n\nLa d\u00e9claration fut le r\u00e9sultat d'ann\u00e9es d'organisation clandestine par La Trinitaria et d'autres groupes patriotiques.\n\nAujourd'hui, l'anniversaire est c\u00e9l\u00e9br\u00e9 avec des d\u00e9fil\u00e9s militaires, des c\u00e9r\u00e9monies patriotiques \u00e0 l'Altar de la Patria et des \u00e9v\u00e9nements culturels \u00e0 travers le pays.",
    es: "El 27 de febrero de 1844, la Rep\u00fablica Dominicana declar\u00f3 su independencia de Hait\u00ed, que hab\u00eda ocupado la parte oriental de La Espa\u00f1ola desde 1822. El movimiento de independencia, liderado por Juan Pablo Duarte, Francisco del Rosario S\u00e1nchez y Ram\u00f3n Mat\u00edas Mella, culmin\u00f3 con el famoso Trabucazo \u2014 un disparo en la Puerta del Conde en Santo Domingo.\n\nLa declaraci\u00f3n fue el resultado de a\u00f1os de organizaci\u00f3n clandestina por La Trinitaria y otros grupos patri\u00f3ticos. La ocupaci\u00f3n haitiana de 22 a\u00f1os hab\u00eda generado un profundo resentimiento, y el movimiento independentista atrajo amplio apoyo en la sociedad dominicana.\n\nHoy, el aniversario se celebra con desfiles militares, ceremonias patri\u00f3ticas en el Altar de la Patria y eventos culturales en todo el pa\u00eds. Es un d\u00eda de profundo orgullo nacional para todos los dominicanos.",
  },

  traditions: {
    en: [
      'Watching military parades through the streets of Santo Domingo',
      'Attending patriotic ceremonies at the Altar de la Patria',
      'Flying the Dominican flag at homes, schools, and businesses',
      'School children performing patriotic songs and recitations',
      'Enjoying street festivals with Dominican food and music',
      'Wearing red, white, and blue in honor of the national colors',
    ],
    fr: [
      'Regarder des d\u00e9fil\u00e9s militaires dans les rues de Saint-Domingue',
      'Assister \u00e0 des c\u00e9r\u00e9monies patriotiques \u00e0 l\'Altar de la Patria',
      'Hisser le drapeau dominicain aux maisons, \u00e9coles et entreprises',
      'Les \u00e9coliers interpr\u00e8tent des chansons et r\u00e9citations patriotiques',
      'Profiter des festivals de rue avec de la nourriture et de la musique dominicaines',
      'Porter du rouge, blanc et bleu en l\'honneur des couleurs nationales',
    ],
    es: [
      'Ver desfiles militares por las calles de Santo Domingo',
      'Asistir a ceremonias patri\u00f3ticas en el Altar de la Patria',
      'Izar la bandera dominicana en hogares, escuelas y negocios',
      'Los ni\u00f1os de escuela interpretan canciones y recitaciones patri\u00f3ticas',
      'Disfrutar de festivales callejeros con comida y m\u00fasica dominicana',
      'Vestir rojo, blanco y azul en honor a los colores nacionales',
    ],
  },

  funFacts: {
    en: [
      'The Dominican Republic is the only country in the Americas that gained independence from another former colony (Haiti), rather than from a European power.',
      'The Trabucazo shot at the Puerta del Conde signaled the start of Dominican independence on the night of February 27, 1844.',
      'The Dominican flag was designed by Juan Pablo Duarte and features a white cross dividing red and blue quadrants.',
      'The Puerta del Conde in Santo Domingo, where independence was declared, is now a national monument.',
      'February 27 is followed by a week of Carnival celebrations in many Dominican cities.',
    ],
    fr: [
      'La R\u00e9publique dominicaine est le seul pays des Am\u00e9riques \u00e0 avoir obtenu son ind\u00e9pendance d\'une autre ancienne colonie (Ha\u00efti), plut\u00f4t que d\'une puissance europ\u00e9enne.',
      'Le coup de Trabucazo \u00e0 la Puerta del Conde signa le d\u00e9but de l\'ind\u00e9pendance dominicaine dans la nuit du 27 f\u00e9vrier 1844.',
      'Le drapeau dominicain fut con\u00e7u par Juan Pablo Duarte et pr\u00e9sente une croix blanche divisant des quadrants rouges et bleus.',
      'La Puerta del Conde \u00e0 Saint-Domingue, o\u00f9 l\'ind\u00e9pendance fut d\u00e9clar\u00e9e, est maintenant un monument national.',
      'Le 27 f\u00e9vrier est suivi d\'une semaine de c\u00e9l\u00e9brations de Carnaval dans de nombreuses villes dominicaines.',
    ],
    es: [
      'La Rep\u00fablica Dominicana es el \u00fanico pa\u00eds de las Am\u00e9ricas que obtuvo su independencia de otra antigua colonia (Hait\u00ed), en lugar de una potencia europea.',
      'El disparo del Trabucazo en la Puerta del Conde se\u00f1al\u00f3 el inicio de la independencia dominicana en la noche del 27 de febrero de 1844.',
      'La bandera dominicana fue dise\u00f1ada por Juan Pablo Duarte y presenta una cruz blanca dividiendo cuadrantes rojos y azules.',
      'La Puerta del Conde en Santo Domingo, donde se declar\u00f3 la independencia, es ahora un monumento nacional.',
      'El 27 de febrero es seguido por una semana de celebraciones de Carnaval en muchas ciudades dominicanas.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend the military parade in Santo Domingo',
      'Visit the Altar de la Patria and the Puerta del Conde',
      'Display the Dominican flag proudly at your home',
      'Enjoy Carnival celebrations that follow Independence Day',
      'Learn about the Padres de la Patria and their contributions',
    ],
    fr: [
      'Assister au d\u00e9fil\u00e9 militaire \u00e0 Saint-Domingue',
      'Visiter l\'Altar de la Patria et la Puerta del Conde',
      'Afficher fi\u00e8rement le drapeau dominicain chez vous',
      'Profiter des c\u00e9l\u00e9brations de Carnaval qui suivent le Jour de l\'Ind\u00e9pendance',
      'Se renseigner sur les Padres de la Patria et leurs contributions',
    ],
    es: [
      'Asistir al desfile militar en Santo Domingo',
      'Visitar el Altar de la Patria y la Puerta del Conde',
      'Exhibir la bandera dominicana con orgullo en su hogar',
      'Disfrutar de las celebraciones de Carnaval que siguen al D\u00eda de la Independencia',
      'Aprender sobre los Padres de la Patria y sus contribuciones',
    ],
  },

  relatedHolidays: ['do_duarte-day', 'do_restoration-day'],

  seo: {
    en: {
      titleTemplate: 'Dominican Republic Independence Day {year} \u2014 February 27 Countdown',
      descriptionTemplate: 'When is Dominican Independence Day {year}? Live countdown to February 27, history of Dominican independence, and celebration guide.',
      keywords: ['Dominican Independence Day', 'February 27 Dominican Republic', 'D\u00eda de la Independencia', 'Dominican Republic holiday', 'Padres de la Patria'],
    },
    fr: {
      titleTemplate: "Jour de l'Ind\u00e9pendance R\u00e9publique dominicaine {year} \u2014 Compte \u00e0 rebours du 27 f\u00e9vrier",
      descriptionTemplate: "Quand est le Jour de l'Ind\u00e9pendance dominicain {year} ? Compte \u00e0 rebours, histoire et guide de c\u00e9l\u00e9bration.",
      keywords: ["Ind\u00e9pendance R\u00e9publique dominicaine", '27 f\u00e9vrier', 'D\u00eda de la Independencia', 'f\u00eate dominicaine', 'Padres de la Patria'],
    },
    es: {
      titleTemplate: 'D\u00eda de la Independencia Rep\u00fablica Dominicana {year} \u2014 Cuenta regresiva del 27 de febrero',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Independencia Dominicana {year}? Cuenta regresiva, historia de la independencia dominicana y gu\u00eda de celebraci\u00f3n.',
      keywords: ['D\u00eda de la Independencia Dominicana', '27 de febrero', 'independencia Rep\u00fablica Dominicana', 'Padres de la Patria', 'fiesta dominicana'],
    },
  },

  faq: [
    {
      question: { en: 'When is Dominican Independence Day {year}?', fr: "Quand est le Jour de l'Ind\u00e9pendance dominicain {year} ?", es: '\u00bfCu\u00e1ndo es el D\u00eda de la Independencia Dominicana {year}?' },
      answer: {
        en: 'Dominican Independence Day {year} is on {date}. It is always February 27.',
        fr: "Le Jour de l'Ind\u00e9pendance dominicain {year} est le {date}. C'est toujours le 27 f\u00e9vrier.",
        es: 'El D\u00eda de la Independencia Dominicana {year} es el {date}. Siempre es el 27 de febrero.',
      },
    },
    {
      question: { en: 'Who did the Dominican Republic gain independence from?', fr: 'De qui la R\u00e9publique dominicaine a-t-elle obtenu son ind\u00e9pendance ?', es: '\u00bfDe qui\u00e9n obtuvo la independencia la Rep\u00fablica Dominicana?' },
      answer: {
        en: 'The Dominican Republic gained independence from Haiti on February 27, 1844. Haiti had occupied the eastern part of Hispaniola since 1822.',
        fr: "La R\u00e9publique dominicaine obtint son ind\u00e9pendance d'Ha\u00efti le 27 f\u00e9vrier 1844. Ha\u00efti avait occup\u00e9 la partie orientale d'Hispaniola depuis 1822.",
        es: 'La Rep\u00fablica Dominicana obtuvo su independencia de Hait\u00ed el 27 de febrero de 1844. Hait\u00ed hab\u00eda ocupado la parte oriental de La Espa\u00f1ola desde 1822.',
      },
    },
    {
      question: { en: 'What is the Trabucazo?', fr: "Qu'est-ce que le Trabucazo ?", es: '\u00bfQu\u00e9 es el Trabucazo?' },
      answer: {
        en: 'The Trabucazo was the famous shot fired at the Puerta del Conde in Santo Domingo on the night of February 27, 1844, signaling the declaration of Dominican independence from Haiti.',
        fr: "Le Trabucazo fut le c\u00e9l\u00e8bre coup de feu tir\u00e9 \u00e0 la Puerta del Conde \u00e0 Saint-Domingue dans la nuit du 27 f\u00e9vrier 1844, signalant la d\u00e9claration d'ind\u00e9pendance dominicaine d'Ha\u00efti.",
        es: 'El Trabucazo fue el famoso disparo en la Puerta del Conde en Santo Domingo en la noche del 27 de febrero de 1844, se\u00f1alando la declaraci\u00f3n de independencia dominicana de Hait\u00ed.',
      },
    },
    {
      question: { en: 'Is Dominican Independence Day a public holiday?', fr: "Le Jour de l'Ind\u00e9pendance dominicain est-il un jour f\u00e9ri\u00e9 ?", es: '\u00bfEs el D\u00eda de la Independencia Dominicana un d\u00eda festivo?' },
      answer: {
        en: 'Yes, February 27 is the most important public holiday in the Dominican Republic.',
        fr: "Oui, le 27 f\u00e9vrier est le jour f\u00e9ri\u00e9 le plus important de la R\u00e9publique dominicaine.",
        es: 'S\u00ed, el 27 de febrero es el d\u00eda festivo m\u00e1s importante de la Rep\u00fablica Dominicana.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\udde9\ud83c\uddf4',
};

// ---------------------------------------------------------------------------
// Good Friday
// ---------------------------------------------------------------------------

const goodFriday: HolidayData = {
  id: 'do_good-friday',
  countryCode: 'do',
  slugs: { en: 'good-friday', fr: 'vendredi-saint', es: 'viernes-santo' },
  names: { en: 'Good Friday', fr: 'Vendredi Saint', es: 'Viernes Santo' },

  dateType: 'calculated',
  calculateDate: getGoodFriday,

  descriptions: {
    en: 'Good Friday (Viernes Santo) is one of the most solemn religious observances in the Dominican Republic. As a predominantly Catholic nation, the country marks the crucifixion of Jesus Christ with church services, processions, and a day of reflection.',
    fr: "Le Vendredi Saint (Viernes Santo) est l'une des observances religieuses les plus solennelles de la R\u00e9publique dominicaine. En tant que nation \u00e0 pr\u00e9dominance catholique, le pays comm\u00e9more la crucifixion de J\u00e9sus-Christ avec des services religieux, des processions et une journ\u00e9e de r\u00e9flexion.",
    es: 'El Viernes Santo es una de las observancias religiosas m\u00e1s solemnes de la Rep\u00fablica Dominicana. Como naci\u00f3n predominantemente cat\u00f3lica, el pa\u00eds conmemora la crucifixi\u00f3n de Jesucristo con servicios religiosos, procesiones y un d\u00eda de reflexi\u00f3n.',
  },

  history: {
    en: "Good Friday is deeply embedded in Dominican culture, reflecting the country's strong Catholic heritage dating back to Spanish colonization. The Dominican Republic was the site of the first cathedral in the Americas, the Catedral Primada de Am\u00e9rica in Santo Domingo, built in the early 16th century.\n\nThe Semana Santa (Holy Week) traditions in the Dominican Republic are among the most elaborate in the Caribbean. Processions featuring statues of Christ and the Virgin Mary wind through the streets of towns and cities, accompanied by solemn music and prayers.\n\nMany Dominicans observe strict fasting and abstinence from meat on Good Friday, eating fish or seafood instead. The day is marked by a spirit of devotion and solemnity that contrasts with the country's typically vibrant and festive culture.",
    fr: "Le Vendredi Saint est profond\u00e9ment ancr\u00e9 dans la culture dominicaine, refl\u00e9tant le fort h\u00e9ritage catholique du pays remontant \u00e0 la colonisation espagnole. La R\u00e9publique dominicaine abrite la premi\u00e8re cath\u00e9drale des Am\u00e9riques, la Catedral Primada de Am\u00e9rica \u00e0 Saint-Domingue, construite au d\u00e9but du XVIe si\u00e8cle.\n\nLes traditions de la Semana Santa (Semaine Sainte) en R\u00e9publique dominicaine sont parmi les plus \u00e9labor\u00e9es des Cara\u00efbes.\n\nDe nombreux Dominicains observent un je\u00fbne strict et s'abstiennent de viande le Vendredi Saint, mangeant du poisson ou des fruits de mer \u00e0 la place.",
    es: "El Viernes Santo est\u00e1 profundamente arraigado en la cultura dominicana, reflejando la fuerte herencia cat\u00f3lica del pa\u00eds que data de la colonizaci\u00f3n espa\u00f1ola. La Rep\u00fablica Dominicana fue el sitio de la primera catedral de las Am\u00e9ricas, la Catedral Primada de Am\u00e9rica en Santo Domingo, construida a principios del siglo XVI.\n\nLas tradiciones de Semana Santa en la Rep\u00fablica Dominicana est\u00e1n entre las m\u00e1s elaboradas del Caribe. Procesiones con estatuas de Cristo y la Virgen Mar\u00eda recorren las calles de pueblos y ciudades, acompa\u00f1adas de m\u00fasica solemne y oraciones.\n\nMuchos dominicanos observan ayuno estricto y abstinencia de carne el Viernes Santo, comiendo pescado o mariscos en su lugar. El d\u00eda est\u00e1 marcado por un esp\u00edritu de devoci\u00f3n y solemnidad que contrasta con la cultura t\u00edpicamente vibrante y festiva del pa\u00eds.",
  },

  traditions: {
    en: [
      'Attending the Stations of the Cross and church services',
      'Watching religious processions through city streets',
      'Fasting and abstaining from meat, eating fish or seafood instead',
      'Preparing habichuelas con dulce (sweet cream of beans), a traditional Lenten dessert',
      'Visiting beaches during the Semana Santa holiday period',
      'Spending time in prayer and reflection with family',
    ],
    fr: [
      'Assister au Chemin de Croix et aux services religieux',
      'Regarder les processions religieuses dans les rues',
      'Je\u00fbner et s\'abstenir de viande, manger du poisson ou des fruits de mer',
      'Pr\u00e9parer des habichuelas con dulce (cr\u00e8me de haricots sucr\u00e9e), un dessert traditionnel du Car\u00eame',
      'Visiter les plages pendant la p\u00e9riode de vacances de la Semana Santa',
      'Passer du temps en pri\u00e8re et en r\u00e9flexion en famille',
    ],
    es: [
      'Asistir al V\u00eda Crucis y servicios religiosos',
      'Ver procesiones religiosas por las calles de la ciudad',
      'Ayunar y abstenerse de carne, comiendo pescado o mariscos en su lugar',
      'Preparar habichuelas con dulce, un postre tradicional de Cuaresma',
      'Visitar las playas durante el per\u00edodo de vacaciones de Semana Santa',
      'Pasar tiempo en oraci\u00f3n y reflexi\u00f3n con la familia',
    ],
  },

  funFacts: {
    en: [
      'Habichuelas con dulce, a sweet bean cream dessert, is eaten almost exclusively during Lent and Holy Week in the Dominican Republic.',
      'The Catedral Primada de Am\u00e9rica in Santo Domingo, the oldest cathedral in the Americas, hosts special Good Friday services.',
      'Many Dominicans head to the beach during Semana Santa, making it one of the busiest travel weeks of the year.',
      'Some Dominican towns stage elaborate passion plays re-enacting the crucifixion of Christ.',
      'Good Friday is one of the few days when even the liveliest Dominican communities fall quiet in observance.',
    ],
    fr: [
      'Les habichuelas con dulce, un dessert cr\u00e9meux sucr\u00e9 aux haricots, ne se mangent presque exclusivement que pendant le Car\u00eame et la Semaine Sainte en R\u00e9publique dominicaine.',
      'La Catedral Primada de Am\u00e9rica \u00e0 Saint-Domingue, la plus ancienne cath\u00e9drale des Am\u00e9riques, accueille des services sp\u00e9ciaux le Vendredi Saint.',
      'De nombreux Dominicains se rendent \u00e0 la plage pendant la Semana Santa, en faisant l\'une des semaines de voyage les plus charg\u00e9es de l\'ann\u00e9e.',
      'Certaines villes dominicaines mettent en sc\u00e8ne des repr\u00e9sentations \u00e9labor\u00e9es de la Passion recr\u00e9ant la crucifixion du Christ.',
      'Le Vendredi Saint est l\'un des rares jours o\u00f9 m\u00eame les communaut\u00e9s dominicaines les plus anim\u00e9es se taisent en observance.',
    ],
    es: [
      'Las habichuelas con dulce, un postre cremoso dulce de frijoles, se come casi exclusivamente durante la Cuaresma y Semana Santa en la Rep\u00fablica Dominicana.',
      'La Catedral Primada de Am\u00e9rica en Santo Domingo, la catedral m\u00e1s antigua de las Am\u00e9ricas, realiza servicios especiales de Viernes Santo.',
      'Muchos dominicanos van a la playa durante Semana Santa, haciendo de esta una de las semanas de viaje m\u00e1s concurridas del a\u00f1o.',
      'Algunos pueblos dominicanos realizan elaboradas representaciones de la Pasi\u00f3n recreando la crucifixi\u00f3n de Cristo.',
      'El Viernes Santo es uno de los pocos d\u00edas en que incluso las comunidades dominicanas m\u00e1s animadas guardan silencio en observancia.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend church services and the Stations of the Cross',
      'Prepare or order habichuelas con dulce for the Lenten season',
      'Plan fish or seafood meals for Good Friday',
      'If traveling during Semana Santa, book accommodation early',
      'Take time for quiet reflection and family activities',
    ],
    fr: [
      'Assister aux services religieux et au Chemin de Croix',
      'Pr\u00e9parer ou commander des habichuelas con dulce pour la saison du Car\u00eame',
      'Planifier des repas de poisson ou fruits de mer pour le Vendredi Saint',
      'Si vous voyagez pendant la Semana Santa, r\u00e9server l\'h\u00e9bergement t\u00f4t',
      'Prendre du temps pour la r\u00e9flexion et les activit\u00e9s familiales',
    ],
    es: [
      'Asistir a servicios religiosos y al V\u00eda Crucis',
      'Preparar o pedir habichuelas con dulce para la temporada de Cuaresma',
      'Planificar comidas de pescado o mariscos para el Viernes Santo',
      'Si viaja durante Semana Santa, reservar alojamiento con anticipaci\u00f3n',
      'Tomar tiempo para la reflexi\u00f3n tranquila y actividades familiares',
    ],
  },

  relatedHolidays: ['do_christmas', 'do_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Good Friday {year} Dominican Republic \u2014 Date & Countdown',
      descriptionTemplate: 'When is Good Friday {year} in the Dominican Republic? Live countdown, Semana Santa traditions, and celebration guide.',
      keywords: ['Good Friday Dominican Republic', 'Viernes Santo', 'Semana Santa DR', 'Dominican Easter', 'habichuelas con dulce'],
    },
    fr: {
      titleTemplate: 'Vendredi Saint {year} R\u00e9publique dominicaine \u2014 Date et compte \u00e0 rebours',
      descriptionTemplate: 'Quand est le Vendredi Saint {year} en R\u00e9publique dominicaine ? Compte \u00e0 rebours, traditions de la Semana Santa et guide.',
      keywords: ['Vendredi Saint R\u00e9publique dominicaine', 'Viernes Santo', 'Semana Santa', 'P\u00e2ques dominicaines', 'habichuelas con dulce'],
    },
    es: {
      titleTemplate: 'Viernes Santo {year} Rep\u00fablica Dominicana \u2014 Fecha y cuenta regresiva',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el Viernes Santo {year} en la Rep\u00fablica Dominicana? Cuenta regresiva, tradiciones de Semana Santa y gu\u00eda de celebraci\u00f3n.',
      keywords: ['Viernes Santo Rep\u00fablica Dominicana', 'Semana Santa dominicana', 'habichuelas con dulce', 'tradiciones Pascua', 'fiesta dominicana'],
    },
  },

  faq: [
    {
      question: { en: 'When is Good Friday {year} in the Dominican Republic?', fr: 'Quand est le Vendredi Saint {year} en R\u00e9publique dominicaine ?', es: '\u00bfCu\u00e1ndo es el Viernes Santo {year} en la Rep\u00fablica Dominicana?' },
      answer: {
        en: 'Good Friday {year} in the Dominican Republic falls on {date}. It moves each year based on the date of Easter.',
        fr: "Le Vendredi Saint {year} en R\u00e9publique dominicaine tombe le {date}. La date change chaque ann\u00e9e en fonction de P\u00e2ques.",
        es: 'El Viernes Santo {year} en la Rep\u00fablica Dominicana cae el {date}. La fecha cambia cada a\u00f1o seg\u00fan la fecha de Pascua.',
      },
    },
    {
      question: { en: 'What are habichuelas con dulce?', fr: 'Que sont les habichuelas con dulce ?', es: '\u00bfQu\u00e9 son las habichuelas con dulce?' },
      answer: {
        en: 'Habichuelas con dulce is a traditional Dominican dessert made from sweet cream of red beans, milk, sugar, spices, and raisins. It is prepared almost exclusively during Lent and Holy Week.',
        fr: "Les habichuelas con dulce sont un dessert dominicain traditionnel \u00e0 base de cr\u00e8me sucr\u00e9e de haricots rouges, lait, sucre, \u00e9pices et raisins secs. Il est pr\u00e9par\u00e9 presque exclusivement pendant le Car\u00eame et la Semaine Sainte.",
        es: 'Las habichuelas con dulce son un postre dominicano tradicional hecho de crema dulce de habichuelas rojas, leche, az\u00facar, especias y pasas. Se prepara casi exclusivamente durante la Cuaresma y Semana Santa.',
      },
    },
    {
      question: { en: 'Is Good Friday a public holiday in the Dominican Republic?', fr: 'Le Vendredi Saint est-il un jour f\u00e9ri\u00e9 en R\u00e9publique dominicaine ?', es: '\u00bfEs el Viernes Santo un d\u00eda festivo en la Rep\u00fablica Dominicana?' },
      answer: {
        en: 'Yes, Good Friday is an official public holiday in the Dominican Republic. Most businesses, schools, and government offices are closed.',
        fr: "Oui, le Vendredi Saint est un jour f\u00e9ri\u00e9 officiel en R\u00e9publique dominicaine. La plupart des entreprises, \u00e9coles et bureaux gouvernementaux sont ferm\u00e9s.",
        es: 'S\u00ed, el Viernes Santo es un d\u00eda festivo oficial en la Rep\u00fablica Dominicana. La mayor\u00eda de los negocios, escuelas y oficinas gubernamentales est\u00e1n cerrados.',
      },
    },
    {
      question: { en: 'What happens during Semana Santa in the DR?', fr: 'Que se passe-t-il pendant la Semana Santa en R\u00e9publique dominicaine ?', es: '\u00bfQu\u00e9 sucede durante la Semana Santa en la RD?' },
      answer: {
        en: 'Semana Santa features religious processions, church services, fasting, and the preparation of special foods. Many Dominicans also take beach vacations during the Holy Week break.',
        fr: "La Semana Santa comprend des processions religieuses, des services religieux, le je\u00fbne et la pr\u00e9paration de plats sp\u00e9ciaux. De nombreux Dominicains prennent \u00e9galement des vacances \u00e0 la plage pendant la pause de la Semaine Sainte.",
        es: 'La Semana Santa incluye procesiones religiosas, servicios religiosos, ayuno y la preparaci\u00f3n de comidas especiales. Muchos dominicanos tambi\u00e9n toman vacaciones en la playa durante el receso de Semana Santa.',
      },
    },
  ],

  colorTheme: 'easter',
  icon: '\u271d\ufe0f',
};

// ---------------------------------------------------------------------------
// Restoration Day — August 16
// ---------------------------------------------------------------------------

const restorationDay: HolidayData = {
  id: 'do_restoration-day',
  countryCode: 'do',
  slugs: { en: 'restoration-day', fr: 'jour-de-la-restauration', es: 'dia-de-la-restauracion' },
  names: { en: 'Restoration Day', fr: 'Jour de la Restauration', es: 'D\u00eda de la Restauraci\u00f3n' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 16,

  descriptions: {
    en: "Restoration Day (D\u00eda de la Restauraci\u00f3n) on August 16 commemorates the restoration of Dominican independence from Spain in 1863. It is celebrated with particular fervor in Santiago de Caballeros, where a famous Carnival takes place.",
    fr: "Le Jour de la Restauration (D\u00eda de la Restauraci\u00f3n), le 16 ao\u00fbt, comm\u00e9more la restauration de l'ind\u00e9pendance dominicaine de l'Espagne en 1863. Il est c\u00e9l\u00e9br\u00e9 avec une ferveur particuli\u00e8re \u00e0 Santiago de los Caballeros, o\u00f9 un c\u00e9l\u00e8bre Carnaval a lieu.",
    es: "El D\u00eda de la Restauraci\u00f3n, el 16 de agosto, conmemora la restauraci\u00f3n de la independencia dominicana de Espa\u00f1a en 1863. Se celebra con particular fervor en Santiago de los Caballeros, donde se realiza un famoso Carnaval.",
  },

  history: {
    en: "In 1861, President Pedro Santana annexed the Dominican Republic to Spain, making it a Spanish colony once again. This deeply unpopular decision sparked the War of Restoration (Guerra de la Restauraci\u00f3n), which began on August 16, 1863, when Dominican patriots launched an armed uprising.\n\nThe restoration movement, supported by a broad coalition of Dominicans, fought a guerrilla war against Spanish forces for two years. Spain finally withdrew in 1865, and the Dominican Republic regained its sovereignty.\n\nToday, Restoration Day is celebrated as the country's second independence. The celebrations are especially vibrant in Santiago de los Caballeros, which hosts a massive Carnival with elaborate costumes, music, and dancing in the streets.",
    fr: "En 1861, le pr\u00e9sident Pedro Santana annexa la R\u00e9publique dominicaine \u00e0 l'Espagne. Cette d\u00e9cision tr\u00e8s impopulaire d\u00e9clencha la Guerre de la Restauration (Guerra de la Restauraci\u00f3n), qui commen\u00e7a le 16 ao\u00fbt 1863.\n\nLe mouvement de restauration mena une guerre de gu\u00e9rilla contre les forces espagnoles pendant deux ans. L'Espagne se retira finalement en 1865.\n\nAujourd'hui, le Jour de la Restauration est c\u00e9l\u00e9br\u00e9 comme la deuxi\u00e8me ind\u00e9pendance du pays. Les c\u00e9l\u00e9brations sont particuli\u00e8rement vibrantes \u00e0 Santiago de los Caballeros avec un Carnaval massif.",
    es: "En 1861, el presidente Pedro Santana anex\u00f3 la Rep\u00fablica Dominicana a Espa\u00f1a, convirti\u00e9ndola en una colonia espa\u00f1ola una vez m\u00e1s. Esta decisi\u00f3n profundamente impopular provoc\u00f3 la Guerra de la Restauraci\u00f3n, que comenz\u00f3 el 16 de agosto de 1863, cuando patriotas dominicanos lanzaron un levantamiento armado.\n\nEl movimiento de restauraci\u00f3n, apoyado por una amplia coalici\u00f3n de dominicanos, libr\u00f3 una guerra de guerrillas contra las fuerzas espa\u00f1olas durante dos a\u00f1os. Espa\u00f1a finalmente se retir\u00f3 en 1865, y la Rep\u00fablica Dominicana recuper\u00f3 su soberan\u00eda.\n\nHoy, el D\u00eda de la Restauraci\u00f3n se celebra como la segunda independencia del pa\u00eds. Las celebraciones son especialmente vibrantes en Santiago de los Caballeros, que alberga un masivo Carnaval con elaborados disfraces, m\u00fasica y baile en las calles.",
  },

  traditions: {
    en: [
      'Attending the famous Carnival in Santiago de los Caballeros',
      'Watching elaborate costumed characters called Lechones parade through the streets',
      'Listening to patriotic speeches and attending ceremonies',
      'Dancing merengue and bachata at street festivals',
      'Enjoying traditional Dominican food at community gatherings',
      'Displaying the Dominican flag and national colors',
    ],
    fr: [
      'Assister au c\u00e9l\u00e8bre Carnaval de Santiago de los Caballeros',
      'Regarder des personnages costum\u00e9s \u00e9labor\u00e9s appel\u00e9s Lechones d\u00e9filer dans les rues',
      '\u00c9couter des discours patriotiques et assister \u00e0 des c\u00e9r\u00e9monies',
      'Danser le merengue et la bachata lors de festivals de rue',
      'D\u00e9guster de la nourriture dominicaine traditionnelle lors de rassemblements communautaires',
      'Afficher le drapeau dominicain et les couleurs nationales',
    ],
    es: [
      'Asistir al famoso Carnaval en Santiago de los Caballeros',
      'Ver personajes disfrazados elaborados llamados Lechones desfilar por las calles',
      'Escuchar discursos patri\u00f3ticos y asistir a ceremonias',
      'Bailar merengue y bachata en festivales callejeros',
      'Disfrutar de comida dominicana tradicional en reuniones comunitarias',
      'Exhibir la bandera dominicana y los colores nacionales',
    ],
  },

  funFacts: {
    en: [
      'The Santiago Carnival on Restoration Day features Lechones, costumed characters with elaborate papier-m\u00e2ch\u00e9 masks and colorful outfits.',
      'The Dominican Republic is one of the few countries that celebrates two independence days \u2014 from Haiti (February 27) and from Spain (August 16).',
      'The War of Restoration lasted from 1863 to 1865 and cost Spain more than it could justify to maintain the colony.',
      'Santiago de los Caballeros was the headquarters of the restoration movement, earning it the nickname "Ciudad Coraz\u00f3n" (Heart City).',
      'The Restoration Day Carnival in Santiago rivals the February Carnival as one of the biggest celebrations in the Dominican Republic.',
    ],
    fr: [
      'Le Carnaval de Santiago le Jour de la Restauration pr\u00e9sente des Lechones, des personnages costum\u00e9s avec des masques en papier m\u00e2ch\u00e9 et des tenues color\u00e9es.',
      'La R\u00e9publique dominicaine est l\'un des rares pays \u00e0 c\u00e9l\u00e9brer deux jours d\'ind\u00e9pendance \u2014 d\'Ha\u00efti (27 f\u00e9vrier) et d\'Espagne (16 ao\u00fbt).',
      'La Guerre de la Restauration dura de 1863 \u00e0 1865 et co\u00fbta \u00e0 l\'Espagne plus qu\'elle ne pouvait justifier pour maintenir la colonie.',
      'Santiago de los Caballeros fut le quartier g\u00e9n\u00e9ral du mouvement de restauration, lui valant le surnom de \u00ab Ciudad Coraz\u00f3n \u00bb.',
      'Le Carnaval du Jour de la Restauration \u00e0 Santiago rivalise avec le Carnaval de f\u00e9vrier comme l\'une des plus grandes c\u00e9l\u00e9brations dominicaines.',
    ],
    es: [
      'El Carnaval de Santiago en el D\u00eda de la Restauraci\u00f3n presenta Lechones, personajes disfrazados con elaboradas m\u00e1scaras de papel mach\u00e9 y atuendos coloridos.',
      'La Rep\u00fablica Dominicana es uno de los pocos pa\u00edses que celebra dos d\u00edas de independencia \u2014 de Hait\u00ed (27 de febrero) y de Espa\u00f1a (16 de agosto).',
      'La Guerra de la Restauraci\u00f3n dur\u00f3 de 1863 a 1865 y le cost\u00f3 a Espa\u00f1a m\u00e1s de lo que pod\u00eda justificar para mantener la colonia.',
      'Santiago de los Caballeros fue el cuartel general del movimiento de restauraci\u00f3n, gan\u00e1ndose el apodo de "Ciudad Coraz\u00f3n".',
      'El Carnaval del D\u00eda de la Restauraci\u00f3n en Santiago rivaliza con el Carnaval de febrero como una de las celebraciones m\u00e1s grandes de la Rep\u00fablica Dominicana.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan a trip to Santiago de los Caballeros for the Carnival celebration',
      'Book accommodation early as Santiago fills up for the event',
      'Bring a camera to capture the colorful Lechones costumes',
      'Attend patriotic ceremonies and learn about the War of Restoration',
      'Enjoy traditional Dominican food and music at the festival',
    ],
    fr: [
      'Planifier un voyage \u00e0 Santiago de los Caballeros pour la c\u00e9l\u00e9bration du Carnaval',
      'R\u00e9server un h\u00e9bergement t\u00f4t car Santiago se remplit pour l\'\u00e9v\u00e9nement',
      'Apporter un appareil photo pour capturer les costumes color\u00e9s des Lechones',
      'Assister aux c\u00e9r\u00e9monies patriotiques et s\'informer sur la Guerre de la Restauration',
      'D\u00e9guster la nourriture et la musique dominicaines traditionnelles au festival',
    ],
    es: [
      'Planificar un viaje a Santiago de los Caballeros para la celebraci\u00f3n del Carnaval',
      'Reservar alojamiento con anticipaci\u00f3n ya que Santiago se llena para el evento',
      'Llevar una c\u00e1mara para capturar los coloridos disfraces de Lechones',
      'Asistir a ceremonias patri\u00f3ticas y aprender sobre la Guerra de la Restauraci\u00f3n',
      'Disfrutar de la comida y m\u00fasica dominicana tradicional en el festival',
    ],
  },

  relatedHolidays: ['do_independence-day', 'do_duarte-day'],

  seo: {
    en: {
      titleTemplate: 'Dominican Restoration Day {year} \u2014 August 16 Countdown',
      descriptionTemplate: 'When is Restoration Day {year} in the Dominican Republic? Live countdown, Santiago Carnival guide, and celebration info.',
      keywords: ['Restoration Day Dominican Republic', 'D\u00eda de la Restauraci\u00f3n', 'August 16 DR', 'Santiago Carnival', 'Dominican holiday'],
    },
    fr: {
      titleTemplate: 'Jour de la Restauration {year} R\u00e9publique dominicaine \u2014 Compte \u00e0 rebours du 16 ao\u00fbt',
      descriptionTemplate: 'Quand est le Jour de la Restauration {year} en R\u00e9publique dominicaine ? Compte \u00e0 rebours, guide du Carnaval de Santiago et infos.',
      keywords: ['Jour de la Restauration', 'D\u00eda de la Restauraci\u00f3n', '16 ao\u00fbt R\u00e9publique dominicaine', 'Carnaval Santiago', 'f\u00eate dominicaine'],
    },
    es: {
      titleTemplate: 'D\u00eda de la Restauraci\u00f3n {year} Rep\u00fablica Dominicana \u2014 Cuenta regresiva del 16 de agosto',
      descriptionTemplate: '\u00bfCu\u00e1ndo es el D\u00eda de la Restauraci\u00f3n {year} en la Rep\u00fablica Dominicana? Cuenta regresiva, gu\u00eda del Carnaval de Santiago e info.',
      keywords: ['D\u00eda de la Restauraci\u00f3n', 'Restauraci\u00f3n dominicana', '16 de agosto', 'Carnaval Santiago', 'fiesta dominicana'],
    },
  },

  faq: [
    {
      question: { en: 'When is Restoration Day {year}?', fr: 'Quand est le Jour de la Restauration {year} ?', es: '\u00bfCu\u00e1ndo es el D\u00eda de la Restauraci\u00f3n {year}?' },
      answer: {
        en: 'Restoration Day {year} is on {date}. It is always August 16.',
        fr: "Le Jour de la Restauration {year} est le {date}. C'est toujours le 16 ao\u00fbt.",
        es: 'El D\u00eda de la Restauraci\u00f3n {year} es el {date}. Siempre es el 16 de agosto.',
      },
    },
    {
      question: { en: 'What is the War of Restoration?', fr: "Qu'est-ce que la Guerre de la Restauration ?", es: '\u00bfQu\u00e9 es la Guerra de la Restauraci\u00f3n?' },
      answer: {
        en: 'The War of Restoration (1863\u20131865) was fought to regain Dominican independence after President Pedro Santana annexed the country to Spain in 1861. The war ended with Spain\'s withdrawal in 1865.',
        fr: "La Guerre de la Restauration (1863\u20131865) fut men\u00e9e pour regagner l'ind\u00e9pendance dominicaine apr\u00e8s que le pr\u00e9sident Pedro Santana eut annex\u00e9 le pays \u00e0 l'Espagne en 1861. La guerre se termina avec le retrait de l'Espagne en 1865.",
        es: 'La Guerra de la Restauraci\u00f3n (1863\u20131865) se libr\u00f3 para recuperar la independencia dominicana despu\u00e9s de que el presidente Pedro Santana anexara el pa\u00eds a Espa\u00f1a en 1861. La guerra termin\u00f3 con la retirada de Espa\u00f1a en 1865.',
      },
    },
    {
      question: { en: 'What are Lechones?', fr: 'Que sont les Lechones ?', es: '\u00bfQu\u00e9 son los Lechones?' },
      answer: {
        en: 'Lechones are costumed characters in Dominican Carnival celebrations, particularly prominent in Santiago de los Caballeros. They wear elaborate papier-m\u00e2ch\u00e9 masks with horns, colorful outfits, and carry vejigas (inflated bladders) to playfully hit spectators.',
        fr: "Les Lechones sont des personnages costum\u00e9s des c\u00e9l\u00e9brations du Carnaval dominicain. Ils portent des masques \u00e9labor\u00e9s en papier m\u00e2ch\u00e9 avec des cornes, des tenues color\u00e9es et des vejigas (vessies gonfl\u00e9es) pour frapper les spectateurs de mani\u00e8re ludique.",
        es: 'Los Lechones son personajes disfrazados en las celebraciones del Carnaval dominicano, particularmente prominentes en Santiago de los Caballeros. Usan elaboradas m\u00e1scaras de papel mach\u00e9 con cuernos, atuendos coloridos y llevan vejigas para golpear juguetonamente a los espectadores.',
      },
    },
    {
      question: { en: 'Is Restoration Day a public holiday?', fr: 'Le Jour de la Restauration est-il un jour f\u00e9ri\u00e9 ?', es: '\u00bfEs el D\u00eda de la Restauraci\u00f3n un d\u00eda festivo?' },
      answer: {
        en: 'Yes, August 16 is an official public holiday in the Dominican Republic.',
        fr: "Oui, le 16 ao\u00fbt est un jour f\u00e9ri\u00e9 officiel en R\u00e9publique dominicaine.",
        es: 'S\u00ed, el 16 de agosto es un d\u00eda festivo oficial en la Rep\u00fablica Dominicana.',
      },
    },
  ],

  icon: '\ud83c\udde9\ud83c\uddf4',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmasDay: HolidayData = {
  id: 'do_christmas',
  countryCode: 'do',
  slugs: { en: 'christmas-day', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'No\u00ebl', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day (Navidad) on December 25 is one of the most beloved holidays in the Dominican Republic. Celebrations center around family gatherings, festive meals featuring telera and pasteles en hoja, gift exchanges, and joyful music.',
    fr: "No\u00ebl (Navidad), le 25 d\u00e9cembre, est l'une des f\u00eates les plus aim\u00e9es en R\u00e9publique dominicaine. Les c\u00e9l\u00e9brations sont centr\u00e9es sur les r\u00e9unions familiales, les repas festifs avec telera et pasteles en hoja, les \u00e9changes de cadeaux et la musique joyeuse.",
    es: 'La Navidad, el 25 de diciembre, es una de las festividades m\u00e1s queridas en la Rep\u00fablica Dominicana. Las celebraciones se centran en reuniones familiares, comidas festivas con telera y pasteles en hoja, intercambio de regalos y m\u00fasica alegre.',
  },

  history: {
    en: "Christmas has been celebrated in the Dominican Republic since the Spanish colonial era, blending Catholic traditions with local Caribbean customs. The holiday season is one of the most anticipated times of the year for Dominican families.\n\nDominican Christmas traditions reflect the country's warm, communal culture. Extended families gather for elaborate meals, and neighborhoods come alive with music, decorations, and festive spirits. The celebration often extends from mid-December through January 6 (Three Kings Day).\n\nTraditional foods play a central role, with dishes like telera (a festive bread), pasteles en hoja (meat-filled plantain leaf wraps), and roast pork being staples of the holiday table. Merengue and bachata music fill homes and streets throughout the season.",
    fr: "No\u00ebl est c\u00e9l\u00e9br\u00e9 en R\u00e9publique dominicaine depuis l'\u00e9poque coloniale espagnole, m\u00ealant traditions catholiques et coutumes locales des Cara\u00efbes.\n\nLes traditions de No\u00ebl dominicaines refl\u00e8tent la culture chaleureuse et communautaire du pays. Les familles \u00e9largies se rassemblent pour des repas \u00e9labor\u00e9s, et les quartiers s'animent de musique, de d\u00e9corations et d'esprits festifs. La c\u00e9l\u00e9bration s'\u00e9tend souvent de mi-d\u00e9cembre au 6 janvier (Jour des Rois).\n\nLes plats traditionnels jouent un r\u00f4le central, avec des mets comme la telera, les pasteles en hoja et le porc r\u00f4ti.",
    es: "La Navidad se celebra en la Rep\u00fablica Dominicana desde la \u00e9poca colonial espa\u00f1ola, combinando tradiciones cat\u00f3licas con costumbres caribe\u00f1as locales. La temporada navide\u00f1a es una de las \u00e9pocas m\u00e1s esperadas del a\u00f1o para las familias dominicanas.\n\nLas tradiciones navide\u00f1as dominicanas reflejan la c\u00e1lida cultura comunitaria del pa\u00eds. Las familias extendidas se re\u00fanen para comidas elaboradas, y los vecindarios cobran vida con m\u00fasica, decoraciones y esp\u00edritu festivo. La celebraci\u00f3n a menudo se extiende desde mediados de diciembre hasta el 6 de enero (D\u00eda de Reyes).\n\nLas comidas tradicionales juegan un papel central, con platos como la telera (un pan festivo), pasteles en hoja (envueltos de pl\u00e1tano rellenos de carne) y cerdo asado como b\u00e1sicos de la mesa navide\u00f1a. La m\u00fasica de merengue y bachata llena hogares y calles durante toda la temporada.",
  },

  traditions: {
    en: [
      'Preparing pasteles en hoja (meat-filled plantain leaf wraps)',
      'Baking or buying telera (a Dominican festive bread)',
      'Gathering the extended family for a festive Noche Buena dinner',
      'Exchanging gifts on Christmas morning',
      'Dancing to merengue and bachata at holiday parties',
      'Decorating homes with Christmas trees, lights, and nativity scenes',
      'Attending midnight Mass (Misa de Gallo)',
    ],
    fr: [
      'Pr\u00e9parer des pasteles en hoja (envueltos de banane plantain farcis \u00e0 la viande)',
      'Cuire ou acheter de la telera (un pain festif dominicain)',
      'R\u00e9unir la famille \u00e9largie pour un d\u00eener festif de Noche Buena',
      '\u00c9changer des cadeaux le matin de No\u00ebl',
      'Danser le merengue et la bachata lors de f\u00eates de fin d\'ann\u00e9e',
      'D\u00e9corer les maisons avec des sapins de No\u00ebl, des lumi\u00e8res et des cr\u00e8ches',
      'Assister \u00e0 la Messe de Minuit (Misa de Gallo)',
    ],
    es: [
      'Preparar pasteles en hoja (envueltos de pl\u00e1tano rellenos de carne)',
      'Hornear o comprar telera (un pan festivo dominicano)',
      'Reunir a la familia extendida para una cena festiva de Noche Buena',
      'Intercambiar regalos en la ma\u00f1ana de Navidad',
      'Bailar merengue y bachata en fiestas navide\u00f1as',
      'Decorar los hogares con \u00e1rboles de Navidad, luces y nacimientos',
      'Asistir a la Misa del Gallo',
    ],
  },

  funFacts: {
    en: [
      'Pasteles en hoja are so labor-intensive that families often make them together in a communal cooking event.',
      'The Dominican Christmas season extends from December through January 6, making it one of the longest holiday periods.',
      'Merengue t\u00edpico, a traditional accordion-driven music style, is especially popular during Dominican Christmas celebrations.',
      'Many Dominicans set up elaborate nacimientos (nativity scenes) that are more central than the Christmas tree.',
      'Telera, the traditional Christmas bread, is unique to Dominican holiday celebrations.',
    ],
    fr: [
      'Les pasteles en hoja demandent tant de travail que les familles les pr\u00e9parent souvent ensemble lors d\'un \u00e9v\u00e9nement culinaire communautaire.',
      'La saison de No\u00ebl dominicaine s\'\u00e9tend de d\u00e9cembre au 6 janvier, en faisant l\'une des plus longues p\u00e9riodes de vacances.',
      'Le merengue t\u00edpico, un style de musique traditionnel \u00e0 l\'accord\u00e9on, est particuli\u00e8rement populaire pendant les c\u00e9l\u00e9brations de No\u00ebl dominicaines.',
      'De nombreux Dominicains installent des nacimientos (cr\u00e8ches) \u00e9labor\u00e9s qui sont plus centraux que le sapin de No\u00ebl.',
      'La telera, le pain de No\u00ebl traditionnel, est unique aux c\u00e9l\u00e9brations festives dominicaines.',
    ],
    es: [
      'Los pasteles en hoja requieren tanto trabajo que las familias a menudo los preparan juntas en un evento culinario comunitario.',
      'La temporada navide\u00f1a dominicana se extiende desde diciembre hasta el 6 de enero, siendo uno de los per\u00edodos festivos m\u00e1s largos.',
      'El merengue t\u00edpico, un estilo de m\u00fasica tradicional con acorde\u00f3n, es especialmente popular durante las celebraciones navide\u00f1as dominicanas.',
      'Muchos dominicanos arman elaborados nacimientos (pesebres) que son m\u00e1s centrales que el \u00e1rbol de Navidad.',
      'La telera, el pan navide\u00f1o tradicional, es \u00fanico de las celebraciones festivas dominicanas.',
    ],
  },

  planningChecklist: {
    en: [
      'Start making pasteles en hoja with family days before Christmas',
      'Order or bake telera for the holiday table',
      'Plan the Noche Buena dinner menu with traditional dishes',
      'Decorate the home with a nativity scene and Christmas lights',
      'Prepare a gift list and shop early for family members',
    ],
    fr: [
      'Commencer \u00e0 pr\u00e9parer les pasteles en hoja en famille des jours avant No\u00ebl',
      'Commander ou cuire la telera pour la table de f\u00eate',
      'Planifier le menu du d\u00eener de Noche Buena avec des plats traditionnels',
      'D\u00e9corer la maison avec une cr\u00e8che et des lumi\u00e8res de No\u00ebl',
      'Pr\u00e9parer une liste de cadeaux et faire ses achats t\u00f4t pour la famille',
    ],
    es: [
      'Comenzar a hacer pasteles en hoja con la familia d\u00edas antes de Navidad',
      'Pedir o hornear telera para la mesa festiva',
      'Planificar el men\u00fa de la cena de Noche Buena con platos tradicionales',
      'Decorar el hogar con un nacimiento y luces navide\u00f1as',
      'Preparar una lista de regalos y comprar con anticipaci\u00f3n para la familia',
    ],
  },

  relatedHolidays: ['do_new-years-day', 'do_good-friday'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} Dominican Republic \u2014 Navidad Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in the Dominican Republic? Live countdown, Dominican Christmas traditions, and celebration guide.',
      keywords: ['Christmas Dominican Republic', 'Navidad Dominicana', 'pasteles en hoja', 'Dominican Christmas traditions', 'telera bread'],
    },
    fr: {
      titleTemplate: 'No\u00ebl {year} R\u00e9publique dominicaine \u2014 Compte \u00e0 rebours et traditions',
      descriptionTemplate: 'Quand est No\u00ebl {year} en R\u00e9publique dominicaine ? Compte \u00e0 rebours, traditions de No\u00ebl dominicaines et guide de c\u00e9l\u00e9bration.',
      keywords: ['No\u00ebl R\u00e9publique dominicaine', 'Navidad Dominicana', 'pasteles en hoja', 'traditions No\u00ebl dominicaines', 'telera'],
    },
    es: {
      titleTemplate: 'Navidad {year} Rep\u00fablica Dominicana \u2014 Cuenta regresiva y tradiciones',
      descriptionTemplate: '\u00bfCu\u00e1ndo es Navidad {year} en la Rep\u00fablica Dominicana? Cuenta regresiva, tradiciones navide\u00f1as dominicanas y gu\u00eda de celebraci\u00f3n.',
      keywords: ['Navidad Rep\u00fablica Dominicana', 'tradiciones navide\u00f1as dominicanas', 'pasteles en hoja', 'telera dominicana', 'Noche Buena dominicana'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in the Dominican Republic?', fr: 'Quand est No\u00ebl {year} en R\u00e9publique dominicaine ?', es: '\u00bfCu\u00e1ndo es Navidad {year} en la Rep\u00fablica Dominicana?' },
      answer: {
        en: 'Christmas {year} in the Dominican Republic is on {date}. It is always December 25.',
        fr: "No\u00ebl {year} en R\u00e9publique dominicaine est le {date}. C'est toujours le 25 d\u00e9cembre.",
        es: 'La Navidad {year} en la Rep\u00fablica Dominicana es el {date}. Siempre es el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What are pasteles en hoja?', fr: 'Que sont les pasteles en hoja ?', es: '\u00bfQu\u00e9 son los pasteles en hoja?' },
      answer: {
        en: 'Pasteles en hoja are traditional Dominican holiday wraps made from a dough of grated plantain or root vegetables, filled with seasoned meat, wrapped in banana leaves, and boiled or steamed.',
        fr: "Les pasteles en hoja sont des envueltos traditionnels dominicains faits d'une p\u00e2te de banane plantain ou de l\u00e9gumes-racines r\u00e2p\u00e9s, farcis de viande assaisonn\u00e9e, envelopp\u00e9s dans des feuilles de bananier et bouillis ou cuits \u00e0 la vapeur.",
        es: 'Los pasteles en hoja son envueltos tradicionales dominicanos hechos de una masa de pl\u00e1tano o vegetales de ra\u00edz rallados, rellenos de carne sazonada, envueltos en hojas de pl\u00e1tano y hervidos o al vapor.',
      },
    },
    {
      question: { en: 'What is telera?', fr: "Qu'est-ce que la telera ?", es: '\u00bfQu\u00e9 es la telera?' },
      answer: {
        en: 'Telera is a traditional Dominican Christmas bread, similar to a pound cake but enriched with butter, eggs, and sometimes rum. It is a staple of the Dominican holiday table.',
        fr: "La telera est un pain de No\u00ebl traditionnel dominicain, similaire \u00e0 un quatre-quarts mais enrichi de beurre, d'\u0153ufs et parfois de rhum. C'est un incontournable de la table de f\u00eate dominicaine.",
        es: 'La telera es un pan navide\u00f1o tradicional dominicano, similar a un bizcocho pero enriquecido con mantequilla, huevos y a veces ron. Es un b\u00e1sico de la mesa festiva dominicana.',
      },
    },
    {
      question: { en: 'Is Christmas a public holiday in the Dominican Republic?', fr: 'No\u00ebl est-il un jour f\u00e9ri\u00e9 en R\u00e9publique dominicaine ?', es: '\u00bfEs Navidad un d\u00eda festivo en la Rep\u00fablica Dominicana?' },
      answer: {
        en: 'Yes, December 25 is an official public holiday in the Dominican Republic.',
        fr: "Oui, le 25 d\u00e9cembre est un jour f\u00e9ri\u00e9 officiel en R\u00e9publique dominicaine.",
        es: 'S\u00ed, el 25 de diciembre es un d\u00eda festivo oficial en la Rep\u00fablica Dominicana.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const doHolidays: HolidayData[] = [
  newYearsDay,
  duarteDay,
  independenceDay,
  goodFriday,
  restorationDay,
  christmasDay,
];

export default doHolidays;
