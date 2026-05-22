"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "h1" | "h2" | "h3" | "p" | "span";
};

export function Reveal({
  children,
  delay = 0,
  duration = 0.9,
  y = 40,
  className = "",
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  if (reduce) return <MotionTag className={className}>{children}</MotionTag>;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  stagger?: number;
  className?: string;
};

export function RevealGroup({ children, stagger = 0.14, className = "" }: RevealGroupProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ visible: { transition: { staggerChildren: stagger } } }}
    >
      {children}
    </motion.div>
  );
}

type RevealItemProps = {
  children: ReactNode;
  y?: number;
  className?: string;
  as?: "div" | "h1" | "h2" | "h3" | "p" | "span" | "li";
};

export function RevealItem({ children, y = 40, className = "", as = "div" }: RevealItemProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}
