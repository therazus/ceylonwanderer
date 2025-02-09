import type { Metadata } from "next";
import { Josefin_Sans, Caveat } from "next/font/google";
import { LanguageProvider } from "./context/language-context";

import "./globals.css";

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveatFont = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Adjust as necessary
});

export const metadata: Metadata = {
  title: "Ceylon Wanderer",
  description: "Explore the beauty of Sri Lanka with Ceylon Wanderer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} ${caveatFont.variable} antialiased`}
      >
        {/* Main content */}
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
