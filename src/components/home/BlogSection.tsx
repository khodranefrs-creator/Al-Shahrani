import Image from "next/image";
import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { Calendar } from 'lucide-react';
import type { Locale } from '@/types';

const articles = [
  {
    titleAr: '\u0623\u062d\u062f\u062b \u0627\u0644\u062a\u0639\u062f\u064a\u0644\u0627\u062a \u0639\u0644\u0649 \u0646\u0638\u0627\u0645 \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0633\u0639\u0648\u062f\u064a',
    titleEn: 'Latest Amendments to Saudi Company Law',
    excerptAr: '\u0646\u0638\u0631\u0629 \u062a\u062d\u0644\u064a\u0644\u064a\u0629 \u0639\u0644\u0649 \u0623\u062d\u062f\u062b \u0627\u0644\u062a\u063a\u064a\u064a\u0631\u0627\u062a \u0641\u064a \u0646\u0638\u0627\u0645 \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0633\u0639\u0648\u062f\u064a \u0648\u062a\u0623\u062b\u064a\u0631\u0647\u0627 \u0639\u0644\u0649 \u0627\u0644\u0623\u0639\u0645\u0627\u0644 \u0627\u0644\u062a\u062c\u0627\u0631\u064a \u0648\u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631.',
    excerptEn: 'An analytical look at the latest changes in Saudi company law and their impact on business and investment.',
    date: '2025-01-15', slug: 'latest-amendments-saudi-company-law',
    categoryAr: '\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0634\u0631\u0643\u0627\u062a', categoryEn: 'Corporate Law',
  },
  {
    titleAr: '\u0623\u0647\u0645\u064a\u0629 \u0627\u0644\u062d\u0648\u0643\u0645\u0629 \u0627\u0644\u0645\u0624\u0633\u0633\u064a\u0629 \u0641\u064a \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0646\u0627\u0634\u0626\u0629',
    titleEn: 'The Importance of Corporate Governance for Startups',
    excerptAr: '\u0644\u0645\u0627\u0630\u0627 \u062a\u062d\u062a\u0627\u062c \u0627\u0644\u0634\u0631\u0643\u0627\u062a \u0627\u0644\u0646\u0627\u0634\u0626\u0629 \u0625\u0644\u0649 \u062a\u0637\u0628\u064a\u0642 \u0645\u0628\u0627\u062f\u0626 \u0627\u0644\u062d\u0648\u0643\u0645\u0629 \u0645\u0646 \u0623\u0628\u0643\u0631 \u0645\u0631\u0627\u062d\u0644 \u0627\u0644\u062a\u0623\u0633\u064a\u0633.',
    excerptEn: 'Why startups need to implement governance principles from the earliest stages of formation.',
    date: '2025-01-08', slug: 'corporate-governance-startups',
    categoryAr: '\u0627\u0644\u062d\u0648\u0643\u0645\u0629', categoryEn: 'Governance',
  },
  {
    titleAr: '\u062f\u0644\u064a\u0644 \u0634\u0627\u0645\u0644 \u0644\u0639\u0642\u0648\u062f \u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0627\u0644\u062a\u062c\u0627\u0631\u064a',
    titleEn: 'A Comprehensive Guide to Commercial Compliance Contracts',
    excerptAr: '\u0634\u0631\u062d \u0645\u0641\u0635\u0644 \u0644\u0623\u0647\u0645 \u0623\u0646\u0648\u0627\u0639 \u0627\u0644\u0639\u0642\u0648\u062f \u0627\u0644\u062a\u062c\u0627\u0631\u064a\u0629 \u0648\u0645\u062a\u0637\u0644\u0628\u0627\u062a \u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644 \u0627\u0644\u062a\u0646\u0638\u064a\u0645\u064a \u0641\u064a \u0627\u0644\u0633\u0648\u0642 \u0627\u0644\u0633\u0639\u0648\u062f\u064a.',
    excerptEn: 'A detailed overview of key commercial contract types and regulatory compliance requirements in the Saudi market.',
    date: '2024-12-20', slug: 'guide-commercial-compliance-contracts',
    categoryAr: '\u0627\u0644\u0627\u0645\u062a\u062b\u0627\u0644', categoryEn: 'Compliance',
  },
] as const;

export default function BlogSection({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('blog');
  const Arrow = locale === 'ar' ? '\u2190' : '\u2192';

  return (
    <section className="section-premium bg-warm-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
              {locale === 'ar' ? '\u0627\u0644\u0645\u062f\u0648\u0646\u0629' : 'Insights'}
            </p>
            <h2
              className="text-3xl md:text-4xl font-semibold text-navy-900 tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-heading-ar)' }}
            >
              {t('title')}
            </h2>
            <div className="mt-5 h-[2px] w-12 bg-gradient-to-r from-gold-500 to-gold-300" />
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-700 hover:text-gold-600 transition-smooth shrink-0"
          >
            <span className="link-underline">{t('viewAll')}</span>
            <span className="rtl:rotate-180 transition-transform duration-200 group-hover:translate-x-1">{Arrow}</span>
          </Link>
        </div>

        {/* Articles — card-based with hover lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block border border-warm-200 bg-white overflow-hidden hover-lift hover:border-gold-400 transition-smooth"
            >
              {/* Article image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={`/images/blog/${article.slug}.jpg`}
                  alt={locale === 'ar' ? `\u0635\u0648\u0631\u0629 \u0645\u0642\u0627\u0644: ${article.titleAr}` : `Article image: ${article.titleEn}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium bg-gold-50 text-gold-700 mb-4">
                  {locale === 'ar' ? article.categoryAr : article.categoryEn}
                </span>

                <h3
                  className="text-xl font-semibold text-navy-900 mb-3 leading-snug group-hover:text-gold-700 transition-smooth duration-200"
                  style={{ fontFamily: 'var(--font-heading-ar)' }}
                >
                  {locale === 'ar' ? article.titleAr : article.titleEn}
                </h3>

                <p className="text-warm-600 leading-relaxed mb-6 text-sm line-clamp-3">
                  {locale === 'ar' ? article.excerptAr : article.excerptEn}
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-warm-100 flex items-center justify-between">
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
