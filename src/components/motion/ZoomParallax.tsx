"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

type ZoomParallaxProps = {
  children: ReactNode;
  fromScale?: number;
  toScale?: number;
  className?: string;
};

export function ZoomParallax({
  children,
  fromScale = 1.0,
  toScale = 1.25,
  className = "",
}: ZoomParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [fromScale, toScale]);
  if (reduce) return <div ref={ref} className={className}>{children}</div>;
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}
