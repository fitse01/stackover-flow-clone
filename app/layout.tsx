import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 700 800 900",
});

// const inter = localFont({
//   src:"./fonts/InterVF.ttf",
//   variable: "--font-inter",
//   weight:"100 200 300 400 500 700 800 900"
// });

export const metadata: Metadata = {
  title: "Stack overflow ",
  description: "costom stack overflow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}  antialiased`}>{children}</body>
    </html>
  );
}
