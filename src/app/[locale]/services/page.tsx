import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { type Locale } from "@/types";
import { CtaBand } from "@/components/home/CtaBand";
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
  ArrowRight,
  ArrowLeft,
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
    title: { ar: "الحوكمة المؤسسية", en: "Corporate Governance" },
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
  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-navy-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="svc-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svc-grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-md:w-[350px] max-md:h-[350px]"
            style={{ background: "radial-gradient(circle, rgba(184,149,60,0.03) 0%, transparent 65%)" }}
          />
        </div>

        <div className="relative container-custom">
          <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-bold text-white mb-6 tracking-tight">
            {isRtl ? "خدماتنا" : "Our Services"}
          </h1>
          <div className="w-20 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mb-8" />
          <p className="text-lg leading-[1.8] text-warm-300 max-w-2xl mx-auto">
            {isRtl
              ? "نقدم مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية احتياجات عملائنا"
              : "We offer a comprehensive range of specialized legal services to meet our clients' needs"}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service) => {
              const title = service.title[locale];
              const description = service.description[locale];
              const { Icon } = service;

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group p-6 bg-white rounded-surface border border-warm-200/60 hover:border-gold-300/30 hover:shadow-raised transition-all duration-300 hover-lift flex flex-col"
                >
                  <div className="w-12 h-12 rounded-control bg-gold-100 flex items-center justify-center mb-4 group-hover:bg-gold-200 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <h3 className="font-semibold text-navy-900 mb-2 text-lg">
                    {title}
                  </h3>
                  <p className="text-warm-600 text-sm leading-relaxed mb-4">
                    {description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-1.5 text-gold-600 text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
                      {isRtl ? "اقرأ المزيد" : "Learn More"}
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand locale={locale} />
    </main>
  );
}
