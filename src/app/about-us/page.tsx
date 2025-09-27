import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';

export const metadata = {
  title: 'About Us - Sponge Pro Cleaning Services',
  description: 'Learn more about Sponge Pro Cleaning Services and our professional cleaning solutions in Winnipeg, MB.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageHeader />
      <About />
      {/* <Testimonials /> */}
      <Footer />
    </>
  )
}