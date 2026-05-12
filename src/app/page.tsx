import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import Packs from "@/components/sections/Packs";
import InstagramGallery from "@/components/sections/InstagramGallery";
import Testimonials from "@/components/sections/Testimonials";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Packs />
      
      {/* Brand Highlight Section */}
      <section className="py-24 bg-brand-brown text-brand-cream overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video rounded-[2rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop" 
                alt="Baking process" 
                className="object-cover w-full h-full opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-brown to-transparent opacity-60" />
            </div>
            <div>
              <span className="text-brand-gold uppercase tracking-[0.3em] font-bold mb-4 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                Crafted with <span className="italic text-brand-gold">Precision</span> & Love
              </h2>
              <p className="text-brand-cream/70 text-lg leading-relaxed mb-8">
                At NuTreat, we believe that every dessert should be a masterpiece. We source only the finest ingredients—from Madagascar vanilla beans to premium Belgian chocolate—to ensure that every bite is an experience worth remembering.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-serif text-3xl font-bold text-brand-gold mb-2">100%</h4>
                  <p className="text-sm uppercase tracking-widest opacity-60 font-medium">Natural Ingredients</p>
                </div>
                <div>
                  <h4 className="font-serif text-3xl font-bold text-brand-gold mb-2">24h</h4>
                  <p className="text-sm uppercase tracking-widest opacity-60 font-medium">Freshly Baked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <InstagramGallery />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
