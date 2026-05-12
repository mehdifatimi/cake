"use client";

import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import Image from "next/image";

export default function CartDrawer() {
  const { cart, removeFromCart, updateQuantity, totalPrice, isCartOpen, setIsCartOpen, clearCart } = useCart();

  const handleCheckout = () => {
    const phone = "212696818401";
    const itemsList = cart
      .map((item) => `- ${item.name} (x${item.quantity}): ${item.price}`)
      .join("%0A");
    const message = `Hello NuTreat! I'd like to place an order:%0A%0A${itemsList}%0A%0ATotal: $${totalPrice.toFixed(2)}%0A%0APlease let me know the next steps. Thank you!`;
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[1001]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-brand-cream shadow-2xl z-[1002] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-brand-gold/10 flex items-center justify-between bg-white">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-brand-gold" />
                <h2 className="text-xl font-serif font-bold">Your Selection</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-brand-cream rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-40">
                  <ShoppingBag size={64} strokeWidth={1} />
                  <p className="font-serif italic text-xl">Your cart is currently empty</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-white shrink-0 border border-brand-gold/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif font-bold text-lg leading-tight">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-brand-brown/40 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-brand-gold font-bold mt-1">{item.price}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full border border-brand-brown/10 flex items-center justify-center hover:border-brand-gold transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="font-bold min-w-[20px] text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-full border border-brand-brown/10 flex items-center justify-center hover:border-brand-gold transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-8 bg-white border-t border-brand-gold/10 space-y-6">
                <div className="flex justify-between items-center text-xl font-serif">
                  <span>Subtotal</span>
                  <span className="font-bold text-brand-brown">${totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-brand-brown/50 text-center uppercase tracking-widest">Orders are finalized via WhatsApp</p>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-brand-brown text-brand-cream py-5 rounded-2xl font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-brown transition-all shadow-xl hover:shadow-brand-gold/20"
                >
                  Order via WhatsApp
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>

  );
}
