import type { Metadata } from "next";
import { Manrope, Playfair_Display, Bodoni_Moda, Dancing_Script } from "next/font/google";
import "./globals.css";
import "material-symbols/outlined.css";

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

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Meraki Wellness Centre | Eros, Windhoek",
  description: "Experience the essence of African luxury and holistic healing in the heart of Namibia. For bookings call +264 81 247 8077 or book online.",
  keywords: ["Meraki Wellness Centre", "Luxury African Spa", "Namibia", "Massage Eros", "Facial", "Wellness Treatments", "Spa", "Eros", "Massage Windhoek", "Facial Windhoek", "Wellness Treatments Windhoek", "Spa Windhoek", "Spa Eros"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body
        className={`${manrope.variable} ${playfair.variable} ${bodoni.variable} ${dancing.variable}  antialiased bg-background-light text-text-main`}
      >
        {children}
      </body>
    </html>
  );
}
