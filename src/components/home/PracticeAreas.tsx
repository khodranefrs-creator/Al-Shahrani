import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, ArrowRight, Building2, Scale, Briefcase, Home, Shield, FileText } from 'lucide-react';
import { EyebrowTag } from '@/components/ui/EyebrowTag';
import type { Locale } from '@/types';

const services = [
  { key: 'corporate', href: '/services/corporate-law', icon: Building2, gradient: 'from-indigo-800/20 to-indigo-800/5' },
  { key: 'contracts', href: '/services/contracts', icon: FileText, gradient: 'from-blue-800/20 to-blue-800/5' },
  { key: 'litigation', href: '/services/litigation', icon: Scale, gradient: 'from-amber-800/20 to-amber-800/5' },
  { key: 'governance', href: '/services/governance', icon: Shield, gradient: 'from-emerald-800/20 to-emerald-800/5' },
  { key: 'ma', href: '/services/ma', icon: Briefcase, gradient: 'from-purple-800/20 to-purple-800/5' },
  { key: 'labor', href: '/services/labor', icon: Home, gradient: 'from-rose-800/20 to-rose-800/5' },
] as const;

export default function PracticeAreas({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('practiceAreas');
  const isRtl = locale === 'ar';

  return (
    <section className="bg-warm-50 section-padding">
      <div className="container-custom">
        {/* Section header — centered */}
        <div className="text-center mb-10 md:mb-12">
          <div className="flex justify-center mb-4">
            <EyebrowTag label={locale === 'ar' ? 'مجالاتنا' : 'Our Practice'} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-navy-900 leading-[1.15] mb-4 text-balance"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <p className="text-warm-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Service cards — 3-col grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.key}
                href={service.href}
                className="group surface-card hover-lift overflow-hidden"
              >
                {/* Gradient top strip */}
                <div className={`h-1.5 bg-gradient-to-r ${service.gradient}`} />

                <div className="p-5 md:p-7 flex flex-col flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-[var(--radius-control)] bg-gold-500/10 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors duration-300">
                    <Icon aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gold-500" />
                  </div>
                  <h3
                    className="font-semibold text-navy-900 mb-3 text-xl group-hover:text-gold-700 transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-heading-ar)' }}
                  >
                    {t(`${service.key}.title`)}
                  </h3>
                  <p className="text-warm-600 text-sm leading-[1.8] grow">
                    {t(`${service.key}.description`)}
                  </p>
                  <div className="mt-auto flex items-center gap-1.5 text-gold-600 text-xs font-medium pt-4">
                    <span>{locale === 'ar' ? 'المزيد' : 'Learn more'}</span>
                    {isRtl ? (
                      <ArrowLeft aria-hidden="true" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                    ) : (
                      <ArrowRight aria-hidden="true" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all link */}
        <div className="text-center mt-10 md:mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gold-600 font-medium hover:text-gold-500 transition-colors duration-200 group"
          >
            {locale === 'ar' ? 'عرض جميع الخدمات' : 'View all services'}
            {isRtl ? (
              <ArrowLeft aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            ) : (
              <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
