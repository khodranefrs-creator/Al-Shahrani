import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { PhoneCall, FileText, Handshake, Scale, ArrowLeft, ArrowRight } from 'lucide-react';
import { EyebrowTag } from '@/components/ui/EyebrowTag';
import type { Locale } from '@/types';

const steps = [
  { number: '01', icon: PhoneCall, key: 'consultation' },
  { number: '02', icon: FileText, key: 'analysis' },
  { number: '03', icon: Handshake, key: 'strategy' },
  { number: '04', icon: Scale, key: 'execution' },
] as const;

export default function Process({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('process');
  const isRtl = locale === 'ar';

  return (
    <section className="bg-navy-950 section-padding relative overflow-hidden">
      {/* Top gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />

      <div className="container-custom">
        {/* Section header — centered */}
        <div className="text-center mb-12 md:mb-14">
          <div className="flex justify-center mb-4">
            <EyebrowTag label={locale === 'ar' ? 'منهجيتنا' : 'Our Approach'} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-4 text-balance max-w-3xl mx-auto"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <p className="text-warm-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        {/* Timeline — 4-col with connecting line */}
        <div dir={isRtl ? 'rtl' : 'ltr'}>
          <div className="relative">
            {/* Desktop: horizontal connector line */}
            <div className="hidden lg:block absolute top-[20px] left-0 right-0 h-[1.5px] pointer-events-none">
              <div className={`w-full h-full ${isRtl ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-transparent via-gold-400/20 to-transparent`} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 md:gap-6">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.key}>
                    <div>
                      {/* Desktop: numbered node above card */}
                      <div className="hidden lg:flex justify-center relative z-10 -mb-3">
                        <div className="w-10 h-10 rounded-full bg-gold-400 flex items-center justify-center shadow-[0_0_20px_rgba(184,149,60,0.3)] ring-2 ring-navy-950">
                          <span
                            className="text-navy-950 font-bold text-sm"
                            style={{ fontFamily: 'var(--font-heading-en)' }}
                          >
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Mobile: numbered badge */}
                      <div className="lg:hidden flex items-center gap-3 mb-4 relative z-10">
                        <div className="w-9 h-9 rounded-full bg-gold-400 flex items-center justify-center shadow-[0_0_16px_rgba(184,149,60,0.2)] shrink-0">
                          <span
                            className="text-navy-950 font-bold text-[11px]"
                            style={{ fontFamily: 'var(--font-heading-en)' }}
                          >
                            {step.number}
                          </span>
                        </div>
                        <span className="text-[11px] font-medium text-gold-400/60 tracking-widest uppercase">
                          Step {step.number}
                        </span>
                      </div>

                      {/* Card */}
                      <div className="surface-card-dark pt-5 md:pt-6 pb-5 md:pb-7 px-6 md:px-8 flex flex-col items-center text-center lg:h-full overflow-hidden">
                        {/* Icon */}
                        <div className="relative z-10 mb-4 md:mb-5">
                          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-gold-400/[0.10] flex items-center justify-center group-hover:bg-gold-400/[0.18] transition-[background-color,box-shadow] duration-500 ring-1 ring-gold-400/25 group-hover:ring-gold-400/40 shadow-[0_0_25px_rgba(184,149,60,0.10)] group-hover:shadow-[0_0_35px_rgba(184,149,60,0.18)]">
                            <Icon aria-hidden="true" className="w-6 h-6 md:w-8 md:h-8 text-gold-400" />
                          </div>
                        </div>

                        {/* Title */}
                        <h3
                          className="text-lg md:text-xl font-bold text-white mb-2 leading-snug relative z-10"
                          style={{ fontFamily: 'var(--font-heading-ar)' }}
                        >
                          {t(`steps.${step.key}.title`)}
                        </h3>

                        {/* Description */}
                        <p className="text-sm md:text-[0.9375rem] text-warm-400 leading-[1.65] md:leading-[1.7] relative z-10">
                          {t(`steps.${step.key}.description`)}
                        </p>
                      </div>

                      {/* Mobile: separator */}
                      {i < steps.length - 1 && (
                        <div className="lg:hidden flex items-center gap-2 my-5">
                          <div className="flex-1 h-px bg-gradient-to-r from-gold-400/20 via-gold-400/10 to-transparent" />
                          <div className="w-1.5 h-1.5 rounded-full bg-gold-400/30 shrink-0" />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center mt-12 md:mt-16">
            <Link href="/contact" className="btn-primary group">
              {locale === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
              {isRtl ? (
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
              ) : (
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              )}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
