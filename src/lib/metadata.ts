import type { Metadata } from "next";
import { siteConfig, type Locale } from "@/types";

export function generatePageMetadata(params: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const { locale, title, description, path, ogImage } = params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://alshahrani.com";
  const url = `${baseUrl}/${locale}${path}`;
  const ogUrl = ogImage || `${baseUrl}/og/${path.replace(/\//g, "-") || "home"}.png`;

  return {
    title: `${title} | ${siteConfig.shortName[locale]}`,
    description,
    alternates: {
      canonical: url,
      languages: {
        "ar": `${baseUrl}/ar${path}`,
        "en": `${baseUrl}/en${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name[locale],
      images: [
        {
          url: ogUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === "ar" ? "ar_SA" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
  };
}
