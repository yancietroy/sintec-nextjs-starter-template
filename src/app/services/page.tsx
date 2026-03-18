import Header from '@/components/Header/Header';
import Services from '@/components/Services/Services';
import Stats from '@/components/Stats/Stats';
import Testimonials from '@/components/Testimonials/Testimonials';
import Footer from '@/components/Footer/Footer';

export const metadata = {
  title: 'Our Services',
  description: 'Discover our comprehensive range of affordable, professional cleaning services for residential and commercial properties in Winnipeg.',
  alternates: {
    canonical: 'https://www.spongeprocleaningservices.com/services',
  },
  openGraph: {
    title: 'Our Services | Sponge Pro Cleaning Services',
    description: 'Discover our comprehensive range of professional cleaning services for residential and commercial properties in Winnipeg.',
    url: 'https://www.spongeprocleaningservices.com/services',
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
    title: 'Our Services | Sponge Pro Cleaning Services',
    description: 'Discover our comprehensive range of professional cleaning services for residential and commercial properties in Winnipeg.',
    images: ['https://www.spongeprocleaningservices.com/images/OPENGRAPH.png'],
  },
}

// Force static generation for instant navigation
export const dynamic = 'force-static'

export default function ServicesPage() {
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        position: 1,
        name: 'Standard Cleaning',
        description: 'Regular cleaning services including dusting, vacuuming, mopping, bathroom and kitchen cleaning, and surface sanitization.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Sponge Pro Cleaning Services',
        },
        areaServed: { '@type': 'City', name: 'Winnipeg' },
        serviceType: 'Residential Cleaning',
      },
      {
        '@type': 'Service',
        position: 2,
        name: 'Move-In/Move-Out Cleaning',
        description: 'Specialized cleaning to ensure homes are spotless and ready for new occupants or in pristine condition for the next tenant.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Sponge Pro Cleaning Services',
        },
        areaServed: { '@type': 'City', name: 'Winnipeg' },
        serviceType: 'Move-In/Move-Out Cleaning',
      },
      {
        '@type': 'Service',
        position: 3,
        name: 'Custom Cleaning Plans',
        description: 'Tailored cleaning plans with customized frequency and areas of focus, adapted to your lifestyle and preferences.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Sponge Pro Cleaning Services',
        },
        areaServed: { '@type': 'City', name: 'Winnipeg' },
        serviceType: 'Custom Cleaning',
      },
      {
        '@type': 'Service',
        position: 4,
        name: 'Junk Removal',
        description: 'Fast and reliable junk removal for homes and offices — old furniture, appliances, yard debris, and other unwanted items.',
        provider: {
          '@type': 'LocalBusiness',
          name: 'Sponge Pro Cleaning Services',
        },
        areaServed: { '@type': 'City', name: 'Winnipeg' },
        serviceType: 'Junk Removal',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <Header />
      <Services headingAs="h1" />
      <Stats />
      {/* <Testimonials /> */}
      <Footer />
    </>
  )
}