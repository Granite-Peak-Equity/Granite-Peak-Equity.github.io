import type { Metadata } from "next";
import SiteFrame from "@/components/SiteFrame";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Cta from "@/components/Cta";
import FeatureRows from "@/components/FeatureRows";

export const metadata: Metadata = {
  title: "Investor Info",
  description:
    "How to invest with Granite Peak Equity: a simple, transparent process, our track record, and answers to common questions for accredited investors.",
};

const STEPS = [
  { n: "01", t: "Reach Out", d: "Drop us a note or give us a call. We'll have a no-pressure conversation about your goals, timeline, and what we're working on." },
  { n: "02", t: "Review the Opportunity", d: "We'll share an investment summary for a current deal — returns, timeline, structure, risk profile, and our operational plan." },
  { n: "03", t: "Make Your Investment", d: "If it's a fit, we handle all the paperwork. You'll receive regular updates and distributions as the asset performs." },
];

const TRACK = [
  { n: "20%–65%", l: "Average Annual ROI" },
  { n: "18%–45%", l: "Average IRR" },
  { n: "50%+", l: "Avg. First-Year NOI Growth" },
  { n: "$40M", l: "In Investor Distributions" },
];

const EXPECT = [
  { t: "Quarterly Reporting", d: "Asset-level performance updates every quarter — occupancy, revenue, expenses, and what's next." },
  { t: "Direct Access", d: "Reach Chad or Brad directly. We're a small, focused team and we like it that way." },
  { t: "Distributions on Schedule", d: "Deal documents specify the distribution schedule and we honor it, or communicate proactively if anything changes." },
  { t: "Full Transparency on Exit", d: "Detailed final accounting on disposition — every dollar in, every dollar out." },
];

const FAQS = [
  { q: "Who can invest with Granite Peak?", a: "We work with accredited investors — individuals with a net worth over $1M (excluding primary residence) or annual income over $200K ($300K jointly) for the past two years." },
  { q: "What is the minimum investment?", a: "Minimums vary by deal, typically ranging from $50,000 to $100,000. We're happy to discuss the specifics of any current opportunity." },
  { q: "How are distributions handled?", a: "Distributions are paid out based on the deal structure — typically quarterly or upon exit. Each offering document outlines the specific schedule." },
  { q: "How often will I hear from you?", a: "We provide quarterly reporting on asset performance and are always reachable directly. Chad and Brad are hands-on and accessible." },
  { q: "What types of properties do you invest in?", a: "We focus exclusively on multifamily residential — apartment communities in secondary and tertiary markets across the Mountain West and Great Plains." },
  { q: "Do you manage the properties yourself?", a: "Yes. Our in-house property management team, led by Alex Evans, manages all assets directly. We don't outsource to third-party managers." },
];

export default function InvestorsPage() {
  return (
    <SiteFrame>
      <PageHero
        tag="Accredited Investors"
        title="Invest With Confidence."
        subtitle="A simple, transparent process — built on two decades of trust with investors who come back deal after deal."
      />

      {/* How It Works */}
      <section className="px-6 md:px-[60px] py-16 md:py-[88px] bg-white">
        <Eyebrow className="mb-5">How It Works</Eyebrow>
        <h2 className="font-serif text-navy-dark text-[34px] md:text-[48px] leading-[1.1] mb-12 md:mb-14">
          Three steps to get started.
        </h2>
        <div className="grid gap-8 md:gap-0 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <div
              key={s.n}
              className={`md:py-10 ${i < 2 ? "md:border-r border-navy-dark/[0.08]" : ""} ${
                i > 0 ? "md:pl-10" : ""
              } md:pr-10`}
            >
              <div className="font-serif font-light text-blue/35 text-[56px] leading-none mb-5">
                {s.n}
              </div>
              <div className="text-[20px] font-semibold text-navy-dark mb-3">
                {s.t}
              </div>
              <div className="text-[15px] text-navy-dark/60 leading-[1.78] font-light">
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Track Record */}
      <section className="bg-navy-dark px-6 md:px-[60px] py-16 md:py-20">
        <Eyebrow className="mb-5">Track Record</Eyebrow>
        <h2 className="font-serif font-light text-white text-[34px] md:text-[48px] leading-[1.1] mb-12 md:mb-[52px]">
          Results our investors count on.
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {TRACK.map((t, i) => (
            <div
              key={t.l}
              className={`lg:pr-10 ${
                i < 3 ? "lg:border-r border-white/[0.08] lg:mr-10" : ""
              }`}
            >
              <div className="font-serif font-light text-blue text-[44px] md:text-[52px] leading-none mb-2.5">
                {t.n}
              </div>
              <div className="text-white/40 text-xs tracking-[0.1em] uppercase">
                {t.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to Expect */}
      <section className="px-6 md:px-[60px] py-16 md:py-[88px] bg-cream-light">
        <div className="grid gap-12 md:gap-20 md:grid-cols-2">
          <div>
            <Eyebrow className="mb-5">What to Expect</Eyebrow>
            <h2 className="font-serif text-navy-dark text-[30px] md:text-[46px] leading-[1.18] mb-6">
              Clear communication.
              <br className="hidden md:block" /> No surprises.
            </h2>
            <p className="text-base leading-[1.8] text-navy-dark/60 font-light mb-4">
              We believe you should always know how your money is performing.
              Chad and Brad are directly reachable — not hidden behind investor
              portals and auto-replies.
            </p>
            <p className="text-[15px] leading-[1.8] text-navy-dark/50 font-light">
              Every deal comes with quarterly reporting, a clear distribution
              schedule, and honest communication when things don&apos;t go
              exactly to plan — which is rare, but which we always address
              proactively.
            </p>
          </div>
          <FeatureRows items={EXPECT} />
        </div>
      </section>

      {/* Testimonial (centered) */}
      <section className="bg-navy-mid px-6 md:px-[60px] py-16 md:py-[72px]">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="font-serif text-blue text-[64px] leading-[0.8] mb-6 opacity-50">
            &ldquo;
          </div>
          <p className="font-serif text-white text-[22px] md:text-[28px] leading-[1.55] mb-7">
            Chad has been very straightforward and up front about his investment
            objectives, how my money would be used, and how my returns would be
            earned. He has met or exceeded my expectations every year.
          </p>
          <div className="text-blue-light text-sm font-semibold">
            Tom S. · Investor since 2009
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-[60px] py-16 md:py-[88px] bg-white">
        <Eyebrow className="mb-5">FAQ</Eyebrow>
        <h2 className="font-serif text-navy-dark text-[34px] md:text-[46px] leading-[1.1] mb-10 md:mb-12">
          Common questions.
        </h2>
        <div className="grid md:grid-cols-2 md:gap-x-20">
          {FAQS.map((f) => (
            <div key={f.q} className="py-7 border-b border-navy-dark/[0.09]">
              <div className="text-base font-semibold text-navy-dark mb-2.5">
                {f.q}
              </div>
              <div className="text-sm text-navy-dark/55 leading-[1.75] font-light">
                {f.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Cta
        heading="Ready to learn about current opportunities?"
        sub="Available to accredited investors. Reach out and we'll set up a call."
        btnLabel="Contact Us"
      />
    </SiteFrame>
  );
}
