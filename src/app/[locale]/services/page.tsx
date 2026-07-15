import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig, type Locale } from "@/types";
import {
  Building2,
  Shield,
  FileText,
  GitMerge,
  Scale,
  Banknote,
  Stamp,
  Briefcase,
  Heart,
  Home,
  Stethoscope,
} from "lucide-react";

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return {
    title: locale === "ar" ? "خدماتنا" : "Our Services",
  };
}

const services = [
  {
    slug: "corporate-law",
    title: { ar: "القانون التجاري", en: "Corporate Law" },
    description: {
      ar: "خدمات قانونية شاملة للشركات من التأسيس إلى النمو والتوسع.",
      en: "Comprehensive legal services for companies from incorporation to growth and expansion.",
    },
    Icon: Building2,
  },
  {
    slug: "governance",
    title: { ar: "الحوكمةorporate Governance", en: "Corporate Governance" },
    description: {
      ar: "تصميم وتطبيق أنظمة الحوكمة المؤسسية بأفضل الممارسات العالمية.",
      en: "Design and implementation of corporate governance systems aligned with global best practices.",
    },
    Icon: Shield,
  },
  {
    slug: "contracts",
    title: { ar: "العقود", en: "Contracts" },
    description: {
      ar: "إعداد و مراجعة جميع أنواع العقود التجارية والقانونية.",
      en: "Drafting and reviewing all types of commercial and legal contracts.",
    },
    Icon: FileText,
  },
  {
    slug: "ma",
    title: { ar: "الاندماج والاستحواذ", en: "Mergers & Acquisitions" },
    description: {
      ar: "استشارات قانونية متخصصة في عمليات الاندماج والاستحواذ.",
      en: "Specialized legal advisory for mergers and acquisitions transactions.",
    },
    Icon: GitMerge,
  },
  {
    slug: "litigation",
    title: { ar: "التقاضي وتسوية المنازعات", en: "Dispute Resolution & Litigation" },
    description: {
      ar: "تمثيل قضائي أمام جميع درجات المحاكم في القضايا المدنية والتجارية.",
      en: "Litigation representation across all court levels in civil and commercial cases.",
    },
    Icon: Scale,
  },
  {
    slug: "debt-collection",
    title: { ar: "تحصيل الديون", en: "Debt Collection" },
    description: {
      ar: "خدمات تحصيل الديون بكفاءة عالية عبر التفاوض أو الإجراءات القضائية.",
      en: "Efficient debt recovery services through negotiation or judicial proceedings.",
    },
    Icon: Banknote,
  },
  {
    slug: "notarization",
    title: { ar: "التوثيق", en: "Notarization & Documentation" },
    description: {
      ar: "خدمات التوثيق القانوني بالتعاون مع شركاء موثقين مرخصين.",
      en: "Legal documentation services in collaboration with licensed notary partners.",
    },
    Icon: Stamp,
  },
  {
    slug: "labor",
    title: { ar: "القانون العرفي والعلاقات العمالية", en: "Labor Law & Employment Relations" },
    description: {
      ar: "استشارات شاملة في قانون العمل والعلاقات العمالية.",
      en: "Comprehensive advisory on labor law and employment relations.",
    },
    Icon: Briefcase,
  },
  {
    slug: "personal-status",
    title: { ar: "الأحوال الشخصية والتركات", en: "Personal Status & Inheritance" },
    description: {
      ar: "خدمات قانونية في الأحوال الشخصية والتركات وفقاً لأحكام الشريعة الإسلامية.",
      en: "Legal services in personal status and inheritance matters in accordance with Islamic law.",
    },
    Icon: Heart,
  },
  {
    slug: "property",
    title: { ar: "قانون العقارات", en: "Property Law" },
    description: {
      ar: "استشارات قانونية في قانون العقارات والملكية وتسجيل العقارات.",
      en: "Legal advisory on property and real estate law and property registration.",
    },
    Icon: Home,
  },
  {
    slug: "medical",
    title: { ar: "القضايا الطبية", en: "Medical Law Cases" },
    description: {
      ar: "تمثيل قانوني متخصص في القضايا الطبية والتعويضات عن الأخطاء الطبية.",
      en: "Specialized legal representation in medical cases and malpractice compensation.",
    },
    Icon: Stethoscope,
  },
];

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <section className="bg-navy-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={locale === "ar" ? "خدماتنا" : "Our Services"}
            subtitle={
              locale === "ar"
                ? "نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية احتياجات عملائنا"
                : "We offer a comprehensive range of specialized legal services to meet our clients' needs"
            }
            light
          />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => {
              const title = service.title[locale];
              const description = service.description[locale];
              const { Icon } = service;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block bg-white border border-navy-100 rounded-xl p-6 md:p-8 transition-all duration-300 hover:border-gold-400 hover:shadow-lg"
                >
                  <div className="w-14 h-14 rounded-full bg-gold-100 flex items-center justify-center mb-5 group-hover:bg-gold-200 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-gold-600" />
                  </div>
                  <h3
                    className="text-xl font-bold text-navy-900 mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {title}
                  </h3>
                  <p className="text-navy-600 leading-relaxed">{description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
