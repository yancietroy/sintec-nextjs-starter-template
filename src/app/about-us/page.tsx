import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'About Us - Sponge Pro Cleaning Services',
  description: 'Learn more about Sponge Pro Cleaning Services and our professional cleaning solutions in Winnipeg, MB.',
}

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