import "../../globals.css";

import IsAuth from "../../_protectedRoutes/isAuth";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <IsAuth>{children}</IsAuth>;
}
