import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { type Locale } from "@/types";
import { notFound } from "next/navigation";
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
  CheckCircle2,
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
  return { title: service.title[locale] };
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
    benefits: {
      ar: ["تأسيس الشركات وإعداد العقود التأسيسية", "الهيكلة المؤسسية وتطوير السياسات", "الامتثال لمتطلبات هيئة الشركات", "استشارات الشركات الناشئة والمتوسطة", "دعم عمليات التوسع والنمو", "تحليل المخاطر القانونية"],
      en: ["Company formation and incorporation documents", "Corporate structuring and policy development", "Compliance with Saudi Company Law requirements", "Advisory for startups and SMEs", "Expansion and growth support", "Legal risk analysis"],
    },
  },
  {
    slug: "governance",
    title: { ar: "الحوكمة المؤسسية", en: "Corporate Governance" },
    description: {
      ar: "الحوكمة المؤسسية هي حجر الأساس في نجاح المؤسسات الحديثة. نقدم خدمات تصميم وتطبيق أنظمة الحوكمة المؤسسية بما يتوافق مع أفضل الممارسات العالمية ومتطلبات السوق السعودي.",
      en: "Corporate governance is the cornerstone of modern institutional success. We design and implement corporate governance frameworks aligned with global best practices and Saudi market requirements.",
    },
    Icon: Shield,
    benefits: {
      ar: ["تصميم هيكل الحوكمة المؤسسي", "إعداد لائحة الحوكمة الداخلية", "تدريب مجلس الإدارة والإدارة", "تقييم المخاطر والامتثال", "تقارير الحوكمة الدورية", "معايير الأداء والرقابة"],
      en: ["Corporate governance structure design", "Internal governance policy drafting", "Board and management training", "Risk assessment and compliance", "Periodic governance reporting", "Performance standards and oversight"],
    },
  },
  {
    slug: "contracts",
    title: { ar: "العقود", en: "Contracts" },
    description: {
      ar: "نقدم خدمات إعداد و مراجعة جميع أنواع العقود التجارية والقانونية. يضمن فريقنا أن كل عقد يحمي مصالح العميل ويتوافق مع الأنظمة النافذة.",
      en: "We draft and review all types of commercial and legal contracts. Our team ensures every contract protects the client's interests and complies with applicable regulations.",
    },
    Icon: FileText,
    benefits: {
      ar: ["صياغة العقود التجارية والمدنية", "مراجعة وتحليل المخاطر القانونية", "التفاوض على شروط العقود", "عقود العمل والتوظيف", "عقود الشراء والبيع", "عقود الخدمات والمقاولات"],
      en: ["Commercial and civil contract drafting", "Legal risk review and analysis", "Contract term negotiation", "Employment and hiring contracts", "Sale and purchase agreements", "Service and construction contracts"],
    },
  },
  {
    slug: "ma",
    title: { ar: "الاندماج والاستحواذ", en: "Mergers & Acquisitions" },
    description: {
      ar: "نقدم استشارات قانونية متخصصة في عمليات الاندماج والاستحواذ، بما في ذلك دراسات العرض Due Diligence، وتفاوض الشروط، وإعداد المستندات اللازمة، وضمان الامتثال التنظيمي.",
      en: "We provide specialized legal advisory for M&A transactions including due diligence studies, term negotiation, document preparation, and regulatory compliance.",
    },
    Icon: GitMerge,
    benefits: {
      ar: ["دراسات العرض Due Diligence", "تفاوض شروط الصفقات", "إعداد المستندات القانونية", "ضمان الامتثال التنظيمي", "الهيكلة القانونية للصفقات", "دعم ما بعد الاندماج"],
      en: ["Due diligence studies", "Deal term negotiation", "Legal document preparation", "Regulatory compliance assurance", "Legal deal structuring", "Post-merger support"],
    },
  },
  {
    slug: "litigation",
    title: { ar: "التقاضي وتسوية المنازعات", en: "Dispute Resolution & Litigation" },
    description: {
      ar: "يتمتع فريقنا بخبرة واسعة في التمثيل القضائي أمام جميع درجات المحاكم. نقدم خدمات التفويض الكامل أو التمثيل الجزئي في القضايا المدنية والتجارية والإدارية.",
      en: "Our team has extensive experience in litigation representation across all court levels. We offer full delegation or partial representation in civil, commercial, and administrative cases.",
    },
    Icon: Scale,
    benefits: {
      ar: ["التمثيل القضائي أمام جميع المحاكم", "القضايا المدنية والتجارية", "القضايا الإدارية والحكومية", "التحكيم وتسوية المنازعات", "التفويض الكامل أو الجزئي", "الاستراتيجية القضائية المتكاملة"],
      en: ["Litigation representation at all courts", "Civil and commercial cases", "Administrative and government cases", "Arbitration and dispute settlement", "Full or partial delegation", "Comprehensive litigation strategy"],
    },
  },
  {
    slug: "debt-collection",
    title: { ar: "تحصيل الديون", en: "Debt Collection" },
    description: {
      ar: "نوفر للشركات والأفراد خدمات تحصيل الديون بكفاءة عالية، سواء عبر التفاوض والتسويات الودية أو عبر الإجراءات القضائية والتنفيذية.",
      en: "We provide efficient debt recovery services for companies and individuals, whether through negotiation and amicable settlements or through judicial and enforcement proceedings.",
    },
    Icon: Banknote,
    benefits: {
      ar: ["التحصيل الودي عبر التفاوض", "الإجراءات القضائية والتنفيذية", "تتبع الديون والمطالبات", "إعداد الإشعارات القانونية", "التمثيل أمام المحاكم", "استراتيجيات التحصيل الفعّالة"],
      en: ["Amicable collection through negotiation", "Judicial and enforcement proceedings", "Debt tracking and claims", "Legal notice preparation", "Court representation", "Effective recovery strategies"],
    },
  },
  {
    slug: "notarization",
    title: { ar: "التوثيق", en: "Notarization & Documentation" },
    description: {
      ar: "يقدم المكتب خدمات التوثيق القانوني بالتعاون مع شركاء موثقين مرخصين، بما في ذلك توثيق العقود والاتفاقيات والتصديقات الرسمية.",
      en: "The firm provides legal documentation services in collaboration with licensed notary partners, including contract authentication, agreements, and official certifications.",
    },
    Icon: Stamp,
    benefits: {
      ar: ["توثيق العقود والاتفاقيات", "التصديقات الرسمية", "الشهادات القانونية", "التوثيق لدى الجهات الحكومية", "الموثقين المرخصين", "خدمات التوثيق السريعة"],
      en: ["Contract and agreement authentication", "Official certifications", "Legal certificates", "Government entity documentation", "Licensed notary services", "Expedited notarization"],
    },
  },
  {
    slug: "labor",
    title: { ar: "القانون العرفي والعلاقات العمالية", en: "Labor Law & Employment Relations" },
    description: {
      ar: "نقدم استشارات شاملة في قانون العمل والعلاقات العمالية، بما في ذلك إعداد أنظمة العمل الداخلية، ومراجعة عقود العمل، والتمثيل في منازعات العمل.",
      en: "We provide comprehensive advisory on labor law and employment relations, including drafting internal labor regulations, reviewing employment contracts, and representing clients in labor disputes.",
    },
    Icon: Briefcase,
    benefits: {
      ar: ["إعداد أنظمة العمل الداخلية", "مراجعة عقود العمل", "التمثيل في منازعات العمل", "استشارات التوظيف والإنهاء", "الامتثال لنظام العمل السعودي", "تطوير السياسات العمالية"],
      en: ["Internal labor regulation drafting", "Employment contract review", "Labor dispute representation", "Hiring and termination advisory", "Saudi Labor Law compliance", "Employment policy development"],
    },
  },
  {
    slug: "personal-status",
    title: { ar: "الأحوال الشخصية والتركات", en: "Personal Status & Inheritance" },
    description: {
      ar: "نقدم خدمات قانونية في مجال الأحوال الشخصية والتركات، بما في ذلك تسوية الإرثات والوصايا والخلافات العائلية وفقاً لأحكام الشريعة الإسلامية.",
      en: "We provide legal services in personal status and inheritance matters, including estate settlements, wills, and family disputes in accordance with Islamic law.",
    },
    Icon: Heart,
    benefits: {
      ar: ["تسوية الإرثات والتركات", "إعداد الوصايا القانونية", "الخلافات العائلية", "الأحوال الشخصية والزواج", "ال_guardianship وولاية الأحداث", "التوثيق الشرعي للعقود"],
      en: ["Estate and inheritance settlements", "Legal will preparation", "Family disputes", "Personal status and marriage", "Guardianship and minors", "Sharia-compliant contract authentication"],
    },
  },
  {
    slug: "property",
    title: { ar: "قانون العقارات", en: "Property Law" },
    description: {
      ar: "نقدم استشارات قانونية في قانون العقارات والملكية، بما في ذلك عقود البيع والشراء والإيجار والتمليك، وتسجيل العقارات وحل منازعات الملكية.",
      en: "We provide legal advisory on property and real estate law, including sale, purchase, lease, and ownership contracts, property registration, and ownership dispute resolution.",
    },
    Icon: Home,
    benefits: {
      ar: ["عقود البيع والشراء", "عقود الإيجار والتمليك", "تسجيل العقارات", "حل منازعات الملكية", "الاستشارات العقارية", "الامتثال للأنظمة العقارية"],
      en: ["Sale and purchase contracts", "Lease and ownership contracts", "Property registration", "Ownership dispute resolution", "Real estate advisory", "Real estate regulatory compliance"],
    },
  },
  {
    slug: "medical",
    title: { ar: "القضايا الطبية", en: "Medical Law Cases" },
    description: {
      ar: "نقدم تمثيلاً قانونياً متخصصاً في القضايا الطبية والتعويضات عن الأخطاء الطبية، بالتعاون مع خبراء طبيين متخصصين.",
      en: "We provide specialized legal representation in medical cases and malpractice compensation claims, in collaboration with expert medical consultants.",
    },
    Icon: Stethoscope,
    benefits: {
      ar: ["التمثيل في قضايا الأخطاء الطبية", "التعويضات الطبية", "الخبراء الطبيين المتخصصين", "التحقيق الطبي والقانوني", "قضايا المخاطر الطبية", "الاستشارات الطبية القانونية"],
      en: ["Medical malpractice representation", "Medical compensation claims", "Expert medical consultants", "Medical and legal investigation", "Medical risk cases", "Medical-legal advisory"],
    },
  },
];

