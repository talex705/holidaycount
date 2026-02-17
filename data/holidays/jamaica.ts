/**
 * Jamaica holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getAshWednesday, nthWeekday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'jm_new-years-day',
  countryCode: 'jm',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'dia-de-ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Dia de Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the start of the calendar year in Jamaica. It is a public holiday celebrated with church services, family gatherings, parties, and fireworks across the island.",
    fr: "Le Jour de l'An, le 1er janvier, marque le debut de l'annee civile en Jamaique. C'est un jour ferie celebre avec des services religieux, des reunions familiales, des fetes et des feux d'artifice a travers l'ile.",
    es: "El Dia de Ano Nuevo, el 1 de enero, marca el inicio del ano calendario en Jamaica. Es un dia festivo celebrado con servicios religiosos, reuniones familiares, fiestas y fuegos artificiales en toda la isla.",
  },

  history: {
    en: "New Year's Day has been celebrated in Jamaica since colonial times, blending British traditions with African and Caribbean customs. The holiday reflects Jamaica's rich cultural diversity, with celebrations incorporating elements from the island's various heritage traditions.\n\nHistorically, Jamaicans have marked the new year with Watch Night church services on December 31, a tradition rooted in the Emancipation era when enslaved people gathered in churches to pray for freedom. After midnight, the celebrations shift to joyful gatherings with music, food, and dancing.\n\nToday, New Year's Day remains one of the most widely observed holidays on the island, with communities coming together to welcome the year with hope, music, and the vibrant spirit that defines Jamaican culture.",
    fr: "Le Jour de l'An est celebre en Jamaique depuis l'epoque coloniale, melant les traditions britanniques aux coutumes africaines et caribeennes. Cette fete reflete la riche diversite culturelle de la Jamaique, avec des celebrations incorporant des elements des differentes traditions patrimoniales de l'ile.\n\nHistoriquement, les Jamaicains ont marque la nouvelle annee avec des services religieux de la Nuit de la Veille le 31 decembre, une tradition enracinee dans l'ere de l'Emancipation, lorsque les personnes asservies se rassemblaient dans les eglises pour prier pour la liberte. Apres minuit, les celebrations se transforment en rassemblements joyeux avec de la musique, de la nourriture et de la danse.\n\nAujourd'hui, le Jour de l'An reste l'un des jours feries les plus largement observes sur l'ile, les communautes se reunissant pour accueillir l'annee avec espoir, musique et l'esprit vibrant qui definit la culture jamaicaine.",
    es: "El Dia de Ano Nuevo se ha celebrado en Jamaica desde la epoca colonial, mezclando tradiciones britanicas con costumbres africanas y caribenas. La festividad refleja la rica diversidad cultural de Jamaica, con celebraciones que incorporan elementos de las diversas tradiciones patrimoniales de la isla.\n\nHistoricamente, los jamaicanos han marcado el ano nuevo con servicios religiosos de Noche de Vigilia el 31 de diciembre, una tradicion arraigada en la era de la Emancipacion, cuando las personas esclavizadas se reunian en las iglesias para rezar por la libertad. Despues de la medianoche, las celebraciones se convierten en reuniones alegres con musica, comida y baile.\n\nHoy en dia, el Dia de Ano Nuevo sigue siendo uno de los dias festivos mas ampliamente observados en la isla, con comunidades reuniendose para dar la bienvenida al ano con esperanza, musica y el espiritu vibrante que define la cultura jamaicana.",
  },

  traditions: {
    en: [
      'Attending Watch Night church services on New Year\'s Eve',
      'Setting off fireworks and firecrackers at midnight',
      'Preparing traditional Jamaican dishes like curry goat and rice and peas',
      'Playing reggae and dancehall music at house parties and street dances',
      'Visiting family and friends on New Year\'s Day',
      'Cleaning the house before midnight to start the year fresh',
      'Wearing new clothes on New Year\'s Day for good luck',
    ],
    fr: [
      'Assister aux services religieux de la Nuit de la Veille le soir du Nouvel An',
      'Tirer des feux d\'artifice et des petards a minuit',
      'Preparer des plats jamaicains traditionnels comme le curry de chevre et le riz aux haricots',
      'Jouer de la musique reggae et dancehall lors de fetes privees et de danses de rue',
      'Rendre visite a la famille et aux amis le jour de l\'An',
      'Nettoyer la maison avant minuit pour commencer l\'annee du bon pied',
      'Porter de nouveaux vetements le jour de l\'An pour la bonne chance',
    ],
    es: [
      'Asistir a los servicios religiosos de Noche de Vigilia en la vispera de Ano Nuevo',
      'Lanzar fuegos artificiales y petardos a medianoche',
      'Preparar platos jamaicanos tradicionales como curry de cabra y arroz con frijoles',
      'Tocar musica reggae y dancehall en fiestas caseras y bailes callejeros',
      'Visitar a familiares y amigos el dia de Ano Nuevo',
      'Limpiar la casa antes de medianoche para empezar el ano con buen pie',
      'Estrenar ropa el dia de Ano Nuevo para la buena suerte',
    ],
  },

  funFacts: {
    en: [
      'Watch Night services in Jamaica date back to 1838 when enslaved people gathered in churches awaiting the stroke of midnight that would bring full emancipation.',
      'Many Jamaicans believe that whatever you do on New Year\'s Day sets the tone for the rest of the year.',
      'Fireworks displays at Kingston Waterfront are among the most popular New Year\'s Eve events on the island.',
      'Traditional Jamaican New Year\'s food includes mannish water (goat head soup), believed to bring strength for the coming year.',
      'Some Jamaicans follow the tradition of opening all doors and windows at midnight to let the old year out and the new year in.',
    ],
    fr: [
      'Les services de la Nuit de la Veille en Jamaique remontent a 1838, lorsque les personnes asservies se reunissaient dans les eglises en attendant le coup de minuit qui apporterait l\'emancipation complete.',
      'De nombreux Jamaicains croient que tout ce que vous faites le jour de l\'An donne le ton pour le reste de l\'annee.',
      'Les feux d\'artifice au bord de l\'eau de Kingston sont parmi les evenements du Nouvel An les plus populaires de l\'ile.',
      'La nourriture traditionnelle jamaicaine du Nouvel An comprend le mannish water (soupe de tete de chevre), cense apporter de la force pour l\'annee a venir.',
      'Certains Jamaicains suivent la tradition d\'ouvrir toutes les portes et fenetres a minuit pour laisser sortir l\'ancienne annee et entrer la nouvelle.',
    ],
    es: [
      'Los servicios de Noche de Vigilia en Jamaica se remontan a 1838, cuando las personas esclavizadas se reunian en las iglesias esperando la medianoche que traeria la emancipacion total.',
      'Muchos jamaicanos creen que lo que hagas el dia de Ano Nuevo marca el tono para el resto del ano.',
      'Los espectaculos de fuegos artificiales en el paseo maritimo de Kingston estan entre los eventos de Nochevieja mas populares de la isla.',
      'La comida tradicional jamaicana de Ano Nuevo incluye mannish water (sopa de cabeza de cabra), que se cree trae fuerza para el ano venidero.',
      'Algunos jamaicanos siguen la tradicion de abrir todas las puertas y ventanas a medianoche para dejar salir el ano viejo y dejar entrar el nuevo.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan your New Year\'s Eve Watch Night church service or party',
      'Stock up on traditional foods like curry goat, rice and peas, and sorrel drink',
      'Buy fireworks and sparklers from licensed vendors',
      'Arrange transportation if attending Kingston Waterfront celebrations',
      'Clean and prepare your home before December 31 for a fresh start',
    ],
    fr: [
      'Planifier votre service religieux ou fete de la Nuit de la Veille du Nouvel An',
      'Faire le plein de nourriture traditionnelle comme le curry de chevre, le riz aux haricots et la boisson au bissap',
      'Acheter des feux d\'artifice et des cierges magiques chez des vendeurs autorises',
      'Organiser le transport si vous assistez aux celebrations du bord de l\'eau de Kingston',
      'Nettoyer et preparer votre maison avant le 31 decembre pour un nouveau depart',
    ],
    es: [
      'Planificar su servicio religioso de Noche de Vigilia o fiesta de Nochevieja',
      'Abastecerse de comidas tradicionales como curry de cabra, arroz con frijoles y bebida de jamaica',
      'Comprar fuegos artificiales y bengalas de vendedores autorizados',
      'Organizar transporte si asiste a las celebraciones del paseo maritimo de Kingston',
      'Limpiar y preparar su hogar antes del 31 de diciembre para un nuevo comienzo',
    ],
  },

  relatedHolidays: ['jm_christmas'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Jamaica — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Jamaica? Live countdown to January 1, public holiday info, and celebration guide.",
      keywords: ["New Year's Day Jamaica", 'Jamaica public holiday January', 'Jamaica New Year', "New Year's Day countdown Jamaica", 'Jamaican New Year traditions'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Jamaique — Compte a rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} en Jamaique ? Compte a rebours en direct jusqu'au 1er janvier, informations sur les jours feries et guide de celebration.",
      keywords: ["Jour de l'An Jamaique", 'jour ferie Jamaique janvier', 'Nouvel An Jamaique', "compte a rebours Jour de l'An Jamaique", 'traditions Nouvel An jamaicaines'],
    },
    es: {
      titleTemplate: 'Dia de Ano Nuevo {year} Jamaica — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia de Ano Nuevo {year} en Jamaica? Cuenta regresiva en vivo hasta el 1 de enero, informacion de dias festivos y guia de celebracion.',
      keywords: ['Dia de Ano Nuevo Jamaica', 'dia festivo Jamaica enero', 'Ano Nuevo Jamaica', 'cuenta regresiva Ano Nuevo Jamaica', 'tradiciones Ano Nuevo jamaicanas'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Jamaica?", fr: "Quand est le Jour de l'An {year} en Jamaique ?", es: 'Cuando es el Dia de Ano Nuevo {year} en Jamaica?' },
      answer: {
        en: "New Year's Day {year} in Jamaica is on {date}, a {dayOfWeek}. It is always January 1 and is a public holiday across the island.",
        fr: "Le Jour de l'An {year} en Jamaique est le {date}, un {dayOfWeek}. C'est toujours le 1er janvier et c'est un jour ferie dans toute l'ile.",
        es: 'El Dia de Ano Nuevo {year} en Jamaica es el {date}, un {dayOfWeek}. Siempre es el 1 de enero y es un dia festivo en toda la isla.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Jamaica?", fr: "Le Jour de l'An est-il un jour ferie en Jamaique ?", es: 'Es el Dia de Ano Nuevo un dia festivo en Jamaica?' },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in Jamaica. Banks, government offices, and most businesses are closed.",
        fr: "Oui, le Jour de l'An est un jour ferie officiel en Jamaique. Les banques, les bureaux gouvernementaux et la plupart des entreprises sont fermes.",
        es: 'Si, el Dia de Ano Nuevo es un dia festivo oficial en Jamaica. Los bancos, las oficinas gubernamentales y la mayoria de los negocios estan cerrados.',
      },
    },
    {
      question: { en: 'What are Watch Night services in Jamaica?', fr: 'Que sont les services de la Nuit de la Veille en Jamaique ?', es: 'Que son los servicios de Noche de Vigilia en Jamaica?' },
      answer: {
        en: 'Watch Night services are church gatherings held on New Year\'s Eve, a tradition dating back to 1838 when enslaved Jamaicans awaited the midnight hour that would bring full emancipation. Today, congregations gather to give thanks and pray for the coming year.',
        fr: 'Les services de la Nuit de la Veille sont des rassemblements religieux organises le soir du Nouvel An, une tradition remontant a 1838 lorsque les Jamaicains asservis attendaient l\'heure de minuit qui apporterait l\'emancipation complete. Aujourd\'hui, les congregations se reunissent pour rendre grace et prier pour l\'annee a venir.',
        es: 'Los servicios de Noche de Vigilia son reuniones religiosas celebradas en la vispera de Ano Nuevo, una tradicion que se remonta a 1838, cuando los jamaicanos esclavizados esperaban la medianoche que traeria la emancipacion total. Hoy, las congregaciones se reunen para dar gracias y orar por el ano venidero.',
      },
    },
    {
      question: { en: 'What food is traditional for New Year\'s in Jamaica?', fr: 'Quelle nourriture est traditionnelle pour le Nouvel An en Jamaique ?', es: 'Que comida es tradicional para el Ano Nuevo en Jamaica?' },
      answer: {
        en: 'Traditional Jamaican New Year\'s food includes curry goat, rice and peas, mannish water (goat head soup), jerk chicken, and sorrel drink. These dishes are central to the festive celebrations.',
        fr: 'La nourriture traditionnelle jamaicaine du Nouvel An comprend le curry de chevre, le riz aux haricots, le mannish water (soupe de tete de chevre), le poulet jerk et la boisson au bissap. Ces plats sont au coeur des celebrations festives.',
        es: 'La comida tradicional jamaicana de Ano Nuevo incluye curry de cabra, arroz con frijoles, mannish water (sopa de cabeza de cabra), pollo jerk y bebida de jamaica. Estos platos son fundamentales en las celebraciones festivas.',
      },
    },
  ],

  colorTheme: 'gold-black',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Ash Wednesday — 46 days before Easter
// ---------------------------------------------------------------------------

const ashWednesday: HolidayData = {
  id: 'jm_ash-wednesday',
  countryCode: 'jm',
  slugs: { en: 'ash-wednesday', fr: 'mercredi-des-cendres', es: 'miercoles-de-ceniza' },
  names: { en: 'Ash Wednesday', fr: 'Mercredi des Cendres', es: 'Miercoles de Ceniza' },

  dateType: 'calculated',
  calculateDate: getAshWednesday,

  descriptions: {
    en: 'Ash Wednesday marks the beginning of Lent in Jamaica, falling 46 days before Easter Sunday. It follows the vibrant Carnival season and is observed with church services, fasting, and the marking of ashes on foreheads.',
    fr: "Le Mercredi des Cendres marque le debut du Careme en Jamaique, tombant 46 jours avant le dimanche de Paques. Il suit la vibrante saison du Carnaval et est observe avec des services religieux, le jeune et le marquage de cendres sur les fronts.",
    es: 'El Miercoles de Ceniza marca el inicio de la Cuaresma en Jamaica, cayendo 46 dias antes del Domingo de Pascua. Sigue a la vibrante temporada de Carnaval y se observa con servicios religiosos, ayuno y la imposicion de cenizas en la frente.',
  },

  history: {
    en: "Ash Wednesday has deep roots in Jamaica's strong Christian tradition, particularly among the island's Catholic and Anglican communities. The observance marks a dramatic shift from the exuberant celebrations of Carnival season to the solemn period of Lenten reflection.\n\nThe tradition of marking ashes on the forehead comes from the ancient Christian practice of using ashes as a sign of repentance and mortality. In Jamaica, the ashes are typically made from the burned palm fronds of the previous year's Palm Sunday celebrations.\n\nOver the centuries, Ash Wednesday in Jamaica has evolved to blend European Christian traditions with Caribbean cultural practices. The contrast between the vibrant energy of Carnival and the quiet solemnity of Ash Wednesday is one of the most striking cultural transitions in the Jamaican calendar.",
    fr: "Le Mercredi des Cendres a des racines profondes dans la forte tradition chretienne de la Jamaique, particulierement parmi les communautes catholiques et anglicanes de l'ile. L'observance marque un changement dramatique des celebrations exuberantes de la saison du Carnaval a la periode solennelle de reflexion du Careme.\n\nLa tradition de marquer les cendres sur le front vient de l'ancienne pratique chretienne d'utiliser les cendres comme signe de repentance et de mortalite. En Jamaique, les cendres sont generalement faites a partir des feuilles de palmier brulees des celebrations du Dimanche des Rameaux de l'annee precedente.\n\nAu fil des siecles, le Mercredi des Cendres en Jamaique a evolue pour melanger les traditions chretiennes europeennes avec les pratiques culturelles caribeennes. Le contraste entre l'energie vibrante du Carnaval et la tranquillite solennelle du Mercredi des Cendres est l'une des transitions culturelles les plus frappantes du calendrier jamaicain.",
    es: "El Miercoles de Ceniza tiene raices profundas en la fuerte tradicion cristiana de Jamaica, particularmente entre las comunidades catolicas y anglicanas de la isla. La observancia marca un cambio dramatico de las exuberantes celebraciones de la temporada de Carnaval al solemne periodo de reflexion cuaresmal.\n\nLa tradicion de marcar cenizas en la frente proviene de la antigua practica cristiana de usar cenizas como signo de arrepentimiento y mortalidad. En Jamaica, las cenizas se hacen tipicamente con las hojas de palma quemadas de las celebraciones del Domingo de Ramos del ano anterior.\n\nA lo largo de los siglos, el Miercoles de Ceniza en Jamaica ha evolucionado para mezclar las tradiciones cristianas europeas con las practicas culturales caribenas. El contraste entre la energia vibrante del Carnaval y la tranquila solemnidad del Miercoles de Ceniza es una de las transiciones culturales mas llamativas del calendario jamaicano.",
  },

  traditions: {
    en: [
      'Attending church services to receive ashes on the forehead in the sign of the cross',
      'Fasting and abstaining from meat throughout the day',
      'Beginning 40 days of Lenten sacrifice and reflection',
      'Giving up a personal indulgence for the Lenten season',
      'Participating in special prayer services and devotionals',
      'Reflecting on the end of Carnival season and the transition to solemnity',
      'Preparing fish-based meals as an alternative to meat',
    ],
    fr: [
      'Assister aux services religieux pour recevoir les cendres sur le front en signe de croix',
      'Jeuner et s\'abstenir de viande tout au long de la journee',
      'Commencer 40 jours de sacrifice et de reflexion du Careme',
      'Renoncer a un plaisir personnel pour la saison du Careme',
      'Participer a des services de priere speciaux et des devotions',
      'Reflechir a la fin de la saison du Carnaval et a la transition vers la solennite',
      'Preparer des repas a base de poisson comme alternative a la viande',
    ],
    es: [
      'Asistir a servicios religiosos para recibir cenizas en la frente en forma de cruz',
      'Ayunar y abstenerse de carne durante todo el dia',
      'Comenzar 40 dias de sacrificio y reflexion cuaresmal',
      'Renunciar a un placer personal durante la temporada de Cuaresma',
      'Participar en servicios especiales de oracion y devocionales',
      'Reflexionar sobre el fin de la temporada de Carnaval y la transicion a la solemnidad',
      'Preparar comidas a base de pescado como alternativa a la carne',
    ],
  },

  funFacts: {
    en: [
      'Ash Wednesday immediately follows Carnival Tuesday, creating one of the most dramatic cultural contrasts in the Caribbean calendar.',
      'The ashes used on Ash Wednesday are traditionally made by burning the blessed palm fronds from the previous Palm Sunday.',
      'Jamaica has a strong Christian tradition, with over 60% of the population identifying as Christian, making Ash Wednesday widely observed.',
      'Some Jamaicans refer to the Lenten season as "the quiet time" in contrast to the energy of Carnival.',
      'Fish sales in Jamaica spike dramatically on Ash Wednesday as many observe the tradition of abstaining from meat.',
    ],
    fr: [
      'Le Mercredi des Cendres suit immediatement le Mardi du Carnaval, creant l\'un des contrastes culturels les plus dramatiques du calendrier caribeen.',
      'Les cendres utilisees le Mercredi des Cendres sont traditionnellement faites en brulant les feuilles de palmier benies du Dimanche des Rameaux precedent.',
      'La Jamaique a une forte tradition chretienne, avec plus de 60% de la population s\'identifiant comme chretienne, rendant le Mercredi des Cendres largement observe.',
      'Certains Jamaicains appellent la saison du Careme "le temps calme" par contraste avec l\'energie du Carnaval.',
      'Les ventes de poisson en Jamaique augmentent considerablement le Mercredi des Cendres car beaucoup observent la tradition de s\'abstenir de viande.',
    ],
    es: [
      'El Miercoles de Ceniza sigue inmediatamente al Martes de Carnaval, creando uno de los contrastes culturales mas dramaticos del calendario caribeno.',
      'Las cenizas utilizadas el Miercoles de Ceniza se hacen tradicionalmente quemando las hojas de palma bendecidas del Domingo de Ramos anterior.',
      'Jamaica tiene una fuerte tradicion cristiana, con mas del 60% de la poblacion identificandose como cristiana, haciendo que el Miercoles de Ceniza sea ampliamente observado.',
      'Algunos jamaicanos se refieren a la temporada de Cuaresma como "el tiempo tranquilo" en contraste con la energia del Carnaval.',
      'Las ventas de pescado en Jamaica aumentan dramaticamente el Miercoles de Ceniza ya que muchos observan la tradicion de abstenerse de carne.',
    ],
  },

  planningChecklist: {
    en: [
      'Find your local church service times for Ash Wednesday',
      'Plan meat-free meals for the day and the Lenten season',
      'Decide what personal indulgence to give up for Lent',
      'Stock up on fish and seafood for Lenten cooking',
      'Reflect on the transition from Carnival celebrations to the Lenten period',
    ],
    fr: [
      'Trouver les horaires des services religieux de votre eglise locale pour le Mercredi des Cendres',
      'Planifier des repas sans viande pour la journee et la saison du Careme',
      'Decider quel plaisir personnel abandonner pour le Careme',
      'Faire le plein de poisson et de fruits de mer pour la cuisine du Careme',
      'Reflechir a la transition des celebrations du Carnaval a la periode du Careme',
    ],
    es: [
      'Encontrar los horarios de los servicios religiosos de su iglesia local para el Miercoles de Ceniza',
      'Planificar comidas sin carne para el dia y la temporada de Cuaresma',
      'Decidir a que placer personal renunciar durante la Cuaresma',
      'Abastecerse de pescado y mariscos para la cocina cuaresmal',
      'Reflexionar sobre la transicion de las celebraciones del Carnaval al periodo cuaresmal',
    ],
  },

  relatedHolidays: ['jm_christmas'],

  seo: {
    en: {
      titleTemplate: 'Ash Wednesday {year} Jamaica — Countdown & Guide',
      descriptionTemplate: 'When is Ash Wednesday {year} in Jamaica? Live countdown, Lenten traditions, and celebration guide.',
      keywords: ['Ash Wednesday Jamaica', 'Lent Jamaica', 'Ash Wednesday date', 'Jamaica Carnival Lent', 'when is Ash Wednesday Jamaica'],
    },
    fr: {
      titleTemplate: 'Mercredi des Cendres {year} Jamaique — Compte a rebours et guide',
      descriptionTemplate: 'Quand est le Mercredi des Cendres {year} en Jamaique ? Compte a rebours en direct, traditions du Careme et guide de celebration.',
      keywords: ['Mercredi des Cendres Jamaique', 'Careme Jamaique', 'date Mercredi des Cendres', 'Carnaval Careme Jamaique', 'quand est le Mercredi des Cendres Jamaique'],
    },
    es: {
      titleTemplate: 'Miercoles de Ceniza {year} Jamaica — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Miercoles de Ceniza {year} en Jamaica? Cuenta regresiva en vivo, tradiciones cuaresmales y guia de celebracion.',
      keywords: ['Miercoles de Ceniza Jamaica', 'Cuaresma Jamaica', 'fecha Miercoles de Ceniza', 'Carnaval Cuaresma Jamaica', 'cuando es el Miercoles de Ceniza Jamaica'],
    },
  },

  faq: [
    {
      question: { en: 'When is Ash Wednesday {year} in Jamaica?', fr: 'Quand est le Mercredi des Cendres {year} en Jamaique ?', es: 'Cuando es el Miercoles de Ceniza {year} en Jamaica?' },
      answer: {
        en: 'Ash Wednesday {year} in Jamaica falls on {date}, a {dayOfWeek}. It is 46 days before Easter Sunday and its date changes each year.',
        fr: 'Le Mercredi des Cendres {year} en Jamaique tombe le {date}, un {dayOfWeek}. Il est 46 jours avant le dimanche de Paques et sa date change chaque annee.',
        es: 'El Miercoles de Ceniza {year} en Jamaica cae el {date}, un {dayOfWeek}. Es 46 dias antes del Domingo de Pascua y su fecha cambia cada ano.',
      },
    },
    {
      question: { en: 'Is Ash Wednesday a public holiday in Jamaica?', fr: 'Le Mercredi des Cendres est-il un jour ferie en Jamaique ?', es: 'Es el Miercoles de Ceniza un dia festivo en Jamaica?' },
      answer: {
        en: 'Ash Wednesday is a widely observed religious day in Jamaica, though it is not an official public holiday. Many businesses remain open, but churches hold special services throughout the day.',
        fr: "Le Mercredi des Cendres est un jour religieux largement observe en Jamaique, bien qu'il ne soit pas un jour ferie officiel. De nombreuses entreprises restent ouvertes, mais les eglises tiennent des services speciaux tout au long de la journee.",
        es: 'El Miercoles de Ceniza es un dia religioso ampliamente observado en Jamaica, aunque no es un dia festivo oficial. Muchos negocios permanecen abiertos, pero las iglesias celebran servicios especiales durante todo el dia.',
      },
    },
    {
      question: { en: 'What is the connection between Carnival and Ash Wednesday?', fr: 'Quel est le lien entre le Carnaval et le Mercredi des Cendres ?', es: 'Cual es la conexion entre el Carnaval y el Miercoles de Ceniza?' },
      answer: {
        en: 'Carnival season ends on Shrove Tuesday (Mardi Gras), and Ash Wednesday begins the very next day. The transition from festive revelry to solemn reflection is one of the most dramatic cultural shifts in the Caribbean calendar.',
        fr: "La saison du Carnaval se termine le Mardi Gras, et le Mercredi des Cendres commence le lendemain. La transition des rejouissances festives a la reflexion solennelle est l'un des changements culturels les plus dramatiques du calendrier caribeen.",
        es: 'La temporada de Carnaval termina el Martes de Carnaval (Mardi Gras), y el Miercoles de Ceniza comienza al dia siguiente. La transicion de las festividades alegres a la reflexion solemne es uno de los cambios culturales mas dramaticos del calendario caribeno.',
      },
    },
    {
      question: { en: 'What do Jamaicans eat on Ash Wednesday?', fr: 'Que mangent les Jamaicains le Mercredi des Cendres ?', es: 'Que comen los jamaicanos el Miercoles de Ceniza?' },
      answer: {
        en: 'Many Jamaicans abstain from meat on Ash Wednesday, opting for fish and seafood dishes instead. Popular choices include steamed fish, escovitch fish, and fried fish served with bammy and festival.',
        fr: "De nombreux Jamaicains s'abstiennent de manger de la viande le Mercredi des Cendres, optant pour des plats de poisson et de fruits de mer a la place. Les choix populaires incluent le poisson a la vapeur, le poisson escovitch et le poisson frit servi avec du bammy et du festival.",
        es: 'Muchos jamaicanos se abstienen de comer carne el Miercoles de Ceniza, optando por platos de pescado y mariscos en su lugar. Las opciones populares incluyen pescado al vapor, pescado escovitch y pescado frito servido con bammy y festival.',
      },
    },
  ],

  colorTheme: 'purple-gray',
  icon: '\u271d\ufe0f',
};

// ---------------------------------------------------------------------------
// Emancipation Day — August 1
// ---------------------------------------------------------------------------

const emancipationDay: HolidayData = {
  id: 'jm_emancipation-day',
  countryCode: 'jm',
  slugs: { en: 'emancipation-day', fr: 'jour-de-lemancipation', es: 'dia-de-la-emancipacion' },
  names: { en: 'Emancipation Day', fr: "Jour de l'Emancipation", es: 'Dia de la Emancipacion' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 1,

  descriptions: {
    en: 'Emancipation Day on August 1 celebrates the abolition of slavery in Jamaica in 1838. It is a national public holiday marked by cultural events, music, dancing, and ceremonies honoring the resilience of the Jamaican people and their African heritage.',
    fr: "Le Jour de l'Emancipation, le 1er aout, celebre l'abolition de l'esclavage en Jamaique en 1838. C'est un jour ferie national marque par des evenements culturels, de la musique, de la danse et des ceremonies honorant la resilience du peuple jamaicain et son heritage africain.",
    es: 'El Dia de la Emancipacion, el 1 de agosto, celebra la abolicion de la esclavitud en Jamaica en 1838. Es un dia festivo nacional marcado por eventos culturales, musica, baile y ceremonias que honran la resiliencia del pueblo jamaicano y su herencia africana.',
  },

  history: {
    en: "On August 1, 1834, the Slavery Abolition Act of 1833 took effect throughout the British Empire, freeing all enslaved people. However, formerly enslaved Jamaicans were then subjected to a four-year apprenticeship system that kept them bound to their former owners until full freedom came on August 1, 1838.\n\nFor over a century, the significance of Emancipation Day faded in public consciousness. The holiday was not officially observed for many decades until Jamaica revived it as a public holiday in 1997, recognizing the importance of commemorating the end of slavery and honoring the ancestors who fought for freedom.\n\nToday, Emancipation Day is celebrated with vigor across Jamaica. The Emancipation Vigil at the Seville Heritage Park in St. Ann begins on the evening of July 31, with drumming, dancing, and cultural performances leading up to the symbolic lighting of the Emancipation flame at midnight. The celebrations continue on August 1 with events across the island that celebrate African heritage, resilience, and Jamaican identity.",
    fr: "Le 1er aout 1834, la loi d'abolition de l'esclavage de 1833 est entree en vigueur dans tout l'Empire britannique, liberant toutes les personnes asservies. Cependant, les Jamaicains anciennement asservis ont ensuite ete soumis a un systeme d'apprentissage de quatre ans qui les maintenait lies a leurs anciens proprietaires jusqu'a ce que la liberte complete arrive le 1er aout 1838.\n\nPendant plus d'un siecle, l'importance du Jour de l'Emancipation s'est estompee dans la conscience publique. La fete n'a pas ete officiellement observee pendant de nombreuses decennies jusqu'a ce que la Jamaique la retablisse comme jour ferie en 1997, reconnaissant l'importance de commemorer la fin de l'esclavage et d'honorer les ancetres qui se sont battus pour la liberte.\n\nAujourd'hui, le Jour de l'Emancipation est celebre avec vigueur a travers la Jamaique. La veille de l'Emancipation au parc patrimonial de Seville a St. Ann commence le soir du 31 juillet, avec des percussions, des danses et des spectacles culturels menant a l'allumage symbolique de la flamme de l'Emancipation a minuit. Les celebrations se poursuivent le 1er aout avec des evenements a travers l'ile qui celebrent l'heritage africain, la resilience et l'identite jamaicaine.",
    es: "El 1 de agosto de 1834, la Ley de Abolicion de la Esclavitud de 1833 entro en vigor en todo el Imperio Britanico, liberando a todas las personas esclavizadas. Sin embargo, los jamaicanos anteriormente esclavizados fueron sometidos a un sistema de aprendizaje de cuatro anos que los mantenia atados a sus antiguos duenos hasta que llego la libertad total el 1 de agosto de 1838.\n\nDurante mas de un siglo, la importancia del Dia de la Emancipacion se desvanecio en la conciencia publica. La festividad no se observo oficialmente durante muchas decadas hasta que Jamaica la revivio como dia festivo en 1997, reconociendo la importancia de conmemorar el fin de la esclavitud y honrar a los ancestros que lucharon por la libertad.\n\nHoy, el Dia de la Emancipacion se celebra con vigor en toda Jamaica. La Vigilia de Emancipacion en el Parque Patrimonial de Seville en St. Ann comienza la noche del 31 de julio, con tambores, bailes y presentaciones culturales que llevan al encendido simbolico de la llama de la Emancipacion a medianoche. Las celebraciones continuan el 1 de agosto con eventos en toda la isla que celebran la herencia africana, la resiliencia y la identidad jamaicana.",
  },

  traditions: {
    en: [
      'Attending the Emancipation Vigil at Seville Heritage Park in St. Ann',
      'Lighting the Emancipation flame at midnight on July 31',
      'Performing traditional African drumming and dancing',
      'Wearing African-inspired clothing and head wraps',
      'Participating in cultural performances and storytelling',
      'Visiting historical sites connected to the slavery and emancipation story',
      'Enjoying traditional Jamaican music including reggae, mento, and kumina',
    ],
    fr: [
      'Assister a la veille de l\'Emancipation au parc patrimonial de Seville a St. Ann',
      'Allumer la flamme de l\'Emancipation a minuit le 31 juillet',
      'Executer des percussions et danses traditionnelles africaines',
      'Porter des vetements et des foulards d\'inspiration africaine',
      'Participer a des spectacles culturels et des recits',
      'Visiter des sites historiques lies a l\'histoire de l\'esclavage et de l\'emancipation',
      'Profiter de la musique jamaicaine traditionnelle incluant le reggae, le mento et le kumina',
    ],
    es: [
      'Asistir a la Vigilia de Emancipacion en el Parque Patrimonial de Seville en St. Ann',
      'Encender la llama de la Emancipacion a medianoche el 31 de julio',
      'Realizar percusion y danzas tradicionales africanas',
      'Usar ropa y panuelos de inspiracion africana',
      'Participar en presentaciones culturales y narracion de historias',
      'Visitar sitios historicos conectados con la historia de la esclavitud y la emancipacion',
      'Disfrutar de la musica jamaicana tradicional incluyendo reggae, mento y kumina',
    ],
  },

  funFacts: {
    en: [
      'Jamaica was one of the largest slave-holding colonies in the British Empire, with over 300,000 enslaved Africans at the time of abolition.',
      'The Emancipation Vigil ceremony at Seville Heritage Park features the symbolic ringing of the Emancipation bell at midnight.',
      'Emancipation Day was reinstated as a public holiday in Jamaica in 1997 after decades without official observance.',
      'The famous Jamaican national hero Sam Sharpe led a slave rebellion in 1831-1832 that accelerated the abolition movement.',
      'August 1 is also celebrated as Emancipation Day in other Caribbean nations including Trinidad and Tobago and Barbados.',
    ],
    fr: [
      'La Jamaique etait l\'une des plus grandes colonies esclavagistes de l\'Empire britannique, avec plus de 300 000 Africains asservis au moment de l\'abolition.',
      'La ceremonie de la veille de l\'Emancipation au parc patrimonial de Seville comporte le tintement symbolique de la cloche de l\'Emancipation a minuit.',
      'Le Jour de l\'Emancipation a ete retabli comme jour ferie en Jamaique en 1997 apres des decennies sans observance officielle.',
      'Le celebre heros national jamaicain Sam Sharpe a mene une rebellion d\'esclaves en 1831-1832 qui a accelere le mouvement abolitionniste.',
      'Le 1er aout est egalement celebre comme Jour de l\'Emancipation dans d\'autres nations caribeennes, dont Trinidad et Tobago et la Barbade.',
    ],
    es: [
      'Jamaica fue una de las colonias esclavistas mas grandes del Imperio Britanico, con mas de 300.000 africanos esclavizados en el momento de la abolicion.',
      'La ceremonia de la Vigilia de Emancipacion en el Parque Patrimonial de Seville presenta el repique simbolico de la campana de la Emancipacion a medianoche.',
      'El Dia de la Emancipacion fue reinstaurado como dia festivo en Jamaica en 1997 despues de decadas sin observancia oficial.',
      'El famoso heroe nacional jamaicano Sam Sharpe lidero una rebelion de esclavos en 1831-1832 que acelero el movimiento abolicionista.',
      'El 1 de agosto tambien se celebra como Dia de la Emancipacion en otras naciones caribenas, incluyendo Trinidad y Tobago y Barbados.',
    ],
  },

  planningChecklist: {
    en: [
      'Check schedules for the Emancipation Vigil at Seville Heritage Park',
      'Plan to attend cultural events and performances in your parish',
      'Prepare African-inspired outfits or traditional Jamaican wear',
      'Visit historical sites such as the National Museum or former plantation estates',
      'Learn about Jamaica\'s national heroes and their role in the emancipation movement',
    ],
    fr: [
      'Verifier les horaires de la veille de l\'Emancipation au parc patrimonial de Seville',
      'Planifier d\'assister aux evenements culturels et spectacles dans votre paroisse',
      'Preparer des tenues d\'inspiration africaine ou des vetements jamaicains traditionnels',
      'Visiter des sites historiques tels que le Musee national ou les anciennes plantations',
      'En apprendre davantage sur les heros nationaux de la Jamaique et leur role dans le mouvement d\'emancipation',
    ],
    es: [
      'Verificar los horarios de la Vigilia de Emancipacion en el Parque Patrimonial de Seville',
      'Planificar asistir a eventos culturales y presentaciones en su parroquia',
      'Preparar atuendos de inspiracion africana o vestimenta tradicional jamaicana',
      'Visitar sitios historicos como el Museo Nacional o las antiguas plantaciones',
      'Aprender sobre los heroes nacionales de Jamaica y su papel en el movimiento de emancipacion',
    ],
  },

  relatedHolidays: ['jm_independence-day', 'jm_national-heroes-day'],

  seo: {
    en: {
      titleTemplate: 'Emancipation Day {year} Jamaica — Countdown & History',
      descriptionTemplate: 'When is Emancipation Day {year} in Jamaica? Live countdown to August 1, history of abolition, and celebration guide.',
      keywords: ['Emancipation Day Jamaica', 'August 1 Jamaica', 'abolition of slavery Jamaica', 'Emancipation Day countdown', 'Jamaica freedom day'],
    },
    fr: {
      titleTemplate: "Jour de l'Emancipation {year} Jamaique — Compte a rebours et histoire",
      descriptionTemplate: "Quand est le Jour de l'Emancipation {year} en Jamaique ? Compte a rebours en direct jusqu'au 1er aout, histoire de l'abolition et guide de celebration.",
      keywords: ["Jour de l'Emancipation Jamaique", '1er aout Jamaique', "abolition de l'esclavage Jamaique", "compte a rebours Emancipation Jamaique", 'jour de la liberte Jamaique'],
    },
    es: {
      titleTemplate: 'Dia de la Emancipacion {year} Jamaica — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de la Emancipacion {year} en Jamaica? Cuenta regresiva en vivo hasta el 1 de agosto, historia de la abolicion y guia de celebracion.',
      keywords: ['Dia de la Emancipacion Jamaica', '1 de agosto Jamaica', 'abolicion de la esclavitud Jamaica', 'cuenta regresiva Emancipacion Jamaica', 'dia de la libertad Jamaica'],
    },
  },

  faq: [
    {
      question: { en: 'When is Emancipation Day {year} in Jamaica?', fr: "Quand est le Jour de l'Emancipation {year} en Jamaique ?", es: 'Cuando es el Dia de la Emancipacion {year} en Jamaica?' },
      answer: {
        en: 'Emancipation Day {year} in Jamaica is on {date}, a {dayOfWeek}. It is always August 1 and is a national public holiday.',
        fr: "Le Jour de l'Emancipation {year} en Jamaique est le {date}, un {dayOfWeek}. C'est toujours le 1er aout et c'est un jour ferie national.",
        es: 'El Dia de la Emancipacion {year} en Jamaica es el {date}, un {dayOfWeek}. Siempre es el 1 de agosto y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What does Emancipation Day celebrate?', fr: "Que celebre le Jour de l'Emancipation ?", es: 'Que celebra el Dia de la Emancipacion?' },
      answer: {
        en: 'Emancipation Day celebrates the abolition of slavery in the British Empire, which took full effect in Jamaica on August 1, 1838. It honors the resilience and cultural heritage of the Jamaican people and their African ancestors.',
        fr: "Le Jour de l'Emancipation celebre l'abolition de l'esclavage dans l'Empire britannique, qui a pris pleinement effet en Jamaique le 1er aout 1838. Il honore la resilience et le patrimoine culturel du peuple jamaicain et de ses ancetres africains.",
        es: 'El Dia de la Emancipacion celebra la abolicion de la esclavitud en el Imperio Britanico, que entro en pleno efecto en Jamaica el 1 de agosto de 1838. Honra la resiliencia y el patrimonio cultural del pueblo jamaicano y sus ancestros africanos.',
      },
    },
    {
      question: { en: 'What is the Emancipation Vigil?', fr: "Qu'est-ce que la veille de l'Emancipation ?", es: 'Que es la Vigilia de Emancipacion?' },
      answer: {
        en: 'The Emancipation Vigil is a ceremony held on the evening of July 31 at Seville Heritage Park in St. Ann. It features African drumming, dancing, and cultural performances, culminating in the lighting of the Emancipation flame at midnight to symbolize freedom.',
        fr: "La veille de l'Emancipation est une ceremonie tenue le soir du 31 juillet au parc patrimonial de Seville a St. Ann. Elle comprend des percussions africaines, des danses et des spectacles culturels, culminant avec l'allumage de la flamme de l'Emancipation a minuit pour symboliser la liberte.",
        es: 'La Vigilia de Emancipacion es una ceremonia celebrada la noche del 31 de julio en el Parque Patrimonial de Seville en St. Ann. Presenta percusion africana, danzas y presentaciones culturales, culminando con el encendido de la llama de la Emancipacion a medianoche para simbolizar la libertad.',
      },
    },
    {
      question: { en: 'Why was Emancipation Day reinstated in 1997?', fr: "Pourquoi le Jour de l'Emancipation a-t-il ete retabli en 1997 ?", es: 'Por que fue reinstaurado el Dia de la Emancipacion en 1997?' },
      answer: {
        en: 'Emancipation Day was reinstated as a public holiday in 1997 to ensure Jamaicans remember and honor their history. The government recognized the importance of commemorating the end of slavery and celebrating the cultural identity rooted in the emancipation struggle.',
        fr: "Le Jour de l'Emancipation a ete retabli comme jour ferie en 1997 pour s'assurer que les Jamaicains se souviennent et honorent leur histoire. Le gouvernement a reconnu l'importance de commemorer la fin de l'esclavage et de celebrer l'identite culturelle enracinee dans la lutte pour l'emancipation.",
        es: 'El Dia de la Emancipacion fue reinstaurado como dia festivo en 1997 para asegurar que los jamaicanos recuerden y honren su historia. El gobierno reconocio la importancia de conmemorar el fin de la esclavitud y celebrar la identidad cultural arraigada en la lucha por la emancipacion.',
      },
    },
  ],

  colorTheme: 'green-gold-black',
  icon: '\u270a',
};

// ---------------------------------------------------------------------------
// Independence Day — August 6
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'jm_independence-day',
  countryCode: 'jm',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Independance", es: 'Dia de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 6,

  descriptions: {
    en: "Independence Day on August 6 celebrates Jamaica's independence from the United Kingdom in 1962. It is the most patriotic day on the Jamaican calendar, marked by the Grand Gala, parades, flag raising ceremonies, and celebrations of national identity.",
    fr: "Le Jour de l'Independance, le 6 aout, celebre l'independance de la Jamaique du Royaume-Uni en 1962. C'est le jour le plus patriotique du calendrier jamaicain, marque par le Grand Gala, des defiles, des ceremonies de lever du drapeau et des celebrations de l'identite nationale.",
    es: "El Dia de la Independencia, el 6 de agosto, celebra la independencia de Jamaica del Reino Unido en 1962. Es el dia mas patriotico del calendario jamaicano, marcado por el Gran Gala, desfiles, ceremonias de izamiento de bandera y celebraciones de la identidad nacional.",
  },

  history: {
    en: "Jamaica gained its independence from the United Kingdom on August 6, 1962, after more than 300 years of British colonial rule. The movement toward independence gained momentum in the 1930s and 1940s, led by national heroes such as Norman Manley and Alexander Bustamante, who championed workers' rights and self-governance.\n\nA national referendum was held in 1961 in which Jamaicans voted to leave the West Indies Federation and pursue independence as a sovereign nation. The Jamaican Independence Act was passed by the British Parliament, and at midnight on August 5-6, 1962, the Union Jack was lowered and the black, green, and gold Jamaican flag was raised for the first time.\n\nThe first Independence Day celebration featured a grand ceremony at the National Stadium in Kingston, attended by Princess Margaret representing Queen Elizabeth II. Since then, the annual Grand Gala at the National Stadium has become the centerpiece of Independence Day celebrations, featuring cultural performances, speeches, military parades, and fireworks.",
    fr: "La Jamaique a obtenu son independance du Royaume-Uni le 6 aout 1962, apres plus de 300 ans de domination coloniale britannique. Le mouvement vers l'independance a pris de l'ampleur dans les annees 1930 et 1940, mene par des heros nationaux tels que Norman Manley et Alexander Bustamante, qui ont defendu les droits des travailleurs et l'autonomie gouvernementale.\n\nUn referendum national a ete organise en 1961, au cours duquel les Jamaicains ont vote pour quitter la Federation des Indes occidentales et poursuivre l'independance en tant que nation souveraine. La loi d'independance de la Jamaique a ete adoptee par le Parlement britannique, et a minuit le 5-6 aout 1962, l'Union Jack a ete abaisse et le drapeau jamaicain noir, vert et or a ete hisse pour la premiere fois.\n\nLa premiere celebration du Jour de l'Independance a presente une grande ceremonie au Stade national de Kingston, a laquelle a assiste la princesse Margaret representant la reine Elizabeth II. Depuis lors, le Grand Gala annuel au Stade national est devenu la piece maitresse des celebrations du Jour de l'Independance, avec des spectacles culturels, des discours, des defiles militaires et des feux d'artifice.",
    es: "Jamaica obtuvo su independencia del Reino Unido el 6 de agosto de 1962, despues de mas de 300 anos de dominio colonial britanico. El movimiento hacia la independencia cobro impulso en las decadas de 1930 y 1940, liderado por heroes nacionales como Norman Manley y Alexander Bustamante, quienes defendieron los derechos de los trabajadores y el autogobierno.\n\nSe celebro un referendum nacional en 1961 en el que los jamaicanos votaron para abandonar la Federacion de las Indias Occidentales y buscar la independencia como nacion soberana. La Ley de Independencia de Jamaica fue aprobada por el Parlamento Britanico, y a medianoche del 5 al 6 de agosto de 1962, la Union Jack fue arriada y la bandera jamaicana negra, verde y dorada fue izada por primera vez.\n\nLa primera celebracion del Dia de la Independencia presento una gran ceremonia en el Estadio Nacional de Kingston, a la que asistio la princesa Margarita en representacion de la reina Isabel II. Desde entonces, el Gran Gala anual en el Estadio Nacional se ha convertido en la pieza central de las celebraciones del Dia de la Independencia, con presentaciones culturales, discursos, desfiles militares y fuegos artificiales.",
  },

  traditions: {
    en: [
      'Attending the Grand Gala at the National Stadium in Kingston',
      'Raising the Jamaican flag at homes, businesses, and public buildings',
      'Watching parades and military displays',
      'Wearing the national colours — black, green, and gold',
      'Enjoying cultural performances including reggae, dancehall, and folk music',
      'Participating in community celebrations and street dances',
      'Watching fireworks displays across the island',
    ],
    fr: [
      'Assister au Grand Gala au Stade national de Kingston',
      'Hisser le drapeau jamaicain aux maisons, entreprises et batiments publics',
      'Regarder des defiles et des demonstrations militaires',
      'Porter les couleurs nationales — noir, vert et or',
      'Profiter de spectacles culturels incluant le reggae, le dancehall et la musique folklorique',
      'Participer aux celebrations communautaires et aux danses de rue',
      'Regarder des feux d\'artifice a travers l\'ile',
    ],
    es: [
      'Asistir al Gran Gala en el Estadio Nacional de Kingston',
      'Izar la bandera jamaicana en hogares, negocios y edificios publicos',
      'Ver desfiles y exhibiciones militares',
      'Usar los colores nacionales — negro, verde y dorado',
      'Disfrutar de presentaciones culturales incluyendo reggae, dancehall y musica folklorica',
      'Participar en celebraciones comunitarias y bailes callejeros',
      'Ver espectaculos de fuegos artificiales en toda la isla',
    ],
  },

  funFacts: {
    en: [
      'Jamaica\'s national motto "Out of Many, One People" reflects the island\'s diverse cultural heritage from African, European, Asian, and Middle Eastern roots.',
      'The Jamaican flag is one of only two national flags that do not contain the colours red, white, or blue (the other is Mauritania).',
      'The Grand Gala has been held at the National Stadium in Kingston every year since independence in 1962.',
      'Jamaica was the first Caribbean country to gain independence after the dissolution of the West Indies Federation.',
      'The black, green, and gold of the Jamaican flag represent the hardships of the people (black), the land\'s vegetation (green), and the sunshine (gold).',
    ],
    fr: [
      'La devise nationale de la Jamaique "Out of Many, One People" (De plusieurs, un seul peuple) reflete le patrimoine culturel diversifie de l\'ile, issu de racines africaines, europeennes, asiatiques et moyen-orientales.',
      'Le drapeau jamaicain est l\'un des deux seuls drapeaux nationaux qui ne contiennent pas les couleurs rouge, blanc ou bleu (l\'autre est la Mauritanie).',
      'Le Grand Gala a lieu au Stade national de Kingston chaque annee depuis l\'independance en 1962.',
      'La Jamaique a ete le premier pays caribeen a obtenir son independance apres la dissolution de la Federation des Indes occidentales.',
      'Le noir, le vert et l\'or du drapeau jamaicain representent les epreuves du peuple (noir), la vegetation de la terre (vert) et le soleil (or).',
    ],
    es: [
      'El lema nacional de Jamaica "Out of Many, One People" (De muchos, un solo pueblo) refleja el diverso patrimonio cultural de la isla de raices africanas, europeas, asiaticas y del Medio Oriente.',
      'La bandera jamaicana es una de las unicas dos banderas nacionales que no contienen los colores rojo, blanco o azul (la otra es Mauritania).',
      'El Gran Gala se ha celebrado en el Estadio Nacional de Kingston todos los anos desde la independencia en 1962.',
      'Jamaica fue el primer pais caribeno en obtener la independencia despues de la disolucion de la Federacion de las Indias Occidentales.',
      'El negro, el verde y el dorado de la bandera jamaicana representan las dificultades del pueblo (negro), la vegetacion de la tierra (verde) y el sol (dorado).',
    ],
  },

  planningChecklist: {
    en: [
      'Get tickets early for the Grand Gala at the National Stadium',
      'Prepare outfits in Jamaica\'s national colours — black, green, and gold',
      'Check local event listings for Independence Day celebrations in your parish',
      'Stock up on Jamaican flag decorations for your home and car',
      'Plan a family outing to a historical or cultural site related to independence',
    ],
    fr: [
      'Obtenir des billets tot pour le Grand Gala au Stade national',
      'Preparer des tenues aux couleurs nationales de la Jamaique — noir, vert et or',
      'Verifier les listes d\'evenements locaux pour les celebrations du Jour de l\'Independance dans votre paroisse',
      'Faire le plein de decorations de drapeaux jamaicains pour votre maison et votre voiture',
      'Planifier une sortie familiale vers un site historique ou culturel lie a l\'independance',
    ],
    es: [
      'Obtener boletos temprano para el Gran Gala en el Estadio Nacional',
      'Preparar atuendos con los colores nacionales de Jamaica — negro, verde y dorado',
      'Verificar las listas de eventos locales para las celebraciones del Dia de la Independencia en su parroquia',
      'Abastecerse de decoraciones de banderas jamaicanas para su hogar y auto',
      'Planificar una salida familiar a un sitio historico o cultural relacionado con la independencia',
    ],
  },

  relatedHolidays: ['jm_emancipation-day', 'jm_national-heroes-day'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Jamaica — Countdown & Celebrations',
      descriptionTemplate: 'When is Independence Day {year} in Jamaica? Live countdown to August 6, Grand Gala info, and celebration guide.',
      keywords: ['Jamaica Independence Day', 'August 6 Jamaica', 'Grand Gala Jamaica', 'Jamaica independence countdown', 'Jamaican independence 1962'],
    },
    fr: {
      titleTemplate: "Jour de l'Independance {year} Jamaique — Compte a rebours et celebrations",
      descriptionTemplate: "Quand est le Jour de l'Independance {year} en Jamaique ? Compte a rebours en direct jusqu'au 6 aout, infos sur le Grand Gala et guide de celebration.",
      keywords: ["Jour de l'Independance Jamaique", '6 aout Jamaique', 'Grand Gala Jamaique', "compte a rebours independance Jamaique", 'independance jamaicaine 1962'],
    },
    es: {
      titleTemplate: 'Dia de la Independencia {year} Jamaica — Cuenta regresiva y celebraciones',
      descriptionTemplate: 'Cuando es el Dia de la Independencia {year} en Jamaica? Cuenta regresiva en vivo hasta el 6 de agosto, info del Gran Gala y guia de celebracion.',
      keywords: ['Dia de la Independencia Jamaica', '6 de agosto Jamaica', 'Gran Gala Jamaica', 'cuenta regresiva independencia Jamaica', 'independencia jamaicana 1962'],
    },
  },

  faq: [
    {
      question: { en: 'When is Independence Day {year} in Jamaica?', fr: "Quand est le Jour de l'Independance {year} en Jamaique ?", es: 'Cuando es el Dia de la Independencia {year} en Jamaica?' },
      answer: {
        en: 'Independence Day {year} in Jamaica is on {date}, a {dayOfWeek}. It is always August 6 and is a national public holiday.',
        fr: "Le Jour de l'Independance {year} en Jamaique est le {date}, un {dayOfWeek}. C'est toujours le 6 aout et c'est un jour ferie national.",
        es: 'El Dia de la Independencia {year} en Jamaica es el {date}, un {dayOfWeek}. Siempre es el 6 de agosto y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is the Grand Gala?', fr: "Qu'est-ce que le Grand Gala ?", es: 'Que es el Gran Gala?' },
      answer: {
        en: 'The Grand Gala is the centrepiece celebration of Jamaica\'s Independence Day, held at the National Stadium in Kingston. It features cultural performances, military parades, speeches by national leaders, and fireworks. The event has been held annually since 1962.',
        fr: "Le Grand Gala est la celebration principale du Jour de l'Independance de la Jamaique, tenu au Stade national de Kingston. Il comprend des spectacles culturels, des defiles militaires, des discours de dirigeants nationaux et des feux d'artifice. L'evenement a lieu chaque annee depuis 1962.",
        es: 'El Gran Gala es la celebracion central del Dia de la Independencia de Jamaica, celebrado en el Estadio Nacional de Kingston. Presenta actuaciones culturales, desfiles militares, discursos de lideres nacionales y fuegos artificiales. El evento se ha celebrado anualmente desde 1962.',
      },
    },
    {
      question: { en: 'When did Jamaica gain independence?', fr: 'Quand la Jamaique a-t-elle obtenu son independance ?', es: 'Cuando obtuvo Jamaica su independencia?' },
      answer: {
        en: 'Jamaica gained independence from the United Kingdom on August 6, 1962. At midnight, the Union Jack was lowered and the Jamaican flag was raised for the first time at a ceremony in the National Stadium in Kingston.',
        fr: "La Jamaique a obtenu son independance du Royaume-Uni le 6 aout 1962. A minuit, l'Union Jack a ete abaisse et le drapeau jamaicain a ete hisse pour la premiere fois lors d'une ceremonie au Stade national de Kingston.",
        es: 'Jamaica obtuvo su independencia del Reino Unido el 6 de agosto de 1962. A medianoche, la Union Jack fue arriada y la bandera jamaicana fue izada por primera vez en una ceremonia en el Estadio Nacional de Kingston.',
      },
    },
    {
      question: { en: 'What do the colours of the Jamaican flag mean?', fr: 'Que signifient les couleurs du drapeau jamaicain ?', es: 'Que significan los colores de la bandera jamaicana?' },
      answer: {
        en: 'The Jamaican flag features a gold saltire (diagonal cross) with black triangles at the top and bottom and green triangles on the sides. Black represents the hardships overcome by the people, green symbolises the island\'s lush vegetation and hope, and gold represents the sunshine and natural resources.',
        fr: "Le drapeau jamaicain presente un sautoir dore (croix diagonale) avec des triangles noirs en haut et en bas et des triangles verts sur les cotes. Le noir represente les epreuves surmontees par le peuple, le vert symbolise la vegetation luxuriante de l'ile et l'espoir, et l'or represente le soleil et les ressources naturelles.",
        es: 'La bandera jamaicana presenta un aspa dorada (cruz diagonal) con triangulos negros arriba y abajo y triangulos verdes a los lados. El negro representa las dificultades superadas por el pueblo, el verde simboliza la exuberante vegetacion de la isla y la esperanza, y el dorado representa el sol y los recursos naturales.',
      },
    },
  ],

  colorTheme: 'green-gold-black',
  icon: '\ud83c\uddef\ud83c\uddf2',
};

// ---------------------------------------------------------------------------
// National Heroes Day — 3rd Monday of October
// ---------------------------------------------------------------------------

const nationalHeroesDay: HolidayData = {
  id: 'jm_national-heroes-day',
  countryCode: 'jm',
  slugs: { en: 'national-heroes-day', fr: 'jour-des-heros-nationaux', es: 'dia-de-los-heroes-nacionales' },
  names: { en: 'National Heroes Day', fr: 'Jour des Heros Nationaux', es: 'Dia de los Heroes Nacionales' },

  dateType: 'calculated',
  calculateDate: (year: number) => nthWeekday(year, 10, 1, 3),

  descriptions: {
    en: "National Heroes Day, observed on the third Monday of October, honours Jamaica's seven national heroes who made extraordinary contributions to the nation's freedom, identity, and development. It is a public holiday celebrated with ceremonies, cultural events, and reflection on Jamaica's history.",
    fr: "Le Jour des Heros Nationaux, observe le troisieme lundi d'octobre, honore les sept heros nationaux de la Jamaique qui ont apporte des contributions extraordinaires a la liberte, l'identite et le developpement de la nation. C'est un jour ferie celebre avec des ceremonies, des evenements culturels et une reflexion sur l'histoire de la Jamaique.",
    es: "El Dia de los Heroes Nacionales, observado el tercer lunes de octubre, honra a los siete heroes nacionales de Jamaica que hicieron contribuciones extraordinarias a la libertad, identidad y desarrollo de la nacion. Es un dia festivo celebrado con ceremonias, eventos culturales y reflexion sobre la historia de Jamaica.",
  },

  history: {
    en: "National Heroes Day was established to honour the individuals who shaped Jamaica's history and fought for the rights and freedom of its people. Jamaica has designated seven national heroes, each recognized for their extraordinary contributions.\n\nThe Right Excellent Marcus Garvey, a champion of Black empowerment and Pan-Africanism, is perhaps Jamaica's most internationally known hero. Nanny of the Maroons, the only female national hero, led guerrilla warfare against the British in the 18th century. Sam Sharpe inspired the 1831 Christmas Rebellion that hastened the abolition of slavery. Paul Bogle led the Morant Bay Rebellion of 1865. George William Gordon was a political activist executed for his role in the same rebellion. Norman Manley and Alexander Bustamante were the founding fathers of modern Jamaica who led the independence movement.\n\nThe holiday was originally observed on October 18 as Heroes' Day but was later moved to the third Monday of October to create a long weekend, allowing Jamaicans more time to reflect on their national heritage and celebrate the contributions of these remarkable individuals.",
    fr: "Le Jour des Heros Nationaux a ete etabli pour honorer les individus qui ont faconne l'histoire de la Jamaique et se sont battus pour les droits et la liberte de son peuple. La Jamaique a designe sept heros nationaux, chacun reconnu pour ses contributions extraordinaires.\n\nLe Tres Excellent Marcus Garvey, champion de l'autonomisation des Noirs et du panafricanisme, est peut-etre le heros le plus internationalement connu de la Jamaique. Nanny des Marrons, la seule femme heroine nationale, a mene une guerre de guerilla contre les Britanniques au 18e siecle. Sam Sharpe a inspire la Rebellion de Noel de 1831 qui a hate l'abolition de l'esclavage. Paul Bogle a mene la Rebellion de Morant Bay de 1865. George William Gordon etait un activiste politique execute pour son role dans la meme rebellion. Norman Manley et Alexander Bustamante etaient les peres fondateurs de la Jamaique moderne qui ont mene le mouvement d'independance.\n\nLa fete etait a l'origine observee le 18 octobre comme Jour des Heros, mais a ete deplacee au troisieme lundi d'octobre pour creer un long week-end, permettant aux Jamaicains plus de temps pour reflechir a leur patrimoine national et celebrer les contributions de ces individus remarquables.",
    es: "El Dia de los Heroes Nacionales fue establecido para honrar a las personas que moldearon la historia de Jamaica y lucharon por los derechos y la libertad de su pueblo. Jamaica ha designado siete heroes nacionales, cada uno reconocido por sus contribuciones extraordinarias.\n\nEl Muy Excelente Marcus Garvey, campeon del empoderamiento negro y el panafricanismo, es quizas el heroe mas internacionalmente conocido de Jamaica. Nanny de los Cimarrones, la unica heroina nacional femenina, lidero la guerra de guerrillas contra los britanicos en el siglo XVIII. Sam Sharpe inspiro la Rebelion de Navidad de 1831 que apresuro la abolicion de la esclavitud. Paul Bogle lidero la Rebelion de Morant Bay de 1865. George William Gordon fue un activista politico ejecutado por su papel en la misma rebelion. Norman Manley y Alexander Bustamante fueron los padres fundadores de la Jamaica moderna que lideraron el movimiento de independencia.\n\nLa festividad se observaba originalmente el 18 de octubre como Dia de los Heroes, pero fue trasladada al tercer lunes de octubre para crear un fin de semana largo, permitiendo a los jamaicanos mas tiempo para reflexionar sobre su patrimonio nacional y celebrar las contribuciones de estos individuos extraordinarios.",
  },

  traditions: {
    en: [
      'Attending wreath-laying ceremonies at the National Heroes Park in Kingston',
      'Visiting the National Heroes Park to pay respects at the burial sites of national heroes',
      'Participating in educational programmes about Jamaica\'s national heroes',
      'Watching cultural performances and historical re-enactments',
      'Displaying the Jamaican flag at homes and businesses',
      'Attending community events celebrating Jamaican heritage',
    ],
    fr: [
      'Assister aux ceremonies de depot de gerbes au Parc des Heros Nationaux a Kingston',
      'Visiter le Parc des Heros Nationaux pour rendre hommage sur les lieux de sepulture des heros nationaux',
      'Participer a des programmes educatifs sur les heros nationaux de la Jamaique',
      'Regarder des spectacles culturels et des reconstitutions historiques',
      'Afficher le drapeau jamaicain aux maisons et aux entreprises',
      'Assister a des evenements communautaires celebrant le patrimoine jamaicain',
    ],
    es: [
      'Asistir a ceremonias de colocacion de coronas en el Parque de los Heroes Nacionales en Kingston',
      'Visitar el Parque de los Heroes Nacionales para rendir homenaje en los lugares de sepultura de los heroes nacionales',
      'Participar en programas educativos sobre los heroes nacionales de Jamaica',
      'Ver presentaciones culturales y recreaciones historicas',
      'Exhibir la bandera jamaicana en hogares y negocios',
      'Asistir a eventos comunitarios que celebran el patrimonio jamaicano',
    ],
  },

  funFacts: {
    en: [
      'Jamaica has exactly seven national heroes: Marcus Garvey, Nanny of the Maroons, Sam Sharpe, Paul Bogle, George William Gordon, Norman Manley, and Alexander Bustamante.',
      'Nanny of the Maroons is the only female national hero of Jamaica and is featured on the Jamaican $500 banknote.',
      'Marcus Garvey founded the Universal Negro Improvement Association (UNIA) in 1914, which became the largest Black movement in history.',
      'Sam Sharpe\'s image appears on the Jamaican $50 banknote, and his rebellion is considered a pivotal event leading to abolition.',
      'The Order of National Hero is the highest honour that can be conferred on a Jamaican citizen.',
    ],
    fr: [
      'La Jamaique a exactement sept heros nationaux : Marcus Garvey, Nanny des Marrons, Sam Sharpe, Paul Bogle, George William Gordon, Norman Manley et Alexander Bustamante.',
      'Nanny des Marrons est la seule femme heroine nationale de la Jamaique et figure sur le billet de 500 dollars jamaicains.',
      'Marcus Garvey a fonde l\'Association universelle pour l\'amelioration de la condition des Noirs (UNIA) en 1914, qui est devenue le plus grand mouvement noir de l\'histoire.',
      'L\'image de Sam Sharpe apparait sur le billet de 50 dollars jamaicains, et sa rebellion est consideree comme un evenement decisif menant a l\'abolition.',
      'L\'Ordre de Heros National est la plus haute distinction qui puisse etre conferee a un citoyen jamaicain.',
    ],
    es: [
      'Jamaica tiene exactamente siete heroes nacionales: Marcus Garvey, Nanny de los Cimarrones, Sam Sharpe, Paul Bogle, George William Gordon, Norman Manley y Alexander Bustamante.',
      'Nanny de los Cimarrones es la unica heroina nacional femenina de Jamaica y aparece en el billete de $500 jamaicanos.',
      'Marcus Garvey fundo la Asociacion Universal para la Mejora de la Raza Negra (UNIA) en 1914, que se convirtio en el movimiento negro mas grande de la historia.',
      'La imagen de Sam Sharpe aparece en el billete de $50 jamaicanos, y su rebelion se considera un evento fundamental que condujo a la abolicion.',
      'La Orden de Heroe Nacional es el mayor honor que se puede conferir a un ciudadano jamaicano.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan a visit to the National Heroes Park in Kingston',
      'Learn about each of Jamaica\'s seven national heroes and their contributions',
      'Attend local community events and cultural celebrations',
      'Discuss the significance of the holiday with family, especially children',
      'Display the Jamaican flag or wear national colours in honour of the heroes',
    ],
    fr: [
      'Planifier une visite au Parc des Heros Nationaux a Kingston',
      'En apprendre davantage sur chacun des sept heros nationaux de la Jamaique et leurs contributions',
      'Assister aux evenements communautaires locaux et aux celebrations culturelles',
      'Discuter de l\'importance de la fete avec la famille, en particulier les enfants',
      'Afficher le drapeau jamaicain ou porter les couleurs nationales en l\'honneur des heros',
    ],
    es: [
      'Planificar una visita al Parque de los Heroes Nacionales en Kingston',
      'Aprender sobre cada uno de los siete heroes nacionales de Jamaica y sus contribuciones',
      'Asistir a eventos comunitarios locales y celebraciones culturales',
      'Discutir la importancia de la festividad con la familia, especialmente los ninos',
      'Exhibir la bandera jamaicana o usar los colores nacionales en honor a los heroes',
    ],
  },

  relatedHolidays: ['jm_emancipation-day', 'jm_independence-day'],

  seo: {
    en: {
      titleTemplate: 'National Heroes Day {year} Jamaica — Countdown & Guide',
      descriptionTemplate: 'When is National Heroes Day {year} in Jamaica? Live countdown, history of Jamaica\'s 7 national heroes, and celebration guide.',
      keywords: ['National Heroes Day Jamaica', 'Jamaica national heroes', 'Marcus Garvey', 'Nanny of the Maroons', 'Jamaica heroes day countdown'],
    },
    fr: {
      titleTemplate: 'Jour des Heros Nationaux {year} Jamaique — Compte a rebours et guide',
      descriptionTemplate: 'Quand est le Jour des Heros Nationaux {year} en Jamaique ? Compte a rebours en direct, histoire des 7 heros nationaux et guide de celebration.',
      keywords: ['Jour des Heros Nationaux Jamaique', 'heros nationaux Jamaique', 'Marcus Garvey', 'Nanny des Marrons', 'compte a rebours heros Jamaique'],
    },
    es: {
      titleTemplate: 'Dia de los Heroes Nacionales {year} Jamaica — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia de los Heroes Nacionales {year} en Jamaica? Cuenta regresiva en vivo, historia de los 7 heroes nacionales y guia de celebracion.',
      keywords: ['Dia de los Heroes Nacionales Jamaica', 'heroes nacionales Jamaica', 'Marcus Garvey', 'Nanny de los Cimarrones', 'cuenta regresiva heroes Jamaica'],
    },
  },

  faq: [
    {
      question: { en: 'When is National Heroes Day {year} in Jamaica?', fr: 'Quand est le Jour des Heros Nationaux {year} en Jamaique ?', es: 'Cuando es el Dia de los Heroes Nacionales {year} en Jamaica?' },
      answer: {
        en: 'National Heroes Day {year} in Jamaica falls on {date}, a {dayOfWeek}. It is observed on the third Monday of October each year.',
        fr: 'Le Jour des Heros Nationaux {year} en Jamaique tombe le {date}, un {dayOfWeek}. Il est observe le troisieme lundi d\'octobre chaque annee.',
        es: 'El Dia de los Heroes Nacionales {year} en Jamaica cae el {date}, un {dayOfWeek}. Se observa el tercer lunes de octubre de cada ano.',
      },
    },
    {
      question: { en: 'Who are Jamaica\'s national heroes?', fr: 'Qui sont les heros nationaux de la Jamaique ?', es: 'Quienes son los heroes nacionales de Jamaica?' },
      answer: {
        en: 'Jamaica has seven national heroes: Marcus Garvey, Nanny of the Maroons, Sam Sharpe, Paul Bogle, George William Gordon, Norman Manley, and Alexander Bustamante. Each made extraordinary contributions to Jamaica\'s freedom and national identity.',
        fr: 'La Jamaique a sept heros nationaux : Marcus Garvey, Nanny des Marrons, Sam Sharpe, Paul Bogle, George William Gordon, Norman Manley et Alexander Bustamante. Chacun a apporte des contributions extraordinaires a la liberte et l\'identite nationale de la Jamaique.',
        es: 'Jamaica tiene siete heroes nacionales: Marcus Garvey, Nanny de los Cimarrones, Sam Sharpe, Paul Bogle, George William Gordon, Norman Manley y Alexander Bustamante. Cada uno hizo contribuciones extraordinarias a la libertad e identidad nacional de Jamaica.',
      },
    },
    {
      question: { en: 'Who is Nanny of the Maroons?', fr: 'Qui est Nanny des Marrons ?', es: 'Quien es Nanny de los Cimarrones?' },
      answer: {
        en: 'Nanny of the Maroons was an 18th-century leader of the Windward Maroons who fought a successful guerrilla war against the British colonial forces in Jamaica. She is the only female national hero and is celebrated for her military genius and her role in preserving African traditions in Jamaica.',
        fr: 'Nanny des Marrons etait une dirigeante du 18e siecle des Marrons du Vent qui a mene une guerre de guerilla reussie contre les forces coloniales britanniques en Jamaique. Elle est la seule femme heroine nationale et est celebree pour son genie militaire et son role dans la preservation des traditions africaines en Jamaique.',
        es: 'Nanny de los Cimarrones fue una lider del siglo XVIII de los Cimarrones de Barlovento que libro una exitosa guerra de guerrillas contra las fuerzas coloniales britanicas en Jamaica. Es la unica heroina nacional femenina y es celebrada por su genio militar y su papel en la preservacion de las tradiciones africanas en Jamaica.',
      },
    },
    {
      question: { en: 'Where is the National Heroes Park?', fr: 'Ou se trouve le Parc des Heros Nationaux ?', es: 'Donde esta el Parque de los Heroes Nacionales?' },
      answer: {
        en: 'The National Heroes Park is located in Kingston, Jamaica. It is the final resting place of several national heroes and serves as the primary venue for National Heroes Day ceremonies, including wreath-laying and cultural events.',
        fr: 'Le Parc des Heros Nationaux est situe a Kingston, en Jamaique. C\'est le lieu de repos final de plusieurs heros nationaux et sert de lieu principal pour les ceremonies du Jour des Heros Nationaux, y compris les depots de gerbes et les evenements culturels.',
        es: 'El Parque de los Heroes Nacionales esta ubicado en Kingston, Jamaica. Es el lugar de descanso final de varios heroes nacionales y sirve como el principal escenario para las ceremonias del Dia de los Heroes Nacionales, incluyendo la colocacion de coronas y eventos culturales.',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '\ud83c\udfc6',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmasDay: HolidayData = {
  id: 'jm_christmas',
  countryCode: 'jm',
  slugs: { en: 'christmas-day', fr: 'jour-de-noel', es: 'dia-de-navidad' },
  names: { en: 'Christmas Day', fr: 'Jour de Noel', es: 'Dia de Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is one of the most joyous holidays in Jamaica. It is celebrated with unique Jamaican traditions including Jonkonnu parades, sorrel drink, rum cake, church services, and vibrant community gatherings that blend Christian observance with Caribbean festivity.',
    fr: "Le jour de Noel, le 25 decembre, est l'un des jours feries les plus joyeux en Jamaique. Il est celebre avec des traditions jamaicaines uniques, notamment les defiles Jonkonnu, la boisson au bissap, le gateau au rhum, les services religieux et des rassemblements communautaires vibrants qui melangent la pratique chretienne et la festivite caribeenne.",
    es: 'El dia de Navidad, el 25 de diciembre, es una de las festividades mas alegres de Jamaica. Se celebra con tradiciones jamaicanas unicas, incluyendo desfiles de Jonkonnu, bebida de jamaica, pastel de ron, servicios religiosos y vibrantes reuniones comunitarias que mezclan la observancia cristiana con la festividad caribena.',
  },

  history: {
    en: "Christmas in Jamaica is a rich blend of European Christian traditions and African cultural heritage that has evolved over centuries. The holiday was brought to the island by British colonists but was profoundly shaped by the African traditions of the enslaved population, creating a uniquely Jamaican celebration.\n\nJonkonnu (also spelled John Canoe or Junkanoo) is Jamaica's most distinctive Christmas tradition, dating back to the era of slavery when enslaved people were given a brief period of freedom during Christmas to celebrate. The masquerade parades feature elaborate costumes including the Horsehead, Pitchy-Patchy, Devil, and Belly Woman characters, accompanied by fife and drum music. Though less common today than in past centuries, Jonkonnu remains an important part of Jamaica's cultural heritage.\n\nThe preparation of traditional Christmas foods is a beloved ritual. Jamaicans begin soaking fruits for Christmas cake (rum cake) months in advance, and the making of sorrel drink from dried hibiscus flowers, ginger, and rum is a Christmas staple. Christmas dinner typically features baked ham, curry goat, rice and peas, and gungo peas soup, reflecting the island's diverse culinary traditions.",
    fr: "Noel en Jamaique est un riche melange de traditions chretiennes europeennes et de patrimoine culturel africain qui a evolue au fil des siecles. La fete a ete apportee sur l'ile par les colons britanniques mais a ete profondement faconnee par les traditions africaines de la population asservie, creant une celebration uniquement jamaicaine.\n\nLe Jonkonnu (egalement orthographie John Canoe ou Junkanoo) est la tradition de Noel la plus distinctive de la Jamaique, remontant a l'ere de l'esclavage, lorsque les personnes asservies beneficiaient d'une breve periode de liberte pendant Noel pour celebrer. Les defiles de mascarade presentent des costumes elabores, notamment les personnages de Tete de Cheval, Pitchy-Patchy, Diable et Femme Enceinte, accompagnes de musique de fifre et de tambour. Bien que moins courant aujourd'hui qu'au cours des siecles passes, le Jonkonnu reste une partie importante du patrimoine culturel de la Jamaique.\n\nLa preparation des plats de Noel traditionnels est un rituel bien-aime. Les Jamaicains commencent a faire tremper les fruits pour le gateau de Noel (gateau au rhum) des mois a l'avance, et la preparation de la boisson au bissap a partir de fleurs d'hibiscus sechees, de gingembre et de rhum est un incontournable de Noel. Le diner de Noel comprend generalement du jambon cuit au four, du curry de chevre, du riz aux haricots et de la soupe de pois gungo, refletant les traditions culinaires diversifiees de l'ile.",
    es: "La Navidad en Jamaica es una rica mezcla de tradiciones cristianas europeas y patrimonio cultural africano que ha evolucionado a lo largo de los siglos. La festividad fue traida a la isla por los colonos britanicos pero fue profundamente moldeada por las tradiciones africanas de la poblacion esclavizada, creando una celebracion unicamente jamaicana.\n\nEl Jonkonnu (tambien escrito John Canoe o Junkanoo) es la tradicion navidena mas distintiva de Jamaica, que se remonta a la era de la esclavitud cuando las personas esclavizadas recibiam un breve periodo de libertad durante la Navidad para celebrar. Los desfiles de mascarada presentan elaborados disfraces que incluyen los personajes de Cabeza de Caballo, Pitchy-Patchy, Diablo y Mujer Embarazada, acompanados de musica de pifano y tambor. Aunque menos comun hoy que en siglos pasados, el Jonkonnu sigue siendo una parte importante del patrimonio cultural de Jamaica.\n\nLa preparacion de las comidas navidenas tradicionales es un ritual querido. Los jamaicanos comienzan a remojar las frutas para el pastel de Navidad (pastel de ron) meses antes, y la preparacion de la bebida de jamaica con flores de hibisco secas, jengibre y ron es un elemento basico navideno. La cena de Navidad tipicamente incluye jamon al horno, curry de cabra, arroz con frijoles y sopa de guandules, reflejando las diversas tradiciones culinarias de la isla.",
  },

  traditions: {
    en: [
      'Performing and watching Jonkonnu masquerade parades with costumed characters',
      'Drinking sorrel — a festive drink made from dried hibiscus flowers, ginger, cloves, and rum',
      'Baking and sharing Jamaican Christmas cake (rum cake) soaked in wine and rum for months',
      'Attending church services on Christmas morning',
      'Preparing a Christmas dinner with baked ham, curry goat, rice and peas, and gungo peas soup',
      'Painting and decorating homes before Christmas',
      'Exchanging gifts and visiting family and friends throughout the day',
    ],
    fr: [
      'Executer et regarder les defiles de mascarade Jonkonnu avec des personnages costumes',
      'Boire du bissap — une boisson festive faite de fleurs d\'hibiscus sechees, de gingembre, de clous de girofle et de rhum',
      'Cuire et partager le gateau de Noel jamaicain (gateau au rhum) trempe dans le vin et le rhum pendant des mois',
      'Assister aux services religieux le matin de Noel',
      'Preparer un diner de Noel avec du jambon cuit au four, du curry de chevre, du riz aux haricots et de la soupe de pois gungo',
      'Peindre et decorer les maisons avant Noel',
      'Echanger des cadeaux et rendre visite a la famille et aux amis tout au long de la journee',
    ],
    es: [
      'Realizar y ver los desfiles de mascarada Jonkonnu con personajes disfrazados',
      'Beber jamaica — una bebida festiva hecha de flores de hibisco secas, jengibre, clavos y ron',
      'Hornear y compartir el pastel de Navidad jamaicano (pastel de ron) remojado en vino y ron durante meses',
      'Asistir a servicios religiosos en la manana de Navidad',
      'Preparar una cena navidena con jamon al horno, curry de cabra, arroz con frijoles y sopa de guandules',
      'Pintar y decorar los hogares antes de Navidad',
      'Intercambiar regalos y visitar familiares y amigos durante todo el dia',
    ],
  },

  funFacts: {
    en: [
      'Jonkonnu dates back to the 17th century and may derive its name from a West African chief named John Conny.',
      'Jamaican Christmas cake is soaked in rum and wine for months — some families start soaking the fruits in June.',
      'Sorrel drink is made from the calyxes of the Roselle plant (Hibiscus sabdariffa), which blooms around Christmas time in Jamaica.',
      'The Jamaican pepper pot soup, traditionally eaten on Christmas morning, can be traced back to the indigenous Taino people.',
      'Grand Market, held on Christmas Eve, is a beloved tradition where Jamaicans shop and celebrate late into the night at outdoor markets.',
    ],
    fr: [
      'Le Jonkonnu remonte au 17e siecle et pourrait tirer son nom d\'un chef ouest-africain nomme John Conny.',
      'Le gateau de Noel jamaicain est trempe dans le rhum et le vin pendant des mois — certaines familles commencent a faire tremper les fruits en juin.',
      'La boisson au bissap est faite a partir des calices de la plante Roselle (Hibiscus sabdariffa), qui fleurit autour de la periode de Noel en Jamaique.',
      'La soupe pepper pot jamaicaine, traditionnellement mangee le matin de Noel, remonte aux peuples autochtones Tainos.',
      'Le Grand Marche, tenu la veille de Noel, est une tradition bien-aimee ou les Jamaicains font leurs achats et celebrent tard dans la nuit sur les marches en plein air.',
    ],
    es: [
      'El Jonkonnu se remonta al siglo XVII y puede derivar su nombre de un jefe de Africa Occidental llamado John Conny.',
      'El pastel de Navidad jamaicano se remoja en ron y vino durante meses — algunas familias comienzan a remojar las frutas en junio.',
      'La bebida de jamaica se hace con los calices de la planta Roselle (Hibiscus sabdariffa), que florece alrededor de la epoca navidena en Jamaica.',
      'La sopa pepper pot jamaicana, tradicionalmente consumida la manana de Navidad, tiene sus origenes en los pueblos indigenas tainos.',
      'El Gran Mercado, celebrado en la vispera de Navidad, es una tradicion querida donde los jamaicanos compran y celebran hasta altas horas de la noche en mercados al aire libre.',
    ],
  },

  planningChecklist: {
    en: [
      'Start soaking fruits for Jamaican Christmas cake well in advance (ideally months ahead)',
      'Buy dried sorrel flowers and prepare homemade sorrel drink',
      'Plan your Christmas dinner menu — order ham, goat meat, and gungo peas early',
      'Attend Grand Market on Christmas Eve for last-minute shopping and festivities',
      'Look for Jonkonnu performances and cultural events in your community',
    ],
    fr: [
      'Commencer a faire tremper les fruits pour le gateau de Noel jamaicain bien a l\'avance (idealement des mois avant)',
      'Acheter des fleurs de bissap sechees et preparer une boisson au bissap maison',
      'Planifier votre menu de diner de Noel — commander le jambon, la viande de chevre et les pois gungo tot',
      'Assister au Grand Marche la veille de Noel pour les achats de derniere minute et les festivites',
      'Chercher des spectacles Jonkonnu et des evenements culturels dans votre communaute',
    ],
    es: [
      'Comenzar a remojar las frutas para el pastel de Navidad jamaicano con mucha anticipacion (idealmente meses antes)',
      'Comprar flores de jamaica secas y preparar bebida de jamaica casera',
      'Planificar su menu de cena navidena — ordenar jamon, carne de cabra y guandules temprano',
      'Asistir al Gran Mercado en la vispera de Navidad para compras de ultimo momento y festividades',
      'Buscar presentaciones de Jonkonnu y eventos culturales en su comunidad',
    ],
  },

  relatedHolidays: ['jm_new-years-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Jamaica — Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Jamaica? Live countdown to December 25, Jonkonnu traditions, sorrel drink, rum cake, and celebration guide.',
      keywords: ['Christmas Jamaica', 'Jamaican Christmas traditions', 'Jonkonnu', 'sorrel drink Jamaica', 'Jamaican rum cake'],
    },
    fr: {
      titleTemplate: 'Noel {year} Jamaique — Compte a rebours et traditions',
      descriptionTemplate: 'Quand est Noel {year} en Jamaique ? Compte a rebours en direct jusqu\'au 25 decembre, traditions Jonkonnu, boisson au bissap, gateau au rhum et guide de celebration.',
      keywords: ['Noel Jamaique', 'traditions de Noel jamaicaines', 'Jonkonnu', 'boisson au bissap Jamaique', 'gateau au rhum jamaicain'],
    },
    es: {
      titleTemplate: 'Navidad {year} Jamaica — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Cuando es Navidad {year} en Jamaica? Cuenta regresiva en vivo hasta el 25 de diciembre, tradiciones Jonkonnu, bebida de jamaica, pastel de ron y guia de celebracion.',
      keywords: ['Navidad Jamaica', 'tradiciones navidenas jamaicanas', 'Jonkonnu', 'bebida de jamaica', 'pastel de ron jamaicano'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas Day {year} in Jamaica?', fr: 'Quand est le jour de Noel {year} en Jamaique ?', es: 'Cuando es el dia de Navidad {year} en Jamaica?' },
      answer: {
        en: 'Christmas Day {year} in Jamaica is on {date}, a {dayOfWeek}. It is always December 25 and is a national public holiday.',
        fr: "Le jour de Noel {year} en Jamaique est le {date}, un {dayOfWeek}. C'est toujours le 25 decembre et c'est un jour ferie national.",
        es: 'El dia de Navidad {year} en Jamaica es el {date}, un {dayOfWeek}. Siempre es el 25 de diciembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is Jonkonnu?', fr: "Qu'est-ce que le Jonkonnu ?", es: 'Que es el Jonkonnu?' },
      answer: {
        en: 'Jonkonnu (also spelled John Canoe or Junkanoo) is a traditional Jamaican masquerade parade dating back to the slavery era. Performers wear elaborate costumes representing characters such as the Horsehead, Devil, Pitchy-Patchy, and Belly Woman, accompanied by fife and drum music. It is one of the most distinctive Christmas traditions in Jamaica.',
        fr: "Le Jonkonnu (egalement orthographie John Canoe ou Junkanoo) est un defile de mascarade traditionnel jamaicain remontant a l'ere de l'esclavage. Les artistes portent des costumes elabores representant des personnages tels que la Tete de Cheval, le Diable, le Pitchy-Patchy et la Femme Enceinte, accompagnes de musique de fifre et de tambour. C'est l'une des traditions de Noel les plus distinctives de la Jamaique.",
        es: 'El Jonkonnu (tambien escrito John Canoe o Junkanoo) es un desfile de mascarada tradicional jamaicano que se remonta a la era de la esclavitud. Los artistas usan elaborados disfraces que representan personajes como la Cabeza de Caballo, el Diablo, el Pitchy-Patchy y la Mujer Embarazada, acompanados de musica de pifano y tambor. Es una de las tradiciones navidenas mas distintivas de Jamaica.',
      },
    },
    {
      question: { en: 'What is sorrel drink?', fr: "Qu'est-ce que la boisson au bissap ?", es: 'Que es la bebida de jamaica?' },
      answer: {
        en: 'Sorrel drink is a traditional Jamaican Christmas beverage made from the dried calyxes of the Roselle plant (Hibiscus sabdariffa), boiled with ginger, cloves, and sugar, then mixed with rum. The deep red drink is refreshing and tangy, and is a staple at every Jamaican Christmas celebration.',
        fr: "La boisson au bissap est une boisson de Noel traditionnelle jamaicaine faite a partir des calices seches de la plante Roselle (Hibiscus sabdariffa), bouillis avec du gingembre, des clous de girofle et du sucre, puis melanges avec du rhum. La boisson rouge foncee est rafraichissante et acidulee, et c'est un incontournable de chaque celebration de Noel jamaicaine.",
        es: 'La bebida de jamaica es una bebida navidena tradicional jamaicana hecha con los calices secos de la planta Roselle (Hibiscus sabdariffa), hervidos con jengibre, clavos y azucar, luego mezclada con ron. La bebida de color rojo intenso es refrescante y acida, y es un elemento basico en cada celebracion navidena jamaicana.',
      },
    },
    {
      question: { en: 'What is Grand Market?', fr: "Qu'est-ce que le Grand Marche ?", es: 'Que es el Gran Mercado?' },
      answer: {
        en: 'Grand Market is a beloved Jamaican Christmas Eve tradition where towns come alive with outdoor markets, shopping, music, and celebrations that run late into the night. It is a time for last-minute gift buying and enjoying the festive atmosphere with family and friends.',
        fr: "Le Grand Marche est une tradition bien-aimee de la veille de Noel jamaicaine ou les villes s'animent avec des marches en plein air, du shopping, de la musique et des celebrations qui se prolongent tard dans la nuit. C'est le moment d'acheter des cadeaux de derniere minute et de profiter de l'atmosphere festive avec la famille et les amis.",
        es: 'El Gran Mercado es una querida tradicion jamaicana de la vispera de Navidad donde las ciudades cobran vida con mercados al aire libre, compras, musica y celebraciones que continuan hasta altas horas de la noche. Es un momento para comprar regalos de ultimo momento y disfrutar del ambiente festivo con familiares y amigos.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const jmHolidays: HolidayData[] = [
  newYearsDay,
  ashWednesday,
  emancipationDay,
  independenceDay,
  nationalHeroesDay,
  christmasDay,
];

export default jmHolidays;
