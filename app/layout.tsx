import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { FilterProvider } from "@/context/filterContex";

export const metadata: Metadata = {
  title: "Safe Rent Car",
  description: "This is a perfect place for booking a car safe, quickly and easily",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`relative`}>
        <FilterProvider>
        <Header/>
        {children}
        <Footer/>
        </FilterProvider>
      </body>
    </html>
  );
}
