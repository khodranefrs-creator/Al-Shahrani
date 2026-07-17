"use client";

import { useEffect, useState, useRef } from "react";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    function handleScroll() {
      if (!ticking.current) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          if (docHeight > 0) {
            setProgress(Math.min((scrollTop / docHeight) * 100, 100));
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 right-0 left-0 z-[60] h-1 bg-navy-900 pointer-events-none">
      <div
        className="h-full bg-gold-400 transition-transform duration-150 ease-out"
        style={{ transform: `scaleX(${progress / 100})`, transformOrigin: "left" }}
      />
    </div>
  );
}
