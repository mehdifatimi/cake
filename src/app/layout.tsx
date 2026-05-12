import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NuTreat | Luxury Patisserie & Gourmet Desserts",
  description: "Experience the art of French patisserie with NuTreat. Premium cakes, macarons, and custom desserts crafted with elegance.",
  keywords: ["luxury bakery", "gourmet cakes", "french patisserie", "custom desserts", "macarons"],
};

import { CartProvider } from "@/context/CartContext";
import CartDrawer from "@/components/layout/CartDrawer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${poppins.variable} font-sans antialiased bg-brand-cream text-brand-brown`}
      >
        <CartProvider>
          <CartDrawer />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
