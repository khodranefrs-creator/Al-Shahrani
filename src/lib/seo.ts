import { siteConfig, type Locale } from "@/types";

export function generateServiceSchema(service: {
  title: string;
  titleEn?: string;
  slug: string;
  summary?: string;
  summaryEn?: string;
  locale: Locale;
}) {
  const name = service.locale === "ar" ? service.title : (service.titleEn || service.title);
  const desc = service.locale === "ar" ? (service.summary || service.title) : (service.summaryEn || service.summary || service.titleEn || service.title);

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description: desc,
    provider: {
      "@type": "Attorney",
      name: siteConfig.name[service.locale],
      address: {
        "@type": "PostalAddress",
        streetAddress: service.locale === "ar" ? siteConfig.address.ar : siteConfig.address.en,
        addressCountry: "SA",
      },
      telephone: siteConfig.phone[0],
    },
    areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
  };
}

export function generateFirmSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: siteConfig.name[locale],
    description: siteConfig.description[locale],
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://alshahrani.com",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address[locale],
      addressCountry: "SA",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Khamis Mushait",
      },
      {
        "@type": "State",
        name: "Aseer",
      },
    ],
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "17:00",
    },
  };
}

export function generateBlogPostSchema(post: {
  title: string;
  titleEn?: string;
  slug: string;
  excerpt?: string;
  excerptEn?: string;
  publishedAt?: string | Date;
  author?: string;
  authorEn?: string;
  locale: Locale;
}) {
  const title = post.locale === "ar" ? post.title : (post.titleEn || post.title);
  const desc = post.locale === "ar" ? (post.excerpt || post.title) : (post.excerptEn || post.excerpt || post.titleEn || post.title);
  const author = post.locale === "ar" ? (post.author || siteConfig.shortName.ar) : (post.authorEn || post.author || siteConfig.shortName.en);
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://alshahrani.com"}/${post.locale}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: desc,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name[post.locale],
    },
    url,
    datePublished: post.publishedAt,
  };
}
