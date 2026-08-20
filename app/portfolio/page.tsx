import type { Metadata } from "next";
import SiteFrame from "@/components/SiteFrame";
import PageHero from "@/components/PageHero";
import Cta from "@/components/Cta";
import PortfolioGrid from "@/components/PortfolioGrid";
import { PORTFOLIO, PROPERTY_COUNT, STATE_COUNT } from "@/lib/data";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Holdings",
  description:
    "The ten apartment communities Granite Peak Equity owns and manages across Montana, Iowa, South Dakota, Texas, and Arizona.",
};

const STATS: [string, string][] = [
  [String(PROPERTY_COUNT), "Communities"],
  [String(STATE_COUNT), "States"],
  [String(SITE.foundedYear), "Investing Since"],
];

export default function PortfolioPage() {
  return (
    <SiteFrame>
      <PageHero
        title="Holdings"
        subtitle="Ten apartment communities in five states."
      />

      {/* Stats strip */}
      <section className="bg-navy-mid px-6 md:px-[60px] py-8 flex flex-wrap gap-x-12 gap-y-4 md:gap-[60px] items-center">
        {STATS.map(([n, l]) => (
          <div key={l} className="flex items-baseline gap-2.5">
            <span className="font-serif font-light text-blue text-[36px]">{n}</span>
            <span className="text-white/40 text-[13px]">{l}</span>
          </div>
        ))}
      </section>

      {/* Grid */}
      <section className="px-6 md:px-[60px] py-16 md:py-[72px] bg-white">
        <PortfolioGrid properties={PORTFOLIO} />
      </section>

      <Cta
        heading="Interested in our next acquisition?"
        sub="We're always looking for our next deal. Brokers and sellers are welcome."
        btnLabel="View Acquisition Criteria"
        btnHref="/acquisition"
      />
    </SiteFrame>
  );
}
