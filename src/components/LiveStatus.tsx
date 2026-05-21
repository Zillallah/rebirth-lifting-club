"use client";

import { useEffect, useState } from "react";

/**
 * Live time + STAFFED · OPEN status — V2 §6.7.
 * Hydration-safe (renders an invisible placeholder until mounted to avoid
 * SSR/client mismatch), then ticks every 30 seconds. Soft amber pulse on
 * the dot via the `animate-pulse-soft` keyframe in globals.css.
 */
export default function LiveStatus() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    setMounted(true);
    const update = () => {
      const d = new Date();
      const h = d.getHours() % 12 || 12;
      const m = d.getMinutes().toString().padStart(2, "0");
      const ampm = d.getHours() < 12 ? "AM" : "PM";
      setTime(`${h}:${m} ${ampm}`);
    };
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) {
    return (
      <div className="opacity-0" aria-hidden>
        —
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 font-body text-xs font-medium tracking-[0.18em] text-off-white">
      <span
        aria-hidden
        className="inline-block h-2 w-2 animate-pulse-soft rounded-full bg-amber shadow-[0_0_10px_var(--color-amber-glow)]"
      />
      <span>{time} · STAFFED · OPEN</span>
    </div>
  );
}
