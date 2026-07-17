import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/home/Hero';
import { StatsBand } from '@/components/home/StatsBand';
import { WhyUs } from '@/components/home/WhyUs';
import { PracticeAreas } from '@/components/home/PracticeAreas';
import { CorporateSpotlight } from '@/components/home/CorporateSpotlight';
import { Process } from '@/components/home/Process';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { BlogSection } from '@/components/home/BlogSection';
import { CtaBand } from '@/components/home/CtaBand';
import type { Locale } from '@/types';

const meta = {
  ar: {
    title: "الرئيسية",
    description: "مكتب محاماة متخصصون بمختلف القضايا. فريق عمل يتمتع بخبرة واسعة وعلى درجات علمية رفيعة المستوى في خدمة الشركات والمؤسسات والأفراد في خميس مشيط.",
  },
  en: {
    title: "Home",
    description: "A specialized law firm offering comprehensive legal services. Our experienced team serves companies, institutions, and individuals across Saudi Arabia.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata({
    locale,
    title: meta[locale].title,
    description: meta[locale].description,
    path: "/",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero locale={locale} />
      <StatsBand locale={locale} />
      <WhyUs locale={locale} />
      <PracticeAreas locale={locale} />
      <CorporateSpotlight locale={locale} />
      <Process locale={locale} />
      <TestimonialsSection locale={locale} />
      <BlogSection locale={locale} />
      <CtaBand locale={locale} />
    </>
  );
}
