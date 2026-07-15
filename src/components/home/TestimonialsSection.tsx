import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import type { Locale } from '@/types';

const testimonials = [
  {
    quoteAr: 'عملنا مع المكتب في عدة قضايا تجارية وكان التعامل احترافياً. نوصي بهم بشدة لأي شركة تبحث عن تمثيل قانوني متميز.',
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
    quoteAr: 'فريق محترف ومتعاون في التعامل مع عقود الشركة والالتزام التنظيمي. نثق بهم تماماً في جميع شؤوننا القانونية.',
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
    <section className="relative bg-navy-900 overflow-hidden">
      {/* Decorative ambient glow */}
      <div
        className="absolute top-0 start-1/4 w-[600px] h-[600px] opacity-[0.04] pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--color-gold-400) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        {/* Section header */}
        <div className="mb-20 max-w-2xl">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-400 mb-4">
            {locale === 'ar' ? 'عملاؤنا' : 'Client Voices'}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-white tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-heading-ar)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-gold-400 to-gold-300" />
        </div>

        {/* Testimonials — large quote marks on navy */}
        <div className="grid grid-cols-1 gap-0 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative py-12 lg:py-0 lg:px-12 first:lg:ps-0 last:lg:pe-0"
            >
              {/* Subtle top border on mobile, left border on desktop */}
              {index > 0 && (
                <div className="absolute top-0 start-0 end-0 h-px bg-white/10 lg:top-0 lg:end-0 lg:start-auto lg:w-px lg:h-full first:hidden" />
              )}
              {index > 0 && (
                <div className="hidden lg:block absolute top-0 start-0 w-px h-full bg-white/10" />
              )}

              {/* Large decorative quote mark */}
              <div
                className="text-gold-400/20 leading-none font-serif select-none mb-6"
                style={{ fontSize: 'clamp(80px, 10vw, 140px)', fontFamily: 'Georgia, serif' }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <blockquote>
                <p className="text-warm-200 leading-[1.8] mb-10 text-[15px]">
                  {locale === 'ar' ? testimonial.quoteAr : testimonial.quoteEn}
                </p>
              </blockquote>

              <footer>
                <div className="w-10 h-px bg-gold-500/40 mb-5" />
                <cite className="not-italic">
                  <p
                    className="font-semibold text-white text-sm mb-1"
                    style={{ fontFamily: 'var(--font-heading-ar)' }}
                  >
                    {locale === 'ar' ? testimonial.nameAr : testimonial.nameEn}
                  </p>
                  <p className="text-xs text-warm-400">
                    {locale === 'ar' ? testimonial.roleAr : testimonial.roleEn}
                  </p>
                  <p className="text-xs text-gold-400/80 font-medium mt-1.5">
                    {locale === 'ar' ? testimonial.companyAr : testimonial.companyEn}
                  </p>
                </cite>
              </footer>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
    </section>
  );
}
