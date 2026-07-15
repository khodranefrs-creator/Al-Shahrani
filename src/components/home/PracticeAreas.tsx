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
  },
  {
    slug: 'governance',
    ar: 'الحوكمةorporate Governance',
    en: 'Corporate Governance',
    descAr: 'وضع الأنظمة والسياسات المؤسسية وضمان الامتثال',
    descEn: 'Corporate policies, compliance frameworks, and governance systems',
    icon: Shield,
  },
  {
    slug: 'contracts',
    ar: 'العقود',
    en: 'Contracts',
    descAr: 'إعداد ومراجعة جميع العقود التجارية',
    descEn: 'Drafting, review, and management of all commercial contracts',
    icon: FileText,
  },
  {
    slug: 'ma',
    ar: 'الاندماج والاستحواذ',
    en: 'Mergers & Acquisitions',
    descAr: 'الاستشارات القانونية لعمليات الاندماج والاستحواذ',
    descEn: 'Legal advisory for M&A transactions and due diligence',
    icon: GitMerge,
  },
  {
    slug: 'litigation',
    ar: 'التقاضي وتسوية المنازعات',
    en: 'Dispute Resolution',
    descAr: 'التمثيل القضائي وتسوية المنازعات التجارية',
    descEn: 'Litigation representation and commercial dispute resolution',
    icon: Scale,
  },
  {
    slug: 'debt-collection',
    ar: 'تحصيل الديون',
    en: 'Debt Collection',
    descAr: 'تحصيل الديون بالطرق القانونية والقضائية',
    descEn: 'Legal and judicial debt recovery services',
    icon: Banknote,
  },
] as const;

export default function PracticeAreas({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const t = useTranslations('practiceAreas');

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
                className="group block rounded-2xl border border-navy-100 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-gold-400 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 transition-colors duration-300 group-hover:bg-gold-200">
                  <Icon className="h-7 w-7 text-gold-600" />
                </div>

                <h3 className="mb-3 text-lg font-bold text-navy-900">
                  {title}
                </h3>

                <p className="leading-relaxed text-navy-600">
                  {description}
                </p>
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
