import React from 'react'

type Props = {}

const JoinUs = (props: Props) => {
  return (
    <section className="join-us-area" style={{ backgroundColor: '#f8f9fa', padding: '80px 0' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center" data-aos="fade-up" suppressHydrationWarning>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '800', marginBottom: '20px', color: '#1a1a1a' }}>
              Join Us
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '30px' }}>
              We&apos;re currently expanding our team.
            </p>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#6c757d', marginBottom: '40px' }}>
              Interested in joining us? Learn more about our process, and flexible scheduling. Currently hiring for part-time positions.
            </p>
            <a href="/contact" className="btn btn-lg hero-btn-primary" style={{ padding: '14px 32px' }}>
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinUs
