"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductProps {
  id: number | string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export default function ProductCard({ id, name, description, price, image, category }: ProductProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, image, category });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-brand-gold/5"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-brand-cream/90 backdrop-blur-md text-brand-brown text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full border border-brand-gold/20">
            {category}
          </span>
        </div>
        <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button 
            onClick={handleAddToCart}
            className="bg-brand-cream text-brand-brown p-4 rounded-full shadow-xl hover:bg-brand-gold hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
          >
            <Plus size={24} />
          </button>
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-2xl font-bold text-brand-brown">{name}</h3>
          <span className="text-brand-gold font-bold text-lg">{price}</span>
        </div>
        <p className="text-brand-brown/60 text-sm leading-relaxed mb-6 line-clamp-2">
          {description}
        </p>
        <button 
          onClick={handleAddToCart}
          className="w-full py-3 rounded-xl border border-brand-brown/10 text-brand-brown font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-brand-brown hover:text-brand-cream transition-all group/btn"
        >
          <ShoppingCart size={18} className="group-hover/btn:scale-110 transition-transform" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
