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
            <div className="relative w-full aspect-[4/3] max-w-lg bg-navy-900/60 rounded-[var(--radius-panel)] border border-white/[0.06] flex items-center justify-center overflow-hidden">
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-400/[0.06] via-transparent to-gold-400/[0.03]" />
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(var(--color-gold-400) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold-400) 1px, transparent 1px)`,
                backgroundSize: "40px 40px"
              }} />

              {/* Abstract geometric composition — premium legal seal */}
              <svg
                viewBox="0 0 320 320"
                className="w-[55%] h-[55%] text-gold-400 opacity-70"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <g strokeWidth="1" strokeLinecap="round">
                  {/* Outer concentric rings */}
                  <circle cx="160" cy="160" r="120" strokeOpacity="0.12" />
                  <circle cx="160" cy="160" r="90" strokeOpacity="0.18" />
                  <circle cx="160" cy="160" r="60" strokeOpacity="0.25" />

                  {/* Diagonal cross — precision/structure */}
                  <line x1="75" y1="75" x2="245" y2="245" strokeOpacity="0.15" />
                  <line x1="245" y1="75" x2="75" y2="245" strokeOpacity="0.15" />

                  {/* Horizontal + vertical axis */}
                  <line x1="40" y1="160" x2="280" y2="160" strokeOpacity="0.1" />
                  <line x1="160" y1="40" x2="160" y2="280" strokeOpacity="0.1" />

                  {/* Central diamond — focal point */}
                  <rect x="140" y="140" width="40" height="40" rx="2" transform="rotate(45 160 160)" fill="currentColor" fillOpacity="0.06" strokeOpacity="0.3" />
                  <circle cx="160" cy="160" r="6" fill="currentColor" fillOpacity="0.2" />

                  {/* Corner accent dots */}
                  <circle cx="160" cy="40" r="3" fill="currentColor" fillOpacity="0.2" />
                  <circle cx="160" cy="280" r="3" fill="currentColor" fillOpacity="0.2" />
                  <circle cx="40" cy="160" r="3" fill="currentColor" fillOpacity="0.2" />
                  <circle cx="280" cy="160" r="3" fill="currentColor" fillOpacity="0.2" />

                  {/* Subtle inner square */}
                  <rect x="105" y="105" width="110" height="110" rx="2" strokeOpacity="0.12" />
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
