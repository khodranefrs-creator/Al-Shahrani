import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { type Locale } from "@/types";
import { notFound } from "next/navigation";
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
  return [
    { slug: "corporate-law" },
    { slug: "governance" },
    { slug: "contracts" },
    { slug: "ma" },
    { slug: "litigation" },
    { slug: "debt-collection" },
    { slug: "notarization" },
    { slug: "labor" },
    { slug: "personal-status" },
    { slug: "property" },
    { slug: "medical" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title[locale],
  };
}

const services = [
  {
    slug: "corporate-law",
    title: { ar: "القانون التجاري", en: "Corporate Law" },
    description: {
      ar: "يقدم مكتبنا خدمات قانونية شاملة للشركات في مرحلة التأسيس وما بعدها. نساعد في اختيار الهيكل القانوني المناسب، إعداد العقود التأسيسية، والامتثال لمتطلبات هيئة الشركات. كما نقدم استشارات استراتيجية فيما يتعلق بالهيكلة المؤسسية وتطوير السياسات الداخلية.",
      en: "We provide comprehensive legal services for companies at the formation stage and beyond. We assist in selecting the appropriate legal structure, preparing incorporation documents, and ensuring compliance with Saudi Company Law requirements. We also offer strategic advisory on corporate structuring and internal policy development.",
    },
    Icon: Building2,
  },
  {
    slug: "governance",
    title: { ar: "الحوكمة المؤسسية", en: "Corporate Governance" },
    description: {
      ar: "الحوكمة المؤسسية هي حجر الأساس في نجاح المؤسسات الحديثة. نقدم خدمات تصميم وتطبيق أنظمة الحوكمة المؤسسية بما يتوافق مع أفضل الممارسات العالمية ومتطلبات السوق السعودي.",
      en: "Corporate governance is the cornerstone of modern institutional success. We design and implement corporate governance frameworks aligned with global best practices and Saudi market requirements.",
    },
    Icon: Shield,
  },
  {
    slug: "contracts",
    title: { ar: "العقود", en: "Contracts" },
    description: {
      ar: "نقدم خدمات إعداد و مراجعة جميع أنواع العقود التجارية والقانونية. يضمن فريقنا أن كل عقد يحمي مصالح العميل ويتوافق مع الأنظمة النافذة.",
      en: "We draft and review all types of commercial and legal contracts. Our team ensures every contract protects the client's interests and complies with applicable regulations.",
    },
    Icon: FileText,
  },
  {
    slug: "ma",
    title: { ar: "الاندماج والاستحواذ", en: "Mergers & Acquisitions" },
    description: {
      ar: "نقدم استشارات قانونية متخصصة في عمليات الاندماج والاستحواذ، بما في ذلك دراسات العرضDue Diligence، وتفاوض الشروط، وإعداد المستندات اللازمة، وضمان الامتثال التنظيمي.",
      en: "We provide specialized legal advisory for M&A transactions including due diligence studies, term negotiation, document preparation, and regulatory compliance.",
    },
    Icon: GitMerge,
  },
  {
    slug: "litigation",
    title: { ar: "التقاضي وتسوية المنازعات", en: "Dispute Resolution & Litigation" },
    description: {
      ar: "يتمتع فريقنا بخبرة واسعة في التمثيل القضائي أمام جميع درجات المحاكم. نقدم خدمات التفويض الكامل أو التمثيل الجزئي في القضايا المدنية والتجارية والإدارية.",
      en: "Our team has extensive experience in litigation representation across all court levels. We offer full delegation or partial representation in civil, commercial, and administrative cases.",
    },
    Icon: Scale,
  },
  {
    slug: "debt-collection",
    title: { ar: "تحصيل الديون", en: "Debt Collection" },
    description: {
      ar: "نوفر للشركات والأفراد خدمات تحصيل الديون بكفاءة عالية، سواء через التفاوض والتسويات الودية أو عبر الإجراءات القضائية والتنفيذية.",
      en: "We provide efficient debt recovery services for companies and individuals, whether through negotiation and amicable settlements or through judicial and enforcement proceedings.",
    },
    Icon: Banknote,
  },
  {
    slug: "notarization",
    title: { ar: "التوثيق", en: "Notarization & Documentation" },
    description: {
      ar: "يقدم المكتب خدمات التوثيق القانوني بالتعاون مع شركاء موثقين مرخصين، بما في ذلك توثيق العقود والاتفاقيات والتصديقات الرسمية.",
      en: "The firm provides legal documentation services in collaboration with licensed notary partners, including contract authentication, agreements, and official certifications.",
    },
    Icon: Stamp,
  },
  {
    slug: "labor",
    title: { ar: "القانون العرفي والعلاقات العمالية", en: "Labor Law & Employment Relations" },
    description: {
      ar: "نقدم استشارات شاملة في قانون العمل والعلاقات العمالية، بما في ذلك إعداد أنظمة العمل الداخلية، ومراجعة عقود العمل، والتمثيل في منازعات العمل.",
      en: "We provide comprehensive advisory on labor law and employment relations, including drafting internal labor regulations, reviewing employment contracts, and representing clients in labor disputes.",
    },
    Icon: Briefcase,
  },
  {
    slug: "personal-status",
    title: { ar: "الأحوال الشخصية والتركات", en: "Personal Status & Inheritance" },
    description: {
      ar: "نقدم خدمات قانونية في مجال الأحوال الشخصية والتركات، بما في ذلك تسوية الإرثات والوصايا والخلافات العائلية وفقاً لأحكام الشريعة الإسلامية.",
      en: "We provide legal services in personal status and inheritance matters, including estate settlements, wills, and family disputes in accordance with Islamic law.",
    },
    Icon: Heart,
  },
  {
    slug: "property",
    title: { ar: "قانون العقارات", en: "Property Law" },
    description: {
      ar: "نقدم استشارات قانونية في قانون العقارات والملكية، بما في ذلك عقود البيع والشراء والإيجار والتمليك، وتسجيل العقارات وحل منازعات الملكية.",
      en: "We provide legal advisory on property and real estate law, including sale, purchase, lease, and ownership contracts, property registration, and ownership dispute resolution.",
    },
    Icon: Home,
  },
  {
    slug: "medical",
    title: { ar: "القضايا الطبية", en: "Medical Law Cases" },
    description: {
      ar: "نقدم تمثيلاً قانونياً متخصصاً في القضايا الطبية والتعويضات عن الأخطاء الطبية، بالتعاون مع خبراء طبيين متخصصين.",
      en: "We provide specialized legal representation in medical cases and malpractice compensation claims, in collaboration with expert medical consultants.",
    },
    Icon: Stethoscope,
  },
];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = services
    .filter((s) => s.slug !== slug)
    .sort((a, b) => {
      const hashA = a.slug.split("").reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0);
      const hashB = b.slug.split("").reduce((h, c) => ((h << 5) - h + c.charCodeAt(0)) | 0, 0);
      return hashA - hashB;
    })
    .slice(0, 3);

  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <main>
      <section className="bg-navy-gradient py-20 md:py-28">
        <div className="container mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-gold-300 hover:text-gold-200 transition-colors mb-8"
          >
            <ArrowIcon className="w-4 h-4" />
            {locale === "ar" ? "العودة إلى الخدمات" : "Back to Services"}
          </Link>
          <div className="flex items-center gap-5 mb-6">
            <div className="w-16 h-16 rounded-full bg-gold-100/10 flex items-center justify-center">
              <service.Icon className="w-8 h-8 text-gold-400" />
            </div>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {service.title[locale]}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-navy-700 leading-relaxed text-lg">
              {service.description[locale]}
            </p>
          </div>

          <div className="mt-12 p-8 bg-navy-50 rounded-xl border border-navy-100">
            <h2
              className="text-2xl font-bold text-navy-900 mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {locale === "ar" ? "اطلب هذه الخدمة" : "Request This Service"}
            </h2>
            <p className="text-navy-600 mb-6">
              {locale === "ar"
                ? "تواصل معنا للحصول على استشارة قانونية متخصصة في هذا المجال."
                : "Contact us to receive specialized legal consultation in this area."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              {locale === "ar" ? "تواصل معنا" : "Contact Us"}
              <ArrowIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-navy-50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title={
              locale === "ar" ? "خدمات ذات صلة" : "Related Services"
            }
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {relatedServices.map((related) => {
              const title = related.title[locale];
              const description = related.description[locale];
              const { Icon } = related;

              return (
                <Link
                  key={related.slug}
                  href={`/services/${related.slug}`}
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
