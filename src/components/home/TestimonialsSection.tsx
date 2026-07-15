"use client";

import { useTranslations } from "next-intl";
import { Quote } from "lucide-react";

const testimonials = [
  {
    key: "0",
    name: "محمد العنزي",
    role: "رائد أعمال",
    initials: "ع",
  },
  {
    key: "1",
    name: "سارة الشمري",
    role: "مديرة تنفيذية",
    initials: "ش",
  },
  {
    key: "2",
    name: "عبدالله الحربي",
    role: "مدير شركة",
    initials: "ح",
  },
] as const;

export function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="bg-white relative">
      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-warm-100" />

      <div className="section-padding container-custom">
        <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
          <h2
            className="text-[clamp(1.25rem,3vw,2.25rem)] font-bold text-navy-900 mb-4"
            style={{ fontFamily: "var(--font-heading-ar)" }}
          >
            {t("title")}
          </h2>
          <p className="text-warm-500 leading-[1.7] max-w-2xl mx-auto">{t("description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.key}
              className="relative p-8 md:p-10 rounded-[var(--radius-panel)] bg-warm-50 border border-warm-100 hover:border-gold-400/25 transition-colors duration-500 group"
            >
              {/* Quote mark — larger and bolder */}
              <div className="mb-5">
                <Quote
                  aria-hidden="true"
                  className="w-10 h-10 text-gold-400/30 group-hover:text-gold-400/50 transition-colors duration-500"
                  fill="currentColor"
                />
              </div>

              {/* Testimonial text */}
              <p
                className="text-sm text-navy-900 leading-[1.8] mb-7"
                style={{ fontFamily: "var(--font-heading-ar)" }}
              >
                {t(`items.${item.key}`)}
              </p>

              {/* Gold divider */}
              <div className="w-12 h-px bg-gold-400/30 mb-6" />

              {/* Author — with initials avatar */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-navy-900 flex items-center justify-center text-gold-400 text-sm font-bold shrink-0 ring-1 ring-navy-900">
                  {item.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-900">{item.name}</div>
                  <div className="text-xs text-warm-500 mt-0.5">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
