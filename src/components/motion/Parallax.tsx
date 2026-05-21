"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

type ParallaxProps = {
  children: ReactNode;
  speed?: number; // negative = moves up slower (background feel), positive = moves up faster (foreground)
  className?: string;
};

export function Parallax({ children, speed = -0.3, className = "" }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // speed * 200 = max displacement in px
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div ref={ref} className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
