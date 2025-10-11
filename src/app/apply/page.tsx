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
    url: 'https://www.spongeprocleaningservices.com/apply',
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
