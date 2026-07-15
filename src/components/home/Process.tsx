import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/types';

const steps = ['consultation', 'analysis', 'strategy', 'execution'] as const;

export default function Process({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('process');

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        {/* Section header */}
        <div className="mb-20 max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-600 mb-6">
            {locale === 'ar' ? 'منهجيتنا' : 'Our Approach'}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-navy-900 tracking-tight leading-[1.15]"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-8 h-[2px] w-16 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* Process steps — with visual progression */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden md:block absolute top-[3.25rem] start-[4.25rem] end-[4.25rem] h-px bg-gradient-to-r from-warm-200 via-warm-200 to-warm-200" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((key, index) => (
              <div key={key} className="group relative md:grid md:grid-cols-12 md:gap-8 md:items-start md:py-10">
                {/* Step indicator — number circle */}
                <div className="md:col-span-2 flex items-center gap-4 md:flex-col md:items-center md:gap-0">
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border-2 border-warm-200 group-hover:border-gold-500 transition-colors duration-300 rounded-full">
                    <span
                      className="text-sm font-bold text-warm-500 group-hover:text-gold-600 transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-heading-en)' }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="md:col-span-4 mt-4 md:mt-3">
                  <h3
                    className="text-xl md:text-2xl font-semibold text-navy-900 leading-snug"
                    style={{ fontFamily: 'var(--font-heading-ar)' }}
                  >
                    {t(`steps.${key}.title`)}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5 md:mt-3">
                  <p className="text-warm-600 leading-[1.8] text-[15px]">
                    {t(`steps.${key}.description`)}
                  </p>
                </div>

                {/* Spacer */}
                <div className="md:col-span-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
