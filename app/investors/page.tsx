import type { Metadata } from "next";
import Link from "next/link";
import SiteFrame from "@/components/SiteFrame";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Investor Info",
  description:
    "How to invest with Granite Peak Equity: a simple, transparent process and answers to common questions for accredited investors.",
};

const STEPS = [
  { n: "01", t: "Reach Out", d: "Drop us a note or give us a call. We'll have a no-pressure conversation about your goals, timeline, and what we're working on." },
  { n: "02", t: "Review the Opportunity", d: "We'll share an investment summary for a current deal — returns, timeline, structure, risk profile, and our operational plan." },
  { n: "03", t: "Make Your Investment", d: "If it's a fit, we handle all the paperwork. You'll receive regular updates and distributions as the asset performs." },
];

/** Rule 501 of Regulation D, as summarized for investors. */
const ACCREDITED = [
  "A bank, insurance company, registered investment company, business development company, or small business investment company;",
  "An employee benefit plan, within the meaning of the Employee Retirement Income Security Act, if a bank, insurance company, or registered investment adviser makes the investment decisions, or if the plan has total assets in excess of $5 million;",
  "A charitable organization, corporation, or partnership with assets exceeding $5 million;",
  "A director, executive officer, or general partner of the company selling the securities;",
  "A business in which all the equity owners are accredited investors;",
  "A natural person who has individual net worth, or joint net worth with the person's spouse, that exceeds $1 million at the time of the purchase, excluding the value of the primary residence of such person;",
  "A natural person with income exceeding $200,000 in each of the two most recent years or joint income with a spouse exceeding $300,000 for those years and a reasonable expectation of the same income level in the current year; or",
  "A trust with assets in excess of $5 million, not formed to acquire the securities offered, whose purchases a sophisticated person makes.",
];

const FAQS = [
  { q: "Who can invest with Granite Peak?", a: "We work with accredited investors, as the term is defined in Rule 501 of Regulation D — see the full definition above." },
  { q: "What is the minimum investment?", a: "The minimum investment is $20,000, with no maximum. We're happy to discuss the specifics of any current opportunity." },
  { q: "How are distributions handled?", a: "Distributions are paid out based on the deal structure — typically quarterly or upon exit. Each offering document outlines the specific schedule." },
  { q: "How often will I hear from you?", a: "We provide quarterly reporting on asset performance and are always reachable directly." },
  { q: "What types of properties do you invest in?", a: "We focus exclusively on multifamily residential — apartment communities in secondary and tertiary markets across the Mountain West and Great Plains." },
  { q: "Do you manage the properties yourself?", a: "Yes. Our in-house property management team, manages all assets directly. We don't outsource to third-party managers." },
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

      {/* Testimonial (centered) */}
      <section className="bg-navy-mid px-6 md:px-[60px] py-16 md:py-[72px]">
        <div className="max-w-[800px] mx-auto text-center">
          <div className="font-serif text-blue text-[64px] leading-[0.8] mb-6 opacity-50">
            &ldquo;
          </div>
          <p className="font-serif text-white text-[22px] md:text-[28px] leading-[1.55] mb-7">
            The results have been at or greater than initial projections,
            showing success in their ability to manage the properties according
            to their proposed business plan. And that is what investors really
            like &ndash; no surprises!
          </p>
          <div className="text-blue-light text-sm font-semibold mb-6">
            R.S. · Bozeman, MT
          </div>
          <Link
            href="/testimonials"
            className="text-white/50 hover:text-white text-[13px] tracking-[0.04em] transition-colors"
          >
            Read more investor testimonials →
          </Link>
        </div>
      </section>

      {/* Accredited investor definition */}
      <section className="px-6 md:px-[60px] py-16 md:py-[88px] bg-cream-light">
        <Eyebrow className="mb-5">Who Can Invest</Eyebrow>
        <h2 className="font-serif text-navy-dark text-[34px] md:text-[46px] leading-[1.1] mb-6">
          Defining an accredited investor.
        </h2>
        <p className="max-w-[760px] text-base leading-[1.8] text-navy-dark/60 font-light">
          Federal securities law defines the term{" "}
          <span className="italic">accredited investor</span> in Rule 501 of
          Regulation D as:
        </p>

        <ol className="mt-10 md:mt-12 grid md:grid-cols-2 md:gap-x-16">
          {ACCREDITED.map((item, i) => (
            <li
              key={i}
              className="flex gap-5 py-6 border-b border-navy-dark/[0.09]"
            >
              <span className="font-serif font-light text-blue/40 text-[22px] leading-[1.3] shrink-0 w-7">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[15px] text-navy-dark/60 leading-[1.78] font-light">
                {item}
              </span>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-[13px] leading-[1.7] text-navy-dark/40 font-light max-w-[760px]">
          Summarized for convenience — Rule 501 governs. This is general
          information, not legal or investment advice.
        </p>
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
