"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Eleanor Vance",
    role: "Wedding Planner",
    content: "NuTreat created the most breathtaking cake for my clients. Not only was it a work of art, but the flavor was absolutely divine.",
    rating: 5
  },
  {
    name: "Julian Marsh",
    role: "Food Critic",
    content: "The attention to detail in their macarons is unmatched. Each bite is a perfect balance of texture and sophisticated flavors.",
    rating: 5
  },
  {
    name: "Sophie Laurent",
    role: "Regular Customer",
    content: "My go-to place for every celebration. Their pastries bring a touch of Parisian elegance to every occasion.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 p-20 opacity-5">
        <Quote size={300} className="text-brand-gold" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold uppercase tracking-[0.3em] font-bold mb-4 block"
          >
            Love Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            What Our <span className="italic text-gold-gradient">Guests Say</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/50 backdrop-blur-sm p-10 rounded-[2rem] border border-brand-gold/10 hover:bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-brand-gold fill-brand-gold" />
                ))}
              </div>
              <p className="text-brand-brown/80 italic leading-relaxed mb-8 text-lg">
                "{t.content}"
              </p>
              <div>
                <h4 className="font-serif font-bold text-xl">{t.name}</h4>
                <p className="text-brand-gold text-sm uppercase tracking-widest font-medium">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
