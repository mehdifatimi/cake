import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-brand-cream pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <Link href="/" className="inline-block mb-6">
            <Image 
              src="/logo.png" 
              alt="NuTreat Logo" 
              width={220} 
              height={80} 
              className="h-16 md:h-20 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-brand-cream/70 leading-relaxed mb-6">
            Crafting luxury desserts and premium pastries with passion and elegance since 2010. Experience the true taste of French artistry.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown transition-all">
              <InstagramIcon size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown transition-all">
              <FacebookIcon size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center hover:bg-brand-gold hover:text-brand-brown transition-all">
              <TwitterIcon size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6 text-brand-gold">Quick Links</h4>
          <ul className="space-y-4 text-brand-cream/70">
            <li><Link href="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
            <li><Link href="/about" className="hover:text-brand-gold transition-colors">Our Story</Link></li>
            <li><Link href="/menu" className="hover:text-brand-gold transition-colors">Menu</Link></li>
            <li><Link href="/gallery" className="hover:text-brand-gold transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6 text-brand-gold">Our Menu</h4>
          <ul className="space-y-4 text-brand-cream/70">
            <li><Link href="/menu" className="hover:text-brand-gold transition-colors">Custom Cakes</Link></li>
            <li><Link href="/menu" className="hover:text-brand-gold transition-colors">French Macarons</Link></li>
            <li><Link href="/menu" className="hover:text-brand-gold transition-colors">Gourmet Tarts</Link></li>
            <li><Link href="/menu" className="hover:text-brand-gold transition-colors">Artisan Bread</Link></li>
            <li><Link href="/menu" className="hover:text-brand-gold transition-colors">Wedding Packages</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-xl font-bold mb-6 text-brand-gold">Contact Us</h4>
          <ul className="space-y-4 text-brand-cream/70">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-gold shrink-0" />
              <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-brand-gold shrink-0" />
              <span>0645060607</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-brand-gold shrink-0" />
              <span>nutreat.healthy@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-brand-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-cream/50">
        <p>© 2026 NuTreat Luxury Patisserie. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
