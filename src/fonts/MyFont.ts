import localFont from "next/font/local";

export const myFont = localFont({
  src: "./typography/MyFont.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
