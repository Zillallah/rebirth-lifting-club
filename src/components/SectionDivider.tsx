'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <div ref={ref} className="py-20 md:py-28 flex justify-center">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="h-px w-32 bg-coral origin-left"
      />
    </div>
  );
}
