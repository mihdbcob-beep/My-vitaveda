import React, { useEffect } from 'react';
import { ShoppingBag, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ShopPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const products = [
    { name: "Organic Ceremonial Matcha", category: "Superfoods", img: "https://images.unsplash.com/photo-1564277287253-934c868e54ec?auto=format&fit=crop&q=80&w=600" },
    { name: "Daily Digestive Enzymes", category: "Supplements", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600" },
    { name: "Ashwagandha Root Extract", category: "Herbal Remedies", img: "https://images.unsplash.com/photo-1611078513568-76c5b966601b?auto=format&fit=crop&q=80&w=600" },
    { name: "7-Day Gut Reset (E-Book)", category: "Digital Guides", img: "https://images.unsplash.com/photo-1589820924040-6202456e3001?auto=format&fit=crop&q=80&w=600" },
    { name: "Ayurvedic Hair Oil Blend", category: "Body Care", img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80&w=600" },
    { name: "Calming Chamomile & Lavender Tea", category: "Teas", img: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?auto=format&fit=crop&q=80&w=600" },
    { name: "Turmeric & Ginger Immunity Shots", category: "Superfoods", img: "https://images.unsplash.com/photo-1646400684273-010a3000b98c?auto=format&fit=crop&q=80&w=600" },
    { name: "Triphala Digestive Support", category: "Herbal Remedies", img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Shop Hero Section */}
      <section className="bg-primary-900 py-16 md:py-24 text-white">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Apothecary & Shop</h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto">
              Curated health products, organic supplements, and digital guides to support your holistic wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Shop Grid Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            
            {/* Filters / Sorting Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-12 pb-6 border-b border-gray-100 gap-4">
              <p className="text-gray-500 font-medium">Showing all {products.length} products</p>
              <button className="flex items-center gap-2 text-primary-900 font-medium hover:text-primary-600 transition-colors px-4 py-2 rounded-lg border border-gray-200">
                <Filter className="w-4 h-4" /> Filter Products
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, idx) => (
                <div key={idx} className="group flex flex-col">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden mb-4 relative bg-gray-50">
                    <img 
                      src={product.img} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button className="bg-white text-primary-900 px-6 py-3 rounded-full font-bold shadow-xl hover:bg-primary-600 hover:text-white transition-colors transform translate-y-4 group-hover:translate-y-0 duration-300 flex items-center gap-2">
                        <ShoppingBag className="w-4 h-4" /> View Details
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col flex-grow">
                    <span className="text-sm text-primary-600 font-medium mb-1">{product.category}</span>
                    <h3 className="font-serif text-xl font-bold text-primary-900 leading-tight mb-2 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-20 text-center bg-primary-50 rounded-3xl p-12 border border-primary-100">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-900 mb-4">Need help choosing?</h3>
              <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                Not sure which products are right for your dosha or current health goals? Book a consultation with us for personalized recommendations.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-900 text-white font-bold px-8 py-4 rounded-full transition-colors">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
