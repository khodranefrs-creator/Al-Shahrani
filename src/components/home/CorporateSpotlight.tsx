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

          {/* Visual — refined SVG */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-[4/3] max-w-lg overflow-hidden rounded-2xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 shadow-2xl">
              <svg viewBox="0 0 500 375" className="absolute inset-0 h-full w-full" aria-hidden="true">
                <defs>
                  <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="rgba(201,168,76,0.4)" />
                    <stop offset="100%" stopColor="rgba(201,168,76,0.1)" />
                  </linearGradient>
                </defs>

                {/* Scales of justice — prominent */}
                <g transform="translate(250, 80)">
                  {/* Pillar */}
                  <rect x="-3" y="0" width="6" height="160" rx="3" fill="rgba(201,168,76,0.2)" />
                  {/* Base */}
                  <rect x="-40" y="155" width="80" height="6" rx="3" fill="rgba(201,168,76,0.25)" />
                  {/* Beam */}
                  <rect x="-100" y="18" width="200" height="3" rx="1.5" fill="rgba(201,168,76,0.35)" />
                  {/* Top ornament */}
                  <circle cx="0" cy="0" r="8" fill="rgba(201,168,76,0.3)" stroke="rgba(201,168,76,0.5)" strokeWidth="1" />
                  {/* Left chain */}
                  <line x1="-95" y1="20" x2="-95" y2="65" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                  <path d="M -115,65 Q -95,80 -75,65" fill="none" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5" />
                  {/* Right chain */}
                  <line x1="95" y1="20" x2="95" y2="65" stroke="rgba(201,168,76,0.3)" strokeWidth="1" />
                  <path d="M 75,65 Q 95,80 115,65" fill="none" stroke="rgba(201,168,76,0.35)" strokeWidth="1.5" />
                </g>

                {/* Building silhouettes */}
                <rect x="50" y="220" width="60" height="130" rx="2" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5" />
                <rect x="60" y="235" width="15" height="18" rx="1" fill="rgba(201,168,76,0.1)" />
                <rect x="85" y="235" width="15" height="18" rx="1" fill="rgba(201,168,76,0.1)" />
                <rect x="60" y="265" width="15" height="18" rx="1" fill="rgba(201,168,76,0.1)" />
                <rect x="85" y="265" width="15" height="18" rx="1" fill="rgba(201,168,76,0.1)" />

                <rect x="390" y="200" width="60" height="150" rx="2" fill="rgba(201,168,76,0.06)" stroke="rgba(201,168,76,0.12)" strokeWidth="0.5" />
                <rect x="400" y="215" width="15" height="18" rx="1" fill="rgba(201,168,76,0.1)" />
                <rect x="425" y="215" width="15" height="18" rx="1" fill="rgba(201,168,76,0.1)" />
                <rect x="400" y="245" width="15" height="18" rx="1" fill="rgba(201,168,76,0.1)" />
                <rect x="425" y="245" width="15" height="18" rx="1" fill="rgba(201,168,76,0.1)" />

                {/* Ground line */}
                <line x1="30" y1="350" x2="470" y2="350" stroke="rgba(201,168,76,0.15)" strokeWidth="0.5" />
              </svg>

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
