import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const sliderData = [
    {
      title: "Holistic Health Insights",
      category: "Health",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200",
      desc: "Discover the balance of mind, body, and spirit with our latest health guides."
    },
    {
      title: "Functional Fitness Routines",
      category: "Fitness",
      img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=1200",
      desc: "Move better, feel stronger, and live longer with expert fitness tips."
    },
    {
      title: "Custom Diet Plans",
      category: "Diet Plan",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200",
      desc: "Tailored nutrition strategies for your unique metabolic needs."
    },
    {
      title: "Superfood Nutrition",
      category: "Nutrition Food",
      img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&q=80&w=1200",
      desc: "Fuel your body with nature's most powerful and healing ingredients."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderData.length]);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-8 md:px-16 lg:px-24 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-900 font-medium text-sm">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Holistic Nutrition & Ayurveda
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-900 leading-tight">
              Nourish Your Body, <br/>
              <span className="text-primary-600">Balance Your Life.</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Discover personalized nutrition plans and Ayurvedic wellness strategies designed to help you achieve optimal health and vitality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-600 hover:bg-primary-900 text-white px-8 py-4 rounded-full font-medium transition-all text-lg flex items-center justify-center gap-2">
                Book Consultation <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white border-2 border-primary-100 hover:border-primary-600 text-primary-900 px-8 py-4 rounded-full font-medium transition-all text-lg flex items-center justify-center gap-2">
                Shop Products
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary-100 rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800" 
              alt="Healthy vibrant salad bowl" 
              className="rounded-[2rem] shadow-xl object-cover h-[350px] sm:h-[400px] md:h-[500px] w-full"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <div className="bg-accent/20 p-3 rounded-full text-accent">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div>
                <p className="font-bold text-primary-900 text-xl">4.9/5</p>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">Our Wellness Services</h2>
            <p className="text-gray-600 text-lg">Tailored approaches to meet your unique health goals through nutrition and holistic practices.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Basic and Keto Diet Plan",
                desc: "A comprehensive diet strategy focusing on Basic and Keto principles to optimize weight management and overall health.",
                price: "",
                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Custom Diet Plans",
                desc: "A 4-week tailored meal plan designed for your specific metabolic needs, allergies, and lifestyle preferences.",
                price: "",
                img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Ayurvedic Wellness",
                desc: "Discover your Dosha and receive holistic lifestyle, herb, and dietary recommendations for deep balance.",
                price: "",
                img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
              }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-background rounded-3xl overflow-hidden border border-primary-50 hover:shadow-xl transition-shadow group"
              >
                <div className="h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-bold text-primary-900">{service.title}</h3>
                    {service.price && <span className="text-accent font-bold text-xl">{service.price}</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <Link to="/services" className="block text-center w-full py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-900 transition-colors">
                    Book Session
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-primary-900 text-white">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl font-bold mb-4">Apothecary & Shop</h2>
              <p className="text-primary-100 text-lg">Curated health products, organic supplements, and digital guides to support your journey.</p>
            </div>
            <Link to="/shop" className="flex items-center gap-2 text-accent hover:text-white transition-colors font-medium">
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Organic Ceremonial Matcha", img: "https://images.unsplash.com/photo-1582793988951-9aed5509eb97?auto=format&fit=crop&q=80&w=600" },
              { name: "Daily Digestive Enzymes", img: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=600" },
              { name: "Ashwagandha Root Extract", img: "https://images.unsplash.com/photo-1596556408544-6c1b3e8d6261?auto=format&fit=crop&q=80&w=600" },
              { name: "7-Day Gut Reset (E-Book)", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80" }
            ].map((product, idx) => (
              <div key={idx} className="bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors group">
                <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button className="absolute bottom-4 right-4 bg-white text-primary-900 p-3 rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
                <h4 className="font-medium text-lg mb-1">{product.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Slider */}
      <section className="py-12 bg-white">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">Latest Insights</h2>
            <p className="text-gray-600 text-lg">Explore our featured topics across health, fitness, and nutrition.</p>
          </div>
          <div className="relative h-[350px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl group">
            {sliderData.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <span className="inline-block px-3 py-1 bg-accent text-white text-sm font-bold rounded-full w-max mb-4">
                    {slide.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-white mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-gray-200 text-base sm:text-lg max-w-2xl">
                    {slide.desc}
                  </p>
                </div>
              </div>
            ))}
            {/* Slider Controls */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-2">
              {sliderData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-3 rounded-full transition-all ${
                    currentSlide === idx ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white w-3'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-background">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">Wellness Journal</h2>
            <p className="text-gray-600 text-lg">Insights, recipes, and tips for a healthier lifestyle.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "10 Anti-Inflammatory Foods to Add to Your Diet",
                category: "Nutrition",
                date: "Oct 12, 2026",
                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Understanding Gut Health & The Microbiome",
                category: "Science",
                date: "Oct 05, 2026",
                img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Mindful Eating: How to Build a Better Relationship with Food",
                category: "Lifestyle",
                date: "Sep 28, 2026",
                img: "https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&q=80&w=600"
              }
            ].map((post, idx) => (
              <article key={idx} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={post.img} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="text-primary-600 font-medium">{post.category}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-primary-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <a href="#" className="text-accent font-medium hover:text-primary-600 transition-colors flex items-center gap-1">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback / Testimonials */}
      <section id="feedback" className="py-20 bg-primary-50">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
          <h2 className="font-serif text-4xl font-bold text-primary-900 text-center mb-16">Client Success Stories</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: "VitaVeda completely changed how I look at food. The custom diet plan was easy to follow and I've never felt more energized.",
                author: "Sarah Jenkins",
                role: "Consultation Client"
              },
              {
                text: "The Ayurvedic approach finally helped me resolve my digestive issues. Highly recommend the 1-on-1 sessions!",
                author: "Michael Chen",
                role: "Wellness Program"
              },
              {
                text: "I love the organic matcha from their shop. It's become a staple in my morning routine. Great quality and fast shipping.",
                author: "Emma Thompson",
                role: "Shop Customer"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm relative">
                <div className="text-accent mb-4 flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-primary-900">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
