import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function About() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <span className="text-brand-gold uppercase tracking-[0.3em] font-bold mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">Elevating the Art of <span className="italic text-gold-gradient">Sweetness</span></h1>
            <p className="text-xl text-brand-brown/70 leading-relaxed">
              Founded in 2010, NuTreat began with a simple vision: to bring the sophisticated elegance of Parisian patisseries to the heart of the city.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1000&auto=format&fit=crop" 
                alt="Chef at work" 
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">The NuTreat Mission</h2>
              <p className="text-brand-brown/70 mb-6 leading-relaxed">
                We believe that dessert is more than just a treat—it's a celebration of life's most precious moments. Our mission is to create edible art that inspires joy and creates lasting memories.
              </p>
              <p className="text-brand-brown/70 mb-8 leading-relaxed">
                Every recipe is meticulously tested, and every ingredient is hand-selected. We don't just bake; we compose flavors that resonate with the soul.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold">1</div>
                  <p className="font-medium">Uncompromising Quality</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold">2</div>
                  <p className="font-medium">Artistic Innovation</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center text-brand-gold font-bold">3</div>
                  <p className="font-medium">Sustainable Sourcing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
