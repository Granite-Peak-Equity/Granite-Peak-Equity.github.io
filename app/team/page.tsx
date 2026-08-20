import type { Metadata } from "next";
import SiteFrame from "@/components/SiteFrame";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Cta from "@/components/Cta";
import { TEAM, type TeamMember } from "@/lib/data";
import { asset } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the Granite Peak Equity team — a small, focused group with deep multifamily expertise and genuine accountability to every investor and resident.",
};

const VALUES = [
  { t: "Hands-On Management", d: "We don't outsource property management. Our team is directly involved in every asset, every day." },
  { t: "Investor Accountability", d: "We're stewards of other people's money. Every decision is made with that responsibility front of mind." },
  { t: "Long-Term Relationships", d: "Many of our investors have been with us for over a decade. We earn that trust deal by deal." },
];

function TeamCard({ member, featured }: { member: TeamMember; featured: boolean }) {
  const photoH = featured ? "h-[320px] md:h-[360px]" : "h-[240px] md:h-[260px]";
  return (
    <div className="border border-navy-dark/[0.09] overflow-hidden flex flex-col">
      {/* Photo area */}
      <div className={`relative bg-navy-mid flex items-center justify-center ${photoH}`}>
        {member.photo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(member.photo)}
            alt={member.name}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="text-center">
            <div
              className={`rounded-full bg-navy-light border-2 border-blue/25 flex items-center justify-center mx-auto mb-3 ${
                featured ? "w-20 h-20" : "w-16 h-16"
              }`}
            >
              <span
                className={`font-serif text-blue-light ${
                  featured ? "text-[32px]" : "text-2xl"
                }`}
              >
                {member.initials}
              </span>
            </div>
            <div className="text-white/20 text-[11px] tracking-[0.07em]">
              Photo Coming Soon
            </div>
          </div>
        )}
        <div
          className="absolute bottom-0 left-0 right-0 px-6 pt-12 pb-5"
          style={{
            background: "linear-gradient(to top, rgba(9,15,26,.85), transparent)",
          }}
        >
          <div
            className={`text-white font-serif font-medium leading-[1.2] ${
              featured ? "text-[28px]" : "text-[22px]"
            }`}
          >
            {member.name}
          </div>
          <div className="text-blue-light text-xs tracking-[0.04em] mt-[3px]">
            {member.title}
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className={`bg-white ${featured ? "px-7 pt-7 pb-8" : "px-6 pt-[22px] pb-7"}`}>
        {member.bio.length > 0 ? (
          member.bio.map((para, i) => (
            <p
              key={i}
              className="text-sm text-navy-dark/60 leading-[1.78] font-light"
              style={{ marginBottom: i < member.bio.length - 1 ? 12 : 0 }}
            >
              {para}
            </p>
          ))
        ) : (
          <p className="text-sm text-navy-dark/35 leading-[1.78] font-light italic">
            Bio coming soon.
          </p>
        )}
      </div>
    </div>
  );
}

export default function TeamPage() {
  const featured = TEAM.filter((m) => m.size === "large");
  const rest = TEAM.filter((m) => m.size === "small");

  return (
    <SiteFrame>
      <PageHero
        tag="The Team"
        title="The People Behind the Portfolio."
        subtitle="A small, focused team with deep expertise — and genuine accountability to every investor and every resident."
      />

      {/* Leadership */}
      <section className="px-6 md:px-[60px] pt-16 md:pt-[72px] bg-white">
        <Eyebrow className="mb-10">Leadership</Eyebrow>
        <div className="grid gap-5 md:grid-cols-2 mb-5">
          {featured.map((m) => (
            <TeamCard key={m.name} member={m} featured />
          ))}
        </div>
      </section>

      {/* Operations */}
      <section className="px-6 md:px-[60px] pb-16 md:pb-20 bg-white">
        <Eyebrow className="my-10 md:my-12">Operations</Eyebrow>
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((m) => (
            <TeamCard key={m.name} member={m} featured={false} />
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy-mid px-6 md:px-[60px] py-14 md:py-16">
        <Eyebrow className="mb-8">Our Values</Eyebrow>
        <div className="grid gap-8 md:gap-10 md:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.t} className="border-l-2 border-blue pl-5">
              <div className="text-base font-semibold text-white mb-2.5">
                {v.t}
              </div>
              <div className="text-sm text-white/45 leading-[1.7] font-light">
                {v.d}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Cta
        heading="Want to talk to the team directly?"
        sub="We're always happy to have a conversation — no pressure, no sales pitch."
        btnLabel="Get in Touch"
      />
    </SiteFrame>
  );
}
