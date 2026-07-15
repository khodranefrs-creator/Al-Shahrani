import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import {
  Building2,
  Shield,
  FileText,
  GitMerge,
  Scale,
  Banknote,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import type { Locale } from '@/types';

const services = [
  {
    slug: 'corporate-law',
    ar: 'القانون التجاري',
    en: 'Corporate Law',
    descAr: 'تأسيس الشركات والشركات ذات المسؤولية المحدودة والإشراف على الهياكل المؤسسية',
    descEn: 'Company formation, LLC structuring, and corporate oversight',
    icon: Building2,
    accent: 'from-blue-500 to-blue-600',
  },
  {
    slug: 'governance',
    ar: 'الحوكمة المؤسسية',
    en: 'Corporate Governance',
    descAr: 'وضع الأنظمة والسياسات المؤسسية وضمان الامتثال',
    descEn: 'Corporate policies, compliance frameworks, and governance systems',
    icon: Shield,
    accent: 'from-emerald-500 to-emerald-600',
  },
  {
    slug: 'contracts',
    ar: 'العقود',
    en: 'Contracts',
    descAr: 'إعداد ومراجعة جميع العقود التجارية',
    descEn: 'Drafting, review, and management of all commercial contracts',
    icon: FileText,
    accent: 'from-amber-500 to-amber-600',
  },
  {
    slug: 'ma',
    ar: 'الاندماج والاستحواذ',
    en: 'Mergers & Acquisitions',
    descAr: 'الاستشارات القانونية لعمليات الاندماج والاستحواذ',
    descEn: 'Legal advisory for M&A transactions and due diligence',
    icon: GitMerge,
    accent: 'from-violet-500 to-violet-600',
  },
  {
    slug: 'litigation',
    ar: 'التقاضي وتسوية المنازعات',
    en: 'Dispute Resolution',
    descAr: 'التمثيل القضائي وتسوية المنازعات التجارية',
    descEn: 'Litigation representation and commercial dispute resolution',
    icon: Scale,
    accent: 'from-rose-500 to-rose-600',
  },
  {
    slug: 'debt-collection',
    ar: 'تحصيل الديون',
    en: 'Debt Collection',
    descAr: 'تحصيل الديون بالطرق القانونية والقضائية',
    descEn: 'Legal and judicial debt recovery services',
    icon: Banknote,
    accent: 'from-teal-500 to-teal-600',
  },
] as const;

export default function PracticeAreas({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('practiceAreas');
  const ChevronIcon = locale === 'ar' ? ChevronLeft : ChevronRight;

  return (
    <section className="bg-navy-gradient-subtle py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t('title')} subtitle={t('subtitle')} />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            const title = locale === 'ar' ? service.ar : service.en;
            const description = locale === 'ar' ? service.descAr : service.descEn;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="absolute start-0 top-0 h-full w-1 bg-gradient-to-b from-gold-400 to-gold-600" />

                <div className="p-8 ps-10">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-navy-900 text-gold-400 shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-navy-900">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-navy-900 transition-colors duration-200 group-hover:text-gold-600">
                    {title}
                  </h3>

                  <p className="mb-5 leading-relaxed text-navy-600">
                    {description}
                  </p>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600 transition-all duration-200 group-hover:gap-3">
                    {locale === 'ar' ? 'المزيد' : 'Learn More'}
                    <ChevronIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-lg font-semibold text-gold-600 transition-colors duration-300 hover:text-gold-700"
          >
            {locale === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
            {locale === 'ar' ? (
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 rtl:-rotate-180" />
            ) : (
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
