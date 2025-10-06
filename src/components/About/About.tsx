import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <section className="about-area area-padding" style={{ backgroundColor: '#1e3a8a', display: 'flex', alignItems: 'center', minHeight: '400px' }}>
        <div className="container" style={{ margin: '0 auto' }}>
          <div className="row justify-content-center" style={{ margin: '0 auto' }}>
            <div className="col-lg-8" data-aos="fade-up" suppressHydrationWarning style={{ margin: '0 auto' }}>
              <div className="about-content" style={{ textAlign: 'center', margin: '0 auto', paddingLeft: '0' }}>
                <h2 style={{ color: '#fff', fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '800', marginBottom: '30px', lineHeight: '1.3' }}>
                  Premier Cleaning Solutions for Your Home & Business
                </h2>
                <p style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.8' }}>
                  We are a premier cleaning company in Winnipeg, dedicated to delivering exceptional service with meticulous attention to detail. Our experienced team transforms homes and offices into spotless environments, giving you more time to focus on what matters most.
                </p>
                <p style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                  With flexible scheduling and customized cleaning plans, we adapt to your lifestyle and specific needs. Trust us to maintain the highest standards of cleanliness and hygiene in your space.
                </p>
                <a className="btn btn-lg" href="/services" style={{ padding: '14px 32px', backgroundColor: 'white', borderColor: 'white', color: '#1e3a8a', border: '2px solid white' }}>
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