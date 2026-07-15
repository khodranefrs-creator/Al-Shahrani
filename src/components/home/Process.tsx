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

        {/* Modern process — large numbered rows, stacked vertically */}
        <div className="space-y-0 divide-y divide-warm-200">
          {steps.map((key, index) => (
            <div key={key} className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 items-start">
              {/* Large number */}
              <div className="md:col-span-2 flex items-baseline gap-3">
                <span
                  className="text-5xl md:text-6xl font-bold text-navy-100 leading-none select-none group-hover:text-gold-200 transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-heading-en)' }}
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-4">
                <h3
                  className="text-xl md:text-2xl font-semibold text-navy-900 leading-snug"
                  style={{ fontFamily: 'var(--font-heading-ar)' }}
                >
                  {t(`steps.${key}.title`)}
                </h3>
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-warm-600 leading-[1.8] text-[15px]">
                  {t(`steps.${key}.description`)}
                </p>
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 hidden md:flex items-center justify-end h-full">
                <span className="text-warm-300 group-hover:text-gold-500 transition-colors text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {locale === 'ar' ? '\u2190' : '\u2192'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
