"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { cn, getWhatsAppUrl } from "@/lib/utils";
import { siteConfig, type Locale } from "@/types";
import { Badge } from "@/components/ui/Badge";
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

const PATTERN_SVG = `data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E`;

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
      className="relative min-h-screen flex items-center bg-navy-gradient overflow-hidden"
      aria-label={t("title")}
    >
      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("${PATTERN_SVG}")`,
          backgroundRepeat: "repeat",
        }}
        aria-hidden="true"
      />

      {/* Gold accent line at top */}
      <div
        className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div className="mb-8 animate-[fade-in_0.6s_ease-out_forwards]">
            <Badge variant="gold" className="gap-1.5">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              {locale === "ar" ? "خميس مشيط" : "Khamis Mushait"}
            </Badge>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-[slide-up_0.6s_ease-out_0.1s_forwards] opacity-0"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("title")}
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-navy-200 max-w-2xl mb-10 animate-[slide-up_0.6s_ease-out_0.2s_forwards] opacity-0"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {t("subtitle")}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-[slide-up_0.6s_ease-out_0.3s_forwards] opacity-0">
            <Link
              href="/contact"
              className={cn(
                "inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg",
                "bg-gold-500 text-navy-900 hover:bg-gold-400 active:bg-gold-600",
                "shadow-lg shadow-gold-500/20 transition-all duration-200"
              )}
            >
              {t("cta_primary")}
              <ArrowIcon className="w-5 h-5" aria-hidden="true" />
            </Link>

            <a
              href={getWhatsAppUrl(
                siteConfig.whatsapp,
                locale === "ar"
                  ? "مرحباً، أريد التواصل مع المكتب"
                  : "Hello, I would like to contact the firm"
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium rounded-lg",
                "border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30",
                "active:bg-white/5 transition-all duration-200"
              )}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("cta_secondary")}
            </a>
          </div>

          {/* Trust indicators */}
          <div
            className="flex flex-col sm:flex-row gap-6 sm:gap-10 pt-8 border-t border-white/10 animate-[fade-in_0.6s_ease-out_0.5s_forwards] opacity-0"
            role="list"
          >
            {trustItems.map((item) => (
              <div
                key={item.key}
                className="flex items-center gap-3"
                role="listitem"
              >
                <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-gold-400">
                  <item.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-navy-100">
                  {locale === "ar"
                    ? item.key === "expertise"
                      ? "خبرة قانونية"
                      : item.key === "confidentiality"
                        ? "سرية تامة"
                        : item.key === "comprehensive"
                          ? "خدمات شاملة"
                          : "عملاء موثوقون"
                    : item.key === "expertise"
                      ? "Legal Expertise"
                      : item.key === "confidentiality"
                        ? "Absolute Confidentiality"
                        : item.key === "comprehensive"
                          ? "Comprehensive Services"
                          : "Trusted Clients"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
