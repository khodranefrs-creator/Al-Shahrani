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
    <section className="relative bg-white overflow-hidden">
      {/* Decorative — large faded watermark on the right */}
      <div
        className="absolute -top-20 -end-20 w-[500px] h-[500px] opacity-[0.025] pointer-events-none select-none"
        aria-hidden="true"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        <div className="text-navy-900" style={{ fontSize: '420px', lineHeight: 1 }}>?</div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        {/* Section header — side-by-side layout on desktop */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-20">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
              {locale === 'ar' ? 'لماذا نحن' : 'Why Us'}
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-navy-900 tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-heading-ar)' }}
            >
              {t('title')}
            </h2>
            <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-gold-500 to-gold-300" />
          </div>
        </div>

        {/* 3-column numbered grid — first row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16 md:gap-y-20">
          {reasons.map((reason) => (
            <div key={reason.key} className="group relative">
              {/* Numbered square — larger, bolder */}
              <div
                className="w-16 h-16 flex items-center justify-center border-2 border-gold-600 text-gold-700 font-bold text-lg mb-7 transition-smooth group-hover:bg-gold-500 group-hover:text-white group-hover:border-gold-500 group-hover:shadow-lg group-hover:shadow-gold-500/10"
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
              <p className="text-warm-600 text-sm leading-[1.8]">
                {t(`${reason.key}.description`)}
              </p>

              {/* Subtle bottom accent line on hover */}
              <div className="absolute bottom-0 start-0 w-0 h-px bg-gold-400 transition-all duration-500 group-hover:w-16" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
