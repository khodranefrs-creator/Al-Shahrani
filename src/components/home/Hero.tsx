"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn, getWhatsAppUrl } from "@/lib/utils";
import { siteConfig, type Locale } from "@/types";

interface HeroProps {
  locale: Locale;
}

export function Hero({ locale }: HeroProps) {
  const t = useTranslations("hero");

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-950"
      aria-label={t("title")}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #070b15 0%, #0c1222 30%, #131d35 60%, #0c1222 100%)",
        }}
        aria-hidden="true"
      />

      {/* Subtle architectural grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,169,110,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="hero-glow"
        style={{
          width: "900px",
          height: "900px",
          top: "-25%",
          right: "-15%",
          background: "radial-gradient(circle, var(--color-gold-400) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 lg:py-44">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left — Content that dominates */}
          <div className="lg:col-span-7">
            {/* Tagline */}
            <p className="text-gold-400 font-semibold tracking-[0.2em] text-xs uppercase mb-8">
              {locale === "ar" ? "خميّس مشيط، المملكة العربية السعودية" : "Khamis Mushait, Saudi Arabia"}
            </p>

            {/* MASSIVE headline — the focal point */}
            <h1
              className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-white mb-8 leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-heading-ar)" }}
            >
              {t("title")}
            </h1>

            {/* Subtitle — restrained */}
            <p className="text-lg md:text-xl text-warm-300 leading-relaxed mb-12 max-w-xl">
              {t("subtitle")}
            </p>

            {/* CTAs — tight group */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/contact"
                className={cn(
                  "inline-flex items-center justify-center px-10 py-5 bg-gold-500 text-white font-bold",
                  "hover:bg-gold-400 active:bg-gold-600 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2",
                  "transition-smooth text-base shadow-lg shadow-gold-500/20"
                )}
              >
                {t("cta_primary")}
              </Link>
              <a
                href={getWhatsAppUrl(
                  siteConfig.whatsapp,
                  locale === "ar" ? "مرحباً، أريد التواصل مع المكتب" : "Hello, I would like to contact the firm"
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center px-10 py-5 border-2 border-white/20 text-white font-bold",
                  "hover:border-gold-400 hover:text-gold-400 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2",
                  "transition-smooth text-base"
                )}
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current me-2.5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {t("cta_secondary")}
              </a>
            </div>

            {/* Trust */}
            <p className="text-warm-500 text-sm">
              {locale === "ar" ? "الاستشارة الأولى مجاناً" : "Initial consultation free of charge"}
            </p>
          </div>

          {/* Right — Architectural legal panel */}
          <div className="lg:col-span-5 hidden lg:flex justify-end">
            <div className="relative w-full max-w-md">
              {/* Main panel */}
              <div className="relative aspect-[3/4] border border-white/[0.06] overflow-hidden">
                {/* Background */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(160deg, #0f1729 0%, #162038 40%, #1e2d4f 70%, #162038 100%)",
                  }}
                />

                {/* Architectural grid pattern inside */}
                <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
                  <div className="absolute top-0 start-0 w-full h-px bg-gradient-to-r from-gold-400 via-transparent to-transparent" />
                  <div className="absolute top-0 start-0 h-full w-px bg-gradient-to-b from-gold-400 via-transparent to-transparent" />
                  <div className="absolute top-1/3 start-0 w-full h-px bg-gold-400/20" />
                  <div className="absolute top-2/3 start-0 w-full h-px bg-gold-400/20" />
                  <div className="absolute top-0 start-1/3 h-full w-px bg-gold-400/20" />
                  <div className="absolute top-0 start-2/3 h-full w-px bg-gold-400/20" />
                </div>

                {/* Scale of justice — centered */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 120 120" className="w-28 h-28 text-gold-400/[0.08] fill-none stroke-current stroke-[0.4]" aria-hidden="true">
                    <path d="M60 15v55M30 35l30-15 30 15M20 80h80M30 80c0-12 0-22 7-30s7-18 7-30M90 80c0-12 0-22-7-30s-7-18-7-30" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Corner accents */}
                <div className="absolute top-5 start-5 w-12 h-12 border-t-2 border-s-2 border-gold-400/15" />
                <div className="absolute bottom-5 end-5 w-12 h-12 border-b-2 border-e-2 border-gold-400/15" />

                {/* Bottom text */}
                <div className="absolute bottom-8 start-0 end-0 text-center">
                  <p className="text-gold-400/20 text-[10px] tracking-[0.35em] uppercase font-semibold">
                    {locale === "ar" ? "مكتب محاماة" : "Law Firm"}
                  </p>
                  <p className="text-gold-400/10 text-[10px] tracking-[0.35em] uppercase font-semibold mt-1">
                    {locale === "ar" ? "التأسيس ٢٠٠٥" : "Est. 2005"}
                  </p>
                </div>
              </div>

              {/* Gold accent strip on the side */}
              <div className="absolute top-12 -end-px w-px h-24 bg-gradient-to-b from-gold-400/40 via-gold-400 to-gold-400/40" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />
    </section>
  );
}
