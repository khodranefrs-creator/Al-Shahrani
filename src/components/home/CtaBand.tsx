import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { MessageCircle } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { siteConfig } from '@/types';
import { getWhatsAppUrl } from '@/lib/utils';
import type { Locale } from '@/types';

export default function CtaBand({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('ctaBand');

  return (
    <section className="relative bg-navy-gradient py-20 md:py-28 overflow-hidden">
      {/* Subtle radial accent */}
      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-1/2 start-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold-500/[0.06] blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          {t('headline')}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50 leading-relaxed">
          {t('subtext')}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-lg bg-gold-500 px-10 py-4 text-base font-semibold text-navy-900 shadow-xl shadow-gold-500/25 transition-all duration-300 hover:bg-gold-400 hover:shadow-2xl hover:shadow-gold-500/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 sm:w-auto"
          >
            {t('ctaConsultation')}
          </Link>

          <a
            href={getWhatsAppUrl(siteConfig.whatsapp, t('whatsappMessage'))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 px-10 py-4 text-base font-medium text-white/80 transition-all duration-300 hover:bg-white/5 hover:border-white/25 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            {t('ctaWhatsApp')}
          </a>
        </div>
      </div>
    </section>
  );
}
