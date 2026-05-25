import { FadeUp } from "./motion/FadeUp";

export function Doctrine() {
  return (
    <section className="relative bg-[var(--color-canvas)] py-40 md:py-56 overflow-hidden">
      {/* Dumbbell-racks still at 8% opacity — stand-in until extracted frame. */}
      <div
        aria-hidden
        className="absolute inset-0 z-0 opacity-[0.08] bg-cover bg-center"
        style={{ backgroundImage: "url('/inside-club-bg.jpg')" }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-12 text-center">
        <FadeUp>
          <p className="display doctrine-close text-[var(--color-off)]">
            First we run.
          </p>
        </FadeUp>

        <FadeUp delay={180}>
          <p className="display doctrine-close text-[var(--color-off)] pl-[1.2em]">
            Then we lift.
          </p>
        </FadeUp>

        <FadeUp delay={420}>
          <p className="mt-12 eyebrow">
            Rebirth Athletics · Rebirth Run Club · Boneyard Run Club · BodyGoods
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
