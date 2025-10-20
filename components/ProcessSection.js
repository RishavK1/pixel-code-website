import React from 'react';
import { MessageCircle, Palette, Code, TestTube, Rocket, HeadphonesIcon } from 'lucide-react';

const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discovery Call",
    description: "We start with a friendly conversation to understand your goals, brand identity, target audience, and specific requirements.",
    duration: "30-60 mins",
    deliverable: "Project brief & timeline"
  },
  {
    number: "02",
    icon: Palette,
    title: "Design & Wireframes",
    description: "Our designers create mockups and wireframes that bring your vision to life. You review and provide feedback until it's perfect.",
    duration: "2-4 days",
    deliverable: "Figma designs & layouts"
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "Our developers build your website with clean, optimized code using the latest technologies. Fast, scalable, and SEO-ready.",
    duration: "5-10 days",
    deliverable: "Fully functional website"
  },
  {
    number: "04",
    icon: TestTube,
    title: "Testing & QA",
    description: "We rigorously test every page, feature, and interaction across all devices and browsers to ensure flawless performance.",
    duration: "1-2 days",
    deliverable: "Bug-free experience"
  },
  {
    number: "05",
    icon: Rocket,
    title: "Launch",
    description: "Your website goes live! We handle domain setup, hosting configuration, and ensure everything runs smoothly from day one.",
    duration: "1 day",
    deliverable: "Live website + training"
  },
  {
    number: "06",
    icon: HeadphonesIcon,
    title: "Support & Iterate",
    description: "We don't disappear after launch. Get ongoing support, maintenance, and improvements based on your feedback and needs.",
    duration: "Ongoing",
    deliverable: "Peace of mind"
  }
];

export default function ProcessSection() {
  return (
    <div className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold mb-3 uppercase tracking-wider text-sm">Our Process</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            From Idea to <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Launch in Weeks</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A proven, streamlined workflow that ensures quality results, clear communication, and on-time delivery every single time.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0"></div>

          {/* Steps */}
          <div className="space-y-12 lg:space-y-24">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl p-6 lg:p-8 hover:border-emerald-500/50 transition-all duration-300 hover:scale-105">
                      <div className={`flex items-center gap-3 mb-4 ${isEven ? 'lg:justify-end' : 'lg:justify-start'} justify-start`}>
                        <div className="text-emerald-400/30 font-bold text-5xl lg:text-6xl">
                          {step.number}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold mb-1">{step.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-emerald-400">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            {step.duration}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-400 mb-4 leading-relaxed">
                        {step.description}
                      </p>
                      
                      <div className={`inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2`}>
                        <span className="text-emerald-400 text-sm font-semibold">✓ {step.deliverable}</span>
                      </div>
                    </div>
                  </div>

                  {/* Center Icon (Desktop) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full items-center justify-center shadow-lg shadow-emerald-500/50 z-10 border-4 border-slate-950">
                    <Icon className="w-8 h-8 text-slate-950" />
                  </div>

                  {/* Mobile Icon */}
                  <div className="flex lg:hidden w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full items-center justify-center shadow-lg shadow-emerald-500/50 border-4 border-slate-950">
                    <Icon className="w-8 h-8 text-slate-950" />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to get started?
          </h3>
          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Book your free discovery call today and let's discuss how we can bring your vision to life.
          </p>
          <a 
            href="https://wa.me/917404511743?text=Hi%20PixelorCode!%20I'd%20like%20to%20book%20a%20discovery%20call."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/20"
          >
            Book Your Free Call
            <MessageCircle className="w-5 h-5" />
          </a>
        </div>

      </div>
    </div>
  );
}