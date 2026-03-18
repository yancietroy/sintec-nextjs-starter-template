import Image from 'next/image'
import React from 'react'

type Props = {
  headingAs?: 'h1' | 'h2' | 'h3'
}

const Services = ({ headingAs: Tag = 'h3' }: Props) => {
  return (
    <section className="service-area area-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="area-heading" data-aos="fade-up" suppressHydrationWarning>
            <Tag className="line" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '20px' }}>Our Cleaning Services</Tag>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6' }}>Professional cleaning solutions tailored to meet your specific needs and schedule.</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-6" data-aos="fade-up" data-aos-delay="100" suppressHydrationWarning>
              <div className="single-service" style={{ border: '1px solid #e5e7eb', borderRadius: '16px' }}>
                <div className="service-icon">
                  <Image
                    width={120}
                    height={120}
                    src="/images/standard-cleaning-icon.svg"
                    alt="Standard Cleaning"
                    loading="lazy"
                  />
                </div>
                <div className="service-content">
                  <h5>Standard Cleaning</h5>
                  <p>
                    Regular cleaning services including dusting, vacuuming, mopping,
                    bathroom and kitchen cleaning, and surface sanitization to keep
                    your home consistently clean and healthy.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-6" data-aos="fade-up" data-aos-delay="200" suppressHydrationWarning>
              <div className="single-service" style={{ border: '1px solid #e5e7eb', borderRadius: '16px' }}>
                <div className="service-icon">
                  <Image
                    width={120}
                    height={120}
                    src="/images/move-cleaning-icon.svg"
                    alt="Move-In/Move-Out Cleaning"
                    loading="lazy"
                  />
                </div>
                <div className="service-content">
                  <h5>Move-In/Move-Out Cleaning</h5>
                  <p>
                    Specialized cleaning services to ensure homes are spotless and
                    ready for new occupants or in pristine condition for the next
                    tenant. Perfect for transitions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-6" data-aos="fade-up" data-aos-delay="300" suppressHydrationWarning>
              <div className="single-service" style={{ border: '1px solid #e5e7eb', borderRadius: '16px' }}>
                <div className="service-icon">
                  <Image
                    width={120}
                    height={120}
                    src="/images/custom-cleaning-icon.svg"
                    alt="Custom Cleaning Plans"
                    loading="lazy"
                  />
                </div>
                <div className="service-content">
                  <h5>Custom Cleaning Plans</h5>
                  <p>
                    Tailored cleaning plans to meet your specific needs, including
                    customized frequency and areas of focus. We adapt our services
                    to fit your lifestyle and preferences.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-6" data-aos="fade-up" data-aos-delay="400" suppressHydrationWarning>
              <div className="single-service" style={{ border: '1px solid #e5e7eb', borderRadius: '16px' }}>
                <div className="service-icon">
                  <Image
                    width={120}
                    height={120}
                    src="/images/junk-removal-icon.svg"
                    alt="Junk Removal"
                    loading="lazy"
                  />
                </div>
                <div className="service-content">
                  <h5>Junk Removal</h5>
                  <p>
                    Fast and reliable junk removal services for homes and offices.
                    We haul away old furniture, appliances, yard debris, and other
                    unwanted items so you don&apos;t have to.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services