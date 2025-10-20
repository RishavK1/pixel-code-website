import React from 'react';
import Link from 'next/link';
import { Clock, Calendar, User, ArrowRight, TrendingUp } from 'lucide-react';

export default function BlogSection({ blogs, showAll = false }) {
  // Show featured blogs or limit to 3 if not showAll
  const displayBlogs = showAll ? blogs : blogs.filter(blog => blog.featured).slice(0, 3);

  return (
    <div className="bg-slate-950 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 font-semibold mb-3 uppercase tracking-wider text-sm">
            Resources & Insights
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Latest from Our <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Expert tips, guides, and insights to help you make informed decisions about your web presence.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayBlogs.map((blog) => (
            <Link 
              key={blog.id} 
              href={`/blog/${blog.slug}`}
              className="group bg-slate-900 border-2 border-slate-800 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              {/* Blog Image */}
              <div className="relative h-48 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp className="w-16 h-16 text-emerald-400/30" />
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                </div>
                
                {/* Featured Badge */}
                {blog.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Blog Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-500">{blog.author}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div className="text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/20"
            >
              View All Articles
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
