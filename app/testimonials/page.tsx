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

function Stars() {
  return (
    <div
      aria-hidden
      className="text-blue/70 text-[13px] tracking-[0.25em] mb-4 select-none"
    >
      ★★★★★
    </div>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="bg-cream-light border-l-[3px] border-blue px-7 py-7 md:px-9 md:py-8">
      <Stars />
      <blockquote>
        {t.quote.map((para, i) => (
          <p
            key={i}
            className="font-serif text-navy-dark/80 text-[17px] md:text-[19px] leading-[1.7] font-light"
            style={{ marginBottom: i < t.quote.length - 1 ? 16 : 0 }}
          >
            {i === 0 && <span aria-hidden>&ldquo;</span>}
            {para}
            {i === t.quote.length - 1 && <span aria-hidden>&rdquo;</span>}
          </p>
        ))}
      </blockquote>
      <figcaption className="mt-5 text-[13px] font-semibold text-navy-dark tracking-[0.02em]">
        {t.who}
        <span className="font-normal text-navy-dark/45"> · {t.where}</span>
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

      <section className="px-6 md:px-[60px] py-16 md:py-20 bg-white">
        <div className="max-w-[860px] flex flex-col gap-5">
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
