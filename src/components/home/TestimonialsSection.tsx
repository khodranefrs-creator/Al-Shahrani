import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Star } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Locale } from '@/types';

const testimonials = [
  {
    quoteAr:
      'تعاملنا مع المكتب في عدة قضايا تجارية وكان التعامل احترافيًا للغاية. نوصي بهم بشدة لأي شركة تبحث عن تمثيل قانوني متميز.',
    quoteEn:
      'We worked with the firm on several corporate matters and the service was extremely professional. We highly recommend them to any business seeking outstanding legal representation.',
    nameAr: 'خالد الشمري',
    nameEn: 'Khalid Al-Shammar',
    roleAr: 'الرئيس التنفيذي',
    roleEn: 'CEO',
    companyAr: 'مجموعة الأفق للتطوير',
    companyEn: 'Al-Ufooq Development Group',
    rating: 5,
  },
  {
    quoteAr:
      'ساعدنا الفريق القانوني في تأسيس شركتنا والحصول على جميع التراخيص اللازمة. خبرة استثنائية في قوانين الأعمال.',
    quoteEn:
      'The legal team helped us establish our company and obtain all necessary licenses. Exceptional expertise in business law.',
    nameAr: 'نورة الحربي',
    nameEn: 'Noura Al-Harbi',
    roleAr: 'مؤسسة ومدير عام',
    roleEn: 'Founder & Managing Director',
    companyAr: 'تقنية المستقبل',
    companyEn: 'Future Tech Solutions',
    rating: 5,
  },
  {
    quoteAr:
      'فريق محترف ومتعاون في التعامل مع عقود الشركة والالتزامات التنظيمية. نثق بهم تمامًا في جميع مسائلنا القانونية.',
    quoteEn:
      'A professional and cooperative team in handling corporate contracts and regulatory compliance. We fully trust them with all our legal matters.',
    nameAr: 'فهد العتيبي',
    nameEn: 'Fahad Al-Otaibi',
    roleAr: 'مدير المالية',
    roleEn: 'Chief Financial Officer',
    companyAr: 'مجموعة الاستثمارات',
    companyEn: 'Al-Invest Holdings',
    rating: 4,
  },
] as const;

export default function TestimonialsSection({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('testimonials');

  return (
    <section className="bg-warm-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-navy-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl rtl:border-r-4 rtl:border-r-gold-500 ltr:border-l-4 ltr:border-l-gold-500"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating
                        ? 'fill-gold-400 text-gold-400'
                        : 'text-navy-200'
                    }`}
                  />
                ))}
              </div>

              <p className="mb-6 leading-relaxed text-navy-600 italic">
                &ldquo;{locale === 'ar' ? testimonial.quoteAr : testimonial.quoteEn}&rdquo;
              </p>

              <div className="border-t border-navy-100 pt-6">
                <p className="font-bold text-navy-900">
                  {locale === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                </p>
                <p className="mt-1 text-sm text-navy-500">
                  {locale === 'ar' ? testimonial.roleAr : testimonial.roleEn}
                </p>
                <p className="text-sm font-medium text-gold-600">
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
