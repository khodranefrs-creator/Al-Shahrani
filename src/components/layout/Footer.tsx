import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig, type Locale } from "@/types";
import { getWhatsAppUrl, getPhoneUrl } from "@/lib/utils";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

interface FooterProps {
  locale: Locale;
}

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
    <footer className="bg-navy-gradient text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Firm Info — wider */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/15 text-gold-400 border border-gold-400/20 text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                {locale === "ar" ? "ش" : "AS"}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {locale === "ar" ? "مكتب الشهراني" : "Al-Shahrani"}
                </h3>
                <p className="text-[10px] font-medium tracking-wider uppercase text-gold-400/60">
                  {locale === "ar" ? "للمحاماة والاستشارات القانونية" : "Law Firm & Legal Consultations"}
                </p>
              </div>
            </div>
            <p className="text-sm text-navy-300 leading-relaxed mb-6 max-w-sm">
              {t("description")}
            </p>
            <a
              href={getWhatsAppUrl(siteConfig.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600/90 hover:bg-green-500 text-white text-sm font-medium rounded-lg transition-colors"
              aria-label="WhatsApp"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-2.5" role="list">
              {pageLinks.map((link) => (
                <li key={link.key}>
                  <Link href={link.href} className="text-sm text-navy-300 hover:text-white transition-colors duration-200">
                    {locale === "ar" ? link.ar : link.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">
              {t("services")}
            </h4>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((service) => (
                <li key={service.key}>
                  <Link href={`/services/${service.key}`} className="text-sm text-navy-300 hover:text-white transition-colors duration-200">
                    {locale === "ar" ? service.ar : service.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-400 mb-4">
              {t("contactUs")}
            </h4>
            <ul className="space-y-3" role="list">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400/70 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm text-navy-300 leading-relaxed">
                  {locale === "ar" ? siteConfig.address.ar : siteConfig.address.en}
                </span>
              </li>
              <li>
                <a href={getPhoneUrl(siteConfig.phone[0])} className="flex items-center gap-3 text-sm text-navy-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-gold-400/70 shrink-0" aria-hidden="true" />
                  {siteConfig.phone[0]}
                </a>
              </li>
              <li>
                <a href={getPhoneUrl(siteConfig.phone[1])} className="flex items-center gap-3 text-sm text-navy-300 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-gold-400/70 shrink-0" aria-hidden="true" />
                  {siteConfig.phone[1]}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm text-navy-300 hover:text-white transition-colors">
                  <Mail className="w-4 h-4 text-gold-400/70 shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold-400/70 mt-0.5 shrink-0" aria-hidden="true" />
                <span className="text-sm text-navy-300">
                  {locale === "ar" ? "الأحد - الخميس: 9 صباحاً - 5 مساءً" : "Sun - Thu: 9:00 AM - 5:00 PM"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-navy-400">
              © {currentYear} {siteConfig.shortName[locale]}. {t("rights")}.
            </p>
            <a href={`mailto:${siteConfig.email}`} className="text-xs text-navy-400 hover:text-white transition-colors">
              {siteConfig.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
