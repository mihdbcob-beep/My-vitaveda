import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Leaf, ShoppingBag, Calendar, Star, Menu, X, ArrowRight, 
  CheckCircle, Phone, Mail, MapPin, Instagram, Facebook, Twitter, ChevronDown
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { 
      name: 'Services', 
      href: '#services',
      dropdown: [
        { name: '1-on-1 Consultation', href: '#services' },
        { name: 'Custom Diet Plans', href: '#services' },
        { name: 'Ayurvedic Wellness', href: '#services' }
      ]
    },
    { 
      name: 'Shop', 
      href: '#shop',
      dropdown: [
        { name: 'Supplements', href: '#shop' },
        { name: 'E-Books', href: '#shop' },
        { name: 'Apothecary', href: '#shop' }
      ]
    },
    { 
      name: 'Blog', 
      href: '#blog',
      dropdown: [
        { name: 'Nutrition', href: '#blog' },
        { name: 'Fitness', href: '#blog' },
        { name: 'Lifestyle', href: '#blog' }
      ]
    },
    { name: 'Contact', href: '#contact' },
    { name: 'Feedback', href: '#feedback' },
  ];

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
      img: "https://images.unsplash.com/photo-1498837167922-41c46b66c068?auto=format&fit=crop&q=80&w=1200",
      desc: "Fuel your body with nature's most powerful and healing ingredients."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary-600" />
              <span className="font-serif text-2xl font-bold text-primary-900">VitaVeda</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-primary-600 font-medium transition-colors flex items-center gap-1 py-2"
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {link.dropdown && (
                    <div className="absolute top-full left-0 mt-0 w-48 bg-white rounded-xl shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                      <div className="py-2">
                        {link.dropdown.map(item => (
                          <a key={item.name} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600">
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
                <button className="bg-primary-600 hover:bg-primary-900 text-white px-5 py-2.5 rounded-full font-medium transition-all flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4" />
                  Book Now
                </button>
                <button className="bg-white border-2 border-primary-600 text-primary-600 hover:bg-primary-50 px-5 py-2.5 rounded-full font-medium transition-all text-sm">
                  Sign Up
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-600 hover:text-primary-900">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    onClick={!link.dropdown ? toggleMenu : undefined}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md flex justify-between items-center"
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </a>
                  {link.dropdown && (
                    <div className="pl-4 pb-2 space-y-1">
                      {link.dropdown.map(item => (
                        <a
                          key={item.name}
                          href={item.href}
                          onClick={toggleMenu}
                          className="block px-3 py-2 text-sm font-medium text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-md"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="px-3 py-4 space-y-3 border-t border-gray-100 mt-2">
                <button className="w-full bg-primary-600 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Consultation
                </button>
                <button className="w-full bg-white border-2 border-primary-600 text-primary-600 px-6 py-3 rounded-full font-medium flex items-center justify-center">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-serif text-4xl font-bold text-primary-900 mb-4">Our Wellness Services</h2>
            <p className="text-gray-600 text-lg">Tailored approaches to meet your unique health goals through nutrition and holistic practices.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "1-on-1 Consultation",
                desc: "Personalized 60-minute session to assess your health history, goals, and create an actionable wellness roadmap.",
                price: "$120",
                img: "https://images.unsplash.com/photo-1551076805-e18690c5e561?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Custom Diet Plans",
                desc: "A 4-week tailored meal plan designed for your specific metabolic needs, allergies, and lifestyle preferences.",
                price: "$199",
                img: "https://images.unsplash.com/photo-1498837167922-41c46b66c068?auto=format&fit=crop&q=80&w=600"
              },
              {
                title: "Ayurvedic Wellness",
                desc: "Discover your Dosha and receive holistic lifestyle, herb, and dietary recommendations for deep balance.",
                price: "$150",
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
                    <span className="text-accent font-bold text-xl">{service.price}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{service.desc}</p>
                  <button className="w-full py-3 rounded-xl border-2 border-primary-600 text-primary-600 font-medium hover:bg-primary-600 hover:text-white transition-colors">
                    Book Session
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop Section */}
      <section id="shop" className="py-20 bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl font-bold mb-4">Apothecary & Shop</h2>
              <p className="text-primary-100 text-lg">Curated health products, organic supplements, and digital guides to support your journey.</p>
            </div>
            <button className="flex items-center gap-2 text-accent hover:text-white transition-colors font-medium">
              View All Products <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Organic Ceremonial Matcha", price: "$35.00", img: "https://images.unsplash.com/photo-1564277287253-934c868e54ec?auto=format&fit=crop&q=80&w=400" },
              { name: "Daily Digestive Enzymes", price: "$28.00", img: "https://images.unsplash.com/photo-1646400684273-010a3000b98c?auto=format&fit=crop&q=80&w=400" },
              { name: "Ashwagandha Root Extract", price: "$24.00", img: "https://images.unsplash.com/photo-1611078513568-76c5b966601b?auto=format&fit=crop&q=80&w=400" },
              { name: "7-Day Gut Reset (E-Book)", price: "$15.00", img: "https://images.unsplash.com/photo-1589820924040-6202456e3001?auto=format&fit=crop&q=80&w=400" }
            ].map((product, idx) => (
              <div key={idx} className="bg-white/5 rounded-2xl p-4 hover:bg-white/10 transition-colors group">
                <div className="aspect-square rounded-xl overflow-hidden mb-4 relative">
                  <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <button className="absolute bottom-4 right-4 bg-white text-primary-900 p-3 rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
                <h4 className="font-medium text-lg mb-1">{product.name}</h4>
                <p className="text-accent font-medium">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Slider */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Footer */}
      <footer id="contact" className="bg-primary-900 text-primary-50 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 sm:col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Leaf className="h-8 w-8 text-accent" />
                <span className="font-serif text-2xl font-bold text-white">VitaVeda</span>
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
                <li><a href="#home" className="text-primary-100 hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="text-primary-100 hover:text-white transition-colors">Services</a></li>
                <li><a href="#shop" className="text-primary-100 hover:text-white transition-colors">Shop</a></li>
                <li><a href="#blog" className="text-primary-100 hover:text-white transition-colors">Blog</a></li>
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
    </div>
  );
}
