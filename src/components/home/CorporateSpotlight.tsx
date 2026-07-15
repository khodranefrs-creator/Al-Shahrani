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
        {/* Full-width editorial layout — content top, visual below on mobile; side-by-side on desktop */}
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

            {/* Highlights as elegant list */}
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

          {/* Right — Architectural institutional visual */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              {/* Multi-layered architectural background */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #121c33 35%, #1a2744 65%, #121c33 100%)' }} />

              {/* Architectural column lines */}
              <div className="absolute inset-0" aria-hidden="true">
                {/* Horizontal lines — like a classical building */}
                <div className="absolute top-[15%] start-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />
                <div className="absolute top-[50%] start-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/10 to-transparent" />
                <div className="absolute top-[85%] start-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />
                {/* Vertical columns */}
                <div className="absolute top-0 start-[20%] h-full w-px bg-gradient-to-b from-gold-400/20 via-gold-400/8 to-gold-400/20" />
                <div className="absolute top-0 start-[40%] h-full w-px bg-gradient-to-b from-gold-400/15 via-gold-400/6 to-gold-400/15" />
                <div className="absolute top-0 start-[60%] h-full w-px bg-gradient-to-b from-gold-400/15 via-gold-400/6 to-gold-400/15" />
                <div className="absolute top-0 start-[80%] h-full w-px bg-gradient-to-b from-gold-400/20 via-gold-400/8 to-gold-400/20" />
                {/* Capital — top entablature */}
                <div className="absolute top-[12%] start-[18%] w-[64%] h-px bg-gold-400/25" />
                <div className="absolute top-[10%] start-[20%] w-[60%] h-px bg-gold-400/10" />
              </div>

              {/* Central institution symbol */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <svg viewBox="0 0 100 100" className="w-20 h-20 text-gold-400/[0.12] fill-none stroke-current stroke-[0.4]" aria-hidden="true">
                    <path d="M50 10v50M25 30l25-12 25 12M15 65h70M25 65c0-10 0-18 6-25s6-15 6-25M75 65c0-10 0-18-6-25s-6-15-6-25" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {/* Decorative ring */}
                  <div className="absolute -inset-8 border border-gold-400/[0.06]" />
                  <div className="absolute -inset-12 border border-gold-400/[0.03]" />
                </div>
              </div>

              {/* Corner frames */}
              <div className="absolute top-4 start-4 w-16 h-16 border-t-2 border-s-2 border-gold-400/10" />
              <div className="absolute bottom-4 end-4 w-16 h-16 border-b-2 border-e-2 border-gold-400/10" />
              <div className="absolute top-4 end-4 w-16 h-16 border-t-2 border-e-2 border-gold-400/10" />
              <div className="absolute bottom-4 start-4 w-16 h-16 border-b-2 border-s-2 border-gold-400/10" />

              {/* Bottom institution text */}
              <div className="absolute bottom-6 start-0 end-0 text-center">
                <p className="text-gold-400/15 text-[10px] tracking-[0.4em] uppercase font-semibold">
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
