import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sagar Pednekar | Senior Full Stack Developer (React, Node.js)",
  description:
    "Experienced Full Stack Developer building scalable web apps using React, Node.js, and AWS. Open to NZ opportunities.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Node.js",
    "New Zealand",
    "JavaScript",
    "TypeScript",
  ],
  openGraph: {
    title: "Sagar Pednekar | Senior Full Stack Developer",
    description:
      "Building scalable, high-performance web apps with React & Node.js.",
    url: "https://www.codewithocean.online",
    siteName: "CodeWithOcean",
    images: [
      {
        url: "https://www.codewithocean.online/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar Pednekar | Senior Full Stack Developer",
    description:
      "React, Node.js, and AWS — building scalable systems for modern web.",
    images: ["https://www.codewithocean.online/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-slate-950 text-slate-300 font-mono">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
