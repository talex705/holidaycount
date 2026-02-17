import type { Dictionary } from './en';

const fr: Dictionary = {

  // Site
  'site.name': 'HolidayCount',
  'site.tagline': 'Compte à rebours des fêtes du monde entier',
  'site.description': 'Compteurs à rebours en direct pour les fêtes du monde entier. Découvrez combien de jours avant Noël, Pâques et plus de 150 fêtes dans 45 pays.',

  // Countdown
  'countdown.days': 'Jours',
  'countdown.hours': 'Heures',
  'countdown.minutes': 'Minutes',
  'countdown.seconds': 'Secondes',
  'countdown.happy': 'Joyeux {holiday} !',
  'countdown.today': "Aujourd'hui !",
  'countdown.loading': 'Chargement...',
  'countdown.enjoyCelebrating': "Profitez de cette journée de fête !",

  // Holiday page sections
  'holiday.historyOf': 'Histoire de {holiday}',
  'holiday.traditions': 'Traditions de {holiday}',
  'holiday.funFacts': 'Le saviez-vous ?',
  'holiday.planningChecklist': 'Liste de préparation',
  'holiday.faq': 'Questions fréquentes',
  'holiday.relatedHolidays': 'Autres comptes à rebours',
  'holiday.viewCountdown': 'Voir le compte à rebours',

  // Calendar / Share
  'calendar.addToGoogle': 'Ajouter à Google Agenda',
  'calendar.downloadIcs': 'Télécharger .ics',
  'calendar.share': 'Partager',
  'calendar.linkCopied': 'Lien copié !',

  // Navigation
  'nav.home': 'Accueil',
  'nav.blog': 'Blog',
  'nav.customCountdown': 'Compte à rebours personnalisé',
  'nav.allCountries': 'Tous les pays',
  'nav.about': 'À propos',
  'nav.privacyPolicy': 'Politique de confidentialité',

  // Countries
  'countries.filterByRegion': 'Filtrer par région',
  'countries.allRegions': 'Toutes les régions',
  'countries.holidaysIn': 'Jours fériés en {country}',
  'countries.upcomingHolidays': 'Prochaines fêtes',
  'countries.allHolidays': 'Toutes les fêtes en {country}',

  // Regions
  'region.north-america': 'Amérique du Nord',
  'region.europe': 'Europe',
  'region.caribbean': 'Caraïbes',
  'region.south-america': 'Amérique du Sud',
  'region.central-america': 'Amérique centrale',
  'region.africa': 'Afrique',
  'region.asia-pacific': 'Asie-Pacifique',

  // Landing
  'landing.heroTitle': 'Compte à rebours des fêtes — Jours avant chaque fête en {year}',
  'landing.heroSubtitle': 'Compteurs à rebours en direct pour les fêtes célébrées dans le monde entier. Voyez exactement combien de jours avant Noël, Pâques et plus encore.',
  'landing.whyTitle': 'Pourquoi utiliser HolidayCount',
  'landing.whySubtitle': 'Le moyen le plus rapide de trouver les dates des fêtes et de compter les jours.',
  'landing.benefit1.title': 'Comptes à rebours instantanés',
  'landing.benefit1.description': 'Des compteurs en direct qui se mettent à jour chaque seconde. Voyez exactement combien de jours, heures, minutes et secondes avant la prochaine fête.',
  'landing.benefit2.title': 'Toujours précis',
  'landing.benefit2.description': 'Les dates sont calculées avec des algorithmes officiels. Les fêtes variables comme Pâques se mettent à jour automatiquement chaque année.',
  'landing.benefit3.title': 'Couverture mondiale',
  'landing.benefit3.description': "Des fêtes de 45 pays d'Amérique du Nord, d'Europe, des Caraïbes, d'Amérique du Sud, d'Amérique centrale, d'Afrique et d'Asie-Pacifique.",
  'landing.benefit4.title': 'Gratuit pour toujours',
  'landing.benefit4.description': 'Tous les comptes à rebours sont entièrement gratuits. Aucun compte requis, aucun niveau premium, aucune donnée personnelle collectée.',
  'landing.howItWorks': 'Comment ça marche',
  'landing.step1.title': 'Choisissez une fête',
  'landing.step1.description': 'Choisissez parmi notre collection de plus de 150 fêtes dans 45 pays — Noël, Pâques, la Fête nationale, Diwali et bien plus.',
  'landing.step2.title': 'Voyez le compte à rebours',
  'landing.step2.description': 'Regardez le compteur en direct affichant les jours, heures, minutes et secondes avant la fête. Le compteur se met à jour automatiquement.',
  'landing.step3.title': 'Ajoutez à votre agenda',
  'landing.step3.description': "Ajoutez n'importe quelle fête à votre Google Agenda ou téléchargez un fichier .ics pour Apple Calendar, Outlook ou toute autre application.",
  'landing.browseByRegion': 'Parcourir par région',
  'landing.featuredCountries': 'Pays en vedette',
  'landing.aboutTitle': 'À propos de HolidayCount',
  'landing.faqTitle': 'Questions fréquentes',

  // Landing FAQs
  'landing.faq1.question': 'Comment fonctionnent les compteurs à rebours ?',
  'landing.faq1.answer': "Nos compteurs calculent le temps exact restant entre maintenant et la date de la fête. Le compteur fonctionne entièrement dans votre navigateur en JavaScript et se met à jour chaque seconde. Pour les fêtes à date variable comme Pâques, nous utilisons des algorithmes officiels de calcul de dates.",
  'landing.faq2.question': 'Combien de pays HolidayCount couvre-t-il ?',
  'landing.faq2.answer': "HolidayCount couvre les fêtes de 45 pays sur tous les continents habités, y compris les États-Unis, le Canada, le Royaume-Uni, la France, l'Espagne, le Mexique, l'Australie, l'Inde et bien d'autres. Nous présentons plus de 150 fêtes avec des compteurs, l'histoire et les traditions.",
  'landing.faq3.question': 'Pourquoi la date de Pâques change-t-elle chaque année ?',
  'landing.faq3.answer': "Pâques est calculé à l'aide de l'algorithme du comput : il tombe le premier dimanche après la première pleine lune survenant le 21 mars ou après (l'équinoxe de printemps ecclésiastique). Comme le cycle lunaire ne s'aligne pas parfaitement avec le calendrier solaire, Pâques peut tomber n'importe quel dimanche entre le 22 mars et le 25 avril.",
  'landing.faq4.question': 'Les dates des fêtes sont-elles toujours exactes ?',
  'landing.faq4.answer': "Oui. Les fêtes à date fixe tombent toujours à la même date. Les fêtes à date variable sont calculées avec les mêmes algorithmes utilisés par les gouvernements du monde entier.",
  'landing.faq5.question': 'Puis-je ajouter des fêtes à mon agenda ?',
  'landing.faq5.answer': "Oui. Chaque page de fête comprend un bouton « Ajouter à Google Agenda » et un bouton « Télécharger .ics » qui génère un fichier compatible avec Apple Calendar, Microsoft Outlook et pratiquement toute autre application d'agenda.",

  // Not Found
  'notFound.title': 'Fête non trouvée',
  'notFound.description': "La page que vous cherchez n'existe pas. Essayez l'un de nos comptes à rebours :",
  'notFound.backHome': "Retour à l'accueil",

  // Footer
  'footer.allRightsReserved': 'Tous droits réservés.',

  // Breadcrumb
  'breadcrumb.home': 'Accueil',

  // Country overview
  'country.overview': 'Calendrier des fêtes en {country}',
  'country.overviewDescription': 'Comptes à rebours pour tous les jours fériés en {country}. Dates, traditions et conseils de préparation.',

  // Deals
  'deals.navLabel': 'Offres',
  'deals.sectionTitle': 'Meilleures offres pour {holiday}',
  'deals.viewDeal': 'Voir l\'offre',
  'deals.allCategories': 'Toutes',
  'deals.comingSoon': 'Recommandations à venir.',
  'deals.daysUntil': '{days}j',
  'deals.disclosure': 'Nous pouvons percevoir une commission sur les achats effectués via les liens de cette page. Cela n\'affecte ni nos recommandations ni le prix que vous payez.',
  'deals.disclosurePageTitle': 'Divulgation d\'affiliation',
  'deals.disclosurePageDescription': 'Découvrez comment HolidayCount génère des revenus grâce à des partenariats d\'affiliation.',

  // Affiliate Disclosure page
  'nav.affiliateDisclosure': 'Divulgation d\'affiliation',
};

export default fr;
