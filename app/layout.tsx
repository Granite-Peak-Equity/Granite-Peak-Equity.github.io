import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.granitepeakequity.com"),
  title: {
    default: `${SITE.name} — Multifamily Real Estate Investment`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Granite Peak Equity is a Bozeman, Montana family-owned firm acquiring, improving, and managing multifamily apartment communities across the Mountain West and Great Plains.",
  openGraph: {
    title: `${SITE.name} — Multifamily Real Estate Investment`,
    description:
      "Family-owned multifamily real estate investment and management. 20+ years, 18 deals closed, $40M in investor distributions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
