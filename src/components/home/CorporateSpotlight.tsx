import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { EyebrowTag } from '@/components/ui/EyebrowTag';
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
  const isRtl = locale === 'ar';

  return (
    <section className="bg-navy-950 section-padding relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-400/[0.03] blur-[120px] pointer-events-none" />

      {/* Top gold accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Content */}
          <div>
            <div className="flex justify-center lg:justify-start mb-4">
              <EyebrowTag label={locale === 'ar' ? 'القانون المؤسسي' : 'Institutional Practice'} />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-6 text-balance text-center lg:text-start"
              style={{ fontFamily: 'var(--font-heading-ar)' }}
            >
              {t('title')}
            </h2>
            <p className="text-warm-400 leading-[1.9] mb-8 max-w-xl text-base md:text-[1.0625rem]">
              {t('description')}
            </p>

            {/* Highlights — check list */}
            <div className="space-y-3 mb-8">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check aria-hidden="true" className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span className="text-warm-300 text-sm md:text-base">
                    {locale === 'ar' ? item.ar : item.en}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/services/corporate-law"
              className="inline-flex items-center gap-2 text-gold-400 font-medium hover:text-gold-300 transition-colors duration-200 group"
            >
              {t('cta')}
              {isRtl ? (
                <ArrowLeft aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              ) : (
                <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </Link>
          </div>

          {/* Right — Premium legal visual (scale of justice) */}
          <div className="relative max-lg:max-w-[320px] max-lg:mx-auto">
            <div className="aspect-square relative">
              {/* Front panel — scale of justice on dark surface */}
              <div className="absolute inset-0 z-10 rounded-[var(--radius-surface)] overflow-hidden border border-white/[0.06] bg-navy-900/60 flex items-center justify-center">
                <svg viewBox="0 0 120 120" className="w-24 h-24 md:w-32 md:h-32 text-gold-400 fill-none stroke-current" aria-hidden="true" style={{ strokeOpacity: 0.2 }}>
                  <line x1="60" y1="20" x2="60" y2="100" strokeWidth="1.5" />
                  <line x1="40" y1="100" x2="80" y2="100" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="48" y1="96" x2="72" y2="96" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="28" y1="28" x2="92" y2="28" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M28 28 L20 52 Q20 58 32 58 Q44 58 44 52 L36 28" strokeWidth="1" />
                  <path d="M84 28 L76 48 Q76 54 88 54 Q100 54 100 48 L92 28" strokeWidth="1" />
                  <circle cx="60" cy="20" r="4" strokeWidth="1.2" />
                </svg>
              </div>

              {/* Back panel — offset for depth */}
              <div
                className={`absolute inset-0 z-0 rounded-[var(--radius-surface)] overflow-hidden bg-navy-900/40 border border-white/[0.04] ${isRtl ? 'translate-x-5' : '-translate-x-5'} max-lg:translate-x-0`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
