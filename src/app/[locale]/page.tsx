import { setRequestLocale } from 'next-intl/server';
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
