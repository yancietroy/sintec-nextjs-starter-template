import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ContactUs from '@/components/ContactUs/ContactUs';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Sponge Pro Cleaning Services for a free quote on affordable residential or commercial cleaning in Winnipeg.',
  alternates: {
    canonical: 'https://www.spongeprocleaningservices.com/contact',
  },
  openGraph: {
    title: 'Contact Us | Sponge Pro Cleaning Services',
    description: 'Get in touch with Sponge Pro Cleaning Services for a free quote on residential or commercial cleaning in Winnipeg.',
    url: 'https://www.spongeprocleaningservices.com/contact',
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
    title: 'Contact Us | Sponge Pro Cleaning Services',
    description: 'Get in touch with Sponge Pro Cleaning Services for a free quote on residential or commercial cleaning in Winnipeg.',
    images: ['https://www.spongeprocleaningservices.com/images/OPENGRAPH.png'],
  },
}

// Force static generation for instant navigation
export const dynamic = 'force-static'

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactUs />
      <Footer />
    </>
  )
}