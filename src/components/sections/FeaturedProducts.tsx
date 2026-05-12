"use client";

import { motion } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";

const featuredProducts = [
  {
    id: "cupcake-1",
    name: "The Classic",
    description: "Our timeless chocolate cupcake with rich cocoa and silky ganache topping.",
    price: "10.00 DH",
    image: "/choclate.jpeg",
    category: "Cupcakes"
  },
  {
    id: "cupcake-2",
    name: "The Fit",
    description: "A healthy pistachio-infused delight with a light, nutritious profile.",
    price: "12.00 DH",
    image: "/pistage.jpeg",
    category: "Cupcakes"
  },
  {
    id: "cupcake-3",
    name: "The Care",
    description: "Velvety caramel masterpiece crafted with love and golden caramel swirls.",
    price: "15.00 DH",
    image: "/caramel.jpeg",
    category: "Cupcakes"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-brand-cream relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-gold uppercase tracking-[0.3em] font-bold mb-4 block"
            >
              Our Selection
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold"
            >
              Chef's Seasonal <span className="italic">Highlights</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/menu" className="text-brand-brown font-bold flex items-center gap-2 hover:text-brand-gold transition-colors group">
              View All Products
              <span className="w-8 h-[1px] bg-brand-brown group-hover:bg-brand-gold transition-all group-hover:w-12" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
