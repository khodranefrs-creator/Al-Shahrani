import { setRequestLocale, getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield, Award, Users } from "lucide-react";

import { siteConfig, type Locale } from "@/types";
import { CtaBand } from "@/components/home/CtaBand";
import ContactForm from "@/components/forms/ContactForm";

export function generateStaticParams() {
  return [{ locale: "ar" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const typed = locale as Locale;

  return {
    title: typed === "ar" ? "تواصل معنا" : "Contact Us",
    description:
      typed === "ar"
        ? "تواصل مع مكتب الشهراني للاستشارات القانونية. نحن هنا لمساعدتك في جميع احتياجاتك القانونية."
        : "Contact Al-Shahrani Law Firm for legal consultations. We are here to help with all your legal needs.",
  };
}

const trustItems = [
  { icon: Shield, key: "confidential" },
  { icon: Award, key: "licensed" },
  { icon: Users, key: "experience" },
] as const;

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const typed = locale as Locale;

  setRequestLocale(typed);

  const t = await getTranslations("contact");

  return (
    <main>
      {/* ─── Hero ─── */}
      <section className="section-padding bg-navy-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="contact-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-md:w-[350px] max-md:h-[350px]"
            style={{ background: "radial-gradient(circle, rgba(184,149,60,0.03) 0%, transparent 65%)" }}
          />
        </div>

        <div className="relative container-custom">
          <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-bold text-white mb-6 tracking-tight">
            {t("title")}
          </h1>
          <div className="w-20 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mb-8" />
          <p className="text-lg leading-[1.8] text-warm-300 max-w-2xl mx-auto mb-4">
            {t("subtitle")}
          </p>
          <p className="text-sm text-gold-400 font-medium">
            {typed === "ar"
              ? "الاستشارة الأولى مجانية"
              : "Initial consultation free of charge"}
          </p>
        </div>
      </section>

      {/* ─── Contact Info Cards ─── */}
      <section className="section-padding bg-warm-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] text-center mb-4 text-navy-900">
              {typed === "ar" ? "معلومات التواصل" : "Contact Information"}
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mb-12" />
            <div className="grid md:grid-cols-2 gap-6">
              {/* Address */}
              <div className="p-6 rounded-panel bg-white border border-warm-200 shadow-subtle hover-lift transition-all">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy-900">
                  {typed === "ar" ? "العنوان" : "Address"}
                </h3>
                <p className="text-sm leading-[1.7] text-warm-600">
                  {siteConfig.address[typed]}
                </p>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-panel bg-white border border-warm-200 shadow-subtle hover-lift transition-all">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy-900">
                  {typed === "ar" ? "الهاتف" : "Phone"}
                </h3>
                <div className="space-y-1">
                  {siteConfig.phone.map((num) => (
                    <a
                      key={num}
                      href={`tel:${num.replace(/[^0-9+]/g, "")}`}
                      className="block text-sm text-warm-600 hover:text-gold-600 transition-colors"
                      dir="ltr"
                    >
                      {num}
                    </a>
                  ))}
                </div>
              </div>

              {/* Email */}
              <div className="p-6 rounded-panel bg-white border border-warm-200 shadow-subtle hover-lift transition-all">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy-900">
                  {typed === "ar" ? "البريد الإلكتروني" : "Email"}
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-warm-600 hover:text-gold-600 transition-colors"
                >
                  {siteConfig.email}
                </a>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-panel bg-white border border-warm-200 shadow-subtle hover-lift transition-all">
                <div className="w-12 h-12 rounded-full bg-gold-100 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-navy-900">
                  {typed === "ar" ? "ساعات العمل" : "Working Hours"}
                </h3>
                <p className="text-sm text-warm-600">
                  {typed === "ar" ? "الأحد — الخميس" : "Sunday — Thursday"}
                </p>
                <p className="text-sm text-warm-500">
                  {typed === "ar" ? "٩:٠٠ صباحاً — ٥:٠٠ مساءً" : "9:00 AM — 5:00 PM"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Form + Map ─── */}
      <section className="section-padding bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-0 right-1/4 w-[500px] h-[500px] max-md:w-[300px] max-md:h-[300px]"
            style={{ background: "radial-gradient(circle, rgba(184,149,60,0.02) 0%, transparent 65%)" }}
          />
        </div>

        <div className="relative container-custom">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold leading-[1.15] text-center mb-4">
              {typed === "ar" ? "أرسل استشارتك" : "Send Your Consultation"}
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-gold-500 to-gold-300 mx-auto mb-12" />

            <div className="grid lg:grid-cols-5 gap-8">
              {/* Form — 3 cols */}
              <div className="lg:col-span-3">
                <ContactForm locale={typed} />
              </div>

              {/* Map + WhatsApp — 2 cols */}
              <div className="lg:col-span-2 space-y-6">
                {/* Map placeholder */}
                <div className="rounded-panel border border-gold-400/15 bg-navy-900/60 overflow-hidden aspect-[4/3] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-7 h-7 text-gold-400" />
                    </div>
                    <p className="text-warm-300 text-sm font-medium mb-1">
                      {typed === "ar" ? "خميس مشيط" : "Khamis Mushait"}
                    </p>
                    <p className="text-warm-500 text-xs">
                      {typed === "ar" ? "حي حسام، طريق المحالة" : "Al-Hussam, Al-Mahala Road"}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 rounded-panel border border-green-500/30 bg-green-500/10 px-6 py-4 text-green-400 transition-all hover:bg-green-500/20 w-full font-semibold text-sm"
                >
                  <MessageCircle className="h-5 w-5" />
                  {typed === "ar" ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Indicators ─── */}
      <section className="py-12 bg-warm-50 border-t border-warm-200">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustItems.map(({ icon: Icon, key }) => (
              <div key={key} className="flex items-center gap-4 justify-center">
                <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-gold-600" />
                </div>
                <p className="text-sm font-medium text-navy-800">
                  {t(`trust.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand locale={typed} />
    </main>
  );
}
