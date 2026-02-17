/**
 * Trinidad and Tobago holidays data.
 */

import type { HolidayData } from '@/lib/types';
import {
  getCarnivalTuesday,
  getDiwaliDate,
  getEidAlFitrDate,
} from './_shared-dates';

// ---------------------------------------------------------------------------
// Carnival — Carnival Tuesday (47 days before Easter)
// ---------------------------------------------------------------------------

const carnival: HolidayData = {
  id: 'tt_carnival',
  countryCode: 'tt',
  slugs: { en: 'carnival', fr: 'carnaval', es: 'carnaval' },
  names: { en: 'Carnival', fr: 'Carnaval', es: 'Carnaval' },

  dateType: 'calculated',
  calculateDate: getCarnivalTuesday,

  descriptions: {
    en: 'Trinidad and Tobago Carnival is one of the greatest carnivals in the world, celebrated on the Tuesday before Ash Wednesday. It is a spectacular explosion of calypso, soca, steelpan music, elaborate costumes, and masquerade bands that takes over the streets of Port of Spain.',
    fr: 'Le Carnaval de Trinité-et-Tobago est l\'un des plus grands carnavals du monde, célébré le mardi précédant le mercredi des Cendres. C\'est une explosion spectaculaire de calypso, de soca, de steelpan, de costumes élaborés et de groupes de mascarade qui envahissent les rues de Port-d\'Espagne.',
    es: 'El Carnaval de Trinidad y Tobago es uno de los carnavales más grandes del mundo, celebrado el martes anterior al Miércoles de Ceniza. Es una explosión espectacular de calipso, soca, steelpan, disfraces elaborados y bandas de mascarada que toman las calles de Puerto España.',
  },

  history: {
    en: 'Trinidad Carnival has its roots in the 18th century when French colonists held elaborate masquerade balls before Lent. After emancipation in 1838, formerly enslaved Africans transformed the celebration into a vibrant street festival, blending African traditions with European carnival customs. The festival became a powerful expression of freedom and cultural identity.\n\nThe introduction of the steelpan in the 1930s and the rise of calypso and soca music gave Carnival its distinctive sound. Today, Trinidad Carnival is recognized as one of the most influential cultural festivals in the world, inspiring carnivals across the Caribbean, North America, and Europe.\n\nThe competition between masquerade bands, calypsonians, and steelbands remains central to the festival. King and Queen of Carnival competitions, Panorama steelband finals, and the massive road march on Carnival Tuesday draw hundreds of thousands of participants and spectators each year.',
    fr: 'Le Carnaval de Trinité tire ses origines du XVIIIe siècle, lorsque les colons français organisaient des bals masqués élaborés avant le Carême. Après l\'émancipation en 1838, les Africains anciennement réduits en esclavage ont transformé la célébration en un festival de rue vibrant, mêlant les traditions africaines aux coutumes carnavalesques européennes. Le festival est devenu une expression puissante de la liberté et de l\'identité culturelle.\n\nL\'introduction du steelpan dans les années 1930 et l\'essor du calypso et de la soca ont donné au Carnaval son son distinctif. Aujourd\'hui, le Carnaval de Trinité est reconnu comme l\'un des festivals culturels les plus influents au monde, inspirant des carnavals à travers les Caraïbes, l\'Amérique du Nord et l\'Europe.\n\nLa compétition entre les groupes de mascarade, les calypsoniens et les steelbands reste au cœur du festival. Les compétitions de Roi et Reine du Carnaval, les finales du Panorama et le défilé massif du mardi gras attirent des centaines de milliers de participants et de spectateurs chaque année.',
    es: 'El Carnaval de Trinidad tiene sus raíces en el siglo XVIII, cuando los colonos franceses organizaban elaborados bailes de máscaras antes de la Cuaresma. Después de la emancipación en 1838, los africanos anteriormente esclavizados transformaron la celebración en un vibrante festival callejero, fusionando las tradiciones africanas con las costumbres carnavalescas europeas. El festival se convirtió en una poderosa expresión de libertad e identidad cultural.\n\nLa introducción del steelpan en los años 1930 y el auge del calipso y la soca dieron al Carnaval su sonido distintivo. Hoy, el Carnaval de Trinidad es reconocido como uno de los festivales culturales más influyentes del mundo, inspirando carnavales en todo el Caribe, América del Norte y Europa.\n\nLa competencia entre las bandas de mascarada, los calipsoneros y las bandas de steel sigue siendo central en el festival. Las competiciones de Rey y Reina del Carnaval, las finales del Panorama y el masivo desfile del martes de Carnaval atraen a cientos de miles de participantes y espectadores cada año.',
  },

  traditions: {
    en: [
      'Playing mas (masquerade) — parading through the streets in elaborate, colorful costumes with a masquerade band',
      'J\'Ouvert (Jour Ouvert) — the pre-dawn Monday celebration with mud, paint, and oil-covered revellers',
      'Listening to and competing in Calypso and Soca music competitions',
      'Attending the Panorama steelband finals at the Queen\'s Park Savannah',
      'Watching the King and Queen of Carnival costume competitions',
      'Chipping down the road — the slow, rhythmic dancing-walk to soca music during the road march',
      'Enjoying traditional Carnival foods like corn soup, doubles, and bake and shark',
    ],
    fr: [
      'Jouer le mas (mascarade) — défiler dans les rues en costumes élaborés et colorés avec un groupe de mascarade',
      'J\'Ouvert (Jour Ouvert) — la célébration du lundi avant l\'aube avec de la boue, de la peinture et des fêtards couverts d\'huile',
      'Écouter et participer aux compétitions de calypso et de soca',
      'Assister aux finales du Panorama des steelbands au Queen\'s Park Savannah',
      'Regarder les compétitions de costumes du Roi et de la Reine du Carnaval',
      'Danser dans la rue — la marche-danse lente et rythmique au son de la soca pendant le défilé',
      'Déguster les plats traditionnels du Carnaval comme la soupe de maïs, les doubles et le bake and shark',
    ],
    es: [
      'Jugar mas (mascarada) — desfilar por las calles con disfraces elaborados y coloridos con una banda de mascarada',
      'J\'Ouvert (Jour Ouvert) — la celebración del lunes antes del amanecer con barro, pintura y juerguistas cubiertos de aceite',
      'Escuchar y competir en concursos de calipso y soca',
      'Asistir a las finales del Panorama de steelbands en el Queen\'s Park Savannah',
      'Ver las competiciones de disfraces del Rey y la Reina del Carnaval',
      'Bailar por la calle — la marcha-baile lenta y rítmica al son de la soca durante el desfile',
      'Disfrutar de las comidas tradicionales del Carnaval como sopa de maíz, doubles y bake and shark',
    ],
  },

  funFacts: {
    en: [
      'The steelpan (steel drum) was invented in Trinidad and Tobago in the 1930s and is the only acoustic musical instrument invented in the 20th century.',
      'Trinidad Carnival attracts over 40,000 costumed masqueraders and hundreds of thousands of spectators every year.',
      'The word "calypso" is believed to derive from the Carib word "kaiso," meaning a joyous song or shout of approval.',
      'J\'Ouvert begins at 4 AM on Carnival Monday and is considered the heart and soul of the festival.',
      'Trinidad Carnival has inspired carnivals worldwide, including Notting Hill Carnival in London, Toronto Caribana, and Brooklyn\'s West Indian Day Parade.',
    ],
    fr: [
      'Le steelpan (tambour d\'acier) a été inventé à Trinité-et-Tobago dans les années 1930 et est le seul instrument acoustique inventé au XXe siècle.',
      'Le Carnaval de Trinité attire plus de 40 000 mascaradeurs costumés et des centaines de milliers de spectateurs chaque année.',
      'Le mot « calypso » proviendrait du mot caraïbe « kaiso », signifiant un chant joyeux ou un cri d\'approbation.',
      'Le J\'Ouvert commence à 4 heures du matin le lundi de Carnaval et est considéré comme le cœur et l\'âme du festival.',
      'Le Carnaval de Trinité a inspiré des carnavals dans le monde entier, notamment le Carnaval de Notting Hill à Londres, le Caribana de Toronto et le défilé antillais de Brooklyn.',
    ],
    es: [
      'El steelpan (tambor de acero) fue inventado en Trinidad y Tobago en los años 1930 y es el único instrumento acústico inventado en el siglo XX.',
      'El Carnaval de Trinidad atrae a más de 40,000 mascaraderos disfrazados y cientos de miles de espectadores cada año.',
      'Se cree que la palabra "calipso" proviene de la palabra caribe "kaiso", que significa una canción alegre o un grito de aprobación.',
      'El J\'Ouvert comienza a las 4 de la mañana el lunes de Carnaval y se considera el corazón y el alma del festival.',
      'El Carnaval de Trinidad ha inspirado carnavales en todo el mundo, incluyendo el Carnaval de Notting Hill en Londres, el Caribana de Toronto y el Desfile Antillano de Brooklyn.',
    ],
  },

  planningChecklist: {
    en: [
      'Book flights and accommodation months in advance — Trinidad fills up fast during Carnival season',
      'Register with a masquerade band early if you want to play mas on Carnival Tuesday',
      'Attend fete (party) events in the weeks leading up to Carnival for the full experience',
      'Prepare old clothes and shoes for J\'Ouvert — you will get covered in mud, paint, and oil',
      'Stay hydrated and wear sunscreen — Carnival takes place in the tropical heat',
    ],
    fr: [
      'Réserver les vols et l\'hébergement des mois à l\'avance — Trinité se remplit vite pendant la saison du Carnaval',
      'S\'inscrire tôt dans un groupe de mascarade si vous voulez jouer le mas le mardi de Carnaval',
      'Assister aux fêtes dans les semaines précédant le Carnaval pour l\'expérience complète',
      'Préparer de vieux vêtements et chaussures pour le J\'Ouvert — vous serez couvert de boue, de peinture et d\'huile',
      'Rester hydraté et porter de la crème solaire — le Carnaval se déroule sous la chaleur tropicale',
    ],
    es: [
      'Reservar vuelos y alojamiento con meses de anticipación — Trinidad se llena rápido durante la temporada de Carnaval',
      'Inscribirse temprano en una banda de mascarada si quieres jugar mas el martes de Carnaval',
      'Asistir a fiestas en las semanas previas al Carnaval para la experiencia completa',
      'Preparar ropa y zapatos viejos para el J\'Ouvert — te cubrirás de barro, pintura y aceite',
      'Mantenerse hidratado y usar protector solar — el Carnaval se celebra bajo el calor tropical',
    ],
  },

  relatedHolidays: ['tt_christmas', 'tt_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Trinidad Carnival {year} — Countdown & Guide',
      descriptionTemplate: 'When is Trinidad Carnival {year}? Live countdown, mas band info, J\'Ouvert details, and everything you need to know.',
      keywords: ['Trinidad Carnival', 'Carnival Tuesday', 'Trinidad and Tobago Carnival', 'J\'Ouvert', 'soca music'],
    },
    fr: {
      titleTemplate: 'Carnaval de Trinité {year} — Compte à rebours et guide',
      descriptionTemplate: 'Quand est le Carnaval de Trinité {year} ? Compte à rebours en direct, infos sur les groupes de mascarade et tout ce qu\'il faut savoir.',
      keywords: ['Carnaval de Trinité', 'Mardi Gras Trinité', 'Carnaval Trinité-et-Tobago', 'J\'Ouvert', 'musique soca'],
    },
    es: {
      titleTemplate: 'Carnaval de Trinidad {year} — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Carnaval de Trinidad {year}? Cuenta regresiva en vivo, información de bandas de mascarada y todo lo que necesitas saber.',
      keywords: ['Carnaval de Trinidad', 'Martes de Carnaval', 'Carnaval Trinidad y Tobago', 'J\'Ouvert', 'música soca'],
    },
  },

  faq: [
    {
      question: { en: 'When is Trinidad Carnival {year}?', fr: 'Quand est le Carnaval de Trinité {year} ?', es: '¿Cuándo es el Carnaval de Trinidad {year}?' },
      answer: {
        en: 'Trinidad Carnival {year} falls on {date} ({dayOfWeek}). It is always the Tuesday before Ash Wednesday, 47 days before Easter.',
        fr: 'Le Carnaval de Trinité {year} tombe le {date} ({dayOfWeek}). C\'est toujours le mardi précédant le mercredi des Cendres, 47 jours avant Pâques.',
        es: 'El Carnaval de Trinidad {year} cae el {date} ({dayOfWeek}). Es siempre el martes antes del Miércoles de Ceniza, 47 días antes de Pascua.',
      },
    },
    {
      question: { en: 'What is J\'Ouvert?', fr: 'Qu\'est-ce que le J\'Ouvert ?', es: '¿Qué es J\'Ouvert?' },
      answer: {
        en: 'J\'Ouvert (from French "jour ouvert," meaning daybreak) is the opening of Carnival, starting before dawn on Monday. Revellers cover themselves in mud, paint, chocolate, and oil while dancing to soca music through the streets.',
        fr: 'Le J\'Ouvert (du français « jour ouvert ») est l\'ouverture du Carnaval, commençant avant l\'aube le lundi. Les fêtards se couvrent de boue, de peinture, de chocolat et d\'huile en dansant au son de la soca dans les rues.',
        es: 'J\'Ouvert (del francés "jour ouvert", que significa amanecer) es la apertura del Carnaval, que comienza antes del amanecer el lunes. Los juerguistas se cubren de barro, pintura, chocolate y aceite mientras bailan soca por las calles.',
      },
    },
    {
      question: { en: 'What is "playing mas"?', fr: 'Qu\'est-ce que « jouer le mas » ?', es: '¿Qué significa "jugar mas"?' },
      answer: {
        en: 'Playing mas means participating in the masquerade parade as part of a registered band. Masqueraders wear elaborate costumes and dance through the streets of Port of Spain on Carnival Tuesday, following music trucks blasting soca and calypso.',
        fr: 'Jouer le mas signifie participer au défilé de mascarade dans un groupe enregistré. Les mascaradeurs portent des costumes élaborés et dansent dans les rues de Port-d\'Espagne le mardi de Carnaval, suivant les camions de musique diffusant soca et calypso.',
        es: 'Jugar mas significa participar en el desfile de mascarada como parte de una banda registrada. Los mascaraderos usan disfraces elaborados y bailan por las calles de Puerto España el martes de Carnaval, siguiendo camiones de música que emiten soca y calipso.',
      },
    },
    {
      question: { en: 'Is Carnival a public holiday in Trinidad and Tobago?', fr: 'Le Carnaval est-il un jour férié à Trinité-et-Tobago ?', es: '¿El Carnaval es feriado en Trinidad y Tobago?' },
      answer: {
        en: 'Yes, Carnival Monday and Carnival Tuesday are both public holidays in Trinidad and Tobago. Most businesses close and the entire nation joins in the celebration.',
        fr: 'Oui, le lundi et le mardi de Carnaval sont tous deux des jours fériés à Trinité-et-Tobago. La plupart des commerces ferment et toute la nation participe à la célébration.',
        es: 'Sí, el lunes y el martes de Carnaval son ambos feriados en Trinidad y Tobago. La mayoría de los negocios cierran y toda la nación se une a la celebración.',
      },
    },
  ],

  colorTheme: 'multi-color',
  icon: '\uD83C\uDFAD',
};

