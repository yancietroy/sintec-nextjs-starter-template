import Header from '@/components/Header/Header';
import Services from '@/components/Services/Services';
import Stats from '@/components/Stats/Stats';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Our Services',
  description: 'Discover our comprehensive range of affordable, professional cleaning services for residential and commercial properties in Winnipeg.',
  alternates: {
    canonical: 'https://www.spongeprocleaningservices.com/services',
  },
  openGraph: {
    title: 'Our Services | Sponge Pro Cleaning Services',
    description: 'Discover our comprehensive range of professional cleaning services for residential and commercial properties in Winnipeg.',
    url: 'https://www.spongeprocleaningservices.com/services',
    images: [
      {
        url: 'https://www.spongeprocleaningservices.com/images/OPENGRAPH.png',
        width: 1200,
        height: 630,
        alt: 'Sponge Pro Cleaning Services - Professional Cleaning',
      }
    ],
  },
  twitter: {
    title: 'Our Services | Sponge Pro Cleaning Services',
    description: 'Discover our comprehensive range of professional cleaning services for residential and commercial properties in Winnipeg.',
    images: ['https://www.spongeprocleaningservices.com/images/OPENGRAPH.png'],
  },
}

// Force static generation for instant navigation
export const dynamic = 'force-static'

export default function ServicesPage() {
  return (
    <>
      <Header />
      <Services />
      <Stats />
      {/* <Testimonials /> */}
      <Footer />
    </>
  )
}