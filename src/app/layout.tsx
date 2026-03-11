import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StarBackground } from "@/components/StarBackground";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stat Kuppi - Statistics & Resources",
  description: "Statistics notes, ICAs and Pastpapers for the 48th batch.",
  icons: {
    icon: "/ico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <StarBackground />
        {children}
      </body>
    </html>
  );
}
