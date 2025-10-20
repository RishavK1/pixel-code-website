'use client';

import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Most websites are completed within 7-14 days, depending on complexity. Simple business websites take 5-7 days, while custom web applications or SaaS products typically take 3-4 weeks. We'll provide you with an accurate timeline during our discovery call based on your specific requirements."
  },
  {
    question: "What's included in your pricing?",
    answer: "Our pricing includes everything you need: custom design, development, mobile optimization, basic SEO setup, hosting setup assistance, content upload, and post-launch support. We're transparent about costs - no hidden fees or surprise charges."
  },
  {
    question: "Do I need to provide content and images?",
    answer: "Ideally, yes - you know your business best! However, if you need help, we can assist with content structuring, copywriting recommendations, and sourcing stock images. We'll guide you through exactly what we need during the project."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely! Every website we build is fully responsive and optimized for mobile, tablet, and desktop. With over 60% of web traffic coming from mobile devices, we design mobile-first to ensure your site looks perfect on all screens."
  },
  {
    question: "Can I update the website myself after launch?",
    answer: "Yes! For most projects, we integrate a user-friendly CMS (Content Management System) that lets you easily update text, images, and content without coding knowledge. We'll provide training and documentation to help you manage your site confidently."
  },
  {
    question: "What if I need changes after the website is live?",
    answer: "All our packages include 1-3 months of free support for bug fixes and minor tweaks. After that, we offer affordable maintenance packages or hourly rates for updates. We're here for the long term - your success is our success!"
  },
  {
    question: "Do you offer website hosting?",
    answer: "We help you set up hosting on reliable platforms like Vercel, AWS, or shared hosting depending on your needs. We'll recommend the best option for your budget and requirements, handle the technical setup, and ensure everything runs smoothly."
  },
  {
    question: "Will my website be SEO-friendly?",
    answer: "Yes! We build every website with SEO best practices: clean code, fast loading speeds, mobile optimization, proper heading structure, meta tags, and sitemap setup. This gives you a strong foundation to rank well on Google."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, proven technologies based on your project needs: React, Next.js, and Tailwind CSS for frontend; Node.js and Express for backend; MongoDB or Supabase for databases. We choose the right tech stack to ensure your site is fast, scalable, and maintainable."
  },
  {
    question: "Do you work with clients outside Karnal?",
    answer: "Absolutely! While we're based in Karnal, Haryana, we serve clients across India and internationally. Most of our collaboration happens online via WhatsApp, video calls, and email, making location no barrier to great work."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, UPI, Razorpay, and international payments via PayPal. Typically, we work with a 50% upfront payment to start and 50% upon completion, but we're flexible based on project scope."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes! Website redesigns are one of our specialties. We'll analyze your current site, identify pain points, and create a modern, high-performing version that keeps what works and improves what doesn't. We can also migrate all your existing content."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-900 text-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold mb-3 uppercase tracking-wider text-sm">FAQ</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Questions? <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">We've Got Answers</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about working with PixelorCode. Can't find what you're looking for? Just ask!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-slate-950 border-2 border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-emerald-500/50"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-bold pr-8">{faq.question}</h3>
                <ChevronDown 
                  className={`w-6 h-6 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-slate-400 mb-6">
            We're here to help! Send us a message and we'll get back to you within 24 hours.
          </p>
          <a 
            href="https://wa.me/917404511743?text=Hi!%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-5 h-5" />
            Chat with Us
          </a>
        </div>

      </div>
    </div>
  );
}