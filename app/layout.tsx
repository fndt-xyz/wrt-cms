// app/layout.tsx

import type { Metadata } from "next";
import { Open_Sans, Inter, Lato } from "next/font/google";
import "./globals.css";
import { Navbarnc as Navbar } from "../components/navbarn"; 
import { footern as Footer } from "../components/footern";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "wrt-cms",
  description: "wrt-cms template",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${openSans.variable} ${inter.variable} ${lato.variable}`}>
      <body className="antialiased text-slate-800 bg-white min-h-screen flex flex-col font-inter">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
