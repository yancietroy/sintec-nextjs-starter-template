import Image from 'next/image'
import React from 'react'

type Props = {}

const Services = (props: Props) => {
  return (
    <section className="service-area area-padding">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">Our Cleaning Services</h3>
            <p>Professional cleaning solutions tailored to meet your specific needs and schedule.</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={92} height={92} src="/images/i1.png.webp" alt="Standard Cleaning" />

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

            <div className="col-md-6 col-xl-4">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={83} height={83} src="/images/i2.png.webp" alt="Move-In/Move-Out Cleaning" />
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

            <div className="col-md-6 col-xl-4">
              <div className="single-service">
                <div className="service-icon">
                  <Image width={53} height={92} src="/images/i3.png.webp" alt="Custom Cleaning Plans" />
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
          </div>
        </div>
      </section>
  )
}

export default Services