import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="footer-area" style={{ backgroundColor: '#1e3a8a', color: '#ffffff', paddingTop: '50px', paddingBottom: '30px' }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'center', textAlign: 'center' }}>
            <div className="col-lg-3 col-md-3">
              <div className="single-footer-widget" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                <div className="footer-logo text-center">
                  <div style={{ position: 'relative', display: 'inline-block', width: '200px', height: '200px' }}>
                    <div style={{
                      position: 'absolute',
                      top: '25px',
                      left: '25px',
                      width: '150px',
                      height: '150px',
                      backgroundColor: '#ffffff',
                      borderRadius: '50%',
                      zIndex: '1'
                    }}></div>
                    <Image
                      src="/images/logo.png"
                      alt="Sponge Pro Cleaning Services"
                      width={200}
                      height={200}
                      style={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '100%',
                        height: '100%',
                        zIndex: '2',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="single-footer-widget" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                {/* Quick Links Section */}
                <div style={{ marginBottom: '15px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 30px', justifyContent: 'center' }}>
                    <div>
                      <Link href="/" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</Link>
                    </div>
                    <div>
                      <a href="/about-us" style={{ color: '#ffffff', textDecoration: 'none' }}>About</a>
                    </div>
                    <div>
                      <a href="/services" style={{ color: '#ffffff', textDecoration: 'none' }}>Services</a>
                    </div>
                    <div>
                      <a href="/contact" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact</a>
                    </div>
                    <div>
                      <a href="/privacy-policy" style={{ color: '#ffffff', textDecoration: 'none' }}>Privacy</a>
                    </div>
                  </div>
                </div>

                {/* Copyright Section */}
                <div>
                  <p style={{ color: '#ffffff', textAlign: 'center', margin: 0, fontSize: '0.9rem' }}>
                    Copyright &copy; 2025 Sponge Pro Cleaning Services. All rights reserved.
                  </p>
                </div>

              </div>
            </div>
            <div className="col-lg-3 col-md-3">
              <div className="single-footer-widget" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%' }}>
                {/* Business Hours */}
                <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'flex-start' }}>
                  <i className="fa fa-clock-o" style={{ marginRight: '10px', color: '#ffffff', fontSize: '1.1rem', marginTop: '2px' }}></i>
                  <div style={{ color: '#ffffff', fontSize: '1rem' }}>
                    <div>Mon-Fri: 9am-5pm</div>
                    <div>Weekends: Flexible</div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <i className="fa fa-envelope" style={{ marginRight: '10px', color: '#ffffff', fontSize: '1.1rem' }}></i>
                  <a href="mailto:info@spongeprocleaningservices.com" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem' }}>
                    info@spongeprocleaningservices.com
                  </a>
                </div>

                {/* Phone */}
                <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                  <i className="fa fa-phone" style={{ marginRight: '10px', color: '#ffffff', fontSize: '1.1rem' }}></i>
                  <a href="tel:+12045551234" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem' }}>
                    (204) 555-1234
                  </a>
                </div>

                {/* Facebook */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fa fa-facebook" style={{ marginRight: '10px', color: '#ffffff', fontSize: '1.1rem' }}></i>
                  <a
                    href="https://www.facebook.com/profile.php?id=61559035156842"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#ffffff', textDecoration: 'none', fontSize: '1rem' }}
                  >
                    Follow us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer