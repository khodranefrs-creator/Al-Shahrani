"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Shield, Scale, Clock, Handshake, Check } from "lucide-react";
import { type Locale } from "@/types";
import { EyebrowTag } from "@/components/ui/EyebrowTag";

const reasons = [
  { icon: Shield, key: "0", featureKeys: ["0", "1", "2"] },
  { icon: Scale, key: "1", featureKeys: ["0", "1", "2"] },
  { icon: Clock, key: "2", featureKeys: ["0", "1", "2"] },
  { icon: Handshake, key: "3", featureKeys: ["0", "1", "2"] },
] as const;

interface WhyUsProps {
  locale: Locale;
}

export function WhyUs({ locale }: WhyUsProps) {
  const t = useTranslations("why_us");

  return (
    <section className="bg-navy-950">
      <div className="section-padding container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <EyebrowTag label={t("eyebrow")} />
          <h2
            className="text-[clamp(1.25rem,3vw,2.25rem)] font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading-ar)" }}
          >
            {t("title")}
          </h2>
          <p className="text-warm-400 leading-[1.7] max-w-2xl mx-auto">{t("description")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.key}
                className="relative rounded-[var(--radius-panel)] p-8 md:p-10 bg-navy-900/50 border border-white/[0.06] hover:border-gold-400/[0.18] transition-colors duration-500 group overflow-hidden"
              >
                {/* Top gold accent line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />
                {/* Background glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-400/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative flex items-start gap-6">
                  {/* Gold number badge */}
                  <div className="shrink-0 w-14 h-14 rounded-full bg-gold-400/[0.1] flex items-center justify-center ring-1 ring-gold-400/[0.12] group-hover:ring-gold-400/30 transition-all duration-500">
                    <span
                      className="text-gold-400 font-bold text-lg"
                      style={{ fontFamily: "var(--font-heading-en)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-lg md:text-xl font-bold text-white mb-3"
                      style={{ fontFamily: "var(--font-heading-ar)" }}
                    >
                      {t(`reasons.${reason.key}`)}
                    </h3>
                    <ul className="space-y-3">
                      {reason.featureKeys.map((fKey) => (
                        <li key={fKey} className="flex items-start gap-3 text-warm-400 text-sm leading-[1.7]">
                          <Check
                            aria-hidden="true"
                            className="w-4 h-4 text-gold-400 shrink-0 mt-[2px]"
                          />
                          <span>{t(`features.${reason.key}.${fKey}`)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative mt-6 pt-5 border-t border-white/[0.06]">
                  <Link
                    href={`/${locale}/governance`}
                    className="text-gold-400 text-sm font-semibold inline-flex items-center gap-2 group/link"
                  >
                    {t("links.governance")}
                    <span className="rtl:rotate-180 transition-transform group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
