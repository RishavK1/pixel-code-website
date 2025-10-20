import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import ContactFooter from '@/components/ContactFooter';
import { blogsData } from '@/data/blogs';
import { Clock, Calendar, User, ArrowLeft, Check, X, TrendingUp, ArrowRight } from 'lucide-react';

// Generate static params for all blog slugs
export async function generateStaticParams() {
  return blogsData.map((blog) => ({
    slug: blog.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const blog = blogsData.find((b) => b.slug === params.slug);
  
  if (!blog) {
    return {
      title: 'Blog Not Found - PixelorCode',
    };
  }

  return {
    title: `${blog.title} - PixelorCode Blog`,
    description: blog.excerpt,
  };
}

export default function BlogDetailPage({ params }) {
  const blog = blogsData.find((b) => b.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-slate-950 text-white min-h-screen">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 py-16">
          <div className="max-w-4xl mx-auto px-6">
            {/* Back Button */}
            <Link 
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="bg-emerald-500 text-slate-950 text-sm font-bold px-4 py-1.5 rounded-full">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blog.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Excerpt */}
            <p className="text-xl text-slate-300 leading-relaxed">
              {blog.excerpt}
            </p>
          </div>
        </div>

        {/* Featured Image Placeholder */}
        <div className="max-w-4xl mx-auto px-6 -mt-8">
          <div className="relative h-96 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl overflow-hidden border-2 border-slate-800 flex items-center justify-center">
            <TrendingUp className="w-32 h-32 text-emerald-400/30" />
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Introduction */}
          {blog.content.intro && (
            <div className="mb-12">
              <p className="text-lg text-slate-300 leading-relaxed">
                {blog.content.intro}
              </p>
            </div>
          )}

          {/* Regular Sections */}
          {blog.content.sections && blog.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
              <p className="text-slate-300 leading-relaxed">{section.content}</p>
            </div>
          ))}

          {/* Timeline (for launch-website blog) */}
          {blog.content.timeline && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">The 7-Day Breakdown</h2>
              <div className="space-y-6">
                {blog.content.timeline.map((day, index) => (
                  <div key={index} className="bg-slate-900 border-2 border-slate-800 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <span className="text-slate-950 font-bold text-lg">{day.day.split(' ')[1]}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">{day.title}</h3>
                        <p className="text-slate-400 mb-3">{day.description}</p>
                        <div className="flex items-center gap-2 text-emerald-400 text-sm">
                          <Check className="w-4 h-4" />
                          <span>Deliverable: {day.deliverable}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cost Breakdown (for cost-breakdown blog) */}
          {blog.content.costBreakdown && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">Where Your Money Goes</h2>
              <div className="space-y-6">
                {blog.content.costBreakdown.map((item, index) => (
                  <div key={index} className="bg-slate-900 border-2 border-slate-800 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold">{item.component}</h3>
                      <div className="text-right">
                        <div className="text-emerald-400 font-bold text-lg">{item.percentage}</div>
                        <div className="text-slate-500 text-sm">{item.cost}</div>
                      </div>
                    </div>
                    <p className="text-slate-400 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.includes.map((inc, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-300 text-sm">
                          <Check className="w-4 h-4 text-emerald-400" />
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comparison Table (for cost-breakdown & mern-vs-wordpress) */}
          {blog.content.comparison && blog.content.comparison.options && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">{blog.content.comparison.title}</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {blog.content.comparison.options.map((option, index) => (
                  <div key={index} className="bg-slate-900 border-2 border-slate-800 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-2">{option.option}</h3>
                    <div className="text-emerald-400 font-bold text-lg mb-4">{option.cost}</div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-slate-400 mb-2">Pros:</h4>
                      <ul className="space-y-1">
                        {option.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-slate-400 mb-2">Cons:</h4>
                      <ul className="space-y-1">
                        {option.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                            <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-slate-800">
                      <span className="text-xs text-slate-500">Best For: </span>
                      <span className="text-sm text-emerald-400">{option.suitable}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MERN vs WordPress Detailed Comparison */}
          {blog.content.comparison && blog.content.comparison.categories && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">{blog.content.comparison.title}</h2>
              <div className="space-y-6">
                {blog.content.comparison.categories.map((category, index) => (
                  <div key={index} className="bg-slate-900 border-2 border-slate-800 rounded-xl p-6">
                    <h3 className="text-2xl font-bold mb-6 text-emerald-400">{category.aspect}</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* WordPress */}
                      <div className="border-l-4 border-orange-500 pl-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-lg">WordPress</h4>
                          <span className="text-2xl">{category.wordpress.rating}</span>
                        </div>
                        <p className="text-slate-300 text-sm mb-3">{category.wordpress.description}</p>
                        <ul className="space-y-1">
                          {category.wordpress.details.map((detail, i) => (
                            <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                              <span className="text-orange-500 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* MERN */}
                      <div className="border-l-4 border-emerald-500 pl-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-bold text-lg">MERN Stack</h4>
                          <span className="text-2xl">{category.mern.rating}</span>
                        </div>
                        <p className="text-slate-300 text-sm mb-3">{category.mern.description}</p>
                        <ul className="space-y-1">
                          {category.mern.details.map((detail, i) => (
                            <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                              <span className="text-emerald-500 mt-1">•</span>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Signs (for redesign blog) */}
          {blog.content.signs && (
            <div className="mb-12">
              <div className="space-y-8">
                {blog.content.signs.map((sign, index) => (
                  <div key={index} className="bg-slate-900 border-2 border-slate-800 rounded-xl p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                        <span className="text-slate-950 font-bold text-xl">{sign.number}</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{sign.title}</h3>
                        <p className="text-slate-300 mb-4">{sign.description}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-emerald-400 mb-2">Warning Signs:</h4>
                      <ul className="space-y-2">
                        {sign.indicators.map((indicator, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                            <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                            <span>{indicator}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-4">
                      <p className="text-red-300 text-sm"><strong>Impact:</strong> {sign.impact}</p>
                    </div>

                    <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                      <p className="text-emerald-300 text-sm"><strong>Solution:</strong> {sign.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ROI Examples */}
          {blog.content.roi && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">{blog.content.roi.title}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {blog.content.roi.examples.map((example, index) => (
                  <div key={index} className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-2 border-emerald-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-4 text-emerald-400">{example.business}</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <span className="text-slate-400">Investment:</span>
                        <div className="text-white font-bold">{example.investment}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Monthly Benefit:</span>
                        <div className="text-white">{example.monthlyBenefit}</div>
                      </div>
                      <div>
                        <span className="text-slate-400">Break-Even:</span>
                        <div className="text-emerald-400 font-bold">{example.breakEven}</div>
                      </div>
                      <div className="pt-3 border-t border-emerald-500/30">
                        <span className="text-slate-400">Yearly ROI:</span>
                        <div className="text-2xl font-bold text-emerald-400">{example.yearlyROI}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Criteria Checklist (for developer guide) */}
          {blog.content.criteriaChecklist && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8">What to Look For</h2>
              <div className="space-y-6">
                {blog.content.criteriaChecklist.map((criteria, index) => (
                  <div key={index} className="bg-slate-900 border-2 border-slate-800 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold">{criteria.criterion}</h3>
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                        criteria.importance === 'Critical' ? 'bg-red-500/20 text-red-400' :
                        criteria.importance === 'Very Important' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {criteria.importance}
                      </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div>
                        <h4 className="font-semibold text-emerald-400 mb-2 text-sm">✓ What to Look For:</h4>
                        <ul className="space-y-1">
                          {criteria.whatToLook.map((item, i) => (
                            <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                              <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-red-400 mb-2 text-sm">✗ Red Flags:</h4>
                        <ul className="space-y-1">
                          {criteria.redFlags.map((flag, i) => (
                            <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                              <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                              <span>{flag}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-4">
                      <h4 className="font-semibold text-cyan-400 mb-2 text-sm">Questions to Ask:</h4>
                      <ul className="space-y-1">
                        {criteria.questions.map((question, i) => (
                          <li key={i} className="text-slate-300 text-sm">• {question}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Takeaways */}
          {blog.content.keyTakeaways && (
            <div className="mb-12 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-2 border-emerald-500/30 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
                Key Takeaways
              </h2>
              <ul className="space-y-3">
                {blog.content.keyTakeaways.map((takeaway, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-200">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Call to Action */}
          {blog.content.callToAction && (
            <div className="bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-slate-950 mb-4">Ready to Get Started?</h3>
              <p className="text-slate-900 mb-6">{blog.content.callToAction}</p>
              <a 
                href="https://wa.me/917404511743?text=Hi!%20I%20read%20your%20blog%20and%20I'm%20interested%20in%20discussing%20my%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-900 text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          )}

        </div>

        {/* Related Articles */}
        <div className="max-w-4xl mx-auto px-6 pb-16">
          <h2 className="text-3xl font-bold mb-8">Continue Reading</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {blogsData
              .filter(b => b.id !== blog.id)
              .slice(0, 3)
              .map((relatedBlog) => (
                <Link 
                  key={relatedBlog.id}
                  href={`/blog/${relatedBlog.slug}`}
                  className="group bg-slate-900 border-2 border-slate-800 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="p-4">
                    <span className="text-xs text-emerald-400 font-semibold">{relatedBlog.category}</span>
                    <h3 className="text-lg font-bold mt-2 mb-2 group-hover:text-emerald-400 transition-colors line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2">{relatedBlog.excerpt}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

      </main>
      <ContactFooter />
    </>
  );
}
