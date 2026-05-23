"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function StickyCTA() {
  const [scrolledPastFold, setScrolledPastFold] = useState(false);
  const [overForm, setOverForm] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setScrolledPastFold(window.scrollY > window.innerHeight * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const target = document.getElementById("lead-form");
    if (!target) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setOverForm(entries[0]?.isIntersecting ?? false);
      },
      { threshold: 0.05 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  const visible = scrolledPastFold && !overForm;
  const initial = reduce ? { opacity: 0 } : { opacity: 0, y: 24 };
  const animate = reduce ? { opacity: 1 } : { opacity: 1, y: 0 };
  const exit = reduce ? { opacity: 0 } : { opacity: 0, y: 24 };
  const transition = { duration: reduce ? 0.15 : 0.32, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Mobile bottom bar */}
          <motion.div
            key="sticky-mobile"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-[var(--color-canvas)]/95 backdrop-blur-md border-t border-[var(--color-coral)] md:hidden"
          >
            <a
              href="#lead-form"
              className="flex items-center justify-center h-full w-full text-[var(--color-coral)] font-bold text-[12px] tracking-[0.24em] active:bg-[var(--color-coral)] active:text-[var(--color-canvas)] transition-colors"
            >
              CLAIM FREE SESSION →
            </a>
          </motion.div>

          {/* Desktop floating pill */}
          <motion.a
            key="sticky-desktop"
            href="#lead-form"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={transition}
            className="hidden md:inline-flex fixed bottom-8 right-8 z-50 items-center gap-3 px-6 py-4 bg-[var(--color-coral)] text-[var(--color-canvas)] font-bold text-[12px] tracking-[0.22em] rounded-full shadow-[0_8px_32px_-8px_rgba(229,90,64,0.55)] hover:bg-[var(--color-coral-deep)] transition-colors"
          >
            CLAIM FREE SESSION
            <span className="text-[16px]">→</span>
          </motion.a>
        </>
      )}
    </AnimatePresence>
  );
}
