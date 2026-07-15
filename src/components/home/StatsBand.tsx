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
    <div ref={ref} className="flex flex-col items-center text-center">
      <span
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold-400 tracking-tight leading-none"
        style={{ fontFamily: "var(--font-heading-en)" }}
      >
        {count}
        {stat.suffix}
      </span>
      <span className="mt-3 text-sm font-semibold text-warm-200 uppercase tracking-wide">
        {t(stat.key)}
      </span>
      <span className="mt-1.5 text-xs text-warm-400 leading-relaxed max-w-[200px]">
        {locale === "ar" ? stat.descAr : stat.descEn}
      </span>
    </div>
  );
}

export function StatsBand({ locale = "ar" }: { locale?: string }) {
  return (
    <section className="bg-navy-900 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:gap-12 lg:grid-cols-4 lg:gap-16">
          {stats.map((stat) => (
            <StatItem key={stat.key} stat={stat} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
