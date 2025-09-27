import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';
import ContactUs from '@/components/ContactUs/ContactUs';

export const metadata = {
  title: 'Contact Us - Sintec',
  description: 'Get in touch with us for your business needs.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageHeader title="Contact Us" navTitle="Contact Us" />
      <ContactUs />
      <Footer />
    </>
  )
}