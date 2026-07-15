import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/types';

const reasons = [
  { num: "01", key: "expertise" },
  { num: "02", key: "corporate" },
  { num: "03", key: "comprehensive" },
  { num: "04", key: "discretion" },
] as const;

export default function WhyUs({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('whyUs');

  return (
    <section className="section-premium bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial header */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
            {locale === 'ar' ? 'لماذا نحن' : 'Why Us'}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-6 h-[2px] w-12 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* Reasons — clean numbered list with gold accent */}
        <div className="grid grid-cols-1 gap-0 divide-y divide-warm-200">
          {reasons.map((reason) => (
            <div key={reason.key} className="group py-10 md:py-12 flex items-start gap-8 md:gap-12">
              {/* Number */}
              <span
                className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-gold-500 text-gold-600 font-bold text-base transition-smooth group-hover:bg-gold-500 group-hover:text-navy-950 group-hover:border-gold-500"
                style={{ fontFamily: 'var(--font-heading-en)' }}
              >
                {reason.num}
              </span>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className="text-xl md:text-2xl font-bold text-navy-900 mb-3 leading-snug"
                  style={{ fontFamily: 'var(--font-heading-ar)' }}
                >
                  {t(`${reason.key}.title`)}
                </h3>
                <p className="text-warm-600 leading-relaxed max-w-xl text-[15px]">
                  {t(`${reason.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
