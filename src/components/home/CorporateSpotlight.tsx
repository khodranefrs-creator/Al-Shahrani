import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import type { Locale } from '@/types';

export default function CorporateSpotlight({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('corporateSpotlight');

  return (
    <section className="bg-navy-gradient-subtle py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-8">
            <h2
              className="text-3xl font-bold tracking-tight text-navy-900 md:text-4xl lg:text-5xl"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t('title')}
            </h2>

            <p className="text-lg leading-relaxed text-navy-600">
              {t('description')}
            </p>

            <Link
              href="/services/corporate-law"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-900 shadow-lg transition-colors duration-200 hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
            >
              {t('cta')}
              {locale === 'ar' ? (
                <ArrowLeft className="h-5 w-5" />
              ) : (
                <ArrowRight className="h-5 w-5" />
              )}
            </Link>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl bg-navy-800 shadow-2xl">
              {/* Building silhouette SVG */}
              <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                {/* Background grid */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(212,175,55,0.06)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#grid)" />

                {/* Main building */}
                <rect x="140" y="100" width="120" height="250" rx="4" fill="rgba(212,175,55,0.08)" stroke="rgba(212,175,55,0.25)" strokeWidth="1" />
                <rect x="155" y="120" width="25" height="30" rx="2" fill="rgba(212,175,55,0.15)" />
                <rect x="190" y="120" width="25" height="30" rx="2" fill="rgba(212,175,55,0.15)" />
                <rect x="155" y="170" width="25" height="30" rx="2" fill="rgba(212,175,55,0.15)" />
                <rect x="190" y="170" width="25" height="30" rx="2" fill="rgba(212,175,55,0.15)" />
                <rect x="155" y="220" width="25" height="30" rx="2" fill="rgba(212,175,55,0.15)" />
                <rect x="190" y="220" width="25" height="30" rx="2" fill="rgba(212,175,55,0.15)" />
                <rect x="155" y="270" width="25" height="30" rx="2" fill="rgba(212,175,55,0.15)" />
                <rect x="190" y="270" width="25" height="30" rx="2" fill="rgba(212,175,55,0.15)" />

                {/* Left wing */}
                <rect x="60" y="200" width="80" height="150" rx="4" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.18)" strokeWidth="1" />
                <rect x="75" y="220" width="20" height="25" rx="2" fill="rgba(212,175,55,0.12)" />
                <rect x="105" y="220" width="20" height="25" rx="2" fill="rgba(212,175,55,0.12)" />
                <rect x="75" y="265" width="20" height="25" rx="2" fill="rgba(212,175,55,0.12)" />
                <rect x="105" y="265" width="20" height="25" rx="2" fill="rgba(212,175,55,0.12)" />

                {/* Right wing */}
                <rect x="260" y="180" width="80" height="170" rx="4" fill="rgba(212,175,55,0.06)" stroke="rgba(212,175,55,0.18)" strokeWidth="1" />
                <rect x="275" y="200" width="20" height="25" rx="2" fill="rgba(212,175,55,0.12)" />
                <rect x="305" y="200" width="20" height="25" rx="2" fill="rgba(212,175,55,0.12)" />
                <rect x="275" y="245" width="20" height="25" rx="2" fill="rgba(212,175,55,0.12)" />
                <rect x="305" y="245" width="20" height="25" rx="2" fill="rgba(212,175,55,0.12)" />

                {/* Scales of justice at center */}
                <g transform="translate(200, 80)">
                  <line x1="0" y1="0" x2="0" y2="20" stroke="rgba(212,175,55,0.5)" strokeWidth="1.5" />
                  <line x1="-25" y1="10" x2="25" y2="10" stroke="rgba(212,175,55,0.5)" strokeWidth="1.5" />
                  <line x1="-25" y1="10" x2="-25" y2="30" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
                  <line x1="25" y1="10" x2="25" y2="30" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
                  <path d="M -35,30 Q -25,38 -15,30" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
                  <path d="M 15,30 Q 25,38 35,30" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="1" />
                  <circle cx="0" cy="0" r="3" fill="rgba(212,175,55,0.6)" />
                </g>

                {/* Ground line */}
                <line x1="30" y1="350" x2="370" y2="350" stroke="rgba(212,175,55,0.2)" strokeWidth="1" />
              </svg>

              {/* Gradient overlay borders */}
              <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-gold-500 to-gold-300" />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-gold-300 to-gold-500" />
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gold-500 to-gold-300" />
              <div className="absolute right-0 top-0 h-full w-1 bg-gradient-to-b from-gold-300 to-gold-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
