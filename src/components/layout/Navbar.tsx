"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-300 px-6 py-4 md:py-8",
        isOpen ? "z-[999] bg-brand-cream" : "z-50",
        scrolled && !isOpen ? "glass-morphism py-3 shadow-sm" : !isOpen ? "bg-transparent" : ""
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.png" 
            alt="NuTreat Logo" 
            width={200} 
            height={80} 
            className="h-10 md:h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-base uppercase tracking-[0.2em] font-semibold hover:text-brand-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 hover:text-brand-gold transition-colors relative"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="p-2 relative"
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-gold text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-brand-brown"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-brand-cream md:hidden flex flex-col w-screen h-screen opacity-100"
          >
            {/* Header inside Menu */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-brand-gold/10">
              <Image 
                src="/logo.png" 
                alt="NuTreat Logo" 
                width={120} 
                height={40} 
                className="h-10 w-auto object-contain"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-brand-brown"
              >
                <X size={32} strokeWidth={1.5} />
              </button>
            </div>

            {/* Links Section */}
            <div className="flex-1 flex flex-col justify-center px-10 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-serif font-bold text-brand-brown hover:text-brand-gold transition-colors flex items-center gap-4 group"
                  >
                    <span className="text-brand-gold/30 text-sm font-sans tracking-widest font-bold">0{i + 1}</span>
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Info Section */}
            <div className="p-10 border-t border-brand-gold/10 bg-brand-beige/30">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-widest font-bold text-brand-gold mb-2">Connect with us</p>
                <div className="flex gap-6 text-brand-brown">
                  <a href="#" className="hover:text-brand-gold transition-colors">Instagram</a>
                  <a href="#" className="hover:text-brand-gold transition-colors">Facebook</a>
                  <a href="#" className="hover:text-brand-gold transition-colors">WhatsApp</a>
                </div>
              </div>
              <p className="text-sm text-brand-brown/50">© 2026 NuTreat Luxury Patisserie</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

