'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import ContactFooter from '@/components/ContactFooter';
import { X, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

export default function DesignShowcase() {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const carouselRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const designs = [
    {
      id: 1,
      title: 'MathMaster Academy',
      category: 'Education',
      industry: 'Coaching Institute',
      thumbnail: '/design/design2.png',
      fullImage: '/design/design2.png',
      description: 'Modern mathematics learning platform with interactive lessons, problem-solving tools, and student progress tracking',
      features: ['Interactive Lessons', 'Problem Solver', 'Progress Tracking', 'Student Dashboard'],
      demoUrl: 'https://dc-classes.vercel.app/',
      color: 'emerald'
    },
    {
      id: 2,
      title: 'Restaurant Elegance',
      category: 'Restaurant',
      industry: 'Food & Beverage',
      thumbnail: '/design/design1.png',
      fullImage: '/design/design1.png',
      description: 'Elegant restaurant website with online menu, reservations, and delivery integration',
      features: ['Online Menu', 'Table Booking', 'Food Delivery', 'Gallery'],
      demoUrl: 'https://rose-petal-scroll.vercel.app/',
      color: 'orange'
    },
    {
      id: 3,
      title: 'ScienceLab Institute',
      category: 'Education',
      industry: 'Coaching Institute',
      thumbnail: '/design/design3.png',
      fullImage: '/design/design3.png',
      description: 'Comprehensive science education platform with virtual labs, experiment simulations, and research tools',
      features: ['Virtual Labs', 'Experiment Simulator', 'Research Tools', 'Science Library'],
      demoUrl: 'https://rana-academy.vercel.app/',
      color: 'blue'
    },
    {
      id: 4,
      title: 'Language Learning Hub',
      category: 'Education',
      industry: 'Language Institute',
      thumbnail: '/design/design4.png',
      fullImage: '/design/design4.png',
      description: 'Interactive language learning platform with speaking practice, grammar lessons, and cultural immersion',
      features: ['Speaking Practice', 'Grammar Lessons', 'Cultural Content', 'Progress Analytics'],
      demoUrl: 'https://taneja-classes.vercel.app/',
      color: 'purple'
    }
  ];

  const colorClasses = {
    emerald: { gradient: 'from-emerald-500/20 to-emerald-500/5', border: 'border-emerald-500/30', text: 'text-emerald-400', bg: 'bg-emerald-500/10' },
    orange: { gradient: 'from-orange-500/20 to-orange-500/5', border: 'border-orange-500/30', text: 'text-orange-400', bg: 'bg-orange-500/10' },
    blue: { gradient: 'from-blue-500/20 to-blue-500/5', border: 'border-blue-500/30', text: 'text-blue-400', bg: 'bg-blue-500/10' },
    red: { gradient: 'from-red-500/20 to-red-500/5', border: 'border-red-500/30', text: 'text-red-400', bg: 'bg-red-500/10' },
    slate: { gradient: 'from-slate-500/20 to-slate-500/5', border: 'border-slate-500/30', text: 'text-slate-400', bg: 'bg-slate-500/10' },
    pink: { gradient: 'from-pink-500/20 to-pink-500/5', border: 'border-pink-500/30', text: 'text-pink-400', bg: 'bg-pink-500/10' },
    purple: { gradient: 'from-purple-500/20 to-purple-500/5', border: 'border-purple-500/30', text: 'text-purple-400', bg: 'bg-purple-500/10' },
    cyan: { gradient: 'from-cyan-500/20 to-cyan-500/5', border: 'border-cyan-500/30', text: 'text-cyan-400', bg: 'bg-cyan-500/10' },
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const scrollAmount = carouselRef.current.offsetWidth * 0.9;
        carouselRef.current.scrollBy({
          left: scrollAmount,
          behavior: 'smooth'
        });

        // Reset to beginning if we've scrolled to the end
        if (carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >= carouselRef.current.scrollWidth - 10) {
          setTimeout(() => {
            if (carouselRef.current) {
              carouselRef.current.scrollTo({
                left: 0,
                behavior: 'smooth'
              });
            }
          }, 2000);
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoScrolling]);

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 text-white pt-20">
        
        {/* Hero Section with Glassmorphism */}
        <div className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 mb-6">
                <Sparkles className="w-5 h-5 text-emerald-400" />
                <span className="text-sm font-medium">Ready-Made Designs</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Choose Your{' '}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Perfect Design
                </span>
              </h1>
              
              <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                Pre-designed, industry-specific websites ready to customize for your business. Launch in days with proven designs.
              </p>

              {/* Glassmorphism Info Cards */}
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4">
                  <div className="text-3xl font-bold text-emerald-400">4+</div>
                  <div className="text-slate-400 text-sm">Ready Designs</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4">
                  <div className="text-3xl font-bold text-cyan-400">100%</div>
                  <div className="text-slate-400 text-sm">Customizable</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4">
                  <div className="text-3xl font-bold text-purple-400">7-14</div>
                  <div className="text-slate-400 text-sm">Days to Launch</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Auto-scrolling Carousel */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div 
            ref={carouselRef}
            className="relative overflow-x-auto scrollbar-hide py-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex space-x-6 pb-4" style={{ minWidth: 'max-content' }}>
              {designs.map((design) => {
                const colors = colorClasses[design.color];
                return (
                  <div
                    key={design.id}
                    className="flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-[65vw] lg:w-[55vw] xl:w-[45vw] 2xl:w-[35vw]"
                    onClick={() => setSelectedDesign(design)}
                  >
                    {/* Modern Carousel Card */}
                    <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden cursor-pointer h-full">
                      {/* Full-width Image with Overlay */}
                      <div className="relative h-64 md:h-72 overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`}></div>
                        <img 
                          src={design.thumbnail} 
                          alt={design.title}
                          className="w-full h-full object-cover opacity-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8">
                        <h3 className="text-xl md:text-2xl font-bold mb-3">
                          {design.title}
                        </h3>
                        <p className="text-slate-300 text-sm md:text-base mb-6 line-clamp-2">
                          {design.description}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                          <button className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 text-sm">
                            View Details
                            <ArrowRight className="w-4 h-4" />
                          </button>
                          <a 
                            href={design.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-white/10 border border-white/20 text-white font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-2 text-sm"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Live Preview
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Expanded View Modal */}
        {selectedDesign && (
          <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-lg z-50 overflow-y-auto">
            <div className="min-h-screen p-4 md:p-6 flex items-center justify-center">
              <div className="max-w-4xl w-full">
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedDesign(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/20 hover:border-white/30 rounded-full flex items-center justify-center transition-all duration-300 z-10 shadow-xl"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>

                {/* Modal Content */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800/90 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                  
                    {/* Header */}
                    <div className={`bg-gradient-to-r ${colorClasses[selectedDesign.color].gradient} border-b border-white/10 p-6 md:p-8`}>
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">{selectedDesign.title}</h2>
                          <p className="text-slate-200 text-base md:text-lg max-w-2xl">{selectedDesign.description}</p>
                        </div>
                      </div>
                    </div>

                  {/* Content */}
                  <div className="p-6 md:p-8">
                    {/* Full Preview Image */}
                    <div className="relative rounded-2xl overflow-hidden border border-white/10 mb-8 shadow-lg">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"></div>
                      <img 
                        src={selectedDesign.fullImage} 
                        alt={selectedDesign.title}
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-4 left-4 z-20">
                        <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1.5">
                          <span className="text-white text-sm font-medium">Design Preview</span>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-emerald-400 font-bold text-xl md:text-2xl mb-1">7-14</div>
                        <div className="text-slate-400 text-xs md:text-sm">Days to Launch</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-cyan-400 font-bold text-xl md:text-2xl mb-1">100%</div>
                        <div className="text-slate-400 text-xs md:text-sm">Customizable</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-purple-400 font-bold text-xl md:text-2xl mb-1">24/7</div>
                        <div className="text-slate-400 text-xs md:text-sm">Support</div>
                      </div>
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center">
                        <div className="text-amber-400 font-bold text-xl md:text-2xl mb-1">SEO</div>
                        <div className="text-slate-400 text-xs md:text-sm">Optimized</div>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={`https://wa.me/917404511743?text=Hi%20PixelorCode!%20I'm%20interested%20in%20the%20${encodeURIComponent(selectedDesign.title)}%20design.%20Please%20send%20me%20more%20details.%0A%0ACategory:%20${encodeURIComponent(selectedDesign.category)}%0AIndustry:%20${encodeURIComponent(selectedDesign.industry)}%0AKey%20Features:%20${encodeURIComponent(selectedDesign.features.join(', '))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-emerald-500/20"
                      >
                        Choose This Design
                        <ArrowRight className="w-5 h-5" />
                      </a>
                      <a 
                        href={selectedDesign.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/10 border border-white/20 text-white font-semibold px-6 py-4 rounded-xl flex items-center justify-center gap-2"
                      >
                        <ExternalLink className="w-5 h-5" />
                        View Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10"></div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-12">
              <h2 className="text-4xl font-bold mb-4">Don't See Your Industry?</h2>
              <p className="text-xl text-slate-300 mb-8">
                We create custom designs for any business. Get a free consultation and see what we can build for you.
              </p>
              <a
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-emerald-500/20"
              >
                Request Custom Design
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <ContactFooter />
      </div>
    </>
  );
}