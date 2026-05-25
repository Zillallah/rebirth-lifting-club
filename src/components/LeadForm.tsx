"use client";

import { useMemo, useState } from "react";
import { FadeUp } from "./motion/FadeUp";
import { XMark } from "./XMark";

type Status = "idle" | "submitting" | "success" | "error";
type Location = "hesperia" | "la_verne";

type FieldErrors = Partial<Record<
  "firstName" | "lastName" | "phone" | "email" | "location",
  string
>>;

const STATIONS: { value: Location; label: string }[] = [
  { value: "hesperia", label: "Hesperia, CA" },
  { value: "la_verne", label: "La Verne, CA" },
];

export function LeadForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState<Location | "">("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const stepLit = useMemo(() => {
    const detailsAny = firstName || lastName || phone || email;
    return {
      one: Boolean(location),
      two: Boolean(detailsAny),
      three: status === "submitting" || status === "success",
    };
  }, [location, firstName, lastName, phone, email, status]);

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!firstName.trim()) next.firstName = "Required";
    if (!lastName.trim()) next.lastName = "Required";
    if (!phone.trim()) next.phone = "Required";
    if (!email.trim()) next.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Invalid email";
    if (!location) next.location = "Required";
    return next;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          phone,
          email,
          location,
        }),
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="lead-form"
      className="relative bg-[var(--color-canvas)] py-32 overflow-hidden scroll-mt-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left — proof + 3-step indicator */}
        <div className="lg:col-span-6 space-y-8">
          <FadeUp>
            <span className="eyebrow">Step In · 09</span>
          </FadeUp>

          <FadeUp delay={120}>
            <h2 className="display section-opener text-[var(--color-off)]">
              Claim your free session.
            </h2>
          </FadeUp>

          <FadeUp delay={240}>
            <p className="text-[var(--color-off)] text-base md:text-lg leading-relaxed max-w-[50ch]">
              Pick a station. Tell us about you. We&apos;ll text you a time
              within 24 hours.
            </p>
          </FadeUp>

          <FadeUp delay={360}>
            <ol className="flex flex-wrap gap-3 mt-2">
              <StepPill n={1} label="Choose Station" lit={stepLit.one} />
              <StepPill n={2} label="Your Details" lit={stepLit.two} />
              <StepPill n={3} label="Submit" lit={stepLit.three} />
            </ol>
          </FadeUp>
        </div>

        {/* Right — form card or success state */}
        <div className="lg:col-span-6">
          {status === "success" ? (
            <SuccessCard />
          ) : (
            <form
              onSubmit={onSubmit}
              className="bg-[var(--color-carbon)] border border-[var(--color-steel)]/60 rounded-2xl p-8 md:p-10"
              noValidate
            >
              <h3 className="text-[var(--color-off)] text-xl md:text-2xl font-semibold">
                Claim Your FREE Personal Training Session
              </h3>
              <p className="mt-2 text-[var(--color-steel)] text-xs md:text-sm leading-relaxed">
                By entering your phone number, you consent to receive SMS
                messages.
              </p>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                <Field
                  label="First Name"
                  value={firstName}
                  onChange={setFirstName}
                  error={errors.firstName}
                  required
                  autoComplete="given-name"
                />
                <Field
                  label="Last Name"
                  value={lastName}
                  onChange={setLastName}
                  error={errors.lastName}
                  required
                  autoComplete="family-name"
                />
                <Field
                  label="Phone"
                  type="tel"
                  value={phone}
                  onChange={setPhone}
                  error={errors.phone}
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[0-9()\-\s+]{7,}"
                />
                <Field
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  error={errors.email}
                  required
                  autoComplete="email"
                  inputMode="email"
                />
              </div>

              <fieldset className="mt-6">
                <legend className="text-[var(--color-off)] text-sm font-medium mb-3">
                  Location <span className="text-[var(--color-coral)]">*</span>
                </legend>
                <div className="flex flex-wrap gap-3">
                  {STATIONS.map((s) => {
                    const active = location === s.value;
                    return (
                      <label
                        key={s.value}
                        className={`cursor-pointer inline-flex items-center h-12 px-5 rounded-full border transition-colors duration-150 ${
                          active
                            ? "bg-[var(--color-coral)] border-[var(--color-coral)] text-[var(--color-off)]"
                            : "bg-transparent border-[var(--color-steel)] text-[var(--color-off)] hover:border-[var(--color-coral)]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="location"
                          value={s.value}
                          checked={active}
                          onChange={() => setLocation(s.value)}
                          className="sr-only"
                          required
                        />
                        <span className="text-sm font-medium tracking-wide">
                          {s.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
                {errors.location && (
                  <p className="mt-2 text-[var(--color-coral)] text-xs">
                    {errors.location}
                  </p>
                )}
              </fieldset>

              {status === "error" && (
                <p
                  role="alert"
                  className="mt-6 text-[var(--color-coral)] text-sm"
                >
                  Something didn&apos;t go through. Try again, or call{" "}
                  <a href="tel:+17609953137" className="underline">
                    (760) 995-3137
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-8 inline-flex items-center justify-center w-full h-14 px-8 bg-[var(--color-coral)] text-[var(--color-off)] font-semibold text-sm tracking-[0.18em] uppercase rounded-full transition-[filter] duration-200 hover:brightness-110 disabled:opacity-60"
              >
                {status === "submitting" ? "Sending…" : "Claim My Free Session"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function StepPill({
  n,
  label,
  lit,
}: {
  n: number;
  label: string;
  lit: boolean;
}) {
  return (
    <li
      className={`inline-flex items-center gap-3 h-10 pl-2 pr-4 rounded-full border text-xs tracking-[0.18em] uppercase font-semibold transition-colors duration-200 ${
        lit
          ? "border-[var(--color-coral)] text-[var(--color-coral)]"
          : "border-[var(--color-steel)] text-[var(--color-off)]/60"
      }`}
    >
      <span
        className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold transition-colors duration-200 ${
          lit
            ? "bg-[var(--color-coral)] text-[var(--color-canvas)]"
            : "bg-[var(--color-steel)]/40 text-[var(--color-off)]"
        }`}
      >
        0{n}
      </span>
      {label}
    </li>
  );
}

function SuccessCard() {
  return (
    <div className="bg-[var(--color-carbon)] border border-[var(--color-coral)]/60 rounded-2xl p-10 md:p-12 text-center">
      <div className="flex justify-center text-[var(--color-coral)]">
        <XMark size={96} color="currentColor" />
      </div>
      <p className="display text-3xl md:text-4xl text-[var(--color-off)] mt-6">
        We&apos;ve got you. Watch your phone.
      </p>
      <a
        href="#stations"
        className="mt-8 inline-flex items-center gap-2 text-[var(--color-coral)] text-sm tracking-[0.18em] uppercase font-semibold hover:underline"
      >
        Back to stations
      </a>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  error,
  autoComplete,
  inputMode,
  pattern,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  error?: string;
  autoComplete?: string;
  inputMode?: "tel" | "email" | "text" | "numeric" | "decimal";
  pattern?: string;
}) {
  const id = `f-${label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    <label htmlFor={id} className="block">
      <span className="block text-[var(--color-off)] text-sm font-medium mb-2">
        {label}
        {required && <span className="text-[var(--color-coral)]"> *</span>}
      </span>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        pattern={pattern}
        className="w-full h-12 px-4 bg-[var(--color-canvas)] border border-[var(--color-steel)] rounded-md text-[var(--color-off)] text-base placeholder:text-[var(--color-steel)] focus:outline-none focus:border-[var(--color-coral)] transition-colors duration-150"
      />
      {error && (
        <span className="mt-1 block text-[var(--color-coral)] text-xs">
          {error}
        </span>
      )}
    </label>
  );
}
