import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/types';

const testimonials = [
  {
    quoteAr: '\u062a\u0639\u0627\u0645\u0644\u0646\u0627 \u0645\u0639 \u0627\u0644\u0645\u0643\u062a\u0628 \u0641\u064a \u0639\u062f\u0629 \u0642\u0636\u0627\u064a\u0627 \u062a\u062c\u0627\u0631\u064a\u0629 \u0648\u0643\u0627\u0646 \u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0627\u062d\u062a\u0631\u0627\u0641\u064a\u064b\u0627. \u0646\u0648\u0635\u064a \u0628\u0647\u0645 \u0628\u0634\u062f\u0629 \u0644\u0623\u064a \u0634\u0631\u0643\u0629 \u062a\u0628\u062d\u062b \u0639\u0646 \u062a\u0645\u062b\u064a\u0644 \u0642\u0627\u0646\u0648\u0646\u064a \u0645\u062a\u0645\u064a\u0632.',
    quoteEn: 'We worked with the firm on several corporate matters and the service was extremely professional. We highly recommend them to any business seeking outstanding legal representation.',
    nameAr: '\u062e\u0627\u0644\u062f \u0627\u0644\u0634\u0645\u0631\u064a', nameEn: 'Khalid Al-Shammar',
    roleAr: '\u0627\u0644\u0631\u0626\u064a\u0633 \u0627\u0644\u062a\u0646\u0641\u064a\u0630\u064a', roleEn: 'CEO',
    companyAr: '\u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0623\u0641\u0642 \u0644\u0644\u062a\u0637\u0648\u064a\u0631', companyEn: 'Al-Ufooq Development Group',
  },
  {
    quoteAr: '\u0633\u0627\u0639\u062f\u0646\u0627 \u0627\u0644\u0641\u0631\u064a\u0642 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a \u0641\u064a \u062a\u0623\u0633\u064a\u0633 \u0634\u0631\u0643\u062a\u0646\u0627 \u0648\u0627\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062c\u0645\u064a\u0639 \u0627\u0644\u062a\u0631\u0627\u062e\u064a\u0635 \u0627\u0644\u0644\u0627\u0632\u0645\u0629. \u062e\u0628\u0631\u0629 \u0627\u0633\u062a\u062b\u0646\u0627\u0626\u064a\u0629 \u0641\u064a \u0642\u0648\u0627\u0646\u064a\u0646 \u0627\u0644\u0623\u0639\u0645\u0627\u0644.',
    quoteEn: 'The legal team helped us establish our company and obtain all necessary licenses. Exceptional expertise in business law.',
    nameAr: '\u0646\u0648\u0631\u0629 \u0627\u0644\u062d\u0631\u0628\u064a', nameEn: 'Noura Al-Harbi',
    roleAr: '\u0645\u0624\u0633\u0633\u0629 \u0648\u0645\u062f\u064a\u0631 \u0639\u0627\u0645', roleEn: 'Founder & Managing Director',
    companyAr: '\u062a\u0642\u0646\u064a\u0629 \u0627\u0644\u0645\u0633\u062a\u0642\u0628\u0644', companyEn: 'Future Tech Solutions',
  },
  {
    quoteAr: '\u0641\u0631\u064a\u0642 \u0645\u062d\u062a\u0631\u0641 \u0648\u0645\u062a\u0639\u0627\u0648\u0646 \u0641\u064a \u0627\u0644\u062a\u0639\u0627\u0645\u0644 \u0645\u0639 \u0639\u0642\u0648\u062f \u0627\u0644\u0634\u0631\u0643\u0629 \u0648\u0627\u0644\u0627\u0644\u062a\u0632\u0627\u0645\u0627\u062a \u0627\u0644\u062a\u0646\u0638\u064a\u0645\u064a\u0629. \u0646\u062b\u0642 \u0628\u0647\u0645 \u062a\u0645\u0627\u0645\u064b\u0627 \u0641\u064a \u062c\u0645\u064a\u0639 \u0645\u0633\u0627\u0626\u0644\u0646\u0627 \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a\u0629.',
    quoteEn: 'A professional and cooperative team in handling corporate contracts and regulatory compliance. We fully trust them with all our legal matters.',
    nameAr: '\u0641\u0647\u062f \u0627\u0644\u0639\u062a\u064a\u0628\u064a', nameEn: 'Fahad Al-Otaibi',
    roleAr: '\u0645\u062f\u064a\u0631 \u0627\u0644\u0645\u0627\u0644\u064a\u0629', roleEn: 'Chief Financial Officer',
    companyAr: '\u0645\u062c\u0645\u0648\u0639\u0629 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0646\u0627\u062a', companyEn: 'Al-Invest Holdings',
  },
] as const;

export default function TestimonialsSection({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('testimonials');

  return (
    <section className="section-premium bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
            {locale === 'ar' ? '\u0639\u0645\u0644\u0627\u0626\u0646\u0627' : 'Client Voices'}
          </p>
          <h2
            className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-5 h-[2px] w-12 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* Testimonials — 3-column with quote marks */}
        <div className="grid grid-cols-1 gap-0 divide-y divide-warm-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="py-10 lg:py-0 lg:px-10 first:lg:ps-0 last:lg:pe-0">
              <div className="quote-mark mb-4 select-none" aria-hidden="true">&ldquo;</div>

              <p className="text-navy-700 leading-relaxed mb-10 text-[15px]">
                {locale === 'ar' ? testimonial.quoteAr : testimonial.quoteEn}
              </p>

              <div>
                <p
                  className="font-semibold text-navy-900 text-sm mb-1"
                  style={{ fontFamily: 'var(--font-heading-ar)' }}
                >
                  {locale === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                </p>
                <p className="text-xs text-warm-500">
                  {locale === 'ar' ? testimonial.roleAr : testimonial.roleEn}
                </p>
                <p className="text-xs text-gold-600 font-medium mt-1">
                  {locale === 'ar' ? testimonial.companyAr : testimonial.companyEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
