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
        {/* Editorial header */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
            {locale === 'ar' ? 'منهجيتنا' : 'Our Approach'}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-6 h-[2px] w-12 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* Steps — horizontal editorial with connecting line */}
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
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-navy-900 text-gold-400 transition-smooth group-hover:bg-gold-500 group-hover:text-navy-950">
                    <span
                      className="text-sm font-bold"
                      style={{ fontFamily: 'var(--font-heading-en)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-sm font-bold text-navy-300 tracking-wider lg:hidden">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3
                    className="text-lg font-bold text-navy-900 mb-3"
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
