import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans } from "next/font/google";
import { WebsiteJsonLd } from "./components/JsonLd";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Dogecoin — UK home for DOGE",
    template: "%s · Dogecoin UK",
  },
  description:
    "Unofficial UK community site for Dogecoin: plain-English explainers, safety guides, and updates without the circus. Not financial advice.",
  metadataBase: new URL("https://dogecoin.co.uk"),
  alternates: { canonical: "https://dogecoin.co.uk" },
  openGraph: {
    title: "Dogecoin — UK home for DOGE",
    description:
      "Unofficial UK community site for Dogecoin: plain-English explainers, safety guides, and updates without the circus.",
    url: "https://dogecoin.co.uk",
    siteName: "Dogecoin UK",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dogecoin — UK home for DOGE",
    description:
      "Unofficial UK explainers, safety guides, and community notes. Not financial advice.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full antialiased">
        <WebsiteJsonLd />
        {children}
      </body>
    </html>
  );
}
