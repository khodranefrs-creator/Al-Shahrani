"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    key: "years",
    value: 20,
    suffix: "+",
    descAr: "عاماً من الخبرة القانونية المتميزة",
    descEn: "Years of distinguished legal experience",
  },
  {
    key: "cases",
    value: 150,
    suffix: "+",
    descAr: "قضية تعاملنا معها بنجاح",
    descEn: "Cases handled successfully",
  },
  {
    key: "clients",
    value: 100,
    suffix: "+",
    descAr: "عميل مؤسسي يثق بخدماتنا",
    descEn: "Corporate clients trust our services",
  },
  {
    key: "practiceAreas",
    value: 6,
    suffix: "",
    descAr: "مجالات تخصص قانوني",
    descEn: "Legal practice areas",
  },
] as const;

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function StatItem({ stat, locale }: { stat: (typeof stats)[number]; locale: string }) {
  const { count, ref } = useCountUp(stat.value);
  const t = useTranslations("stats");

  return (
    <div ref={ref} className="relative text-center py-4">
      {/* Large gold number */}
      <span
        className="block text-4xl sm:text-5xl md:text-6xl font-bold text-gold-400 tracking-tight leading-none"
        style={{ fontFamily: "var(--font-heading-en)" }}
      >
        {count}
        {stat.suffix}
      </span>
      {/* Label */}
      <span className="block mt-4 text-sm font-semibold text-warm-200 uppercase tracking-widest">
        {t(stat.key)}
      </span>
      {/* Description */}
      <span className="block mt-2 text-xs text-warm-400/80 leading-relaxed max-w-[200px] mx-auto">
        {locale === "ar" ? stat.descAr : stat.descEn}
      </span>
    </div>
  );
}

export function StatsBand({ locale = "ar" }: { locale?: string }) {
  return (
    <section className="relative bg-navy-900 overflow-hidden">
      {/* Subtle top/bottom border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid grid-cols-2 gap-10 md:gap-12 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <StatItem key={stat.key} stat={stat} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
