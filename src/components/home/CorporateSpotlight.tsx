import Image from "next/image";
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/types';

const highlights = [
  { ar: 'تأسيس وتسجيل الشركات', en: 'Company Formation & Registration' },
  { ar: 'الهياكل المؤسسية', en: 'Corporate Structuring' },
  { ar: 'عقود الاندماج والاستحواذ', en: 'M&A Transactions' },
  { ar: 'الامتثال والحوكمة', en: 'Compliance & Governance' },
];

export default function CorporateSpotlight({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('corporateSpotlight');
  const Arrow = locale === 'ar' ? '\u2190' : '\u2192';

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24 py-24 lg:py-32">
          {/* Content — editorial */}
          <div className="space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
                {locale === 'ar' ? 'القانون المؤسسي' : 'Institutional Practice'}
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
                style={{ fontFamily: 'var(--font-heading-ar)' }}
              >
                {t('title')}
              </h2>
              <div className="mt-6 h-[2px] w-12 bg-gradient-to-r from-gold-500 to-gold-300" />
            </div>

            <p className="text-warm-600 leading-relaxed text-[15px]">
              {t('description')}
            </p>

            {/* Highlights — clean list */}
            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0" />
                  <span className="text-navy-700 font-medium text-[15px]">
                    {locale === 'ar' ? item.ar : item.en}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/services/corporate-law"
              className="inline-flex items-center gap-2 bg-gold-500 px-8 py-4 text-base font-semibold text-navy-950 hover:bg-gold-400 transition-smooth"
            >
              {t('cta')}
              <span className="rtl:rotate-180">{Arrow}</span>
            </Link>
          </div>

          {/* Visual — large photography */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-[4/3] max-w-lg overflow-hidden">
              <Image
                src="/images/services/corporate-law.jpg"
                alt={
                  locale === "ar"
                    ? "اجتماع قانوني مؤسسي في مكتب الشهراني"
                    : "Corporate legal meeting at Al-Shahrani Law Firm"
                }
                fill
                sizes="(max-width: 1024px) 0px, 512px"
                className="object-cover object-center"
              />
              {/* Subtle dark overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/20 via-transparent to-navy-900/30" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
