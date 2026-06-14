import Link from "next/link";
import { NAV_ITEMS, SITE, asset } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 md:px-[60px] pt-[52px] pb-8">
      <div className="grid gap-10 md:gap-[60px] mb-10 items-start md:grid-cols-[1fr_auto_auto]">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/uploads/logo.png")}
            alt="Granite Peak Equity"
            className="h-[38px] w-auto mb-[14px] brightness-0 invert opacity-55"
          />
          <div className="text-white/30 text-[13px] leading-[1.7]">
            {SITE.legalName}
            <br />
            {SITE.location}
          </div>
        </div>

        <div className="flex flex-col gap-[10px]">
          <div className="text-white/25 text-[11px] tracking-[0.1em] uppercase mb-1">
            Pages
          </div>
          {NAV_ITEMS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white/40 text-[13px] hover:text-blue transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        <div>
          <div className="text-white/25 text-[11px] tracking-[0.1em] uppercase mb-3">
            Contact
          </div>
          <a
            href={`mailto:${SITE.infoEmail}`}
            className="text-white/45 text-[13px] leading-[1.7] hover:text-blue transition-colors"
          >
            {SITE.infoEmail}
          </a>
        </div>
      </div>

      <div className="border-t border-white/[0.07] pt-6 flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
        <div className="text-white/20 text-xs">
          © {SITE.copyrightYear} {SITE.legalName} · All rights reserved
        </div>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Use"].map((n) => (
            <span key={n} className="text-white/20 text-xs cursor-pointer">
              {n}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
