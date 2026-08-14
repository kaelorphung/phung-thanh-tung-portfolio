
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phung-thanh-tung-portfolio.vercel.app"),
  title: {
    default: "Phung Thanh Tung | Cybersecurity Student & Security Researcher",
    template: "%s | Phung Thanh Tung",
  },

  description:
    "Cybersecurity portfolio of Phung Thanh Tung, focused on Security Operations, Blue Team, Threat Hunting, Detection Engineering, SIEM, and practical security research.",

  keywords: [
    "Phung Thanh Tung",
    "Cybersecurity",
    "Cybersecurity Student",
    "Security Researcher",
    "Blue Team",
    "Security Operations",
    "Threat Hunting",
    "Detection Engineering",
    "SIEM",
    "SOC",
    "Wazuh",
    "Splunk",
    "ELK Stack",
  ],

  authors: [
    {
      name: "Phung Thanh Tung",
    },
  ],

  creator: "Phung Thanh Tung",

  openGraph: {
    title: "Phung Thanh Tung | Cybersecurity Student & Security Researcher",
    description:
      "Cybersecurity portfolio focused on Security Operations, Blue Team, Threat Hunting, Detection Engineering, SIEM, and practical security research.",
    type: "website",
    locale: "en_US",
    siteName: "Phung Thanh Tung Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Phung Thanh Tung | Cybersecurity Student & Security Researcher",
    description:
      "Cybersecurity portfolio focused on Security Operations, Blue Team, Threat Hunting, Detection Engineering, and security research.",
  },

  robots: {
    index: true,
    follow: true,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-950 text-white">
        {children}
      </body>
    </html>
  );
}

