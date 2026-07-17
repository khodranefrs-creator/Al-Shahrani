"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getWhatsAppUrl } from "@/lib/utils";
import { siteConfig, type Locale } from "@/types";
import { EyebrowTag } from "@/components/ui/EyebrowTag";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const t = useTranslations("hero");
  const isRtl = locale === "ar";

  return (
    <section className="relative min-h-dvh bg-navy-950 flex items-center overflow-hidden">
      {/* Background — institutional depth */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Diagonal ruled lines — architectural pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] max-md:hidden"
          style={{
            backgroundImage:
              "repeating-linear-gradient(125deg, transparent, transparent 140px, rgba(184,149,60,0.5) 140px, rgba(184,149,60,0.5) 141px)",
          }}
        />
        {/* Horizontal ruled lines — mobile fallback */}
        <div className="absolute inset-0 opacity-[0.018] md:hidden">
          {[25, 40, 55, 70, 85].map((pct) => (
            <div
              key={pct}
              className="absolute left-0 right-0 h-px bg-gold-400"
              style={{ top: `${pct}%` }}
            />
          ))}
        </div>
        {/* Vertical gold rules at edges — desktop only */}
        <div className="absolute inset-y-0 left-[15%] w-px bg-gold-400/10 max-md:hidden" />
        <div className="absolute inset-y-0 right-[15%] w-px bg-gold-400/10 max-md:hidden" />
        {/* Central ambient glow — warm, institutional */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-md:w-[450px] max-md:h-[450px] max-md:opacity-40"
          style={{
            background:
              "radial-gradient(circle, rgba(184,149,60,0.06) 0%, rgba(184,149,60,0.02) 35%, transparent 65%)",
          }}
        />
        {/* Bottom-right depth glow */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] max-md:w-[300px] max-md:h-[300px]"
          style={{
            background:
              "radial-gradient(circle, rgba(184,149,60,0.025) 0%, transparent 60%)",
          }}
        />
        {/* Bottom-left faint glow */}
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] max-md:hidden"
          style={{
            background:
              "radial-gradient(circle, rgba(184,149,60,0.015) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Top gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

      <div className="relative z-10 container-custom pt-28 md:pt-40 pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="flex justify-center mb-4">
            <EyebrowTag
              label={isRtl ? "خميّس مشيط" : "Khamis Mushait"}
            />
          </div>

          {/* Heading — editorial authority */}
          <h1
            className="text-[clamp(2rem,5.5vw,5rem)] font-bold text-white leading-[1.1] mb-6 md:mb-8"
            style={{ fontFamily: "var(--font-heading-ar)" }}
          >
            {t("title")}
          </h1>

          {/* Gold accent divider */}
          <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
            <span className="w-12 h-px bg-gradient-to-r from-transparent to-gold-500" />
            <span className="w-2 h-2 rotate-45 border border-gold-500/60" />
            <span className="w-12 h-px bg-gradient-to-l from-transparent to-gold-500" />
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-warm-300 leading-[1.7] sm:leading-[1.8] max-w-[42rem] mb-10 md:mb-12 mx-auto">
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary group"
            >
              {t("cta_primary")}
              {isRtl ? (
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              ) : (
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </Link>
            <a
              href={getWhatsAppUrl(
                siteConfig.whatsapp,
                isRtl
                  ? "مرحباً، أريد التواصل"
                  : "Hello, I would like to contact you"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              <MessageCircle className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
              {t("cta_secondary")}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent pointer-events-none" />
    </section>
  );
}
