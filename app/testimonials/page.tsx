import type { Metadata } from "next";
import SiteFrame from "@/components/SiteFrame";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import { TESTIMONIALS, type Testimonial } from "@/lib/data";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What Granite Peak Equity investors say about working with Chad, Brad, and the team — in their own words.",
};

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="h-full flex flex-col bg-white border border-navy-dark/[0.09] px-7 pt-6 pb-7 shadow-[0_6px_24px_rgba(15,24,36,.05)]">
      <div
        aria-hidden
        className="text-blue text-[15px] leading-none tracking-[0.18em] mb-[18px] select-none"
      >
        ★★★★★
      </div>
      <blockquote className="mb-6">
        {t.quote.map((para, i) => (
          <p
            key={i}
            className="text-[15px] text-navy-dark/60 leading-[1.78] font-light"
            style={{ marginBottom: i < t.quote.length - 1 ? 14 : 0 }}
          >
            {i === 0 && <span aria-hidden>&ldquo;</span>}
            {para}
            {i === t.quote.length - 1 && <span aria-hidden>&rdquo;</span>}
          </p>
        ))}
      </blockquote>
      <figcaption className="mt-auto pt-4 border-t border-navy-dark/[0.09] text-[11px] tracking-[0.1em] uppercase">
        <span className="text-blue font-semibold">{t.who}</span>
        <span className="text-navy-dark/35"> · {t.where}</span>
      </figcaption>
    </figure>
  );
}

export default function TestimonialsPage() {
  return (
    <SiteFrame>
      <PageHero
        tag="Investor Testimonials"
        title="In Their Own Words."
        subtitle="Many of our investors have been with us for a decade or more. Here is what a few of them have to say."
      />

      {/* Row-based grid so the cards read left-to-right and a short final
          row starts at the left edge. Cards in a row share a height. */}
      <section className="px-6 md:px-[60px] py-16 md:py-20 bg-cream-light">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.who + t.where} t={t} />
          ))}
        </div>
      </section>

      <Cta
        heading="Want to hear more from our investors?"
        sub="We're happy to connect you with someone who has invested with us."
        btnLabel="Get in Touch"
      />
    </SiteFrame>
  );
}
