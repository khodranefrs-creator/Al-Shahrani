"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { type Locale } from "@/types";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormProps {
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

export default function ContactForm({ locale }: ContactFormProps) {
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

  const labelClasses = "block text-sm font-semibold text-warm-300 mb-1.5";

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-12 text-center">
        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-400" />
        <h3 className="mb-2 text-2xl font-bold text-white">
          {locale === "ar"
            ? "تم إرسال طلبك بنجاح"
            : "Your request has been submitted successfully"}
        </h3>
        <p className="text-warm-300">
          {locale === "ar"
            ? "سنتواصل معك في أقرب وقت ممكن"
            : "We will contact you as soon as possible"}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
        <div className="flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/30 p-4 text-red-400">
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
  );
}
