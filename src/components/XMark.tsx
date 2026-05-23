"use client";

// TODO [operator-verify]: Confirm whether L/R/C/B letters carry a
// specific meaning ("Lifting · Rebirth · Built · Club" or similar) to
// populate alt text. Until confirmed, aria-label reads "Rebirth Lifting
// Club brand mark."

type XMarkProps = {
  size?: number;
  color?: string;
  showCaption?: boolean;
  className?: string;
};

export function XMark({ size = 48, color = "currentColor", showCaption = false, className = "" }: XMarkProps) {
  const w = size;
  const h = showCaption ? size + Math.round(size * 0.32) : size;

  return (
    <div className={`inline-flex flex-col items-center ${className}`} style={{ color }}>
      <svg
        width={w}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        aria-label="Rebirth Lifting Club brand mark"
        role="img"
      >
        <line x1="10" y1="10" x2="90" y2="90" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <line x1="90" y1="10" x2="10" y2="90" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <text x="22" y="30" fontFamily="var(--font-outfit), system-ui, sans-serif" fontSize="16" fontWeight="800" fill="currentColor" textAnchor="middle">L</text>
        <text x="78" y="30" fontFamily="var(--font-outfit), system-ui, sans-serif" fontSize="16" fontWeight="800" fill="currentColor" textAnchor="middle" transform="scale(-1 1) translate(-156 0)">R</text>
        <text x="22" y="82" fontFamily="var(--font-outfit), system-ui, sans-serif" fontSize="16" fontWeight="800" fill="currentColor" textAnchor="middle">C</text>
        <text x="78" y="82" fontFamily="var(--font-outfit), system-ui, sans-serif" fontSize="16" fontWeight="800" fill="currentColor" textAnchor="middle">B</text>
      </svg>
      {showCaption && (
        <span
          className="font-bold tracking-[0.28em] mt-2 whitespace-nowrap"
          style={{ fontSize: Math.max(8, Math.round(size * 0.11)), color }}
        >
          REBIRTH LIFTING CLUB
        </span>
      )}
    </div>
  );
}
