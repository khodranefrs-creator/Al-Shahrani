import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/types';

const steps = ['consultation', 'analysis', 'strategy', 'execution'] as const;

export default function Process({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('process');

  return (
    <section className="relative bg-warm-50 overflow-hidden">
      {/* Decorative — subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-navy-900) 1px, transparent 1px), linear-gradient(90deg, var(--color-navy-900) 1px, transparent 1px)",
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        {/* Section header */}
        <div className="mb-20 max-w-2xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
            {locale === 'ar' ? 'منهجيتنا' : 'Our Approach'}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-navy-900 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* Steps — 4-column with bold markers and connecting line */}
        <div className="relative">
          {/* Connecting line — visible on lg+ */}
          <div className="absolute top-[3rem] start-0 end-0 hidden lg:block">
            <div className="h-px bg-gradient-to-r from-gold-300/40 via-gold-500 to-gold-300/40" />
          </div>

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-4 lg:gap-10">
            {steps.map((key, index) => (
              <div key={key} className="relative group">
                {/* Step marker — large bordered square */}
                <div className="relative z-10 mb-8">
                  <div
                    className="inline-flex h-16 w-16 items-center justify-center border-2 border-gold-600 text-gold-700 transition-smooth group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500 group-hover:shadow-lg group-hover:shadow-gold-500/10"
                  >
                    <span
                      className="text-base font-bold"
                      style={{ fontFamily: 'var(--font-heading-en)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="text-lg font-semibold text-navy-900 mb-3"
                    style={{ fontFamily: 'var(--font-heading-ar)' }}
                  >
                    {t(`steps.${key}.title`)}
                  </h3>
                  <p className="text-warm-600 leading-[1.8] text-[15px]">
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
