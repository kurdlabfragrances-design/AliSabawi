import Link from 'next/link';

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-white dark:bg-navy py-20 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-4xl mx-auto">
        <Link
          href={`/${locale}`}
          className="text-primary dark:text-secondary hover:text-primary-dark dark:hover:text-accent mb-8 inline-block"
        >
          ← Home
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>

        <div className="bg-gray-50 dark:bg-navy-light rounded-xl p-8 border border-gray-200 dark:border-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Acceptance of Terms</h2>
            <p className="text-gray-700 dark:text-gray-300">
              By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Use License</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The materials on this website are provided on an &apos;as is&apos; basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Limitations</h2>
            <p className="text-gray-700 dark:text-gray-300">
              In no event shall we be liable for any damages arising out of the use or inability to use the materials on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Services</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Account recovery and monetization services are subject to eligibility requirements and terms of service of the respective platforms. Results are not guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Any questions regarding these Terms of Service should be directed to us through the contact form on this website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Last Updated</h2>
            <p className="text-gray-700 dark:text-gray-300">January 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}
