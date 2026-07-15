import Image from "next/image";
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Calendar } from 'lucide-react';
import type { Locale } from '@/types';

const articles = [
  {
    titleAr: 'أحدث التعديلات على نظام الشركات السعودي',
    titleEn: 'Latest Amendments to Saudi Company Law',
    excerptAr: 'نظرة تحليلية على أحدث التغييرات في نظام الشركات السعودي وتأثيرها على الأعمال التجارية والاستثمار.',
    excerptEn: 'An analytical look at the latest changes in Saudi company law and their impact on business and investment.',
    date: '2025-01-15', slug: 'latest-amendments-saudi-company-law',
    categoryAr: 'قانون الشركات', categoryEn: 'Corporate Law',
  },
  {
    titleAr: 'أهمية الحوكمة المؤسسية في الشركات الناشئة',
    titleEn: 'The Importance of Corporate Governance for Startups',
    excerptAr: 'لماذا تحتاج الشركات الناشئة إلى تطبيق مبادئ الحوكمة من أبكر مراحل التأسيس.',
    excerptEn: 'Why startups need to implement governance principles from the earliest stages of formation.',
    date: '2025-01-08', slug: 'corporate-governance-startups',
    categoryAr: 'الحوكمة', categoryEn: 'Governance',
  },
  {
    titleAr: 'دليل شامل لعقود الامتثال التجاري',
    titleEn: 'A Comprehensive Guide to Commercial Compliance Contracts',
    excerptAr: 'شرح مفصل لأهم أنواع العقود التجارية ومتطلبات الامتثال التنظيمي في السوق السعودي.',
    excerptEn: 'A detailed overview of key commercial contract types and regulatory compliance requirements in the Saudi market.',
    date: '2024-12-20', slug: 'guide-commercial-compliance-contracts',
    categoryAr: 'الامتثال', categoryEn: 'Compliance',
  },
] as const;

export default function BlogSection({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('blog');
  const Arrow = locale === 'ar' ? '\u2190' : '\u2192';

  return (
    <section className="section-premium bg-navy-950 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-20">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-gold-400 mb-4">
              {locale === 'ar' ? 'المدونة' : 'Insights'}
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: 'var(--font-heading-ar)' }}
            >
              {t('title')}
            </h2>
            <div className="mt-6 h-[2px] w-12 bg-gradient-to-r from-gold-400 to-gold-300" />
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-base font-semibold text-gold-400 hover:text-gold-300 transition-smooth shrink-0"
          >
            <span className="link-underline">{t('viewAll')}</span>
            <span className="rtl:rotate-180">{Arrow}</span>
          </Link>
        </div>

        {/* Articles — editorial layout */}
        <div className="grid grid-cols-1 gap-0 divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group py-10 lg:py-0 lg:px-10 first:lg:ps-0 last:lg:pe-0"
            >
              {/* Article image — TODO: Replace with official firm photography supplied by client */}
              <div className="relative mb-6 aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={`/images/blog/${article.slug}.jpg`}
                  alt={locale === 'ar' ? `صورة مقال: ${article.titleAr}` : `Article image: ${article.titleEn}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-gold-400">
                  {locale === 'ar' ? article.categoryAr : article.categoryEn}
                </span>
              </div>

              <h3
                className="text-lg font-bold text-white mb-3 transition-colors duration-200 group-hover:text-gold-300 leading-snug"
                style={{ fontFamily: 'var(--font-heading-ar)' }}
              >
                {locale === 'ar' ? article.titleAr : article.titleEn}
              </h3>

              <p className="text-sm text-warm-400 leading-relaxed mb-5">
                {locale === 'ar' ? article.excerptAr : article.excerptEn}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-warm-500">
                <Calendar className="h-3.5 w-3.5" />
                <time>{article.date}</time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
