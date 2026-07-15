import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/types';

const reasons = [
  { key: 'expertise' },
  { key: 'corporate' },
  { key: 'comprehensive' },
  { key: 'discretion' },
  { key: 'local' },
  { key: 'results' },
] as const;

export default function WhyUs({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('whyUs');

  return (
    <section className="bg-navy-950 section-padding relative overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute top-1/2 -start-20 w-80 h-80 rounded-full bg-gold-400/[0.03] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 end-0 w-96 h-96 rounded-full bg-gold-400/[0.02] blur-[100px] pointer-events-none" />

      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      <div className="container-custom relative z-10">
        {/* Section header — centered */}
        <div className="text-center mb-10 md:mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-4 text-balance"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <p className="text-warm-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {locale === 'ar' ? 'التميز في كل تفصيل، والاحترافية في كل خطوة' : 'Excellence in every detail, professionalism in every step'}
          </p>
        </div>

        {/* 2-col grid of numbered reason cards */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {reasons.map((reason, i) => (
            <div
              key={reason.key}
              className="group relative pt-4 md:pt-5 pb-5 md:pb-6 px-6 md:px-7 rounded-[var(--radius-surface)] bg-navy-900/60 border border-white/[0.06] hover:border-gold-400/25 transition-[border-color,box-shadow] duration-500 hover:shadow-[0_0_35px_rgba(184,149,60,0.06)] overflow-hidden"
            >
              {/* Left gold accent bar */}
              <div
                className="absolute start-0 top-2 bottom-2 w-px bg-gradient-to-b from-gold-400/30 via-gold-400/10 to-transparent rounded-full group-hover:from-gold-400/50 transition-opacity duration-500"
                aria-hidden="true"
              />

              {/* Top gold accent line */}
              <div
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/25 to-transparent"
                aria-hidden="true"
              />

              {/* Number badge */}
              <div className="relative z-10 mb-1 md:mb-1.5">
                <div className="inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-gold-400/[0.10] ring-1 ring-gold-400/25 group-hover:bg-gold-400/[0.18] group-hover:ring-gold-400/40 shadow-[0_0_20px_rgba(184,149,60,0.06)] group-hover:shadow-[0_0_30px_rgba(184,149,60,0.12)] transition-[background-color,box-shadow] duration-500">
                  <span
                    className="text-gold-400 font-bold text-base md:text-lg leading-none"
                    style={{ fontFamily: 'var(--font-heading-en)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Text */}
              <p className="text-warm-300 text-sm md:text-base font-medium leading-relaxed relative z-10">
                {t(`${reason.key}.title`)}
              </p>
              <p className="text-warm-500 text-sm leading-relaxed mt-1 relative z-10">
                {t(`${reason.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
