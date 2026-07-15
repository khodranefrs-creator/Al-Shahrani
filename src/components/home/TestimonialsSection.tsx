import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/types';
import { EyebrowTag } from '@/components/ui/EyebrowTag';

const testimonials = [
  {
    quoteAr: 'عملنا مع المكتب في عدة قضايا تجارية وكان التعامل احترافياً. نوصي بهم بشدة لأي شركة تبحث عن تمثيل قانوني متميز.',
    quoteEn: 'We worked with the firm on several corporate matters and the service was extremely professional. We highly recommend them.',
    nameAr: 'خالد الشمري', nameEn: 'Khalid Al-Shammar',
    roleAr: 'الرئيس التنفيذي', roleEn: 'CEO',
    companyAr: 'مجموعة الأفق للتطوير', companyEn: 'Al-Ufooq Development',
  },
  {
    quoteAr: 'ساعدنا الفريق القانوني في تأسيس شركتنا والحصول على جميع التراخيص اللازمة. خبرة استثنائية في قوانين الأعمال.',
    quoteEn: 'The legal team helped us establish our company and obtain all necessary licenses. Exceptional expertise in business law.',
    nameAr: 'نورة الحربي', nameEn: 'Noura Al-Harbi',
    roleAr: 'مؤسسة ومدير عام', roleEn: 'Founder & Managing Director',
    companyAr: 'تقنية المستقبل', companyEn: 'Future Tech Solutions',
  },
  {
    quoteAr: 'فريق محترف ومتعاون في التعامل مع عقود الشركة والالتزام التنظيمي. نثق بهم تماماً في جميع شؤوننا القانونية.',
    quoteEn: 'A professional and cooperative team in handling corporate contracts and regulatory compliance. We fully trust them.',
    nameAr: 'فهد العتيبي', nameEn: 'Fahad Al-Otaibi',
    roleAr: 'مدير المالية', roleEn: 'Chief Financial Officer',
    companyAr: 'مجموعة الاستثمارات', companyEn: 'Al-Invest Holdings',
  },
] as const;

export default function TestimonialsSection({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('testimonials');

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="container-custom">
        {/* Section header — centered */}
        <div className="text-center mb-10 md:mb-12">
          <div className="flex justify-center mb-3">
            <EyebrowTag label={t('title')} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-navy-900 leading-[1.15]"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {locale === 'ar' ? 'عملاؤنا يثقون بنا' : 'Our Clients Trust Us'}
          </h2>
          {/* Gold diamond divider */}
          <div className="flex items-center justify-center gap-3 mt-4 max-w-xs mx-auto">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
            <span className="text-gold-400 text-xs">&#9670;</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          </div>
        </div>

        {/* Testimonials — 3-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="surface-card p-8 flex flex-col"
            >
              {/* Quote mark */}
              <div
                className="text-gold-300/40 leading-none font-serif select-none mb-4"
                style={{ fontSize: '3rem', fontFamily: 'Georgia, serif' }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <blockquote className="flex-1">
                <p className="text-warm-600 leading-[1.8] mb-8 text-[15px]">
                  {locale === 'ar' ? testimonial.quoteAr : testimonial.quoteEn}
                </p>
              </blockquote>

              <footer>
                <div className="w-10 h-px bg-gold-400/40 mb-4" />
                <cite className="not-italic">
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
                </cite>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
