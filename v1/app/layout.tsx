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
        className={`${inter.variable} font-sans antialiased bg-[#121212] text-white relative overflow-x-hidden`}
      >
        {/* Liquid Glass Background Effects */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-white/[0.015] rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[150px]" />
        </div>
        
        <div className="relative z-10">
          <Navbar/>
          {children}
        </div>
      </body>
    </html>
  );
}
