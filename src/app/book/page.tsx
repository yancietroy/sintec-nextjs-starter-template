import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import CalendlyEmbed from '@/components/CalendlyEmbed/CalendlyEmbed';

export const metadata = {
  title: 'Book an Appointment | Sponge Pro Cleaning Services',
  description: 'Schedule your free consultation or book a cleaning appointment with Sponge Pro Cleaning Services in Winnipeg. Easy online booking available.',
  alternates: {
    canonical: 'https://www.spongeprocleaningservices.com/book',
  },
  openGraph: {
    title: 'Book an Appointment | Sponge Pro Cleaning Services',
    description: 'Schedule your free consultation or book a cleaning appointment with Sponge Pro Cleaning Services in Winnipeg.',
    url: 'https://www.spongeprocleaningservices.com/book',
  },
}

// Force static generation for instant navigation
export const dynamic = 'force-static'

export default function BookPage() {
  return (
    <>
      <Header />
      <section className="booking-section area-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="booking-header text-center mb-5">
                <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '800', marginBottom: '20px', color: '#1a1a1a' }}>
                  Book Your Appointment
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#6c757d', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto' }}>
                  Schedule your free consultation or book a cleaning service. Choose a time that works best for you.
                </p>
              </div>

              <div className="calendly-container" style={{
                backgroundColor: '#f8f9fa',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}>
                <CalendlyEmbed />
              </div>

              <div className="booking-info mt-5">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="info-card text-center p-4" style={{
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px',
                      height: '100%'
                    }}>
                      <i className="ti-time" style={{ fontSize: '2rem', color: '#1e3a8a', marginBottom: '10px' }}></i>
                      <h5 style={{ fontWeight: '600', marginBottom: '10px' }}>30-Minute Consultation</h5>
                      <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
                        Free consultation to discuss your cleaning needs
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="info-card text-center p-4" style={{
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px',
                      height: '100%'
                    }}>
                      <i className="ti-calendar" style={{ fontSize: '2rem', color: '#1e3a8a', marginBottom: '10px' }}></i>
                      <h5 style={{ fontWeight: '600', marginBottom: '10px' }}>Flexible Scheduling</h5>
                      <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
                        Choose from available times that fit your schedule
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="info-card text-center p-4" style={{
                      backgroundColor: '#f8f9fa',
                      borderRadius: '8px',
                      height: '100%'
                    }}>
                      <i className="ti-check-box" style={{ fontSize: '2rem', color: '#1e3a8a', marginBottom: '10px' }}></i>
                      <h5 style={{ fontWeight: '600', marginBottom: '10px' }}>Instant Confirmation</h5>
                      <p style={{ fontSize: '0.9rem', color: '#6c757d', margin: 0 }}>
                        Receive immediate confirmation and reminders
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="alternate-contact text-center mt-5 p-4" style={{
                backgroundColor: '#f0f7ff',
                borderRadius: '12px',
                border: '1px solid #d0e7ff'
              }}>
                <h4 style={{ fontWeight: '600', marginBottom: '15px', color: '#1e3a8a' }}>
                  Prefer to Contact Us Directly?
                </h4>
                <p style={{ fontSize: '1rem', color: '#6c757d', marginBottom: '20px' }}>
                  You can also reach us by phone or email
                </p>
                <div className="d-flex justify-content-center gap-4 flex-wrap">
                  <a href="tel:+12042028257" className="btn btn-outline-primary" style={{ padding: '10px 24px' }}>
                    <i className="ti-mobile me-2"></i>+1-204 202 8257
                  </a>
                  <a href="mailto:admin@spongeprocleaningservices.com" className="btn btn-outline-primary" style={{ padding: '10px 24px' }}>
                    <i className="ti-email me-2"></i>Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
