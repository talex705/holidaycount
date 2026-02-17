/**
 * Colombia holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { nextMonday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'co_new-years-day',
  countryCode: 'co',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: 'Jour de l\'An', es: 'Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a national public holiday in Colombia. Colombians welcome the new year with vibrant celebrations that blend music, dance, family gatherings, and unique regional traditions such as burning the Ano Viejo effigies at midnight.",
    fr: "Le Jour de l'An, le 1er janvier, est un jour ferie national en Colombie. Les Colombiens accueillent la nouvelle annee avec des celebrations vibrantes melant musique, danse, reunions familiales et traditions regionales uniques comme la cremation des effigies de l'Ano Viejo a minuit.",
    es: 'El Ano Nuevo, el 1 de enero, es un feriado nacional en Colombia. Los colombianos reciben el nuevo ano con vibrantes celebraciones que mezclan musica, baile, reuniones familiares y tradiciones regionales unicas como la quema de los munecos de Ano Viejo a medianoche.',
  },

  history: {
    en: "New Year's celebrations in Colombia are deeply rooted in both Catholic and indigenous traditions. The most distinctive custom is the burning of the Ano Viejo — life-sized effigies stuffed with firecrackers and old clothes that represent the old year. This tradition symbolizes letting go of the past and starting fresh.\n\nRegional celebrations vary dramatically: in Cali, the Feria de Cali runs from December 25 to January 1 with salsa dancing, bullfighting, and concerts. In Pasto, the Carnival de Blancos y Negros begins on December 28 and extends into early January with elaborate parades.\n\nColombian New Year's Eve (Nochevieja) superstitions are numerous: eating 12 grapes at midnight for 12 wishes, carrying a suitcase around the block for travel, and wearing yellow underwear for prosperity.",
    fr: "Les celebrations du Nouvel An en Colombie sont profondement enracinees dans les traditions catholiques et indigenes. La coutume la plus distinctive est la cremation de l'Ano Viejo — des effigies grandeur nature remplies de petards et de vieux vetements representant l'ancienne annee.\n\nLes celebrations regionales varient enormement : a Cali, la Feria de Cali se deroule du 25 decembre au 1er janvier avec de la salsa, des corridas et des concerts. A Pasto, le Carnaval de Blancos y Negros commence le 28 decembre.\n\nLes superstitions colombiennes du Nouvel An sont nombreuses : manger 12 raisins a minuit pour 12 voeux, faire le tour du pate de maisons avec une valise pour voyager, et porter des sous-vetements jaunes pour la prosperite.",
    es: "Las celebraciones de Ano Nuevo en Colombia estan profundamente arraigadas en tradiciones tanto catolicas como indigenas. La costumbre mas distintiva es la quema del Ano Viejo — munecos de tamano real rellenos de polvora y ropa vieja que representan el ano que termina. Esta tradicion simboliza dejar atras el pasado y comenzar de nuevo.\n\nLas celebraciones regionales varian dramaticamente: en Cali, la Feria de Cali se desarrolla del 25 de diciembre al 1 de enero con salsa, toros y conciertos. En Pasto, el Carnaval de Blancos y Negros comienza el 28 de diciembre con desfiles elaborados.\n\nLas supersticiones colombianas de Nochevieja son numerosas: comer 12 uvas a medianoche por 12 deseos, dar la vuelta a la manzana con una maleta para viajar, y usar ropa interior amarilla para la prosperidad.",
  },

  traditions: {
    en: [
      'Burning the Ano Viejo effigy at midnight to symbolize leaving the past behind',
      'Eating 12 grapes at midnight — one for each month and one wish per grape',
      'Wearing yellow underwear for prosperity in the new year',
      'Walking around the block with a suitcase to ensure travel',
      'Placing lentils in your pocket or wallet for financial luck',
      'Gathering with family for a late-night celebration with music and dancing',
    ],
    fr: [
      'Bruler l\'effigie de l\'Ano Viejo a minuit pour symboliser le depart du passe',
      'Manger 12 raisins a minuit — un pour chaque mois et un voeu par raisin',
      'Porter des sous-vetements jaunes pour la prosperite',
      'Faire le tour du pate de maisons avec une valise pour assurer les voyages',
      'Mettre des lentilles dans sa poche ou son portefeuille pour la chance financiere',
      'Se reunir en famille pour une celebration nocturne avec musique et danse',
    ],
    es: [
      'Quemar el muneco de Ano Viejo a medianoche para simbolizar dejar atras el pasado',
      'Comer 12 uvas a medianoche — una por cada mes y un deseo por uva',
      'Usar ropa interior amarilla para la prosperidad en el nuevo ano',
      'Dar la vuelta a la manzana con una maleta para asegurar viajes',
      'Poner lentejas en el bolsillo o billetera para la suerte financiera',
      'Reunirse en familia para una celebracion nocturna con musica y baile',
    ],
  },

  funFacts: {
    en: [
      'The Ano Viejo effigies are often made to resemble politicians, celebrities, or disliked public figures.',
      'The Feria de Cali is the world\'s largest salsa festival, attracting over 2 million visitors annually.',
      'In Pasto, the Carnival de Blancos y Negros is a UNESCO Intangible Cultural Heritage event.',
      'Some Colombian families stuff the Ano Viejo with a written "will" listing the bad things from the old year.',
      'The tradition of 12 grapes at midnight was adopted from Spain and is practiced throughout Latin America.',
    ],
    fr: [
      'Les effigies de l\'Ano Viejo sont souvent faites a l\'image de politiciens, de celebrites ou de personnalites publiques impopulaires.',
      'La Feria de Cali est le plus grand festival de salsa au monde, attirant plus de 2 millions de visiteurs par an.',
      'A Pasto, le Carnaval de Blancos y Negros est inscrit au patrimoine culturel immateriel de l\'UNESCO.',
      'Certaines familles colombiennes remplissent l\'Ano Viejo d\'un "testament" ecrit listant les mauvaises choses de l\'annee.',
      'La tradition des 12 raisins a minuit a ete adoptee d\'Espagne et est pratiquee dans toute l\'Amerique latine.',
    ],
    es: [
      'Los munecos de Ano Viejo a menudo se hacen parecidos a politicos, celebridades o figuras publicas rechazadas.',
      'La Feria de Cali es el festival de salsa mas grande del mundo, atrayendo mas de 2 millones de visitantes al ano.',
      'En Pasto, el Carnaval de Blancos y Negros es Patrimonio Cultural Inmaterial de la UNESCO.',
      'Algunas familias colombianas rellenan el Ano Viejo con un "testamento" escrito listando las cosas malas del ano.',
      'La tradicion de las 12 uvas a medianoche fue adoptada de Espana y se practica en toda America Latina.',
    ],
  },

  planningChecklist: {
    en: [
      'Build or buy your Ano Viejo effigy and stuff it with old clothes',
      'Stock up on 12 grapes, yellow underwear, and lentils for the superstitions',
      'Plan your celebration — whether at home with family or at a public event',
      'Book travel early if attending the Feria de Cali or Carnival de Blancos y Negros',
      'Prepare for loud fireworks throughout the night',
    ],
    fr: [
      'Fabriquer ou acheter votre effigie de l\'Ano Viejo et la remplir de vieux vetements',
      'Se procurer 12 raisins, des sous-vetements jaunes et des lentilles pour les superstitions',
      'Planifier la celebration — a la maison en famille ou a un evenement public',
      'Reserver tot si vous assistez a la Feria de Cali ou au Carnaval de Blancos y Negros',
      'Se preparer pour des feux d\'artifice bruyants toute la nuit',
    ],
    es: [
      'Armar o comprar el muneco de Ano Viejo y rellenarlo con ropa vieja',
      'Conseguir 12 uvas, ropa interior amarilla y lentejas para las supersticiones',
      'Planificar la celebracion — en casa con familia o en un evento publico',
      'Reservar viaje temprano si van a la Feria de Cali o al Carnaval de Blancos y Negros',
      'Prepararse para fuegos artificiales ruidosos durante toda la noche',
    ],
  },

  relatedHolidays: ['co_christmas', 'co_three-kings-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Colombia — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Colombia? Live countdown, Ano Viejo traditions, and celebration guide.",
      keywords: ["New Year Colombia", 'Ano Nuevo Colombia', 'Ano Viejo tradition', 'Colombia New Year', 'Colombia holidays'],
    },
    fr: {
      titleTemplate: 'Jour de l\'An {year} Colombie — Compte a rebours et guide',
      descriptionTemplate: 'Quand est le Jour de l\'An {year} en Colombie ? Compte a rebours, traditions de l\'Ano Viejo et guide.',
      keywords: ['Nouvel An Colombie', 'Ano Nuevo Colombie', 'tradition Ano Viejo', 'fetes Colombie', 'jours feries Colombie'],
    },
    es: {
      titleTemplate: 'Ano Nuevo {year} Colombia — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Ano Nuevo {year} en Colombia? Cuenta regresiva en vivo, tradiciones de Ano Viejo y guia.',
      keywords: ['Ano Nuevo Colombia', 'Ano Viejo Colombia', 'tradiciones fin de ano Colombia', 'festivos Colombia', 'feriados Colombia'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Colombia?", fr: 'Quand est le Jour de l\'An {year} en Colombie ?', es: 'Cuando es el Ano Nuevo {year} en Colombia?' },
      answer: {
        en: "New Year's Day {year} in Colombia is on {date}. It is always January 1 and is a national public holiday.",
        fr: 'Le Jour de l\'An {year} en Colombie est le {date}. C\'est toujours le 1er janvier et c\'est un jour ferie national.',
        es: 'El Ano Nuevo {year} en Colombia es el {date}. Siempre es el 1 de enero y es festivo nacional.',
      },
    },
    {
      question: { en: 'What is the Ano Viejo tradition?', fr: 'Qu\'est-ce que la tradition de l\'Ano Viejo ?', es: 'Que es la tradicion del Ano Viejo?' },
      answer: {
        en: 'The Ano Viejo is a life-sized effigy stuffed with old clothes and firecrackers that is burned at midnight on New Year\'s Eve. It represents the old year and all its negative aspects. Families build their own and often dress them to resemble specific people.',
        fr: 'L\'Ano Viejo est une effigie grandeur nature remplie de vieux vetements et de petards qui est brulee a minuit le soir du Nouvel An. Elle represente l\'ancienne annee et tous ses aspects negatifs.',
        es: 'El Ano Viejo es un muneco de tamano real relleno de ropa vieja y polvora que se quema a medianoche en Nochevieja. Representa el ano que termina y todos sus aspectos negativos. Las familias arman el suyo y a menudo lo visten para parecerse a personas especificas.',
      },
    },
    {
      question: { en: 'What is the Feria de Cali?', fr: 'Qu\'est-ce que la Feria de Cali ?', es: 'Que es la Feria de Cali?' },
      answer: {
        en: "The Feria de Cali is the world's largest salsa festival, held annually from December 25 to January 1 in Cali, Colombia. It features salsa dance competitions, concerts, parades, and cultural events, attracting over 2 million visitors.",
        fr: 'La Feria de Cali est le plus grand festival de salsa au monde, organise chaque annee du 25 decembre au 1er janvier a Cali. Elle comprend des concours de salsa, des concerts et des defiles.',
        es: 'La Feria de Cali es el festival de salsa mas grande del mundo, realizado anualmente del 25 de diciembre al 1 de enero en Cali, Colombia. Incluye competencias de salsa, conciertos, cabalgatas y eventos culturales, atrayendo mas de 2 millones de visitantes.',
      },
    },
    {
      question: { en: 'What are Colombian New Year superstitions?', fr: 'Quelles sont les superstitions colombiennes du Nouvel An ?', es: 'Cuales son las supersticiones colombianas de Ano Nuevo?' },
      answer: {
        en: 'Popular Colombian New Year superstitions include eating 12 grapes at midnight (one wish per grape), wearing yellow underwear for prosperity, walking around the block with a suitcase for travel, and placing lentils in your pocket for financial luck.',
        fr: 'Les superstitions populaires colombiennes incluent manger 12 raisins a minuit, porter des sous-vetements jaunes pour la prosperite, faire le tour du pate de maisons avec une valise pour voyager, et mettre des lentilles dans sa poche pour la chance financiere.',
        es: 'Las supersticiones populares colombianas de Ano Nuevo incluyen comer 12 uvas a medianoche (un deseo por uva), usar ropa interior amarilla para la prosperidad, dar la vuelta a la manzana con una maleta para viajar, y poner lentejas en el bolsillo para la suerte financiera.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Three Kings Day — January 6 (moved to Monday by Ley Emiliani)
// ---------------------------------------------------------------------------

const threeKingsDay: HolidayData = {
  id: 'co_three-kings-day',
  countryCode: 'co',
  slugs: { en: 'three-kings-day', fr: 'jour-des-rois', es: 'dia-de-los-reyes-magos' },
  names: { en: 'Three Kings Day', fr: 'Jour des Rois', es: 'Dia de los Reyes Magos' },

  dateType: 'calculated',
  calculateDate: (year: number) => nextMonday(year, 1, 6),

  descriptions: {
    en: "Three Kings Day (Dia de los Reyes Magos) celebrates the Epiphany and the visit of the three Wise Men to the baby Jesus. In Colombia, it is moved to the following Monday under the Ley Emiliani, creating a long weekend. Children receive gifts and families share the traditional Rosca de Reyes.",
    fr: "Le Jour des Rois (Dia de los Reyes Magos) celebre l'Epiphanie et la visite des trois Rois Mages a l'enfant Jesus. En Colombie, il est deplace au lundi suivant en vertu de la Ley Emiliani, creant un long week-end. Les enfants recoivent des cadeaux et les familles partagent la Rosca de Reyes.",
    es: "El Dia de los Reyes Magos celebra la Epifania y la visita de los tres Reyes Magos al nino Jesus. En Colombia, se traslada al lunes siguiente segun la Ley Emiliani, creando un fin de semana largo. Los ninos reciben regalos y las familias comparten la tradicional Rosca de Reyes.",
  },

  history: {
    en: "The celebration of the Epiphany has deep roots in Colombian Catholic tradition. The three Wise Men — Melchior, Caspar, and Balthazar — are said to have brought gifts of gold, frankincense, and myrrh to the infant Jesus. In Colombia, children traditionally wrote letters to the Reyes Magos rather than Santa Claus.\n\nThe Ley Emiliani (Law 51 of 1983) moved several Colombian holidays to the nearest Monday to create long weekends (puentes festivos). Three Kings Day is one of these moveable holidays, ensuring workers always get a three-day weekend.\n\nWhile the tradition of Reyes Magos gift-giving has declined somewhat in favor of Santa Claus on December 25, many Colombian families still celebrate both, giving children gifts on both dates.",
    fr: "La celebration de l'Epiphanie a des racines profondes dans la tradition catholique colombienne. Les trois Rois Mages — Melchior, Gaspard et Balthazar — auraient apporte des cadeaux d'or, d'encens et de myrrhe a l'enfant Jesus.\n\nLa Ley Emiliani (Loi 51 de 1983) a deplace plusieurs jours feries colombiens au lundi le plus proche pour creer des longs week-ends (puentes festivos). Le Jour des Rois est l'un de ces jours feries mobiles.\n\nBien que la tradition des cadeaux des Rois Mages ait quelque peu decline au profit du Pere Noel le 25 decembre, de nombreuses familles colombiennes celebrent toujours les deux.",
    es: "La celebracion de la Epifania tiene profundas raices en la tradicion catolica colombiana. Los tres Reyes Magos — Melchor, Gaspar y Baltazar — habrian traido regalos de oro, incienso y mirra al nino Jesus. En Colombia, los ninos tradicionalmente escribian cartas a los Reyes Magos en lugar de a Papa Noel.\n\nLa Ley Emiliani (Ley 51 de 1983) traslado varios festivos colombianos al lunes mas cercano para crear fines de semana largos (puentes festivos). El Dia de los Reyes Magos es uno de estos festivos movibles, asegurando que los trabajadores siempre tengan un fin de semana de tres dias.\n\nAunque la tradicion de los regalos de Reyes Magos ha disminuido algo a favor de Papa Noel el 25 de diciembre, muchas familias colombianas aun celebran ambas, dando regalos a los ninos en ambas fechas.",
  },

  traditions: {
    en: [
      'Children receiving gifts from the Reyes Magos (Three Kings)',
      'Sharing Rosca de Reyes (Kings\' Cake) with family',
      'Attending Mass to celebrate the Epiphany',
      'Participating in local parades featuring the three Wise Men',
      'Writing letters to the Reyes Magos asking for gifts',
      'Leaving shoes out for the Reyes Magos to fill with gifts',
      'Enjoying the puente festivo (long weekend) with family outings',
    ],
    fr: [
      'Les enfants recoivent des cadeaux des Rois Mages',
      'Partager la Rosca de Reyes (Galette des Rois) en famille',
      'Assister a la messe pour celebrer l\'Epiphanie',
      'Participer aux defiles locaux avec les trois Rois Mages',
      'Ecrire des lettres aux Rois Mages pour demander des cadeaux',
      'Laisser des chaussures pour que les Rois Mages les remplissent de cadeaux',
      'Profiter du puente festivo (long week-end) avec des sorties en famille',
    ],
    es: [
      'Los ninos reciben regalos de los Reyes Magos',
      'Compartir la Rosca de Reyes con la familia',
      'Asistir a misa para celebrar la Epifania',
      'Participar en desfiles locales con los tres Reyes Magos',
      'Escribir cartas a los Reyes Magos pidiendo regalos',
      'Dejar los zapatos afuera para que los Reyes Magos los llenen de regalos',
      'Disfrutar del puente festivo con paseos familiares',
    ],
  },

  funFacts: {
    en: [
      'The Ley Emiliani has created over 18 long weekends per year in Colombia, one of the highest in the world.',
      'In some Colombian regions, children leave grass and water for the camels of the Reyes Magos.',
      'The Rosca de Reyes contains a small figurine; whoever finds it must host a party on February 2 (Candelaria).',
      'Three Kings Day marks the official end of the Christmas season in Colombia.',
      'Colombia is one of the countries where both Santa Claus (Papa Noel) and the Three Kings bring gifts during the holiday season.',
    ],
    fr: [
      'La Ley Emiliani a cree plus de 18 longs week-ends par an en Colombie, l\'un des plus eleves au monde.',
      'Dans certaines regions colombiennes, les enfants laissent de l\'herbe et de l\'eau pour les chameaux des Rois Mages.',
      'La Rosca de Reyes contient une petite figurine ; celui qui la trouve doit organiser une fete le 2 fevrier (Candelaria).',
      'Le Jour des Rois marque la fin officielle de la saison de Noel en Colombie.',
      'La Colombie est l\'un des pays ou Papa Noel et les Rois Mages apportent des cadeaux pendant les fetes.',
    ],
    es: [
      'La Ley Emiliani ha creado mas de 18 fines de semana largos por ano en Colombia, uno de los mas altos del mundo.',
      'En algunas regiones colombianas, los ninos dejan pasto y agua para los camellos de los Reyes Magos.',
      'La Rosca de Reyes contiene una figurita; quien la encuentre debe organizar una fiesta el 2 de febrero (Candelaria).',
      'El Dia de Reyes marca el fin oficial de la temporada navidena en Colombia.',
      'Colombia es uno de los paises donde tanto Papa Noel como los Reyes Magos traen regalos durante las fiestas.',
    ],
  },

  planningChecklist: {
    en: [
      'Buy gifts for children to receive from the Reyes Magos',
      'Order or bake a Rosca de Reyes for the family gathering',
      'Plan a long weekend trip — it is a puente festivo',
      'Check local parade schedules for Three Kings celebrations',
      'Help children write their letters to the Reyes Magos',
    ],
    fr: [
      'Acheter des cadeaux pour les enfants de la part des Rois Mages',
      'Commander ou preparer une Rosca de Reyes pour la reunion familiale',
      'Planifier un voyage de long week-end — c\'est un puente festivo',
      'Verifier les horaires des defiles locaux pour les celebrations des Rois',
      'Aider les enfants a ecrire leurs lettres aux Rois Mages',
    ],
    es: [
      'Comprar regalos para los ninos de parte de los Reyes Magos',
      'Encargar o preparar una Rosca de Reyes para la reunion familiar',
      'Planificar un viaje de fin de semana largo — es puente festivo',
      'Consultar los horarios de desfiles locales de la celebracion de Reyes',
      'Ayudar a los ninos a escribir sus cartas a los Reyes Magos',
    ],
  },

  relatedHolidays: ['co_new-years-day', 'co_christmas'],

  seo: {
    en: {
      titleTemplate: 'Three Kings Day {year} Colombia — Countdown & Traditions',
      descriptionTemplate: 'When is Three Kings Day {year} in Colombia? Live countdown, Ley Emiliani date, Reyes Magos traditions, and guide.',
      keywords: ['Three Kings Day Colombia', 'Dia de los Reyes Magos', 'Epiphany Colombia', 'Ley Emiliani', 'Colombia holidays'],
    },
    fr: {
      titleTemplate: 'Jour des Rois {year} Colombie — Compte a rebours et traditions',
      descriptionTemplate: 'Quand est le Jour des Rois {year} en Colombie ? Compte a rebours, date Ley Emiliani et traditions.',
      keywords: ['Jour des Rois Colombie', 'Epiphanie Colombie', 'Reyes Magos', 'Ley Emiliani', 'feries Colombie'],
    },
    es: {
      titleTemplate: 'Dia de los Reyes Magos {year} Colombia — Cuenta regresiva',
      descriptionTemplate: 'Cuando es el Dia de Reyes {year} en Colombia? Cuenta regresiva, fecha Ley Emiliani y tradiciones.',
      keywords: ['Dia de los Reyes Magos Colombia', 'Epifania Colombia', 'Ley Emiliani', 'festivos Colombia', 'puente festivo'],
    },
  },

  faq: [
    {
      question: { en: 'When is Three Kings Day {year} in Colombia?', fr: 'Quand est le Jour des Rois {year} en Colombie ?', es: 'Cuando es el Dia de Reyes {year} en Colombia?' },
      answer: {
        en: 'Three Kings Day {year} in Colombia falls on {date}. Under the Ley Emiliani, it is moved to the Monday nearest to January 6.',
        fr: 'Le Jour des Rois {year} en Colombie tombe le {date}. En vertu de la Ley Emiliani, il est deplace au lundi le plus proche du 6 janvier.',
        es: 'El Dia de Reyes {year} en Colombia cae el {date}. Segun la Ley Emiliani, se traslada al lunes mas cercano al 6 de enero.',
      },
    },
    {
      question: { en: 'What is the Ley Emiliani?', fr: 'Qu\'est-ce que la Ley Emiliani ?', es: 'Que es la Ley Emiliani?' },
      answer: {
        en: 'The Ley Emiliani (Law 51 of 1983) is a Colombian law that moves certain holidays to the nearest Monday, creating three-day weekends called "puentes festivos." This applies to about 10 holidays including Three Kings Day and Day of the Race.',
        fr: 'La Ley Emiliani (Loi 51 de 1983) est une loi colombienne qui deplace certains jours feries au lundi le plus proche, creant des week-ends de trois jours appeles "puentes festivos."',
        es: 'La Ley Emiliani (Ley 51 de 1983) es una ley colombiana que traslada ciertos festivos al lunes mas cercano, creando fines de semana de tres dias llamados "puentes festivos." Aplica a unos 10 festivos incluyendo Reyes y Dia de la Raza.',
      },
    },
    {
      question: { en: 'What is the Rosca de Reyes?', fr: 'Qu\'est-ce que la Rosca de Reyes ?', es: 'Que es la Rosca de Reyes?' },
      answer: {
        en: 'The Rosca de Reyes is a ring-shaped sweet bread decorated with dried fruits and sugar, traditionally shared on Three Kings Day. A small figurine of baby Jesus is hidden inside; the person who finds it is responsible for hosting a celebration on February 2.',
        fr: 'La Rosca de Reyes est un pain sucre en forme d\'anneau decore de fruits secs et de sucre. Une petite figurine de l\'enfant Jesus est cachee a l\'interieur ; celui qui la trouve doit organiser une fete le 2 fevrier.',
        es: 'La Rosca de Reyes es un pan dulce en forma de anillo decorado con frutas secas y azucar, tradicionalmente compartido el Dia de Reyes. Una figurita del nino Jesus esta escondida dentro; quien la encuentre debe organizar una celebracion el 2 de febrero.',
      },
    },
    {
      question: { en: 'Do Colombian children get gifts on Three Kings Day?', fr: 'Les enfants colombiens recoivent-ils des cadeaux le Jour des Rois ?', es: 'Los ninos colombianos reciben regalos el Dia de Reyes?' },
      answer: {
        en: 'Traditionally, yes. Colombian children receive gifts from the Reyes Magos on this day, though the practice has declined as Christmas Day gift-giving with Papa Noel has become more popular. Many families celebrate both.',
        fr: 'Traditionnellement, oui. Les enfants colombiens recoivent des cadeaux des Rois Mages ce jour-la, bien que la pratique ait decline au profit des cadeaux de Noel avec Papa Noel.',
        es: 'Tradicionalmente, si. Los ninos colombianos reciben regalos de los Reyes Magos este dia, aunque la practica ha disminuido ya que los regalos de Navidad con Papa Noel se han vuelto mas populares. Muchas familias celebran ambos.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83d\udc51',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'co_labour-day',
  countryCode: 'co',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fete du Travail', es: 'Dia del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a national public holiday in Colombia honoring workers' rights and the labor movement. It is marked by union marches, political demonstrations, and cultural events celebrating the contributions of Colombian workers.",
    fr: "La Fete du Travail, le 1er mai, est un jour ferie national en Colombie en l'honneur des droits des travailleurs et du mouvement ouvrier. Elle est marquee par des marches syndicales, des manifestations politiques et des evenements culturels.",
    es: 'El Dia del Trabajo, el 1 de mayo, es un festivo nacional en Colombia en honor a los derechos de los trabajadores y al movimiento obrero. Se celebra con marchas sindicales, manifestaciones politicas y eventos culturales que celebran las contribuciones de los trabajadores colombianos.',
  },

  history: {
    en: "Labour Day in Colombia follows the international tradition commemorating the Haymarket affair in Chicago (1886). Colombian workers' movements gained strength in the early 20th century, particularly after the 1928 Banana Massacre in Cienaga, when United Fruit Company workers were killed by government forces during a strike.\n\nMay 1 has been an official holiday in Colombia since the early 20th century. The date is particularly significant for Colombian trade unions, which use the day to advocate for labor rights, fair wages, and social justice.\n\nUnlike many Colombian holidays, Labour Day is NOT subject to the Ley Emiliani and is always observed on May 1 regardless of the day of the week.",
    fr: "La Fete du Travail en Colombie suit la tradition internationale commemorant l'affaire de Haymarket a Chicago (1886). Les mouvements ouvriers colombiens ont gagne en force au debut du XXe siecle, particulierement apres le Massacre des Bananiers de 1928 a Cienaga.\n\nLe 1er mai est un jour ferie officiel en Colombie depuis le debut du XXe siecle. Contrairement a de nombreux jours feries colombiens, la Fete du Travail n'est PAS soumise a la Ley Emiliani et est toujours celebree le 1er mai.",
    es: "El Dia del Trabajo en Colombia sigue la tradicion internacional que conmemora los sucesos de Haymarket en Chicago (1886). Los movimientos obreros colombianos ganaron fuerza a principios del siglo XX, particularmente despues de la Masacre de las Bananeras de 1928 en Cienaga, cuando trabajadores de la United Fruit Company fueron asesinados por fuerzas del gobierno durante una huelga.\n\nEl 1 de mayo ha sido festivo oficial en Colombia desde principios del siglo XX. La fecha es particularmente significativa para los sindicatos colombianos, que usan el dia para abogar por derechos laborales, salarios justos y justicia social.\n\nA diferencia de muchos festivos colombianos, el Dia del Trabajo NO esta sujeto a la Ley Emiliani y siempre se observa el 1 de mayo sin importar el dia de la semana.",
  },

  traditions: {
    en: [
      'Union marches through major cities, especially Bogota',
      'Political speeches and rallies advocating for workers\' rights',
      'Cultural events and concerts celebrating the labor movement',
      'Family gatherings and day trips for the day off',
      'Community events in working-class neighborhoods',
    ],
    fr: [
      'Marches syndicales dans les grandes villes, surtout Bogota',
      'Discours politiques et rassemblements pour les droits des travailleurs',
      'Evenements culturels et concerts celebrant le mouvement ouvrier',
      'Reunions familiales et excursions pour le jour de conge',
      'Evenements communautaires dans les quartiers populaires',
    ],
    es: [
      'Marchas sindicales por las principales ciudades, especialmente Bogota',
      'Discursos politicos y mitines abogando por los derechos de los trabajadores',
      'Eventos culturales y conciertos celebrando el movimiento obrero',
      'Reuniones familiares y paseos para el dia libre',
      'Eventos comunitarios en barrios populares',
    ],
  },

  funFacts: {
    en: [
      'The 1928 Banana Massacre in Colombia inspired Gabriel Garcia Marquez\'s depiction in "One Hundred Years of Solitude."',
      'Labour Day is one of the few Colombian holidays NOT moved to Monday under the Ley Emiliani.',
      'Colombian unions often use May 1 to present formal demands to the government about labor policy.',
      'Bogota\'s May 1 march typically draws tens of thousands of participants through the city center.',
      'Colombia has one of the highest numbers of public holidays in the Americas, partly due to the Ley Emiliani system.',
    ],
    fr: [
      'Le Massacre des Bananiers de 1928 a inspire la representation de Gabriel Garcia Marquez dans "Cent ans de solitude."',
      'La Fete du Travail est l\'un des rares jours feries colombiens NON deplace au lundi par la Ley Emiliani.',
      'Les syndicats colombiens utilisent souvent le 1er mai pour presenter des demandes formelles au gouvernement.',
      'La marche du 1er mai a Bogota attire generalement des dizaines de milliers de participants.',
      'La Colombie a l\'un des plus grands nombres de jours feries dans les Ameriques.',
    ],
    es: [
      'La Masacre de las Bananeras de 1928 inspiro la representacion de Gabriel Garcia Marquez en "Cien Anos de Soledad."',
      'El Dia del Trabajo es uno de los pocos festivos colombianos NO trasladados al lunes por la Ley Emiliani.',
      'Los sindicatos colombianos a menudo usan el 1 de mayo para presentar demandas formales al gobierno sobre politica laboral.',
      'La marcha del 1 de mayo en Bogota tipicamente atrae a decenas de miles de participantes por el centro de la ciudad.',
      'Colombia tiene uno de los mayores numeros de festivos en las Americas, en parte por el sistema de la Ley Emiliani.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the route and schedule for May 1 marches in your city',
      'Plan for road closures in major city centers during marches',
      'Be aware that banks, government offices, and most businesses will be closed',
      'Stock up on groceries the day before as many stores will be shut',
      'Plan family activities for the day off if not attending marches',
    ],
    fr: [
      'Verifier le parcours et le programme des marches du 1er mai dans votre ville',
      'Planifier les fermetures de routes dans les centres-villes pendant les marches',
      'Savoir que les banques, bureaux et la plupart des commerces seront fermes',
      'Faire les courses la veille car de nombreux magasins seront fermes',
      'Planifier des activites familiales si vous n\'assistez pas aux marches',
    ],
    es: [
      'Consultar la ruta y horario de las marchas del 1 de mayo en tu ciudad',
      'Planificar para los cierres de vias en los centros de las ciudades durante las marchas',
      'Tener en cuenta que los bancos, oficinas gubernamentales y la mayoria de comercios estaran cerrados',
      'Hacer las compras el dia anterior ya que muchos comercios estaran cerrados',
      'Planificar actividades familiares para el dia libre si no van a las marchas',
    ],
  },

  relatedHolidays: ['co_independence-day', 'co_battle-of-boyaca'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Colombia — Countdown & Info',
      descriptionTemplate: 'When is Labour Day {year} in Colombia? Live countdown, workers\' rights history, and celebration info.',
      keywords: ['Labour Day Colombia', 'Dia del Trabajo Colombia', 'May Day Colombia', 'Colombia public holidays', 'workers rights Colombia'],
    },
    fr: {
      titleTemplate: 'Fete du Travail {year} Colombie — Compte a rebours et info',
      descriptionTemplate: 'Quand est la Fete du Travail {year} en Colombie ? Compte a rebours, histoire et info.',
      keywords: ['Fete du Travail Colombie', '1er mai Colombie', 'droits travailleurs Colombie', 'jours feries Colombie', 'festivos Colombia'],
    },
    es: {
      titleTemplate: 'Dia del Trabajo {year} Colombia — Cuenta regresiva e info',
      descriptionTemplate: 'Cuando es el Dia del Trabajo {year} en Colombia? Cuenta regresiva, historia de derechos laborales e informacion.',
      keywords: ['Dia del Trabajo Colombia', '1 de mayo Colombia', 'derechos laborales Colombia', 'festivos Colombia', 'feriados Colombia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Colombia?', fr: 'Quand est la Fete du Travail {year} en Colombie ?', es: 'Cuando es el Dia del Trabajo {year} en Colombia?' },
      answer: {
        en: 'Labour Day {year} in Colombia is on {date}. It is always May 1 and is not subject to the Ley Emiliani.',
        fr: 'La Fete du Travail {year} en Colombie est le {date}. C\'est toujours le 1er mai et n\'est pas soumise a la Ley Emiliani.',
        es: 'El Dia del Trabajo {year} en Colombia es el {date}. Siempre es el 1 de mayo y no esta sujeto a la Ley Emiliani.',
      },
    },
    {
      question: { en: 'Is Labour Day moved to Monday in Colombia?', fr: 'La Fete du Travail est-elle deplacee au lundi en Colombie ?', es: 'El Dia del Trabajo se traslada al lunes en Colombia?' },
      answer: {
        en: 'No. Unlike many Colombian holidays, Labour Day is always observed on May 1 regardless of the day of the week. It is one of the exceptions to the Ley Emiliani.',
        fr: 'Non. Contrairement a de nombreux jours feries colombiens, la Fete du Travail est toujours observee le 1er mai. C\'est l\'une des exceptions a la Ley Emiliani.',
        es: 'No. A diferencia de muchos festivos colombianos, el Dia del Trabajo siempre se observa el 1 de mayo sin importar el dia de la semana. Es una de las excepciones a la Ley Emiliani.',
      },
    },
    {
      question: { en: 'What was the Banana Massacre?', fr: 'Qu\'est-ce que le Massacre des Bananiers ?', es: 'Que fue la Masacre de las Bananeras?' },
      answer: {
        en: 'The Banana Massacre of 1928 occurred in Cienaga, Colombia, when the government sent troops to end a strike by United Fruit Company banana plantation workers. The military opened fire, killing an estimated 47 to several thousand workers. The event is a key moment in Colombian labor history.',
        fr: 'Le Massacre des Bananiers de 1928 a eu lieu a Cienaga, Colombie, quand le gouvernement a envoye des troupes pour mettre fin a une greve des travailleurs des plantations de bananes de la United Fruit Company.',
        es: 'La Masacre de las Bananeras de 1928 ocurrio en Cienaga, Colombia, cuando el gobierno envio tropas para terminar una huelga de trabajadores de las plantaciones bananeras de la United Fruit Company. El ejercito abrio fuego, matando entre 47 y varios miles de trabajadores. Es un momento clave de la historia laboral colombiana.',
      },
    },
    {
      question: { en: 'Are shops open on Labour Day in Colombia?', fr: 'Les magasins sont-ils ouverts la Fete du Travail en Colombie ?', es: 'Los comercios estan abiertos el Dia del Trabajo en Colombia?' },
      answer: {
        en: 'Most shops, banks, and government offices are closed on Labour Day. Some supermarkets and shopping centers may open with reduced hours. Restaurants and entertainment venues typically remain open.',
        fr: 'La plupart des magasins, banques et bureaux gouvernementaux sont fermes. Certains supermarches et centres commerciaux peuvent ouvrir avec des horaires reduits.',
        es: 'La mayoria de comercios, bancos y oficinas gubernamentales estan cerrados el Dia del Trabajo. Algunos supermercados y centros comerciales pueden abrir con horarios reducidos. Los restaurantes y lugares de entretenimiento tipicamente permanecen abiertos.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '\u2692\ufe0f',
};

// ---------------------------------------------------------------------------
// Independence Day — July 20
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'co_independence-day',
  countryCode: 'co',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Independance", es: 'Dia de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 7,
  fixedDay: 20,

  descriptions: {
    en: "Colombia's Independence Day on July 20 celebrates the Grito de Independencia (Cry of Independence) of 1810, when citizens of Bogota rose up against Spanish colonial rule. Known as el 20 de Julio, it features military parades, patriotic ceremonies, and cultural events across the nation.",
    fr: "Le Jour de l'Independance de la Colombie, le 20 juillet, celebre le Grito de Independencia (Cri d'Independance) de 1810. Connu sous le nom de el 20 de Julio, il est marque par des defiles militaires, des ceremonies patriotiques et des evenements culturels.",
    es: "El Dia de la Independencia de Colombia, el 20 de julio, celebra el Grito de Independencia de 1810, cuando los ciudadanos de Bogota se levantaron contra el dominio colonial espanol. Conocido como el 20 de Julio, incluye desfiles militares, ceremonias patrioticas y eventos culturales en toda la nacion.",
  },

  history: {
    en: "On July 20, 1810, a planned incident involving a flower vase — the famous 'Florero de Llorente' — triggered a popular uprising in Bogota against Spanish colonial authorities. Criollo leaders arranged to borrow a vase from a Spanish merchant named Llorente, who refused, providing the pretext for an organized protest.\n\nThe ensuing demonstration led to the establishment of a governing junta in Bogota, marking the beginning of the independence process. Full independence from Spain was not achieved until the Battle of Boyaca on August 7, 1819.\n\nToday, July 20 is celebrated with the President's address to the nation, military parades on the Avenida 68 in Bogota, and patriotic events across all Colombian cities.",
    fr: "Le 20 juillet 1810, un incident prevu impliquant un vase a fleurs — le fameux 'Florero de Llorente' — a declenche un soulevement populaire a Bogota contre les autorites coloniales espagnoles. Des dirigeants criollos ont arrange d'emprunter un vase a un marchand espagnol nomme Llorente, qui a refuse.\n\nLa manifestation qui a suivi a conduit a l'etablissement d'une junte a Bogota. L'independance complete de l'Espagne n'a ete obtenue qu'a la Bataille de Boyaca le 7 aout 1819.\n\nAujourd'hui, le 20 juillet est celebre avec le discours du president a la nation, des defiles militaires et des evenements patriotiques.",
    es: "El 20 de julio de 1810, un incidente planeado que involucro un florero — el famoso 'Florero de Llorente' — desencadeno un levantamiento popular en Bogota contra las autoridades coloniales espanolas. Lideres criollos arreglaron pedir prestado un florero a un comerciante espanol llamado Llorente, quien se nego, proporcionando el pretexto para una protesta organizada.\n\nLa manifestacion resultante llevo al establecimiento de una junta de gobierno en Bogota, marcando el inicio del proceso de independencia. La independencia total de Espana no se logro hasta la Batalla de Boyaca el 7 de agosto de 1819.\n\nHoy, el 20 de julio se celebra con el discurso del presidente a la nacion, desfiles militares en la Avenida 68 de Bogota y eventos patrioticos en todas las ciudades colombianas.",
  },

  traditions: {
    en: [
      'Watching the military parade in Bogota on Avenida 68',
      'Listening to the President\'s address to the nation from Congress',
      'Displaying the Colombian flag on homes, buildings, and vehicles',
      'Attending cultural events and concerts in public plazas',
      'Visiting the Casa del Florero museum in Bogota',
      'School ceremonies and patriotic performances',
    ],
    fr: [
      'Regarder le defile militaire a Bogota sur l\'Avenida 68',
      'Ecouter le discours du President a la nation depuis le Congres',
      'Afficher le drapeau colombien sur les maisons, batiments et vehicules',
      'Assister a des evenements culturels et concerts sur les places publiques',
      'Visiter le musee de la Casa del Florero a Bogota',
      'Ceremonies scolaires et spectacles patriotiques',
    ],
    es: [
      'Ver el desfile militar en Bogota en la Avenida 68',
      'Escuchar el discurso del Presidente a la nacion desde el Congreso',
      'Colocar la bandera colombiana en casas, edificios y vehiculos',
      'Asistir a eventos culturales y conciertos en plazas publicas',
      'Visitar el museo de la Casa del Florero en Bogota',
      'Actos escolares y presentaciones patrioticas',
    ],
  },

  funFacts: {
    en: [
      'The independence movement was triggered by a dispute over a flower vase — one of history\'s most unusual revolutionary pretexts.',
      'The original "Florero de Llorente" is preserved in the Casa del Florero museum in Bogota\'s Plaza de Bolivar.',
      'July 20 falls during Colombia\'s dry season in the Andes, making it ideal for outdoor celebrations.',
      'Colombia\'s name honors Christopher Columbus, though he never actually set foot in the country.',
      'The Colombian military parade on July 20 features all branches of the armed forces and is broadcast nationwide.',
    ],
    fr: [
      'Le mouvement d\'independance a ete declenche par une dispute sur un vase a fleurs — l\'un des pretextes revolutionnaires les plus insolites de l\'histoire.',
      'Le "Florero de Llorente" original est conserve dans le musee Casa del Florero sur la Plaza de Bolivar a Bogota.',
      'Le 20 juillet tombe pendant la saison seche en Colombie dans les Andes, ideal pour les celebrations en plein air.',
      'Le nom de la Colombie honore Christophe Colomb, bien qu\'il n\'ait jamais mis le pied dans le pays.',
      'Le defile militaire colombien du 20 juillet presente toutes les branches des forces armees.',
    ],
    es: [
      'El movimiento independentista fue desencadenado por una disputa sobre un florero — uno de los pretextos revolucionarios mas inusuales de la historia.',
      'El "Florero de Llorente" original se conserva en el museo Casa del Florero en la Plaza de Bolivar de Bogota.',
      'El 20 de julio cae durante la temporada seca de Colombia en los Andes, ideal para celebraciones al aire libre.',
      'El nombre de Colombia honra a Cristobal Colon, aunque el nunca piso el territorio del pais.',
      'El desfile militar colombiano del 20 de julio presenta todas las ramas de las fuerzas armadas y se transmite a nivel nacional.',
    ],
  },

  planningChecklist: {
    en: [
      'Find a good viewing spot for the military parade if in Bogota',
      'Display the Colombian flag on your home or balcony',
      'Plan to watch the President\'s address to the nation',
      'Visit the Casa del Florero museum in Bogota',
      'Check local events and concerts in your city for the day',
    ],
    fr: [
      'Trouver un bon emplacement pour le defile militaire si vous etes a Bogota',
      'Afficher le drapeau colombien sur votre maison ou balcon',
      'Planifier de regarder le discours du President a la nation',
      'Visiter le musee de la Casa del Florero a Bogota',
      'Verifier les evenements locaux et concerts dans votre ville',
    ],
    es: [
      'Encontrar un buen lugar para ver el desfile militar si estan en Bogota',
      'Colocar la bandera colombiana en la casa o balcon',
      'Planear ver el discurso del Presidente a la nacion',
      'Visitar el museo de la Casa del Florero en Bogota',
      'Consultar los eventos locales y conciertos en tu ciudad para el dia',
    ],
  },

  relatedHolidays: ['co_battle-of-boyaca', 'co_labour-day'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Colombia — Countdown & Guide',
      descriptionTemplate: 'Colombia Independence Day {year} on July 20. History of the Grito de Independencia, parade info, and celebration guide.',
      keywords: ['Colombia Independence Day', 'July 20 Colombia', 'Grito de Independencia', '20 de Julio', 'Colombia holidays'],
    },
    fr: {
      titleTemplate: 'Jour de l\'Independance {year} Colombie — Compte a rebours',
      descriptionTemplate: 'Jour de l\'Independance de la Colombie {year} le 20 juillet. Histoire du Grito de Independencia et guide.',
      keywords: ['Independance Colombie', '20 juillet Colombie', 'Grito de Independencia', 'feries Colombie', 'festivos Colombia'],
    },
    es: {
      titleTemplate: 'Dia de la Independencia {year} Colombia — Cuenta regresiva',
      descriptionTemplate: 'Dia de la Independencia de Colombia {year} el 20 de julio. Historia del Grito de Independencia, desfiles y guia.',
      keywords: ['Dia de la Independencia Colombia', '20 de Julio Colombia', 'Grito de Independencia', 'festivos Colombia', 'feriados Colombia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Independence Day {year} in Colombia?', fr: 'Quand est le Jour de l\'Independance {year} en Colombie ?', es: 'Cuando es el Dia de la Independencia {year} en Colombia?' },
      answer: {
        en: 'Colombia Independence Day {year} is on {date}. It is always July 20.',
        fr: 'Le Jour de l\'Independance de la Colombie {year} est le {date}. C\'est toujours le 20 juillet.',
        es: 'El Dia de la Independencia de Colombia {year} es el {date}. Siempre es el 20 de julio.',
      },
    },
    {
      question: { en: 'What was the Florero de Llorente incident?', fr: 'Quel fut l\'incident du Florero de Llorente ?', es: 'Que fue el incidente del Florero de Llorente?' },
      answer: {
        en: 'On July 20, 1810, Criollo leaders deliberately provoked a dispute with Spanish merchant Jose Gonzalez Llorente over a flower vase. His refusal to lend it sparked a carefully orchestrated popular uprising that led to the creation of a local governing junta and the start of independence.',
        fr: 'Le 20 juillet 1810, des dirigeants criollos ont deliberement provoque une dispute avec le marchand espagnol Jose Gonzalez Llorente au sujet d\'un vase a fleurs, declenchant un soulevement qui a mene a l\'independance.',
        es: 'El 20 de julio de 1810, lideres criollos provocaron deliberadamente una disputa con el comerciante espanol Jose Gonzalez Llorente por un florero. Su negativa a prestarlo desencadeno un levantamiento popular cuidadosamente orquestado que llevo a la creacion de una junta de gobierno local y al inicio de la independencia.',
      },
    },
    {
      question: { en: 'Is July 20 subject to the Ley Emiliani?', fr: 'Le 20 juillet est-il soumis a la Ley Emiliani ?', es: 'El 20 de julio esta sujeto a la Ley Emiliani?' },
      answer: {
        en: 'No. Independence Day (July 20) is always observed on July 20 regardless of the day of the week. It is one of the holidays exempt from the Ley Emiliani along with Labour Day, Christmas, and New Year.',
        fr: 'Non. Le Jour de l\'Independance (20 juillet) est toujours observe le 20 juillet. C\'est l\'un des jours feries exemptes de la Ley Emiliani.',
        es: 'No. El Dia de la Independencia (20 de julio) siempre se observa el 20 de julio sin importar el dia de la semana. Es uno de los festivos exentos de la Ley Emiliani junto con el Dia del Trabajo, Navidad y Ano Nuevo.',
      },
    },
    {
      question: { en: 'What is the difference between July 20 and August 7 in Colombia?', fr: 'Quelle est la difference entre le 20 juillet et le 7 aout en Colombie ?', es: 'Cual es la diferencia entre el 20 de julio y el 7 de agosto en Colombia?' },
      answer: {
        en: 'July 20 (1810) marks the start of the independence movement with the Grito de Independencia in Bogota. August 7 (1819) commemorates the Battle of Boyaca, which was the decisive military victory that secured Colombian independence from Spain.',
        fr: 'Le 20 juillet (1810) marque le debut du mouvement d\'independance. Le 7 aout (1819) commemore la Bataille de Boyaca, victoire militaire decisive qui a assure l\'independance colombienne.',
        es: 'El 20 de julio (1810) marca el inicio del movimiento independentista con el Grito de Independencia en Bogota. El 7 de agosto (1819) conmemora la Batalla de Boyaca, la victoria militar decisiva que aseguro la independencia colombiana de Espana.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\udde8\ud83c\uddf4',
};

// ---------------------------------------------------------------------------
// Battle of Boyaca — August 7
// ---------------------------------------------------------------------------

const battleOfBoyaca: HolidayData = {
  id: 'co_battle-of-boyaca',
  countryCode: 'co',
  slugs: { en: 'battle-of-boyaca', fr: 'bataille-de-boyaca', es: 'batalla-de-boyaca' },
  names: { en: 'Battle of Boyaca', fr: 'Bataille de Boyaca', es: 'Batalla de Boyaca' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 7,

  descriptions: {
    en: "The Battle of Boyaca on August 7 is a national holiday in Colombia commemorating the decisive battle of 1819 that secured independence from Spain. Led by Simon Bolivar, the patriot victory at the Puente de Boyaca opened the road to Bogota and ended Spanish colonial rule in New Granada.",
    fr: "La Bataille de Boyaca, le 7 aout, est un jour ferie national en Colombie commemorant la bataille decisive de 1819 qui a assure l'independance de l'Espagne. Menee par Simon Bolivar, la victoire patriote au Puente de Boyaca a ouvert la route vers Bogota.",
    es: "La Batalla de Boyaca, el 7 de agosto, es un festivo nacional en Colombia que conmemora la batalla decisiva de 1819 que aseguro la independencia de Espana. Liderada por Simon Bolivar, la victoria patriota en el Puente de Boyaca abrio el camino a Bogota y puso fin al dominio colonial espanol en la Nueva Granada.",
  },

  history: {
    en: "On August 7, 1819, the liberation army led by Simon Bolivar defeated the Spanish royalist forces at the Puente de Boyaca (Bridge of Boyaca) in present-day Boyaca department. The battle lasted only about two hours and resulted in relatively few casualties, but its strategic significance was enormous.\n\nThe victory opened the road to Bogota, which Bolivar's forces entered three days later on August 10. The Spanish viceroy fled, and the independence of New Granada (present-day Colombia) was effectively secured.\n\nThe Battle of Boyaca was part of Bolivar's brilliant Campaña Libertadora, which crossed the Andes from Venezuela. Today, the Puente de Boyaca site is a national monument with a memorial featuring statues of Bolivar and General Francisco de Paula Santander.",
    fr: "Le 7 aout 1819, l'armee de liberation dirigee par Simon Bolivar a vaincu les forces royalistes espagnoles au Puente de Boyaca. La bataille n'a dure qu'environ deux heures mais son importance strategique etait enorme.\n\nLa victoire a ouvert la route vers Bogota, ou les forces de Bolivar sont entrees trois jours plus tard. Le vice-roi espagnol a fui et l'independance de la Nouvelle-Grenade a ete assuree.\n\nLa Bataille de Boyaca faisait partie de la brillante Campagne Liberatrice de Bolivar, qui a traverse les Andes depuis le Venezuela.",
    es: "El 7 de agosto de 1819, el ejercito libertador liderado por Simon Bolivar derroto a las fuerzas realistas espanolas en el Puente de Boyaca en el actual departamento de Boyaca. La batalla duro solo unas dos horas y resulto en relativamente pocas bajas, pero su importancia estrategica fue enorme.\n\nLa victoria abrio el camino a Bogota, donde las fuerzas de Bolivar entraron tres dias despues el 10 de agosto. El virrey espanol huyo y la independencia de la Nueva Granada (actual Colombia) quedo efectivamente asegurada.\n\nLa Batalla de Boyaca fue parte de la brillante Campana Libertadora de Bolivar, que cruzo los Andes desde Venezuela. Hoy, el sitio del Puente de Boyaca es un monumento nacional con un memorial que incluye estatuas de Bolivar y el General Francisco de Paula Santander.",
  },

  traditions: {
    en: [
      'Attending the official ceremony at the Puente de Boyaca national monument',
      'Watching military celebrations and parades',
      'Presidential wreath-laying ceremony at the Boyaca bridge',
      'School presentations about the battle and Colombian independence',
      'Visiting Boyaca department and the battlefield site',
      'Displaying the Colombian flag in commemoration',
    ],
    fr: [
      'Assister a la ceremonie officielle au monument national du Puente de Boyaca',
      'Regarder les celebrations et defiles militaires',
      'Ceremonie presidentielle de depot de gerbes au pont de Boyaca',
      'Presentations scolaires sur la bataille et l\'independance colombienne',
      'Visiter le departement de Boyaca et le site de la bataille',
      'Afficher le drapeau colombien en commemoration',
    ],
    es: [
      'Asistir a la ceremonia oficial en el monumento nacional del Puente de Boyaca',
      'Ver las celebraciones y desfiles militares',
      'Ceremonia presidencial de deposito de ofrenda floral en el Puente de Boyaca',
      'Presentaciones escolares sobre la batalla y la independencia colombiana',
      'Visitar el departamento de Boyaca y el sitio de la batalla',
      'Colocar la bandera colombiana en conmemoracion',
    ],
  },

  funFacts: {
    en: [
      'The Battle of Boyaca lasted only about two hours yet changed the course of South American history.',
      'Bolivar\'s army crossed the freezing Paramo de Pisba in the Andes, losing many soldiers to hypothermia before reaching Boyaca.',
      'Only about 200 soldiers died in the battle, but the Spanish forces lost over 1,600 as prisoners.',
      'The Puente de Boyaca bridge that gives the battle its name still stands as a national monument.',
      'August 7 is also known as the "Birthday of the Republic" in Colombia.',
    ],
    fr: [
      'La Bataille de Boyaca n\'a dure qu\'environ deux heures mais a change le cours de l\'histoire sud-americaine.',
      'L\'armee de Bolivar a traverse le Paramo de Pisba gele dans les Andes, perdant de nombreux soldats avant Boyaca.',
      'Seulement environ 200 soldats sont morts dans la bataille, mais les forces espagnoles ont perdu plus de 1 600 prisonniers.',
      'Le Puente de Boyaca qui donne son nom a la bataille est toujours un monument national.',
      'Le 7 aout est aussi connu comme le "Jour de naissance de la Republique" en Colombie.',
    ],
    es: [
      'La Batalla de Boyaca duro solo unas dos horas pero cambio el curso de la historia sudamericana.',
      'El ejercito de Bolivar cruzo el helado Paramo de Pisba en los Andes, perdiendo muchos soldados por hipotermia antes de llegar a Boyaca.',
      'Solo murieron unos 200 soldados en la batalla, pero las fuerzas espanolas perdieron mas de 1.600 como prisioneros.',
      'El Puente de Boyaca que le da nombre a la batalla todavia se mantiene como monumento nacional.',
      'El 7 de agosto tambien es conocido como el "Cumpleanos de la Republica" en Colombia.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan a trip to the Puente de Boyaca national monument if possible',
      'Watch the official military ceremony broadcast on national television',
      'Learn about the Campana Libertadora and Bolivar\'s Andean crossing',
      'Display the Colombian flag on your home',
      'Visit local museums featuring independence-era exhibits',
    ],
    fr: [
      'Planifier un voyage au monument national du Puente de Boyaca si possible',
      'Regarder la ceremonie militaire officielle a la television nationale',
      'En savoir plus sur la Campagne Liberatrice et la traversee des Andes de Bolivar',
      'Afficher le drapeau colombien sur votre maison',
      'Visiter les musees locaux avec des expositions sur l\'independance',
    ],
    es: [
      'Planificar un viaje al monumento nacional del Puente de Boyaca si es posible',
      'Ver la ceremonia militar oficial transmitida por television nacional',
      'Conocer sobre la Campana Libertadora y el cruce de los Andes de Bolivar',
      'Colocar la bandera colombiana en la casa',
      'Visitar museos locales con exhibiciones de la era de la independencia',
    ],
  },

  relatedHolidays: ['co_independence-day', 'co_day-of-the-race'],

  seo: {
    en: {
      titleTemplate: 'Battle of Boyaca {year} Colombia — Countdown & History',
      descriptionTemplate: 'Battle of Boyaca {year} on August 7. History of the 1819 battle, Bolivar, and how Colombia celebrates.',
      keywords: ['Battle of Boyaca', 'August 7 Colombia', 'Simon Bolivar Colombia', 'Colombia independence battle', 'Colombia holidays'],
    },
    fr: {
      titleTemplate: 'Bataille de Boyaca {year} Colombie — Compte a rebours et histoire',
      descriptionTemplate: 'Bataille de Boyaca {year} le 7 aout. Histoire de la bataille de 1819 et Bolivar.',
      keywords: ['Bataille de Boyaca', '7 aout Colombie', 'Simon Bolivar', 'independance Colombie', 'festivos Colombia'],
    },
    es: {
      titleTemplate: 'Batalla de Boyaca {year} Colombia — Cuenta regresiva e historia',
      descriptionTemplate: 'Batalla de Boyaca {year} el 7 de agosto. Historia de la batalla de 1819, Bolivar y como Colombia celebra.',
      keywords: ['Batalla de Boyaca', '7 de agosto Colombia', 'Simon Bolivar Colombia', 'independencia Colombia', 'festivos Colombia'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Battle of Boyaca holiday {year}?', fr: 'Quand est le jour ferie de la Bataille de Boyaca {year} ?', es: 'Cuando es el festivo de la Batalla de Boyaca {year}?' },
      answer: {
        en: 'The Battle of Boyaca holiday {year} is on {date}. It is always August 7.',
        fr: 'Le jour ferie de la Bataille de Boyaca {year} est le {date}. C\'est toujours le 7 aout.',
        es: 'El festivo de la Batalla de Boyaca {year} es el {date}. Siempre es el 7 de agosto.',
      },
    },
    {
      question: { en: 'Who led the Battle of Boyaca?', fr: 'Qui a dirige la Bataille de Boyaca ?', es: 'Quien lidero la Batalla de Boyaca?' },
      answer: {
        en: 'Simon Bolivar, known as the Libertador, led the patriot forces at the Battle of Boyaca. He was supported by generals including Francisco de Paula Santander, who commanded the vanguard division.',
        fr: 'Simon Bolivar, connu comme le Libertador, a dirige les forces patriotes. Il etait soutenu par des generaux dont Francisco de Paula Santander.',
        es: 'Simon Bolivar, conocido como el Libertador, lidero las fuerzas patriotas en la Batalla de Boyaca. Fue apoyado por generales incluyendo a Francisco de Paula Santander, quien comando la division de vanguardia.',
      },
    },
    {
      question: { en: 'Where is the Puente de Boyaca?', fr: 'Ou se trouve le Puente de Boyaca ?', es: 'Donde queda el Puente de Boyaca?' },
      answer: {
        en: 'The Puente de Boyaca is located in Boyaca department, about 110 km northeast of Bogota on the road to Tunja. The site is a national monument with a memorial park featuring statues and a museum about the battle.',
        fr: 'Le Puente de Boyaca est situe dans le departement de Boyaca, a environ 110 km au nord-est de Bogota. Le site est un monument national avec un parc memorial.',
        es: 'El Puente de Boyaca esta ubicado en el departamento de Boyaca, a unos 110 km al noreste de Bogota en la via a Tunja. El sitio es un monumento nacional con un parque memorial que incluye estatuas y un museo sobre la batalla.',
      },
    },
    {
      question: { en: 'Is August 7 subject to the Ley Emiliani?', fr: 'Le 7 aout est-il soumis a la Ley Emiliani ?', es: 'El 7 de agosto esta sujeto a la Ley Emiliani?' },
      answer: {
        en: 'No. The Battle of Boyaca holiday is always observed on August 7 regardless of the day of the week. It is exempt from the Ley Emiliani, similar to Independence Day (July 20).',
        fr: 'Non. Le jour ferie de la Bataille de Boyaca est toujours observe le 7 aout. Il est exempt de la Ley Emiliani.',
        es: 'No. El festivo de la Batalla de Boyaca siempre se observa el 7 de agosto sin importar el dia de la semana. Esta exento de la Ley Emiliani, similar al Dia de la Independencia (20 de julio).',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\u2694\ufe0f',
};

// ---------------------------------------------------------------------------
// Day of the Race — October 12 (moved to Monday by Ley Emiliani)
// ---------------------------------------------------------------------------

const dayOfTheRace: HolidayData = {
  id: 'co_day-of-the-race',
  countryCode: 'co',
  slugs: { en: 'day-of-the-race', fr: 'jour-de-la-race', es: 'dia-de-la-raza' },
  names: { en: 'Day of the Race', fr: 'Jour de la Race', es: 'Dia de la Raza' },

  dateType: 'calculated',
  calculateDate: (year: number) => nextMonday(year, 10, 12),

  descriptions: {
    en: "Day of the Race (Dia de la Raza) on October 12 celebrates Colombia's cultural diversity and the encounter between the Old and New Worlds. Moved to the following Monday under the Ley Emiliani, it has evolved from commemorating Columbus's arrival to celebrating the rich multicultural heritage of Colombia.",
    fr: "Le Jour de la Race (Dia de la Raza), le 12 octobre, celebre la diversite culturelle de la Colombie et la rencontre entre l'Ancien et le Nouveau Monde. Deplace au lundi suivant en vertu de la Ley Emiliani, il a evolue pour celebrer le riche patrimoine multiculturel colombien.",
    es: "El Dia de la Raza, el 12 de octubre, celebra la diversidad cultural de Colombia y el encuentro entre el Viejo y el Nuevo Mundo. Trasladado al lunes siguiente segun la Ley Emiliani, ha evolucionado de conmemorar la llegada de Colon a celebrar la rica herencia multicultural de Colombia.",
  },

  history: {
    en: "Originally established to commemorate Christopher Columbus's arrival in the Americas on October 12, 1492, the holiday has undergone significant reinterpretation in Colombia and across Latin America. The traditional 'Dia de la Raza' framing celebrated the creation of a new 'cosmic race' through the mixing of European, indigenous, and African peoples.\n\nIn recent decades, Colombia has increasingly used the date to celebrate its remarkable cultural diversity. Colombia is home to over 100 indigenous groups, significant Afro-Colombian communities, and descendants of European, Middle Eastern, and Asian immigrants.\n\nThe Ley Emiliani moves this holiday to the following Monday, creating a puente festivo. Many cities host cultural events highlighting indigenous traditions, Afro-Colombian heritage, and the country's multicultural identity.",
    fr: "Initialement etabli pour commemorer l'arrivee de Christophe Colomb dans les Ameriques le 12 octobre 1492, le jour ferie a subi une reinterpretation significative en Colombie. La Colombie utilise de plus en plus cette date pour celebrer sa remarquable diversite culturelle.\n\nLa Colombie abrite plus de 100 groupes indigenes, d'importantes communautes afro-colombiennes et des descendants d'immigrants europeens, moyen-orientaux et asiatiques.\n\nLa Ley Emiliani deplace ce jour ferie au lundi suivant, creant un puente festivo.",
    es: "Originalmente establecido para conmemorar la llegada de Cristobal Colon a las Americas el 12 de octubre de 1492, el festivo ha experimentado una reinterpretacion significativa en Colombia y toda America Latina. El marco tradicional del 'Dia de la Raza' celebraba la creacion de una nueva 'raza cosmica' a traves de la mezcla de pueblos europeos, indigenas y africanos.\n\nEn decadas recientes, Colombia ha utilizado cada vez mas la fecha para celebrar su notable diversidad cultural. Colombia alberga mas de 100 grupos indigenas, significativas comunidades afrocolombianas y descendientes de inmigrantes europeos, de Medio Oriente y asiaticos.\n\nLa Ley Emiliani traslada este festivo al lunes siguiente, creando un puente festivo. Muchas ciudades organizan eventos culturales destacando las tradiciones indigenas, la herencia afrocolombiana y la identidad multicultural del pais.",
  },

  traditions: {
    en: [
      'Attending cultural festivals celebrating indigenous and Afro-Colombian heritage',
      'Visiting museums and exhibits about pre-Columbian cultures',
      'Participating in academic discussions about cultural identity and colonialism',
      'Enjoying traditional music, dance, and food from diverse Colombian cultures',
      'School presentations about Colombia\'s multicultural heritage',
      'Enjoying the puente festivo long weekend with family travel',
    ],
    fr: [
      'Assister a des festivals culturels celebrant le patrimoine indigene et afro-colombien',
      'Visiter des musees et expositions sur les cultures precolombiennes',
      'Participer a des discussions academiques sur l\'identite culturelle et le colonialisme',
      'Profiter de la musique, de la danse et de la cuisine des diverses cultures colombiennes',
      'Presentations scolaires sur le patrimoine multiculturel de la Colombie',
      'Profiter du puente festivo avec des voyages en famille',
    ],
    es: [
      'Asistir a festivales culturales que celebran la herencia indigena y afrocolombiana',
      'Visitar museos y exhibiciones sobre culturas precolombinas',
      'Participar en discusiones academicas sobre identidad cultural y colonialismo',
      'Disfrutar de musica, danza y comida tradicional de las diversas culturas colombianas',
      'Presentaciones escolares sobre la herencia multicultural de Colombia',
      'Disfrutar del puente festivo de fin de semana largo con viajes familiares',
    ],
  },

  funFacts: {
    en: [
      'Colombia has over 100 distinct indigenous groups speaking more than 65 native languages.',
      'The concept of "raza cosmica" (cosmic race) was coined by Mexican philosopher Jose Vasconcelos in 1925.',
      'Several Latin American countries have renamed this holiday — Argentina calls it "Day of Respect for Cultural Diversity."',
      'Colombia\'s Pacific coast is home to one of the largest Afro-descendant populations in the Americas.',
      'The Muisca people, who inhabited the Bogota highlands, inspired the legend of El Dorado.',
    ],
    fr: [
      'La Colombie compte plus de 100 groupes indigenes distincts parlant plus de 65 langues natives.',
      'Le concept de "raza cosmica" a ete invente par le philosophe mexicain Jose Vasconcelos en 1925.',
      'Plusieurs pays d\'Amerique latine ont renomme ce jour ferie — l\'Argentine l\'appelle "Jour du Respect de la Diversite Culturelle."',
      'La cote pacifique de la Colombie abrite l\'une des plus grandes populations afro-descendantes des Ameriques.',
      'Le peuple Muisca des hauts plateaux de Bogota a inspire la legende de l\'El Dorado.',
    ],
    es: [
      'Colombia tiene mas de 100 grupos indigenas distintos que hablan mas de 65 lenguas nativas.',
      'El concepto de "raza cosmica" fue acunado por el filosofo mexicano Jose Vasconcelos en 1925.',
      'Varios paises latinoamericanos han renombrado este festivo — Argentina lo llama "Dia del Respeto a la Diversidad Cultural."',
      'La costa pacifica de Colombia alberga una de las mayores poblaciones afrodescendientes de las Americas.',
      'El pueblo Muisca, que habitaba los altiplanos de Bogota, inspiro la leyenda de El Dorado.',
    ],
  },

  planningChecklist: {
    en: [
      'Check local cultural festival schedules in your city',
      'Plan a long weekend trip — it is a puente festivo',
      'Visit museums featuring pre-Columbian and indigenous art',
      'Explore Colombian multicultural cuisine from different regions',
      'Attend academic or community events about cultural diversity',
    ],
    fr: [
      'Verifier les programmes des festivals culturels locaux dans votre ville',
      'Planifier un voyage de long week-end — c\'est un puente festivo',
      'Visiter des musees presentant l\'art precolombien et indigene',
      'Explorer la cuisine multiculturelle colombienne de differentes regions',
      'Assister a des evenements academiques ou communautaires sur la diversite culturelle',
    ],
    es: [
      'Consultar los programas de festivales culturales locales en tu ciudad',
      'Planificar un viaje de fin de semana largo — es puente festivo',
      'Visitar museos con arte precolombino e indigena',
      'Explorar la cocina multicultural colombiana de diferentes regiones',
      'Asistir a eventos academicos o comunitarios sobre diversidad cultural',
    ],
  },

  relatedHolidays: ['co_independence-day', 'co_battle-of-boyaca'],

  seo: {
    en: {
      titleTemplate: 'Day of the Race {year} Colombia — Countdown & Guide',
      descriptionTemplate: 'Day of the Race {year} in Colombia. Cultural diversity celebration, Ley Emiliani date, and traditions.',
      keywords: ['Day of the Race Colombia', 'Dia de la Raza Colombia', 'October 12 Colombia', 'cultural diversity Colombia', 'Colombia holidays'],
    },
    fr: {
      titleTemplate: 'Jour de la Race {year} Colombie — Compte a rebours et guide',
      descriptionTemplate: 'Jour de la Race {year} en Colombie. Celebration de la diversite culturelle et traditions.',
      keywords: ['Jour de la Race Colombie', 'Dia de la Raza', '12 octobre Colombie', 'diversite culturelle Colombie', 'festivos Colombia'],
    },
    es: {
      titleTemplate: 'Dia de la Raza {year} Colombia — Cuenta regresiva y guia',
      descriptionTemplate: 'Dia de la Raza {year} en Colombia. Celebracion de la diversidad cultural, fecha Ley Emiliani y tradiciones.',
      keywords: ['Dia de la Raza Colombia', '12 de octubre Colombia', 'diversidad cultural Colombia', 'festivos Colombia', 'puente festivo'],
    },
  },

  faq: [
    {
      question: { en: 'When is Day of the Race {year} in Colombia?', fr: 'Quand est le Jour de la Race {year} en Colombie ?', es: 'Cuando es el Dia de la Raza {year} en Colombia?' },
      answer: {
        en: 'Day of the Race {year} in Colombia falls on {date}. Under the Ley Emiliani, it is moved to the Monday nearest to October 12.',
        fr: 'Le Jour de la Race {year} en Colombie tombe le {date}. En vertu de la Ley Emiliani, il est deplace au lundi le plus proche du 12 octobre.',
        es: 'El Dia de la Raza {year} en Colombia cae el {date}. Segun la Ley Emiliani, se traslada al lunes mas cercano al 12 de octubre.',
      },
    },
    {
      question: { en: 'Is Day of the Race controversial?', fr: 'Le Jour de la Race est-il controverse ?', es: 'Es controversial el Dia de la Raza?' },
      answer: {
        en: 'Yes. Many people and governments across Latin America have moved away from celebrating Columbus\'s arrival and instead emphasize indigenous rights and cultural diversity. Several countries have renamed the holiday to reflect this shift.',
        fr: 'Oui. De nombreuses personnes et gouvernements en Amerique latine se sont eloignes de la celebration de l\'arrivee de Colomb pour mettre l\'accent sur les droits des peuples indigenes et la diversite culturelle.',
        es: 'Si. Muchas personas y gobiernos en toda America Latina se han alejado de celebrar la llegada de Colon y en cambio enfatizan los derechos indigenas y la diversidad cultural. Varios paises han renombrado el festivo para reflejar este cambio.',
      },
    },
    {
      question: { en: 'What indigenous groups live in Colombia?', fr: 'Quels groupes indigenes vivent en Colombie ?', es: 'Que grupos indigenas viven en Colombia?' },
      answer: {
        en: 'Colombia is home to over 100 indigenous groups including the Wayuu, Embera, Nasa (Paez), Arhuaco, Kogi, and Muisca. They speak more than 65 native languages and represent about 4.4% of the national population.',
        fr: 'La Colombie abrite plus de 100 groupes indigenes dont les Wayuu, Embera, Nasa, Arhuaco, Kogi et Muisca. Ils parlent plus de 65 langues natives.',
        es: 'Colombia alberga mas de 100 grupos indigenas incluyendo los Wayuu, Embera, Nasa (Paez), Arhuaco, Kogi y Muisca. Hablan mas de 65 lenguas nativas y representan alrededor del 4,4% de la poblacion nacional.',
      },
    },
    {
      question: { en: 'Is Day of the Race subject to the Ley Emiliani?', fr: 'Le Jour de la Race est-il soumis a la Ley Emiliani ?', es: 'El Dia de la Raza esta sujeto a la Ley Emiliani?' },
      answer: {
        en: 'Yes. Day of the Race is one of the holidays moved to the following Monday under the Ley Emiliani, creating a puente festivo (long weekend) for Colombian workers.',
        fr: 'Oui. Le Jour de la Race est l\'un des jours feries deplaces au lundi suivant en vertu de la Ley Emiliani, creant un puente festivo.',
        es: 'Si. El Dia de la Raza es uno de los festivos trasladados al lunes siguiente segun la Ley Emiliani, creando un puente festivo para los trabajadores colombianos.',
      },
    },
  ],

  colorTheme: 'autumn',
  icon: '\ud83c\udf0e',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'co_christmas',
  countryCode: 'co',
  slugs: { en: 'christmas-day', fr: 'jour-de-noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Jour de Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is one of Colombia's most important holidays. The Christmas season in Colombia begins with the Novena de Aguinaldos from December 16-24, nine days of prayer, music, and community gatherings. Celebrations feature bunuelos, natilla, and elaborate alumbrados (light displays).",
    fr: "Le Jour de Noel, le 25 decembre, est l'un des jours feries les plus importants de Colombie. La saison de Noel en Colombie commence avec la Novena de Aguinaldos du 16 au 24 decembre. Les celebrations incluent des bunuelos, de la natilla et des alumbrados elabores.",
    es: "La Navidad, el 25 de diciembre, es uno de los festivos mas importantes de Colombia. La temporada navidena en Colombia comienza con la Novena de Aguinaldos del 16 al 24 de diciembre, nueve dias de oracion, musica y reuniones comunitarias. Las celebraciones incluyen bunuelos, natilla y elaborados alumbrados.",
  },

  history: {
    en: "Christmas in Colombia is profoundly shaped by Catholic tradition, particularly the Novena de Aguinaldos — a nine-day devotional prayer period from December 16 to December 24. Written by Fray Fernando de Jesus Larrea in 1743, the novena is prayed in homes, churches, and community gatherings every evening.\n\nThe Dia de las Velitas (Day of the Little Candles) on December 7 officially kicks off the Christmas season. Families light candles and paper lanterns on their doorsteps and windows, creating magical illuminated landscapes across the country.\n\nColombia's alumbrados (Christmas light displays) are world-renowned, with Medellin's lights along the Medellin River being considered among the most spectacular Christmas illuminations in the world, attracting millions of visitors.",
    fr: "Noel en Colombie est profondement marque par la tradition catholique, en particulier la Novena de Aguinaldos — une periode de prieres de neuf jours du 16 au 24 decembre. Ecrite par Fray Fernando de Jesus Larrea en 1743.\n\nLe Dia de las Velitas (Jour des Petites Bougies) le 7 decembre lance officiellement la saison de Noel. Les familles allument des bougies et des lanternes en papier.\n\nLes alumbrados de Colombie sont mondialement reconnus, en particulier ceux de Medellin le long de la riviere Medellin.",
    es: "La Navidad en Colombia esta profundamente marcada por la tradicion catolica, particularmente la Novena de Aguinaldos — un periodo devocional de oracion de nueve dias del 16 al 24 de diciembre. Escrita por Fray Fernando de Jesus Larrea en 1743, la novena se reza en hogares, iglesias y reuniones comunitarias cada noche.\n\nEl Dia de las Velitas (7 de diciembre) da inicio oficial a la temporada navidena. Las familias encienden velas y farolitos de papel en sus puertas y ventanas, creando paisajes iluminados magicos en todo el pais.\n\nLos alumbrados navidenos de Colombia son reconocidos mundialmente, con las luces de Medellin a lo largo del Rio Medellin consideradas entre las iluminaciones navidenas mas espectaculares del mundo, atrayendo millones de visitantes.",
  },

  traditions: {
    en: [
      'Praying the Novena de Aguinaldos every evening from December 16-24',
      'Lighting candles on doorsteps for Dia de las Velitas (December 7)',
      'Visiting the spectacular alumbrados (Christmas lights) in Medellin and other cities',
      'Eating bunuelos (cheese fritters) and natilla (custard) as traditional Christmas foods',
      'Celebrating Nochebuena (Christmas Eve) with a midnight family dinner',
      'Giving gifts at midnight on December 24',
      'Singing villancicos (Christmas carols) during the novena gatherings',
    ],
    fr: [
      'Prier la Novena de Aguinaldos chaque soir du 16 au 24 decembre',
      'Allumer des bougies sur les pas de porte pour le Dia de las Velitas (7 decembre)',
      'Visiter les spectaculaires alumbrados a Medellin et d\'autres villes',
      'Manger des bunuelos (beignets au fromage) et de la natilla (creme) comme aliments de Noel traditionnels',
      'Celebrer la Nochebuena (veille de Noel) avec un diner familial a minuit',
      'Offrir des cadeaux a minuit le 24 decembre',
      'Chanter des villancicos (chants de Noel) pendant les reunions de la novena',
    ],
    es: [
      'Rezar la Novena de Aguinaldos cada noche del 16 al 24 de diciembre',
      'Encender velas en las puertas para el Dia de las Velitas (7 de diciembre)',
      'Visitar los espectaculares alumbrados navidenos en Medellin y otras ciudades',
      'Comer bunuelos y natilla como comidas navidenas tradicionales',
      'Celebrar Nochebuena con una cena familiar a medianoche',
      'Dar regalos a medianoche el 24 de diciembre',
      'Cantar villancicos durante las reuniones de la novena',
    ],
  },

  funFacts: {
    en: [
      'Medellin\'s Christmas lights (alumbrados) use over 30 million LED lights and attract 4+ million visitors annually.',
      'The Novena de Aguinaldos has been prayed in Colombia since 1743 — over 280 years.',
      'Bunuelos and natilla are so synonymous with Christmas in Colombia that they are rarely eaten at other times of the year.',
      'The Dia de las Velitas on December 7 coincides with the Catholic feast of the Immaculate Conception.',
      'Colombian Christmas celebrations are among the longest in the world, spanning from December 7 to January 6.',
    ],
    fr: [
      'Les alumbrados de Medellin utilisent plus de 30 millions de LED et attirent plus de 4 millions de visiteurs par an.',
      'La Novena de Aguinaldos est priee en Colombie depuis 1743 — plus de 280 ans.',
      'Les bunuelos et la natilla sont tellement synonymes de Noel en Colombie qu\'ils sont rarement manges a d\'autres moments de l\'annee.',
      'Le Dia de las Velitas le 7 decembre coincide avec la fete catholique de l\'Immaculee Conception.',
      'Les celebrations de Noel colombiennes sont parmi les plus longues du monde, s\'etendant du 7 decembre au 6 janvier.',
    ],
    es: [
      'Los alumbrados de Medellin usan mas de 30 millones de luces LED y atraen mas de 4 millones de visitantes al ano.',
      'La Novena de Aguinaldos se reza en Colombia desde 1743 — mas de 280 anos.',
      'Los bunuelos y la natilla son tan sinonimos de Navidad en Colombia que rara vez se comen en otras epocas del ano.',
      'El Dia de las Velitas el 7 de diciembre coincide con la fiesta catolica de la Inmaculada Concepcion.',
      'Las celebraciones navidenas colombianas son de las mas largas del mundo, extendiendose del 7 de diciembre al 6 de enero.',
    ],
  },

  planningChecklist: {
    en: [
      'Start your Novena de Aguinaldos on December 16 with family or neighbors',
      'Prepare candles and lanterns for Dia de las Velitas on December 7',
      'Visit the alumbrados in Medellin or your nearest city early in December',
      'Stock up on bunuelos and natilla ingredients or order from local bakeries',
      'Plan your Nochebuena dinner menu and gifts for the midnight exchange',
    ],
    fr: [
      'Commencer la Novena de Aguinaldos le 16 decembre avec famille ou voisins',
      'Preparer des bougies et lanternes pour le Dia de las Velitas le 7 decembre',
      'Visiter les alumbrados a Medellin ou la ville la plus proche en debut decembre',
      'Se procurer des ingredients pour bunuelos et natilla ou commander chez les boulangeries',
      'Planifier le menu de Nochebuena et les cadeaux pour l\'echange de minuit',
    ],
    es: [
      'Comenzar la Novena de Aguinaldos el 16 de diciembre con familia o vecinos',
      'Preparar velas y farolitos para el Dia de las Velitas el 7 de diciembre',
      'Visitar los alumbrados en Medellin o la ciudad mas cercana a principios de diciembre',
      'Conseguir ingredientes para bunuelos y natilla o encargar en panaderias locales',
      'Planificar el menu de Nochebuena y los regalos para el intercambio de medianoche',
    ],
  },

  relatedHolidays: ['co_new-years-day', 'co_three-kings-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Colombia — Countdown & Traditions',
      descriptionTemplate: 'Christmas {year} in Colombia. Novena de Aguinaldos, Medellin alumbrados, bunuelos, natilla, and celebration guide.',
      keywords: ['Christmas Colombia', 'Navidad Colombia', 'Novena de Aguinaldos', 'Medellin Christmas lights', 'bunuelos natilla'],
    },
    fr: {
      titleTemplate: 'Noel {year} Colombie — Compte a rebours et traditions',
      descriptionTemplate: 'Noel {year} en Colombie. Novena de Aguinaldos, alumbrados de Medellin, bunuelos, natilla et guide.',
      keywords: ['Noel Colombie', 'Navidad Colombie', 'Novena de Aguinaldos', 'lumieres Medellin', 'traditions Noel Colombie'],
    },
    es: {
      titleTemplate: 'Navidad {year} Colombia — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Navidad {year} en Colombia. Novena de Aguinaldos, alumbrados de Medellin, bunuelos, natilla y guia.',
      keywords: ['Navidad Colombia', 'Novena de Aguinaldos', 'alumbrados Medellin', 'bunuelos natilla', 'festivos Colombia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Colombia?', fr: 'Quand est Noel {year} en Colombie ?', es: 'Cuando es Navidad {year} en Colombia?' },
      answer: {
        en: 'Christmas {year} in Colombia is on {date}. It is always December 25, though celebrations begin on December 7 (Dia de las Velitas) and the Novena starts December 16.',
        fr: 'Noel {year} en Colombie est le {date}. C\'est toujours le 25 decembre, bien que les celebrations commencent le 7 decembre (Dia de las Velitas) et la Novena commence le 16 decembre.',
        es: 'La Navidad {year} en Colombia es el {date}. Siempre es el 25 de diciembre, aunque las celebraciones comienzan el 7 de diciembre (Dia de las Velitas) y la Novena empieza el 16 de diciembre.',
      },
    },
    {
      question: { en: 'What is the Novena de Aguinaldos?', fr: 'Qu\'est-ce que la Novena de Aguinaldos ?', es: 'Que es la Novena de Aguinaldos?' },
      answer: {
        en: 'The Novena de Aguinaldos is a nine-day Christmas devotional prayer tradition in Colombia, prayed every evening from December 16 to December 24. Families and communities gather to pray, sing villancicos, and share food like bunuelos and natilla.',
        fr: 'La Novena de Aguinaldos est une tradition de prieres de Noel de neuf jours en Colombie, priee chaque soir du 16 au 24 decembre. Les familles et communautes se reunissent pour prier, chanter des villancicos et partager des plats.',
        es: 'La Novena de Aguinaldos es una tradicion de oracion devocional navidena de nueve dias en Colombia, rezada cada noche del 16 al 24 de diciembre. Las familias y comunidades se reunen para rezar, cantar villancicos y compartir comida como bunuelos y natilla.',
      },
    },
    {
      question: { en: 'What are the Medellin Christmas lights?', fr: 'Que sont les lumieres de Noel de Medellin ?', es: 'Que son los alumbrados de Medellin?' },
      answer: {
        en: "Medellin's alumbrados (Christmas lights) are a spectacular display using over 30 million LED lights along the Medellin River and throughout the city. They are considered among the world's most beautiful Christmas illuminations and attract over 4 million visitors annually.",
        fr: 'Les alumbrados de Medellin sont un spectacle utilisant plus de 30 millions de LED le long de la riviere Medellin. Ils sont consideres parmi les plus belles illuminations de Noel du monde.',
        es: 'Los alumbrados de Medellin son un espectaculo que usa mas de 30 millones de luces LED a lo largo del Rio Medellin y en toda la ciudad. Son considerados entre las iluminaciones navidenas mas hermosas del mundo y atraen mas de 4 millones de visitantes al ano.',
      },
    },
    {
      question: { en: 'What is Dia de las Velitas?', fr: 'Qu\'est-ce que le Dia de las Velitas ?', es: 'Que es el Dia de las Velitas?' },
      answer: {
        en: 'Dia de las Velitas (Day of the Little Candles) on December 7 marks the unofficial start of the Christmas season in Colombia. Families light candles and paper lanterns on their doorsteps, windows, and balconies, illuminating streets and neighborhoods across the country.',
        fr: 'Le Dia de las Velitas (Jour des Petites Bougies) le 7 decembre marque le debut officieux de la saison de Noel en Colombie. Les familles allument des bougies et des lanternes en papier sur leurs pas de porte.',
        es: 'El Dia de las Velitas (7 de diciembre) marca el inicio oficioso de la temporada navidena en Colombia. Las familias encienden velas y farolitos de papel en sus puertas, ventanas y balcones, iluminando calles y barrios en todo el pais.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const coHolidays: HolidayData[] = [
  newYearsDay,
  threeKingsDay,
  labourDay,
  independenceDay,
  battleOfBoyaca,
  dayOfTheRace,
  christmas,
];

export default coHolidays;
