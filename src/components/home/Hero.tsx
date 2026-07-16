"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Scale, Shield, Award, BadgeCheck } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";
import { siteConfig, type Locale } from "@/types";
import { EyebrowTag } from "@/components/ui/EyebrowTag";

const trustCards = [
  { icon: BadgeCheck, key: "years" },
  { icon: Scale, key: "cases" },
  { icon: Shield, key: "clients" },
  { icon: Award, key: "practiceAreas" },
] as const;

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const t = useTranslations("hero");
  const tStats = useTranslations("stats");

  return (
    <section className="relative min-h-dvh bg-navy-950 flex items-center overflow-hidden">
      {/* Background — premium depth layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025] max-md:hidden"
          style={{
            backgroundImage: `linear-gradient(30deg, var(--color-gold-400) 10%, transparent 10.5%, transparent 90%, var(--color-gold-400) 90.5%)`,
            backgroundSize: "100px 100px",
          }}
        />
        {/* Central ambient glow — radial-gradient (no filter, GPU-safe) */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] max-md:w-[400px] max-md:h-[400px] max-md:opacity-40"
          style={{ background: "radial-gradient(circle, rgba(184,149,60,0.04) 0%, rgba(184,149,60,0.015) 40%, transparent 70%)" }}
        />
        {/* Bottom-right glow for depth */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] max-md:w-[300px] max-md:h-[300px]"
          style={{ background: "radial-gradient(circle, rgba(184,149,60,0.02) 0%, transparent 65%)" }}
        />
        {/* Left vertical accent line */}
        <div className="absolute top-0 bottom-0 left-[15%] w-px bg-gradient-to-b from-transparent via-gold-400/[0.08] to-transparent hidden lg:block" />
        {/* Right vertical accent line */}
        <div className="absolute top-0 bottom-0 right-[15%] w-px bg-gradient-to-b from-transparent via-gold-400/[0.08] to-transparent hidden lg:block" />
      </div>

      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      <div className="relative z-10 container-custom pt-24 md:pt-32 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex justify-center mb-3">
            <EyebrowTag label={locale === "ar" ? "خميّس مشيط" : "Khamis Mushait"} />
          </div>

          {/* Heading — maximum contrast, fluid scale */}
          <h1
            className="text-[clamp(1.875rem,5.5vw,5rem)] font-bold text-white leading-[1.1] mb-6 md:mb-7"
            style={{ fontFamily: "var(--font-heading-ar)" }}
          >
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-warm-300 leading-[1.7] sm:leading-[1.8] max-w-[39rem] mb-8 md:mb-10 mx-auto">
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary group">
              {t("cta_primary")}
              <span className="rtl:rotate-180 transition-transform duration-300 group-hover:translate-x-1">
                {locale === "ar" ? "\u2190" : "\u2192"}
              </span>
            </Link>
            <a
              href={getWhatsAppUrl(
                siteConfig.whatsapp,
                locale === "ar" ? "مرحباً، أريد التواصل" : "Hello, I would like to contact you"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t("cta_secondary")}
            </a>
          </div>
        </div>

        {/* Trust cards — 4-col grid with premium depth */}
        <div className="mt-12 sm:mt-14 md:mt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {trustCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.key}
                  className="relative p-5 sm:p-5 md:p-8 rounded-[var(--radius-surface)] bg-navy-900/60 border border-white/[0.06] hover:border-gold-400/20 transition-colors duration-700 group"
                >
                  {/* Top gold accent line */}
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/25 to-transparent" aria-hidden="true" />
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gold-400/[0.08] flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-gold-400/[0.15] transition-colors duration-500 ring-1 ring-gold-400/[0.08] group-hover:ring-gold-400/20 shadow-[0_0_20px_rgba(184,149,60,0.06)]">
                    <Icon aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gold-400" />
                  </div>
                  <h3
                    className="text-base sm:text-base md:text-lg font-semibold text-white mb-1.5 sm:mb-2 leading-snug"
                    style={{ fontFamily: "var(--font-heading-ar)" }}
                  >
                    {tStats(card.key)}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent pointer-events-none" />
    </section>
  );
}
