import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import LeftBar from "@/components/LeftBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://bsseniorsecondaryschool.in/"),
  title: "B. S. Senior Secondary School",
  description:
    "An affiliated school from CBSE, New Delhi situated in Salempur Khadar, Yamunanagar.",
  authors: [
    { name: "s2sharpit" },
    { name: "Tushar Saini", url: "https://s2sharpit.me" },
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
    url: "https://bsseniorsecondaryschool.in",
    siteName: "B. S. Senior Secondary School",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-body-color`}>
        <Header />
        <div className="flex flex-col lg:flex-row justify-between px-8 md:px-12 lg:px-16 gap-4 lg:gap-16 pb-8">
          <LeftBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
