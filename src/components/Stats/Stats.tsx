import Image from 'next/image'
import React from 'react'

type Props = {}

const Stats = (props: Props) => {
  return (
    <section className="number-area" id="number-section" style={{ backgroundColor: '#1e3a8a', padding: '80px 0' }}>
    <div className="container">
      <div className="row justify-content-center align-items-center" style={{ gap: '60px 0' }}>
        <div className="col-md-5 col-lg-5" data-aos="fade-right" suppressHydrationWarning>
          <div className="number-img" style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '555/740' }}>
            <Image
              width={555}
              height={740}
              src="/images/e3827998-2a41-490f-b25c-98bd4a176d3e.jpg"
              alt="Sponge Pro Cleaning Services"
              style={{ borderRadius: '20px', width: '100%', height: 'auto', objectFit: 'cover' }}
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-md-7 col-lg-6" data-aos="fade-left" suppressHydrationWarning>
          <div className="number-content" style={{ padding: '0 clamp(0px, 3vw, 60px)' }}>
            <h4 style={{ color: '#fff', fontSize: 'clamp(1.75rem, 3.5vw, 2rem)', fontWeight: '800', marginBottom: '30px', lineHeight: '1.3' }}>
              Providing Personalized And <br />
              High Quality Service
            </h4>
            <p style={{ color: '#fff', fontSize: '1.1rem', lineHeight: '1.8' }}>
              At Sponge Pro Cleaning Services, we understand that every home and office is unique. That&apos;s why we provide personalized cleaning solutions tailored to your specific needs, ensuring exceptional results every time.
            </p>
            {/* Stats will be added when client provides actual data
            <div className="number-wrapper">
              <div className="single-number">
                <h5>
                  <span className="counter">15</span>K+
                </h5>
                <p>happy customer</p>
              </div>
              <div className="single-number">
                <h5>
                  <span className="counter">10</span>K+
                </h5>
                <p>Project Done</p>
              </div>
              <div className="single-number">
                <h5>
                  <span className="counter">9</span>/
                  <span className="counter">10</span>
                </h5>
                <p>Average Rating</p>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Stats