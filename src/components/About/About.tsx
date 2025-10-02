import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <section className="about-area area-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block" data-aos="fade-right" suppressHydrationWarning>
              <div className="about-img">
                <Image width={555} height={485} src="/images/vector-1752217168822-7ea87f87769e.avif" alt="Professional cleaning illustration" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left" suppressHydrationWarning>
              <div className="about-content">
                <h4>
                  PREMIER HOME CLEANING <br />
                  COMPANY DEDICATED TO
                  <br />
                  TOP-QUALITY SOLUTIONS.
                </h4>
                <p>
                  We are a premier cleaning company in Winnipeg, dedicated to delivering exceptional service with meticulous attention to detail. Our experienced team transforms homes and offices into spotless environments, giving you more time to focus on what matters most.
                </p>
                <p>
                  With flexible scheduling and customized cleaning plans, we adapt to your lifestyle and specific needs. Trust us to maintain the highest standards of cleanliness and hygiene in your space.
                </p>
                <a className="main_btn" href="/services">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About