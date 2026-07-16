import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Shield, Zap, Users, FileCheck, Scale, Building2, Gavel } from "lucide-react";

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

const highlights = [
  { icon: Scale, key: "years" },
  { icon: Building2, key: "institutions" },
  { icon: Gavel, key: "expertise" },
] as const;

const valueIcons = {
  integrity: Shield,
  excellence: Zap,
  confidentiality: Users,
  professionalism: FileCheck,
} as const;

type ValueKey = keyof typeof valueIcons;
const valueKeys: ValueKey[] = ["integrity", "excellence", "confidentiality", "professionalism"];

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
    <main>
      {/* Hero */}
      <section className="section-padding bg-navy-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-md:w-[350px] max-md:h-[350px]"
            style={{ background: "radial-gradient(circle, rgba(184,149,60,0.03) 0%, transparent 65%)" }}
          />
        </div>

        <div className="relative container-custom">
          <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-bold text-white mb-6 tracking-tight">
            {t("title")}
          </h1>
          <div className="w-20 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mb-8" />
          <p className="text-lg leading-[1.8] text-warm-300 max-w-2xl mx-auto">
            {typed === "ar"
              ? "مكتب محاماة سعودي متخصص يقدم خدمات قانونية شاملة للشركات والمؤسسات والأفراد"
              : "A Saudi-based law firm delivering comprehensive legal services to corporations, institutions, and individuals"}
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg leading-[1.8] mb-6 text-warm-800">
              {t("whoWeAre.content")}
            </p>
            <p className="text-lg leading-[1.8] mb-6 text-warm-800">
              {typed === "ar"
                ? "نسعى دائماً لتوفير أفضل الحلول القانونية التي تلبي احتياجات عملائنا وتحقق أهدافهم. نؤمن بأن النجاح يتحقق من خلال فهم عميق للقانون وتفهم دقيقة لاحتياجات العملاء."
                : "We always strive to provide the best legal solutions that meet our clients' needs and achieve their objectives. We believe success comes through a deep understanding of the law and a precise comprehension of our clients' requirements."}
            </p>
            <p className="text-lg leading-[1.8] text-warm-800">
              {typed === "ar"
                ? "فريقنا من المحامين المتميزين يجمع بين الخبرة العملية الواسعة والكفاءات الأكاديمية العالية، مما يمكّننا من تقديم خدمات قانونية متكاملة بأعلى معايير الجودة والاحترافية."
                : "Our team of distinguished lawyers combines extensive practical experience with high academic qualifications, enabling us to deliver comprehensive legal services at the highest standards of quality and professionalism."}
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 left-1/4 w-[500px] h-[500px] max-md:w-[300px] max-md:h-[300px]"
            style={{ background: "radial-gradient(circle, rgba(184,149,60,0.02) 0%, transparent 65%)" }}
          />
        </div>

        <div className="relative container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 rounded-panel border border-gold-400/15 bg-navy-900/60">
              <h2 className="text-2xl font-bold leading-[1.15] mb-4 text-gold-400">
                {t("vision.title")}
              </h2>
              <div className="w-12 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mb-5" />
              <p className="leading-[1.8] text-warm-300 text-[15px]">
                {t("vision.content")}
              </p>
            </div>
            <div className="p-8 rounded-panel border border-gold-400/15 bg-navy-900/60">
              <h2 className="text-2xl font-bold leading-[1.15] mb-4 text-gold-400">
                {t("mission.title")}
              </h2>
              <div className="w-12 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mb-5" />
              <p className="leading-[1.8] text-warm-300 text-[15px]">
                {t("mission.content")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us + Values */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] mb-6 text-navy-900">
                {typed === "ar" ? "لماذا تختار مكتبنا" : "Why Choose Us"}
              </h2>
              <div className="w-16 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mb-8" />
              <div className="space-y-4">
                {highlights.map(({ icon: Icon, key }) => (
                  <div key={key} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-gold-600" />
                    </div>
                    <span className="text-warm-700 text-sm">
                      {typed === "ar"
                        ? key === "years" ? "خبرة تمتد لأكثر من 20 عاماً" : key === "institutions" ? "خدمة الشركات والمؤسسات الكبرى" : "خبرة قانونية متنوعة وشاملة"
                        : key === "years" ? "Over 20 years of legal experience" : key === "institutions" ? "Serving major companies and institutions" : "Diverse and comprehensive legal expertise"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-card bg-navy-950 overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-gold-400" />
                </div>
                <p className="text-warm-400 text-sm">
                  {typed === "ar" ? "مكتب الشهراني للمحاماة" : "Al-Shahrani Law Firm"}
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] text-center mb-12 text-navy-900">
            {t("values.title")}
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mb-12" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {valueKeys.map((key) => {
              const Icon = valueIcons[key];
              return (
                <div
                  key={key}
                  className="p-6 rounded-panel bg-white border border-warm-200 shadow-subtle hover-lift transition-all"
                >
                  <div className="w-12 h-12 rounded-control bg-gold-100 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gold-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-navy-900">
                    {t(`values.items.${key}.title`)}
                  </h3>
                  <p className="text-sm leading-[1.7] text-warm-600">
                    {t(`values.items.${key}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand locale={typed} />
    </main>
  );
}
