import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Inter, Noto_Naskh_Arabic } from "next/font/google";
import { getDirection, locales, type Locale } from "@/types";
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
      ? `${notoNaskh.variable} ${inter.variable}`
      : `${inter.variable} ${notoNaskh.variable}`;

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
