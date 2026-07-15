import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/types';

const steps = ['consultation', 'analysis', 'strategy', 'execution'] as const;

export default function Process({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('process');

  return (
    <section className="section-premium bg-warm-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
            {locale === 'ar' ? '\u0645\u0646\u0647\u062c\u064a\u062a\u0646\u0627' : 'Our Approach'}
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-5 h-[2px] w-12 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* Steps — 4-column grid with bordered markers */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-[2.75rem] start-0 end-0 hidden lg:block">
            <div className="h-px bg-gradient-to-r from-gold-300/50 via-gold-400 to-gold-300/50" />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((key, index) => (
              <div key={key} className="relative group">
                {/* Step marker */}
                <div className="relative z-10 mb-8 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-gold-600 text-gold-700 transition-smooth group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500">
                    <span
                      className="text-sm font-bold"
                      style={{ fontFamily: 'var(--font-heading-en)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-warm-400 tracking-wider lg:hidden">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="text-lg font-semibold text-navy-900 mb-3"
                    style={{ fontFamily: 'var(--font-heading-ar)' }}
                  >
                    {t(`steps.${key}.title`)}
                  </h3>
                  <p className="text-warm-600 leading-relaxed text-[15px]">
                    {t(`steps.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
