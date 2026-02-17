import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure — HolidayCount',
  description: 'Learn about how HolidayCount earns revenue through affiliate partnerships.',
  alternates: { canonical: '/affiliate-disclosure' },
};

export default function AffiliateDisclosurePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <nav aria-label="Breadcrumb" className="mb-6 text-sm text-gray-500">
        <a href="/" className="hover:text-primary-600">Home</a>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Affiliate Disclosure</span>
      </nav>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
        Affiliate Disclosure
      </h1>

      <div className="mt-6 space-y-4 text-base text-gray-700 leading-relaxed">
        <p>
          HolidayCount is a free resource that provides countdown timers, holiday information, and product recommendations for holidays worldwide. To keep this site free, we participate in affiliate marketing programs.
        </p>
        <p>
          Some of the links on this site are affiliate links. This means that if you click on a link and make a purchase, we may receive a small commission at no additional cost to you. These commissions help us maintain and improve HolidayCount.
        </p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">How It Works</h2>
        <p>
          When we recommend products, services, or experiences on our holiday pages, some of these recommendations include affiliate links. When you click one of these links and complete a purchase on the merchant&apos;s website, the merchant pays us a small referral fee.
        </p>
        <p>
          The price you pay is exactly the same whether you use our affiliate link or go directly to the merchant&apos;s website. Affiliate partnerships never increase the cost to you.
        </p>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Our Commitment</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>We only recommend products and services we believe provide genuine value.</li>
          <li>Our editorial recommendations are not influenced by affiliate commissions.</li>
          <li>Affiliate relationships never affect the price you pay.</li>
          <li>We clearly identify content that contains affiliate links.</li>
        </ul>

        <h2 className="text-xl font-bold text-gray-900 pt-4">Questions?</h2>
        <p>
          If you have any questions about our affiliate relationships, please visit our <a href="/about" className="text-primary-600 hover:text-primary-700 underline">About page</a>.
        </p>
      </div>
    </article>
  );
}
