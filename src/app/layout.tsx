import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StarBackground } from "@/components/StarBackground";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Note Kuppi | by 48th Batch",
  description: "Notes, tutorials, ICAs and past papers for CS, Statistics, Mathematics, Chemistry, Physics and Biology — 48th Batch UOJ Science.",
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
