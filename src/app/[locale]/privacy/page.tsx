import Link from 'next/link';

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
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

        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>

        <div className="bg-gray-50 dark:bg-navy-light rounded-xl p-8 border border-gray-200 dark:border-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Information Collection</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We collect information you provide directly to us through contact forms, including your name, email address, and message content. This information is used solely for responding to your inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Use of Information</h2>
            <p className="text-gray-700 dark:text-gray-300">
              The information we collect is used to provide requested services, respond to inquiries, and improve our communication. We do not sell or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Data Security</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Third-Party Links</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This website may contain links to third-party websites. We are not responsible for the privacy practices of such external sites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-secondary mb-4">Contact</h2>
            <p className="text-gray-700 dark:text-gray-300">
              For any privacy-related inquiries, please contact us through the contact form on this website.
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
