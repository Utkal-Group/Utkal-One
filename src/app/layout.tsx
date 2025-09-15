import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/layouts/NavBar";
import SubNavbar from "@/layouts/SubNavbar";
 // Import your responsive navbar component
import Footer from "@/layouts/Footer";
import ResponsiveNavbar from "@/layouts/ResponsiveNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UtkalOne Pvt. Ltd. | Infrastructure & Interior Solutions",
  description:
    "UtkalOne Pvt. Ltd. is a trusted infrastructure development company specializing in building, road, drain, and dam construction. We also provide modern interior design solutions for homes and offices. Backed by expert engineers, architects, and designers, we deliver projects with safety, sustainability, and aesthetics at the core.",
  keywords: [
    "UtkalOne Pvt. Ltd.",
    "infrastructure development",
    "building construction",
    "road construction",
    "drain construction",
    "dam construction",
    "interior design",
    "home interiors",
    "office interiors",
    "architectural services",
    "engineering solutions",
    "construction company in Odisha",
  ],
  authors: [{ name: "UtkalOne Pvt. Ltd." }],
  openGraph: {
    title: "UtkalOne Pvt. Ltd. | Infrastructure & Interior Solutions",
    description:
      "Leading construction and interior design company delivering high-quality projects in building, road, drain, dam, and interiors with safety, sustainability, and innovation.",
    url: "https://www.utkalone.in", // replace with your actual domain
    siteName: "UtkalOne Pvt. Ltd.",
    locale: "en_IN",
    type: "website",
        images: [
      {
        url: "/assets/subnavbar/utkalone.png", // replace with your logo URL
        width: 600,
        height: 600,
        alt: "UtkalOne Pvt. Ltd. Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UtkalOne Pvt. Ltd. | Infrastructure & Interior Solutions",
    description:
      "Expertise in building, road, drain, dam construction, and modern interiors for homes & offices.",
    creator: "@utkalone", // replace with your actual Twitter handle
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* NavBar and SubNavbar visible on large screens */}
        <div className="hidden lg:block">
          <NavBar />
          <SubNavbar />
        </div>

        {/* ResponsiveNavBar visible on small screens */}
        <div className="lg:hidden">
          <ResponsiveNavbar />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
