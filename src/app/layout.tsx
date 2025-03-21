import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | B. S. Sr. Sec. School - Salempur Khadar",
    default: "B. S. Sr. Sec. School - Salempur Khadar",
  },
  description:
    "B. S. Sr. Sec. School is a premier educational institution in Salempur Khadar, Delhi, providing quality education since 1985.",
  keywords: ["school", "education", "CBSE", "Delhi", "Salempur Khadar", "B. S. Sr. Sec. School", "admission"],
  authors: [{ name: "B. S. Sr. Sec. School" }],
  creator: "B. S. Sr. Sec. School",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bsseniorsecondary.in",
    title: "B. S. Sr. Sec. School - Salempur Khadar",
    description:
      "B. S. Sr. Sec. School is a premier educational institution in Salempur Khadar, Delhi, providing quality education since 1985.",
    siteName: "B. S. Sr. Sec. School",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
