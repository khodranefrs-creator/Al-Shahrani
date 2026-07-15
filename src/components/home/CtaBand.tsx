import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { getWhatsAppUrl } from '@/lib/utils';
import { siteConfig } from '@/types';
import type { Locale } from '@/types';

export default function CtaBand({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('ctaBand');
  const Arrow = locale === 'ar' ? '\u2190' : '\u2192';

  const trustItems = locale === 'ar'
    ? ['خبرة تمتد لأكثر من 20 عاماً', 'فريق من المحامين المتخصصين', 'الاستشارة الأولى مجاناً']
    : ['Over 20 years of experience', 'Team of specialized lawyers', 'Initial consultation free'];

  return (
    <section className="relative bg-navy-950 overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #070b15 0%, #0c1222 40%, #131d35 70%, #0c1222 100%)',
        }}
        aria-hidden="true"
      />
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, var(--color-gold-400) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,169,110,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.3) 1px, transparent 1px)",
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('headline')}
          </h2>

          <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-gold-400 to-gold-300 mx-auto" />

          <p className="mt-8 text-lg leading-[1.8] text-warm-300 max-w-2xl mx-auto">
            {t('subtext')}
          </p>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-gold-500 text-white font-semibold hover:bg-gold-400 transition-smooth text-lg shadow-sm hover:shadow-md"
            >
              {t('ctaConsultation')}
              <span className="rtl:rotate-180 ms-2">{Arrow}</span>
            </Link>
            <a
              href={getWhatsAppUrl(siteConfig.whatsapp, '')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 border-2 border-gold-500/40 text-gold-400 font-semibold hover:bg-gold-500/10 hover:border-gold-400 transition-smooth text-lg"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current me-2" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('ctaWhatsApp')}
            </a>
          </div>

          {trustItems && trustItems.length > 0 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {trustItems.map((item: string) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-sm text-warm-400"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className="w-4 h-4 text-gold-500 fill-none stroke-current stroke-[2]"
                    aria-hidden="true"
                  >
                    <path d="M3 8.5l3.5 3.5L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