// ---------------------------------------------------------------------------
// Emancipation Day — August 1
// ---------------------------------------------------------------------------

const emancipationDay: HolidayData = {
  id: 'tt_emancipation-day',
  countryCode: 'tt',
  slugs: { en: 'emancipation-day', fr: 'jour-de-lemancipation', es: 'dia-de-la-emancipacion' },
  names: { en: 'Emancipation Day', fr: "Jour de l'Émancipation", es: 'Día de la Emancipación' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 1,

  descriptions: {
    en: 'Emancipation Day on August 1 commemorates the abolition of slavery in Trinidad and Tobago in 1834. It is a day of cultural pride, African heritage celebrations, and reflection on the struggles and triumphs of the nation\'s ancestors.',
    fr: 'Le Jour de l\'Émancipation, le 1er août, commémore l\'abolition de l\'esclavage à Trinité-et-Tobago en 1834. C\'est une journée de fierté culturelle, de célébrations du patrimoine africain et de réflexion sur les luttes et les triomphes des ancêtres de la nation.',
    es: 'El Día de la Emancipación, el 1 de agosto, conmemora la abolición de la esclavitud en Trinidad y Tobago en 1834. Es un día de orgullo cultural, celebraciones del patrimonio africano y reflexión sobre las luchas y los triunfos de los ancestros de la nación.',
  },

  history: {
    en: 'On August 1, 1834, the Slavery Abolition Act of 1833 came into effect across the British Empire, freeing approximately 20,000 enslaved people in Trinidad and over 11,000 in Tobago. However, full freedom was not immediate — a system of apprenticeship kept formerly enslaved people bound to plantations until 1838.\n\nTrinidad and Tobago was the first country in the world to declare a national public holiday to commemorate the abolition of slavery, establishing Emancipation Day in 1985. The holiday was championed by the late Prime Minister George Chambers and has since inspired other Caribbean nations to follow suit.\n\nEmancipation Day celebrations center around the Lidj Yasu Omowale Emancipation Village in the Queen\'s Park Savannah, where cultural events, drumming, traditional African arts, and historical exhibitions take place. The day serves as a powerful reminder of the resilience and contributions of people of African descent to the nation.',
    fr: 'Le 1er août 1834, la loi d\'abolition de l\'esclavage de 1833 est entrée en vigueur dans tout l\'Empire britannique, libérant environ 20 000 personnes réduites en esclavage à Trinité et plus de 11 000 à Tobago. Cependant, la liberté complète ne fut pas immédiate — un système d\'apprentissage a maintenu les anciens esclaves liés aux plantations jusqu\'en 1838.\n\nTrinité-et-Tobago a été le premier pays au monde à déclarer un jour férié national pour commémorer l\'abolition de l\'esclavage, établissant le Jour de l\'Émancipation en 1985. Ce jour férié a été défendu par le regretté Premier ministre George Chambers et a depuis inspiré d\'autres nations caribéennes à faire de même.\n\nLes célébrations du Jour de l\'Émancipation se concentrent autour du village d\'émancipation Lidj Yasu Omowale dans le Queen\'s Park Savannah, où se déroulent des événements culturels, des percussions, des arts africains traditionnels et des expositions historiques. Cette journée rappelle avec force la résilience et les contributions des personnes d\'ascendance africaine à la nation.',
    es: 'El 1 de agosto de 1834, la Ley de Abolición de la Esclavitud de 1833 entró en vigencia en todo el Imperio Británico, liberando a aproximadamente 20,000 personas esclavizadas en Trinidad y más de 11,000 en Tobago. Sin embargo, la libertad completa no fue inmediata — un sistema de aprendizaje mantuvo a las personas anteriormente esclavizadas vinculadas a las plantaciones hasta 1838.\n\nTrinidad y Tobago fue el primer país del mundo en declarar un día feriado nacional para conmemorar la abolición de la esclavitud, estableciendo el Día de la Emancipación en 1985. El feriado fue impulsado por el fallecido Primer Ministro George Chambers y desde entonces ha inspirado a otras naciones caribeñas a hacer lo mismo.\n\nLas celebraciones del Día de la Emancipación se centran alrededor de la Aldea de Emancipación Lidj Yasu Omowale en el Queen\'s Park Savannah, donde se realizan eventos culturales, percusión, artes africanas tradicionales y exhibiciones históricas. El día sirve como un poderoso recordatorio de la resiliencia y las contribuciones de las personas de ascendencia africana a la nación.',
  },

  traditions: {
    en: [
      'Attending the Emancipation Village at Queen\'s Park Savannah with cultural exhibits and performances',
      'Participating in an all-night vigil and dawn ceremony on August 1',
      'Wearing African-inspired clothing and headwraps',
      'Traditional African drumming and dancing performances',
      'Lighting a symbolic freedom flame at midnight',
      'Community gatherings featuring traditional storytelling and oral history',
      'Enjoying traditional African-inspired cuisine',
    ],
    fr: [
      'Visiter le village de l\'Émancipation au Queen\'s Park Savannah avec des expositions et spectacles culturels',
      'Participer à une veillée nocturne et à une cérémonie de l\'aube le 1er août',
      'Porter des vêtements et des coiffes d\'inspiration africaine',
      'Spectacles de percussions et de danses traditionnelles africaines',
      'Allumer une flamme symbolique de la liberté à minuit',
      'Rassemblements communautaires avec des récits traditionnels et de l\'histoire orale',
      'Déguster une cuisine traditionnelle d\'inspiration africaine',
    ],
    es: [
      'Visitar la Aldea de Emancipación en el Queen\'s Park Savannah con exhibiciones culturales y actuaciones',
      'Participar en una vigilia nocturna y ceremonia del amanecer el 1 de agosto',
      'Usar ropa y turbantes de inspiración africana',
      'Actuaciones de percusión y danzas tradicionales africanas',
      'Encender una llama simbólica de libertad a medianoche',
      'Reuniones comunitarias con narración tradicional e historia oral',
      'Disfrutar de cocina tradicional de inspiración africana',
    ],
  },

  funFacts: {
    en: [
      'Trinidad and Tobago was the first country in the world to declare a national holiday for the abolition of slavery in 1985.',
      'The Slavery Abolition Act freed over 800,000 enslaved people across the British Empire on August 1, 1834.',
      'The Emancipation Village is modeled after a traditional African compound, celebrating the cultural heritage of the African diaspora.',
      'Shouter Baptist Liberation Day (March 30) is another uniquely Trinidadian holiday recognizing the African spiritual heritage.',
      'The famous "Canboulay" riots of 1881 in Trinidad were a direct result of post-emancipation tensions over Carnival celebrations.',
    ],
    fr: [
      'Trinité-et-Tobago a été le premier pays au monde à déclarer un jour férié national pour l\'abolition de l\'esclavage en 1985.',
      'La loi d\'abolition de l\'esclavage a libéré plus de 800 000 personnes réduites en esclavage dans tout l\'Empire britannique le 1er août 1834.',
      'Le village de l\'Émancipation est inspiré d\'un compound africain traditionnel, célébrant le patrimoine culturel de la diaspora africaine.',
      'Le Jour de libération des Baptistes Shouter (30 mars) est un autre jour férié uniquement trinidadien reconnaissant l\'héritage spirituel africain.',
      'Les célèbres émeutes du « Canboulay » de 1881 à Trinité résultaient directement des tensions post-émancipation autour des célébrations du Carnaval.',
    ],
    es: [
      'Trinidad y Tobago fue el primer país del mundo en declarar un feriado nacional por la abolición de la esclavitud en 1985.',
      'La Ley de Abolición de la Esclavitud liberó a más de 800,000 personas esclavizadas en todo el Imperio Británico el 1 de agosto de 1834.',
      'La Aldea de Emancipación está inspirada en un recinto africano tradicional, celebrando el patrimonio cultural de la diáspora africana.',
      'El Día de Liberación de los Bautistas Shouter (30 de marzo) es otro feriado exclusivamente trinitense que reconoce la herencia espiritual africana.',
      'Los famosos disturbios del "Canboulay" de 1881 en Trinidad fueron resultado directo de las tensiones post-emancipación sobre las celebraciones del Carnaval.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit the Emancipation Village at Queen\'s Park Savannah for cultural events and exhibits',
      'Attend the midnight vigil and dawn ceremony for the full experience',
      'Wear African-inspired attire to celebrate the day',
      'Learn about the history of slavery and emancipation in the Caribbean',
      'Support local artisans and vendors selling African-inspired crafts and food',
    ],
    fr: [
      'Visiter le village de l\'Émancipation au Queen\'s Park Savannah pour les événements culturels et expositions',
      'Assister à la veillée de minuit et à la cérémonie de l\'aube pour l\'expérience complète',
      'Porter une tenue d\'inspiration africaine pour célébrer la journée',
      'Apprendre l\'histoire de l\'esclavage et de l\'émancipation dans les Caraïbes',
      'Soutenir les artisans et vendeurs locaux proposant des créations et de la nourriture d\'inspiration africaine',
    ],
    es: [
      'Visitar la Aldea de Emancipación en el Queen\'s Park Savannah para eventos culturales y exhibiciones',
      'Asistir a la vigilia de medianoche y la ceremonia del amanecer para la experiencia completa',
      'Usar vestimenta de inspiración africana para celebrar el día',
      'Aprender sobre la historia de la esclavitud y la emancipación en el Caribe',
      'Apoyar a los artesanos y vendedores locales que ofrecen artesanías y comida de inspiración africana',
    ],
  },

  relatedHolidays: ['tt_independence-day', 'tt_carnival'],

  seo: {
    en: {
      titleTemplate: 'Emancipation Day {year} Trinidad — Countdown & History',
      descriptionTemplate: 'When is Emancipation Day {year} in Trinidad and Tobago? Live countdown to August 1, history, cultural events, and celebrations.',
      keywords: ['Emancipation Day Trinidad', 'August 1 Trinidad', 'abolition of slavery', 'Trinidad holidays', 'African heritage Trinidad'],
    },
    fr: {
      titleTemplate: "Jour de l'Émancipation {year} Trinité — Compte à rebours et histoire",
      descriptionTemplate: "Quand est le Jour de l'Émancipation {year} à Trinité-et-Tobago ? Compte à rebours, histoire et célébrations culturelles.",
      keywords: ["Jour de l'Émancipation Trinité", '1er août Trinité', "abolition de l'esclavage", 'jours fériés Trinité', 'patrimoine africain Trinité'],
    },
    es: {
      titleTemplate: 'Día de la Emancipación {year} Trinidad — Cuenta regresiva e historia',
      descriptionTemplate: '¿Cuándo es el Día de la Emancipación {year} en Trinidad y Tobago? Cuenta regresiva, historia y celebraciones culturales.',
      keywords: ['Día de la Emancipación Trinidad', '1 de agosto Trinidad', 'abolición de la esclavitud', 'feriados Trinidad', 'patrimonio africano Trinidad'],
    },
  },

  faq: [
    {
      question: { en: 'When is Emancipation Day {year}?', fr: "Quand est le Jour de l'Émancipation {year} ?", es: '¿Cuándo es el Día de la Emancipación {year}?' },
      answer: {
        en: 'Emancipation Day {year} in Trinidad and Tobago is on {date} ({dayOfWeek}). It is always observed on August 1.',
        fr: "Le Jour de l'Émancipation {year} à Trinité-et-Tobago est le {date} ({dayOfWeek}). Il est toujours observé le 1er août.",
        es: 'El Día de la Emancipación {year} en Trinidad y Tobago es el {date} ({dayOfWeek}). Siempre se observa el 1 de agosto.',
      },
    },
    {
      question: { en: 'Why is Emancipation Day important in Trinidad and Tobago?', fr: "Pourquoi le Jour de l'Émancipation est-il important à Trinité-et-Tobago ?", es: '¿Por qué es importante el Día de la Emancipación en Trinidad y Tobago?' },
      answer: {
        en: 'Emancipation Day marks the end of slavery in 1834 under the British Empire. Trinidad and Tobago was the first country in the world to declare it a national holiday, making it a significant symbol of freedom and African cultural pride.',
        fr: "Le Jour de l'Émancipation marque la fin de l'esclavage en 1834 sous l'Empire britannique. Trinité-et-Tobago a été le premier pays au monde à en faire un jour férié national, en faisant un symbole important de liberté et de fierté culturelle africaine.",
        es: 'El Día de la Emancipación marca el fin de la esclavitud en 1834 bajo el Imperio Británico. Trinidad y Tobago fue el primer país del mundo en declararlo feriado nacional, convirtiéndolo en un símbolo importante de libertad y orgullo cultural africano.',
      },
    },
    {
      question: { en: 'What happens at the Emancipation Village?', fr: "Que se passe-t-il au village de l'Émancipation ?", es: '¿Qué sucede en la Aldea de Emancipación?' },
      answer: {
        en: 'The Emancipation Village at Queen\'s Park Savannah hosts cultural exhibitions, traditional African drumming and dancing, storytelling, craft stalls, African cuisine, and a midnight vigil ceremony welcoming the dawn of Emancipation Day.',
        fr: "Le village de l'Émancipation au Queen's Park Savannah accueille des expositions culturelles, des percussions et danses africaines traditionnelles, des récits, des stands d'artisanat, de la cuisine africaine et une cérémonie de veillée de minuit accueillant l'aube du Jour de l'Émancipation.",
        es: 'La Aldea de Emancipación en el Queen\'s Park Savannah alberga exhibiciones culturales, percusión y danzas africanas tradicionales, narración de cuentos, puestos de artesanías, cocina africana y una ceremonia de vigilia a medianoche que da la bienvenida al amanecer del Día de la Emancipación.',
      },
    },
    {
      question: { en: 'Is Emancipation Day a public holiday?', fr: "Le Jour de l'Émancipation est-il un jour férié ?", es: '¿El Día de la Emancipación es feriado?' },
      answer: {
        en: 'Yes, Emancipation Day is a public holiday in Trinidad and Tobago. Banks, government offices, and most businesses are closed on August 1.',
        fr: "Oui, le Jour de l'Émancipation est un jour férié à Trinité-et-Tobago. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermés le 1er août.",
        es: 'Sí, el Día de la Emancipación es feriado en Trinidad y Tobago. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados el 1 de agosto.',
      },
    },
  ],

  colorTheme: 'red-gold-green',
  icon: '\u270A',
};

// ---------------------------------------------------------------------------
// Independence Day — August 31
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'tt_independence-day',
  countryCode: 'tt',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Indépendance", es: 'Día de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 8,
  fixedDay: 31,

  descriptions: {
    en: 'Independence Day on August 31 celebrates Trinidad and Tobago\'s independence from the United Kingdom in 1962. It is a day of national pride with military parades, cultural performances, flag-raising ceremonies, and fireworks.',
    fr: "Le Jour de l'Indépendance, le 31 août, célèbre l'indépendance de Trinité-et-Tobago du Royaume-Uni en 1962. C'est une journée de fierté nationale avec des défilés militaires, des spectacles culturels, des cérémonies de lever du drapeau et des feux d'artifice.",
    es: 'El Día de la Independencia, el 31 de agosto, celebra la independencia de Trinidad y Tobago del Reino Unido en 1962. Es un día de orgullo nacional con desfiles militares, actuaciones culturales, ceremonias de izado de bandera y fuegos artificiales.',
  },

  history: {
    en: 'Trinidad and Tobago gained independence from the United Kingdom on August 31, 1962, under the leadership of Dr. Eric Williams, who became the nation\'s first Prime Minister. Williams, a renowned historian and scholar, led the People\'s National Movement (PNM) to victory and guided the country through the transition from colonial rule to self-governance.\n\nThe islands of Trinidad and Tobago had been under British colonial rule since 1797 (Trinidad) and 1763 (Tobago). The push for independence grew throughout the 1950s as part of the broader Caribbean decolonization movement. Trinidad and Tobago initially joined the West Indies Federation in 1958, but when Jamaica withdrew in 1962, the federation collapsed and Trinidad and Tobago pursued independence on its own.\n\nOn September 24, 1976, Trinidad and Tobago became a republic, replacing the British monarch with a President as head of state while remaining a member of the Commonwealth. Republic Day is also celebrated as a national holiday.',
    fr: "Trinité-et-Tobago a obtenu son indépendance du Royaume-Uni le 31 août 1962, sous la direction du Dr Eric Williams, qui est devenu le premier Premier ministre de la nation. Williams, historien et érudit renommé, a mené le Mouvement National du Peuple (PNM) à la victoire et a guidé le pays dans la transition du régime colonial à l'autonomie.\n\nLes îles de Trinité-et-Tobago étaient sous domination coloniale britannique depuis 1797 (Trinité) et 1763 (Tobago). La quête d'indépendance s'est intensifiée tout au long des années 1950 dans le cadre du mouvement plus large de décolonisation caribéenne. Trinité-et-Tobago a initialement rejoint la Fédération des Indes occidentales en 1958, mais lorsque la Jamaïque s'est retirée en 1962, la fédération s'est effondrée et Trinité-et-Tobago a poursuivi l'indépendance seul.\n\nLe 24 septembre 1976, Trinité-et-Tobago est devenu une république, remplaçant le monarque britannique par un Président comme chef d'État tout en restant membre du Commonwealth. Le Jour de la République est également célébré comme un jour férié national.",
    es: 'Trinidad y Tobago obtuvo su independencia del Reino Unido el 31 de agosto de 1962, bajo el liderazgo del Dr. Eric Williams, quien se convirtió en el primer Primer Ministro de la nación. Williams, un reconocido historiador y erudito, llevó al Movimiento Nacional del Pueblo (PNM) a la victoria y guió al país en la transición del gobierno colonial a la autogobernación.\n\nLas islas de Trinidad y Tobago habían estado bajo dominio colonial británico desde 1797 (Trinidad) y 1763 (Tobago). El impulso por la independencia creció a lo largo de los años 1950 como parte del movimiento más amplio de descolonización caribeña. Trinidad y Tobago inicialmente se unió a la Federación de las Indias Occidentales en 1958, pero cuando Jamaica se retiró en 1962, la federación colapsó y Trinidad y Tobago persiguió la independencia por su cuenta.\n\nEl 24 de septiembre de 1976, Trinidad y Tobago se convirtió en república, reemplazando al monarca británico por un Presidente como jefe de estado mientras permanecía como miembro de la Mancomunidad. El Día de la República también se celebra como un feriado nacional.',
  },

  traditions: {
    en: [
      'Attending the official Independence Day ceremony and military parade at the Queen\'s Park Savannah',
      'Watching the national flag-raising ceremony at midnight on August 31',
      'Enjoying cultural performances featuring steelpan, calypso, and folk music',
      'Watching fireworks displays across Port of Spain',
      'Wearing the national colors — red, white, and black',
      'Attending community events and neighborhood celebrations',
    ],
    fr: [
      "Assister à la cérémonie officielle du Jour de l'Indépendance et au défilé militaire au Queen's Park Savannah",
      'Regarder la cérémonie de lever du drapeau national à minuit le 31 août',
      'Profiter de spectacles culturels mettant en vedette le steelpan, le calypso et la musique folklorique',
      "Regarder les feux d'artifice à travers Port-d'Espagne",
      'Porter les couleurs nationales — rouge, blanc et noir',
      'Participer à des événements communautaires et des célébrations de quartier',
    ],
    es: [
      'Asistir a la ceremonia oficial del Día de la Independencia y al desfile militar en el Queen\'s Park Savannah',
      'Ver la ceremonia de izado de bandera nacional a medianoche del 31 de agosto',
      'Disfrutar de actuaciones culturales con steelpan, calipso y música folclórica',
      'Ver espectáculos de fuegos artificiales en Puerto España',
      'Usar los colores nacionales — rojo, blanco y negro',
      'Asistir a eventos comunitarios y celebraciones vecinales',
    ],
  },

  funFacts: {
    en: [
      'Dr. Eric Williams, the father of independence, famously said "Massa Day Done" to signal the end of colonial rule.',
      'Trinidad and Tobago\'s national anthem "Forged from the Love of Liberty" was composed by Patrick Castagne in 1962.',
      'The national flag — a red background with a black diagonal stripe edged in white — was designed by Carlisle Chang.',
      'Trinidad and Tobago became a republic in 1976 but still celebrates August 31 as Independence Day.',
      'The national motto "Together We Aspire, Together We Achieve" reflects the country\'s multicultural unity.',
    ],
    fr: [
      'Le Dr Eric Williams, père de l\'indépendance, a prononcé la célèbre phrase « Massa Day Done » pour signaler la fin du régime colonial.',
      'L\'hymne national de Trinité-et-Tobago « Forged from the Love of Liberty » a été composé par Patrick Castagne en 1962.',
      'Le drapeau national — un fond rouge avec une bande diagonale noire bordée de blanc — a été conçu par Carlisle Chang.',
      'Trinité-et-Tobago est devenu une république en 1976 mais célèbre toujours le 31 août comme Jour de l\'Indépendance.',
      'La devise nationale « Together We Aspire, Together We Achieve » reflète l\'unité multiculturelle du pays.',
    ],
    es: [
      'El Dr. Eric Williams, padre de la independencia, dijo la famosa frase "Massa Day Done" para señalar el fin del dominio colonial.',
      'El himno nacional de Trinidad y Tobago "Forged from the Love of Liberty" fue compuesto por Patrick Castagne en 1962.',
      'La bandera nacional — un fondo rojo con una franja diagonal negra bordeada de blanco — fue diseñada por Carlisle Chang.',
      'Trinidad y Tobago se convirtió en república en 1976 pero aún celebra el 31 de agosto como Día de la Independencia.',
      'El lema nacional "Together We Aspire, Together We Achieve" refleja la unidad multicultural del país.',
    ],
  },

  planningChecklist: {
    en: [
      'Attend the midnight flag-raising ceremony to kick off Independence Day',
      'Watch the military parade and cultural performances at Queen\'s Park Savannah',
      'Dress in red, white, and black — the national colors',
      'Enjoy local cuisine at community celebrations and food vendors',
      'Watch the Independence Day fireworks in Port of Spain',
    ],
    fr: [
      "Assister à la cérémonie de lever du drapeau à minuit pour lancer le Jour de l'Indépendance",
      "Regarder le défilé militaire et les spectacles culturels au Queen's Park Savannah",
      'S\'habiller en rouge, blanc et noir — les couleurs nationales',
      'Déguster la cuisine locale lors des célébrations communautaires',
      "Regarder les feux d'artifice du Jour de l'Indépendance à Port-d'Espagne",
    ],
    es: [
      'Asistir a la ceremonia de izado de bandera a medianoche para iniciar el Día de la Independencia',
      'Ver el desfile militar y las actuaciones culturales en el Queen\'s Park Savannah',
      'Vestirse de rojo, blanco y negro — los colores nacionales',
      'Disfrutar de la cocina local en las celebraciones comunitarias',
      'Ver los fuegos artificiales del Día de la Independencia en Puerto España',
    ],
  },

  relatedHolidays: ['tt_emancipation-day', 'tt_carnival'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Trinidad & Tobago — Countdown & Guide',
      descriptionTemplate: 'When is Independence Day {year} in Trinidad and Tobago? Live countdown to August 31, history, parades, and celebrations.',
      keywords: ['Independence Day Trinidad', 'Trinidad and Tobago Independence', 'August 31 Trinidad', 'Trinidad national day', 'Trinidad history'],
    },
    fr: {
      titleTemplate: "Jour de l'Indépendance {year} Trinité-et-Tobago — Compte à rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'Indépendance {year} à Trinité-et-Tobago ? Compte à rebours, histoire, défilés et célébrations.",
      keywords: ["Jour de l'Indépendance Trinité", 'Indépendance Trinité-et-Tobago', '31 août Trinité', 'fête nationale Trinité', 'histoire Trinité'],
    },
    es: {
      titleTemplate: 'Día de la Independencia {year} Trinidad y Tobago — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día de la Independencia {year} en Trinidad y Tobago? Cuenta regresiva, historia, desfiles y celebraciones.',
      keywords: ['Día de la Independencia Trinidad', 'Independencia Trinidad y Tobago', '31 de agosto Trinidad', 'día nacional Trinidad', 'historia Trinidad'],
    },
  },

  faq: [
    {
      question: { en: 'When is Independence Day {year} in Trinidad and Tobago?', fr: "Quand est le Jour de l'Indépendance {year} à Trinité-et-Tobago ?", es: '¿Cuándo es el Día de la Independencia {year} en Trinidad y Tobago?' },
      answer: {
        en: 'Independence Day {year} in Trinidad and Tobago is on {date} ({dayOfWeek}). It is always observed on August 31.',
        fr: "Le Jour de l'Indépendance {year} à Trinité-et-Tobago est le {date} ({dayOfWeek}). Il est toujours observé le 31 août.",
        es: 'El Día de la Independencia {year} en Trinidad y Tobago es el {date} ({dayOfWeek}). Siempre se observa el 31 de agosto.',
      },
    },
    {
      question: { en: 'When did Trinidad and Tobago become independent?', fr: 'Quand Trinité-et-Tobago est-il devenu indépendant ?', es: '¿Cuándo se independizó Trinidad y Tobago?' },
      answer: {
        en: 'Trinidad and Tobago gained independence from the United Kingdom on August 31, 1962, under Prime Minister Dr. Eric Williams. The country later became a republic on September 24, 1976.',
        fr: "Trinité-et-Tobago a obtenu son indépendance du Royaume-Uni le 31 août 1962, sous le Premier ministre Dr Eric Williams. Le pays est ensuite devenu une république le 24 septembre 1976.",
        es: 'Trinidad y Tobago obtuvo su independencia del Reino Unido el 31 de agosto de 1962, bajo el Primer Ministro Dr. Eric Williams. El país luego se convirtió en república el 24 de septiembre de 1976.',
      },
    },
    {
      question: { en: 'What are the national symbols of Trinidad and Tobago?', fr: 'Quels sont les symboles nationaux de Trinité-et-Tobago ?', es: '¿Cuáles son los símbolos nacionales de Trinidad y Tobago?' },
      answer: {
        en: 'The national bird is the Scarlet Ibis (Trinidad) and the Cocrico (Tobago). The national flower is the Chaconia (Wild Poinsettia). The flag is red with a black diagonal stripe edged in white, and the motto is "Together We Aspire, Together We Achieve."',
        fr: "L'oiseau national est l'Ibis écarlate (Trinité) et le Cocrico (Tobago). La fleur nationale est le Chaconia (Poinsettia sauvage). Le drapeau est rouge avec une bande diagonale noire bordée de blanc, et la devise est « Together We Aspire, Together We Achieve ».",
        es: 'El ave nacional es el Ibis Escarlata (Trinidad) y el Cocrico (Tobago). La flor nacional es la Chaconia (Poinsettia silvestre). La bandera es roja con una franja diagonal negra bordeada de blanco, y el lema es "Together We Aspire, Together We Achieve".',
      },
    },
    {
      question: { en: 'Is Independence Day a public holiday in Trinidad and Tobago?', fr: "Le Jour de l'Indépendance est-il un jour férié à Trinité-et-Tobago ?", es: '¿El Día de la Independencia es feriado en Trinidad y Tobago?' },
      answer: {
        en: 'Yes, Independence Day is one of the most important public holidays in Trinidad and Tobago. Government offices, banks, and most businesses are closed.',
        fr: "Oui, le Jour de l'Indépendance est l'un des jours fériés les plus importants de Trinité-et-Tobago. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermés.",
        es: 'Sí, el Día de la Independencia es uno de los feriados más importantes de Trinidad y Tobago. Las oficinas gubernamentales, bancos y la mayoría de los negocios están cerrados.',
      },
    },
  ],

  colorTheme: 'red-white-black',
  icon: '\uD83C\uDDF9\uD83C\uDDF9',
};

