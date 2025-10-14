'use client'

import React from 'react';

type Props = {}

const FAQ = (props: Props) => {
  return (
    <section className="faq-section" style={{
      background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 0'
    }}>
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute',
        top: '-50px',
        right: '-50px',
        width: '200px',
        height: '200px',
        borderRadius: '50%',
        background: 'rgba(30, 58, 138, 0.05)',
        filter: 'blur(40px)'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-80px',
        left: '-80px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(30, 58, 138, 0.05)',
        filter: 'blur(60px)'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="area-heading text-center mb-5" data-aos="fade-up" suppressHydrationWarning>
              <div style={{
                display: 'inline-block',
                padding: '8px 20px',
                backgroundColor: 'rgba(30, 58, 138, 0.1)',
                borderRadius: '50px',
                marginBottom: '20px'
              }}>
                <span style={{
                  color: '#1e3a8a',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase'
                }}>
                  FAQ
                </span>
              </div>
              <h3 style={{
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                marginBottom: '20px',
                color: '#1a1a1a',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Frequently Asked Questions
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#6c757d', maxWidth: '600px', margin: '0 auto' }}>
                Got questions? We&apos;ve got answers. Learn more about our cleaning services.
              </p>
            </div>

            <div className="accordion" id="faqAccordion" data-aos="fade-up" data-aos-delay="100" suppressHydrationWarning>
              <div className="accordion-item" style={{
                marginBottom: '20px',
                border: 'none',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffff'
              }}>
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      backgroundColor: '#ffffff',
                      border: 'none',
                      padding: '20px 24px',
                      color: '#1e3a8a',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none',
                      borderBottom: 'none'
                    }}
                  >
                    <span style={{ marginRight: '12px', fontSize: '1.3rem' }}>📍</span>
                    What areas do you serve in Winnipeg?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body" style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: '#6c757d',
                    padding: '20px 24px 24px 24px',
                    backgroundColor: '#ffffff'
                  }}>
                    We serve all areas of Winnipeg, MB and surrounding communities. Whether you&apos;re in the downtown core, suburbs, or nearby neighborhoods, we&apos;re happy to provide our cleaning services to your location.
                  </div>
                </div>
              </div>

              <div className="accordion-item" style={{
                marginBottom: '20px',
                border: 'none',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffff'
              }}>
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      backgroundColor: '#ffffff',
                      border: 'none',
                      padding: '20px 24px',
                      color: '#1a1a1a',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none',
                      borderBottom: 'none'
                    }}
                  >
                    <span style={{ marginRight: '12px', fontSize: '1.3rem' }}>🧹</span>
                    Do I need to provide cleaning supplies?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body" style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: '#6c757d',
                    padding: '20px 24px 24px 24px',
                    backgroundColor: '#ffffff'
                  }}>
                    No, you don&apos;t need to provide anything! We bring all our own professional-grade cleaning supplies and equipment. However, if you prefer we use specific products or have special requests, we&apos;re happy to accommodate.
                  </div>
                </div>
              </div>

              <div className="accordion-item" style={{
                marginBottom: '20px',
                border: 'none',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffff'
              }}>
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      backgroundColor: '#ffffff',
                      border: 'none',
                      padding: '20px 24px',
                      color: '#1a1a1a',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none',
                      borderBottom: 'none'
                    }}
                  >
                    <span style={{ marginRight: '12px', fontSize: '1.3rem' }}>💰</span>
                    How do I get a quote for cleaning services?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body" style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: '#6c757d',
                    padding: '20px 24px 24px 24px',
                    backgroundColor: '#ffffff'
                  }}>
                    Getting a quote is easy! You can fill out our contact form, give us a call at <a href="tel:+12042028257" style={{ color: '#1e3a8a', fontWeight: '600', textDecoration: 'none', borderBottom: '2px solid #1e3a8a' }}>+1-204 202 8257</a>, or book a free consultation online. We&apos;ll discuss your specific needs and provide a customized quote.
                  </div>
                </div>
              </div>

              <div className="accordion-item" style={{
                marginBottom: '20px',
                border: 'none',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffff'
              }}>
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                    style={{
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      backgroundColor: '#ffffff',
                      border: 'none',
                      padding: '20px 24px',
                      color: '#1a1a1a',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none',
                      borderBottom: 'none'
                    }}
                  >
                    <span style={{ marginRight: '12px', fontSize: '1.3rem' }}>✨</span>
                    What types of cleaning services do you offer?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body" style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: '#6c757d',
                    padding: '20px 24px 24px 24px',
                    backgroundColor: '#ffffff'
                  }}>
                    We offer a range of services including standard residential cleaning, move-in/move-out cleaning, commercial/office cleaning, and custom cleaning plans tailored to your specific needs. Whether you need one-time deep cleaning or regular maintenance, we&apos;ve got you covered.
                  </div>
                </div>
              </div>

              <div className="accordion-item" style={{
                marginBottom: '20px',
                border: 'none',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffff'
              }}>
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                    style={{
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      backgroundColor: '#ffffff',
                      border: 'none',
                      padding: '20px 24px',
                      color: '#1a1a1a',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none',
                      borderBottom: 'none'
                    }}
                  >
                    <span style={{ marginRight: '12px', fontSize: '1.3rem' }}>📅</span>
                    How flexible is your scheduling?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body" style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: '#6c757d',
                    padding: '20px 24px 24px 24px',
                    backgroundColor: '#ffffff'
                  }}>
                    Very flexible! We understand that life is busy, so we offer scheduling options that work around your lifestyle. We&apos;re available Monday through Friday (9 AM - 5 PM) with flexible scheduling on weekends. We can arrange weekly, bi-weekly, monthly cleanings, or one-time services.
                  </div>
                </div>
              </div>

              <div className="accordion-item" style={{
                marginBottom: '20px',
                border: 'none',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffff'
              }}>
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                    style={{
                      fontWeight: '600',
                      fontSize: '1.1rem',
                      backgroundColor: '#ffffff',
                      border: 'none',
                      padding: '20px 24px',
                      color: '#1a1a1a',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease',
                      boxShadow: 'none',
                      borderBottom: 'none'
                    }}
                  >
                    <span style={{ marginRight: '12px', fontSize: '1.3rem' }}>🏠</span>
                    Do I need to be home during the cleaning?
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body" style={{
                    fontSize: '1rem',
                    lineHeight: '1.7',
                    color: '#6c757d',
                    padding: '20px 24px 24px 24px',
                    backgroundColor: '#ffffff'
                  }}>
                    It&apos;s entirely up to you! Many of our clients prefer to be away while we clean, while others like to be present. We&apos;re flexible and will work with whatever makes you most comfortable. You can provide us with access instructions that work best for your schedule.
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4" data-aos="fade-up" data-aos-delay="200" suppressHydrationWarning>
              <p style={{ fontSize: '1rem', color: '#1e3a8a', marginBottom: '12px', fontWeight: '500' }}>
                Still have questions? <a href="/contact" style={{ color: '#1e3a8a', fontWeight: '700', textDecoration: 'underline' }}>Contact us</a> or <a href="/book" style={{ color: '#1e3a8a', fontWeight: '700', textDecoration: 'underline' }}>book a consultation</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
