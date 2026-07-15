import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/types';

export default function CtaBand({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('ctaBand');
  const Arrow = locale === 'ar' ? '\u2190' : '\u2192';

  const trustItems = locale === 'ar'
    ? ['خبرة تمتد لأكثر من 20 عاماً', 'فريق من المحامين المتخصصين', 'الاستشارة الأولى مجانية']
    : ['Over 20 years of experience', 'Team of specialized lawyers', 'Initial consultation free'];

  return (
    <section className="bg-navy-900 py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl md:text-4xl font-bold text-white tracking-tight"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('headline')}
          </h2>

          <div className="mt-4 h-0.5 w-12 bg-gold-500 mx-auto" />

          <p className="mt-6 text-lg leading-relaxed text-warm-300 max-w-2xl mx-auto">
            {t('subtext')}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold-500 text-navy-950 font-semibold hover:bg-gold-400 transition-smooth text-lg"
            >
              {t('ctaConsultation')}
              <span className="rtl:rotate-180 ms-2">{Arrow}</span>
            </Link>
            <Link
              href="https://wa.me/966553445508"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold-500 text-gold-400 font-semibold hover:bg-gold-500/10 transition-smooth text-lg"
            >
              {t('ctaWhatsApp')}
            </Link>
          </div>

          {trustItems && trustItems.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {trustItems.map((item: string) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 text-xs text-warm-400"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="w-3.5 h-3.5 text-gold-500 fill-none stroke-current stroke-[2]"
                    aria-hidden="true"
                  >
                    <path d="M3 8.5l3.5 3.5L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
