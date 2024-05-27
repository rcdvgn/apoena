import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "./_contexts/AuthContext";
import { PaymentProvider } from "./_contexts/PaymentContext";
import PaymentModal from "./_modals/PaymentModal";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en">
      <body className={figtree.className}>
        <AuthProvider>
          <PaymentProvider>
            {children}
            <PaymentModal />
          </PaymentProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
