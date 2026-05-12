"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";

const packItems = [
  {
    id: "pack-exploration",
    name: "Pack Exploration",
    description: "The perfect introduction to our flavors. A curated selection of our best-selling delights.",
    price: "50.00 DH",
    image: "/exploration.jpeg",
    category: "Special Packs"
  },
  {
    id: "pack-famille",
    name: "Pack La Famille",
    description: "Designed for sharing. A generous assortment for the whole family to enjoy together.",
    price: "90.00 DH",
    image: "/famille.jpeg",
    category: "Special Packs"
  }
];

export default function Packs() {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold uppercase tracking-[0.3em] font-bold mb-4 block"
          >
            Exclusive Bundles
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Discover Our <span className="italic">Special Packs</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-brown/60 max-w-2xl mx-auto text-lg"
          >
            Carefully curated combinations of our signature treats, perfect for gifts or shared moments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {packItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <ProductCard {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
