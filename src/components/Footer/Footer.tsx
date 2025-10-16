import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook } from 'react-icons/fa'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="footer-area" style={{ backgroundColor: '#1e3a8a', color: '#ffffff', paddingTop: 'clamp(30px, 6vw, 60px)', paddingBottom: 'clamp(15px, 3vw, 20px)' }}>
      <div className="container">
        <div className="row" style={{ marginBottom: 'clamp(10px, 3vw, 30px)' }}>
          {/* Column 1: Company Info */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mb-md-4 footer-logo-col text-center text-md-start">
            <div className="footer-logo mb-3">
              <div style={{ position: 'relative', display: 'inline-block', width: '120px', height: '120px' }}>
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  width: '100px',
                  height: '100px',
                  backgroundColor: '#ffffff',
                  borderRadius: '50%',
                  zIndex: '1'
                }}></div>
                <Image
                  src="/images/logo.png"
                  alt="Sponge Pro Cleaning Services"
                  width={120}
                  height={120}
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
            <h5 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: '600', marginBottom: 'clamp(8px, 2vw, 12px)', color: '#ffffff' }}>
              Sponge Pro Cleaning Services
            </h5>
            <p style={{ fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', lineHeight: '1.6', color: '#e0e7ff', marginBottom: '0' }}>
              Professional cleaning services for homes and businesses in Winnipeg, Manitoba.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-lg-2 col-md-6 col-sm-12 mb-3 mb-md-4 text-center text-md-start">
            <h5 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: '600', marginTop: 'clamp(20px, 4vw, 0px)', marginBottom: 'clamp(12px, 3vw, 20px)', color: '#ffffff' }}>
              Quick Links
            </h5>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 16px', justifyContent: 'center' }} className="justify-content-md-start">
              <Link href="/" className="footer-link" style={{ color: '#e0e7ff', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', transition: 'color 0.3s', padding: '8px 0' }}>
                Home
              </Link>
              <a href="/about-us" className="footer-link" style={{ color: '#e0e7ff', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', transition: 'color 0.3s', padding: '8px 0' }}>
                About Us
              </a>
              <a href="/services" className="footer-link" style={{ color: '#e0e7ff', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', transition: 'color 0.3s', padding: '8px 0' }}>
                Services
              </a>
              <a href="/contact" className="footer-link" style={{ color: '#e0e7ff', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', transition: 'color 0.3s', padding: '8px 0' }}>
                Contact
              </a>
              <a href="/privacy-policy" className="footer-link" style={{ color: '#e0e7ff', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', transition: 'color 0.3s', padding: '8px 0' }}>
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Column 3: Contact Information */}
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3 mb-md-4 footer-contact-col text-center text-md-start">
            <h5 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: '600', marginTop: 'clamp(20px, 4vw, 0px)', marginBottom: 'clamp(12px, 3vw, 20px)', color: '#ffffff' }}>
              Contact Us
            </h5>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 20px', justifyContent: 'center' }} className="justify-content-md-start text-start">
              {/* Phone Numbers */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <i className="ti-mobile" style={{ marginTop: '4px', color: '#e0e7ff', fontSize: '1rem' }}></i>
                <div>
                  <a href="tel:+12042028257" className="footer-link" style={{ color: '#e0e7ff', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', display: 'block', marginBottom: '4px', whiteSpace: 'nowrap' }}>
                    +1-204 202 8257
                  </a>
                  <a href="tel:+12042028450" className="footer-link" style={{ color: '#e0e7ff', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', display: 'block', whiteSpace: 'nowrap' }}>
                    +1-204 202 8450
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <i className="ti-email" style={{ marginTop: '4px', color: '#e0e7ff', fontSize: '1rem' }}></i>
                <a href="mailto:admin@spongeprocleaningservices.com" className="footer-link" style={{ color: '#e0e7ff', textDecoration: 'none', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', wordBreak: 'break-word', maxWidth: '200px' }}>
                  admin@spongeprocleaningservices.com
                </a>
              </div>

              {/* Address */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <i className="ti-location-pin" style={{ marginTop: '4px', color: '#e0e7ff', fontSize: '1rem' }}></i>
                <div style={{ color: '#e0e7ff', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', lineHeight: '1.5' }}>
                  Winnipeg, MB R3G 2H5, Canada
                </div>
              </div>

              {/* Business Hours */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <i className="ti-time" style={{ marginTop: '4px', color: '#e0e7ff', fontSize: '1rem' }}></i>
                <div style={{ color: '#e0e7ff', fontSize: 'clamp(0.85rem, 2vw, 0.9rem)', lineHeight: '1.5' }}>
                  Mon-Fri: 9am-5pm | Weekends: Flexible
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Social & CTA */}
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mb-md-4 text-center text-md-start">
            <h5 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', fontWeight: '600', marginTop: 'clamp(20px, 4vw, 0px)', marginBottom: 'clamp(12px, 3vw, 20px)', color: '#ffffff' }}>
              Connect With Us
            </h5>

            {/* CTA Button */}
            <a
              href="/book"
              className="btn btn-light footer-book-btn w-100 w-md-auto"
              style={{
                display: 'inline-block',
                padding: '14px 30px',
                marginBottom: 'clamp(12px, 3vw, 20px)',
                backgroundColor: '#ffffff',
                color: '#1e3a8a',
                fontWeight: '600',
                fontSize: 'clamp(0.9rem, 2vw, 0.95rem)',
                borderRadius: '6px',
                textDecoration: 'none',
                transition: 'all 0.3s',
                border: '2px solid #ffffff',
                minHeight: '48px'
              }}
            >
              Book Now
            </a>

            {/* Social Media */}
            <div style={{ marginBottom: 'clamp(12px, 3vw, 20px)' }}>
              <a
                href="https://www.facebook.com/profile.php?id=61559035156842"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link d-inline-flex"
                style={{
                  color: '#e0e7ff',
                  textDecoration: 'none',
                  fontSize: 'clamp(0.85rem, 2vw, 0.9rem)',
                  alignItems: 'center',
                  gap: '8px',
                  minHeight: '44px'
                }}
              >
                <FaFacebook style={{ fontSize: '1.2rem', color: '#ffffff' }} />
                Follow us on Facebook
              </a>
            </div>

            {/* BBB Seal */}
            <div style={{ marginBottom: 'clamp(10px, 2.5vw, 20px)' }}>
              <a
                href="https://www.bbb.org/ca/mb/winnipeg/profile/cleaning-services/sponge-pro-cleaning-services-0057-1000007944/#sealclick"
                target="_blank"
                rel="nofollow"
              >
                <img
                  src="https://seal-manitoba.bbb.org/seals/blue-seal-250-52-whitetxt-bbb-1000007944.png"
                  style={{ border: 0, maxWidth: '100%', height: 'auto' }}
                  alt="Sponge Pro Cleaning Services BBB Business Review"
                />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="row" style={{ borderTop: '1px solid rgba(224, 231, 255, 0.2)', paddingTop: 'clamp(12px, 3vw, 20px)', marginTop: 'clamp(10px, 3vw, 20px)' }}>
          <div className="col-12 text-center">
            <p style={{ color: '#e0e7ff', margin: 0, fontSize: 'clamp(0.75rem, 1.8vw, 0.85rem)' }}>
              Copyright &copy; 2025 Sponge Pro Cleaning Services. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer