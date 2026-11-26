'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '../../navigation';
import { useEffect, useState } from 'react';
import React from 'react';
import { Shield, MessageSquare, RotateCcw, DollarSign, Building2, CheckCircle, Menu, X, MapPin, ArrowUpRight } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

type ExpertiseItem = { title: string; description: string };
type PortfolioClient = { name: string; platform: string; link: string; image?: string };
type CorporateExperienceItem = { company: string; role: string; duration: string; image?: string };
type MediaPoliticalItem = { name: string; description: string; duration: string; platform?: string; link?: string; image?: string };
type TimelineItem = { year: string; title: string; description: string };
type PressArticle = { title: string; publication: string; date: string; link: string };

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12 text-center sm:mb-14">
      <div className="mx-auto mb-5 flex items-center justify-center gap-3" aria-hidden="true">
        <span className="h-px w-8 bg-accent" />
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        <span className="h-px w-8 bg-accent" />
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function platformLabel(platform: string, locale: string) {
  const labels: Record<string, [string, string]> = {
    facebook: ['Facebook', 'فيسبوك'],
    instagram: ['Instagram', 'إنستغرام'],
    tiktok: ['TikTok', 'تيك توك'],
    youtube: ['YouTube', 'يوتيوب'],
  };
  const pair = labels[platform];
  if (!pair) return platform;
  return locale === 'ar' ? pair[1] : pair[0];
}

function PlatformMark({ platform }: { platform: string }) {
  if (platform === 'facebook') return <FaFacebook className="h-3.5 w-3.5 text-blue-600" />;
  if (platform === 'instagram') return <FaInstagram className="h-3.5 w-3.5 text-pink-600" />;
  if (platform === 'tiktok') return <FaTiktok className="h-3.5 w-3.5 text-foreground" />;
  if (platform === 'youtube') return <FaYoutube className="h-3.5 w-3.5 text-red-600" />;
  return null;
}

