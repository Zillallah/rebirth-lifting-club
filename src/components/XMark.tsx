// TODO [operator-verify]: Do the four letters (L, R, C, B) carry a
// specific meaning? Title and aria-label kept generic until confirmed.

type Props = {
  size?: number;
  color?: string;
  showCaption?: boolean;
  className?: string;
};

export function XMark({
  size = 48,
  color = "currentColor",
  showCaption = false,
  className,
}: Props) {
  const captionFontSize = Math.max(8, size * 0.07);

  return (
    <div
      className={className}
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        gap: size * 0.12,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Rebirth Lifting Club brand mark"
      >
        <title>Rebirth Lifting Club monogram</title>

        {/* Diagonals — the X */}
        <line
          x1="28" y1="28" x2="172" y2="172"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1="172" y1="28" x2="28" y2="172"
          stroke={color}
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Quadrant letters — Outfit 700 caps via SVG <text> */}
        <text
          x="50" y="68"
          textAnchor="middle"
          fill={color}
          fontFamily="var(--font-body), system-ui, sans-serif"
          fontWeight="700"
          fontSize="44"
        >
          L
        </text>

        {/* R — mirrored on the vertical axis (intentional brand styling) */}
        <g transform="translate(300, 0) scale(-1, 1)">
          <text
            x="150" y="68"
            textAnchor="middle"
            fill={color}
            fontFamily="var(--font-body), system-ui, sans-serif"
            fontWeight="700"
            fontSize="44"
          >
            R
          </text>
        </g>

        <text
          x="50" y="160"
          textAnchor="middle"
          fill={color}
          fontFamily="var(--font-body), system-ui, sans-serif"
          fontWeight="700"
          fontSize="44"
        >
          C
        </text>

        <text
          x="150" y="160"
          textAnchor="middle"
          fill={color}
          fontFamily="var(--font-body), system-ui, sans-serif"
          fontWeight="700"
          fontSize="44"
        >
          B
        </text>
      </svg>

      {showCaption && (
        <span
          style={{
            fontFamily: "var(--font-body), system-ui, sans-serif",
            fontWeight: 600,
            fontSize: `${captionFontSize}px`,
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: "var(--color-coral)",
          }}
        >
          Rebirth Lifting Club
        </span>
      )}
    </div>
  );
}
