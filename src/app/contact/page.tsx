import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Mail, MapPin, Phone, MessageCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Visual Header */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/menu.jpeg" 
            alt="Contact Header" 
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-gold uppercase tracking-[0.4em] font-bold mb-6 block">Get In Touch</span>
          <h1 className="text-4xl md:text-8xl font-serif font-bold text-brand-cream mb-4">Contact <span className="italic">Us</span></h1>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>
      </section>

      <section className="py-24 bg-brand-cream -mt-20 relative z-20 rounded-t-[4rem]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Contact Info Column */}
            <div className="space-y-12">
              <div>
                <h2 className="text-4xl font-serif font-bold mb-6 text-brand-brown">We'd Love to <span className="italic">Hear From You</span></h2>
                <p className="text-brand-brown/70 text-lg leading-relaxed max-w-lg">
                  Whether you're planning a grand wedding, a corporate event, or simply want to satisfy a sweet craving, our artisans are ready to assist you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-brand-gold/10 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all">
                    <MapPin size={28} />
                  </div>
                  <h4 className="font-serif text-xl font-bold mb-2">Our Studio</h4>
                  <p className="text-brand-brown/60 text-sm leading-relaxed">123 Luxury Avenue,<br />Beverly Hills, CA 90210</p>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-brand-gold/10 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all">
                    <Phone size={28} />
                  </div>
                  <h4 className="font-serif text-xl font-bold mb-2">Phone</h4>
                  <p className="text-brand-brown/60 text-sm">+212 696-818401</p>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-brand-gold/10 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all">
                    <Mail size={28} />
                  </div>
                  <h4 className="font-serif text-xl font-bold mb-2">Email</h4>
                  <p className="text-brand-brown/60 text-sm break-all">nutreat.healthy@gmail.com</p>
                </div>

                <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-brand-gold/10 hover:shadow-xl transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-brand-cream flex items-center justify-center text-brand-gold mb-6 group-hover:bg-brand-gold group-hover:text-white transition-all">
                    <Clock size={28} />
                  </div>
                  <h4 className="font-serif text-xl font-bold mb-2">Hours</h4>
                  <p className="text-brand-brown/60 text-sm">Mon-Sat: 09:00 - 20:00<br />Sun: 10:00 - 18:00</p>
                </div>
              </div>

              <div className="pt-8">
                <a 
                  href="https://wa.me/212696818401" 
                  className="inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-5 rounded-full font-bold shadow-xl hover:shadow-green-500/30 transition-all hover:scale-105"
                >
                  <MessageCircle size={24} fill="white" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-gold/5 rounded-[4rem] blur-2xl"></div>
              <div className="relative bg-white p-6 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-brand-gold/10">
                <h3 className="text-3xl font-serif font-bold mb-8 text-brand-brown">Send us a <span className="italic">Message</span></h3>
                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-brown/40 ml-4">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Jane Doe" 
                      className="w-full bg-brand-cream/30 border border-brand-brown/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold focus:bg-white transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-brown/40 ml-4">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="jane@example.com" 
                      className="w-full bg-brand-cream/30 border border-brand-brown/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold focus:bg-white transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-brown/40 ml-4">Order Type</label>
                    <select className="w-full bg-brand-cream/30 border border-brand-brown/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold focus:bg-white transition-all outline-none appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Wedding Cake Consultation</option>
                      <option>Custom Dessert Order</option>
                      <option>Bulk/Event Order</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-brand-brown/40 ml-4">Message</label>
                    <textarea 
                      rows={5} 
                      placeholder="How can we make your day sweeter?" 
                      className="w-full bg-brand-cream/30 border border-brand-brown/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-gold focus:bg-white transition-all outline-none resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-brand-brown text-brand-cream py-5 rounded-2xl font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-brown transition-all shadow-xl hover:shadow-brand-gold/20">
                    Send Masterpiece
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-118.4003563!3d34.0736204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c37e6b461da3!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
          className="w-full h-full border-0 grayscale contrast-[1.2] opacity-80" 
          allowFullScreen 
          loading="lazy"
        ></iframe>
        <div className="absolute top-10 left-10 z-10 hidden md:block">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-brand-gold/20 shadow-2xl max-w-xs">
            <h4 className="font-serif text-xl font-bold mb-2">Boutique Location</h4>
            <p className="text-brand-brown/70 text-sm mb-4">Come visit our artisan studio for a personal tasting experience.</p>
            <div className="flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest">
              <MapPin size={16} />
              Open for Visits
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

