"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowRight, ArrowLeft, Clock } from "lucide-react";
import { type Locale } from "@/types";

const posts = [
  { key: "0", tag: "news" },
  { key: "1", tag: "news" },
  { key: "2", tag: "news" },
] as const;

interface BlogSectionProps {
  locale: Locale;
}

export function BlogSection({ locale }: BlogSectionProps) {
  const t = useTranslations("blog");
  const isRtl = locale === "ar";

  return (
    <section className="bg-warm-50 section-padding">
      <div className="container-custom">
        <div className="mb-8 md:mb-10">
          <h2
            className="text-3xl md:text-4xl font-bold text-navy-900 leading-[1.15]"
            style={{ fontFamily: "var(--font-heading-ar)" }}
          >
            {t("title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <Link
              key={post.key}
              href={`/${locale}/blog`}
              className="group block bg-white rounded-2xl border border-warm-100/60 hover:border-gold-400/30 hover:shadow-[0_4px_20px_rgba(184,149,60,0.2)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Image area — subtle monogram pattern */}
              <div className="h-44 md:h-[200px] bg-warm-100 rounded-t-2xl flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-warm-200 via-warm-100 to-warm-50" />
                <span
                  className="relative text-5xl font-bold text-warm-200 select-none"
                  style={{ fontFamily: "var(--font-heading-ar)" }}
                  aria-hidden="true"
                >
                  {locale === "ar" ? "ش" : "AS"}
                </span>
              </div>

              <div className="p-6">
                {/* Meta: reading time badge */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs text-gold-400 bg-gold-400/5 px-2.5 py-0.5 rounded-full">
                    <Clock className="w-3 h-3" />
                    {t(`read_times.${post.key}`)}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="font-semibold text-navy-900 mb-2 group-hover:text-gold-400 transition-colors duration-300 line-clamp-2 text-lg"
                  style={{ fontFamily: "var(--font-heading-ar)" }}
                >
                  {t(`posts.${post.key}`)}
                </h3>

                {/* Excerpt */}
                <p className="text-warm-500 text-sm leading-relaxed line-clamp-2">
                  {t(`excerpts.${post.key}`)}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-gold-400 font-medium hover:text-gold-300 transition-colors duration-200 group">
            <span>{t("read_more")}</span>
            {isRtl ? (
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
