import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";

const menuItems = [
  { id: 1, name: "Signature Macarons", description: "Box of 12 artisan macarons with seasonal flavors.", price: "$32.00", category: "Macarons", image: "/1.webp" },
  { id: 2, name: "Gold Leaf Opera Cake", description: "Classic French cake with coffee and chocolate layers.", price: "$45.00", category: "Cakes", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000" },
  { id: 3, name: "Berry Chantilly Tart", description: "Crisp pastry shell with vanilla cream and fresh berries.", price: "$12.00", category: "Pastries", image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=1000" },
  { id: 4, name: "Dark Chocolate Truffles", description: "Hand-rolled ganache coated in 70% cocoa powder.", price: "$28.00", category: "Chocolates", image: "/22.jpeg" },
  { id: 5, name: "Lavender Honey Croissant", description: "Flaky artisan croissant with local honey infusion.", price: "$6.50", category: "Pastries", image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1000" },
  { id: 6, name: "Custom Wedding Cake", description: "Bespoke tiered design tailored to your celebration.", price: "From $350", category: "Cakes", image: "/3.webp" },
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
              {["All", "Cakes", "Macarons", "Pastries", "Chocolates"].map((cat) => (
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
