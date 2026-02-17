import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string, string> = {
    fr: 'Politique de confidentialité',
    es: 'Política de privacidad',
  };
  return {
    title: titles[locale] ?? 'Privacy Policy',
    alternates: { canonical: `/${locale}/privacy-policy` },
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const prefix = `/${locale}`;

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <a href={prefix} className="hover:text-primary-600">
          {locale === 'fr' ? 'Accueil' : 'Inicio'}
        </a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">
          {locale === 'fr' ? 'Politique de confidentialité' : 'Política de privacidad'}
        </span>
      </nav>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
        {locale === 'fr' ? 'Politique de confidentialité' : 'Política de privacidad'}
      </h1>
      <p className="mt-2 text-sm text-gray-500">
        {locale === 'fr' ? 'Dernière mise à jour : février 2026' : 'Última actualización: febrero de 2026'}
      </p>

      <div className="mt-6 space-y-6 text-gray-700 leading-relaxed">
        <p>
          {locale === 'fr'
            ? "HolidayCount s'engage à protéger votre vie privée. Tous les calculs de compte à rebours sont effectués dans votre navigateur. Nous ne collectons ni ne stockons de données personnelles."
            : "HolidayCount se compromete a proteger su privacidad. Todos los cálculos de cuenta regresiva se realizan en su navegador. No recopilamos ni almacenamos datos personales."
          }
        </p>
      </div>
    </article>
  );
}
