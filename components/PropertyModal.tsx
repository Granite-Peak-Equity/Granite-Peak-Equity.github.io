"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { Property } from "@/lib/data";
import { asset } from "@/lib/site";

const AUTOPLAY_MS = 4000;

export default function PropertyModal({
  property,
  onClose,
}: {
  property: Property;
  onClose: () => void;
}) {
  const hasPhotos = !!property.images && property.images.length > 0;
  // Real images when available, otherwise three placeholder slides so the
  // slideshow motion is visible until photos are added.
  const slides = hasPhotos
    ? property.images!
    : ["placeholder-0", "placeholder-1", "placeholder-2"];

  const [index, setIndex] = useState(0);
  const count = slides.length;
  const closeRef = useRef<HTMLButtonElement>(null);

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  // Auto-advance (constant motion). Re-scheduled whenever the slide changes —
  // so manual arrow/dot navigation also resets the timer — and runs from the
  // moment the modal opens, with no hover gating.
  useEffect(() => {
    if (count <= 1) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, count]);

  // Esc to close, arrow keys to navigate, lock background scroll.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [go, onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={property.name}
      onClick={onClose}
      className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 bg-ink/85"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-[760px] max-h-[92vh] overflow-y-auto shadow-2xl"
      >
        {/* ── Carousel ── */}
        <div className="relative bg-navy-mid">
          <div className="overflow-hidden h-[280px] sm:h-[360px] md:h-[420px]">
            <div
              className="flex h-full"
              style={{
                transform: `translate3d(-${index * 100}%, 0, 0)`,
                transition: "transform 450ms cubic-bezier(0.22, 1, 0.36, 1)",
                willChange: "transform",
              }}
            >
              {slides.map((slide, i) =>
                hasPhotos ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={i}
                    src={asset(slide)}
                    alt={`${property.name} — photo ${i + 1}`}
                    decoding="async"
                    draggable={false}
                    className="w-full h-full shrink-0 object-contain select-none"
                  />
                ) : (
                  <div
                    key={i}
                    className="w-full h-full shrink-0 flex items-center justify-center"
                    style={{ background: property.bg }}
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 border border-white/15 mx-auto mb-3 flex items-center justify-center">
                        <span className="text-white/25 text-2xl font-serif">⌂</span>
                      </div>
                      <div className="text-white/25 text-[11px] tracking-[0.1em] uppercase">
                        Photo Coming Soon
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* Close */}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-ink/50 hover:bg-ink/75 text-white text-lg leading-none transition-colors"
          >
            ✕
          </button>

          {/* Arrows */}
          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-ink/40 hover:bg-blue text-white transition-colors"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-ink/40 hover:bg-blue text-white transition-colors"
              >
                ›
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to image ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === index ? "bg-white" : "bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* ── Description ── */}
        <div className="px-6 sm:px-8 py-7">
          <div className="text-blue text-[10px] tracking-[0.1em] uppercase mb-2">
            {property.type}
          </div>
          <h3 className="font-serif text-[28px] md:text-[32px] font-medium text-navy-dark leading-[1.15] mb-1.5">
            {property.name}
          </h3>
          <div className="text-navy-dark/45 text-sm mb-5">
            {property.loc}
            {property.units ? ` · ${property.units} Units` : ""}
            {property.built ? ` · Est. ${property.built}` : ""}
          </div>
          <p className="text-[15px] text-navy-dark/65 leading-[1.8] font-light">
            {property.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
