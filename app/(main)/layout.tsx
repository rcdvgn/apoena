import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

import IsAuth from "./_components/IsAuth";

import Navbar from "../_components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Apoena",
  // description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <IsAuth>
      <div className="min-h-lvh flex flex-col items-center bg-background">
        <Navbar />
        {children}
      </div>
    </IsAuth>
  );
}
