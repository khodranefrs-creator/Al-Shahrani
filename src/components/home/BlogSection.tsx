import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, ArrowLeft, Calendar, Building2, Shield, FileText } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import type { Locale } from '@/types';

const articles = [
  {
    titleAr: 'أحدث التعديلات على نظام الشركات السعودي',
    titleEn: 'Latest Amendments to Saudi Company Law',
    excerptAr:
      'نظرة تحليلية على أحدث التغييرات في نظام الشركات السعودي وتأثيرها على الأعمال التجارية والاستثمار.',
    excerptEn:
      'An analytical look at the latest changes in Saudi company law and their impact on business and investment.',
    date: '2025-01-15',
    slug: 'latest-amendments-saudi-company-law',
    icon: Building2,
    categoryAr: 'قانون الشركات',
    categoryEn: 'Corporate Law',
  },
  {
    titleAr: 'أهمية الحوكمة المؤسسية في الشركات الناشئة',
    titleEn: 'The Importance of Corporate Governance for Startups',
    excerptAr:
      'لماذا تحتاج الشركات الناشئة إلى تطبيق مبادئ الحوكمة من أبكر مراحل التأسيس.',
    excerptEn:
      'Why startups need to implement governance principles from the earliest stages of formation.',
    date: '2025-01-08',
    slug: 'corporate-governance-startups',
    icon: Shield,
    categoryAr: 'الحوكمة',
    categoryEn: 'Governance',
  },
  {
    titleAr: 'دليل شامل لعقود الامتثال التجاري',
    titleEn: 'A Comprehensive Guide to Commercial Compliance Contracts',
    excerptAr:
      'شرح مفصل لأهم أنواع العقود التجارية ومتطلبات الامتثال التنظيمي في السوق السعودي.',
    excerptEn:
      'A detailed overview of key commercial contract types and regulatory compliance requirements in the Saudi market.',
    date: '2024-12-20',
    slug: 'guide-commercial-compliance-contracts',
    icon: FileText,
    categoryAr: 'الامتثال',
    categoryEn: 'Compliance',
  },
] as const;

export default function BlogSection({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('blog');

  return (
    <section className="bg-warm-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((article) => {
            const Icon = article.icon;
            const category = locale === 'ar' ? article.categoryAr : article.categoryEn;

            return (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group flex flex-col rounded-2xl border border-navy-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-48 rounded-t-2xl bg-gradient-to-br from-navy-800 to-navy-700 p-6 flex items-center justify-center">
                  {/* Topic-specific icon */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold-400/15 border border-gold-400/20 transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-8 w-8 text-gold-400" />
                  </div>

                  {/* Category badge */}
                  <span className="absolute top-4 end-4 inline-block rounded-full bg-gold-400/20 px-3 py-1 text-xs font-medium text-gold-300">
                    {category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex items-center gap-2 text-sm text-navy-400">
                    <Calendar className="h-4 w-4" />
                    <time>{article.date}</time>
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-navy-900 transition-colors duration-200 group-hover:text-gold-600">
                    {locale === 'ar' ? article.titleAr : article.titleEn}
                  </h3>

                  <p className="mb-6 flex-1 leading-relaxed text-navy-600">
                    {locale === 'ar' ? article.excerptAr : article.excerptEn}
                  </p>

                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition-colors duration-200 group-hover:text-gold-700">
                    {t('readMore')}
                    {locale === 'ar' ? (
                      <ArrowLeft className="h-4 w-4 transition-transform duration-200 rtl:-rotate-180 group-hover:-translate-x-1" />
                    ) : (
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    )}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-lg font-semibold text-gold-600 transition-colors duration-300 hover:text-gold-700"
          >
            {t('viewAll')}
            {locale === 'ar' ? (
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 rtl:-rotate-180 group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
