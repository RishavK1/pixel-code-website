import { Inter } from 'next/font/google'
import './globals.css'
import GoogleAnalytics from './components/GoogleAnalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'PixelorCode - Professional Web Development in Karnal | React & Next.js Agency',
    template: '%s | PixelorCode - Web Development Experts'
  },
  description: 'Launch your website in 7-14 days with PixelorCode. Leading web development agency in Karnal specializing in React, Next.js, MERN stack. Modern websites starting $299. Fast delivery, affordable pricing.',
  
  keywords: 'web development karnal, website design karnal, react developer karnal, nextjs developer india, website development haryana, MERN stack developer, professional website design, fast website development, startup website, business website india, affordable web development, modern web agency, SaaS development, ecommerce website karnal, custom web development, web app development, website redesign services',
  
  authors: [{ name: 'Rishav Kamboj, Vansh Kalra', url: 'https://pixelorcode.com' }],
  creator: 'PixelorCode',
  publisher: 'PixelorCode',
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

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pixelorcode.com',
    siteName: 'PixelorCode - Professional Web Development Agency',
    title: 'PixelorCode - Launch Your Website in Days, Not Months',
    description: 'Professional web development agency in Karnal. Modern websites using React, Next.js, MERN stack. Starting $299. Fast delivery in 7-14 days.',
    images: [
      {
        url: 'https://pixelorcode.com/logo.png',
        width: 1024,
        height: 796,
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
    images: ['https://pixelorcode.com/logo.png'],
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5W6QM4X4');`,
          }}
        />
        {/* End Google Tag Manager */}
        
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="A-K_-AUwfY2sYUMOxsP0EzrSaNXQhb0rqRsEngB1_qI" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#10b981" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="PixelorCode" />
        <meta name="application-name" content="PixelorCode" />
        
        {/* Prefetch key resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5W6QM4X4"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        
        {/* Google Analytics with your ID */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-8Z9V6WEGW9" />
        
        {children}
      </body>
    </html>
  )
}