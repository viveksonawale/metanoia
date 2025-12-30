import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-titillium"
});

export const metadata: Metadata = {
  title: "Metanoia Global",
  description: "Premium stainless steel cutting boards for the modern kitchen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased", titillium.variable)}>
        {children}
      </body>
    </html>
  );
}
