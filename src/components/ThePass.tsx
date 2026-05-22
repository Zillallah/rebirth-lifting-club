"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, SlideIn, RevealGroup, RevealItem, CountUp, ZoomReveal } from "./motion";
import { XMark } from "./XMark";

export function ThePass() {
  const [submitted, setSubmitted] = useState(false);
  const [passNumber, setPassNumber] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    station: "HESPERIA",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stored = typeof window !== "undefined" ? localStorage.getItem("rlc_pass_counter") : null;
    const next = (stored ? parseInt(stored, 10) : 246) + 1;
    if (typeof window !== "undefined") localStorage.setItem("rlc_pass_counter", String(next));
    setPassNumber(String(next).padStart(5, "0"));
    setSubmitted(true);
  };

  return (
    <section id="the-pass" className="relative bg-[var(--color-canvas)] z-60 overflow-hidden py-20 md:py-28">
      <div className="relative w-full max-w-[1280px] mx-auto px-6 md:px-12">
        <Reveal>
          <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em] mb-8">
            006 / THE PASS
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div key="form" exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
              <Reveal delay={0.1}>
                <h2 className="font-extrabold text-[44px] md:text-[72px] lg:text-[88px] leading-[1.0] tracking-[-0.025em] text-[var(--color-off-white)] mb-8">
                  Three days. <span className="text-[var(--color-amber)]">No cost.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="font-light text-[16px] md:text-[18px] text-[var(--color-off-white)]/65 max-w-[640px] mb-16 md:mb-20 leading-[1.6]">
                  Both stations. 24/7 access. No card on file. Real members, real equipment, real coaches if you want one.
                </p>
              </Reveal>

              <div className="grid md:grid-cols-[1fr_360px] gap-16 lg:gap-24">
                <SlideIn direction="left" distance={100} duration={1.0}>
                  <form onSubmit={handleSubmit} className="space-y-7">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Field label="FULL NAME" name="name" type="text" value={formData.name} onChange={(v) => setFormData({ ...formData, name: v })} required />
                      <Field label="EMAIL" name="email" type="email" value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} required />
                    </div>
                    <Field label="PHONE" name="phone" type="tel" value={formData.phone} onChange={(v) => setFormData({ ...formData, phone: v })} required />

                    <div>
                      <div className="text-[var(--color-off-white)]/55 font-medium text-[10px] tracking-[0.32em] mb-3">PREFERRED STATION</div>
                      <div className="grid grid-cols-2 gap-3">
                        {["HESPERIA", "LA VERNE"].map((s) => (
                          <button
                            key={s}
                            type="button"
                            onClick={() => setFormData({ ...formData, station: s })}
                            className={`py-3.5 px-4 border-[1.5px] font-bold text-[12px] tracking-[0.22em] transition-all duration-300 ${
                              formData.station === s
                                ? "border-[var(--color-amber)] bg-[var(--color-amber)]/10 text-[var(--color-amber)]"
                                : "border-[var(--color-steel)]/60 text-[var(--color-off-white)]/60 hover:border-[var(--color-amber)]/60"
                            }`}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[var(--color-amber)]/10 border border-[var(--color-amber)]/30 px-4 py-3 text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.22em]">
                      PASS TYPE: 3-DAY · NO COST
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-amber)] text-[var(--color-canvas)] font-bold text-[13px] tracking-[0.22em] hover:bg-[var(--color-amber-deep)] hover:shadow-[0_0_40px_-6px_rgba(244,160,36,0.6)] transition-all duration-300"
                    >
                      ISSUE PASS <span className="text-[18px]">→</span>
                    </button>
                  </form>
                </SlideIn>

                <SlideIn direction="right" distance={100} delay={0.2} duration={1.0}>
                  <RevealGroup stagger={0.18} className="space-y-10 md:space-y-14 pt-2">
                    <RevealItem>
                      <div className="font-extrabold text-[72px] md:text-[88px] leading-[1] tracking-[-0.02em] text-[var(--color-off-white)] mb-3"><CountUp end={21000} /></div>
                      <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em]">INSTAGRAM COMMUNITY</div>
                    </RevealItem>
                    <RevealItem>
                      <div className="font-extrabold text-[72px] md:text-[88px] leading-[1] tracking-[-0.02em] text-[var(--color-off-white)] mb-3">24/7</div>
                      <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em]">STAFFED, EVERY HOUR</div>
                    </RevealItem>
                    <RevealItem>
                      <div className="font-extrabold text-[72px] md:text-[88px] leading-[1] tracking-[-0.02em] text-[var(--color-off-white)] mb-3"><CountUp end={2018} duration={2.4} /></div>
                      <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em]">VETERAN-OWNED</div>
                    </RevealItem>
                  </RevealGroup>
                </SlideIn>
              </div>
            </motion.div>
          ) : (
            <ZoomReveal from="out" startScale={0.7} duration={1.0}>
              <div className="text-center py-20 md:py-32">
                <div className="flex justify-center mb-8">
                  <XMark size={120} opacity={0.9} />
                </div>
                <div className="text-[var(--color-amber)] font-semibold text-[12px] tracking-[0.32em] mb-8">
                  PASS #{passNumber} ISSUED
                </div>
                <h2 className="font-extrabold text-[56px] md:text-[88px] leading-[1] tracking-[-0.025em] text-[var(--color-off-white)] mb-8">
                  Check your inbox<span className="text-[var(--color-amber)]">.</span>
                </h2>
                <p className="font-light text-[18px] md:text-[20px] text-[var(--color-off-white)]/65 max-w-[520px] mx-auto leading-[1.55]">
                  We&apos;ll see you at the {formData.station === "HESPERIA" ? "Hesperia" : "La Verne"} door. Bring an ID.
                </p>
              </div>
            </ZoomReveal>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
};

function Field({ label, name, type, value, onChange, required }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-[var(--color-off-white)]/55 font-medium text-[10px] tracking-[0.32em] mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-transparent border-b-[1.5px] border-[var(--color-steel)]/60 focus:border-[var(--color-amber)] outline-none py-3.5 text-[var(--color-off-white)] font-light text-[16px] transition-colors duration-200"
      />
    </div>
  );
}
