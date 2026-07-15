import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Shield, Building2, Scale, Lock } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
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
    <section className="bg-warm-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((key, index) => {
            const Icon = iconMap[key];

            return (
              <div
                key={key}
                className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute start-0 top-0 h-full w-1 bg-gradient-to-b from-gold-400 to-gold-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="p-8">
                  <div className="mb-5 flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-colors duration-300 group-hover:bg-gold-500 group-hover:text-navy-900">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-3xl font-bold text-navy-200 transition-colors duration-300 group-hover:text-gold-500">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-navy-900">
                    {t(`${key}.title`)}
                  </h3>

                  <p className="leading-relaxed text-navy-600">
                    {t(`${key}.description`)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
