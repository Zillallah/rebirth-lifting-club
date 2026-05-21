"use client";

import { useEffect, useState } from "react";

export function LiveStatus() {
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    setMounted(true);

    const update = () => {
      const d = new Date();
      const h12 = d.getHours() % 12 || 12;
      const m = d.getMinutes().toString().padStart(2, "0");
      const ampm = d.getHours() < 12 ? "AM" : "PM";
      setTime(`${h12}:${m} ${ampm}`);
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
    <div className="flex items-center gap-3 font-medium text-[12px] tracking-[0.18em] text-[var(--color-off-white)]">
      <span className="w-2 h-2 rounded-full bg-[var(--color-amber)] shadow-[0_0_10px_rgba(244,160,36,0.6)] animate-pulse-soft" />
      <span>
        {time} · STAFFED · OPEN
      </span>
    </div>
  );
}
