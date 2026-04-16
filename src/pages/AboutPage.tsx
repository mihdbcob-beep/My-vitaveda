import React, { useEffect } from 'react';
import { Leaf, Award, Heart, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Image Section */}
      <section className="relative h-[40vh] md:h-[50vh] w-full">
        <img 
          src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=2000" 
          alt="Ayurvedic herbs and wellness" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary-900/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-4">About VitaVeda Wellness</h1>
            <p className="text-lg md:text-xl text-primary-50 max-w-2xl mx-auto font-medium">
              Nourishing bodies and balancing lives through the ancient wisdom of Ayurveda and modern nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Mission Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-900 font-medium text-sm mb-2">
                <Leaf className="w-4 h-4 text-accent" />
                Our Story
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 leading-tight">
                A Decade of Dedication to Holistic Health
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Welcome to VitaVeda Wellness. For over <strong>10 years</strong>, we have been deeply immersed in the wellness field, guiding individuals toward optimal health, vitality, and inner balance. Our foundation is built on a profound passion for natural healing and a commitment to sustainable lifestyle changes.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Proudly certified in <strong>Ayurvedic Nutrition and Diet from the prestigious Arogyam Institute</strong>, our approach bridges the gap between ancient Ayurvedic wisdom and modern nutritional science. We don't believe in quick fixes; instead, we focus on identifying the root cause of imbalances and creating personalized, holistic roadmaps for our clients.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                <strong>Our Mission:</strong> To empower you to take control of your health journey. We strive to make holistic nutrition accessible, practical, and deeply transformative, helping you nourish your body naturally and live a life full of vibrant energy.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary-100 rounded-[2rem] transform -rotate-3 scale-105 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Wellness consultation" 
                className="rounded-[2rem] shadow-xl object-cover h-[400px] md:h-[600px] w-full"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 max-w-[250px]">
                <div className="bg-primary-50 p-4 rounded-full text-primary-600 shrink-0">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-primary-900 text-lg leading-tight">10+ Years</p>
                  <p className="text-sm text-gray-500">Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-primary-50">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Core Values</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">The principles that guide our practice and our commitment to your well-being.</p>
            </div>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-3">Certified Expertise</h3>
                <p className="text-gray-600">Backed by rigorous certification from the Arogyam Institute, ensuring safe, authentic, and effective Ayurvedic guidance.</p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
                  <Leaf className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-3">Natural Healing</h3>
                <p className="text-gray-600">We prioritize whole foods, herbal remedies, and natural lifestyle adjustments over synthetic or temporary solutions.</p>
              </div>
              
              <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow sm:col-span-2 md:col-span-1">
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600">
                  <Heart className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary-900 mb-3">Personalized Care</h3>
                <p className="text-gray-600">Recognizing that every body is unique, we tailor our diet plans and consultations to your specific metabolic needs and dosha.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
