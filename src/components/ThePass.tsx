"use client";

import { useState } from "react";

export function ThePass() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    station: "HESPERIA",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="the-pass" className="relative bg-[var(--color-carbon)] py-32 md:py-44 overflow-hidden">
      <div className="w-full max-w-[760px] mx-auto px-6 md:px-12">

        {submitted ? (
          <div className="text-center py-16">
            <div className="text-[var(--color-amber)] font-semibold text-[11px] tracking-[0.32em] mb-8">
              PASS ISSUED
            </div>
            <h2 className="font-extrabold text-[48px] md:text-[72px] leading-[0.95] tracking-[-0.03em] text-[var(--color-off-white)] mb-6">
              Check your inbox.
            </h2>
            <p className="font-light text-[16px] md:text-[18px] text-[var(--color-off-white)]/65 leading-[1.6] max-w-[420px] mx-auto">
              We&apos;ll see you at the {formData.station === "HESPERIA" ? "Hesperia" : "La Verne"} door. Bring an ID.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-extrabold text-[48px] sm:text-[64px] md:text-[80px] leading-[0.95] tracking-[-0.035em] text-[var(--color-off-white)] mb-16">
              Three days. No cost.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-10">
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
                  {["HESPERIA", "LA VERNE"].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setFormData({ ...formData, station: s })}
                      className={`min-h-[48px] py-4 px-4 border-[1.5px] font-bold text-[12px] tracking-[0.22em] transition-all duration-200 ${
                        formData.station === s
                          ? "border-[var(--color-amber)] text-[var(--color-amber)]"
                          : "border-[var(--color-steel)]/50 text-[var(--color-off-white)]/55 hover:border-[var(--color-amber)]/50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="group w-full inline-flex items-center justify-between px-6 py-5 bg-[var(--color-amber)] text-[var(--color-canvas)] font-bold text-[13px] tracking-[0.22em] hover:bg-[var(--color-off-white)] transition-colors duration-200"
              >
                ISSUE PASS
                <span className="text-[18px] transition-transform group-hover:translate-x-1">→</span>
              </button>
            </form>
          </>
        )}
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
};

function Field({ label, name, type, value, onChange }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-[var(--color-off-white)]/65 font-medium text-[10px] tracking-[0.32em] mb-3">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full bg-transparent border-b border-[var(--color-steel)]/40 focus:border-[var(--color-amber)] outline-none py-3 text-[var(--color-off-white)] font-light text-[18px] md:text-[20px] tracking-[-0.005em] transition-colors duration-200"
      />
    </div>
  );
}
