// Central site config + helpers shared across pages.

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a /public asset path with the configured basePath (for GitHub Pages project sites). */
export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

/**
 * Endpoint that receives contact/deal form submissions. The site is a static
 * export, so there is no server of our own — point this at a form service
 * (Formspree, Basin, Formspark…) or a serverless function.
 * Set NEXT_PUBLIC_FORM_ENDPOINT in .env.local and in the deploy workflow.
 * While unset, the forms say so and fall back to email instead of pretending
 * a message was sent.
 */
export const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || "";

/** Build a prefilled mailto: link used as the no-endpoint fallback. */
export function mailtoLink(
  to: string,
  subject: string,
  fields: [string, string][]
): string {
  const body = fields
    .filter(([, v]) => v.trim() !== "")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export const SITE = {
  name: "Granite Peak Equity",
  legalName: "Granite Peak Equity, LLC",
  location: "Bozeman, Montana",
  infoEmail: "InvestorRelations@GranitePeakEquity.com",
  acquisitionsEmail: "Acquisitions@GranitePeakEquity.com",
  careersEmail: "Careers@GranitePeakEquity.com",
  tollFree: "800.287.9620",
  fax: "406.551.6108",
  investorLoginUrl:
    "https://investors.appfolioim.com/southwestmontana/investor/login",
  copyrightYear: 2026,
} as const;

/** Office locations, in the order they should appear on the contact page. */
export const OFFICES = [
  {
    city: "Bozeman",
    address: ["1924 West Stevens Street", "Suite 101", "Bozeman, MT 59718"],
    direct: "406.551.6107",
  },
  {
    city: "Dallas",
    address: [],
    direct: "972.996.2936",
  },
] as const;

/** Strip formatting from a display phone number for use in a tel: link. */
export function telHref(phone: string): string {
  return `tel:+1${phone.replace(/\D/g, "")}`;
}

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Investor Info", href: "/investors" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Team", href: "/team" },
  { label: "Acquisition Criteria", href: "/acquisition" },
  { label: "Contact", href: "/contact" },
] as const;
