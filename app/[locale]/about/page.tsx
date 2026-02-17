import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    fr: 'À propos de HolidayCount',
    es: 'Acerca de HolidayCount',
  };
  return {
    title: titles[locale] ?? 'About HolidayCount',
    alternates: { canonical: `/${locale}/about` },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const prefix = `/${locale}`;

  // For now, use English content with localized navigation
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <a href={prefix} className="hover:text-primary-600">
          {locale === 'fr' ? 'Accueil' : 'Inicio'}
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">
          {locale === 'fr' ? 'À propos' : 'Acerca de'}
        </span>
      </nav>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
        {locale === 'fr' ? 'À propos de HolidayCount' : 'Acerca de HolidayCount'}
      </h1>

      <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
        <p>
          {locale === 'fr'
            ? "HolidayCount est une collection gratuite de comptes à rebours pour les fêtes célébrées dans le monde entier. Que vous planifiiez un rassemblement familial ou que vous soyez simplement curieux de savoir quand tombe la prochaine fête, HolidayCount vous donne des dates précises et des comptes à rebours en temps réel."
            : "HolidayCount es una colección gratuita de cuentas regresivas para fiestas celebradas en todo el mundo. Ya sea que esté planificando una reunión familiar o simplemente tenga curiosidad por saber cuándo cae la próxima fiesta, HolidayCount le brinda fechas precisas y cuentas regresivas en tiempo real."
          }
        </p>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 pt-4">
          {locale === 'fr' ? 'Couverture mondiale' : 'Cobertura global'}
        </h2>
        <p>
          {locale === 'fr'
            ? "Nous couvrons les fêtes de 45 pays à travers l'Amérique du Nord, l'Europe, les Caraïbes, l'Amérique du Sud, l'Amérique centrale, l'Afrique et l'Asie-Pacifique."
            : "Cubrimos fiestas de 45 países de América del Norte, Europa, el Caribe, América del Sur, América Central, África y Asia-Pacífico."
          }
        </p>
      </div>
    </article>
  );
}
