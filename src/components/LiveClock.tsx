"use client";

import { useEffect, useState } from "react";

type LiveClockProps = {
  variant?: "nav" | "footer";
};

export function LiveClock({ variant = "nav" }: LiveClockProps) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    // SSR placeholder — same dimensions, invisible to prevent layout shift
    return (
      <div className="inline-flex items-center gap-3 text-[var(--color-off-white)]/0">
        <span>STAFFED</span>
        <span>00:00:00</span>
      </div>
    );
  }

  const hh = now.getHours();
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const period = hh >= 12 ? "PM" : "AM";
  const h12 = hh % 12 === 0 ? 12 : hh % 12;
  const timeStr = `${h12}:${mm}:${ss} ${period}`;

  if (variant === "footer") {
    return (
      <div className="inline-flex items-baseline gap-3 font-mono text-[var(--color-off-white)]">
        <span className="relative flex h-2 w-2 self-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-amber)] opacity-75 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-amber)]" />
        </span>
        <span className="text-[11px] tracking-[0.32em] font-semibold">STAFFED</span>
        <span className="text-[14px] tracking-[0.08em] tabular-nums">{timeStr}</span>
      </div>
    );
  }

  // nav variant
  return (
    <div className="inline-flex items-baseline gap-3 font-mono">
      <span className="relative flex h-2 w-2 self-center">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-amber)] opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-amber)]" />
      </span>
      <span className="text-[10px] tracking-[0.32em] font-semibold text-[var(--color-off-white)]">STAFFED</span>
      <span className="text-[12px] tracking-[0.08em] tabular-nums text-[var(--color-off-white)]">{timeStr}</span>
      <span className="text-[10px] tracking-[0.32em] font-semibold text-[var(--color-off-white)]/55 hidden md:inline">
        HESPERIA · LA VERNE
      </span>
    </div>
  );
}
