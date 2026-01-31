import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Devansh Bagaria | Creative Developer",
  description: "Portfolio of Devansh Bagaria - A creative developer specializing in building exceptional digital experiences through design and engineering.",
  keywords: ["creative developer", "portfolio", "web developer", "frontend", "react", "next.js", "framer motion"],
  authors: [{ name: "Devansh Bagaria" }],
  openGraph: {
    title: "Devansh Bagaria | Creative Developer",
    description: "Portfolio of Devansh Bagaria - Building digital experiences that bridge design and engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#121212] text-white`}
      >
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
