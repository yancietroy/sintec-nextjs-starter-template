import { Suspense } from 'react';
import Header from '@/components/Header/Header';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Stats from '@/components/Stats/Stats';
import ContactSection from '@/components/ContactSection/ContactSection';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Sponge Pro Cleaning Services - Professional Cleaning in Winnipeg',
  description: 'Professional residential and commercial cleaning services in Winnipeg, MB. Trusted, reliable, and thorough cleaning solutions for your home or business.',
  alternates: {
    canonical: 'https://www.spongeprocleaningservices.com',
  },
  openGraph: {
    url: 'https://www.spongeprocleaningservices.com',
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