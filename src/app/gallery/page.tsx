import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const galleryImages = [
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1000",
  "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1000",
  "/2510a7b7cacc476bb7234320f8263ce8.jpg",
  "https://images.unsplash.com/photo-1519340241574-2dec49daa24a?q=80&w=1000",
  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1000",
  "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?q=80&w=1000",
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1000",
  "https://images.unsplash.com/photo-1511081692775-05d0f180a065?q=80&w=1000",
  "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=1000",
];

export default function Gallery() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-brand-gold uppercase tracking-[0.3em] font-bold mb-4 block">Visual Art</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">The <span className="italic text-gold-gradient">Gallery</span></h1>
            <p className="text-brand-brown/60 max-w-2xl mx-auto">
              A feast for the eyes. Explore our collection of handcrafted masterpieces and behind-the-scenes moments from our studio.
            </p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="relative group overflow-hidden rounded-[2rem] shadow-lg">
                <img 
                  src={img} 
                  alt={`Gallery image ${i}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-brown/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-serif italic text-2xl">NuTreat Art</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
