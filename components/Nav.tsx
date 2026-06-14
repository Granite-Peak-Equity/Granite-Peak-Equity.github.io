"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV_ITEMS, SITE, asset } from "@/lib/site";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[200] bg-white border-b border-navy-dark/[0.09]">
      <div className="flex items-center justify-between h-[76px] px-6 md:px-[60px]">
        <Link href="/" aria-label={`${"Granite Peak Equity"} home`} className="shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/uploads/logo.png")}
            alt="Granite Peak Equity"
            className="h-[44px] md:h-[50px] w-auto"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden xl:flex items-center gap-7">
          {NAV_ITEMS.map(({ label, href }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={label}
                href={href}
                className={`text-[13px] font-sans tracking-[0.01em] pb-[3px] border-b-2 transition-colors hover:text-blue ${
                  active
                    ? "text-blue border-blue"
                    : "text-navy-dark/65 border-transparent"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href={SITE.investorLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-block bg-blue hover:bg-blue-dark text-white px-6 py-[10px] text-xs font-semibold tracking-[0.04em] transition-colors"
          >
            Investor Login
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="xl:hidden flex flex-col gap-[5px] p-2"
        >
          <span className="block w-6 h-px bg-navy-dark" />
          <span className="block w-6 h-px bg-navy-dark" />
          <span className="block w-6 h-px bg-navy-dark" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-navy-dark/[0.08] px-6 py-4 flex flex-col gap-1 bg-white">
          {NAV_ITEMS.map(({ label, href }) => {
            const active = isActive(pathname, href);
            return (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className={`py-2 text-sm font-sans ${
                  active ? "text-blue" : "text-navy-dark/70"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <a
            href={SITE.investorLoginUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block w-fit bg-blue text-white px-6 py-[10px] text-xs font-semibold tracking-[0.04em]"
          >
            Investor Login
          </a>
        </div>
      )}
    </nav>
  );
}
