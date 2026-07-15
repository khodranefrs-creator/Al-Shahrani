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

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((key) => {
            const Icon = iconMap[key];

            return (
              <div
                key={key}
                className="group rounded-2xl border border-navy-100 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 transition-colors duration-300 group-hover:bg-gold-200">
                  <Icon className="h-7 w-7 text-gold-600" />
                </div>

                <h3 className="mb-3 text-lg font-bold text-navy-900">
                  {t(`${key}.title`)}
                </h3>

                <p className="leading-relaxed text-navy-600">
                  {t(`${key}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
