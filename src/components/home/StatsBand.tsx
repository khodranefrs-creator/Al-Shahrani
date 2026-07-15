"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Shield, Scale, ScrollText } from "lucide-react";

const credentials = [
  { icon: BadgeCheck, key: "years" },
  { icon: Shield, key: "cases" },
  { icon: Scale, key: "clients" },
  { icon: ScrollText, key: "practiceAreas" },
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

const statValues: Record<string, { value: number; suffix: string }> = {
  years: { value: 20, suffix: "+" },
  cases: { value: 150, suffix: "+" },
  clients: { value: 100, suffix: "+" },
  practiceAreas: { value: 6, suffix: "" },
};

function StatItem({ credential, locale }: { credential: (typeof credentials)[number]; locale: string }) {
  const { count, ref } = useCountUp(statValues[credential.key].value);
  const t = useTranslations("stats");
  const Icon = credential.icon;

  return (
    <div
      ref={ref}
      className="flex items-center gap-4 px-5 py-5 rounded-[var(--radius-panel)] bg-navy-900/40 border border-white/[0.06] hover:border-gold-400/20 transition-all duration-500"
    >
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold-400/10 flex items-center justify-center shrink-0">
        <Icon aria-hidden="true" className="w-5 h-5 text-gold-400" />
      </div>
      <div>
        <span
          className="block text-2xl md:text-3xl font-bold text-gold-400 leading-none"
          style={{ fontFamily: "var(--font-heading-en)" }}
        >
          {count}{statValues[credential.key].suffix}
        </span>
        <span className="block text-sm text-warm-400 mt-1 leading-snug">{t(credential.key)}</span>
      </div>
    </div>
  );
}

export function StatsBand({ locale = "ar" }: { locale?: string }) {
  return (
    <section className="bg-navy-950 border-y border-gold-400/15">
      <div className="container-custom py-12 md:py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {credentials.map((credential) => (
            <StatItem key={credential.key} credential={credential} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
