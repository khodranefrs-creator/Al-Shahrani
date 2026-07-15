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
    <section className="relative bg-warm-50 overflow-hidden">
      {/* Decorative — subtle warm gradient in corner */}
      <div
        className="absolute -bottom-40 -start-40 w-[500px] h-[500px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-gold-100) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        {/* Section header */}
        <div className="mb-20 max-w-2xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
            {locale === 'ar' ? 'مجالاتنا' : 'Our Practice'}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-navy-900 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* Primary services — large cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {primaryServices.map((service) => (
            <Link
              key={service.key}
              href={service.href}
              className="group relative block p-10 bg-white border border-warm-200 hover-lift hover:border-gold-400 transition-smooth overflow-hidden"
            >
              {/* Top gold accent line — appears on hover */}
              <div className="absolute top-0 start-0 w-0 h-[3px] bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-500 group-hover:w-full" />

              <h3
                className="text-xl font-semibold text-navy-900 mb-4 leading-snug group-hover:text-gold-700 transition-smooth"
                style={{ fontFamily: 'var(--font-heading-ar)' }}
              >
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-warm-600 text-sm leading-[1.8] mb-8">
                {t(`${service.key}.description`)}
              </p>
              <span className="text-sm font-semibold text-gold-700 inline-flex items-center gap-2">
                {locale === 'ar' ? 'المزيد' : 'Learn more'}
                <span className="rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-1">{Arrow}</span>
              </span>
            </Link>
          ))}
        </div>

        {/* Secondary services — compact horizontal list */}
        <div className="border-t border-warm-200 pt-14">
          <p className="text-sm font-semibold text-warm-400 uppercase tracking-widest mb-8">
            {locale === 'ar' ? 'خدمات إضافية' : 'Additional Services'}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-5">
            {secondaryServices.map((service) => (
              <Link
                key={service.key}
                href={service.href}
                className="group flex items-center gap-3 text-warm-700 hover:text-gold-700 transition-smooth"
              >
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0 transition-smooth group-hover:scale-125" />
                <span className="text-sm font-medium">{t(`${service.key}.title`)}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
