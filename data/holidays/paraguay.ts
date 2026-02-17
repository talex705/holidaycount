/**
 * Paraguay holidays data.
 */

import type { HolidayData } from '@/lib/types';
import { getGoodFriday } from './_shared-dates';

// ---------------------------------------------------------------------------
// New Year's Day — January 1
// ---------------------------------------------------------------------------

const newYearsDay: HolidayData = {
  id: 'py_new-years-day',
  countryCode: 'py',
  slugs: { en: 'new-years-day', fr: 'jour-de-lan', es: 'ano-nuevo' },
  names: { en: "New Year's Day", fr: "Jour de l'An", es: 'Ano Nuevo' },

  dateType: 'fixed',
  fixedMonth: 1,
  fixedDay: 1,

  descriptions: {
    en: "New Year's Day on January 1 is a public holiday in Paraguay, celebrated with family gatherings, fireworks, and festive meals. Paraguayans welcome the new year with joy and traditions that reflect their warm, family-centered culture.",
    fr: "Le Jour de l'An, le 1er janvier, est un jour ferie au Paraguay, celebre avec des reunions familiales, des feux d'artifice et des repas festifs. Les Paraguayens accueillent la nouvelle annee avec joie et des traditions qui refletent leur culture chaleureuse et centree sur la famille.",
    es: 'El Ano Nuevo, el 1 de enero, es un dia festivo en Paraguay, celebrado con reuniones familiares, fuegos artificiales y comidas festivas. Los paraguayos reciben el nuevo ano con alegria y tradiciones que reflejan su calida cultura centrada en la familia.',
  },

  history: {
    en: "New Year's celebrations in Paraguay are deeply rooted in the country's strong family traditions and blend of Guarani indigenous and Spanish colonial heritage. The evening of December 31 is spent with family, sharing a large dinner that often features asado (grilled meats), sopa paraguaya, and chipa.\n\nAt midnight, Paraguayans set off fireworks, embrace their loved ones, and toast to the new year. Many follow Latin American traditions like eating twelve grapes at midnight and wearing colored underwear for luck.\n\nThe first day of January is typically a relaxed family day, with many Paraguayans recovering from the late-night celebrations. Families visit friends and relatives, share leftover food, and enjoy the summer weather, as Paraguay's New Year falls during the Southern Hemisphere summer.",
    fr: "Les celebrations du Nouvel An au Paraguay sont profondement enracinees dans les fortes traditions familiales du pays et le melange du patrimoine indigene guarani et colonial espagnol. La soiree du 31 decembre se passe en famille, partageant un grand diner qui comprend souvent de l'asado (viandes grillees), de la sopa paraguaya et du chipa.\n\nA minuit, les Paraguayens lancent des feux d'artifice, embrassent leurs proches et portent un toast a la nouvelle annee. Beaucoup suivent les traditions latino-americaines comme manger douze raisins a minuit et porter des sous-vetements colores pour la chance.\n\nLe premier jour de janvier est generalement une journee familiale detendue, de nombreux Paraguayens se remettant des celebrations de la nuit. Les familles rendent visite a des amis et des parents, partagent les restes de nourriture et profitent du temps estival, car le Nouvel An du Paraguay tombe pendant l'ete de l'hemisphere sud.",
    es: "Las celebraciones de Ano Nuevo en Paraguay estan profundamente arraigadas en las fuertes tradiciones familiares del pais y la mezcla del patrimonio indigena guarani y colonial espanol. La noche del 31 de diciembre se pasa en familia, compartiendo una gran cena que a menudo incluye asado, sopa paraguaya y chipa.\n\nA medianoche, los paraguayos lanzan fuegos artificiales, abrazan a sus seres queridos y brindan por el nuevo ano. Muchos siguen tradiciones latinoamericanas como comer doce uvas a medianoche y usar ropa interior de colores para la suerte.\n\nEl primer dia de enero es tipicamente un dia familiar relajado, con muchos paraguayos recuperandose de las celebraciones nocturnas. Las familias visitan amigos y parientes, comparten comida sobrante y disfrutan del clima veraniego, ya que el Ano Nuevo de Paraguay cae durante el verano del hemisferio sur.",
  },

  traditions: {
    en: [
      'Sharing a family dinner with asado, sopa paraguaya, and chipa',
      'Setting off fireworks and firecrackers at midnight',
      'Eating twelve grapes at midnight for good luck',
      'Wearing colored underwear — yellow for money, red for love',
      'Embracing family and friends at the stroke of midnight',
      'Visiting neighbors and friends on January 1',
    ],
    fr: [
      'Partager un diner familial avec asado, sopa paraguaya et chipa',
      "Tirer des feux d'artifice et des petards a minuit",
      'Manger douze raisins a minuit pour la bonne chance',
      "Porter des sous-vetements colores — jaune pour l'argent, rouge pour l'amour",
      'Embrasser la famille et les amis au coup de minuit',
      'Rendre visite aux voisins et amis le 1er janvier',
    ],
    es: [
      'Compartir una cena familiar con asado, sopa paraguaya y chipa',
      'Lanzar fuegos artificiales y petardos a medianoche',
      'Comer doce uvas a medianoche para la buena suerte',
      'Usar ropa interior de colores — amarilla para el dinero, roja para el amor',
      'Abrazar a familia y amigos al filo de la medianoche',
      'Visitar vecinos y amigos el 1 de enero',
    ],
  },

  funFacts: {
    en: [
      'Paraguay is one of the few bilingual nations in the Americas — both Spanish and Guarani are official languages, and Guarani greetings are common on New Year\'s.',
      'Sopa paraguaya, despite its name meaning "Paraguayan soup," is actually a cornbread — one of the most beloved national dishes.',
      'New Year\'s in Paraguay falls during the hottest time of year, with temperatures often exceeding 35 degrees Celsius.',
      'Paraguayan families often set off fireworks so enthusiastically that the sky over Asuncion is filled with light for hours around midnight.',
      'Terere (cold yerba mate) is the national drink and is enjoyed even during New Year celebrations to beat the summer heat.',
    ],
    fr: [
      'Le Paraguay est l\'un des rares pays bilingues des Ameriques — l\'espagnol et le guarani sont des langues officielles, et les salutations en guarani sont courantes au Nouvel An.',
      'La sopa paraguaya, malgre son nom signifiant "soupe paraguayenne", est en fait un pain de mais — l\'un des plats nationaux les plus aimes.',
      'Le Nouvel An au Paraguay tombe pendant la periode la plus chaude de l\'annee, avec des temperatures depassant souvent 35 degres Celsius.',
      "Les familles paraguayennes tirent souvent des feux d'artifice avec tant d'enthousiasme que le ciel au-dessus d'Asuncion est illumine pendant des heures autour de minuit.",
      "Le terere (mate froid) est la boisson nationale et est apprecie meme pendant les celebrations du Nouvel An pour combattre la chaleur estivale.",
    ],
    es: [
      'Paraguay es una de las pocas naciones bilingues de las Americas — tanto el espanol como el guarani son idiomas oficiales, y los saludos en guarani son comunes en Ano Nuevo.',
      'La sopa paraguaya, a pesar de que su nombre significa "sopa paraguaya", es en realidad un pan de maiz — uno de los platos nacionales mas queridos.',
      'El Ano Nuevo en Paraguay cae durante la epoca mas calurosa del ano, con temperaturas que a menudo superan los 35 grados Celsius.',
      'Las familias paraguayas a menudo lanzan fuegos artificiales con tanto entusiasmo que el cielo sobre Asuncion se llena de luz durante horas alrededor de la medianoche.',
      'El terere (mate frio) es la bebida nacional y se disfruta incluso durante las celebraciones de Ano Nuevo para combatir el calor veraniego.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan your family dinner menu with traditional Paraguayan dishes',
      'Stock up on fireworks, grapes, and celebration supplies',
      'Prepare for hot weather — have cold drinks and terere ready',
      'Arrange transportation as celebrations can affect road conditions',
      'Buy colored underwear for New Year\'s luck traditions',
    ],
    fr: [
      'Planifier le menu du diner familial avec des plats traditionnels paraguayens',
      "Faire le plein de feux d'artifice, de raisins et de fournitures de celebration",
      'Se preparer pour le temps chaud — avoir des boissons fraiches et du terere',
      'Organiser le transport car les celebrations peuvent affecter les conditions routieres',
      'Acheter des sous-vetements colores pour les traditions porte-bonheur du Nouvel An',
    ],
    es: [
      'Planificar el menu de la cena familiar con platos tradicionales paraguayos',
      'Abastecerse de fuegos artificiales, uvas y suministros de celebracion',
      'Prepararse para el clima caluroso — tener bebidas frias y terere listos',
      'Organizar el transporte ya que las celebraciones pueden afectar las condiciones de las carreteras',
      'Comprar ropa interior de colores para las tradiciones de suerte de Ano Nuevo',
    ],
  },

  relatedHolidays: ['py_christmas', 'py_independence-day'],

  seo: {
    en: {
      titleTemplate: "New Year's Day {year} Paraguay — Countdown & Guide",
      descriptionTemplate: "When is New Year's Day {year} in Paraguay? Live countdown to January 1, Paraguayan traditions, and celebration guide.",
      keywords: ["New Year's Day Paraguay", 'Ano Nuevo Paraguay', 'Paraguay New Year traditions', 'Paraguayan holidays', "New Year's countdown"],
    },
    fr: {
      titleTemplate: "Jour de l'An {year} Paraguay — Compte a rebours et guide",
      descriptionTemplate: "Quand est le Jour de l'An {year} au Paraguay ? Compte a rebours, traditions paraguayennes et guide de celebration.",
      keywords: ["Jour de l'An Paraguay", 'Nouvel An Paraguay', 'traditions paraguayennes', 'jours feries Paraguay', "compte a rebours Nouvel An"],
    },
    es: {
      titleTemplate: 'Ano Nuevo {year} Paraguay — Cuenta regresiva y guia',
      descriptionTemplate: 'Cuando es Ano Nuevo {year} en Paraguay? Cuenta regresiva al 1 de enero, tradiciones paraguayas y guia de celebracion.',
      keywords: ['Ano Nuevo Paraguay', 'feriados Paraguay', 'tradiciones paraguayas', 'dias festivos Paraguay', 'cuenta regresiva Ano Nuevo'],
    },
  },

  faq: [
    {
      question: { en: "When is New Year's Day {year} in Paraguay?", fr: "Quand est le Jour de l'An {year} au Paraguay ?", es: 'Cuando es Ano Nuevo {year} en Paraguay?' },
      answer: {
        en: "New Year's Day {year} in Paraguay is on {date}. It is always January 1 and is a national public holiday.",
        fr: "Le Jour de l'An {year} au Paraguay est le {date}. C'est toujours le 1er janvier et c'est un jour ferie national.",
        es: 'El Ano Nuevo {year} en Paraguay es el {date}. Siempre es el 1 de enero y es un dia festivo nacional.',
      },
    },
    {
      question: { en: 'What is sopa paraguaya?', fr: "Qu'est-ce que la sopa paraguaya ?", es: 'Que es la sopa paraguaya?' },
      answer: {
        en: 'Despite its name meaning "Paraguayan soup," sopa paraguaya is actually a savory cornbread made with corn flour, cheese, onions, eggs, and milk. It is one of Paraguay\'s most beloved national dishes and a staple at celebrations.',
        fr: 'Malgre son nom signifiant "soupe paraguayenne", la sopa paraguaya est en fait un pain de mais sale fait avec de la farine de mais, du fromage, des oignons, des oeufs et du lait. C\'est l\'un des plats nationaux les plus aimes du Paraguay et un incontournable des celebrations.',
        es: 'A pesar de que su nombre significa "sopa paraguaya", la sopa paraguaya es en realidad un pan de maiz salado hecho con harina de maiz, queso, cebolla, huevos y leche. Es uno de los platos nacionales mas queridos de Paraguay y un clasico de las celebraciones.',
      },
    },
    {
      question: { en: "Is New Year's Day a public holiday in Paraguay?", fr: "Le Jour de l'An est-il un jour ferie au Paraguay ?", es: 'Es Ano Nuevo un dia festivo en Paraguay?' },
      answer: {
        en: "Yes, January 1 is an official public holiday in Paraguay. Banks, government offices, and most businesses are closed.",
        fr: "Oui, le 1er janvier est un jour ferie officiel au Paraguay. Les banques, les bureaux gouvernementaux et la plupart des commerces sont fermes.",
        es: 'Si, el 1 de enero es un dia festivo oficial en Paraguay. Los bancos, las oficinas gubernamentales y la mayoria de los negocios estan cerrados.',
      },
    },
    {
      question: { en: 'What is terere?', fr: "Qu'est-ce que le terere ?", es: 'Que es el terere?' },
      answer: {
        en: 'Terere is Paraguay\'s national drink — cold yerba mate served with ice water or juice. Unlike hot mate common in Argentina and Uruguay, terere is served cold, making it perfect for Paraguay\'s hot climate. It was inscribed on UNESCO\'s Intangible Cultural Heritage list in 2020.',
        fr: 'Le terere est la boisson nationale du Paraguay — du mate froid servi avec de l\'eau glacee ou du jus. Contrairement au mate chaud courant en Argentine et en Uruguay, le terere est servi froid, ce qui le rend parfait pour le climat chaud du Paraguay. Il a ete inscrit sur la liste du patrimoine culturel immateriel de l\'UNESCO en 2020.',
        es: 'El terere es la bebida nacional de Paraguay — mate frio servido con agua helada o jugo. A diferencia del mate caliente comun en Argentina y Uruguay, el terere se sirve frio, haciendolo perfecto para el clima caluroso de Paraguay. Fue inscrito en la lista del Patrimonio Cultural Inmaterial de la UNESCO en 2020.',
      },
    },
  ],

  colorTheme: 'new-year',
  icon: '\ud83c\udf86',
};

