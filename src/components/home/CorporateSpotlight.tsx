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
              className="text-3xl md:text-4xl font-bold text-white mb-5 md:mb-6 leading-[1.3]"
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
              href="/services/governance"
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
            <div className="relative w-full aspect-[4/3] max-w-lg bg-navy-900/60 rounded-[var(--radius-panel)] border border-white/[0.06] flex items-center justify-center overflow-hidden">
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/[0.06] via-transparent to-gold-400/[0.03]" />
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(var(--color-gold-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-400) 1px, transparent 1px)`,
                backgroundSize: "40px 40px"
              }} />

              {/* Legal institution illustration — courthouse columns */}
              <svg
                viewBox="0 0 320 280"
                className="w-[65%] h-[65%] text-gold-400 opacity-60"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <g strokeWidth="1" strokeLinecap="round">
                  {/* Pediment / triangular roof */}
                  <path d="M80 110 L160 60 L240 110" strokeOpacity="0.3" fill="currentColor" fillOpacity="0.03" />
                  <line x1="80" y1="110" x2="240" y2="110" strokeOpacity="0.25" />

                  {/* Entablature — horizontal beam */}
                  <rect x="70" y="110" width="180" height="8" rx="1" strokeOpacity="0.15" fill="currentColor" fillOpacity="0.04" />

                  {/* Columns */}
                  {[95, 130, 165, 200, 225].map((x) => (
                    <g key={x}>
                      <rect x={x - 5} y="118" width="10" height="80" rx="1" strokeOpacity="0.2" fill="currentColor" fillOpacity="0.04" />
                      <line x1={x - 4} y1="125" x2={x - 4} y2="193" strokeOpacity="0.08" />
                      <line x1={x + 4} y1="125" x2={x + 4} y2="193" strokeOpacity="0.08" />
                      {/* Column capitals */}
                      <rect x={x - 6} y="115" width="12" height="5" rx="1" strokeOpacity="0.2" fill="currentColor" fillOpacity="0.05" />
                    </g>
                  ))}

                  {/* Base / stylobate */}
                  <rect x="65" y="198" width="190" height="6" rx="1" strokeOpacity="0.2" fill="currentColor" fillOpacity="0.04" />
                  <rect x="60" y="204" width="200" height="8" rx="1" strokeOpacity="0.15" fill="currentColor" fillOpacity="0.03" />

                  {/* Steps */}
                  <rect x="55" y="212" width="210" height="5" rx="1" strokeOpacity="0.1" />
                  <rect x="50" y="217" width="220" height="5" rx="1" strokeOpacity="0.08" />

                  {/* Central scales emblem — small, above pediment */}
                  <circle cx="160" cy="50" r="10" strokeOpacity="0.2" fill="currentColor" fillOpacity="0.05" />
                  <path d="M160 42v16M152 48h16" strokeOpacity="0.25" strokeWidth="0.8" />
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
