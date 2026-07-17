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

const legalIllustrations = [
  // Scales of justice — corporate governance
  <svg key="scales" viewBox="0 0 200 160" fill="none" className="w-24 h-20 text-gold-400/40" aria-hidden="true">
    <path d="M100 20v100" stroke="currentColor" strokeWidth="1.5" />
    <path d="M60 40h80" stroke="currentColor" strokeWidth="1.5" />
    <path d="M60 40l-20 40h40l-20-40z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
    <path d="M140 40l-20 40h40l-20-40z" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
    <path d="M80 120h40" stroke="currentColor" strokeWidth="1.5" />
    <path d="M70 120h60" stroke="currentColor" strokeWidth="1" />
    <circle cx="100" cy="18" r="3" fill="currentColor" fillOpacity="0.3" />
  </svg>,
  // Gavel — litigation/labor rights
  <svg key="gavel" viewBox="0 0 200 160" fill="none" className="w-24 h-20 text-gold-400/40" aria-hidden="true">
    <rect x="70" y="50" width="60" height="20" rx="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.05" transform="rotate(-30 100 60)" />
    <path d="M85 85l15-15" stroke="currentColor" strokeWidth="1.5" />
    <path d="M80 90l20-20" stroke="currentColor" strokeWidth="1" />
    <circle cx="75" cy="95" r="8" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.05" />
    <path d="M60 120h80" stroke="currentColor" strokeWidth="1" />
    <rect x="55" y="115" width="90" height="10" rx="2" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.03" />
  </svg>,
  // Document/contract
  <svg key="doc" viewBox="0 0 200 160" fill="none" className="w-24 h-20 text-gold-400/40" aria-hidden="true">
    <rect x="55" y="25" width="90" height="110" rx="3" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.04" />
    <path d="M75 55h50M75 70h50M75 85h35" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
    <path d="M75 105l8 8 16-16" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="135" cy="115" r="12" stroke="currentColor" strokeWidth="1" fill="currentColor" fillOpacity="0.06" />
  </svg>,
];

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
            <div
              key={post.key}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <Link
                href="/blog"
                className="group block bg-white rounded-2xl border border-warm-100/60 hover:border-gold-400/30 hover:shadow-[0_4px_20px_rgba(184,149,60,0.2)] transition-colors duration-300 overflow-hidden"
              >
              {/* Image area — premium legal illustration */}
              <div className="h-44 md:h-[200px] bg-gradient-to-br from-navy-900 to-navy-950 rounded-t-2xl flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.03]">
                  <svg width="100%" height="100%">
                    <defs>
                      <pattern id={`blog-grid-${post.key}`} width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gold-400" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#blog-grid-${post.key})`} />
                  </svg>
                </div>
                {legalIllustrations[idx]}
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
            </div>
          ))}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-gold-400 font-medium hover:text-gold-300 transition-colors duration-200 group">
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
