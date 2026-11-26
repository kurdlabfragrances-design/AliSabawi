import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import "../globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex",
  display: "swap",
});

const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-ar",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ali Sabawi | Technology Expert | Digital Content Creator | Cybersecurity",
  description: "Ali Sabawi - Iraqi technology expert and digital content creator from Mosul (born 1998), specializing in cybersecurity, social media platform solutions, and managing accounts for content creators and public figures. علي سبعاوي - خبير تقني وصانع محتوى رقمي عراقي من مدينة الموصل، متخصص في الأمن السيبراني وحلول منصات التواصل الاجتماعي.",
  keywords: ["Ali Sabawi", "Technology Expert", "Digital Content Creator", "Cybersecurity", "Digital Solutions", "Mosul", "Iraq", "TikTok LIVE", "Social Media Management", "علي سبعاوي", "خبير تقني", "صانع محتوى رقمي", "أمن سيبراني", "حلول رقمية", "الموصل", "العراق"],
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export const instant = false;

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const messages = await getMessages({ locale });
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${plexSans.variable} ${plexArabic.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
