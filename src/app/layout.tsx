import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: `jos's screen`,
  description: "This is the portfolio of Jos Badenas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
