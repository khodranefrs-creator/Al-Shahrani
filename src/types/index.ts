export type Locale = "ar" | "en";

export const locales: Locale[] = ["ar", "en"];
export const defaultLocale: Locale = "ar";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getDirection(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function getLangAttribute(locale: Locale): string {
  return locale === "ar" ? "ar" : "en";
}

export const siteConfig = {
  name: {
    ar: "مكتب المحامي محمد حمود الشهراني للمحاماة والاستشارات القانونية",
    en: "Al-Shahrani Law Firm — Legal Consultations",
  },
  shortName: {
    ar: "مكتب الشهراني",
    en: "Al-Shahrani",
  },
  description: {
    ar: "مكتب محاماة متخصصون بمختلف القضايا. فريق عمل يتمتع بخبرة واسعة وعلى درجات علمية رفيعة المستوى في خدمة الشركات والمؤسسات والأفراد.",
    en: "A specialized law firm offering comprehensive legal services. Our experienced team serves companies, institutions, and individuals across Saudi Arabia.",
  },
  phone: ["0555745209", "0502446030"],
  whatsapp: "+966555745209",
  email: "lowmohsh09@gmail.com",
  social: "@lawyershmoh",
  address: {
    ar: "خميس مشيط، حي حسام، طريق المحالة، مقابل المستشفى، بعد العثيم، مكتب رقم 5، الدور الأرضي",
    en: "Khamis Mushait, Al-Hussam District, Al-Mahala Road, opposite the hospital, after Al-Othaim, Office No. 5, Ground Floor",
  },
  addressFull: {
    ar: "ال المملكة العربية السعودية، خميس مشيط، حي حسام، طريق المحالة، مقابل المستشفى، بعد العثيم، مكتب رقم 5، الدور الأرضي",
    en: "Office No. 5, Ground Floor, Al-Mahala Road, Al-Hussam District, Khamis Mushait, Saudi Arabia",
  },
} as const;
