import { Suspense } from 'react';
import Header from '@/components/Header/Header';
import HomeBanner from '@/components/HomeBanner/HomeBanner';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import Stats from '@/components/Stats/Stats';
import Portfolio from '@/components/Portfolio/Portfolio';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';
import Blog from '@/components/Blog/Blog';
import AsyncStatsCounter from '@/components/AsyncStatsCounter/AsyncStatsCounter';
import SuspenseWrapper from '@/components/SuspenseWrapper/SuspenseWrapper';

export const metadata = {
  title: 'Sintec Nextjs Starter Template',
  description: 'OnePro Nextjs Starter Template is a free template designed for business landing pages, which aligns with the growing trend towards one-page web designs.',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <HomeBanner />
      <About />
      <Services />

      {/* React 19 Async Server Component with Suspense */}
      <SuspenseWrapper fallback={
        <div style={{ padding: '60px 0', textAlign: 'center' }}>
          <p>Loading statistics...</p>
        </div>
      }>
        <AsyncStatsCounter />
      </SuspenseWrapper>

      <Stats />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Footer />
    </>
  )
}