/**
 * Senegal holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getEidAlFitrDate, getEidAlAdhaDate } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'sn_new-years-day',
  countryCode: 'sn',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Dia de Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the start of the calendar year in Senegal. It is a public holiday celebrated with family gatherings, festive meals, and prayers across the country.",
    fr: "Le Jour de l'An, le 1er janvier, marque le debut de l'annee civile au Senegal. C'est un jour ferie celebre par des reunions familiales, des repas festifs et des prieres a travers le pays.",
    es: 'El Dia de Ano Nuevo, el 1 de enero, marca el inicio del ano calendario en Senegal. Es un dia festivo celebrado con reuniones familiares, comidas festivas y oraciones en todo el pais.',
  },

  history: {
    en: "New Year's Day has been observed as a public holiday in Senegal since independence in 1960. The celebration blends secular festivities with religious observances, reflecting Senegal's diverse cultural heritage. In Dakar, Senegalese families gather for special meals and exchange greetings to mark the occasion.\n\nThe holiday is an opportunity for Senegalese of all faiths to come together. Both Muslim and Christian communities participate in the celebrations, which often include communal prayers and festive music. Street gatherings and outdoor concerts enliven the capital and other major cities.\n\nTraditional Senegalese hospitality, known as 'teranga,' shines on this day as neighbours and friends share food and good wishes for the year ahead.",
    fr: "Le Jour de l'An est observe comme jour ferie au Senegal depuis l'independance en 1960. La celebration melange festivites laiques et observances religieuses, refletant le patrimoine culturel diversifie du Senegal. A Dakar, les familles senegalaises se reunissent pour des repas speciaux et echangent des voeux a cette occasion.\n\nCette fete est une occasion pour les Senegalais de toutes confessions de se rassembler. Les communautes musulmanes et chretiennes participent aux celebrations, qui incluent souvent des prieres communautaires et de la musique festive. Des rassemblements de rue et des concerts en plein air animent la capitale et d'autres grandes villes.\n\nL'hospitalite traditionnelle senegalaise, connue sous le nom de 'teranga', brille en ce jour ou voisins et amis partagent nourriture et bons voeux pour l'annee a venir.",
    es: "El Dia de Ano Nuevo se ha observado como dia festivo en Senegal desde la independencia en 1960. La celebracion mezcla festividades seculares con observancias religiosas, reflejando el diverso patrimonio cultural de Senegal. En Dakar, las familias senegalesas se reunen para comidas especiales e intercambian saludos para la ocasion.\n\nLa festividad es una oportunidad para que los senegaleses de todas las confesiones se reunan. Las comunidades musulmanas y cristianas participan en las celebraciones, que a menudo incluyen oraciones comunitarias y musica festiva. Reuniones callejeras y conciertos al aire libre animan la capital y otras ciudades importantes.\n\nLa hospitalidad tradicional senegalesa, conocida como 'teranga', brilla en este dia cuando vecinos y amigos comparten comida y buenos deseos para el ano venidero.",
  },

  traditions: {
    en: [
      'Gathering with family for a festive meal featuring thieboudienne or yassa',
      'Exchanging New Year greetings and visiting neighbours in the spirit of teranga',
      'Attending prayer services at mosques and churches',
      'Enjoying live music performances and outdoor concerts in Dakar',
      'Children receiving new clothes and small gifts',
      'Sharing thiakry (millet couscous dessert) and other sweet treats',
    ],
    fr: [
      'Se reunir en famille pour un repas festif avec du thieboudienne ou du yassa',
      "Echanger des voeux de Nouvel An et rendre visite aux voisins dans l'esprit de la teranga",
      'Assister aux services de priere dans les mosquees et les eglises',
      'Profiter de concerts et de spectacles musicaux en plein air a Dakar',
      'Les enfants recoivent de nouveaux vetements et de petits cadeaux',
      'Partager du thiakry (dessert de couscous de mil) et d\'autres douceurs',
    ],
    es: [
      'Reunirse en familia para una comida festiva con thieboudienne o yassa',
      'Intercambiar saludos de Ano Nuevo y visitar a los vecinos en el espiritu de la teranga',
      'Asistir a servicios de oracion en mezquitas e iglesias',
      'Disfrutar de conciertos y espectaculos musicales al aire libre en Dakar',
      'Los ninos reciben ropa nueva y pequenos regalos',
      'Compartir thiakry (postre de cuscus de mijo) y otras golosinas',
    ],
  },

  funFacts: {
    en: [
      "Senegal's teranga (hospitality) culture means neighbours often share meals on New Year's Day, regardless of religion.",
      'Dakar hosts some of the liveliest New Year celebrations in West Africa, with concerts along the Corniche.',
      'Many Senegalese families prepare thieboudienne, the national dish, as part of their New Year feast.',
      "Senegal is one of Africa's most religiously tolerant countries, with Muslim and Christian families celebrating together.",
      "The island of Goree, a UNESCO World Heritage Site near Dakar, holds special New Year's events each year.",
    ],
    fr: [
      "La culture de la teranga (hospitalite) senegalaise fait que les voisins partagent souvent des repas le Jour de l'An, quelle que soit la religion.",
      "Dakar accueille certaines des celebrations du Nouvel An les plus animees d'Afrique de l'Ouest, avec des concerts le long de la Corniche.",
      "De nombreuses familles senegalaises preparent du thieboudienne, le plat national, dans le cadre de leur festin du Nouvel An.",
      "Le Senegal est l'un des pays les plus tolerants religieusement en Afrique, avec des familles musulmanes et chretiennes celebrant ensemble.",
      "L'ile de Goree, site du patrimoine mondial de l'UNESCO pres de Dakar, organise des evenements speciaux du Nouvel An chaque annee.",
    ],
    es: [
      'La cultura de la teranga (hospitalidad) senegalesa hace que los vecinos compartan comidas el Dia de Ano Nuevo, sin importar la religion.',
      'Dakar alberga algunas de las celebraciones de Ano Nuevo mas animadas de Africa Occidental, con conciertos a lo largo de la Corniche.',
      'Muchas familias senegalesas preparan thieboudienne, el plato nacional, como parte de su festin de Ano Nuevo.',
      'Senegal es uno de los paises mas tolerantes religiosamente de Africa, con familias musulmanas y cristianas celebrando juntas.',
      'La isla de Goree, sitio del Patrimonio Mundial de la UNESCO cerca de Dakar, celebra eventos especiales de Ano Nuevo cada ano.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan family gatherings and confirm guest lists in advance',
      'Purchase ingredients for traditional Senegalese dishes like thieboudienne and yassa',
      'Buy new clothes for children to wear on New Year\'s Day',
      'Check local event listings for concerts and celebrations in Dakar',
      'Prepare sweet treats like thiakry to share with visitors',
    ],
    fr: [
      "Planifier les reunions familiales et confirmer les listes d'invites a l'avance",
      'Acheter les ingredients pour les plats traditionnels senegalais comme le thieboudienne et le yassa',
      "Acheter de nouveaux vetements pour les enfants a porter le Jour de l'An",
      'Consulter les programmes locaux pour les concerts et celebrations a Dakar',
      'Preparer des douceurs comme le thiakry a partager avec les visiteurs',
    ],
    es: [
      'Planificar reuniones familiares y confirmar listas de invitados con anticipacion',
      'Comprar ingredientes para platos tradicionales senegaleses como thieboudienne y yassa',
      'Comprar ropa nueva para los ninos para el Dia de Ano Nuevo',
      'Consultar los programas locales de conciertos y celebraciones en Dakar',
      'Preparar dulces como thiakry para compartir con los visitantes',
    ],
  },

  relatedHolidays: ['sn_christmas', 'sn_eid-al-fitr'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Senegal — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Senegal? Live countdown to January 1, holiday info, and celebration guide.",
      keywords: ["New Year's Day Senegal", 'Senegal public holidays', 'Jour de l\'An Senegal', "New Year's Day Dakar", 'Senegal holidays'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Senegal — Compte a rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} au Senegal ? Compte a rebours, informations sur le jour ferie et guide de celebration.",
      keywords: ["Jour de l'An Senegal", 'jours feries Senegal', 'Nouvel An Dakar', 'fetes senegalaises', 'Senegal ferie'],
    },
    es: {
      titleTemplate: 'Dia de Ano Nuevo {year} Senegal — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia de Ano Nuevo {year} en Senegal? Cuenta regresiva, informacion del dia festivo y guia de celebracion.',
      keywords: ['Ano Nuevo Senegal', 'dias festivos Senegal', 'feriados Senegal', 'Ano Nuevo Dakar', 'fiestas senegalesas'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Senegal?", fr: "Quand est le Jour de l'An {year} au Senegal ?", es: 'Cuando es el Dia de Ano Nuevo {year} en Senegal?' },
      answer: {
        en: "New Year's Day {year} in Senegal is on {date}. It is always January 1 and is a national public holiday.",
        fr: "Le Jour de l'An {year} au Senegal est le {date}. C'est toujours le 1er janvier et c'est un jour ferie national.",
        es: 'El Dia de Ano Nuevo {year} en Senegal es el {date}. Siempre es el 1 de enero y es un dia festivo nacional.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Senegal?", fr: "Le Jour de l'An est-il un jour ferie au Senegal ?", es: 'Es el Dia de Ano Nuevo un dia festivo en Senegal?' },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in Senegal. Government offices, banks, and most businesses are closed.",
        fr: "Oui, le Jour de l'An est un jour ferie officiel au Senegal. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.",
        es: 'Si, el Dia de Ano Nuevo es un dia festivo oficial en Senegal. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.',
      },
    },
    {
      question: { en: 'How do Senegalese celebrate New Year?', fr: 'Comment les Senegalais celebrent-ils le Nouvel An ?', es: 'Como celebran los senegaleses el Ano Nuevo?' },
      answer: {
        en: "Senegalese celebrate with family meals featuring traditional dishes, prayer services, and outdoor festivities. Dakar hosts concerts and gatherings, and the spirit of teranga means sharing food and good wishes with neighbours.",
        fr: "Les Senegalais celebrent avec des repas familiaux mettant en vedette des plats traditionnels, des services de priere et des festivites en plein air. Dakar accueille des concerts et des rassemblements, et l'esprit de teranga signifie partager nourriture et bons voeux avec les voisins.",
        es: 'Los senegaleses celebran con comidas familiares con platos tradicionales, servicios de oracion y festividades al aire libre. Dakar alberga conciertos y reuniones, y el espiritu de teranga significa compartir comida y buenos deseos con los vecinos.',
      },
    },
    {
      question: { en: 'What is teranga?', fr: "Qu'est-ce que la teranga ?", es: 'Que es la teranga?' },
      answer: {
        en: "Teranga is a Wolof word meaning hospitality and generosity. It is considered the defining cultural value of Senegal, emphasising the importance of welcoming guests and sharing with others.",
        fr: "La teranga est un mot wolof signifiant hospitalite et generosite. C'est considere comme la valeur culturelle definissant le Senegal, soulignant l'importance d'accueillir les invites et de partager avec les autres.",
        es: 'Teranga es una palabra wolof que significa hospitalidad y generosidad. Se considera el valor cultural definitorio de Senegal, enfatizando la importancia de dar la bienvenida a los huespedes y compartir con los demas.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '🎆',
};

// ---------------------------------------------------------------------------
// Independence Day — April 4
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'sn_independence-day',
  countryCode: 'sn',
  slugs: { en: 'independence-day', fr: 'fete-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Fete de l'Independance", es: 'Dia de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 4,
  fixedDay: 4,

  descriptions: {
    en: "Independence Day on April 4 commemorates Senegal's independence from France in 1960. It is the most important national holiday, celebrated with military parades, cultural performances, and patriotic events across the country.",
    fr: "La Fete de l'Independance, le 4 avril, commemore l'independance du Senegal vis-a-vis de la France en 1960. C'est la fete nationale la plus importante, celebree par des defiles militaires, des spectacles culturels et des evenements patriotiques a travers le pays.",
    es: "El Dia de la Independencia, el 4 de abril, conmemora la independencia de Senegal de Francia en 1960. Es la fiesta nacional mas importante, celebrada con desfiles militares, espectaculos culturales y eventos patrioticos en todo el pais.",
  },

  history: {
    en: "Senegal gained independence from France on April 4, 1960, with Leopold Sedar Senghor becoming the country's first president. Senghor, a renowned poet and intellectual, led the country for two decades and championed the concept of Negritude, celebrating African culture and identity.\n\nThe path to independence was relatively peaceful compared to many African nations. Senegal initially formed a federation with Mali (the Mali Federation), which dissolved after just two months, leading Senegal to become a fully sovereign nation. Senghor's leadership established Senegal as one of Africa's most stable democracies.\n\nToday, April 4 is marked by a grand military parade at Place de la Nation in Dakar, attended by the president and dignitaries. The day celebrates not only political independence but also the rich cultural heritage that defines Senegalese identity.",
    fr: "Le Senegal a obtenu son independance de la France le 4 avril 1960, avec Leopold Sedar Senghor devenant le premier president du pays. Senghor, poete et intellectuel renomme, a dirige le pays pendant deux decennies et a defendu le concept de Negritude, celebrant la culture et l'identite africaines.\n\nLe chemin vers l'independance a ete relativement pacifique compare a de nombreuses nations africaines. Le Senegal a d'abord forme une federation avec le Mali (la Federation du Mali), qui s'est dissoute apres seulement deux mois, conduisant le Senegal a devenir une nation pleinement souveraine. Le leadership de Senghor a etabli le Senegal comme l'une des democraties les plus stables d'Afrique.\n\nAujourd'hui, le 4 avril est marque par un grand defile militaire a la Place de la Nation a Dakar, auquel assistent le president et les dignitaires. Cette journee celebre non seulement l'independance politique mais aussi le riche patrimoine culturel qui definit l'identite senegalaise.",
    es: "Senegal obtuvo su independencia de Francia el 4 de abril de 1960, con Leopold Sedar Senghor convirtiendose en el primer presidente del pais. Senghor, un poeta e intelectual renombrado, dirigio el pais durante dos decadas y defendio el concepto de Negritud, celebrando la cultura e identidad africanas.\n\nEl camino hacia la independencia fue relativamente pacifico comparado con muchas naciones africanas. Senegal inicialmente formo una federacion con Mali (la Federacion de Mali), que se disolvio despues de solo dos meses, llevando a Senegal a convertirse en una nacion plenamente soberana. El liderazgo de Senghor establecio a Senegal como una de las democracias mas estables de Africa.\n\nHoy, el 4 de abril se marca con un gran desfile militar en la Place de la Nation en Dakar, al que asisten el presidente y dignatarios. El dia celebra no solo la independencia politica sino tambien el rico patrimonio cultural que define la identidad senegalesa.",
  },

  traditions: {
    en: [
      'Watching the grand military parade at Place de la Nation in Dakar',
      'Attending cultural performances featuring sabar drumming and traditional dance',
      'Displaying the Senegalese flag on homes and public buildings',
      'Listening to presidential addresses and patriotic speeches',
      'Enjoying community gatherings with traditional music and food',
      'School children performing in parades and cultural shows',
      'Reflecting on the legacy of Leopold Sedar Senghor and independence heroes',
    ],
    fr: [
      'Regarder le grand defile militaire a la Place de la Nation a Dakar',
      'Assister a des spectacles culturels avec du sabar et de la danse traditionnelle',
      'Afficher le drapeau senegalais sur les maisons et les batiments publics',
      'Ecouter les discours presidentiels et les allocutions patriotiques',
      'Profiter de rassemblements communautaires avec musique et cuisine traditionnelles',
      'Les ecoliers participant a des defiles et des spectacles culturels',
      "Reflechir a l'heritage de Leopold Sedar Senghor et des heros de l'independance",
    ],
    es: [
      'Ver el gran desfile militar en la Place de la Nation en Dakar',
      'Asistir a espectaculos culturales con tambores sabar y danza tradicional',
      'Exhibir la bandera senegalesa en hogares y edificios publicos',
      'Escuchar discursos presidenciales y alocuciones patrioticas',
      'Disfrutar de reuniones comunitarias con musica y comida tradicionales',
      'Los escolares participando en desfiles y espectaculos culturales',
      'Reflexionar sobre el legado de Leopold Sedar Senghor y los heroes de la independencia',
    ],
  },

  funFacts: {
    en: [
      'Leopold Sedar Senghor was the first African elected to the Academie francaise, one of France\'s highest literary honours.',
      'Senegal is one of the few African countries that has never experienced a military coup.',
      'The Senegalese flag features green, yellow, and red stripes with a green star, symbolising hope, wealth, and sacrifice.',
      'Senghor voluntarily stepped down from power in 1980, making him one of the first African leaders to do so peacefully.',
      'The Mali Federation, which Senegal briefly joined, lasted only from June to August 1960.',
    ],
    fr: [
      "Leopold Sedar Senghor a ete le premier Africain elu a l'Academie francaise, l'une des plus hautes distinctions litteraires de France.",
      "Le Senegal est l'un des rares pays africains a n'avoir jamais connu de coup d'Etat militaire.",
      "Le drapeau senegalais presente des bandes vertes, jaunes et rouges avec une etoile verte, symbolisant l'espoir, la richesse et le sacrifice.",
      "Senghor a volontairement quitte le pouvoir en 1980, faisant de lui l'un des premiers dirigeants africains a le faire pacifiquement.",
      "La Federation du Mali, a laquelle le Senegal a brievement adhere, n'a dure que de juin a aout 1960.",
    ],
    es: [
      'Leopold Sedar Senghor fue el primer africano elegido a la Academia Francesa, uno de los mas altos honores literarios de Francia.',
      'Senegal es uno de los pocos paises africanos que nunca ha experimentado un golpe de estado militar.',
      'La bandera senegalesa presenta franjas verdes, amarillas y rojas con una estrella verde, simbolizando esperanza, riqueza y sacrificio.',
      'Senghor renuncio voluntariamente al poder en 1980, convirtiendose en uno de los primeros lideres africanos en hacerlo pacificamente.',
      'La Federacion de Mali, a la que Senegal se unio brevemente, duro solo de junio a agosto de 1960.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the schedule for the military parade at Place de la Nation',
      'Plan to attend cultural performances and community events',
      'Display the Senegalese flag at home or on your vehicle',
      'Prepare traditional Senegalese dishes for family gatherings',
      'Learn about independence history to share with children',
    ],
    fr: [
      'Verifier le programme du defile militaire a la Place de la Nation',
      'Prevoir d\'assister aux spectacles culturels et evenements communautaires',
      'Afficher le drapeau senegalais a la maison ou sur votre vehicule',
      'Preparer des plats traditionnels senegalais pour les reunions familiales',
      "S'informer sur l'histoire de l'independance pour la partager avec les enfants",
    ],
    es: [
      'Consultar el horario del desfile militar en la Place de la Nation',
      'Planificar asistir a espectaculos culturales y eventos comunitarios',
      'Exhibir la bandera senegalesa en casa o en su vehiculo',
      'Preparar platos tradicionales senegaleses para reuniones familiares',
      'Aprender sobre la historia de la independencia para compartir con los ninos',
    ],
  },

  relatedHolidays: ['sn_labour-day', 'sn_eid-al-fitr'],

  seo: {
    en: {
      titleTemplate: 'Senegal Independence Day {year} — Countdown & History',
      descriptionTemplate: 'When is Senegal Independence Day {year}? Live countdown to April 4, history of independence from France, and celebration guide.',
      keywords: ['Senegal Independence Day', 'April 4 Senegal', 'Senegal national holiday', 'Senghor independence', 'Senegal holidays'],
    },
    fr: {
      titleTemplate: "Fete de l'Independance du Senegal {year} — Compte a rebours et histoire",
      descriptionTemplate: "Quand est la Fete de l'Independance du Senegal {year} ? Compte a rebours jusqu'au 4 avril, histoire de l'independance et guide de celebration.",
      keywords: ["Fete de l'Independance Senegal", '4 avril Senegal', 'fete nationale Senegal', 'independance Senegal', 'jours feries Senegal'],
    },
    es: {
      titleTemplate: 'Dia de la Independencia de Senegal {year} — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de la Independencia de Senegal {year}? Cuenta regresiva hasta el 4 de abril, historia de la independencia y guia de celebracion.',
      keywords: ['Dia de la Independencia Senegal', '4 de abril Senegal', 'fiesta nacional Senegal', 'independencia Senegal', 'dias festivos Senegal'],
    },
  },

  faq: [
    {
      question: { en: 'When is Senegal Independence Day {year}?', fr: "Quand est la Fete de l'Independance du Senegal {year} ?", es: 'Cuando es el Dia de la Independencia de Senegal {year}?' },
      answer: {
        en: 'Senegal Independence Day {year} is on {date}. It is always April 4, commemorating independence from France in 1960.',
        fr: "La Fete de l'Independance du Senegal {year} est le {date}. C'est toujours le 4 avril, commemorant l'independance de la France en 1960.",
        es: 'El Dia de la Independencia de Senegal {year} es el {date}. Siempre es el 4 de abril, conmemorando la independencia de Francia en 1960.',
      },
    },
    {
      question: { en: 'Who was the first president of Senegal?', fr: 'Qui a ete le premier president du Senegal ?', es: 'Quien fue el primer presidente de Senegal?' },
      answer: {
        en: 'Leopold Sedar Senghor was the first president of Senegal, serving from 1960 to 1980. He was also a celebrated poet and a champion of the Negritude movement.',
        fr: 'Leopold Sedar Senghor a ete le premier president du Senegal, servant de 1960 a 1980. Il etait egalement un poete celebre et un champion du mouvement de la Negritude.',
        es: 'Leopold Sedar Senghor fue el primer presidente de Senegal, sirviendo de 1960 a 1980. Tambien fue un poeta celebrado y un defensor del movimiento de la Negritud.',
      },
    },
    {
      question: { en: 'How is Independence Day celebrated in Senegal?', fr: "Comment est celebree la Fete de l'Independance au Senegal ?", es: 'Como se celebra el Dia de la Independencia en Senegal?' },
      answer: {
        en: 'Independence Day is celebrated with a grand military parade at Place de la Nation in Dakar, cultural performances, sabar drumming, traditional dance, and community gatherings throughout the country.',
        fr: "La Fete de l'Independance est celebree par un grand defile militaire a la Place de la Nation a Dakar, des spectacles culturels, du sabar, de la danse traditionnelle et des rassemblements communautaires a travers le pays.",
        es: 'El Dia de la Independencia se celebra con un gran desfile militar en la Place de la Nation en Dakar, espectaculos culturales, tambores sabar, danza tradicional y reuniones comunitarias en todo el pais.',
      },
    },
    {
      question: { en: 'What is Negritude?', fr: "Qu'est-ce que la Negritude ?", es: 'Que es la Negritud?' },
      answer: {
        en: 'Negritude is a literary and intellectual movement co-founded by Leopold Sedar Senghor that celebrates African culture, identity, and heritage. It was a response to French colonialism and sought to affirm the value and beauty of Black African civilisation.',
        fr: "La Negritude est un mouvement litteraire et intellectuel cofonde par Leopold Sedar Senghor qui celebre la culture, l'identite et le patrimoine africains. C'etait une reponse au colonialisme francais et cherchait a affirmer la valeur et la beaute de la civilisation noire africaine.",
        es: 'La Negritud es un movimiento literario e intelectual cofundado por Leopold Sedar Senghor que celebra la cultura, identidad y patrimonio africanos. Fue una respuesta al colonialismo frances y buscaba afirmar el valor y la belleza de la civilizacion negra africana.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '🇸🇳',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'sn_labour-day',
  countryCode: 'sn',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fete du Travail', es: 'Dia del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 honours workers and the labour movement in Senegal. Known as Fete du Travail, it is a public holiday marked by trade union rallies, workers' marches, and celebrations of workers' rights.",
    fr: "La Fete du Travail, le 1er mai, honore les travailleurs et le mouvement ouvrier au Senegal. C'est un jour ferie marque par des rassemblements syndicaux, des marches de travailleurs et des celebrations des droits des travailleurs.",
    es: "El Dia del Trabajo, el 1 de mayo, honra a los trabajadores y al movimiento obrero en Senegal. Conocido como Fete du Travail, es un dia festivo marcado por concentraciones sindicales, marchas de trabajadores y celebraciones de los derechos laborales.",
  },

  history: {
    en: "Labour Day has been celebrated in Senegal since independence, following the French tradition of observing May 1 as a workers' holiday. The Senegalese labour movement has deep roots in the colonial era, when workers organised to demand better conditions and fair treatment.\n\nThe trade unions of Senegal played a significant role in the independence movement, and Labour Day continues to be an important day for workers' advocacy. Major unions organise marches and rallies to highlight labour issues and call for improved working conditions.\n\nThe holiday reflects Senegal's strong tradition of social dialogue and collective bargaining, with the government, employers, and unions regularly engaging in negotiations on labour policy.",
    fr: "La Fete du Travail est celebree au Senegal depuis l'independance, suivant la tradition francaise d'observer le 1er mai comme jour des travailleurs. Le mouvement ouvrier senegalais a des racines profondes dans l'ere coloniale, quand les travailleurs s'organisaient pour exiger de meilleures conditions et un traitement equitable.\n\nLes syndicats du Senegal ont joue un role significatif dans le mouvement d'independance, et la Fete du Travail continue d'etre un jour important pour la defense des travailleurs. Les grands syndicats organisent des marches et des rassemblements pour souligner les questions de travail et appeler a l'amelioration des conditions de travail.\n\nCette fete reflete la forte tradition senegalaise de dialogue social et de negociation collective, avec le gouvernement, les employeurs et les syndicats engages regulierement dans des negociations sur la politique du travail.",
    es: "El Dia del Trabajo se celebra en Senegal desde la independencia, siguiendo la tradicion francesa de observar el 1 de mayo como dia de los trabajadores. El movimiento obrero senegales tiene raices profundas en la era colonial, cuando los trabajadores se organizaron para exigir mejores condiciones y trato justo.\n\nLos sindicatos de Senegal jugaron un papel significativo en el movimiento de independencia, y el Dia del Trabajo sigue siendo un dia importante para la defensa de los trabajadores. Los principales sindicatos organizan marchas y concentraciones para destacar los problemas laborales y pedir mejores condiciones de trabajo.\n\nLa festividad refleja la fuerte tradicion senegalesa de dialogo social y negociacion colectiva, con el gobierno, los empleadores y los sindicatos participando regularmente en negociaciones sobre politica laboral.",
  },

  traditions: {
    en: [
      'Trade union rallies and marches through major cities',
      'Presidential and government speeches addressing workers\' issues',
      'Celebrations and picnics organised by worker associations',
      'Cultural performances honouring the working class',
      'Radio and television broadcasts covering labour themes',
    ],
    fr: [
      'Rassemblements syndicaux et marches a travers les grandes villes',
      'Discours presidentiels et gouvernementaux traitant des questions des travailleurs',
      'Celebrations et pique-niques organises par les associations de travailleurs',
      'Spectacles culturels honorant la classe ouvriere',
      'Emissions de radio et de television couvrant les themes du travail',
    ],
    es: [
      'Concentraciones sindicales y marchas por las principales ciudades',
      'Discursos presidenciales y gubernamentales sobre temas laborales',
      'Celebraciones y picnics organizados por asociaciones de trabajadores',
      'Espectaculos culturales en honor a la clase trabajadora',
      'Transmisiones de radio y television cubriendo temas laborales',
    ],
  },

  funFacts: {
    en: [
      'Senegal has one of the most active labour movements in Francophone Africa.',
      'The first major workers\' strike in Senegal occurred in 1947 on the Dakar-Niger railway, inspiring the novel "God\'s Bits of Wood" by Ousmane Sembene.',
      'Senegal\'s minimum wage is set through tripartite negotiations between the government, employers, and unions.',
      'May 1 is a public holiday in nearly every Francophone African country, following the French tradition.',
      'The CNTS (Confederation Nationale des Travailleurs du Senegal) is one of the oldest trade unions in West Africa.',
    ],
    fr: [
      "Le Senegal a l'un des mouvements ouvriers les plus actifs d'Afrique francophone.",
      "La premiere grande greve ouvriere au Senegal a eu lieu en 1947 sur le chemin de fer Dakar-Niger, inspirant le roman \"Les Bouts de bois de Dieu\" d'Ousmane Sembene.",
      "Le salaire minimum du Senegal est fixe par des negociations tripartites entre le gouvernement, les employeurs et les syndicats.",
      "Le 1er mai est un jour ferie dans presque tous les pays d'Afrique francophone, suivant la tradition francaise.",
      "La CNTS (Confederation Nationale des Travailleurs du Senegal) est l'un des plus anciens syndicats d'Afrique de l'Ouest.",
    ],
    es: [
      'Senegal tiene uno de los movimientos laborales mas activos del Africa francofona.',
      'La primera gran huelga de trabajadores en Senegal ocurrio en 1947 en el ferrocarril Dakar-Niger, inspirando la novela "Los trozos de madera de Dios" de Ousmane Sembene.',
      'El salario minimo de Senegal se fija mediante negociaciones tripartitas entre el gobierno, los empleadores y los sindicatos.',
      'El 1 de mayo es dia festivo en casi todos los paises del Africa francofona, siguiendo la tradicion francesa.',
      'La CNTS (Confederacion Nacional de Trabajadores de Senegal) es uno de los sindicatos mas antiguos de Africa Occidental.',
    ],
  },

  planningChecklist: {
    en: [
      'Check for union marches and rallies in your area',
      'Plan a day of rest and family activities',
      'Follow media coverage of Labour Day speeches and events',
      'Prepare a picnic or outdoor meal for the holiday',
      'Learn about Senegal\'s labour history and workers\' rights',
    ],
    fr: [
      'Verifier les marches et rassemblements syndicaux dans votre region',
      'Planifier une journee de repos et d\'activites familiales',
      'Suivre la couverture mediatique des discours et evenements de la Fete du Travail',
      'Preparer un pique-nique ou un repas en plein air pour le jour ferie',
      "S'informer sur l'histoire du travail au Senegal et les droits des travailleurs",
    ],
    es: [
      'Verificar las marchas y concentraciones sindicales en su area',
      'Planificar un dia de descanso y actividades familiares',
      'Seguir la cobertura mediatica de los discursos y eventos del Dia del Trabajo',
      'Preparar un picnic o comida al aire libre para el dia festivo',
      'Aprender sobre la historia laboral de Senegal y los derechos de los trabajadores',
    ],
  },

  relatedHolidays: ['sn_independence-day', 'sn_eid-al-fitr'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Senegal — Countdown & Guide',
      descriptionTemplate: 'When is Labour Day {year} in Senegal? Live countdown to May 1, Fete du Travail history, and celebration guide.',
      keywords: ['Labour Day Senegal', 'Fete du Travail Senegal', 'May 1 Senegal', 'Senegal workers holiday', 'Senegal public holidays'],
    },
    fr: {
      titleTemplate: 'Fete du Travail {year} Senegal — Compte a rebours et guide',
      descriptionTemplate: 'Quand est la Fete du Travail {year} au Senegal ? Compte a rebours jusqu\'au 1er mai, histoire et guide de celebration.',
      keywords: ['Fete du Travail Senegal', '1er mai Senegal', 'jour ferie Senegal', 'travailleurs Senegal', 'jours feries Senegal'],
    },
    es: {
      titleTemplate: 'Dia del Trabajo {year} Senegal — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia del Trabajo {year} en Senegal? Cuenta regresiva hasta el 1 de mayo, historia y guia de celebracion.',
      keywords: ['Dia del Trabajo Senegal', '1 de mayo Senegal', 'dia festivo Senegal', 'trabajadores Senegal', 'feriados Senegal'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Senegal?', fr: 'Quand est la Fete du Travail {year} au Senegal ?', es: 'Cuando es el Dia del Trabajo {year} en Senegal?' },
      answer: {
        en: 'Labour Day {year} in Senegal is on {date}. It is always May 1 and is a national public holiday.',
        fr: 'La Fete du Travail {year} au Senegal est le {date}. C\'est toujours le 1er mai et c\'est un jour ferie national.',
        es: 'El Dia del Trabajo {year} en Senegal es el {date}. Siempre es el 1 de mayo y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Senegal?', fr: 'La Fete du Travail est-elle un jour ferie au Senegal ?', es: 'Es el Dia del Trabajo un dia festivo en Senegal?' },
      answer: {
        en: 'Yes, Labour Day (Fete du Travail) is an official public holiday in Senegal. Businesses, schools, and government offices are closed.',
        fr: 'Oui, la Fete du Travail est un jour ferie officiel au Senegal. Les entreprises, les ecoles et les bureaux gouvernementaux sont fermes.',
        es: 'Si, el Dia del Trabajo (Fete du Travail) es un dia festivo oficial en Senegal. Los negocios, escuelas y oficinas gubernamentales estan cerrados.',
      },
    },
    {
      question: { en: 'What happens on Labour Day in Senegal?', fr: 'Que se passe-t-il lors de la Fete du Travail au Senegal ?', es: 'Que sucede el Dia del Trabajo en Senegal?' },
      answer: {
        en: 'Labour Day in Senegal features trade union rallies, workers\' marches, presidential speeches on labour issues, and cultural events celebrating workers\' contributions to the nation.',
        fr: 'La Fete du Travail au Senegal comprend des rassemblements syndicaux, des marches de travailleurs, des discours presidentiels sur les questions du travail et des evenements culturels celebrant les contributions des travailleurs a la nation.',
        es: 'El Dia del Trabajo en Senegal incluye concentraciones sindicales, marchas de trabajadores, discursos presidenciales sobre temas laborales y eventos culturales que celebran las contribuciones de los trabajadores a la nacion.',
      },
    },
    {
      question: { en: 'Why is May 1 a holiday in Senegal?', fr: 'Pourquoi le 1er mai est-il un jour ferie au Senegal ?', es: 'Por que el 1 de mayo es festivo en Senegal?' },
      answer: {
        en: 'May 1 is a holiday in Senegal following the French tradition of celebrating International Workers\' Day. This tradition was inherited during the colonial period and maintained after independence.',
        fr: "Le 1er mai est un jour ferie au Senegal suivant la tradition francaise de celebration de la Journee internationale des travailleurs. Cette tradition a ete heritee pendant la periode coloniale et maintenue apres l'independance.",
        es: 'El 1 de mayo es festivo en Senegal siguiendo la tradicion francesa de celebrar el Dia Internacional de los Trabajadores. Esta tradicion fue heredada durante el periodo colonial y mantenida despues de la independencia.',
      },
    },
  ],

  colorTheme: 'spring',
  icon: '⚒️',
};

// ---------------------------------------------------------------------------
// Eid al-Fitr (Korite)
// ---------------------------------------------------------------------------

const eidAlFitr: HolidayData = {
  id: 'sn_eid-al-fitr',
  countryCode: 'sn',
  slugs: { en: 'eid-al-fitr', fr: 'eid-al-fitr', es: 'eid-al-fitr' },
  names: { en: 'Eid al-Fitr', fr: "Eid al-Fitr", es: 'Eid al-Fitr' },

  dateType: 'calculated',
  calculateDate: getEidAlFitrDate,

  descriptions: {
    en: "Eid al-Fitr, known locally as Korite, marks the end of Ramadan in Senegal. It is one of the most joyous celebrations in this 95% Muslim country, bringing together families for prayers, feasting, and gift-giving.",
    fr: "L'Eid al-Fitr, connu localement sous le nom de Korite, marque la fin du Ramadan au Senegal. C'est l'une des celebrations les plus joyeuses dans ce pays a 95% musulman, reunissant les familles pour des prieres, des festins et des echanges de cadeaux.",
    es: "El Eid al-Fitr, conocido localmente como Korite, marca el fin del Ramadan en Senegal. Es una de las celebraciones mas alegres en este pais 95% musulman, reuniendo a las familias para oraciones, banquetes e intercambio de regalos.",
  },

  history: {
    en: "Korite is deeply rooted in Senegalese culture and Islamic tradition. As Senegal is approximately 95% Muslim, Eid al-Fitr is one of the most widely celebrated holidays in the country. The celebration marks the end of the holy month of Ramadan, a period of fasting, prayer, and spiritual reflection.\n\nIn Senegal, the celebration is influenced by Sufi brotherhoods, particularly the Mourides and Tidianes, which play a central role in religious life. The marabouts (religious leaders) often announce the sighting of the new moon that signals the end of Ramadan and the beginning of Korite.\n\nThe holiday transcends religious boundaries in Senegal, with Christian neighbours often joining Muslim families in celebrations, reflecting the country's remarkable tradition of interfaith harmony and teranga.",
    fr: "La Korite est profondement enracinee dans la culture senegalaise et la tradition islamique. Comme le Senegal est a environ 95% musulman, l'Eid al-Fitr est l'une des fetes les plus largement celebrees dans le pays. La celebration marque la fin du mois sacre du Ramadan, une periode de jeune, de priere et de reflexion spirituelle.\n\nAu Senegal, la celebration est influencee par les confreries soufies, notamment les Mourides et les Tidianes, qui jouent un role central dans la vie religieuse. Les marabouts (leaders religieux) annoncent souvent l'observation du nouveau croissant de lune qui signale la fin du Ramadan et le debut de la Korite.\n\nCette fete transcende les frontieres religieuses au Senegal, les voisins chretiens se joignant souvent aux familles musulmanes dans les celebrations, refletant la remarquable tradition d'harmonie interconfessionnelle et de teranga du pays.",
    es: "La Korite esta profundamente arraigada en la cultura senegalesa y la tradicion islamica. Como Senegal es aproximadamente 95% musulman, el Eid al-Fitr es una de las fiestas mas ampliamente celebradas en el pais. La celebracion marca el fin del mes sagrado del Ramadan, un periodo de ayuno, oracion y reflexion espiritual.\n\nEn Senegal, la celebracion esta influenciada por las hermandades sufies, particularmente los Mourides y los Tidianes, que juegan un papel central en la vida religiosa. Los marabouts (lideres religiosos) a menudo anuncian el avistamiento de la luna nueva que senala el fin del Ramadan y el inicio de la Korite.\n\nLa festividad trasciende las fronteras religiosas en Senegal, con vecinos cristianos uniendose a menudo a las familias musulmanas en las celebraciones, reflejando la notable tradicion de armonia interreligiosa y teranga del pais.",
  },

  traditions: {
    en: [
      'Attending early morning Eid prayers at mosques and open prayer grounds',
      'Wearing new or finest clothes, especially boubous and traditional attire',
      'Preparing and sharing festive meals with family and neighbours',
      'Children receiving gifts of money and sweets',
      'Visiting relatives and friends to exchange Korite greetings',
      'Sharing food with neighbours of all faiths in the spirit of teranga',
    ],
    fr: [
      'Assister aux prieres matinales de l\'Eid dans les mosquees et les espaces de priere en plein air',
      'Porter des vetements neufs ou ses plus beaux habits, notamment des boubous et des tenues traditionnelles',
      'Preparer et partager des repas festifs avec la famille et les voisins',
      "Les enfants recoivent des cadeaux d'argent et des friandises",
      'Rendre visite aux proches et amis pour echanger les voeux de Korite',
      'Partager la nourriture avec les voisins de toutes confessions dans l\'esprit de la teranga',
    ],
    es: [
      'Asistir a las oraciones matutinas del Eid en mezquitas y espacios de oracion al aire libre',
      'Vestir ropa nueva o la mejor vestimenta, especialmente boubous y atuendos tradicionales',
      'Preparar y compartir comidas festivas con la familia y los vecinos',
      'Los ninos reciben regalos de dinero y dulces',
      'Visitar a parientes y amigos para intercambiar saludos de Korite',
      'Compartir comida con vecinos de todas las confesiones en el espiritu de la teranga',
    ],
  },

  funFacts: {
    en: [
      'In Senegal, Korite is arguably the biggest holiday of the year, surpassing even Independence Day in popular enthusiasm.',
      'The exact date of Korite depends on the sighting of the new moon, so it can be confirmed just one day before.',
      'Senegalese tailors are among the busiest professionals in the weeks before Korite, as everyone wants new clothes.',
      'It is common for Christian Senegalese to visit their Muslim neighbours during Korite and share in the celebrations.',
      'The traditional Korite meal often features roasted lamb, thieboudienne, or mafe (peanut stew).',
    ],
    fr: [
      "Au Senegal, la Korite est sans doute la plus grande fete de l'annee, surpassant meme la Fete de l'Independance en enthousiasme populaire.",
      "La date exacte de la Korite depend de l'observation du nouveau croissant de lune, elle peut donc etre confirmee seulement un jour avant.",
      "Les tailleurs senegalais sont parmi les professionnels les plus occupes dans les semaines precedant la Korite, car tout le monde veut de nouveaux vetements.",
      'Il est courant que les chretiens senegalais rendent visite a leurs voisins musulmans pendant la Korite et partagent les celebrations.',
      'Le repas traditionnel de la Korite comprend souvent de l\'agneau roti, du thieboudienne ou du mafe (ragout d\'arachides).',
    ],
    es: [
      'En Senegal, la Korite es posiblemente la fiesta mas grande del ano, superando incluso al Dia de la Independencia en entusiasmo popular.',
      'La fecha exacta de la Korite depende del avistamiento de la luna nueva, por lo que puede confirmarse solo un dia antes.',
      'Los sastres senegaleses estan entre los profesionales mas ocupados en las semanas previas a la Korite, ya que todos quieren ropa nueva.',
      'Es comun que los cristianos senegaleses visiten a sus vecinos musulmanes durante la Korite y compartan las celebraciones.',
      'La comida tradicional de la Korite a menudo incluye cordero asado, thieboudienne o mafe (estofado de cacahuete).',
    ],
  },

  planningChecklist: {
    en: [
      'Order new clothes or boubous from a tailor well in advance',
      'Stock up on ingredients for festive meals, especially lamb and rice',
      'Prepare gifts and sweets for children',
      'Plan visits to family and friends for Korite greetings',
      'Follow announcements about the moon sighting for the exact date',
    ],
    fr: [
      'Commander de nouveaux vetements ou boubous chez un tailleur bien a l\'avance',
      'S\'approvisionner en ingredients pour les repas festifs, notamment l\'agneau et le riz',
      'Preparer des cadeaux et des friandises pour les enfants',
      'Planifier les visites a la famille et aux amis pour les voeux de Korite',
      "Suivre les annonces concernant l'observation de la lune pour la date exacte",
    ],
    es: [
      'Encargar ropa nueva o boubous a un sastre con bastante anticipacion',
      'Abastecerse de ingredientes para las comidas festivas, especialmente cordero y arroz',
      'Preparar regalos y dulces para los ninos',
      'Planificar visitas a familiares y amigos para los saludos de Korite',
      'Seguir los anuncios sobre el avistamiento de la luna para la fecha exacta',
    ],
  },

  relatedHolidays: ['sn_eid-al-adha', 'sn_christmas'],

  seo: {
    en: {
      titleTemplate: 'Eid al-Fitr (Korite) {year} Senegal — Countdown & Guide',
      descriptionTemplate: 'When is Eid al-Fitr (Korite) {year} in Senegal? Live countdown, traditions, and celebration guide for the end of Ramadan.',
      keywords: ['Eid al-Fitr Senegal', 'Korite Senegal', 'Ramadan Senegal', 'Senegal Muslim holidays', 'Korite date'],
    },
    fr: {
      titleTemplate: 'Eid al-Fitr (Korite) {year} Senegal — Compte a rebours et guide',
      descriptionTemplate: "Quand est l'Eid al-Fitr (Korite) {year} au Senegal ? Compte a rebours, traditions et guide de celebration pour la fin du Ramadan.",
      keywords: ['Eid al-Fitr Senegal', 'Korite Senegal', 'Ramadan Senegal', 'fetes musulmanes Senegal', 'date Korite'],
    },
    es: {
      titleTemplate: 'Eid al-Fitr (Korite) {year} Senegal — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Eid al-Fitr (Korite) {year} en Senegal? Cuenta regresiva, tradiciones y guia de celebracion para el fin del Ramadan.',
      keywords: ['Eid al-Fitr Senegal', 'Korite Senegal', 'Ramadan Senegal', 'fiestas musulmanas Senegal', 'fecha Korite'],
    },
  },

  faq: [
    {
      question: { en: 'When is Eid al-Fitr {year} in Senegal?', fr: "Quand est l'Eid al-Fitr {year} au Senegal ?", es: 'Cuando es el Eid al-Fitr {year} en Senegal?' },
      answer: {
        en: 'Eid al-Fitr {year} in Senegal is expected around {date}. The exact date depends on the sighting of the new moon marking the end of Ramadan.',
        fr: "L'Eid al-Fitr {year} au Senegal est prevu aux alentours du {date}. La date exacte depend de l'observation du nouveau croissant de lune marquant la fin du Ramadan.",
        es: 'El Eid al-Fitr {year} en Senegal se espera alrededor del {date}. La fecha exacta depende del avistamiento de la luna nueva que marca el fin del Ramadan.',
      },
    },
    {
      question: { en: 'What is Korite?', fr: "Qu'est-ce que la Korite ?", es: 'Que es la Korite?' },
      answer: {
        en: 'Korite is the Wolof name for Eid al-Fitr in Senegal. It marks the end of Ramadan and is the most joyous celebration in Senegalese culture, featuring prayers, feasting, new clothes, and family visits.',
        fr: "La Korite est le nom wolof de l'Eid al-Fitr au Senegal. Elle marque la fin du Ramadan et est la celebration la plus joyeuse de la culture senegalaise, comportant des prieres, des festins, de nouveaux vetements et des visites familiales.",
        es: 'La Korite es el nombre wolof del Eid al-Fitr en Senegal. Marca el fin del Ramadan y es la celebracion mas alegre de la cultura senegalesa, con oraciones, banquetes, ropa nueva y visitas familiares.',
      },
    },
    {
      question: { en: 'Do Christians celebrate Korite in Senegal?', fr: 'Les chretiens celebrent-ils la Korite au Senegal ?', es: 'Los cristianos celebran la Korite en Senegal?' },
      answer: {
        en: 'Yes, it is very common for Christian Senegalese to visit their Muslim friends and neighbours during Korite, share meals, and participate in the celebrations. This reflects Senegal\'s strong tradition of interfaith harmony.',
        fr: "Oui, il est tres courant que les chretiens senegalais rendent visite a leurs amis et voisins musulmans pendant la Korite, partagent des repas et participent aux celebrations. Cela reflete la forte tradition d'harmonie interconfessionnelle du Senegal.",
        es: 'Si, es muy comun que los cristianos senegaleses visiten a sus amigos y vecinos musulmanes durante la Korite, compartan comidas y participen en las celebraciones. Esto refleja la fuerte tradicion de armonia interreligiosa de Senegal.',
      },
    },
    {
      question: { en: 'What food is served during Korite?', fr: 'Quels plats sont servis pendant la Korite ?', es: 'Que comida se sirve durante la Korite?' },
      answer: {
        en: 'Traditional Korite meals in Senegal often feature roasted lamb, thieboudienne (rice and fish), mafe (peanut stew), and yassa (marinated chicken or fish). Sweet treats and drinks like bissap (hibiscus juice) are also served.',
        fr: "Les repas traditionnels de la Korite au Senegal comprennent souvent de l'agneau roti, du thieboudienne (riz au poisson), du mafe (ragout d'arachides) et du yassa (poulet ou poisson marine). Des friandises et des boissons comme le bissap (jus d'hibiscus) sont egalement servis.",
        es: 'Las comidas tradicionales de la Korite en Senegal a menudo incluyen cordero asado, thieboudienne (arroz con pescado), mafe (estofado de cacahuete) y yassa (pollo o pescado marinado). Tambien se sirven dulces y bebidas como el bissap (jugo de hibisco).',
      },
    },
  ],

  colorTheme: 'autumn',
  icon: '🌙',
};

// ---------------------------------------------------------------------------
// Eid al-Adha (Tabaski)
// ---------------------------------------------------------------------------

const eidAlAdha: HolidayData = {
  id: 'sn_eid-al-adha',
  countryCode: 'sn',
  slugs: { en: 'eid-al-adha', fr: 'eid-al-adha', es: 'eid-al-adha' },
  names: { en: 'Eid al-Adha', fr: "Eid al-Adha", es: 'Eid al-Adha' },

  dateType: 'calculated',
  calculateDate: getEidAlAdhaDate,

  descriptions: {
    en: "Eid al-Adha, known locally as Tabaski, is the most important holiday in Senegal. It commemorates Ibrahim's willingness to sacrifice his son and is marked by the sacrifice of a sheep, communal prayers, and elaborate family feasts.",
    fr: "L'Eid al-Adha, connu localement sous le nom de Tabaski, est la fete la plus importante au Senegal. Elle commemore la volonte d'Ibrahim de sacrifier son fils et est marquee par le sacrifice d'un mouton, des prieres communautaires et des festins familiaux elabores.",
    es: "El Eid al-Adha, conocido localmente como Tabaski, es la fiesta mas importante en Senegal. Conmemora la disposicion de Ibrahim de sacrificar a su hijo y se marca con el sacrificio de un cordero, oraciones comunitarias y elaborados banquetes familiares.",
  },

  history: {
    en: "Tabaski is the single most significant holiday in Senegalese culture, deeply embedded in the social fabric of this predominantly Muslim nation. The holiday commemorates the Quranic story of Ibrahim's willingness to sacrifice his son in obedience to God, who provided a ram as a substitute.\n\nIn Senegal, the preparation for Tabaski begins weeks in advance. The demand for sheep drives a massive seasonal economy, with sheep markets appearing throughout the country. Families save for months to purchase the finest ram they can afford, as the quality of the Tabaski sheep is a matter of pride and social significance.\n\nThe holiday reinforces family bonds and community solidarity. After the morning prayer and sacrifice, families share the meat in three portions: one for the family, one for friends and neighbours, and one for the poor. This tradition embodies the Islamic values of charity and community that are central to Senegalese identity.",
    fr: "La Tabaski est la fete la plus significative de la culture senegalaise, profondement ancree dans le tissu social de cette nation a majorite musulmane. La fete commemore l'histoire coranique de la volonte d'Ibrahim de sacrifier son fils en obeissance a Dieu, qui a fourni un belier comme substitut.\n\nAu Senegal, la preparation de la Tabaski commence des semaines a l'avance. La demande de moutons genere une economie saisonniere massive, avec des marches aux moutons apparaissant dans tout le pays. Les familles economisent pendant des mois pour acheter le plus beau belier qu'elles peuvent se permettre, car la qualite du mouton de la Tabaski est une question de fierte et de signification sociale.\n\nCette fete renforce les liens familiaux et la solidarite communautaire. Apres la priere du matin et le sacrifice, les familles partagent la viande en trois portions : une pour la famille, une pour les amis et voisins, et une pour les pauvres. Cette tradition incarne les valeurs islamiques de charite et de communaute qui sont centrales dans l'identite senegalaise.",
    es: "La Tabaski es la fiesta mas significativa de la cultura senegalesa, profundamente arraigada en el tejido social de esta nacion predominantemente musulmana. La festividad conmemora la historia coranica de la disposicion de Ibrahim de sacrificar a su hijo en obediencia a Dios, quien proporciono un carnero como sustituto.\n\nEn Senegal, la preparacion para la Tabaski comienza semanas antes. La demanda de corderos genera una economia estacional masiva, con mercados de corderos apareciendo en todo el pais. Las familias ahorran durante meses para comprar el mejor carnero que puedan permitirse, ya que la calidad del cordero de la Tabaski es una cuestion de orgullo y significado social.\n\nLa festividad refuerza los lazos familiares y la solidaridad comunitaria. Despues de la oracion matutina y el sacrificio, las familias comparten la carne en tres porciones: una para la familia, una para amigos y vecinos, y una para los pobres. Esta tradicion encarna los valores islamicos de caridad y comunidad que son centrales en la identidad senegalesa.",
  },

  traditions: {
    en: [
      'Purchasing and preparing the Tabaski sheep in the days before the holiday',
      'Attending communal morning prayers at mosques and open prayer grounds',
      'Sacrificing a ram following Islamic tradition',
      'Dividing the meat into three parts: family, friends, and the poor',
      'Wearing new and elegant clothes, especially boubous',
      'Visiting family and friends to exchange Tabaski greetings',
      'Preparing elaborate meals with grilled and braised lamb',
    ],
    fr: [
      "Acheter et preparer le mouton de Tabaski dans les jours precedant la fete",
      'Assister aux prieres communautaires du matin dans les mosquees et les espaces de priere en plein air',
      'Sacrifier un belier selon la tradition islamique',
      'Diviser la viande en trois parts : la famille, les amis et les pauvres',
      'Porter des vetements neufs et elegants, notamment des boubous',
      'Rendre visite a la famille et aux amis pour echanger les voeux de Tabaski',
      "Preparer des repas elabores avec de l'agneau grille et braise",
    ],
    es: [
      'Comprar y preparar el cordero de Tabaski en los dias previos a la fiesta',
      'Asistir a las oraciones comunitarias matutinas en mezquitas y espacios de oracion al aire libre',
      'Sacrificar un carnero siguiendo la tradicion islamica',
      'Dividir la carne en tres partes: la familia, los amigos y los pobres',
      'Vestir ropa nueva y elegante, especialmente boubous',
      'Visitar a familiares y amigos para intercambiar saludos de Tabaski',
      'Preparar comidas elaboradas con cordero a la parrilla y estofado',
    ],
  },

  funFacts: {
    en: [
      'Senegalese families may spend up to a third of their annual income on Tabaski preparations, including the sheep.',
      'Sheep markets called "parcs a moutons" spring up across Senegal weeks before Tabaski, becoming major social gathering spots.',
      'The price of sheep in Senegal can range from $50 to over $500, with the finest rams becoming status symbols.',
      'Tabaski is so important in Senegal that the government sometimes intervenes to stabilise sheep prices.',
      'After the sacrifice, Senegalese women prepare "dibi" (grilled meat) that is shared throughout the neighbourhood.',
    ],
    fr: [
      "Les familles senegalaises peuvent depenser jusqu'a un tiers de leur revenu annuel pour les preparatifs de la Tabaski, y compris le mouton.",
      "Les marches aux moutons appeles 'parcs a moutons' apparaissent a travers le Senegal des semaines avant la Tabaski, devenant des lieux de rassemblement social majeurs.",
      "Le prix des moutons au Senegal peut varier de 30 000 a plus de 300 000 francs CFA, les plus beaux beliers devenant des symboles de statut.",
      "La Tabaski est si importante au Senegal que le gouvernement intervient parfois pour stabiliser les prix des moutons.",
      "Apres le sacrifice, les femmes senegalaises preparent du 'dibi' (viande grillee) qui est partage dans tout le quartier.",
    ],
    es: [
      'Las familias senegalesas pueden gastar hasta un tercio de sus ingresos anuales en los preparativos de la Tabaski, incluyendo el cordero.',
      'Los mercados de corderos llamados "parcs a moutons" surgen en todo Senegal semanas antes de la Tabaski, convirtiendose en importantes puntos de encuentro social.',
      'El precio de los corderos en Senegal puede variar de $50 a mas de $500, con los mejores carneros convirtiendose en simbolos de estatus.',
      'La Tabaski es tan importante en Senegal que el gobierno a veces interviene para estabilizar los precios de los corderos.',
      'Despues del sacrificio, las mujeres senegalesas preparan "dibi" (carne a la parrilla) que se comparte por todo el vecindario.',
    ],
  },

  planningChecklist: {
    en: [
      'Start saving for the Tabaski sheep months in advance',
      'Visit sheep markets early for the best selection and prices',
      'Order new clothes from a tailor at least two weeks before Tabaski',
      'Prepare charcoal and grilling equipment for the feast',
      'Plan family visits and organise transport for the holiday',
    ],
    fr: [
      'Commencer a economiser pour le mouton de Tabaski des mois a l\'avance',
      'Visiter les marches aux moutons tot pour le meilleur choix et les meilleurs prix',
      'Commander de nouveaux vetements chez un tailleur au moins deux semaines avant la Tabaski',
      'Preparer le charbon et l\'equipement de grillade pour le festin',
      'Planifier les visites familiales et organiser le transport pour la fete',
    ],
    es: [
      'Comenzar a ahorrar para el cordero de Tabaski con meses de anticipacion',
      'Visitar los mercados de corderos temprano para la mejor seleccion y precios',
      'Encargar ropa nueva a un sastre al menos dos semanas antes de la Tabaski',
      'Preparar carbon y equipo de parrilla para el banquete',
      'Planificar visitas familiares y organizar transporte para la festividad',
    ],
  },

  relatedHolidays: ['sn_eid-al-fitr', 'sn_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Eid al-Adha (Tabaski) {year} Senegal — Countdown & Guide',
      descriptionTemplate: 'When is Tabaski {year} in Senegal? Live countdown to Eid al-Adha, traditions, sheep sacrifice customs, and celebration guide.',
      keywords: ['Tabaski Senegal', 'Eid al-Adha Senegal', 'Tabaski date', 'Senegal Tabaski', 'sheep sacrifice Senegal'],
    },
    fr: {
      titleTemplate: 'Eid al-Adha (Tabaski) {year} Senegal — Compte a rebours et guide',
      descriptionTemplate: "Quand est la Tabaski {year} au Senegal ? Compte a rebours jusqu'a l'Eid al-Adha, traditions, coutumes du sacrifice du mouton et guide de celebration.",
      keywords: ['Tabaski Senegal', 'Eid al-Adha Senegal', 'date Tabaski', 'mouton Tabaski', 'fetes musulmanes Senegal'],
    },
    es: {
      titleTemplate: 'Eid al-Adha (Tabaski) {year} Senegal — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es la Tabaski {year} en Senegal? Cuenta regresiva hasta el Eid al-Adha, tradiciones, costumbres del sacrificio del cordero y guia de celebracion.',
      keywords: ['Tabaski Senegal', 'Eid al-Adha Senegal', 'fecha Tabaski', 'cordero Tabaski', 'fiestas musulmanas Senegal'],
    },
  },

  faq: [
    {
      question: { en: 'When is Tabaski {year} in Senegal?', fr: 'Quand est la Tabaski {year} au Senegal ?', es: 'Cuando es la Tabaski {year} en Senegal?' },
      answer: {
        en: 'Tabaski (Eid al-Adha) {year} in Senegal is expected around {date}. The exact date depends on the Islamic lunar calendar and moon sighting.',
        fr: "La Tabaski (Eid al-Adha) {year} au Senegal est prevue aux alentours du {date}. La date exacte depend du calendrier lunaire islamique et de l'observation de la lune.",
        es: 'La Tabaski (Eid al-Adha) {year} en Senegal se espera alrededor del {date}. La fecha exacta depende del calendario lunar islamico y del avistamiento de la luna.',
      },
    },
    {
      question: { en: 'What is Tabaski?', fr: "Qu'est-ce que la Tabaski ?", es: 'Que es la Tabaski?' },
      answer: {
        en: "Tabaski is the Wolof name for Eid al-Adha, the Festival of Sacrifice. It is the most important holiday in Senegal, commemorating Ibrahim's willingness to sacrifice his son. Families sacrifice a sheep and share the meat with family, friends, and the poor.",
        fr: "La Tabaski est le nom wolof de l'Eid al-Adha, la Fete du Sacrifice. C'est la fete la plus importante au Senegal, commemorant la volonte d'Ibrahim de sacrifier son fils. Les familles sacrifient un mouton et partagent la viande avec la famille, les amis et les pauvres.",
        es: "La Tabaski es el nombre wolof del Eid al-Adha, la Fiesta del Sacrificio. Es la festividad mas importante en Senegal, conmemorando la disposicion de Ibrahim de sacrificar a su hijo. Las familias sacrifican un cordero y comparten la carne con la familia, los amigos y los pobres.",
      },
    },
    {
      question: { en: 'Why is Tabaski so important in Senegal?', fr: 'Pourquoi la Tabaski est-elle si importante au Senegal ?', es: 'Por que la Tabaski es tan importante en Senegal?' },
      answer: {
        en: 'Tabaski is the most important holiday because Senegal is 95% Muslim and the Festival of Sacrifice holds deep religious and cultural significance. It reinforces family bonds, community solidarity, and charitable giving, which are central to Senegalese values.',
        fr: "La Tabaski est la fete la plus importante car le Senegal est a 95% musulman et la Fete du Sacrifice a une signification religieuse et culturelle profonde. Elle renforce les liens familiaux, la solidarite communautaire et les dons caritatifs, qui sont au coeur des valeurs senegalaises.",
        es: 'La Tabaski es la festividad mas importante porque Senegal es 95% musulman y la Fiesta del Sacrificio tiene un profundo significado religioso y cultural. Refuerza los lazos familiares, la solidaridad comunitaria y la caridad, que son centrales en los valores senegaleses.',
      },
    },
    {
      question: { en: 'How is the meat divided during Tabaski?', fr: 'Comment la viande est-elle divisee pendant la Tabaski ?', es: 'Como se divide la carne durante la Tabaski?' },
      answer: {
        en: 'Following Islamic tradition, the meat from the sacrificed sheep is divided into three equal parts: one for the family, one to share with friends and neighbours, and one to give to the poor and needy.',
        fr: "Suivant la tradition islamique, la viande du mouton sacrifie est divisee en trois parts egales : une pour la famille, une a partager avec les amis et voisins, et une a donner aux pauvres et aux necessiteux.",
        es: 'Siguiendo la tradicion islamica, la carne del cordero sacrificado se divide en tres partes iguales: una para la familia, una para compartir con amigos y vecinos, y una para dar a los pobres y necesitados.',
      },
    },
  ],

  colorTheme: 'autumn',
  icon: '🐑',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'sn_christmas',
  countryCode: 'sn',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is a public holiday in Senegal, celebrated by the Christian minority and embraced as a day of interfaith goodwill. It reflects the country's remarkable religious tolerance and the spirit of teranga.",
    fr: "Le jour de Noel, le 25 decembre, est un jour ferie au Senegal, celebre par la minorite chretienne et accueilli comme une journee de bonne volonte interconfessionnelle. Il reflete la remarquable tolerance religieuse du pays et l'esprit de teranga.",
    es: "El dia de Navidad, el 25 de diciembre, es un dia festivo en Senegal, celebrado por la minoria cristiana y acogido como un dia de buena voluntad interreligiosa. Refleja la notable tolerancia religiosa del pais y el espiritu de teranga.",
  },

  history: {
    en: "Christmas is a public holiday in Senegal despite the country being approximately 95% Muslim. This reflects Senegal's deeply rooted tradition of religious tolerance and coexistence. The Christian population, primarily Catholic, is concentrated in the Casamance region and in urban centres like Dakar.\n\nThe tradition of celebrating Christmas was introduced during French colonial rule and has been maintained since independence. Leopold Sedar Senghor, the first president and a Catholic, championed interfaith harmony as a cornerstone of national identity.\n\nIn Senegal, Christmas is not just a Christian holiday but a national celebration of unity. Muslim families often join their Christian neighbours in festivities, exchanging gifts and sharing meals, demonstrating the unique Senegalese model of peaceful coexistence.",
    fr: "Noel est un jour ferie au Senegal bien que le pays soit a environ 95% musulman. Cela reflete la tradition profondement enracinee de tolerance religieuse et de coexistence au Senegal. La population chretienne, principalement catholique, est concentree dans la region de Casamance et dans les centres urbains comme Dakar.\n\nLa tradition de celebrer Noel a ete introduite pendant la colonisation francaise et a ete maintenue depuis l'independance. Leopold Sedar Senghor, le premier president et catholique, a defendu l'harmonie interconfessionnelle comme pierre angulaire de l'identite nationale.\n\nAu Senegal, Noel n'est pas seulement une fete chretienne mais une celebration nationale de l'unite. Les familles musulmanes se joignent souvent a leurs voisins chretiens dans les festivites, echangeant des cadeaux et partageant des repas, demontrant le modele senegalais unique de coexistence pacifique.",
    es: "La Navidad es un dia festivo en Senegal a pesar de que el pais es aproximadamente 95% musulman. Esto refleja la tradicion profundamente arraigada de tolerancia religiosa y coexistencia en Senegal. La poblacion cristiana, principalmente catolica, se concentra en la region de Casamance y en centros urbanos como Dakar.\n\nLa tradicion de celebrar la Navidad fue introducida durante el dominio colonial frances y se ha mantenido desde la independencia. Leopold Sedar Senghor, el primer presidente y catolico, defendio la armonia interreligiosa como piedra angular de la identidad nacional.\n\nEn Senegal, la Navidad no es solo una fiesta cristiana sino una celebracion nacional de unidad. Las familias musulmanas a menudo se unen a sus vecinos cristianos en las festividades, intercambiando regalos y compartiendo comidas, demostrando el modelo senegales unico de coexistencia pacifica.",
  },

  traditions: {
    en: [
      'Attending midnight mass at the Cathedral of Dakar or local churches',
      'Muslim neighbours visiting Christian families to share in the celebration',
      'Preparing festive meals blending French and Senegalese culinary traditions',
      'Exchanging gifts among family and friends',
      'Decorating homes and churches with festive lights',
      'Children singing Christmas carols in Wolof and French',
    ],
    fr: [
      'Assister a la messe de minuit a la Cathedrale de Dakar ou dans les eglises locales',
      'Les voisins musulmans rendant visite aux familles chretiennes pour partager la celebration',
      'Preparer des repas festifs melant traditions culinaires francaises et senegalaises',
      'Echanger des cadeaux entre famille et amis',
      'Decorer les maisons et les eglises avec des lumieres festives',
      'Les enfants chantant des chants de Noel en wolof et en francais',
    ],
    es: [
      'Asistir a la misa de medianoche en la Catedral de Dakar o iglesias locales',
      'Los vecinos musulmanes visitando a las familias cristianas para compartir la celebracion',
      'Preparar comidas festivas que mezclan tradiciones culinarias francesas y senegalesas',
      'Intercambiar regalos entre familia y amigos',
      'Decorar hogares e iglesias con luces festivas',
      'Los ninos cantando villancicos en wolof y frances',
    ],
  },

  funFacts: {
    en: [
      'Senegal is one of the few majority-Muslim countries where Christmas is an official public holiday.',
      'Leopold Sedar Senghor, Senegal\'s first president and a Catholic, helped establish the tradition of interfaith celebration.',
      'The Cathedral of Dakar, built in 1929, hosts one of the largest Christmas celebrations in West Africa.',
      'In Senegal, it is common for Muslim families to send Christmas greetings and gifts to their Christian neighbours.',
      'The Casamance region in southern Senegal has the largest concentration of Christians and celebrates Christmas with particular fervour.',
    ],
    fr: [
      "Le Senegal est l'un des rares pays a majorite musulmane ou Noel est un jour ferie officiel.",
      "Leopold Sedar Senghor, premier president du Senegal et catholique, a aide a etablir la tradition de celebration interconfessionnelle.",
      "La Cathedrale de Dakar, construite en 1929, accueille l'une des plus grandes celebrations de Noel en Afrique de l'Ouest.",
      'Au Senegal, il est courant que les familles musulmanes envoient des voeux de Noel et des cadeaux a leurs voisins chretiens.',
      'La region de Casamance, dans le sud du Senegal, a la plus grande concentration de chretiens et celebre Noel avec une ferveur particuliere.',
    ],
    es: [
      'Senegal es uno de los pocos paises de mayoria musulmana donde la Navidad es un dia festivo oficial.',
      'Leopold Sedar Senghor, primer presidente de Senegal y catolico, ayudo a establecer la tradicion de celebracion interreligiosa.',
      'La Catedral de Dakar, construida en 1929, alberga una de las mayores celebraciones de Navidad en Africa Occidental.',
      'En Senegal, es comun que las familias musulmanas envien saludos navidenos y regalos a sus vecinos cristianos.',
      'La region de Casamance, en el sur de Senegal, tiene la mayor concentracion de cristianos y celebra la Navidad con particular fervor.',
    ],
  },

  planningChecklist: {
    en: [
      'Check mass schedules at local churches for Christmas Eve and Christmas Day services',
      'Prepare festive meals and purchase gifts for family and friends',
      'Invite neighbours of all faiths to share in the celebration',
      'Decorate the home with festive lights and ornaments',
      'Plan visits to family members, especially in the Casamance region',
    ],
    fr: [
      'Verifier les horaires des messes dans les eglises locales pour le reveillon et le jour de Noel',
      'Preparer des repas festifs et acheter des cadeaux pour la famille et les amis',
      'Inviter les voisins de toutes confessions a partager la celebration',
      'Decorer la maison avec des lumieres et des ornements festifs',
      'Planifier les visites aux membres de la famille, notamment dans la region de Casamance',
    ],
    es: [
      'Consultar los horarios de misas en las iglesias locales para Nochebuena y el dia de Navidad',
      'Preparar comidas festivas y comprar regalos para familia y amigos',
      'Invitar a vecinos de todas las confesiones a compartir la celebracion',
      'Decorar el hogar con luces y adornos festivos',
      'Planificar visitas a familiares, especialmente en la region de Casamance',
    ],
  },

  relatedHolidays: ['sn_new-years-day', 'sn_eid-al-fitr'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Senegal — Countdown & Guide',
      descriptionTemplate: 'When is Christmas Day {year} in Senegal? Live countdown to December 25, interfaith celebration traditions, and holiday guide.',
      keywords: ['Christmas Senegal', 'Noel Senegal', 'Senegal Christmas', 'December 25 Senegal', 'Senegal holidays'],
    },
    fr: {
      titleTemplate: 'Noel {year} Senegal — Compte a rebours et guide',
      descriptionTemplate: 'Quand est Noel {year} au Senegal ? Compte a rebours jusqu\'au 25 decembre, traditions de celebration interconfessionnelle et guide de vacances.',
      keywords: ['Noel Senegal', 'fete de Noel Senegal', '25 decembre Senegal', 'Noel Dakar', 'jours feries Senegal'],
    },
    es: {
      titleTemplate: 'Navidad {year} Senegal — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es Navidad {year} en Senegal? Cuenta regresiva hasta el 25 de diciembre, tradiciones de celebracion interreligiosa y guia de vacaciones.',
      keywords: ['Navidad Senegal', 'Noel Senegal', '25 de diciembre Senegal', 'Navidad Dakar', 'dias festivos Senegal'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Senegal?', fr: 'Quand est Noel {year} au Senegal ?', es: 'Cuando es Navidad {year} en Senegal?' },
      answer: {
        en: 'Christmas {year} in Senegal is on {date}. It is always December 25 and is a national public holiday.',
        fr: 'Noel {year} au Senegal est le {date}. C\'est toujours le 25 decembre et c\'est un jour ferie national.',
        es: 'Navidad {year} en Senegal es el {date}. Siempre es el 25 de diciembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Is Christmas a public holiday in Senegal?', fr: 'Noel est-il un jour ferie au Senegal ?', es: 'Es la Navidad un dia festivo en Senegal?' },
      answer: {
        en: 'Yes, Christmas is an official public holiday in Senegal, despite being a majority-Muslim country. This reflects Senegal\'s strong tradition of religious tolerance.',
        fr: 'Oui, Noel est un jour ferie officiel au Senegal, malgre le fait que le pays soit a majorite musulmane. Cela reflete la forte tradition de tolerance religieuse du Senegal.',
        es: 'Si, la Navidad es un dia festivo oficial en Senegal, a pesar de ser un pais de mayoria musulmana. Esto refleja la fuerte tradicion de tolerancia religiosa de Senegal.',
      },
    },
    {
      question: { en: 'Do Muslims celebrate Christmas in Senegal?', fr: 'Les musulmans celebrent-ils Noel au Senegal ?', es: 'Los musulmanes celebran la Navidad en Senegal?' },
      answer: {
        en: 'While Muslims do not observe Christmas as a religious holiday, it is very common in Senegal for Muslim families to visit their Christian neighbours, exchange gifts, and share meals on Christmas Day. This interfaith goodwill is a hallmark of Senegalese culture.',
        fr: "Bien que les musulmans n'observent pas Noel comme fete religieuse, il est tres courant au Senegal que les familles musulmanes rendent visite a leurs voisins chretiens, echangent des cadeaux et partagent des repas le jour de Noel. Cette bonne volonte interconfessionnelle est une marque de la culture senegalaise.",
        es: 'Aunque los musulmanes no observan la Navidad como fiesta religiosa, es muy comun en Senegal que las familias musulmanas visiten a sus vecinos cristianos, intercambien regalos y compartan comidas el dia de Navidad. Esta buena voluntad interreligiosa es un sello de la cultura senegalesa.',
      },
    },
    {
      question: { en: 'Where is the largest Christmas celebration in Senegal?', fr: 'Ou se trouve la plus grande celebration de Noel au Senegal ?', es: 'Donde esta la mayor celebracion de Navidad en Senegal?' },
      answer: {
        en: 'The largest Christmas celebrations in Senegal take place at the Cathedral of Dakar and throughout the Casamance region in southern Senegal, which has the highest concentration of Christians in the country.',
        fr: "Les plus grandes celebrations de Noel au Senegal ont lieu a la Cathedrale de Dakar et dans toute la region de Casamance, dans le sud du Senegal, qui a la plus grande concentration de chretiens du pays.",
        es: 'Las mayores celebraciones navidenas en Senegal tienen lugar en la Catedral de Dakar y en toda la region de Casamance, en el sur de Senegal, que tiene la mayor concentracion de cristianos del pais.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const snHolidays: HolidayData[] = [
  newYearsDay,
  independenceDay,
  labourDay,
  eidAlFitr,
  eidAlAdha,
  christmas,
];

export default snHolidays;
