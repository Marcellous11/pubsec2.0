import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Invoke — Intelligent automation for the federal mission",
  description:
    "Invoke modernizes legacy code, automates federal operations, and trains the workforce that runs them. Built for IL4/IL5, FedRAMP, and the agencies that can't afford to be wrong.",
  metadataBase: new URL("https://invokepublic.com"),
  openGraph: {
    title: "Invoke — Intelligent automation for the federal mission",
    description:
      "AI-driven code modernization, agentic automation, and citizen-developer enablement for the federal government and critical infrastructure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-accent focus:text-bg focus:px-3 focus:py-2 focus:text-xs focus:font-mono focus:tracking-wider"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
