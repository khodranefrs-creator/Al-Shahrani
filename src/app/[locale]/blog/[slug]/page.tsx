import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { type Locale } from "@/types";
import { generatePageMetadata } from "@/lib/metadata";
import { CtaBand } from "@/components/home/CtaBand";

interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  content: string[];
}

const blogArticles: Record<Locale, BlogArticle[]> = {
  ar: [
    {
      slug: "corporate-governance-saudi",
      title: "حوكمة الشركات في المملكة العربية السعودية: دليل شامل",
      excerpt:
        "نظرة معمقة على متطلبات حوكمة الشركات وفقاً للنظام السعودي الجديد.",
      author: "م. محمد حمود الشهراني",
      date: "١٠ يوليو ٢٠٢٦",
      content: [
        "تُعد حوكمة الشركات من أهم العناصر التي تحدد نجاح واستدامة المؤسسات في المملكة العربية السعودية. مع صدور النظام السعودي للحوكمة، أصبح على الشركات التكيف مع متطلبات جديدة تهدف إلى تعزيز الشفافية والمساءلة.",
        "يشمل النظام السعودي لحوكمة الشركات مجموعة من المبادئ والمعايير التي تُنظم إدارة الشركات وتضمن حماية حقوق المساهمين والأطراف المعنية. ومن أبرز متطلبات النظام: تشكيل مجلس إدارة مستقل، وإنشاء لجان متخصصة، وتطبيق معايير إفصاح مالية صارمة.",
        "من خلال خبرتنا الطويلة في مجال الاستشارات القانونية، نستطيع مساعدتك في فهم وتطبيق متطلبات حوكمة الشركات وفقاً للنظام السعودي. فريقنا من المحامين المتخصصين جاهز لتقديم الدعم الكامل في جميع مراحل التأسيس والتطبيق.",
      ],
    },
    {
      slug: "labor-rights-2026",
      title: "حقوق العمال في نظام العمل السعودي: تحديثات 2026",
      excerpt:
        "مراجعة شاملة لأحدث التعديلات على نظام العمل السعودي وتأثيرها على حقوق العمال وأصحاب العمل.",
      author: "م. محمد حمود الشهراني",
      date: "٢٥ يونيو ٢٠٢٦",
      content: [
        "شهد نظام العمل السعودي تحديثات مهمة في عام 2026 تهدف إلى تعزيز حقوق العمال وتحسين بيئة العمل. تأتي هذه التعديلات في إطار رؤية المملكة 2030 لتطوير سوق العمل وزيادة تنافسية الشركات.",
        "من أبرز التحديثات: زيادة الحد الأدنى للأجور، وتحسين ظروف العمل، وتعزيز حماية العمال من التعسف. كما شملت التعديلات تحديثات على نظام إجازات العمل.",
        "يُنصح أصحاب العمل بمراجعة سياساتهم الداخلية والتأكد من امتثالها للتعديلات الجديدة. يمكن لفريقنا المتكامل تقديم الاستشارات اللازمة لضمان الامتثال الكامل.",
      ],
    },
    {
      slug: "medical-liability",
      title: "المسؤولية الطبية في القانون السعودي: حقوق المرضى والاطباء",
      excerpt:
        "شرح تفصيلي للمسؤولية الطبية وفقاً للنظام السعودي، وحقوق المرضى في حالات الأخطاء الطبية.",
      author: "م. محمد حمود الشهراني",
      date: "١٨ مايو ٢٠٢٦",
      content: [
        "تُمثل المسؤولية الطبية من أكثر المجالات القانونية تعقيداً في المملكة العربية السعودية. يُنظم هذا المجال مجموعة من الأنظمة واللوائح التي تحدد حقوق ومسؤوليات كل من المريض والطبيب والمؤسسة الصحية.",
        "من أبرز المبادئ التي يُرسيها النظام السعودي: مبدأ رضا المريض والإفصاح المسبق، مبدأ العناية الواجبة (Duty of Care)، ومبدأ التعويض عن الأضرار. كما يُحدد النظام حالات الإعفاء من المسؤولية وأسبابها.",
        "في حال وقوعك في حالة خطأ طبي، يُنصح بسرعة استشارة محامٍ متخصص في المجال الطبي. يمكن لفريقنا مساعدتك في فهم حقوقك وتقديم الدعم القانوني اللازم.",
      ],
    },
    {
      slug: "real-estate-disputes",
      title: "حل النزاعات العقارية في المملكة: البدائل القانونية",
      excerpt:
        "استكشاف الطرق القانونية المختلفة لحل النزاعات العقارية في السعودية، من التفاوض إلى التحكيم.",
      author: "م. محمد حمود الشهراني",
      date: "٣٠ أبريل ٢٠٢٦",
      content: [
        "تُعد النزاعات العقارية من أكثر أنواع النزاعات شيوعاً في المملكة العربية السعودية. وتشمل هذه النزاعات خلافات الحيازة والملكية، ونزاعات الإيجار، ومشاكل التسليم، والتعويض عن الأضرار.",
        "يتوفر عدة بدائل لحل النزاعات العقارية: التفاوض المباشر، والوساطة، والتحكيم، وتقديم دعوى قضائية. كل بديل له مميزاته وتحدياته، ويجب اختيار الأنسب بناءً على ظروف كل حالة.",
        "فريقنا من المحامين المتخصصين في القانون العقاري جاهز لمساعدتك في حل أي نزاع عقاري بفعالية وسرعة. نحن نسعى دائماً لتحقيق أفضل النتائج لعملائنا.",
      ],
    },
  ],
  en: [
    {
      slug: "corporate-governance-saudi",
      title: "Corporate Governance in Saudi Arabia: A Comprehensive Guide",
      excerpt:
        "An in-depth look at corporate governance requirements under the new Saudi regulations.",
      author: "Mohammed Hamad Al-Shahrani",
      date: "July 10, 2026",
      content: [
        "Corporate governance is one of the most important factors determining the success and sustainability of institutions in Saudi Arabia. With the issuance of the new Saudi Corporate Governance Regulations, companies must adapt to new requirements aimed at enhancing transparency and accountability.",
        "The Saudi Corporate Governance Regulations include a set of principles and standards governing company management and protecting the rights of shareholders and stakeholders. Key requirements include forming an independent board of directors, establishing specialized committees, and implementing strict financial disclosure standards.",
        "Through our extensive experience in legal consulting, we can help you understand and implement corporate governance requirements under Saudi law. Our team of specialized lawyers is ready to provide full support at all stages of establishment and implementation.",
      ],
    },
    {
      slug: "labor-rights-2026",
      title: "Worker Rights Under Saudi Labor Law: 2026 Updates",
      excerpt:
        "A comprehensive review of the latest amendments to the Saudi Labor Law and their impact on employee and employer rights.",
      author: "Mohammed Hamad Al-Shahrani",
      date: "June 25, 2026",
      content: [
        "The Saudi Labor Law has undergone important updates in 2026 aimed at strengthening worker rights and improving the work environment. These amendments come within the framework of Saudi Vision 2030 to develop the labor market and increase corporate competitiveness.",
        "Key updates include: increasing the minimum wage, improving working conditions, and strengthening protections against workplace abuse. The amendments also cover updates to leave policies and employment regulations.",
        "Employers are advised to review their internal policies and ensure compliance with the new amendments. Our integrated team is available to provide the necessary consultations to ensure full compliance.",
      ],
    },
    {
      slug: "medical-liability",
      title: "Medical Liability in Saudi Law: Patient and Doctor Rights",
      excerpt:
        "A detailed explanation of medical liability under Saudi law, including patient rights in cases of medical malpractice.",
      author: "Mohammed Hamad Al-Shahrani",
      date: "May 18, 2026",
      content: [
        "Medical liability represents one of the most complex legal fields in Saudi Arabia. This area is governed by a set of laws and regulations that define the rights and responsibilities of patients, doctors, and healthcare institutions.",
        "Among the most prominent principles established by Saudi law are: informed consent, duty of care, and compensation for damages. The law also defines cases and reasons for exemption from liability.",
        "If you find yourself in a case of medical malpractice, it is advisable to quickly consult a lawyer specialized in medical law. Our team can help you understand your rights and provide the necessary legal support.",
      ],
    },
    {
      slug: "real-estate-disputes",
      title: "Resolving Real Estate Disputes in Saudi Arabia",
      excerpt:
        "Exploring the various legal avenues for resolving real estate disputes in Saudi Arabia, from negotiation to arbitration.",
      author: "Mohammed Hamad Al-Shahrani",
      date: "April 30, 2026",
      content: [
        "Real estate disputes are among the most common types of disputes in Saudi Arabia. These disputes include ownership and possession conflicts, lease disagreements, delivery issues, and damage compensation claims.",
        "Several alternatives are available for resolving real estate disputes: direct negotiation, mediation, arbitration, and filing a lawsuit. Each alternative has its advantages and challenges, and the most appropriate choice depends on the circumstances of each case.",
        "Our team of lawyers specialized in real estate law is ready to help you resolve any real estate dispute effectively and efficiently. We always strive to achieve the best results for our clients.",
      ],
    },
  ],
};

