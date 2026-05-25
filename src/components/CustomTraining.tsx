import { FadeUp } from "./motion/FadeUp";

export function CustomTraining() {
  return (
    <section className="relative bg-[var(--color-canvas)] py-32 md:py-40 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="max-w-[60ch] mx-auto text-center">
          <FadeUp>
            <span className="eyebrow">Custom Training · 06</span>
          </FadeUp>

          <FadeUp delay={120}>
            <h2 className="display text-4xl md:text-5xl text-[var(--color-off)] mt-4">
              Or train one-on-one.
            </h2>
          </FadeUp>

          <FadeUp delay={240}>
            <p className="mt-6 text-[var(--color-off)] text-base md:text-lg leading-relaxed">
              Programming, accountability, real coaching. Start with a free
              session below.
            </p>
          </FadeUp>

          <FadeUp delay={360}>
            <a
              href="#lead-form"
              className="mt-8 inline-flex items-center gap-2 text-[var(--color-coral)] text-sm tracking-[0.18em] uppercase font-semibold hover:underline"
            >
              Claim Free Session <span>↓</span>
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
