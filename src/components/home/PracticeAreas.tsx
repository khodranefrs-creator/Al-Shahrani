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
    <section className="section-premium bg-navy-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial header */}
        <div className="max-w-2xl mb-20">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-400 mb-4">
            {locale === 'ar' ? 'مجالاتنا' : 'Our Practice'}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-6 h-[2px] w-12 bg-gradient-to-r from-gold-400 to-gold-300" />
        </div>

        {/* Primary services — large editorial items */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10 mb-16">
          {primaryServices.map((service) => (
            <Link
              key={service.key}
              href={service.href}
              className="group py-10 lg:py-0 lg:px-10 first:lg:ps-0 last:lg:pe-0"
            >
              <p className="text-gold-400 text-sm font-medium tracking-wider uppercase mb-3">
                {t(`${service.key}.label`)}
              </p>
              <h3
                className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug group-hover:text-gold-300 transition-smooth"
                style={{ fontFamily: 'var(--font-heading-ar)' }}
              >
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-warm-400 leading-relaxed text-[15px] mb-6">
                {t(`${service.key}.description`)}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 group-hover:text-gold-300 transition-smooth">
                <span className="link-underline">{Arrow}</span>
              </span>
            </Link>
          ))}
        </div>

        {/* Secondary services — compact list */}
        <div className="border-t border-white/10 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
            {secondaryServices.map((service) => (
              <Link
                key={service.key}
                href={service.href}
                className="group flex items-center gap-3 py-3"
              >
                <span className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0 group-hover:scale-150 transition-smooth" />
                <span className="text-warm-300 text-sm font-medium group-hover:text-white transition-smooth">
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
            className="inline-flex items-center gap-2 text-gold-400 font-medium hover:text-gold-300 transition-smooth"
          >
            <span className="link-underline">
              {locale === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
            </span>
            <span className="rtl:rotate-180">{Arrow}</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
