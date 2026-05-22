"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type SlideInItemProps = {
  children: ReactNode;
  direction?: "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  className?: string;
};

export function SlideInItem({ children, direction = "left", delay = 0, duration = 1.0, distance = 80, className = "" }: SlideInItemProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: direction === "left" ? -distance : distance }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
