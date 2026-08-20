import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import Eyebrow from "@/components/Eyebrow";
import Cta from "@/components/Cta";
import FeatureRows from "@/components/FeatureRows";
import TypedHeadline from "@/components/TypedHeadline";
import { asset, SITE } from "@/lib/site";
import { PORTFOLIO, PROPERTY_COUNT, STATE_COUNT } from "@/lib/data";

const METRICS: [string, string][] = [
  [String(SITE.foundedYear), "Investing Since"],
  [String(PROPERTY_COUNT), "Properties Owned"],
  [String(STATE_COUNT), "States"],
];

/** Properties highlighted on the home page, pulled from the portfolio so the
 *  copy and gallery photos stay in sync with /portfolio. */
const FEATURED_NAMES = [
  "CityView Central Lofts",
  "Hons Apartments",
  "Juniper Canyon",
];

const FEATURED = FEATURED_NAMES.flatMap((name) => {
  const p = PORTFOLIO.find((prop) => prop.name === name);
  return p ? [p] : [];
});

const BENEFITS = [
  {
    t: "Expertise",
    d: "You profit from our expertise in asset management, institutional property management, & fundamental market analysis, as well as the leverage of our many proprietary tools that help to ensure superior performance on the metrics that matter (Cash on Cash Return, Annualized Yield, & Community Enrichment).",
  },
  {
    t: "Stability",
    d: "Consistently stable, this sector has grown & outperformed all others even through our current economic contraction.",
  },
  {
    t: "Cash Flow",
    d: "Your quarterly reward for participation in this exciting investment vehicle.",
  },
  {
    t: "Favorable Tax Treatment",
    d: "Through the ability to depreciate various portions of the asset on aggressive schedules, significant paper losses can be taken against real income. Additionally, tax handling of all appreciation is as long term capital gains, unless indefinitely deferred through 1031 exchange. Granite Peak Equity employs institutional cost segregation techniques to maximize investor benefit in these areas.",
  },
  {
    t: "Appreciation",
    d: "Both in the form of forced appreciation through a well executed repositioning strategy as well as in the form of organic appreciation through the interplay of market forces over the participation window. Granite Peak Equity's expertise in aggressive repositioning of underperforming assets ensures that your investment outperforms in this critical area.",
  },
  {
    t: "Leverage",
    d: "Magnifies the appreciation of investments in this sector, 4 to 1 on average. Expert in the underwriting of large properties, Granite Peak Equity employs a proprietary system for the maximization of investor benefit in this area.",
  },
  {
    t: "Participation In Emerging Markets",
    d: "Targeting the correct markets amplifies the investment yield achievable in this already superior investment vehicle.",
  },
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
        <div className="max-w-[820px]">
          <Eyebrow className="mb-6">Who We Are</Eyebrow>
          <h2 className="font-serif text-navy-dark leading-[1.15] text-[34px] md:text-[50px] mb-6">
            Turning Overlooked Properties
            <br className="hidden md:block" /> Into Top Performers
          </h2>
          <p className="text-base leading-[1.82] text-navy-dark/60 font-light mb-8">
            Granite Peak Equity has spent over two decades specializing in
            multifamily real estate investment in emerging markets throughout
            the western United States. Current projects are bringing our
            investors an exceptional return on investment, through the
            harnessing of both cash flow in the short term &amp; capital
            appreciation in the longer term.
          </p>
          <Link
            href="/investors"
            className="inline-block bg-blue hover:bg-blue-dark text-white px-8 py-[14px] text-[13px] font-semibold tracking-[0.05em] transition-colors"
          >
            Learn How You Can Invest
          </Link>
        </div>

        {/* Why multifamily — split across two columns so the list doesn't
            run as one very long stack. */}
        <div className="mt-14 md:mt-[72px]">
          <Eyebrow className="mb-6">Why Invest With Granite Peak Equity</Eyebrow>
          <div className="grid md:grid-cols-2 md:gap-x-[72px]">
            <FeatureRows items={BENEFITS.slice(0, 4)} />
            <FeatureRows items={BENEFITS.slice(4)} />
          </div>
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
                className="aspect-[3/2] flex items-center justify-center relative overflow-hidden"
                style={{ background: p.bg }}
              >
                {p.images && p.images.length > 0 ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={asset(p.images[0])}
                    alt={p.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <div className="w-10 h-10 border border-white/15 mx-auto mb-2.5 flex items-center justify-center">
                      <span className="text-white/25 text-[18px] font-serif">⌂</span>
                    </div>
                    <div className="text-white/20 text-[11px] tracking-[0.08em] uppercase">
                      Photo Coming Soon
                    </div>
                  </div>
                )}
              </div>
              <div className="px-[22px] py-5">
                <div className="text-blue text-[10px] tracking-[0.1em] uppercase mb-1.5">
                  {p.type}
                </div>
                <div className="font-serif text-[22px] font-medium text-navy-dark mb-1">
                  {p.name}
                </div>
                <div className="text-navy-dark/45 text-[13px]">
                  {p.loc}
                  {p.units ? ` · ${p.units} Units` : ""}
                </div>
              </div>
            </div>
          ))}
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
