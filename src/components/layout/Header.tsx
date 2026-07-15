"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { cn, getWhatsAppUrl } from "@/lib/utils";
import { siteConfig, type Locale } from "@/types";
import { Menu, X } from "lucide-react";

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

export function Header({ locale }: HeaderProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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
            ? "header-scrolled-dark"
            : isScrolled
              ? "header-scrolled"
              : "bg-transparent"
        )}
        role="banner"
      >
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 md:h-[4.5rem] items-center justify-between">
            {/* Logo — refined monogram */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label={siteConfig.name[locale]}
            >
              <div className={cn(
                "flex h-10 w-10 items-center justify-center rounded-lg font-bold text-lg transition-all duration-300",
                showDark
                  ? "bg-gold-500/15 text-gold-400 border border-gold-400/20 group-hover:bg-gold-500/25"
                  : "bg-navy-900 text-gold-400 group-hover:bg-navy-800"
              )}
              style={{ fontFamily: "var(--font-heading-ar)" }}
              >
                {locale === "ar" ? "ش" : "AS"}
              </div>

              <div className="flex flex-col">
                <span
                  className={cn(
                    "text-lg md:text-xl font-bold leading-tight transition-colors duration-300",
                    showDark ? "text-white" : "text-navy-900"
                  )}
                  style={{ fontFamily: "var(--font-heading-ar)" }}
                >
                  {locale === "ar" ? "مكتب الشهراني" : "Al-Shahrani"}
                </span>
                <span
                  className={cn(
                    "text-[10px] md:text-xs font-medium leading-tight tracking-wider uppercase hidden sm:block transition-colors duration-300",
                    showDark ? "text-gold-400/70" : "text-navy-400"
                  )}
                >
                  {locale === "ar"
                    ? "للمحاماة والاستشارات القانونية"
                    : "Law Firm & Legal Consultations"}
                </span>
              </div>
            </Link>

            {/* Desktop Nav — refined spacing */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}
            >
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === `/${locale}` || pathname === `/${locale}/`
                    : pathname.includes(`/${locale}${item.href}`);

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium transition-all duration-200 relative",
                      isActive
                        ? showDark
                          ? "text-gold-400"
                          : "text-gold-700"
                        : showDark
                          ? "text-white/80 hover:text-white"
                          : "text-navy-600 hover:text-navy-900"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {t(item.key)}
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
                );
              })}
            </nav>

            {/* Actions — refined */}
            <div className="flex items-center gap-2">
              <Link
                href={otherLocalePath}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-all duration-200",
                  showDark
                    ? "text-white/70 hover:text-white"
                    : "text-navy-600 hover:text-navy-900"
                )}
                aria-label={locale === "ar" ? "Switch to English" : "التبديل إلى العربية"}
              >
                <span className="hidden sm:inline">{otherLocale === "ar" ? "عربي" : "EN"}</span>
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold transition-all duration-200",
                  showDark
                    ? "bg-gold-500 text-navy-900 hover:bg-gold-400"
                    : "bg-gold-500 text-navy-900 hover:bg-gold-400"
                )}
              >
                {t("contact")}
              </Link>

              <a
                href={getWhatsAppUrl(siteConfig.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "hidden sm:inline-flex items-center justify-center p-2.5 transition-all duration-200",
                  showDark
                    ? "text-green-400 hover:text-green-300"
                    : "text-green-600 hover:text-green-500"
                )}
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                  "lg:hidden p-2 transition-all duration-200",
                  showDark
                    ? "text-white hover:text-gold-400"
                    : "text-navy-700 hover:text-navy-900"
                )}
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu — refined */}
        <div
          id="mobile-menu"
          className={cn(
            "lg:hidden fixed inset-x-0 top-16 md:top-[4.5rem] bottom-0 bg-white z-40 transition-all duration-300 overflow-y-auto",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          aria-hidden={!isOpen}
        >
          <nav className="p-6 space-y-1" aria-label={locale === "ar" ? "التنقل في القائمة" : "Mobile navigation"}>
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
                    "block px-4 py-4 text-lg font-medium transition-colors border-b border-warm-100",
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
                className="block text-center px-6 py-4 text-lg font-semibold bg-gold-500 text-navy-900 hover:bg-gold-400 transition-all duration-200"
              >
                {t("contact")}
              </Link>
              <Link
                href={otherLocalePath}
                onClick={() => setIsOpen(false)}
                className="block text-center px-4 py-3 text-base font-medium text-navy-700 hover:text-navy-900 transition-colors"
              >
                {locale === "ar" ? "English" : "العربية"}
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
