import localFont from "next/font/local";

export const myFont = localFont({
  src: "./typography/MyFont.woff",
  variable: "--font-myFont",
  weight: "100 900",
});
