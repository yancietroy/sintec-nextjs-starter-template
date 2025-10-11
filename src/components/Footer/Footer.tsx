import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="footer-area" style={{ backgroundColor: '#1e3a8a', color: '#ffffff', paddingTop: '50px', paddingBottom: '30px' }}>
        <div className="container">
          <div className="row" style={{ alignItems: 'center', textAlign: 'center' }}>
            <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mb-lg-0 footer-logo-col">
              <div className="single-footer-widget" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', marginBottom: '10px' }}>
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
            <div className="col-lg-6 col-md-6 col-sm-12 mb-3 mb-lg-0">
              <div className="single-footer-widget" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', marginBottom: '10px' }}>
                {/* Quick Links Section */}
                <div style={{ marginBottom: '12px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', justifyContent: 'center' }}>
                    <div>
                      <Link href="/" className="footer-link" style={{ color: '#ffffff', textDecoration: 'none', padding: '8px 12px', display: 'inline-block' }}>Home</Link>
                    </div>
                    <div>
                      <a href="/about-us" className="footer-link" style={{ color: '#ffffff', textDecoration: 'none', padding: '8px 12px', display: 'inline-block' }}>About</a>
                    </div>
                    <div>
                      <a href="/services" className="footer-link" style={{ color: '#ffffff', textDecoration: 'none', padding: '8px 12px', display: 'inline-block' }}>Services</a>
                    </div>
                    <div>
                      <a href="/contact" className="footer-link" style={{ color: '#ffffff', textDecoration: 'none', padding: '8px 12px', display: 'inline-block' }}>Contact</a>
                    </div>
                    <div>
                      <a href="/privacy-policy" className="footer-link" style={{ color: '#ffffff', textDecoration: 'none', padding: '8px 12px', display: 'inline-block' }}>Privacy</a>
                    </div>
                  </div>
                </div>

                {/* Copyright Section */}
                <div>
                  <p style={{ color: '#ffffff', textAlign: 'center', margin: 0, fontSize: '0.85rem', lineHeight: '1.4' }}>
                    Copyright &copy; 2025 Sponge Pro Cleaning Services. All rights reserved.
                  </p>
                </div>

              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 footer-contact-col">
              <div className="single-footer-widget" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', marginBottom: '10px' }}>
                {/* Business Hours */}
                <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                  <i className="fa fa-clock-o" style={{ marginRight: '8px', color: '#ffffff', fontSize: '1rem', flexShrink: 0 }}></i>
                  <div style={{ color: '#ffffff', fontSize: '0.9rem', lineHeight: '1.4' }}>
                    <div>Mon-Fri: 9am-5pm</div>
                    <div>Weekends: Flexible</div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '44px', flexWrap: 'wrap' }}>
                  <i className="fa fa-envelope" style={{ marginRight: '8px', color: '#ffffff', fontSize: '1rem' }}></i>
                  <a href="mailto:admin@spongeprocleaningservices.com" className="footer-link" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.9rem', padding: '10px 12px', wordBreak: 'break-word', lineHeight: '1.4' }}>
                    admin@spongeprocleaningservices.com
                  </a>
                </div>

                {/* Phone */}
                <div style={{ marginBottom: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '44px' }}>
                  <i className="fa fa-phone" style={{ marginRight: '8px', color: '#ffffff', fontSize: '1rem' }}></i>
                  <a href="tel:+12042028257" className="footer-link" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.95rem', padding: '10px 12px' }}>
                    +1-204 202 8257
                  </a>
                </div>

                {/* Facebook */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', minHeight: '44px' }}>
                  <i className="fa fa-facebook" style={{ marginRight: '8px', color: '#ffffff', fontSize: '1rem' }}></i>
                  <a
                    href="https://www.facebook.com/profile.php?id=61559035156842"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    style={{ color: '#ffffff', textDecoration: 'none', fontSize: '0.95rem', padding: '10px 12px' }}
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