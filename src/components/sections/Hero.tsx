import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import HeroContent from "./HeroContent";

/**
 * Hero — section 001, z-0.
 * Type-led composition with 40%-opacity asset behind. Sticky-pinned for ~1
 * viewport, then IG proof strip emerges from below.
 *
 * Asset detection is server-side at build time via fs.existsSync. Drop the
 * file in /public/ and redeploy — no code changes required.
 *   /public/hero.mp4 (+ optional hero-poster.jpg) — preferred if present
 *   /public/hero.jpg — fallback if no video
 *   neither — placeholder slot
 */
export default function Hero() {
  const publicDir = path.join(process.cwd(), "public");
  const hasVideo = fs.existsSync(path.join(publicDir, "hero.mp4"));
  const hasPoster = fs.existsSync(path.join(publicDir, "hero-poster.jpg"));
  const hasImage = fs.existsSync(path.join(publicDir, "hero.jpg"));

  return (
    <section
      id="hero"
      className="relative z-0 min-h-[175vh] overflow-hidden bg-canvas"
    >
      {/* ============================================================ */}
      {/*  STICKY INNER — the hero pin                                 */}
      {/* ============================================================ */}
      <div className="pointer-events-auto sticky top-0 flex min-h-screen items-center bg-canvas px-6 py-12 md:px-12 md:py-16">
        {/* Asset layer — absolute, bottom of z-stack */}
        <div aria-hidden="true" className="absolute inset-0">
          {hasVideo ? (
            <video
              src="/hero.mp4"
              poster={hasPoster ? "/hero-poster.jpg" : undefined}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            />
          ) : hasImage ? (
            <Image
              src="/hero.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "center" }}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-steel/10">
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-tactical">
                [HERO ASSET SLOT]
              </span>
            </div>
          )}
          {/* 40% canvas overlay — brings asset to 40% effective opacity */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-canvas opacity-40"
          />
          {/* Bottom-up contrast gradient — keeps subhead + CTA readable */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-transparent"
          />
        </div>

        {/* Type composition + CTA (client component for animations) */}
        <HeroContent />
      </div>

      {/* ============================================================ */}
      {/*  IG PROOF STRIP — emerges below the pin                      */}
      {/* ============================================================ */}
      <HeroProofStrip />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  IG Proof Strip — server component, fs-checks each tile.           */
/* ------------------------------------------------------------------ */

function HeroProofStrip() {
  const socialDir = path.join(process.cwd(), "public", "social");
  const tiles = [1, 2, 3, 4].map((n) => ({
    n,
    src: `/social/ig-0${n}.jpg`,
    exists: fs.existsSync(path.join(socialDir, `ig-0${n}.jpg`)),
  }));

  return (
    <div className="relative bg-canvas px-6 py-16 md:px-12 md:py-24">
      <p className="mb-8 font-mono text-xs uppercase tracking-[0.22em] text-off-white md:mb-12 md:text-sm">
        21,000 LIFTERS FOLLOW US. NONE OF THEM ARE INFLUENCERS.
      </p>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4">
        {tiles.map(({ n, src, exists }) => (
          <div
            key={n}
            className="relative aspect-square overflow-hidden transition-all duration-200 hover:-translate-y-[1px] hover:ring-1 hover:ring-accent"
          >
            {exists ? (
              <Image
                src={src}
                alt={`Rebirth Lifting Club Instagram post ${n}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-steel/20">
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-tactical">
                  [IG-0{n}]
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 md:mt-8">
        <a
          href="https://instagram.com/rebirthliftingclub"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-[0.22em] text-tactical transition-colors duration-200 hover:text-accent md:text-sm"
        >
          @rebirthliftingclub →
        </a>
      </p>
    </div>
  );
}
