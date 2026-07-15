import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Heart, Award, Eye, Target } from "lucide-react";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { siteConfig, type Locale } from "@/types";

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typed = locale as Locale;

  return {
    title: typed === "ar" ? "من نحن" : "About Us",
    description: siteConfig.description[typed],
  };
}

const valueIcons = {
  integrity: Heart,
  excellence: Award,
  confidentiality: Eye,
  professionalism: Target,
} as const;

type ValueKey = keyof typeof valueIcons;

const valueKeys: ValueKey[] = [
  "integrity",
  "excellence",
  "confidentiality",
  "professionalism",
];

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typed = locale as Locale;

  setRequestLocale(typed);

  const t = await getTranslations("about");

  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy-gradient py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1
            className="text-4xl font-bold text-white md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {t("title")}
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("whoWeAre.title")}
            subtitle={t("whoWeAre.content")}
          />
        </div>
      </section>

      {/* Vision */}
      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("vision.title")}
            subtitle={t("vision.content")}
          />
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("mission.title")}
            subtitle={t("mission.content")}
          />
        </div>
      </section>

      {/* Values */}
      <section className="bg-warm-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={t("values.title")}
            subtitle={
              typed === "ar"
                ? "المبادئ التي نعمل بها في كل ما نقدمه لعملائنا"
                : "The principles that guide everything we deliver to our clients"
            }
          />

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valueKeys.map((key) => {
              const Icon = valueIcons[key];

              return (
                <div
                  key={key}
                  className="group rounded-2xl border border-navy-100 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold-100 transition-colors duration-300 group-hover:bg-gold-200">
                    <Icon className="h-7 w-7 text-gold-600" />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-navy-900">
                    {t(`values.items.${key}.title`)}
                  </h3>

                  <p className="leading-relaxed text-navy-600">
                    {t(`values.items.${key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
