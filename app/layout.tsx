import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Metanoia Global",
  description: "Premium stainless steel cutting boards for the modern kitchen.",
  appleWebApp: {
    title: "Metanoia",
  },
};

import { ContactSideTab } from "@/components/ContactSideTab";
import { FloatingActions } from "@/components/FloatingActions";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", inter.variable)}>
        {children}
        <ContactSideTab />
        <FloatingActions />
      </body>
    </html>
  );
}
