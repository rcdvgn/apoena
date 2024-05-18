import type { Metadata } from "next";
import "../globals.css";

import Navbar from "../_components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-lvh flex flex-col items-center bg-background">
      <Navbar />
      {children}
    </div>
  );
}
