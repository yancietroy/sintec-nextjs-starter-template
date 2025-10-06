import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import ApplicationForm from '@/components/ApplicationForm/ApplicationForm';

export const metadata = {
  title: 'Apply Now - Sponge Pro Cleaning Services',
  description: 'Join our team at Sponge Pro Cleaning Services. Apply for part-time cleaning positions in Winnipeg.',
}

export default function ApplyPage() {
  return (
    <>
      <Header />
      <ApplicationForm />
      <Footer />
    </>
  )
}
