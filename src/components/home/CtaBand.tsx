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
    <section className="bg-navy-gradient py-16 md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          {t('headline')}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-navy-200">
          {t('subtext')}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center rounded-lg bg-gold-500 px-8 py-3.5 text-sm font-semibold text-navy-900 shadow-lg transition-colors duration-200 hover:bg-gold-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 sm:w-auto"
          >
            {t('ctaConsultation')}
          </Link>

          <a
            href={getWhatsAppUrl(siteConfig.whatsapp, t('whatsappMessage'))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            {t('ctaWhatsApp')}
          </a>
        </div>
      </div>
    </section>
  );
}
