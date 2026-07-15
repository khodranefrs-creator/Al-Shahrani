"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight } from "lucide-react";
import { type Locale } from "@/types";
import { EyebrowTag } from "@/components/ui/EyebrowTag";

const posts = [
  { key: "0", tag: "news" },
  { key: "1", tag: "news" },
  { key: "2", tag: "news" },
] as const;

const placeholderImages = ["/images/blog-1.jpg", "/images/blog-2.jpg", "/images/blog-3.jpg"];

interface BlogSectionProps {
  locale: Locale;
}

export function BlogSection({ locale }: BlogSectionProps) {
  const t = useTranslations("blog");

  return (
    <section className="bg-warm-50 relative">
      {/* Top section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold-400/[0.15]" />

      <div className="section-padding container-custom">
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
          <EyebrowTag label={t("eyebrow")} />
          <h2
            className="text-[clamp(1.25rem,3vw,2.25rem)] font-bold text-navy-900 mb-4"
            style={{ fontFamily: "var(--font-heading-ar)" }}
          >
            {t("title")}
          </h2>
          <p className="text-warm-500 leading-[1.7] max-w-2xl mx-auto">{t("description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, i) => (
            <Link
              key={post.key}
              href={`/${locale}/news`}
              className="group rounded-[var(--radius-panel)] overflow-hidden bg-white border border-warm-100 hover:border-gold-400/25 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] flex flex-col"
            >
              {/* Taller image area for editorial feel */}
              <div className="relative h-52 md:h-60 bg-warm-100 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                {/* Placeholder image */}
                <div className="absolute inset-0 bg-gradient-to-br from-warm-200 via-warm-100 to-warm-50" />
                {/* Read time badge */}
                <div className="absolute top-4 end-4 z-20 px-3 py-1.5 rounded-full bg-navy-900/80 backdrop-blur-sm text-warm-400 text-[0.7rem] font-semibold">
                  {t(`read_times.${post.key}`)}
                </div>
              </div>

              <div className="p-7 flex flex-col flex-1">
                {/* Tag */}
                <span className="text-xs font-semibold text-gold-400 mb-3 uppercase tracking-wider">
                  {t(`tags.${post.tag}`)}
                </span>

                {/* Title */}
                <h3
                  className="text-base font-bold text-navy-900 mb-3 leading-[1.5] group-hover:text-gold-400 transition-colors duration-300"
                  style={{ fontFamily: "var(--font-heading-ar)" }}
                >
                  {t(`posts.${post.key}`)}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-warm-500 leading-[1.7] mb-5 line-clamp-2">
                  {t(`excerpts.${post.key}`)}
                </p>

                {/* Read more */}
                <div className="mt-auto pt-4 border-t border-warm-100">
                  <span className="text-gold-400 text-xs font-semibold inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    {t("read_more")}
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
