import Image from "next/image";
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
    <section className="section-premium bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
                {locale === 'ar' ? '\u0627\u0644\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0645\u0624\u0633\u0633\u064a' : 'Institutional Practice'}
              </p>
              <h2
                className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight leading-tight"
                style={{ fontFamily: 'var(--font-heading-ar)' }}
              >
                {t('title')}
              </h2>
              <div className="mt-5 h-[2px] w-12 bg-gradient-to-r from-gold-500 to-gold-300" />
            </div>

            <p className="text-warm-600 leading-relaxed text-[15px]">
              {t('description')}
            </p>

            {/* Highlights */}
            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0" />
                  <span className="text-navy-700 font-medium text-[15px]">
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
              <span className="rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-1">{Arrow}</span>
            </Link>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-[4/3] max-w-lg overflow-hidden">
              <Image
                src="/images/services/corporate-law.jpg"
                alt={
                  locale === "ar"
                    ? "\u0627\u062c\u062a\u0645\u0627\u0639 \u0642\u0627\u0646\u0648\u0646\u064a \u0645\u0648\u0633\u0633\u064a \u0641\u064a \u0645\u0643\u062a\u0628 \u0627\u0644\u0634\u0647\u0631\u0627\u0646\u064a"
                    : "Corporate legal meeting at Al-Shahrani Law Firm"
                }
                fill
                sizes="(max-width: 1024px) 0px, 512px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/20 via-transparent to-navy-900/30" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
