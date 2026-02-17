/**
 * Mexico holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { nthWeekday, getBenitoJuarezBirthday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'mx_new-years-day',
  countryCode: 'mx',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: 'Jour de l\'An', es: 'Año Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 marks the beginning of the calendar year in Mexico. Families gather for late-night celebrations on December 31, welcoming the new year with fireworks, music, and cherished traditions.",
    fr: "Le Jour de l'An, le 1er janvier, marque le début de l'année civile au Mexique. Les familles se réunissent pour des célébrations nocturnes le 31 décembre, accueillant la nouvelle année avec des feux d'artifice, de la musique et des traditions chères.",
    es: 'El Año Nuevo, el 1 de enero, marca el inicio del año calendario en México. Las familias se reúnen para celebraciones nocturnas el 31 de diciembre, recibiendo el nuevo año con fuegos artificiales, música y tradiciones entrañables.',
  },

  history: {
    en: "New Year's celebrations in Mexico blend Indigenous, Spanish colonial, and modern traditions. The holiday became an official day off in the Mexican labor calendar and is universally observed across the country.\n\nMexican New Year's Eve, known as Nochevieja, features family dinners, countdowns, and midnight rituals believed to bring luck, love, and prosperity in the coming year.\n\nThe tradition of eating twelve grapes at midnight — one for each stroke of the clock — was adopted from Spain and remains one of the most popular customs throughout Mexico.",
    fr: "Les célébrations du Nouvel An au Mexique mélangent traditions autochtones, coloniales espagnoles et modernes. Ce jour férié est devenu un jour de repos officiel dans le calendrier du travail mexicain et est universellement observé dans tout le pays.\n\nLa veille du Nouvel An mexicain, connue sous le nom de Nochevieja, comprend des dîners en famille, des comptes à rebours et des rituels de minuit censés apporter chance, amour et prospérité pour l'année à venir.\n\nLa tradition de manger douze raisins à minuit — un pour chaque coup de l'horloge — a été adoptée de l'Espagne et reste l'une des coutumes les plus populaires dans tout le Mexique.",
    es: "Las celebraciones de Año Nuevo en México mezclan tradiciones indígenas, coloniales españolas y modernas. El día festivo se convirtió en un día de descanso oficial en el calendario laboral mexicano y se observa universalmente en todo el país.\n\nLa Nochevieja mexicana incluye cenas familiares, cuentas regresivas y rituales de medianoche que se cree traen suerte, amor y prosperidad para el año venidero.\n\nLa tradición de comer doce uvas a medianoche — una por cada campanada del reloj — fue adoptada de España y sigue siendo una de las costumbres más populares en todo México.",
  },

  traditions: {
    en: [
      'Eating twelve grapes at midnight, one for each month of the coming year',
      'Wearing colored underwear for luck — red for love, yellow for prosperity, green for health',
      'Sweeping the house to clear out bad energy before midnight',
      'Carrying suitcases around the block to attract travel opportunities',
      'Burning effigies (monos de año viejo) to leave behind the old year',
      'Throwing lentils at the front door for financial abundance',
      'Gathering with family for a late-night dinner and toast',
    ],
    fr: [
      'Manger douze raisins à minuit, un pour chaque mois de l\'année à venir',
      'Porter des sous-vêtements colorés pour la chance — rouge pour l\'amour, jaune pour la prospérité, vert pour la santé',
      'Balayer la maison pour chasser les mauvaises énergies avant minuit',
      'Porter des valises autour du pâté de maisons pour attirer les voyages',
      'Brûler des effigies (monos de año viejo) pour laisser derrière soi l\'ancienne année',
      'Jeter des lentilles à la porte d\'entrée pour l\'abondance financière',
      'Se réunir en famille pour un dîner tardif et un toast',
    ],
    es: [
      'Comer doce uvas a medianoche, una por cada mes del año venidero',
      'Usar ropa interior de colores para la suerte — roja para el amor, amarilla para la prosperidad, verde para la salud',
      'Barrer la casa para limpiar las malas energías antes de medianoche',
      'Sacar las maletas y caminar alrededor de la manzana para atraer viajes',
      'Quemar monos de año viejo para dejar atrás el año anterior',
      'Arrojar lentejas en la puerta de entrada para la abundancia económica',
      'Reunirse en familia para una cena nocturna y un brindis',
    ],
  },

  funFacts: {
    en: [
      'The tradition of eating twelve grapes at midnight came to Mexico from Spain in the early 20th century.',
      'In many Mexican cities, enormous street parties and concerts take place on New Year\'s Eve, rivaling any global celebration.',
      'Some Mexicans write wishes on paper and burn them at midnight to ensure they come true.',
      'The color of underwear worn on New Year\'s Eve is taken very seriously — stores sell special packs in every color.',
      'Many Mexican families also toss a bucket of water out the window at midnight to symbolize washing away the old year.',
    ],
    fr: [
      'La tradition de manger douze raisins à minuit est arrivée au Mexique depuis l\'Espagne au début du XXe siècle.',
      'Dans de nombreuses villes mexicaines, d\'énormes fêtes de rue et concerts ont lieu le soir du Nouvel An, rivalisant avec toute célébration mondiale.',
      'Certains Mexicains écrivent des souhaits sur du papier et les brûlent à minuit pour s\'assurer qu\'ils se réalisent.',
      'La couleur des sous-vêtements portés le soir du Nouvel An est prise très au sérieux — les magasins vendent des packs spéciaux de toutes les couleurs.',
      'De nombreuses familles mexicaines jettent aussi un seau d\'eau par la fenêtre à minuit pour symboliser le lavage de l\'ancienne année.',
    ],
    es: [
      'La tradición de comer doce uvas a medianoche llegó a México desde España a principios del siglo XX.',
      'En muchas ciudades mexicanas, enormes fiestas callejeras y conciertos se llevan a cabo en Nochevieja, rivalizando con cualquier celebración mundial.',
      'Algunos mexicanos escriben deseos en papel y los queman a medianoche para asegurar que se cumplan.',
      'El color de la ropa interior usada en Nochevieja se toma muy en serio — las tiendas venden paquetes especiales en todos los colores.',
      'Muchas familias mexicanas también lanzan un balde de agua por la ventana a medianoche para simbolizar que se lava el año viejo.',
    ],
  },

  planningChecklist: {
    en: [
      'Stock up on grapes, lentils, and traditional foods for the midnight celebration',
      'Choose your lucky underwear color based on your wishes for the new year',
      'Plan a family dinner menu — pozole and tamales are popular choices',
      'Book restaurant or event reservations early if going out',
      'Prepare effigies or monos de año viejo to burn at midnight',
    ],
    fr: [
      'Faire le plein de raisins, lentilles et aliments traditionnels pour la célébration de minuit',
      'Choisir la couleur de ses sous-vêtements porte-bonheur selon ses souhaits pour la nouvelle année',
      'Planifier un menu de dîner familial — le pozole et les tamales sont des choix populaires',
      'Réserver au restaurant ou pour des événements à l\'avance si vous sortez',
      'Préparer des effigies ou monos de año viejo à brûler à minuit',
    ],
    es: [
      'Abastecerse de uvas, lentejas y alimentos tradicionales para la celebración de medianoche',
      'Elegir el color de ropa interior de la suerte según los deseos para el nuevo año',
      'Planificar un menú de cena familiar — el pozole y los tamales son opciones populares',
      'Reservar en restaurantes o eventos con anticipación si se sale a celebrar',
      'Preparar monos de año viejo para quemar a medianoche',
    ],
  },

  relatedHolidays: ['mx_christmas', 'mx_day-of-the-dead'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Mexico — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Mexico? Live countdown to January 1, traditions, and celebration guide.",
      keywords: ["New Year's Day Mexico", 'Año Nuevo Mexico', 'Mexican New Year traditions', "New Year's Day countdown", 'Mexico holidays'],
    },
    fr: {
      titleTemplate: 'Jour de l\'An {year} Mexique — Compte à rebours et guide',
      descriptionTemplate: 'Quand est le Jour de l\'An {year} au Mexique ? Compte à rebours en direct, traditions et guide de célébration.',
      keywords: ['Jour de l\'An Mexique', 'Año Nuevo Mexique', 'traditions Nouvel An mexicain', 'compte à rebours Nouvel An', 'jours fériés Mexique'],
    },
    es: {
      titleTemplate: 'Año Nuevo {year} México — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es Año Nuevo {year} en México? Cuenta regresiva en vivo al 1 de enero, tradiciones y guía de celebración.',
      keywords: ['Año Nuevo México', 'día festivo 1 de enero', 'tradiciones Año Nuevo mexicano', 'cuenta regresiva Año Nuevo', 'días festivos México'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Mexico?", fr: 'Quand est le Jour de l\'An {year} au Mexique ?', es: '¿Cuándo es Año Nuevo {year} en México?' },
      answer: {
        en: "New Year's Day {year} in Mexico is on {date} ({dayOfWeek}). It is always January 1 and is an official public holiday.",
        fr: 'Le Jour de l\'An {year} au Mexique est le {date} ({dayOfWeek}). C\'est toujours le 1er janvier et c\'est un jour férié officiel.',
        es: 'El Año Nuevo {year} en México es el {date} ({dayOfWeek}). Siempre es el 1 de enero y es un día festivo oficial.',
      },
    },
    {
      question: { en: 'What are the most popular Mexican New Year traditions?', fr: 'Quelles sont les traditions les plus populaires du Nouvel An mexicain ?', es: '¿Cuáles son las tradiciones más populares del Año Nuevo mexicano?' },
      answer: {
        en: 'Popular traditions include eating twelve grapes at midnight, wearing colored underwear for luck, sweeping the house, carrying suitcases around the block for travel, and burning effigies of the old year.',
        fr: 'Les traditions populaires incluent manger douze raisins à minuit, porter des sous-vêtements colorés pour la chance, balayer la maison, porter des valises autour du pâté de maisons pour les voyages et brûler des effigies de l\'ancienne année.',
        es: 'Las tradiciones populares incluyen comer doce uvas a medianoche, usar ropa interior de colores para la suerte, barrer la casa, sacar las maletas a dar la vuelta a la manzana para los viajes y quemar monos de año viejo.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Mexico?", fr: 'Le Jour de l\'An est-il un jour férié au Mexique ?', es: '¿Es Año Nuevo un día festivo oficial en México?' },
      answer: {
        en: "Yes, New Year's Day is an official public holiday in Mexico. Banks, government offices, and most businesses are closed.",
        fr: 'Oui, le Jour de l\'An est un jour férié officiel au Mexique. Les banques, les bureaux du gouvernement et la plupart des entreprises sont fermés.',
        es: 'Sí, el Año Nuevo es un día festivo oficial en México. Los bancos, oficinas gubernamentales y la mayoría de los negocios están cerrados.',
      },
    },
    {
      question: { en: 'Why do Mexicans eat grapes on New Year?', fr: 'Pourquoi les Mexicains mangent-ils des raisins au Nouvel An ?', es: '¿Por qué los mexicanos comen uvas en Año Nuevo?' },
      answer: {
        en: 'The tradition of eating twelve grapes at midnight — one per bell toll — was brought from Spain. Each grape represents a wish for each month of the coming year.',
        fr: 'La tradition de manger douze raisins à minuit — un par coup de cloche — a été apportée d\'Espagne. Chaque raisin représente un souhait pour chaque mois de l\'année à venir.',
        es: 'La tradición de comer doce uvas a medianoche — una por cada campanada — fue traída de España. Cada uva representa un deseo para cada mes del año venidero.',
      },
    },
  ],

  colorTheme: 'gold-black',
  icon: '🎆',
};

// ---------------------------------------------------------------------------
// Constitution Day — 1st Monday of February
// ---------------------------------------------------------------------------

const constitutionDay: HolidayData = {
  id: 'mx_constitution-day',
  countryCode: 'mx',
  slugs: { en: 'constitution-day', fr: 'jour-de-la-constitution', es: 'dia-de-la-constitucion' },
  names: { en: 'Constitution Day', fr: 'Jour de la Constitution', es: 'Día de la Constitución' },

  dateType: 'calculated',
  calculateDate: (year: number) => nthWeekday(year, 2, 1, 1),

  descriptions: {
    en: "Constitution Day in Mexico commemorates the promulgation of the 1917 Mexican Constitution, one of the most progressive constitutions of its era. It is observed on the first Monday of February as part of Mexico's long-weekend holiday system.",
    fr: "Le Jour de la Constitution au Mexique commémore la promulgation de la Constitution mexicaine de 1917, l'une des constitutions les plus progressistes de son époque. Il est observé le premier lundi de février dans le cadre du système de week-ends prolongés du Mexique.",
    es: 'El Día de la Constitución en México conmemora la promulgación de la Constitución mexicana de 1917, una de las constituciones más progresistas de su época. Se observa el primer lunes de febrero como parte del sistema de fines de semana largos de México.',
  },

  history: {
    en: "The Mexican Constitution of 1917 was drafted during the Mexican Revolution and promulgated on February 5, 1917, in the city of Querétaro. It was one of the first constitutions in the world to enshrine social rights, including land reform, labor rights, and limits on the Catholic Church's power.\n\nThe constitution replaced the 1857 Constitution and incorporated revolutionary ideals championed by leaders like Venustiano Carranza, Emiliano Zapata, and Francisco Villa. Articles 3, 27, and 123 established groundbreaking protections for education, land ownership, and workers' rights.\n\nIn 2006, the holiday was moved from the fixed date of February 5 to the first Monday of February as part of Mexico's reform to create long weekends (fines de semana largos), boosting domestic tourism and family time.",
    fr: "La Constitution mexicaine de 1917 a été rédigée pendant la Révolution mexicaine et promulguée le 5 février 1917 dans la ville de Querétaro. Elle a été l'une des premières constitutions au monde à consacrer les droits sociaux, y compris la réforme agraire, les droits du travail et les limites au pouvoir de l'Église catholique.\n\nLa constitution a remplacé celle de 1857 et a incorporé les idéaux révolutionnaires défendus par des dirigeants comme Venustiano Carranza, Emiliano Zapata et Francisco Villa. Les articles 3, 27 et 123 ont établi des protections révolutionnaires pour l'éducation, la propriété foncière et les droits des travailleurs.\n\nEn 2006, le jour férié a été déplacé de la date fixe du 5 février au premier lundi de février dans le cadre de la réforme mexicaine visant à créer des week-ends prolongés (fines de semana largos), stimulant le tourisme intérieur et le temps en famille.",
    es: "La Constitución mexicana de 1917 fue redactada durante la Revolución Mexicana y promulgada el 5 de febrero de 1917 en la ciudad de Querétaro. Fue una de las primeras constituciones en el mundo en consagrar los derechos sociales, incluyendo la reforma agraria, los derechos laborales y los límites al poder de la Iglesia Católica.\n\nLa constitución reemplazó a la de 1857 e incorporó los ideales revolucionarios defendidos por líderes como Venustiano Carranza, Emiliano Zapata y Francisco Villa. Los artículos 3, 27 y 123 establecieron protecciones innovadoras para la educación, la propiedad de la tierra y los derechos de los trabajadores.\n\nEn 2006, el día festivo fue trasladado de la fecha fija del 5 de febrero al primer lunes de febrero como parte de la reforma mexicana para crear fines de semana largos, impulsando el turismo interno y el tiempo en familia.",
  },

  traditions: {
    en: [
      'Civic ceremonies and flag-raising events at government buildings',
      'School assemblies with presentations on constitutional history',
      'Public readings of key constitutional articles',
      'Visits to the Querétaro Museum of the Constitution',
      'Family weekend trips taking advantage of the long weekend',
    ],
    fr: [
      'Cérémonies civiques et levées de drapeau dans les bâtiments gouvernementaux',
      'Assemblées scolaires avec des présentations sur l\'histoire constitutionnelle',
      'Lectures publiques des articles constitutionnels clés',
      'Visites au Musée de la Constitution à Querétaro',
      'Voyages familiaux en profitant du week-end prolongé',
    ],
    es: [
      'Ceremonias cívicas e izamiento de bandera en edificios gubernamentales',
      'Asambleas escolares con presentaciones sobre la historia constitucional',
      'Lecturas públicas de artículos constitucionales clave',
      'Visitas al Museo de la Constitución en Querétaro',
      'Viajes familiares de fin de semana aprovechando el puente',
    ],
  },

  funFacts: {
    en: [
      'The 1917 Constitution was the first in the world to include social rights such as the right to education and labor protections.',
      'Article 27 established that the nation owns all land and subsoil resources, a principle still in force today.',
      'The original constitution was signed in the Teatro de la República in Querétaro, which still stands as a museum.',
      'Mexico\'s Constitution has been amended over 700 times since 1917, making it one of the most frequently modified in the world.',
      'The holiday was traditionally February 5 but was moved to a Monday in 2006 to create a long weekend.',
    ],
    fr: [
      'La Constitution de 1917 a été la première au monde à inclure des droits sociaux tels que le droit à l\'éducation et les protections du travail.',
      'L\'article 27 a établi que la nation possède toutes les terres et les ressources du sous-sol, un principe toujours en vigueur aujourd\'hui.',
      'La constitution originale a été signée au Teatro de la República à Querétaro, qui existe toujours en tant que musée.',
      'La Constitution du Mexique a été amendée plus de 700 fois depuis 1917, ce qui en fait l\'une des plus fréquemment modifiées au monde.',
      'Le jour férié était traditionnellement le 5 février mais a été déplacé à un lundi en 2006 pour créer un week-end prolongé.',
    ],
    es: [
      'La Constitución de 1917 fue la primera en el mundo en incluir derechos sociales como el derecho a la educación y las protecciones laborales.',
      'El artículo 27 estableció que la nación es dueña de todas las tierras y recursos del subsuelo, un principio que sigue vigente hoy.',
      'La constitución original fue firmada en el Teatro de la República en Querétaro, que aún existe como museo.',
      'La Constitución de México ha sido enmendada más de 700 veces desde 1917, convirtiéndola en una de las más frecuentemente modificadas del mundo.',
      'El día festivo era tradicionalmente el 5 de febrero pero fue trasladado a un lunes en 2006 para crear un fin de semana largo.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the exact Monday date for this year as it shifts annually',
      'Plan a long-weekend getaway — domestic tourism peaks during this bridge holiday',
      'Visit the Querétaro Museum of the Constitution for a historical experience',
      'Attend local civic ceremonies or parades',
      'Use the long weekend to explore Mexico\'s colonial cities',
    ],
    fr: [
      'Vérifier la date exacte du lundi cette année car elle change chaque année',
      'Planifier une escapade de week-end prolongé — le tourisme intérieur est à son apogée pendant ce pont',
      'Visiter le Musée de la Constitution à Querétaro pour une expérience historique',
      'Assister aux cérémonies civiques ou défilés locaux',
      'Profiter du week-end prolongé pour explorer les villes coloniales du Mexique',
    ],
    es: [
      'Verificar la fecha exacta del lunes de este año ya que cambia anualmente',
      'Planificar una escapada de fin de semana largo — el turismo interno alcanza su punto máximo durante este puente',
      'Visitar el Museo de la Constitución en Querétaro para una experiencia histórica',
      'Asistir a ceremonias cívicas o desfiles locales',
      'Aprovechar el puente para explorar las ciudades coloniales de México',
    ],
  },

  relatedHolidays: ['mx_benito-juarez-day', 'mx_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Constitution Day {year} Mexico — Date, Countdown & History',
      descriptionTemplate: 'When is Constitution Day {year} in Mexico? Live countdown, history of the 1917 Constitution, and celebration guide.',
      keywords: ['Constitution Day Mexico', 'Día de la Constitución', 'Mexico holidays', 'Mexican Constitution 1917', 'February holiday Mexico'],
    },
    fr: {
      titleTemplate: 'Jour de la Constitution {year} Mexique — Date, compte à rebours et histoire',
      descriptionTemplate: 'Quand est le Jour de la Constitution {year} au Mexique ? Compte à rebours, histoire de la Constitution de 1917 et guide.',
      keywords: ['Jour de la Constitution Mexique', 'Día de la Constitución', 'jours fériés Mexique', 'Constitution mexicaine 1917', 'jour férié février Mexique'],
    },
    es: {
      titleTemplate: 'Día de la Constitución {year} México — Fecha, cuenta regresiva e historia',
      descriptionTemplate: '¿Cuándo es el Día de la Constitución {year} en México? Cuenta regresiva en vivo, historia de la Constitución de 1917 y guía de celebración.',
      keywords: ['Día de la Constitución México', 'Constitución de 1917', 'días festivos México', 'primer lunes de febrero México', 'feriado febrero México'],
    },
  },

  faq: [
    {
      question: { en: 'When is Constitution Day {year} in Mexico?', fr: 'Quand est le Jour de la Constitution {year} au Mexique ?', es: '¿Cuándo es el Día de la Constitución {year} en México?' },
      answer: {
        en: 'Constitution Day {year} in Mexico falls on {date} ({dayOfWeek}). It is observed on the first Monday of February.',
        fr: 'Le Jour de la Constitution {year} au Mexique tombe le {date} ({dayOfWeek}). Il est observé le premier lundi de février.',
        es: 'El Día de la Constitución {year} en México cae el {date} ({dayOfWeek}). Se observa el primer lunes de febrero.',
      },
    },
    {
      question: { en: 'Why is Constitution Day important in Mexico?', fr: 'Pourquoi le Jour de la Constitution est-il important au Mexique ?', es: '¿Por qué es importante el Día de la Constitución en México?' },
      answer: {
        en: 'Constitution Day commemorates the 1917 Mexican Constitution, one of the first constitutions in the world to include social rights such as education, land reform, and labor protections.',
        fr: 'Le Jour de la Constitution commémore la Constitution mexicaine de 1917, l\'une des premières au monde à inclure des droits sociaux tels que l\'éducation, la réforme agraire et les protections du travail.',
        es: 'El Día de la Constitución conmemora la Constitución mexicana de 1917, una de las primeras en el mundo en incluir derechos sociales como la educación, la reforma agraria y las protecciones laborales.',
      },
    },
    {
      question: { en: 'Is Constitution Day a public holiday in Mexico?', fr: 'Le Jour de la Constitution est-il un jour férié au Mexique ?', es: '¿Es el Día de la Constitución un día festivo oficial en México?' },
      answer: {
        en: 'Yes, Constitution Day is an official public holiday in Mexico. Banks, schools, and government offices are closed.',
        fr: 'Oui, le Jour de la Constitution est un jour férié officiel au Mexique. Les banques, les écoles et les bureaux du gouvernement sont fermés.',
        es: 'Sí, el Día de la Constitución es un día festivo oficial en México. Los bancos, las escuelas y las oficinas gubernamentales están cerrados.',
      },
    },
    {
      question: { en: 'Was Constitution Day always on a Monday?', fr: 'Le Jour de la Constitution était-il toujours un lundi ?', es: '¿El Día de la Constitución siempre fue en lunes?' },
      answer: {
        en: 'No, it was originally observed on February 5 every year. In 2006, it was moved to the first Monday of February to create a long weekend.',
        fr: 'Non, il était à l\'origine observé le 5 février chaque année. En 2006, il a été déplacé au premier lundi de février pour créer un week-end prolongé.',
        es: 'No, originalmente se observaba el 5 de febrero cada año. En 2006, fue trasladado al primer lunes de febrero para crear un fin de semana largo.',
      },
    },
  ],

  colorTheme: 'green-white-red',
  icon: '📜',
};

// ---------------------------------------------------------------------------
// Benito Juárez Birthday — 3rd Monday of March
// ---------------------------------------------------------------------------

const benitoJuarezDay: HolidayData = {
  id: 'mx_benito-juarez-day',
  countryCode: 'mx',
  slugs: { en: 'benito-juarez-day', fr: 'anniversaire-de-benito-juarez', es: 'natalicio-de-benito-juarez' },
  names: { en: 'Benito Juárez Birthday', fr: 'Anniversaire de Benito Juárez', es: 'Natalicio de Benito Juárez' },

  dateType: 'calculated',
  calculateDate: getBenitoJuarezBirthday,

  descriptions: {
    en: "Benito Juárez's Birthday honors Mexico's most beloved president and national hero, the first Indigenous president of a country in the Americas. Originally March 21, it is now observed on the third Monday of March.",
    fr: "L'anniversaire de Benito Juárez honore le président le plus aimé du Mexique et héros national, le premier président autochtone d'un pays des Amériques. Originellement le 21 mars, il est maintenant observé le troisième lundi de mars.",
    es: 'El Natalicio de Benito Juárez honra al presidente más querido de México y héroe nacional, el primer presidente indígena de un país en las Américas. Originalmente el 21 de marzo, ahora se observa el tercer lunes de marzo.',
  },

  history: {
    en: "Benito Pablo Juárez García was born on March 21, 1806, in San Pablo Guelatao, Oaxaca, to a Zapotec Indigenous family. Orphaned at age three, he rose from extreme poverty to become Mexico's president from 1858 to 1872.\n\nJuárez is remembered for defending Mexico against the French Intervention and overthrowing Emperor Maximilian I. He championed the Reform Laws (Leyes de Reforma) that separated Church and State, nationalized church property, and established civil marriage and freedom of religion.\n\nHis famous quote \"Entre los individuos, como entre las naciones, el respeto al derecho ajeno es la paz\" (Among individuals, as among nations, respect for the rights of others is peace) is inscribed in public buildings across Mexico and remains a foundational principle of Mexican diplomacy.",
    fr: "Benito Pablo Juárez García est né le 21 mars 1806 à San Pablo Guelatao, Oaxaca, dans une famille autochtone zapotèque. Orphelin à l'âge de trois ans, il est passé de l'extrême pauvreté à la présidence du Mexique de 1858 à 1872.\n\nJuárez est commémoré pour avoir défendu le Mexique contre l'Intervention française et renversé l'empereur Maximilien Ier. Il a défendu les Lois de Réforme (Leyes de Reforma) qui ont séparé l'Église et l'État, nationalisé les biens de l'Église et établi le mariage civil et la liberté de religion.\n\nSa célèbre citation « Entre les individus, comme entre les nations, le respect du droit d'autrui est la paix » est inscrite dans les bâtiments publics à travers le Mexique et reste un principe fondamental de la diplomatie mexicaine.",
    es: "Benito Pablo Juárez García nació el 21 de marzo de 1806 en San Pablo Guelatao, Oaxaca, en una familia indígena zapoteca. Huérfano a los tres años, ascendió desde la pobreza extrema hasta convertirse en presidente de México de 1858 a 1872.\n\nJuárez es recordado por defender a México contra la Intervención Francesa y derrocar al emperador Maximiliano I. Defendió las Leyes de Reforma que separaron la Iglesia del Estado, nacionalizaron los bienes eclesiásticos y establecieron el matrimonio civil y la libertad de culto.\n\nSu célebre frase «Entre los individuos, como entre las naciones, el respeto al derecho ajeno es la paz» está inscrita en edificios públicos de todo México y sigue siendo un principio fundamental de la diplomacia mexicana.",
  },

  traditions: {
    en: [
      'Civic ceremonies and wreath-laying at Juárez monuments and statues',
      'School assemblies with presentations about Juárez\'s life and legacy',
      'Pilgrimages to San Pablo Guelatao, Oaxaca, his birthplace',
      'Public recitations of his famous quote about peace and rights',
      'Cultural events celebrating Indigenous heritage and identity',
      'Long-weekend family travel across Mexico',
    ],
    fr: [
      'Cérémonies civiques et dépôts de gerbes aux monuments et statues de Juárez',
      'Assemblées scolaires avec des présentations sur la vie et l\'héritage de Juárez',
      'Pèlerinages à San Pablo Guelatao, Oaxaca, son lieu de naissance',
      'Récitations publiques de sa célèbre citation sur la paix et les droits',
      'Événements culturels célébrant l\'héritage et l\'identité autochtones',
      'Voyages familiaux de week-end prolongé à travers le Mexique',
    ],
    es: [
      'Ceremonias cívicas y ofrendas florales en monumentos y estatuas de Juárez',
      'Asambleas escolares con presentaciones sobre la vida y legado de Juárez',
      'Peregrinaciones a San Pablo Guelatao, Oaxaca, su lugar de nacimiento',
      'Recitaciones públicas de su célebre frase sobre la paz y los derechos',
      'Eventos culturales que celebran la herencia e identidad indígena',
      'Viajes familiares de fin de semana largo por México',
    ],
  },

  funFacts: {
    en: [
      'Benito Juárez was the first Indigenous head of state in the Americas, of Zapotec heritage from Oaxaca.',
      'He did not speak Spanish until he was 12 years old — his first language was Zapotec.',
      'Juárez served as president for 14 years, the longest-serving president in Mexican history.',
      'Abraham Lincoln reportedly called Juárez "the greatest man of the century" for his resistance to European intervention.',
      'The border city of Ciudad Juárez, Chihuahua, is named after him.',
    ],
    fr: [
      'Benito Juárez a été le premier chef d\'État autochtone des Amériques, d\'héritage zapotèque d\'Oaxaca.',
      'Il ne parlait pas espagnol avant l\'âge de 12 ans — sa langue maternelle était le zapotèque.',
      'Juárez a été président pendant 14 ans, le président le plus longtemps en fonction de l\'histoire du Mexique.',
      'Abraham Lincoln aurait appelé Juárez « le plus grand homme du siècle » pour sa résistance à l\'intervention européenne.',
      'La ville frontalière de Ciudad Juárez, Chihuahua, porte son nom.',
    ],
    es: [
      'Benito Juárez fue el primer jefe de Estado indígena de las Américas, de herencia zapoteca de Oaxaca.',
      'No habló español hasta los 12 años — su lengua materna era el zapoteco.',
      'Juárez sirvió como presidente durante 14 años, el presidente con mayor tiempo en el cargo en la historia de México.',
      'Se dice que Abraham Lincoln llamó a Juárez «el hombre más grande del siglo» por su resistencia a la intervención europea.',
      'La ciudad fronteriza de Ciudad Juárez, Chihuahua, lleva su nombre.',
    ],
  },

  planningChecklist: {
    en: [
      'Check the exact Monday date since it shifts each year',
      'Plan a long-weekend trip — this is one of Mexico\'s busiest travel weekends',
      'Visit Oaxaca to explore Juárez\'s birthplace and Zapotec culture',
      'Attend local civic ceremonies or parades honoring Juárez',
      'Book accommodations early as domestic tourism peaks during this bridge holiday',
    ],
    fr: [
      'Vérifier la date exacte du lundi car elle change chaque année',
      'Planifier un voyage de week-end prolongé — c\'est l\'un des week-ends de voyage les plus chargés du Mexique',
      'Visiter Oaxaca pour explorer le lieu de naissance de Juárez et la culture zapotèque',
      'Assister aux cérémonies civiques locales ou défilés en l\'honneur de Juárez',
      'Réserver l\'hébergement tôt car le tourisme intérieur atteint son apogée pendant ce pont',
    ],
    es: [
      'Verificar la fecha exacta del lunes ya que cambia cada año',
      'Planificar un viaje de fin de semana largo — es uno de los fines de semana de mayor afluencia turística en México',
      'Visitar Oaxaca para explorar el lugar de nacimiento de Juárez y la cultura zapoteca',
      'Asistir a ceremonias cívicas locales o desfiles en honor a Juárez',
      'Reservar hospedaje con anticipación ya que el turismo interno alcanza su punto máximo durante este puente',
    ],
  },

  relatedHolidays: ['mx_constitution-day', 'mx_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Benito Juárez Birthday {year} Mexico — Countdown & History',
      descriptionTemplate: 'When is Benito Juárez Birthday {year}? Live countdown, biography, and celebration guide for this Mexican national holiday.',
      keywords: ['Benito Juárez Birthday', 'Natalicio de Benito Juárez', 'Mexico holidays', 'March holiday Mexico', 'Mexican national hero'],
    },
    fr: {
      titleTemplate: 'Anniversaire de Benito Juárez {year} Mexique — Compte à rebours et histoire',
      descriptionTemplate: 'Quand est l\'anniversaire de Benito Juárez {year} ? Compte à rebours, biographie et guide de célébration pour ce jour férié mexicain.',
      keywords: ['Anniversaire Benito Juárez', 'Natalicio de Benito Juárez', 'jours fériés Mexique', 'jour férié mars Mexique', 'héros national mexicain'],
    },
    es: {
      titleTemplate: 'Natalicio de Benito Juárez {year} México — Cuenta regresiva e historia',
      descriptionTemplate: '¿Cuándo es el Natalicio de Benito Juárez {year}? Cuenta regresiva en vivo, biografía y guía de celebración de este día festivo nacional.',
      keywords: ['Natalicio de Benito Juárez', 'Benito Juárez cumpleaños', 'días festivos México', 'feriado marzo México', 'héroe nacional mexicano'],
    },
  },

  faq: [
    {
      question: { en: 'When is Benito Juárez Birthday {year}?', fr: 'Quand est l\'anniversaire de Benito Juárez {year} ?', es: '¿Cuándo es el Natalicio de Benito Juárez {year}?' },
      answer: {
        en: 'Benito Juárez Birthday {year} falls on {date} ({dayOfWeek}). It is observed on the third Monday of March.',
        fr: 'L\'anniversaire de Benito Juárez {year} tombe le {date} ({dayOfWeek}). Il est observé le troisième lundi de mars.',
        es: 'El Natalicio de Benito Juárez {year} cae el {date} ({dayOfWeek}). Se observa el tercer lunes de marzo.',
      },
    },
    {
      question: { en: 'Who was Benito Juárez?', fr: 'Qui était Benito Juárez ?', es: '¿Quién fue Benito Juárez?' },
      answer: {
        en: 'Benito Juárez (1806-1872) was a Zapotec lawyer and politician who served as President of Mexico for 14 years. He was the first Indigenous president of a country in the Americas and is celebrated for defending Mexico against the French Intervention.',
        fr: 'Benito Juárez (1806-1872) était un avocat et homme politique zapotèque qui a été président du Mexique pendant 14 ans. Il a été le premier président autochtone d\'un pays des Amériques et est célébré pour avoir défendu le Mexique contre l\'Intervention française.',
        es: 'Benito Juárez (1806-1872) fue un abogado y político zapoteca que sirvió como presidente de México durante 14 años. Fue el primer presidente indígena de un país en las Américas y es celebrado por defender a México contra la Intervención Francesa.',
      },
    },
    {
      question: { en: 'Why was the date moved to a Monday?', fr: 'Pourquoi la date a-t-elle été déplacée à un lundi ?', es: '¿Por qué se trasladó la fecha a un lunes?' },
      answer: {
        en: 'In 2006, Mexico reformed its holiday calendar to move certain holidays to Mondays, creating long weekends (fines de semana largos) to boost domestic tourism and family time.',
        fr: 'En 2006, le Mexique a réformé son calendrier de jours fériés pour déplacer certains jours fériés au lundi, créant des week-ends prolongés (fines de semana largos) pour stimuler le tourisme intérieur et le temps en famille.',
        es: 'En 2006, México reformó su calendario de días festivos para trasladar ciertos feriados al lunes, creando fines de semana largos para impulsar el turismo interno y el tiempo en familia.',
      },
    },
    {
      question: { en: "What is Juárez's most famous quote?", fr: 'Quelle est la citation la plus célèbre de Juárez ?', es: '¿Cuál es la frase más famosa de Juárez?' },
      answer: {
        en: '"Among individuals, as among nations, respect for the rights of others is peace" (Entre los individuos, como entre las naciones, el respeto al derecho ajeno es la paz).',
        fr: '« Entre les individus, comme entre les nations, le respect du droit d\'autrui est la paix » (Entre los individuos, como entre las naciones, el respeto al derecho ajeno es la paz).',
        es: '«Entre los individuos, como entre las naciones, el respeto al derecho ajeno es la paz.»',
      },
    },
  ],

  colorTheme: 'green-white-red',
  icon: '🏛️',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'mx_labour-day',
  countryCode: 'mx',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fête du Travail', es: 'Día del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a public holiday in Mexico honoring workers and their contributions. It is marked by union marches, political rallies, and a day of rest for workers across the country.",
    fr: "La Fête du Travail, le 1er mai, est un jour férié au Mexique en l'honneur des travailleurs et de leurs contributions. Elle est marquée par des marches syndicales, des rassemblements politiques et un jour de repos pour les travailleurs de tout le pays.",
    es: 'El Día del Trabajo, el 1 de mayo, es un día festivo en México en honor a los trabajadores y sus contribuciones. Se celebra con marchas sindicales, mítines políticos y un día de descanso para los trabajadores de todo el país.',
  },

  history: {
    en: "Mexico's Labour Day has its roots in the international workers' movement and the Haymarket affair of 1886 in Chicago. Mexico was one of the first countries to enshrine labor rights in its constitution — Article 123 of the 1917 Constitution established the eight-hour workday, the right to strike, and minimum wage.\n\nThe first official May Day march in Mexico took place in 1913, during the Mexican Revolution. Since then, Labour Day has become one of the most politically significant holidays in the country, with major unions organizing massive marches through Mexico City's Zócalo.\n\nHistorically, the Confederation of Mexican Workers (CTM) and other labor unions have used this day to present demands and celebrate workers' achievements. In recent years, independent unions have also organized their own marches to advocate for better working conditions.",
    fr: "La Fête du Travail au Mexique a ses racines dans le mouvement ouvrier international et l'affaire de Haymarket de 1886 à Chicago. Le Mexique a été l'un des premiers pays à consacrer les droits du travail dans sa constitution — l'article 123 de la Constitution de 1917 a établi la journée de travail de huit heures, le droit de grève et le salaire minimum.\n\nLa première marche officielle du 1er mai au Mexique a eu lieu en 1913, pendant la Révolution mexicaine. Depuis lors, la Fête du Travail est devenue l'un des jours fériés les plus politiquement significatifs du pays, avec des syndicats majeurs organisant des marches massives à travers le Zócalo de Mexico.\n\nHistoriquement, la Confédération des Travailleurs Mexicains (CTM) et d'autres syndicats ont utilisé cette journée pour présenter des revendications et célébrer les réalisations des travailleurs. Ces dernières années, des syndicats indépendants ont également organisé leurs propres marches.",
    es: "El Día del Trabajo en México tiene sus raíces en el movimiento obrero internacional y los sucesos de Haymarket de 1886 en Chicago. México fue uno de los primeros países en consagrar los derechos laborales en su constitución — el artículo 123 de la Constitución de 1917 estableció la jornada laboral de ocho horas, el derecho a huelga y el salario mínimo.\n\nLa primera marcha oficial del 1 de mayo en México tuvo lugar en 1913, durante la Revolución Mexicana. Desde entonces, el Día del Trabajo se ha convertido en uno de los días festivos más políticamente significativos del país, con grandes sindicatos organizando marchas masivas por el Zócalo de la Ciudad de México.\n\nHistóricamente, la Confederación de Trabajadores de México (CTM) y otros sindicatos han utilizado este día para presentar demandas y celebrar los logros de los trabajadores. En años recientes, sindicatos independientes también han organizado sus propias marchas para abogar por mejores condiciones laborales.",
  },

  traditions: {
    en: [
      'Large union marches through the Zócalo in Mexico City',
      'Political rallies and speeches by labor leaders',
      'Workers enjoying a day of rest with family',
      'Barbecues and family gatherings in parks',
      'Independent union demonstrations for workers\' rights',
    ],
    fr: [
      'Grandes marches syndicales à travers le Zócalo de Mexico',
      'Rassemblements politiques et discours des dirigeants syndicaux',
      'Travailleurs profitant d\'un jour de repos en famille',
      'Barbecues et réunions familiales dans les parcs',
      'Manifestations de syndicats indépendants pour les droits des travailleurs',
    ],
    es: [
      'Grandes marchas sindicales por el Zócalo de la Ciudad de México',
      'Mítines políticos y discursos de líderes sindicales',
      'Trabajadores disfrutando de un día de descanso con la familia',
      'Parrilladas y reuniones familiares en parques',
      'Manifestaciones de sindicatos independientes por los derechos laborales',
    ],
  },

  funFacts: {
    en: [
      'Mexico\'s 1917 Constitution was the first in the world to include comprehensive labor rights.',
      'The Zócalo march on May 1 can attract hundreds of thousands of participants.',
      'Article 123 of the Mexican Constitution guarantees workers the right to an eight-hour day, overtime pay, and a minimum wage.',
      'May 1 is not moved to a Monday in Mexico — it is always observed on the actual date.',
      'Mexico was instrumental in establishing International Workers\' Day as a global observance.',
    ],
    fr: [
      'La Constitution mexicaine de 1917 a été la première au monde à inclure des droits du travail complets.',
      'La marche du Zócalo le 1er mai peut attirer des centaines de milliers de participants.',
      'L\'article 123 de la Constitution mexicaine garantit aux travailleurs le droit à une journée de huit heures, la rémunération des heures supplémentaires et un salaire minimum.',
      'Le 1er mai n\'est pas déplacé à un lundi au Mexique — il est toujours observé à la date réelle.',
      'Le Mexique a été déterminant dans l\'établissement de la Journée internationale des travailleurs comme une observance mondiale.',
    ],
    es: [
      'La Constitución mexicana de 1917 fue la primera en el mundo en incluir derechos laborales integrales.',
      'La marcha del Zócalo el 1 de mayo puede atraer a cientos de miles de participantes.',
      'El artículo 123 de la Constitución mexicana garantiza a los trabajadores el derecho a una jornada de ocho horas, pago por horas extra y salario mínimo.',
      'El 1 de mayo no se traslada a un lunes en México — siempre se observa en la fecha real.',
      'México fue fundamental en el establecimiento del Día Internacional de los Trabajadores como una conmemoración mundial.',
    ],
  },

  planningChecklist: {
    en: [
      'Expect road closures in major cities due to marches and rallies',
      'Plan indoor activities or family outings away from protest areas',
      'Stock up on groceries as many shops may be closed',
      'Check public transportation schedules as routes may change',
      'Use the day off for a family barbecue or park outing',
    ],
    fr: [
      'Prévoir des fermetures de routes dans les grandes villes en raison des marches et rassemblements',
      'Planifier des activités intérieures ou des sorties familiales loin des zones de manifestation',
      'Faire le plein de courses car de nombreux commerces peuvent être fermés',
      'Vérifier les horaires des transports en commun car les itinéraires peuvent changer',
      'Profiter du jour de congé pour un barbecue en famille ou une sortie au parc',
    ],
    es: [
      'Esperar cierres viales en las principales ciudades debido a marchas y mítines',
      'Planificar actividades en interiores o paseos familiares lejos de las zonas de manifestación',
      'Abastecerse de víveres ya que muchos comercios pueden estar cerrados',
      'Verificar los horarios del transporte público ya que las rutas pueden cambiar',
      'Aprovechar el día libre para una parrillada familiar o una salida al parque',
    ],
  },

  relatedHolidays: ['mx_constitution-day', 'mx_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Mexico — Countdown & Guide',
      descriptionTemplate: 'When is Labour Day {year} in Mexico? Live countdown to May 1, history, marches, and celebration guide.',
      keywords: ['Labour Day Mexico', 'Día del Trabajo Mexico', 'May 1 Mexico', 'Mexican workers day', 'Mexico holidays May'],
    },
    fr: {
      titleTemplate: 'Fête du Travail {year} Mexique — Compte à rebours et guide',
      descriptionTemplate: 'Quand est la Fête du Travail {year} au Mexique ? Compte à rebours, histoire, marches et guide de célébration.',
      keywords: ['Fête du Travail Mexique', 'Día del Trabajo Mexique', '1er mai Mexique', 'journée des travailleurs Mexique', 'jours fériés Mexique mai'],
    },
    es: {
      titleTemplate: 'Día del Trabajo {year} México — Cuenta regresiva y guía',
      descriptionTemplate: '¿Cuándo es el Día del Trabajo {year} en México? Cuenta regresiva en vivo al 1 de mayo, historia, marchas y guía de celebración.',
      keywords: ['Día del Trabajo México', '1 de mayo México', 'marcha del trabajo México', 'día festivo mayo México', 'derechos laborales México'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Mexico?', fr: 'Quand est la Fête du Travail {year} au Mexique ?', es: '¿Cuándo es el Día del Trabajo {year} en México?' },
      answer: {
        en: 'Labour Day {year} in Mexico is on {date} ({dayOfWeek}). It is always May 1 and is not moved to a Monday.',
        fr: 'La Fête du Travail {year} au Mexique est le {date} ({dayOfWeek}). C\'est toujours le 1er mai et elle n\'est pas déplacée à un lundi.',
        es: 'El Día del Trabajo {year} en México es el {date} ({dayOfWeek}). Siempre es el 1 de mayo y no se traslada a un lunes.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Mexico?', fr: 'La Fête du Travail est-elle un jour férié au Mexique ?', es: '¿Es el Día del Trabajo un día festivo oficial en México?' },
      answer: {
        en: 'Yes, Labour Day is an official public holiday. Banks, government offices, schools, and most businesses are closed.',
        fr: 'Oui, la Fête du Travail est un jour férié officiel. Les banques, bureaux du gouvernement, écoles et la plupart des entreprises sont fermés.',
        es: 'Sí, el Día del Trabajo es un día festivo oficial. Los bancos, oficinas gubernamentales, escuelas y la mayoría de los negocios están cerrados.',
      },
    },
    {
      question: { en: 'What happens on Labour Day in Mexico?', fr: 'Que se passe-t-il pendant la Fête du Travail au Mexique ?', es: '¿Qué ocurre en el Día del Trabajo en México?' },
      answer: {
        en: 'Major labor unions organize marches through city centers, especially the Zócalo in Mexico City. Workers enjoy a day off and many families gather for barbecues and outings.',
        fr: 'Les grands syndicats organisent des marches à travers les centres-villes, en particulier le Zócalo de Mexico. Les travailleurs profitent d\'un jour de congé et de nombreuses familles se réunissent pour des barbecues et des sorties.',
        es: 'Los grandes sindicatos organizan marchas por los centros de las ciudades, especialmente el Zócalo de la Ciudad de México. Los trabajadores disfrutan de un día libre y muchas familias se reúnen para parrilladas y paseos.',
      },
    },
    {
      question: { en: 'Why is May 1 important for Mexican labor rights?', fr: 'Pourquoi le 1er mai est-il important pour les droits du travail au Mexique ?', es: '¿Por qué es importante el 1 de mayo para los derechos laborales en México?' },
      answer: {
        en: 'Mexico\'s 1917 Constitution was the first in the world to include comprehensive labor rights in Article 123, making May 1 a celebration of pioneering worker protections.',
        fr: 'La Constitution mexicaine de 1917 a été la première au monde à inclure des droits du travail complets dans l\'article 123, faisant du 1er mai une célébration des protections pionnières des travailleurs.',
        es: 'La Constitución mexicana de 1917 fue la primera en el mundo en incluir derechos laborales integrales en el artículo 123, haciendo del 1 de mayo una celebración de las protecciones pioneras para los trabajadores.',
      },
    },
  ],

  colorTheme: 'red-white',
  icon: '⚒️',
};

// ---------------------------------------------------------------------------
// Independence Day — September 16
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'mx_independence-day',
  countryCode: 'mx',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Indépendance", es: 'Día de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 9,
  fixedDay: 16,

  descriptions: {
    en: "Mexico's Independence Day on September 16 commemorates the Grito de Dolores of 1810, the call to arms that launched the Mexican War of Independence. The president reenacts the historic cry from the National Palace on the evening of September 15, followed by fireworks, food, and parades.",
    fr: "Le Jour de l'Indépendance du Mexique, le 16 septembre, commémore le Grito de Dolores de 1810, l'appel aux armes qui a lancé la guerre d'indépendance du Mexique. Le président reconstitue le cri historique depuis le Palais National le soir du 15 septembre, suivi de feux d'artifice, de nourriture et de défilés.",
    es: 'El Día de la Independencia de México, el 16 de septiembre, conmemora el Grito de Dolores de 1810, el llamado a las armas que inició la Guerra de Independencia de México. El presidente recrea el grito histórico desde el Palacio Nacional la noche del 15 de septiembre, seguido de fuegos artificiales, comida y desfiles.',
  },

  history: {
    en: "On September 16, 1810, Father Miguel Hidalgo y Costilla rang the church bell in the town of Dolores, Guanajuato, and issued his famous \"Grito de Dolores\" — a call for Mexico's independence from Spanish colonial rule. This act sparked the Mexican War of Independence, which lasted 11 years until Mexico achieved independence in 1821.\n\nHidalgo's army of Indigenous and mestizo followers grew rapidly, marching under the banner of the Virgin of Guadalupe. Although Hidalgo was captured and executed in 1811, his cry became the foundational moment of Mexican nationhood.\n\nEvery year on September 15, the President of Mexico reenacts the Grito from the balcony of the National Palace in Mexico City's Zócalo, ringing the same bell that Hidalgo used. The ceremony is broadcast nationwide and marks the beginning of the Independence Day celebrations.",
    fr: "Le 16 septembre 1810, le père Miguel Hidalgo y Costilla a sonné la cloche de l'église dans la ville de Dolores, Guanajuato, et a lancé son célèbre « Grito de Dolores » — un appel à l'indépendance du Mexique de la domination coloniale espagnole. Cet acte a déclenché la guerre d'indépendance du Mexique, qui a duré 11 ans jusqu'à ce que le Mexique obtienne son indépendance en 1821.\n\nL'armée de partisans autochtones et métis d'Hidalgo a grandi rapidement, marchant sous la bannière de la Vierge de Guadalupe. Bien qu'Hidalgo ait été capturé et exécuté en 1811, son cri est devenu le moment fondateur de la nation mexicaine.\n\nChaque année le 15 septembre, le Président du Mexique reconstitue le Grito depuis le balcon du Palais National sur le Zócalo de Mexico, sonnant la même cloche qu'Hidalgo a utilisée. La cérémonie est diffusée à l'échelle nationale et marque le début des célébrations du Jour de l'Indépendance.",
    es: "El 16 de septiembre de 1810, el padre Miguel Hidalgo y Costilla tocó la campana de la iglesia en el pueblo de Dolores, Guanajuato, y lanzó su famoso «Grito de Dolores» — un llamado a la independencia de México del dominio colonial español. Este acto desencadenó la Guerra de Independencia de México, que duró 11 años hasta que México logró su independencia en 1821.\n\nEl ejército de seguidores indígenas y mestizos de Hidalgo creció rápidamente, marchando bajo el estandarte de la Virgen de Guadalupe. Aunque Hidalgo fue capturado y ejecutado en 1811, su grito se convirtió en el momento fundacional de la nación mexicana.\n\nCada año el 15 de septiembre, el Presidente de México recrea el Grito desde el balcón del Palacio Nacional en el Zócalo de la Ciudad de México, tocando la misma campana que usó Hidalgo. La ceremonia se transmite a nivel nacional y marca el inicio de las celebraciones del Día de la Independencia.",
  },

  traditions: {
    en: [
      'Watching the presidential Grito ceremony on September 15 evening',
      'Shouting "¡Viva México!" in response to the president\'s call',
      'Fireworks displays across the country after the Grito',
      'Eating traditional foods — pozole, chiles en nogada, tamales, and tostadas',
      'Decorating homes, streets, and businesses in green, white, and red',
      'Military and civic parades on September 16',
      'Wearing traditional Mexican clothing — sombreros, rebozos, and charros suits',
    ],
    fr: [
      'Regarder la cérémonie présidentielle du Grito le soir du 15 septembre',
      'Crier « ¡Viva México! » en réponse à l\'appel du président',
      'Feux d\'artifice à travers le pays après le Grito',
      'Manger des plats traditionnels — pozole, chiles en nogada, tamales et tostadas',
      'Décorer les maisons, rues et commerces en vert, blanc et rouge',
      'Défilés militaires et civiques le 16 septembre',
      'Porter des vêtements traditionnels mexicains — sombreros, rebozos et tenues de charros',
    ],
    es: [
      'Ver la ceremonia presidencial del Grito la noche del 15 de septiembre',
      'Gritar «¡Viva México!» en respuesta al llamado del presidente',
      'Espectáculos de fuegos artificiales en todo el país después del Grito',
      'Comer platillos tradicionales — pozole, chiles en nogada, tamales y tostadas',
      'Decorar casas, calles y negocios con los colores verde, blanco y rojo',
      'Desfiles militares y cívicos el 16 de septiembre',
      'Usar ropa tradicional mexicana — sombreros, rebozos y trajes de charro',
    ],
  },

  funFacts: {
    en: [
      'The original bell that Hidalgo rang in 1810 now hangs above the main entrance of the National Palace in Mexico City.',
      'Chiles en nogada — a dish in the colors of the Mexican flag — was created to celebrate Mexican independence.',
      'The Grito ceremony on September 15 draws hundreds of thousands of people to the Zócalo each year.',
      'Mexico\'s Independence Day is often confused with Cinco de Mayo, which commemorates a different event entirely (the Battle of Puebla in 1862).',
      'Every governor in every Mexican state also reenacts the Grito from their local government palace on September 15.',
    ],
    fr: [
      'La cloche originale qu\'Hidalgo a sonnée en 1810 est maintenant suspendue au-dessus de l\'entrée principale du Palais National à Mexico.',
      'Les chiles en nogada — un plat aux couleurs du drapeau mexicain — ont été créés pour célébrer l\'indépendance du Mexique.',
      'La cérémonie du Grito le 15 septembre attire des centaines de milliers de personnes au Zócalo chaque année.',
      'Le Jour de l\'Indépendance du Mexique est souvent confondu avec le Cinco de Mayo, qui commémore un événement complètement différent (la Bataille de Puebla en 1862).',
      'Chaque gouverneur de chaque État mexicain reconstitue également le Grito depuis son palais du gouvernement local le 15 septembre.',
    ],
    es: [
      'La campana original que tocó Hidalgo en 1810 ahora cuelga sobre la entrada principal del Palacio Nacional en la Ciudad de México.',
      'Los chiles en nogada — un platillo con los colores de la bandera mexicana — fueron creados para celebrar la independencia de México.',
      'La ceremonia del Grito el 15 de septiembre atrae a cientos de miles de personas al Zócalo cada año.',
      'El Día de la Independencia de México suele confundirse con el Cinco de Mayo, que conmemora un evento completamente diferente (la Batalla de Puebla en 1862).',
      'Cada gobernador de cada estado mexicano también recrea el Grito desde su palacio de gobierno local el 15 de septiembre.',
    ],
  },

  planningChecklist: {
    en: [
      'Head to the Zócalo or your local town square for the Grito ceremony on September 15',
      'Prepare or order traditional Independence Day foods — pozole and chiles en nogada',
      'Decorate your home in green, white, and red',
      'Stock up on fireworks and Mexican flags',
      'Dress in traditional Mexican attire for the celebrations',
    ],
    fr: [
      'Se rendre au Zócalo ou sur la place de votre ville pour la cérémonie du Grito le 15 septembre',
      'Préparer ou commander des plats traditionnels du Jour de l\'Indépendance — pozole et chiles en nogada',
      'Décorer votre maison en vert, blanc et rouge',
      'Faire le plein de feux d\'artifice et de drapeaux mexicains',
      'S\'habiller en tenue traditionnelle mexicaine pour les célébrations',
    ],
    es: [
      'Ir al Zócalo o a la plaza de tu ciudad para la ceremonia del Grito el 15 de septiembre',
      'Preparar o pedir platillos tradicionales del Día de la Independencia — pozole y chiles en nogada',
      'Decorar tu hogar con los colores verde, blanco y rojo',
      'Abastecerse de fuegos artificiales y banderas mexicanas',
      'Vestirse con traje tradicional mexicano para las celebraciones',
    ],
  },

  relatedHolidays: ['mx_constitution-day', 'mx_benito-juarez-day', 'mx_day-of-the-dead'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Mexico — Countdown & Grito Guide',
      descriptionTemplate: 'When is Mexico Independence Day {year}? Live countdown to September 16, Grito ceremony info, traditions, and celebration guide.',
      keywords: ['Mexico Independence Day', 'Grito de Dolores', 'September 16 Mexico', 'Día de la Independencia', 'Mexican independence celebrations'],
    },
    fr: {
      titleTemplate: "Jour de l'Indépendance {year} Mexique — Compte à rebours et guide du Grito",
      descriptionTemplate: "Quand est le Jour de l'Indépendance {year} du Mexique ? Compte à rebours, cérémonie du Grito, traditions et guide de célébration.",
      keywords: ["Jour de l'Indépendance Mexique", 'Grito de Dolores', '16 septembre Mexique', "Día de la Independencia", 'célébrations indépendance mexicaine'],
    },
    es: {
      titleTemplate: 'Día de la Independencia {year} México — Cuenta regresiva y guía del Grito',
      descriptionTemplate: '¿Cuándo es el Día de la Independencia {year} de México? Cuenta regresiva al 16 de septiembre, ceremonia del Grito, tradiciones y guía.',
      keywords: ['Día de la Independencia México', 'Grito de Dolores', '16 de septiembre México', 'fiestas patrias México', 'celebraciones independencia mexicana'],
    },
  },

  faq: [
    {
      question: { en: 'When is Mexico Independence Day {year}?', fr: "Quand est le Jour de l'Indépendance {year} du Mexique ?", es: '¿Cuándo es el Día de la Independencia {year} de México?' },
      answer: {
        en: 'Mexico Independence Day {year} is on {date} ({dayOfWeek}). The celebrations begin the evening of September 15 with the Grito ceremony.',
        fr: "Le Jour de l'Indépendance {year} du Mexique est le {date} ({dayOfWeek}). Les célébrations commencent le soir du 15 septembre avec la cérémonie du Grito.",
        es: 'El Día de la Independencia {year} de México es el {date} ({dayOfWeek}). Las celebraciones comienzan la noche del 15 de septiembre con la ceremonia del Grito.',
      },
    },
    {
      question: { en: 'What is the Grito de Dolores?', fr: "Qu'est-ce que le Grito de Dolores ?", es: '¿Qué es el Grito de Dolores?' },
      answer: {
        en: "The Grito de Dolores was Father Miguel Hidalgo's call to arms on September 16, 1810, that launched Mexico's War of Independence. Each year, the president reenacts it from the National Palace.",
        fr: "Le Grito de Dolores était l'appel aux armes du père Miguel Hidalgo le 16 septembre 1810, qui a lancé la guerre d'indépendance du Mexique. Chaque année, le président le reconstitue depuis le Palais National.",
        es: 'El Grito de Dolores fue el llamado a las armas del padre Miguel Hidalgo el 16 de septiembre de 1810, que inició la Guerra de Independencia de México. Cada año, el presidente lo recrea desde el Palacio Nacional.',
      },
    },
    {
      question: { en: 'Is Mexican Independence Day the same as Cinco de Mayo?', fr: "Le Jour de l'Indépendance mexicain est-il le même que le Cinco de Mayo ?", es: '¿El Día de la Independencia mexicano es lo mismo que el Cinco de Mayo?' },
      answer: {
        en: 'No. Independence Day (September 16) celebrates the start of the independence movement in 1810. Cinco de Mayo (May 5) commemorates the Battle of Puebla in 1862, a military victory against France.',
        fr: "Non. Le Jour de l'Indépendance (16 septembre) célèbre le début du mouvement d'indépendance en 1810. Le Cinco de Mayo (5 mai) commémore la Bataille de Puebla en 1862, une victoire militaire contre la France.",
        es: 'No. El Día de la Independencia (16 de septiembre) celebra el inicio del movimiento de independencia en 1810. El Cinco de Mayo (5 de mayo) conmemora la Batalla de Puebla en 1862, una victoria militar contra Francia.',
      },
    },
    {
      question: { en: 'What foods are traditional on Mexico Independence Day?', fr: "Quels plats sont traditionnels pour le Jour de l'Indépendance du Mexique ?", es: '¿Qué platillos son tradicionales del Día de la Independencia de México?' },
      answer: {
        en: 'Traditional foods include pozole, chiles en nogada (stuffed peppers in walnut sauce with pomegranate), tamales, tostadas, and Mexican hot chocolate.',
        fr: 'Les plats traditionnels incluent le pozole, les chiles en nogada (poivrons farcis en sauce aux noix avec grenade), les tamales, les tostadas et le chocolat chaud mexicain.',
        es: 'Los platillos tradicionales incluyen pozole, chiles en nogada (chiles rellenos en salsa de nuez con granada), tamales, tostadas y chocolate caliente mexicano.',
      },
    },
  ],

  colorTheme: 'green-white-red',
  icon: '🇲🇽',
};

// ---------------------------------------------------------------------------
// Day of the Dead — November 2
// ---------------------------------------------------------------------------

const dayOfTheDead: HolidayData = {
  id: 'mx_day-of-the-dead',
  countryCode: 'mx',
  slugs: { en: 'day-of-the-dead', fr: 'jour-des-morts', es: 'dia-de-los-muertos' },
  names: { en: 'Day of the Dead', fr: 'Jour des Morts', es: 'Día de los Muertos' },

  dateType: 'fixed',
  fixedMonth: 11,
  fixedDay: 2,

  descriptions: {
    en: "Day of the Dead (Día de los Muertos) on November 2 is one of Mexico's most iconic celebrations, honoring deceased loved ones with ofrendas (altars), marigolds, sugar skulls, and visits to cemeteries. It is a UNESCO Intangible Cultural Heritage of Humanity.",
    fr: "Le Jour des Morts (Día de los Muertos), le 2 novembre, est l'une des célébrations les plus emblématiques du Mexique, honorant les proches décédés avec des ofrendas (autels), des soucis, des crânes en sucre et des visites aux cimetières. C'est un patrimoine culturel immatériel de l'humanité de l'UNESCO.",
    es: 'El Día de los Muertos, el 2 de noviembre, es una de las celebraciones más emblemáticas de México, honrando a los seres queridos fallecidos con ofrendas (altares), cempasúchil, calaveritas de azúcar y visitas a los cementerios. Es Patrimonio Cultural Inmaterial de la Humanidad de la UNESCO.',
  },

  history: {
    en: "Day of the Dead has roots in pre-Columbian Indigenous traditions stretching back over 3,000 years. The Aztecs, Maya, and other Mesoamerican civilizations held month-long celebrations honoring the dead, presided over by the goddess Mictecacíhuatl (Lady of the Dead).\n\nAfter the Spanish conquest, Catholic missionaries attempted to suppress these traditions but ultimately merged them with the Christian holidays of All Saints' Day (November 1) and All Souls' Day (November 2). The result was a uniquely Mexican celebration that blends Indigenous and Catholic elements.\n\nIn 2008, UNESCO inscribed the Indigenous festivity dedicated to the dead as an Intangible Cultural Heritage of Humanity, recognizing its cultural significance. Today, Day of the Dead is celebrated throughout Mexico and by Mexican communities worldwide.",
    fr: "Le Jour des Morts a ses racines dans les traditions autochtones précolombiennes remontant à plus de 3 000 ans. Les Aztèques, les Mayas et d'autres civilisations mésoaméricaines organisaient des célébrations d'un mois en l'honneur des morts, présidées par la déesse Mictecacíhuatl (Dame de la Mort).\n\nAprès la conquête espagnole, les missionnaires catholiques ont tenté de supprimer ces traditions mais les ont finalement fusionnées avec les fêtes chrétiennes de la Toussaint (1er novembre) et du Jour des Défunts (2 novembre). Le résultat est une célébration uniquement mexicaine qui mélange les éléments autochtones et catholiques.\n\nEn 2008, l'UNESCO a inscrit la fête autochtone dédiée aux morts comme patrimoine culturel immatériel de l'humanité, reconnaissant sa signification culturelle. Aujourd'hui, le Jour des Morts est célébré dans tout le Mexique et par les communautés mexicaines du monde entier.",
    es: "El Día de los Muertos tiene raíces en tradiciones indígenas precolombinas que se remontan a más de 3,000 años. Los aztecas, mayas y otras civilizaciones mesoamericanas celebraban festividades de un mes en honor a los muertos, presididas por la diosa Mictecacíhuatl (Señora de la Muerte).\n\nTras la conquista española, los misioneros católicos intentaron suprimir estas tradiciones pero finalmente las fusionaron con las festividades cristianas de Todos los Santos (1 de noviembre) y el Día de los Fieles Difuntos (2 de noviembre). El resultado fue una celebración únicamente mexicana que mezcla elementos indígenas y católicos.\n\nEn 2008, la UNESCO inscribió la festividad indígena dedicada a los muertos como Patrimonio Cultural Inmaterial de la Humanidad, reconociendo su significado cultural. Hoy, el Día de los Muertos se celebra en todo México y por las comunidades mexicanas de todo el mundo.",
  },

  traditions: {
    en: [
      'Building ofrendas (altars) with photos, candles, food, and personal items of the deceased',
      'Decorating with cempasúchil (marigolds), believed to guide spirits back to the living world',
      'Making and sharing calaveritas de azúcar (sugar skulls) with the names of the departed',
      'Visiting cemeteries to clean and decorate graves, often staying through the night',
      'Baking and sharing pan de muerto (bread of the dead)',
      'Writing literary calaveras — humorous poems mocking death',
      'Face painting with Catrina-inspired skull designs',
    ],
    fr: [
      'Construire des ofrendas (autels) avec des photos, des bougies, de la nourriture et des objets personnels du défunt',
      'Décorer avec du cempasúchil (soucis), censé guider les esprits vers le monde des vivants',
      'Fabriquer et partager des calaveritas de azúcar (crânes en sucre) avec les noms des défunts',
      'Visiter les cimetières pour nettoyer et décorer les tombes, restant souvent toute la nuit',
      'Cuisiner et partager du pan de muerto (pain des morts)',
      'Écrire des calaveras littéraires — des poèmes humoristiques se moquant de la mort',
      'Se maquiller le visage avec des designs de crânes inspirés de la Catrina',
    ],
    es: [
      'Montar ofrendas (altares) con fotos, velas, comida y objetos personales del difunto',
      'Decorar con cempasúchil (flor de muerto), que se cree guía a los espíritus de regreso al mundo de los vivos',
      'Elaborar y compartir calaveritas de azúcar con los nombres de los difuntos',
      'Visitar los cementerios para limpiar y decorar las tumbas, a menudo quedándose toda la noche',
      'Hornear y compartir pan de muerto',
      'Escribir calaveritas literarias — poemas humorísticos que se burlan de la muerte',
      'Pintarse el rostro con diseños de calavera inspirados en la Catrina',
    ],
  },

  funFacts: {
    en: [
      'La Catrina, the iconic skeleton figure, was originally created by artist José Guadalupe Posada in 1910 as political satire.',
      'Cempasúchil marigolds are called "the flower of the dead" — their strong scent is believed to attract the souls of the departed.',
      'In Mixquic, a neighborhood near Mexico City, thousands gather for one of the country\'s most traditional Day of the Dead celebrations.',
      'UNESCO inscribed Day of the Dead as an Intangible Cultural Heritage of Humanity in 2008.',
      'The Disney-Pixar film "Coco" (2017) brought worldwide attention to Day of the Dead traditions and became one of Mexico\'s highest-grossing films ever.',
    ],
    fr: [
      'La Catrina, la figure de squelette iconique, a été créée à l\'origine par l\'artiste José Guadalupe Posada en 1910 comme satire politique.',
      'Les soucis cempasúchil sont appelés « la fleur des morts » — leur forte odeur est censée attirer les âmes des défunts.',
      'À Mixquic, un quartier près de Mexico, des milliers de personnes se rassemblent pour l\'une des célébrations du Jour des Morts les plus traditionnelles du pays.',
      'L\'UNESCO a inscrit le Jour des Morts comme patrimoine culturel immatériel de l\'humanité en 2008.',
      'Le film Disney-Pixar « Coco » (2017) a attiré l\'attention mondiale sur les traditions du Jour des Morts et est devenu l\'un des films les plus rentables de l\'histoire du Mexique.',
    ],
    es: [
      'La Catrina, la icónica figura de calavera, fue creada originalmente por el artista José Guadalupe Posada en 1910 como sátira política.',
      'El cempasúchil es llamado «la flor de muerto» — su fuerte aroma se cree que atrae las almas de los difuntos.',
      'En Mixquic, un barrio cerca de la Ciudad de México, miles se reúnen para una de las celebraciones de Día de los Muertos más tradicionales del país.',
      'La UNESCO inscribió el Día de los Muertos como Patrimonio Cultural Inmaterial de la Humanidad en 2008.',
      'La película de Disney-Pixar «Coco» (2017) atrajo la atención mundial hacia las tradiciones del Día de los Muertos y se convirtió en una de las películas más taquilleras en la historia de México.',
    ],
  },

  planningChecklist: {
    en: [
      'Build an ofrenda with photos, candles, food, and belongings of your loved ones',
      'Buy cempasúchil marigolds and sugar skulls at local markets',
      'Bake or purchase pan de muerto from bakeries',
      'Plan a cemetery visit to decorate graves and honor the departed',
      'Visit Mixquic, Pátzcuaro, or Oaxaca for traditional celebrations',
    ],
    fr: [
      'Construire une ofrenda avec des photos, des bougies, de la nourriture et des objets de vos proches',
      'Acheter du cempasúchil et des crânes en sucre sur les marchés locaux',
      'Cuisiner ou acheter du pan de muerto dans les boulangeries',
      'Planifier une visite au cimetière pour décorer les tombes et honorer les défunts',
      'Visiter Mixquic, Pátzcuaro ou Oaxaca pour des célébrations traditionnelles',
    ],
    es: [
      'Montar una ofrenda con fotos, velas, comida y pertenencias de tus seres queridos',
      'Comprar cempasúchil y calaveritas de azúcar en los mercados locales',
      'Hornear o comprar pan de muerto en las panaderías',
      'Planificar una visita al cementerio para decorar las tumbas y honrar a los difuntos',
      'Visitar Mixquic, Pátzcuaro u Oaxaca para celebraciones tradicionales',
    ],
  },

  relatedHolidays: ['mx_independence-day', 'mx_christmas'],

  seo: {
    en: {
      titleTemplate: 'Day of the Dead {year} Mexico — Countdown & Traditions',
      descriptionTemplate: 'When is Day of the Dead {year}? Live countdown to November 2, ofrenda guide, traditions, and Día de los Muertos celebration tips.',
      keywords: ['Day of the Dead Mexico', 'Día de los Muertos', 'November 2 Mexico', 'Mexican ofrenda traditions', 'Day of the Dead countdown'],
    },
    fr: {
      titleTemplate: 'Jour des Morts {year} Mexique — Compte à rebours et traditions',
      descriptionTemplate: 'Quand est le Jour des Morts {year} ? Compte à rebours, guide des ofrendas, traditions et conseils pour le Día de los Muertos.',
      keywords: ['Jour des Morts Mexique', 'Día de los Muertos', '2 novembre Mexique', 'traditions ofrenda mexicaine', 'Jour des Morts compte à rebours'],
    },
    es: {
      titleTemplate: 'Día de los Muertos {year} México — Cuenta regresiva y tradiciones',
      descriptionTemplate: '¿Cuándo es el Día de los Muertos {year}? Cuenta regresiva al 2 de noviembre, guía de ofrendas, tradiciones y consejos de celebración.',
      keywords: ['Día de los Muertos México', 'Día de Muertos', '2 de noviembre México', 'tradiciones ofrenda', 'cuenta regresiva Día de Muertos'],
    },
  },

  faq: [
    {
      question: { en: 'When is Day of the Dead {year}?', fr: 'Quand est le Jour des Morts {year} ?', es: '¿Cuándo es el Día de los Muertos {year}?' },
      answer: {
        en: 'Day of the Dead {year} is on {date} ({dayOfWeek}). Celebrations typically span November 1 (for children) and November 2 (for adults).',
        fr: 'Le Jour des Morts {year} est le {date} ({dayOfWeek}). Les célébrations s\'étendent généralement du 1er novembre (pour les enfants) au 2 novembre (pour les adultes).',
        es: 'El Día de los Muertos {year} es el {date} ({dayOfWeek}). Las celebraciones generalmente abarcan el 1 de noviembre (para los niños) y el 2 de noviembre (para los adultos).',
      },
    },
    {
      question: { en: 'What is an ofrenda?', fr: "Qu'est-ce qu'une ofrenda ?", es: '¿Qué es una ofrenda?' },
      answer: {
        en: 'An ofrenda is a decorated altar built in homes or public spaces to honor the dead. It includes photos of the deceased, candles, marigolds, sugar skulls, pan de muerto, and their favorite foods and belongings.',
        fr: "Une ofrenda est un autel décoré construit dans les maisons ou les espaces publics pour honorer les morts. Elle comprend des photos du défunt, des bougies, des soucis, des crânes en sucre, du pan de muerto et leurs aliments et objets préférés.",
        es: 'Una ofrenda es un altar decorado que se monta en los hogares o espacios públicos para honrar a los muertos. Incluye fotos del difunto, velas, cempasúchil, calaveritas de azúcar, pan de muerto y sus alimentos y pertenencias favoritos.',
      },
    },
    {
      question: { en: 'Is Day of the Dead like Halloween?', fr: 'Le Jour des Morts est-il comme Halloween ?', es: '¿El Día de los Muertos es como Halloween?' },
      answer: {
        en: 'No, Day of the Dead is a celebration of life and remembrance, not fear. It honors deceased loved ones with joy, humor, and warmth, while Halloween focuses on spooky themes. They have completely different cultural origins.',
        fr: "Non, le Jour des Morts est une célébration de la vie et du souvenir, pas de la peur. Il honore les proches décédés avec joie, humour et chaleur, tandis qu'Halloween se concentre sur des thèmes effrayants. Ils ont des origines culturelles complètement différentes.",
        es: 'No, el Día de los Muertos es una celebración de la vida y el recuerdo, no del miedo. Honra a los seres queridos fallecidos con alegría, humor y calidez, mientras que Halloween se enfoca en temas de terror. Tienen orígenes culturales completamente diferentes.',
      },
    },
    {
      question: { en: 'Who is La Catrina?', fr: 'Qui est La Catrina ?', es: '¿Quién es La Catrina?' },
      answer: {
        en: 'La Catrina is an iconic skeleton figure created by Mexican artist José Guadalupe Posada in 1910 as a satirical image of Mexicans who adopted European fashions. She has become the most recognizable symbol of Day of the Dead.',
        fr: "La Catrina est une figure de squelette iconique créée par l'artiste mexicain José Guadalupe Posada en 1910 comme image satirique des Mexicains qui adoptaient les modes européennes. Elle est devenue le symbole le plus reconnaissable du Jour des Morts.",
        es: 'La Catrina es una icónica figura de calavera creada por el artista mexicano José Guadalupe Posada en 1910 como imagen satírica de los mexicanos que adoptaban las modas europeas. Se ha convertido en el símbolo más reconocible del Día de los Muertos.',
      },
    },
  ],

  colorTheme: 'orange-purple',
  icon: '💀',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'mx_christmas',
  countryCode: 'mx',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noël', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: "Christmas Day on December 25 is one of Mexico's most celebrated holidays. The season is marked by Las Posadas (December 16-24), piñatas, ponche (fruit punch), tamales, and family gatherings that blend Catholic and Indigenous traditions.",
    fr: "Le jour de Noël, le 25 décembre, est l'une des fêtes les plus célébrées du Mexique. La saison est marquée par Las Posadas (du 16 au 24 décembre), les piñatas, le ponche (punch aux fruits), les tamales et les réunions familiales qui mélangent les traditions catholiques et autochtones.",
    es: 'La Navidad, el 25 de diciembre, es una de las festividades más celebradas de México. La temporada está marcada por Las Posadas (del 16 al 24 de diciembre), piñatas, ponche, tamales y reuniones familiares que mezclan tradiciones católicas e indígenas.',
  },

  history: {
    en: "Christmas in Mexico is deeply rooted in the country's Catholic heritage, brought by Spanish missionaries in the 16th century. The tradition of Las Posadas, reenacting Mary and Joseph's search for lodging in Bethlehem, dates back to 1586 when Augustinian friar Diego de Soria received permission from Pope Sixtus V to hold Christmas masses outdoors.\n\nOver centuries, Indigenous traditions blended with Catholic observances, creating a uniquely Mexican Christmas season that spans from December 16 (the start of Las Posadas) through January 6 (Three Kings Day). The piñata, originally from China via Spain, was adopted by missionaries as a tool for evangelization — its seven points represented the seven deadly sins.\n\nToday, Mexican Christmas celebrations are among the longest and most elaborate in the world, combining religious devotion with family warmth, music, food, and colorful traditions.",
    fr: "Noël au Mexique est profondément enraciné dans l'héritage catholique du pays, apporté par les missionnaires espagnols au XVIe siècle. La tradition de Las Posadas, recréant la recherche d'un logement par Marie et Joseph à Bethléem, remonte à 1586 lorsque le frère augustin Diego de Soria a reçu la permission du pape Sixte V de tenir des messes de Noël en plein air.\n\nAu fil des siècles, les traditions autochtones se sont mélangées aux observances catholiques, créant une saison de Noël uniquement mexicaine qui s'étend du 16 décembre (début de Las Posadas) au 6 janvier (Jour des Rois). La piñata, originaire de Chine via l'Espagne, a été adoptée par les missionnaires comme outil d'évangélisation — ses sept pointes représentaient les sept péchés capitaux.\n\nAujourd'hui, les célébrations de Noël mexicaines sont parmi les plus longues et les plus élaborées au monde, combinant dévotion religieuse, chaleur familiale, musique, nourriture et traditions colorées.",
    es: "La Navidad en México está profundamente arraigada en la herencia católica del país, traída por misioneros españoles en el siglo XVI. La tradición de Las Posadas, que recrea la búsqueda de posada de María y José en Belén, se remonta a 1586 cuando el fraile agustino Diego de Soria recibió permiso del Papa Sixto V para celebrar misas de Navidad al aire libre.\n\nA lo largo de los siglos, las tradiciones indígenas se fusionaron con las observancias católicas, creando una temporada navideña únicamente mexicana que se extiende del 16 de diciembre (inicio de Las Posadas) al 6 de enero (Día de Reyes). La piñata, originaria de China vía España, fue adoptada por los misioneros como herramienta de evangelización — sus siete picos representaban los siete pecados capitales.\n\nHoy, las celebraciones navideñas mexicanas están entre las más largas y elaboradas del mundo, combinando devoción religiosa, calidez familiar, música, comida y tradiciones coloridas.",
  },

  traditions: {
    en: [
      'Celebrating Las Posadas from December 16 to 24 — processions reenacting Mary and Joseph\'s journey',
      'Breaking piñatas filled with fruit, candy, and peanuts',
      'Drinking ponche navideño (hot fruit punch with tejocotes, guavas, and cinnamon)',
      'Making and sharing tamales with family — a Christmas Eve staple',
      'Attending Misa de Gallo (Midnight Mass) on Christmas Eve',
      'Setting up nativity scenes (nacimientos) in homes and churches',
      'Exchanging gifts on Christmas Day or waiting for Three Kings Day on January 6',
    ],
    fr: [
      'Célébrer Las Posadas du 16 au 24 décembre — des processions recréant le voyage de Marie et Joseph',
      'Casser des piñatas remplies de fruits, de bonbons et de cacahuètes',
      'Boire du ponche navideño (punch chaud aux fruits avec tejocotes, goyaves et cannelle)',
      'Préparer et partager des tamales en famille — un incontournable du réveillon de Noël',
      'Assister à la Misa de Gallo (messe de minuit) le soir de Noël',
      'Installer des scènes de la Nativité (nacimientos) dans les maisons et les églises',
      'Échanger des cadeaux le jour de Noël ou attendre le Jour des Rois le 6 janvier',
    ],
    es: [
      'Celebrar Las Posadas del 16 al 24 de diciembre — procesiones que recrean el viaje de María y José',
      'Romper piñatas rellenas de fruta, dulces y cacahuates',
      'Beber ponche navideño (ponche caliente de frutas con tejocotes, guayabas y canela)',
      'Preparar y compartir tamales en familia — un imprescindible de la Nochebuena',
      'Asistir a la Misa de Gallo en Nochebuena',
      'Colocar nacimientos (escenas del pesebre) en hogares e iglesias',
      'Intercambiar regalos el día de Navidad o esperar al Día de Reyes el 6 de enero',
    ],
  },

  funFacts: {
    en: [
      'Las Posadas last nine nights (December 16-24), each representing one month of Mary\'s pregnancy.',
      'The traditional Mexican piñata has seven points, each representing one of the seven deadly sins.',
      'Many Mexican families eat tamales on Christmas Eve — millions are consumed across the country each year.',
      'In Mexico, many children receive gifts on January 6 (Three Kings Day) rather than Christmas Day.',
      'The poinsettia, Mexico\'s iconic Christmas flower, is called "Nochebuena" (Christmas Eve) in Spanish and originated in Mexico.',
    ],
    fr: [
      'Las Posadas durent neuf nuits (du 16 au 24 décembre), chacune représentant un mois de la grossesse de Marie.',
      'La piñata mexicaine traditionnelle a sept pointes, chacune représentant l\'un des sept péchés capitaux.',
      'De nombreuses familles mexicaines mangent des tamales le soir de Noël — des millions sont consommés chaque année dans tout le pays.',
      'Au Mexique, de nombreux enfants reçoivent des cadeaux le 6 janvier (Jour des Rois) plutôt que le jour de Noël.',
      'Le poinsettia, la fleur de Noël emblématique du Mexique, s\'appelle « Nochebuena » (réveillon de Noël) en espagnol et est originaire du Mexique.',
    ],
    es: [
      'Las Posadas duran nueve noches (del 16 al 24 de diciembre), cada una representando un mes del embarazo de María.',
      'La piñata mexicana tradicional tiene siete picos, cada uno representando uno de los siete pecados capitales.',
      'Muchas familias mexicanas comen tamales en Nochebuena — millones se consumen en todo el país cada año.',
      'En México, muchos niños reciben regalos el 6 de enero (Día de Reyes) en lugar del día de Navidad.',
      'La nochebuena (poinsettia), la flor navideña icónica de México, es originaria de México y lleva el nombre de la Nochebuena.',
    ],
  },

  planningChecklist: {
    en: [
      'Organize or attend Las Posadas processions in your neighborhood',
      'Prepare tamales for Christmas Eve — start early as it\'s a labor-intensive tradition',
      'Make ponche navideño with tejocotes, guavas, sugar cane, and cinnamon',
      'Set up your nacimiento (nativity scene) and Christmas decorations',
      'Buy piñatas and fillings for the Posadas celebrations',
    ],
    fr: [
      'Organiser ou assister aux processions de Las Posadas dans votre quartier',
      'Préparer des tamales pour le réveillon de Noël — commencez tôt car c\'est une tradition laborieuse',
      'Faire du ponche navideño avec des tejocotes, goyaves, canne à sucre et cannelle',
      'Installer votre nacimiento (crèche) et les décorations de Noël',
      'Acheter des piñatas et des garnitures pour les célébrations de Las Posadas',
    ],
    es: [
      'Organizar o asistir a las procesiones de Las Posadas en tu colonia',
      'Preparar tamales para Nochebuena — comenzar temprano ya que es una tradición laboriosa',
      'Hacer ponche navideño con tejocotes, guayabas, caña de azúcar y canela',
      'Colocar tu nacimiento y decoraciones navideñas',
      'Comprar piñatas y rellenos para las celebraciones de Las Posadas',
    ],
  },

  relatedHolidays: ['mx_new-years-day', 'mx_day-of-the-dead'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} Mexico — Countdown, Posadas & Traditions',
      descriptionTemplate: 'When is Christmas {year} in Mexico? Live countdown to December 25, Las Posadas guide, tamales, and Mexican Christmas traditions.',
      keywords: ['Christmas Mexico', 'Navidad Mexico', 'Las Posadas', 'Mexican Christmas traditions', 'tamales Christmas'],
    },
    fr: {
      titleTemplate: 'Noël {year} Mexique — Compte à rebours, Posadas et traditions',
      descriptionTemplate: 'Quand est Noël {year} au Mexique ? Compte à rebours, guide des Posadas, tamales et traditions de Noël mexicaines.',
      keywords: ['Noël Mexique', 'Navidad Mexique', 'Las Posadas', 'traditions Noël mexicain', 'tamales Noël'],
    },
    es: {
      titleTemplate: 'Navidad {year} México — Cuenta regresiva, Posadas y tradiciones',
      descriptionTemplate: '¿Cuándo es Navidad {year} en México? Cuenta regresiva al 25 de diciembre, guía de Las Posadas, tamales y tradiciones navideñas mexicanas.',
      keywords: ['Navidad México', 'Las Posadas México', 'tradiciones navideñas México', 'tamales Navidad', 'cuenta regresiva Navidad México'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Mexico?', fr: 'Quand est Noël {year} au Mexique ?', es: '¿Cuándo es Navidad {year} en México?' },
      answer: {
        en: 'Christmas {year} in Mexico is on {date} ({dayOfWeek}). Celebrations begin on December 16 with Las Posadas and continue through January 6 (Three Kings Day).',
        fr: 'Noël {year} au Mexique est le {date} ({dayOfWeek}). Les célébrations commencent le 16 décembre avec Las Posadas et se poursuivent jusqu\'au 6 janvier (Jour des Rois).',
        es: 'La Navidad {year} en México es el {date} ({dayOfWeek}). Las celebraciones comienzan el 16 de diciembre con Las Posadas y continúan hasta el 6 de enero (Día de Reyes).',
      },
    },
    {
      question: { en: 'What are Las Posadas?', fr: 'Que sont Las Posadas ?', es: '¿Qué son Las Posadas?' },
      answer: {
        en: 'Las Posadas are nine nights of processions (December 16-24) reenacting Mary and Joseph\'s search for lodging in Bethlehem. Neighbors go door to door singing traditional songs, ending each night with piñatas, ponche, and tamales.',
        fr: 'Las Posadas sont neuf nuits de processions (du 16 au 24 décembre) recréant la recherche de logement de Marie et Joseph à Bethléem. Les voisins vont de porte en porte en chantant des chansons traditionnelles, terminant chaque nuit avec des piñatas, du ponche et des tamales.',
        es: 'Las Posadas son nueve noches de procesiones (del 16 al 24 de diciembre) que recrean la búsqueda de posada de María y José en Belén. Los vecinos van de puerta en puerta cantando canciones tradicionales, terminando cada noche con piñatas, ponche y tamales.',
      },
    },
    {
      question: { en: 'Do Mexicans open gifts on Christmas or Three Kings Day?', fr: 'Les Mexicains ouvrent-ils les cadeaux à Noël ou le Jour des Rois ?', es: '¿Los mexicanos abren regalos en Navidad o en Día de Reyes?' },
      answer: {
        en: 'Traditionally, children received gifts on January 6 (Three Kings Day), but many modern Mexican families now also exchange gifts on Christmas Day, making both occasions special.',
        fr: 'Traditionnellement, les enfants recevaient des cadeaux le 6 janvier (Jour des Rois), mais de nombreuses familles mexicaines modernes échangent désormais aussi des cadeaux le jour de Noël, rendant les deux occasions spéciales.',
        es: 'Tradicionalmente, los niños recibían regalos el 6 de enero (Día de Reyes), pero muchas familias mexicanas modernas ahora también intercambian regalos el día de Navidad, haciendo ambas ocasiones especiales.',
      },
    },
    {
      question: { en: 'What is ponche navideño?', fr: 'Qu\'est-ce que le ponche navideño ?', es: '¿Qué es el ponche navideño?' },
      answer: {
        en: 'Ponche navideño is a hot fruit punch made with tejocotes, guavas, sugar cane, cinnamon, prunes, and apples. It is the quintessential Christmas drink in Mexico, served at every Posada.',
        fr: 'Le ponche navideño est un punch chaud aux fruits préparé avec des tejocotes, des goyaves, de la canne à sucre, de la cannelle, des pruneaux et des pommes. C\'est la boisson de Noël par excellence au Mexique, servie à chaque Posada.',
        es: 'El ponche navideño es una bebida caliente de frutas hecha con tejocotes, guayabas, caña de azúcar, canela, ciruelas pasas y manzanas. Es la bebida navideña por excelencia en México, servida en cada Posada.',
      },
    },
  ],

  colorTheme: 'red-green',
  icon: '🎄',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const mxHolidays: HolidayData[] = [
  newYearsDay,
  constitutionDay,
  benitoJuarezDay,
  labourDay,
  independenceDay,
  dayOfTheDead,
  christmas,
];

export default mxHolidays;
