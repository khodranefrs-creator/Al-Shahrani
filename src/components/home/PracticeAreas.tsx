"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Scale, Shield, BookOpen, Briefcase, ArrowRight } from "lucide-react";
import { type Locale } from "@/types";
import { EyebrowTag } from "@/components/ui/EyebrowTag";

const mainServices = [
  {
    icon: Scale,
    key: "corporate",
    gradient: "from-gold-400/20 via-gold-400/[0.06] to-transparent",
  },
  {
    icon: Shield,
    key: "litigation",
    gradient: "from-gold-400/20 via-gold-400/[0.06] to-transparent",
  },
] as const;

const secondaryServices = [
  {
    icon: BookOpen,
    key: "contracts",
    gradient: "from-gold-400/[0.12] via-gold-400/[0.03] to-transparent",
  },
  {
    icon: Briefcase,
    key: "labor",
    gradient: "from-gold-400/[0.12] via-gold-400/[0.03] to-transparent",
  },
  {
    icon: Shield,
    key: "debtCollection",
    gradient: "from-gold-400/[0.12] via-gold-400/[0.03] to-transparent",
  },
  {
    icon: BookOpen,
    key: "notarization",
    gradient: "from-gold-400/[0.12] via-gold-400/[0.03] to-transparent",
  },
] as const;

interface PracticeAreasProps {
  locale: Locale;
}

export function PracticeAreas({ locale }: PracticeAreasProps) {
  const t = useTranslations("services");

  return (
    <section className="bg-warm-50 relative">
      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gold-400/[0.15]" />

      <div className="section-padding container-custom">
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
          <EyebrowTag label={t("eyebrow")} />
          <h2
            className="text-[clamp(1.25rem,3vw,2.25rem)] font-bold text-navy-900 mb-4"
            style={{ fontFamily: "var(--font-heading-ar)" }}
          >
            {t("title")}
          </h2>
          <p className="text-warm-500 leading-[1.7] max-w-2xl mx-auto">{t("description")}</p>
        </div>

        {/* Featured services — larger cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          {mainServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.key}
                href={`/${locale}/services#${service.key}`}
                className="group relative block rounded-[var(--radius-panel)] bg-white overflow-hidden border border-warm-100 hover:border-gold-400/30 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(184,149,60,0.08)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} pointer-events-none`} />
                <div className="relative p-8 md:p-10">
                  <div className="w-14 h-14 rounded-xl bg-gold-400/10 flex items-center justify-center mb-6 ring-1 ring-gold-400/[0.12] group-hover:ring-gold-400/30 group-hover:bg-gold-400/[0.15] transition-all duration-500">
                    <Icon aria-hidden="true" className="w-7 h-7 text-gold-400" />
                  </div>
                  <h3
                    className="text-lg md:text-xl font-bold text-navy-900 mb-3"
                    style={{ fontFamily: "var(--font-heading-ar)" }}
                  >
                    {t(`${service.key}.title`)}
                  </h3>
                  <p className="text-sm text-warm-500 leading-[1.7]">
                    {t(`${service.key}.description`)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Secondary services — compact uniform grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {secondaryServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.key}
                href={`/${locale}/services#${service.key}`}
                className="group relative block rounded-[var(--radius-surface)] bg-white overflow-hidden border border-warm-100 hover:border-gold-400/30 transition-all duration-500 hover:shadow-[0_6px_20px_rgba(184,149,60,0.06)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} pointer-events-none`} />
                <div className="relative p-6 md:p-7">
                  <div className="w-11 h-11 rounded-lg bg-gold-400/10 flex items-center justify-center mb-4 ring-1 ring-gold-400/[0.10] group-hover:ring-gold-400/25 group-hover:bg-gold-400/[0.14] transition-all duration-500">
                    <Icon aria-hidden="true" className="w-5 h-5 text-gold-400" />
                  </div>
                  <h3
                    className="text-sm md:text-base font-bold text-navy-900 mb-1.5"
                    style={{ fontFamily: "var(--font-heading-ar)" }}
                  >
                    {t(`${service.key}.title`)}
                  </h3>
                  <p className="text-xs text-warm-500 leading-[1.7]">
                    {t(`${service.key}.description`)}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <Link href={`/${locale}/services`} className="text-gold-400 font-semibold text-sm inline-flex items-center gap-2 group">
            {t("view_all")}
            <ArrowRight className="w-4 h-4 rtl:rotate-180 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
