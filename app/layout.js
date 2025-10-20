import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PixelorCode - Professional Web Development in Karnal | React & Next.js Agency',
  description: 'Launch your website in 7-14 days with PixelorCode. Leading web development agency in Karnal specializing in React, Next.js, MERN stack. Modern websites starting $299. Fast delivery, affordable pricing.',
  
  keywords: 'web development karnal, website design karnal, react developer karnal, nextjs developer india, website development haryana, MERN stack developer, professional website design, fast website development, startup website, business website india, affordable web development, modern web agency, SaaS development, ecommerce website karnal',
  
  authors: [{ name: 'Rishav Kamboj', url: 'https://pixelorcode.com' }],
  creator: 'PixelorCode',
  publisher: 'PixelorCode',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pixelorcode.com',
    siteName: 'PixelorCode',
    title: 'PixelorCode - Launch Your Website in Days, Not Months',
    description: 'Professional web development agency in Karnal. Modern websites using React, Next.js, MERN stack. Starting $299. Fast delivery in 7-14 days.',
    images: [
      {
        url: 'https://pixelorcode.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'PixelorCode - Web Development Agency Karnal',
      }
    ],
  },

  twitter: {
    card: 'summary_large_image',
    site: '@pixelorcode',
    creator: '@pixelorcode',
    title: 'PixelorCode - Professional Web Development',
    description: 'Launch your website in 7-14 days. Modern tech, affordable pricing, fast delivery.',
    images: ['https://pixelorcode.com/twitter-image.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  alternates: {
    canonical: 'https://pixelorcode.com',
  },

  other: {
    'geo.region': 'IN-HR',
    'geo.placename': 'Karnal',
    'geo.position': '29.6857;76.9905',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "PixelorCode",
              "image": "https://pixelorcode.com/logo.png",
              "description": "Professional web development agency in Karnal specializing in React, Next.js, and MERN stack development. Fast delivery in 7-14 days.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "",
                "addressLocality": "Karnal",
                "addressRegion": "Haryana",
                "postalCode": "132001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 29.6857,
                "longitude": 76.9905
              },
              "url": "https://pixelorcode.com",
              "telephone": "+919416444778",
              "email": "pixelorcode@gmail.com",
              "priceRange": "$299-$1499",
              "openingHours": "Mo-Sa 10:00-19:00",
              "sameAs": [
                "https://www.instagram.com/pixel.orcode/",
                "https://www.linkedin.com/company/pixelorcode/",
                "https://x.com/pixelorcode"
              ],
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "serviceType": [
                "Web Development",
                "Website Design",
                "React Development",
                "Next.js Development",
                "SaaS Development",
                "E-commerce Development",
                "Website Redesign",
                "UI/UX Design"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "12"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics with your ID */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-8Z9V6WEGW9" />
        
        {children}
      </body>
    </html>
  )
}
