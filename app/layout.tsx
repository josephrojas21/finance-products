import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/app/ClientLayout";
import { Footer } from "./components/layout/Footer";
import Header from "./components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FinTech Solutions - Financial Products",
  description: "Discover our range of financial products designed for your economic well-being",
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
        <ClientLayout>
          <Header />
          {children}
          <Footer />
        </ClientLayout>
      </body>
    </html>
  );
}