// ---------------------------------------------------------------------------
// Heroes' Day — March 1
// ---------------------------------------------------------------------------

const heroesDay: HolidayData = {
  id: 'py_heroes-day',
  countryCode: 'py',
  slugs: { en: 'heroes-day', fr: 'jour-des-heros', es: 'dia-de-los-heroes' },
  names: { en: "Heroes' Day", fr: 'Jour des Heros', es: 'Dia de los Heroes' },

  dateType: 'fixed',
  fixedMonth: 3,
  fixedDay: 1,

  descriptions: {
    en: "Heroes' Day (Dia de los Heroes) on March 1 is one of Paraguay's most solemn national holidays, commemorating the end of the devastating War of the Triple Alliance (1864-1870) and honoring the heroism of Marshal Francisco Solano Lopez and all Paraguayans who perished in the conflict.",
    fr: "Le Jour des Heros (Dia de los Heroes) le 1er mars est l'un des jours feries nationaux les plus solennels du Paraguay, commemorant la fin de la devastatrice Guerre de la Triple Alliance (1864-1870) et honorant l'heroisme du Marechal Francisco Solano Lopez et de tous les Paraguayens qui ont peri dans le conflit.",
    es: 'El Dia de los Heroes, el 1 de marzo, es uno de los dias festivos nacionales mas solemnes de Paraguay, conmemorando el fin de la devastadora Guerra de la Triple Alianza (1864-1870) y honrando el heroismo del Mariscal Francisco Solano Lopez y todos los paraguayos que perecieron en el conflicto.',
  },

  history: {
    en: "The War of the Triple Alliance (1864-1870) was one of the most devastating conflicts in South American history. Paraguay fought alone against the combined forces of Brazil, Argentina, and Uruguay. Under the leadership of Marshal Francisco Solano Lopez, Paraguay suffered catastrophic losses — it is estimated that up to 90% of the male population perished.\n\nMarch 1 marks the date of the Battle of Cerro Cora in 1870, where Marshal Lopez was killed, effectively ending the war. The defeat was catastrophic: Paraguay lost approximately 60% of its total population and vast territorial lands to Brazil and Argentina.\n\nDespite the devastating outcome, Paraguayans honor this day as a testament to national courage and sacrifice. Marshal Lopez, once considered controversial, is now revered as the ultimate symbol of Paraguayan resistance and patriotism. The National Pantheon of Heroes in Asuncion, modeled after Les Invalides in Paris, serves as the centerpiece of the commemorations.",
    fr: "La Guerre de la Triple Alliance (1864-1870) a ete l'un des conflits les plus devastateurs de l'histoire sud-americaine. Le Paraguay a combattu seul contre les forces combinees du Bresil, de l'Argentine et de l'Uruguay. Sous la direction du Marechal Francisco Solano Lopez, le Paraguay a subi des pertes catastrophiques — on estime que jusqu'a 90% de la population masculine a peri.\n\nLe 1er mars marque la date de la Bataille de Cerro Cora en 1870, ou le Marechal Lopez a ete tue, mettant effectivement fin a la guerre. La defaite a ete catastrophique : le Paraguay a perdu environ 60% de sa population totale et de vastes territoires au profit du Bresil et de l'Argentine.\n\nMalgre le resultat devastateur, les Paraguayens honorent ce jour comme un temoignage du courage et du sacrifice nationaux. Le Marechal Lopez, autrefois considere comme controversee, est maintenant venere comme le symbole ultime de la resistance et du patriotisme paraguayens. Le Pantheon National des Heros a Asuncion, modele sur Les Invalides a Paris, sert de piece maitresse des commemorations.",
    es: "La Guerra de la Triple Alianza (1864-1870) fue uno de los conflictos mas devastadores de la historia sudamericana. Paraguay lucho solo contra las fuerzas combinadas de Brasil, Argentina y Uruguay. Bajo el liderazgo del Mariscal Francisco Solano Lopez, Paraguay sufrio perdidas catastroficas — se estima que hasta el 90% de la poblacion masculina perecio.\n\nEl 1 de marzo marca la fecha de la Batalla de Cerro Cora en 1870, donde el Mariscal Lopez fue asesinado, poniendo efectivamente fin a la guerra. La derrota fue catastrofica: Paraguay perdio aproximadamente el 60% de su poblacion total y vastos territorios a favor de Brasil y Argentina.\n\nA pesar del resultado devastador, los paraguayos honran este dia como testimonio del coraje y sacrificio nacional. El Mariscal Lopez, una vez considerado controversial, es ahora venerado como el simbolo maximo de la resistencia y el patriotismo paraguayo. El Panteon Nacional de los Heroes en Asuncion, modelado segun Les Invalides en Paris, sirve como pieza central de las conmemoraciones.",
  },

  traditions: {
    en: [
      'Laying wreaths at the National Pantheon of Heroes in Asuncion',
      'Attending solemn military ceremonies and parades',
      'Visiting the Cerro Cora National Park, site of the final battle',
      'Participating in school assemblies honoring national heroes',
      'Flying the Paraguayan flag at half-mast in remembrance',
      'Watching the presidential wreath-laying ceremony on television',
    ],
    fr: [
      'Deposer des couronnes au Pantheon National des Heros a Asuncion',
      'Assister a des ceremonies militaires solennelles et des defiles',
      'Visiter le Parc National de Cerro Cora, site de la derniere bataille',
      'Participer aux assemblees scolaires honorant les heros nationaux',
      'Hisser le drapeau paraguayen en berne en signe de souvenir',
      'Regarder la ceremonie presidentielle de depot de couronnes a la television',
    ],
    es: [
      'Colocar ofrendas florales en el Panteon Nacional de los Heroes en Asuncion',
      'Asistir a ceremonias militares solemnes y desfiles',
      'Visitar el Parque Nacional Cerro Cora, sitio de la batalla final',
      'Participar en actos escolares honrando a los heroes nacionales',
      'Izar la bandera paraguaya a media asta en remembranza',
      'Ver la ceremonia presidencial de ofrenda floral por television',
    ],
  },

  funFacts: {
    en: [
      'The War of the Triple Alliance was so devastating that Paraguay lost an estimated 60-90% of its male population.',
      'The National Pantheon of Heroes in Asuncion was inspired by Les Invalides in Paris and houses the remains of national heroes.',
      'Marshal Lopez\'s famous last words at Cerro Cora were reportedly "Muero con mi patria" (I die with my country).',
      'After the war, Paraguay was so depopulated that polygamy was unofficially practiced to help rebuild the population.',
      'Heroes\' Day is one of the few holidays in the world that commemorates a devastating military defeat rather than a victory.',
    ],
    fr: [
      "La Guerre de la Triple Alliance a ete si devastatrice que le Paraguay a perdu environ 60 a 90% de sa population masculine.",
      "Le Pantheon National des Heros a Asuncion a ete inspire par Les Invalides a Paris et abrite les restes des heros nationaux.",
      'Les dernieres paroles celebres du Marechal Lopez a Cerro Cora auraient ete "Muero con mi patria" (Je meurs avec ma patrie).',
      'Apres la guerre, le Paraguay etait si depopule que la polygamie etait officieusement pratiquee pour aider a reconstruire la population.',
      'Le Jour des Heros est l\'un des rares jours feries au monde qui commemore une defaite militaire devastatrice plutot qu\'une victoire.',
    ],
    es: [
      'La Guerra de la Triple Alianza fue tan devastadora que Paraguay perdio un estimado del 60-90% de su poblacion masculina.',
      'El Panteon Nacional de los Heroes en Asuncion fue inspirado por Les Invalides en Paris y alberga los restos de heroes nacionales.',
      'Las famosas ultimas palabras del Mariscal Lopez en Cerro Cora fueron supuestamente "Muero con mi patria".',
      'Despues de la guerra, Paraguay estaba tan despoblado que la poligamia se practicaba extraoficialmente para ayudar a reconstruir la poblacion.',
      'El Dia de los Heroes es uno de los pocos dias festivos en el mundo que conmemora una derrota militar devastadora en lugar de una victoria.',
    ],
  },

  planningChecklist: {
    en: [
      'Visit the National Pantheon of Heroes in Asuncion for the wreath-laying ceremony',
      'Attend local memorial events and school assemblies',
      'Learn about the War of the Triple Alliance and its impact on Paraguay',
      'Display the Paraguayan flag in remembrance',
      'Plan a visit to Cerro Cora National Park if in the northeast',
    ],
    fr: [
      'Visiter le Pantheon National des Heros a Asuncion pour la ceremonie de depot de couronnes',
      'Assister aux evenements commemoratifs locaux et assemblees scolaires',
      'Decouvrir la Guerre de la Triple Alliance et son impact sur le Paraguay',
      'Afficher le drapeau paraguayen en signe de souvenir',
      'Planifier une visite au Parc National de Cerro Cora si vous etes dans le nord-est',
    ],
    es: [
      'Visitar el Panteon Nacional de los Heroes en Asuncion para la ceremonia de ofrenda floral',
      'Asistir a eventos conmemorativos locales y actos escolares',
      'Aprender sobre la Guerra de la Triple Alianza y su impacto en Paraguay',
      'Exhibir la bandera paraguaya en remembranza',
      'Planificar una visita al Parque Nacional Cerro Cora si esta en el noreste',
    ],
  },

  relatedHolidays: ['py_independence-day', 'py_good-friday'],

  seo: {
    en: {
      titleTemplate: "Heroes' Day {year} Paraguay — Countdown & History",
      descriptionTemplate: "When is Heroes' Day {year} in Paraguay? Live countdown to March 1, history of the Triple Alliance War, and commemoration guide.",
      keywords: ["Heroes' Day Paraguay", 'Dia de los Heroes', 'March 1 Paraguay', 'Triple Alliance War', 'Paraguay holidays'],
    },
    fr: {
      titleTemplate: 'Jour des Heros {year} Paraguay — Compte a rebours et histoire',
      descriptionTemplate: 'Quand est le Jour des Heros {year} au Paraguay ? Compte a rebours, histoire de la Guerre de la Triple Alliance et guide.',
      keywords: ['Jour des Heros Paraguay', 'Dia de los Heroes', '1er mars Paraguay', 'Guerre Triple Alliance', 'jours feries Paraguay'],
    },
    es: {
      titleTemplate: 'Dia de los Heroes {year} Paraguay — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de los Heroes {year} en Paraguay? Cuenta regresiva al 1 de marzo, historia de la Guerra de la Triple Alianza y guia.',
      keywords: ['Dia de los Heroes Paraguay', '1 de marzo Paraguay', 'Guerra de la Triple Alianza', 'feriados Paraguay', 'heroes paraguayos'],
    },
  },

  faq: [
    {
      question: { en: "When is Heroes' Day {year} in Paraguay?", fr: 'Quand est le Jour des Heros {year} au Paraguay ?', es: 'Cuando es el Dia de los Heroes {year} en Paraguay?' },
      answer: {
        en: "Heroes' Day {year} in Paraguay is on {date}. It is always March 1.",
        fr: "Le Jour des Heros {year} au Paraguay est le {date}. C'est toujours le 1er mars.",
        es: 'El Dia de los Heroes {year} en Paraguay es el {date}. Siempre es el 1 de marzo.',
      },
    },
    {
      question: { en: 'What was the War of the Triple Alliance?', fr: "Qu'est-ce que la Guerre de la Triple Alliance ?", es: 'Que fue la Guerra de la Triple Alianza?' },
      answer: {
        en: 'The War of the Triple Alliance (1864-1870) was a devastating conflict in which Paraguay fought against the combined forces of Brazil, Argentina, and Uruguay. It was the deadliest war in South American history, with Paraguay losing an estimated 60-90% of its male population.',
        fr: "La Guerre de la Triple Alliance (1864-1870) a ete un conflit devastateur au cours duquel le Paraguay a combattu contre les forces combinees du Bresil, de l'Argentine et de l'Uruguay. C'est la guerre la plus meurtriere de l'histoire sud-americaine, le Paraguay ayant perdu environ 60 a 90% de sa population masculine.",
        es: 'La Guerra de la Triple Alianza (1864-1870) fue un conflicto devastador en el cual Paraguay lucho contra las fuerzas combinadas de Brasil, Argentina y Uruguay. Fue la guerra mas mortifica de la historia sudamericana, con Paraguay perdiendo un estimado del 60-90% de su poblacion masculina.',
      },
    },
    {
      question: { en: "Is Heroes' Day a public holiday?", fr: 'Le Jour des Heros est-il un jour ferie ?', es: 'Es el Dia de los Heroes un dia festivo?' },
      answer: {
        en: "Yes, March 1 is an official public holiday in Paraguay. It is one of the most important commemorative dates in the national calendar.",
        fr: "Oui, le 1er mars est un jour ferie officiel au Paraguay. C'est l'une des dates commemoratives les plus importantes du calendrier national.",
        es: 'Si, el 1 de marzo es un dia festivo oficial en Paraguay. Es una de las fechas conmemorativas mas importantes del calendario nacional.',
      },
    },
    {
      question: { en: 'Who was Marshal Francisco Solano Lopez?', fr: 'Qui etait le Marechal Francisco Solano Lopez ?', es: 'Quien fue el Mariscal Francisco Solano Lopez?' },
      answer: {
        en: "Marshal Francisco Solano Lopez was the president of Paraguay who led the country during the War of the Triple Alliance. He died at the Battle of Cerro Cora on March 1, 1870, reportedly saying 'I die with my country.' He is now considered Paraguay's greatest national hero.",
        fr: "Le Marechal Francisco Solano Lopez etait le president du Paraguay qui a dirige le pays pendant la Guerre de la Triple Alliance. Il est mort a la Bataille de Cerro Cora le 1er mars 1870, disant reputement 'Je meurs avec ma patrie'. Il est maintenant considere comme le plus grand heros national du Paraguay.",
        es: "El Mariscal Francisco Solano Lopez fue el presidente de Paraguay que dirigio el pais durante la Guerra de la Triple Alianza. Murio en la Batalla de Cerro Cora el 1 de marzo de 1870, supuestamente diciendo 'Muero con mi patria'. Ahora es considerado el mas grande heroe nacional de Paraguay.",
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\udf96\ufe0f',
};

// ---------------------------------------------------------------------------
// Good Friday
// ---------------------------------------------------------------------------

const goodFriday: HolidayData = {
  id: 'py_good-friday',
  countryCode: 'py',
  slugs: { en: 'good-friday', fr: 'vendredi-saint', es: 'viernes-santo' },
  names: { en: 'Good Friday', fr: 'Vendredi Saint', es: 'Viernes Santo' },

  dateType: 'calculated',
  calculateDate: getGoodFriday,

  descriptions: {
    en: 'Good Friday (Viernes Santo) is a deeply revered public holiday in Paraguay, marking the crucifixion of Jesus Christ. Paraguayans observe the day with solemn church services, religious processions, fasting, and family prayer.',
    fr: 'Le Vendredi Saint (Viernes Santo) est un jour ferie profondement revere au Paraguay, marquant la crucifixion de Jesus-Christ. Les Paraguayens observent la journee avec des services religieux solennels, des processions, le jeune et la priere en famille.',
    es: 'El Viernes Santo es un dia festivo profundamente reverenciado en Paraguay, marcando la crucifixion de Jesucristo. Los paraguayos observan el dia con servicios religiosos solemnes, procesiones, ayuno y oracion en familia.',
  },

  history: {
    en: "Good Friday holds deep significance in Paraguay, a nation with strong Catholic traditions. Over 85% of Paraguayans identify as Catholic, and Holy Week (Semana Santa) is one of the most important religious observances in the country.\n\nThe tradition of Semana Santa in Paraguay dates back to the Jesuit missions that evangelized the Guarani people in the 17th and 18th centuries. The Jesuits established elaborate religious observances that blended European Catholic practices with indigenous Guarani culture, creating a unique spiritual tradition that continues today.\n\nGood Friday in Paraguay is marked by strict observance. Many businesses close for the entire Holy Week, and Paraguayans attend multiple church services, participate in Stations of the Cross processions, and abstain from meat. The city of Tanarandy in the Misiones department is famous for its Holy Week celebrations that combine art, music, and religious devotion.",
    fr: "Le Vendredi Saint a une profonde signification au Paraguay, une nation aux fortes traditions catholiques. Plus de 85% des Paraguayens s'identifient comme catholiques, et la Semaine Sainte (Semana Santa) est l'une des observances religieuses les plus importantes du pays.\n\nLa tradition de la Semana Santa au Paraguay remonte aux missions jesuites qui ont evangelise les Guaranis aux XVIIe et XVIIIe siecles. Les jesuites ont etabli des observances religieuses elaborees qui melangeaient les pratiques catholiques europeennes avec la culture indigene guarani, creant une tradition spirituelle unique qui se poursuit aujourd'hui.\n\nLe Vendredi Saint au Paraguay est marque par une stricte observance. De nombreuses entreprises ferment pendant toute la Semaine Sainte, et les Paraguayens assistent a plusieurs services religieux, participent aux processions du Chemin de Croix et s'abstiennent de viande. La ville de Tanarandy dans le departement de Misiones est celebre pour ses celebrations de la Semaine Sainte qui combinent art, musique et devotion religieuse.",
    es: "El Viernes Santo tiene una profunda significacion en Paraguay, una nacion con fuertes tradiciones catolicas. Mas del 85% de los paraguayos se identifican como catolicos, y la Semana Santa es una de las observancias religiosas mas importantes del pais.\n\nLa tradicion de la Semana Santa en Paraguay se remonta a las misiones jesuitas que evangelizaron al pueblo guarani en los siglos XVII y XVIII. Los jesuitas establecieron elaboradas observancias religiosas que mezclaban las practicas catolicas europeas con la cultura indigena guarani, creando una tradicion espiritual unica que continua hoy.\n\nEl Viernes Santo en Paraguay se marca con estricta observancia. Muchos negocios cierran durante toda la Semana Santa, y los paraguayos asisten a multiples servicios religiosos, participan en procesiones del Via Crucis y se abstienen de carne. La ciudad de Tanarandy en el departamento de Misiones es famosa por sus celebraciones de Semana Santa que combinan arte, musica y devocion religiosa.",
  },

  traditions: {
    en: [
      'Attending Stations of the Cross processions through city streets',
      'Fasting and abstaining from meat throughout the day',
      'Participating in solemn church services and Masses',
      'Visiting the artistic Holy Week celebrations in Tanarandy',
      'Preparing and eating fish-based dishes and chipa',
      'Spending quiet time in family prayer and reflection',
    ],
    fr: [
      'Assister aux processions du Chemin de Croix dans les rues de la ville',
      "Jeuner et s'abstenir de viande tout au long de la journee",
      'Participer a des services religieux et messes solennels',
      'Visiter les celebrations artistiques de la Semaine Sainte a Tanarandy',
      'Preparer et manger des plats a base de poisson et du chipa',
      'Passer du temps calme en priere et reflexion familiale',
    ],
    es: [
      'Asistir a procesiones del Via Crucis por las calles de la ciudad',
      'Ayunar y abstenerse de carne durante todo el dia',
      'Participar en servicios religiosos y misas solemnes',
      'Visitar las celebraciones artisticas de Semana Santa en Tanarandy',
      'Preparar y comer platos a base de pescado y chipa',
      'Pasar tiempo tranquilo en oracion y reflexion familiar',
    ],
  },

  funFacts: {
    en: [
      'Tanarandy\'s Holy Week celebration features an illuminated path of over 3,000 candles and torches, creating a mystical atmosphere.',
      'Chipa, a cheese bread made from cassava starch, is the quintessential Holy Week food in Paraguay and is consumed in enormous quantities.',
      'Paraguay\'s Semana Santa is so strictly observed that most entertainment venues, bars, and nightclubs close from Holy Thursday through Easter Sunday.',
      'The Jesuit missions of Paraguay (Misiones) are UNESCO World Heritage Sites and are popular destinations during Holy Week.',
      'Many Paraguayan families make a pilgrimage to the Virgin of Caacupe during the Easter season.',
    ],
    fr: [
      'La celebration de la Semaine Sainte a Tanarandy presente un chemin illumine de plus de 3 000 bougies et torches, creant une atmosphere mystique.',
      'Le chipa, un pain au fromage fait de fecule de manioc, est l\'aliment par excellence de la Semaine Sainte au Paraguay et est consomme en enormes quantites.',
      'La Semana Santa au Paraguay est si strictement observee que la plupart des lieux de divertissement, bars et boites de nuit ferment du Jeudi Saint au dimanche de Paques.',
      'Les missions jesuites du Paraguay (Misiones) sont des sites du patrimoine mondial de l\'UNESCO et sont des destinations populaires pendant la Semaine Sainte.',
      'De nombreuses familles paraguayennes font un pelerinage a la Vierge de Caacupe pendant la saison de Paques.',
    ],
    es: [
      'La celebracion de Semana Santa en Tanarandy presenta un camino iluminado de mas de 3.000 velas y antorchas, creando una atmosfera mistica.',
      'La chipa, un pan de queso hecho de almidon de mandioca, es el alimento por excelencia de la Semana Santa en Paraguay y se consume en enormes cantidades.',
      'La Semana Santa en Paraguay se observa tan estrictamente que la mayoria de los lugares de entretenimiento, bares y discotecas cierran desde el Jueves Santo hasta el Domingo de Pascua.',
      'Las misiones jesuitas de Paraguay (Misiones) son Patrimonio de la Humanidad de la UNESCO y son destinos populares durante la Semana Santa.',
      'Muchas familias paraguayas hacen una peregrinacion a la Virgen de Caacupe durante la temporada de Pascua.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan to attend Stations of the Cross processions in your city',
      'Stock up on chipa and fish for Good Friday meals',
      'Visit Tanarandy for the artistic Holy Week celebrations',
      'Be aware that most businesses and entertainment venues will be closed',
      'Plan travel early as many Paraguayans travel during Semana Santa',
    ],
    fr: [
      'Planifier d\'assister aux processions du Chemin de Croix dans votre ville',
      'Faire le plein de chipa et de poisson pour les repas du Vendredi Saint',
      'Visiter Tanarandy pour les celebrations artistiques de la Semaine Sainte',
      'Savoir que la plupart des commerces et lieux de divertissement seront fermes',
      'Planifier les voyages tot car de nombreux Paraguayens voyagent pendant la Semana Santa',
    ],
    es: [
      'Planificar asistir a las procesiones del Via Crucis en su ciudad',
      'Abastecerse de chipa y pescado para las comidas del Viernes Santo',
      'Visitar Tanarandy para las celebraciones artisticas de Semana Santa',
      'Tener en cuenta que la mayoria de los negocios y lugares de entretenimiento estaran cerrados',
      'Planificar viajes temprano ya que muchos paraguayos viajan durante la Semana Santa',
    ],
  },

  relatedHolidays: ['py_heroes-day', 'py_christmas'],

  seo: {
    en: {
      titleTemplate: 'Good Friday {year} Paraguay — Date, Countdown & Info',
      descriptionTemplate: 'When is Good Friday {year} in Paraguay? Live countdown, Holy Week traditions, Tanarandy celebrations, and observance guide.',
      keywords: ['Good Friday Paraguay', 'Viernes Santo Paraguay', 'Holy Week Paraguay', 'Semana Santa Paraguay', 'Paraguay holidays'],
    },
    fr: {
      titleTemplate: 'Vendredi Saint {year} Paraguay — Date, compte a rebours et info',
      descriptionTemplate: 'Quand est le Vendredi Saint {year} au Paraguay ? Compte a rebours, traditions de la Semaine Sainte, celebrations de Tanarandy et guide.',
      keywords: ['Vendredi Saint Paraguay', 'Semaine Sainte Paraguay', 'Viernes Santo', 'jours feries Paraguay', 'Paques Paraguay'],
    },
    es: {
      titleTemplate: 'Viernes Santo {year} Paraguay — Fecha, cuenta regresiva e info',
      descriptionTemplate: 'Cuando es el Viernes Santo {year} en Paraguay? Cuenta regresiva, tradiciones de Semana Santa, celebraciones de Tanarandy y guia.',
      keywords: ['Viernes Santo Paraguay', 'Semana Santa Paraguay', 'feriados Paraguay', 'Tanarandy', 'Pascua Paraguay'],
    },
  },

  faq: [
    {
      question: { en: 'When is Good Friday {year} in Paraguay?', fr: 'Quand est le Vendredi Saint {year} au Paraguay ?', es: 'Cuando es el Viernes Santo {year} en Paraguay?' },
      answer: {
        en: 'Good Friday {year} in Paraguay falls on {date}. It is always the Friday before Easter Sunday and its date changes each year.',
        fr: "Le Vendredi Saint {year} au Paraguay tombe le {date}. C'est toujours le vendredi avant le dimanche de Paques et sa date change chaque annee.",
        es: 'El Viernes Santo {year} en Paraguay cae el {date}. Siempre es el viernes antes del Domingo de Pascua y su fecha cambia cada ano.',
      },
    },
    {
      question: { en: 'What is Tanarandy?', fr: "Qu'est-ce que Tanarandy ?", es: 'Que es Tanarandy?' },
      answer: {
        en: 'Tanarandy is a small town in the Misiones department of Paraguay, famous for its unique Holy Week celebrations that combine art, music, and religious devotion. The path of 3,000+ candles and torches on Good Friday creates a magical, mystical atmosphere.',
        fr: "Tanarandy est une petite ville du departement de Misiones au Paraguay, celebre pour ses celebrations uniques de la Semaine Sainte qui combinent art, musique et devotion religieuse. Le chemin de plus de 3 000 bougies et torches le Vendredi Saint cree une atmosphere magique et mystique.",
        es: 'Tanarandy es un pequeno pueblo en el departamento de Misiones de Paraguay, famoso por sus celebraciones unicas de Semana Santa que combinan arte, musica y devocion religiosa. El camino de mas de 3.000 velas y antorchas el Viernes Santo crea una atmosfera magica y mistica.',
      },
    },
    {
      question: { en: 'Is Good Friday a public holiday in Paraguay?', fr: 'Le Vendredi Saint est-il un jour ferie au Paraguay ?', es: 'Es el Viernes Santo un dia festivo en Paraguay?' },
      answer: {
        en: 'Yes, Good Friday is an official public holiday in Paraguay. Most businesses, banks, and government offices are closed for the entire Holy Week period.',
        fr: 'Oui, le Vendredi Saint est un jour ferie officiel au Paraguay. La plupart des entreprises, banques et bureaux gouvernementaux sont fermes pendant toute la periode de la Semaine Sainte.',
        es: 'Si, el Viernes Santo es un dia festivo oficial en Paraguay. La mayoria de los negocios, bancos y oficinas gubernamentales estan cerrados durante todo el periodo de Semana Santa.',
      },
    },
    {
      question: { en: 'What is chipa?', fr: "Qu'est-ce que le chipa ?", es: 'Que es la chipa?' },
      answer: {
        en: 'Chipa is Paraguay\'s beloved cheese bread, made from cassava (manioc) starch, eggs, cheese, and lard. It is the quintessential Holy Week food in Paraguay and is consumed in enormous quantities during Semana Santa, though it is enjoyed year-round.',
        fr: 'Le chipa est le pain au fromage bien-aime du Paraguay, fait de fecule de manioc, d\'oeufs, de fromage et de saindoux. C\'est l\'aliment par excellence de la Semaine Sainte au Paraguay et est consomme en enormes quantites pendant la Semana Santa, bien qu\'il soit apprecie toute l\'annee.',
        es: 'La chipa es el querido pan de queso de Paraguay, hecho de almidon de mandioca, huevos, queso y grasa. Es el alimento por excelencia de la Semana Santa en Paraguay y se consume en enormes cantidades durante la Semana Santa, aunque se disfruta todo el ano.',
      },
    },
  ],

  colorTheme: 'easter',
  icon: '\u271d\ufe0f',
};

// ---------------------------------------------------------------------------
// Labour Day — May 1
// ---------------------------------------------------------------------------

const labourDay: HolidayData = {
  id: 'py_labour-day',
  countryCode: 'py',
  slugs: { en: 'labour-day', fr: 'fete-du-travail', es: 'dia-del-trabajo' },
  names: { en: 'Labour Day', fr: 'Fete du Travail', es: 'Dia del Trabajo' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 1,

  descriptions: {
    en: "Labour Day on May 1 is a public holiday in Paraguay honoring the rights and achievements of workers. It is observed with union events, worker rallies, and family gatherings.",
    fr: "La Fete du Travail, le 1er mai, est un jour ferie au Paraguay honorant les droits et les realisations des travailleurs. Elle est observee avec des evenements syndicaux, des rassemblements de travailleurs et des reunions familiales.",
    es: 'El Dia del Trabajo, el 1 de mayo, es un dia festivo en Paraguay que honra los derechos y logros de los trabajadores. Se observa con eventos sindicales, manifestaciones de trabajadores y reuniones familiares.',
  },

  history: {
    en: "Labour Day in Paraguay is observed on May 1, in line with the international workers' movement. The date honors the global struggle for workers' rights, including the eight-hour workday, fair wages, and safe working conditions.\n\nParaguay's labor movement has a complex history, shaped by decades of authoritarian rule under the Stroessner dictatorship (1954-1989). During this period, independent unions were suppressed, and workers' rights were severely limited. Since the transition to democracy, the labor movement has grown significantly.\n\nToday, Labour Day in Paraguay is marked by marches organized by the Central Unitaria de Trabajadores (CUT) and other union federations. Workers advocate for improved wages, working conditions, and social protections, while the holiday also serves as a day of rest and family time.",
    fr: "La Fete du Travail au Paraguay est observee le 1er mai, conformement au mouvement ouvrier international. La date honore la lutte mondiale pour les droits des travailleurs, y compris la journee de travail de huit heures, des salaires equitables et des conditions de travail sures.\n\nLe mouvement ouvrier du Paraguay a une histoire complexe, faconnee par des decennies de regime autoritaire sous la dictature de Stroessner (1954-1989). Pendant cette periode, les syndicats independants ont ete supprimes et les droits des travailleurs ont ete severement limites. Depuis la transition vers la democratie, le mouvement ouvrier a considerablement grandi.\n\nAujourd'hui, la Fete du Travail au Paraguay est marquee par des marches organisees par la Central Unitaria de Trabajadores (CUT) et d'autres federations syndicales. Les travailleurs defendent l'amelioration des salaires, des conditions de travail et des protections sociales, tandis que le jour ferie sert egalement de jour de repos et de temps en famille.",
    es: "El Dia del Trabajo en Paraguay se observa el 1 de mayo, en linea con el movimiento obrero internacional. La fecha honra la lucha global por los derechos de los trabajadores, incluyendo la jornada laboral de ocho horas, salarios justos y condiciones de trabajo seguras.\n\nEl movimiento laboral de Paraguay tiene una historia compleja, moldeada por decadas de gobierno autoritario bajo la dictadura de Stroessner (1954-1989). Durante este periodo, los sindicatos independientes fueron suprimidos y los derechos de los trabajadores fueron severamente limitados. Desde la transicion a la democracia, el movimiento laboral ha crecido significativamente.\n\nHoy, el Dia del Trabajo en Paraguay se marca con marchas organizadas por la Central Unitaria de Trabajadores (CUT) y otras federaciones sindicales. Los trabajadores abogan por mejores salarios, condiciones de trabajo y protecciones sociales, mientras que el dia festivo tambien sirve como dia de descanso y tiempo en familia.",
  },

  traditions: {
    en: [
      'Attending union marches and rallies in Asuncion and other cities',
      'Listening to speeches by labor leaders and government officials',
      'Spending the day with family, often with an asado',
      'Reflecting on workers\' rights and labor history',
      'Participating in cultural events organized by unions',
    ],
    fr: [
      'Assister aux marches syndicales et rassemblements a Asuncion et dans d\'autres villes',
      'Ecouter les discours des dirigeants syndicaux et des representants du gouvernement',
      'Passer la journee en famille, souvent avec un asado',
      'Reflechir aux droits des travailleurs et a l\'histoire ouvriere',
      'Participer aux evenements culturels organises par les syndicats',
    ],
    es: [
      'Asistir a marchas sindicales y manifestaciones en Asuncion y otras ciudades',
      'Escuchar discursos de lideres sindicales y funcionarios del gobierno',
      'Pasar el dia con la familia, a menudo con un asado',
      'Reflexionar sobre los derechos de los trabajadores y la historia laboral',
      'Participar en eventos culturales organizados por sindicatos',
    ],
  },

  funFacts: {
    en: [
      'Paraguay\'s labor movement was heavily suppressed during the 35-year Stroessner dictatorship (1954-1989).',
      'The Central Unitaria de Trabajadores (CUT) is Paraguay\'s largest trade union federation.',
      'Paraguay has one of the youngest labor forces in South America, with a median age of about 28.',
      'Many Paraguayan workers are employed in agriculture, which accounts for a significant portion of the economy.',
      'Paraguayans often celebrate Labour Day with a family asado, turning the worker\'s holiday into a social gathering.',
    ],
    fr: [
      'Le mouvement ouvrier du Paraguay a ete fortement reprime pendant les 35 ans de la dictature de Stroessner (1954-1989).',
      'La Central Unitaria de Trabajadores (CUT) est la plus grande federation syndicale du Paraguay.',
      "Le Paraguay a l'une des mains-d'oeuvre les plus jeunes d'Amerique du Sud, avec un age median d'environ 28 ans.",
      "De nombreux travailleurs paraguayens sont employes dans l'agriculture, qui represente une part importante de l'economie.",
      'Les Paraguayens celebrent souvent la Fete du Travail avec un asado familial, transformant le jour ferie des travailleurs en rassemblement social.',
    ],
    es: [
      'El movimiento laboral de Paraguay fue fuertemente reprimido durante los 35 anos de la dictadura de Stroessner (1954-1989).',
      'La Central Unitaria de Trabajadores (CUT) es la federacion sindical mas grande de Paraguay.',
      'Paraguay tiene una de las fuerzas laborales mas jovenes de Sudamerica, con una edad media de alrededor de 28 anos.',
      'Muchos trabajadores paraguayos estan empleados en la agricultura, que representa una porcion significativa de la economia.',
      'Los paraguayos a menudo celebran el Dia del Trabajo con un asado familiar, convirtiendo el dia festivo de los trabajadores en una reunion social.',
    ],
  },

  planningChecklist: {
    en: [
      'Check for planned marches that may affect traffic in Asuncion',
      'Plan a family asado or outing for the day off',
      'Be aware that banks and government offices will be closed',
      'Stock up on supplies the day before as many shops will close',
      'Enjoy the autumn weather with outdoor family activities',
    ],
    fr: [
      'Verifier les marches prevues qui peuvent affecter la circulation a Asuncion',
      'Planifier un asado familial ou une sortie pour le jour de conge',
      'Savoir que les banques et bureaux gouvernementaux seront fermes',
      'Faire le plein de fournitures la veille car de nombreux magasins fermeront',
      'Profiter du temps automnal avec des activites familiales en plein air',
    ],
    es: [
      'Verificar marchas planificadas que puedan afectar el trafico en Asuncion',
      'Planificar un asado familiar o salida para el dia libre',
      'Tener en cuenta que bancos y oficinas gubernamentales estaran cerrados',
      'Abastecerse de suministros el dia anterior ya que muchas tiendas cerraran',
      'Disfrutar del clima otonal con actividades familiares al aire libre',
    ],
  },

  relatedHolidays: ['py_independence-day', 'py_heroes-day'],

  seo: {
    en: {
      titleTemplate: 'Labour Day {year} Paraguay — Countdown & Info',
      descriptionTemplate: 'When is Labour Day {year} in Paraguay? Live countdown to May 1, workers\' rights history, and public holiday information.',
      keywords: ['Labour Day Paraguay', 'Dia del Trabajo Paraguay', 'May 1 Paraguay', 'Paraguay public holidays', 'workers day Paraguay'],
    },
    fr: {
      titleTemplate: 'Fete du Travail {year} Paraguay — Compte a rebours et info',
      descriptionTemplate: 'Quand est la Fete du Travail {year} au Paraguay ? Compte a rebours, histoire des droits des travailleurs et informations.',
      keywords: ['Fete du Travail Paraguay', '1er mai Paraguay', 'jours feries Paraguay', 'droits des travailleurs Paraguay', 'Dia del Trabajo'],
    },
    es: {
      titleTemplate: 'Dia del Trabajo {year} Paraguay — Cuenta regresiva e info',
      descriptionTemplate: 'Cuando es el Dia del Trabajo {year} en Paraguay? Cuenta regresiva al 1 de mayo, historia de derechos laborales e informacion.',
      keywords: ['Dia del Trabajo Paraguay', '1 de mayo Paraguay', 'feriados Paraguay', 'derechos laborales Paraguay', 'dia festivo Paraguay'],
    },
  },

  faq: [
    {
      question: { en: 'When is Labour Day {year} in Paraguay?', fr: 'Quand est la Fete du Travail {year} au Paraguay ?', es: 'Cuando es el Dia del Trabajo {year} en Paraguay?' },
      answer: {
        en: 'Labour Day {year} in Paraguay is on {date}. It is always May 1.',
        fr: 'La Fete du Travail {year} au Paraguay est le {date}. C\'est toujours le 1er mai.',
        es: 'El Dia del Trabajo {year} en Paraguay es el {date}. Siempre es el 1 de mayo.',
      },
    },
    {
      question: { en: 'Is Labour Day a public holiday in Paraguay?', fr: 'La Fete du Travail est-elle un jour ferie au Paraguay ?', es: 'Es el Dia del Trabajo un dia festivo en Paraguay?' },
      answer: {
        en: 'Yes, May 1 is an official public holiday in Paraguay. Government offices, banks, and most businesses are closed.',
        fr: 'Oui, le 1er mai est un jour ferie officiel au Paraguay. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.',
        es: 'Si, el 1 de mayo es un dia festivo oficial en Paraguay. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.',
      },
    },
    {
      question: { en: 'Are there Labour Day marches in Paraguay?', fr: 'Y a-t-il des marches de la Fete du Travail au Paraguay ?', es: 'Hay marchas del Dia del Trabajo en Paraguay?' },
      answer: {
        en: 'Yes, unions and workers\' organizations organize marches and rallies in Asuncion and other major cities on May 1.',
        fr: 'Oui, les syndicats et les organisations de travailleurs organisent des marches et des rassemblements a Asuncion et dans d\'autres grandes villes le 1er mai.',
        es: 'Si, los sindicatos y organizaciones de trabajadores organizan marchas y manifestaciones en Asuncion y otras ciudades principales el 1 de mayo.',
      },
    },
    {
      question: { en: 'How do Paraguayans celebrate Labour Day?', fr: 'Comment les Paraguayens celebrent-ils la Fete du Travail ?', es: 'Como celebran los paraguayos el Dia del Trabajo?' },
      answer: {
        en: 'Beyond union marches and rallies, many Paraguayans celebrate Labour Day as a family day, often with a traditional asado (barbecue) gathering. It is a day to rest and enjoy time with loved ones.',
        fr: 'Au-dela des marches et rassemblements syndicaux, de nombreux Paraguayens celebrent la Fete du Travail comme une journee familiale, souvent avec un asado (barbecue) traditionnel. C\'est une journee pour se reposer et profiter du temps avec ses proches.',
        es: 'Mas alla de marchas y manifestaciones sindicales, muchos paraguayos celebran el Dia del Trabajo como un dia familiar, a menudo con un asado tradicional. Es un dia para descansar y disfrutar del tiempo con los seres queridos.',
      },
    },
  ],

  colorTheme: 'autumn',
  icon: '\u2692\ufe0f',
};

// ---------------------------------------------------------------------------
// Independence Day — May 15
// ---------------------------------------------------------------------------

const independenceDay: HolidayData = {
  id: 'py_independence-day',
  countryCode: 'py',
  slugs: { en: 'independence-day', fr: 'jour-de-lindependance', es: 'dia-de-la-independencia' },
  names: { en: 'Independence Day', fr: "Jour de l'Independance", es: 'Dia de la Independencia' },

  dateType: 'fixed',
  fixedMonth: 5,
  fixedDay: 15,

  descriptions: {
    en: "Paraguay's Independence Day on May 15 celebrates the country's independence from Spain, declared in 1811. It is a two-day celebration (May 14 and 15) marked by patriotic ceremonies, military parades, cultural events, and festivities across the country.",
    fr: "Le Jour de l'Independance du Paraguay, le 15 mai, celebre l'independance du pays vis-a-vis de l'Espagne, declaree en 1811. C'est une celebration de deux jours (14 et 15 mai) marquee par des ceremonies patriotiques, des defiles militaires, des evenements culturels et des festivites a travers le pays.",
    es: 'El Dia de la Independencia de Paraguay, el 15 de mayo, celebra la independencia del pais de Espana, declarada en 1811. Es una celebracion de dos dias (14 y 15 de mayo) marcada por ceremonias patrioticas, desfiles militares, eventos culturales y festividades en todo el pais.',
  },

  history: {
    en: "Paraguay declared its independence from Spain on May 14-15, 1811, in a relatively peaceful revolution. Unlike many South American independence movements, Paraguay's liberation was achieved without major bloodshed. A group of military officers and intellectuals led by Captain Pedro Juan Caballero and Fulgencio Yegros overthrew the Spanish governor and established a junta.\n\nThe independence was formally declared on May 15, 1811, making Paraguay one of the first South American nations to break free from Spanish colonial rule. Jose Gaspar Rodriguez de Francia, one of the junta members, eventually became the country's dictator and isolationist ruler for nearly three decades.\n\nToday, Independence Day is celebrated as a two-day holiday. May 14 marks the eve of independence (Vispera de la Independencia) with special events and celebrations, while May 15 is the main day of patriotic ceremonies. The celebrations feature military parades, flag-raising ceremonies, traditional music and dance, and festivities in the capital Asuncion and throughout the country.",
    fr: "Le Paraguay a declare son independance de l'Espagne les 14-15 mai 1811, lors d'une revolution relativement pacifique. Contrairement a de nombreux mouvements d'independance sud-americains, la liberation du Paraguay a ete realisee sans effusion de sang majeure. Un groupe d'officiers militaires et d'intellectuels menes par le capitaine Pedro Juan Caballero et Fulgencio Yegros a renverse le gouverneur espagnol et etabli une junte.\n\nL'independance a ete formellement declaree le 15 mai 1811, faisant du Paraguay l'une des premieres nations sud-americaines a se liberer du domaine colonial espagnol. Jose Gaspar Rodriguez de Francia, l'un des membres de la junte, est finalement devenu le dictateur et dirigeant isolationniste du pays pendant pres de trois decennies.\n\nAujourd'hui, le Jour de l'Independance est celebre comme un jour ferie de deux jours. Le 14 mai marque la veille de l'independance (Vispera de la Independencia) avec des evenements speciaux, tandis que le 15 mai est le jour principal des ceremonies patriotiques. Les celebrations comprennent des defiles militaires, des ceremonies de lever du drapeau, de la musique et de la danse traditionnelles, et des festivites dans la capitale Asuncion et dans tout le pays.",
    es: "Paraguay declaro su independencia de Espana el 14-15 de mayo de 1811, en una revolucion relativamente pacifica. A diferencia de muchos movimientos de independencia sudamericanos, la liberacion de Paraguay se logro sin gran derramamiento de sangre. Un grupo de oficiales militares e intelectuales liderados por el capitan Pedro Juan Caballero y Fulgencio Yegros derroco al gobernador espanol y establecio una junta.\n\nLa independencia fue formalmente declarada el 15 de mayo de 1811, haciendo de Paraguay una de las primeras naciones sudamericanas en liberarse del dominio colonial espanol. Jose Gaspar Rodriguez de Francia, uno de los miembros de la junta, eventualmente se convirtio en el dictador y gobernante aislacionista del pais durante casi tres decadas.\n\nHoy, el Dia de la Independencia se celebra como un dia festivo de dos dias. El 14 de mayo marca la vispera de la independencia (Vispera de la Independencia) con eventos especiales, mientras que el 15 de mayo es el dia principal de ceremonias patrioticas. Las celebraciones incluyen desfiles militares, ceremonias de izamiento de bandera, musica y danza tradicionales, y festividades en la capital Asuncion y en todo el pais.",
  },

  traditions: {
    en: [
      'Attending military parades and civic ceremonies on May 15',
      'Celebrating the Vispera (eve) on May 14 with special events',
      'Watching the presidential address and flag-raising at the Government Palace',
      'Enjoying traditional Paraguayan music — polka paraguaya and guarania',
      'Preparing a family asado or gathering with sopa paraguaya and clerico',
      'Flying the Paraguayan flag on homes and public buildings',
    ],
    fr: [
      'Assister aux defiles militaires et ceremonies civiques le 15 mai',
      'Celebrer la Vispera (veille) le 14 mai avec des evenements speciaux',
      'Regarder le discours presidentiel et le lever du drapeau au Palais du Gouvernement',
      'Profiter de la musique traditionnelle paraguayenne — polka paraguaya et guarania',
      'Preparer un asado familial ou un rassemblement avec sopa paraguaya et clerico',
      'Hisser le drapeau paraguayen sur les maisons et les batiments publics',
    ],
    es: [
      'Asistir a desfiles militares y ceremonias civicas el 15 de mayo',
      'Celebrar la Vispera el 14 de mayo con eventos especiales',
      'Ver el discurso presidencial y el izamiento de bandera en el Palacio de Gobierno',
      'Disfrutar de musica tradicional paraguaya — polka paraguaya y guarania',
      'Preparar un asado familiar o reunion con sopa paraguaya y clerico',
      'Izar la bandera paraguaya en hogares y edificios publicos',
    ],
  },

  funFacts: {
    en: [
      'Paraguay\'s independence was achieved through a nearly bloodless revolution, unlike most South American independence movements.',
      'Paraguay was one of the first countries in South America to declare independence from Spain, doing so in 1811.',
      'Clerico, a traditional Paraguayan fruit punch with wine, is the quintessential Independence Day drink.',
      'Paraguay is the only country in the Americas whose flag has a different emblem on each side — the coat of arms on the front and the treasury seal on the back.',
      'The two-day celebration of May 14-15 creates one of the most festive periods in the Paraguayan calendar.',
    ],
    fr: [
      "L'independance du Paraguay a ete obtenue par une revolution presque sans effusion de sang, contrairement a la plupart des mouvements d'independance sud-americains.",
      "Le Paraguay a ete l'un des premiers pays d'Amerique du Sud a declarer son independance de l'Espagne, le faisant en 1811.",
      'Le clerico, un punch aux fruits traditionnel paraguayen avec du vin, est la boisson par excellence du Jour de l\'Independance.',
      "Le Paraguay est le seul pays des Ameriques dont le drapeau a un embleme different de chaque cote — les armoiries a l'avant et le sceau du tresor a l'arriere.",
      'La celebration de deux jours du 14-15 mai cree l\'une des periodes les plus festives du calendrier paraguayen.',
    ],
    es: [
      'La independencia de Paraguay se logro mediante una revolucion casi sin derramamiento de sangre, a diferencia de la mayoria de los movimientos de independencia sudamericanos.',
      'Paraguay fue uno de los primeros paises de Sudamerica en declarar su independencia de Espana, haciendolo en 1811.',
      'El clerico, un ponche de frutas tradicional paraguayo con vino, es la bebida por excelencia del Dia de la Independencia.',
      'Paraguay es el unico pais de las Americas cuya bandera tiene un emblema diferente en cada lado — el escudo de armas en el frente y el sello del tesoro en el reverso.',
      'La celebracion de dos dias del 14-15 de mayo crea uno de los periodos mas festivos del calendario paraguayo.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan for a two-day celebration starting May 14',
      'Prepare Paraguayan flags and patriotic decorations',
      'Stock up on ingredients for sopa paraguaya and clerico',
      'Check schedules for local parades and cultural events',
      'Plan a family asado for the Independence Day gathering',
    ],
    fr: [
      'Planifier une celebration de deux jours a partir du 14 mai',
      'Preparer les drapeaux paraguayens et les decorations patriotiques',
      'Faire le plein d\'ingredients pour la sopa paraguaya et le clerico',
      'Verifier les horaires des defiles locaux et evenements culturels',
      'Planifier un asado familial pour le rassemblement du Jour de l\'Independance',
    ],
    es: [
      'Planificar una celebracion de dos dias a partir del 14 de mayo',
      'Preparar banderas paraguayas y decoraciones patrioticas',
      'Abastecerse de ingredientes para sopa paraguaya y clerico',
      'Verificar horarios de desfiles locales y eventos culturales',
      'Planificar un asado familiar para la reunion del Dia de la Independencia',
    ],
  },

  relatedHolidays: ['py_heroes-day', 'py_labour-day'],

  seo: {
    en: {
      titleTemplate: 'Independence Day {year} Paraguay — Countdown & History',
      descriptionTemplate: 'When is Paraguay Independence Day {year}? Live countdown to May 15, history of the 1811 revolution, and celebration guide.',
      keywords: ['Paraguay Independence Day', 'May 15 Paraguay', 'Dia de la Independencia Paraguay', 'Paraguayan national holiday', 'independence countdown'],
    },
    fr: {
      titleTemplate: "Jour de l'Independance {year} Paraguay — Compte a rebours et histoire",
      descriptionTemplate: "Quand est le Jour de l'Independance du Paraguay {year} ? Compte a rebours, histoire de la revolution de 1811 et guide.",
      keywords: ["Jour de l'Independance Paraguay", '15 mai Paraguay', 'fete nationale Paraguay', 'jours feries Paraguay', "compte a rebours independance"],
    },
    es: {
      titleTemplate: 'Dia de la Independencia {year} Paraguay — Cuenta regresiva e historia',
      descriptionTemplate: 'Cuando es el Dia de la Independencia de Paraguay {year}? Cuenta regresiva al 15 de mayo, historia de la revolucion de 1811 y guia.',
      keywords: ['Dia de la Independencia Paraguay', '15 de mayo Paraguay', 'fiesta nacional Paraguay', 'feriados Paraguay', 'cuenta regresiva independencia'],
    },
  },

  faq: [
    {
      question: { en: 'When is Paraguay Independence Day {year}?', fr: "Quand est le Jour de l'Independance du Paraguay {year} ?", es: 'Cuando es el Dia de la Independencia de Paraguay {year}?' },
      answer: {
        en: 'Paraguay Independence Day {year} is on {date}. The celebrations span two days, May 14 (eve) and May 15 (main day).',
        fr: "Le Jour de l'Independance du Paraguay {year} est le {date}. Les celebrations s'etendent sur deux jours, le 14 mai (veille) et le 15 mai (jour principal).",
        es: 'El Dia de la Independencia de Paraguay {year} es el {date}. Las celebraciones abarcan dos dias, el 14 de mayo (vispera) y el 15 de mayo (dia principal).',
      },
    },
    {
      question: { en: 'Why is it a two-day celebration?', fr: 'Pourquoi est-ce une celebration de deux jours ?', es: 'Por que es una celebracion de dos dias?' },
      answer: {
        en: 'The independence revolution took place over the night of May 14-15, 1811. May 14 marks the beginning of the revolution (Vispera) and May 15 marks its successful conclusion. Both days are observed as public holidays.',
        fr: "La revolution d'independance a eu lieu dans la nuit du 14 au 15 mai 1811. Le 14 mai marque le debut de la revolution (Vispera) et le 15 mai marque sa conclusion reussie. Les deux jours sont observes comme jours feries.",
        es: 'La revolucion de independencia tuvo lugar durante la noche del 14 al 15 de mayo de 1811. El 14 de mayo marca el inicio de la revolucion (Vispera) y el 15 de mayo marca su exitosa conclusion. Ambos dias se observan como dias festivos.',
      },
    },
    {
      question: { en: 'What is clerico?', fr: "Qu'est-ce que le clerico ?", es: 'Que es el clerico?' },
      answer: {
        en: 'Clerico is a traditional Paraguayan fruit punch made by combining fresh chopped fruits (such as pineapple, oranges, bananas, and peaches) with wine. It is the quintessential drink for Independence Day celebrations and family gatherings.',
        fr: 'Le clerico est un punch aux fruits traditionnel paraguayen prepare en combinant des fruits frais coupes (comme l\'ananas, les oranges, les bananes et les peches) avec du vin. C\'est la boisson par excellence des celebrations du Jour de l\'Independance et des reunions familiales.',
        es: 'El clerico es un ponche de frutas tradicional paraguayo hecho combinando frutas frescas picadas (como pina, naranjas, bananas y duraznos) con vino. Es la bebida por excelencia de las celebraciones del Dia de la Independencia y las reuniones familiares.',
      },
    },
    {
      question: { en: 'Is May 15 a public holiday in Paraguay?', fr: 'Le 15 mai est-il un jour ferie au Paraguay ?', es: 'Es el 15 de mayo un dia festivo en Paraguay?' },
      answer: {
        en: 'Yes, both May 14 and May 15 are official public holidays in Paraguay. Government offices, banks, and most businesses are closed on both days.',
        fr: 'Oui, les 14 et 15 mai sont des jours feries officiels au Paraguay. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes les deux jours.',
        es: 'Si, tanto el 14 como el 15 de mayo son dias festivos oficiales en Paraguay. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados ambos dias.',
      },
    },
  ],

  colorTheme: 'patriotic',
  icon: '\ud83c\uddf5\ud83c\uddfe',
};

// ---------------------------------------------------------------------------
// Christmas Day — December 25
// ---------------------------------------------------------------------------

const christmas: HolidayData = {
  id: 'py_christmas',
  countryCode: 'py',
  slugs: { en: 'christmas', fr: 'noel', es: 'navidad' },
  names: { en: 'Christmas Day', fr: 'Noel', es: 'Navidad' },

  dateType: 'fixed',
  fixedMonth: 12,
  fixedDay: 25,

  descriptions: {
    en: 'Christmas Day on December 25 is a joyous family celebration in Paraguay, featuring a festive dinner with clerico (fruit punch), sopa paraguaya, and asado. Paraguayan Christmas traditions blend Catholic faith with the warmth of Guarani culture in the heart of South American summer.',
    fr: "Noel, le 25 decembre, est une joyeuse celebration familiale au Paraguay, avec un diner festif comprenant du clerico (punch aux fruits), de la sopa paraguaya et de l'asado. Les traditions de Noel paraguayennes melangent la foi catholique avec la chaleur de la culture guarani au coeur de l'ete sud-americain.",
    es: 'La Navidad, el 25 de diciembre, es una alegre celebracion familiar en Paraguay, con una cena festiva que incluye clerico (ponche de frutas), sopa paraguaya y asado. Las tradiciones navidenas paraguayas mezclan la fe catolica con la calidez de la cultura guarani en el corazon del verano sudamericano.',
  },

  history: {
    en: "Christmas in Paraguay is a warm, family-centered celebration that takes place during the peak of the Southern Hemisphere summer. The holiday combines Catholic traditions from the country's Spanish colonial heritage with elements of Guarani indigenous culture, creating a uniquely Paraguayan celebration.\n\nThe Christmas season in Paraguay begins in early December with preparations for the Noche Buena (Christmas Eve) celebration. Families clean and decorate their homes, prepare traditional foods, and set up nativity scenes. The pesebres (nativity scenes) in Paraguay often feature local elements, including terracotta figures made by artisans from Tobati and Itagua.\n\nChristmas Eve is the main event, with families gathering for a large dinner that typically includes asado, sopa paraguaya, chipa guazu, clerico, and other traditional dishes. After Midnight Mass, gifts are exchanged, and the celebration often continues into the early morning hours with music, dancing, and fireworks.",
    fr: "Noel au Paraguay est une celebration chaleureuse et centree sur la famille qui a lieu au plus fort de l'ete de l'hemisphere sud. Le jour ferie combine les traditions catholiques de l'heritage colonial espagnol du pays avec des elements de la culture indigene guarani, creant une celebration uniquement paraguayenne.\n\nLa saison de Noel au Paraguay commence debut decembre avec les preparatifs de la celebration de la Noche Buena (veille de Noel). Les familles nettoient et decorent leurs maisons, preparent les aliments traditionnels et installent des creches. Les pesebres (creches) au Paraguay presentent souvent des elements locaux, y compris des figurines en terre cuite faites par des artisans de Tobati et Itagua.\n\nLa veille de Noel est l'evenement principal, avec les familles se reunissant pour un grand diner qui comprend generalement de l'asado, de la sopa paraguaya, du chipa guazu, du clerico et d'autres plats traditionnels. Apres la messe de minuit, les cadeaux sont echanges, et la celebration se poursuit souvent jusqu'aux premieres heures du matin avec de la musique, de la danse et des feux d'artifice.",
    es: "La Navidad en Paraguay es una celebracion calida y centrada en la familia que tiene lugar en el pico del verano del hemisferio sur. El dia festivo combina tradiciones catolicas de la herencia colonial espanola del pais con elementos de la cultura indigena guarani, creando una celebracion unicamente paraguaya.\n\nLa temporada navidena en Paraguay comienza a principios de diciembre con los preparativos para la celebracion de la Noche Buena. Las familias limpian y decoran sus hogares, preparan comidas tradicionales y montan nacimientos. Los pesebres en Paraguay a menudo presentan elementos locales, incluyendo figuras de terracota hechas por artesanos de Tobati e Itagua.\n\nLa Nochebuena es el evento principal, con las familias reuniendose para una gran cena que tipicamente incluye asado, sopa paraguaya, chipa guazu, clerico y otros platos tradicionales. Despues de la Misa de Gallo, se intercambian regalos, y la celebracion a menudo continua hasta las primeras horas de la manana con musica, baile y fuegos artificiales.",
  },

  traditions: {
    en: [
      'Preparing a Christmas Eve dinner with asado, sopa paraguaya, chipa guazu, and clerico',
      'Attending Misa de Gallo (Midnight Mass) on Christmas Eve',
      'Setting up nativity scenes with locally crafted terracotta figures',
      'Exchanging gifts after Midnight Mass',
      'Enjoying clerico, the traditional Paraguayan fruit punch with wine',
      'Setting off fireworks at midnight to celebrate',
      'Visiting family and friends on Christmas Day',
    ],
    fr: [
      'Preparer un diner de la veille de Noel avec asado, sopa paraguaya, chipa guazu et clerico',
      'Assister a la Misa de Gallo (messe de minuit) la veille de Noel',
      'Installer des creches avec des figurines en terre cuite fabriquees localement',
      'Echanger des cadeaux apres la messe de minuit',
      'Deguster le clerico, le punch aux fruits traditionnel paraguayen avec du vin',
      "Tirer des feux d'artifice a minuit pour celebrer",
      'Rendre visite a la famille et aux amis le jour de Noel',
    ],
    es: [
      'Preparar una cena de Nochebuena con asado, sopa paraguaya, chipa guazu y clerico',
      'Asistir a la Misa de Gallo en Nochebuena',
      'Montar nacimientos con figuras de terracota artesanales locales',
      'Intercambiar regalos despues de la Misa de Gallo',
      'Disfrutar del clerico, el ponche de frutas tradicional paraguayo con vino',
      'Lanzar fuegos artificiales a medianoche para celebrar',
      'Visitar familia y amigos el dia de Navidad',
    ],
  },

  funFacts: {
    en: [
      'Paraguayan Christmas is celebrated in the middle of summer, with temperatures often exceeding 35 degrees Celsius.',
      'Clerico, the quintessential Paraguayan holiday drink, is essentially a wine-based fruit salad punch — refreshing in the summer heat.',
      'Sopa paraguaya, the national dish served at Christmas, is actually a cornbread, not a soup, despite its name.',
      'Paraguayan nativity scenes often include locally made terracotta figures from the artisan towns of Tobati and Itagua.',
      'Fireworks on Christmas Eve in Paraguay can be so extensive that the sky lights up across entire cities for hours.',
    ],
    fr: [
      'Noel au Paraguay est celebre au milieu de l\'ete, avec des temperatures depassant souvent 35 degres Celsius.',
      'Le clerico, la boisson de fete paraguayenne par excellence, est essentiellement un punch de salade de fruits a base de vin — rafraichissant dans la chaleur estivale.',
      'La sopa paraguaya, le plat national servi a Noel, est en fait un pain de mais, pas une soupe, malgre son nom.',
      'Les creches paraguayennes comprennent souvent des figurines en terre cuite fabriquees localement dans les villes artisanales de Tobati et Itagua.',
      "Les feux d'artifice la veille de Noel au Paraguay peuvent etre si intenses que le ciel s'illumine dans des villes entieres pendant des heures.",
    ],
    es: [
      'La Navidad paraguaya se celebra en pleno verano, con temperaturas que a menudo superan los 35 grados Celsius.',
      'El clerico, la bebida festiva paraguaya por excelencia, es esencialmente un ponche de ensalada de frutas a base de vino — refrescante en el calor veraniego.',
      'La sopa paraguaya, el plato nacional servido en Navidad, es en realidad un pan de maiz, no una sopa, a pesar de su nombre.',
      'Los nacimientos paraguayos a menudo incluyen figuras de terracota hechas localmente en los pueblos artesanales de Tobati e Itagua.',
      'Los fuegos artificiales en Nochebuena en Paraguay pueden ser tan extensos que el cielo se ilumina en ciudades enteras durante horas.',
    ],
  },

  planningChecklist: {
    en: [
      'Plan your Christmas Eve dinner menu with traditional Paraguayan dishes',
      'Buy fresh fruits for clerico and ingredients for sopa paraguaya',
      'Set up your nativity scene in early December',
      'Book Midnight Mass attendance at your local church',
      'Prepare for hot weather celebrations with cold drinks and shade',
    ],
    fr: [
      'Planifier le menu du diner de la veille de Noel avec des plats traditionnels paraguayens',
      'Acheter des fruits frais pour le clerico et des ingredients pour la sopa paraguaya',
      'Installer votre creche debut decembre',
      'Reserver votre place pour la messe de minuit dans votre eglise locale',
      'Se preparer pour des celebrations par temps chaud avec des boissons fraiches et de l\'ombre',
    ],
    es: [
      'Planificar el menu de la cena de Nochebuena con platos tradicionales paraguayos',
      'Comprar frutas frescas para el clerico e ingredientes para la sopa paraguaya',
      'Montar su nacimiento a principios de diciembre',
      'Reservar asistencia a la Misa de Gallo en su iglesia local',
      'Prepararse para celebraciones con clima caluroso con bebidas frias y sombra',
    ],
  },

  relatedHolidays: ['py_new-years-day', 'py_independence-day'],

  seo: {
    en: {
      titleTemplate: 'Christmas {year} Paraguay — Countdown & Traditions',
      descriptionTemplate: 'How many days until Christmas {year} in Paraguay? Live countdown, clerico, sopa paraguaya, and Paraguayan Christmas traditions.',
      keywords: ['Christmas Paraguay', 'Navidad Paraguay', 'clerico Paraguay', 'sopa paraguaya', 'Paraguayan Christmas traditions'],
    },
    fr: {
      titleTemplate: 'Noel {year} Paraguay — Compte a rebours et traditions',
      descriptionTemplate: 'Combien de jours avant Noel {year} au Paraguay ? Compte a rebours, clerico, sopa paraguaya et traditions de Noel paraguayennes.',
      keywords: ['Noel Paraguay', 'Navidad Paraguay', 'clerico', 'sopa paraguaya', 'traditions de Noel Paraguay'],
    },
    es: {
      titleTemplate: 'Navidad {year} Paraguay — Cuenta regresiva y tradiciones',
      descriptionTemplate: 'Cuantos dias faltan para Navidad {year} en Paraguay? Cuenta regresiva, clerico, sopa paraguaya y tradiciones navidenas paraguayas.',
      keywords: ['Navidad Paraguay', 'tradiciones navidenas Paraguay', 'clerico', 'sopa paraguaya', 'Navidad paraguaya'],
    },
  },

  faq: [
    {
      question: { en: 'When is Christmas {year} in Paraguay?', fr: 'Quand est Noel {year} au Paraguay ?', es: 'Cuando es Navidad {year} en Paraguay?' },
      answer: {
        en: 'Christmas {year} in Paraguay is on {date}. It is always December 25.',
        fr: 'Noel {year} au Paraguay est le {date}. C\'est toujours le 25 decembre.',
        es: 'La Navidad {year} en Paraguay es el {date}. Siempre es el 25 de diciembre.',
      },
    },
    {
      question: { en: 'What is sopa paraguaya?', fr: "Qu'est-ce que la sopa paraguaya ?", es: 'Que es la sopa paraguaya?' },
      answer: {
        en: 'Sopa paraguaya is Paraguay\'s national dish — a savory cornbread made with corn flour, cheese, eggs, onions, and milk. Despite its name meaning "Paraguayan soup," it is a solid, bread-like dish and is a staple at Christmas dinners and celebrations.',
        fr: 'La sopa paraguaya est le plat national du Paraguay — un pain de mais sale fait avec de la farine de mais, du fromage, des oeufs, des oignons et du lait. Malgre son nom signifiant "soupe paraguayenne", c\'est un plat solide, semblable a du pain, et est un incontournable des diners de Noel et des celebrations.',
        es: 'La sopa paraguaya es el plato nacional de Paraguay — un pan de maiz salado hecho con harina de maiz, queso, huevos, cebolla y leche. A pesar de que su nombre significa "sopa paraguaya", es un plato solido, tipo pan, y es un clasico en las cenas de Navidad y celebraciones.',
      },
    },
    {
      question: { en: 'Is Christmas in summer in Paraguay?', fr: 'Noel est-il en ete au Paraguay ?', es: 'La Navidad es en verano en Paraguay?' },
      answer: {
        en: 'Yes, Paraguay is in the Southern Hemisphere, so Christmas falls during the hottest part of summer. Temperatures often exceed 35 degrees Celsius, and celebrations are adapted to the warm weather with cold drinks like clerico and terere.',
        fr: "Oui, le Paraguay est dans l'hemisphere sud, donc Noel tombe pendant la partie la plus chaude de l'ete. Les temperatures depassent souvent 35 degres Celsius, et les celebrations sont adaptees au temps chaud avec des boissons fraiches comme le clerico et le terere.",
        es: 'Si, Paraguay esta en el hemisferio sur, por lo que la Navidad cae durante la parte mas calurosa del verano. Las temperaturas a menudo superan los 35 grados Celsius, y las celebraciones se adaptan al clima calido con bebidas frias como el clerico y el terere.',
      },
    },
    {
      question: { en: 'Is Christmas a public holiday in Paraguay?', fr: 'Noel est-il un jour ferie au Paraguay ?', es: 'Es Navidad un dia festivo en Paraguay?' },
      answer: {
        en: 'Yes, December 25 is an official public holiday in Paraguay. Government offices, banks, and most businesses are closed.',
        fr: 'Oui, le 25 decembre est un jour ferie officiel au Paraguay. Les bureaux gouvernementaux, les banques et la plupart des commerces sont fermes.',
        es: 'Si, el 25 de diciembre es un dia festivo oficial en Paraguay. Las oficinas gubernamentales, bancos y la mayoria de los negocios estan cerrados.',
      },
    },
  ],

  colorTheme: 'christmas',
  icon: '\ud83c\udf84',
};

// ---------------------------------------------------------------------------
// Export
// ---------------------------------------------------------------------------

const pyHolidays: HolidayData[] = [
  newYearsDay,
  heroesDay,
  goodFriday,
  labourDay,
  independenceDay,
  christmas,
];

export default pyHolidays;
