import { FadeUp } from "./motion/FadeUp";
import { ParallaxImage } from "./motion/ParallaxImage";

export function FromTheAshes() {
  return (
    <section className="relative bg-[var(--color-canvas)] py-32 md:py-48 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7 space-y-10">
          <FadeUp>
            <span className="eyebrow">Manifesto · 01</span>
          </FadeUp>

          <FadeUp delay={120}>
            <h2 className="display section-opener text-[var(--color-off)]">
              From the ashes.
            </h2>
          </FadeUp>

          <FadeUp delay={280}>
            <p className="text-[var(--color-off)] text-base md:text-lg leading-relaxed max-w-[60ch] font-normal">
              USMC veteran-owned. Family-operated. Two stations across the
              High Desert and Inland Empire. Built for the lift — open and
              staffed around the clock, because the iron doesn&apos;t sleep.
            </p>
          </FadeUp>

          <FadeUp delay={440}>
            <p
              className="display text-[var(--color-off)] text-2xl md:text-3xl leading-tight pl-6 border-l-2 border-[var(--color-coral)] max-w-[40ch]"
              style={{ fontWeight: 600 }}
            >
              21,000 watching. 260 testifying. Two stations. Zero off-hours.
            </p>
          </FadeUp>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] grid grid-cols-6 grid-rows-6 gap-3">
            <ParallaxImage
              src="/stills/gym-01.jpg"
              alt="Inside Rebirth — Rogue bumper plates"
              width={800}
              height={1000}
              depth={0.3}
              className="col-span-4 row-span-4 col-start-1 row-start-1"
              imgClassName="w-full h-full object-cover rounded-lg"
            />
            <ParallaxImage
              src="/stills/gym-02.jpg"
              alt="Inside Rebirth — squat rack"
              width={600}
              height={800}
              depth={0.6}
              className="col-span-3 row-span-3 col-start-4 row-start-3 z-10"
              imgClassName="w-full h-full object-cover rounded-lg border-4 border-[var(--color-canvas)]"
            />
            <ParallaxImage
              src="/stills/gym-03.jpg"
              alt="Inside Rebirth — cardio floor"
              width={600}
              height={600}
              depth={1.0}
              className="col-span-3 row-span-2 col-start-1 row-start-5 z-20"
              imgClassName="w-full h-full object-cover rounded-lg border-4 border-[var(--color-canvas)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
