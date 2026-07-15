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
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        {/* Editorial layout — large statement left, reasons right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left — Large editorial statement */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-600 mb-6">
              {locale === 'ar' ? 'لماذا نحن' : 'Why Us'}
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-navy-900 tracking-tight leading-[1.15]"
              style={{ fontFamily: 'var(--font-heading-ar)' }}
            >
              {t('title')}
            </h2>
            <div className="mt-8 h-[2px] w-16 bg-gradient-to-r from-gold-500 to-gold-300" />

            {/* Large decorative number */}
            <div
              className="mt-12 text-navy-100 leading-none select-none pointer-events-none"
              style={{ fontSize: 'clamp(120px, 15vw, 200px)', fontFamily: 'var(--font-heading-en)' }}
              aria-hidden="true"
            >
              6
            </div>
          </div>

          {/* Right — Reasons as editorial list */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-warm-200">
              {reasons.map((reason) => (
                <div key={reason.key} className="group py-8 first:pt-0 last:pb-0">
                  <div className="flex items-start gap-6">
                    {/* Large number */}
                    <span
                      className="text-sm font-bold text-gold-600 tracking-wider pt-1 shrink-0 w-8"
                      style={{ fontFamily: 'var(--font-heading-en)' }}
                    >
                      {reason.num}
                    </span>
                    <div className="flex-1">
                      <h3
                        className="text-xl font-semibold text-navy-900 mb-2 leading-snug"
                        style={{ fontFamily: 'var(--font-heading-ar)' }}
                      >
                        {t(`${reason.key}.title`)}
                      </h3>
                      <p className="text-warm-600 leading-[1.8] text-[15px]">
                        {t(`${reason.key}.description`)}
                      </p>
                    </div>
                    {/* Arrow on hover */}
                    <span className="text-warm-300 group-hover:text-gold-500 transition-colors text-xl pt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {locale === 'ar' ? '\u2190' : '\u2192'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
