import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/types';

const highlights = [
  { ar: 'تأسيس وتسجيل الشركات', en: 'Company Formation & Registration' },
  { ar: 'الهيكلة المؤسسية', en: 'Corporate Structuring' },
  { ar: 'عقود الاندماج والاستحواذ', en: 'M&A Transactions' },
  { ar: 'الامتثال والحوكمة', en: 'Compliance & Governance' },
];

export default function CorporateSpotlight({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('corporateSpotlight');
  const Arrow = locale === 'ar' ? '\u2190' : '\u2192';

  return (
    <section className="bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left — Content */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold-400 mb-6">
                {locale === 'ar' ? 'القانون المؤسسي' : 'Institutional Practice'}
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white tracking-tight leading-[1.15]"
                style={{ fontFamily: 'var(--font-heading-ar)' }}
              >
                {t('title')}
              </h2>
              <div className="mt-8 h-[2px] w-16 bg-gradient-to-r from-gold-400 to-gold-300" />
            </div>

            <p className="text-warm-300 leading-[1.8] text-[15px]">
              {t('description')}
            </p>

            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-8 h-px bg-gold-400/40 flex-shrink-0" />
                  <span className="text-warm-200 font-medium text-[15px]">
                    {locale === 'ar' ? item.ar : item.en}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href="/services/corporate-law"
              className="inline-flex items-center gap-3 bg-gold-500 px-10 py-5 text-base font-bold text-white hover:bg-gold-400 transition-smooth shadow-lg shadow-gold-500/20"
            >
              {t('cta')}
              <span className="rtl:rotate-180 transition-transform duration-200">{Arrow}</span>
            </Link>
          </div>

          {/* Right — Premium legal visual */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-[#0a0f1e] via-[#121c33] to-[#1a2744]">
              {/* Large scale of justice — bold, centered, meaningful */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-32 h-32 md:w-40 md:h-40 text-gold-400 fill-none stroke-current" aria-hidden="true" style={{ strokeOpacity: 0.18 }}>
                  {/* Pillar */}
                  <line x1="60" y1="20" x2="60" y2="100" strokeWidth="1.5" />
                  {/* Base */}
                  <line x1="40" y1="100" x2="80" y2="100" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="48" y1="96" x2="72" y2="96" strokeWidth="1.2" strokeLinecap="round" />
                  {/* Top beam */}
                  <line x1="28" y1="28" x2="92" y2="28" strokeWidth="1.5" strokeLinecap="round" />
                  {/* Left pan */}
                  <path d="M28 28 L20 52 Q20 58 32 58 Q44 58 44 52 L36 28" strokeWidth="1" />
                  <line x1="32" y1="58" x2="40" y2="58" strokeWidth="1" strokeLinecap="round" />
                  {/* Right pan */}
                  <path d="M84 28 L76 48 Q76 54 88 54 Q100 54 100 48 L92 28" strokeWidth="1" />
                  <line x1="88" y1="54" x2="96" y2="54" strokeWidth="1" strokeLinecap="round" />
                  {/* Crown */}
                  <circle cx="60" cy="20" r="4" strokeWidth="1.2" />
                </svg>
              </div>

              {/* Subtle accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

              {/* Bottom label */}
              <div className="absolute bottom-6 start-0 end-0 text-center">
                <p className="text-gold-400/20 text-[10px] tracking-[0.4em] uppercase font-semibold">
                  {locale === 'ar' ? 'قانون مؤسسي' : 'Institutional Law'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
