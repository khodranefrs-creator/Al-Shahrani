import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, ArrowLeft, Calendar, ArrowUpRight, Building2, Shield, FileText } from 'lucide-react';
import type { Locale } from '@/types';

const articles = [
  {
    titleAr: 'أحدث التعديلات على نظام الشركات السعودي',
    titleEn: 'Latest Amendments to Saudi Company Law',
    excerptAr: 'نظرة تحليلية على أحدث التغييرات في نظام الشركات السعودي وتأثيرها على الأعمال التجارية والاستثمار.',
    excerptEn: 'An analytical look at the latest changes in Saudi company law and their impact on business and investment.',
    date: '2025-01-15', slug: 'latest-amendments-saudi-company-law',
    icon: Building2, categoryAr: 'قانون الشركات', categoryEn: 'Corporate Law',
  },
  {
    titleAr: 'أهمية الحوكمة المؤسسية في الشركات الناشئة',
    titleEn: 'The Importance of Corporate Governance for Startups',
    excerptAr: 'لماذا تحتاج الشركات الناشئة إلى تطبيق مبادئ الحوكمة من أبكر مراحل التأسيس.',
    excerptEn: 'Why startups need to implement governance principles from the earliest stages of formation.',
    date: '2025-01-08', slug: 'corporate-governance-startups',
    icon: Shield, categoryAr: 'الحوكمة', categoryEn: 'Governance',
  },
  {
    titleAr: 'دليل شامل لعقود الامتثال التجاري',
    titleEn: 'A Comprehensive Guide to Commercial Compliance Contracts',
    excerptAr: 'شرح مفصل لأهم أنواع العقود التجارية ومتطلبات الامتثال التنظيمي في السوق السعودي.',
    excerptEn: 'A detailed overview of key commercial contract types and regulatory compliance requirements in the Saudi market.',
    date: '2024-12-20', slug: 'guide-commercial-compliance-contracts',
    icon: FileText, categoryAr: 'الامتثال', categoryEn: 'Compliance',
  },
] as const;

export default function BlogSection({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('blog');
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="bg-navy-gradient-subtle py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
              {locale === 'ar' ? 'المدونة' : 'Insights'}
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t('title')}
            </h2>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold-500 to-gold-300" />
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-base font-semibold text-gold-600 hover:text-gold-700 transition-colors shrink-0"
          >
            {t('viewAll')}
            <ArrowIcon className="h-4 w-4" />
          </Link>
        </div>

        {/* Articles — editorial layout */}
        <div className="grid grid-cols-1 gap-0 divide-y divide-navy-100 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {articles.map((article) => {
            const Icon = article.icon;
            const category = locale === 'ar' ? article.categoryAr : article.categoryEn;

            return (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group py-10 px-6 lg:px-10 transition-colors duration-300 hover:bg-white/60"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-gold-400 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-900">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold tracking-wider uppercase text-gold-600">
                    {category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy-900 mb-3 transition-colors duration-200 group-hover:text-gold-700 leading-snug">
                  {locale === 'ar' ? article.titleAr : article.titleEn}
                </h3>

                <p className="text-sm text-navy-500 leading-relaxed mb-5">
                  {locale === 'ar' ? article.excerptAr : article.excerptEn}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-navy-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <time>{article.date}</time>
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-navy-300 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-gold-600" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
