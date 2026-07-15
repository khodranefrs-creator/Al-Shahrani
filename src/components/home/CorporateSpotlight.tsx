import Image from "next/image";
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
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
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Content */}
          <div className="space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
                {locale === 'ar' ? 'القانون المؤسسي' : 'Institutional Practice'}
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {t('title')}
              </h2>
            </div>

            <p className="text-navy-500 leading-relaxed">
              {t('description')}
            </p>

            {/* Highlights list */}
            <ul className="space-y-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100">
                    <Check className="h-3.5 w-3.5 text-gold-700" />
                  </div>
                  <span className="text-navy-700 font-medium">
                    {locale === 'ar' ? item.ar : item.en}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/services/corporate-law"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-10 py-4 text-base font-semibold text-navy-900 shadow-xl shadow-gold-500/25 transition-all duration-300 hover:bg-gold-400 hover:shadow-2xl hover:shadow-gold-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              {t('cta')}
              <ArrowIcon className="h-5 w-5" />
            </Link>
          </div>

          {/* Visual — TODO: Replace with official firm photography supplied by client */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-2xl shadow-2xl">
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
              {/* Gold border accents */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
