import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { MessageSquare, Search, Compass, Play } from 'lucide-react';
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
    <section className="bg-warm-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
            {locale === 'ar' ? 'منهجيتنا' : 'Our Approach'}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* Steps — horizontal editorial with line */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-[2.75rem] start-0 end-0 hidden lg:block">
            <div className="h-px bg-gradient-to-r from-gold-300/50 via-gold-400 to-gold-300/50" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((key, index) => {
              const Icon = iconMap[key];

              return (
                <div key={key} className="relative group">
                  {/* Step marker */}
                  <div className="relative z-10 mb-6 flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold-400 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-900 group-hover:scale-110 shadow-lg">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-bold text-navy-300 tracking-wider lg:hidden">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="hidden lg:inline text-xs font-bold text-navy-200 tracking-widest">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-lg font-bold text-navy-900">
                        {t(`steps.${key}.title`)}
                      </h3>
                    </div>
                    <p className="text-navy-500 leading-relaxed text-sm">
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
