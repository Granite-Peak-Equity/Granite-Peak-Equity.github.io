"use client";

import { useState } from "react";
import { SITE, FORM_ENDPOINT, mailtoLink } from "@/lib/site";

const inputClass =
  "w-full px-3.5 py-[11px] text-sm border border-navy-dark/[0.14] outline-none text-navy-dark bg-white focus:border-blue transition-colors";
const labelClass =
  "block text-[11px] font-semibold text-navy-dark/45 tracking-[0.08em] uppercase mb-1.5";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error" | "no-endpoint"
  >("idle");
  const [fallback, setFallback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "");

    // No endpoint configured yet — say so and hand the visitor a prefilled
    // email rather than silently dropping their message.
    if (!FORM_ENDPOINT) {
      setFallback(
        mailtoLink(SITE.infoEmail, get("subject") || "Website inquiry", [
          ["Name", get("name")],
          ["Email", get("email")],
          ["Phone", get("phone")],
          ["Message", get("message")],
        ])
      );
      setStatus("no-endpoint");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="border-l-[3px] border-blue bg-cream-light px-6 py-8">
        <div className="font-serif text-2xl text-navy-dark mb-2">Thank you.</div>
        <p className="text-sm text-navy-dark/60 leading-[1.7] font-light">
          Your message has been received — we&apos;ll be in touch shortly. For
          anything urgent, email{" "}
          <a
            href={`mailto:${SITE.infoEmail}`}
            className="text-blue hover:text-blue-dark"
          >
            {SITE.infoEmail}
          </a>
          .
        </p>
      </div>
    );
  }

  if (status === "no-endpoint") {
    return (
      <div className="border-l-[3px] border-blue bg-cream-light px-6 py-8">
        <div className="font-serif text-2xl text-navy-dark mb-2">
          Send us an email.
        </div>
        <p className="text-sm text-navy-dark/60 leading-[1.7] font-light mb-4">
          This form isn&apos;t connected to an inbox yet. Click below to open
          your email app with your message ready to send, or write to{" "}
          <a
            href={`mailto:${SITE.infoEmail}`}
            className="text-blue hover:text-blue-dark break-all"
          >
            {SITE.infoEmail}
          </a>
          .
        </p>
        <a
          href={fallback}
          className="inline-block bg-blue hover:bg-blue-dark text-white px-6 py-3 text-[13px] font-semibold tracking-[0.05em] transition-colors"
        >
          Open Email
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      <div className="grid sm:grid-cols-2 gap-3.5">
        <div>
          <label htmlFor="c-name" className={labelClass}>
            Your Name
          </label>
          <input id="c-name" name="name" type="text" placeholder="Full name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="c-email" className={labelClass}>
            Email
          </label>
          <input id="c-email" name="email" type="email" placeholder="your@email.com" required className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="c-phone" className={labelClass}>
          Phone <span className="normal-case font-normal text-navy-dark/30">(optional)</span>
        </label>
        <input id="c-phone" name="phone" type="tel" placeholder="(000) 000-0000" className={inputClass} />
      </div>
      <div>
        <label htmlFor="c-subject" className={labelClass}>
          Subject
        </label>
        <input id="c-subject" name="subject" type="text" placeholder="How can we help?" className={inputClass} />
      </div>
      <div>
        <label htmlFor="c-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          required
          placeholder="Tell us a bit about what you're looking for..."
          className={`${inputClass} resize-y`}
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-700 leading-[1.7]">
          Something went wrong sending your message. Please try again, or email{" "}
          <a
            href={`mailto:${SITE.infoEmail}`}
            className="text-blue hover:text-blue-dark break-all"
          >
            {SITE.infoEmail}
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-blue hover:bg-blue-dark text-white py-3.5 text-[13px] font-semibold tracking-[0.05em] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-wait"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
