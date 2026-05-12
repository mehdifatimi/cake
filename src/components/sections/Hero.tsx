"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-cream pt-40 pb-20 lg:pt-0 lg:pb-0">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-brand-pink blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-brand-beige blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-gold uppercase tracking-[0.3em] font-medium mb-4 block"
          >
            Since 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-4 md:mb-6"
          >
            Taste the Art of <br />
            <span className="text-gold-gradient italic text-5xl md:text-8xl">Luxury</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-brand-brown/70 mb-10 leading-relaxed max-w-lg"
          >
            Indulge in our collection of handcrafted pastries and bespoke cakes,
            where every bite tells a story of elegance and perfection.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/menu"
              className="bg-brand-brown text-brand-cream px-8 py-3 md:px-10 md:py-4 rounded-full font-medium tracking-wide hover:bg-brand-gold hover:text-brand-brown transition-all duration-300 text-center shadow-lg hover:shadow-brand-gold/20"
            >
              Order Now
            </Link>
            <Link
              href="/gallery"
              className="border border-brand-brown/20 text-brand-brown px-8 py-3 md:px-10 md:py-4 rounded-full font-medium tracking-wide hover:border-brand-gold hover:text-brand-gold transition-all duration-300 text-center"
            >
              View Gallery
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative aspect-square max-w-[600px] mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 border-2 border-brand-gold/30 rounded-[3rem] rotate-6 scale-95" />
          <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl bg-brand-pink/20">
            <img
              src="/proudact.jpeg"
              alt="NuTreat Featured Product"
              className="w-full h-full object-cover border-4 border-brand-gold/10"
            />
          </div>
          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-gold/10 flex items-center gap-4"
          >
            <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold">
              <span className="font-serif font-bold text-xl">#1</span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-tighter text-brand-gold font-bold">Award Winning</p>
              <p className="font-serif font-bold">Patisserie 2025</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
