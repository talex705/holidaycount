/**
 * Uruguay holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getCarnivalMonday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'uy_new-years-day',
  countryCode: 'uy',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a public holiday in Uruguay, celebrated with family gatherings, fireworks along the coast, and festive traditions. Uruguayans ring in the new year with an asado, mate, and summer celebrations under the Southern Hemisphere sun.",
    fr: "Le Jour de l'An, le 1er janvier, est un jour ferie en Uruguay, celebre avec des reunions familiales, des feux d'artifice le long de la cote et des traditions festives. Les Uruguayens celebrent la nouvelle annee avec un asado, du mate et des celebrations estivales sous le soleil de l'hemisphere sud.",
    es: 'El Ano Nuevo, el 1 de enero, es un dia festivo en Uruguay, celebrado con reuniones familiares, fuegos artificiales a lo largo de la costa y tradiciones festivas. Los uruguayos reciben el nuevo ano con un asado, mate y celebraciones veraniegas bajo el sol del hemisferio sur.',
  },

  history: {
    en: "New Year's celebrations in Uruguay reflect the country's laid-back, family-oriented culture. The evening of December 31 is spent with family and close friends, sharing a traditional asado and enjoying the warm summer night. Uruguay's coastal cities, particularly Montevideo and Punta del Este, host spectacular fireworks displays at midnight.\n\nUruguayans follow many Latin American New Year traditions, including eating twelve grapes at midnight and wearing colored underwear for luck. A unique Uruguayan tradition involves throwing old papers or calendars out the window to symbolize leaving the past behind — though this practice has declined in recent years due to environmental concerns.\n\nNew Year's Day itself is typically relaxed, with many Uruguayans heading to the beach or enjoying time outdoors. The summer weather makes it a perfect day for swimming, barbecues, and mate-sharing with friends and family.",
    fr: "Les celebrations du Nouvel An en Uruguay refletent la culture decontractee et orientee vers la famille du pays. La soiree du 31 decembre se passe en famille et entre amis proches, partageant un asado traditionnel et profitant de la douce nuit d'ete. Les villes cotieres de l'Uruguay, en particulier Montevideo et Punta del Este, offrent des spectacles de feux d'artifice spectaculaires a minuit.\n\nLes Uruguayens suivent de nombreuses traditions latino-americaines du Nouvel An, comme manger douze raisins a minuit et porter des sous-vetements colores pour la chance. Une tradition uruguayenne unique consiste a jeter de vieux papiers ou calendriers par la fenetre pour symboliser l'abandon du passe — bien que cette pratique ait decline ces dernieres annees en raison de preoccupations environnementales.\n\nLe Jour de l'An lui-meme est generalement detendu, de nombreux Uruguayens se rendant a la plage ou profitant du plein air. Le temps estival en fait une journee parfaite pour la baignade, les barbecues et le partage du mate entre amis et famille.",
    es: "Las celebraciones de Ano Nuevo en Uruguay reflejan la cultura relajada y orientada a la familia del pais. La noche del 31 de diciembre se pasa con familia y amigos cercanos, compartiendo un asado tradicional y disfrutando de la calida noche de verano. Las ciudades costeras de Uruguay, particularmente Montevideo y Punta del Este, ofrecen espectaculares fuegos artificiales a medianoche.\n\nLos uruguayos siguen muchas tradiciones latinoamericanas de Ano Nuevo, como comer doce uvas a medianoche y usar ropa interior de colores para la suerte. Una tradicion uruguaya unica involucra tirar papeles viejos o calendarios por la ventana para simbolizar dejar atras el pasado — aunque esta practica ha disminuido en anos recientes por preocupaciones ambientales.\n\nEl Dia de Ano Nuevo en si es tipicamente relajado, con muchos uruguayos yendo a la playa o disfrutando del aire libre. El clima veraniego lo convierte en un dia perfecto para nadar, hacer asados y compartir mate con amigos y familia.",
  },

  traditions: {
    en: [
      'Sharing a family asado on New Year\'s Eve',
      'Watching fireworks along the coast, especially in Montevideo and Punta del Este',
      'Eating twelve grapes at midnight for good luck',
      'Wearing colored underwear — yellow for money, red for love, pink for friendship',
      'Heading to the beach on New Year\'s Day to enjoy the summer sun',
      'Sharing mate with family and friends throughout the day',
    ],
    fr: [
      'Partager un asado familial la veille du Nouvel An',
      "Regarder les feux d'artifice le long de la cote, en particulier a Montevideo et Punta del Este",
      'Manger douze raisins a minuit pour la bonne chance',
      "Porter des sous-vetements colores — jaune pour l'argent, rouge pour l'amour, rose pour l'amitie",
      'Aller a la plage le jour de l\'An pour profiter du soleil estival',
      'Partager le mate avec la famille et les amis tout au long de la journee',
    ],
    es: [
      'Compartir un asado familiar en Noche Vieja',
      'Ver fuegos artificiales a lo largo de la costa, especialmente en Montevideo y Punta del Este',
      'Comer doce uvas a medianoche para la buena suerte',
      'Usar ropa interior de colores — amarilla para el dinero, roja para el amor, rosa para la amistad',
      'Ir a la playa el Dia de Ano Nuevo para disfrutar del sol veraniego',
      'Compartir mate con familia y amigos durante todo el dia',
    ],
  },

  funFacts: {
    en: [
      'Punta del Este hosts one of the most spectacular New Year\'s Eve fireworks displays in South America, attracting tourists from around the world.',
      'Uruguay\'s New Year falls in the middle of summer, making beach celebrations the norm rather than the exception.',
      'The tradition of throwing old papers out the window on New Year\'s Eve created such a mess in Montevideo that many residents have voluntarily stopped the practice.',
      'Uruguayans consume more mate per capita than any other country in the world, and it flows freely during New Year celebrations.',
      'Uruguay is one of the most secular countries in Latin America, so New Year\'s celebrations are entirely non-religious.',
    ],
    fr: [
      "Punta del Este accueille l'un des spectacles de feux d'artifice les plus spectaculaires de la veille du Nouvel An en Amerique du Sud, attirant des touristes du monde entier.",
      "Le Nouvel An uruguayen tombe au milieu de l'ete, faisant des celebrations sur la plage la norme plutot que l'exception.",
      "La tradition de jeter de vieux papiers par la fenetre la veille du Nouvel An creait un tel desordre a Montevideo que de nombreux residents ont volontairement arrete cette pratique.",
      'Les Uruguayens consomment plus de mate par habitant que tout autre pays au monde, et il coule a flots pendant les celebrations du Nouvel An.',
      "L'Uruguay est l'un des pays les plus seculiers d'Amerique latine, donc les celebrations du Nouvel An sont entierement non-religieuses.",
    ],
    es: [
      'Punta del Este ofrece uno de los espectaculos de fuegos artificiales de Noche Vieja mas espectaculares de Sudamerica, atrayendo turistas de todo el mundo.',
      'El Ano Nuevo uruguayo cae en pleno verano, haciendo de las celebraciones en la playa la norma en lugar de la excepcion.',
      'La tradicion de tirar papeles viejos por la ventana en Noche Vieja creaba tal desorden en Montevideo que muchos residentes voluntariamente dejaron de practicarla.',
      'Los uruguayos consumen mas mate per capita que cualquier otro pais del mundo, y fluye libremente durante las celebraciones de Ano Nuevo.',
      'Uruguay es uno de los paises mas seculares de America Latina, por lo que las celebraciones de Ano Nuevo son completamente no religiosas.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan your asado menu and buy quality meats from your butcher',
      'Stock up on grapes, fireworks, and colored underwear for traditions',
      'Book beach accommodations early if heading to the coast for the holiday',
      'Prepare sunscreen, mate, and beach supplies for a New Year\'s Day outing',
      'Check fireworks display schedules in Montevideo or Punta del Este',
    ],
    fr: [
      "Planifier le menu de votre asado et acheter des viandes de qualite chez votre boucher",
      "Faire le plein de raisins, de feux d'artifice et de sous-vetements colores pour les traditions",
      "Reserver des hebergements a la plage tot si vous vous rendez sur la cote pour le jour ferie",
      "Preparer de la creme solaire, du mate et des fournitures de plage pour une sortie du Jour de l'An",
      "Verifier les horaires des feux d'artifice a Montevideo ou Punta del Este",
    ],
    es: [
      'Planificar el menu del asado y comprar carnes de calidad en su carniceria',
      'Abastecerse de uvas, fuegos artificiales y ropa interior de colores para las tradiciones',
      'Reservar alojamiento en la playa con anticipacion si va a la costa para el feriado',
      'Preparar protector solar, mate y suministros de playa para una salida de Ano Nuevo',
      'Verificar horarios de fuegos artificiales en Montevideo o Punta del Este',
    ],
  },

  relatedHolidays: ['uy_christmas', 'uy_carnival'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Uruguay — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Uruguay? Live countdown to January 1, Uruguayan traditions, and celebration guide.",
      keywords: ["New Year's Day Uruguay", 'Ano Nuevo Uruguay', 'Uruguay New Year traditions', 'Punta del Este fireworks', "New Year's countdown"],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Uruguay — Compte a rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} en Uruguay ? Compte a rebours, traditions uruguayennes et guide de celebration.",
      keywords: ["Jour de l'An Uruguay", 'Nouvel An Uruguay', 'traditions uruguayennes', "feux d'artifice Punta del Este", "compte a rebours Nouvel An"],
    },
    es: {
      titleTemplate: 'Ano Nuevo {year} Uruguay — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es Ano Nuevo {year} en Uruguay? Cuenta regresiva al 1 de enero, tradiciones uruguayas y guia de celebracion.',
      keywords: ['Ano Nuevo Uruguay', 'feriados Uruguay', 'tradiciones uruguayas', 'fuegos artificiales Punta del Este', 'cuenta regresiva Ano Nuevo'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Uruguay?", fr: "Quand est le Jour de l'An {year} en Uruguay ?", es: 'Cuando es Ano Nuevo {year} en Uruguay?' },
      answer: {
        en: "New Year's Day {year} in Uruguay is on {date}. It is always January 1 and is a national public holiday.",
        fr: "Le Jour de l'An {year} en Uruguay est le {date}. C'est toujours le 1er janvier et c'est un jour ferie national.",
        es: 'El Ano Nuevo {year} en Uruguay es el {date}. Siempre es el 1 de enero y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'Where are the best New Year fireworks in Uruguay?', fr: "Ou sont les meilleurs feux d'artifice du Nouvel An en Uruguay ?", es: 'Donde son los mejores fuegos artificiales de Ano Nuevo en Uruguay?' },
      answer: {
        en: 'The most spectacular fireworks in Uruguay are in Punta del Este, where a massive display over the harbor attracts thousands. Montevideo\'s Rambla (waterfront promenade) also hosts impressive fireworks. Coastal towns like Colonia del Sacramento offer more intimate celebrations.',
        fr: "Les feux d'artifice les plus spectaculaires en Uruguay sont a Punta del Este, ou un affichage massif au-dessus du port attire des milliers de personnes. La Rambla de Montevideo (promenade en bord de mer) accueille egalement des feux d'artifice impressionnants. Les villes cotieres comme Colonia del Sacramento offrent des celebrations plus intimistes.",
        es: 'Los fuegos artificiales mas espectaculares de Uruguay estan en Punta del Este, donde un masivo espectaculo sobre el puerto atrae a miles de personas. La Rambla de Montevideo tambien ofrece impresionantes fuegos artificiales. Ciudades costeras como Colonia del Sacramento ofrecen celebraciones mas intimistas.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Uruguay?", fr: "Le Jour de l'An est-il un jour ferie en Uruguay ?", es: 'Es Ano Nuevo un dia festivo en Uruguay?' },
      answer: {
        en: "Yes, January 1 is an official public holiday in Uruguay. Banks, government offices, and most businesses are closed.",
        fr: "Oui, le 1er janvier est un jour ferie officiel en Uruguay. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermes.",
        es: 'Si, el 1 de enero es un dia festivo oficial en Uruguay. Los bancos, las oficinas gubernamentales y la mayoria de los negocios estan cerrados.',
      },
    },
    {
      question: { en: "Is New Year's in summer in Uruguay?", fr: "Le Nouvel An est-il en ete en Uruguay ?", es: 'El Ano Nuevo es en verano en Uruguay?' },
      answer: {
        en: "Yes, Uruguay is in the Southern Hemisphere, so New Year's falls in the middle of summer. Temperatures in Montevideo typically range from 20-30 degrees Celsius, making beach celebrations and outdoor barbecues the norm.",
        fr: "Oui, l'Uruguay est dans l'hemisphere sud, donc le Nouvel An tombe au milieu de l'ete. Les temperatures a Montevideo varient generalement entre 20 et 30 degres Celsius, faisant des celebrations sur la plage et des barbecues en plein air la norme.",
        es: 'Si, Uruguay esta en el hemisferio sur, por lo que el Ano Nuevo cae en pleno verano. Las temperaturas en Montevideo tipicamente varian entre 20-30 grados Celsius, haciendo de las celebraciones en la playa y los asados al aire libre la norma.',
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
  id: 'uy_carnival',
  countryCode: 'uy',
  slugs: { en: 'carnival', fr: 'carnaval', es: 'carnaval' },
  names: { en: 'Carnival', fr: 'Carnaval', es: 'Carnaval' },

  dateType: 'calculated',
  calculateDate: getCarnivalMonday,

  descriptions: {
    en: 'Carnival in Uruguay is the longest carnival celebration in the world, lasting over 40 days. Centered on Montevideo, it features the Llamadas parade with candombe drumming, murga musical theater, and vibrant neighborhood celebrations that showcase Uruguayan culture at its most expressive.',
    fr: "Le Carnaval en Uruguay est la plus longue celebration de carnaval au monde, durant plus de 40 jours. Centre sur Montevideo, il presente le defile des Llamadas avec les tambours candombe, le theatre musical murga et des celebrations de quartier vibrantes qui montrent la culture uruguayenne a son plus expressif.",
    es: 'El Carnaval en Uruguay es la celebracion de carnaval mas larga del mundo, con una duracion de mas de 40 dias. Centrado en Montevideo, presenta el desfile de Llamadas con tambores candombe, teatro musical murga y vibrantes celebraciones barriales que muestran la cultura uruguaya en su maxima expresion.',
  },

  history: {
    en: "Uruguayan Carnival has its origins in the colonial period, blending African, European, and indigenous influences into a uniquely Uruguayan celebration. The candombe drumming tradition was brought by enslaved Africans and has become the heartbeat of the festival, recognized by UNESCO as Intangible Cultural Heritage in 2009.\n\nThe Llamadas (literally \"calls\") is the most spectacular event of Uruguayan Carnival — a massive street parade in the Barrio Sur and Palermo neighborhoods of Montevideo where dozens of candombe groups (comparsas) march with their drums, dancers, and elaborate costumes. The thundering rhythm of the tambores (drums) — chico, repique, and piano — creates an unforgettable experience.\n\nMurga, a form of musical theater unique to Uruguay, is the other pillar of Carnival. Murga groups perform satirical songs and sketches about politics and social issues on stages set up in neighborhoods (tablados) throughout Montevideo. The competition between murga groups at the Teatro de Verano (Summer Theater) is one of the cultural highlights of the year. With over 40 days of celebrations, Uruguayan Carnival is officially the longest in the world.",
    fr: "Le Carnaval uruguayen a ses origines a l'epoque coloniale, melangeant les influences africaines, europeennes et indigenes en une celebration uniquement uruguayenne. La tradition des tambours candombe a ete apportee par les Africains reduits en esclavage et est devenue le battement de coeur du festival, reconnue par l'UNESCO comme patrimoine culturel immateriel en 2009.\n\nLes Llamadas (litteralement « appels ») sont l'evenement le plus spectaculaire du Carnaval uruguayen — un defile de rue massif dans les quartiers Barrio Sur et Palermo de Montevideo ou des dizaines de groupes de candombe (comparsas) marchent avec leurs tambours, danseurs et costumes elabores. Le rythme tonnant des tambores (tambours) — chico, repique et piano — cree une experience inoubliable.\n\nLa murga, une forme de theatre musical unique a l'Uruguay, est l'autre pilier du Carnaval. Les groupes de murga interpretent des chansons et des sketches satiriques sur la politique et les questions sociales sur des scenes installees dans les quartiers (tablados) de Montevideo. La competition entre les groupes de murga au Teatro de Verano (Theatre d'Ete) est l'un des temps forts culturels de l'annee. Avec plus de 40 jours de celebrations, le Carnaval uruguayen est officiellement le plus long au monde.",
    es: "El Carnaval uruguayo tiene sus origenes en el periodo colonial, mezclando influencias africanas, europeas e indigenas en una celebracion unicamente uruguaya. La tradicion de tambores candombe fue traida por los africanos esclavizados y se ha convertido en el latido del corazon del festival, reconocida por la UNESCO como Patrimonio Cultural Inmaterial en 2009.\n\nLas Llamadas es el evento mas espectacular del Carnaval uruguayo — un masivo desfile callejero en los barrios Sur y Palermo de Montevideo donde decenas de comparsas de candombe marchan con sus tambores, bailarines y elaborados disfraces. El retumbante ritmo de los tambores — chico, repique y piano — crea una experiencia inolvidable.\n\nLa murga, una forma de teatro musical unica de Uruguay, es el otro pilar del Carnaval. Los grupos de murga interpretan canciones y sketches satiricos sobre politica y temas sociales en escenarios montados en los barrios (tablados) de Montevideo. La competencia entre grupos de murga en el Teatro de Verano es uno de los momentos culturales mas destacados del ano. Con mas de 40 dias de celebraciones, el Carnaval uruguayo es oficialmente el mas largo del mundo.",
  },

  traditions: {
    en: [
      'Watching the Llamadas parade with candombe drumming through Barrio Sur and Palermo',
      'Attending murga performances at neighborhood tablados (open-air stages)',
      'Watching the murga and comparsa competitions at the Teatro de Verano',
      'Dancing in the streets to the rhythm of candombe drums',
      'Attending the Desfile de Carnaval (official Carnival parade) along Avenida 18 de Julio',
      'Enjoying traditional Carnival foods from street vendors',
      'Participating in neighborhood parties and celebrations throughout the 40-day season',
    ],
    fr: [
      'Regarder le defile des Llamadas avec les tambours candombe a travers Barrio Sur et Palermo',
      'Assister aux spectacles de murga dans les tablados de quartier (scenes en plein air)',
      'Regarder les competitions de murga et comparsa au Teatro de Verano',
      'Danser dans les rues au rythme des tambours candombe',
      'Assister au Desfile de Carnaval (defile officiel) le long de l\'Avenida 18 de Julio',
      'Deguster les plats traditionnels du Carnaval vendus par les marchands ambulants',
      'Participer aux fetes de quartier et celebrations tout au long de la saison de 40 jours',
    ],
    es: [
      'Ver el desfile de Llamadas con tambores candombe por Barrio Sur y Palermo',
      'Asistir a espectaculos de murga en los tablados barriales (escenarios al aire libre)',
      'Ver las competencias de murga y comparsa en el Teatro de Verano',
      'Bailar en las calles al ritmo de los tambores candombe',
      'Asistir al Desfile de Carnaval (desfile oficial) por la Avenida 18 de Julio',
      'Disfrutar de comidas tradicionales del Carnaval de vendedores ambulantes',
      'Participar en fiestas barriales y celebraciones durante toda la temporada de 40 dias',
    ],
  },

  funFacts: {
    en: [
      'Uruguayan Carnival lasts over 40 days, making it officially the longest carnival celebration in the world.',
      'Candombe drumming, the heartbeat of Uruguayan Carnival, was recognized by UNESCO as Intangible Cultural Heritage in 2009.',
      'The three candombe drums — chico (small), repique (medium), and piano (large) — each play a distinct rhythmic role in the ensemble.',
      'Murga groups spend months rehearsing satirical performances that cleverly critique politics, social issues, and current events.',
      'The Llamadas parade features up to 50 comparsas with over 3,000 drummers, making it one of the loudest street festivals in the world.',
    ],
    fr: [
      'Le Carnaval uruguayen dure plus de 40 jours, ce qui en fait officiellement la plus longue celebration de carnaval au monde.',
      "Les tambours candombe, le battement de coeur du Carnaval uruguayen, ont ete reconnus par l'UNESCO comme patrimoine culturel immateriel en 2009.",
      'Les trois tambours candombe — chico (petit), repique (moyen) et piano (grand) — jouent chacun un role rythmique distinct dans l\'ensemble.',
      'Les groupes de murga passent des mois a repeter des performances satiriques qui critiquent habilement la politique, les questions sociales et l\'actualite.',
      'Le defile des Llamadas compte jusqu\'a 50 comparsas avec plus de 3 000 tambourineurs, ce qui en fait l\'un des festivals de rue les plus bruyants au monde.',
    ],
    es: [
      'El Carnaval uruguayo dura mas de 40 dias, haciendolo oficialmente la celebracion de carnaval mas larga del mundo.',
      'Los tambores candombe, el latido del corazon del Carnaval uruguayo, fueron reconocidos por la UNESCO como Patrimonio Cultural Inmaterial en 2009.',
      'Los tres tambores candombe — chico (pequeno), repique (mediano) y piano (grande) — cada uno cumple un papel ritmico distinto en el conjunto.',
      'Los grupos de murga pasan meses ensayando actuaciones satiricas que critican habilmente la politica, los temas sociales y los eventos actuales.',
      'El desfile de Llamadas presenta hasta 50 comparsas con mas de 3.000 tamborileros, haciendolo uno de los festivales callejeros mas ruidosos del mundo.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the dates of the Llamadas parade and book accommodation in advance',
      'Get tickets for murga competitions at the Teatro de Verano',
      'Explore neighborhood tablados for free murga performances throughout Carnival season',
      'Wear comfortable shoes and clothes for dancing and walking in hot weather',
      'Bring earplugs if noise-sensitive — candombe drums are extremely loud',
    ],
    fr: [
      "Verifier les dates du defile des Llamadas et reserver l'hebergement a l'avance",
      'Obtenir des billets pour les competitions de murga au Teatro de Verano',
      'Explorer les tablados de quartier pour des performances de murga gratuites pendant la saison du Carnaval',
      'Porter des chaussures et vetements confortables pour danser et marcher par temps chaud',
      'Apporter des bouchons d\'oreilles si vous etes sensible au bruit — les tambours candombe sont extremement forts',
    ],
    es: [
      'Verificar las fechas del desfile de Llamadas y reservar alojamiento con anticipacion',
      'Obtener boletos para las competencias de murga en el Teatro de Verano',
      'Explorar los tablados barriales para actuaciones de murga gratuitas durante la temporada de Carnaval',
      'Usar zapatos y ropa comoda para bailar y caminar con clima caluroso',
      'Llevar tapones para los oidos si es sensible al ruido — los tambores candombe son extremadamente fuertes',
    ],
  },

  relatedHolidays: ['uy_new-years-day', 'uy_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Carnival {year} Uruguay — Countdown & Guide',
      descriptionTemplate: 'When is Carnival {year} in Uruguay? Live countdown to the longest carnival in the world, Llamadas, candombe, murga, and celebration guide.',
      keywords: ['Uruguay Carnival', 'Llamadas parade', 'candombe Uruguay', 'murga', 'Carnaval Uruguay'],
    },
    fr: {
      titleTemplate: 'Carnaval {year} Uruguay — Compte a rebours et guide',
      descriptionTemplate: 'Quand est le Carnaval {year} en Uruguay ? Compte a rebours, le plus long carnaval du monde, Llamadas, candombe, murga et guide.',
      keywords: ['Carnaval Uruguay', 'defile Llamadas', 'candombe Uruguay', 'murga', 'jours feries Uruguay'],
    },
    es: {
      titleTemplate: 'Carnaval {year} Uruguay — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es el Carnaval {year} en Uruguay? Cuenta regresiva al carnaval mas largo del mundo, Llamadas, candombe, murga y guia.',
      keywords: ['Carnaval Uruguay', 'desfile de Llamadas', 'candombe Uruguay', 'murga', 'feriados Uruguay'],
    },
  },

  faq: [
    {
      question: { en: 'When is Carnival {year} in Uruguay?', fr: 'Quand est le Carnaval {year} en Uruguay ?', es: 'Cuando es el Carnaval {year} en Uruguay?' },
      answer: {
        en: 'Carnival {year} in Uruguay begins on {date} (Carnival Monday). The celebration lasts over 40 days and is the longest carnival in the world.',
        fr: "Le Carnaval {year} en Uruguay commence le {date} (lundi de Carnaval). La celebration dure plus de 40 jours et est le plus long carnaval du monde.",
        es: 'El Carnaval {year} en Uruguay comienza el {date} (lunes de Carnaval). La celebracion dura mas de 40 dias y es el carnaval mas largo del mundo.',
      },
    },
    {
      question: { en: 'What are the Llamadas?', fr: 'Que sont les Llamadas ?', es: 'Que son las Llamadas?' },
      answer: {
        en: 'The Llamadas (literally "calls") is the most spectacular event of Uruguayan Carnival — a massive street parade in Barrio Sur and Palermo, Montevideo, where dozens of candombe comparsas march with drums, dancers in traditional costumes, and flag bearers. The thundering candombe rhythm creates an electrifying atmosphere.',
        fr: "Les Llamadas (litteralement « appels ») sont l'evenement le plus spectaculaire du Carnaval uruguayen — un defile de rue massif dans les quartiers Barrio Sur et Palermo de Montevideo, ou des dizaines de comparsas de candombe marchent avec des tambours, des danseurs en costumes traditionnels et des porte-drapeaux. Le rythme tonnant du candombe cree une atmosphere electrisante.",
        es: 'Las Llamadas (literalmente "llamadas") es el evento mas espectacular del Carnaval uruguayo — un masivo desfile callejero en Barrio Sur y Palermo, Montevideo, donde decenas de comparsas de candombe marchan con tambores, bailarines en trajes tradicionales y abanderados. El retumbante ritmo candombe crea una atmosfera electrizante.',
      },
    },
    {
      question: { en: 'What is murga?', fr: "Qu'est-ce que la murga ?", es: 'Que es la murga?' },
      answer: {
        en: 'Murga is a form of musical theater unique to Uruguayan Carnival. Groups of performers sing satirical songs and perform comedic sketches about politics, social issues, and current events. They compete at the Teatro de Verano and perform at neighborhood tablados throughout the Carnival season.',
        fr: 'La murga est une forme de theatre musical unique au Carnaval uruguayen. Des groupes d\'artistes chantent des chansons satiriques et jouent des sketches comiques sur la politique, les questions sociales et l\'actualite. Ils concourent au Teatro de Verano et se produisent dans les tablados de quartier tout au long de la saison du Carnaval.',
        es: 'La murga es una forma de teatro musical unica del Carnaval uruguayo. Grupos de artistas cantan canciones satiricas y realizan sketches comicos sobre politica, temas sociales y eventos actuales. Compiten en el Teatro de Verano y actuan en tablados barriales durante toda la temporada de Carnaval.',
      },
    },
    {
      question: { en: 'Is Carnival a public holiday in Uruguay?', fr: 'Le Carnaval est-il un jour ferie en Uruguay ?', es: 'Es el Carnaval un dia festivo en Uruguay?' },
      answer: {
        en: 'Yes, Carnival Monday and Tuesday are official public holidays in Uruguay. Government offices, banks, and many businesses are closed. The broader Carnival season lasts over 40 days with events throughout.',
        fr: 'Oui, le lundi et le mardi de Carnaval sont des jours feries officiels en Uruguay. Les bureaux gouvernementaux, les banques et de nombreux commerces sont fermes. La saison de Carnaval plus large dure plus de 40 jours avec des evenements tout au long.',
        es: 'Si, el lunes y martes de Carnaval son dias festivos oficiales en Uruguay. Las oficinas gubernamentales, bancos y muchos negocios estan cerrados. La temporada de Carnaval mas amplia dura mas de 40 dias con eventos a lo largo.',
      },
    },
  ],

  colorTheme: 'carnival',
  icon: '\ud83c\udfad',
};

// ---------------------------------------------------------------------------
// Landing of the 33 Patriots — April 19
// ---------------------------------------------------------------------------

const thirtyThreePatriots: HolidayData = {
  id: 'uy_33-patriots',
  countryCode: 'uy',
  slugs: { en: 'landing-of-the-33-patriots', fr: 'debarquement-des-33-orientaux', es: 'desembarco-de-los-33-orientales' },
  names: { en: 'Landing of the 33 Patriots', fr: 'Debarquement des 33 Orientaux', es: 'Desembarco de los 33 Orientales' },

  dateType: 'fixed',
  fixedMonth: 4,
  fixedDay: 19,

  descriptions: {
    en: 'The Landing of the 33 Patriots (Desembarco de los 33 Orientales) on April 19 commemorates the 1825 expedition led by Juan Antonio Lavalleja in which 33 patriots crossed the Rio de la Plata from Argentina to begin the liberation of Uruguay from Brazilian occupation.',
    fr: "Le Debarquement des 33 Orientaux le 19 avril commemore l'expedition de 1825 menee par Juan Antonio Lavalleja dans laquelle 33 patriotes ont traverse le Rio de la Plata depuis l'Argentine pour commencer la liberation de l'Uruguay de l'occupation bresilienne.",
    es: 'El Desembarco de los 33 Orientales el 19 de abril conmemora la expedicion de 1825 liderada por Juan Antonio Lavalleja en la que 33 patriotas cruzaron el Rio de la Plata desde Argentina para comenzar la liberacion de Uruguay de la ocupacion brasilena.',
  },

  history: {
    en: "On April 19, 1825, a group of 33 Uruguayan patriots led by Juan Antonio Lavalleja landed at Agraciada beach on the Rio Uruguay, beginning a military campaign to liberate the Banda Oriental (modern Uruguay) from Brazilian occupation. The territory had been annexed by Brazil as the Cisplatina Province following the defeat of Jose Gervasio Artigas's independence movement.\n\nThe 33 Orientales, as they became known, quickly gained popular support and launched a guerrilla campaign against Brazilian forces. Their movement led to the Declaratoria de la Independencia on August 25, 1825, and eventually to the Treaty of Montevideo in 1828, which established Uruguay as an independent nation.\n\nThe expedition is one of the foundational events of Uruguayan national identity. The 33 Patriots are celebrated as heroes who risked everything to free their homeland. Their flag, with the words \"Libertad o Muerte\" (Liberty or Death), remains an iconic symbol of Uruguayan patriotism.",
    fr: "Le 19 avril 1825, un groupe de 33 patriotes uruguayens menes par Juan Antonio Lavalleja a debarque sur la plage d'Agraciada sur le Rio Uruguay, commencant une campagne militaire pour liberer la Banda Oriental (l'Uruguay moderne) de l'occupation bresilienne. Le territoire avait ete annexe par le Bresil comme Province Cisplatine apres la defaite du mouvement d'independance de Jose Gervasio Artigas.\n\nLes 33 Orientales, comme ils sont devenus connus, ont rapidement gagne le soutien populaire et lance une campagne de guerilla contre les forces bresiliennes. Leur mouvement a conduit a la Declaratoria de la Independencia le 25 aout 1825, et finalement au Traite de Montevideo en 1828, qui a etabli l'Uruguay comme nation independante.\n\nL'expedition est l'un des evenements fondateurs de l'identite nationale uruguayenne. Les 33 Patriotes sont celebres comme des heros qui ont tout risque pour liberer leur patrie. Leur drapeau, avec les mots « Libertad o Muerte » (Liberte ou Mort), reste un symbole iconique du patriotisme uruguayen.",
    es: "El 19 de abril de 1825, un grupo de 33 patriotas uruguayos liderados por Juan Antonio Lavalleja desembarco en la playa de la Agraciada sobre el Rio Uruguay, comenzando una campana militar para liberar la Banda Oriental (el Uruguay moderno) de la ocupacion brasilena. El territorio habia sido anexado por Brasil como la Provincia Cisplatina tras la derrota del movimiento independentista de Jose Gervasio Artigas.\n\nLos 33 Orientales, como se los conocio, rapidamente ganaron apoyo popular y lanzaron una campana guerrillera contra las fuerzas brasilenas. Su movimiento llevo a la Declaratoria de la Independencia el 25 de agosto de 1825, y finalmente al Tratado de Montevideo en 1828, que establecio a Uruguay como nacion independiente.\n\nLa expedicion es uno de los eventos fundacionales de la identidad nacional uruguaya. Los 33 Patriotas son celebrados como heroes que arriesgaron todo para liberar su patria. Su bandera, con las palabras \"Libertad o Muerte\", sigue siendo un simbolo iconico del patriotismo uruguayo.",
  },

  traditions: {
    en: [
      'Attending civic ceremonies and flag-raising events',
      'Visiting the Agraciada beach where the 33 Patriots landed',
      'Participating in school assemblies honoring the patriots',
      'Displaying the flag of the 33 Orientales alongside the national flag',
      'Watching commemorative events on television',
    ],
    fr: [
      'Assister aux ceremonies civiques et evenements de lever du drapeau',
      'Visiter la plage d\'Agraciada ou les 33 Patriotes ont debarque',
      'Participer aux assemblees scolaires honorant les patriotes',
      'Afficher le drapeau des 33 Orientales aux cotes du drapeau national',
      'Regarder les evenements commemoratifs a la television',
    ],
    es: [
      'Asistir a ceremonias civicas y eventos de izamiento de bandera',
      'Visitar la playa de la Agraciada donde desembarcaron los 33 Patriotas',
      'Participar en actos escolares honrando a los patriotas',
      'Exhibir la bandera de los 33 Orientales junto a la bandera nacional',
      'Ver eventos conmemorativos por television',
    ],
  },

  funFacts: {
    en: [
      'Despite their name, historical records suggest the actual number of patriots may have been 32 or 34 — the number 33 became symbolic.',
      'The flag of the 33 Orientales bears the motto "Libertad o Muerte" (Liberty or Death) and features three horizontal stripes of blue, white, and red.',
      'Juan Antonio Lavalleja and the 33 Patriots departed from San Isidro, near Buenos Aires, Argentina.',
      'The expedition ultimately led to the creation of Uruguay as a buffer state between Argentina and Brazil, mediated by Great Britain.',
      'The beach at Agraciada, where the patriots landed, is now a national monument and historical site in the Soriano department.',
    ],
    fr: [
      "Malgre leur nom, les archives historiques suggerent que le nombre reel de patriotes aurait pu etre 32 ou 34 — le nombre 33 est devenu symbolique.",
      "Le drapeau des 33 Orientales porte la devise « Libertad o Muerte » (Liberte ou Mort) et comporte trois bandes horizontales de bleu, blanc et rouge.",
      "Juan Antonio Lavalleja et les 33 Patriotes sont partis de San Isidro, pres de Buenos Aires, en Argentine.",
      "L'expedition a finalement conduit a la creation de l'Uruguay comme Etat tampon entre l'Argentine et le Bresil, mediee par la Grande-Bretagne.",
      "La plage d'Agraciada, ou les patriotes ont debarque, est maintenant un monument national et site historique dans le departement de Soriano.",
    ],
    es: [
      'A pesar de su nombre, los registros historicos sugieren que el numero real de patriotas pudo haber sido 32 o 34 — el numero 33 se volvio simbolico.',
      'La bandera de los 33 Orientales lleva el lema "Libertad o Muerte" y presenta tres franjas horizontales de azul, blanco y rojo.',
      'Juan Antonio Lavalleja y los 33 Patriotas partieron de San Isidro, cerca de Buenos Aires, Argentina.',
      'La expedicion finalmente llevo a la creacion de Uruguay como estado tapón entre Argentina y Brasil, mediada por Gran Bretana.',
      'La playa de la Agraciada, donde desembarcaron los patriotas, es ahora un monumento nacional y sitio historico en el departamento de Soriano.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend local civic ceremonies and commemorative events',
      'Visit the Agraciada beach national monument if in the Soriano department',
      'Learn about the 33 Orientales and their role in Uruguayan independence',
      'Display the Uruguayan flag and the flag of the 33 Orientales',
      'Check for special exhibitions at museums in Montevideo',
    ],
    fr: [
      'Assister aux ceremonies civiques locales et evenements commemoratifs',
      'Visiter le monument national de la plage d\'Agraciada si vous etes dans le departement de Soriano',
      'Decouvrir les 33 Orientales et leur role dans l\'independance uruguayenne',
      'Afficher le drapeau uruguayen et le drapeau des 33 Orientales',
      'Verifier les expositions speciales dans les musees de Montevideo',
    ],
    es: [
      'Asistir a ceremonias civicas locales y eventos conmemorativos',
      'Visitar el monumento nacional de la playa de la Agraciada si esta en el departamento de Soriano',
      'Aprender sobre los 33 Orientales y su papel en la independencia uruguaya',
      'Exhibir la bandera uruguaya y la bandera de los 33 Orientales',
      'Verificar exposiciones especiales en museos de Montevideo',
    ],
  },

  relatedHolidays: ['uy_independence-day', 'uy_labour-day'],

  seo: {
    en: {
      titleTemplate: 'Landing of the 33 Patriots {year} — Countdown & History',
      descriptionTemplate: 'When is the Landing of the 33 Patriots {year}? Live countdown to April 19, history of the 1825 expedition, and celebration guide.',
      keywords: ['33 Patriots Uruguay', 'Desembarco 33 Orientales', 'April 19 Uruguay', 'Uruguayan independence', 'Uruguay holidays'],
    },
    fr: {
      titleTemplate: 'Debarquement des 33 Orientaux {year} — Compte a rebours et histoire',
      descriptionTemplate: "Quand est le Debarquement des 33 Orientaux {year} ? Compte a rebours, histoire de l'expedition de 1825 et guide.",
      keywords: ['33 Orientales Uruguay', 'Debarquement 33 Orientaux', '19 avril Uruguay', 'independance Uruguay', 'jours feries Uruguay'],
    },
    es: {
      titleTemplate: 'Desembarco de los 33 Orientales {year} — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Desembarco de los 33 Orientales {year}? Cuenta regresiva al 19 de abril, historia de la expedicion de 1825 y guia.',
      keywords: ['33 Orientales Uruguay', 'Desembarco 33 Orientales', '19 de abril Uruguay', 'independencia Uruguay', 'feriados Uruguay'],
    },
  },

  faq: [
    {
      question: { en: 'When is the Landing of the 33 Patriots {year}?', fr: 'Quand est le Debarquement des 33 Orientaux {year} ?', es: 'Cuando es el Desembarco de los 33 Orientales {year}?' },
      answer: {
        en: 'The Landing of the 33 Patriots {year} is on {date}. It is always April 19.',
        fr: "Le Debarquement des 33 Orientaux {year} est le {date}. C'est toujours le 19 avril.",
        es: 'El Desembarco de los 33 Orientales {year} es el {date}. Siempre es el 19 de abril.',
      },
    },
    {
      question: { en: 'Who were the 33 Orientales?', fr: 'Qui etaient les 33 Orientales ?', es: 'Quienes fueron los 33 Orientales?' },
      answer: {
        en: 'The 33 Orientales were a group of Uruguayan patriots led by Juan Antonio Lavalleja who crossed from Argentina to the Banda Oriental (Uruguay) in 1825 to liberate the territory from Brazilian occupation. Their expedition ultimately led to Uruguayan independence.',
        fr: "Les 33 Orientales etaient un groupe de patriotes uruguayens menes par Juan Antonio Lavalleja qui ont traverse de l'Argentine vers la Banda Oriental (Uruguay) en 1825 pour liberer le territoire de l'occupation bresilienne. Leur expedition a finalement conduit a l'independance uruguayenne.",
        es: 'Los 33 Orientales fueron un grupo de patriotas uruguayos liderados por Juan Antonio Lavalleja que cruzaron desde Argentina hacia la Banda Oriental (Uruguay) en 1825 para liberar el territorio de la ocupacion brasilena. Su expedicion finalmente llevo a la independencia uruguaya.',
      },
    },
    {
      question: { en: 'Is April 19 a public holiday in Uruguay?', fr: 'Le 19 avril est-il un jour ferie en Uruguay ?', es: 'Es el 19 de abril un dia festivo en Uruguay?' },
      answer: {
        en: 'Yes, April 19 is an official public holiday in Uruguay commemorating the Landing of the 33 Patriots.',
        fr: "Oui, le 19 avril est un jour ferie officiel en Uruguay commemorant le Debarquement des 33 Orientaux.",
        es: 'Si, el 19 de abril es un dia festivo oficial en Uruguay conmemorando el Desembarco de los 33 Orientales.',
      },
    },
    {
      question: { en: 'Why was Uruguay occupied by Brazil?', fr: "Pourquoi l'Uruguay etait-il occupe par le Bresil ?", es: 'Por que Uruguay estaba ocupado por Brasil?' },
      answer: {
        en: "After the defeat of independence hero Jose Gervasio Artigas, the Banda Oriental (Uruguay) was annexed by the Portuguese Empire (later Brazil) in 1821 as the Cisplatina Province. The 33 Patriots' expedition in 1825 began the movement that would free Uruguay from Brazilian control.",
        fr: "Apres la defaite du heros de l'independance Jose Gervasio Artigas, la Banda Oriental (Uruguay) a ete annexee par l'Empire portugais (puis le Bresil) en 1821 sous le nom de Province Cisplatine. L'expedition des 33 Patriotes en 1825 a commence le mouvement qui allait liberer l'Uruguay du controle bresilien.",
        es: 'Despues de la derrota del heroe de la independencia Jose Gervasio Artigas, la Banda Oriental (Uruguay) fue anexada por el Imperio portugues (luego Brasil) en 1821 como la Provincia Cisplatina. La expedicion de los 33 Patriotas en 1825 comenzo el movimiento que liberaria a Uruguay del control brasileno.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\u26f5',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'uy_labour-day',
  countryCode: 'uy',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fete du Travail', es: 'Dia del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a public holiday in Uruguay honoring the workers' movement and labor rights. It is observed with union marches, rallies, and cultural events organized by the PIT-CNT, Uruguay's main trade union federation.",
    fr: "La Fete du Travail, le 1er mai, est un jour ferie en Uruguay honorant le mouvement ouvrier et les droits des travailleurs. Elle est observee avec des marches syndicales, des rassemblements et des evenements culturels organises par le PIT-CNT, la principale federation syndicale de l'Uruguay.",
    es: 'El Dia del Trabajo, el 1 de mayo, es un dia festivo en Uruguay que honra el movimiento obrero y los derechos laborales. Se observa con marchas sindicales, manifestaciones y eventos culturales organizados por el PIT-CNT, la principal central sindical de Uruguay.',
  },

  history: {
    en: "Labour Day in Uruguay has strong roots, reflecting the country's progressive labor traditions. Uruguay was one of the first countries in the Americas to establish the eight-hour workday (in 1915) and has long been a leader in workers' rights in Latin America.\n\nThe PIT-CNT (Plenario Intersindical de Trabajadores-Convencion Nacional de Trabajadores) is one of the most organized and influential labor federations in South America. Each May 1, the PIT-CNT organizes a large march and rally in Montevideo, drawing tens of thousands of workers and supporters.\n\nUruguay's labor movement has been closely linked to the country's political evolution. The progressive labor laws established in the early 20th century under President Jose Batlle y Ordonez set the foundation for what would become one of the most advanced welfare states in Latin America.",
    fr: "La Fete du Travail en Uruguay a de fortes racines, refletant les traditions ouvrieres progressistes du pays. L'Uruguay a ete l'un des premiers pays des Ameriques a etablir la journee de travail de huit heures (en 1915) et a longtemps ete un leader en matiere de droits des travailleurs en Amerique latine.\n\nLe PIT-CNT (Plenario Intersindical de Trabajadores-Convencion Nacional de Trabajadores) est l'une des federations syndicales les plus organisees et influentes d'Amerique du Sud. Chaque 1er mai, le PIT-CNT organise une grande marche et un rassemblement a Montevideo, attirant des dizaines de milliers de travailleurs et de sympathisants.\n\nLe mouvement ouvrier uruguayen a ete etroitement lie a l'evolution politique du pays. Les lois du travail progressistes etablies au debut du XXe siecle sous le president Jose Batlle y Ordonez ont pose les fondations de ce qui allait devenir l'un des Etats-providence les plus avances d'Amerique latine.",
    es: "El Dia del Trabajo en Uruguay tiene fuertes raices, reflejando las tradiciones laborales progresistas del pais. Uruguay fue uno de los primeros paises de las Americas en establecer la jornada laboral de ocho horas (en 1915) y ha sido durante mucho tiempo un lider en derechos de los trabajadores en America Latina.\n\nEl PIT-CNT (Plenario Intersindical de Trabajadores-Convencion Nacional de Trabajadores) es una de las federaciones sindicales mas organizadas e influyentes de Sudamerica. Cada 1 de mayo, el PIT-CNT organiza una gran marcha y manifestacion en Montevideo, atrayendo a decenas de miles de trabajadores y simpatizantes.\n\nEl movimiento obrero uruguayo ha estado estrechamente vinculado a la evolucion politica del pais. Las leyes laborales progresistas establecidas a principios del siglo XX bajo el presidente Jose Batlle y Ordonez sentaron las bases de lo que se convertiria en uno de los estados de bienestar mas avanzados de America Latina.",
  },

  traditions: {
    en: [
      'Attending the PIT-CNT march and rally in Montevideo',
      'Listening to speeches by labor leaders and political figures',
      'Participating in cultural events celebrating workers',
      'Spending the day with family, often with an asado and mate',
      'Reflecting on Uruguay\'s progressive labor rights history',
    ],
    fr: [
      'Assister a la marche et au rassemblement du PIT-CNT a Montevideo',
      'Ecouter les discours des dirigeants syndicaux et des personnalites politiques',
      'Participer a des evenements culturels celebrant les travailleurs',
      'Passer la journee en famille, souvent avec un asado et du mate',
      'Reflechir a l\'histoire progressiste des droits des travailleurs en Uruguay',
    ],
    es: [
      'Asistir a la marcha y manifestacion del PIT-CNT en Montevideo',
      'Escuchar discursos de lideres sindicales y figuras politicas',
      'Participar en eventos culturales que celebran a los trabajadores',
      'Pasar el dia con la familia, a menudo con un asado y mate',
      'Reflexionar sobre la historia progresista de derechos laborales de Uruguay',
    ],
  },

  funFacts: {
    en: [
      'Uruguay established the eight-hour workday in 1915, one of the first countries in the world to do so.',
      'The PIT-CNT Labour Day march in Montevideo regularly draws 50,000 to 100,000 participants.',
      'Uruguay under President Batlle y Ordonez pioneered labor rights in Latin America in the early 1900s.',
      'Uruguay was the first country in the Americas to grant workers the right to strike.',
      'May 1 in Uruguay often features autumn weather with mild temperatures, ideal for the traditional march.',
    ],
    fr: [
      "L'Uruguay a etabli la journee de travail de huit heures en 1915, l'un des premiers pays au monde a le faire.",
      'La marche de la Fete du Travail du PIT-CNT a Montevideo attire regulierement de 50 000 a 100 000 participants.',
      "L'Uruguay sous le president Batlle y Ordonez a ete pionnier en matiere de droits des travailleurs en Amerique latine au debut des annees 1900.",
      "L'Uruguay a ete le premier pays des Ameriques a accorder aux travailleurs le droit de greve.",
      "Le 1er mai en Uruguay est souvent accompagne d'un temps automnal avec des temperatures douces, ideal pour la marche traditionnelle.",
    ],
    es: [
      'Uruguay establecio la jornada laboral de ocho horas en 1915, uno de los primeros paises del mundo en hacerlo.',
      'La marcha del Dia del Trabajo del PIT-CNT en Montevideo regularmente atrae entre 50.000 y 100.000 participantes.',
      'Uruguay bajo el presidente Batlle y Ordonez fue pionero en derechos laborales en America Latina a principios de los 1900.',
      'Uruguay fue el primer pais de las Americas en otorgar a los trabajadores el derecho a huelga.',
      'El 1 de mayo en Uruguay a menudo presenta clima otonal con temperaturas suaves, ideal para la marcha tradicional.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the PIT-CNT march route and timing in Montevideo',
      'Plan a family gathering with asado and mate',
      'Be aware that banks, government offices, and many businesses will be closed',
      'Watch for traffic disruptions due to the march in central Montevideo',
      'Dress warmly — May in Uruguay is autumn and can be cool',
    ],
    fr: [
      'Verifier le parcours et l\'horaire de la marche du PIT-CNT a Montevideo',
      'Planifier un rassemblement familial avec asado et mate',
      'Savoir que les banques, bureaux gouvernementaux et de nombreux commerces seront fermes',
      'Surveiller les perturbations de trafic dues a la marche dans le centre de Montevideo',
      "S'habiller chaudement — mai en Uruguay est l'automne et il peut faire frais",
    ],
    es: [
      'Verificar la ruta y horario de la marcha del PIT-CNT en Montevideo',
      'Planificar una reunion familiar con asado y mate',
      'Tener en cuenta que bancos, oficinas gubernamentales y muchos negocios estaran cerrados',
      'Estar atento a interrupciones de trafico por la marcha en el centro de Montevideo',
      'Vestirse abrigado — mayo en Uruguay es otono y puede ser fresco',
    ],
  },

  relatedHolidays: ['uy_33-patriots', 'uy_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Uruguay — Countdown & Info',
      descriptionTemplate: 'When is Labour Day {year} in Uruguay? Live countdown to May 1, workers\' rights history, PIT-CNT march, and public holiday information.',
      keywords: ['Labour Day Uruguay', 'Dia del Trabajo Uruguay', 'May 1 Uruguay', 'PIT-CNT march', 'Uruguay public holidays'],
    },
    fr: {
      titleTemplate: 'Fete du Travail {year} Uruguay — Compte a rebours et info',
      descriptionTemplate: 'Quand est la Fete du Travail {year} en Uruguay ? Compte a rebours, histoire des droits des travailleurs, marche du PIT-CNT et informations.',
      keywords: ['Fete du Travail Uruguay', '1er mai Uruguay', 'jours feries Uruguay', 'marche PIT-CNT', 'droits des travailleurs Uruguay'],
    },
    es: {
      titleTemplate: 'Dia del Trabajo {year} Uruguay — Cuenta regresiva e info',
      descriptionTemplate: 'Cuando es el Dia del Trabajo {year} en Uruguay? Cuenta regresiva al 1 de mayo, historia de derechos laborales, marcha del PIT-CNT e info.',
      keywords: ['Dia del Trabajo Uruguay', '1 de mayo Uruguay', 'feriados Uruguay', 'marcha PIT-CNT', 'derechos laborales Uruguay'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Uruguay?', fr: 'Quand est la Fete du Travail {year} en Uruguay ?', es: 'Cuando es el Dia del Trabajo {year} en Uruguay?' },
      answer: {
        en: 'Labour Day {year} in Uruguay is on {date}. It is always May 1.',
        fr: 'La Fete du Travail {year} en Uruguay est le {date}. C\'est toujours le 1er mai.',
        es: 'El Dia del Trabajo {year} en Uruguay es el {date}. Siempre es el 1 de mayo.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Uruguay?', fr: 'La Fete du Travail est-elle un jour ferie en Uruguay ?', es: 'Es el Dia del Trabajo un dia festivo en Uruguay?' },
      answer: {
        en: 'Yes, May 1 is an official public holiday in Uruguay. Government offices, banks, and most businesses are closed.',
        fr: 'Oui, le 1er mai est un jour ferie officiel en Uruguay. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.',
        es: 'Si, el 1 de mayo es un dia festivo oficial en Uruguay. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.',
      },
    },
    {
      question: { en: 'What is the PIT-CNT?', fr: "Qu'est-ce que le PIT-CNT ?", es: 'Que es el PIT-CNT?' },
      answer: {
        en: "The PIT-CNT (Plenario Intersindical de Trabajadores-Convencion Nacional de Trabajadores) is Uruguay's main trade union federation, unifying the country's labor movement. It organizes the massive Labour Day march in Montevideo each year.",
        fr: "Le PIT-CNT (Plenario Intersindical de Trabajadores-Convencion Nacional de Trabajadores) est la principale federation syndicale de l'Uruguay, unifiant le mouvement ouvrier du pays. Il organise la massive marche de la Fete du Travail a Montevideo chaque annee.",
        es: 'El PIT-CNT (Plenario Intersindical de Trabajadores-Convencion Nacional de Trabajadores) es la principal central sindical de Uruguay, unificando el movimiento obrero del pais. Organiza la masiva marcha del Dia del Trabajo en Montevideo cada ano.',
      },
    },
    {
      question: { en: 'When did Uruguay establish the eight-hour workday?', fr: "Quand l'Uruguay a-t-il etabli la journee de travail de huit heures ?", es: 'Cuando establecio Uruguay la jornada laboral de ocho horas?' },
      answer: {
        en: 'Uruguay established the eight-hour workday by law in 1915, making it one of the first countries in the world to do so. This was part of the progressive reforms under President Jose Batlle y Ordonez.',
        fr: "L'Uruguay a etabli la journee de travail de huit heures par la loi en 1915, ce qui en fait l'un des premiers pays au monde a le faire. Cela faisait partie des reformes progressistes sous le president Jose Batlle y Ordonez.",
        es: 'Uruguay establecio la jornada laboral de ocho horas por ley en 1915, haciendolo uno de los primeros paises del mundo en hacerlo. Esto fue parte de las reformas progresistas bajo el presidente Jose Batlle y Ordonez.',
      },
    },
  ],

  colorTheme: 'autumn',
  icon: '\u2692\ufe0f',
};

// ---------------------------------------------------------------------------
// Independence Day — August 25
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'uy_independence-day',
  countryCode: 'uy',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Independance", es: 'Dia de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 25,

  descriptions: {
    en: "Uruguay's Independence Day on August 25 commemorates the Declaratoria de la Independencia of 1825, when representatives declared the country's independence from Brazilian rule. It is celebrated with patriotic ceremonies, cultural events, and national pride.",
    fr: "Le Jour de l'Independance de l'Uruguay, le 25 aout, commemore la Declaratoria de la Independencia de 1825, lorsque les representants ont declare l'independance du pays vis-a-vis du Bresil. Il est celebre avec des ceremonies patriotiques, des evenements culturels et de la fierte nationale.",
    es: 'El Dia de la Independencia de Uruguay, el 25 de agosto, conmemora la Declaratoria de la Independencia de 1825, cuando los representantes declararon la independencia del pais del dominio brasileno. Se celebra con ceremonias patrioticas, eventos culturales y orgullo nacional.',
  },

  history: {
    en: "On August 25, 1825, representatives of the Banda Oriental (modern Uruguay) meeting in Florida declared independence from the Empire of Brazil and sought to reunite with the United Provinces of the Rio de la Plata (Argentina). This declaration followed the Landing of the 33 Patriots on April 19 of that year.\n\nThe declaration triggered the Argentine-Brazilian War (1825-1828), which ended with British mediation and the Treaty of Montevideo in 1828. Rather than being annexed by either Argentina or Brazil, the Banda Oriental became the independent Oriental Republic of Uruguay, serving as a buffer state between its two large neighbors.\n\nThe first constitution was adopted on July 18, 1830, completing the process of independence. Today, August 25 is one of Uruguay's most important national holidays, celebrated with ceremonies, flag-raising events, and cultural celebrations that honor the country's fight for sovereignty.",
    fr: "Le 25 aout 1825, les representants de la Banda Oriental (l'Uruguay moderne) reunis a Florida ont declare l'independance de l'Empire du Bresil et ont cherche a se reunir avec les Provinces Unies du Rio de la Plata (Argentine). Cette declaration a suivi le Debarquement des 33 Patriotes le 19 avril de la meme annee.\n\nLa declaration a declenche la Guerre argentino-bresilienne (1825-1828), qui s'est terminee par la mediation britannique et le Traite de Montevideo en 1828. Plutot que d'etre annexee par l'Argentine ou le Bresil, la Banda Oriental est devenue la Republique Orientale de l'Uruguay independante, servant d'Etat tampon entre ses deux grands voisins.\n\nLa premiere constitution a ete adoptee le 18 juillet 1830, completant le processus d'independance. Aujourd'hui, le 25 aout est l'un des jours feries nationaux les plus importants de l'Uruguay, celebre avec des ceremonies, des evenements de lever du drapeau et des celebrations culturelles qui honorent la lutte du pays pour la souverainete.",
    es: "El 25 de agosto de 1825, los representantes de la Banda Oriental (el Uruguay moderno) reunidos en Florida declararon la independencia del Imperio de Brasil y buscaron reunirse con las Provincias Unidas del Rio de la Plata (Argentina). Esta declaracion siguio al Desembarco de los 33 Patriotas el 19 de abril de ese ano.\n\nLa declaracion desencadeno la Guerra argentino-brasilena (1825-1828), que termino con la mediacion britanica y el Tratado de Montevideo en 1828. En lugar de ser anexada por Argentina o Brasil, la Banda Oriental se convirtio en la Republica Oriental del Uruguay independiente, sirviendo como estado tapón entre sus dos grandes vecinos.\n\nLa primera constitucion fue adoptada el 18 de julio de 1830, completando el proceso de independencia. Hoy, el 25 de agosto es uno de los dias festivos nacionales mas importantes de Uruguay, celebrado con ceremonias, eventos de izamiento de bandera y celebraciones culturales que honran la lucha del pais por la soberania.",
  },

  traditions: {
    en: [
      'Attending patriotic ceremonies and flag-raising events',
      'Watching the presidential address on television',
      'Participating in cultural events and traditional music performances',
      'Flying the Uruguayan flag on homes and public buildings',
      'Enjoying a family asado to celebrate the holiday',
      'Visiting historical sites related to Uruguayan independence',
    ],
    fr: [
      'Assister aux ceremonies patriotiques et evenements de lever du drapeau',
      'Regarder le discours presidentiel a la television',
      'Participer a des evenements culturels et spectacles de musique traditionnelle',
      'Hisser le drapeau uruguayen sur les maisons et les batiments publics',
      'Profiter d\'un asado familial pour celebrer le jour ferie',
      'Visiter les sites historiques lies a l\'independance uruguayenne',
    ],
    es: [
      'Asistir a ceremonias patrioticas y eventos de izamiento de bandera',
      'Ver el discurso presidencial por television',
      'Participar en eventos culturales y espectaculos de musica tradicional',
      'Izar la bandera uruguaya en hogares y edificios publicos',
      'Disfrutar de un asado familiar para celebrar el dia festivo',
      'Visitar sitios historicos relacionados con la independencia uruguaya',
    ],
  },

  funFacts: {
    en: [
      'Uruguay was created as a buffer state between Argentina and Brazil, a solution brokered by Great Britain in 1828.',
      'The declaration of independence was signed in the city of Florida, which gives its name to the Florida department.',
      'Uruguay\'s official name, "Republica Oriental del Uruguay," means "Eastern Republic of the Uruguay (River)."',
      'August 25 falls during winter in Uruguay, making it one of the colder national holidays in the country.',
      'Uruguay is one of the smallest countries in South America but has one of the highest standards of living on the continent.',
    ],
    fr: [
      "L'Uruguay a ete cree comme Etat tampon entre l'Argentine et le Bresil, une solution negociee par la Grande-Bretagne en 1828.",
      "La declaration d'independance a ete signee dans la ville de Florida, qui donne son nom au departement de Florida.",
      'Le nom officiel de l\'Uruguay, "Republica Oriental del Uruguay", signifie "Republique Orientale de l\'Uruguay (Riviere)".',
      "Le 25 aout tombe pendant l'hiver en Uruguay, ce qui en fait l'un des jours feries nationaux les plus froids du pays.",
      "L'Uruguay est l'un des plus petits pays d'Amerique du Sud mais a l'un des niveaux de vie les plus eleves du continent.",
    ],
    es: [
      'Uruguay fue creado como estado tapón entre Argentina y Brasil, una solucion mediada por Gran Bretana en 1828.',
      'La declaracion de independencia fue firmada en la ciudad de Florida, que da su nombre al departamento de Florida.',
      'El nombre oficial de Uruguay, "Republica Oriental del Uruguay", significa la republica al este del rio Uruguay.',
      'El 25 de agosto cae durante el invierno en Uruguay, haciendolo uno de los dias festivos nacionales mas frios del pais.',
      'Uruguay es uno de los paises mas pequenos de Sudamerica pero tiene uno de los niveles de vida mas altos del continente.',
    ],
  },

  planningChecklist: {
    en: [
      'Prepare Uruguayan flags and patriotic decorations',
      'Plan a family asado or indoor gathering for the winter holiday',
      'Check for local cultural events and ceremonies',
      'Watch the presidential address and commemorative events on TV',
      'Dress warmly — August in Uruguay is winter',
    ],
    fr: [
      'Preparer les drapeaux uruguayens et les decorations patriotiques',
      'Planifier un asado familial ou un rassemblement en interieur pour le jour ferie hivernal',
      'Verifier les evenements culturels et ceremonies locaux',
      'Regarder le discours presidentiel et les evenements commemoratifs a la television',
      "S'habiller chaudement — aout en Uruguay est l'hiver",
    ],
    es: [
      'Preparar banderas uruguayas y decoraciones patrioticas',
      'Planificar un asado familiar o reunion en interiores para el feriado de invierno',
      'Verificar eventos culturales y ceremonias locales',
      'Ver el discurso presidencial y los eventos conmemorativos por television',
      'Vestirse abrigado — agosto en Uruguay es invierno',
    ],
  },

  relatedHolidays: ['uy_33-patriots', 'uy_labour-day'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Uruguay — Countdown & History',
      descriptionTemplate: 'When is Uruguay Independence Day {year}? Live countdown to August 25, history of the 1825 declaration, and celebration guide.',
      keywords: ['Uruguay Independence Day', 'August 25 Uruguay', 'Declaratoria Independencia', 'Uruguayan national holiday', 'independence countdown'],
    },
    fr: {
      titleTemplate: "Jour de l'Independance {year} Uruguay — Compte a rebours et histoire",
      descriptionTemplate: "Quand est le Jour de l'Independance de l'Uruguay {year} ? Compte a rebours, histoire de la declaration de 1825 et guide.",
      keywords: ["Jour de l'Independance Uruguay", '25 aout Uruguay', 'fete nationale Uruguay', 'jours feries Uruguay', "compte a rebours independance"],
    },
    es: {
      titleTemplate: 'Dia de la Independencia {year} Uruguay — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de la Independencia de Uruguay {year}? Cuenta regresiva al 25 de agosto, historia de la declaracion de 1825 y guia.',
      keywords: ['Dia de la Independencia Uruguay', '25 de agosto Uruguay', 'fiesta nacional Uruguay', 'feriados Uruguay', 'cuenta regresiva independencia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Uruguay Independence Day {year}?', fr: "Quand est le Jour de l'Independance de l'Uruguay {year} ?", es: 'Cuando es el Dia de la Independencia de Uruguay {year}?' },
      answer: {
        en: 'Uruguay Independence Day {year} is on {date}. It is always August 25.',
        fr: "Le Jour de l'Independance de l'Uruguay {year} est le {date}. C'est toujours le 25 aout.",
        es: 'El Dia de la Independencia de Uruguay {year} es el {date}. Siempre es el 25 de agosto.',
      },
    },
    {
      question: { en: 'What was the Declaratoria de la Independencia?', fr: "Qu'est-ce que la Declaratoria de la Independencia ?", es: 'Que fue la Declaratoria de la Independencia?' },
      answer: {
        en: 'The Declaratoria de la Independencia was the declaration signed on August 25, 1825, in the city of Florida, in which representatives of the Banda Oriental declared independence from Brazil and initially sought to join Argentina. This ultimately led to the creation of Uruguay as an independent nation in 1828.',
        fr: "La Declaratoria de la Independencia etait la declaration signee le 25 aout 1825 dans la ville de Florida, dans laquelle les representants de la Banda Oriental ont declare l'independance du Bresil et ont initialement cherche a rejoindre l'Argentine. Cela a finalement conduit a la creation de l'Uruguay comme nation independante en 1828.",
        es: 'La Declaratoria de la Independencia fue la declaracion firmada el 25 de agosto de 1825 en la ciudad de Florida, en la cual los representantes de la Banda Oriental declararon la independencia de Brasil e inicialmente buscaron unirse a Argentina. Esto finalmente llevo a la creacion de Uruguay como nacion independiente en 1828.',
      },
    },
    {
      question: { en: 'Is August 25 a public holiday in Uruguay?', fr: "Le 25 aout est-il un jour ferie en Uruguay ?", es: 'Es el 25 de agosto un dia festivo en Uruguay?' },
      answer: {
        en: 'Yes, August 25 is one of the most important public holidays in Uruguay. Government offices, banks, and most businesses are closed.',
        fr: "Oui, le 25 aout est l'un des jours feries les plus importants en Uruguay. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.",
        es: 'Si, el 25 de agosto es uno de los dias festivos mas importantes de Uruguay. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.',
      },
    },
    {
      question: { en: 'Why is it called Dia de la Familia in Uruguay?', fr: "Pourquoi est-il appele Dia de la Familia en Uruguay ?", es: 'Por que se llama Dia de la Familia en Uruguay?' },
      answer: {
        en: 'Uruguay is one of the most secular countries in Latin America, and many holidays have been given secular names. While not officially renamed, some Uruguayans informally refer to national holidays as family days, reflecting the country\'s secular traditions and emphasis on family gatherings.',
        fr: "L'Uruguay est l'un des pays les plus seculiers d'Amerique latine, et de nombreux jours feries ont recu des noms seculiers. Bien que pas officiellement renomme, certains Uruguayens se referent informellement aux jours feries nationaux comme des jours de famille, refletant les traditions seculieres du pays et l'accent mis sur les reunions familiales.",
        es: 'Uruguay es uno de los paises mas seculares de America Latina, y muchos dias festivos han recibido nombres seculares. Aunque no oficialmente renombrado, algunos uruguayos se refieren informalmente a los dias festivos nacionales como dias de familia, reflejando las tradiciones seculares del pais y el enfasis en las reuniones familiares.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\uddfa\ud83c\uddfe',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'uy_christmas',
  countryCode: 'uy',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25, officially known as Dia de la Familia (Family Day) in secular Uruguay, is celebrated with summer asados, family gatherings, and outdoor celebrations. As the most secular country in Latin America, Uruguay uniquely frames Christmas as a celebration of family rather than religion.',
    fr: "Noel, le 25 decembre, officiellement connu comme Dia de la Familia (Jour de la Famille) dans l'Uruguay seculier, est celebre avec des asados estivaux, des reunions familiales et des celebrations en plein air. En tant que pays le plus seculier d'Amerique latine, l'Uruguay presente uniquement Noel comme une celebration de la famille plutot que de la religion.",
    es: 'La Navidad, el 25 de diciembre, oficialmente conocida como Dia de la Familia en el secular Uruguay, se celebra con asados veraniegos, reuniones familiares y celebraciones al aire libre. Como el pais mas secular de America Latina, Uruguay enmarca unicamente la Navidad como una celebracion de la familia en lugar de la religion.',
  },

  history: {
    en: "Uruguay's relationship with Christmas is unique in Latin America. As one of the most secular nations in the Americas, Uruguay officially renamed December 25 as \"Dia de la Familia\" (Family Day) in the early 20th century as part of broader secularization reforms. While many Uruguayans still celebrate it as Christmas, the official designation reflects the country's commitment to separation of church and state.\n\nThe secularization of holidays was part of the progressive reforms under President Jose Batlle y Ordonez in the early 1900s. Holy Week was renamed \"Tourism Week\" (Semana de Turismo), and other religious holidays received secular names. Despite these official changes, Catholic traditions still influence celebrations for many families.\n\nChristmas in Uruguay falls during summer, so celebrations take on a distinctly warm-weather character. The traditional asado (barbecue) replaces the heavy winter meals found in the Northern Hemisphere. Families gather outdoors, share mate, enjoy fresh summer fruits, and celebrate with fireworks at midnight on Christmas Eve.",
    fr: "La relation de l'Uruguay avec Noel est unique en Amerique latine. En tant que l'une des nations les plus seculieres des Ameriques, l'Uruguay a officiellement renomme le 25 decembre en « Dia de la Familia » (Jour de la Famille) au debut du XXe siecle dans le cadre de reformes de secularisation plus larges. Bien que de nombreux Uruguayens le celebrent encore comme Noel, la designation officielle reflete l'engagement du pays envers la separation de l'Eglise et de l'Etat.\n\nLa secularisation des jours feries faisait partie des reformes progressistes sous le president Jose Batlle y Ordonez au debut des annees 1900. La Semaine Sainte a ete renommee « Semaine du Tourisme » (Semana de Turismo), et d'autres jours feries religieux ont recu des noms seculiers. Malgre ces changements officiels, les traditions catholiques influencent encore les celebrations pour de nombreuses familles.\n\nNoel en Uruguay tombe en ete, donc les celebrations prennent un caractere distinctement estival. L'asado traditionnel (barbecue) remplace les repas d'hiver copieux de l'hemisphere nord. Les familles se reunissent en plein air, partagent le mate, profitent des fruits frais d'ete et celebrent avec des feux d'artifice a minuit la veille de Noel.",
    es: "La relacion de Uruguay con la Navidad es unica en America Latina. Como una de las naciones mas seculares de las Americas, Uruguay oficialmente renombro el 25 de diciembre como \"Dia de la Familia\" a principios del siglo XX como parte de reformas de secularizacion mas amplias. Aunque muchos uruguayos todavia lo celebran como Navidad, la designacion oficial refleja el compromiso del pais con la separacion de iglesia y estado.\n\nLa secularizacion de los dias festivos fue parte de las reformas progresistas bajo el presidente Jose Batlle y Ordonez a principios de los 1900. La Semana Santa fue renombrada \"Semana de Turismo\", y otros dias festivos religiosos recibieron nombres seculares. A pesar de estos cambios oficiales, las tradiciones catolicas todavia influyen en las celebraciones de muchas familias.\n\nLa Navidad en Uruguay cae en verano, por lo que las celebraciones toman un caracter distintivamente veraniego. El asado tradicional reemplaza las comidas pesadas de invierno del hemisferio norte. Las familias se reunen al aire libre, comparten mate, disfrutan de frutas frescas de verano y celebran con fuegos artificiales a medianoche en Nochebuena.",
  },

  traditions: {
    en: [
      'Preparing a family asado (barbecue) on Christmas Eve',
      'Gathering outdoors with family to enjoy the summer weather',
      'Setting off fireworks at midnight on Christmas Eve',
      'Sharing mate and summer drinks with family and friends',
      'Exchanging gifts at midnight or on Christmas morning',
      'Heading to the beach on Christmas Day to enjoy the summer sun',
      'Enjoying sidra (cider) and pan dulce (sweet bread) as festive treats',
    ],
    fr: [
      'Preparer un asado (barbecue) familial la veille de Noel',
      'Se rassembler en plein air en famille pour profiter du temps estival',
      "Tirer des feux d'artifice a minuit la veille de Noel",
      'Partager le mate et des boissons d\'ete avec la famille et les amis',
      'Echanger des cadeaux a minuit ou le matin de Noel',
      'Aller a la plage le jour de Noel pour profiter du soleil estival',
      'Deguster de la sidra (cidre) et du pan dulce (pain sucre) comme gourmandises festives',
    ],
    es: [
      'Preparar un asado familiar en Nochebuena',
      'Reunirse al aire libre con la familia para disfrutar del clima veraniego',
      'Lanzar fuegos artificiales a medianoche en Nochebuena',
      'Compartir mate y bebidas veraniegas con familia y amigos',
      'Intercambiar regalos a medianoche o en la manana de Navidad',
      'Ir a la playa el dia de Navidad para disfrutar del sol veraniego',
      'Disfrutar de sidra y pan dulce como delicias festivas',
    ],
  },

  funFacts: {
    en: [
      'Uruguay officially calls December 25 "Dia de la Familia" (Family Day) rather than Christmas, reflecting its secular traditions.',
      'Uruguay is the only country in the Americas to officially secularize Christmas, though most people still celebrate it as such.',
      'Christmas asado in Uruguay often features beef, chorizo, morcilla (blood sausage), and other grilled meats cooked over wood fires.',
      'Uruguay also renamed Holy Week as "Semana de Turismo" (Tourism Week), making it officially about travel rather than religion.',
      'Summer Christmas in Uruguay means celebrations often include pool parties, beach outings, and outdoor barbecues rather than indoor gatherings.',
    ],
    fr: [
      'L\'Uruguay appelle officiellement le 25 decembre "Dia de la Familia" (Jour de la Famille) plutot que Noel, refletant ses traditions seculieres.',
      "L'Uruguay est le seul pays des Ameriques a avoir officiellement secularise Noel, bien que la plupart des gens le celebrent encore comme tel.",
      'L\'asado de Noel en Uruguay comprend souvent du boeuf, du chorizo, de la morcilla (boudin) et d\'autres viandes grillees cuites au feu de bois.',
      'L\'Uruguay a egalement renomme la Semaine Sainte en "Semana de Turismo" (Semaine du Tourisme), la rendant officiellement consacree au voyage plutot qu\'a la religion.',
      'La Navidad en ete en Uruguay signifie que les celebrations incluent souvent des fetes a la piscine, des sorties a la plage et des barbecues en plein air plutot que des rassemblements en interieur.',
    ],
    es: [
      'Uruguay oficialmente llama al 25 de diciembre "Dia de la Familia" en lugar de Navidad, reflejando sus tradiciones seculares.',
      'Uruguay es el unico pais de las Americas en secularizar oficialmente la Navidad, aunque la mayoria de la gente todavia la celebra como tal.',
      'El asado navideno en Uruguay a menudo incluye carne de res, chorizo, morcilla y otras carnes asadas cocinadas sobre lena.',
      'Uruguay tambien renombro la Semana Santa como "Semana de Turismo", haciendola oficialmente sobre viajes en lugar de religion.',
      'La Navidad en verano en Uruguay significa que las celebraciones a menudo incluyen fiestas en la piscina, salidas a la playa y asados al aire libre en lugar de reuniones en interiores.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan your Christmas Eve asado menu and buy quality meats',
      'Stock up on sidra, pan dulce, and summer fruits',
      'Prepare for outdoor celebrations in summer weather',
      'Buy fireworks for the midnight celebration',
      'Plan a beach outing for Christmas Day',
    ],
    fr: [
      'Planifier le menu de votre asado de la veille de Noel et acheter des viandes de qualite',
      'Faire le plein de sidra, pan dulce et fruits d\'ete',
      'Se preparer pour des celebrations en plein air par temps estival',
      "Acheter des feux d'artifice pour la celebration de minuit",
      'Planifier une sortie a la plage pour le jour de Noel',
    ],
    es: [
      'Planificar el menu del asado de Nochebuena y comprar carnes de calidad',
      'Abastecerse de sidra, pan dulce y frutas de verano',
      'Prepararse para celebraciones al aire libre con clima veraniego',
      'Comprar fuegos artificiales para la celebracion de medianoche',
      'Planificar una salida a la playa para el dia de Navidad',
    ],
  },

  relatedHolidays: ['uy_new-years-day', 'uy_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} Uruguay — Countdown & Traditions',
      descriptionTemplate: 'How many days until Christmas {year} in Uruguay? Live countdown, Dia de la Familia, summer asado, and Uruguayan Christmas traditions.',
      keywords: ['Christmas Uruguay', 'Dia de la Familia Uruguay', 'Navidad Uruguay', 'Uruguayan Christmas traditions', 'summer Christmas'],
    },
    fr: {
      titleTemplate: 'Noel {year} Uruguay — Compte a rebours et traditions',
      descriptionTemplate: 'Combien de jours avant Noel {year} en Uruguay ? Compte a rebours, Dia de la Familia, asado estival et traditions de Noel uruguayennes.',
      keywords: ['Noel Uruguay', 'Dia de la Familia', 'Navidad Uruguay', 'traditions de Noel Uruguay', 'Noel en ete'],
    },
    es: {
      titleTemplate: 'Navidad {year} Uruguay — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Cuantos dias faltan para Navidad {year} en Uruguay? Cuenta regresiva, Dia de la Familia, asado veraniego y tradiciones navidenas uruguayas.',
      keywords: ['Navidad Uruguay', 'Dia de la Familia Uruguay', 'tradiciones navidenas Uruguay', 'Navidad en verano', 'asado navideno'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Uruguay?', fr: 'Quand est Noel {year} en Uruguay ?', es: 'Cuando es Navidad {year} en Uruguay?' },
      answer: {
        en: 'Christmas {year} in Uruguay is on {date}. It is always December 25, officially known as Dia de la Familia.',
        fr: 'Noel {year} en Uruguay est le {date}. C\'est toujours le 25 decembre, officiellement connu comme Dia de la Familia.',
        es: 'La Navidad {year} en Uruguay es el {date}. Siempre es el 25 de diciembre, oficialmente conocido como Dia de la Familia.',
      },
    },
    {
      question: { en: 'Why is Christmas called Dia de la Familia in Uruguay?', fr: "Pourquoi Noel est-il appele Dia de la Familia en Uruguay ?", es: 'Por que la Navidad se llama Dia de la Familia en Uruguay?' },
      answer: {
        en: 'Uruguay officially renamed December 25 as "Dia de la Familia" (Family Day) as part of secularization reforms in the early 20th century. Uruguay is the most secular country in Latin America and has a strong tradition of separation of church and state.',
        fr: "L'Uruguay a officiellement renomme le 25 decembre en « Dia de la Familia » (Jour de la Famille) dans le cadre des reformes de secularisation au debut du XXe siecle. L'Uruguay est le pays le plus seculier d'Amerique latine et a une forte tradition de separation de l'Eglise et de l'Etat.",
        es: 'Uruguay oficialmente renombro el 25 de diciembre como "Dia de la Familia" como parte de las reformas de secularizacion a principios del siglo XX. Uruguay es el pais mas secular de America Latina y tiene una fuerte tradicion de separacion de iglesia y estado.',
      },
    },
    {
      question: { en: 'What do Uruguayans eat at Christmas?', fr: 'Que mangent les Uruguayens a Noel ?', es: 'Que comen los uruguayos en Navidad?' },
      answer: {
        en: 'The Christmas Eve dinner typically centers on an asado (barbecue) with beef, chorizo, and morcilla. Other staples include ensalada rusa (Russian salad), pan dulce (sweet bread), turron (nougat), sidra (cider), and fresh summer fruits.',
        fr: "Le diner de la veille de Noel est generalement centre sur un asado (barbecue) avec du boeuf, du chorizo et de la morcilla. D'autres incontournables comprennent l'ensalada rusa (salade russe), le pan dulce (pain sucre), le turron (nougat), la sidra (cidre) et des fruits frais d'ete.",
        es: 'La cena de Nochebuena tipicamente se centra en un asado con carne de res, chorizo y morcilla. Otros clasicos incluyen ensalada rusa, pan dulce, turron, sidra y frutas frescas de verano.',
      },
    },
    {
      question: { en: 'Is Christmas a public holiday in Uruguay?', fr: 'Noel est-il un jour ferie en Uruguay ?', es: 'Es Navidad un dia festivo en Uruguay?' },
      answer: {
        en: 'Yes, December 25 (officially Dia de la Familia) is a public holiday in Uruguay. Government offices, banks, and most businesses are closed.',
        fr: 'Oui, le 25 decembre (officiellement Dia de la Familia) est un jour ferie en Uruguay. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.',
        es: 'Si, el 25 de diciembre (oficialmente Dia de la Familia) es un dia festivo en Uruguay. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const uyHolidays: HolidayData[] = [
  newYearsDay,
  carnival,
  thirtyThreePatriots,
  labourDay,
  independenceDay,
  christmas,
];

export default uyHolidays;
