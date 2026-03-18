import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'About Us',
  description: 'Learn more about Sponge Pro Cleaning Services and our professional cleaning solutions in Winnipeg, MB.',
  alternates: {
    canonical: 'https://www.spongeprocleaningservices.com/about-us',
  },
  openGraph: {
    title: 'About Us | Sponge Pro Cleaning Services',
    description: 'Learn more about Sponge Pro Cleaning Services and our professional cleaning solutions in Winnipeg, MB.',
    url: 'https://www.spongeprocleaningservices.com/about-us',
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
    title: 'About Us | Sponge Pro Cleaning Services',
    description: 'Learn more about Sponge Pro Cleaning Services and our professional cleaning solutions in Winnipeg, MB.',
    images: ['https://www.spongeprocleaningservices.com/images/OPENGRAPH.png'],
  },
}

// Force static generation for instant navigation
export const dynamic = 'force-static'

export default function AboutPage() {
  return (
    <>
      <Header />
      <About headingAs="h1" />
      <Services />
      {/* <Testimonials /> */}
      <Footer />
    </>
  )
}