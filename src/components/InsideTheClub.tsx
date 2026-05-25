import { FadeUp } from "./motion/FadeUp";

export function InsideTheClub() {
  return (
    <section className="relative h-[80svh] w-full overflow-hidden bg-[var(--color-canvas)]">
      {/* Full-bleed gym pano video — fallback poster shows if /gym-pano-long.mp4 missing.
          TODO [operator-verify]: Drop /public/gym-pano-long.mp4 once captured. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/inside-club-bg.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/gym-pano-long.mp4" type="video/mp4" />
        <source src="/media-3.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-[var(--color-canvas)]/55 z-[1]" />
      <div className="absolute inset-0 vignette z-[1]" />

      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-[1400px] w-full px-6 md:px-12 pb-16 md:pb-24">
          <div className="max-w-[40ch]">
            <FadeUp>
              <p className="display text-[var(--color-off)] text-4xl md:text-6xl leading-tight">
                Premium equipment.
              </p>
            </FadeUp>

            <FadeUp delay={200}>
              <p className="mt-6 text-[var(--color-off)] text-base md:text-lg leading-relaxed">
                Zero commercial feel. Squat racks, dumbbells to 150, full
                Olympic platform, sleds, conditioning. Hesperia and La Verne.
              </p>
            </FadeUp>

            <FadeUp delay={360}>
              <a
                href="#stations"
                className="mt-6 inline-flex items-center gap-2 text-[var(--color-coral)] text-sm tracking-[0.18em] uppercase font-semibold hover:underline"
              >
                Inside the gym <span>→</span>
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
