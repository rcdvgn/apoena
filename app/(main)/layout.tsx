import type { Metadata } from "next";
import "../globals.css";

import IsAuth from "../_protectedRoutes/isAuth";

import Navbar from "../_components/Navbar";

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
