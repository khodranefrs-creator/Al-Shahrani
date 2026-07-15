import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { MessageSquare, Search, Compass, Play } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Locale } from '@/types';

const iconMap = {
  consultation: MessageSquare,
  analysis: Search,
  strategy: Compass,
  execution: Play,
} as const;

type StepKey = keyof typeof iconMap;

const steps: StepKey[] = ['consultation', 'analysis', 'strategy', 'execution'];

export default function Process({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('process');

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="relative mt-14">
          {/* Horizontal connecting line (desktop) */}
          <div
            className="absolute top-8 left-0 hidden h-0.5 bg-gold-300 lg:block"
            style={{ left: '12.5%', right: '12.5%' }}
          />

          {/* Vertical connecting line (mobile) */}
          <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gold-300 lg:hidden" />

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((key, index) => {
              const Icon = iconMap[key];

              return (
                <div
                  key={key}
                  className="relative flex gap-6 lg:flex-col lg:items-center lg:text-center"
                >
                  {/* Step circle with number + icon */}
                  <div className="relative z-10 flex flex-shrink-0 items-center gap-4 lg:flex-col lg:gap-3">
                    {/* Number badge */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500 text-navy-900 shadow-md">
                      <span className="text-xl font-bold">{index + 1}</span>
                    </div>

                    {/* Icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold-300 bg-white">
                      <Icon className="h-5 w-5 text-gold-600" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="lg:mt-4">
                    <h3 className="mb-2 text-lg font-bold text-navy-900">
                      {t(`steps.${key}.title`)}
                    </h3>
                    <p className="leading-relaxed text-navy-600">
                      {t(`steps.${key}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
