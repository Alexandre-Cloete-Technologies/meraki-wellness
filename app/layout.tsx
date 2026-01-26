import type { Metadata } from "next";
import { Manrope, Playfair_Display, Bodoni_Moda } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-bodoni",
});

export const metadata: Metadata = {
  title: "Meraki Wellness Centre | Luxury African Spa",
  description: "Experience the essence of African luxury and holistic healing in the heart of Namibia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${manrope.variable} ${playfair.variable} ${bodoni.variable} font-display antialiased bg-background-light text-text-main`}
      >
        {children}
      </body>
    </html>
  );
}
