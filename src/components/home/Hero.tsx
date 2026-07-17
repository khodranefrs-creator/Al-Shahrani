"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getWhatsAppUrl } from "@/lib/utils";
import { siteConfig, type Locale } from "@/types";
import { EyebrowTag } from "@/components/ui/EyebrowTag";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-dvh bg-navy-950 flex items-center overflow-hidden">
      {/* Background — institutional depth (no SaaS patterns) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle horizontal ruled lines — institutional/architectural feel */}
        <div className="absolute inset-0 opacity-[0.018] max-md:hidden">
          {[20, 35, 50, 65, 80].map((pct) => (
            <div
              key={pct}
              className="absolute left-0 right-0 h-px bg-gold-400"
              style={{ top: `${pct}%` }}
            />
          ))}
        </div>
        {/* Central ambient glow — warm, institutional */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] max-md:w-[400px] max-md:h-[400px] max-md:opacity-40"
          style={{ background: "radial-gradient(circle, rgba(184,149,60,0.045) 0%, rgba(184,149,60,0.015) 40%, transparent 70%)" }}
        />
        {/* Bottom-right depth glow */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] max-md:w-[300px] max-md:h-[300px]"
          style={{ background: "radial-gradient(circle, rgba(184,149,60,0.02) 0%, transparent 65%)" }}
        />
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
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent pointer-events-none" />
    </section>
  );
}
