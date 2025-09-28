import Header from '@/components/Header/Header';
import Services from '@/components/Services/Services';
import Stats from '@/components/Stats/Stats';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Our Services - Sponge Pro Cleaning Services',
  description: 'Discover our comprehensive range of professional cleaning services for residential and commercial properties in Winnipeg.',
}

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