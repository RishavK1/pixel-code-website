'use client';

import React from 'react';
import { Check, X, Zap, ArrowRight } from 'lucide-react';

const comparisonData = [
  {
    feature: 'Project Timeline',
    pixelorcode: '7-14 Days',
    traditional: '4-12 Weeks',
    highlight: true,
  },
  {
    feature: 'Starting Price',
    pixelorcode: '₹25,000',
    traditional: '₹60,000+',
    highlight: true,
  },
  {
    feature: 'Modern Tech Stack',
    pixelorcode: true,
    traditional: false,
    description: 'Next.js, React, Tailwind CSS',
  },
  {
    feature: 'Mobile-First Design',
    pixelorcode: true,
    traditional: true,
  },
  {
    feature: 'SEO Optimization',
    pixelorcode: true,
    traditional: true,
  },
  {
    feature: 'Revisions Included',
    pixelorcode: 'Unlimited',
    traditional: '2-3 Rounds',
  },
  {
    feature: 'Direct Communication',
    pixelorcode: true,
    traditional: false,
    description: 'WhatsApp, calls anytime',
  },
  {
    feature: 'Post-Launch Support',
    pixelorcode: '1-6 Months Free',
    traditional: 'Paid Extra',
  },
  {
    feature: 'Page Load Speed',
    pixelorcode: 'Under 2 seconds',
    traditional: '3-5 seconds',
  },
  {
    feature: 'CMS Integration',
    pixelorcode: true,
    traditional: 'Often Extra',
  },
  {
    feature: 'Hosting Setup',
    pixelorcode: 'Included',
    traditional: 'Separate Cost',
  },
  {
    feature: 'Project Manager Overhead',
    pixelorcode: false,
    traditional: true,
    reverse: true,
  },
];

export default function ComparisonSection() {
  const renderValue = (value, isPixelorcode, reverse = false) => {
    if (typeof value === 'boolean') {
      const shouldShow = reverse ? !value : value;
      return shouldShow ? (
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center">
            <Check className="w-5 h-5 text-emerald-400" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="w-8 h-8 bg-slate-700/50 border border-slate-600 rounded-full flex items-center justify-center">
            <X className="w-5 h-5 text-slate-500" />
          </div>
        </div>
      );
    }
    return (
      <span className={`font-semibold ${isPixelorcode ? 'text-emerald-400' : 'text-slate-400'}`}>
        {value}
      </span>
    );
  };

  return (
    <div className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold mb-3 uppercase tracking-wider text-sm">
            Why Choose Us
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            PixelorCode vs{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Traditional Agencies
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            See why modern businesses choose our agile approach over slow, expensive traditional agencies.
          </p>
        </div>

        {/* Comparison Table - Desktop */}
        <div className="hidden lg:block">
          <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-3 bg-slate-800/50">
              <div className="p-6 border-r border-slate-700">
                <h3 className="text-lg font-bold text-slate-400">Features</h3>
              </div>
              <div className="p-6 border-r border-emerald-500/30 bg-emerald-500/5">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-emerald-400" />
                  <h3 className="text-lg font-bold text-emerald-400">PixelorCode</h3>
                </div>
                <p className="text-xs text-slate-400 mt-1">Fast, Modern, Affordable</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-400">Traditional Agencies</h3>
                <p className="text-xs text-slate-500 mt-1">Slow, Expensive, Outdated</p>
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 border-t border-slate-800 transition-colors hover:bg-slate-800/30 ${
                  item.highlight ? 'bg-emerald-500/5' : ''
                }`}
              >
                <div className="p-6 border-r border-slate-700">
                  <div className="font-semibold text-white">{item.feature}</div>
                  {item.description && (
                    <div className="text-sm text-slate-500 mt-1">{item.description}</div>
                  )}
                </div>
                <div className="p-6 border-r border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center">
                  {renderValue(item.pixelorcode, true, item.reverse)}
                </div>
                <div className="p-6 flex items-center justify-center">
                  {renderValue(item.traditional, false, item.reverse)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Cards - Mobile */}
        <div className="lg:hidden space-y-6">
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className={`bg-slate-900 border-2 rounded-2xl overflow-hidden ${
                item.highlight ? 'border-emerald-500/50' : 'border-slate-800'
              }`}
            >
              <div className="p-6">
                <h3 className="font-bold text-lg mb-1">{item.feature}</h3>
                {item.description && (
                  <p className="text-sm text-slate-500 mb-4">{item.description}</p>
                )}

                <div className="grid grid-cols-2 gap-4 mt-4">
                  {/* PixelorCode */}
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                    <div className="text-xs text-emerald-400 font-semibold mb-2 flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      PixelorCode
                    </div>
                    <div className="flex items-center justify-center">
                      {renderValue(item.pixelorcode, true, item.reverse)}
                    </div>
                  </div>

                  {/* Traditional */}
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                    <div className="text-xs text-slate-400 font-semibold mb-2">Traditional</div>
                    <div className="flex items-center justify-center">
                      {renderValue(item.traditional, false, item.reverse)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">5x</div>
            <p className="text-slate-300">Faster Delivery</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">60%</div>
            <p className="text-slate-300">Lower Cost</p>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-2xl p-6 text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <p className="text-slate-300">Satisfaction Rate</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-slate-900 border-2 border-slate-800 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to experience the difference?
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Join 50+ businesses who chose speed, quality, and affordability over outdated agency models.
          </p>
          <a
            href="https://wa.me/917404511743?text=Hi%20PixelorCode!%20I'd%20like%20to%20start%20my%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/20"
          >
            Start Your Project Today
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
