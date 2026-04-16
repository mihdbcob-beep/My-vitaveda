import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="py-12 md:py-20">
        <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary-900 mb-4">Get in Touch</h1>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Have questions or ready to start your wellness journey? We'd love to hear from you. Fill out the form below and we'll be in touch shortly.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              {/* Contact Info */}
              <div className="p-8 md:p-12 bg-primary-900 text-white flex flex-col justify-center">
                <h3 className="font-serif text-3xl font-bold mb-6">Contact Information</h3>
                <p className="text-primary-100 mb-8 text-lg">Fill out the form and our team will get back to you within 24 hours.</p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">Location</h4>
                      <p className="text-primary-100">123 Wellness Ave, Suite 100<br/>San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">WhatsApp / Phone</h4>
                      <p className="text-primary-100">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg">Email</h4>
                      <p className="text-primary-100">hello@vitaveda.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 md:p-12 bg-primary-50">
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true" 
                  netlify-honeypot="bot-field"
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
                  </p>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-1">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white" placeholder="John Doe" />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="whatsapp" className="block text-sm font-medium text-primary-900 mb-1">WhatsApp Number</label>
                      <input type="tel" id="whatsapp" name="whatsapp" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white" placeholder="+1 (555) 000-0000" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-1">Email ID</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all bg-white" placeholder="john@example.com" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-primary-900 mb-1">Address</label>
                    <textarea id="address" name="address" rows={2} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none bg-white" placeholder="Your full address..."></textarea>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-900 mb-1">Message</label>
                    <textarea id="message" name="message" rows={4} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none bg-white" placeholder="How can we help you?"></textarea>
                  </div>

                  <button type="submit" className="w-full bg-primary-600 hover:bg-primary-900 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md">
                    Send Message <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
