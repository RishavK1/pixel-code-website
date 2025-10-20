import React from 'react';
import { ArrowRight, Zap, Users, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Hero Container */}
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-32">
        
        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400 font-medium">12+ Successful Launches</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl lg:text-7xl font-bold text-center mb-6 leading-tight">
          Launch your website in{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            days, not months
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl lg:text-2xl text-slate-300 text-center max-w-3xl mx-auto mb-12">
          We craft high-performing websites, web apps, and SaaS MVPs for startups and businesses — 
          combining <span className="text-emerald-400 font-semibold">clean design</span>, 
          <span className="text-emerald-400 font-semibold"> powerful development</span>, and 
          <span className="text-emerald-400 font-semibold"> smart strategy</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          
          {/* Primary CTA - Free Audit */}
          <a 
            href="https://wa.me/917404511743?text=Hi%20PixelorCode!%20I'd%20like%20a%20free%20website%20audit."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-105 w-full sm:w-auto justify-center"
          >
            Get Your Free Website Audit
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA - WhatsApp */}
          <a 
            href="https://wa.me/917404511743"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-lg flex items-center gap-3 border border-slate-700 hover:border-slate-600 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-slate-400 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span>7-14 Day Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span>100% Client Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span>Modern Tech Stack</span>
          </div>
        </div>

        {/* Optional: Social Proof Logos */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm mb-6 uppercase tracking-wider">Trusted by brands across India</p>
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-40 grayscale">
            {/* You can replace these with actual client logos */}
            <div className="text-slate-400 font-semibold text-lg">Perpetual Power</div>
            <div className="text-slate-400 font-semibold text-lg">Rudra Infocom</div>
            <div className="text-slate-400 font-semibold text-lg">Ruvira Atelier</div>
            <div className="text-slate-400 font-semibold text-lg">Meena Play World</div>
          </div>
        </div>

      </div>

      {/* Optional: Scroll Indicator */}
      <div className="flex justify-center pb-8 animate-bounce">
        <svg className="w-6 h-6 text-slate-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}