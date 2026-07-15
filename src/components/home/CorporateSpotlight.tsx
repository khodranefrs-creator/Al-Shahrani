"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Check } from "lucide-react";
import { siteConfig, type Locale } from "@/types";
import { EyebrowTag } from "@/components/ui/EyebrowTag";

interface CorporateSpotlightProps {
  locale: Locale;
}

export function CorporateSpotlight({ locale }: CorporateSpotlightProps) {
  const t = useTranslations("corporate_spotlight");

  return (
    <section className="bg-navy-950 overflow-hidden">
      <div className="section-padding container-custom">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
          {/* Editorial column */}
          <div>
            <EyebrowTag label={t("eyebrow")} />
            <h2
              className="text-[clamp(1.25rem,3vw,2.25rem)] font-bold text-white mb-5 md:mb-6 leading-[1.3]"
              style={{ fontFamily: "var(--font-heading-ar)" }}
            >
              {t("title")}
            </h2>
            <p className="text-warm-400 leading-[1.7] mb-6 md:mb-8">{t("description")}</p>

            <ul className="space-y-3 mb-8 md:mb-10">
              {(["0", "1", "2"] as const).map((k) => (
                <li key={k} className="flex items-start gap-3 text-warm-400 text-sm leading-[1.7]">
                  <Check aria-hidden="true" className="w-4 h-4 text-gold-400 shrink-0 mt-[2px]" />
                  <span>{t(`highlights.${k}`)}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/${locale}/governance`}
              className="text-gold-400 text-sm font-semibold inline-flex items-center gap-2 group/link"
            >
              {t("cta")}
              <span className="rtl:rotate-180 transition-transform group-hover/link:translate-x-1">
                {locale === "ar" ? "←" : "→"}
              </span>
            </Link>
          </div>

          {/* Visual column — premium legal composition */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-lg bg-navy-900/60 rounded-[var(--radius-panel)] border border-white/[0.06] flex items-center justify-center overflow-hidden">
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/[0.06] via-transparent to-gold-400/[0.03]" />
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(var(--color-gold-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-400) 1px, transparent 1px)`,
                backgroundSize: "40px 40px"
              }} />

              {/* Central scales SVG */}
              <svg
                viewBox="0 0 320 320"
                className="w-[55%] h-[55%] text-gold-400 opacity-80"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <g strokeWidth="1.5" strokeLinecap="round">
                  {/* Central pillar */}
                  <line x1="160" y1="60" x2="160" y2="240" />
                  {/* Base */}
                  <rect x="130" y="236" width="60" height="8" rx="4" fill="currentColor" fillOpacity="0.08" />
                  <ellipse cx="160" cy="248" rx="40" ry="6" fill="currentColor" fillOpacity="0.05" />

                  {/* Beam */}
                  <line x1="80" y1="96" x2="240" y2="96" />
                  {/* Top cap */}
                  <circle cx="160" cy="60" r="8" fill="currentColor" fillOpacity="0.1" />
                  <circle cx="160" cy="60" r="4" fill="currentColor" fillOpacity="0.2" />

                  {/* Left pan — chains */}
                  <line x1="80" y1="96" x2="72" y2="148" />
                  <line x1="80" y1="96" x2="88" y2="148" />
                  {/* Left pan */}
                  <path d="M60,148 Q72,168 88,148" fill="currentColor" fillOpacity="0.06" strokeWidth="1" />
                  <ellipse cx="74" cy="148" rx="14" ry="4" fill="currentColor" fillOpacity="0.04" />

                  {/* Right pan — chains */}
                  <line x1="240" y1="96" x2="232" y2="148" />
                  <line x1="240" y1="96" x2="248" y2="148" />
                  {/* Right pan */}
                  <path d="M220,148 Q232,168 248,148" fill="currentColor" fillOpacity="0.06" strokeWidth="1" />
                  <ellipse cx="234" cy="148" rx="14" ry="4" fill="currentColor" fillOpacity="0.04" />

                  {/* Decorative circles */}
                  <circle cx="80" cy="96" r="4" fill="currentColor" fillOpacity="0.15" />
                  <circle cx="240" cy="96" r="4" fill="currentColor" fillOpacity="0.15" />

                  {/* Sword of justice — vertical accent */}
                  <line x1="160" y1="32" x2="160" y2="18" strokeWidth="2" />
                  <line x1="154" y1="26" x2="166" y2="26" strokeWidth="1.5" />
                </g>
              </svg>

              {/* Corner accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-gold-400/20 rounded-tl-sm" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-gold-400/20 rounded-tr-sm" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-gold-400/20 rounded-bl-sm" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-gold-400/20 rounded-br-sm" />
            </div>

            {/* Offset depth card */}
            <div className="absolute -bottom-4 -left-4 lg:-left-8 bg-gold-400 text-navy-900 rounded-[var(--radius-surface)] px-6 py-4 shadow-[0_8px_30px_rgba(184,149,60,0.25)]">
              <div
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-heading-en)" }}
              >
                {siteConfig.name[locale] || siteConfig.name.ar}
              </div>
              <div className="text-xs opacity-80 mt-0.5">{t("badge")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
