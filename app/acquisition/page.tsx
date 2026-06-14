import type { Metadata } from "next";
import SiteFrame from "@/components/SiteFrame";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import UsMap from "@/components/UsMap";
import DealForm from "@/components/DealForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Acquisition Criteria",
  description:
    "What Granite Peak Equity buys: stabilized, value-add apartment properties of 50+ units across the western United States. Submit a deal for review.",
};

const CRITERIA: [string, string][] = [
  ["Property Type", "Garden Style and Mid-Rise Apartments"],
  ["Asset Class", "A+ to C+"],
  ["Location Quality", "A+ to C+"],
  ["Property Size", "50+ units; single asset or portfolio"],
  ["Pricing", "$1M to $20M+"],
  ["Property Vintage", "1978 and newer"],
  ["Acquisition Structure", "All cash to seller; loan assumption considered case-by-case"],
];

const TAGS = ["Value-Add", "Stabilized", "HUD HAP", "Section 42 LIHTC", "Off-Market", "Portfolio"];

const PROCESS = [
  { n: "01", t: "Initial Review", d: "Share financials and rent roll. We return a preliminary indication of interest within 48 hours." },
  { n: "02", t: "Site Visit & LOI", d: "We visit every property we get serious about. Expect a Letter of Intent promptly — no delays." },
  { n: "03", t: "Due Diligence", d: "Thorough and efficient. We know what we're looking for and move quickly to give sellers certainty." },
  { n: "04", t: "Close", d: "We have capital sources in place and a track record of closing on time. We do what we say." },
];

export default function AcquisitionPage() {
  return (
    <SiteFrame>
      <PageHero
        tag="For Sellers & Brokers"
        title="Acquisition Criteria."
        subtitle="We source stabilized, value-add apartment properties and aggressively reposition them to maximize revenue and appreciation."
      />

      {/* Vision + Criteria */}
      <section className="px-6 md:px-[60px] py-16 md:py-20 bg-white">
        <div className="grid gap-12 md:gap-20 md:grid-cols-2">
          <div>
            <Eyebrow className="mb-5">Vision</Eyebrow>
            <h2 className="font-serif text-navy-dark text-[32px] md:text-[46px] leading-[1.15] mb-6">
              Source. Reposition.
              <br className="hidden md:block" /> Strategically Exit.
            </h2>
            <p className="text-base leading-[1.82] text-navy-dark/60 font-light mb-5">
              Granite Peak Equity sources stabilized, value-add apartment
              properties of 50+ units located in stable sub-markets poised for
              growth. These properties are then aggressively repositioned to
              effect:
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {[
                "Revenue maximization through targeted capital improvement",
                "Cost containment through the implementation of institutional asset & property management",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue shrink-0 mt-[7px]" />
                  <span className="text-[15px] text-navy-dark/65 leading-[1.65] font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-[15px] leading-[1.8] text-navy-dark/50 font-light">
              Granite Peak strategically targets exit from dramatically
              appreciated assets, timed to coincide with an optimal position in
              the local market cycle.{" "}
              <strong className="text-navy-dark font-semibold">
                Participation window averages five to seven years.
              </strong>
            </p>
          </div>

          {/* Criteria table */}
          <div>
            <Eyebrow className="mb-6">Acquisition Parameters</Eyebrow>
            <div className="border border-navy-dark/[0.09] overflow-hidden">
              {CRITERIA.map(([label, val], i) => (
                <div
                  key={label}
                  className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr]"
                  style={{
                    borderBottom:
                      i < CRITERIA.length - 1
                        ? "1px solid rgba(15,24,36,.07)"
                        : "none",
                    background: i % 2 === 0 ? "white" : "var(--color-cream-light)",
                  }}
                >
                  <div className="px-5 py-4 text-xs font-semibold text-navy-dark/50 tracking-[0.04em] uppercase border-r border-navy-dark/[0.07]">
                    {label}
                  </div>
                  <div className="px-5 py-4 text-sm text-navy-dark">{val}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
              {TAGS.map((tag) => (
                <span
                  key={tag}
                  className="bg-blue/[0.08] text-blue border border-blue/[0.18] px-3 py-[5px] text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets map */}
      <section className="px-6 md:px-[60px] py-16 md:py-20 bg-cream-light">
        <Eyebrow className="mb-4">Target Markets</Eyebrow>
        <h2 className="font-serif text-navy-dark text-[34px] md:text-[46px] leading-[1.1] mb-2.5">
          Where we buy.
        </h2>
        <p className="text-[15px] text-navy-dark/55 leading-[1.75] font-light max-w-[600px] mb-12">
          Throughout the western United States, with an emphasis on secondary
          and tertiary markets where our operational expertise creates a genuine
          competitive advantage.
        </p>
        <UsMap />
      </section>

      {/* Process */}
      <section className="px-6 md:px-[60px] py-16 md:py-20 bg-navy-dark">
        <Eyebrow className="mb-5">Our Process</Eyebrow>
        <h2 className="font-serif font-light text-white text-[34px] md:text-[46px] leading-[1.1] mb-12 md:mb-[52px]">
          From first look to close.
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {PROCESS.map((s, i) => (
            <div
              key={s.n}
              className={`lg:pr-10 ${
                i < 3 ? "lg:border-r border-white/[0.07]" : ""
              } ${i > 0 ? "lg:pl-10" : ""}`}
            >
              <div className="font-serif font-light text-blue/[0.28] text-[48px] leading-none mb-4">
                {s.n}
              </div>
              <div className="text-[15px] font-semibold text-white mb-2.5">
                {s.t}
              </div>
              <div className="text-sm text-white/40 leading-[1.75] font-light">
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Submit a Deal */}
      <section className="px-6 md:px-[60px] py-16 md:py-20 bg-white">
        <div className="grid gap-12 md:gap-20 md:grid-cols-2 items-start">
          <div>
            <Eyebrow className="mb-5">Submit a Deal</Eyebrow>
            <h2 className="font-serif text-navy-dark text-[32px] md:text-[44px] leading-[1.18] mb-5">
              Have a property
              <br className="hidden md:block" /> that fits our criteria?
            </h2>
            <p className="text-base leading-[1.8] text-navy-dark/60 font-light mb-4">
              Reach out directly to Brad Osen, who leads our acquisitions effort.
              We review every submission and respond promptly.
            </p>
            <p className="text-sm leading-[1.8] text-navy-dark/45 font-light mb-7">
              Broker co-op fees are always honored. We work with both sellers and
              their representatives.
            </p>
            <div className="px-6 py-[22px] bg-cream-light border-l-[3px] border-blue">
              <div className="text-xs text-navy-dark/[0.42] mb-1 tracking-[0.05em] uppercase">
                Contact Brad Osen
              </div>
              <a
                href={`mailto:${SITE.acquisitionsEmail}`}
                className="text-base font-semibold text-navy-dark hover:text-blue transition-colors"
              >
                {SITE.acquisitionsEmail}
              </a>
            </div>
          </div>
          <DealForm />
        </div>
      </section>
    </SiteFrame>
  );
}
