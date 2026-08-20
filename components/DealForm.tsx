"use client";

import { useState } from "react";
import { SITE, FORM_ENDPOINT, mailtoLink } from "@/lib/site";

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
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error" | "no-endpoint"
  >("idle");
  const [fallback, setFallback] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "");

    // No endpoint configured yet — hand the visitor a prefilled email rather
    // than silently dropping their deal submission.
    if (!FORM_ENDPOINT) {
      setFallback(
        mailtoLink(
          SITE.acquisitionsEmail,
          `Deal submission — ${get("property") || "property"}`,
          [
            ["Name", get("name")],
            ["Email", get("email")],
            ["Phone", get("phone")],
            ["Property / Market", get("property")],
            ["Units & Asking Price", get("details")],
            ["Notes", get("notes")],
          ]
        )
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

  if (status === "no-endpoint") {
    return (
      <div className="border-l-[3px] border-blue bg-cream-light px-6 py-8">
        <div className="font-serif text-2xl text-navy-dark mb-2">
          One last step.
        </div>
        <p className="text-sm text-navy-dark/60 leading-[1.7] font-light mb-4">
          Click below to open your email app with the deal details ready to
          send. If nothing opens, write to us directly at{" "}
          <a
            href={`mailto:${SITE.acquisitionsEmail}`}
            className="text-blue hover:text-blue-dark break-all"
          >
            {SITE.acquisitionsEmail}
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
      {status === "error" && (
        <p className="text-sm text-red-700 leading-[1.7]">
          Something went wrong sending your submission. Please try again, or
          email{" "}
          <a
            href={`mailto:${SITE.acquisitionsEmail}`}
            className="text-blue hover:text-blue-dark break-all"
          >
            {SITE.acquisitionsEmail}
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-blue hover:bg-blue-dark text-white py-3.5 text-[13px] font-semibold tracking-[0.05em] transition-colors cursor-pointer disabled:opacity-60 disabled:cursor-wait"
      >
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
    </form>
  );
}
