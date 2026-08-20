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
    <figure className="break-inside-avoid mb-6 bg-white rounded-[20px] px-7 py-7 shadow-[1px_1px_10px_1px_#d5d5d5]">
      <div
        aria-hidden
        className="text-[#e0a800] text-[22px] leading-none tracking-[0.05em] mb-4 select-none"
      >
        ★★★★★
      </div>
      <blockquote>
        {t.quote.map((para, i) => (
          <p
            key={i}
            className="italic text-[15px] text-navy-dark/70 leading-[1.8] font-light"
            style={{ marginBottom: i < t.quote.length - 1 ? 14 : 0 }}
          >
            {i === 0 && <span aria-hidden>&ldquo;</span>}
            {para}
            {i === t.quote.length - 1 && <span aria-hidden>&rdquo;</span>}
          </p>
        ))}
      </blockquote>
      <figcaption className="mt-5 text-[13px] font-semibold text-navy-dark">
        &mdash;{t.who}
        <span className="font-normal text-navy-dark/45">, {t.where}</span>
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

      {/* Card grid — CSS columns so the cards keep their natural height
          instead of stretching to match the tallest in the row. */}
      <section className="px-6 md:px-[60px] py-16 md:py-20 bg-cream-light">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
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
