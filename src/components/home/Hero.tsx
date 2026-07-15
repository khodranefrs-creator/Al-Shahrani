"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn, getWhatsAppUrl } from "@/lib/utils";
import { siteConfig, type Locale } from "@/types";
import {
  Scale,
  Shield,
  FileText,
  Users,
  ArrowLeft,
  ArrowRight,
  MapPin,
} from "lucide-react";

interface HeroProps {
  locale: Locale;
}

const trustItems = [
  { icon: Scale, key: "expertise" },
  { icon: Shield, key: "confidentiality" },
  { icon: FileText, key: "comprehensive" },
  { icon: Users, key: "clients" },
] as const;

export function Hero({ locale }: HeroProps) {
  const t = useTranslations("hero");
  const ArrowIcon = locale === "ar" ? ArrowLeft : ArrowRight;

  return (
    <section
      className="relative min-h-screen flex items-center bg-hero-premium overflow-hidden"
      aria-label={t("title")}
    >
      {/* Subtle architectural grid */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <div className="h-full w-full" style={{
          backgroundImage: "linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
      </div>

      {/* Radial light accent */}
      <div className="absolute top-1/4 start-1/4 w-[600px] h-[600px] rounded-full bg-gold-500/[0.04] blur-[120px]" aria-hidden="true" />

      {/* Gold accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 md:py-36 lg:py-44">
        <div className="max-w-3xl">
          {/* Location */}
          <div className="mb-8 animate-[fade-in_0.6s_ease-out_forwards]">
            <span className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 tracking-wider uppercase">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              {locale === "ar" ? "خميس مشيط، المملكة العربية السعودية" : "Khamis Mushait, Saudi Arabia"}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.15] mb-8 animate-[slide-up_0.6s_ease-out_0.1s_forwards] opacity-0"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-white/60 max-w-2xl mb-12 animate-[slide-up_0.6s_ease-out_0.2s_forwards] opacity-0"
          >
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-20 animate-[slide-up_0.6s_ease-out_0.3s_forwards] opacity-0">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-semibold rounded-lg",
                "bg-gold-500 text-navy-900 hover:bg-gold-400 active:bg-gold-600",
                "shadow-xl shadow-gold-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/30"
              )}
            >
              {t("cta_primary")}
              <ArrowIcon className="w-5 h-5" aria-hidden="true" />
            </Link>

            <a
              href={getWhatsAppUrl(
                siteConfig.whatsapp,
                locale === "ar" ? "مرحباً، أريد التواصل مع المكتب" : "Hello, I would like to contact the firm"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center gap-2 px-10 py-4 text-base font-medium rounded-lg",
                "border border-white/15 text-white/90 hover:bg-white/5 hover:border-white/25",
                "active:bg-white/5 transition-all duration-300"
              )}
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("cta_secondary")}
            </a>
          </div>

          {/* Trust — integrated */}
          <div
            className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-white/10 animate-[fade-in_0.6s_ease-out_0.5s_forwards] opacity-0"
            role="list"
          >
            {trustItems.map((item, index) => (
              <div key={item.key} className="flex items-center gap-2.5" role="listitem">
                <item.icon className="w-4 h-4 text-gold-400/70" aria-hidden="true" />
                <span className="text-sm text-white/50 font-medium">
                  {locale === "ar"
                    ? item.key === "expertise" ? "خبرة قانونية"
                      : item.key === "confidentiality" ? "سرية تامة"
                        : item.key === "comprehensive" ? "خدمات شاملة" : "عملاء موثوقون"
                    : item.key === "expertise" ? "Legal Expertise"
                      : item.key === "confidentiality" ? "Absolute Confidentiality"
                        : item.key === "comprehensive" ? "Comprehensive Services" : "Trusted Clients"}
                </span>
                {index < trustItems.length - 1 && (
                  <div className="hidden sm:block w-px h-4 bg-white/10 ms-3" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
