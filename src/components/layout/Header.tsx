"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { cn, getWhatsAppUrl } from "@/lib/utils";
import { siteConfig, type Locale } from "@/types";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

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

const LOGO_ALT = {
  ar: "شعار مكتب المحامي محمد حمود الشهراني",
  en: "Mohammed Hamoud Al-Shahrani Law Firm Logo",
} as const;

export function Header({ locale }: HeaderProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();
  const isRtl = locale === "ar";
  const otherLocale = isRtl ? "en" : "ar";

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  const localeFreePath = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), "") || "/";
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const showGlass = !isHome || scrolled;

  const handleLocaleSwitch = useCallback(() => {
    router.push(localeFreePath, { locale: otherLocale });
  }, [router, localeFreePath, otherLocale]);

  const megaEnter = useCallback(() => {
    if (megaTimeoutRef.current) clearTimeout(megaTimeoutRef.current);
    setMegaOpen(true);
  }, []);

  const megaLeave = useCallback(() => {
    megaTimeoutRef.current = setTimeout(() => setMegaOpen(false), 150);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,border-bottom,box-shadow] duration-500",
          showGlass
            ? "glass-header"
            : "bg-gradient-to-b from-black/40 to-transparent"
        )}
        role="banner"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20 lg:h-28">
            {/* Logo */}
            <Link
              href="/"
              className={cn(
                "flex items-center gap-4 shrink-0",
                isRtl ? "order-last" : "order-first"
              )}
              aria-label={siteConfig.name[locale]}
            >
              <Image
                src="/alslogo-cropped.png"
                alt={LOGO_ALT[locale]}
                width={545}
                height={511}
                priority
                quality={100}
                className="h-14 md:h-20 w-auto object-contain"
                sizes="(max-width: 768px) 200px, 280px"
              />
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label={isRtl ? "التنقل الرئيسي" : "Main navigation"}
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
                    onMouseEnter={() => isServices && megaEnter()}
                    onMouseLeave={() => isServices && megaLeave()}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-colors duration-200 focus-ring-gold",
                        isActive
                          ? "text-gold-400"
                          : "text-white/80 hover:text-white hover:bg-white/5"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {t(item.key)}
                      {isServices && (
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform duration-300",
                            megaOpen && "rotate-180"
                          )}
                        />
                      )}
                      {isActive && (
                        <span
                          className="absolute -bottom-px left-3 right-3 h-0.5 bg-gold-400 rounded-full"
                          aria-hidden="true"
                        />
                      )}
                    </Link>

                    {/* Services Dropdown */}
                    {isServices && (
                      <div
                        className={cn(
                          "absolute top-full mt-2 w-[520px] bg-navy-900 border border-white/10 rounded-xl shadow-2xl shadow-black/30 p-5 transition-all duration-200",
                          isRtl ? "right-0" : "left-0",
                          megaOpen
                            ? "opacity-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 -translate-y-2 pointer-events-none"
                        )}
                        onMouseEnter={megaEnter}
                        onMouseLeave={megaLeave}
                      >
                        <div className="grid grid-cols-2 gap-2">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              className={cn(
                                "block px-4 py-3 rounded-lg text-sm transition-colors duration-200",
                                pathname.includes(service.href)
                                  ? "bg-gold-500/10 text-gold-400"
                                  : "text-white/70 hover:text-white hover:bg-white/5"
                              )}
                            >
                              {isRtl ? service.ar : service.en}
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
            <div className="flex items-center gap-2.5">
              {/* Phone — hidden below sm */}
              <a
                href={`tel:${siteConfig.phone[0]}`}
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/70 hover:text-gold-400 hover:border-gold-400/50 hover:bg-gold-400/5 transition-colors duration-300 focus-ring-gold"
                aria-label={isRtl ? "اتصل بنا" : "Call us"}
              >
                <Phone className="w-[18px] h-[18px]" />
              </a>

              {/* Language Switcher */}
              <button
                type="button"
                onClick={handleLocaleSwitch}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-colors duration-200 focus-ring-gold"
                aria-label={
                  isRtl ? "Switch to English" : "التبديل إلى العربية"
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-none stroke-current stroke-[1.5]"
                  aria-hidden="true"
                >
                  <path
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>{otherLocale === "ar" ? "عربي" : "EN"}</span>
              </button>

              {/* Consultation CTA */}
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gold-500 text-white font-semibold text-sm rounded-lg hover:bg-gold-400 transition-[background,box-shadow] duration-300 shadow-raised hover:shadow-[0_4px_25px_rgba(184,149,60,0.35)]"
              >
                {t("contact")}
              </Link>

              {/* WhatsApp */}
              <a
                href={getWhatsAppUrl(siteConfig.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/70 hover:text-green-400 hover:border-green-400/50 hover:bg-green-400/5 transition-colors duration-300 focus-ring-gold"
                aria-label="WhatsApp"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>

              {/* Mobile Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-center w-10 h-10 text-white focus-ring-gold"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
              >
                {mobileOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Overlay Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-200",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Sidebar */}
      <div
        id="mobile-menu"
        className={cn(
          "fixed inset-y-0 w-[85vw] max-w-sm bg-navy-900 z-50 lg:hidden overflow-y-auto transition-transform duration-300 ease-in-out",
          isRtl ? "right-0 border-l border-white/5" : "left-0 border-r border-white/5",
          mobileOpen
            ? "translate-x-0"
            : isRtl
              ? "translate-x-full"
              : "-translate-x-full"
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/5">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center"
            aria-label={siteConfig.name[locale]}
          >
            <Image
              src="/alslogo-cropped.png"
              alt={LOGO_ALT[locale]}
              width={545}
              height={511}
              quality={100}
              className="h-12 w-auto object-contain"
              sizes="200px"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center w-10 h-10 text-white/60 hover:text-white transition-colors focus-ring-gold"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Nav */}
        <nav
          className="p-5 space-y-1"
          aria-label={isRtl ? "التنقل في القائمة" : "Mobile navigation"}
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === `/${locale}` || pathname === `/${locale}/`
                : pathname.includes(`/${locale}${item.href}`);
            const isServices = item.key === "services";

            return (
              <div key={item.key}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200",
                    isActive
                      ? "text-gold-400 bg-gold-500/10"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{t(item.key)}</span>
                  {isServices && (
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        megaOpen && "rotate-180"
                      )}
                    />
                  )}
                </Link>

                {/* Services sub-menu */}
                {isServices && (
                  <div
                    className={cn(
                      "mt-1 space-y-1",
                      isRtl
                        ? "pr-4 border-r-2 mr-2"
                        : "pl-4 border-l-2 ml-2",
                      "border-gold-500/20"
                    )}
                  >
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "block px-4 py-2.5 rounded-lg text-sm transition-colors duration-200",
                          pathname.includes(service.href)
                            ? "text-gold-400 bg-gold-500/10"
                            : "text-white/50 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {isRtl ? service.ar : service.en}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}

          {/* Sidebar Bottom Section */}
          <div className="mt-8 space-y-3 border-t border-white/5 pt-6">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full px-5 py-3 bg-gold-500 text-white font-semibold text-sm rounded-lg hover:bg-gold-400 transition-colors duration-300"
            >
              {t("contact")}
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                handleLocaleSwitch();
              }}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 border border-white/20 text-white/70 rounded-lg text-sm hover:text-white hover:border-white/40 transition-colors duration-300"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-none stroke-current stroke-[1.5]"
                aria-hidden="true"
              >
                <path
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {isRtl ? "English" : "العربية"}
            </button>
            <a
              href={`tel:${siteConfig.phone[0]}`}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 border border-white/20 text-white/70 rounded-lg text-sm hover:text-white hover:border-white/40 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              {isRtl ? "اتصل بنا" : "Call Us"}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
