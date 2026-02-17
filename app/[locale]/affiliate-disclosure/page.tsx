import type { Metadata } from 'next';
import type { Locale } from '@/lib/types';
import { isValidLocale, getDictionary, t } from '@/lib/i18n';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'es' }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === 'en') return {};
  const dict = getDictionary(locale as Locale);
  return {
    title: `${t(dict, 'deals.disclosurePageTitle')} — HolidayCount`,
    description: t(dict, 'deals.disclosurePageDescription'),
    alternates: { canonical: `/${locale}/affiliate-disclosure` },
  };
}

const CONTENT: Record<'fr' | 'es', { intro: string[]; howTitle: string; howContent: string[]; commitTitle: string; commitItems: string[]; questionsTitle: string; questionsText: string }> = {
  fr: {
    intro: [
      "HolidayCount est une ressource gratuite qui fournit des comptes \u00e0 rebours, des informations sur les f\u00eates et des recommandations de produits pour les f\u00eates du monde entier. Pour garder ce site gratuit, nous participons \u00e0 des programmes de marketing d'affiliation.",
      "Certains des liens sur ce site sont des liens d'affiliation. Cela signifie que si vous cliquez sur un lien et effectuez un achat, nous pouvons recevoir une petite commission sans frais suppl\u00e9mentaires pour vous.",
    ],
    howTitle: 'Comment \u00e7a marche',
    howContent: [
      "Lorsque nous recommandons des produits, services ou exp\u00e9riences sur nos pages de f\u00eates, certaines de ces recommandations incluent des liens d'affiliation. Lorsque vous cliquez sur l'un de ces liens et effectuez un achat, le marchand nous verse une petite commission.",
      "Le prix que vous payez est exactement le m\u00eame que vous utilisiez notre lien d'affiliation ou que vous alliez directement sur le site du marchand.",
    ],
    commitTitle: 'Notre engagement',
    commitItems: [
      'Nous ne recommandons que des produits et services que nous estimons offrir une valeur r\u00e9elle.',
      "Nos recommandations \u00e9ditoriales ne sont pas influenc\u00e9es par les commissions d'affiliation.",
      "Les relations d'affiliation n'affectent jamais le prix que vous payez.",
      "Nous identifions clairement le contenu contenant des liens d'affiliation.",
    ],
    questionsTitle: 'Questions ?',
    questionsText: "Si vous avez des questions sur nos relations d'affiliation, veuillez visiter notre",
  },
  es: {
    intro: [
      'HolidayCount es un recurso gratuito que proporciona cuentas regresivas, informaci\u00f3n sobre fiestas y recomendaciones de productos para fiestas de todo el mundo. Para mantener este sitio gratuito, participamos en programas de marketing de afiliados.',
      'Algunos de los enlaces en este sitio son enlaces de afiliados. Esto significa que si haces clic en un enlace y realizas una compra, podemos recibir una peque\u00f1a comisi\u00f3n sin costo adicional para ti.',
    ],
    howTitle: 'C\u00f3mo funciona',
    howContent: [
      'Cuando recomendamos productos, servicios o experiencias en nuestras p\u00e1ginas de fiestas, algunas de estas recomendaciones incluyen enlaces de afiliados. Cuando haces clic en uno de estos enlaces y completas una compra, el comerciante nos paga una peque\u00f1a comisi\u00f3n.',
      'El precio que pagas es exactamente el mismo ya sea que uses nuestro enlace de afiliado o vayas directamente al sitio del comerciante.',
    ],
    commitTitle: 'Nuestro compromiso',
    commitItems: [
      'Solo recomendamos productos y servicios que creemos ofrecen un valor genuino.',
      'Nuestras recomendaciones editoriales no est\u00e1n influenciadas por comisiones de afiliados.',
      'Las relaciones de afiliados nunca afectan el precio que pagas.',
      'Identificamos claramente el contenido que contiene enlaces de afiliados.',
    ],
    questionsTitle: '\u00bfPreguntas?',
    questionsText: 'Si tienes preguntas sobre nuestras relaciones de afiliados, visita nuestra',
  },
};

export default async function LocaleAffiliateDisclosurePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isValidLocale(locale) || locale === 'en') notFound();

  const dict = getDictionary(locale as Locale);
  const content = CONTENT[locale as 'fr' | 'es'];
  const prefix = `/${locale}`;

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <a href={prefix} className="hover:text-primary-600">{dict['breadcrumb.home']}</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{t(dict, 'deals.disclosurePageTitle')}</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
        {t(dict, 'deals.disclosurePageTitle')}
      </h1>

      <div className="mt-6 space-y-4 text-base text-gray-700 leading-relaxed">
        {content.intro.map((p, i) => <p key={i}>{p}</p>)}

        <h2 className="text-xl font-bold text-gray-900 pt-4">{content.howTitle}</h2>
        {content.howContent.map((p, i) => <p key={i}>{p}</p>)}

        <h2 className="text-xl font-bold text-gray-900 pt-4">{content.commitTitle}</h2>
        <ul className="list-disc pl-6 space-y-2">
          {content.commitItems.map((item, i) => <li key={i}>{item}</li>)}
        </ul>

        <h2 className="text-xl font-bold text-gray-900 pt-4">{content.questionsTitle}</h2>
        <p>
          {content.questionsText} <a href={`${prefix}/about`} className="text-primary-600 hover:text-primary-700 underline">{dict['nav.about']}</a>.
        </p>
      </div>
    </article>
  );
}
