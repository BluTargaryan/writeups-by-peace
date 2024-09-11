import type { Metadata } from "next";

import "./globals.css";

import { quicksand } from "./utils/importedFonts";

export const metadata: Metadata = {
  title: "Writeups by Peace",
  description: "Biweekly writeups by Peace, on a diverse set of topics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.className }  bg-selfPrimary overflow-x-hidden scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
