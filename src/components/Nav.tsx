"use client";

import { useEffect, useState } from "react";

/**
 * Live timestamp + STAFFED NOW indicator (§6.1).
 * Updates every 60 seconds. Renders Pacific time so it reads correctly
 * regardless of visitor timezone. Below 480px, the timestamp collapses
 * to just the pulsing dot — the dot is the proof.
 */
function LiveTimestamp() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      timeZone: "America/Los_Angeles",
      timeZoneName: "short",
    });

    const update = () => {
      const parts = formatter.formatToParts(new Date());
      const hour = parts.find((p) => p.type === "hour")?.value ?? "";
      const minute = parts.find((p) => p.type === "minute")?.value ?? "";
      const period = parts.find((p) => p.type === "dayPeriod")?.value ?? "";
      const tz = parts.find((p) => p.type === "timeZoneName")?.value ?? "";
      setTime(`${hour}:${minute} ${period} ${tz}`);
    };

    update();
    const interval = setInterval(update, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] md:text-[11px]">
      {/* Time + separator: hidden below 480px */}
      <span
        className="hidden text-off-white min-[480px]:inline"
        suppressHydrationWarning
      >
        {time ?? "—:— PST"}
      </span>
      <span
        aria-hidden="true"
        className="hidden text-tactical min-[480px]:inline"
      >
        ·
      </span>

      {/* Always visible: pulsing dot + STAFFED NOW (label hidden on small mobile) */}
      <span className="inline-flex items-center gap-1.5">
        <span
          aria-hidden="true"
          className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
        />
        <span className="text-accent">STAFFED NOW</span>
      </span>
    </div>
  );
}

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-off-white/5 bg-canvas/85 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4 px-4 py-3 md:px-12 md:py-4">
        {/* Logo — text placeholder until SVG drops. Brand wordmark in Fraunces italic. */}
        <a
          href="#hero"
          className="display-italic text-base text-off-white transition-colors hover:text-accent md:text-xl"
        >
          REBIRTH.
        </a>

        {/* Center links — desktop only */}
        <div className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[0.22em] text-off-white/70 md:flex">
          <a href="#marine" className="transition-colors hover:text-accent">
            The Marine
          </a>
          <a href="#membership" className="transition-colors hover:text-accent">
            Membership
          </a>
          <a href="#clubs" className="transition-colors hover:text-accent">
            Locations
          </a>
          <a href="#trial" className="transition-colors hover:text-accent">
            Free Pass
          </a>
        </div>

        {/* Live timestamp right-aligned */}
        <LiveTimestamp />
      </div>
    </nav>
  );
}
