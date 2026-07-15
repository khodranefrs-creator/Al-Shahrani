"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/types";

interface StatsBandProps {
  locale: Locale;
}

const stats = [
  { key: "years", value: 20, suffix: "+" },
  { key: "cases", value: 150, suffix: "+" },
  { key: "clients", value: 100, suffix: "+" },
  { key: "practiceAreas", value: 6, suffix: "" },
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

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
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

function StatItem({ stat }: { stat: (typeof stats)[number] }) {
  const { count, ref } = useCountUp(stat.value);
  const t = useTranslations("stats");

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="text-3xl font-bold text-gold-400 sm:text-4xl lg:text-5xl">
        {count}
        {stat.suffix}
      </span>
      <span className="mt-2 text-sm font-medium text-navy-200 sm:text-base">
        {t(stat.key)}
      </span>
    </div>
  );
}

export function StatsBand({ locale }: StatsBandProps) {
  return (
    <section className="relative bg-navy-900 py-14 lg:py-20">
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(212,175,55,0.1) 0px, transparent 1px, transparent 60px), repeating-linear-gradient(0deg, rgba(212,175,55,0.1) 0px, transparent 1px, transparent 60px)",
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.key} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
