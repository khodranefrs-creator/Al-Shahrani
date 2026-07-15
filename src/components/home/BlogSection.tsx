import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowLeft, ArrowRight, Clock } from 'lucide-react';
import { EyebrowTag } from '@/components/ui/EyebrowTag';
import type { Locale } from '@/types';

const articles = [
  {
    titleAr: 'أحدث التعديلات على نظام الشركات السعودي',
    titleEn: 'Latest Amendments to Saudi Company Law',
    excerptAr: 'نظرة تحليلية على أحدث التغييرات في نظام الشركات السعودي وتأثيرها على الأعمال والاستثمار.',
    excerptEn: 'An analytical look at the latest changes in Saudi company law and their impact on business.',
    date: '2025-01-15', slug: 'latest-amendments-saudi-company-law',
    categoryAr: 'قانون الشركات', categoryEn: 'Corporate Law',
    readingTime: 5,
  },
  {
    titleAr: 'أهمية الحوكمة المؤسسية للشركات الناشئة',
    titleEn: 'The Importance of Corporate Governance for Startups',
    excerptAr: 'لماذا تحتاج الشركات الناشئة إلى تطبيق مبادئ الحوكمة من أبكر مراحل التأسيس.',
    excerptEn: 'Why startups need to implement governance principles from the earliest stages.',
    date: '2025-01-08', slug: 'corporate-governance-startups',
    categoryAr: 'الحوكمة', categoryEn: 'Governance',
    readingTime: 4,
  },
  {
    titleAr: 'دليل شامل لعقود الامتثال التجاري',
    titleEn: 'A Comprehensive Guide to Commercial Compliance',
    excerptAr: 'شرح مفصل لأهم أنواع العقود التجارية ومتطلبات الامتثال التنظيمي في السوق السعودي.',
    excerptEn: 'A detailed overview of key commercial contract types and regulatory compliance requirements.',
    date: '2024-12-20', slug: 'guide-commercial-compliance-contracts',
    categoryAr: 'الامتثال', categoryEn: 'Compliance',
    readingTime: 6,
  },
] as const;

function formatDate(date: string, locale: string) {
  return new Date(date).toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogSection({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('blog');
  const isRtl = locale === 'ar';

  return (
    <section className="bg-warm-50 section-padding">
      <div className="container-custom">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-xl">
            <div className="flex mb-4">
              <EyebrowTag label={locale === 'ar' ? 'المدونة' : 'Insights'} />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy-900 leading-[1.15]"
              style={{ fontFamily: 'var(--font-heading-ar)' }}
            >
              {t('title')}
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-gold-600 hover:text-gold-500 transition-colors duration-200 group shrink-0"
          >
            <span className="link-underline">{t('viewAll')}</span>
            {isRtl ? (
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </Link>
        </div>

        {/* Blog cards — uniform 3-col grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, idx) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group surface-card hover-lift overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="h-44 md:h-[200px] bg-gradient-to-br from-navy-800 to-navy-900 rounded-t-[var(--radius-surface)] flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center opacity-[0.08]">
                  <svg viewBox="0 0 24 24" className="w-16 h-16 text-gold-400 fill-none stroke-current stroke-[0.5]" aria-hidden="true">
                    <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-warm-500 text-xs">{formatDate(article.date, locale)}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs text-gold-600 bg-gold-50 px-2.5 py-0.5 rounded-full">
                    <Clock className="w-3 h-3" />
                    {article.readingTime} {locale === 'ar' ? 'دقيقة' : 'min'}
                  </span>
                </div>
                <h3
                  className="font-semibold text-navy-900 mb-2 group-hover:text-gold-700 transition-colors duration-300 line-clamp-2 text-lg"
                  style={{ fontFamily: 'var(--font-heading-ar)' }}
                >
                  {locale === 'ar' ? article.titleAr : article.titleEn}
                </h3>
                <p className="text-warm-600 text-sm leading-relaxed line-clamp-2">
                  {locale === 'ar' ? article.excerptAr : article.excerptEn}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
