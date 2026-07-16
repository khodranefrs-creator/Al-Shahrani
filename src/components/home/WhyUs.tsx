"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { type Locale } from "@/types";

const reasons = [
  { key: "0", featureKeys: ["0", "1", "2"] },
  { key: "1", featureKeys: ["0", "1", "2"] },
  { key: "2", featureKeys: ["0", "1", "2"] },
  { key: "3", featureKeys: ["0", "1", "2"] },
] as const;

interface WhyUsProps {
  locale: Locale;
}

export function WhyUs({ locale }: WhyUsProps) {
  const t = useTranslations("why_us");

  return (
    <section className="bg-navy-950 section-padding relative overflow-hidden">
      {/* Background ambient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-gold-400/[0.03] blur-[120px] max-md:blur-[60px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-400/[0.02] blur-[100px] max-md:blur-[50px]" />
      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-10 md:mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold text-white leading-[1.15] mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading-ar)" }}
          >
            {t("title")}
          </h2>
          <p className="text-warm-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {t("description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {reasons.map((reason, i) => (
            <div
              key={reason.key}
              className="group relative pt-4 md:pt-5 pb-5 md:pb-6 px-6 md:px-7 rounded-2xl bg-navy-900/50 border border-white/[0.06] hover:border-gold-400/25 transition-[border-color,box-shadow] duration-500 hover:shadow-[0_0_35px_rgba(184,149,60,0.08)] overflow-hidden"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              {/* Left gold accent bar */}
              <div aria-hidden="true" className="absolute start-0 top-2 bottom-2 w-px bg-gradient-to-b from-gold-400/30 via-gold-400/10 to-transparent rounded-full group-hover:from-gold-400/50 transition-opacity duration-500" />

              {/* Top gold accent line */}
              <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" />

              {/* Number badge */}
              <div className="relative z-10 mb-1 md:mb-1.5">
                <div className="inline-flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-gold-400/[0.10] ring-1 ring-gold-400/25 transition-[background-color,box-shadow] duration-500 group-hover:bg-gold-400/[0.18] group-hover:ring-gold-400/40 shadow-[0_0_20px_rgba(184,149,60,0.06)] group-hover:shadow-[0_0_30px_rgba(184,149,60,0.12)]">
                  <span
                    className="text-gold-400 font-bold text-base md:text-lg leading-none"
                    style={{ fontFamily: "var(--font-heading-en)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                className="relative z-10 text-base md:text-lg font-bold text-white mb-3 leading-snug"
                style={{ fontFamily: "var(--font-heading-ar)" }}
              >
                {t(`reasons.${reason.key}`)}
              </h3>

              {/* Features */}
              <ul className="relative z-10 space-y-1.5">
                {reason.featureKeys.map((fKey) => (
                  <li key={fKey} className="text-warm-400 text-sm md:text-base font-medium leading-relaxed">
                    {t(`features.${reason.key}.${fKey}`)}
                  </li>
                ))}
              </ul>

              {/* Bottom link */}
              <div className="relative z-10 mt-4 pt-3 border-t border-white/[0.06]">
                <Link
                  href={`/${locale}/governance`}
                  className="text-gold-400 text-xs font-medium inline-flex items-center gap-1.5 group/link hover:text-gold-300 transition-colors duration-300"
                >
                  {t("links.governance")}
                  <span className="rtl:rotate-180 transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
