import { Suspense } from 'react';
import Header from '@/components/Header/Header';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Stats from '@/components/Stats/Stats';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import AsyncStatsCounter from '@/components/AsyncStatsCounter/AsyncStatsCounter';
import SuspenseWrapper from '@/components/SuspenseWrapper/SuspenseWrapper';
import ContactSection from '@/components/ContactSection/ContactSection';

export const metadata = {
  title: 'Sponge Pro Cleaning Services - Professional Cleaning in Winnipeg',
  description: 'Professional residential and commercial cleaning services in Winnipeg, MB. Trusted, reliable, and thorough cleaning solutions for your home or business.',
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