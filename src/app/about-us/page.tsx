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
    url: 'https://www.spongeprocleaningservices.com/about-us',
  },
}

// Force static generation for instant navigation
export const dynamic = 'force-static'

export default function AboutPage() {
  return (
    <>
      <Header />
      <About />
      <Services />
      {/* <Testimonials /> */}
      <Footer />
    </>
  )
}