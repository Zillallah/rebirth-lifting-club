"use client";

import { motion, useReducedMotion } from "framer-motion";

type SplitTextProps = {
  children: string;
  by?: "letter" | "word";
  delay?: number;
  stagger?: number;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span" | "p";
};

export function SplitText({
  children,
  by = "word",
  delay = 0,
  stagger = 0.04,
  className = "",
  as = "h2",
}: SplitTextProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.h2;
  if (reduce) return <MotionTag className={className}>{children}</MotionTag>;
  const tokens = by === "letter" ? children.split("") : children.split(" ");
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delayChildren: delay, staggerChildren: stagger }}
      aria-label={children}
    >
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          className="inline-block"
          style={{ whiteSpace: "pre" }}
          variants={{
            hidden: { opacity: 0, y: 60, rotateX: -45 },
            visible: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          aria-hidden
        >
          {token}{by === "word" && i < tokens.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
