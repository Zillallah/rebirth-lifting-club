import { FadeUp } from "./motion/FadeUp";

type Item = { q: string; a: string };

const items: Item[] = [
  {
    q: "Is it really open 24/7?",
    a: "Yes. Both stations are not only open but staffed at all hours. Most 24-hour gyms go unmanned after 10pm — we don't.",
  },
  {
    q: "What's included with a membership?",
    a: "24/7 access to both stations. Squat racks, dumbbells to 150, full Olympic platform, conditioning, sleds, mobility space. No enrollment fee.",
  },
  {
    q: "Do you offer personal training?",
    a: "Yes. Custom Training is available — start with a free session.",
  },
  {
    q: "Can I bring a guest?",
    a: "Yes. Day passes are available anytime at the front desk — we're staffed around the clock.",
  },
  {
    q: "What's the difference between Contract and Month-to-Month?",
    a: "Contract is $45.99/mo on a 12-month commitment. Month-to-Month is $50.99/mo, cancel anytime. Same access, both stations.",
  },
  {
    q: "How does the free session work?",
    a: "Fill the form below — we'll reach out within 24 hours to book your slot at whichever station you choose.",
  },
];

export function FAQ() {
  return (
    <section className="relative bg-[var(--color-canvas)] py-32 overflow-hidden">
      <div className="mx-auto max-w-[64ch] px-6 md:px-12">
        <FadeUp className="text-center mb-16 md:mb-20">
          <span className="eyebrow">Questions · 08</span>
          <h2 className="display section-opener text-[var(--color-off)] mt-4">
            Before you walk in.
          </h2>
        </FadeUp>

        <ul className="space-y-0">
          {items.map((item, i) => (
            <li
              key={item.q}
              className="border-t border-[var(--color-steel)]/60 last:border-b last:border-[var(--color-steel)]/60"
            >
              <FadeUp delay={i * 60}>
                <details className="group">
                  <summary className="list-none cursor-pointer flex items-center justify-between py-6 text-[var(--color-off)] font-semibold text-base md:text-lg">
                    <span>{item.q}</span>
                    <span
                      aria-hidden
                      className="text-[var(--color-coral)] text-2xl leading-none transition-transform duration-200 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pr-8 text-[var(--color-off)]/85 text-base leading-relaxed font-normal">
                    {item.a}
                  </p>
                </details>
              </FadeUp>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
