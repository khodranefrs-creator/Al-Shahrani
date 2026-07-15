import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Shield, Building2, Scale, Lock } from 'lucide-react';
import type { Locale } from '@/types';

const iconMap = {
  expertise: Shield,
  corporate: Building2,
  comprehensive: Scale,
  discretion: Lock,
} as const;

type FeatureKey = keyof typeof iconMap;
const features: FeatureKey[] = ['expertise', 'corporate', 'comprehensive', 'discretion'];

export default function WhyUs({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('whyUs');

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
            {locale === 'ar' ? 'لماذا نحن' : 'Why Us'}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* Editorial grid — asymmetric */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-12">
          {features.map((key, index) => {
            const Icon = iconMap[key];
            const isLarge = index === 0;

            return (
              <div
                key={key}
                className={`group relative py-10 ${
                  isLarge ? 'lg:col-span-6 lg:pe-12 lg:py-12' : 'lg:col-span-6 lg:ps-12 lg:py-12'
                } ${index > 0 ? 'lg:border-t border-navy-100' : ''} ${
                  index % 2 === 0 && index > 0 ? 'lg:border-t-0 lg:border-s lg:border-navy-100' : ''
                }`}
              >
                <div className="flex gap-6 items-start">
                  {/* Large editorial number */}
                  <span className="editorial-number select-none shrink-0">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="h-5 w-5 text-gold-500" />
                      <h3 className="text-xl font-bold text-navy-900">
                        {t(`${key}.title`)}
                      </h3>
                    </div>
                    <p className="text-navy-500 leading-relaxed max-w-md">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
