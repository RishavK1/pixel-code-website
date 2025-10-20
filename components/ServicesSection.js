import React from 'react';
import { Code2, Smartphone, Palette, Server, Wrench, TrendingUp, ArrowRight, Check, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: "High-Converting Websites",
    description: "Fast, modern websites that turn visitors into customers. Built with cutting-edge tech for maximum performance and SEO.",
    features: ["Next.js & React", "SEO Optimized", "Mobile-First", "Lightning Fast"],
    color: "emerald"
  },
  {
    icon: Smartphone,
    title: "SaaS & Web Apps",
    description: "Full-stack applications and MVPs that scale with your business. From concept to launch in weeks, not months.",
    features: ["MERN Stack", "Custom Features", "API Integration", "Cloud Ready"],
    color: "cyan"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that users love. Wireframes, prototypes, and complete design systems tailored to your brand.",
    features: ["User Research", "Figma Design", "Brand Identity", "Design Systems"],
    color: "purple"
  },
  {
    icon: Server,
    title: "Hosting & Deployment",
    description: "Lightning-fast, secure hosting that keeps you online 24/7. Automated deployments and scalable infrastructure.",
    features: ["Vercel/AWS", "SSL Security", "Auto Backups", "99.9% Uptime"],
    color: "blue"
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing support to keep your site running smoothly. Updates, fixes, and new features whenever you need them.",
    features: ["Regular Updates", "Bug Fixes", "Performance Tuning", "Priority Support"],
    color: "orange"
  },
  {
    icon: TrendingUp,
    title: "SEO & Performance",
    description: "Get found on Google and load in under 2 seconds. Technical SEO, speed optimization, and conversion improvements.",
    features: ["Technical SEO", "Speed Boost", "Core Web Vitals", "Analytics Setup"],
    color: "pink"
  }
];

const colorClasses = {
  emerald: {
    gradient: "from-emerald-400 via-emerald-500 to-teal-500",
    glowFrom: "from-emerald-500/20",
    glowTo: "to-teal-500/20",
    text: "text-emerald-400",
    lightText: "text-emerald-300",
    iconBg: "bg-emerald-500/10",
    borderGlow: "shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)]"
  },
  cyan: {
    gradient: "from-cyan-400 via-cyan-500 to-blue-500",
    glowFrom: "from-cyan-500/20",
    glowTo: "to-blue-500/20",
    text: "text-cyan-400",
    lightText: "text-cyan-300",
    iconBg: "bg-cyan-500/10",
    borderGlow: "shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)]"
  },
  purple: {
    gradient: "from-purple-400 via-purple-500 to-pink-500",
    glowFrom: "from-purple-500/20",
    glowTo: "to-pink-500/20",
    text: "text-purple-400",
    lightText: "text-purple-300",
    iconBg: "bg-purple-500/10",
    borderGlow: "shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)]"
  },
  blue: {
    gradient: "from-blue-400 via-blue-500 to-indigo-500",
    glowFrom: "from-blue-500/20",
    glowTo: "to-indigo-500/20",
    text: "text-blue-400",
    lightText: "text-blue-300",
    iconBg: "bg-blue-500/10",
    borderGlow: "shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]"
  },
  orange: {
    gradient: "from-orange-400 via-orange-500 to-red-500",
    glowFrom: "from-orange-500/20",
    glowTo: "to-red-500/20",
    text: "text-orange-400",
    lightText: "text-orange-300",
    iconBg: "bg-orange-500/10",
    borderGlow: "shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)]"
  },
  pink: {
    gradient: "from-pink-400 via-pink-500 to-rose-500",
    glowFrom: "from-pink-500/20",
    glowTo: "to-rose-500/20",
    text: "text-pink-400",
    lightText: "text-pink-300",
    iconBg: "bg-pink-500/10",
    borderGlow: "shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)]"
  }
};

export default function ServicesSection() {
  return (
    <div className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold mb-3 uppercase tracking-wider text-sm">What We Do</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Services That Drive <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Real Results</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            End-to-end digital solutions designed to help your business grow faster, reach more customers, and stand out online.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color];
            
            return (
              <div 
                key={index}
                className="group relative h-full"
              >
                {/* Animated Glow Border */}
                <div className={`absolute -inset-[1px] bg-gradient-to-r ${colors.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm ${colors.borderGlow}`}></div>
                
                {/* Card Container */}
                <div className="relative h-full bg-gradient-to-br from-slate-900 via-slate-900/95 to-slate-800/90 backdrop-blur-xl border border-slate-800/50 rounded-3xl p-6 md:p-8 transition-all duration-700 hover:-translate-y-2 overflow-hidden shadow-xl hover:shadow-2xl">
                  
                  {/* Animated Mesh Gradient Background */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${colors.glowFrom} ${colors.glowTo} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-0`}></div>
                  
                  {/* Shine Effect on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Container with Premium Design */}
                    <div className="relative mb-5 md:mb-8 inline-block">
                      {/* Outer Glow Ring */}
                      <div className={`absolute -inset-3 bg-gradient-to-r ${colors.gradient} rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500 group-hover:scale-110`}></div>
                      
                      {/* Icon Background */}
                      <div className={`relative ${colors.iconBg} backdrop-blur-sm rounded-2xl p-4 border border-slate-700/30 group-hover:border-slate-600/50 transition-all duration-500`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-10 rounded-2xl`}></div>
                        <Icon className={`relative w-10 h-10 ${colors.text} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`} />
                      </div>
                      
                      {/* Sparkle Badge */}
                      <div className={`absolute -top-1 -right-1 ${colors.iconBg} rounded-full p-1.5 border border-slate-700/50 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100`}>
                        <Sparkles className={`w-3 h-3 ${colors.lightText}`} />
                      </div>
                    </div>
                    
                    {/* Title with Gradient on Hover */}
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm md:text-base text-slate-400 mb-5 md:mb-8 leading-relaxed group-hover:text-slate-300 transition-colors duration-500">
                      {service.description}
                    </p>
                    
                    {/* Features List with Check Icons */}
                    <div className="space-y-2.5 md:space-y-3.5">
                      {service.features.map((feature, idx) => (
                        <div 
                          key={idx} 
                          className="flex items-center gap-3 group/item"
                          style={{ transitionDelay: `${idx * 75}ms` }}
                        >
                          {/* Animated Check Icon */}
                          <div className={`relative flex-shrink-0 w-5 h-5 rounded-md ${colors.iconBg} flex items-center justify-center border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-300 group-hover:scale-110`}>
                            <Check className={`w-3 h-3 ${colors.text} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />
                          </div>
                          <span className="text-slate-300 group-hover:text-white transition-colors duration-300 font-medium text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                    

                  </div>
                  
                  {/* Bottom Gradient Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative group bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 lg:p-12 overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-purple-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 blur-3xl"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Ready to start your project?
            </h3>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto">
              Let's discuss your goals and create a custom solution that fits your needs and budget.
            </p>
            <a 
              href="https://wa.me/917404511743?text=Hi%20PixelorCode!%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-bold px-10 py-5 rounded-xl transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-emerald-500/50"
            >
              <span>Start Your Project Today</span>
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}