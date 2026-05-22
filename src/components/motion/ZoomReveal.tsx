"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type ZoomRevealProps = {
  children: ReactNode;
  from?: "in" | "out";
  startScale?: number;
  delay?: number;
  duration?: number;
  className?: string;
};

export function ZoomReveal({
  children,
  from = "in",
  startScale,
  delay = 0,
  duration = 1.1,
  className = "",
}: ZoomRevealProps) {
  const reduce = useReducedMotion();
  const initialScale = startScale ?? (from === "in" ? 1.25 : 0.82);
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: initialScale }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
