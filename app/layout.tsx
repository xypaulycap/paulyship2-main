import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Oriana Shipping B.V - Expert Shipping and Storage Solutions",
    template: "%s | Oriana Shipping B.V"
  },
  description: "Leading provider of bulk liquid storage, transshipment, and vessel leasing services. Sustainable logistics solutions across strategic global locations with KVV: 64773663.",
  keywords: [
    "Oriana Shipping B.V",
    "bulk liquid storage",
    "logistics solutions", 
    "sustainable shipping",
    "tank storage",
    "transshipment",
    "vessel leasing",
    "chemical storage",
    "petroleum storage",
    "Rotterdam terminal",
    "Houston terminal",
    "Singapore terminal",
    "KVV 64773663",
    "shipping company",
    "logistics provider"
  ],
  authors: [{ name: "Oriana Shipping B.V" }],
  creator: "Oriana Shipping B.V",
  publisher: "Oriana Shipping B.V",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.orianashippingbv.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.orianashippingbv.nl',
    title: 'Oriana Shipping B.V - Expert Shipping and Storage Solutions',
    description: 'Leading provider of bulk liquid storage, transshipment, and vessel leasing services. Sustainable logistics solutions across strategic global locations.',
    siteName: 'Oriana Shipping B.V',
    images: [
      {
        url: 'https://www.orianashippingbv.nl/images/5.jpg',
        width: 1200,
        height: 630,
        alt: 'Oriana Shipping B.V Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Oriana Shipping B.V - Expert Shipping and Storage Solutions',
    description: 'Leading provider of bulk liquid storage, transshipment, and vessel leasing services.',
    images: ['https://www.orianashippingbv.nl/images/5.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
  generator: 'Next.js'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="msapplication-TileColor" content="#1e40af" />
        <meta name="application-name" content="Oriana Shipping B.V" />
        <meta name="apple-mobile-web-app-title" content="Oriana Shipping B.V" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Oriana Shipping B.V",
              "url": "https://www.orianashippingbv.nl",
              "logo": "https://www.orianashippingbv.nl/images/logo.png",
              "description": "Leading provider of bulk liquid storage, transshipment, and vessel leasing services.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Wilhelminakade 123",
                "addressLocality": "Rotterdam",
                "postalCode": "3072 AP",
                "addressCountry": "NL"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+31 10 123 4567",
                "contactType": "customer service",
                "email": "info@orianashippingbv.nl"
              },
              "sameAs": [
                "https://www.linkedin.com/company/oriana-shipping-bv",
                "https://twitter.com/orianashipping"
              ]
            })
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        
        {/* Smartsupp Live Chat */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var _smartsupp = _smartsupp || {};
              _smartsupp.key = '7b45e5274edb33b7efa36f17e0509ea540180844';
              window.smartsupp||(function(d) {
                var s,c,o=smartsupp=function(){ o._.push(arguments)};o._=[];
                s=d.getElementsByTagName('script')[0];c=d.createElement('script');
                c.type='text/javascript';c.charset='utf-8';c.async=true;
                c.src='https://www.smartsuppchat.com/loader.js?';s.parentNode.insertBefore(c,s);
              })(document);
            `
          }}
        />
        <noscript>
          Powered by <a href="https://www.smartsupp.com" target="_blank" rel="noopener noreferrer">Smartsupp</a>
        </noscript>
      </body>
    </html>
  )
}
