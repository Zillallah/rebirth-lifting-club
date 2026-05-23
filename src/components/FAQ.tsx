"use client";

import { FadeUp } from "./motion/FadeUp";

type Item = { q: string; a: React.ReactNode };

const ITEMS: Item[] = [
  {
    q: "Is it really open 24/7?",
    a: (
      <>
        Yes. Both stations are not only open but <strong className="font-semibold text-[var(--color-off-white)]">staffed</strong> at all hours.
        Most 24-hour gyms go unmanned after 10pm — we don&apos;t.
      </>
    ),
  },
  {
    q: "What's included with a membership?",
    a: (
      <>
        24/7 access to both stations. Squat racks, dumbbells to 150, full Olympic platform, conditioning, sleds, mobility space. No enrollment fee.
      </>
    ),
  },
  {
    q: "Do you offer personal training?",
    a: <>Yes. Custom Training is available — start with a free session.</>,
  },
  {
    q: "Can I bring a guest?",
    a: (
      <>
        Yes. Day passes are available <strong className="font-semibold text-[var(--color-off-white)]">anytime</strong> at
        the front desk — we&apos;re staffed around the clock.
      </>
    ),
  },
  {
    q: "What's the difference between Contract and Month-to-Month?",
    a: (
      <>
        Contract is $45.99/mo on a 12-month commitment. Month-to-Month is $50.99/mo, cancel anytime. Same access, both stations.
      </>
    ),
  },
  {
    q: "How does the free session work?",
    a: (
      <>
        Fill the form below — we&apos;ll reach out within 24 hours to book your slot at whichever station you choose.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative bg-[var(--color-canvas)] py-32 md:py-40 overflow-hidden border-t border-[var(--color-steel)]/30">
      <div className="w-full max-w-[64ch] mx-auto px-6 md:px-12">

        <FadeUp duration={1.1} className="mb-12 md:mb-16 text-center">
          <div className="text-[var(--color-coral)] font-semibold text-[11px] tracking-[0.32em] mb-5">
            QUESTIONS · 03
          </div>
          <h2 className="display text-[44px] sm:text-[64px] md:text-[80px] leading-[0.95] tracking-[-0.02em] text-[var(--color-off-white)]">
            Before you walk in.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1} duration={1.0}>
          <div className="divide-y divide-[var(--color-steel)]/30 border-y border-[var(--color-steel)]/30">
            {ITEMS.map((item, i) => (
              <details key={i} className="group py-6 md:py-7">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none">
                  <span className="font-semibold text-[16px] md:text-[18px] leading-[1.4] text-[var(--color-off-white)]">
                    {item.q}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[var(--color-coral)] text-[22px] leading-none mt-1 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-4 font-light text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-off-white)]/75">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
