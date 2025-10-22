'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Code2, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Prevent body scroll when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Clean up overflow style on unmount
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'Services', href: '/#services' },
    { name: 'Process', href: '/#process' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/#faq' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-lg border-b border-slate-800 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-12 md:h-16 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/nav-main.png" 
                alt="PixelOrCode Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-emerald-400 font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919416444778"
              className="flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 94164 44778</span>
            </a>
            <a
              href="https://wa.me/917404511743?text=Hi%20PixelorCode!%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-emerald-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 top-20 bg-black/70 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu Slide-in Panel */}
      <div
        className={`lg:hidden fixed top-20 right-0 h-[calc(100vh-5rem)] w-4/5 max-w-sm z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full bg-slate-900 border-l-2 border-emerald-500/30 shadow-2xl">
          {/* Make this container scrollable */}
          <div className="flex flex-col h-full p-6 overflow-y-auto">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-3 mb-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-slate-300 hover:text-emerald-400 font-medium py-4 px-6 rounded-lg transition-all border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800/50"
                  style={{
                    animation: isOpen ? `slideInRight 0.3s ease-out ${index * 0.05}s both` : 'none',
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile CTA Buttons */}
            <div className="space-y-4 mt-auto pb-8">
              <a
                href="tel:+919416444778"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-6 rounded-lg border border-slate-700 transition-all hover:border-emerald-500/50"
              >
                <Phone className="w-5 h-5" />
                Call: +91 94164 44778
              </a>
              <a
                href="https://wa.me/917404511743?text=Hi%20PixelorCode!%20I'd%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold py-4 px-6 rounded-lg transition-all"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}