"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MarqueeProps = {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
};

export function Marquee({
  children,
  speed = 40,
  direction = "left",
  className = "",
}: MarqueeProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden>{children}</div>
      </motion.div>
    </div>
  );
}
