import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import Header from "@/components/header";
import Promotion from "@/components/promotion";
import "../embla.css";
import { SanityLive } from "@/sanity/lib/live";

const integralCFRegular = localFont({
  src: "../fonts/IntegralCF-Regular.woff",
  variable: "--font-IntegralCF-regular",
});

const satoshiRegular = localFont({
  src: "../fonts/Satoshi-Regular.woff",
  variable: "--font-Satoshi-regular",
});

export const metadata: Metadata = {
  title: "SHOP.CO | Home",
  description: "Generated by create next app",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="en" className="max-w-[1920px]">
        <body>
          <main
            className={`${integralCFRegular.variable} ${satoshiRegular.variable} antialiased font-satoshiRegular`}
          >
            <Promotion />
            <Header />
            {children}
          </main>
          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
