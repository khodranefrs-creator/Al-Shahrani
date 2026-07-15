import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/types';

const highlights = [
  { ar: '\u062a\u0623\u0633\u064a\u0633 \u0648\u062a\u0633\u062c\u064a\u0644 \u0627\u0644\u0634\u0631\u0643\u0627\u062a', en: 'Company Formation & Registration' },
  { ar: '\u0627\u0644\u0647\u064a\u0627\u0643\u0644 \u0627\u0644\u0645\u0624\u0633\u0633\u0629', en: 'Corporate Structuring' },
  { ar: '\u0639\u0642\u0648\u062f \u0627\u0644\u0627\u0646\u062f\u0645\u0627\u062c \u0648\u0627\u0644\u0627\u0633\u062a\u062d\u0648\u0627\u062b', en: 'M&A Transactions' },
  { ar: '\u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0648\u0627\u0644\u062d\u0648\u0643\u0645\u0629', en: 'Compliance & Governance' },
];

export default function CorporateSpotlight({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('corporateSpotlight');
  const Arrow = locale === 'ar' ? '\u2190' : '\u2192';

  return (
    <section className="section-premium bg-navy-900 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-gold-400 mb-4">
                {locale === 'ar' ? '\u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0645\u0624\u0633\u0633\u064a' : 'Institutional Practice'}
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold text-white tracking-tight leading-tight"
                style={{ fontFamily: 'var(--font-heading-ar)' }}
              >
                {t('title')}
              </h2>
              <div className="mt-5 h-[2px] w-12 bg-gradient-to-r from-gold-400 to-gold-300" />
            </div>

            <p className="text-warm-300 leading-relaxed text-[15px]">
              {t('description')}
            </p>

            {/* Highlights */}
            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-gold-400 rounded-full flex-shrink-0" />
                  <span className="text-warm-200 font-medium text-[15px]">
                    {locale === 'ar' ? item.ar : item.en}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/services/corporate-law"
              className="inline-flex items-center gap-2 bg-gold-500 px-8 py-4 text-base font-semibold text-white hover:bg-gold-400 transition-smooth shadow-sm hover:shadow-md"
            >
              {t('cta')}
              <span className="rtl:rotate-180 transition-transform duration-200">{Arrow}</span>
            </Link>
          </div>

          {/* Visual — elegant CSS placeholder with pattern */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-[4/3] max-w-lg overflow-hidden border border-white/10">
              {/* Navy gradient background */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, #0c1222 0%, #1a2240 40%, #2a3556 70%, #1a2240 100%)",
                }}
                aria-hidden="true"
              />
              {/* Subtle gold accent lines */}
              <div className="absolute inset-0 opacity-10" aria-hidden="true">
                <div className="absolute top-0 start-0 w-full h-px bg-gradient-to-r from-gold-400 via-transparent to-transparent" />
                <div className="absolute top-0 start-0 h-full w-px bg-gradient-to-b from-gold-400 via-transparent to-transparent" />
                <div className="absolute bottom-0 end-0 w-1/2 h-px bg-gradient-to-l from-gold-400 via-transparent to-transparent" />
                <div className="absolute top-1/4 start-1/4 w-1/2 h-px bg-gold-400/20" />
                <div className="absolute top-1/2 start-1/4 w-px h-1/3 bg-gold-400/20" />
              </div>
              {/* Scale of justice icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 80 80" className="w-20 h-20 text-gold-400/20 fill-none stroke-current stroke-[0.5]" aria-hidden="true">
                  <path d="M40 10v40M20 25l20-10 20 10M15 55h50M20 55c0-8 0-15 5-20s5-12 5-20M60 55c0-8 0-15-5-20s-5-12-5-20" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
