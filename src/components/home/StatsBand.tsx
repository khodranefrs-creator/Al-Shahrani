"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

/*
 * IMPORTANT: These values should be verified by the client.
 * They are placeholders that can be updated through the admin panel
 * or by editing this file directly. Do not display unverified numbers.
 */
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

function StatItem({ stat }: { stat: (typeof stats)[number] }) {
  const { count, ref } = useCountUp(stat.value);
  const t = useTranslations("stats");

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span
        className="text-4xl font-bold text-gold-400 sm:text-5xl lg:text-6xl tracking-tight leading-none"
        style={{ fontFamily: 'var(--font-heading-en)' }}
      >
        {count}
        {stat.suffix}
      </span>
      <span className="mt-3 text-xs font-medium text-warm-300 uppercase tracking-widest sm:text-sm">
        {t(stat.key)}
      </span>
    </div>
  );
}

export function StatsBand() {
  return (
    <section className="bg-navy-900 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-16">
          {stats.map((stat) => (
            <StatItem key={stat.key} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
