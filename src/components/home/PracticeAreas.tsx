"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Scale, Shield, BookOpen, Briefcase, ArrowRight, ArrowLeft } from "lucide-react";
import { type Locale } from "@/types";
import { EyebrowTag } from "@/components/ui/EyebrowTag";

const services = [
  { icon: Scale, key: "corporate" },
  { icon: Shield, key: "litigation" },
  { icon: BookOpen, key: "contracts" },
  { icon: Briefcase, key: "labor" },
  { icon: Shield, key: "debtCollection" },
  { icon: BookOpen, key: "notarization" },
] as const;

interface PracticeAreasProps {
  locale: Locale;
}

export function PracticeAreas({ locale }: PracticeAreasProps) {
  const t = useTranslations("services");
  const isRtl = locale === "ar";

  return (
    <section className="bg-warm-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-10 md:mb-12">
          <div className="flex justify-center mb-4">
            <EyebrowTag label={t("eyebrow")} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-navy-900 leading-[1.15] mb-4 text-balance"
            style={{ fontFamily: "var(--font-heading-ar)" }}
          >
            {t("title")}
          </h2>
          <p className="text-warm-500 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.key}
                href={`/${locale}/services#${service.key}`}
                className="group flex flex-col h-full bg-white rounded-2xl border border-warm-100/60 hover:border-gold-400/30 hover:shadow-[0_4px_20px_rgba(184,149,60,0.2)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Consistent gold top strip */}
                <div className="h-1.5 bg-gradient-to-r from-gold-400/30 via-gold-400/15 to-transparent" />
                <div className="p-5 md:p-7 flex flex-col flex-1">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-gold-400/10 flex items-center justify-center mb-5 group-hover:bg-gold-400/20 transition-colors duration-300">
                    <Icon aria-hidden="true" className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gold-400" />
                  </div>
                  <h3
                    className="font-semibold text-navy-900 mb-3 text-xl group-hover:text-gold-400 transition-colors duration-300"
                    style={{ fontFamily: "var(--font-heading-ar)" }}
                  >
                    {t(`${service.key}.title`)}
                  </h3>
                  <p className="text-warm-500 text-sm leading-[1.8] grow">
                    {t(`${service.key}.description`)}
                  </p>
                  <div className="mt-auto flex items-center gap-1.5 text-gold-400 text-xs font-medium pt-4">
                    <span>{t("view_all")}</span>
                    {isRtl ? (
                      <ArrowLeft aria-hidden="true" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" />
                    ) : (
                      <ArrowRight aria-hidden="true" className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-10 md:mt-12">
          <Link href={`/${locale}/services`} className="inline-flex items-center gap-2 text-gold-400 font-medium hover:text-gold-300 transition-colors duration-200 group">
            <span>{t("view_all")}</span>
            {isRtl ? (
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            ) : (
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
