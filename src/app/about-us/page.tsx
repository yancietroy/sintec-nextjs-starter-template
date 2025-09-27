import Header from '@/components/Header/Header';
import About from '@/components/About/About';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';

export const metadata = {
  title: 'About Us - Sintec',
  description: 'Learn more about Sintec and our professional business services.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <PageHeader />
      <About />
      <Testimonials />
      <Footer />
    </>
  )
}