'use client';


import React, { useState } from 'react';
import { Check, Zap, Star, Rocket, ArrowRight, DollarSign, IndianRupee } from 'lucide-react';

const pricingPlans = [
  {
    name: "Starter Package",
    tagline: "Perfect for small businesses",
    priceUSD: 299,
    priceINR: 25000,
    originalPriceUSD: 499,
    originalPriceINR: 41000,
    timeline: "5-7 Days",
    icon: Zap,
    popular: false,
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Basic SEO setup",
      "Contact form",
      "Google Maps integration",
      "Fast loading speed",
      "1 month free support",
      "Social media links"
    ],
    idealFor: "Local businesses, portfolios, cafés, coaches"
  },
  {
    name: "Professional",
    tagline: "Most popular choice",
    priceUSD: 599,
    priceINR: 50000,
    originalPriceUSD: 899,
    originalPriceINR: 75000,
    timeline: "10-14 Days",
    icon: Star,
    popular: true,
    features: [
      "Up to 10 pages",
      "Custom UI/UX design",
      "Advanced SEO optimization",
      "CMS integration (easy updates)",
      "Blog/News section",
      "Lead capture forms",
      "Analytics & tracking",
      "3 months free support",
      "Performance optimization",
      "Image gallery/portfolio"
    ],
    idealFor: "Growing brands, institutes, e-commerce stores"
  },
  {
    name: "Premium/SaaS",
    tagline: "For complex projects",
    priceUSD: 1499,
    priceINR: 125000,
    originalPriceUSD: null,
    originalPriceINR: null,
    timeline: "3-4 Weeks",
    icon: Rocket,
    popular: false,
    isStarting: true,
    features: [
      "Unlimited pages",
      "Full-stack web application",
      "Custom features & integrations",
      "User authentication & dashboard",
      "Database & API setup",
      "Payment gateway integration",
      "Admin panel",
      "6 months priority support",
      "Cloud hosting setup",
      "Scalable architecture",
      "Ongoing maintenance options"
    ],
    idealFor: "Startups, SaaS products, web apps, MVPs"
  }
];

export default function PricingSection() {
  const [currency, setCurrency] = useState('USD');

  const formatPrice = (usd, inr) => {
    if (currency === 'USD') {
      return { symbol: '$', amount: usd.toLocaleString() };
    } else {
      return { symbol: '₹', amount: inr.toLocaleString() };
    }
  };

  return (
    <div className="bg-slate-900 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold mb-3 uppercase tracking-wider text-sm">Simple Pricing</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Choose Your <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Perfect Plan</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-8">
            Transparent pricing with no hidden fees. All plans include modern design, fast development, and ongoing support.
          </p>

          {/* Currency Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${currency === 'INR' ? 'text-white' : 'text-slate-500'}`}>
              INR (₹)
            </span>
            <button
              onClick={() => setCurrency(currency === 'USD' ? 'INR' : 'USD')}
              className="relative w-16 h-8 bg-slate-800 rounded-full border-2 border-slate-700 transition-colors hover:border-emerald-500"
            >
              <div
                className={`absolute top-0.5 left-0.5 w-6 h-6 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-transform duration-300 ${
                  currency === 'USD' ? 'translate-x-8' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${currency === 'USD' ? 'text-white' : 'text-slate-500'}`}>
              USD ($)
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            const isPopular = plan.popular;
            const price = formatPrice(plan.priceUSD, plan.priceINR);
            const originalPrice = plan.originalPriceUSD ? formatPrice(plan.originalPriceUSD, plan.originalPriceINR) : null;
            
            return (
              <div 
                key={index}
                className={`relative rounded-2xl p-8 ${
                  isPopular 
                    ? 'bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border-2 border-emerald-500/50 shadow-2xl shadow-emerald-500/20 scale-105' 
                    : 'bg-slate-800 border-2 border-slate-700'
                } transition-all duration-300 hover:scale-105`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-bold px-4 py-1 rounded-full text-sm flex items-center gap-1">
                      <Star className="w-4 h-4 fill-slate-950" />
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div className={`${isPopular ? 'bg-emerald-500/20 border-emerald-500/40' : 'bg-slate-700 border-slate-600'} border-2 w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${isPopular ? 'text-emerald-400' : 'text-slate-400'}`} />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.tagline}</p>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    {plan.isStarting && (
                      <span className="text-slate-400 text-sm">Starting</span>
                    )}
                    <span className="text-4xl font-bold">{price.symbol}{price.amount}</span>
                    {originalPrice && (
                      <span className="text-slate-500 line-through text-lg">{originalPrice.symbol}{originalPrice.amount}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span>Delivery in {plan.timeline}</span>
                  </div>
                  {currency === 'USD' && (
                    <p className="text-xs text-slate-500 mt-1">
                      ≈ ₹{(currency === 'USD' ? plan.priceINR : plan.priceUSD).toLocaleString()} {currency === 'USD' ? 'INR' : 'USD'}
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isPopular ? 'text-emerald-400' : 'text-slate-500'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Ideal For */}
                <div className="mb-6 p-4 bg-slate-900/50 rounded-lg">
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Ideal For</p>
                  <p className="text-sm text-slate-300">{plan.idealFor}</p>
                </div>

                {/* CTA Button */}
                <a 
                  href={`https://wa.me/917404511743?text=Hi!%20I'm%20interested%20in%20the%20${plan.name}%20package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center font-bold py-4 rounded-lg transition-all duration-300 ${
                    isPopular
                      ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>

        {/* Launch Special Banner */}
        <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border-2 border-emerald-500/30 rounded-2xl p-6 mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-2xl">🎉</span>
            <h3 className="text-xl font-bold">LAUNCH SPECIAL</h3>
          </div>
          <p className="text-slate-300 mb-1">First 5 clients save up to 40% - Limited time offer!</p>
          <div className="flex items-center justify-center gap-4 text-sm text-emerald-400">
            <span>⏰ Offer ends: October 27, 2024</span>
            <span>•</span>
            <span>📍 Spots remaining: 3/5</span>
          </div>
        </div>

        {/* Custom Quote Section */}
        <div className="text-center bg-slate-800 border-2 border-slate-700 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Need something custom?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements and create a tailored solution that fits your vision and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/917404511743?text=Hi!%20I'd%20like%20to%20discuss%20a%20custom%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="tel:+919416444778"
              className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300"
            >
              Call: +91 94164 44778
            </a>
          </div>
        </div>

        {/* Trust Note */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            💳 Flexible payment options • 🔒 100% secure transactions • ✨ Money-back guarantee if not satisfied
          </p>
        </div>

      </div>
    </div>
  );
}