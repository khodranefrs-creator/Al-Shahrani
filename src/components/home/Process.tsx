"use client";

import { useTranslations } from "next-intl";
import { FileText, Search, Handshake, Shield, Check } from "lucide-react";
import { type Locale } from "@/types";
import { EyebrowTag } from "@/components/ui/EyebrowTag";

const steps = [
  { icon: FileText, key: "0" },
  { icon: Search, key: "1" },
  { icon: Handshake, key: "2" },
  { icon: Shield, key: "3" },
] as const;

interface ProcessProps {
  locale: Locale;
}

export function Process({ locale }: ProcessProps) {
  const t = useTranslations("process");

  return (
    <section className="bg-navy-950 relative">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/15 to-transparent" />

      <div className="section-padding container-custom">
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
          <EyebrowTag label={t("eyebrow")} />
          <h2
            className="text-[clamp(1.25rem,3vw,2.25rem)] font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading-ar)" }}
          >
            {t("title")}
          </h2>
          <p className="text-warm-400 leading-[1.7] max-w-2xl mx-auto">{t("description")}</p>
        </div>

        {/* 4-col timeline grid — fixed on desktop, stacked on mobile */}
        <div className="relative max-w-5xl mx-auto">
          {/* Horizontal connector line — desktop only */}
          <div className="hidden md:block absolute top-[3.25rem] left-[12%] right-[12%] h-px bg-gold-400/20" />

          <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.key} className="text-center group">
                  {/* Step node — larger */}
                  <div className="relative inline-flex mb-6">
                    {/* Active glow ring */}
                    <div className="absolute -inset-3 rounded-full bg-gold-400/[0.08] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold-400/[0.08] flex items-center justify-center ring-1 ring-gold-400/25 group-hover:ring-gold-400/50 transition-all duration-500 shadow-[0_0_20px_rgba(184,149,60,0.06)]">
                      <Icon aria-hidden="true" className="w-6 h-6 md:w-7 md:h-7 text-gold-400" />
                    </div>
                    {/* Step number */}
                    <span
                      className="absolute -top-2 -end-2 w-6 h-6 rounded-full bg-navy-950 ring-1 ring-gold-400/30 flex items-center justify-center text-[0.65rem] font-bold text-gold-400"
                      style={{ fontFamily: "var(--font-heading-en)" }}
                    >
                      {i + 1}
                    </span>
                  </div>

                  {/* Step title — slightly larger */}
                  <h3
                    className="text-base md:text-lg font-bold text-white mb-3 px-2"
                    style={{ fontFamily: "var(--font-heading-ar)" }}
                  >
                    {t(`steps.${step.key}`)}
                  </h3>

                  {/* Features list */}
                  <ul className="space-y-2 text-sm text-warm-400 max-w-[220px] mx-auto">
                    {["0", "1", "2"].map((fKey) => (
                      <li key={fKey} className="flex items-start gap-2 text-left">
                        <Check
                          aria-hidden="true"
                          className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-[3px]"
                        />
                        <span className="leading-[1.6]">{t(`features.${step.key}.${fKey}`)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
