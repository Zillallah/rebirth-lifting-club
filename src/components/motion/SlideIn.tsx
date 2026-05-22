"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type SlideInProps = {
  children: ReactNode;
  direction?: "left" | "right" | "up" | "down";
  distance?: number;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "span";
};

export function SlideIn({
  children,
  direction = "left",
  distance = 120,
  delay = 0,
  duration = 1.0,
  className = "",
  as = "div",
}: SlideInProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  const offset = {
    left: { x: -distance, y: 0 },
    right: { x: distance, y: 0 },
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
  }[direction];
  if (reduce) return <MotionTag className={className}>{children}</MotionTag>;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
