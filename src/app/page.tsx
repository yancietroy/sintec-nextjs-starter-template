import { Suspense } from 'react';
import Header from '@/components/Header/Header';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Stats from '@/components/Stats/Stats';
import ContactSection from '@/components/ContactSection/ContactSection';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Sponge Pro Cleaning Services | Winnipeg Cleaners',
  description: 'Expert residential & commercial cleaning in Winnipeg, MB. Trusted, reliable service for homes and businesses. Free quotes available today.',
  alternates: {
    canonical: 'https://www.spongeprocleaningservices.com',
  },
  openGraph: {
    title: 'Sponge Pro Cleaning Services | Winnipeg Cleaners',
    description: 'Expert residential & commercial cleaning in Winnipeg, MB. Trusted, reliable service for homes and businesses. Free quotes available today.',
    url: 'https://www.spongeprocleaningservices.com',
    images: [
      {
        url: 'https://www.spongeprocleaningservices.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Sponge Pro Cleaning Services - Professional Cleaning',
      }
    ],
  },
  twitter: {
    title: 'Sponge Pro Cleaning Services | Winnipeg Cleaners',
    description: 'Expert residential & commercial cleaning in Winnipeg, MB. Trusted, reliable service for homes and businesses. Free quotes available today.',
    images: ['https://www.spongeprocleaningservices.com/images/og-image.jpg'],
  },
}

// Force static generation for instant navigation
export const dynamic = 'force-static'

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeBanner />
      <About />
      <Services />

      <Stats />
      {/* <Testimonials /> */}
      <ContactSection />
      <Footer />
    </>
  )
}