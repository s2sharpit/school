import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const josefinSans = Josefin_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bsseniorsecondary.in/"),
  title: "B. S. Senior Secondary School",
  description:
    "An affiliated school from CBSE, New Delhi situated in Salempur Khadar, Yamunanagar.",
  authors: [
    { name: "s2sharpit", url: "https://s2sharpit.tech" },
    { name: "Tushar Saini", url: "https://s2sharpit.tech" },
  ],
  keywords: [
    "b. s. senior secondary school",
    "salmepur khadar",
    "school",
    "cbse",
    "education",
    "bharat",
    "yamunanagar",
    "haryana",
    "chhachhrauli",
    "ledi",
    "harauli",
    "panchkula",
    "s2sharpit",
  ],
  publisher: "s2sharpit",
  openGraph: {
    title: "B. S. Senior Secondary School",
    description:
      "An affiliated school from CBSE, New Delhi situated in Salempur Khadar, Yamunanagar.",
    url: "https://bsseniorsecondary.in",
    siteName: "B. S. Senior Secondary School",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefinSans.variable} font-sans antialiased mx-auto`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
