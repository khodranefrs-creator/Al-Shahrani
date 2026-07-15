import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { ArrowRight, ArrowLeft, ArrowUpRight } from 'lucide-react';
import {
  Building2,
  Shield,
  FileText,
  GitMerge,
  Scale,
  Banknote,
} from 'lucide-react';
import type { Locale } from '@/types';

const services = [
  { slug: 'corporate-law', ar: 'القانون التجاري', en: 'Corporate Law', descAr: 'تأسيس الشركات والشركات ذات المسؤولية المحدودة والإشراف على الهياكل المؤسسية', descEn: 'Company formation, LLC structuring, and corporate oversight', icon: Building2 },
  { slug: 'governance', ar: 'الحوكمة المؤسسية', en: 'Corporate Governance', descAr: 'وضع الأنظمة والسياسات المؤسسية وضمان الامتثال', descEn: 'Corporate policies, compliance frameworks, and governance systems', icon: Shield },
  { slug: 'contracts', ar: 'العقود', en: 'Contracts', descAr: 'إعداد ومراجعة جميع العقود التجارية', descEn: 'Drafting, review, and management of all commercial contracts', icon: FileText },
  { slug: 'ma', ar: 'الاندماج والاستحواذ', en: 'Mergers & Acquisitions', descAr: 'الاستشارات القانونية لعمليات الاندماج والاستحواذ', descEn: 'Legal advisory for M&A transactions and due diligence', icon: GitMerge },
  { slug: 'litigation', ar: 'التقاضي وتسوية المنازعات', en: 'Dispute Resolution', descAr: 'التمثيل القضائي وتسوية المنازعات التجارية', descEn: 'Litigation representation and commercial dispute resolution', icon: Scale },
  { slug: 'debt-collection', ar: 'تحصيل الديون', en: 'Debt Collection', descAr: 'تحصيل الديون بالطرق القانونية والقضائية', descEn: 'Legal and judicial debt recovery services', icon: Banknote },
] as const;

export default function PracticeAreas({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('practiceAreas');
  const ArrowIcon = locale === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="bg-navy-gradient-subtle py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Editorial header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase text-gold-600 mb-4">
            {locale === 'ar' ? 'خدماتنا' : 'Our Services'}
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('title')}
          </h2>
          <div className="mt-6 h-px w-16 bg-gradient-to-r from-gold-500 to-gold-300" />
        </div>

        {/* Services grid — editorial list style */}
        <div className="grid grid-cols-1 divide-y divide-navy-100 lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {services.map((service) => {
            const Icon = service.icon;
            const title = locale === 'ar' ? service.ar : service.en;
            const description = locale === 'ar' ? service.descAr : service.descEn;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative flex gap-5 py-10 px-6 lg:px-10 transition-colors duration-300 hover:bg-white/60"
              >
                <div className="shrink-0 mt-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-900 text-gold-400 transition-all duration-300 group-hover:bg-gold-500 group-hover:text-navy-900 group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-navy-900 transition-colors duration-200 group-hover:text-gold-700">
                      {title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-navy-300 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:text-gold-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-sm text-navy-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-base font-semibold text-gold-600 transition-colors duration-300 hover:text-gold-700"
          >
            {locale === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
            <ArrowIcon className="h-5 w-5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
