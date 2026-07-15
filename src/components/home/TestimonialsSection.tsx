import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/types';

const testimonials = [
  {
    quoteAr: 'تعاملنا مع المكتب في عدة قضايا تجارية وكان التعامل احترافيًا للغاية. نوصي بهم بشدة لأي شركة تبحث عن تمثيل قانوني متميز.',
    quoteEn: 'We worked with the firm on several corporate matters and the service was extremely professional. We highly recommend them to any business seeking outstanding legal representation.',
    nameAr: 'خالد الشمري', nameEn: 'Khalid Al-Shammar',
    roleAr: 'الرئيس التنفيذي', roleEn: 'CEO',
    companyAr: 'مجموعة الأفق للتطوير', companyEn: 'Al-Ufooq Development Group',
  },
  {
    quoteAr: 'ساعدنا الفريق القانوني في تأسيس شركتنا والحصول على جميع التراخيص اللازمة. خبرة استثنائية في قوانين الأعمال.',
    quoteEn: 'The legal team helped us establish our company and obtain all necessary licenses. Exceptional expertise in business law.',
    nameAr: 'نورة الحربي', nameEn: 'Noura Al-Harbi',
    roleAr: 'مؤسسة ومدير عام', roleEn: 'Founder & Managing Director',
    companyAr: 'تقنية المستقبل', companyEn: 'Future Tech Solutions',
  },
  {
    quoteAr: 'فريق محترف ومتعاون في التعامل مع عقود الشركة والالتزامات التنظيمية. نثق بهم تمامًا في جميع مسائلنا القانونية.',
    quoteEn: 'A professional and cooperative team in handling corporate contracts and regulatory compliance. We fully trust them with all our legal matters.',
    nameAr: 'فهد العتيبي', nameEn: 'Fahad Al-Otaibi',
    roleAr: 'مدير المالية', roleEn: 'Chief Financial Officer',
    companyAr: 'مجموعة الاستثمارات', companyEn: 'Al-Invest Holdings',
  },
] as const;

export default function TestimonialsSection({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('testimonials');

  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
            {locale === 'ar' ? 'عملاؤنا' : 'Client Voices'}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* Testimonials — editorial layout */}
        <div className="grid grid-cols-1 gap-0 divide-y divide-navy-100 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="py-10 px-6 lg:px-10 group">
              {/* Quote mark */}
              <div className="quote-mark mb-2 select-none" aria-hidden="true">&ldquo;</div>

              <p className="text-navy-600 leading-relaxed mb-8 text-[15px]">
                {locale === 'ar' ? testimonial.quoteAr : testimonial.quoteEn}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-gold-400 text-sm font-bold">
                  {(locale === 'ar' ? testimonial.nameAr : testimonial.nameEn).charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-navy-900 text-sm">
                    {locale === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                  </p>
                  <p className="text-xs text-navy-400">
                    {locale === 'ar' ? testimonial.roleAr : testimonial.roleEn}
                    {' · '}
                    <span className="text-gold-600 font-medium">
                      {locale === 'ar' ? testimonial.companyAr : testimonial.companyEn}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
