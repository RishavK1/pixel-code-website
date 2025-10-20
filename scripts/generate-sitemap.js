import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const baseUrl = 'https://pixelorcode.com'

// Static pages
const staticPages = [
  { url: '', priority: 1.0, changefreq: 'daily' },
  { url: '/#services', priority: 0.8, changefreq: 'weekly' },
  { url: '/#portfolio', priority: 0.8, changefreq: 'weekly' },
  { url: '/#pricing', priority: 0.9, changefreq: 'monthly' },
  { url: '/#testimonials', priority: 0.7, changefreq: 'monthly' },
  { url: '/#blog', priority: 0.8, changefreq: 'weekly' },
  { url: '/#contact', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog', priority: 0.9, changefreq: 'weekly' },
]

// Try to import blog data
let blogPages = []
try {
  const blogsModule = await import('../data/blogs.js')
  const blogs = blogsModule.blogsData || []
  blogPages = blogs.map(blog => ({
    url: `/blog/${blog.slug}`,
    priority: blog.featured ? 0.8 : 0.7,
    changefreq: 'monthly',
    lastmod: blog.publishDate || new Date().toISOString().split('T')[0]
  }))
  console.log(`✅ Found ${blogs.length} blog posts`)
} catch (error) {
  console.log('ℹ️  No blog data found, continuing with static pages only')
}

// Try to import projects data
let projectPages = []
try {
  const projectsModule = await import('../data/projects.js')
  const projects = projectsModule.projectsData || []
  projectPages = projects.map(project => ({
    url: `/case-studies/${project.slug}`,
    priority: 0.7,
    changefreq: 'monthly'
  }))
  console.log(`✅ Found ${projects.length} case studies`)
} catch (error) {
  console.log('ℹ️  No projects data found, continuing without case studies')
}

// Combine all pages
const allPages = [...staticPages, ...blogPages, ...projectPages]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

// Create public folder if it doesn't exist
const publicDir = path.join(process.cwd(), 'public')
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir)
}

// Write sitemap
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)
console.log(`✅ Sitemap generated at public/sitemap.xml with ${allPages.length} URLs`)

// Generate robots.txt
const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${baseUrl}/sitemap.xml
`

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt)
console.log('✅ robots.txt generated at public/robots.txt')