const socialLinks = [
  {
    href: 'https://wa.me/9647722100533',
    key: 'whatsapp',
    labelEn: 'WhatsApp',
    labelAr: 'واتساب',
    path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z',
  },
  {
    href: 'https://www.instagram.com/alisabaawi98',
    key: 'instagram',
    labelEn: 'Instagram',
    labelAr: 'إنستغرام',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    href: 'https://www.facebook.com/ali.sabaawi.official/',
    key: 'facebook',
    labelEn: 'Facebook',
    labelAr: 'فيسبوك',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    href: 'https://tiktok.com/@alisabaawi98',
    key: 'tiktok',
    labelEn: 'TikTok',
    labelAr: 'تيك توك',
    path: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z',
  },
  {
    href: 'https://www.youtube.com/@ali.sabaawi',
    key: 'youtube',
    labelEn: 'YouTube',
    labelAr: 'يوتيوب',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
];

function SocialRow({ locale, tone }: { locale: string; tone: 'light' | 'dark' }) {
  const base = tone === 'dark'
    ? 'border-white/15 text-white hover:border-accent hover:text-accent'
    : 'border-border text-foreground hover:border-primary hover:text-primary dark:hover:border-secondary dark:hover:text-secondary';

  return (
    <div className="flex items-center gap-2.5">
      {socialLinks.map((item) => (
        <a
          key={item.key}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${base}`}
          aria-label={locale === 'ar' ? item.labelAr : item.labelEn}
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d={item.path} />
          </svg>
        </a>
      ))}
    </div>
  );
}

function ProfileLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-primary transition-colors hover:text-primary-dark dark:text-secondary"
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = saved ? saved === 'true' : prefersDark;
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleDarkMode = () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDark.toString());
    setIsDark(isDark);
  };

  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const highlights = locale === 'ar'
    ? [
        { label: 'الموقع', value: 'الموصل، العراق' },
        { label: 'الميلاد', value: '1998' },
        { label: 'المنصب', value: 'المدير التنفيذي' },
      ]
    : [
        { label: 'Based in', value: 'Mosul, Iraq' },
        { label: 'Born', value: '1998' },
        { label: 'Role', value: 'Executive Director' },
      ];

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '#about', label: t('nav.about') },
    { href: '#expertise', label: t('nav.expertise') },
    { href: '#services', label: t('nav.services') },
    { href: '#portfolio', label: t('nav.portfolio') },
  ];

  return (
    <main className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              <span className="text-foreground font-semibold tracking-tight text-lg">{locale === 'ar' ? 'علي سبعاوي' : 'Ali Sabawi'}</span>
            </Link>
            <div className="hidden md:flex items-center gap-7">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-foreground/80 hover:text-primary dark:hover:text-secondary transition-colors font-medium">
                  {item.label}
                </Link>
              ))}
              <a href="https://wa.me/9647722100533" className="text-sm text-foreground/80 hover:text-primary dark:hover:text-secondary transition-colors font-medium">
                {t('nav.contact')}
              </a>
            </div>
            <div className="flex items-center space-x-3 sm:space-x-4">
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                className="md:hidden rounded-lg border border-border p-2 text-foreground transition-colors hover:bg-gray-50 dark:hover:bg-navy-light"
                aria-expanded={menuOpen}
                aria-label={menuOpen ? (locale === 'ar' ? 'إغلاق القائمة' : 'Close menu') : (locale === 'ar' ? 'فتح القائمة' : 'Open menu')}
              >
                {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
              <button
                onClick={toggleDarkMode}
                className="bg-primary hover:bg-primary-dark text-white p-2 rounded-lg transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
              <Link
                href="/"
                locale={locale === 'en' ? 'ar' : 'en'}
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
              >
                {locale === 'en' ? 'العربية' : 'English'}
              </Link>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 py-3">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-foreground font-medium transition-colors hover:bg-gray-50 hover:text-primary dark:hover:bg-navy-light dark:hover:text-secondary"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/9647722100533"
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-foreground font-medium transition-colors hover:bg-gray-50 hover:text-primary dark:hover:bg-navy-light dark:hover:text-secondary"
              >
                {t('nav.contact')}
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 end-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 start-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div className="text-center lg:text-start">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground shadow-sm">
              <MapPin className="h-4 w-4 text-accent" />
              {t('hero.location')}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {t('hero.title')}
            </h1>
            <p className="mt-4 text-base font-medium text-primary dark:text-secondary sm:text-lg">
              {t('hero.subtitle')}
            </p>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-300 lg:mx-0 lg:text-lg">
              {t('hero.intro')}
            </p>
            <div className="mt-8 flex flex-col items-center gap-5 sm:flex-row lg:justify-start">
              <a
                href="#expertise"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
              >
                {t('hero.exploreExperience')}
              </a>
              <SocialRow locale={locale} tone="light" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-3 rounded-[2rem] border border-accent/50" aria-hidden="true" />
              <div className="relative h-80 w-64 overflow-hidden rounded-[1.7rem] border border-border bg-card shadow-xl sm:h-[26rem] sm:w-80">
                <img
                  src="/alisab.png"
                  alt={locale === 'ar' ? 'علي سبعاوي' : 'Ali Sabawi'}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-3 start-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground shadow-md">
                <CheckCircle className="h-4 w-4 text-primary dark:text-secondary" />
                {locale === 'ar' ? 'خبير تقني' : 'Technology Expert'}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 border-t border-border bg-gray-50 px-4 py-20 dark:bg-navy-light/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title={t('about.title')} />
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="h-1 bg-gradient-to-r from-primary via-primary to-accent" aria-hidden="true" />
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_220px] lg:gap-12">
              <p className="text-base leading-8 text-gray-700 dark:text-gray-300 sm:text-lg">
                {t('about.content')}
              </p>
              <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-xl border border-border bg-gray-50 px-4 py-4 dark:bg-navy-light/50">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">{item.label}</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="expertise" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title={t('expertise.title')} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(t.raw('expertise.items') as Record<string, ExpertiseItem>).map(([key, item], index) => (
              <div
                key={key}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-start shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-secondary/15 dark:text-secondary">
                    {key === 'cybersecurity' && <Shield className="h-5 w-5" />}
                    {key === 'socialMedia' && <MessageSquare className="h-5 w-5" />}
                    {key === 'accountRecovery' && <RotateCcw className="h-5 w-5" />}
                    {key === 'monetization' && <DollarSign className="h-5 w-5" />}
                  </div>
                  <span className="text-xs font-semibold tracking-[0.18em] text-accent">0{index + 1}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-t border-border bg-gray-50 px-4 py-20 dark:bg-navy-light/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title={t('services.title')} subtitle={t('services.subtitle')} />

          <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-10">
                <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
                  {t('services.accountRecovery.title')}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  {t('services.accountRecovery.description')}
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-gray-50 p-4 dark:bg-navy-light/40">
                    <FaFacebook className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <div>
                      <h4 className="font-semibold text-foreground">{locale === 'ar' ? 'فيسبوك' : 'Facebook'}</h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{t('services.accountRecovery.facebook')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-xl border border-border bg-gray-50 p-4 dark:bg-navy-light/40">
                    <FaInstagram className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-600" />
                    <div>
                      <h4 className="font-semibold text-foreground">{locale === 'ar' ? 'إنستغرام' : 'Instagram'}</h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{t('services.accountRecovery.instagram')}</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/9647722100533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                >
                  {t('services.getStarted')}
                </a>
              </div>
              <div className="border-t border-border bg-gray-50/80 p-8 dark:bg-navy/30 sm:p-10 lg:border-s lg:border-t-0">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                    <RotateCcw className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                      {locale === 'ar' ? 'خدمة مميزة' : 'Featured Service'}
                    </p>
                    <h4 className="text-lg font-semibold text-foreground">{locale === 'ar' ? 'استعادة الحسابات' : 'Account Recovery'}</h4>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {locale === 'ar' ? 'عملية استعادة آمنة للحساب' : 'Secure account restoration process'}
                </p>
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border bg-card p-4 text-center">
                    <FaFacebook className="mx-auto h-5 w-5 text-blue-600" />
                    <p className="mt-2 text-sm font-semibold text-foreground">{locale === 'ar' ? 'فيسبوك' : 'Facebook'}</p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{locale === 'ar' ? 'حسب الأهلية' : 'By eligibility'}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-4 text-center">
                    <FaInstagram className="mx-auto h-5 w-5 text-pink-600" />
                    <p className="mt-2 text-sm font-semibold text-foreground">{locale === 'ar' ? 'إنستغرام' : 'Instagram'}</p>
                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{locale === 'ar' ? 'حسب الأهلية' : 'By eligibility'}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-5 text-xs font-medium text-gray-500 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary dark:text-secondary" />{locale === 'ar' ? 'عملية آمنة' : 'Secure process'}</span>
                  <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary dark:text-secondary" />{locale === 'ar' ? 'سرعة في التنفيذ' : 'Fast turnaround'}</span>
                  <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary dark:text-secondary" />{locale === 'ar' ? 'دعم مباشر' : 'Direct support'}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="grid lg:grid-cols-2">
              <div className="order-2 border-t border-border bg-gray-50/80 p-8 dark:bg-navy/30 sm:p-10 lg:order-1 lg:border-e lg:border-t-0">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                      {locale === 'ar' ? 'خدمة احترافية' : 'Professional Service'}
                    </p>
                    <h4 className="text-lg font-semibold text-foreground">{locale === 'ar' ? 'تحقيق الدخل' : 'Monetization'}</h4>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {locale === 'ar' ? 'حلول سحب الإيرادات والضرائب' : 'Revenue withdrawal and tax solutions'}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="rounded-xl border border-border bg-card p-3 text-center sm:p-4">
                    <FaFacebook className="mx-auto h-5 w-5 text-blue-600" />
                    <p className="mt-2 text-xs font-semibold text-foreground sm:text-sm">{locale === 'ar' ? 'فيسبوك' : 'Facebook'}</p>
                    <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">{locale === 'ar' ? 'حسب العقد' : 'Per contract'}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-3 text-center sm:p-4">
                    <FaYoutube className="mx-auto h-5 w-5 text-red-600" />
                    <p className="mt-2 text-xs font-semibold text-foreground sm:text-sm">{locale === 'ar' ? 'يوتيوب' : 'YouTube'}</p>
                    <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">{locale === 'ar' ? 'حسب العقد' : 'Per contract'}</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-3 text-center sm:p-4">
                    <FaTiktok className="mx-auto h-5 w-5 text-foreground" />
                    <p className="mt-2 text-xs font-semibold text-foreground sm:text-sm">{locale === 'ar' ? 'تيك توك' : 'TikTok'}</p>
                    <p className="mt-1 text-[11px] text-gray-500 dark:text-gray-400">{locale === 'ar' ? 'خدمة مباشرة' : 'Direct service'}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 border-t border-border pt-5 text-xs font-medium text-gray-500 dark:text-gray-400">
                  <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary dark:text-secondary" />{locale === 'ar' ? 'سحب آمن' : 'Secure payout'}</span>
                  <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary dark:text-secondary" />{locale === 'ar' ? 'سرعة في التنفيذ' : 'Fast turnaround'}</span>
                  <span className="inline-flex items-center gap-1.5"><CheckCircle className="h-3.5 w-3.5 text-primary dark:text-secondary" />{locale === 'ar' ? 'دعم مباشر' : 'Direct support'}</span>
                </div>
              </div>
              <div className="order-1 p-8 sm:p-10 lg:order-2">
                <h3 className="text-2xl font-semibold text-foreground sm:text-3xl">
                  {t('services.monetization.title')}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600 dark:text-gray-300">
                  {t('services.monetization.description')}
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    { icon: <FaFacebook className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />, name: locale === 'ar' ? 'فيسبوك' : 'Facebook', text: t('services.monetization.facebook') },
                    { icon: <FaYoutube className="mt-0.5 h-5 w-5 flex-shrink-0 text-red-600" />, name: locale === 'ar' ? 'يوتيوب' : 'YouTube', text: t('services.monetization.youtube') },
                    { icon: <FaTiktok className="mt-0.5 h-5 w-5 flex-shrink-0 text-foreground" />, name: locale === 'ar' ? 'تيك توك' : 'TikTok', text: t('services.monetization.tiktok') },
                  ].map((row) => (
                    <div key={row.name} className="flex items-start gap-3 rounded-xl border border-border bg-gray-50 p-4 dark:bg-navy-light/40">
                      {row.icon}
                      <div>
                        <h4 className="font-semibold text-foreground">{row.name}</h4>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{row.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/9647722100533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-dark"
                >
                  {t('services.getStarted')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t('socialMediaPortfolio.title')} subtitle={t('socialMediaPortfolio.subtitle')} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(t.raw('socialMediaPortfolio.clients') as PortfolioClient[]).map((client, index) => (
              <div
                key={index}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 text-start shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  {client.image ? (
                    <img src={client.image} alt={client.name} className="h-14 w-14 rounded-full object-cover ring-2 ring-border" />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                      {client.name?.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h4 className="truncate text-base font-semibold text-foreground">{client.name}</h4>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                      <PlatformMark platform={client.platform} />
                      {platformLabel(client.platform, locale)}
                    </p>
                  </div>
                </div>
                {client.link ? (
                  <ProfileLink href={client.link} label={t('common.viewProfile')} />
                ) : (
                  <span className="mt-auto pt-5 text-sm text-gray-400 dark:text-gray-500">{t('common.pendingVerification')}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gray-50 px-4 py-20 dark:bg-navy-light/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title={t('corporateExperience.title')} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {(t.raw('corporateExperience.items') as CorporateExperienceItem[]).map((item, index) => (
              <div
                key={index}
                className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-6 text-start shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                {item.image ? (
                  <img src={item.image} alt={item.company} className="h-14 w-14 flex-shrink-0 rounded-xl object-cover ring-1 ring-border" />
                ) : (
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-secondary/15 dark:text-secondary">
                    <Building2 className="h-6 w-6" />
                  </div>
                )}
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold text-foreground">{item.company}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{item.role}</p>
                  {item.duration ? (
                    <p className="mt-3 inline-flex rounded-full border border-border bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-navy-light dark:text-gray-300">
                      {item.duration}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title={t('fashionRetail.title')} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(t.raw('fashionRetail.items') as PortfolioClient[]).map((item, index) => (
              <div
                key={index}
                className="flex h-full flex-col rounded-2xl border border-border bg-card p-5 text-start shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="h-14 w-14 rounded-full object-cover ring-2 ring-border" />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                      {item.name?.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h4 className="text-base font-semibold text-foreground">{item.name}</h4>
                    <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400">
                      <PlatformMark platform={item.platform} />
                      {platformLabel(item.platform, locale)}
                    </p>
                  </div>
                </div>
                {item.link ? (
                  <ProfileLink href={item.link} label={t('common.viewProfile')} />
                ) : (
                  <span className="mt-auto pt-5 text-sm text-gray-400 dark:text-gray-500">{t('common.pendingVerification')}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gray-50 px-4 py-20 dark:bg-navy-light/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title={t('mediaPolitical.title')} subtitle={t('mediaPolitical.subtitle')} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {(t.raw('mediaPolitical.items') as MediaPoliticalItem[]).map((item, index) => (
              <div key={index} className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-start shadow-sm">
                <div className="flex items-center gap-4">
                  {item.image ? (
                    <img src={item.image} alt={item.name} className="h-16 w-16 flex-shrink-0 rounded-full object-cover ring-2 ring-border" />
                  ) : (
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-white">
                      {item.name?.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground">{item.name}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent">{item.duration}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.description}</p>
                {item.link ? <ProfileLink href={item.link} label={t('common.viewProfile')} /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading title={t('pressCoverage.title')} subtitle={t('pressCoverage.subtitle')} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {(t.raw('pressCoverage.articles') as PressArticle[]).map((article, index) => (
              <a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 text-start shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary dark:text-secondary">
                    {article.publication}
                  </p>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">{article.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-foreground">{article.title}</h3>
                <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-semibold text-primary transition-colors group-hover:text-primary-dark dark:text-secondary">
                  {t('pressCoverage.readArticle')}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gray-50 px-4 py-20 dark:bg-navy-light/40 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title={t('timeline.title')} />
          <div className="relative space-y-4">
            <div className="absolute bottom-4 start-[7px] top-4 w-px bg-border" aria-hidden="true" />
            {(t.raw('timeline.items') as TimelineItem[]).map((item, index) => (
              <div key={index} className="relative ps-10">
                <div className="absolute start-0 top-7 h-4 w-4 rounded-full border-2 border-accent bg-card" aria-hidden="true" />
                <div className="rounded-2xl border border-border bg-card p-6 text-start shadow-sm">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{item.year}</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-navy px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-3 md:items-start">
            <p className="text-sm font-medium text-white/90">{t('footer.title')}</p>
            <SocialRow locale={locale} tone="dark" />
          </div>
          <div className="flex flex-col items-center gap-2 text-sm text-white/60">
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="transition-colors hover:text-accent">{t('footer.privacy')}</Link>
              <Link href="/terms" className="transition-colors hover:text-accent">{t('footer.terms')}</Link>
            </div>
            <p>{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
