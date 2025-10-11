import { Roboto } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'aos/dist/aos.css'
import '@/styles/globals.css'
import '@/styles/sintec.css'
import '@/styles/responsive.css'
import AOSProvider from '@/components/AOSProvider/AOSProvider'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata = {
  metadataBase: new URL('https://www.spongeprocleaningservices.com'),
  title: {
    default: 'Sponge Pro Cleaning Services - Professional Cleaning in Winnipeg',
    template: '%s | Sponge Pro Cleaning Services'
  },
  description: 'Professional cleaning services in Winnipeg, MB. Residential and commercial cleaning solutions you can trust.',
  keywords: ['cleaning services Winnipeg', 'residential cleaning', 'commercial cleaning', 'professional cleaners', 'house cleaning Winnipeg', 'office cleaning', 'move-in cleaning', 'move-out cleaning'],
  authors: [{ name: 'Sponge Pro Cleaning Services' }],
  creator: 'Sponge Pro Cleaning Services',
  publisher: 'Sponge Pro Cleaning Services',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.spongeprocleaningservices.com',
    siteName: 'Sponge Pro Cleaning Services',
    title: 'Sponge Pro Cleaning Services - Professional Cleaning in Winnipeg',
    description: 'Professional cleaning services in Winnipeg, MB. Residential and commercial cleaning solutions you can trust.',
    images: [
      {
        url: '/images/152a815e-685b-4f82-b3f2-eb526ddb7c7f.jpeg',
        width: 1200,
        height: 630,
        alt: 'Sponge Pro Cleaning Services - Professional Cleaning',
      }
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Sponge Pro Cleaning Services - Professional Cleaning in Winnipeg',
    description: 'Professional cleaning services in Winnipeg, MB. Residential and commercial cleaning solutions you can trust.',
    images: ['/images/152a815e-685b-4f82-b3f2-eb526ddb7c7f.jpeg'],
  },

  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },

  // Verification
  verification: {
    google: 'your-google-verification-code',
  },

  // Robots
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
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD Structured Data for Organization
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sponge Pro Cleaning Services',
    image: 'https://www.spongeprocleaningservices.com/images/logo.png',
    '@id': 'https://www.spongeprocleaningservices.com',
    url: 'https://www.spongeprocleaningservices.com',
    telephone: '+1-204-202-8257',
    email: 'admin@spongeprocleaningservices.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Winnipeg',
      addressLocality: 'Winnipeg',
      addressRegion: 'MB',
      postalCode: 'R3G 2H5',
      addressCountry: 'CA'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.8954327,
      longitude: -97.2019435
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:00',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    sameAs: [
      'https://www.facebook.com/spongeprocleaningservices',
      'https://www.instagram.com/spongeprocleaningservices'
    ],
    areaServed: {
      '@type': 'City',
      name: 'Winnipeg',
      '@id': 'https://en.wikipedia.org/wiki/Winnipeg'
    },
    serviceType: [
      'Residential Cleaning',
      'Commercial Cleaning',
      'Move-In/Move-Out Cleaning',
      'Office Cleaning',
      'House Cleaning'
    ]
  }

  return (
    <html lang="en">
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://api.web3forms.com" />
        <link rel="dns-prefetch" href="https://api.web3forms.com" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={roboto.className}>
        <AOSProvider>
          {children}
        </AOSProvider>
      </body>
    </html>
  )
}