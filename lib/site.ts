// Central site config + helpers shared across pages.

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a /public asset path with the configured basePath (for GitHub Pages project sites). */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

export const SITE = {
  name: "Granite Peak Equity",
  legalName: "Granite Peak Equity, LLC",
  location: "Bozeman, Montana",
  infoEmail: "info@granitepeakequity.com",
  acquisitionsEmail: "acquisitions@granitepeakequity.com",
  investorLoginUrl:
    "https://investors.appfolioim.com/southwestmontana/investor/login",
  copyrightYear: 2026,
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Investor Info", href: "/investors" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Acquisition Criteria", href: "/acquisition" },
  { label: "Contact", href: "/contact" },
] as const;