const defaultBenefits = {
  ar: ["خبرة قانونية متميزة", "فريق متخصص ومحترف", "حلول قانونية شاملة", " سرية تامة وموثوقية", "متابعة مستمرة ودقيقة", "نتائج مضمونة وأفضل الممارسات"],
  en: ["Distinguished legal expertise", "Specialized professional team", "Comprehensive legal solutions", "Absolute confidentiality", "Continuous precise follow-up", "Guaranteed results and best practices"],
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const isRtl = locale === "ar";

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

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const benefits = service.benefits || defaultBenefits;
  const benefitItems = benefits[locale] || benefits.en;

  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="svc-detail-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svc-detail-grid)" />
          </svg>
        </div>

        <div className="relative container-custom">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-warm-400 hover:text-gold-400 transition-colors mb-8 text-sm"
          >
            {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
            {isRtl ? "العودة إلى الخدمات" : "Back to Services"}
          </Link>
          <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-bold mb-6 tracking-tight">
            {service.title[locale]}
          </h1>
          <div className="w-20 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mb-8" />
          <p className="text-lg leading-[1.8] text-warm-300 max-w-3xl">
            {service.description[locale]}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {service.description[locale].split(". ").map((sentence, i) => (
                <p key={i} className="leading-[1.9] mb-6 text-warm-800">
                  {sentence.trim()}{sentence.trim().endsWith(".") ? "" : "."}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-10 rounded-2xl bg-warm-50 border border-warm-200/60">
              <h2 className="text-2xl font-bold leading-[1.15] mb-6 text-center text-navy-900">
                {isRtl ? "لماذا تختار مكتبنا" : "Why Choose Our Firm"}
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mb-8" />
              <div className="grid sm:grid-cols-2 gap-4">
                {benefitItems.map((item: string) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-500 shrink-0" />
                    <span className="text-warm-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <h2 className="text-2xl font-bold leading-[1.15] text-center mb-10 text-navy-900">
            {isRtl ? "خدمات ذات صلة" : "Related Services"}
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mb-10" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedServices.map((related) => (
              <Link
                key={related.slug}
                href={`/services/${related.slug}`}
                className="group p-6 bg-white rounded-surface border border-warm-200/60 hover:border-gold-300/30 hover:shadow-raised transition-all duration-300 hover-lift"
              >
                <div className="w-12 h-12 rounded-control bg-gold-100 flex items-center justify-center mb-4 group-hover:bg-gold-200 transition-colors duration-300">
                  <related.Icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="font-semibold text-navy-900 mb-2 text-lg">
                  {related.title[locale]}
                </h3>
                <p className="text-warm-600 text-sm leading-relaxed">
                  {related.description[locale]}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={locale} />
    </main>
  );
}
