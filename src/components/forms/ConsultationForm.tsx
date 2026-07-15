"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { siteConfig, type Locale } from "@/types";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface ConsultationFormProps {
  locale: Locale;
}

const serviceOptions = [
  "corporate-law",
  "governance",
  "contracts",
  "ma",
  "litigation",
  "debt-collection",
  "notarization",
  "labor",
  "personal-status",
  "property",
  "medical",
] as const;

const urgencyOptions = ["normal", "urgent", "very-urgent"] as const;

export default function ConsultationForm({ locale }: ConsultationFormProps) {
  const t = useTranslations("contact.form");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "",
    subject: "",
    description: "",
    urgency: "normal" as const,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, whatsapp: formData.phone }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Something went wrong");
      }

      setIsSuccess(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        serviceType: "",
        subject: "",
        description: "",
        urgency: "normal",
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "w-full rounded-lg border border-warm-300 bg-white px-4 py-3 text-navy-900 placeholder:text-navy-400 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/20 transition-colors duration-200";

  const labelClasses = "block text-sm font-semibold text-navy-800 mb-1.5";

  return (
    <section className="bg-warm-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            {isSuccess ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
                <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
                <h3 className="mb-2 text-2xl font-bold text-navy-900">
                  {locale === "ar"
                    ? "تم إرسال طلبك بنجاح"
                    : "Your request has been submitted successfully"}
                </h3>
                <p className="text-navy-600">
                  {locale === "ar"
                    ? "سنتواصل معك في أقرب وقت ممكن"
                    : "We will contact you as soon as possible"}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClasses}>
                      {t("name")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder={t("namePlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClasses}>
                      {t("phone")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder={t("phonePlaceholder")}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClasses}>
                      {t("email")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses}
                      placeholder={t("emailPlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="serviceType" className={labelClasses}>
                      {t("serviceType")}
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      <option value="">{t("selectService")}</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {t(`services.${opt}`)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="subject" className={labelClasses}>
                      {t("subject")} *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                      placeholder={t("subjectPlaceholder")}
                    />
                  </div>
                  <div>
                    <label htmlFor="urgency" className={labelClasses}>
                      {t("urgency")}
                    </label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleChange}
                      className={inputClasses}
                    >
                      {urgencyOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {t(`urgencyLevels.${opt}`)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className={labelClasses}>
                    {t("description")} *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className={cn(inputClasses, "resize-none")}
                    placeholder={t("descriptionPlaceholder")}
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 p-4 text-red-700">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <p className="text-sm">{error}</p>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  loading={isSubmitting}
                  className="w-full"
                >
                  <Send className="h-5 w-5" />
                  {t("submit")}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-navy-100 bg-white p-8 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-navy-900">
                {locale === "ar" ? "تواصل معنا" : "Contact Us"}
              </h3>

              <div className="space-y-5">
                {siteConfig.phone.map((num) => (
                  <a
                    key={num}
                    href={`tel:${num.replace(/[^0-9+]/g, "")}`}
                    className="flex items-center gap-3 text-navy-700 hover:text-gold-600 transition-colors"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100">
                      <Phone className="h-5 w-5 text-gold-600" />
                    </div>
                    <span dir="ltr" className="font-medium">
                      {num}
                    </span>
                  </a>
                ))}

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-navy-700 hover:text-gold-600 transition-colors"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100">
                    <Mail className="h-5 w-5 text-gold-600" />
                  </div>
                  <span className="font-medium">{siteConfig.email}</span>
                </a>

                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100">
                    <MapPin className="h-5 w-5 text-gold-600" />
                  </div>
                  <p className="font-medium text-navy-700">
                    {siteConfig.address[locale]}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-100">
                    <Clock className="h-5 w-5 text-gold-600" />
                  </div>
                  <div>
                    <p className="font-medium text-navy-700">
                      {locale === "ar"
                        ? "الأحد - الخميس"
                        : "Sunday - Thursday"}
                    </p>
                    <p className="text-sm text-navy-500">
                      {locale === "ar"
                        ? "٨:٠٠ صباحاً - ٥:٠٠ مساءً"
                        : "8:00 AM - 5:00 PM"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-green-500 px-6 py-4 text-white transition-colors hover:bg-green-600 w-full font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              {locale === "ar" ? "تواصل عبر واتساب" : "Contact via WhatsApp"}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
