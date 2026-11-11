"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Icon from "@/components/ui/Icon";
import { PROJECT_TYPES, submitInquiry, validateInquiry } from "@/lib/forms";

const empty = { name: "", email: "", company: "", phone: "", projectType: "", description: "" };
const field = "w-full border bg-transparent px-4 py-3.5 text-sm text-bone placeholder:text-bone/45 transition-colors duration-300 hairline hover:border-bone/40 focus:border-ember focus:outline-none";

function Field({ id, label, required, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="label mb-2 block text-[0.65rem] text-bone/75">
        {label}
        {required && <span className="text-ember" aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-2 text-xs text-flare">
          {error}
        </p>
      )}
    </div>
  );
}

export default function InquiryForm() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | done | failed

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((x) => ({ ...x, [k]: undefined }));
  };

  const props = (k) => ({
    id: k,
    name: k,
    value: values[k],
    onChange: set(k),
    "aria-invalid": errors[k] ? "true" : undefined,
    "aria-describedby": errors[k] ? `${k}-error` : undefined,
    className: `${field} ${errors[k] ? "!border-flare" : ""}`,
  });

  async function onSubmit(e) {
    e.preventDefault();
    const found = validateInquiry(values);
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      document.getElementById(first)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const result = await submitInquiry(values);
      setStatus(result.ok ? "done" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "done" ? (
        <motion.div key="done" role="status" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="border border-ember/60 p-8 md:p-10">
          <Icon name="check" size={32} className="text-ember" />
          <h3 className="display mt-5 text-4xl">Inquiry ready.</h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/80">
            Thanks, {values.name.split(" ")[0]}. Your details passed validation. This site isn&rsquo;t connected to an email service or backend yet, so nothing has been sent or stored. Please reach out using the contact details on this page.
          </p>
          <button type="button" className="btn mt-8" onClick={() => { setValues(empty); setStatus("idle"); }}>
            Start over
          </button>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={onSubmit} noValidate initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid gap-5 sm:grid-cols-2" aria-label="Project inquiry">
          <Field id="name" label="Full name" required error={errors.name}>
            <input {...props("name")} type="text" autoComplete="name" placeholder="Your name" />
          </Field>
          <Field id="email" label="Email address" required error={errors.email}>
            <input {...props("email")} type="email" autoComplete="email" placeholder="you@example.com" />
          </Field>
          <Field id="company" label="Company / Organization">
            <input {...props("company")} type="text" autoComplete="organization" placeholder="Optional" />
          </Field>
          <Field id="phone" label="Phone number" error={errors.phone}>
            <input {...props("phone")} type="tel" autoComplete="tel" placeholder="Optional" />
          </Field>
          <div className="sm:col-span-2">
            <Field id="projectType" label="Project type" required error={errors.projectType}>
              <select {...props("projectType")} className={`${props("projectType").className} appearance-none bg-ink`}>
                <option value="">Select a project type</option>
                {PROJECT_TYPES.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </Field>
          </div>
          <div className="sm:col-span-2">
            <Field id="description" label="Project description" required error={errors.description}>
              <textarea {...props("description")} rows={6} placeholder="Tell us about your project — goals, idea, duration…" />
            </Field>
          </div>
          <div className="sm:col-span-2">
            {status === "failed" && <p role="alert" className="mb-4 text-sm text-flare">Something went wrong. Please try again.</p>}
            <button type="submit" disabled={status === "sending"} className="btn w-full disabled:opacity-60">
              {status === "sending" ? "Checking…" : "Send message"}
              <Icon name="arrow" size={16} />
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
