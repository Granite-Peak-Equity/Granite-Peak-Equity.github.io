"use client";

import { useState } from "react";
import { SITE } from "@/lib/site";

const FIELDS = [
  { name: "name", label: "Your Name", type: "text", ph: "Full name", required: true },
  { name: "email", label: "Email", type: "email", ph: "your@email.com", required: true },
  { name: "phone", label: "Phone", type: "tel", ph: "(000) 000-0000", required: false },
  { name: "property", label: "Property Address / Market", type: "text", ph: "Address or city, state", required: true },
  { name: "details", label: "Unit Count & Asking Price", type: "text", ph: "e.g. 80 units · $5.2M", required: false },
] as const;

const inputClass =
  "w-full px-3.5 py-[11px] text-sm border border-navy-dark/[0.14] outline-none text-navy-dark bg-white focus:border-blue transition-colors";
const labelClass =
  "block text-[11px] font-semibold text-navy-dark/45 tracking-[0.08em] uppercase mb-1.5";

export default function DealForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // ── INTEGRATION POINT ───────────────────────────────────────────────
    // The site is a static export (GitHub Pages), so there is no server to
    // receive this submission yet. To make it live, wire one of:
    //   • Formspree:  set the <form action> to your Formspree endpoint and
    //                 remove this onSubmit handler, OR
    //   • Resend/API: POST `new FormData(e.currentTarget)` to a serverless
    //                 function (e.g. a Cloudflare/Vercel function or a
    //                 GitHub-hosted handler) and email it to
    //                 SITE.acquisitionsEmail.
    // For now we just show a success state so the UX is complete.
    // ────────────────────────────────────────────────────────────────────
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-l-[3px] border-blue bg-cream-light px-6 py-8">
        <div className="font-serif text-2xl text-navy-dark mb-2">Thank you.</div>
        <p className="text-sm text-navy-dark/60 leading-[1.7] font-light">
          Your submission has been received. Brad will review the details and
          respond promptly. For anything urgent, email{" "}
          <a
            href={`mailto:${SITE.acquisitionsEmail}`}
            className="text-blue hover:text-blue-dark"
          >
            {SITE.acquisitionsEmail}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
      {FIELDS.map((f) => (
        <div key={f.name}>
          <label htmlFor={f.name} className={labelClass}>
            {f.label}
          </label>
          <input
            id={f.name}
            name={f.name}
            type={f.type}
            placeholder={f.ph}
            required={f.required}
            className={inputClass}
          />
        </div>
      ))}
      <div>
        <label htmlFor="notes" className={labelClass}>
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          placeholder="Deal timeline, condition, occupancy, or anything else relevant..."
          className={`${inputClass} resize-y`}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue hover:bg-blue-dark text-white py-3.5 text-[13px] font-semibold tracking-[0.05em] transition-colors cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
