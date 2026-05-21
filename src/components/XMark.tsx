type XMarkProps = {
  size?: number;
  opacity?: number;
  className?: string;
  showLetters?: boolean;
};

export function XMark({
  size = 240,
  opacity = 0.08,
  className = "",
  showLetters = false,
}: XMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <g stroke="var(--color-amber)" strokeWidth="2" strokeLinecap="square" fill="none">
        <line x1="40" y1="40" x2="200" y2="200" />
        <line x1="200" y1="40" x2="40" y2="200" />
      </g>
      {showLetters && (
        <g fill="var(--color-amber)" fontFamily="var(--font-display)" fontWeight="700" fontSize="22" textAnchor="middle">
          <text x="120" y="38">L</text>
          <text x="38" y="128">R</text>
          <text x="202" y="128">B</text>
          <text x="120" y="218">C</text>
        </g>
      )}
    </svg>
  );
}
