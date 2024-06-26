import type { Metadata } from "next";
import "../globals.css";

import IsNotAuth from "../_protectedRoutes/isNotAuth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <IsNotAuth>
      <div className="flex items-center justify-center min-h-lvh bg-background">
        {children}
      </div>
    </IsNotAuth>
  );
}
