import React from 'react';
import { Leaf, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-primary-50 pt-16 pb-8">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex flex-col mb-6">
              <Link to="/" className="flex items-center gap-2">
                <Leaf className="h-8 w-8 text-accent" />
                <span className="font-serif text-2xl font-bold text-white leading-none">VitaVeda Wellness</span>
              </Link>
              <span className="text-accent text-xs font-medium tracking-widest uppercase mt-2 ml-10">Nutrition, Naturally</span>
            </div>
            <p className="text-primary-100 mb-6">
              Empowering your health journey through holistic nutrition, Ayurveda, and mindful living.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-primary-100 hover:text-white"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-primary-100 hover:text-white"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-primary-100 hover:text-white"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-100 hover:text-white transition-colors">Home</Link></li>
              <li><a href="/#services" className="text-primary-100 hover:text-white transition-colors">Services</a></li>
              <li><a href="/#shop" className="text-primary-100 hover:text-white transition-colors">Shop</a></li>
              <li><a href="/#blog" className="text-primary-100 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-100">123 Wellness Ave, Suite 100<br/>San Francisco, CA 94105</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-100">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span className="text-primary-100">hello@vitaveda.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Newsletter</h4>
            <p className="text-primary-100 mb-4">Subscribe for weekly health tips and exclusive shop discounts.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder:text-primary-100/50 focus:outline-none focus:border-accent"
              />
              <button className="bg-accent hover:bg-accent/90 text-primary-900 font-bold rounded-lg px-4 py-3 transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-primary-100 text-sm">
          <p>&copy; {new Date().getFullYear()} VitaVeda Wellness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
