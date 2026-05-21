import type { Metadata } from "next";
import { Syne, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VIJOMI | Victory In Jesus Outreach Ministries",
  description: "To turn sinners to God through Jesus Christ and to let them know there is hope for them.",
};

import Navbar from "@/components/Navbar";
import QueryProvider from "@/providers/QueryProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${spaceGrotesk.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body 
        className="min-h-full flex flex-col bg-white text-black font-sans"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.25) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed"
        }}
      >
        <QueryProvider>
          <div className="p-6 md:p-12 w-full max-w-7xl mx-auto flex flex-col flex-grow">
            <Navbar />
            {children}
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
