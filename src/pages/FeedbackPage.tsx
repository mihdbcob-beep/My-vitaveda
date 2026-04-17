import React from 'react';
import { motion } from 'motion/react';
import { Star, MessageCircleHeart } from 'lucide-react';

export default function FeedbackPage() {
  const feedbacks = [
    {
      name: "Priya Sharma",
      location: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
      program: "Custom Diet Plan",
      story: "The nutrition plan completely transformed my energy levels. Adapting the diet to include my regular Indian meals but with healthier alternatives made a massive difference.",
    },
    {
      name: "Rahul Verma",
      location: "Bengaluru, Karnataka",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      program: "Ayurvedic Wellness",
      story: "Understanding my Dosha was a game-changer. The recommendations helped me tackle long-standing digestive issues, and the natural approach fits perfectly with my lifestyle.",
    },
    {
      name: "Anjali Gupta",
      location: "New Delhi, Delhi",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      program: "Basic & Keto Diet Plan",
      story: "I struggled with weight management for years. The structured plan provided exactly what I needed, blending modern keto principles with traditional foods I love.",
    },
    {
      name: "Vikram Singh",
      location: "Pune, Maharashtra",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      program: "7-Day Gut Reset",
      story: "The gut reset e-book gave me clear, actionable steps. Within a week, my bloating was gone, and I felt much lighter and more positive every day.",
    },
    {
      name: "Sneha Patel",
      location: "Ahmedabad, Gujarat",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
      program: "1-on-1 Consultation",
      story: "The personal attention and care were incredible. Having someone guide me through the nuances of holistic eating helped me build sustainable, healthy habits.",
    },
    {
      name: "Karan Desai",
      location: "Hyderabad, Telangana",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      program: "Wellness Supplements",
      story: "The ashwagandha root extract and digestive enzymes from the shop are top quality. I've noticed a significant improvement in my sleep and daily focus.",
    }
  ];

  return (
    <div className="w-full pt-28 pb-16 min-h-screen bg-primary-50">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center justify-center p-3 bg-white rounded-full text-accent shadow-sm mb-6"
          >
            <MessageCircleHeart className="w-8 h-8" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-bold text-primary-900 mb-6"
          >
            Client Success Stories
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 leading-relaxed"
          >
            Hear from individuals across India who have transformed their health, embraced balanced nutrition, and discovered inner vitality with our guided programs.
          </motion.p>
        </div>

        {/* Feedback Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((feedback, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col h-full"
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={feedback.image} 
                  alt={feedback.name} 
                  className="w-16 h-16 rounded-full object-cover shadow-sm bg-gray-100"
                />
                <div>
                  <h3 className="font-bold text-lg text-primary-900">{feedback.name}</h3>
                  <p className="text-sm text-gray-500">{feedback.location}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 mb-4 text-accent">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>

              <p className="text-gray-700 italic flex-grow leading-relaxed">
                "{feedback.story}"
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <span className="inline-block px-3 py-1 bg-primary-50 text-primary-700 text-sm font-medium rounded-full">
                  {feedback.program}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
