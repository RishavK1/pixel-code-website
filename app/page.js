import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import PortfolioSection from '@/components/PortfolioSection';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import BlogSection from '@/components/BlogSection';
import ContactFooter from '@/components/ContactFooter';
import { blogsData } from '@/data/blogs';

export const metadata = {
  title: 'PixelorCode - Professional Web Development in Karnal | React & Next.js Agency',
  description: 'Launch your website in 7-14 days with PixelorCode. Leading web development agency in Karnal specializing in React, Next.js, MERN stack. Modern websites starting $299. Fast delivery, affordable pricing.',
  keywords: 'web development karnal, website design karnal, react developer karnal, nextjs developer india, website development haryana, MERN stack developer, professional website design, fast website development, startup website, business website india, affordable web development, modern web agency, SaaS development, ecommerce website karnal, custom web development, web app development, website redesign services',
  openGraph: {
    title: 'PixelorCode - Launch Your Website in Days, Not Months',
    description: 'Professional web development agency in Karnal. Modern websites using React, Next.js, MERN stack. Starting $299. Fast delivery in 7-14 days.',
    type: 'website',
    siteName: 'PixelorCode',
    locale: 'en_US',
  },
  twitter: {
    title: 'PixelorCode - Professional Web Development',
    description: 'Launch your website in 7-14 days. Modern tech, affordable pricing, fast delivery.',
    card: 'summary_large_image',
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="process">
          <ProcessSection />
        </section>
        <section id="portfolio">
          <PortfolioSection />
        </section>
        <section id="pricing">
          <PricingSection />
        </section>
        <section id="comparison">
          <ComparisonSection />
        </section>
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <section id="blog">
          <BlogSection blogs={blogsData} />
        </section>
        <ContactFooter />
      </main>
    </>
  );
}