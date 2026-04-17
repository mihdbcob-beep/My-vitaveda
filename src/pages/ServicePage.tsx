import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Apple, Activity, Heart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicePage() {
  const dietPlans = [
    {
      title: "Basic & Keto Diet Plan",
      desc: "A comprehensive diet strategy focusing on Basic and Keto principles to optimize weight management.",
      features: ["Personalized Macro Coaching", "Weekly Check-ins", "Grocery Shopping List", "Recipe Guidebook"],
      icon: <Apple className="w-6 h-6" />
    },
    {
      title: "Custom 4-Week Meal Plan",
      desc: "Tailored meal plan designed for your specific metabolic needs, allergies, and lifestyle preferences.",
      features: ["Allergy Consideration", "Detailed Prep Guide", "Daily Meal Breakdown", "Direct Email Support"],
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Ayurvedic Dosha Plan",
      desc: "Discover your Dosha and receive holistic lifestyle, herb, and dietary recommendations.",
      features: ["Dosha Assessment", "Herbal Supplement Guide", "Mindful Eating Practices", "Yoga Integration"],
      icon: <Heart className="w-6 h-6" />
    }
  ];

  const ebooks = [
    {
      title: "7-Day Gut Reset Guide",
      desc: "Restore your digestive health naturally with this step-by-step, week-long Ayurvedic program.",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "The Holistic Nutrition Playbook",
      desc: "Master the basics of holistic health, understanding macronutrients, and mindful eating habits.",
      img: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Ayurvedic Herbs Handbook",
      desc: "A comprehensive catalog of ancient herbs, their benefits, and how to incorporate them daily.",
      img: "https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="w-full pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-primary-50 py-20 px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-900 mb-6"
          >
            Our Wellness <span className="text-primary-600">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed"
          >
            Explore our tailored diet plans, holistic 1-on-1 consultations, and comprehensive health e-books designed to restore balance and vitality.
          </motion.p>
        </div>
      </section>

      {/* Diet Plans Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-white">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">Personalized Diet Plans</h2>
          <p className="text-gray-600 text-lg">Sustainable, expert-designed protocols designed unique to your body format.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {dietPlans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-background rounded-3xl p-8 border border-primary-50 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 mb-6">
                {plan.icon}
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary-900 mb-3">{plan.title}</h3>
              <p className="text-gray-600 mb-6 min-h-[80px]">{plan.desc}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/contact" className="block text-center w-full py-3 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-900 transition-colors">
                Book Consultation
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Health Tips E-Books Section */}
      <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24 bg-background">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">Health Tips & E-Books</h2>
          <p className="text-gray-600 text-lg">Downloadable guides to kickstart your wellness journey from home.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ebooks.map((ebook, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={ebook.img} alt={ebook.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur pb-1 px-3 py-1.5 flex items-center gap-2 rounded-full shadow-sm text-sm font-bold text-primary-600">
                  <BookOpen className="w-4 h-4" /> E-Book
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-2xl font-bold text-primary-900 mb-3">{ebook.title}</h3>
                <p className="text-gray-600 mb-6">{ebook.desc}</p>
                <Link to="/shop" className="text-accent font-medium hover:text-primary-600 transition-colors flex items-center gap-2">
                  View in Shop <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
