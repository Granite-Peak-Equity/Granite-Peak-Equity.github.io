import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import Eyebrow from "@/components/Eyebrow";
import Cta from "@/components/Cta";
import FeatureRows from "@/components/FeatureRows";
import TypedHeadline from "@/components/TypedHeadline";
import { asset } from "@/lib/site";

const METRICS: [string, string][] = [
  ["20+", "Years in Business"],
  ["18", "Deals Closed"],
  ["$40M", "In Distributions"],
];

const FEATURED = [
  { name: "CityView Central Lofts", loc: "Sioux City, IA", units: "75 Units", type: "Historic Conversion", bg: "#1e2c3f" },
  { name: "Hons Apartments", loc: "Sioux City, IA", units: "72 Units", type: "Class A Mid-Rise", bg: "#1a2535" },
  { name: "Juniper Canyon", loc: "Tucson, AZ", units: "141 Units", type: "Garden Style", bg: "#243040" },
];

const ABOUT_FEATURES = [
  { t: "Value-Add Focus", d: "We grow NOI by 50%+ in year one through targeted capital improvements and hands-on operational management." },
  { t: "Government-Assisted Expertise", d: "Deep experience with HUD HAP contracts, Section 42 LIHTC, and post-Section 236 conversions across multiple states." },
  { t: "Regional Market Knowledge", d: "Secondary and tertiary markets across MT, SD, IA, TX, and AZ — markets we know personally, not just on paper." },
  { t: "Investor-First Returns", d: "20%–65% average annual ROIs and 18%–45% IRRs across our portfolio. Our investors come back deal after deal." },
];

export default function HomePage() {
  return (
    <SiteFrame>
      {/* ── Hero ── */}
      <section className="relative h-[440px] md:h-[640px] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/uploads/hero-home.jpg")}
          alt="Granite Peak Equity multifamily property"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(9,15,26,.52) 0%, rgba(9,15,26,.18) 45%, rgba(9,15,26,.78) 100%)",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="font-serif font-light text-white text-center leading-[1.08] tracking-[-0.01em] text-[44px] sm:text-[68px] md:text-[96px]">
            <TypedHeadline text="Granite Peak Equity" />
          </h1>
        </div>
      </section>

      {/* ── Metrics bar ── */}
      <section className="bg-white border-t-[3px] border-blue flex flex-col sm:flex-row">
        {METRICS.map(([n, l], i) => (
          <div
            key={l}
            className={`flex-1 py-8 px-8 md:py-10 md:px-[52px] ${
              i < 2 ? "sm:border-r border-navy-dark/[0.08]" : ""
            } border-b sm:border-b-0 border-navy-dark/[0.08]`}
          >
            <div className="font-serif font-light text-navy-dark text-[48px] md:text-[60px] leading-none mb-2">
              {n}
            </div>
            <div className="text-navy-dark/40 text-[11px] tracking-[0.12em] uppercase">
              {l}
            </div>
          </div>
        ))}
      </section>

      {/* ── About ── */}
      <section className="px-6 md:px-[60px] py-16 md:py-[88px] bg-cream-light">
        <div className="grid gap-12 md:gap-[88px] md:grid-cols-2 items-start">
          <div>
            <Eyebrow className="mb-6">Who We Are</Eyebrow>
            <h2 className="font-serif text-navy-dark leading-[1.15] text-[34px] md:text-[50px] mb-6">
              Turning Overlooked Properties
              <br className="hidden md:block" /> Into Top Performers
            </h2>
            <p className="text-base leading-[1.82] text-navy-dark/60 font-light mb-[18px]">
              Founded by Chad Laird in Bozeman, Montana, Granite Peak Equity has
              spent over two decades acquiring and improving apartment
              communities across the Mountain West and Great Plains. We treat
              every property like it&apos;s our own — because it is.
            </p>
            <p className="text-[15px] leading-[1.8] text-navy-dark/50 font-light mb-8">
              Our track record includes growing NOI by 50% or more in the first
              year on stabilized assets — including complex HUD HAP and Section
              42 LIHTC conversions.
            </p>
            <Link
              href="/investors"
              className="inline-block bg-blue hover:bg-blue-dark text-white px-8 py-[14px] text-[13px] font-semibold tracking-[0.05em] transition-colors"
            >
              Learn How to Invest
            </Link>
          </div>
          <FeatureRows items={ABOUT_FEATURES} />
        </div>
      </section>

      {/* ── Featured Portfolio ── */}
      <section className="px-6 md:px-[60px] py-16 md:py-20 bg-white">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end mb-10">
          <div>
            <Eyebrow className="mb-3.5">Portfolio</Eyebrow>
            <h2 className="font-serif text-navy-dark text-[34px] md:text-[44px]">
              Selected Properties
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-blue text-[13px] tracking-[0.04em] hover:text-blue-dark transition-colors"
          >
            View All Properties →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((p) => (
            <div key={p.name} className="overflow-hidden border border-navy-dark/[0.08]">
              <div
                className="h-[180px] flex items-center justify-center"
                style={{ background: p.bg }}
              >
                <div className="text-center">
                  <div className="w-10 h-10 border border-white/15 mx-auto mb-2.5 flex items-center justify-center">
                    <span className="text-white/25 text-[18px] font-serif">⌂</span>
                  </div>
                  <div className="text-white/20 text-[11px] tracking-[0.08em] uppercase">
                    Photo Coming Soon
                  </div>
                </div>
              </div>
              <div className="px-[22px] py-5">
                <div className="text-blue text-[10px] tracking-[0.1em] uppercase mb-1.5">
                  {p.type}
                </div>
                <div className="font-serif text-[22px] font-medium text-navy-dark mb-1">
                  {p.name}
                </div>
                <div className="text-navy-dark/45 text-[13px]">
                  {p.loc} · {p.units}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className="bg-navy-mid px-6 md:px-[60px] py-16 md:py-[72px] flex gap-6 md:gap-10 items-start">
        <div className="font-serif text-blue text-[80px] leading-[0.8] shrink-0 -mt-2 opacity-60">
          &ldquo;
        </div>
        <div>
          <p className="font-serif text-white leading-[1.55] text-[22px] md:text-[28px] mb-6 max-w-[780px]">
            Chad has been very straightforward and up front about his investment
            objectives, how my money would be used, and how my returns would be
            earned. He has met or exceeded my expectations every year.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-navy-light flex items-center justify-center text-blue-light text-sm font-semibold border border-blue-light/25">
              T
            </div>
            <div>
              <div className="text-sm font-semibold text-blue-light">Tom S.</div>
              <div className="text-[13px] text-white/35">Investor since 2009</div>
            </div>
          </div>
        </div>
      </section>

      <Cta
        heading="Ready to invest in multifamily real estate?"
        sub="We work with accredited investors and are always happy to talk — no pressure, ever."
        btnLabel="Get in Touch"
      />
    </SiteFrame>
  );
}