export function generateStaticParams() {
  const slugs = ["corporate-governance-saudi", "labor-rights-2026", "medical-liability", "real-estate-disputes"];
  return slugs.flatMap((slug) => [
    { locale: "ar", slug },
    { locale: "en", slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const typed = locale as Locale;
  const articles = blogArticles[typed];
  const article = articles?.find((a) => a.slug === slug);

  if (!article) return {};

  return generatePageMetadata({
    locale: typed,
    title: article.title,
    description: article.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const typed = locale as Locale;

  setRequestLocale(typed);

  const t = await getTranslations("blog");
  const articles = blogArticles[typed];
  const article = articles?.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  const ArrowIcon = typed === "ar" ? "\u2190" : "\u2192";

  return (
    <main>
      <section className="bg-navy-gradient py-28 md:py-36">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl tracking-tight">
            {article.title}
          </h1>
          <div className="mt-6 flex items-center justify-center gap-4 text-navy-300">
            <span>{article.author}</span>
            <span aria-hidden="true">&middot;</span>
            <time>{article.date}</time>
          </div>
        </div>
      </section>

      {/* Article header image — TODO: Replace with official firm photography supplied by client */}
      <div className="relative mx-auto -mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src={`/images/blog/${slug}.jpg`}
            alt={
              typed === "ar"
                ? `صورة مقال: ${article.title}`
                : `Article image: ${article.title}`
            }
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 via-transparent to-transparent" aria-hidden="true" />
        </div>
      </div>

      <article className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-navy-500 hover:text-gold-600 transition-colors"
          >
            <span aria-hidden="true">{ArrowIcon}</span>
            {t("backToBlog")}
          </Link>

          <div className="prose prose-lg prose-navy max-w-none">
            {article.content.map((paragraph, idx) => (
              <p key={idx} className="mb-6 leading-relaxed text-navy-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {relatedArticles.length > 0 && (
        <section className="bg-warm-50 py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-2xl font-bold text-navy-900 tracking-tight">
              {t("relatedArticles")}
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group rounded-2xl border border-warm-200 bg-white p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <time className="text-sm text-navy-400">
                    {related.date}
                  </time>
                  <h3 className="mt-2 text-lg font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                    {related.title}
                  </h3>
                  <p className="mt-2 text-navy-600 leading-relaxed">{related.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold-600 opacity-0 transition-all duration-200 group-hover:opacity-100">
                    {t("readMore")}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand locale={typed} />
    </main>
  );
}
