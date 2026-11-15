import type { Metadata } from "next";
import Image from "next/image";
import { EB_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";
import { profile } from "@/data/profile";
import flower from "@/assets/flower.png";
import "./globals.css";

const garamond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: profile.name,
  description: `${profile.name} — ${profile.subtitle}`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={garamond.variable}>
        <Navbar />
        <main className="page">{children}</main>
        {/* Hand-drawn flower pinned to the corner of the "paper" */}
        <Image src={flower} alt="" className="corner-drawing" priority />
      </body>
    </html>
  );
}
