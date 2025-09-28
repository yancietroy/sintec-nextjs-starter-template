import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ContactUs from '@/components/ContactUs/ContactUs';

export const metadata = {
  title: 'Contact Us - Sponge Pro Cleaning Services',
  description: 'Get in touch with Sponge Pro Cleaning Services for a free quote on residential or commercial cleaning in Winnipeg.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactUs />
      <Footer />
    </>
  )
}