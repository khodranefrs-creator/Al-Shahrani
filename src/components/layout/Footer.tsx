import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig, type Locale } from "@/types";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/utils";

interface FooterProps {
  locale: Locale;
}

const LOGO_ALT = {
  ar: "شعار مكتب المحامي محمد حمود الشهراني",
  en: "Mohammed Hamoud Al-Shahrani Law Firm Logo",
} as const;

const serviceLinks = [
  { key: "corporate-law", ar: "القانون التجاري", en: "Corporate Law" },
  { key: "governance", ar: "الحوكمة المؤسسية", en: "Corporate Governance" },
  { key: "contracts", ar: "العقود", en: "Contracts" },
  { key: "ma", ar: "الاندماج والاستحواذ", en: "Mergers & Acquisitions" },
  { key: "litigation", ar: "التقاضي وتسوية المنازعات", en: "Dispute Resolution" },
  { key: "debt-collection", ar: "تحصيل الديون", en: "Debt Collection" },
];

const pageLinks = [
  { key: "home", ar: "الرئيسية", en: "Home", href: "/" },
  { key: "about", ar: "من نحن", en: "About", href: "/about" },
  { key: "services", ar: "الخدمات", en: "Services", href: "/services" },
  { key: "blog", ar: "المدونة", en: "Insights", href: "/blog" },
  { key: "contact", ar: "تواصل معنا", en: "Contact", href: "/contact" },
];

export function Footer({ locale }: FooterProps) {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-warm-300" role="contentinfo">
      {/* Gold divider at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Firm Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label={siteConfig.name[locale]}>
              <Image
                src="/alslogo.png"
                alt={LOGO_ALT[locale]}
                width={400}
                height={120}
                quality={100}
                loading="lazy"
                className="h-16 w-auto object-contain"
                sizes="240px"
              />
            </Link>
            <p className="text-sm text-warm-400 leading-relaxed mb-6">
              {t("description")}
            </p>
            <a
              href={getWhatsAppUrl(siteConfig.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/90 hover:bg-green-500 text-white text-sm font-medium transition-colors"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3" role="list">
              {pageLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="text-sm text-warm-400 hover:text-gold-400 transition-smooth link-underline">
                    {locale === "ar" ? link.ar : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              {t("services")}
            </h4>
            <ul className="space-y-3" role="list">
              {serviceLinks.map((service) => (
                <li key={service.key}>
                  <Link href={`/services/${service.key}`} className="text-sm text-warm-400 hover:text-gold-400 transition-smooth link-underline">
                    {locale === "ar" ? service.ar : service.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
              {t("contactUs")}
            </h4>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold-500 mt-0.5 shrink-0 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-warm-400 leading-relaxed">
                  {locale === "ar" ? siteConfig.address.ar : siteConfig.address.en}
                </span>
              </li>
              <li>
                <a href={getPhoneUrl(siteConfig.phone[0])} className="flex items-center gap-3 text-sm text-warm-400 hover:text-white transition-smooth">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold-500 shrink-0 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
                    <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {siteConfig.phone[0]}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-warm-400 hover:text-white transition-smooth">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold-500 shrink-0 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
                    <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold-500 mt-0.5 shrink-0 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
                  <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm text-warm-400">
                  {locale === "ar" ? "الأحد - الخميس: 9 صباحاً - 5 مساءً" : "Sun - Thu: 9:00 AM - 5:00 PM"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-warm-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-500">
            &copy; {currentYear} {siteConfig.shortName[locale]}. {t("rights")}.
          </p>
          <a href={`mailto:${siteConfig.email}`} className="text-xs text-warm-500 hover:text-white transition-smooth">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
