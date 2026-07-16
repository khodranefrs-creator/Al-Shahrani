"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn, getWhatsAppUrl } from "@/lib/utils";
import { siteConfig, type Locale } from "@/types";
import { Menu, X, ChevronDown } from "lucide-react";

interface HeaderProps {
  locale: Locale;
}

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "services", href: "/services" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

const serviceLinks = [
  { href: "/services/corporate-law", ar: "القانون التجاري", en: "Corporate Law" },
  { href: "/services/governance", ar: "الحوكمة المؤسسية", en: "Corporate Governance" },
  { href: "/services/contracts", ar: "العقود", en: "Contracts" },
  { href: "/services/ma", ar: "الاندماج والاستحواذ", en: "M&A" },
  { href: "/services/litigation", ar: "التقاضي وتسوية المنازعات", en: "Dispute Resolution" },
  { href: "/services/debt-collection", ar: "تحصيل الديون", en: "Debt Collection" },
];

export function Header({ locale }: HeaderProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const otherLocale = locale === "ar" ? "en" : "ar";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const otherLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const showDark = !isScrolled && isHome;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500",
          showDark
            ? "header-scrolled-dark border-b border-white/[0.06]"
            : isScrolled
              ? "header-scrolled"
              : "bg-transparent"
        )}
        role="banner"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 md:h-24 items-center justify-between">
            {/* Logo — larger, more premium */}
            <Link
              href="/"
              className="flex items-center gap-4 group"
              aria-label={siteConfig.name[locale]}
            >
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center font-bold text-lg transition-all duration-300",
                  showDark
                    ? "bg-gold-500/15 text-gold-400 border border-gold-400/20 group-hover:bg-gold-500/25"
                    : "bg-navy-900 text-gold-400 group-hover:bg-navy-800"
                )}
                style={{ fontFamily: "var(--font-heading-ar)" }}
              >
                {locale === "ar" ? "\u0634" : "AS"}
              </div>
              <div className="flex flex-col">
                <span
                  className={cn(
                    "text-xl md:text-2xl font-bold leading-tight transition-colors duration-300",
                    showDark ? "text-white" : "text-navy-900"
                  )}
                  style={{ fontFamily: "var(--font-heading-ar)" }}
                >
                  {locale === "ar" ? "\u0645\u0643\u062a\u0628 \u0627\u0644\u0634\u0647\u0631\u0627\u0646\u064a" : "Al-Shahrani"}
                </span>
                <span
                  className={cn(
                    "text-[11px] font-semibold leading-tight tracking-[0.15em] uppercase hidden sm:block transition-colors duration-300",
                    showDark ? "text-gold-400/60" : "text-navy-400"
                  )}
                >
                  {locale === "ar"
                    ? "\u0644\u0644\u0645\u062d\u0627\u0645\u0627\u0629 \u0648\u0627\u0644\u0627\u0633\u062a\u0634\u0627\u0631\u0627\u062a \u0627\u0644\u0642\u0627\u0646\u0648\u0646\u064a\u0629"
                    : "Law Firm & Legal Consultations"}
                </span>
              </div>
            </Link>

            {/* Desktop Nav — larger typography, more spacing */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label={locale === "ar" ? "\u0627\u0644\u062a\u0646\u0642\u0644 \u0627\u0644\u0631\u0626\u064a\u0633\u064a" : "Main navigation"}
            >
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === `/${locale}` || pathname === `/${locale}/`
                    : pathname.includes(`/${locale}${item.href}`);

                const isServices = item.key === "services";

                return (
                  <div
                    key={item.key}
                    className="relative"
                    onMouseEnter={() => isServices && setIsServicesOpen(true)}
                    onMouseLeave={() => isServices && setIsServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "px-5 py-2 text-base font-semibold transition-all duration-200 relative inline-flex items-center gap-1.5",
                        isActive
                          ? showDark
                            ? "text-gold-400"
                            : "text-gold-700"
                          : showDark
                            ? "text-white/80 hover:text-white"
                            : "text-warm-700 hover:text-navy-900"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {t(item.key)}
                      {isServices && (
                        <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isServicesOpen && "rotate-180")} />
                      )}
                      {isActive && (
                        <span
                          className={cn(
                            "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full",
                            showDark ? "bg-gold-400" : "bg-gold-500"
                          )}
                          aria-hidden="true"
                        />
                      )}
                    </Link>

                    {/* Services Dropdown */}
                    {isServices && (
                      <div
                        className={cn(
                          "absolute top-full left-0 pt-3 transition-all duration-200",
                          isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                        )}
                      >
                        <div className="w-80 bg-white border border-warm-200 shadow-2xl py-3">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={cn(
                                "block px-6 py-3.5 text-[15px] transition-colors duration-150",
                                pathname.includes(service.href)
                                  ? "text-gold-700 bg-gold-50"
                                  : "text-warm-800 hover:text-gold-700 hover:bg-warm-50"
                              )}
                            >
                              {locale === "ar" ? service.ar : service.en}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link
                href={otherLocalePath}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-all duration-200 border rounded-lg",
                  showDark
                    ? "border-white/20 text-white/70 hover:text-white hover:border-white/40"
                    : "border-warm-300 text-warm-700 hover:text-navy-900 hover:border-warm-400"
                )}
                aria-label={locale === "ar" ? "Switch to English" : "\u0627\u0644\u062a\u0628\u062f\u064a\u0644 \u0625\u0644\u0649 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[1.5]" aria-hidden="true">
                  <path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="hidden sm:inline">{otherLocale === "ar" ? "\u0639\u0631\u0628\u064a" : "EN"}</span>
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold transition-all duration-200 rounded-lg",
                  "bg-gold-500 text-white hover:bg-gold-400 shadow-sm hover:shadow-md"
                )}
              >
                {t("contact")}
              </Link>

              <a
                href={getWhatsAppUrl(siteConfig.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hidden sm:inline-flex items-center justify-center p-3 transition-all duration-200",
                  showDark
                    ? "text-green-400 hover:text-green-300"
                    : "text-green-600 hover:text-green-500"
                )}
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "lg:hidden p-2.5 transition-all duration-200",
                  showDark
                    ? "text-white hover:text-gold-400"
                    : "text-navy-700 hover:text-navy-900"
                )}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden fixed inset-x-0 top-20 md:top-24 bottom-0 bg-white z-40 transition-all duration-300 overflow-y-auto border-t border-warm-200",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          aria-hidden={!isOpen}
        >
          <nav className="p-6 space-y-1" aria-label={locale === "ar" ? "\u0627\u0644\u062a\u0646\u0642\u0644 \u0641\u064a \u0627\u0644\u0642\u0627\u0626\u0645\u0629" : "Mobile navigation"}>
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === `/${locale}` || pathname === `/${locale}/`
                  : pathname.includes(`/${locale}${item.href}`);

              return (
                <Link
                  key={item.key}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-4 py-4 text-xl font-semibold transition-colors border-b border-warm-100",
                    isActive
                      ? "text-gold-700"
                      : "text-navy-700 hover:text-navy-900"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {t(item.key)}
                </Link>
              );
            })}

            <div className="pt-6 space-y-4">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-center px-6 py-4 text-lg font-bold bg-gold-500 text-white hover:bg-gold-400 transition-all duration-200"
              >
                {t("contact")}
              </Link>
              <Link
                href={otherLocalePath}
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-3 text-base font-medium text-navy-700 hover:text-navy-900 transition-colors"
              >
                {locale === "ar" ? "English" : "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"}
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
