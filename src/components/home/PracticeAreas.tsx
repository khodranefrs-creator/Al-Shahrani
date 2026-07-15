import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/types';

const primaryServices = [
  { key: 'corporate', href: '/services/corporate-law' },
  { key: 'contracts', href: '/services/contracts' },
  { key: 'litigation', href: '/services/litigation' },
] as const;

const secondaryServices = [
  { key: 'governance', href: '/services/governance' },
  { key: 'ma', href: '/services/ma' },
  { key: 'labor', href: '/services/labor' },
  { key: 'debtCollection', href: '/services/debt-collection' },
  { key: 'notarization', href: '/services/notarization' },
  { key: 'property', href: '/services/property' },
] as const;

export default function PracticeAreas({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('practiceAreas');
  const Arrow = locale === 'ar' ? '\u2190' : '\u2192';

  return (
    <section className="bg-warm-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        {/* Section header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-600 mb-6">
            {locale === 'ar' ? 'مجالاتنا' : 'Our Practice'}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-navy-900 tracking-tight leading-[1.15]"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-8 h-[2px] w-16 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* Primary services — unified 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {primaryServices.map((service) => (
            <Link
              key={service.key}
              href={service.href}
              className="group relative block p-8 bg-white border border-warm-200 hover-lift hover:border-gold-400 transition-smooth"
            >
              <div className="absolute top-0 start-0 w-0 h-[3px] bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-500 group-hover:w-full" />
              <h3
                className="text-lg font-semibold text-navy-900 mb-3 leading-snug group-hover:text-gold-700 transition-smooth"
                style={{ fontFamily: 'var(--font-heading-ar)' }}
              >
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-warm-600 text-sm leading-[1.8] mb-6">
                {t(`${service.key}.description`)}
              </p>
              <span className="text-sm font-semibold text-gold-700 inline-flex items-center gap-2">
                {locale === 'ar' ? 'المزيد' : 'Learn more'}
                <span className="rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-1">{Arrow}</span>
              </span>
            </Link>
          ))}
        </div>

        {/* Secondary services — clean compact list */}
        <div className="border-t border-warm-200 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-3">
            {secondaryServices.map((service) => (
              <Link
                key={service.key}
                href={service.href}
                className="group flex items-center gap-3 text-warm-700 hover:text-gold-700 transition-smooth py-1"
              >
                <span className="w-1 h-1 bg-gold-500 rounded-full flex-shrink-0" />
                <span className="text-sm font-medium">{t(`${service.key}.title`)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
