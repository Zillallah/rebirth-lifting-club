"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function StickyCTA() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [overForm, setOverForm] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const form = document.getElementById("lead-form");
    if (!form) return;
    const io = new IntersectionObserver(
      ([entry]) => setOverForm(entry.isIntersecting),
      { threshold: 0.05 }
    );
    io.observe(form);
    return () => io.disconnect();
  }, []);

  const show = visible && !overForm;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="fixed z-[60] inset-x-0 bottom-0 md:inset-x-auto md:right-8 md:bottom-8"
        >
          <div className="bg-[color-mix(in_srgb,var(--color-canvas)_95%,transparent)] backdrop-blur border-t border-[var(--color-coral)] md:border-none md:rounded-full md:shadow-[var(--shadow-glow)]">
            <div className="flex items-center justify-center h-16 px-6 md:h-auto md:p-2">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center h-12 md:h-12 px-8 bg-[var(--color-coral)] text-[var(--color-off)] font-semibold text-sm tracking-[0.18em] uppercase rounded-full transition-[filter] duration-200 hover:brightness-110 w-full md:w-auto"
              >
                Claim Free Session
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
