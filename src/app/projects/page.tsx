import Header from '@/components/Header/Header';
import Portfolio from '@/components/Portfolio/Portfolio';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import PageHeader from '@/components/PageHeader/PageHeader';

export const metadata = {
  title: 'Our Projects - Sintec',
  description: 'View our portfolio of successful projects and case studies.',
}

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <PageHeader title="Our Projects" navTitle="Projects" />
      <Portfolio showHeading={false} />
      <Testimonials />
      <Footer />
    </>
  )
}