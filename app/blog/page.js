import Navbar from '@/components/Navbar';
import BlogSection from '@/components/BlogSection';
import ContactFooter from '@/components/ContactFooter';
import { blogsData } from '@/data/blogs';

export const metadata = {
  title: 'Blog & Resources - PixelorCode',
  description: 'Expert web development insights, guides, and tips. Learn about modern web technologies, pricing, and best practices.',
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Blog & <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Resources</span>
            </h1>
            <p className="text-slate-400 text-xl">
              Expert insights on web development, pricing, technology choices, and growing your online presence. 
              Real advice from real experience.
            </p>
          </div>
        </div>

        {/* All Blogs */}
        <BlogSection blogs={blogsData} showAll={true} />
      </main>
      <ContactFooter />
    </>
  );
}
