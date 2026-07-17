"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { BadgeCheck, Shield, Scale, ScrollText, Award, Users } from "lucide-react";

const trustBadges = [
  { icon: Award, key: "accredited" },
  { icon: Shield, key: "confidential" },
  { icon: Users, key: "bilingual" },
] as const;

const stats = [
  { icon: BadgeCheck, key: "years", value: 20, suffix: "+" },
  { icon: Shield, key: "cases", value: 150, suffix: "+" },
  { icon: Scale, key: "clients", value: 100, suffix: "+" },
  { icon: ScrollText, key: "practiceAreas", value: 6, suffix: "" },
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
          let frame = 0;
          function tick(now: number) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            frame++;
            if (frame % 4 === 0 || progress >= 1) {
              const eased = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(eased * target));
            }
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
  const Icon = stat.icon;

  return (
    <div ref={ref} className="text-center">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold-400/10 flex items-center justify-center mx-auto mb-2">
        <Icon aria-hidden="true" className="w-5 h-5 text-gold-400" />
      </div>
      <span
        className="block text-2xl md:text-3xl font-bold text-gold-400 leading-none"
        style={{ fontFamily: "var(--font-heading-en)" }}
      >
        {count}{stat.suffix}
      </span>
      <span className="block text-xs text-warm-400 mt-1.5 leading-snug">{t(stat.key)}</span>
    </div>
  );
}

export function StatsBand({ locale = "ar" }: { locale?: string }) {
  const t = useTranslations("stats");

  return (
    <section className="bg-navy-950 border-y border-gold-400/15">
      <div className="container-custom py-10 md:py-12">
        {/* Trust badges — top row, institutional style */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-8 md:mb-10 pb-8 md:pb-10 border-b border-white/[0.06]">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.key} className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gold-400/10 flex items-center justify-center">
                  <Icon aria-hidden="true" className="w-4 h-4 text-gold-400" />
                </div>
                <span className="text-sm text-warm-300 font-medium">{t(`badges.${badge.key}`)}</span>
              </div>
            );
          })}
        </div>

        {/* Statistics — bottom row with count-up */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div key={stat.key} className="relative">
              {i > 0 && (
                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -start-3 w-px h-10 bg-gold-400/15" />
              )}
              <StatItem stat={stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
