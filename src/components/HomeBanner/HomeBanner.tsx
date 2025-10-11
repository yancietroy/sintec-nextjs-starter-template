import React from "react";
import Image from "next/image";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="home_banner_area" style={{ paddingTop: '-10px', paddingBottom: '80px', minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#ffffff' }}>
      <div className="container">
        <div className="row align-items-center" style={{ gap: '40px 0' }}>
          <div className="col-lg-6">
            <div className="banner_content" style={{ paddingRight: 'clamp(0px, 3vw, 40px)' }}>
              <h1 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '800',
                marginBottom: '20px',
                lineHeight: '1.2',
                color: '#1a1a1a',
                letterSpacing: '-0.02em'
              }}>
                Professional Cleaning Services in Winnipeg
              </h1>
              <p style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                color: '#1a1a1a',
                margin: '0 0 16px',
                lineHeight: '1.6',
                fontWeight: '600',
                fontStyle: 'italic'
              }}>
                We don&apos;t cut corners, we clean them!
              </p>
              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: '#6c757d',
                margin: '0 0 32px',
                lineHeight: '1.7',
                fontWeight: '400'
              }}>
                Trusted by homes and businesses across Winnipeg for residential and commercial cleaning services that exceed expectations.
              </p>
              <div className="hero-buttons" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a
                  className="btn btn-lg hero-btn-primary"
                  href="/contact"
                  style={{ padding: '14px 32px' }}
                >
                  Get Free Quote
                </a>
                <a
                  className="btn btn-lg hero-btn-outline"
                  href="/services"
                  style={{ padding: '14px 32px' }}
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(300px, 60vw, 500px)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)'
            }}>
              <Image
                src="/images/volodymyr-hryshchenko-WU9dA3C4R28-unsplash.jpg"
                alt="Professional Cleaning Services"
                fill
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
