import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ApplicationForm from '@/components/ApplicationForm/ApplicationForm';

export const metadata = {
  title: 'Apply Now',
  description: 'Join our team at Sponge Pro Cleaning Services. Apply for part-time cleaning positions in Winnipeg.',
  alternates: {
    canonical: 'https://www.spongeprocleaningservices.com/apply',
  },
  openGraph: {
    title: 'Apply Now | Sponge Pro Cleaning Services',
    description: 'Join our team at Sponge Pro Cleaning Services. Apply for part-time cleaning positions in Winnipeg.',
    url: 'https://www.spongeprocleaningservices.com/apply',
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
    title: 'Apply Now | Sponge Pro Cleaning Services',
    description: 'Join our team at Sponge Pro Cleaning Services. Apply for part-time cleaning positions in Winnipeg.',
    images: ['https://www.spongeprocleaningservices.com/images/OPENGRAPH.png'],
  },
}

// Force static generation for instant navigation
export const dynamic = 'force-static'

export default function ApplyPage() {
  return (
    <>
      <Header />
      <ApplicationForm />
      <Footer />
    </>
  )
}
