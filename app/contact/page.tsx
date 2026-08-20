import type { Metadata } from "next";
import SiteFrame from "@/components/SiteFrame";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";
import { SITE, OFFICES, telHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Granite Peak Equity — for accredited investors, sellers and brokers, or general inquiries. Based in Bozeman, Montana.",
};

const CHANNELS = [
  {
    label: "Investor Relations",
    value: SITE.infoEmail,
    href: `mailto:${SITE.infoEmail}`,
    note: "Questions about the firm or investing with us.",
  },
  {
    label: "Acquisitions — Sellers & Brokers",
    value: SITE.acquisitionsEmail,
    href: `mailto:${SITE.acquisitionsEmail}`,
    note: "Submit a property or deal for review by Brad Osen.",
  },
  {
    label: "Careers",
    value: SITE.careersEmail,
    href: `mailto:${SITE.careersEmail}`,
    note: "Interested in joining the team? Send us a note.",
  },
];

const ADDRESSED_OFFICES = OFFICES.filter((o) => o.address.length > 0);
const PHONE_ONLY_OFFICES = OFFICES.filter((o) => o.address.length === 0);

function OfficeBlock({ office }: { office: (typeof OFFICES)[number] }) {
  return (
    <div>
      <div className="text-[11px] tracking-[0.1em] uppercase text-navy-dark/40 mb-2">
        {office.city}
      </div>
      <div className="text-[15px] text-navy-dark/70 leading-[1.7] font-light">
        {office.address.map((line) => (
          <span key={line}>
            {line}
            <br />
          </span>
        ))}
        <span className={office.address.length ? "inline-block mt-2" : undefined}>
          Direct:{" "}
          <a
            href={telHref(office.direct)}
            className="text-navy-dark hover:text-blue transition-colors"
          >
            {office.direct}
          </a>
        </span>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <SiteFrame>
      <PageHero
        tag="Get in Touch"
        title="Let's Talk."
        subtitle="Whether you're an accredited investor, a broker with a deal, or just have a question — we're a small team and we answer personally. No pressure, ever."
      />

      <section className="px-6 md:px-[60px] py-16 md:py-20 bg-white">
        <div className="grid gap-12 md:gap-20 md:grid-cols-2 items-start">
          {/* Left: details */}
          <div>
            <Eyebrow className="mb-5">How to Reach Us</Eyebrow>
            <h2 className="font-serif text-navy-dark text-[30px] md:text-[40px] leading-[1.18] mb-8">
              We&apos;d love to hear from you.
            </h2>

            <div className="flex flex-col gap-5 mb-10">
              {CHANNELS.map((c) => (
                <div
                  key={c.label}
                  className="px-6 py-5 bg-cream-light border-l-[3px] border-blue"
                >
                  <div className="text-xs text-navy-dark/[0.42] mb-1.5 tracking-[0.05em] uppercase">
                    {c.label}
                  </div>
                  <a
                    href={c.href}
                    className="text-base font-semibold text-navy-dark hover:text-blue transition-colors break-all"
                  >
                    {c.value}
                  </a>
                  <div className="text-sm text-navy-dark/55 leading-[1.6] font-light mt-1.5">
                    {c.note}
                  </div>
                </div>
              ))}
            </div>

            {/* Phone-only offices stack under Central so they don't sit in a
                gap beside the taller offices that carry a street address. */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 items-start">
              <div className="flex flex-col gap-7">
                <div>
                  <div className="text-[11px] tracking-[0.1em] uppercase text-navy-dark/40 mb-2">
                    Central
                  </div>
                  <div className="text-[15px] text-navy-dark/70 leading-[1.7] font-light">
                    Toll Free:{" "}
                    <a
                      href={telHref(SITE.tollFree)}
                      className="text-navy-dark hover:text-blue transition-colors"
                    >
                      {SITE.tollFree}
                    </a>
                    <br />
                    Fax: {SITE.fax}
                  </div>
                </div>

                {PHONE_ONLY_OFFICES.map((o) => (
                  <OfficeBlock key={o.city} office={o} />
                ))}
              </div>

              {ADDRESSED_OFFICES.map((o) => (
                <OfficeBlock key={o.city} office={o} />
              ))}
            </div>

            <div>
              <div className="text-[11px] tracking-[0.1em] uppercase text-navy-dark/40 mb-2">
                Investors
              </div>
              <a
                href={SITE.investorLoginUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-blue hover:text-blue-dark font-light transition-colors"
              >
                Investor Login Portal →
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <Eyebrow className="mb-5">Send a Message</Eyebrow>
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteFrame>
  );
}
