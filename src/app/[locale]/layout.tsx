import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Inter, Noto_Naskh_Arabic, Playfair_Display } from "next/font/google";
import { getDirection, locales, type Locale } from "@/types";
import { siteConfig } from "@/types";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipToContent } from "@/components/ui/SkipToContent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const notoNaskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-naskh",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  const direction = getDirection(locale as Locale);
  const fontVariables =
    locale === "ar"
      ? `${notoNaskh.variable} ${inter.variable} ${playfair.variable}`
      : `${inter.variable} ${notoNaskh.variable} ${playfair.variable}`;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alshahrani.com";
  const typed = locale as Locale;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.name[typed],
    alternateName: siteConfig.shortName[typed],
    description: siteConfig.description[typed],
    url: `${baseUrl}/${typed}`,
    logo: `${baseUrl}/alslogo-cropped.png`,
    image: `${baseUrl}/alslogo-cropped.png`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addressFull[typed],
      addressCountry: "SA",
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: typed === "ar" ? "خدمات قانونية" : "Legal Services",
    },
  };

  return (
    <html
      lang={locale}
      dir={direction}
      className={`${fontVariables} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#0c1426" />
        <meta name="theme-color" content="#0c1426" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{
          fontFamily: locale === "ar"
            ? "var(--font-noto-naskh), var(--font-inter), system-ui, sans-serif"
            : "var(--font-inter), var(--font-noto-naskh), system-ui, sans-serif",
        }}
      >
        <NextIntlClientProvider locale={locale}>
          <SkipToContent />
          <Header locale={locale as Locale} />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer locale={locale as Locale} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
