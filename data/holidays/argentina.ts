/**
 * Argentina holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getCarnivalMonday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'ar_new-years-day',
  countryCode: 'ar',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: 'Jour de l\'An', es: 'Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the start of the calendar year in Argentina. It is a national public holiday celebrated with family gatherings, fireworks over the Rio de la Plata, and festive meals that carry over from the previous night's revelry.",
    fr: "Le Jour de l'An, le 1er janvier, marque le debut de l'annee civile en Argentine. C'est un jour ferie national celebre avec des reunions familiales, des feux d'artifice sur le Rio de la Plata et des repas festifs qui se prolongent depuis les festivites de la veille.",
    es: 'El Ano Nuevo, el 1 de enero, marca el inicio del ano calendario en Argentina. Es un feriado nacional celebrado con reuniones familiares, fuegos artificiales sobre el Rio de la Plata y comidas festivas que continuan desde la celebracion de la noche anterior.',
  },

  history: {
    en: "New Year's celebrations in Argentina blend European immigrant traditions with local customs. The Italian and Spanish influences are particularly strong, with families gathering for elaborate midnight feasts. Buenos Aires hosts one of South America's largest New Year's Eve celebrations along the waterfront of Puerto Madero and Costanera Sur.\n\nThe tradition of wearing specific colors on New Year's Eve is widespread: pink for love, yellow for prosperity, and white for peace. Many Argentines also follow the custom of eating lentejas (lentils) at midnight to attract good fortune in the coming year.",
    fr: "Les celebrations du Nouvel An en Argentine melangent les traditions des immigrants europeens avec les coutumes locales. Les influences italiennes et espagnoles sont particulierement fortes, les familles se reunissant pour des festins elabores a minuit. Buenos Aires accueille l'une des plus grandes celebrations du Nouvel An d'Amerique du Sud le long du front de mer de Puerto Madero et de la Costanera Sur.\n\nLa tradition de porter des couleurs specifiques le soir du Nouvel An est repandue : rose pour l'amour, jaune pour la prosperite et blanc pour la paix. De nombreux Argentins suivent egalement la coutume de manger des lentilles a minuit pour attirer la bonne fortune dans l'annee a venir.",
    es: "Las celebraciones de Ano Nuevo en Argentina mezclan tradiciones de inmigrantes europeos con costumbres locales. Las influencias italianas y espanolas son particularmente fuertes, con familias que se reunen para elaborados banquetes a medianoche. Buenos Aires alberga una de las celebraciones de Ano Nuevo mas grandes de America del Sur a lo largo de la costa de Puerto Madero y la Costanera Sur.\n\nLa tradicion de usar colores especificos en Nochevieja esta muy extendida: rosa para el amor, amarillo para la prosperidad y blanco para la paz. Muchos argentinos tambien siguen la costumbre de comer lentejas a medianoche para atraer la buena fortuna en el ano venidero.",
  },

  traditions: {
    en: [
      'Gathering with family for a late-night asado or festive dinner',
      'Watching fireworks over the Rio de la Plata and city skylines',
      'Wearing colored underwear for luck — pink for love, yellow for money',
      'Eating lentils at midnight to attract prosperity',
      'Throwing old papers out of office windows to symbolize leaving the past behind',
      'Toasting with sidra (cider) and pan dulce at midnight',
    ],
    fr: [
      'Se reunir en famille pour un asado ou un diner festif tardif',
      'Regarder les feux d\'artifice au-dessus du Rio de la Plata',
      'Porter des sous-vetements colores pour la chance — rose pour l\'amour, jaune pour l\'argent',
      'Manger des lentilles a minuit pour attirer la prosperite',
      'Jeter de vieux papiers par les fenetres des bureaux pour symboliser le depart du passe',
      'Trinquer avec du cidre et du pan dulce a minuit',
    ],
    es: [
      'Reunirse en familia para un asado o cena festiva nocturna',
      'Ver fuegos artificiales sobre el Rio de la Plata',
      'Usar ropa interior de colores para la suerte — rosa para el amor, amarillo para el dinero',
      'Comer lentejas a medianoche para atraer prosperidad',
      'Tirar papeles viejos por las ventanas de las oficinas para simbolizar dejar atras el pasado',
      'Brindar con sidra y pan dulce a medianoche',
    ],
  },

  funFacts: {
    en: [
      'Buenos Aires is one of the few major cities where New Year falls in the middle of summer, with temperatures often exceeding 30C (86F).',
      'The tradition of throwing old papers from office windows creates a "paper snowfall" in downtown Buenos Aires on December 31.',
      'Sidra (sparkling cider) outsells champagne in Argentina during the holiday season by a huge margin.',
      'Many Argentines take a suitcase walk around the block at midnight to ensure travel in the new year.',
      'The Buenos Aires Obelisk becomes a focal point for celebrations, with thousands gathering in the surrounding streets.',
    ],
    fr: [
      'Buenos Aires est l\'une des rares grandes villes ou le Nouvel An tombe en plein ete, avec des temperatures depassant souvent 30C.',
      'La tradition de jeter des papiers cree une "chute de neige en papier" dans le centre de Buenos Aires le 31 decembre.',
      'La sidra (cidre petillant) se vend bien plus que le champagne en Argentine pendant les fetes.',
      'De nombreux Argentins font un tour de pate de maisons avec une valise a minuit pour s\'assurer de voyager dans la nouvelle annee.',
      'L\'Obelisque de Buenos Aires devient un point focal des celebrations, avec des milliers de personnes dans les rues environnantes.',
    ],
    es: [
      'Buenos Aires es una de las pocas grandes ciudades donde el Ano Nuevo cae en pleno verano, con temperaturas que a menudo superan los 30C.',
      'La tradicion de tirar papeles viejos crea una "nevada de papel" en el centro de Buenos Aires el 31 de diciembre.',
      'La sidra se vende mucho mas que el champan en Argentina durante las fiestas.',
      'Muchos argentinos dan una vuelta a la manzana con una valija a medianoche para asegurar viajes en el nuevo ano.',
      'El Obelisco de Buenos Aires se convierte en punto focal de las celebraciones, con miles de personas en las calles circundantes.',
    ],
  },

  planningChecklist: {
    en: [
      'Book restaurant reservations early as most venues host special New Year dinners',
      'Purchase sidra and pan dulce — they sell out fast in late December',
      'Plan transportation as public transit runs on reduced schedules',
      'Choose your colored underwear for the night based on your wishes for the year',
      'Secure a viewing spot for fireworks at Puerto Madero or the Costanera',
    ],
    fr: [
      'Reserver tot au restaurant car la plupart des etablissements organisent des diners speciaux du Nouvel An',
      'Acheter de la sidra et du pan dulce — ils se vendent vite fin decembre',
      'Planifier le transport car les transports en commun fonctionnent avec des horaires reduits',
      'Choisir vos sous-vetements colores selon vos souhaits pour l\'annee',
      'Trouver un endroit pour voir les feux d\'artifice a Puerto Madero ou la Costanera',
    ],
    es: [
      'Reservar en restaurantes temprano ya que la mayoria ofrece cenas especiales de Ano Nuevo',
      'Comprar sidra y pan dulce — se agotan rapido a fines de diciembre',
      'Planificar el transporte ya que el transito publico funciona con horarios reducidos',
      'Elegir la ropa interior de color segun los deseos para el ano',
      'Asegurar un lugar para ver los fuegos artificiales en Puerto Madero o la Costanera',
    ],
  },

  relatedHolidays: ['ar_christmas', 'ar_independence-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Argentina — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Argentina? Live countdown, traditions, and celebration guide.",
      keywords: ["New Year's Day Argentina", 'Ano Nuevo Argentina', 'Argentina New Year', 'Buenos Aires New Year', 'Argentina holidays'],
    },
    fr: {
      titleTemplate: 'Jour de l\'An {year} Argentine — Compte a rebours et guide',
      descriptionTemplate: 'Quand est le Jour de l\'An {year} en Argentine ? Compte a rebours, traditions et guide de celebration.',
      keywords: ['Jour de l\'An Argentine', 'Nouvel An Argentine', 'Buenos Aires Nouvel An', 'fetes Argentine', 'jours feries Argentine'],
    },
    es: {
      titleTemplate: 'Ano Nuevo {year} Argentina — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Ano Nuevo {year} en Argentina? Cuenta regresiva en vivo, tradiciones y guia de celebracion.',
      keywords: ['Ano Nuevo Argentina', 'feriados Argentina', 'Buenos Aires Ano Nuevo', 'celebraciones argentinas', 'fiestas Argentina'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Argentina?", fr: 'Quand est le Jour de l\'An {year} en Argentine ?', es: 'Cuando es el Ano Nuevo {year} en Argentina?' },
      answer: {
        en: "New Year's Day {year} in Argentina is on {date}. It is always January 1 and is a national public holiday.",
        fr: 'Le Jour de l\'An {year} en Argentine est le {date}. C\'est toujours le 1er janvier et c\'est un jour ferie national.',
        es: 'El Ano Nuevo {year} en Argentina es el {date}. Siempre es el 1 de enero y es feriado nacional.',
      },
    },
    {
      question: { en: 'How do Argentines celebrate New Year?', fr: 'Comment les Argentins celebrent-ils le Nouvel An ?', es: 'Como celebran los argentinos el Ano Nuevo?' },
      answer: {
        en: "Argentines celebrate with family asados, fireworks, sidra and pan dulce at midnight, and the tradition of wearing colored underwear for luck. Buenos Aires hosts massive celebrations along the waterfront.",
        fr: 'Les Argentins celebrent avec des asados en famille, des feux d\'artifice, de la sidra et du pan dulce a minuit, et la tradition de porter des sous-vetements colores pour la chance.',
        es: 'Los argentinos celebran con asados familiares, fuegos artificiales, sidra y pan dulce a medianoche, y la tradicion de usar ropa interior de colores para la suerte.',
      },
    },
    {
      question: { en: 'What is sidra in Argentina?', fr: 'Qu\'est-ce que la sidra en Argentine ?', es: 'Que es la sidra en Argentina?' },
      answer: {
        en: 'Sidra is sparkling apple cider, the most popular drink for New Year toasts in Argentina. It far outsells champagne during the holiday season and is an essential part of the midnight celebration alongside pan dulce.',
        fr: 'La sidra est un cidre de pomme petillant, la boisson la plus populaire pour les toasts du Nouvel An en Argentine. Elle se vend bien plus que le champagne pendant les fetes.',
        es: 'La sidra es una bebida de manzana espumante, la mas popular para brindar en Ano Nuevo en Argentina. Se vende mucho mas que el champan durante las fiestas y es parte esencial de la celebracion de medianoche junto al pan dulce.',
      },
    },
    {
      question: { en: 'What is the weather like for New Year in Argentina?', fr: 'Quel temps fait-il pour le Nouvel An en Argentine ?', es: 'Como es el clima en Ano Nuevo en Argentina?' },
      answer: {
        en: "New Year's in Argentina falls in the middle of summer. Temperatures in Buenos Aires typically reach 30-35C (86-95F), making it a warm, outdoor celebration very different from the Northern Hemisphere's winter festivities.",
        fr: 'Le Nouvel An en Argentine tombe en plein ete. Les temperatures a Buenos Aires atteignent generalement 30 a 35C, ce qui en fait une celebration en plein air tres differente des festivites hivernales de l\'hemisphere nord.',
        es: 'El Ano Nuevo en Argentina cae en pleno verano. Las temperaturas en Buenos Aires suelen alcanzar los 30-35C, lo que lo convierte en una celebracion al aire libre muy diferente de las festividades invernales del hemisferio norte.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Carnival Monday — 48 days before Easter
// ---------------------------------------------------------------------------

const carnival: HolidayData = {
  id: 'ar_carnival',
  countryCode: 'ar',
  slugs: { en: 'carnival', fr: 'carnaval', es: 'carnaval' },
  names: { en: 'Carnival Monday', fr: 'Lundi de Carnaval', es: 'Lunes de Carnaval' },

  dateType: 'calculated',
  calculateDate: getCarnivalMonday,

  descriptions: {
    en: "Carnival Monday is a national holiday in Argentina, kicking off two days of festive celebrations before Lent. The city of Gualeguaychu hosts Argentina's largest carnival with elaborate parades, samba-inspired comparsas, and dazzling costumes.",
    fr: "Le Lundi de Carnaval est un jour ferie national en Argentine, lancant deux jours de celebrations festives avant le Careme. La ville de Gualeguaychu accueille le plus grand carnaval d'Argentine avec des defiles elabores, des comparsas inspirees de la samba et des costumes eblouissants.",
    es: 'El Lunes de Carnaval es feriado nacional en Argentina, dando inicio a dos dias de celebraciones festivas antes de la Cuaresma. La ciudad de Gualeguaychu alberga el carnaval mas grande de Argentina con desfiles elaborados, comparsas y disfraces deslumbrantes.',
  },

  history: {
    en: "Carnival in Argentina has roots in both European Catholic traditions and African cultural influences brought by enslaved peoples during the colonial era. The celebrations were once banned during the military dictatorship (1976-1983) but were revived with the return of democracy.\n\nGualeguaychu's carnival, often called the 'Carnival del Pais,' began growing in the 1980s and has become South America's second-largest carnival after Rio de Janeiro. The murgas (street bands) of Buenos Aires represent another distinct tradition, blending satirical humor with music and dance.\n\nIn the northwest provinces of Jujuy and Salta, carnival retains strong indigenous Andean elements, including the ritual burial and resurrection of the devil figure known as the Diablo del Carnaval.",
    fr: "Le Carnaval en Argentine a des racines dans les traditions catholiques europeennes et les influences culturelles africaines apportees par les esclaves pendant l'ere coloniale. Les celebrations ont ete interdites pendant la dictature militaire (1976-1983) mais ont ete ravivees avec le retour de la democratie.\n\nLe carnaval de Gualeguaychu, souvent appele le 'Carnaval del Pais,' a commence a grandir dans les annees 1980 et est devenu le deuxieme plus grand carnaval d'Amerique du Sud apres Rio de Janeiro. Les murgas de Buenos Aires representent une autre tradition distincte, melant humour satirique, musique et danse.\n\nDans les provinces du nord-ouest de Jujuy et Salta, le carnaval conserve de forts elements indigenes andins, y compris l'enterrement et la resurrection rituels du diable connu sous le nom de Diablo del Carnaval.",
    es: "El Carnaval en Argentina tiene raices tanto en las tradiciones catolicas europeas como en las influencias culturales africanas traidas por los esclavos durante la era colonial. Las celebraciones fueron prohibidas durante la dictadura militar (1976-1983) pero revivieron con el retorno de la democracia.\n\nEl carnaval de Gualeguaychu, a menudo llamado el 'Carnaval del Pais,' comenzo a crecer en los anos 1980 y se ha convertido en el segundo carnaval mas grande de America del Sur despues del de Rio de Janeiro. Las murgas de Buenos Aires representan otra tradicion distinta, mezclando humor satirico con musica y danza.\n\nEn las provincias del noroeste de Jujuy y Salta, el carnaval conserva fuertes elementos indigenas andinos, incluyendo el entierro y resurreccion ritual del diablo conocido como el Diablo del Carnaval.",
  },

  traditions: {
    en: [
      'Attending comparsa parades in Gualeguaychu with elaborate floats and costumes',
      'Participating in murga performances in Buenos Aires neighborhoods',
      'Engaging in water fights and foam spray battles in the streets',
      'Burying and resurrecting the Diablo del Carnaval in the Andean northwest',
      'Dancing to cumbia, samba, and candombe rhythms',
      'Wearing colorful costumes and masks',
      'Enjoying traditional carnival foods like empanadas and locro',
    ],
    fr: [
      'Assister aux defiles de comparsas a Gualeguaychu avec des chars elabores et des costumes',
      'Participer aux spectacles de murga dans les quartiers de Buenos Aires',
      'Participer a des batailles d\'eau et de mousse dans les rues',
      'Enterrer et ressusciter le Diablo del Carnaval dans le nord-ouest andin',
      'Danser au rythme de la cumbia, de la samba et du candombe',
      'Porter des costumes colores et des masques',
      'Deguster des plats traditionnels de carnaval comme les empanadas et le locro',
    ],
    es: [
      'Asistir a los desfiles de comparsas en Gualeguaychu con carrozas elaboradas y disfraces',
      'Participar en las actuaciones de murga en los barrios de Buenos Aires',
      'Participar en guerras de agua y espuma en las calles',
      'Enterrar y resucitar al Diablo del Carnaval en el noroeste andino',
      'Bailar cumbia, samba y candombe',
      'Usar disfraces coloridos y mascaras',
      'Disfrutar de comidas tradicionales de carnaval como empanadas y locro',
    ],
  },

  funFacts: {
    en: [
      'Gualeguaychu\'s corsodromo (carnival arena) holds over 35,000 spectators.',
      'Buenos Aires murgas are unique in the world — they combine satirical political commentary with dance and percussion.',
      'In the Quebrada de Humahuaca (Jujuy), carnival celebrations include ancient Inca rituals dating back centuries.',
      'Carnival was restored as a national holiday in Argentina in 2010 after decades without official recognition.',
      'The tradition of water fights during carnival dates back to colonial times when servants would splash their masters.',
    ],
    fr: [
      'Le corsodromo de Gualeguaychu peut accueillir plus de 35 000 spectateurs.',
      'Les murgas de Buenos Aires sont uniques au monde — elles combinent commentaire politique satirique, danse et percussions.',
      'Dans la Quebrada de Humahuaca (Jujuy), les celebrations de carnaval incluent d\'anciens rituels incas datant de plusieurs siecles.',
      'Le carnaval a ete retabli comme jour ferie national en Argentine en 2010 apres des decennies sans reconnaissance officielle.',
      'La tradition des batailles d\'eau pendant le carnaval remonte a l\'epoque coloniale quand les serviteurs aspergeaient leurs maitres.',
    ],
    es: [
      'El corsodromo de Gualeguaychu tiene capacidad para mas de 35.000 espectadores.',
      'Las murgas portenas son unicas en el mundo — combinan comentario politico satirico con danza y percusion.',
      'En la Quebrada de Humahuaca (Jujuy), las celebraciones de carnaval incluyen antiguos rituales incaicos de siglos de antiguedad.',
      'El carnaval fue restituido como feriado nacional en Argentina en 2010 despues de decadas sin reconocimiento oficial.',
      'La tradicion de las guerras de agua durante el carnaval se remonta a la epoca colonial cuando los sirvientes salpicaban a sus amos.',
    ],
  },

  planningChecklist: {
    en: [
      'Book accommodation in Gualeguaychu months ahead as hotels fill up fast',
      'Purchase corsodromo tickets early for the best seats',
      'Bring waterproof protection — water fights are part of the celebration',
      'Check the specific carnival schedule as dates shift each year with Easter',
      'Plan transportation between Buenos Aires and Gualeguaychu (3-hour drive)',
    ],
    fr: [
      'Reserver un hebergement a Gualeguaychu des mois a l\'avance car les hotels se remplissent vite',
      'Acheter des billets pour le corsodromo tot pour les meilleures places',
      'Apporter une protection etanche — les batailles d\'eau font partie de la celebration',
      'Verifier le calendrier specifique du carnaval car les dates changent chaque annee avec Paques',
      'Planifier le transport entre Buenos Aires et Gualeguaychu (3 heures de route)',
    ],
    es: [
      'Reservar alojamiento en Gualeguaychu con meses de anticipacion ya que los hoteles se llenan rapido',
      'Comprar entradas para el corsodromo temprano para los mejores asientos',
      'Llevar proteccion impermeable — las guerras de agua son parte de la celebracion',
      'Verificar el calendario especifico del carnaval ya que las fechas cambian cada ano con Pascua',
      'Planificar el transporte entre Buenos Aires y Gualeguaychu (3 horas en auto)',
    ],
  },

  relatedHolidays: ['ar_new-years-day', 'ar_may-revolution'],

  seo: {
    en: {
      titleTemplate: 'Carnival Monday {year} Argentina — Countdown & Guide',
      descriptionTemplate: 'When is Carnival {year} in Argentina? Live countdown, Gualeguaychu carnival info, and celebration guide.',
      keywords: ['Argentina Carnival', 'Carnaval Argentina', 'Gualeguaychu carnival', 'Argentina murgas', 'Argentina holidays'],
    },
    fr: {
      titleTemplate: 'Lundi de Carnaval {year} Argentine — Compte a rebours et guide',
      descriptionTemplate: 'Quand est le Carnaval {year} en Argentine ? Compte a rebours, info sur le carnaval de Gualeguaychu et guide.',
      keywords: ['Carnaval Argentine', 'Gualeguaychu carnaval', 'murgas Argentine', 'fetes Argentine', 'jours feries Argentine'],
    },
    es: {
      titleTemplate: 'Lunes de Carnaval {year} Argentina — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Carnaval {year} en Argentina? Cuenta regresiva en vivo, info del carnaval de Gualeguaychu y guia.',
      keywords: ['Carnaval Argentina', 'Gualeguaychu carnaval', 'murgas Argentina', 'feriados Argentina', 'fiestas patrias Argentina'],
    },
  },

  faq: [
    {
      question: { en: 'When is Carnival {year} in Argentina?', fr: 'Quand est le Carnaval {year} en Argentine ?', es: 'Cuando es el Carnaval {year} en Argentina?' },
      answer: {
        en: 'Carnival Monday {year} in Argentina falls on {date}. The date changes each year as it is calculated based on Easter.',
        fr: 'Le Lundi de Carnaval {year} en Argentine tombe le {date}. La date change chaque annee car elle est calculee en fonction de Paques.',
        es: 'El Lunes de Carnaval {year} en Argentina cae el {date}. La fecha cambia cada ano ya que se calcula en base a la Pascua.',
      },
    },
    {
      question: { en: 'Where is the biggest carnival in Argentina?', fr: 'Ou se trouve le plus grand carnaval d\'Argentine ?', es: 'Donde es el carnaval mas grande de Argentina?' },
      answer: {
        en: "Gualeguaychu in Entre Rios province hosts Argentina's largest carnival, often called the 'Carnival del Pais.' It features elaborate comparsas, massive floats, and a dedicated corsodromo arena holding over 35,000 spectators.",
        fr: 'Gualeguaychu dans la province d\'Entre Rios accueille le plus grand carnaval d\'Argentine, souvent appele le \'Carnaval del Pais.\' Il comprend des comparsas elaborees et un corsodromo de plus de 35 000 places.',
        es: 'Gualeguaychu en la provincia de Entre Rios alberga el carnaval mas grande de Argentina, a menudo llamado el \'Carnaval del Pais.\' Cuenta con comparsas elaboradas, carrozas masivas y un corsodromo con mas de 35.000 espectadores.',
      },
    },
    {
      question: { en: 'What are murgas in Argentina?', fr: 'Que sont les murgas en Argentine ?', es: 'Que son las murgas en Argentina?' },
      answer: {
        en: 'Murgas are neighborhood street bands unique to Buenos Aires carnival traditions. They combine percussion, satirical songs commenting on politics and social issues, dance, and colorful costumes. Each barrio has its own murga with distinct identity and style.',
        fr: 'Les murgas sont des fanfares de quartier uniques aux traditions du carnaval de Buenos Aires. Elles combinent percussions, chansons satiriques, danse et costumes colores. Chaque barrio a sa propre murga avec une identite et un style distincts.',
        es: 'Las murgas son agrupaciones callejeras barriales unicas de las tradiciones del carnaval de Buenos Aires. Combinan percusion, canciones satiricas sobre politica y temas sociales, danza y disfraces coloridos. Cada barrio tiene su propia murga con identidad y estilo distintos.',
      },
    },
    {
      question: { en: 'Is Carnival a public holiday in Argentina?', fr: 'Le Carnaval est-il un jour ferie en Argentine ?', es: 'El Carnaval es feriado en Argentina?' },
      answer: {
        en: 'Yes, both Carnival Monday and Carnival Tuesday are national public holidays in Argentina. They were restored as official holidays in 2010 after being removed during the military dictatorship.',
        fr: 'Oui, le Lundi et le Mardi de Carnaval sont des jours feries nationaux en Argentine. Ils ont ete retablis comme feries officiels en 2010 apres avoir ete supprimes pendant la dictature militaire.',
        es: 'Si, tanto el Lunes como el Martes de Carnaval son feriados nacionales en Argentina. Fueron restituidos como feriados oficiales en 2010 despues de haber sido eliminados durante la dictadura militar.',
      },
    },
  ],

  colorTheme: 'carnival',
  icon: '\ud83c\udfad',
};

// ---------------------------------------------------------------------------
// Day of Remembrance — March 24
// ---------------------------------------------------------------------------

const dayOfRemembrance: HolidayData = {
  id: 'ar_day-of-remembrance',
  countryCode: 'ar',
  slugs: { en: 'day-of-remembrance', fr: 'jour-du-souvenir', es: 'dia-de-la-memoria' },
  names: { en: 'Day of Remembrance', fr: 'Jour du Souvenir', es: 'Dia de la Memoria' },

  dateType: 'fixed',
  fixedMonth: 3,
  fixedDay: 24,

  descriptions: {
    en: 'The Day of Remembrance for Truth and Justice on March 24 commemorates the victims of the 1976 military coup in Argentina. It is a solemn national holiday honoring the estimated 30,000 people who were disappeared during the dictatorship (1976-1983).',
    fr: "La Journee de la Memoire pour la Verite et la Justice, le 24 mars, commemore les victimes du coup d'Etat militaire de 1976 en Argentine. C'est un jour ferie national solennel en hommage aux quelque 30 000 personnes disparues pendant la dictature (1976-1983).",
    es: 'El Dia de la Memoria por la Verdad y la Justicia, el 24 de marzo, conmemora a las victimas del golpe de Estado militar de 1976 en Argentina. Es un feriado nacional solemne en honor a las aproximadamente 30.000 personas desaparecidas durante la dictadura (1976-1983).',
  },

  history: {
    en: "On March 24, 1976, a military junta led by Jorge Rafael Videla overthrew President Isabel Peron and began what became known as the Proceso de Reorganizacion Nacional (National Reorganization Process). During the ensuing dictatorship, an estimated 30,000 people were kidnapped, tortured, and murdered by the state in what is known as the Dirty War.\n\nThe Mothers of the Plaza de Mayo began their silent marches in 1977, circling the plaza in front of the presidential palace wearing white headscarves to demand information about their disappeared children. Their courage became a global symbol of human rights resistance.\n\nMarch 24 was established as a national holiday in 2002 under President Eduardo Duhalde, reaffirming Argentina's commitment to 'Nunca Mas' (Never Again). Major marches and commemorative events are held annually across the country.",
    fr: "Le 24 mars 1976, une junte militaire dirigee par Jorge Rafael Videla a renverse la presidente Isabel Peron et a commence ce qui est devenu le Proceso de Reorganizacion Nacional. Pendant la dictature qui a suivi, environ 30 000 personnes ont ete enlevees, torturees et assassinees par l'Etat dans ce qu'on appelle la Guerre Sale.\n\nLes Meres de la Place de Mai ont commence leurs marches silencieuses en 1977, faisant le tour de la place devant le palais presidentiel portant des foulards blancs pour exiger des informations sur leurs enfants disparus. Leur courage est devenu un symbole mondial de resistance pour les droits de l'homme.\n\nLe 24 mars a ete etabli comme jour ferie national en 2002 sous le president Eduardo Duhalde, reaffirmant l'engagement de l'Argentine envers 'Nunca Mas' (Plus Jamais).",
    es: "El 24 de marzo de 1976, una junta militar liderada por Jorge Rafael Videla derroco a la presidenta Isabel Peron y comenzo lo que se conocio como el Proceso de Reorganizacion Nacional. Durante la dictadura que siguio, aproximadamente 30.000 personas fueron secuestradas, torturadas y asesinadas por el Estado en lo que se conoce como la Guerra Sucia.\n\nLas Madres de Plaza de Mayo comenzaron sus marchas silenciosas en 1977, rodeando la plaza frente a la Casa Rosada con panuelos blancos para exigir informacion sobre sus hijos desaparecidos. Su coraje se convirtio en un simbolo mundial de resistencia por los derechos humanos.\n\nEl 24 de marzo fue establecido como feriado nacional en 2002 bajo el presidente Eduardo Duhalde, reafirmando el compromiso de Argentina con el 'Nunca Mas'.",
  },

  traditions: {
    en: [
      'Attending memorial marches to the Plaza de Mayo in Buenos Aires',
      'Visiting the Parque de la Memoria along the Rio de la Plata',
      'Placing flowers and candles at memorial sites and former detention centers',
      'Wearing white headscarves in solidarity with the Mothers of the Plaza de Mayo',
      'Attending cultural events, film screenings, and exhibits about the dictatorship',
    ],
    fr: [
      'Participer aux marches commemoratives vers la Place de Mai a Buenos Aires',
      'Visiter le Parque de la Memoria le long du Rio de la Plata',
      'Deposer des fleurs et des bougies sur les sites memoriaux et les anciens centres de detention',
      'Porter des foulards blancs en solidarite avec les Meres de la Place de Mai',
      'Assister a des evenements culturels, projections de films et expositions sur la dictature',
    ],
    es: [
      'Asistir a las marchas conmemorativas hacia la Plaza de Mayo en Buenos Aires',
      'Visitar el Parque de la Memoria a orillas del Rio de la Plata',
      'Colocar flores y velas en los sitios de memoria y los ex centros de detencion',
      'Usar panuelos blancos en solidaridad con las Madres de Plaza de Mayo',
      'Asistir a eventos culturales, proyecciones de cine y exposiciones sobre la dictadura',
    ],
  },

  funFacts: {
    en: [
      'The Mothers of the Plaza de Mayo have marched every Thursday since 1977 — over 2,400 consecutive weeks.',
      'The ESMA (Navy School of Mechanics) in Buenos Aires, one of the largest detention centers, is now a museum and memorial site.',
      'Argentina\'s "Nunca Mas" report, published in 1984, documented nearly 9,000 cases of disappearance.',
      'The white headscarf of the Mothers originally represented baby diapers, symbolizing their missing children.',
      'Argentina was one of the first countries to successfully prosecute former dictators for human rights crimes.',
    ],
    fr: [
      'Les Meres de la Place de Mai marchent chaque jeudi depuis 1977 — plus de 2 400 semaines consecutives.',
      'L\'ESMA (Ecole de Mecanique de la Marine) a Buenos Aires est maintenant un musee et site memorial.',
      'Le rapport "Nunca Mas" de l\'Argentine, publie en 1984, a documente pres de 9 000 cas de disparition.',
      'Le foulard blanc des Meres representait a l\'origine des couches de bebe, symbolisant leurs enfants disparus.',
      'L\'Argentine a ete l\'un des premiers pays a poursuivre avec succes d\'anciens dictateurs pour crimes contre les droits de l\'homme.',
    ],
    es: [
      'Las Madres de Plaza de Mayo han marchado cada jueves desde 1977 — mas de 2.400 semanas consecutivas.',
      'La ESMA (Escuela de Mecanica de la Armada) en Buenos Aires es ahora un museo y sitio de memoria.',
      'El informe "Nunca Mas" de Argentina, publicado en 1984, documento cerca de 9.000 casos de desaparicion.',
      'El panuelo blanco de las Madres representaba originalmente panales de bebe, simbolizando a sus hijos desaparecidos.',
      'Argentina fue uno de los primeros paises en enjuiciar exitosamente a ex dictadores por crimenes contra los derechos humanos.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the schedule for the main march to the Plaza de Mayo',
      'Visit the Parque de la Memoria and the ESMA memorial site',
      'Attend local cultural events and commemorative gatherings',
      'Read the "Nunca Mas" report or watch related documentaries beforehand',
      'Be respectful at memorial sites and during marches',
    ],
    fr: [
      'Verifier le programme de la marche principale vers la Place de Mai',
      'Visiter le Parque de la Memoria et le site memorial de l\'ESMA',
      'Assister aux evenements culturels et rassemblements commemoratifs locaux',
      'Lire le rapport "Nunca Mas" ou regarder des documentaires avant',
      'Etre respectueux sur les sites memoriaux et pendant les marches',
    ],
    es: [
      'Verificar el horario de la marcha principal a la Plaza de Mayo',
      'Visitar el Parque de la Memoria y el sitio de memoria de la ESMA',
      'Asistir a eventos culturales y actos conmemorativos locales',
      'Leer el informe "Nunca Mas" o ver documentales relacionados',
      'Ser respetuoso en los sitios de memoria y durante las marchas',
    ],
  },

  relatedHolidays: ['ar_independence-day', 'ar_may-revolution'],

  seo: {
    en: {
      titleTemplate: 'Day of Remembrance {year} Argentina — Countdown & History',
      descriptionTemplate: 'Day of Remembrance {year} in Argentina on {date}. History of the 1976 coup, the Mothers of the Plaza de Mayo, and commemoration guide.',
      keywords: ['Day of Remembrance Argentina', 'Dia de la Memoria', 'March 24 Argentina', 'Mothers Plaza de Mayo', 'Argentina dictatorship'],
    },
    fr: {
      titleTemplate: 'Jour du Souvenir {year} Argentine — Compte a rebours et histoire',
      descriptionTemplate: 'Jour du Souvenir {year} en Argentine le {date}. Histoire du coup de 1976, les Meres de la Place de Mai et guide de commemoration.',
      keywords: ['Jour du Souvenir Argentine', 'Dia de la Memoria', '24 mars Argentine', 'Meres Place de Mai', 'dictature Argentine'],
    },
    es: {
      titleTemplate: 'Dia de la Memoria {year} Argentina — Cuenta regresiva e historia',
      descriptionTemplate: 'Dia de la Memoria {year} en Argentina el {date}. Historia del golpe de 1976, las Madres de Plaza de Mayo y guia de conmemoracion.',
      keywords: ['Dia de la Memoria Argentina', '24 de marzo Argentina', 'Madres Plaza de Mayo', 'dictadura Argentina', 'Nunca Mas'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Day of Remembrance {year} in Argentina?', fr: 'Quand est le Jour du Souvenir {year} en Argentine ?', es: 'Cuando es el Dia de la Memoria {year} en Argentina?' },
      answer: {
        en: 'The Day of Remembrance {year} in Argentina is on {date}. It is always March 24, the anniversary of the 1976 military coup.',
        fr: 'Le Jour du Souvenir {year} en Argentine est le {date}. C\'est toujours le 24 mars, anniversaire du coup d\'Etat militaire de 1976.',
        es: 'El Dia de la Memoria {year} en Argentina es el {date}. Siempre es el 24 de marzo, aniversario del golpe de Estado militar de 1976.',
      },
    },
    {
      question: { en: 'What happened on March 24, 1976 in Argentina?', fr: 'Que s\'est-il passe le 24 mars 1976 en Argentine ?', es: 'Que paso el 24 de marzo de 1976 en Argentina?' },
      answer: {
        en: 'On March 24, 1976, a military junta overthrew President Isabel Peron and began a dictatorship that lasted until 1983. During this period, an estimated 30,000 people were disappeared, tortured, and killed by the state.',
        fr: 'Le 24 mars 1976, une junte militaire a renverse la presidente Isabel Peron et a commence une dictature qui a dure jusqu\'en 1983. Pendant cette periode, environ 30 000 personnes ont ete disparues, torturees et tuees.',
        es: 'El 24 de marzo de 1976, una junta militar derroco a la presidenta Isabel Peron y comenzo una dictadura que duro hasta 1983. Durante este periodo, aproximadamente 30.000 personas fueron desaparecidas, torturadas y asesinadas por el Estado.',
      },
    },
    {
      question: { en: 'Who are the Mothers of the Plaza de Mayo?', fr: 'Qui sont les Meres de la Place de Mai ?', es: 'Quienes son las Madres de Plaza de Mayo?' },
      answer: {
        en: 'The Mothers of the Plaza de Mayo are a group of Argentine mothers who began marching in 1977 to demand information about their children who were disappeared by the military dictatorship. They wear white headscarves and have become a global symbol of human rights resistance.',
        fr: 'Les Meres de la Place de Mai sont un groupe de meres argentines qui ont commence a marcher en 1977 pour exiger des informations sur leurs enfants disparus par la dictature militaire. Elles portent des foulards blancs et sont devenues un symbole mondial.',
        es: 'Las Madres de Plaza de Mayo son un grupo de madres argentinas que comenzaron a marchar en 1977 para exigir informacion sobre sus hijos desaparecidos por la dictadura militar. Usan panuelos blancos y se han convertido en un simbolo mundial de resistencia por los derechos humanos.',
      },
    },
    {
      question: { en: 'Is March 24 a public holiday in Argentina?', fr: 'Le 24 mars est-il un jour ferie en Argentine ?', es: 'El 24 de marzo es feriado en Argentina?' },
      answer: {
        en: 'Yes, March 24 (Day of Remembrance for Truth and Justice) has been a national public holiday in Argentina since 2002. Schools, banks, and government offices are closed.',
        fr: 'Oui, le 24 mars (Journee de la Memoire pour la Verite et la Justice) est un jour ferie national en Argentine depuis 2002.',
        es: 'Si, el 24 de marzo (Dia de la Memoria por la Verdad y la Justicia) es feriado nacional en Argentina desde 2002. Las escuelas, bancos y oficinas publicas estan cerrados.',
      },
    },
  ],

  colorTheme: 'memorial',
  icon: '\ud83d\udd6f\ufe0f',
};

// ---------------------------------------------------------------------------
// Malvinas Day — April 2
// ---------------------------------------------------------------------------

const malvinasDay: HolidayData = {
  id: 'ar_malvinas-day',
  countryCode: 'ar',
  slugs: { en: 'malvinas-day', fr: 'jour-des-malouines', es: 'dia-de-las-malvinas' },
  names: { en: 'Malvinas Day', fr: 'Jour des Malouines', es: 'Dia de las Malvinas' },

  dateType: 'fixed',
  fixedMonth: 4,
  fixedDay: 2,

  descriptions: {
    en: "Malvinas Day on April 2 is a national holiday in Argentina honoring the veterans and fallen soldiers of the Falklands War (1982). Known as Dia del Veterano y de los Caidos del Atlantico Sur, it marks the anniversary of Argentina's military landing on the islands.",
    fr: "Le Jour des Malouines, le 2 avril, est un jour ferie national en Argentine en hommage aux veterans et aux soldats tombes lors de la guerre des Malouines (1982). Connu sous le nom de Dia del Veterano y de los Caidos del Atlantico Sur, il marque l'anniversaire du debarquement militaire argentin sur les iles.",
    es: "El Dia de las Malvinas, el 2 de abril, es un feriado nacional en Argentina en honor a los veteranos y caidos de la Guerra de Malvinas (1982). Conocido como Dia del Veterano y de los Caidos del Atlantico Sur, marca el aniversario del desembarco militar argentino en las islas.",
  },

  history: {
    en: "On April 2, 1982, Argentine military forces landed on the Falkland Islands (Islas Malvinas), beginning a 74-day conflict with the United Kingdom. The war ended on June 14, 1982 with Argentine surrender, resulting in 649 Argentine military deaths, 255 British deaths, and 3 civilian casualties.\n\nThe conflict remains a deeply emotional issue in Argentina. The sovereignty claim over the Malvinas Islands has been part of Argentine national identity since 1833 when Britain took control. The Argentine constitution includes a clause asserting sovereignty over the islands.\n\nApril 2 was established as a national holiday to honor the veterans, many of whom were young conscripts. The day serves as both a remembrance of the fallen and a reaffirmation of Argentina's sovereignty claim.",
    fr: "Le 2 avril 1982, les forces militaires argentines ont debarque sur les iles Falkland (Islas Malvinas), commencant un conflit de 74 jours avec le Royaume-Uni. La guerre s'est terminee le 14 juin 1982 avec la reddition de l'Argentine, faisant 649 morts militaires argentins, 255 morts britanniques et 3 victimes civiles.\n\nLe conflit reste une question profondement emotionnelle en Argentine. La revendication de souverainete sur les iles Malvinas fait partie de l'identite nationale argentine depuis 1833. La constitution argentine inclut une clause affirmant la souverainete sur les iles.\n\nLe 2 avril a ete etabli comme jour ferie national pour honorer les veterans, dont beaucoup etaient de jeunes conscrits.",
    es: "El 2 de abril de 1982, las fuerzas militares argentinas desembarcaron en las Islas Malvinas, iniciando un conflicto de 74 dias con el Reino Unido. La guerra termino el 14 de junio de 1982 con la rendicion argentina, resultando en 649 muertes militares argentinas, 255 muertes britanicas y 3 victimas civiles.\n\nEl conflicto sigue siendo un tema profundamente emotivo en Argentina. El reclamo de soberania sobre las Islas Malvinas ha sido parte de la identidad nacional argentina desde 1833 cuando Gran Bretana tomo el control. La constitucion argentina incluye una clausula que afirma la soberania sobre las islas.\n\nEl 2 de abril fue establecido como feriado nacional para honrar a los veteranos, muchos de los cuales eran jovenes conscriptos.",
  },

  traditions: {
    en: [
      'Attending memorial ceremonies at war monuments and cenotaphs',
      'Laying wreaths at the Malvinas War Memorial in Buenos Aires',
      'Observing a moment of silence for the 649 fallen soldiers',
      'Watching televised commemorative events and documentaries',
      'Flying the Argentine flag at half-mast',
    ],
    fr: [
      'Assister aux ceremonies commemoratives aux monuments de guerre',
      'Deposer des couronnes au memorial de la guerre des Malouines a Buenos Aires',
      'Observer une minute de silence pour les 649 soldats tombes',
      'Regarder les evenements commemoratifs televises et les documentaires',
      'Mettre le drapeau argentin en berne',
    ],
    es: [
      'Asistir a ceremonias conmemorativas en monumentos de guerra y cenotafios',
      'Depositar ofrendas florales en el Monumento a los Caidos en Malvinas en Buenos Aires',
      'Guardar un minuto de silencio por los 649 caidos',
      'Ver eventos conmemorativos televisados y documentales',
      'Izar la bandera argentina a media asta',
    ],
  },

  funFacts: {
    en: [
      'The Falklands War lasted only 74 days, from April 2 to June 14, 1982.',
      'Many Argentine soldiers in the war were 18-19 year old conscripts with minimal training.',
      'The Malvinas Memorial in Buenos Aires lists the names of all 649 Argentine soldiers who died in the conflict.',
      'Argentina\'s claim to the islands dates back to 1820, just four years after independence from Spain.',
      '"Las Malvinas son Argentinas" (The Malvinas are Argentine) is a phrase seen on signs, murals, and currency throughout the country.',
    ],
    fr: [
      'La guerre des Malouines n\'a dure que 74 jours, du 2 avril au 14 juin 1982.',
      'De nombreux soldats argentins etaient des conscrits de 18-19 ans avec une formation minimale.',
      'Le memorial des Malvinas a Buenos Aires liste les noms des 649 soldats argentins morts dans le conflit.',
      'La revendication de l\'Argentine sur les iles remonte a 1820, seulement quatre ans apres l\'independance de l\'Espagne.',
      '"Las Malvinas son Argentinas" est une phrase visible sur des panneaux et des murales a travers tout le pays.',
    ],
    es: [
      'La Guerra de Malvinas duro solo 74 dias, del 2 de abril al 14 de junio de 1982.',
      'Muchos soldados argentinos en la guerra eran conscriptos de 18-19 anos con entrenamiento minimo.',
      'El Monumento a los Caidos en Malvinas en Buenos Aires lista los nombres de los 649 soldados argentinos que murieron en el conflicto.',
      'El reclamo de Argentina sobre las islas data de 1820, solo cuatro anos despues de la independencia de Espana.',
      '"Las Malvinas son Argentinas" es una frase visible en carteles, murales y billetes en todo el pais.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend the official ceremony at the Malvinas War Memorial in Buenos Aires',
      'Visit the Museo Malvinas for context and historical exhibits',
      'Check the schedule for local commemorative events in your city',
      'Pay respects at your local Malvinas monument or cenotaph',
      'Watch documentaries about the conflict for historical understanding',
    ],
    fr: [
      'Assister a la ceremonie officielle au memorial de la guerre des Malouines a Buenos Aires',
      'Visiter le Museo Malvinas pour le contexte et les expositions historiques',
      'Verifier le programme des evenements commemoratifs locaux dans votre ville',
      'Rendre hommage au monument aux Malouines local',
      'Regarder des documentaires sur le conflit pour la comprehension historique',
    ],
    es: [
      'Asistir a la ceremonia oficial en el Monumento a los Caidos en Malvinas en Buenos Aires',
      'Visitar el Museo Malvinas para contexto y exhibiciones historicas',
      'Verificar el programa de eventos conmemorativos locales en tu ciudad',
      'Rendir homenaje en el monumento a Malvinas local',
      'Ver documentales sobre el conflicto para comprension historica',
    ],
  },

  relatedHolidays: ['ar_independence-day', 'ar_day-of-remembrance'],

  seo: {
    en: {
      titleTemplate: 'Malvinas Day {year} Argentina — Countdown & History',
      descriptionTemplate: 'Malvinas Day {year} in Argentina on April 2. History of the Falklands War, memorial events, and commemoration guide.',
      keywords: ['Malvinas Day Argentina', 'Dia de las Malvinas', 'Falklands War', 'April 2 Argentina', 'Argentina veterans'],
    },
    fr: {
      titleTemplate: 'Jour des Malouines {year} Argentine — Compte a rebours et histoire',
      descriptionTemplate: 'Jour des Malouines {year} en Argentine le 2 avril. Histoire de la guerre des Malouines et guide de commemoration.',
      keywords: ['Jour des Malouines Argentine', 'guerre des Malouines', '2 avril Argentine', 'veterans Argentine', 'feries Argentine'],
    },
    es: {
      titleTemplate: 'Dia de las Malvinas {year} Argentina — Cuenta regresiva e historia',
      descriptionTemplate: 'Dia de las Malvinas {year} en Argentina el 2 de abril. Historia de la Guerra de Malvinas y guia de conmemoracion.',
      keywords: ['Dia de las Malvinas', 'Guerra de Malvinas', '2 de abril Argentina', 'veteranos Malvinas', 'feriados Argentina'],
    },
  },

  faq: [
    {
      question: { en: 'When is Malvinas Day {year}?', fr: 'Quand est le Jour des Malouines {year} ?', es: 'Cuando es el Dia de las Malvinas {year}?' },
      answer: {
        en: 'Malvinas Day {year} is on {date}. It is always April 2, the anniversary of the 1982 Argentine landing on the islands.',
        fr: 'Le Jour des Malouines {year} est le {date}. C\'est toujours le 2 avril, anniversaire du debarquement argentin de 1982 sur les iles.',
        es: 'El Dia de las Malvinas {year} es el {date}. Siempre es el 2 de abril, aniversario del desembarco argentino de 1982 en las islas.',
      },
    },
    {
      question: { en: 'What was the Falklands War?', fr: 'Qu\'est-ce que la guerre des Malouines ?', es: 'Que fue la Guerra de Malvinas?' },
      answer: {
        en: 'The Falklands War was a 74-day armed conflict between Argentina and the United Kingdom in 1982 over the Falkland Islands (Islas Malvinas). Argentina invaded on April 2 and the conflict ended on June 14 with British victory. 649 Argentine and 255 British military personnel died.',
        fr: 'La guerre des Malouines fut un conflit arme de 74 jours entre l\'Argentine et le Royaume-Uni en 1982 pour les iles Falkland (Islas Malvinas). L\'Argentine a envahi le 2 avril et le conflit s\'est termine le 14 juin avec la victoire britannique.',
        es: 'La Guerra de Malvinas fue un conflicto armado de 74 dias entre Argentina y el Reino Unido en 1982 por las Islas Malvinas. Argentina desembarco el 2 de abril y el conflicto termino el 14 de junio con la victoria britanica. Murieron 649 militares argentinos y 255 britanicos.',
      },
    },
    {
      question: { en: 'Is Malvinas Day a public holiday?', fr: 'Le Jour des Malouines est-il un jour ferie ?', es: 'El Dia de Malvinas es feriado?' },
      answer: {
        en: 'Yes, April 2 (Day of the Veteran and Fallen of the South Atlantic) is a national public holiday in Argentina. All government offices, banks, and most businesses are closed.',
        fr: 'Oui, le 2 avril est un jour ferie national en Argentine. Tous les bureaux gouvernementaux, banques et la plupart des commerces sont fermes.',
        es: 'Si, el 2 de abril (Dia del Veterano y de los Caidos del Atlantico Sur) es feriado nacional en Argentina. Todas las oficinas gubernamentales, bancos y la mayoria de los comercios estan cerrados.',
      },
    },
    {
      question: { en: 'Does Argentina still claim the Falkland Islands?', fr: 'L\'Argentine revendique-t-elle encore les iles Malouines ?', es: 'Argentina aun reclama las Islas Malvinas?' },
      answer: {
        en: "Yes, Argentina maintains its sovereignty claim over the Falkland Islands (Islas Malvinas). The claim is enshrined in the Argentine constitution and is a matter of broad national consensus across the political spectrum.",
        fr: 'Oui, l\'Argentine maintient sa revendication de souverainete sur les iles Malouines. La revendication est inscrite dans la constitution argentine et fait l\'objet d\'un large consensus national.',
        es: 'Si, Argentina mantiene su reclamo de soberania sobre las Islas Malvinas. El reclamo esta consagrado en la constitucion argentina y es un tema de amplio consenso nacional a traves del espectro politico.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\udde6\ud83c\uddf7',
};

// ---------------------------------------------------------------------------
// May Revolution Day — May 25
// ---------------------------------------------------------------------------

const mayRevolution: HolidayData = {
  id: 'ar_may-revolution',
  countryCode: 'ar',
  slugs: { en: 'may-revolution-day', fr: 'jour-de-la-revolution-de-mai', es: 'dia-de-la-revolucion-de-mayo' },
  names: { en: 'May Revolution Day', fr: 'Jour de la Revolution de Mai', es: 'Dia de la Revolucion de Mayo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 25,

  descriptions: {
    en: "May Revolution Day on May 25 commemorates the 1810 Revolution that started Argentina's independence movement. Known as the Revolucion de Mayo, it marked the creation of the first local government (Primera Junta) and the beginning of the end of Spanish colonial rule.",
    fr: "Le Jour de la Revolution de Mai, le 25 mai, commemore la Revolution de 1810 qui a lance le mouvement d'independance de l'Argentine. Connue sous le nom de Revolucion de Mayo, elle a marque la creation du premier gouvernement local (Primera Junta) et le debut de la fin de la domination coloniale espagnole.",
    es: "El Dia de la Revolucion de Mayo, el 25 de mayo, conmemora la Revolucion de 1810 que inicio el movimiento independentista de Argentina. Conocida como la Revolucion de Mayo, marco la creacion del primer gobierno local (Primera Junta) y el comienzo del fin del dominio colonial espanol.",
  },

  history: {
    en: "On May 25, 1810, the citizens of Buenos Aires gathered at the Plaza de Mayo to demand the removal of Viceroy Cisneros and the establishment of a local governing junta. This event, known as the Revolucion de Mayo, was triggered by Napoleon's invasion of Spain and the resulting power vacuum.\n\nThe Primera Junta, led by Cornelio Saavedra, became the first independent government in what would become Argentina. Although full independence was not declared until July 9, 1816, May 25 is considered the birth date of the Argentine nation.\n\nThe date holds such significance that the main square in Buenos Aires — the Plaza de Mayo — is named after it. The Casa Rosada (presidential palace) faces this historic square, and May 25 celebrations have been held there since the earliest days of the republic.",
    fr: "Le 25 mai 1810, les citoyens de Buenos Aires se sont rassembles sur la Place de Mai pour exiger la destitution du vice-roi Cisneros et l'etablissement d'une junte gouvernementale locale. Cet evenement, connu sous le nom de Revolucion de Mayo, a ete declenche par l'invasion de l'Espagne par Napoleon.\n\nLa Primera Junta, dirigee par Cornelio Saavedra, est devenue le premier gouvernement independant de ce qui allait devenir l'Argentine. Bien que l'independance complete n'ait ete declaree que le 9 juillet 1816, le 25 mai est considere comme la date de naissance de la nation argentine.\n\nLa date est si importante que la place principale de Buenos Aires — la Plaza de Mayo — porte son nom.",
    es: "El 25 de mayo de 1810, los ciudadanos de Buenos Aires se reunieron en la Plaza de Mayo para exigir la destitucion del Virrey Cisneros y el establecimiento de una junta de gobierno local. Este evento, conocido como la Revolucion de Mayo, fue desencadenado por la invasion de Napoleon a Espana y el vacio de poder resultante.\n\nLa Primera Junta, liderada por Cornelio Saavedra, se convirtio en el primer gobierno independiente de lo que seria Argentina. Aunque la independencia completa no fue declarada hasta el 9 de julio de 1816, el 25 de mayo es considerado la fecha de nacimiento de la nacion argentina.\n\nLa fecha tiene tal importancia que la plaza principal de Buenos Aires — la Plaza de Mayo — lleva su nombre. La Casa Rosada (palacio presidencial) da a esta historica plaza.",
  },

  traditions: {
    en: [
      'Attending patriotic ceremonies and flag-raising at the Plaza de Mayo',
      'Eating locro (a traditional hearty corn and meat stew)',
      'Watching school plays and reenactments of the 1810 events',
      'Buying empanadas and pastelitos from street vendors',
      'Displaying the Argentine flag on balconies and windows',
      'Watching the traditional "pregon" (town crier) performance',
    ],
    fr: [
      'Assister aux ceremonies patriotiques et lever du drapeau sur la Place de Mai',
      'Manger du locro (un ragout traditionnel de mais et de viande)',
      'Regarder des pieces de theatre scolaires et des reconstitutions des evenements de 1810',
      'Acheter des empanadas et des pastelitos aux vendeurs ambulants',
      'Afficher le drapeau argentin sur les balcons et fenetres',
      'Regarder le traditionnel "pregon" (crieur public)',
    ],
    es: [
      'Asistir a ceremonias patrioticas y el izamiento de bandera en la Plaza de Mayo',
      'Comer locro (un guiso tradicional de maiz y carne)',
      'Ver obras escolares y recreaciones de los eventos de 1810',
      'Comprar empanadas y pastelitos a los vendedores ambulantes',
      'Colocar la bandera argentina en balcones y ventanas',
      'Ver la tradicional representacion del "pregon" (pregonero)',
    ],
  },

  funFacts: {
    en: [
      'According to legend, the sun broke through the clouds over the Plaza de Mayo on May 25, 1810 — the "Sol de Mayo" became a national symbol and appears on the Argentine flag.',
      'Locro, the traditional dish of May 25, is a pre-Columbian recipe that was originally made by indigenous peoples of the Andes.',
      'May 25 is one of only two dates called "patrias" (patriotic) in Argentina, the other being July 9.',
      'The first celebration of May 25 as a national holiday took place in 1811, just one year after the revolution.',
      'School children across Argentina perform plays about the 1810 revolution, with students dressed in colonial-era costumes.',
    ],
    fr: [
      'Selon la legende, le soleil a perce les nuages au-dessus de la Place de Mai le 25 mai 1810 — le "Sol de Mayo" est devenu un symbole national et figure sur le drapeau argentin.',
      'Le locro, le plat traditionnel du 25 mai, est une recette precolombienne originellement preparee par les peuples autochtones des Andes.',
      'Le 25 mai est l\'une des deux seules dates appelees "patrias" en Argentine, l\'autre etant le 9 juillet.',
      'La premiere celebration du 25 mai comme fete nationale a eu lieu en 1811, seulement un an apres la revolution.',
      'Les ecoliers de toute l\'Argentine jouent des pieces sur la revolution de 1810 en costumes de l\'epoque coloniale.',
    ],
    es: [
      'Segun la leyenda, el sol atraveso las nubes sobre la Plaza de Mayo el 25 de mayo de 1810 — el "Sol de Mayo" se convirtio en simbolo nacional y aparece en la bandera argentina.',
      'El locro, el plato tradicional del 25 de mayo, es una receta precolombina que originalmente preparaban los pueblos indigenas de los Andes.',
      'El 25 de mayo es una de solo dos fechas llamadas "patrias" en Argentina, la otra es el 9 de julio.',
      'La primera celebracion del 25 de mayo como feriado nacional tuvo lugar en 1811, solo un ano despues de la revolucion.',
      'Los escolares de toda Argentina hacen actos sobre la revolucion de 1810 vestidos con trajes de la epoca colonial.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan to make or buy locro — many restaurants offer it only on May 25',
      'Attend the main ceremony at the Plaza de Mayo in Buenos Aires',
      'Stock up on empanadas and pastelitos for the celebration',
      'Bundle up warmly as May 25 falls in late autumn in Argentina',
      'Check local event schedules for patriotic celebrations in your area',
    ],
    fr: [
      'Preparer ou acheter du locro — de nombreux restaurants ne le proposent que le 25 mai',
      'Assister a la ceremonie principale sur la Place de Mai a Buenos Aires',
      'Se procurer des empanadas et des pastelitos pour la celebration',
      'Se couvrir chaudement car le 25 mai tombe en fin d\'automne en Argentine',
      'Verifier le programme des evenements patriotiques locaux',
    ],
    es: [
      'Planear hacer o comprar locro — muchos restaurantes lo ofrecen solo el 25 de mayo',
      'Asistir a la ceremonia principal en la Plaza de Mayo en Buenos Aires',
      'Conseguir empanadas y pastelitos para la celebracion',
      'Abrigarse bien ya que el 25 de mayo cae a fines del otono en Argentina',
      'Consultar la agenda de eventos patrioticos locales en tu zona',
    ],
  },

  relatedHolidays: ['ar_independence-day', 'ar_day-of-remembrance'],

  seo: {
    en: {
      titleTemplate: 'May Revolution Day {year} Argentina — Countdown & History',
      descriptionTemplate: 'May Revolution Day {year} in Argentina on May 25. History of the 1810 revolution, traditions, locro, and celebration guide.',
      keywords: ['May Revolution Day Argentina', 'Revolucion de Mayo', '25 de Mayo Argentina', 'Argentina independence', 'Argentina holidays'],
    },
    fr: {
      titleTemplate: 'Jour de la Revolution de Mai {year} Argentine — Compte a rebours',
      descriptionTemplate: 'Jour de la Revolution de Mai {year} en Argentine le 25 mai. Histoire de la revolution de 1810, traditions et guide.',
      keywords: ['Revolution de Mai Argentine', '25 mai Argentine', 'Revolucion de Mayo', 'independance Argentine', 'feries Argentine'],
    },
    es: {
      titleTemplate: 'Dia de la Revolucion de Mayo {year} Argentina — Cuenta regresiva',
      descriptionTemplate: 'Dia de la Revolucion de Mayo {year} en Argentina el 25 de mayo. Historia de la revolucion de 1810, tradiciones, locro y guia.',
      keywords: ['Revolucion de Mayo', '25 de Mayo Argentina', 'feriados patrios Argentina', 'Primera Junta', 'fiestas patrias Argentina'],
    },
  },

  faq: [
    {
      question: { en: 'When is May Revolution Day {year}?', fr: 'Quand est le Jour de la Revolution de Mai {year} ?', es: 'Cuando es el Dia de la Revolucion de Mayo {year}?' },
      answer: {
        en: 'May Revolution Day {year} is on {date}. It is always May 25, one of Argentina\'s most important patriotic holidays.',
        fr: 'Le Jour de la Revolution de Mai {year} est le {date}. C\'est toujours le 25 mai, l\'un des jours feries patriotiques les plus importants d\'Argentine.',
        es: 'El Dia de la Revolucion de Mayo {year} es el {date}. Siempre es el 25 de mayo, uno de los feriados patrios mas importantes de Argentina.',
      },
    },
    {
      question: { en: 'What is locro?', fr: 'Qu\'est-ce que le locro ?', es: 'Que es el locro?' },
      answer: {
        en: 'Locro is a hearty traditional Argentine stew made with corn, beans, squash, and various meats. It is the quintessential dish of May 25 and July 9 celebrations, with origins in pre-Columbian Andean cuisine.',
        fr: 'Le locro est un ragout traditionnel argentin consistant a base de mais, haricots, courge et diverses viandes. C\'est le plat par excellence des celebrations du 25 mai et du 9 juillet.',
        es: 'El locro es un guiso tradicional argentino hecho con maiz, porotos, zapallo y diversas carnes. Es el plato por excelencia de las celebraciones del 25 de mayo y el 9 de julio, con origenes en la cocina andina precolombina.',
      },
    },
    {
      question: { en: 'What is the Sol de Mayo?', fr: 'Qu\'est-ce que le Sol de Mayo ?', es: 'Que es el Sol de Mayo?' },
      answer: {
        en: 'The Sol de Mayo (Sun of May) is the sun symbol on the Argentine flag. According to legend, the sun broke through clouds over the Plaza de Mayo on May 25, 1810 as the revolution succeeded, and it became a symbol of the nation\'s birth.',
        fr: 'Le Sol de Mayo (Soleil de Mai) est le symbole du soleil sur le drapeau argentin. Selon la legende, le soleil a perce les nuages au-dessus de la Place de Mai le 25 mai 1810 lors du succes de la revolution.',
        es: 'El Sol de Mayo es el simbolo del sol en la bandera argentina. Segun la leyenda, el sol atraveso las nubes sobre la Plaza de Mayo el 25 de mayo de 1810 cuando triunfo la revolucion, y se convirtio en simbolo del nacimiento de la nacion.',
      },
    },
    {
      question: { en: 'Is May 25 Independence Day in Argentina?', fr: 'Le 25 mai est-il le Jour de l\'Independance en Argentine ?', es: 'El 25 de mayo es el Dia de la Independencia en Argentina?' },
      answer: {
        en: 'May 25 marks the start of the independence movement (the May Revolution of 1810), but formal independence was declared on July 9, 1816. Both dates are national "patriotic" holidays in Argentina.',
        fr: 'Le 25 mai marque le debut du mouvement d\'independance (Revolution de Mai 1810), mais l\'independance formelle a ete declaree le 9 juillet 1816. Les deux dates sont des feries "patriotiques" nationales en Argentine.',
        es: 'El 25 de mayo marca el inicio del movimiento independentista (Revolucion de Mayo de 1810), pero la independencia formal fue declarada el 9 de julio de 1816. Ambas fechas son feriados "patrios" nacionales en Argentina.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\udde6\ud83c\uddf7',
};

// ---------------------------------------------------------------------------
// Independence Day — July 9
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'ar_independence-day',
  countryCode: 'ar',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Independance", es: 'Dia de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 7,
  fixedDay: 9,

  descriptions: {
    en: "Argentina's Independence Day on July 9 celebrates the formal declaration of independence from Spain in 1816. Known as Dia de la Independencia, it was declared in the city of San Miguel de Tucuman and is one of the two most important patriotic holidays, celebrated with parades, traditional food, and national pride.",
    fr: "Le Jour de l'Independance de l'Argentine, le 9 juillet, celebre la declaration formelle d'independance de l'Espagne en 1816. Connu sous le nom de Dia de la Independencia, il a ete declare dans la ville de San Miguel de Tucuman et est l'un des deux jours feries patriotiques les plus importants.",
    es: "El Dia de la Independencia de Argentina, el 9 de julio, celebra la declaracion formal de independencia de Espana en 1816. Fue declarada en la ciudad de San Miguel de Tucuman y es uno de los dos feriados patrios mas importantes, celebrado con desfiles, comida tradicional y orgullo nacional.",
  },

  history: {
    en: "On July 9, 1816, the Congress of Tucuman formally declared the independence of the United Provinces of South America (later Argentina) from Spain. This took place at the Casa de Tucuman, a colonial house that has become one of Argentina's most important historical sites.\n\nThe declaration came six years after the May Revolution of 1810 and during a period of great uncertainty. Napoleon had been defeated in Europe, and Spain was attempting to reassert control over its American colonies. The delegates acted decisively to establish full sovereignty.\n\nThe Casa de Tucuman, also known as the Casa Historica, was partially demolished and rebuilt over the years. Today, a careful reconstruction stands as a national monument. July 9 celebrations feature military parades, especially on the grand Avenida 9 de Julio in Buenos Aires — the widest avenue in the world, named after this date.",
    fr: "Le 9 juillet 1816, le Congres de Tucuman a formellement declare l'independance des Provinces-Unies d'Amerique du Sud (plus tard l'Argentine) de l'Espagne. Cela a eu lieu a la Casa de Tucuman, une maison coloniale devenue l'un des sites historiques les plus importants d'Argentine.\n\nLa declaration est intervenue six ans apres la Revolution de Mai de 1810 et pendant une periode de grande incertitude. Napoleon avait ete vaincu en Europe et l'Espagne tentait de reasseoir son controle sur ses colonies americaines.\n\nLa Casa de Tucuman est aujourd'hui un monument national. Les celebrations du 9 juillet comprennent des defiles militaires, notamment sur la grande Avenida 9 de Julio a Buenos Aires — la plus large avenue du monde, nommee d'apres cette date.",
    es: "El 9 de julio de 1816, el Congreso de Tucuman declaro formalmente la independencia de las Provincias Unidas de Sudamerica (luego Argentina) de Espana. Esto tuvo lugar en la Casa de Tucuman, una casa colonial que se ha convertido en uno de los sitios historicos mas importantes de Argentina.\n\nLa declaracion llego seis anos despues de la Revolucion de Mayo de 1810 y durante un periodo de gran incertidumbre. Napoleon habia sido derrotado en Europa y Espana intentaba reafirmar su control sobre sus colonias americanas. Los delegados actuaron con decision para establecer la soberania plena.\n\nLa Casa de Tucuman, tambien conocida como Casa Historica, fue parcialmente demolida y reconstruida a lo largo de los anos. Hoy, una cuidadosa reconstruccion se erige como monumento nacional. Las celebraciones del 9 de julio incluyen desfiles militares, especialmente en la gran Avenida 9 de Julio en Buenos Aires — la avenida mas ancha del mundo, nombrada por esta fecha.",
  },

  traditions: {
    en: [
      'Watching the military parade on Avenida 9 de Julio in Buenos Aires',
      'Eating locro, empanadas, and pastelitos',
      'Visiting the Casa Historica de Tucuman',
      'Attending flag-raising ceremonies and patriotic speeches',
      'Displaying the Argentine flag on homes and buildings',
      'Drinking chocolate caliente (hot chocolate) to fight the winter cold',
      'Watching school performances and historical reenactments',
    ],
    fr: [
      'Regarder le defile militaire sur l\'Avenida 9 de Julio a Buenos Aires',
      'Manger du locro, des empanadas et des pastelitos',
      'Visiter la Casa Historica de Tucuman',
      'Assister aux ceremonies de lever du drapeau et discours patriotiques',
      'Afficher le drapeau argentin sur les maisons et batiments',
      'Boire du chocolat chaud pour lutter contre le froid hivernal',
      'Regarder des spectacles scolaires et des reconstitutions historiques',
    ],
    es: [
      'Ver el desfile militar en la Avenida 9 de Julio en Buenos Aires',
      'Comer locro, empanadas y pastelitos',
      'Visitar la Casa Historica de Tucuman',
      'Asistir a ceremonias de izamiento de bandera y discursos patrioticos',
      'Colocar la bandera argentina en casas y edificios',
      'Tomar chocolate caliente para combatir el frio invernal',
      'Ver actos escolares y recreaciones historicas',
    ],
  },

  funFacts: {
    en: [
      'The Avenida 9 de Julio in Buenos Aires, named after Independence Day, is 140 meters wide — making it the widest avenue in the world.',
      'The original Casa de Tucuman was largely demolished in the 19th century but was reconstructed in the 1940s using historical photographs and documents.',
      'July 9 falls in the middle of Argentine winter, so celebrations feature warm foods like locro and hot chocolate.',
      'The Congress of Tucuman included delegates from across the territory, though not all provinces were represented.',
      'Independence was declared as from Spain and "any other foreign domination," a phrase that reflected concerns about Portuguese and British ambitions.',
    ],
    fr: [
      'L\'Avenida 9 de Julio a Buenos Aires, nommee d\'apres le Jour de l\'Independance, mesure 140 metres de large — la plus large avenue du monde.',
      'La Casa de Tucuman originale a ete largement demolie au XIXe siecle mais reconstruite dans les annees 1940.',
      'Le 9 juillet tombe en plein hiver argentin, donc les celebrations comportent des plats chauds comme le locro et le chocolat chaud.',
      'Le Congres de Tucuman incluait des delegues de tout le territoire, bien que toutes les provinces ne soient pas representees.',
      'L\'independance a ete declaree de l\'Espagne et de "toute autre domination etrangere."',
    ],
    es: [
      'La Avenida 9 de Julio en Buenos Aires, nombrada por el Dia de la Independencia, tiene 140 metros de ancho — es la avenida mas ancha del mundo.',
      'La Casa de Tucuman original fue en gran parte demolida en el siglo XIX pero fue reconstruida en la decada de 1940 usando fotografias y documentos historicos.',
      'El 9 de julio cae en pleno invierno argentino, por eso las celebraciones incluyen comidas calientes como locro y chocolate caliente.',
      'El Congreso de Tucuman incluyo delegados de todo el territorio, aunque no todas las provincias estuvieron representadas.',
      'La independencia fue declarada de Espana y de "toda otra dominacion extranjera," frase que reflejaba preocupaciones sobre ambiciones portuguesas y britanicas.',
    ],
  },

  planningChecklist: {
    en: [
      'Secure a good spot along Avenida 9 de Julio early for the parade',
      'Prepare locro or reserve at a restaurant offering the traditional menu',
      'Dress warmly — July 9 is winter in Argentina with temperatures around 5-12C',
      'Visit the Casa Historica in Tucuman if traveling',
      'Display the Argentine flag on your home or balcony',
    ],
    fr: [
      'Trouver un bon emplacement le long de l\'Avenida 9 de Julio tot pour le defile',
      'Preparer du locro ou reserver dans un restaurant proposant le menu traditionnel',
      'S\'habiller chaudement — le 9 juillet est en hiver en Argentine avec des temperatures autour de 5-12C',
      'Visiter la Casa Historica a Tucuman si vous voyagez',
      'Afficher le drapeau argentin sur votre maison ou balcon',
    ],
    es: [
      'Asegurar un buen lugar en la Avenida 9 de Julio temprano para el desfile',
      'Preparar locro o reservar en un restaurante que ofrezca el menu tradicional',
      'Abrigarse bien — el 9 de julio es invierno en Argentina con temperaturas de 5-12C',
      'Visitar la Casa Historica en Tucuman si viajan',
      'Colocar la bandera argentina en la casa o balcon',
    ],
  },

  relatedHolidays: ['ar_may-revolution', 'ar_malvinas-day'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Argentina — Countdown & Guide',
      descriptionTemplate: 'Argentina Independence Day {year} on July 9. History of the 1816 declaration in Tucuman, parade info, traditions, and celebration guide.',
      keywords: ['Argentina Independence Day', 'July 9 Argentina', 'Dia de la Independencia', 'Tucuman independence', 'Argentina holidays'],
    },
    fr: {
      titleTemplate: 'Jour de l\'Independance {year} Argentine — Compte a rebours',
      descriptionTemplate: 'Jour de l\'Independance de l\'Argentine {year} le 9 juillet. Histoire de la declaration de 1816 a Tucuman et guide.',
      keywords: ['Independance Argentine', '9 juillet Argentine', 'Dia de la Independencia', 'Tucuman', 'feries Argentine'],
    },
    es: {
      titleTemplate: 'Dia de la Independencia {year} Argentina — Cuenta regresiva',
      descriptionTemplate: 'Dia de la Independencia de Argentina {year} el 9 de julio. Historia de la declaracion de 1816 en Tucuman, desfiles y guia.',
      keywords: ['Dia de la Independencia Argentina', '9 de julio Argentina', 'feriados patrios', 'Tucuman independencia', 'fiestas patrias'],
    },
  },

  faq: [
    {
      question: { en: 'When is Independence Day {year} in Argentina?', fr: 'Quand est le Jour de l\'Independance {year} en Argentine ?', es: 'Cuando es el Dia de la Independencia {year} en Argentina?' },
      answer: {
        en: 'Argentina\'s Independence Day {year} is on {date}. It is always July 9.',
        fr: 'Le Jour de l\'Independance {year} de l\'Argentine est le {date}. C\'est toujours le 9 juillet.',
        es: 'El Dia de la Independencia {year} de Argentina es el {date}. Siempre es el 9 de julio.',
      },
    },
    {
      question: { en: 'Where was Argentine independence declared?', fr: 'Ou l\'independance argentine a-t-elle ete declaree ?', es: 'Donde se declaro la independencia argentina?' },
      answer: {
        en: 'Argentine independence was declared on July 9, 1816 at the Casa de Tucuman in San Miguel de Tucuman. The house, now known as the Casa Historica, is a national monument open to visitors.',
        fr: 'L\'independance argentine a ete declaree le 9 juillet 1816 a la Casa de Tucuman a San Miguel de Tucuman. La maison est maintenant un monument national ouvert aux visiteurs.',
        es: 'La independencia argentina fue declarada el 9 de julio de 1816 en la Casa de Tucuman en San Miguel de Tucuman. La casa, hoy conocida como Casa Historica, es un monumento nacional abierto a los visitantes.',
      },
    },
    {
      question: { en: 'Why is Avenida 9 de Julio so famous?', fr: 'Pourquoi l\'Avenida 9 de Julio est-elle si celebre ?', es: 'Por que es tan famosa la Avenida 9 de Julio?' },
      answer: {
        en: "Avenida 9 de Julio in Buenos Aires, named after Independence Day, is the widest avenue in the world at 140 meters across. It is home to the iconic Obelisk and hosts the main military parade on July 9 each year.",
        fr: 'L\'Avenida 9 de Julio a Buenos Aires, nommee d\'apres le Jour de l\'Independance, est la plus large avenue du monde avec 140 metres. Elle abrite l\'Obelisque iconique et accueille le defile militaire principal le 9 juillet.',
        es: 'La Avenida 9 de Julio en Buenos Aires, nombrada por el Dia de la Independencia, es la avenida mas ancha del mundo con 140 metros de ancho. Alberga el iconico Obelisco y es sede del desfile militar principal el 9 de julio.',
      },
    },
    {
      question: { en: 'What is the difference between May 25 and July 9 in Argentina?', fr: 'Quelle est la difference entre le 25 mai et le 9 juillet en Argentine ?', es: 'Cual es la diferencia entre el 25 de mayo y el 9 de julio en Argentina?' },
      answer: {
        en: 'May 25 (1810) commemorates the May Revolution that created the first local government, starting the independence movement. July 9 (1816) marks the formal declaration of independence from Spain. Both are considered "patriotic" national holidays.',
        fr: 'Le 25 mai (1810) commemore la Revolution de Mai qui a cree le premier gouvernement local. Le 9 juillet (1816) marque la declaration formelle d\'independance de l\'Espagne. Les deux sont des feries "patriotiques" nationaux.',
        es: 'El 25 de mayo (1810) conmemora la Revolucion de Mayo que creo el primer gobierno local, iniciando el movimiento independentista. El 9 de julio (1816) marca la declaracion formal de independencia de Espana. Ambos son feriados "patrios" nacionales.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\udde6\ud83c\uddf7',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'ar_christmas',
  countryCode: 'ar',
  slugs: { en: 'christmas-day', fr: 'jour-de-noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Jour de Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is a major national holiday in Argentina, celebrated in the warmth of summer. Argentine Christmas traditions blend Italian, Spanish, and local customs, featuring vitel tone, pan dulce, sidra, and late-night family gatherings under the summer sky.",
    fr: "Le Jour de Noel, le 25 decembre, est un jour ferie national majeur en Argentine, celebre dans la chaleur de l'ete austral. Les traditions de Noel argentines melangent les coutumes italiennes, espagnoles et locales, avec le vitel tone, le pan dulce, la sidra et les reunions familiales nocturnes sous le ciel d'ete.",
    es: "La Navidad, el 25 de diciembre, es un feriado nacional importante en Argentina, celebrado en el calor del verano. Las tradiciones navidenas argentinas mezclan costumbres italianas, espanolas y locales, con vitel tone, pan dulce, sidra y reuniones familiares nocturnas bajo el cielo de verano.",
  },

  history: {
    en: "Christmas in Argentina reflects the country's strong Italian and Spanish heritage. The tradition of Nochebuena (Christmas Eve) is the primary celebration, with families gathering for a late dinner that typically starts around 10-11 PM and continues past midnight.\n\nItalian immigrants brought the tradition of pan dulce (panettone) and vitel tone (vitello tonnato), which have become quintessential Argentine Christmas foods. The Spanish influence is seen in the importance of the family gathering and the religious aspects of the celebration.\n\nAs Christmas falls in summer in the Southern Hemisphere, celebrations often have an outdoor character. Many families continue their celebration at the beach or countryside in the days following Christmas.",
    fr: "Noel en Argentine reflete le fort heritage italien et espagnol du pays. La tradition de Nochebuena (Nuit de Noel) est la celebration principale, les familles se reunissant pour un diner tardif qui commence vers 22-23h et continue apres minuit.\n\nLes immigrants italiens ont apporte la tradition du pan dulce (panettone) et du vitel tone (vitello tonnato), devenus des aliments de Noel incontournables. L'influence espagnole se voit dans l'importance de la reunion familiale et les aspects religieux.\n\nComme Noel tombe en ete dans l'hemisphere sud, les celebrations ont souvent un caractere exterieur.",
    es: "La Navidad en Argentina refleja la fuerte herencia italiana y espanola del pais. La tradicion de Nochebuena es la celebracion principal, con familias que se reunen para una cena tardia que tipicamente comienza alrededor de las 22-23h y continua pasada la medianoche.\n\nLos inmigrantes italianos trajeron la tradicion del pan dulce (panettone) y el vitel tone (vitello tonnato), que se han convertido en comidas navidenas argentinas por excelencia. La influencia espanola se ve en la importancia de la reunion familiar y los aspectos religiosos de la celebracion.\n\nComo la Navidad cae en verano en el hemisferio sur, las celebraciones a menudo tienen un caracter al aire libre. Muchas familias continuan su celebracion en la playa o el campo en los dias siguientes a la Navidad.",
  },

  traditions: {
    en: [
      'Gathering for Nochebuena dinner starting around 10-11 PM on December 24',
      'Eating vitel tone (cold veal with tuna sauce) as a traditional starter',
      'Sharing pan dulce (Argentine panettone) and toasting with sidra at midnight',
      'Setting off fireworks and globos de luz (paper lanterns) at midnight',
      'Opening gifts at midnight or early Christmas morning',
      'Attending Misa de Gallo (Midnight Mass)',
      'Enjoying asado and outdoor activities on Christmas Day in the summer heat',
    ],
    fr: [
      'Se reunir pour le diner de Nochebuena vers 22-23h le 24 decembre',
      'Manger du vitel tone (veau froid avec sauce au thon) en entree traditionnelle',
      'Partager le pan dulce et trinquer avec de la sidra a minuit',
      'Lancer des feux d\'artifice et des globos de luz a minuit',
      'Ouvrir les cadeaux a minuit ou tot le matin de Noel',
      'Assister a la Misa de Gallo (Messe de Minuit)',
      'Profiter d\'un asado et d\'activites en plein air le jour de Noel dans la chaleur estivale',
    ],
    es: [
      'Reunirse para la cena de Nochebuena alrededor de las 22-23h el 24 de diciembre',
      'Comer vitel tone (carne fria con salsa de atun) como entrada tradicional',
      'Compartir pan dulce y brindar con sidra a medianoche',
      'Lanzar fuegos artificiales y globos de luz (farolitos de papel) a medianoche',
      'Abrir los regalos a medianoche o temprano en la manana de Navidad',
      'Asistir a la Misa de Gallo',
      'Disfrutar de un asado y actividades al aire libre el dia de Navidad en el calor del verano',
    ],
  },

  funFacts: {
    en: [
      'Vitel tone, a cold veal dish with tuna sauce, is so associated with Christmas in Argentina that stores stock it only during December.',
      'Argentines consume over 40 million pan dulces during the Christmas season.',
      'Christmas in Argentina often reaches 35C (95F) — families sometimes celebrate poolside or at the beach.',
      'The tradition of globos de luz (paper lanterns released at midnight) has been restricted in many cities due to fire hazards.',
      'Papa Noel (Father Christmas) is said to enter through the window rather than the chimney in Argentina, since most homes lack fireplaces.',
    ],
    fr: [
      'Le vitel tone est si associe a Noel en Argentine que les magasins ne le proposent qu\'en decembre.',
      'Les Argentins consomment plus de 40 millions de pan dulces pendant la saison de Noel.',
      'Noel en Argentine atteint souvent 35C — les familles celebrent parfois au bord de la piscine ou a la plage.',
      'La tradition des globos de luz a ete restreinte dans de nombreuses villes en raison des risques d\'incendie.',
      'Papa Noel est cense entrer par la fenetre plutot que par la cheminee en Argentine.',
    ],
    es: [
      'El vitel tone esta tan asociado con la Navidad en Argentina que las tiendas solo lo tienen en diciembre.',
      'Los argentinos consumen mas de 40 millones de pan dulces durante la temporada navidena.',
      'La Navidad en Argentina a menudo alcanza los 35C — las familias a veces celebran al lado de la pileta o en la playa.',
      'La tradicion de los globos de luz ha sido restringida en muchas ciudades por riesgo de incendio.',
      'Se dice que Papa Noel entra por la ventana en lugar de la chimenea en Argentina, ya que la mayoria de las casas no tienen chimenea.',
    ],
  },

  planningChecklist: {
    en: [
      'Order vitel tone and pan dulce early — popular brands sell out fast',
      'Stock up on sidra for the midnight toast',
      'Plan your Nochebuena menu and invite family early',
      'Buy fireworks legally from authorized sellers',
      'Prepare for hot weather — lightweight clothes and outdoor plans',
    ],
    fr: [
      'Commander du vitel tone et du pan dulce tot — les marques populaires s\'epuisent vite',
      'Se procurer de la sidra pour le toast de minuit',
      'Planifier le menu de Nochebuena et inviter la famille tot',
      'Acheter des feux d\'artifice legalement aupres de vendeurs autorises',
      'Se preparer pour la chaleur — vetements legers et activites en plein air',
    ],
    es: [
      'Encargar vitel tone y pan dulce temprano — las marcas populares se agotan rapido',
      'Comprar sidra para el brindis de medianoche',
      'Planificar el menu de Nochebuena e invitar a la familia con anticipacion',
      'Comprar pirotecnia legalmente en vendedores autorizados',
      'Prepararse para el calor — ropa liviana y planes al aire libre',
    ],
  },

  relatedHolidays: ['ar_new-years-day', 'ar_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Argentina — Countdown & Traditions',
      descriptionTemplate: 'Christmas {year} in Argentina on December 25. Summer Christmas traditions, vitel tone, pan dulce, and celebration guide.',
      keywords: ['Christmas Argentina', 'Navidad Argentina', 'Argentine Christmas traditions', 'vitel tone', 'pan dulce Argentina'],
    },
    fr: {
      titleTemplate: 'Noel {year} Argentine — Compte a rebours et traditions',
      descriptionTemplate: 'Noel {year} en Argentine le 25 decembre. Traditions de Noel en ete, vitel tone, pan dulce et guide.',
      keywords: ['Noel Argentine', 'Navidad Argentine', 'traditions Noel Argentine', 'vitel tone', 'pan dulce'],
    },
    es: {
      titleTemplate: 'Navidad {year} Argentina — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Navidad {year} en Argentina el 25 de diciembre. Tradiciones navidenas de verano, vitel tone, pan dulce y guia.',
      keywords: ['Navidad Argentina', 'Nochebuena Argentina', 'tradiciones navidenas argentinas', 'vitel tone', 'pan dulce'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Argentina?', fr: 'Quand est Noel {year} en Argentine ?', es: 'Cuando es Navidad {year} en Argentina?' },
      answer: {
        en: 'Christmas {year} in Argentina is on {date}. It is always December 25 and falls during summer in the Southern Hemisphere.',
        fr: 'Noel {year} en Argentine est le {date}. C\'est toujours le 25 decembre et cela tombe en ete dans l\'hemisphere sud.',
        es: 'La Navidad {year} en Argentina es el {date}. Siempre es el 25 de diciembre y cae en verano en el hemisferio sur.',
      },
    },
    {
      question: { en: 'What is vitel tone?', fr: 'Qu\'est-ce que le vitel tone ?', es: 'Que es el vitel tone?' },
      answer: {
        en: 'Vitel tone (vitello tonnato) is a traditional Argentine Christmas dish of Italian origin — cold sliced veal covered in a creamy tuna sauce. It is the quintessential starter for Nochebuena dinner and virtually synonymous with Christmas in Argentina.',
        fr: 'Le vitel tone (vitello tonnato) est un plat de Noel argentin d\'origine italienne — du veau froid tranche couvert d\'une sauce cremeuse au thon. C\'est l\'entree par excellence du diner de Nochebuena.',
        es: 'El vitel tone (vitello tonnato) es un plato navideno argentino de origen italiano — carne fria cortada en fetas cubierta con una salsa cremosa de atun. Es la entrada por excelencia de la cena de Nochebuena y practicamente sinonimo de Navidad en Argentina.',
      },
    },
    {
      question: { en: 'Is Christmas in Argentina celebrated in summer?', fr: 'Noel en Argentine est-il celebre en ete ?', es: 'La Navidad en Argentina se celebra en verano?' },
      answer: {
        en: 'Yes, Christmas in Argentina falls in the middle of summer with temperatures often reaching 30-35C (86-95F). Celebrations often include outdoor activities, pool parties, and trips to the beach in the days following December 25.',
        fr: 'Oui, Noel en Argentine tombe en plein ete avec des temperatures atteignant souvent 30-35C. Les celebrations incluent souvent des activites en plein air et des voyages a la plage.',
        es: 'Si, la Navidad en Argentina cae en pleno verano con temperaturas que a menudo alcanzan los 30-35C. Las celebraciones a menudo incluyen actividades al aire libre, pileta y viajes a la playa en los dias siguientes al 25 de diciembre.',
      },
    },
    {
      question: { en: 'What is Nochebuena in Argentina?', fr: 'Qu\'est-ce que la Nochebuena en Argentine ?', es: 'Que es la Nochebuena en Argentina?' },
      answer: {
        en: 'Nochebuena (Christmas Eve, December 24) is the main Christmas celebration in Argentina. Families gather for a late dinner starting around 10-11 PM, toast with sidra and share pan dulce at midnight, set off fireworks, and open gifts.',
        fr: 'La Nochebuena (veille de Noel, 24 decembre) est la celebration principale de Noel en Argentine. Les familles se reunissent pour un diner tardif vers 22-23h, trinquent avec de la sidra et partagent le pan dulce a minuit.',
        es: 'La Nochebuena (24 de diciembre) es la celebracion principal de Navidad en Argentina. Las familias se reunen para una cena tardia alrededor de las 22-23h, brindan con sidra y comparten pan dulce a medianoche, lanzan fuegos artificiales y abren los regalos.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const arHolidays: HolidayData[] = [
  newYearsDay,
  carnival,
  dayOfRemembrance,
  malvinasDay,
  mayRevolution,
  independenceDay,
  christmas,
];

export default arHolidays;
