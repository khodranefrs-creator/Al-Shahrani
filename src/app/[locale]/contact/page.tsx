import Image from "next/image";
import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";

import ConsultationForm from "@/components/forms/ConsultationForm";
import { type Locale } from "@/types";
import { generatePageMetadata } from "@/lib/metadata";

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

  return generatePageMetadata({
    locale: typed,
    title: typed === "ar" ? "تواصل معنا" : "Contact Us",
    description:
      typed === "ar"
        ? "تواصل مع مكتب الشهراني للاستشارات القانونية. نحن هنا لمساعدتك في جميع احتياجاتك القانونية."
        : "Contact Al-Shahrani Law Firm for legal consultations. We are here to help with all your legal needs.",
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typed = locale as Locale;

  setRequestLocale(typed);

  const t = await getTranslations("contact");

  return (
    <main>
      <section className="bg-navy-gradient py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl tracking-tight">
            {t("title")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-navy-200">
            {t("subtitle")}
          </p>
          <p className="mx-auto mt-4 text-sm text-gold-400">
            {typed === "ar"
              ? "الاستشارة الأولى مجانية"
              : "Initial consultation free of charge"}
          </p>
        </div>
      </section>

      {/* Office photo — TODO: Replace with official firm photography supplied by client */}
      <div className="relative mx-auto -mt-8 max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="/images/office/reception.jpg"
            alt={
              typed === "ar"
                ? "مكتب الاستقبال في مكتب الشهراني للمحاماة"
                : "Reception area at Al-Shahrani Law Firm"
            }
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/20 via-transparent to-transparent" aria-hidden="true" />
        </div>
      </div>

      <ConsultationForm locale={typed} />
    </main>
  );
}
