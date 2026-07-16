import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Search } from "lucide-react";

import { type Locale } from "@/types";
import { generatePageMetadata } from "@/lib/metadata";
import { CtaBand } from "@/components/home/CtaBand";

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
    title: typed === "ar" ? "المدونة" : "Insights",
    description:
      typed === "ar"
        ? "مقالات ومدونات قانونية متخصصة من مكتب الشهراني للمحاماة والاستشارات القانونية."
        : "Specialized legal articles and insights from Al-Shahrani Law Firm.",
    path: "/blog",
  });
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readingTime: string;
}

const blogPosts: Record<Locale, BlogPost[]> = {
  ar: [
    {
      slug: "corporate-governance-saudi",
      title: "حوكمة الشركات في المملكة العربية السعودية: دليل شامل",
      excerpt:
        "نظرة معمقة على متطلبات حوكمة الشركات وفقاً للنظام السعودي الجديد، وكيف يمكن للمؤسسات الامتثال للمعايير الدولية.",
      date: "١٠ يوليو ٢٠٢٦",
      category: "القانون التجاري",
      readingTime: "٥ دقائق قراءة",
    },
    {
      slug: "labor-rights-2026",
      title: "حقوق العمال في نظام العمل السعودي: تحديثات 2026",
      excerpt:
        "مراجعة شاملة لأحدث التعديلات على نظام العمل السعودي وتأثيرها على حقوق العمال وأصحاب العمل.",
      date: "٢٥ يونيو ٢٠٢٦",
      category: "قانون العمل",
      readingTime: "٧ دقائق قراءة",
    },
    {
      slug: "medical-liability",
      title: "المسؤولية الطبية في القانون السعودي: حقوق المرضى والاطباء",
      excerpt:
        "شرح تفصيلي للمسؤولية الطبية وفقاً للنظام السعودي، وحقوق المرضى في حالات الأخطاء الطبية.",
      date: "١٨ مايو ٢٠٢٦",
      category: "القانون الطبي",
      readingTime: "٤ دقائق قراءة",
    },
    {
      slug: "real-estate-disputes",
      title: "حل النزاعات العقارية في المملكة: البدائل القانونية",
      excerpt:
        "استكشاف الطرق القانونية المختلفة لحل النزاعات العقارية في السعودية، من التفاوض إلى التحكيم.",
      date: "٣٠ أبريل ٢٠٢٦",
      category: "القانون العقاري",
      readingTime: "٦ دقائق قراءة",
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
      readingTime: "5 min read",
    },
    {
      slug: "labor-rights-2026",
      title: "Worker Rights Under Saudi Labor Law: 2026 Updates",
      excerpt:
        "A comprehensive review of the latest amendments to the Saudi Labor Law and their impact on employee and employer rights.",
      date: "Jun 25, 2026",
      category: "Labor Law",
      readingTime: "7 min read",
    },
    {
      slug: "medical-liability",
      title: "Medical Liability in Saudi Law: Patient and Doctor Rights",
      excerpt:
        "A detailed explanation of medical liability under Saudi law, including patient rights in cases of medical malpractice.",
      date: "May 18, 2026",
      category: "Medical Law",
      readingTime: "4 min read",
    },
    {
      slug: "real-estate-disputes",
      title: "Resolving Real Estate Disputes in Saudi Arabia",
      excerpt:
        "Exploring the various legal avenues for resolving real estate disputes in Saudi Arabia, from negotiation to arbitration.",
      date: "Apr 30, 2026",
      category: "Real Estate Law",
      readingTime: "6 min read",
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
  const isRtl = typed === "ar";
  const ArrowIcon = isRtl ? "\u2190" : "\u2192";

  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-navy-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="blog-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#blog-grid)" />
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
            {t("title")}
          </h1>
          <div className="w-20 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mb-8" />
          <p className="text-lg leading-[1.8] text-warm-300 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Search + Categories */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            {/* Search */}
            <div className="relative max-w-md mx-auto mb-8">
              <div className="absolute end-4 top-1/2 -translate-y-1/2 text-warm-400 pointer-events-none">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder={isRtl ? "بحث في المقالات..." : "Search articles..."}
                className="w-full h-12 bg-white border border-warm-200/60 rounded-xl ps-12 pe-4 text-navy-900 placeholder:text-warm-400 text-sm focus:outline-none focus:border-gold-400/50 focus:ring-1 focus:ring-gold-400/20 transition-all shadow-sm"
              />
            </div>

            {/* Category pills */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <span className="px-4 py-2 rounded-full text-sm bg-gold-500 text-navy-900 border border-gold-500 font-medium">
                {isRtl ? "الكل" : "All"}
              </span>
              {Object.values(
                typed === "ar"
                  ? { corporate: "القانون التجاري", labor: "قانون العمل", medical: "القانون الطبي", property: "القانون العقاري" }
                  : { corporate: "Corporate Law", labor: "Labor Law", medical: "Medical Law", property: "Real Estate Law" }
              ).map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-full text-sm bg-white text-warm-600 border border-warm-200/60 hover:border-gold-400/30 hover:text-navy-900 transition-colors cursor-pointer"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Article grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-panel border border-warm-200/60 overflow-hidden shadow-subtle hover-lift transition-all">
                    {/* Image area — monogram placeholder */}
                    <div className="h-44 md:h-48 bg-warm-100 flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-warm-200 via-warm-100 to-warm-50" />
                      <span
                        className="relative text-5xl font-bold text-warm-200 select-none"
                        style={{ fontFamily: "var(--font-heading-ar)" }}
                        aria-hidden="true"
                      >
                        {typed === "ar" ? "ش" : "AS"}
                      </span>
                    </div>

                    <div className="p-6">
                      {/* Meta */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-warm-400">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-warm-400">
                          <Clock className="w-3 h-3" />
                          {post.readingTime}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="font-semibold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2 text-lg">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-warm-500 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Read more */}
                      <div className="mt-4">
                        <span className="inline-flex items-center gap-1.5 text-gold-600 text-sm font-medium group-hover:gap-2.5 transition-all duration-300">
                          {isRtl ? "اقرأ المزيد" : "Read More"}
                          <span aria-hidden="true">{ArrowIcon}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBand locale={typed} />
    </main>
  );
}
