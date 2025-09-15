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
  title: "utkalone.in",
  description: "Powered by UtkalOne",
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
