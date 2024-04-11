import type { Metadata } from "next";
import "../globals.css";

import IsNotUser from "../_protectedRoutes/isNotUser";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <IsNotUser>
      <div className="flex items-center justify-center min-h-lvh bg-background">
        {children}
      </div>
    </IsNotUser>
  );
}
