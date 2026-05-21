type Size = "sm" | "md" | "lg" | "xl";
type Variant = "outline" | "glow" | "architectural";

type XMarkProps = {
  size?: Size;
  variant?: Variant;
  className?: string;
};

const SIZE_PX: Record<Size, number> = {
  sm: 32,
  md: 64,
  lg: 160,
  xl: 480,
};

/**
 * The Rebirth X mark — graphic system component (V2 §6.5).
 *
 * Two crossing diagonals, amber-colored, drawn in a 0-100 viewBox so the
 * SVG scales cleanly. Three variants control treatment:
 *   - outline:        thin lines only — used as section accent / watermark
 *   - glow:           thin lines + drop-glow + L/R/B/C quadrant letters
 *   - architectural:  thicker rounded lines — matches hero video's neon
 */
export default function XMark({
  size = "md",
  variant = "outline",
  className = "",
}: XMarkProps) {
  const px = SIZE_PX[size];
  const isGlow = variant === "glow";
  const isArchitectural = variant === "architectural";
  // Stroke scales modestly with size — proportional but always at least 1px
  const baseStroke = Math.max(1, px / 60);
  const stroke = isArchitectural ? baseStroke * 1.8 : baseStroke;

  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 100 100"
      fill="none"
      className={[
        "text-amber",
        isGlow ? "drop-shadow-[0_0_12px_rgba(244,160,36,0.5)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden
    >
      <line
        x1="20"
        y1="20"
        x2="80"
        y2="80"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap={isArchitectural ? "round" : "butt"}
      />
      <line
        x1="80"
        y1="20"
        x2="20"
        y2="80"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap={isArchitectural ? "round" : "butt"}
      />

      {/* Quadrant letters — only on glow variant, only when X is large enough
          to carry them (renders at outer corners of the 0-100 viewBox). */}
      {isGlow && px >= 80 && (
        <g
          fill="currentColor"
          fontFamily="var(--font-outfit), system-ui, sans-serif"
          fontWeight={800}
          fontSize="11"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          <text x="10" y="14">L</text>
          <text x="90" y="14">R</text>
          <text x="10" y="92">B</text>
          <text x="90" y="92">C</text>
        </g>
      )}
    </svg>
  );
}
