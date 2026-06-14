"use client";

import { useState } from "react";
import type { Property } from "@/lib/data";
import { asset } from "@/lib/site";

export default function PortfolioCard({
  p,
  onOpen,
}: {
  p: Property;
  onOpen?: () => void;
}) {
  const [hover, setHover] = useState(false);
  const cover = p.images && p.images.length > 0 ? p.images[0] : null;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen?.();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View ${p.name} details`}
      className="border border-navy-dark/[0.09] overflow-hidden transition-shadow cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue"
      style={{ boxShadow: hover ? "0 8px 32px rgba(15,24,36,.12)" : "none" }}
    >
      <div
        className="h-[160px] flex items-center justify-center relative overflow-hidden"
        style={{ background: p.bg }}
      >
        {cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(cover)}
            alt={p.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
            style={{ transform: hover ? "scale(1.04)" : "scale(1)" }}
          />
        ) : (
          <div className="text-center">
            <div className="w-9 h-9 border border-white/[0.12] flex items-center justify-center mx-auto mb-2">
              <span className="text-white/[0.18] font-serif text-base">⌂</span>
            </div>
            <div className="text-white/[0.18] text-[10px] tracking-[0.08em] uppercase">
              Photo Coming Soon
            </div>
          </div>
        )}
        {p.built && (
          <div className="absolute top-3 right-3 bg-blue/[0.18] border border-blue/25 px-2.5 py-[3px]">
            <span className="text-blue-light/80 text-[10px] tracking-[0.08em]">
              Est. {p.built}
            </span>
          </div>
        )}
      </div>
      <div className="px-[22px] pt-5 pb-6">
        <div className="text-blue text-[10px] tracking-[0.1em] uppercase mb-1.5">
          {p.type}
        </div>
        <div className="font-serif text-[22px] font-medium text-navy-dark mb-1 leading-[1.2]">
          {p.name}
        </div>
        <div className="text-navy-dark/[0.42] text-[13px] mb-3">
          {p.loc}
          {p.units ? ` · ${p.units} Units` : ""}
        </div>
        <div className="text-sm text-navy-dark/55 leading-[1.7] font-light line-clamp-3">
          {p.desc}
        </div>
        <div
          className="mt-4 text-[11px] tracking-[0.1em] uppercase font-semibold transition-colors"
          style={{ color: hover ? "var(--color-blue)" : "rgba(15,24,36,.4)" }}
        >
          View Gallery →
        </div>
      </div>
    </div>
  );
}
