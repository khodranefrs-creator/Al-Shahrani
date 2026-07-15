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
        <div className="mb-20 max-w-2xl">
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

        {/* Featured primary service — full width hero card */}
        <Link
          href={primaryServices[0].href}
          className="group relative block mb-8 p-10 md:p-14 bg-navy-900 text-white overflow-hidden transition-all duration-300 hover:shadow-2xl"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
            <div className="absolute top-0 start-0 w-full h-px bg-gradient-to-r from-gold-400 via-transparent to-transparent" />
            <div className="absolute top-0 start-0 h-full w-px bg-gradient-to-b from-gold-400 via-transparent to-transparent" />
          </div>
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-gold-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                {locale === 'ar' ? 'الخبرة الرائدة' : 'Leading Expertise'}
              </span>
              <h3
                className="text-2xl md:text-3xl font-semibold mb-4 leading-tight"
                style={{ fontFamily: 'var(--font-heading-ar)' }}
              >
                {t(`${primaryServices[0].key}.title`)}
              </h3>
              <p className="text-warm-300 leading-[1.8] text-[15px]">
                {t(`${primaryServices[0].key}.description`)}
              </p>
            </div>
            <span className="text-gold-400 text-4xl shrink-0 rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-2">
              {Arrow}
            </span>
          </div>
        </Link>

        {/* Secondary primary services — 2-col */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {primaryServices.slice(1).map((service) => (
            <Link
              key={service.key}
              href={service.href}
              className="group relative block p-10 bg-white border border-warm-200 hover-lift hover:border-gold-400 transition-smooth overflow-hidden"
            >
              <div className="absolute top-0 start-0 w-0 h-[3px] bg-gradient-to-r from-gold-500 to-gold-300 transition-all duration-500 group-hover:w-full" />
              <h3
                className="text-xl font-semibold text-navy-900 mb-3 leading-snug group-hover:text-gold-700 transition-smooth"
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

        {/* Additional services — full width divider + compact list */}
        <div className="border-t border-warm-200 pt-14">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <p className="text-sm font-semibold text-warm-500 uppercase tracking-[0.15em] shrink-0">
              {locale === 'ar' ? 'خدمات إضافية' : 'Additional Services'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-4 flex-1">
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
      </div>
    </section>
  );
}