// ---------------------------------------------------------------------------
// Diwali — calculated (Hindu lunisolar calendar)
// ---------------------------------------------------------------------------

const diwali: HolidayData = {
  id: 'tt_diwali',
  countryCode: 'tt',
  slugs: { en: 'diwali', fr: 'diwali', es: 'diwali' },
  names: { en: 'Diwali', fr: 'Diwali', es: 'Diwali' },

  dateType: 'calculated',
  calculateDate: getDiwaliDate,

  descriptions: {
    en: 'Diwali, the Festival of Lights, is a national public holiday in Trinidad and Tobago, celebrating the triumph of light over darkness. The large Indo-Trinidadian community marks the occasion with deyas (clay lamps), sweets, prayers, and vibrant community celebrations.',
    fr: 'Diwali, la Fête des Lumières, est un jour férié national à Trinité-et-Tobago, célébrant le triomphe de la lumière sur les ténèbres. La grande communauté indo-trinidadienne marque l\'occasion avec des deyas (lampes en argile), des sucreries, des prières et de vibrantes célébrations communautaires.',
    es: 'Diwali, el Festival de las Luces, es un feriado nacional en Trinidad y Tobago, que celebra el triunfo de la luz sobre la oscuridad. La gran comunidad indo-trinitense marca la ocasión con deyas (lámparas de arcilla), dulces, oraciones y vibrantes celebraciones comunitarias.',
  },

  history: {
    en: 'Diwali has been celebrated in Trinidad and Tobago since the arrival of indentured laborers from India beginning in 1845. These workers, who came to replace enslaved labor on sugar plantations, brought with them their Hindu traditions, including the celebration of Diwali.\n\nTrinidad and Tobago became the first country outside of Asia to declare Diwali a national public holiday in 1966, a testament to the country\'s commitment to its multicultural heritage. The holiday recognizes the Hindu story of Lord Rama\'s return to Ayodhya after defeating the demon king Ravana, symbolizing the victory of good over evil.\n\nThe Diwali Nagar (City of Lights), organized by the National Council of Indian Culture, is the centerpiece of celebrations. This elaborate site features cultural performances, exhibitions, food stalls, and thousands of lit deyas, attracting tens of thousands of visitors each year.',
    fr: 'Diwali est célébré à Trinité-et-Tobago depuis l\'arrivée des travailleurs sous contrat d\'Inde à partir de 1845. Ces travailleurs, venus remplacer le travail esclave dans les plantations de canne à sucre, ont apporté avec eux leurs traditions hindoues, notamment la célébration de Diwali.\n\nTrinité-et-Tobago est devenu le premier pays en dehors de l\'Asie à déclarer Diwali jour férié national en 1966, un témoignage de l\'engagement du pays envers son patrimoine multiculturel. Le jour férié reconnaît l\'histoire hindoue du retour du Seigneur Rama à Ayodhya après avoir vaincu le roi démon Ravana, symbolisant la victoire du bien sur le mal.\n\nLe Diwali Nagar (Cité des Lumières), organisé par le Conseil National de la Culture Indienne, est le point central des célébrations. Ce site élaboré comprend des spectacles culturels, des expositions, des stands de nourriture et des milliers de deyas allumées, attirant des dizaines de milliers de visiteurs chaque année.',
    es: 'Diwali se ha celebrado en Trinidad y Tobago desde la llegada de los trabajadores contratados de la India a partir de 1845. Estos trabajadores, que vinieron a reemplazar el trabajo esclavo en las plantaciones de azúcar, trajeron consigo sus tradiciones hindúes, incluyendo la celebración de Diwali.\n\nTrinidad y Tobago se convirtió en el primer país fuera de Asia en declarar Diwali como feriado nacional en 1966, un testimonio del compromiso del país con su patrimonio multicultural. El feriado reconoce la historia hindú del regreso del Señor Rama a Ayodhya después de derrotar al rey demonio Ravana, simbolizando la victoria del bien sobre el mal.\n\nEl Diwali Nagar (Ciudad de las Luces), organizado por el Consejo Nacional de Cultura India, es el centro de las celebraciones. Este elaborado sitio presenta actuaciones culturales, exhibiciones, puestos de comida y miles de deyas encendidas, atrayendo a decenas de miles de visitantes cada año.',
  },

  traditions: {
    en: [
      'Lighting deyas (small clay oil lamps) to symbolize the triumph of light over darkness',
      'Visiting the Diwali Nagar (City of Lights) for cultural performances and exhibitions',
      'Preparing and sharing traditional Indian sweets like barfi, gulab jamun, and kurma',
      'Cleaning and decorating homes with rangoli patterns and lights',
      'Performing Lakshmi Puja — prayers to the goddess of wealth and prosperity',
      'Setting off fireworks and sparklers in the evening',
      'Wearing new clothes and visiting friends and family',
    ],
    fr: [
      'Allumer des deyas (petites lampes à huile en argile) pour symboliser le triomphe de la lumière sur les ténèbres',
      'Visiter le Diwali Nagar (Cité des Lumières) pour des spectacles culturels et des expositions',
      'Préparer et partager des sucreries indiennes traditionnelles comme le barfi, le gulab jamun et le kurma',
      'Nettoyer et décorer les maisons avec des motifs rangoli et des lumières',
      'Effectuer la Lakshmi Puja — prières à la déesse de la richesse et de la prospérité',
      'Tirer des feux d\'artifice et des cierges magiques le soir',
      'Porter de nouveaux vêtements et rendre visite aux amis et à la famille',
    ],
    es: [
      'Encender deyas (pequeñas lámparas de aceite de arcilla) para simbolizar el triunfo de la luz sobre la oscuridad',
      'Visitar el Diwali Nagar (Ciudad de las Luces) para actuaciones culturales y exhibiciones',
      'Preparar y compartir dulces indios tradicionales como barfi, gulab jamun y kurma',
      'Limpiar y decorar los hogares con patrones rangoli y luces',
      'Realizar Lakshmi Puja — oraciones a la diosa de la riqueza y la prosperidad',
      'Lanzar fuegos artificiales y bengalas por la noche',
      'Usar ropa nueva y visitar a amigos y familiares',
    ],
  },

  funFacts: {
    en: [
      'Trinidad and Tobago was the first country outside of Asia to declare Diwali a national public holiday in 1966.',
      'The Diwali Nagar site features over 10,000 lit deyas and attracts more than 100,000 visitors.',
      'About 22% of Trinidad and Tobago\'s population is of Indian descent, one of the largest Indo-Caribbean communities in the world.',
      'Trinidad\'s Diwali celebrations blend Hindu traditions with local Caribbean culture, making them unique in the world.',
      'The clay deyas used in Trinidad are handmade by local potters, continuing a centuries-old tradition.',
    ],
    fr: [
      'Trinité-et-Tobago a été le premier pays en dehors de l\'Asie à déclarer Diwali jour férié national en 1966.',
      'Le site du Diwali Nagar présente plus de 10 000 deyas allumées et attire plus de 100 000 visiteurs.',
      'Environ 22 % de la population de Trinité-et-Tobago est d\'ascendance indienne, l\'une des plus grandes communautés indo-caribéennes au monde.',
      'Les célébrations de Diwali à Trinité mélangent les traditions hindoues avec la culture caribéenne locale, les rendant uniques au monde.',
      'Les deyas en argile utilisées à Trinité sont fabriquées à la main par des potiers locaux, perpétuant une tradition séculaire.',
    ],
    es: [
      'Trinidad y Tobago fue el primer país fuera de Asia en declarar Diwali como feriado nacional en 1966.',
      'El sitio del Diwali Nagar presenta más de 10,000 deyas encendidas y atrae a más de 100,000 visitantes.',
      'Aproximadamente el 22% de la población de Trinidad y Tobago es de ascendencia india, una de las comunidades indo-caribeñas más grandes del mundo.',
      'Las celebraciones de Diwali en Trinidad mezclan tradiciones hindúes con la cultura caribeña local, haciéndolas únicas en el mundo.',
      'Las deyas de arcilla utilizadas en Trinidad son hechas a mano por alfareros locales, continuando una tradición centenaria.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit the Diwali Nagar site for cultural performances and the spectacular display of lit deyas',
      'Buy or make traditional Indian sweets to share with family and friends',
      'Purchase clay deyas from local potters to light at home',
      'Attend a Lakshmi Puja ceremony at a local temple',
      'Prepare a traditional Indian meal to share with loved ones',
    ],
    fr: [
      'Visiter le site du Diwali Nagar pour les spectacles culturels et le spectacle des deyas allumées',
      'Acheter ou préparer des sucreries indiennes traditionnelles à partager avec la famille et les amis',
      'Acheter des deyas en argile chez des potiers locaux pour les allumer à la maison',
      'Assister à une cérémonie de Lakshmi Puja dans un temple local',
      'Préparer un repas indien traditionnel à partager avec les proches',
    ],
    es: [
      'Visitar el sitio del Diwali Nagar para actuaciones culturales y el espectacular despliegue de deyas encendidas',
      'Comprar o hacer dulces indios tradicionales para compartir con familia y amigos',
      'Comprar deyas de arcilla de alfareros locales para encender en casa',
      'Asistir a una ceremonia de Lakshmi Puja en un templo local',
      'Preparar una comida india tradicional para compartir con los seres queridos',
    ],
  },

  relatedHolidays: ['tt_eid-al-fitr', 'tt_christmas'],

  seo: {
    en: {
      titleTemplate: 'Diwali {year} Trinidad & Tobago — Countdown & Guide',
      descriptionTemplate: 'When is Diwali {year} in Trinidad and Tobago? Live countdown, Diwali Nagar events, traditions, and celebration guide.',
      keywords: ['Diwali Trinidad', 'Festival of Lights Trinidad', 'Diwali Nagar', 'Trinidad Diwali date', 'Indo-Trinidadian celebrations'],
    },
    fr: {
      titleTemplate: 'Diwali {year} Trinité-et-Tobago — Compte à rebours et guide',
      descriptionTemplate: 'Quand est Diwali {year} à Trinité-et-Tobago ? Compte à rebours, événements du Diwali Nagar, traditions et guide de célébration.',
      keywords: ['Diwali Trinité', 'Fête des Lumières Trinité', 'Diwali Nagar', 'date Diwali Trinité', 'célébrations indo-trinidadiennes'],
    },
    es: {
      titleTemplate: 'Diwali {year} Trinidad y Tobago — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es Diwali {year} en Trinidad y Tobago? Cuenta regresiva, eventos del Diwali Nagar, tradiciones y guía de celebración.',
      keywords: ['Diwali Trinidad', 'Festival de las Luces Trinidad', 'Diwali Nagar', 'fecha Diwali Trinidad', 'celebraciones indo-trinitenses'],
    },
  },

  faq: [
    {
      question: { en: 'When is Diwali {year} in Trinidad and Tobago?', fr: 'Quand est Diwali {year} à Trinité-et-Tobago ?', es: '¿Cuándo es Diwali {year} en Trinidad y Tobago?' },
      answer: {
        en: 'Diwali {year} in Trinidad and Tobago falls on {date} ({dayOfWeek}). The date changes each year as it follows the Hindu lunisolar calendar.',
        fr: 'Diwali {year} à Trinité-et-Tobago tombe le {date} ({dayOfWeek}). La date change chaque année car elle suit le calendrier luni-solaire hindou.',
        es: 'Diwali {year} en Trinidad y Tobago cae el {date} ({dayOfWeek}). La fecha cambia cada año ya que sigue el calendario lunisolar hindú.',
      },
    },
    {
      question: { en: 'What is the Diwali Nagar?', fr: 'Qu\'est-ce que le Diwali Nagar ?', es: '¿Qué es el Diwali Nagar?' },
      answer: {
        en: 'The Diwali Nagar (City of Lights) is a large cultural site organized by the National Council of Indian Culture in central Trinidad. It features thousands of lit deyas, cultural performances, Indian food stalls, exhibitions, and crafts, and is the centerpiece of Diwali celebrations in the country.',
        fr: 'Le Diwali Nagar (Cité des Lumières) est un grand site culturel organisé par le Conseil National de la Culture Indienne dans le centre de Trinité. Il présente des milliers de deyas allumées, des spectacles culturels, des stands de nourriture indienne, des expositions et de l\'artisanat.',
        es: 'El Diwali Nagar (Ciudad de las Luces) es un gran sitio cultural organizado por el Consejo Nacional de Cultura India en el centro de Trinidad. Presenta miles de deyas encendidas, actuaciones culturales, puestos de comida india, exhibiciones y artesanías.',
      },
    },
    {
      question: { en: 'Is Diwali a public holiday in Trinidad and Tobago?', fr: 'Diwali est-il un jour férié à Trinité-et-Tobago ?', es: '¿Diwali es feriado en Trinidad y Tobago?' },
      answer: {
        en: 'Yes, Diwali is a national public holiday in Trinidad and Tobago. It has been recognized as such since 1966, making Trinidad the first non-Asian country to grant Diwali official holiday status.',
        fr: 'Oui, Diwali est un jour férié national à Trinité-et-Tobago. Il est reconnu comme tel depuis 1966, faisant de Trinité le premier pays non asiatique à accorder à Diwali le statut de jour férié officiel.',
        es: 'Sí, Diwali es un feriado nacional en Trinidad y Tobago. Ha sido reconocido como tal desde 1966, haciendo de Trinidad el primer país no asiático en otorgar a Diwali el estatus de feriado oficial.',
      },
    },
    {
      question: { en: 'What are deyas?', fr: 'Que sont les deyas ?', es: '¿Qué son las deyas?' },
      answer: {
        en: 'Deyas are small clay oil lamps that are lit during Diwali to symbolize the victory of light over darkness and good over evil. In Trinidad, they are handmade by local potters and are placed around homes, temples, and public spaces during the festival.',
        fr: 'Les deyas sont de petites lampes à huile en argile allumées pendant Diwali pour symboliser la victoire de la lumière sur les ténèbres et du bien sur le mal. À Trinité, elles sont fabriquées à la main par des potiers locaux et placées autour des maisons, temples et espaces publics pendant le festival.',
        es: 'Las deyas son pequeñas lámparas de aceite de arcilla que se encienden durante Diwali para simbolizar la victoria de la luz sobre la oscuridad y del bien sobre el mal. En Trinidad, son hechas a mano por alfareros locales y se colocan alrededor de hogares, templos y espacios públicos durante el festival.',
      },
    },
  ],

  colorTheme: 'gold-orange',
  icon: '\uD83E\uDEA4',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'tt_christmas',
  countryCode: 'tt',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noël', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas in Trinidad and Tobago is a vibrant celebration blending Caribbean warmth with holiday traditions. Parang music fills the air, families prepare pastelles and ham, and homes are decorated with lights while everyone enjoys ginger beer, sorrel, and ponche de creme.',
    fr: 'Noël à Trinité-et-Tobago est une célébration vibrante mêlant la chaleur caribéenne aux traditions des fêtes. La musique parang remplit l\'air, les familles préparent des pastelles et du jambon, et les maisons sont décorées de lumières tandis que tout le monde savoure de la bière au gingembre, du sorrel et du ponche de creme.',
    es: 'La Navidad en Trinidad y Tobago es una celebración vibrante que combina la calidez caribeña con las tradiciones navideñas. La música de parang llena el aire, las familias preparan pasteles y jamón, y los hogares se decoran con luces mientras todos disfrutan de cerveza de jengibre, sorrel y ponche de crema.',
  },

  history: {
    en: 'Christmas traditions in Trinidad and Tobago reflect the country\'s rich multicultural heritage. The Spanish colonial influence brought Parang music — a genre of folk music traditionally sung in Spanish and performed during the Christmas season. Parang serenading groups would travel from house to house, singing and playing cuatro, guitar, and maracas.\n\nThe tradition of making pastelles — seasoned meat wrapped in cornmeal dough and banana leaves — was also inherited from the Spanish-speaking settlers and Indigenous peoples. Over time, these traditions blended with African, Indian, Chinese, and other cultural influences to create a uniquely Trinidadian Christmas experience.\n\nChristmas in Trinidad begins early, with Parang competitions and holiday parties starting as early as October. The celebration continues through to Old Year\'s Night (New Year\'s Eve) and beyond, making it the longest festive season on the island.',
    fr: 'Les traditions de Noël à Trinité-et-Tobago reflètent le riche patrimoine multiculturel du pays. L\'influence coloniale espagnole a apporté la musique Parang — un genre de musique folklorique traditionnellement chanté en espagnol et interprété pendant la saison de Noël. Les groupes de sérénade Parang voyageaient de maison en maison, chantant et jouant du cuatro, de la guitare et des maracas.\n\nLa tradition de confectionner des pastelles — de la viande assaisonnée enveloppée dans de la pâte de farine de maïs et des feuilles de bananier — a également été héritée des colons hispanophones et des peuples autochtones. Au fil du temps, ces traditions se sont mêlées aux influences culturelles africaines, indiennes, chinoises et autres pour créer une expérience de Noël typiquement trinidadienne.\n\nNoël à Trinité commence tôt, avec des compétitions de Parang et des fêtes commençant dès octobre. La célébration se poursuit jusqu\'à la nuit de la Saint-Sylvestre et au-delà, ce qui en fait la plus longue saison festive de l\'île.',
    es: 'Las tradiciones navideñas en Trinidad y Tobago reflejan la rica herencia multicultural del país. La influencia colonial española trajo la música de Parang — un género de música folclórica tradicionalmente cantado en español e interpretado durante la temporada navideña. Los grupos de serenata de Parang viajaban de casa en casa, cantando y tocando cuatro, guitarra y maracas.\n\nLa tradición de hacer pasteles — carne sazonada envuelta en masa de harina de maíz y hojas de plátano — también fue heredada de los colonos hispanohablantes y los pueblos indígenas. Con el tiempo, estas tradiciones se mezclaron con influencias culturales africanas, indias, chinas y de otros orígenes para crear una experiencia navideña exclusivamente trinitense.\n\nLa Navidad en Trinidad comienza temprano, con competencias de Parang y fiestas navideñas que comienzan desde octubre. La celebración continúa hasta la Noche de Fin de Año y más allá, convirtiéndola en la temporada festiva más larga de la isla.',
  },

  traditions: {
    en: [
      'Listening to and performing Parang music — Spanish-influenced folk songs of the Christmas season',
      'Making and eating pastelles — seasoned meat wrapped in cornmeal dough steamed in banana leaves',
      'Preparing a glazed Christmas ham, the centerpiece of the holiday meal',
      'Drinking sorrel (a tangy red hibiscus drink), ginger beer, and ponche de creme (a rum-based eggnog)',
      'Decorating homes with lights and setting up Christmas trees',
      'Attending Parang competitions and Christmas concerts',
      'Visiting friends and family for house-to-house celebrations',
    ],
    fr: [
      'Écouter et interpréter la musique Parang — chants folkloriques d\'influence espagnole de la saison de Noël',
      'Préparer et déguster des pastelles — viande assaisonnée enveloppée dans de la pâte de farine de maïs cuite à la vapeur dans des feuilles de bananier',
      'Préparer un jambon de Noël glacé, pièce maîtresse du repas de fête',
      'Boire du sorrel (une boisson rouge acidulée à l\'hibiscus), de la bière au gingembre et du ponche de creme (un lait de poule au rhum)',
      'Décorer les maisons avec des lumières et installer des sapins de Noël',
      'Assister aux compétitions de Parang et aux concerts de Noël',
      'Rendre visite aux amis et à la famille pour des célébrations de maison en maison',
    ],
    es: [
      'Escuchar e interpretar música de Parang — canciones folclóricas de influencia española de la temporada navideña',
      'Hacer y comer pasteles — carne sazonada envuelta en masa de harina de maíz cocida al vapor en hojas de plátano',
      'Preparar un jamón navideño glaseado, pieza central de la comida navideña',
      'Beber sorrel (una bebida roja ácida de hibisco), cerveza de jengibre y ponche de crema (un ponche de huevo con ron)',
      'Decorar los hogares con luces e instalar árboles de Navidad',
      'Asistir a competencias de Parang y conciertos navideños',
      'Visitar a amigos y familiares para celebraciones de casa en casa',
    ],
  },

  funFacts: {
    en: [
      'Parang music originated from Venezuelan and Spanish colonial influences and is sung primarily in Spanish, even though English is the official language.',
      'Trinidad\'s Christmas season is one of the longest in the world, with Parang events starting as early as October.',
      'Sorrel, the popular Christmas drink, is made from dried hibiscus flowers boiled with spices and sweetened — often with a splash of rum.',
      'Pastelles are Trinidad\'s version of Latin American tamales, adapted with local seasonings and wrapped in banana leaves.',
      'Ponche de creme, Trinidad\'s rum-spiked eggnog, is often made with Angostura bitters — produced locally since 1824.',
    ],
    fr: [
      'La musique Parang provient des influences coloniales vénézuéliennes et espagnoles et est chantée principalement en espagnol, bien que l\'anglais soit la langue officielle.',
      'La saison de Noël à Trinité est l\'une des plus longues au monde, avec des événements de Parang commençant dès octobre.',
      'Le sorrel, la boisson populaire de Noël, est fait de fleurs d\'hibiscus séchées bouillies avec des épices et sucrées — souvent avec une touche de rhum.',
      'Les pastelles sont la version trinidadienne des tamales latino-américains, adaptées avec des assaisonnements locaux et enveloppées dans des feuilles de bananier.',
      'Le ponche de creme, le lait de poule au rhum de Trinité, est souvent préparé avec de l\'amer Angostura — produit localement depuis 1824.',
    ],
    es: [
      'La música de Parang se originó de las influencias coloniales venezolanas y españolas y se canta principalmente en español, aunque el inglés es el idioma oficial.',
      'La temporada navideña de Trinidad es una de las más largas del mundo, con eventos de Parang que comienzan desde octubre.',
      'El sorrel, la popular bebida navideña, se hace de flores de hibisco secas hervidas con especias y endulzadas — a menudo con un toque de ron.',
      'Los pasteles son la versión trinitense de los tamales latinoamericanos, adaptados con condimentos locales y envueltos en hojas de plátano.',
      'El ponche de crema, el ponche de huevo con ron de Trinidad, a menudo se prepara con amargo de Angostura — producido localmente desde 1824.',
    ],
  },

  planningChecklist: {
    en: [
      'Learn to make pastelles — gather banana leaves, cornmeal, and seasoned meat filling',
      'Stock up on sorrel, ginger beer ingredients, and rum for ponche de creme',
      'Attend Parang events and competitions in your community',
      'Prepare the Christmas ham with your favorite glaze recipe',
      'Decorate your home and plan visits to friends and family',
    ],
    fr: [
      'Apprendre à faire des pastelles — rassembler des feuilles de bananier, de la farine de maïs et de la garniture de viande assaisonnée',
      'Faire le plein de sorrel, d\'ingrédients pour la bière au gingembre et de rhum pour le ponche de creme',
      'Assister aux événements et compétitions de Parang dans votre communauté',
      'Préparer le jambon de Noël avec votre recette de glaçage préférée',
      'Décorer votre maison et planifier des visites chez les amis et la famille',
    ],
    es: [
      'Aprender a hacer pasteles — reunir hojas de plátano, harina de maíz y relleno de carne sazonada',
      'Abastecerse de sorrel, ingredientes para cerveza de jengibre y ron para ponche de crema',
      'Asistir a eventos y competencias de Parang en tu comunidad',
      'Preparar el jamón navideño con tu receta de glaseado favorita',
      'Decorar tu hogar y planificar visitas a amigos y familiares',
    ],
  },

  relatedHolidays: ['tt_carnival', 'tt_diwali'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} Trinidad & Tobago — Countdown & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Trinidad and Tobago? Live countdown, Parang music, pastelles recipes, and Caribbean Christmas traditions.',
      keywords: ['Christmas Trinidad', 'Parang music', 'pastelles', 'Trinidad Christmas traditions', 'Caribbean Christmas'],
    },
    fr: {
      titleTemplate: 'Noël {year} Trinité-et-Tobago — Compte à rebours et traditions',
      descriptionTemplate: 'Quand est Noël {year} à Trinité-et-Tobago ? Compte à rebours, musique Parang, recettes de pastelles et traditions de Noël caribéennes.',
      keywords: ['Noël Trinité', 'musique Parang', 'pastelles', 'traditions de Noël Trinité', 'Noël caribéen'],
    },
    es: {
      titleTemplate: 'Navidad {year} Trinidad y Tobago — Cuenta regresiva y tradiciones',
      descriptionTemplate: '¿Cuándo es Navidad {year} en Trinidad y Tobago? Cuenta regresiva, música de Parang, recetas de pasteles y tradiciones navideñas caribeñas.',
      keywords: ['Navidad Trinidad', 'música Parang', 'pasteles', 'tradiciones navideñas Trinidad', 'Navidad caribeña'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Trinidad and Tobago?', fr: 'Quand est Noël {year} à Trinité-et-Tobago ?', es: '¿Cuándo es Navidad {year} en Trinidad y Tobago?' },
      answer: {
        en: 'Christmas Day {year} in Trinidad and Tobago is on {date} ({dayOfWeek}). It is always celebrated on December 25.',
        fr: 'Noël {year} à Trinité-et-Tobago est le {date} ({dayOfWeek}). Il est toujours célébré le 25 décembre.',
        es: 'La Navidad {year} en Trinidad y Tobago es el {date} ({dayOfWeek}). Siempre se celebra el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What is Parang music?', fr: 'Qu\'est-ce que la musique Parang ?', es: '¿Qué es la música de Parang?' },
      answer: {
        en: 'Parang is a form of folk music originating from Venezuelan and Spanish colonial traditions. It is sung primarily in Spanish and performed with instruments like the cuatro, guitar, and maracas. Parang groups traditionally go from house to house serenading families during the Christmas season.',
        fr: 'Le Parang est une forme de musique folklorique issue des traditions coloniales vénézuéliennes et espagnoles. Il est chanté principalement en espagnol et interprété avec des instruments comme le cuatro, la guitare et les maracas. Les groupes de Parang vont traditionnellement de maison en maison pour chanter des sérénades aux familles pendant la saison de Noël.',
        es: 'El Parang es una forma de música folclórica que se origina de las tradiciones coloniales venezolanas y españolas. Se canta principalmente en español y se interpreta con instrumentos como el cuatro, la guitarra y las maracas. Los grupos de Parang tradicionalmente van de casa en casa cantando serenatas a las familias durante la temporada navideña.',
      },
    },
    {
      question: { en: 'What are pastelles?', fr: 'Que sont les pastelles ?', es: '¿Qué son los pasteles?' },
      answer: {
        en: 'Pastelles are a traditional Trinidadian Christmas dish made of seasoned minced meat (usually beef, pork, or chicken) wrapped in cornmeal dough and steamed in banana leaves. They are similar to Latin American tamales and are a must-have at every Trinidadian Christmas table.',
        fr: 'Les pastelles sont un plat traditionnel de Noël trinidadien fait de viande hachée assaisonnée (généralement bœuf, porc ou poulet) enveloppée dans de la pâte de farine de maïs et cuite à la vapeur dans des feuilles de bananier. Elles sont similaires aux tamales latino-américains et sont incontournables sur toute table de Noël trinidadienne.',
        es: 'Los pasteles son un plato navideño tradicional trinitense hecho de carne picada sazonada (generalmente res, cerdo o pollo) envuelta en masa de harina de maíz y cocida al vapor en hojas de plátano. Son similares a los tamales latinoamericanos y son imprescindibles en toda mesa navideña trinitense.',
      },
    },
    {
      question: { en: 'What is ponche de creme?', fr: 'Qu\'est-ce que le ponche de creme ?', es: '¿Qué es el ponche de crema?' },
      answer: {
        en: 'Ponche de creme is Trinidad\'s version of eggnog, made with eggs, condensed milk, rum, lime zest, and Angostura bitters. It is a rich, creamy, rum-spiked holiday drink that is a staple of the Trinidadian Christmas season.',
        fr: 'Le ponche de creme est la version trinidadienne du lait de poule, fait avec des œufs, du lait concentré, du rhum, du zeste de citron vert et de l\'amer Angostura. C\'est une boisson de fête riche, crémeuse et alcoolisée, incontournable de la saison de Noël trinidadienne.',
        es: 'El ponche de crema es la versión trinitense del ponche de huevo, hecho con huevos, leche condensada, ron, ralladura de limón y amargo de Angostura. Es una bebida navideña rica, cremosa y con ron que es un elemento básico de la temporada navideña trinitense.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '\uD83C\uDF84',
};

// ---------------------------------------------------------------------------
// Eid al-Fitr — calculated (Islamic calendar)
// ---------------------------------------------------------------------------

const eidAlFitr: HolidayData = {
  id: 'tt_eid-al-fitr',
  countryCode: 'tt',
  slugs: { en: 'eid-al-fitr', fr: 'eid-al-fitr', es: 'eid-al-fitr' },
  names: { en: 'Eid al-Fitr', fr: "Aïd el-Fitr", es: 'Eid al-Fitr' },

  dateType: 'calculated',
  calculateDate: getEidAlFitrDate,

  descriptions: {
    en: 'Eid al-Fitr marks the end of Ramadan and is a national public holiday in Trinidad and Tobago. The Muslim community celebrates with special prayers, feasts, charity, and community gatherings, while the rest of the nation joins in the spirit of unity and diversity.',
    fr: "L'Aïd el-Fitr marque la fin du Ramadan et est un jour férié national à Trinité-et-Tobago. La communauté musulmane célèbre avec des prières spéciales, des festins, de la charité et des rassemblements communautaires, tandis que le reste de la nation participe dans un esprit d'unité et de diversité.",
    es: 'El Eid al-Fitr marca el final del Ramadán y es un feriado nacional en Trinidad y Tobago. La comunidad musulmana celebra con oraciones especiales, banquetes, caridad y reuniones comunitarias, mientras el resto de la nación se une en el espíritu de unidad y diversidad.',
  },

  history: {
    en: 'Islam in Trinidad and Tobago has roots dating back to the arrival of enslaved West Africans, many of whom were Muslim. The faith was further strengthened by the arrival of indentured workers from India in the 19th century, bringing both Sunni and Shia traditions.\n\nTrinidad and Tobago declared Eid al-Fitr a national public holiday in 1966, alongside Diwali, reflecting the government\'s commitment to recognizing the country\'s religious and cultural diversity. This made it one of the few Western Hemisphere nations to give Eid official holiday status.\n\nToday, approximately 5-6% of Trinidad and Tobago\'s population is Muslim. The holiday is celebrated across the twin islands with congregational Eid prayers at mosques, followed by festive meals and community gatherings. The day also emphasizes Zakat al-Fitr — charitable giving to ensure that everyone can participate in the celebration.',
    fr: "L'islam à Trinité-et-Tobago a des racines remontant à l'arrivée des Africains de l'Ouest réduits en esclavage, dont beaucoup étaient musulmans. La foi a été renforcée par l'arrivée de travailleurs sous contrat d'Inde au XIXe siècle, apportant à la fois les traditions sunnites et chiites.\n\nTrinité-et-Tobago a déclaré l'Aïd el-Fitr jour férié national en 1966, aux côtés de Diwali, reflétant l'engagement du gouvernement à reconnaître la diversité religieuse et culturelle du pays. Cela en a fait l'un des rares pays de l'hémisphère occidental à accorder à l'Aïd le statut de jour férié officiel.\n\nAujourd'hui, environ 5 à 6 % de la population de Trinité-et-Tobago est musulmane. Le jour férié est célébré dans les deux îles avec des prières de l'Aïd en congrégation dans les mosquées, suivies de repas festifs et de rassemblements communautaires. La journée met également l'accent sur la Zakat al-Fitr — un don charitable pour s'assurer que tout le monde puisse participer à la célébration.",
    es: 'El islam en Trinidad y Tobago tiene raíces que se remontan a la llegada de africanos occidentales esclavizados, muchos de los cuales eran musulmanes. La fe se fortaleció aún más con la llegada de trabajadores contratados de la India en el siglo XIX, trayendo tanto tradiciones sunitas como chiitas.\n\nTrinidad y Tobago declaró el Eid al-Fitr como feriado nacional en 1966, junto con Diwali, reflejando el compromiso del gobierno de reconocer la diversidad religiosa y cultural del país. Esto lo convirtió en uno de los pocos países del hemisferio occidental en otorgar al Eid el estatus de feriado oficial.\n\nHoy, aproximadamente el 5-6% de la población de Trinidad y Tobago es musulmana. El feriado se celebra en ambas islas con oraciones congregacionales del Eid en las mezquitas, seguidas de comidas festivas y reuniones comunitarias. El día también enfatiza el Zakat al-Fitr — la caridad para asegurar que todos puedan participar en la celebración.',
  },

  traditions: {
    en: [
      'Attending Eid Salah (congregational prayers) at mosques in the early morning',
      'Preparing and sharing festive meals with family and friends',
      'Giving Zakat al-Fitr (charity) to those in need before the Eid prayers',
      'Wearing new or best clothes to mark the special occasion',
      'Visiting relatives and neighbors to exchange greetings and sweets',
      'Children receiving Eidi (monetary gifts) from elders',
      'Open houses where Muslims welcome people of all faiths to share food and fellowship',
    ],
    fr: [
      "Assister à l'Eid Salah (prières en congrégation) dans les mosquées tôt le matin",
      'Préparer et partager des repas festifs avec la famille et les amis',
      "Donner la Zakat al-Fitr (charité) aux nécessiteux avant les prières de l'Aïd",
      "Porter des vêtements neufs ou ses plus beaux habits pour marquer l'occasion spéciale",
      'Rendre visite aux parents et voisins pour échanger des vœux et des sucreries',
      "Les enfants reçoivent l'Eidi (cadeaux monétaires) des aînés",
      'Portes ouvertes où les musulmans accueillent des personnes de toutes confessions pour partager nourriture et fraternité',
    ],
    es: [
      'Asistir al Eid Salah (oraciones congregacionales) en las mezquitas temprano por la mañana',
      'Preparar y compartir comidas festivas con familia y amigos',
      'Dar Zakat al-Fitr (caridad) a los necesitados antes de las oraciones del Eid',
      'Usar ropa nueva o la mejor vestimenta para marcar la ocasión especial',
      'Visitar a parientes y vecinos para intercambiar saludos y dulces',
      'Los niños reciben Eidi (regalos monetarios) de los mayores',
      'Casas abiertas donde los musulmanes dan la bienvenida a personas de todas las religiones para compartir comida y compañerismo',
    ],
  },

  funFacts: {
    en: [
      'Trinidad and Tobago is one of the few countries in the Western Hemisphere where Eid al-Fitr is a national public holiday.',
      'The Muslim community in Trinidad includes descendants of both African and Indian heritage, creating unique cultural blends.',
      'Sawine (vermicelli cooked in milk with spices) is a popular Eid treat unique to Trinidad and Tobago.',
      'Many non-Muslim Trinidadians participate in Eid celebrations, reflecting the country\'s ethos of multiculturalism.',
      'Trinidad\'s Jama Masjid in Port of Spain, built in 1947, is one of the most prominent mosques in the Caribbean.',
    ],
    fr: [
      "Trinité-et-Tobago est l'un des rares pays de l'hémisphère occidental où l'Aïd el-Fitr est un jour férié national.",
      "La communauté musulmane de Trinité comprend des descendants d'héritage africain et indien, créant des mélanges culturels uniques.",
      "Le sawine (vermicelles cuits dans du lait avec des épices) est une friandise populaire de l'Aïd unique à Trinité-et-Tobago.",
      "De nombreux Trinidadiens non musulmans participent aux célébrations de l'Aïd, reflétant l'esprit de multiculturalisme du pays.",
      "La Jama Masjid de Trinité à Port-d'Espagne, construite en 1947, est l'une des mosquées les plus importantes des Caraïbes.",
    ],
    es: [
      'Trinidad y Tobago es uno de los pocos países del hemisferio occidental donde el Eid al-Fitr es feriado nacional.',
      'La comunidad musulmana en Trinidad incluye descendientes de herencia africana e india, creando mezclas culturales únicas.',
      'El sawine (fideos cocidos en leche con especias) es un postre popular del Eid único de Trinidad y Tobago.',
      'Muchos trinitenses no musulmanes participan en las celebraciones del Eid, reflejando el espíritu de multiculturalismo del país.',
      'La Jama Masjid de Trinidad en Puerto España, construida en 1947, es una de las mezquitas más prominentes del Caribe.',
    ],
  },

  planningChecklist: {
    en: [
      'Confirm the Eid date — it depends on the sighting of the new moon and may vary',
      'Pay Zakat al-Fitr before the Eid prayer for those who are able',
      'Prepare festive dishes including sawine and traditional sweets',
      'Lay out new clothes for the family to wear on Eid morning',
      'Plan visits to family, friends, and neighbors after prayers',
    ],
    fr: [
      "Confirmer la date de l'Aïd — elle dépend de l'observation du nouveau croissant de lune et peut varier",
      "Payer la Zakat al-Fitr avant la prière de l'Aïd pour ceux qui en ont les moyens",
      'Préparer des plats festifs incluant le sawine et des sucreries traditionnelles',
      "Préparer de nouveaux vêtements pour la famille à porter le matin de l'Aïd",
      'Planifier des visites à la famille, aux amis et aux voisins après les prières',
    ],
    es: [
      'Confirmar la fecha del Eid — depende del avistamiento de la luna nueva y puede variar',
      'Pagar Zakat al-Fitr antes de la oración del Eid para quienes puedan hacerlo',
      'Preparar platos festivos incluyendo sawine y dulces tradicionales',
      'Preparar ropa nueva para la familia para usar en la mañana del Eid',
      'Planificar visitas a familia, amigos y vecinos después de las oraciones',
    ],
  },

  relatedHolidays: ['tt_diwali', 'tt_christmas'],

  seo: {
    en: {
      titleTemplate: 'Eid al-Fitr {year} Trinidad & Tobago — Countdown & Guide',
      descriptionTemplate: 'When is Eid al-Fitr {year} in Trinidad and Tobago? Live countdown, prayer times, traditions, and celebration guide.',
      keywords: ['Eid al-Fitr Trinidad', 'Eid Trinidad and Tobago', 'Ramadan Trinidad', 'Muslim holidays Trinidad', 'Eid date Trinidad'],
    },
    fr: {
      titleTemplate: "Aïd el-Fitr {year} Trinité-et-Tobago — Compte à rebours et guide",
      descriptionTemplate: "Quand est l'Aïd el-Fitr {year} à Trinité-et-Tobago ? Compte à rebours, horaires de prière, traditions et guide de célébration.",
      keywords: ["Aïd el-Fitr Trinité", "Aïd Trinité-et-Tobago", 'Ramadan Trinité', 'fêtes musulmanes Trinité', "date Aïd Trinité"],
    },
    es: {
      titleTemplate: 'Eid al-Fitr {year} Trinidad y Tobago — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Eid al-Fitr {year} en Trinidad y Tobago? Cuenta regresiva, horarios de oración, tradiciones y guía de celebración.',
      keywords: ['Eid al-Fitr Trinidad', 'Eid Trinidad y Tobago', 'Ramadán Trinidad', 'feriados musulmanes Trinidad', 'fecha Eid Trinidad'],
    },
  },

  faq: [
    {
      question: { en: 'When is Eid al-Fitr {year} in Trinidad and Tobago?', fr: "Quand est l'Aïd el-Fitr {year} à Trinité-et-Tobago ?", es: '¿Cuándo es el Eid al-Fitr {year} en Trinidad y Tobago?' },
      answer: {
        en: 'Eid al-Fitr {year} in Trinidad and Tobago is expected on {date} ({dayOfWeek}). The exact date depends on the sighting of the new crescent moon marking the end of Ramadan.',
        fr: "L'Aïd el-Fitr {year} à Trinité-et-Tobago est prévu le {date} ({dayOfWeek}). La date exacte dépend de l'observation du nouveau croissant de lune marquant la fin du Ramadan.",
        es: 'El Eid al-Fitr {year} en Trinidad y Tobago está previsto para el {date} ({dayOfWeek}). La fecha exacta depende del avistamiento de la luna nueva creciente que marca el final del Ramadán.',
      },
    },
    {
      question: { en: 'Is Eid al-Fitr a public holiday in Trinidad and Tobago?', fr: "L'Aïd el-Fitr est-il un jour férié à Trinité-et-Tobago ?", es: '¿El Eid al-Fitr es feriado en Trinidad y Tobago?' },
      answer: {
        en: 'Yes, Eid al-Fitr is a national public holiday in Trinidad and Tobago, recognized since 1966. Government offices, banks, and most businesses are closed.',
        fr: "Oui, l'Aïd el-Fitr est un jour férié national à Trinité-et-Tobago, reconnu depuis 1966. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermés.",
        es: 'Sí, el Eid al-Fitr es un feriado nacional en Trinidad y Tobago, reconocido desde 1966. Las oficinas gubernamentales, bancos y la mayoría de los negocios están cerrados.',
      },
    },
    {
      question: { en: 'What is sawine?', fr: 'Qu\'est-ce que le sawine ?', es: '¿Qué es el sawine?' },
      answer: {
        en: 'Sawine is a sweet vermicelli pudding cooked in milk with cardamom, cinnamon, and sugar, traditionally prepared for Eid in Trinidad and Tobago. It is shared among family, friends, and neighbors as part of the Eid celebrations.',
        fr: 'Le sawine est un pudding sucré de vermicelles cuit dans du lait avec de la cardamome, de la cannelle et du sucre, traditionnellement préparé pour l\'Aïd à Trinité-et-Tobago. Il est partagé entre la famille, les amis et les voisins dans le cadre des célébrations de l\'Aïd.',
        es: 'El sawine es un pudín dulce de fideos cocido en leche con cardamomo, canela y azúcar, tradicionalmente preparado para el Eid en Trinidad y Tobago. Se comparte entre familia, amigos y vecinos como parte de las celebraciones del Eid.',
      },
    },
    {
      question: { en: 'How does Trinidad celebrate religious diversity?', fr: 'Comment Trinité célèbre-t-elle la diversité religieuse ?', es: '¿Cómo celebra Trinidad la diversidad religiosa?' },
      answer: {
        en: 'Trinidad and Tobago is one of the most religiously diverse countries in the Western Hemisphere. It recognizes Eid al-Fitr, Diwali, Christmas, and other religious observances as national public holidays, reflecting its motto "Together We Aspire, Together We Achieve."',
        fr: "Trinité-et-Tobago est l'un des pays les plus diversifiés sur le plan religieux de l'hémisphère occidental. Il reconnaît l'Aïd el-Fitr, Diwali, Noël et d'autres observances religieuses comme jours fériés nationaux, reflétant sa devise « Together We Aspire, Together We Achieve ».",
        es: 'Trinidad y Tobago es uno de los países con mayor diversidad religiosa del hemisferio occidental. Reconoce el Eid al-Fitr, Diwali, Navidad y otras observancias religiosas como feriados nacionales, reflejando su lema "Together We Aspire, Together We Achieve".',
      },
    },
  ],

  colorTheme: 'green-gold',
  icon: '\uD83C\uDF19',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const ttHolidays: HolidayData[] = [
  carnival,
  emancipationDay,
  independenceDay,
  diwali,
  christmas,
  eidAlFitr,
];

export default ttHolidays;
