import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import CardScreensImage from "@/images/card_screens.png";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Connect people to the future | Minh's group",
  description: "Help you build anything to make your ideas come true",
  openGraph: {
    title: "Connect people to the future | Minh's group",
    description: "Help you build anything to make your ideas come true",
    images: CardScreensImage.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
