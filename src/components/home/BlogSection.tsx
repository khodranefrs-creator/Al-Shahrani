import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Calendar } from 'lucide-react';
import type { Locale } from '@/types';

const articles = [
  {
    titleAr: 'أحدث التعديلات على نظام الشركات السعودي',
    titleEn: 'Latest Amendments to Saudi Company Law',
    excerptAr: 'نظرة تحليلية على أحدث التغييرات في نظام الشركات السعودي وتأثيرها على الأعمال والاستثمار.',
    excerptEn: 'An analytical look at the latest changes in Saudi company law and their impact on business and investment.',
    date: '2025-01-15', slug: 'latest-amendments-saudi-company-law',
    categoryAr: 'قانون الشركات', categoryEn: 'Corporate Law',
    icon: 'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
  },
  {
    titleAr: 'أهمية الحوكمة المؤسسية للشركات الناشئة',
    titleEn: 'The Importance of Corporate Governance for Startups',
    excerptAr: 'لماذا تحتاج الشركات الناشئة إلى تطبيق مبادئ الحوكمة من أبكر مراحل التأسيس.',
    excerptEn: 'Why startups need to implement governance principles from the earliest stages of formation.',
    date: '2025-01-08', slug: 'corporate-governance-startups',
    categoryAr: 'الحوكمة', categoryEn: 'Governance',
    icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  },
  {
    titleAr: 'دليل شامل لعقود الامتثال التجاري',
    titleEn: 'A Comprehensive Guide to Commercial Compliance Contracts',
    excerptAr: 'شرح مفصل لأهم أنواع العقود التجارية ومتطلبات الامتثال التنظيمي في السوق السعودي.',
    excerptEn: 'A detailed overview of key commercial contract types and regulatory compliance requirements in the Saudi market.',
    date: '2024-12-20', slug: 'guide-commercial-compliance-contracts',
    categoryAr: 'الامتثال', categoryEn: 'Compliance',
    icon: 'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  },
] as const;

export default function BlogSection({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('blog');
  const Arrow = locale === 'ar' ? '\u2190' : '\u2192';

  return (
    <section className="relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        {/* Section header — side-by-side */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-20">
          <div className="max-w-xl">
            <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
              {locale === 'ar' ? 'المدونة' : 'Insights'}
            </p>
            <h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold text-navy-900 tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-heading-ar)' }}
            >
              {t('title')}
            </h2>
            <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-gold-500 to-gold-300" />
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-600 transition-smooth shrink-0"
          >
            <span className="link-underline">{t('viewAll')}</span>
            <span className="rtl:rotate-180 transition-transform duration-200">{Arrow}</span>
          </Link>
        </div>

        {/* Articles — card-based */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block border border-warm-200 bg-white overflow-hidden hover-lift hover:border-gold-400 transition-smooth"
            >
              {/* Article image — navy gradient placeholder */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #0c1222 0%, #1a2240 50%, #2a3556 100%)',
                  }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 text-gold-400/15 fill-none stroke-current stroke-[0.8]" aria-hidden="true">
                    <path d={article.icon} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
              </div>

              <div className="p-8">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium bg-gold-50 text-gold-700 mb-5">
                  {locale === 'ar' ? article.categoryAr : article.categoryEn}
                </span>

                <h3
                  className="text-xl font-semibold text-navy-900 mb-3 leading-snug group-hover:text-gold-700 transition-smooth duration-200"
                  style={{ fontFamily: 'var(--font-heading-ar)' }}
                >
                  {locale === 'ar' ? article.titleAr : article.titleEn}
                </h3>

                <p className="text-warm-600 leading-[1.8] mb-8 text-sm line-clamp-3">
                  {locale === 'ar' ? article.excerptAr : article.excerptEn}
                </p>

                {/* Footer */}
                <div className="pt-5 border-t border-warm-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-warm-500">
                    <Calendar className="h-3.5 w-3.5" />
                    <time>{article.date}</time>
                  </div>
                  <span className="text-sm font-medium text-gold-700 inline-flex items-center gap-1">
                    {t('readMore')}
                    <span className="rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-1">{Arrow}</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
