import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <main className="min-h-screen pt-32">
      <Navbar />
      <section className="py-24 bg-brand-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <div>
              <span className="text-brand-gold uppercase tracking-[0.3em] font-bold mb-4 block">Get In Touch</span>
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-8">Contact <span className="italic text-gold-gradient">Us</span></h1>
              <p className="text-brand-brown/70 text-lg mb-12 leading-relaxed">
                Whether you're planning a grand wedding or looking for a small custom treat, we're here to help you make it sweet.
              </p>

              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/10">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-1">Our Studio</h4>
                    <p className="text-brand-brown/60">123 Luxury Avenue, Beverly Hills, CA 90210</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/10">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-1">Phone</h4>
                    <p className="text-brand-brown/60">0645060607</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-gold shrink-0 border border-brand-gold/10">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold mb-1">Email</h4>
                    <p className="text-brand-brown/60">nutreat.healthy@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <a 
                  href="https://wa.me/212645060607" 
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-green-500/20 transition-all"
                >
                  <MessageCircle size={24} fill="white" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-brand-gold/5">
              <h2 className="text-3xl font-serif font-bold mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-brown/40 ml-4">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full bg-brand-cream/50 border border-brand-brown/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-brown/40 ml-4">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com" 
                      className="w-full bg-brand-cream/50 border border-brand-brown/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-brown/40 ml-4">Subject</label>
                  <select className="w-full bg-brand-cream/50 border border-brand-brown/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors">
                    <option>General Inquiry</option>
                    <option>Wedding Cake Consultation</option>
                    <option>Custom Dessert Order</option>
                    <option>Feedback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-brand-brown/40 ml-4">Message</label>
                  <textarea 
                    rows={5} 
                    placeholder="Tell us about your sweet dreams..." 
                    className="w-full bg-brand-cream/50 border border-brand-brown/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold transition-colors resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-brand-brown text-brand-cream py-5 rounded-2xl font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-brown transition-all shadow-xl">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-brand-beige relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="text-center">
             <MapPin size={48} className="text-brand-gold mx-auto mb-4" />
             <p className="font-serif italic text-2xl">Visit our boutique in Beverly Hills</p>
           </div>
        </div>
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop" 
            alt="Map texture" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
