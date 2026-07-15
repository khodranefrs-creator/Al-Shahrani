import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import type { Locale } from '@/types';

export default function CorporateSpotlight({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('corporateSpotlight');

  return (
    <section className="bg-navy-gradient-subtle py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <h2
              className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t('title')}
            </h2>

            <p className="text-lg leading-relaxed text-navy-600">
              {t('description')}
            </p>

            <Link
              href="/services/corporate-law"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-900 shadow-lg transition-colors duration-200 hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              {t('cta')}
              {locale === 'ar' ? (
                <ArrowLeft className="h-5 w-5" />
              ) : (
                <ArrowRight className="h-5 w-5" />
              )}
            </Link>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl bg-navy-800 shadow-2xl">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute left-8 top-8 h-32 w-32 border-2 border-gold-400" />
                <div className="absolute bottom-12 right-8 h-24 w-24 rotate-45 border-2 border-gold-400" />
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gold-400" />
              </div>

              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-gold-500 to-gold-300" />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold-300 to-gold-500" />
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold-500 to-gold-300" />
              <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-gold-300 to-gold-500" />

              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold-400/30 bg-navy-700/50">
                <span className="text-3xl font-bold text-gold-400">&#9878;</span>
              </div>

              <div className="absolute right-6 top-6 h-16 w-16 border border-gold-400/20 bg-gold-400/5" />
              <div className="absolute bottom-6 left-6 h-20 w-12 border border-gold-400/20 bg-gold-400/5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
