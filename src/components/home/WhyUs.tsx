import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/types';

const reasons = [
  { num: "01", key: "expertise" },
  { num: "02", key: "corporate" },
  { num: "03", key: "comprehensive" },
  { num: "04", key: "discretion" },
  { num: "05", key: "local" },
  { num: "06", key: "results" },
] as const;

export default function WhyUs({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('whyUs');

  return (
    <section className="section-premium bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
            {locale === 'ar' ? '\u0644\u0645\u0627\u0630\u0627 \u0646\u062d\u0646' : 'Why Us'}
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-5 h-[2px] w-12 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* 3-column numbered grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16">
          {reasons.map((reason) => (
            <div key={reason.key} className="group">
              {/* Numbered square */}
              <div className="w-12 h-12 flex items-center justify-center border-2 border-gold-600 text-gold-700 font-bold text-base mb-5 transition-smooth group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500"
                style={{ fontFamily: 'var(--font-heading-en)' }}
              >
                {reason.num}
              </div>

              <h3
                className="text-lg font-semibold text-navy-900 mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-heading-ar)' }}
              >
                {t(`${reason.key}.title`)}
              </h3>
              <p className="text-warm-600 text-sm leading-relaxed">
                {t(`${reason.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
