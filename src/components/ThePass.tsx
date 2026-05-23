"use client";

import { useState } from "react";
import { FadeUp } from "./motion/FadeUp";
import { XMark } from "./XMark";

type FormData = {
  name: string;
  email: string;
  phone: string;
  station: "HESPERIA" | "LA VERNE" | "";
};

export function ThePass() {
  const [submitted, setSubmitted] = useState(false);
  const [stationChosen, setStationChosen] = useState(false);
  const [submitHover, setSubmitHover] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    station: "HESPERIA",
  });

  const hasDetails = Boolean(formData.name || formData.email || formData.phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="lead-form"
      className="relative bg-[var(--color-carbon)] py-32 md:py-44 overflow-hidden border-t border-[var(--color-steel)]/30"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">

        {submitted ? (
          <FadeUp className="text-center py-16" duration={1.2}>
            <div className="inline-flex justify-center mb-10">
              <XMark size={64} color="var(--color-coral)" />
            </div>
            <div className="text-[var(--color-coral)] font-semibold text-[11px] tracking-[0.32em] mb-8">
              SESSION REQUESTED
            </div>
            <h2 className="display text-[48px] md:text-[72px] leading-[0.95] tracking-[-0.02em] text-[var(--color-off-white)] mb-6">
              Check your inbox.
            </h2>
            <p className="font-light text-[16px] md:text-[18px] text-[var(--color-off-white)]/65 leading-[1.6] max-w-[480px] mx-auto">
              We&apos;ll reach out within 24 hours to book your slot at{" "}
              {formData.station === "HESPERIA" ? "Hesperia" : "La Verne"}. Bring an ID.
            </p>
          </FadeUp>
        ) : (
          <div className="grid lg:grid-cols-[1fr_minmax(0,520px)] gap-12 lg:gap-20 items-start">

            {/* LEFT — destination headline + proof */}
            <FadeUp duration={1.1} className="lg:sticky lg:top-24">
              <div className="text-[var(--color-coral)] font-semibold text-[11px] tracking-[0.32em] mb-5">
                THE FREE SESSION · 05
              </div>
              <h2 className="display text-[var(--color-off-white)] leading-[0.95] tracking-[-0.02em] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] mb-10">
                Claim your free session.
              </h2>
              <p className="font-light text-[17px] md:text-[19px] leading-[1.6] text-[var(--color-off-white)]/75 max-w-[440px] mb-12">
                Pick a station. Tell us about you. We&apos;ll text you a time within 24 hours.
              </p>
              <div className="grid grid-cols-3 gap-6 max-w-[460px] pt-10 border-t border-[var(--color-steel)]/30">
                <Proof value="21K" label="ON IG" />
                <Proof value="24/7" label="STAFFED" />
                <Proof value="4.7★" label="GOOGLE" />
              </div>
            </FadeUp>

            {/* RIGHT — 3-step indicator + form card */}
            <div>
              <FadeUp delay={0.1} duration={1.0}>
                <ProgressBar
                  step1Lit={Boolean(formData.station) || stationChosen}
                  step2Lit={hasDetails}
                  step3Lit={submitHover}
                />
              </FadeUp>

              <FadeUp delay={0.2} duration={1.0}>
                <div className="bg-[var(--color-canvas)] border border-[var(--color-steel)]/50 p-8 md:p-10">
                  <h3 className="font-semibold text-[18px] md:text-[20px] tracking-[-0.005em] text-[var(--color-off-white)] mb-2 leading-[1.25]">
                    Claim Your FREE Personal Training Session
                  </h3>
                  <p className="text-[var(--color-off-white)]/55 font-light text-[13px] mb-8">
                    First-time visitors only · No card on file.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <Field
                      label="NAME"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={(v) => setFormData({ ...formData, name: v })}
                    />
                    <Field
                      label="EMAIL"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(v) => setFormData({ ...formData, email: v })}
                    />
                    <Field
                      label="PHONE"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(v) => setFormData({ ...formData, phone: v })}
                    />

                    <div>
                      <div className="text-[var(--color-off-white)]/65 font-medium text-[10px] tracking-[0.32em] mb-4">
                        STATION
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {(["HESPERIA", "LA VERNE"] as const).map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => {
                              setFormData({ ...formData, station: s });
                              setStationChosen(true);
                            }}
                            className={`min-h-[48px] py-4 px-4 border-[1.5px] font-bold text-[12px] tracking-[0.22em] transition-all duration-200 ${
                              formData.station === s
                                ? "border-[var(--color-coral)] text-[var(--color-coral)]"
                                : "border-[var(--color-steel)]/50 text-[var(--color-off-white)]/55 hover:border-[var(--color-coral)]/50"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <p className="text-[var(--color-off-white)]/45 font-light text-[12px] leading-[1.55]">
                      By entering your phone number, you consent to receive SMS messages.
                    </p>

                    <button
                      type="submit"
                      onMouseEnter={() => setSubmitHover(true)}
                      onMouseLeave={() => setSubmitHover(false)}
                      onFocus={() => setSubmitHover(true)}
                      onBlur={() => setSubmitHover(false)}
                      className="group w-full inline-flex items-center justify-between px-6 py-5 bg-[var(--color-coral)] text-[var(--color-canvas)] font-bold text-[13px] tracking-[0.22em] hover:bg-[var(--color-coral-deep)] transition-colors duration-200"
                    >
                      CLAIM MY FREE SESSION
                      <span className="text-[18px] transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </form>
                </div>
              </FadeUp>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Proof({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-extrabold text-[28px] md:text-[36px] leading-[0.9] text-[var(--color-coral)] tabular-nums">
        {value}
      </div>
      <div className="text-[var(--color-off-white)]/55 font-medium text-[10px] tracking-[0.28em] mt-2">
        {label}
      </div>
    </div>
  );
}

type ProgressBarProps = { step1Lit: boolean; step2Lit: boolean; step3Lit: boolean };

function ProgressBar({ step1Lit, step2Lit, step3Lit }: ProgressBarProps) {
  const steps = [
    { num: "01", label: "Choose Station", lit: step1Lit },
    { num: "02", label: "Your Details", lit: step2Lit },
    { num: "03", label: "Submit", lit: step3Lit },
  ];
  return (
    <ol className="grid grid-cols-3 gap-2 mb-6">
      {steps.map((s, i) => (
        <li
          key={i}
          className={`flex items-center gap-2 px-3 py-2 border text-[10px] tracking-[0.24em] font-bold transition-colors duration-200 ${
            s.lit
              ? "border-[var(--color-coral)] text-[var(--color-coral)] bg-[var(--color-coral)]/[0.06]"
              : "border-[var(--color-steel)]/40 text-[var(--color-off-white)]/45"
          }`}
        >
          <span className="tabular-nums">{s.num}</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">{s.label.toUpperCase()}</span>
        </li>
      ))}
    </ol>
  );
}

type FieldProps = { label: string; name: string; type: string; value: string; onChange: (v: string) => void };

function Field({ label, name, type, value, onChange }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[var(--color-off-white)]/65 font-medium text-[10px] tracking-[0.32em] mb-3"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full bg-transparent border-b border-[var(--color-steel)]/40 focus:border-[var(--color-coral)] outline-none py-3 text-[var(--color-off-white)] font-light text-[18px] md:text-[20px] tracking-[-0.005em] transition-colors duration-200"
      />
    </div>
  );
}
