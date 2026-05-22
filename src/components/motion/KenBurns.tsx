"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

type KenBurnsProps = {
  children: ReactNode;
  fromScale?: number;
  toScale?: number;
  className?: string;
};

export function KenBurns({
  children,
  fromScale = 1.0,
  toScale = 1.18,
  className = "",
}: KenBurnsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [fromScale, toScale]);

  if (reduce) return <div ref={ref} className={className}>{children}</div>;
  return (
    <div ref={ref} className={`${className} overflow-hidden`}>
      <motion.div style={{ scale }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
}
