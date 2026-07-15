import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";

import { type Locale } from "@/types";
import { generatePageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typed = locale as Locale;

  return generatePageMetadata({
    locale: typed,
    title: typed === "ar" ? "المدونة" : "Blog",
    description:
      typed === "ar"
        ? "مقالات ومدونات قانونية متخصصة من مكتب الشهراني للمحاماة والاستشارات القانونية."
        : "Specialized legal articles and blog posts from Al-Shahrani Law Firm.",
    path: "/blog",
  });
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

const blogPosts: Record<Locale, BlogPost[]> = {
  ar: [
    {
      slug: "corporate-governance-saudi",
      title: "حوكمة الشركات في المملكة العربية السعودية: دليل شامل",
      excerpt:
        "نظرة معمقة على متطلبات حوكمة الشركات وفقاً للنظام السعودي الجديد، وكيف يمكن للمؤسسات الامتثال للمعايير الدولية.",
      date: "٢٠٢٦/٠٧/١٠",
      category: "القانون التجاري",
    },
    {
      slug: "labor-rights-2026",
      title: "حقوق العمال في نظام العمل السعودي: تحديثات 2026",
      excerpt:
        "مراجعة شاملة لأحدث التعديلات على نظام العمل السعودي وتأثيرها على حقوق العمال وأصحاب العمل.",
      date: "٢٠٢٦/٠٦/٢٥",
      category: "قانون العمل",
    },
    {
      slug: "medical-liability",
      title: "المسؤولية الطبية في القانون السعودي: حقوق المرضى والاطباء",
      excerpt:
        "شرح تفصيلي للمسؤولية الطبية وفقاً للنظام السعودي، وحقوق المرضى في حالات الأخطاء الطبية.",
      date: "٢٠٢٦/٠٥/١٨",
      category: "القانون الطبي",
    },
    {
      slug: "real-estate-disputes",
      title: "حل النزاعات العقارية في المملكة: البدائل القانونية",
      excerpt:
        "استكشاف الطرق القانونية المختلفة لحل النزاعات العقارية في السعودية، من التفاوض إلى التحكيم.",
      date: "٢٠٢٦/٠٤/٣٠",
      category: "القانون العقاري",
    },
  ],
  en: [
    {
      slug: "corporate-governance-saudi",
      title: "Corporate Governance in Saudi Arabia: A Comprehensive Guide",
      excerpt:
        "An in-depth look at corporate governance requirements under the new Saudi regulations and how institutions can comply with international standards.",
      date: "Jul 10, 2026",
      category: "Corporate Law",
    },
    {
      slug: "labor-rights-2026",
      title: "Worker Rights Under Saudi Labor Law: 2026 Updates",
      excerpt:
        "A comprehensive review of the latest amendments to the Saudi Labor Law and their impact on employee and employer rights.",
      date: "Jun 25, 2026",
      category: "Labor Law",
    },
    {
      slug: "medical-liability",
      title: "Medical Liability in Saudi Law: Patient and Doctor Rights",
      excerpt:
        "A detailed explanation of medical liability under Saudi law, including patient rights in cases of medical malpractice.",
      date: "May 18, 2026",
      category: "Medical Law",
    },
    {
      slug: "real-estate-disputes",
      title: "Resolving Real Estate Disputes in Saudi Arabia",
      excerpt:
        "Exploring the various legal avenues for resolving real estate disputes in Saudi Arabia, from negotiation to arbitration.",
      date: "Apr 30, 2026",
      category: "Real Estate Law",
    },
  ],
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typed = locale as Locale;

  setRequestLocale(typed);

  const t = await getTranslations("blog");
  const posts = blogPosts[typed];

  return (
    <>
      <section className="bg-navy-gradient py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1
            className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-200">
            {t("subtitle")}
          </p>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group rounded-2xl border border-warm-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
                    {post.category}
                  </span>
                  <span className="text-sm text-navy-400">{post.date}</span>
                </div>

                <h2 className="mb-3 text-xl font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>

                <p className="mb-6 leading-relaxed text-navy-600">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                >
                  {t("readMore")}
                  <span aria-hidden="true">&larr;</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
