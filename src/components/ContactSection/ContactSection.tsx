import React from 'react'

type Props = {}

const ContactSection = (props: Props) => {
  return (
    <section className="contact-area area-padding" style={{ backgroundColor: '#f0f8ff' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="section-title text-center">
              <h2 style={{ color: '#000000' }}>Get In Touch</h2>
              <p>
                Ready to experience professional cleaning? Contact us today for a free quote
                and let us take care of your cleaning needs.
              </p>
            </div>
            <div className="contact-info">
              <div className="single-contact-info mb-4">
                <div className="contact-icon">
                  <i className="ti-location-pin"></i>
                </div>
                <div className="contact-details">
                  <h5>Location</h5>
                  <p>Winnipeg, MB R3G 2H5, Canada</p>
                </div>
              </div>
              <div className="single-contact-info mb-4">
                <div className="contact-icon">
                  <i className="ti-mobile"></i>
                </div>
                <div className="contact-details">
                  <h5>Phone</h5>
                  <p><a href="tel:+12042028257" style={{ color: '#6c757d' }}>+1-204 202 8257</a></p>
                </div>
              </div>
              <div className="single-contact-info mb-4">
                <div className="contact-icon">
                  <i className="ti-email"></i>
                </div>
                <div className="contact-details">
                  <h5>Email</h5>
                  <p><a href="mailto:admin@spongeprocleaningservices.com" style={{ color: '#6c757d' }}>admin@spongeprocleaningservices.com</a></p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left">
            <div className="business-hours-card">
              <h3 className="mb-4">Business Hours</h3>
              <div className="hours-list">
                <div className="single-hour d-flex justify-content-between align-items-center">
                  <span className="day">Monday - Friday</span>
                  <span className="time">9:00 AM - 5:00 PM</span>
                </div>
                <div className="single-hour d-flex justify-content-between align-items-center">
                  <span className="day">Saturday - Sunday</span>
                  <span className="time">Flexible Scheduling</span>
                </div>
              </div>
              <div className="hours-note mt-4">
                <p>
                  <i className="ti-info-alt"></i>
                  We offer flexible scheduling options on weekends to accommodate your busy lifestyle.
                </p>
              </div>
              <div className="contact-cta mt-4">
                <a href="/contact" className="main_btn">Contact Us Today</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection