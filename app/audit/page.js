'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import ContactFooter from '@/components/ContactFooter';
import { X, ExternalLink, ArrowRight, Sparkles, Filter } from 'lucide-react';

export default function DesignShowcase() {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const designs = [
    {
      id: 1,
      title: 'Chemistry Academy',
      category: 'Education',
      industry: 'Coaching Institute',
      thumbnail: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400',
      fullImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200',
      description: 'Modern chemistry learning platform with interactive lessons and student dashboard',
      features: ['Course Management', 'Student Portal', 'Video Lessons', 'Quiz System'],
      demoUrl: '#',
      color: 'emerald'
    },
    {
      id: 2,
      title: 'Restaurant Elegance',
      category: 'Restaurant',
      industry: 'Food & Beverage',
      thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400',
      fullImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200',
      description: 'Elegant restaurant website with online menu, reservations, and delivery integration',
      features: ['Online Menu', 'Table Booking', 'Food Delivery', 'Gallery'],
      demoUrl: '#',
      color: 'orange'
    },
    {
      id: 3,
      title: 'TechStore E-commerce',
      category: 'E-commerce',
      industry: 'Retail',
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
      fullImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
      description: 'Full-featured online store with product catalog, cart, and payment gateway',
      features: ['Product Catalog', 'Shopping Cart', 'Payment Gateway', 'Order Tracking'],
      demoUrl: '#',
      color: 'blue'
    },
    {
      id: 4,
      title: 'FitLife Gym',
      category: 'Fitness',
      industry: 'Health & Wellness',
      thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400',
      fullImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200',
      description: 'Dynamic fitness center website with class schedules, trainer profiles, and memberships',
      features: ['Class Schedule', 'Membership Plans', 'Trainer Profiles', 'Online Booking'],
      demoUrl: '#',
      color: 'red'
    },
    {
      id: 5,
      title: 'LawFirm Professional',
      category: 'Professional',
      industry: 'Legal Services',
      thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400',
      fullImage: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200',
      description: 'Professional law firm website with case studies, attorney profiles, and consultation booking',
      features: ['Attorney Profiles', 'Case Studies', 'Consultation Booking', 'Blog'],
      demoUrl: '#',
      color: 'slate'
    },
    {
      id: 6,
      title: 'BeautyGlow Salon',
      category: 'Beauty',
      industry: 'Beauty & Wellness',
      thumbnail: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400',
      fullImage: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200',
      description: 'Elegant beauty salon website with service menu, online booking, and gallery',
      features: ['Service Menu', 'Online Booking', 'Gallery', 'Staff Profiles'],
      demoUrl: '#',
      color: 'pink'
    },
    {
      id: 7,
      title: 'StartupHub SaaS',
      category: 'SaaS',
      industry: 'Technology',
      thumbnail: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=400',
      fullImage: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200',
      description: 'Modern SaaS landing page with feature showcase, pricing, and demo request',
      features: ['Feature Showcase', 'Pricing Calculator', 'Demo Request', 'Integration APIs'],
      demoUrl: '#',
      color: 'purple'
    },
    {
      id: 8,
      title: 'PropertyPro Real Estate',
      category: 'Real Estate',
      industry: 'Property',
      thumbnail: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400',
      fullImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200',
      description: 'Real estate platform with property listings, virtual tours, and inquiry system',
      features: ['Property Listings', 'Virtual Tours', 'Search Filters', 'Inquiry Form'],
      demoUrl: '#',
      color: 'cyan'
    }
  ];

  const categories = ['All', 'Education', 'Restaurant', 'E-commerce', 'Fitness', 'Professional', 'Beauty', 'SaaS', 'Real Estate'];

  const filteredDesigns = selectedCategory === 'All' 
    ? designs 
    : designs.filter(d => d.category === selectedCategory);

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
                  <div className="text-3xl font-bold text-emerald-400">8+</div>
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

            {/* Category Filter */}
            <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
              <Filter className="w-5 h-5 text-slate-400" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/20'
                      : 'bg-white/5 backdrop-blur-md border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Design Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDesigns.map((design) => {
              const colors = colorClasses[design.color];
              return (
                <div
                  key={design.id}
                  onClick={() => setSelectedDesign(design)}
                  className="group cursor-pointer"
                >
                  {/* Glassmorphism Card */}
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:border-white/20 hover:shadow-2xl">
                    
                    {/* Thumbnail */}
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`}></div>
                      <img 
                        src={design.thumbnail} 
                        alt={design.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity group-hover:scale-110 duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                      
                      {/* Category Badge */}
                      <div className={`absolute top-4 right-4 ${colors.bg} backdrop-blur-md border ${colors.border} rounded-full px-3 py-1`}>
                        <span className={`text-xs font-semibold ${colors.text}`}>{design.category}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                        {design.title}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                        {design.description}
                      </p>

                      {/* View Button */}
                      <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-emerald-500/50 rounded-lg py-2 text-sm font-semibold transition-all group-hover:text-emerald-400 flex items-center justify-center gap-2">
                        View Design
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
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
                        <div className="flex flex-wrap items-center gap-2 mb-3">
                          <div className={`inline-block ${colorClasses[selectedDesign.color].bg} border ${colorClasses[selectedDesign.color].border} rounded-full px-3 py-1`}>
                            <span className={`text-xs font-semibold ${colorClasses[selectedDesign.color].text}`}>
                              {selectedDesign.category}
                            </span>
                          </div>
                          <div className="bg-white/10 border border-white/20 rounded-full px-3 py-1">
                            <span className="text-xs font-semibold text-white">
                              {selectedDesign.industry}
                            </span>
                          </div>
                        </div>
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

                    {/* Features & Info */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      {/* Features */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                          <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500/30 rounded-lg flex items-center justify-center">
                            <span className="text-emerald-400 text-lg">✓</span>
                          </div>
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {selectedDesign.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 text-slate-300">
                              <div className="w-5 h-5 bg-emerald-500/10 border border-emerald-500/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-emerald-400 text-xs">✓</span>
                              </div>
                              <span className="text-sm md:text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Design Info */}
                      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300">
                        <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-white">
                          <div className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                            <span className="text-cyan-400 text-lg">ℹ️</span>
                          </div>
                          Design Information
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-slate-400 text-sm mb-1">Category</h4>
                            <p className="text-white font-medium">{selectedDesign.category}</p>
                          </div>
                          <div>
                            <h4 className="text-slate-400 text-sm mb-1">Industry</h4>
                            <p className="text-white font-medium">{selectedDesign.industry}</p>
                          </div>
                          <div>
                            <h4 className="text-slate-400 text-sm mb-1">Delivery Time</h4>
                            <p className="text-emerald-400 font-medium">7-14 Days</p>
                          </div>
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
                        className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30"
                      >
                        Choose This Design
                        <ArrowRight className="w-5 h-5" />
                      </a>
                      <button className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white font-semibold px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300">
                        <ExternalLink className="w-5 h-5" />
                        View Live Demo
                      </button>
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