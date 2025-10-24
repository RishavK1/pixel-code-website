'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import ContactFooter from '@/components/ContactFooter';
import { ArrowRight, CheckCircle, Zap, Users, Award, TrendingUp } from 'lucide-react';

export default function FreeAuditPage() {
  const auditFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Analysis",
      description: "We'll analyze your current site's loading speed, responsiveness, and technical performance."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Experience Review",
      description: "Evaluate navigation, design effectiveness, and overall user journey optimization."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "SEO Assessment",
      description: "Review your search engine optimization including keywords, meta tags, and content structure."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Competitive Analysis",
      description: "Compare your site with top competitors to identify gaps and opportunities."
    }
  ];

  const benefits = [
    "Detailed performance report with actionable insights",
    "Prioritized improvement recommendations",
    "Estimated timeline and investment for upgrades",
    "Competitive positioning analysis",
    "Conversion optimization suggestions"
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-950 text-white pt-20">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
          
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-emerald-400" />
              <span className="text-sm font-medium">Free Website Audit</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Get Your{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Free Website Audit
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
              Discover how to transform your website into a lead-generation machine. 
              Our expert audit reveals performance issues, optimization opportunities, and growth strategies.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4">
                <div className="text-3xl font-bold text-emerald-400">100%</div>
                <div className="text-slate-400 text-sm">Free Analysis</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4">
                <div className="text-3xl font-bold text-cyan-400">24-48</div>
                <div className="text-slate-400 text-sm">Hours Delivery</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl px-6 py-4">
                <div className="text-3xl font-bold text-purple-400">5+</div>
                <div className="text-slate-400 text-sm">Key Metrics</div>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What's Included in Your Free Audit</h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                We'll thoroughly analyze your website and provide actionable insights to improve performance and conversions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {auditFeatures.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all">
                  <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center mb-4 text-emerald-400">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">You'll Receive</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-slate-700 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Website?</h2>
              <p className="text-slate-300 text-xl mb-8">
                Get your free audit and discover how we can help you launch a high-performing website in just 7-14 days.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="https://wa.me/917404511743?text=Hi%20PixelorCode!%20I'd%20like%20to%20schedule%20my%20free%20website%20audit."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/20 w-full sm:w-auto justify-center"
                >
                  Schedule Your Free Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="tel:+919416444778"
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
                >
                  Call: +91 94164 44778
                </a>
              </div>
              
              <p className="text-slate-500 text-sm mt-6">
                No obligation. No pressure. Just valuable insights to help your business grow.
              </p>
            </div>
          </div>
        </div>

        <ContactFooter />
      </div>
    </>
  );
}