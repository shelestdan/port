import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-sans"
});

const serif = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-serif",
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Сайт или сервис под ключ",
  description:
    "Премиальная одностраничная презентация личного бренда: сайты и сервисы под ключ с акцентом на разницу между витриной и рабочим цифровым инструментом."
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
