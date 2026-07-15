"use client";

import Image from "next/image";
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
      {/* Background image — TODO: Replace with official firm photography supplied by client */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/law-firm-office.jpg"
          alt={
            locale === "ar"
              ? "مبنى مكتب الشهراني للمحاماة والاستشارات القانونية في خميس مشيط"
              : "Al-Shahrani Law Firm office building in Khamis Mushait"
          }
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-navy-950/75" aria-hidden="true" />
      </div>

      {/* Luxury ambient glow — gold radial, ~4% opacity */}
      <div
        className="hero-glow"
        style={{
          width: "800px",
          height: "800px",
          top: "-20%",
          right: "-10%",
          background: "radial-gradient(circle, var(--color-gold-400) 0%, transparent 70%)",
        }}
      />
      <div
        className="hero-glow"
        style={{
          width: "600px",
          height: "600px",
          bottom: "-30%",
          left: "-5%",
          background: "radial-gradient(circle, var(--color-gold-300) 0%, transparent 70%)",
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "200px 200px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40 lg:py-48">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="text-gold-400 font-medium tracking-wide text-sm uppercase mb-6">
            {locale === "ar" ? "خميس مشيط، المملكة العربية السعودية" : "Khamis Mushait, Saudi Arabia"}
          </p>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-[1.15]"
            style={{ fontFamily: "var(--font-heading-ar)" }}
          >
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-warm-300 leading-relaxed mb-12 max-w-2xl">
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 bg-gold-500 text-navy-950 font-semibold",
                "hover:bg-gold-400 active:bg-gold-600 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2",
                "transition-smooth text-base sm:text-lg"
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
                "inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 border-2 border-warm-400/30 text-white font-semibold",
                "hover:border-gold-400 hover:text-gold-400 focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2",
                "transition-smooth text-base sm:text-lg"
              )}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current me-2" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("cta_secondary")}
            </a>
          </div>

          {/* Trust micro-copy */}
          <p className="text-warm-400 text-sm">
            {locale === "ar" ? "الاستشارة الأولى مجانية" : "Initial consultation free of charge"}
          </p>
        </div>
      </div>

      {/* Bottom gold accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
    </section>
  );
}
