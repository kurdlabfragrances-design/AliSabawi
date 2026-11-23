'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '../../navigation';
import { useEffect, useState } from 'react';
import React from 'react';
import { Shield, MessageSquare, RotateCcw, DollarSign, Building2, CheckCircle } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

type ExpertiseItem = { title: string; description: string };
type PortfolioClient = { name: string; platform: string; link: string; image?: string };
type CorporateExperienceItem = { company: string; role: string; duration: string };
type MediaPoliticalItem = { name: string; description: string; duration: string; platform?: string; link?: string; image?: string };
type TimelineItem = { year: string; title: string; description: string };

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

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-foreground font-bold text-xl">{locale === 'ar' ? 'علي سبعاوي' : 'Ali Sabawi'}</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary dark:hover:text-secondary transition-colors font-medium">{t('nav.home')}</Link>
              <Link href="#about" className="text-foreground hover:text-primary dark:hover:text-secondary transition-colors font-medium">{t('nav.about')}</Link>
              <Link href="#expertise" className="text-foreground hover:text-primary dark:hover:text-secondary transition-colors font-medium">{t('nav.expertise')}</Link>
              <Link href="#services" className="text-foreground hover:text-primary dark:hover:text-secondary transition-colors font-medium">{t('nav.services')}</Link>
              <Link href="#portfolio" className="text-foreground hover:text-primary dark:hover:text-secondary transition-colors font-medium">{t('nav.portfolio')}</Link>
              <Link href="https://wa.me/9647722100533" className="text-foreground hover:text-primary dark:hover:text-secondary transition-colors font-medium">{t('nav.contact')}</Link>
            </div>
            <div className="flex items-center space-x-4">
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
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-navy-light/50 transition-colors relative overflow-hidden">
        {/* Background Shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-start">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                {t('hero.title')}
              </h1>
              <p className="text-primary dark:text-secondary text-lg sm:text-xl mb-4 font-semibold">
                {t('hero.subtitle')}
              </p>
              <p className="text-foreground mb-2">
                <span className="inline-flex items-center">
                  📍 {t('hero.location')}
                </span>
              </p>
              <p className="text-foreground text-lg mb-8 max-w-2xl leading-relaxed">
                {t('hero.intro')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                <a
                  href="#expertise"
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center"
                >
                  {t('hero.exploreExperience')}
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href="https://wa.me/9647722100533"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                    aria-label={locale === 'ar' ? 'واتساب' : 'WhatsApp'}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/alisabaawi98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:opacity-90 rounded-full flex items-center justify-center transition-opacity"
                    aria-label={locale === 'ar' ? 'إنستغرام' : 'Instagram'}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/ali.sabaawi.official/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label={locale === 'ar' ? 'فيسبوك' : 'Facebook'}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://tiktok.com/@alisabaawi98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors"
                    aria-label={locale === 'ar' ? 'تيك توك' : 'TikTok'}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@ali.sabaawi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors"
                    aria-label={locale === 'ar' ? 'يوتيوب' : 'YouTube'}
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-xl border-8 border-primary/20 ring-4 ring-primary/10">
                  <img
                    src="/alisab.png"
                    alt={locale === 'ar' ? 'علي سبعاوي' : 'Ali Sabawi'}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 w-12 h-12 bg-primary rounded-full flex items-center justify-center border-4 border-white dark:border-navy shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-background transition-colors">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
            {t('about.title')}
          </h2>
          <div className="bg-card rounded-2xl p-8 border border-border">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              {t('about.content')}
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-12 px-4 sm:px-6 lg:px-8 bg-background transition-colors">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            {t('expertise.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {Object.entries(t.raw('expertise.items') as Record<string, ExpertiseItem>).map(([key, item], index) => {
              const gradients = [
                'from-blue-500 to-indigo-600',
                'from-green-500 to-emerald-600',
                'from-orange-500 to-red-600',
                'from-pink-500 to-purple-600'
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div
                  key={key}
                  className="bg-card rounded-xl p-4 border border-border text-center"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-3`}>
                    {key === 'cybersecurity' && <Shield className="w-6 h-6 text-white" />}
                    {key === 'socialMedia' && <MessageSquare className="w-6 h-6 text-white" />}
                    {key === 'accountRecovery' && <RotateCcw className="w-6 h-6 text-white" />}
                    {key === 'monetization' && <DollarSign className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-foreground text-xs">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-navy-light/50 transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
            {t('services.title')}
          </h2>
          <p className="text-foreground text-center mb-12 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>

          {/* Account Recovery Service */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className={locale === 'ar' ? 'order-2 lg:order-1' : 'order-1 lg:order-1'}>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary dark:text-secondary mb-4">
                  {t('services.accountRecovery.title')}
                </h3>
                <p className="text-foreground text-lg mb-6 leading-relaxed">
                  {t('services.accountRecovery.description')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary dark:text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <FaFacebook className="w-5 h-5 text-blue-600" />
                        {locale === 'ar' ? 'فيسبوك' : 'Facebook'}
                      </h4>
                      <p className="text-foreground text-sm">{t('services.accountRecovery.facebook')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary dark:text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <FaInstagram className="w-5 h-5 text-pink-600" />
                        {locale === 'ar' ? 'إنستغرام' : 'Instagram'}
                      </h4>
                      <p className="text-foreground text-sm">{t('services.accountRecovery.instagram')}</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/9647722100533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-8 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  {t('services.getStarted')}
                </a>
              </div>

              {/* Visual Content */}
              <div className={locale === 'ar' ? 'order-1 lg:order-2' : 'order-2 lg:order-2'}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
                    <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                    <div className="p-8 sm:p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0">
                          <RotateCcw className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-start">
                          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary dark:text-secondary mb-1">
                            {locale === 'ar' ? 'خدمة مميزة' : 'Featured Service'}
                          </span>
                          <h4 className="text-xl font-bold text-foreground">{locale === 'ar' ? 'استعادة الحسابات' : 'Account Recovery'}</h4>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8">
                        {locale === 'ar' ? 'عملية استعادة آمنة للحساب' : 'Secure account restoration process'}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="group bg-gray-50 dark:bg-navy-light/60 rounded-xl p-4 text-center border border-border hover:border-blue-500/50 hover:shadow-md transition-all">
                          <div className="w-11 h-11 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <FaFacebook className="w-5 h-5 text-blue-600" />
                          </div>
                          <p className="text-sm font-semibold text-foreground">{locale === 'ar' ? 'فيسبوك' : 'Facebook'}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{locale === 'ar' ? 'حسب الأهلية' : 'By eligibility'}</p>
                        </div>
                        <div className="group bg-gray-50 dark:bg-navy-light/60 rounded-xl p-4 text-center border border-border hover:border-pink-500/50 hover:shadow-md transition-all">
                          <div className="w-11 h-11 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <FaInstagram className="w-5 h-5 text-pink-600" />
                          </div>
                          <p className="text-sm font-semibold text-foreground">{locale === 'ar' ? 'إنستغرام' : 'Instagram'}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{locale === 'ar' ? 'حسب الأهلية' : 'By eligibility'}</p>
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                        <span className="inline-flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {locale === 'ar' ? 'عملية آمنة' : 'Secure process'}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {locale === 'ar' ? 'سرعة في التنفيذ' : 'Fast turnaround'}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {locale === 'ar' ? 'دعم مباشر' : 'Direct support'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Monetization Service */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Visual Content */}
              <div className={locale === 'ar' ? 'order-2 lg:order-1' : 'order-1 lg:order-1'}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-xl"></div>
                  <div className="relative bg-card rounded-3xl shadow-2xl border border-border overflow-hidden">
                    <div className="h-1.5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
                    <div className="p-8 sm:p-10">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30 flex-shrink-0">
                          <DollarSign className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-start">
                          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary dark:text-secondary mb-1">
                            {locale === 'ar' ? 'خدمة احترافية' : 'Professional Service'}
                          </span>
                          <h4 className="text-xl font-bold text-foreground">{locale === 'ar' ? 'تحقيق الدخل' : 'Monetization'}</h4>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-8">
                        {locale === 'ar' ? 'حلول سحب الإيرادات والضرائب' : 'Revenue withdrawal and tax solutions'}
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="group bg-gray-50 dark:bg-navy-light/60 rounded-xl p-4 text-center border border-border hover:border-blue-500/50 hover:shadow-md transition-all">
                          <div className="w-11 h-11 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <FaFacebook className="w-5 h-5 text-blue-600" />
                          </div>
                          <p className="text-sm font-semibold text-foreground">{locale === 'ar' ? 'فيسبوك' : 'Facebook'}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{locale === 'ar' ? 'حسب العقد' : 'Per contract'}</p>
                        </div>
                        <div className="group bg-gray-50 dark:bg-navy-light/60 rounded-xl p-4 text-center border border-border hover:border-red-500/50 hover:shadow-md transition-all">
                          <div className="w-11 h-11 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <FaYoutube className="w-5 h-5 text-red-600" />
                          </div>
                          <p className="text-sm font-semibold text-foreground">{locale === 'ar' ? 'يوتيوب' : 'YouTube'}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{locale === 'ar' ? 'حسب العقد' : 'Per contract'}</p>
                        </div>
                        <div className="group bg-gray-50 dark:bg-navy-light/60 rounded-xl p-4 text-center border border-border hover:border-gray-500/50 hover:shadow-md transition-all">
                          <div className="w-11 h-11 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                            <FaTiktok className="w-5 h-5 text-white" />
                          </div>
                          <p className="text-sm font-semibold text-foreground">{locale === 'ar' ? 'تيك توك' : 'TikTok'}</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{locale === 'ar' ? 'خدمة مباشرة' : 'Direct service'}</p>
                        </div>
                      </div>
                      <div className="mt-8 pt-6 border-t border-border flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                        <span className="inline-flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {locale === 'ar' ? 'سحب آمن' : 'Secure payout'}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {locale === 'ar' ? 'سرعة في التنفيذ' : 'Fast turnaround'}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {locale === 'ar' ? 'دعم مباشر' : 'Direct support'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className={locale === 'ar' ? 'order-1 lg:order-2' : 'order-2 lg:order-2'}>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary dark:text-secondary mb-4">
                  {t('services.monetization.title')}
                </h3>
                <p className="text-foreground text-lg mb-6 leading-relaxed">
                  {t('services.monetization.description')}
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary dark:text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <FaFacebook className="w-5 h-5 text-blue-600" />
                        {locale === 'ar' ? 'فيسبوك' : 'Facebook'}
                      </h4>
                      <p className="text-foreground text-sm">{t('services.monetization.facebook')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary dark:text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <FaYoutube className="w-5 h-5 text-red-600" />
                        {locale === 'ar' ? 'يوتيوب' : 'YouTube'}
                      </h4>
                      <p className="text-foreground text-sm">{t('services.monetization.youtube')}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary dark:text-secondary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <FaTiktok className="w-5 h-5 text-black dark:text-white" />
                        {locale === 'ar' ? 'تيك توك' : 'TikTok'}
                      </h4>
                      <p className="text-foreground text-sm">{t('services.monetization.tiktok')}</p>
                    </div>
                  </div>
                </div>
                <a
                  href="https://wa.me/9647722100533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-8 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  {t('services.getStarted')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Portfolio */}
      <section id="portfolio" className="py-12 px-4 sm:px-6 lg:px-8 bg-background transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
            {t('socialMediaPortfolio.title')}
          </h2>
          <p className="text-foreground text-center mb-12 max-w-2xl mx-auto">
            {t('socialMediaPortfolio.subtitle')}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {(t.raw('socialMediaPortfolio.clients') as PortfolioClient[]).map((client, index) => {
              const gradients = [
                'from-blue-500/10 to-indigo-500/10',
                'from-green-500/10 to-emerald-500/10',
                'from-orange-500/10 to-red-500/10',
                'from-pink-500/10 to-purple-500/10',
                'from-cyan-500/10 to-teal-500/10',
                'from-amber-500/10 to-yellow-500/10'
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${gradient} rounded-lg p-3 border border-border hover:border-primary dark:hover:border-secondary transition-all`}
                >
                  <div className="flex items-center gap-4 mb-3">
                    {client.image ? (
                      <img
                        src={client.image}
                        alt={client.name}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                      />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl">
                        {client.name?.charAt(0)}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-bold text-foreground truncate">{client.name}</h4>
                      <div className="flex items-center gap-1.5">
                        {client.platform === 'facebook' && <FaFacebook className="w-4 h-4 text-blue-600" />}
                        {client.platform === 'instagram' && <FaInstagram className="w-4 h-4 text-pink-600" />}
                        {client.platform === 'tiktok' && <FaTiktok className="w-4 h-4 text-black dark:text-white" />}
                        {client.platform === 'youtube' && <FaYoutube className="w-4 h-4 text-red-600" />}
                      </div>
                    </div>
                  </div>
                  {client.link ? (
                    <a
                      href={client.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary hover:bg-primary/20 dark:hover:bg-secondary/20 px-2 py-1 rounded transition-colors text-[10px] font-medium"
                    >
                      {t('common.viewProfile')}
                    </a>
                  ) : (
                    <span className="text-gray-400 dark:text-gray-500 text-[10px]">{t('common.pendingVerification')}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Experience */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            {t('corporateExperience.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(t.raw('corporateExperience.items') as CorporateExperienceItem[]).map((item, index) => {
              const gradients = [
                'from-blue-500 via-indigo-500 to-purple-600',
                'from-green-500 via-emerald-500 to-teal-600',
                'from-orange-500 via-amber-500 to-red-600',
                'from-pink-500 via-rose-500 to-purple-600'
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary dark:hover:border-secondary hover:shadow-lg transition-all text-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${gradient} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.company}</h3>
                  <p className="text-primary dark:text-secondary text-sm mb-1">{item.role}</p>
                  {item.duration && <p className="text-foreground text-xs">{item.duration}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Fashion and Retail */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            {t('fashionRetail.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(t.raw('fashionRetail.items') as PortfolioClient[]).map((item, index) => {
              const gradients = [
                'from-pink-500 via-rose-500 to-red-500',
                'from-purple-500 via-violet-500 to-indigo-500',
                'from-blue-500 via-cyan-500 to-teal-500',
                'from-orange-500 via-amber-500 to-yellow-500'
              ];
              const gradient = gradients[index % gradients.length];
              
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary dark:hover:border-secondary hover:shadow-lg transition-all text-center"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover mx-auto mb-4 ring-2 ring-primary/20 shadow-md"
                    />
                  ) : (
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${gradient} flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-md`}>
                      {item.name?.charAt(0)}
                    </div>
                  )}
                  <h4 className="text-lg font-bold text-foreground mb-2">{item.name}</h4>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    {item.platform === 'facebook' && <FaFacebook className="w-4 h-4 text-blue-600" />}
                    {item.platform === 'instagram' && <FaInstagram className="w-4 h-4 text-pink-600" />}
                    {item.platform === 'tiktok' && <FaTiktok className="w-4 h-4 text-black dark:text-white" />}
                    {item.platform === 'youtube' && <FaYoutube className="w-4 h-4 text-red-600" />}
                    <p className="text-sm text-primary dark:text-secondary capitalize">
                      {locale === 'ar'
                        ? (item.platform === 'facebook' ? 'فيسبوك' : item.platform === 'instagram' ? 'إنستغرام' : item.platform === 'tiktok' ? 'تيك توك' : item.platform === 'youtube' ? 'يوتيوب' : item.platform)
                        : item.platform}
                    </p>
                  </div>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                      {t('common.viewProfile')} →
                    </a>
                  ) : (
                    <span className="text-gray-400 dark:text-gray-500 text-sm">{t('common.pendingVerification')}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Media and Political */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card transition-colors">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
            {t('mediaPolitical.title')}
          </h2>
          <p className="text-foreground text-center mb-12 max-w-2xl mx-auto">
            {t('mediaPolitical.subtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(t.raw('mediaPolitical.items') as MediaPoliticalItem[]).map((item, index) => {
              const gradients = [
                'from-pink-500 via-rose-500 to-red-500',
                'from-purple-500 via-violet-500 to-indigo-500'
              ];
              const gradient = gradients[index % gradients.length];

              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary dark:hover:border-secondary hover:shadow-lg transition-all text-center"
                >
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full object-cover mx-auto mb-4 ring-2 ring-primary/20 shadow-md"
                    />
                  ) : (
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-tr ${gradient} flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-md`}>
                      {item.name?.charAt(0)}
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.name}</h3>
                  <p className="text-foreground mb-2">{item.description}</p>
                  <p className="text-primary dark:text-secondary text-sm mb-3">{item.duration}</p>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                      {t('common.viewProfile')} →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-card transition-colors">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            {t('timeline.title')}
          </h2>
          <div className="space-y-8">
            {(t.raw('timeline.items') as TimelineItem[]).map((item, index) => (
              <div
                key={index}
                className="relative pl-8 border-l-2 border-primary dark:border-secondary"
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 bg-primary dark:bg-secondary rounded-full"></div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <span className="text-primary dark:text-secondary font-bold text-sm">{item.year}</span>
                  <h3 className="text-xl font-bold text-foreground mt-2 mb-2">{item.title}</h3>
                  <p className="text-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-8 px-4 sm:px-6 lg:px-8 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center md:items-start gap-2">
              <p className="text-foreground text-sm">{t('footer.title')}</p>
              <div className="flex items-center gap-4">
                <a href="https://wa.me/9647722100533" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors" aria-label={locale === 'ar' ? 'واتساب' : 'WhatsApp'}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/alisabaawi98" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-pink-600 dark:hover:text-pink-400 transition-colors" aria-label={locale === 'ar' ? 'إنستغرام' : 'Instagram'}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://www.facebook.com/ali.sabaawi.official/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label={locale === 'ar' ? 'فيسبوك' : 'Facebook'}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com/@alisabaawi98" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-gray-900 dark:hover:text-white transition-colors" aria-label={locale === 'ar' ? 'تيك توك' : 'TikTok'}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@ali.sabaawi" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-red-600 dark:hover:text-red-400 transition-colors" aria-label={locale === 'ar' ? 'يوتيوب' : 'YouTube'}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
