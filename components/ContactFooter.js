'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, Clock, ArrowRight } from 'lucide-react';

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'website',
    budget: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hi PixelorCode! 

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Project Type: ${formData.projectType}
Budget: ${formData.budget}
Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/917404511743?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-slate-950 text-white">
      
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <p className="text-emerald-400 font-semibold mb-3 uppercase tracking-wider text-sm">Get In Touch</p>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Let's Build Something <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Amazing</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Have a project in mind? Fill out the form below or reach out directly via WhatsApp, email, or phone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            
            <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="website">Website Design & Development</option>
                    <option value="saas">SaaS / Web App</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="uiux">UI/UX Design</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="15k-25k">₹15,000 - ₹25,000</option>
                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                    <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                    <option value="1L+">₹1,00,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Project Details *</label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-slate-800 border-2 border-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
                >
                  Send via WhatsApp
                  <Send className="w-5 h-5" />
                </button>

                <p className="text-sm text-slate-500 text-center">
                  We'll respond within 24 hours
                </p>
              </form>
            </div>

            <div className="space-y-8">
              
              <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Call Us</h4>
                    <a href="tel:+919416444778" className="text-emerald-400 hover:text-emerald-300 text-lg">
                      +91 94164 44778
                    </a>
                    <p className="text-slate-400 text-sm mt-1">Mon-Sat, 10 AM - 7 PM IST</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">WhatsApp</h4>
                    <a href="https://wa.me/917404511743" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 text-lg">
                      +91 74045 11743
                    </a>
                    <p className="text-slate-400 text-sm mt-1">Quick responses, anytime</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Email</h4>
                    <a href="mailto:pixelorcode@gmail.com" className="text-emerald-400 hover:text-emerald-300 text-lg break-all">
                      pixelorcode@gmail.com
                    </a>
                    <p className="text-slate-400 text-sm mt-1">Response within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Location</h4>
                    <p className="text-slate-300 text-lg">Karnal, Haryana</p>
                    <p className="text-slate-400 text-sm mt-1">Serving clients worldwide</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-2">Business Hours</h4>
                    <p className="text-slate-300">Monday - Saturday</p>
                    <p className="text-emerald-400 font-semibold">10:00 AM - 7:00 PM IST</p>
                    <p className="text-slate-400 text-sm mt-2">Sunday - Closed</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold mb-3">PixelorCode</h3>
              <p className="text-slate-400 text-sm mb-4">
                Crafting fast, scalable, and beautiful websites that drive business growth.
              </p>
              <div className="flex items-center gap-3">
                <a href="https://www.instagram.com/pixel.orcode/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/company/pixelorcode/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://x.com/pixelorcode" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 hover:bg-emerald-500 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Website Development</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">SaaS & Web Apps</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">UI/UX Design</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">E-commerce</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Maintenance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#about" className="hover:text-emerald-400 transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-emerald-400 transition-colors">Portfolio</a></li>
                <li><a href="#process" className="hover:text-emerald-400 transition-colors">Our Process</a></li>
                <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Stay Updated</h4>
              <p className="text-slate-400 text-sm mb-4">
                Get web tips, project updates, and special offers.
              </p>
              <a 
                href="https://wa.me/917404511743?text=Hi!%20I'd%20like%20to%20subscribe%20to%20updates."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition-colors"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2024 PixelorCode. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}