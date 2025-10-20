'use client';

import React, { useState } from 'react';
import { 
  ArrowRight, 
  Calendar, 
  Target, 
  TrendingUp, 
  Clock, 
  Code2,
  Smartphone,
  Zap,
  CheckCircle,
  Quote,
  ExternalLink,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Example case study data structure
const caseStudyExample = {
  id: 1,
  title: "Perpetual Power Services",
  subtitle: "Modern Corporate Website for Renewable Energy Leader",
  client: {
    name: "Rajesh Kumar",
    role: "Managing Director",
    company: "Perpetual Power Services",
    industry: "Renewable Energy",
    location: "India"
  },
  hero: {
    image: "/portfolio/project1.png",
    tagline: "Transforming 34+ years of expertise into a modern digital presence"
  },
  overview: {
    challenge: "Perpetual Power Services, a renewable energy company with 34+ years of experience, lacked a professional online presence to showcase their solar power solutions, UPS systems, and sustainable energy expertise.",
    solution: "We designed and developed a clean, modern corporate website that effectively communicates their authority in the renewable energy sector while making it easy for potential clients to understand their services.",
    timeline: "10 days",
    budget: "₹35,000",
    deliverables: ["Corporate Website", "Service Pages", "Contact Integration", "Mobile Optimization"]
  },
  beforeAfter: {
    before: {
      image: "/portfolio/before-placeholder.png",
      issues: [
        "No online presence",
        "Lost leads to competitors with websites",
        "Difficulty explaining services remotely",
        "No credibility with modern clients"
      ]
    },
    after: {
      image: "/portfolio/project1.png",
      improvements: [
        "Professional brand image online",
        "24/7 service showcase",
        "Easy contact and inquiry system",
        "Mobile-optimized experience"
      ]
    }
  },
  metrics: [
    { label: "Increase in Inquiries", value: "40%", icon: "TrendingUp" },
    { label: "Page Load Speed", value: "1.8s", icon: "Zap" },
    { label: "Mobile Traffic", value: "65%", icon: "Smartphone" },
    { label: "Client Satisfaction", value: "5/5", icon: "CheckCircle" }
  ],
  technologies: [
    "Next.js 15",
    "React 19",
    "Tailwind CSS",
    "Vercel",
    "SEO Optimized"
  ],
  features: [
    {
      title: "Service Showcase",
      description: "Clear, organized presentation of solar power, UPS systems, and energy solutions with detailed descriptions."
    },
    {
      title: "Company History",
      description: "Compelling narrative of 34+ years in the industry, building trust and credibility."
    },
    {
      title: "Contact Integration",
      description: "Easy-to-use contact forms and direct communication channels for instant inquiries."
    },
    {
      title: "Mobile-First Design",
      description: "Responsive design ensuring perfect display on all devices, especially mobile."
    }
  ],
  process: [
    {
      step: 1,
      title: "Discovery & Research",
      description: "Understanding the renewable energy industry, target audience, and competitive landscape.",
      duration: "1-2 days"
    },
    {
      step: 2,
      title: "Design & Wireframes",
      description: "Creating professional layouts that reflect authority and expertise in the energy sector.",
      duration: "2-3 days"
    },
    {
      step: 3,
      title: "Development",
      description: "Building with modern tech stack for speed, SEO, and scalability.",
      duration: "4-5 days"
    },
    {
      step: 4,
      title: "Testing & Launch",
      description: "Quality assurance, performance optimization, and successful deployment.",
      duration: "2 days"
    }
  ],
  testimonial: {
    quote: "PixelorCode delivered a clean, professional website that perfectly showcases our 34+ years in renewable energy. The team understood our industry needs and created exactly what we envisioned. Highly professional work!",
    author: "Rajesh Kumar",
    role: "Managing Director",
    company: "Perpetual Power Services",
    rating: 5,
    image: null
  },
  results: [
    "40% increase in qualified inquiries within first month",
    "Established strong online credibility in renewable energy sector",
    "Reduced customer service time with comprehensive service information",
    "Improved brand perception among modern, tech-savvy clients"
  ],
  nextProject: {
    title: "Rudra Infocom",
    slug: "rudra-infocom",
    image: "/portfolio/project2.png"
  }
};

export default function CaseStudyTemplate({ caseStudy = caseStudyExample }) {
  const [activeTab, setActiveTab] = useState('before');

  // Icon mapping
  const iconMap = {
    TrendingUp,
    Zap,
    Smartphone,
    CheckCircle,
  };

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <a href="/#portfolio" className="hover:text-emerald-400 transition-colors">Portfolio</a>
            <ChevronRight className="w-4 h-4" />
            <span className="text-emerald-400">{caseStudy.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-2 mb-6">
                <span className="text-emerald-400 text-sm font-semibold">{caseStudy.client.industry}</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-slate-300 mb-8">
                {caseStudy.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">{caseStudy.overview.timeline}</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-2">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm">{caseStudy.client.location}</span>
                </div>
              </div>

              <a
                href="https://wa.me/917404511743?text=Hi!%20I'd%20like%20a%20similar%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Start Similar Project
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="relative">
              <div className="aspect-video bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                <img
                  src={caseStudy.hero.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover"
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                {caseStudy.overview.challenge}
              </p>

              <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
              <p className="text-slate-300 text-lg leading-relaxed">
                {caseStudy.overview.solution}
              </p>
            </div>

            <div className="bg-slate-800 border-2 border-slate-700 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Timeline</p>
                  <p className="font-semibold text-emerald-400">{caseStudy.overview.timeline}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-400 mb-2">Deliverables</p>
                  <ul className="space-y-2">
                    {caseStudy.overview.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Before/After Section */}
      <div className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Before & After Transformation
            </h2>
            <p className="text-slate-400 text-lg">
              See the dramatic improvement in their digital presence
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-slate-900 border-2 border-slate-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab('before')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'before'
                    ? 'bg-slate-950 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Before
              </button>
              <button
                onClick={() => setActiveTab('after')}
                className={`px-6 py-3 rounded-md font-semibold transition-all ${
                  activeTab === 'after'
                    ? 'bg-emerald-500 text-slate-950'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                After
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className={`transition-all duration-300 ${activeTab === 'before' ? 'opacity-100' : 'opacity-50 lg:opacity-100'}`}>
              <div className="bg-slate-900 border-2 border-slate-800 rounded-2xl overflow-hidden">
                <div className="bg-red-500/10 border-b-2 border-red-500/20 px-6 py-4">
                  <h3 className="text-xl font-bold text-red-400">Before PixelorCode</h3>
                </div>
                <div className="p-6">
                  <div className="aspect-video bg-slate-800 rounded-lg mb-6 flex items-center justify-center">
                    <p className="text-slate-500">No Online Presence</p>
                  </div>
                  <ul className="space-y-3">
                    {caseStudy.beforeAfter.before.issues.map((issue, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <div className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* After */}
            <div className={`transition-all duration-300 ${activeTab === 'after' ? 'opacity-100' : 'opacity-50 lg:opacity-100'}`}>
              <div className="bg-slate-900 border-2 border-emerald-500/50 rounded-2xl overflow-hidden">
                <div className="bg-emerald-500/10 border-b-2 border-emerald-500/20 px-6 py-4">
                  <h3 className="text-xl font-bold text-emerald-400">After PixelorCode</h3>
                </div>
                <div className="p-6">
                  <div className="aspect-video bg-slate-800 rounded-lg mb-6 overflow-hidden">
                    <img
                      src={caseStudy.beforeAfter.after.image}
                      alt="After"
                      className="w-full h-full object-cover"
                      onError={(e) => e.target.style.display = 'none'}
                    />
                  </div>
                  <ul className="space-y-3">
                    {caseStudy.beforeAfter.after.improvements.map((improvement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        {improvement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Measurable Results</h2>
            <p className="text-slate-400 text-lg">Real impact, backed by data</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.metrics.map((metric, idx) => {
              // Get the icon component from the map
              const Icon = typeof metric.icon === 'string' ? iconMap[metric.icon] : metric.icon;
              return (
                <div
                  key={idx}
                  className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-2 border-emerald-500/30 rounded-2xl p-8 text-center hover:scale-105 transition-transform"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 border border-emerald-500/40 rounded-xl flex items-center justify-center mx-auto mb-4">
                    {Icon && <Icon className="w-6 h-6 text-emerald-400" />}
                  </div>
                  <div className="text-4xl font-bold text-emerald-400 mb-2">{metric.value}</div>
                  <p className="text-slate-300">{metric.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Technologies Used */}
      <div className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {caseStudy.technologies.map((tech, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border-2 border-slate-800 rounded-lg px-6 py-3 hover:border-emerald-500/50 transition-colors"
              >
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Testimonial */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-2 border-emerald-500/30 rounded-3xl p-8 lg:p-12 relative">
            <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-slate-950" />
            </div>

            <div className="flex items-center gap-1 mb-6 mt-4">
              {[...Array(Math.floor(caseStudy.testimonial.rating))].map((_, i) => (
                <div key={i} className="w-6 h-6 text-emerald-400">★</div>
              ))}
              {caseStudy.testimonial.rating % 1 !== 0 && (
                <div className="w-6 h-6 text-emerald-400 relative">
                  <span className="absolute" style={{overflow: 'hidden', width: '50%'}}>★</span>
                  <span className="absolute text-slate-600">★</span>
                </div>
              )}
            </div>

            <p className="text-xl lg:text-2xl text-slate-200 leading-relaxed mb-8">
              "{caseStudy.testimonial.quote}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-slate-950 font-bold text-xl">
                {caseStudy.testimonial.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-lg">{caseStudy.testimonial.author}</h4>
                <p className="text-slate-400">{caseStudy.testimonial.role}</p>
                <p className="text-emerald-400 font-semibold">{caseStudy.testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready for Similar Results?
          </h2>
          <p className="text-slate-400 text-lg mb-8">
            Let's create a powerful digital presence for your business too.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/917404511743?text=Hi!%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-lg border border-slate-700 transition-all duration-300"
            >
              View More Projects
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
