import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";

const menuItems = [
  { id: "pack-exploration", name: "Pack Exploration", description: "The perfect introduction to our flavors. A curated selection of our best-selling delights.", price: "50.00 DH", category: "Packs", image: "/exploration.jpeg" },
  { id: "pack-famille", name: "Pack La Famille", description: "Designed for sharing. A generous assortment for the whole family to enjoy together.", price: "90.00 DH", category: "Packs", image: "/famille.jpeg" },
  { id: "cup-1", name: "The Classic", description: "Our timeless chocolate cupcake with rich cocoa and silky ganache topping.", price: "10.00 DH", category: "Cupcakes", image: "/choclate.jpeg" },
  { id: "cup-2", name: "The Fit", description: "A healthy pistachio-infused delight with a light, nutritious profile.", price: "12.00 DH", category: "Cupcakes", image: "/pistage.jpeg" },
  { id: "cup-3", name: "The Care", description: "Velvety caramel masterpiece crafted with love and golden caramel swirls.", price: "15.00 DH", category: "Cupcakes", image: "/caramel.jpeg" },
];

export default function Menu() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-brand-gold uppercase tracking-[0.3em] font-bold mb-4 block">The Menu</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Exquisite <span className="italic text-gold-gradient">Creations</span></h1>
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {["All", "Packs", "Cupcakes", "Cakes", "Macarons", "Pastries"].map((cat) => (
                <button key={cat} className="px-8 py-2 rounded-full border border-brand-brown/10 hover:border-brand-gold hover:text-brand-gold transition-all uppercase tracking-widest text-xs font-bold">
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {menuItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
