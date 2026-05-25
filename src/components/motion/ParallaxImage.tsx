"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  depth?: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

export function ParallaxImage({
  src,
  alt,
  width,
  height,
  depth = 0.6,
  className,
  imgClassName,
  priority,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range = 40 * depth;
  const y = useTransform(scrollYProgress, [0, 1], [-range, range]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }} className="will-change-transform">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(min-width: 1024px) 40vw, 80vw"
          className={imgClassName}
        />
      </motion.div>
    </div>
  );
}
