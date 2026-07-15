import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/lib/utils';
import { siteConfig } from '@/types';
import { EyebrowTag } from '@/components/ui/EyebrowTag';
import type { Locale } from '@/types';

export default function CtaBand({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('ctaBand');
  const isRtl = locale === 'ar';

  const trustItems = locale === 'ar'
    ? ['خبرة تمتد لأكثر من 20 عاماً', 'فريق من المحامين المتخصصين', 'الاستشارة الأولى مجاناً']
    : ['Over 20 years of experience', 'Team of specialized lawyers', 'Initial consultation free'];

  return (
    <section className="bg-navy-950 section-padding relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-400/[0.03] blur-[120px] pointer-events-none" />

      {/* Top accent line */}
      <div className="absolute top-6 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-5">
            <EyebrowTag label={locale === 'ar' ? 'تواصل معنا' : 'Get in Touch'} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-5 text-balance"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('headline')}
          </h2>
          <p className="text-warm-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            {t('subtext')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary group">
              {t('ctaConsultation')}
              {isRtl ? (
                <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden="true" />
              ) : (
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              )}
            </Link>
            <a
              href={getWhatsAppUrl(siteConfig.whatsapp, '')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t('ctaWhatsApp')}
            </a>
          </div>

          {/* Trust items */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustItems.map((item: string) => (
              <span key={item} className="inline-flex items-center gap-2 text-sm text-warm-500">
                <svg viewBox="0 0 16 16" className="w-4 h-4 text-gold-400 fill-none stroke-current stroke-[2]" aria-hidden="true">
                  <path d="M3 8.5l3.5 3.5L13 4.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
