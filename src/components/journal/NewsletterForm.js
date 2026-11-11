"use client";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import { isEmail, subscribeToNewsletter } from "@/lib/forms";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState("idle");

  async function onSubmit(e) {
    e.preventDefault();
    if (!isEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStatus("sending");
    try {
      const r = await subscribeToNewsletter(email.trim());
      setStatus(r.ok ? "done" : "idle");
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  }

  if (status === "done") {
    return (
      <p role="status" className="max-w-md border border-bone/40 p-5 text-sm leading-relaxed">
        Email looks good. Newsletter sign-up isn&rsquo;t connected to a service yet, so your address has not been saved or subscribed.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full max-w-md">
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <div className="flex border border-bone/60 bg-ink/40 backdrop-blur-sm focus-within:border-ember">
        <span className="grid w-12 place-items-center"><Icon name="mail" size={18} /></span>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          placeholder="Enter your email address…"
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? "newsletter-error" : undefined}
          className="h-12 min-w-0 flex-1 bg-transparent text-sm placeholder:text-bone/60 focus:outline-none"
        />
        <button type="submit" disabled={status === "sending"} aria-label="Subscribe" className="grid w-14 place-items-center bg-ember transition-colors hover:bg-flare disabled:opacity-60">
          <Icon name="arrow" size={18} />
        </button>
      </div>
      {error && <p id="newsletter-error" role="alert" className="mt-2 text-xs text-bone">{error}</p>}
    </form>
  );
}
