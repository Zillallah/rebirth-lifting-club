"use client";

import { motion } from "framer-motion";

export function XDivider() {
  return (
    <div
      className="relative w-full flex items-center justify-center py-16 md:py-24 bg-[var(--color-canvas)]"
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 80 80"
        className="w-14 h-14 md:w-20 md:h-20 text-[var(--color-amber)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.4, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.line
          x1="12"
          y1="12"
          x2="68"
          y2="68"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.line
          x1="68"
          y1="12"
          x2="12"
          y2="68"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.svg>
    </div>
  );
}
