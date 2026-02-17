/**
 * Belgium holidays data.
 */

import type { HolidayData } from '@/lib/types';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'be_new-years-day',
  countryCode: 'be',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'dia-de-ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Dia de Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a public holiday in Belgium, marking the start of the calendar year. Celebrations begin on New Year's Eve with festive gatherings, fireworks displays in major cities like Brussels and Antwerp, and the tradition of wishing \"Gelukkig Nieuwjaar\" (Dutch) or \"Bonne Annee\" (French) to friends and family.",
    fr: "Le Jour de l'An, le 1er janvier, est un jour ferie en Belgique qui marque le debut de la nouvelle annee. Les festivites commencent le soir du reveillon avec des rassemblements festifs, des feux d'artifice dans les grandes villes comme Bruxelles et Anvers, et la tradition de souhaiter \"Bonne Annee\" ou \"Gelukkig Nieuwjaar\" a ses proches.",
    es: "El Dia de Ano Nuevo, el 1 de enero, es un dia festivo en Belgica que marca el inicio del ano calendario. Las celebraciones comienzan en Nochevieja con reuniones festivas, fuegos artificiales en las principales ciudades como Bruselas y Amberes, y la tradicion de desear \"Gelukkig Nieuwjaar\" (neerlandes) o \"Bonne Annee\" (frances) a amigos y familiares.",
  },

  history: {
    en: "Belgium has celebrated January 1 as the start of the new year since the adoption of the Gregorian calendar. The country's bilingual (and trilingual) character gives New Year's celebrations a unique flavour, with both Flemish and Francophone traditions blending together.\n\nIn Flanders, the tradition of children reading New Year's letters (nieuwjaarsbrief) to their parents and godparents dates back centuries. Children write decorated letters with wishes for the new year and read them aloud on New Year's Day, often receiving a small gift or money in return.\n\nBrussels hosts one of Belgium's largest New Year's Eve celebrations, with fireworks over the city centre and live music. The Grand Place, a UNESCO World Heritage Site, becomes a focal point for celebrations with its spectacular light shows.",
    fr: "La Belgique celebre le 1er janvier comme debut de la nouvelle annee depuis l'adoption du calendrier gregorien. Le caractere bilingue (et trilingue) du pays confere aux celebrations du Nouvel An une saveur unique, melant traditions flamandes et francophones.\n\nEn Flandre, la tradition des enfants lisant des lettres de Nouvel An (nieuwjaarsbrief) a leurs parents et parrains remonte a des siecles. Les enfants redigent des lettres decorees avec des voeux pour la nouvelle annee et les lisent a voix haute le jour de l'An, recevant souvent un petit cadeau ou de l'argent en retour.\n\nBruxelles accueille l'une des plus grandes celebrations du Nouvel An en Belgique, avec des feux d'artifice au-dessus du centre-ville et de la musique en direct. La Grand-Place, classee au patrimoine mondial de l'UNESCO, devient le point focal des festivites avec ses spectaculaires jeux de lumieres.",
    es: "Belgica celebra el 1 de enero como inicio del nuevo ano desde la adopcion del calendario gregoriano. El caracter bilingue (y trilingue) del pais da a las celebraciones de Ano Nuevo un sabor unico, con tradiciones flamencas y francofanas mezcladas.\n\nEn Flandes, la tradicion de los ninos leyendo cartas de Ano Nuevo (nieuwjaarsbrief) a sus padres y padrinos se remonta a siglos. Los ninos escriben cartas decoradas con deseos para el nuevo ano y las leen en voz alta el dia de Ano Nuevo, recibiendo a menudo un pequeno regalo o dinero a cambio.\n\nBruselas alberga una de las mayores celebraciones de Nochevieja de Belgica, con fuegos artificiales sobre el centro de la ciudad y musica en vivo. La Grand Place, Patrimonio de la Humanidad de la UNESCO, se convierte en el punto focal de las festividades con sus espectaculares juegos de luces.",
  },

  traditions: {
    en: [
      'Watching fireworks displays over Brussels\' Grand Place and other city centres',
      'Children reading decorated New Year\'s letters (nieuwjaarsbrief) to their parents in Flanders',
      'Exchanging New Year\'s wishes — "Bonne Annee" in French, "Gelukkig Nieuwjaar" in Dutch',
      'Enjoying a festive New Year\'s Eve dinner with family and friends',
      'Making New Year\'s resolutions (goede voornemens / bonnes resolutions)',
      'Toasting with champagne or Belgian sparkling wine at midnight',
    ],
    fr: [
      'Admirer les feux d\'artifice au-dessus de la Grand-Place de Bruxelles et d\'autres centres-villes',
      'Les enfants lisent des lettres de Nouvel An decorees (nieuwjaarsbrief) a leurs parents en Flandre',
      'Echanger les voeux de Nouvel An — "Bonne Annee" en francais, "Gelukkig Nieuwjaar" en neerlandais',
      'Profiter d\'un diner de reveillon festif en famille ou entre amis',
      'Prendre de bonnes resolutions pour la nouvelle annee',
      'Trinquer au champagne ou au cremant belge a minuit',
    ],
    es: [
      'Ver fuegos artificiales sobre la Grand Place de Bruselas y otros centros urbanos',
      'Los ninos leen cartas de Ano Nuevo decoradas (nieuwjaarsbrief) a sus padres en Flandes',
      'Intercambiar deseos de Ano Nuevo — "Bonne Annee" en frances, "Gelukkig Nieuwjaar" en neerlandes',
      'Disfrutar de una cena festiva de Nochevieja con familia y amigos',
      'Hacer propositos de Ano Nuevo',
      'Brindar con champan o vino espumoso belga a medianoche',
    ],
  },

  funFacts: {
    en: [
      'The Flemish tradition of the nieuwjaarsbrief (New Year\'s letter) has children writing decorated letters with wishes that they read aloud to parents and godparents on January 1.',
      'Brussels\' Grand Place, one of the most beautiful squares in Europe, hosts spectacular New Year\'s Eve celebrations with light shows projected onto the historic guild houses.',
      'Belgium is one of the few countries where New Year\'s celebrations have distinct traditions in different linguistic communities — Flemish, French, and German.',
      'Belgian New Year\'s Eve dinners often feature local delicacies including mussels, oysters, and Belgian chocolate truffles.',
      'The city of Antwerp hosts one of Belgium\'s largest outdoor New Year\'s Eve parties, attracting tens of thousands of revellers.',
    ],
    fr: [
      'La tradition flamande du nieuwjaarsbrief (lettre de Nouvel An) consiste pour les enfants a rediger des lettres decorees qu\'ils lisent a voix haute a leurs parents et parrains le 1er janvier.',
      'La Grand-Place de Bruxelles, l\'une des plus belles places d\'Europe, accueille de spectaculaires celebrations du Nouvel An avec des projections lumineuses sur les maisons de guildes historiques.',
      'La Belgique est l\'un des rares pays ou les celebrations du Nouvel An ont des traditions distinctes dans les differentes communautes linguistiques — flamande, francaise et germanophone.',
      'Les diners du reveillon belge comprennent souvent des specialites locales comme les moules, les huitres et les truffes au chocolat belge.',
      'La ville d\'Anvers accueille l\'une des plus grandes fetes de Nouvel An en plein air de Belgique, attirant des dizaines de milliers de fetards.',
    ],
    es: [
      'La tradicion flamenca del nieuwjaarsbrief (carta de Ano Nuevo) consiste en que los ninos escriben cartas decoradas que leen en voz alta a sus padres y padrinos el 1 de enero.',
      'La Grand Place de Bruselas, una de las plazas mas bellas de Europa, alberga espectaculares celebraciones de Nochevieja con proyecciones de luz sobre las historicas casas gremiales.',
      'Belgica es uno de los pocos paises donde las celebraciones de Ano Nuevo tienen tradiciones distintas en diferentes comunidades linguisticas — flamenca, francesa y germanofona.',
      'Las cenas de Nochevieja belgas suelen incluir especialidades locales como mejillones, ostras y trufas de chocolate belga.',
      'La ciudad de Amberes alberga una de las mayores fiestas de Nochevieja al aire libre de Belgica, atrayendo a decenas de miles de asistentes.',
    ],
  },

  planningChecklist: {
    en: [
      'Book restaurant reservations for New Year\'s Eve dinner well in advance',
      'Check the Brussels or Antwerp New Year\'s Eve event schedules for fireworks and live entertainment',
      'Stock up on food and drinks for hosting a gathering — shops are closed on January 1',
      'Prepare nieuwjaarsbrief materials with your children if celebrating in the Flemish tradition',
      'Plan transportation — public transport often runs on special schedules on New Year\'s Eve and Day',
    ],
    fr: [
      'Reserver le restaurant pour le reveillon du Nouvel An bien a l\'avance',
      'Consulter le programme des evenements du Nouvel An a Bruxelles ou Anvers pour les feux d\'artifice et animations',
      'Faire ses provisions pour recevoir — les magasins sont fermes le 1er janvier',
      'Preparer le materiel pour les nieuwjaarsbrief avec les enfants si l\'on celebre la tradition flamande',
      'Planifier les transports — les transports en commun fonctionnent souvent selon des horaires speciaux le soir du reveillon et le jour de l\'An',
    ],
    es: [
      'Reservar restaurante para la cena de Nochevieja con mucha antelacion',
      'Consultar el programa de eventos de Nochevieja en Bruselas o Amberes para fuegos artificiales y entretenimiento',
      'Abastecerse de comida y bebida para recibir invitados — las tiendas estan cerradas el 1 de enero',
      'Preparar los materiales de nieuwjaarsbrief con los ninos si se celebra la tradicion flamenca',
      'Planificar el transporte — el transporte publico suele funcionar con horarios especiales en Nochevieja y Ano Nuevo',
    ],
  },

  relatedHolidays: ['be_christmas'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Belgium — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Belgium? Live countdown to January 1, Belgian traditions, and celebration guide.",
      keywords: ["New Year's Day Belgium", 'Jour de l\'An Belgique', 'Belgian New Year', 'nieuwjaarsbrief', 'Brussels New Year\'s Eve'],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Belgique — Compte a rebours et guide",
      descriptionTemplate: "Quand tombe le Jour de l'An {year} en Belgique ? Compte a rebours, traditions belges et guide des celebrations.",
      keywords: ['Jour de l\'An Belgique', 'Nouvel An Belgique', 'reveillon Bruxelles', 'nieuwjaarsbrief', 'jour ferie janvier Belgique'],
    },
    es: {
      titleTemplate: 'Dia de Ano Nuevo {year} Belgica — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Dia de Ano Nuevo {year} en Belgica? Cuenta regresiva hasta el 1 de enero, tradiciones belgas y guia de celebraciones.',
      keywords: ['Ano Nuevo Belgica', 'Jour de l\'An Belgique', 'Nochevieja Bruselas', 'festivos Belgica', 'tradiciones Ano Nuevo Belgica'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Belgium?", fr: "Quand tombe le Jour de l'An {year} en Belgique ?", es: 'Cuando es el Dia de Ano Nuevo {year} en Belgica?' },
      answer: {
        en: "New Year's Day {year} in Belgium is on {date} ({dayOfWeek}). It is always January 1 and is a national public holiday.",
        fr: "Le Jour de l'An {year} en Belgique tombe le {date} ({dayOfWeek}). C'est toujours le 1er janvier et c'est un jour ferie national.",
        es: 'El Dia de Ano Nuevo {year} en Belgica es el {date} ({dayOfWeek}). Siempre es el 1 de enero y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is a nieuwjaarsbrief?', fr: "Qu'est-ce qu'un nieuwjaarsbrief ?", es: 'Que es un nieuwjaarsbrief?' },
      answer: {
        en: 'A nieuwjaarsbrief is a traditional Flemish New Year\'s letter. Children write decorated letters with wishes for the new year and read them aloud to their parents and godparents on January 1. It is a cherished tradition in Dutch-speaking Belgium.',
        fr: 'Un nieuwjaarsbrief est une lettre traditionnelle flamande du Nouvel An. Les enfants redigent des lettres decorees avec des voeux pour la nouvelle annee et les lisent a voix haute a leurs parents et parrains le 1er janvier. C\'est une tradition cherisee en Belgique neerlandophone.',
        es: 'Un nieuwjaarsbrief es una carta tradicional flamenca de Ano Nuevo. Los ninos escriben cartas decoradas con deseos para el nuevo ano y las leen en voz alta a sus padres y padrinos el 1 de enero. Es una tradicion muy apreciada en la Belgica de habla neerlandesa.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Belgium?", fr: "Le Jour de l'An est-il un jour ferie en Belgique ?", es: 'Es el Dia de Ano Nuevo un dia festivo en Belgica?' },
      answer: {
        en: "Yes, January 1 is one of Belgium's 10 official public holidays. Most businesses, shops, and public services are closed.",
        fr: "Oui, le 1er janvier est l'un des 10 jours feries officiels en Belgique. La plupart des commerces, entreprises et services publics sont fermes.",
        es: 'Si, el 1 de enero es uno de los 10 dias festivos oficiales de Belgica. La mayoria de los comercios, empresas y servicios publicos estan cerrados.',
      },
    },
    {
      question: { en: 'Where are the best New Year\'s Eve celebrations in Belgium?', fr: 'Ou se trouvent les meilleures celebrations du Nouvel An en Belgique ?', es: 'Donde estan las mejores celebraciones de Nochevieja en Belgica?' },
      answer: {
        en: 'Brussels hosts the largest celebrations with fireworks over the Grand Place and live entertainment in the city centre. Antwerp also has a major outdoor party at the Grote Markt. Ghent, Bruges, and Liege also offer festive events and fireworks displays.',
        fr: 'Bruxelles accueille les plus grandes celebrations avec des feux d\'artifice au-dessus de la Grand-Place et des animations en direct dans le centre-ville. Anvers organise egalement une grande fete en plein air au Grote Markt. Gand, Bruges et Liege offrent aussi des evenements festifs et des feux d\'artifice.',
        es: 'Bruselas alberga las mayores celebraciones con fuegos artificiales sobre la Grand Place y entretenimiento en vivo en el centro de la ciudad. Amberes tambien tiene una gran fiesta al aire libre en el Grote Markt. Gante, Brujas y Lieja tambien ofrecen eventos festivos y fuegos artificiales.',
      },
    },
  ],

  colorTheme: 'gold-black',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Belgian National Day — July 21
// ---------------------------------------------------------------------------

const nationalDay: HolidayData = {
  id: 'be_national-day',
  countryCode: 'be',
  slugs: { en: 'national-day', fr: 'fete-nationale', es: 'dia-nacional' },
  names: { en: 'Belgian National Day', fr: 'Fete nationale belge', es: 'Dia Nacional de Belgica' },

  dateType: 'fixed',
  fixedMonth: 7,
  fixedDay: 21,

  descriptions: {
    en: "Belgian National Day on July 21 commemorates the swearing-in of King Leopold I as the first King of the Belgians in 1831, following Belgium's independence from the Netherlands in 1830. The celebration features a military parade in Brussels, the Te Deum ceremony at the Cathedral of St. Michael and St. Gudula, fireworks, and free public festivities.",
    fr: "La Fete nationale belge du 21 juillet commemore la prestation de serment du roi Leopold Ier comme premier Roi des Belges en 1831, apres l'independance de la Belgique des Pays-Bas en 1830. La celebration comprend un defile militaire a Bruxelles, le Te Deum a la cathedrale Saints-Michel-et-Gudule, des feux d'artifice et des festivites publiques gratuites.",
    es: "El Dia Nacional de Belgica, el 21 de julio, conmemora la jura del rey Leopoldo I como primer Rey de los Belgas en 1831, tras la independencia de Belgica de los Paises Bajos en 1830. La celebracion incluye un desfile militar en Bruselas, la ceremonia del Te Deum en la Catedral de San Miguel y Santa Gudula, fuegos artificiales y festividades publicas gratuitas.",
  },

  history: {
    en: "Belgium declared its independence from the Kingdom of the Netherlands on October 4, 1830, following a revolution that began in August 1830 after a performance of the opera La Muette de Portici at the Theatre de la Monnaie in Brussels. The revolutionary fervour quickly spread through the city and the country.\n\nOn July 21, 1831, Prince Leopold of Saxe-Coburg-Gotha took the constitutional oath as Leopold I, the first King of the Belgians, on the Place Royale in Brussels. This date was chosen for the national holiday rather than the October independence date.\n\nThe national celebration has been held on July 21 since 1890. Today, it brings together all three of Belgium's linguistic communities — Dutch-speaking Flemish, French-speaking Walloons, and German-speaking Belgians — in a celebration of national unity.",
    fr: "La Belgique a declare son independance du Royaume des Pays-Bas le 4 octobre 1830, a la suite d'une revolution qui debuta en aout 1830 apres une representation de l'opera La Muette de Portici au Theatre de la Monnaie a Bruxelles. La ferveur revolutionnaire se repandit rapidement dans la ville et le pays.\n\nLe 21 juillet 1831, le prince Leopold de Saxe-Cobourg-Gotha preta le serment constitutionnel en tant que Leopold Ier, premier Roi des Belges, sur la Place Royale a Bruxelles. Cette date a ete choisie pour la fete nationale plutot que la date d'independance en octobre.\n\nLa celebration nationale est organisee le 21 juillet depuis 1890. Aujourd'hui, elle rassemble les trois communautes linguistiques de Belgique — les Flamands neerlandophones, les Wallons francophones et les Belges germanophones — dans une celebration de l'unite nationale.",
    es: "Belgica declaro su independencia del Reino de los Paises Bajos el 4 de octubre de 1830, tras una revolucion que comenzo en agosto de 1830 despues de una representacion de la opera La Muette de Portici en el Theatre de la Monnaie de Bruselas. El fervor revolucionario se extendio rapidamente por la ciudad y el pais.\n\nEl 21 de julio de 1831, el principe Leopoldo de Sajonia-Coburgo-Gotha presto el juramento constitucional como Leopoldo I, primer Rey de los Belgas, en la Place Royale de Bruselas. Esta fecha fue elegida para la fiesta nacional en lugar de la fecha de independencia de octubre.\n\nLa celebracion nacional se celebra el 21 de julio desde 1890. Hoy en dia, reune a las tres comunidades linguisticas de Belgica — los flamencos neerlandofonos, los valones francofonos y los belgas germanofonos — en una celebracion de la unidad nacional.",
  },

  traditions: {
    en: [
      'Watching the military parade along the Rue de la Loi in Brussels, reviewed by the Royal Family',
      'Attending the Te Deum ceremony at the Cathedral of St. Michael and St. Gudula',
      'Watching the spectacular fireworks display over the Royal Palace in the evening',
      'Enjoying free concerts, street entertainment, and festivities in the Parc de Bruxelles',
      'Flying the Belgian tricolour flag (black, yellow, and red) from homes and public buildings',
      'Visiting the open-air events and activities around the Royal Palace',
      'Attending local celebrations and community events across the country',
    ],
    fr: [
      'Regarder le defile militaire le long de la Rue de la Loi a Bruxelles, passe en revue par la Famille Royale',
      'Assister au Te Deum a la cathedrale Saints-Michel-et-Gudule',
      'Admirer le spectaculaire feu d\'artifice au-dessus du Palais Royal en soiree',
      'Profiter des concerts gratuits, animations de rue et festivites au Parc de Bruxelles',
      'Arborer le drapeau tricolore belge (noir, jaune et rouge) aux facades des maisons et des batiments publics',
      'Visiter les evenements en plein air et les activites autour du Palais Royal',
      'Participer aux celebrations locales et evenements communautaires dans tout le pays',
    ],
    es: [
      'Ver el desfile militar a lo largo de la Rue de la Loi en Bruselas, supervisado por la Familia Real',
      'Asistir a la ceremonia del Te Deum en la Catedral de San Miguel y Santa Gudula',
      'Ver los espectaculares fuegos artificiales sobre el Palacio Real por la noche',
      'Disfrutar de conciertos gratuitos, entretenimiento callejero y festividades en el Parc de Bruxelles',
      'Ondear la bandera tricolor belga (negra, amarilla y roja) en hogares y edificios publicos',
      'Visitar los eventos al aire libre y actividades alrededor del Palacio Real',
      'Asistir a celebraciones locales y eventos comunitarios en todo el pais',
    ],
  },

  funFacts: {
    en: [
      'The Belgian Revolution of 1830 was triggered by a performance of the opera La Muette de Portici at the Theatre de la Monnaie in Brussels — the audience was so moved by themes of revolution that they poured into the streets.',
      'Belgium is one of the youngest countries in Western Europe, gaining independence only in 1830.',
      'The Belgian national holiday celebrates July 21, 1831 (Leopold I\'s oath), not October 4, 1830 (the declaration of independence).',
      'The Brussels military parade features troops from all branches of the Belgian Armed Forces and is attended by the Royal Family.',
      'Belgium has three official languages — Dutch, French, and German — and National Day celebrations include events in all three linguistic communities.',
    ],
    fr: [
      'La Revolution belge de 1830 a ete declenchee par une representation de l\'opera La Muette de Portici au Theatre de la Monnaie a Bruxelles — le public, emu par les themes revolutionnaires, se repandit dans les rues.',
      'La Belgique est l\'un des plus jeunes pays d\'Europe occidentale, n\'ayant obtenu son independance qu\'en 1830.',
      'La fete nationale belge celebre le 21 juillet 1831 (serment de Leopold Ier), et non le 4 octobre 1830 (la declaration d\'independance).',
      'Le defile militaire de Bruxelles presente des troupes de toutes les branches des Forces armees belges et est assiste par la Famille Royale.',
      'La Belgique a trois langues officielles — le neerlandais, le francais et l\'allemand — et les celebrations de la Fete nationale comprennent des evenements dans les trois communautes linguistiques.',
    ],
    es: [
      'La Revolucion Belga de 1830 fue desencadenada por una representacion de la opera La Muette de Portici en el Theatre de la Monnaie de Bruselas — el publico estaba tan conmovido por los temas revolucionarios que salio a las calles.',
      'Belgica es uno de los paises mas jovenes de Europa Occidental, habiendo obtenido su independencia solo en 1830.',
      'La fiesta nacional belga celebra el 21 de julio de 1831 (juramento de Leopoldo I), no el 4 de octubre de 1830 (la declaracion de independencia).',
      'El desfile militar de Bruselas presenta tropas de todas las ramas de las Fuerzas Armadas belgas y es atendido por la Familia Real.',
      'Belgica tiene tres idiomas oficiales — neerlandes, frances y aleman — y las celebraciones del Dia Nacional incluyen eventos en las tres comunidades linguisticas.',
    ],
  },

  planningChecklist: {
    en: [
      'Arrive early at the Rue de la Loi to secure a good spot for the military parade',
      'Check the schedule of free events and concerts at the Parc de Bruxelles',
      'Find a good viewing location for the evening fireworks display near the Royal Palace',
      'Plan transportation — central Brussels is partially closed to traffic on July 21',
      'Wear or display the Belgian colours (black, yellow, and red) to join in the national spirit',
    ],
    fr: [
      'Arriver tot Rue de la Loi pour avoir un bon emplacement pour le defile militaire',
      'Consulter le programme des evenements et concerts gratuits au Parc de Bruxelles',
      'Trouver un bon point de vue pour le feu d\'artifice du soir pres du Palais Royal',
      'Planifier les transports — le centre de Bruxelles est partiellement ferme a la circulation le 21 juillet',
      'Porter ou afficher les couleurs belges (noir, jaune et rouge) pour participer a l\'esprit national',
    ],
    es: [
      'Llegar temprano a la Rue de la Loi para asegurar un buen lugar para el desfile militar',
      'Consultar el programa de eventos y conciertos gratuitos en el Parc de Bruxelles',
      'Encontrar un buen punto de observacion para los fuegos artificiales nocturnos cerca del Palacio Real',
      'Planificar el transporte — el centro de Bruselas esta parcialmente cerrado al trafico el 21 de julio',
      'Vestir o exhibir los colores belgas (negro, amarillo y rojo) para unirse al espiritu nacional',
    ],
  },

  relatedHolidays: ['be_armistice-day'],

  seo: {
    en: {
      titleTemplate: 'Belgian National Day {year} — July 21 Countdown & Guide',
      descriptionTemplate: 'When is Belgian National Day {year}? Live countdown to July 21, military parade, fireworks, and celebration guide.',
      keywords: ['Belgian National Day', 'July 21 Belgium', 'Fete nationale belge', 'Belgium independence day', 'Brussels military parade'],
    },
    fr: {
      titleTemplate: 'Fete nationale belge {year} — Compte a rebours du 21 juillet',
      descriptionTemplate: 'Quand tombe la Fete nationale belge {year} ? Compte a rebours du 21 juillet, defile militaire, feu d\'artifice et guide.',
      keywords: ['Fete nationale belge', '21 juillet Belgique', 'defile militaire Bruxelles', 'feu d\'artifice 21 juillet', 'independance Belgique'],
    },
    es: {
      titleTemplate: 'Dia Nacional de Belgica {year} — Cuenta regresiva del 21 de julio',
      descriptionTemplate: 'Cuando es el Dia Nacional de Belgica {year}? Cuenta regresiva hasta el 21 de julio, desfile militar, fuegos artificiales y guia.',
      keywords: ['Dia Nacional Belgica', '21 de julio Belgica', 'desfile militar Bruselas', 'independencia Belgica', 'fiesta nacional belga'],
    },
  },

  faq: [
    {
      question: { en: 'When is Belgian National Day {year}?', fr: 'Quand tombe la Fete nationale belge {year} ?', es: 'Cuando es el Dia Nacional de Belgica {year}?' },
      answer: {
        en: 'Belgian National Day {year} is on {date} ({dayOfWeek}). It is always July 21 and is a national public holiday.',
        fr: 'La Fete nationale belge {year} tombe le {date} ({dayOfWeek}). C\'est toujours le 21 juillet et c\'est un jour ferie national.',
        es: 'El Dia Nacional de Belgica {year} es el {date} ({dayOfWeek}). Siempre es el 21 de julio y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Why is Belgian National Day on July 21?', fr: 'Pourquoi la Fete nationale belge est-elle le 21 juillet ?', es: 'Por que el Dia Nacional de Belgica es el 21 de julio?' },
      answer: {
        en: 'July 21 marks the date in 1831 when Prince Leopold of Saxe-Coburg-Gotha took the constitutional oath as Leopold I, the first King of the Belgians. This was chosen over the October 4, 1830 independence declaration date.',
        fr: 'Le 21 juillet marque la date de 1831 ou le prince Leopold de Saxe-Cobourg-Gotha preta le serment constitutionnel en tant que Leopold Ier, premier Roi des Belges. Cette date a ete preferee a celle de la declaration d\'independance du 4 octobre 1830.',
        es: 'El 21 de julio marca la fecha de 1831 en que el principe Leopoldo de Sajonia-Coburgo-Gotha presto el juramento constitucional como Leopoldo I, primer Rey de los Belgas. Esta fecha fue elegida sobre la declaracion de independencia del 4 de octubre de 1830.',
      },
    },
    {
      question: { en: 'What events happen on Belgian National Day?', fr: 'Quels evenements ont lieu le jour de la Fete nationale belge ?', es: 'Que eventos tienen lugar en el Dia Nacional de Belgica?' },
      answer: {
        en: 'The main events include a military parade on the Rue de la Loi reviewed by the Royal Family, a Te Deum ceremony at the Cathedral, free concerts and activities at the Parc de Bruxelles, and a spectacular fireworks display in the evening.',
        fr: 'Les principaux evenements comprennent un defile militaire sur la Rue de la Loi passe en revue par la Famille Royale, un Te Deum a la cathedrale, des concerts et activites gratuits au Parc de Bruxelles, et un spectaculaire feu d\'artifice en soiree.',
        es: 'Los principales eventos incluyen un desfile militar en la Rue de la Loi supervisado por la Familia Real, una ceremonia de Te Deum en la Catedral, conciertos y actividades gratuitas en el Parc de Bruxelles, y un espectacular espectaculo de fuegos artificiales por la noche.',
      },
    },
    {
      question: { en: 'How did the Belgian Revolution start?', fr: 'Comment la Revolution belge a-t-elle commence ?', es: 'Como empezo la Revolucion Belga?' },
      answer: {
        en: 'The Belgian Revolution began on August 25, 1830, after a performance of the opera La Muette de Portici at the Theatre de la Monnaie in Brussels. The audience, inspired by the opera\'s themes of revolution and liberation, took to the streets, sparking an uprising that led to Belgium\'s independence from the Netherlands.',
        fr: 'La Revolution belge a commence le 25 aout 1830, apres une representation de l\'opera La Muette de Portici au Theatre de la Monnaie a Bruxelles. Le public, inspire par les themes revolutionnaires de l\'opera, descendit dans la rue, declenchant un soulevement qui mena a l\'independance de la Belgique des Pays-Bas.',
        es: 'La Revolucion Belga comenzo el 25 de agosto de 1830, despues de una representacion de la opera La Muette de Portici en el Theatre de la Monnaie de Bruselas. El publico, inspirado por los temas de revolucion y liberacion de la opera, salio a las calles, desencadenando un levantamiento que llevo a la independencia de Belgica de los Paises Bajos.',
      },
    },
  ],

  colorTheme: 'black-yellow-red',
  icon: '\ud83c\udde7\ud83c\uddea',
};

// ---------------------------------------------------------------------------
// Assumption of Mary — August 15
// ---------------------------------------------------------------------------

const assumption: HolidayData = {
  id: 'be_assumption',
  countryCode: 'be',
  slugs: { en: 'assumption-of-mary', fr: 'assomption', es: 'asuncion-de-maria' },
  names: { en: 'Assumption of Mary', fr: "L'Assomption", es: 'Asuncion de Maria' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 15,

  descriptions: {
    en: "The Assumption of Mary on August 15 is a public holiday in Belgium, celebrating the Catholic belief that the Virgin Mary was assumed into heaven. Belgium, with its strong Catholic heritage, marks the day with church services, processions, and local festivals, particularly notable in Wallonia and the historic cities of Flanders.",
    fr: "L'Assomption, le 15 aout, est un jour ferie en Belgique celebrant la croyance catholique selon laquelle la Vierge Marie a ete elevee au ciel. La Belgique, avec son fort heritage catholique, marque cette journee par des offices religieux, des processions et des fetes locales, particulierement remarquables en Wallonie et dans les villes historiques de Flandre.",
    es: "La Asuncion de Maria, el 15 de agosto, es un dia festivo en Belgica que celebra la creencia catolica de que la Virgen Maria fue asunta al cielo. Belgica, con su fuerte herencia catolica, celebra el dia con oficios religiosos, procesiones y fiestas locales, particularmente notables en Valonia y las ciudades historicas de Flandes.",
  },

  history: {
    en: "The Assumption of Mary has been a major feast day in Belgium since the medieval period. Belgium's deeply Catholic history means that August 15 has been celebrated with religious fervour for centuries, with elaborate processions through city streets dating back to the Middle Ages.\n\nThe most famous Belgian celebration of the Assumption is the Procession of the Giant in Ath (Ducasse d'Ath), a UNESCO-listed folk festival featuring giant figures parading through the streets. In Liege, the Outremeuse quarter hosts the celebration of the Republic of Free Outremeuse, a unique local tradition.\n\nAugust 15 also coincides with summer holidays in Belgium, making it a popular day for family gatherings, day trips, and enjoying the last weeks of summer. Many Belgian towns and villages organise local fetes and festivities around this date.",
    fr: "L'Assomption est une fete majeure en Belgique depuis le Moyen Age. L'histoire profondement catholique de la Belgique signifie que le 15 aout est celebre avec ferveur religieuse depuis des siecles, avec des processions elaborees dans les rues des villes remontant au Moyen Age.\n\nLa celebration belge la plus celebre de l'Assomption est la Ducasse d'Ath, un festival folklorique inscrit au patrimoine de l'UNESCO, mettant en scene des geants qui defilent dans les rues. A Liege, le quartier d'Outremeuse accueille la celebration de la Republique libre d'Outremeuse, une tradition locale unique.\n\nLe 15 aout coincide egalement avec les vacances d'ete en Belgique, ce qui en fait une journee populaire pour les reunions de famille, les excursions et la jouissance des dernieres semaines de l'ete. De nombreuses villes et villages belges organisent des fetes et festivites locales autour de cette date.",
    es: "La Asuncion de Maria ha sido una gran festividad en Belgica desde el periodo medieval. La profunda historia catolica de Belgica significa que el 15 de agosto se ha celebrado con fervor religioso durante siglos, con elaboradas procesiones por las calles de las ciudades que se remontan a la Edad Media.\n\nLa celebracion belga mas famosa de la Asuncion es la Ducasse d'Ath, un festival folclorico declarado Patrimonio de la Humanidad por la UNESCO, con figuras gigantes desfilando por las calles. En Lieja, el barrio de Outremeuse alberga la celebracion de la Republica Libre de Outremeuse, una tradicion local unica.\n\nEl 15 de agosto tambien coincide con las vacaciones de verano en Belgica, lo que lo convierte en un dia popular para reuniones familiares, excursiones y disfrutar de las ultimas semanas del verano. Muchas ciudades y pueblos belgas organizan fiestas y festividades locales alrededor de esta fecha.",
  },

  traditions: {
    en: [
      'Attending special Mass and church services dedicated to the Virgin Mary',
      'Watching or participating in religious and folk processions through towns',
      'Attending the Ducasse d\'Ath — a UNESCO-listed folk festival with giant figures',
      'Celebrating the Republic of Free Outremeuse in Liege with music, food, and street parties',
      'Enjoying local village fetes and summer festivals across Belgium',
      'Making day trips to the Belgian coast or Ardennes forests during the summer holiday',
    ],
    fr: [
      'Assister a la messe speciale et aux offices religieux dedies a la Vierge Marie',
      'Regarder ou participer aux processions religieuses et folkloriques dans les villes',
      'Assister a la Ducasse d\'Ath — un festival folklorique inscrit au patrimoine de l\'UNESCO avec des geants',
      'Celebrer la Republique libre d\'Outremeuse a Liege avec musique, gastronomie et fetes de rue',
      'Profiter des fetes de village et des festivals d\'ete a travers la Belgique',
      'Faire des excursions a la cote belge ou dans les forets des Ardennes pendant les vacances d\'ete',
    ],
    es: [
      'Asistir a misa especial y oficios religiosos dedicados a la Virgen Maria',
      'Ver o participar en procesiones religiosas y folcloricas por las ciudades',
      'Asistir a la Ducasse d\'Ath — un festival folclorico Patrimonio de la UNESCO con figuras gigantes',
      'Celebrar la Republica Libre de Outremeuse en Lieja con musica, comida y fiestas callejeras',
      'Disfrutar de fiestas de pueblo y festivales de verano en toda Belgica',
      'Hacer excursiones a la costa belga o los bosques de las Ardenas durante las vacaciones de verano',
    ],
  },

  funFacts: {
    en: [
      'The Ducasse d\'Ath, held during the Assumption weekend, features giant figures including Goliath (Gouyasse) and has been a UNESCO Intangible Cultural Heritage since 2005.',
      'In the Outremeuse quarter of Liege, locals proclaim a "Republic of Free Outremeuse" around August 15 — a humorous mock state with its own flag and traditions.',
      'Belgium has one of the highest concentrations of religious processions in Europe, many of which take place around August 15.',
      'The Belgian coast receives its highest visitor numbers in August, with August 15 being one of the busiest days.',
      'Many Belgian chocolate shops offer special Assumption-themed boxes during the August 15 holiday period.',
    ],
    fr: [
      'La Ducasse d\'Ath, qui a lieu le week-end de l\'Assomption, met en scene des geants dont Gouyasse (Goliath) et est inscrite au patrimoine culturel immateriel de l\'UNESCO depuis 2005.',
      'Dans le quartier d\'Outremeuse a Liege, les habitants proclament une "Republique libre d\'Outremeuse" autour du 15 aout — un Etat fictif humoristique avec son propre drapeau et ses traditions.',
      'La Belgique possede l\'une des plus fortes concentrations de processions religieuses en Europe, dont beaucoup ont lieu autour du 15 aout.',
      'La cote belge enregistre ses plus hauts chiffres de frequentation en aout, le 15 aout etant l\'une des journees les plus chargees.',
      'De nombreuses chocolateries belges proposent des coffrets speciaux pour l\'Assomption pendant la periode de conge du 15 aout.',
    ],
    es: [
      'La Ducasse d\'Ath, celebrada durante el fin de semana de la Asuncion, presenta figuras gigantes incluyendo a Goliat (Gouyasse) y es Patrimonio Cultural Inmaterial de la UNESCO desde 2005.',
      'En el barrio de Outremeuse en Lieja, los vecinos proclaman una "Republica Libre de Outremeuse" alrededor del 15 de agosto — un estado ficticio humoristico con su propia bandera y tradiciones.',
      'Belgica tiene una de las mayores concentraciones de procesiones religiosas en Europa, muchas de las cuales tienen lugar alrededor del 15 de agosto.',
      'La costa belga registra sus cifras mas altas de visitantes en agosto, siendo el 15 de agosto uno de los dias mas concurridos.',
      'Muchas chocolaterias belgas ofrecen cajas especiales tematicas de la Asuncion durante el periodo festivo del 15 de agosto.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the schedule for the Ducasse d\'Ath or other local folk festivals if visiting Wallonia',
      'Book accommodation early if visiting the Belgian coast — August 15 weekend is extremely busy',
      'Plan for closures — most shops and businesses are closed on this public holiday',
      'Look for local village fetes and summer events in your area',
      'Consider visiting Liege for the unique Republic of Free Outremeuse celebrations',
    ],
    fr: [
      'Consulter le programme de la Ducasse d\'Ath ou d\'autres festivals folkloriques locaux si l\'on visite la Wallonie',
      'Reserver l\'hebergement tot si l\'on visite la cote belge — le week-end du 15 aout est extremement frequente',
      'Prevoir les fermetures — la plupart des commerces et entreprises sont fermes ce jour ferie',
      'Rechercher les fetes de village et evenements d\'ete dans votre region',
      'Envisager de visiter Liege pour les celebrations uniques de la Republique libre d\'Outremeuse',
    ],
    es: [
      'Consultar el programa de la Ducasse d\'Ath u otros festivales folcloricos locales si se visita Valonia',
      'Reservar alojamiento con antelacion si se visita la costa belga — el fin de semana del 15 de agosto esta extremadamente concurrido',
      'Planificar los cierres — la mayoria de las tiendas y negocios estan cerrados en este dia festivo',
      'Buscar fiestas de pueblo y eventos de verano en su zona',
      'Considerar visitar Lieja para las unicas celebraciones de la Republica Libre de Outremeuse',
    ],
  },

  relatedHolidays: ['fr_assumption', 'be_all-saints-day'],

  seo: {
    en: {
      titleTemplate: 'Assumption of Mary {year} Belgium — August 15 Countdown & Guide',
      descriptionTemplate: 'When is the Assumption {year} in Belgium? Live countdown to August 15, processions, folk festivals, and celebration guide.',
      keywords: ['Assumption Belgium', 'August 15 Belgium', 'Assomption Belgique', 'Ducasse Ath', 'Belgian public holiday August'],
    },
    fr: {
      titleTemplate: "L'Assomption {year} Belgique — Compte a rebours du 15 aout",
      descriptionTemplate: "Quand tombe l'Assomption {year} en Belgique ? Compte a rebours, processions, festivals folkloriques et guide des celebrations.",
      keywords: ['Assomption Belgique', '15 aout Belgique', 'Ducasse Ath', 'jour ferie aout Belgique', 'processions 15 aout'],
    },
    es: {
      titleTemplate: 'Asuncion de Maria {year} Belgica — Cuenta regresiva del 15 de agosto',
      descriptionTemplate: 'Cuando es la Asuncion {year} en Belgica? Cuenta regresiva hasta el 15 de agosto, procesiones, festivales y guia.',
      keywords: ['Asuncion Belgica', '15 de agosto Belgica', 'Ducasse Ath', 'festivo agosto Belgica', 'procesiones Belgica'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Assumption of Mary {year} in Belgium?', fr: "Quand tombe l'Assomption {year} en Belgique ?", es: 'Cuando es la Asuncion de Maria {year} en Belgica?' },
      answer: {
        en: 'The Assumption of Mary {year} in Belgium is on {date} ({dayOfWeek}). It is always August 15 and is a national public holiday.',
        fr: "L'Assomption {year} en Belgique tombe le {date} ({dayOfWeek}). C'est toujours le 15 aout et c'est un jour ferie national.",
        es: 'La Asuncion de Maria {year} en Belgica es el {date} ({dayOfWeek}). Siempre es el 15 de agosto y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is the Ducasse d\'Ath?', fr: "Qu'est-ce que la Ducasse d'Ath ?", es: 'Que es la Ducasse d\'Ath?' },
      answer: {
        en: 'The Ducasse d\'Ath is a famous Belgian folk festival held during the Assumption weekend in the city of Ath, Wallonia. It features a parade of giant figures through the streets, most notably Goliath (Gouyasse). It has been a UNESCO Intangible Cultural Heritage since 2005.',
        fr: "La Ducasse d'Ath est un celebre festival folklorique belge organise le week-end de l'Assomption dans la ville d'Ath, en Wallonie. Elle presente un defile de geants dans les rues, notamment Gouyasse (Goliath). Elle est inscrite au patrimoine culturel immateriel de l'UNESCO depuis 2005.",
        es: 'La Ducasse d\'Ath es un famoso festival folclorico belga celebrado durante el fin de semana de la Asuncion en la ciudad de Ath, Valonia. Presenta un desfile de figuras gigantes por las calles, especialmente Goliat (Gouyasse). Es Patrimonio Cultural Inmaterial de la UNESCO desde 2005.',
      },
    },
    {
      question: { en: 'Are shops open on August 15 in Belgium?', fr: 'Les magasins sont-ils ouverts le 15 aout en Belgique ?', es: 'Estan abiertas las tiendas el 15 de agosto en Belgica?' },
      answer: {
        en: 'Most shops and businesses are closed on August 15, as it is a national public holiday. Some tourist-oriented shops and restaurants in major cities may remain open.',
        fr: "La plupart des commerces et entreprises sont fermes le 15 aout, car c'est un jour ferie national. Certains commerces et restaurants touristiques dans les grandes villes peuvent rester ouverts.",
        es: 'La mayoria de las tiendas y negocios estan cerrados el 15 de agosto, ya que es un dia festivo nacional. Algunas tiendas y restaurantes orientados al turismo en las principales ciudades pueden permanecer abiertos.',
      },
    },
    {
      question: { en: 'What is the Republic of Free Outremeuse?', fr: "Qu'est-ce que la Republique libre d'Outremeuse ?", es: 'Que es la Republica Libre de Outremeuse?' },
      answer: {
        en: 'The Republic of Free Outremeuse is a humorous mock state proclaimed in the Outremeuse quarter of Liege around August 15. It has its own flag, anthem, and "government," and the celebrations include street parties, music, and traditional food. It reflects the playful spirit of the Liegeois.',
        fr: "La Republique libre d'Outremeuse est un Etat fictif humoristique proclame dans le quartier d'Outremeuse a Liege autour du 15 aout. Elle possede son propre drapeau, son hymne et son \"gouvernement\", et les celebrations comprennent des fetes de rue, de la musique et de la cuisine traditionnelle. Elle reflete l'esprit joueur des Liegeois.",
        es: 'La Republica Libre de Outremeuse es un estado ficticio humoristico proclamado en el barrio de Outremeuse en Lieja alrededor del 15 de agosto. Tiene su propia bandera, himno y "gobierno", y las celebraciones incluyen fiestas callejeras, musica y comida tradicional. Refleja el espiritu jugeton de los habitantes de Lieja.',
      },
    },
  ],

  colorTheme: 'blue-white',
  icon: '\u271d\ufe0f',
};

// ---------------------------------------------------------------------------
// All Saints' Day — November 1
// ---------------------------------------------------------------------------

const allSaintsDay: HolidayData = {
  id: 'be_all-saints-day',
  countryCode: 'be',
  slugs: { en: 'all-saints-day', fr: 'toussaint', es: 'dia-de-todos-los-santos' },
  names: { en: "All Saints' Day", fr: 'La Toussaint', es: 'Dia de Todos los Santos' },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 1,

  descriptions: {
    en: "All Saints' Day on November 1 is a public holiday in Belgium, honouring all Christian saints. As in neighbouring France, Belgians use this day primarily to visit cemeteries and tend the graves of deceased loved ones, placing chrysanthemums and lighting candles in their memory.",
    fr: "La Toussaint, le 1er novembre, est un jour ferie en Belgique qui honore tous les saints chretiens. Comme en France voisine, les Belges profitent de cette journee principalement pour visiter les cimetieres et entretenir les tombes de leurs proches disparus, en deposant des chrysanthemes et en allumant des bougies a leur memoire.",
    es: "El Dia de Todos los Santos, el 1 de noviembre, es un dia festivo en Belgica que honra a todos los santos cristianos. Al igual que en la vecina Francia, los belgas aprovechan este dia principalmente para visitar cementerios y cuidar las tumbas de sus seres queridos fallecidos, colocando crisantemos y encendiendo velas en su memoria.",
  },

  history: {
    en: "All Saints' Day has been observed in Belgium since the early Middle Ages, deeply rooted in the country's Catholic heritage. The holiday became an official public holiday in the 19th century following Belgian independence.\n\nAs in France, the Belgian tradition of visiting graves on November 1 blends the feast of All Saints with the spirit of November 2, the Day of the Dead. The tradition of placing chrysanthemums on graves became widespread in Belgium after World War I, mirroring the French practice.\n\nThe Toussaint school holiday in Belgium typically spans one week (shorter than France's two weeks), giving families time to gather and visit cemeteries together. The autumn atmosphere and shorter days add a contemplative quality to this day of remembrance.",
    fr: "La Toussaint est observee en Belgique depuis le haut Moyen Age, profondement enracinee dans l'heritage catholique du pays. Ce jour ferie est devenu officiel au XIXe siecle apres l'independance de la Belgique.\n\nComme en France, la tradition belge de visiter les tombes le 1er novembre mele la fete de tous les saints a l'esprit du 2 novembre, le Jour des Morts. La tradition de deposer des chrysanthemes sur les tombes s'est repandue en Belgique apres la Premiere Guerre mondiale, a l'instar de la pratique francaise.\n\nLes vacances scolaires de la Toussaint en Belgique durent generalement une semaine (plus courtes que les deux semaines francaises), donnant aux familles le temps de se reunir et de visiter les cimetieres ensemble. L'atmosphere automnale et les jours plus courts ajoutent une qualite contemplative a ce jour de recueillement.",
    es: "El Dia de Todos los Santos se observa en Belgica desde la Alta Edad Media, profundamente arraigado en la herencia catolica del pais. La festividad se convirtio en dia festivo oficial en el siglo XIX tras la independencia belga.\n\nAl igual que en Francia, la tradicion belga de visitar tumbas el 1 de noviembre mezcla la fiesta de Todos los Santos con el espiritu del 2 de noviembre, el Dia de los Muertos. La tradicion de colocar crisantemos en las tumbas se generalizo en Belgica despues de la Primera Guerra Mundial, reflejando la practica francesa.\n\nLas vacaciones escolares de la Toussaint en Belgica suelen durar una semana (mas cortas que las dos semanas francesas), dando a las familias tiempo para reunirse y visitar los cementerios juntos. La atmosfera otonal y los dias mas cortos anaden una cualidad contemplativa a este dia de recuerdo.",
  },

  traditions: {
    en: [
      'Visiting the graves of deceased family members and friends in cemeteries',
      'Placing pots of chrysanthemums on graves — a tradition shared with France',
      'Lighting candles and lanterns on graves as a symbol of remembrance',
      'Attending church services to honour all saints',
      'Cleaning and maintaining family graves before November 1',
      'Enjoying the autumn school holiday (conge de Toussaint) with family',
    ],
    fr: [
      'Visiter les tombes des proches defunts dans les cimetieres',
      'Deposer des pots de chrysanthemes sur les tombes — une tradition partagee avec la France',
      'Allumer des bougies et des lanternes sur les tombes en signe de recueillement',
      'Assister aux offices religieux en l\'honneur de tous les saints',
      'Nettoyer et entretenir les tombes familiales avant le 1er novembre',
      'Profiter du conge scolaire de la Toussaint en famille',
    ],
    es: [
      'Visitar las tumbas de familiares y amigos fallecidos en los cementerios',
      'Colocar macetas de crisantemos en las tumbas — una tradicion compartida con Francia',
      'Encender velas y faroles en las tumbas como simbolo de recuerdo',
      'Asistir a oficios religiosos en honor de todos los santos',
      'Limpiar y mantener las tumbas familiares antes del 1 de noviembre',
      'Disfrutar de las vacaciones escolares de la Toussaint en familia',
    ],
  },

  funFacts: {
    en: [
      'Belgium and France share the tradition of chrysanthemums on graves, making these flowers strongly associated with death in both countries — never give them as a gift to a living person.',
      'The Toussaint school holiday in Belgium typically lasts one week, compared to two weeks in France.',
      'Belgian cemeteries are often immaculately maintained, with many families making a special effort to clean and decorate graves before November 1.',
      'In Flemish tradition, November 1 is called "Allerheiligen" and the following day, November 2, is "Allerzielen" (All Souls\' Day).',
      'Some Belgian towns organise special late-night cemetery openings with candlelit paths on All Saints\' Eve.',
    ],
    fr: [
      'La Belgique et la France partagent la tradition des chrysanthemes sur les tombes, ce qui associe fortement ces fleurs a la mort dans les deux pays — ne les offrez jamais en cadeau a une personne vivante.',
      'Les vacances scolaires de la Toussaint en Belgique durent generalement une semaine, contre deux semaines en France.',
      'Les cimetieres belges sont souvent impeccablement entretenus, de nombreuses familles faisant un effort particulier pour nettoyer et decorer les tombes avant le 1er novembre.',
      'Dans la tradition flamande, le 1er novembre s\'appelle "Allerheiligen" et le jour suivant, le 2 novembre, est "Allerzielen" (jour des ames).',
      'Certaines villes belges organisent des ouvertures nocturnes speciales des cimetieres avec des chemins eclaires a la bougie la veille de la Toussaint.',
    ],
    es: [
      'Belgica y Francia comparten la tradicion de los crisantemos en las tumbas, lo que asocia fuertemente estas flores con la muerte en ambos paises — nunca las regale a una persona viva.',
      'Las vacaciones escolares de la Toussaint en Belgica suelen durar una semana, frente a las dos semanas de Francia.',
      'Los cementerios belgas suelen estar impecablemente mantenidos, con muchas familias haciendo un esfuerzo especial para limpiar y decorar las tumbas antes del 1 de noviembre.',
      'En la tradicion flamenca, el 1 de noviembre se llama "Allerheiligen" y el dia siguiente, 2 de noviembre, es "Allerzielen" (Dia de las Almas).',
      'Algunas ciudades belgas organizan aperturas nocturnas especiales de cementerios con caminos iluminados con velas la vispera de la Toussaint.',
    ],
  },

  planningChecklist: {
    en: [
      'Buy chrysanthemum pots early — they sell quickly in the days before November 1',
      'Coordinate with family members for a joint visit to the cemetery',
      'Clean and prepare the family grave site before November 1',
      'Check church service schedules for special Toussaint Masses',
      'Take advantage of the school holiday to plan a family gathering',
    ],
    fr: [
      'Acheter les pots de chrysanthemes tot — ils partent vite dans les jours precedant le 1er novembre',
      'Se coordonner avec les membres de la famille pour une visite commune au cimetiere',
      'Nettoyer et preparer la sepulture familiale avant le 1er novembre',
      'Verifier les horaires des messes speciales de la Toussaint',
      'Profiter du conge scolaire pour organiser une reunion de famille',
    ],
    es: [
      'Comprar macetas de crisantemos con antelacion — se agotan rapido en los dias previos al 1 de noviembre',
      'Coordinarse con los miembros de la familia para una visita conjunta al cementerio',
      'Limpiar y preparar la sepultura familiar antes del 1 de noviembre',
      'Consultar los horarios de misas especiales de la Toussaint',
      'Aprovechar las vacaciones escolares para organizar una reunion familiar',
    ],
  },

  relatedHolidays: ['be_armistice-day', 'fr_all-saints-day'],

  seo: {
    en: {
      titleTemplate: "All Saints' Day {year} Belgium — November 1 Countdown & Guide",
      descriptionTemplate: "When is All Saints' Day {year} in Belgium? Live countdown to November 1, traditions, and celebration guide.",
      keywords: ["All Saints' Day Belgium", 'Toussaint Belgique', 'November 1 Belgium', 'Allerheiligen', 'Belgian public holiday November'],
    },
    fr: {
      titleTemplate: 'La Toussaint {year} Belgique — Compte a rebours du 1er novembre',
      descriptionTemplate: 'Quand tombe la Toussaint {year} en Belgique ? Compte a rebours, traditions et guide du jour ferie.',
      keywords: ['Toussaint Belgique', '1er novembre Belgique', 'chrysanthemes Toussaint', 'Allerheiligen', 'jour ferie novembre Belgique'],
    },
    es: {
      titleTemplate: 'Dia de Todos los Santos {year} Belgica — Cuenta regresiva del 1 de noviembre',
      descriptionTemplate: 'Cuando es el Dia de Todos los Santos {year} en Belgica? Cuenta regresiva, tradiciones y guia.',
      keywords: ['Dia de Todos los Santos Belgica', 'Toussaint Belgique', '1 de noviembre Belgica', 'Allerheiligen', 'festivo noviembre Belgica'],
    },
  },

  faq: [
    {
      question: { en: "When is All Saints' Day {year} in Belgium?", fr: 'Quand tombe la Toussaint {year} en Belgique ?', es: 'Cuando es el Dia de Todos los Santos {year} en Belgica?' },
      answer: {
        en: "All Saints' Day {year} in Belgium is on {date} ({dayOfWeek}). It is always November 1 and is a national public holiday.",
        fr: "La Toussaint {year} en Belgique tombe le {date} ({dayOfWeek}). C'est toujours le 1er novembre et c'est un jour ferie national.",
        es: 'El Dia de Todos los Santos {year} en Belgica es el {date} ({dayOfWeek}). Siempre es el 1 de noviembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Do Belgians also put chrysanthemums on graves?', fr: 'Les Belges deposent-ils aussi des chrysanthemes sur les tombes ?', es: 'Los belgas tambien ponen crisantemos en las tumbas?' },
      answer: {
        en: 'Yes, the tradition of placing chrysanthemums on graves is shared between Belgium and France. As in France, chrysanthemums are strongly associated with mourning in Belgium and should not be given as gifts to living people.',
        fr: 'Oui, la tradition de deposer des chrysanthemes sur les tombes est partagee entre la Belgique et la France. Comme en France, les chrysanthemes sont fortement associes au deuil en Belgique et ne doivent pas etre offerts en cadeau a des personnes vivantes.',
        es: 'Si, la tradicion de colocar crisantemos en las tumbas es compartida entre Belgica y Francia. Al igual que en Francia, los crisantemos estan fuertemente asociados con el luto en Belgica y no deben regalarse a personas vivas.',
      },
    },
    {
      question: { en: "Is there a school holiday for All Saints' Day in Belgium?", fr: 'Y a-t-il des vacances scolaires pour la Toussaint en Belgique ?', es: 'Hay vacaciones escolares por el Dia de Todos los Santos en Belgica?' },
      answer: {
        en: "Yes, Belgium has a one-week school holiday around November 1, known as the \"conge de Toussaint\" (in French) or \"herfstvakantie\" (autumn holiday, in Dutch). The exact dates vary slightly between the French and Flemish school systems.",
        fr: "Oui, la Belgique a une semaine de vacances scolaires autour du 1er novembre, connue sous le nom de \"conge de Toussaint\" (en francais) ou \"herfstvakantie\" (vacances d'automne, en neerlandais). Les dates exactes varient legerement entre les systemes scolaires francophone et flamand.",
        es: 'Si, Belgica tiene una semana de vacaciones escolares alrededor del 1 de noviembre, conocida como "conge de Toussaint" (en frances) o "herfstvakantie" (vacaciones de otono, en neerlandes). Las fechas exactas varian ligeramente entre los sistemas escolares francofono y flamenco.',
      },
    },
    {
      question: { en: 'Are shops open on November 1 in Belgium?', fr: 'Les magasins sont-ils ouverts le 1er novembre en Belgique ?', es: 'Estan abiertas las tiendas el 1 de noviembre en Belgica?' },
      answer: {
        en: 'Most shops and businesses are closed on November 1, as it is a national public holiday. Some tourist-oriented shops and restaurants in major cities may remain open.',
        fr: "La plupart des commerces et entreprises sont fermes le 1er novembre, car c'est un jour ferie national. Certains commerces et restaurants touristiques dans les grandes villes peuvent rester ouverts.",
        es: 'La mayoria de las tiendas y negocios estan cerrados el 1 de noviembre, ya que es un dia festivo nacional. Algunas tiendas y restaurantes orientados al turismo en las principales ciudades pueden permanecer abiertos.',
      },
    },
  ],

  colorTheme: 'purple-gold',
  icon: '\ud83d\udd6f\ufe0f',
};

// ---------------------------------------------------------------------------
// Armistice Day — November 11
// ---------------------------------------------------------------------------

const armisticeDay: HolidayData = {
  id: 'be_armistice-day',
  countryCode: 'be',
  slugs: { en: 'armistice-day', fr: 'armistice', es: 'dia-del-armisticio' },
  names: { en: 'Armistice Day', fr: "Jour de l'Armistice", es: 'Dia del Armisticio' },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 11,

  descriptions: {
    en: "Armistice Day on November 11 is a public holiday in Belgium commemorating the end of World War I. Belgium holds particular significance in WWI history, as much of the Western Front ran through Belgian territory. The Ypres Salient and Flanders Fields are among the war's most iconic and devastating battlegrounds.",
    fr: "Le Jour de l'Armistice, le 11 novembre, est un jour ferie en Belgique commemorant la fin de la Premiere Guerre mondiale. La Belgique occupe une place particuliere dans l'histoire de la Grande Guerre, car une grande partie du Front occidental traversait le territoire belge. Le Saillant d'Ypres et les Champs de Flandre comptent parmi les champs de bataille les plus emblematiques et devastateurs du conflit.",
    es: "El Dia del Armisticio, el 11 de noviembre, es un dia festivo en Belgica que conmemora el fin de la Primera Guerra Mundial. Belgica tiene un significado especial en la historia de la Gran Guerra, ya que gran parte del Frente Occidental atravesaba territorio belga. El Saliente de Ypres y los Campos de Flandes se encuentran entre los campos de batalla mas emblematicos y devastadores de la guerra.",
  },

  history: {
    en: "Belgium suffered enormously during World War I. When Germany invaded neutral Belgium in August 1914, triggering Britain's entry into the war, the Belgian army fought a desperate defensive campaign. The Battle of the Yser and the flooding of the Yser plain stopped the German advance, but most of Belgium remained under German occupation for four years.\n\nThe Ypres Salient in Flanders became one of the most bitterly contested sectors of the Western Front. Three major battles at Ypres (1914, 1915, and 1917) resulted in hundreds of thousands of casualties. It was near Ypres that poison gas was first used on a large scale, and John McCrae wrote the famous poem \"In Flanders Fields.\"\n\nSince 1928, the Last Post ceremony has been performed every evening at 8:00 PM at the Menin Gate in Ypres, honouring the fallen. It is one of the world's longest-running daily acts of remembrance. On November 11, the ceremony takes on special significance with additional tributes and thousands of attendees.",
    fr: "La Belgique a enormement souffert pendant la Premiere Guerre mondiale. Lorsque l'Allemagne envahit la Belgique neutre en aout 1914, provoquant l'entree en guerre de la Grande-Bretagne, l'armee belge mena une campagne defensive desesperee. La bataille de l'Yser et l'inondation de la plaine de l'Yser stopperent l'avance allemande, mais la majeure partie de la Belgique resta sous occupation allemande pendant quatre ans.\n\nLe Saillant d'Ypres en Flandre devint l'un des secteurs les plus farouchement contestes du Front occidental. Trois grandes batailles a Ypres (1914, 1915 et 1917) firent des centaines de milliers de victimes. C'est pres d'Ypres que les gaz toxiques furent utilises a grande echelle pour la premiere fois, et que John McCrae ecrivit le celebre poeme \"Au champ d'honneur\" (In Flanders Fields).\n\nDepuis 1928, la ceremonie du Last Post est jouee chaque soir a 20h00 a la Porte de Menin a Ypres, en l'honneur des soldats tombes. C'est l'un des plus anciens actes quotidiens de commemoration au monde. Le 11 novembre, la ceremonie prend une signification particuliere avec des hommages supplementaires et des milliers de participants.",
    es: "Belgica sufrio enormemente durante la Primera Guerra Mundial. Cuando Alemania invadio la Belgica neutral en agosto de 1914, provocando la entrada de Gran Bretana en la guerra, el ejercito belga libro una desesperada campana defensiva. La Batalla del Yser y la inundacion de la llanura del Yser detuvieron el avance aleman, pero la mayor parte de Belgica permanecio bajo ocupacion alemana durante cuatro anos.\n\nEl Saliente de Ypres en Flandes se convirtio en uno de los sectores mas amargamente disputados del Frente Occidental. Tres grandes batallas en Ypres (1914, 1915 y 1917) causaron cientos de miles de bajas. Fue cerca de Ypres donde se uso gas venenoso a gran escala por primera vez, y donde John McCrae escribio el famoso poema \"En los campos de Flandes.\"\n\nDesde 1928, la ceremonia del Last Post se realiza cada noche a las 20:00 en la Puerta de Menin en Ypres, honrando a los caidos. Es uno de los actos diarios de conmemoracion mas longevos del mundo. El 11 de noviembre, la ceremonia adquiere un significado especial con homenajes adicionales y miles de asistentes.",
  },

  traditions: {
    en: [
      'Attending the Last Post ceremony at the Menin Gate in Ypres — performed daily since 1928 and especially poignant on November 11',
      'Observing a minute of silence at 11:00 AM',
      'Laying wreaths at war memorials across Belgium',
      'Visiting WWI cemeteries and battlefields in Flanders, particularly around Ypres',
      'Attending official ceremonies led by the King and government officials in Brussels',
      'Wearing a poppy or cornflower (bleuet) in remembrance of the fallen',
    ],
    fr: [
      'Assister a la ceremonie du Last Post a la Porte de Menin a Ypres — jouee quotidiennement depuis 1928 et particulierement emouvante le 11 novembre',
      'Observer une minute de silence a 11h00',
      'Deposer des gerbes aux monuments aux morts a travers la Belgique',
      'Visiter les cimetieres et les champs de bataille de la Premiere Guerre mondiale en Flandre, en particulier autour d\'Ypres',
      'Assister aux ceremonies officielles presidees par le Roi et les responsables gouvernementaux a Bruxelles',
      'Porter un coquelicot ou un bleuet en souvenir des soldats tombes',
    ],
    es: [
      'Asistir a la ceremonia del Last Post en la Puerta de Menin en Ypres — realizada diariamente desde 1928 y especialmente conmovedora el 11 de noviembre',
      'Guardar un minuto de silencio a las 11:00',
      'Depositar coronas en los monumentos a los caidos de toda Belgica',
      'Visitar cementerios y campos de batalla de la Primera Guerra Mundial en Flandes, particularmente alrededor de Ypres',
      'Asistir a ceremonias oficiales lideradas por el Rey y funcionarios del gobierno en Bruselas',
      'Llevar una amapola o un aciano en recuerdo de los caidos',
    ],
  },

  funFacts: {
    en: [
      'The Last Post has been sounded at the Menin Gate in Ypres every evening at 8:00 PM since July 2, 1928 — interrupted only during the German occupation in World War II.',
      'The poem "In Flanders Fields" by John McCrae was written in May 1915 during the Second Battle of Ypres. It has become one of the most famous war poems in history.',
      'The Menin Gate memorial in Ypres bears the names of nearly 55,000 Commonwealth soldiers who died in the Ypres Salient and have no known grave.',
      'Belgium has more than 170 Commonwealth War Graves Commission cemeteries, primarily in the Flanders region.',
      'The town of Ypres was almost completely destroyed during WWI and was meticulously rebuilt in its original medieval style after the war.',
    ],
    fr: [
      'Le Last Post est sonne a la Porte de Menin a Ypres chaque soir a 20h00 depuis le 2 juillet 1928 — interrompu uniquement pendant l\'occupation allemande de la Seconde Guerre mondiale.',
      'Le poeme "Au champ d\'honneur" (In Flanders Fields) de John McCrae a ete ecrit en mai 1915 pendant la deuxieme bataille d\'Ypres. Il est devenu l\'un des plus celebres poemes de guerre de l\'histoire.',
      'Le memorial de la Porte de Menin a Ypres porte les noms de pres de 55 000 soldats du Commonwealth morts dans le Saillant d\'Ypres et n\'ayant pas de tombe connue.',
      'La Belgique compte plus de 170 cimetieres de la Commonwealth War Graves Commission, principalement dans la region de Flandre.',
      'La ville d\'Ypres a ete presque entierement detruite pendant la Premiere Guerre mondiale et a ete minutieusement reconstruite dans son style medieval d\'origine apres la guerre.',
    ],
    es: [
      'El Last Post se ha tocado en la Puerta de Menin en Ypres cada noche a las 20:00 desde el 2 de julio de 1928 — interrumpido unicamente durante la ocupacion alemana en la Segunda Guerra Mundial.',
      'El poema "En los campos de Flandes" de John McCrae fue escrito en mayo de 1915 durante la Segunda Batalla de Ypres. Se ha convertido en uno de los poemas de guerra mas famosos de la historia.',
      'El memorial de la Puerta de Menin en Ypres lleva los nombres de casi 55 000 soldados de la Commonwealth que murieron en el Saliente de Ypres y no tienen tumba conocida.',
      'Belgica tiene mas de 170 cementerios de la Commonwealth War Graves Commission, principalmente en la region de Flandes.',
      'La ciudad de Ypres fue casi completamente destruida durante la Primera Guerra Mundial y fue meticulosamente reconstruida en su estilo medieval original despues de la guerra.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan a visit to the Menin Gate Last Post ceremony on November 11 — arrive early as it draws large crowds',
      'Visit the In Flanders Fields Museum in Ypres to understand the region\'s WWI history',
      'Tour Commonwealth cemeteries such as Tyne Cot, the largest Commonwealth war cemetery in the world',
      'Attend a local ceremony at your nearest war memorial',
      'Plan for closures — most businesses and public services are closed on November 11',
    ],
    fr: [
      'Planifier une visite a la ceremonie du Last Post a la Porte de Menin le 11 novembre — arriver tot car elle attire une foule importante',
      'Visiter le musee In Flanders Fields a Ypres pour comprendre l\'histoire de la region pendant la Premiere Guerre mondiale',
      'Parcourir les cimetieres du Commonwealth tels que Tyne Cot, le plus grand cimetiere de guerre du Commonwealth au monde',
      'Assister a une ceremonie locale au monument aux morts le plus proche',
      'Prevoir les fermetures — la plupart des entreprises et services publics sont fermes le 11 novembre',
    ],
    es: [
      'Planificar una visita a la ceremonia del Last Post en la Puerta de Menin el 11 de noviembre — llegar temprano ya que atrae grandes multitudes',
      'Visitar el museo In Flanders Fields en Ypres para entender la historia de la region en la Primera Guerra Mundial',
      'Recorrer cementerios de la Commonwealth como Tyne Cot, el mayor cementerio de guerra de la Commonwealth del mundo',
      'Asistir a una ceremonia local en el monumento a los caidos mas cercano',
      'Planificar los cierres — la mayoria de las empresas y servicios publicos estan cerrados el 11 de noviembre',
    ],
  },

  relatedHolidays: ['fr_armistice-day', 'be_national-day'],

  seo: {
    en: {
      titleTemplate: 'Armistice Day {year} Belgium — November 11 Countdown & Guide',
      descriptionTemplate: 'When is Armistice Day {year} in Belgium? Live countdown to November 11, Last Post ceremony, Flanders Fields history, and guide.',
      keywords: ['Armistice Day Belgium', 'November 11 Belgium', 'Ypres Last Post', 'Flanders Fields', 'Belgian public holiday November'],
    },
    fr: {
      titleTemplate: "Jour de l'Armistice {year} Belgique — Compte a rebours du 11 novembre",
      descriptionTemplate: "Quand tombe le 11 novembre {year} en Belgique ? Compte a rebours, ceremonie du Last Post, Ypres et guide de commemoration.",
      keywords: ['11 novembre Belgique', 'Armistice Belgique', 'Last Post Ypres', 'Porte de Menin', 'jour ferie novembre Belgique'],
    },
    es: {
      titleTemplate: 'Dia del Armisticio {year} Belgica — Cuenta regresiva del 11 de noviembre',
      descriptionTemplate: 'Cuando es el Dia del Armisticio {year} en Belgica? Cuenta regresiva, ceremonia del Last Post, Campos de Flandes y guia.',
      keywords: ['Dia del Armisticio Belgica', '11 de noviembre Belgica', 'Last Post Ypres', 'Campos de Flandes', 'festivo noviembre Belgica'],
    },
  },

  faq: [
    {
      question: { en: 'When is Armistice Day {year} in Belgium?', fr: "Quand tombe le Jour de l'Armistice {year} en Belgique ?", es: 'Cuando es el Dia del Armisticio {year} en Belgica?' },
      answer: {
        en: 'Armistice Day {year} in Belgium is on {date} ({dayOfWeek}). It is always November 11 and is a national public holiday.',
        fr: "Le Jour de l'Armistice {year} en Belgique tombe le {date} ({dayOfWeek}). C'est toujours le 11 novembre et c'est un jour ferie national.",
        es: 'El Dia del Armisticio {year} en Belgica es el {date} ({dayOfWeek}). Siempre es el 11 de noviembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is the Last Post ceremony at the Menin Gate?', fr: "Qu'est-ce que la ceremonie du Last Post a la Porte de Menin ?", es: 'Que es la ceremonia del Last Post en la Puerta de Menin?' },
      answer: {
        en: 'The Last Post is a bugle call performed every evening at 8:00 PM at the Menin Gate in Ypres, honouring the soldiers who fell in the Ypres Salient during WWI. The tradition has continued since 1928 and was only interrupted during the German occupation in WWII.',
        fr: "Le Last Post est une sonnerie de clairon jouee chaque soir a 20h00 a la Porte de Menin a Ypres, en l'honneur des soldats tombes dans le Saillant d'Ypres pendant la Premiere Guerre mondiale. La tradition se poursuit depuis 1928 et n'a ete interrompue que pendant l'occupation allemande lors de la Seconde Guerre mondiale.",
        es: 'El Last Post es un toque de corneta que se interpreta cada noche a las 20:00 en la Puerta de Menin en Ypres, honrando a los soldados caidos en el Saliente de Ypres durante la Primera Guerra Mundial. La tradicion continua desde 1928 y solo fue interrumpida durante la ocupacion alemana en la Segunda Guerra Mundial.',
      },
    },
    {
      question: { en: 'Why is Belgium significant in WWI history?', fr: "Pourquoi la Belgique est-elle importante dans l'histoire de la Premiere Guerre mondiale ?", es: 'Por que es significativa Belgica en la historia de la Primera Guerra Mundial?' },
      answer: {
        en: "Belgium's invasion by Germany in August 1914 triggered Britain's entry into WWI. Much of the Western Front ran through Belgian Flanders, with the Ypres Salient becoming one of the war's most devastating battlefields. Hundreds of thousands of soldiers from multiple nations died in the Flanders trenches.",
        fr: "L'invasion de la Belgique par l'Allemagne en aout 1914 provoqua l'entree en guerre de la Grande-Bretagne. Une grande partie du Front occidental traversait la Flandre belge, le Saillant d'Ypres devenant l'un des champs de bataille les plus devastateurs de la guerre. Des centaines de milliers de soldats de nombreuses nations moururent dans les tranchees de Flandre.",
        es: 'La invasion de Belgica por Alemania en agosto de 1914 provoco la entrada de Gran Bretana en la Primera Guerra Mundial. Gran parte del Frente Occidental atravesaba la Flandes belga, y el Saliente de Ypres se convirtio en uno de los campos de batalla mas devastadores de la guerra. Cientos de miles de soldados de multiples naciones murieron en las trincheras de Flandes.',
      },
    },
    {
      question: { en: 'Can I visit Flanders Fields and WWI sites?', fr: 'Peut-on visiter les Champs de Flandre et les sites de la Premiere Guerre mondiale ?', es: 'Puedo visitar los Campos de Flandes y los sitios de la Primera Guerra Mundial?' },
      answer: {
        en: 'Yes, the Flanders region offers numerous WWI sites open to visitors year-round. Key attractions include the In Flanders Fields Museum in Ypres, the Menin Gate, Tyne Cot Cemetery (the largest Commonwealth war cemetery), and many preserved trenches and craters. November 11 is a particularly moving time to visit.',
        fr: "Oui, la region de Flandre offre de nombreux sites de la Premiere Guerre mondiale ouverts aux visiteurs toute l'annee. Les principaux sites incluent le musee In Flanders Fields a Ypres, la Porte de Menin, le cimetiere de Tyne Cot (le plus grand cimetiere de guerre du Commonwealth), et de nombreuses tranchees et crateres preserves. Le 11 novembre est un moment particulierement emouvant pour visiter.",
        es: 'Si, la region de Flandes ofrece numerosos sitios de la Primera Guerra Mundial abiertos a visitantes durante todo el ano. Las principales atracciones incluyen el museo In Flanders Fields en Ypres, la Puerta de Menin, el cementerio de Tyne Cot (el mayor cementerio de guerra de la Commonwealth), y muchas trincheras y crateres preservados. El 11 de noviembre es un momento particularmente conmovedor para visitar.',
      },
    },
  ],

  colorTheme: 'black-yellow-red',
  icon: '\ud83c\udf96\ufe0f',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'be_christmas',
  countryCode: 'be',
  slugs: { en: 'christmas-day', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is a public holiday in Belgium, blending both French Belgian and Flemish traditions. Uniquely in Belgium, the major gift-giving occasion is actually Saint-Nicolas Day (December 6) rather than Christmas, making Christmas itself more of a family gathering centred around a festive meal.",
    fr: "Noel, le 25 decembre, est un jour ferie en Belgique, melant traditions francophones et flamandes. En Belgique, la principale occasion d'echange de cadeaux est en realite la Saint-Nicolas (le 6 decembre) plutot que Noel, ce qui fait de Noel davantage un rassemblement familial autour d'un repas de fete.",
    es: "El dia de Navidad, el 25 de diciembre, es un dia festivo en Belgica, que combina tradiciones francobeigas y flamencas. De manera unica en Belgica, la principal ocasion de intercambio de regalos es en realidad el Dia de San Nicolas (6 de diciembre) en lugar de Navidad, lo que convierte a la Navidad en mas bien una reunion familiar centrada en una comida festiva.",
  },

  history: {
    en: "Christmas has been celebrated in Belgium since the Middle Ages, deeply rooted in the country's Catholic heritage. However, Belgium's Christmas traditions are distinctive because Saint-Nicolas (Sinterklaas in Flemish) on December 6 has traditionally been the primary gift-giving occasion for children, long before the modern influence of Christmas gift-giving spread from Anglo-Saxon countries.\n\nSaint-Nicolas arrives in Belgium by boat from Spain (according to tradition), accompanied by his helper Zwarte Piet (Pere Fouettard in French). Children leave their shoes by the fireplace on the eve of December 6, and Saint-Nicolas fills them with sweets, speculoos cookies, chocolate, and small gifts.\n\nBelgium's famous Christmas markets, particularly in Brussels, Bruges, Ghent, and Liege, have become major attractions. The Brussels Winter Wonders (Plaisirs d'Hiver) festival around the Grand Place is one of the largest Christmas markets in Europe.",
    fr: "Noel est celebre en Belgique depuis le Moyen Age, profondement enracine dans l'heritage catholique du pays. Cependant, les traditions de Noel belges sont distinctives car la Saint-Nicolas (Sinterklaas en flamand) le 6 decembre est traditionnellement la principale occasion d'echange de cadeaux pour les enfants, bien avant que l'influence moderne des cadeaux de Noel ne se repande depuis les pays anglo-saxons.\n\nSaint-Nicolas arrive en Belgique par bateau depuis l'Espagne (selon la tradition), accompagne de son aide Pere Fouettard (Zwarte Piet en flamand). Les enfants deposent leurs chaussures devant la cheminee la veille du 6 decembre, et Saint-Nicolas les remplit de friandises, de speculoos, de chocolat et de petits cadeaux.\n\nLes celebres marches de Noel belges, notamment a Bruxelles, Bruges, Gand et Liege, sont devenus des attractions majeures. Le festival Plaisirs d'Hiver de Bruxelles autour de la Grand-Place est l'un des plus grands marches de Noel d'Europe.",
    es: "La Navidad se celebra en Belgica desde la Edad Media, profundamente arraigada en la herencia catolica del pais. Sin embargo, las tradiciones navidenas belgas son distintivas porque San Nicolas (Sinterklaas en flamenco) el 6 de diciembre ha sido tradicionalmente la principal ocasion de intercambio de regalos para los ninos, mucho antes de que la influencia moderna de los regalos navidenos se extendiera desde los paises anglosajones.\n\nSan Nicolas llega a Belgica en barco desde Espana (segun la tradicion), acompanado de su ayudante Zwarte Piet (Pere Fouettard en frances). Los ninos dejan sus zapatos junto a la chimenea la vispera del 6 de diciembre, y San Nicolas los llena de dulces, galletas speculoos, chocolate y pequenos regalos.\n\nLos famosos mercadillos navidenos belgas, particularmente en Bruselas, Brujas, Gante y Lieja, se han convertido en grandes atracciones. El festival Plaisirs d'Hiver de Bruselas alrededor de la Grand Place es uno de los mayores mercadillos navidenos de Europa.",
  },

  traditions: {
    en: [
      'Gathering with family for a festive Christmas meal — often featuring seafood, roast meat, and Belgian chocolate',
      'Celebrating Saint-Nicolas Day on December 6 as the primary gift-giving occasion for children',
      'Visiting Christmas markets in Brussels (Plaisirs d\'Hiver), Bruges, Ghent, or Liege',
      'Eating speculoos cookies — a beloved Belgian Christmas speciality',
      'Serving a buche de Noel (yule log cake) or cougnole/cougnou (a traditional Belgian Christmas bread)',
      'Attending Midnight Mass on Christmas Eve',
      'Enjoying Belgian chocolate and pralines as Christmas treats and gifts',
    ],
    fr: [
      'Se reunir en famille pour un repas de Noel festif — souvent compose de fruits de mer, de viande rotie et de chocolat belge',
      'Celebrer la Saint-Nicolas le 6 decembre comme principale occasion d\'echange de cadeaux pour les enfants',
      'Visiter les marches de Noel a Bruxelles (Plaisirs d\'Hiver), Bruges, Gand ou Liege',
      'Deguster des speculoos — une specialite de Noel belge tres appreciee',
      'Servir une buche de Noel ou un cougnou (pain de Noel traditionnel belge)',
      'Assister a la Messe de Minuit le soir de Noel',
      'Savourer du chocolat belge et des pralines comme gourmandises et cadeaux de Noel',
    ],
    es: [
      'Reunirse con la familia para una comida festiva de Navidad — a menudo con mariscos, carne asada y chocolate belga',
      'Celebrar el Dia de San Nicolas el 6 de diciembre como la principal ocasion de intercambio de regalos para los ninos',
      'Visitar mercadillos navidenos en Bruselas (Plaisirs d\'Hiver), Brujas, Gante o Lieja',
      'Comer galletas speculoos — una querida especialidad navidena belga',
      'Servir un buche de Noel o cougnou (un pan navideno tradicional belga)',
      'Asistir a la Misa del Gallo en Nochebuena',
      'Disfrutar de chocolate belga y pralines como dulces y regalos navidenos',
    ],
  },

  funFacts: {
    en: [
      'Saint-Nicolas (December 6) is actually a bigger deal than Christmas for Belgian children — many families only exchange gifts on December 6, not December 25.',
      'Belgium produces over 220,000 tonnes of chocolate per year, and consumption peaks during the Christmas and Saint-Nicolas season.',
      'The Brussels Winter Wonders (Plaisirs d\'Hiver) Christmas market attracts over 2.5 million visitors annually.',
      'Cougnou (also called cougnole) is a traditional Belgian Christmas bread shaped like the baby Jesus, typically eaten for breakfast on Christmas morning.',
      'Belgium\'s Bruges Christmas market, set against medieval architecture and canals, is regularly voted one of the most beautiful Christmas markets in Europe.',
    ],
    fr: [
      'La Saint-Nicolas (6 decembre) est en fait plus importante que Noel pour les enfants belges — de nombreuses familles n\'echangent de cadeaux que le 6 decembre, et non le 25.',
      'La Belgique produit plus de 220 000 tonnes de chocolat par an, et la consommation atteint son pic pendant la saison de Noel et de la Saint-Nicolas.',
      'Le marche de Noel de Bruxelles (Plaisirs d\'Hiver) attire plus de 2,5 millions de visiteurs par an.',
      'Le cougnou (ou cougnole) est un pain de Noel traditionnel belge en forme d\'enfant Jesus, generalement mange au petit-dejeuner le matin de Noel.',
      'Le marche de Noel de Bruges, dans un decor d\'architecture medievale et de canaux, est regulierement elu parmi les plus beaux marches de Noel d\'Europe.',
    ],
    es: [
      'San Nicolas (6 de diciembre) es en realidad mas importante que la Navidad para los ninos belgas — muchas familias solo intercambian regalos el 6 de diciembre, no el 25.',
      'Belgica produce mas de 220 000 toneladas de chocolate al ano, y el consumo alcanza su pico durante la temporada de Navidad y San Nicolas.',
      'El mercadillo de Navidad de Bruselas (Plaisirs d\'Hiver) atrae a mas de 2,5 millones de visitantes al ano.',
      'El cougnou (o cougnole) es un pan navideno tradicional belga con forma de nino Jesus, que se come tipicamente en el desayuno de la manana de Navidad.',
      'El mercadillo de Navidad de Brujas, enmarcado por arquitectura medieval y canales, es votado regularmente como uno de los mas bonitos mercadillos navidenos de Europa.',
    ],
  },

  planningChecklist: {
    en: [
      'Remember that Saint-Nicolas (December 6) is the main gift-giving day for children in Belgium — plan accordingly',
      'Visit the Brussels Plaisirs d\'Hiver Christmas market or the Bruges Christmas market during the weeks before Christmas',
      'Order a cougnou from a local bakery and a buche de Noel from a patisserie',
      'Stock up on Belgian chocolates and pralines as Christmas gifts',
      'Plan your Christmas meal early — restaurants fill up fast for Christmas Eve and Christmas Day',
    ],
    fr: [
      'Se rappeler que la Saint-Nicolas (6 decembre) est la principale journee de cadeaux pour les enfants en Belgique — planifier en consequence',
      'Visiter le marche de Noel Plaisirs d\'Hiver de Bruxelles ou le marche de Noel de Bruges pendant les semaines precedant Noel',
      'Commander un cougnou chez un boulanger et une buche de Noel chez un patissier',
      'Faire provision de chocolats belges et de pralines comme cadeaux de Noel',
      'Planifier le repas de Noel tot — les restaurants se remplissent vite pour le reveillon et le jour de Noel',
    ],
    es: [
      'Recordar que San Nicolas (6 de diciembre) es el principal dia de regalos para los ninos en Belgica — planificar en consecuencia',
      'Visitar el mercadillo de Navidad Plaisirs d\'Hiver de Bruselas o el de Brujas durante las semanas previas a Navidad',
      'Encargar un cougnou en una panaderia y un buche de Noel en una pasteleria',
      'Abastecerse de chocolates belgas y pralines como regalos de Navidad',
      'Planificar la comida de Navidad con antelacion — los restaurantes se llenan rapido para Nochebuena y Navidad',
    ],
  },

  relatedHolidays: ['be_new-years-day', 'fr_christmas'],

  seo: {
    en: {
      titleTemplate: 'Christmas Day {year} Belgium — Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Belgium? Live countdown to December 25, Saint-Nicolas, Belgian Christmas traditions, and guide.',
      keywords: ['Christmas Belgium', 'Noel Belgique', 'Belgian Christmas traditions', 'Saint-Nicolas Belgium', 'Brussels Christmas market'],
    },
    fr: {
      titleTemplate: 'Noel {year} Belgique — Compte a rebours et traditions',
      descriptionTemplate: 'Quand tombe Noel {year} en Belgique ? Compte a rebours, Saint-Nicolas, traditions de Noel belges et guide des celebrations.',
      keywords: ['Noel Belgique', 'Saint-Nicolas Belgique', 'Plaisirs d\'Hiver Bruxelles', 'cougnou', 'traditions Noel belge'],
    },
    es: {
      titleTemplate: 'Navidad {year} Belgica — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Cuando es Navidad {year} en Belgica? Cuenta regresiva, San Nicolas, tradiciones navidenas belgas y guia.',
      keywords: ['Navidad Belgica', 'Noel Belgique', 'San Nicolas Belgica', 'mercadillo Navidad Bruselas', 'tradiciones navidenas belgas'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas Day {year} in Belgium?', fr: 'Quand tombe Noel {year} en Belgique ?', es: 'Cuando es Navidad {year} en Belgica?' },
      answer: {
        en: 'Christmas Day {year} in Belgium is on {date} ({dayOfWeek}). It is always December 25 and is a national public holiday.',
        fr: "Noel {year} en Belgique tombe le {date} ({dayOfWeek}). C'est toujours le 25 decembre et c'est un jour ferie national.",
        es: 'Navidad {year} en Belgica es el {date} ({dayOfWeek}). Siempre es el 25 de diciembre y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Is Saint-Nicolas more important than Christmas in Belgium?', fr: 'La Saint-Nicolas est-elle plus importante que Noel en Belgique ?', es: 'Es San Nicolas mas importante que la Navidad en Belgica?' },
      answer: {
        en: 'For children, yes. Saint-Nicolas Day on December 6 is traditionally the main gift-giving occasion in Belgium. Many Belgian families exchange gifts only on December 6, keeping Christmas Day as a family gathering focused on a festive meal rather than presents.',
        fr: "Pour les enfants, oui. La Saint-Nicolas, le 6 decembre, est traditionnellement la principale occasion d'echange de cadeaux en Belgique. De nombreuses familles belges n'echangent de cadeaux que le 6 decembre, reservant le jour de Noel comme reunion familiale autour d'un repas de fete plutot que de cadeaux.",
        es: 'Para los ninos, si. El Dia de San Nicolas, el 6 de diciembre, es tradicionalmente la principal ocasion de intercambio de regalos en Belgica. Muchas familias belgas intercambian regalos solo el 6 de diciembre, reservando el dia de Navidad como reunion familiar centrada en una comida festiva en lugar de regalos.',
      },
    },
    {
      question: { en: 'What is a cougnou?', fr: "Qu'est-ce qu'un cougnou ?", es: 'Que es un cougnou?' },
      answer: {
        en: 'A cougnou (also called cougnole) is a traditional Belgian Christmas bread shaped to resemble the baby Jesus. It is a sweet brioche-like bread, sometimes with sugar pearls or raisins, traditionally eaten for breakfast on Christmas morning.',
        fr: "Un cougnou (ou cougnole) est un pain de Noel traditionnel belge en forme d'enfant Jesus. C'est un pain brioché sucre, parfois avec des perles de sucre ou des raisins secs, traditionnellement mange au petit-dejeuner le matin de Noel.",
        es: 'Un cougnou (o cougnole) es un pan navideno tradicional belga con forma de nino Jesus. Es un pan dulce tipo brioche, a veces con perlas de azucar o pasas, que se come tradicionalmente en el desayuno de la manana de Navidad.',
      },
    },
    {
      question: { en: 'What are the best Christmas markets in Belgium?', fr: 'Quels sont les meilleurs marches de Noel en Belgique ?', es: 'Cuales son los mejores mercadillos navidenos de Belgica?' },
      answer: {
        en: 'Belgium has several world-class Christmas markets. The Brussels Winter Wonders (Plaisirs d\'Hiver) is the largest, set around the Grand Place. Bruges offers a magical market in its medieval centre. Ghent, Liege, and Antwerp also host popular markets with unique local character.',
        fr: "La Belgique possede plusieurs marches de Noel de classe mondiale. Les Plaisirs d'Hiver de Bruxelles sont les plus grands, installes autour de la Grand-Place. Bruges offre un marche feerique dans son centre medieval. Gand, Liege et Anvers organisent egalement des marches populaires au caractere local unique.",
        es: 'Belgica tiene varios mercadillos navidenos de primer nivel. Los Plaisirs d\'Hiver de Bruselas son los mas grandes, situados alrededor de la Grand Place. Brujas ofrece un mercadillo magico en su centro medieval. Gante, Lieja y Amberes tambien albergan mercadillos populares con caracter local unico.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const beHolidays: HolidayData[] = [
  newYearsDay,
  nationalDay,
  assumption,
  allSaintsDay,
  armisticeDay,
  christmas,
];

export default beHolidays;
