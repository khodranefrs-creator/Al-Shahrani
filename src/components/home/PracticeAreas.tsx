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
  { key: 'property', href: '/services/property' },
  { key: 'medical', href: '/services/medical' },
  { key: 'debt', href: '/services/debt-collection' },
] as const;

export default function PracticeAreas({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('practiceAreas');
  const Arrow = locale === 'ar' ? '\u2190' : '\u2192';

  return (
    <section className="section-premium bg-warm-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
            {locale === 'ar' ? '\u0645\u062c\u0627\u0644\u0627\u062a\u0646\u0627' : 'Our Practice'}
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-5 h-[2px] w-12 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* Primary services — ServiceCard pattern with gold accent bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {primaryServices.map((service) => (
            <Link
              key={service.key}
              href={service.href}
              className="group relative block p-8 border border-warm-200 bg-white overflow-hidden hover-lift hover:border-gold-400 transition-smooth"
            >
              {/* Gold top accent — expands on hover */}
              <div className="absolute top-0 start-0 w-16 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-300" />

              <p className="text-gold-600 text-sm font-semibold tracking-wider uppercase mb-3">
                {t(`${service.key}.label`)}
              </p>
              <h3
                className="text-xl font-semibold text-navy-900 mb-3 leading-snug group-hover:text-gold-700 transition-smooth duration-200"
                style={{ fontFamily: 'var(--font-heading-ar)' }}
              >
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-warm-600 leading-relaxed mb-6 text-sm">
                {t(`${service.key}.description`)}
              </p>
              <span className="text-sm font-medium text-gold-700 group-hover:text-gold-600 inline-flex items-center gap-2">
                <span className="link-underline">{locale === 'ar' ? '\u0627\u0639\u0631\u0641 \u0627\u0644\u0645\u0632\u064a\u062f' : 'Learn More'}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">{Arrow}</span>
              </span>
            </Link>
          ))}
        </div>

        {/* Secondary services — compact list */}
        <div className="border-t border-warm-200 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
            {secondaryServices.map((service) => (
              <Link
                key={service.key}
                href={service.href}
                className="group flex items-center gap-3 py-3"
              >
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-smooth" />
                <span className="text-warm-700 text-sm font-medium group-hover:text-navy-900 transition-smooth">
                  {t(`${service.key}.title`)}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* View all link */}
        <div className="mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gold-700 font-semibold hover:text-gold-600 transition-smooth text-sm"
          >
            <span className="link-underline">
              {locale === 'ar' ? '\u0639\u0631\u0636 \u062c\u0645\u064a\u0639 \u0627\u0644\u062e\u062f\u0645\u0627\u062a' : 'View All Services'}
            </span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">{Arrow}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
