'use client';

import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Managing Director",
    company: "Perpetual Power Services",
    image: null,
    rating: 4.5,
    text: "PixelorCode delivered a clean, professional website that perfectly showcases our 34+ years in renewable energy. The team understood our industry needs and created exactly what we envisioned. Highly professional work!",
    project: "Corporate Website",
    result: "40% increase in inquiries"
  },
  {
    name: "Amit Sharma",
    role: "CEO",
    company: "Rudra Infocom",
    image: null,
    rating: 4,
    text: "Modern, clear website that highlights our telecom services perfectly. Great attention to detail and user experience. The navigation is intuitive and our clients love the professional look. Delivered on time and within budget.",
    project: "Service Platform",
    result: "Enhanced brand credibility"
  },
  {
    name: "Priya Mehta",
    role: "Founder",
    company: "Ruvira Atelier",
    image: null,
    rating: 5,
    text: "Elegant, premium experience that reflects our luxury jewelry brand perfectly. The design is simply stunning and captures the essence of our heritage craftsmanship. Our online inquiries have doubled since launch!",
    project: "E-commerce Website",
    result: "2x increase in online inquiries"
  },
  {
    name: "Vikram Singh",
    role: "Operations Head",
    company: "Meena Play World",
    image: null,
    rating: 4.5,
    text: "Bright, safe, and easy to explore our equipment catalog. Parents love the intuitive navigation and clear product information. The team was responsive and made changes quickly based on our feedback.",
    project: "Product Catalog",
    result: "30% more product inquiries"
  },
  {
    name: "Neha Gupta",
    role: "Restaurant Owner",
    company: "Tomato Food Ordering",
    image: null,
    rating: 3.5,
    text: "Our online ordering has never been smoother! The website is beautiful, fast, and customers find it very easy to place orders. PixelorCode understood exactly what we needed for our food business.",
    project: "Web Application",
    result: "Streamlined ordering process"
  },
  {
    name: "Arjun Patel",
    role: "Startup Founder",
    company: "CarRental Platform",
    image: null,
    rating: 4.5,
    text: "From idea to launch in just 3 weeks! The booking system works flawlessly and the admin dashboard makes management so easy. Best investment for our startup. Highly recommend PixelorCode!",
    project: "SaaS Platform",
    result: "Complete booking system in 3 weeks"
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold mb-3 uppercase tracking-wider text-sm">Testimonials</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What Our <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what business owners and founders say about working with PixelorCode.
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-8 lg:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-slate-950" />
            </div>

            {/* Stars */}
            <div className="flex items-center gap-1 mb-6 mt-4">
              {[...Array(Math.floor(currentTestimonial.rating))].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
              ))}
              {currentTestimonial.rating % 1 !== 0 && (
                <div className="relative w-5 h-5">
                  <Star className="w-5 h-5 fill-emerald-400 text-emerald-400 absolute" style={{clipPath: 'inset(0 50% 0 0)'}} />
                  <Star className="w-5 h-5 fill-slate-700 text-slate-700 absolute" style={{clipPath: 'inset(0 0 0 50%)'}} />
                </div>
              )}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed mb-8">
              "{currentTestimonial.text}"
            </p>

            {/* Result Badge */}
            <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2 mb-8">
              <span className="text-emerald-400 font-semibold text-sm">
                📈 {currentTestimonial.result}
              </span>
            </div>

            {/* Client Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-xl">
                {currentTestimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                <p className="text-slate-400 text-sm">{currentTestimonial.role}</p>
                <p className="text-emerald-400 text-sm font-semibold">{currentTestimonial.company}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentIndex 
                        ? 'w-8 bg-emerald-400' 
                        : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-full flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">12+</div>
            <p className="text-slate-400">Projects Delivered</p>
          </div>
          <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <p className="text-slate-400">Client Satisfaction</p>
          </div>
          <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">7-14</div>
            <p className="text-slate-400">Days Avg Delivery</p>
          </div>
          <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">5⭐</div>
            <p className="text-slate-400">Average Rating</p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-4">Growing Portfolio</h3>
          <p className="text-slate-400 mb-6">
            Ready to transform your digital presence? Let's create something amazing together.
          </p>
          <a 
            href="https://wa.me/917404511743?text=Hi!%20I'd%20like%20to%20start%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            Start Your Project Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  );
}