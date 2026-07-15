import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import WhyUs from "@/components/home/WhyUs";
import PracticeAreas from "@/components/home/PracticeAreas";
import CorporateSpotlight from "@/components/home/CorporateSpotlight";
import Process from "@/components/home/Process";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import BlogSection from "@/components/home/BlogSection";
import CtaBand from "@/components/home/CtaBand";

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
    title: typed === "ar" ? "الرئيسية" : "Home",
    description: siteConfig.description[typed],
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typed = locale as Locale;

  setRequestLocale(typed);

  return (
    <>
      <Hero locale={typed} />
      <StatsBand locale={typed} />
      <WhyUs locale={typed} />
      <PracticeAreas locale={typed} />
      <CorporateSpotlight locale={typed} />
      <Process locale={typed} />
      <TestimonialsSection locale={typed} />
      <BlogSection locale={typed} />
      <CtaBand locale={typed} />
    </>
  );
}
