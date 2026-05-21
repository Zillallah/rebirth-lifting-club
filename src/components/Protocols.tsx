"use client";

import { useState } from "react";

type ProtocolProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

function Protocol({ question, answer, isOpen, onClick }: ProtocolProps) {
  return (
    <div className="border-b border-[var(--color-steel)]/40">
      <button
        type="button"
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 md:py-7 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-bold text-[18px] md:text-[20px] tracking-[-0.005em] text-[var(--color-off-white)] group-hover:text-[var(--color-amber)] transition-colors duration-200 pr-8">
          {question}
        </span>
        <span
          className={`flex-shrink-0 text-[var(--color-amber)] text-[24px] leading-none transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6 md:pb-8" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="font-light text-[15px] md:text-[16px] leading-[1.65] text-[var(--color-off-white)]/75 max-w-[760px] pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

const protocols = [
  {
    q: "Is the gym really staffed 24/7?",
    a: "Yes. Both Hesperia and La Verne are staffed every hour of every day. Walk in at 2 AM and there is a real person at the front desk — no key fob and an empty room.",
  },
  {
    q: "How does the free 3-day pass work?",
    a: "Fill out the form on this page, choose a station, and we'll send a confirmation to your inbox with check-in instructions. Bring an ID when you arrive. No card on file, no auto-enrollment.",
  },
  {
    q: "What's the difference between the contract and no-contract membership?",
    a: "Standard is $30.99/month with a 1-year commitment. Month-to-month is $35.99/month with no contract — cancel anytime. Both include full 24/7 access at both stations.",
  },
  {
    q: "Can I use both locations on one membership?",
    a: "Yes. One membership covers both Hesperia and La Verne. Train wherever you're closer that day.",
  },
  {
    q: "Do you offer personal training?",
    a: "Yes — programmed 1-on-1 sessions with certified trainers. Pricing is custom based on goal and frequency. Call (760) 995-3137 to inquire.",
  },
  {
    q: "What equipment do you have?",
    a: "Full powerlifting and weightlifting rigs, competition platforms, free weights to 150 lbs, cardio machines, and a conditioning floor. Equipment list varies slightly by station — call ahead if you need a specific piece.",
  },
  {
    q: "Is there parking at both locations?",
    a: "Yes, both stations have on-site parking available 24/7. Hesperia has lot access from Main Street; La Verne has lot access from Foothill Boulevard.",
  },
  {
    q: "Do you offer family or kids memberships?",
    a: "Family discounts are available for spouses and dependents on the same household. Kids' policy varies — call (760) 995-3137 to discuss your situation.",
  },
];

export function Protocols() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="protocols" className="relative bg-[var(--color-canvas)] z-80 overflow-hidden py-24 md:py-32">
      <div className="relative w-full max-w-[960px] mx-auto px-6 md:px-12">
        <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em] mb-6">
          008 / PROTOCOLS
        </div>
        <h2 className="font-extrabold text-[40px] md:text-[64px] leading-[1.02] tracking-[-0.025em] text-[var(--color-off-white)] mb-16 md:mb-20">
          Common <span className="text-[var(--color-amber)]">questions.</span>
        </h2>

        <div>
          {protocols.map((p, i) => (
            <Protocol
              key={i}
              question={p.q}
              answer={p.a}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
