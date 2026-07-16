import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Heart, Award, Eye, Target, Scale, Shield, Users, Briefcase } from "lucide-react";

import { siteConfig, type Locale } from "@/types";
import { CtaBand } from "@/components/home/CtaBand";
import { EyebrowTag } from "@/components/ui/EyebrowTag";

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
const valueKeys: ValueKey[] = ["integrity", "excellence", "confidentiality", "professionalism"];

const statKeys = ["years", "cases", "clients", "practiceAreas"] as const;
const statValues = ["+20", "+150", "+100", "+6"] as const;
const statIcons = [Scale, Shield, Users, Briefcase] as const;

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typed = locale as Locale;

  setRequestLocale(typed);

  const t = await getTranslations("about");
  const tStats = await getTranslations("stats");

  return (
    <main>
      {/* ──────────────────────────────────────────
          Section 1 — Executive Hero
      ────────────────────────────────────────── */}
      <section className="relative bg-navy-950 py-28 md:py-36 overflow-hidden">
        {/* Background — subtle grid pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>

        {/* Background — ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] max-md:w-[400px] max-md:h-[400px]"
            style={{ background: "radial-gradient(circle, rgba(184,149,60,0.03) 0%, transparent 65%)" }}
          />
        </div>

        {/* Gold accent line — top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <EyebrowTag label={typed === "ar" ? "عن المكتب" : "About the Firm"} />
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]"
          >
            {t("title")}
          </h1>

          <div className="mt-6 h-[2px] w-16 mx-auto bg-gradient-to-r from-gold-500 to-gold-300" />

          <p className="mt-8 text-lg md:text-xl text-warm-300 max-w-2xl mx-auto leading-relaxed">
            {typed === "ar"
              ? "مكتب محاماة سعودي متخصص يقدم خدمات قانونية شاملة للشركات والمؤسسات والأفراد"
              : "A Saudi-based law firm delivering comprehensive legal services to corporations, institutions, and individuals"}
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 2 — About the Firm (Editorial)
      ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Text column */}
            <div>
              <div className="mb-6">
                <EyebrowTag label={typed === "ar" ? "من نحن" : "Who We Are"} />
              </div>

              <h2
                className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight leading-[1.15] mb-6"
              >
                {t("whoWeAre.title")}
              </h2>

              <div className="h-[2px] w-12 bg-gradient-to-r from-gold-500 to-gold-300 mb-8" />

              <p className="text-warm-600 text-lg leading-[1.9]">
                {t("whoWeAre.content")}
              </p>
            </div>

            {/* Abstract visual column — geometric monogram */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gold-200/40" />
                {/* Inner ring */}
                <div className="absolute inset-8 rounded-full border border-gold-300/20" />
                {/* Center circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-40 h-40 md:w-48 md:h-48 rounded-full bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center shadow-warm">
                    <span
                      className="text-5xl md:text-6xl font-bold text-gold-400/80"
                      style={{ fontFamily: "var(--font-heading-ar)" }}
                    >
                      {typed === "ar" ? "ش" : "AS"}
                    </span>
                  </div>
                </div>
                {/* Decorative gold dots */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold-400/40" />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold-400/40" />
                <div className="absolute left-8 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold-400/40" />
                <div className="absolute right-8 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-gold-400/40" />
                {/* Corner accents */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gold-400/30" />
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-gold-400/30" />
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-gold-400/30" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-[2px] h-6 bg-gold-400/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 3 — Vision & Mission (Side-by-Side)
      ────────────────────────────────────────── */}
      <section className="bg-navy-950 py-20 md:py-28 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/4 w-[500px] h-[500px] max-md:w-[300px] max-md:h-[300px]"
            style={{ background: "radial-gradient(circle, rgba(184,149,60,0.02) 0%, transparent 65%)" }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] max-md:w-[250px] max-md:h-[250px]"
            style={{ background: "radial-gradient(circle, rgba(184,149,60,0.015) 0%, transparent 65%)" }}
          />
        </div>

        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* Vision card */}
            <div className="relative rounded-2xl border border-gold-400/15 bg-navy-900/60 p-8 md:p-10">
              {/* Top gold accent */}
              <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/10">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold-400 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>

              <h3
                className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4"
              >
                {t("vision.title")}
              </h3>

              <div className="h-[2px] w-10 bg-gradient-to-r from-gold-500 to-gold-300 mb-5" />

              <p className="text-warm-300 leading-[1.9] text-[15px]">
                {t("vision.content")}
              </p>
            </div>

            {/* Mission card */}
            <div className="relative rounded-2xl border border-gold-400/15 bg-navy-900/60 p-8 md:p-10">
              {/* Top gold accent */}
              <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-gold-400/10">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold-400 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h3
                className="text-2xl md:text-3xl font-bold text-white tracking-tight mb-4"
              >
                {t("mission.title")}
              </h3>

              <div className="h-[2px] w-10 bg-gradient-to-r from-gold-500 to-gold-300 mb-5" />

              <p className="text-warm-300 leading-[1.9] text-[15px]">
                {t("mission.content")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 4 — Our Expertise (Stats)
      ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-6">
              <EyebrowTag label={typed === "ar" ? "إنجازاتنا" : "Our Track Record"} />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight leading-[1.15]"
            >
              {typed === "ar" ? "أرقام تتحدث عن تميزنا" : "Numbers That Speak to Our Excellence"}
            </h2>
            <div className="mt-5 h-[2px] w-12 mx-auto bg-gradient-to-r from-gold-500 to-gold-300" />
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {statKeys.map((key, i) => (
              <div
                key={key}
                className="group relative rounded-2xl border border-navy-100 bg-warm-50 p-6 md:p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gold-200"
              >
                {/* Top gold accent on hover */}
                <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-gold-400/0 to-transparent transition-all duration-300 group-hover:via-gold-400/40" />

                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 transition-colors duration-300 group-hover:bg-navy-800">
                  {(() => { const Icon = statIcons[i]; return <Icon className="h-5 w-5 text-gold-400" />; })()}
                </div>

                <div
                  className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight"
                  style={{ fontFamily: "var(--font-heading-ar)" }}
                >
                  {statValues[i]}
                </div>

                <div className="mt-2 text-sm font-medium text-warm-500 uppercase tracking-wide">
                  {tStats(key)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 5 — Core Values (Premium Treatment)
      ────────────────────────────────────────── */}
      <section className="bg-warm-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex justify-center mb-6">
              <EyebrowTag label={typed === "ar" ? "قيمنا" : "Our Values"} />
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-navy-900 tracking-tight leading-[1.15]"
            >
              {t("values.title")}
            </h2>
            <div className="mt-5 h-[2px] w-12 mx-auto bg-gradient-to-r from-gold-500 to-gold-300" />
            <p className="mt-6 text-warm-600 text-lg max-w-xl mx-auto leading-relaxed">
              {typed === "ar"
                ? "المبادئ التي نعمل بها في كل ما نقدمه لعملائنا"
                : "The principles that guide everything we deliver to our clients"}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {valueKeys.map((key) => {
              const Icon = valueIcons[key];

              return (
                <div
                  key={key}
                  className="group relative rounded-2xl border border-navy-100 bg-white p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gold-200"
                >
                  {/* Left gold accent bar */}
                  <div className="absolute top-6 bottom-6 left-0 w-[3px] rounded-full bg-gold-400/0 transition-all duration-300 group-hover:bg-gold-400/60" />

                  <div className="flex gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-900 transition-colors duration-300 group-hover:bg-navy-800">
                      <Icon className="h-5 w-5 text-gold-400" />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-navy-900 mb-2">
                        {t(`values.items.${key}.title`)}
                      </h3>
                      <p className="text-warm-600 leading-relaxed text-[15px]">
                        {t(`values.items.${key}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Section 6 — CTA
      ────────────────────────────────────────── */}
      <CtaBand locale={typed} />
    </main>
  );
}
