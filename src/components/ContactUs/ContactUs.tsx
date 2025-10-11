'use client'

import React, { useState, useRef } from "react";
import { FaHome, FaTabletAlt, FaEnvelope, FaBriefcase, FaInfoCircle } from 'react-icons/fa';

type Props = {};

const ContactUs = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "35f51f8d-ae9f-46dd-9456-041051c25016");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you for contacting us! We've received your message and will get back to you as soon as possible.");
      formRef.current?.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="contact-section area-padding">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-4">
            <h2 className="contact-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '20px' }}>Contact Us</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#6c757d', maxWidth: '700px', margin: '0 auto' }}>
              Send us a message for quotes or inquiries.
            </p>
          </div>
          <div className="col-lg-8">
            <form
              ref={formRef}
              className="form-contact contact_form"
              onSubmit={onSubmit}
              id="contactForm"
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <input
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea
                      className="form-control w-100"
                      name="message"
                      id="message"
                      cols={30}
                      rows={9}
                      placeholder="Enter Message"
                    ></textarea>
                    <small style={{ display: 'block', marginTop: '8px', color: '#888', fontStyle: 'italic' }}>
                      We take customer privacy seriously and do not sell or give out any customer information.
                    </small>
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="button button-contactForm">
                  Send Message
                </button>
              </div>
            </form>

            {result && (
              <div className="mt-3">
                <div className={`alert ${result.includes("Thank you") ? 'alert-success' : 'alert-info'} alert-dismissible fade show`} role="alert">
                  {result}
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => setResult("")}
                    aria-label="Close"
                  ></button>
                </div>
              </div>
            )}
          </div>
          <div className="col-lg-4">
            <div className="media contact-info">
              <span className="contact-info__icon">
                <FaHome />
              </span>
              <div className="media-body">
                <h3>Winnipeg, Manitoba</h3>
                <p>R3G 2H5, Canada</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <FaTabletAlt />
              </span>
              <div className="media-body">
                <h3>
                  <a href="tel:+12042028257">+1-204 202 8257</a>
                </h3>
                <p>Call us for immediate assistance</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <FaEnvelope />
              </span>
              <div className="media-body">
                <h3>
                  <a href="mailto:admin@spongeprocleaningservices.com">
                    admin@spongeprocleaningservices.com
                  </a>
                </h3>
                <p>Send us your questions anytime</p>
              </div>
            </div>

            <div className="business-hours-contact mt-4">
              <h4 className="mb-3" style={{ color: '#1e3a8a', fontWeight: '600' }}>Business Hours</h4>
              <div className="hours-list-contact">
                <div className="single-hour-contact d-flex justify-content-between align-items-center py-2">
                  <span className="day" style={{ fontWeight: '500' }}>Monday - Friday</span>
                  <span className="time" style={{ fontWeight: '600', color: '#1e3a8a' }}>9:00 AM - 5:00 PM</span>
                </div>
                <div className="single-hour-contact d-flex justify-content-between align-items-center py-2">
                  <span className="day" style={{ fontWeight: '500' }}>Saturday - Sunday</span>
                  <span className="time" style={{ fontWeight: '600', color: '#1e3a8a' }}>Flexible Scheduling</span>
                </div>
              </div>
              <div className="hours-note-contact mt-3 p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '8px', borderLeft: '4px solid #1e3a8a' }}>
                <p className="mb-0" style={{ fontSize: '14px', color: '#6c757d', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaInfoCircle style={{ color: '#1e3a8a', flexShrink: 0 }} />
                  <span>We offer flexible scheduling options on weekends to accommodate your busy lifestyle.</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="row mt-5 pt-4">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.8434727883!2d-97.2019435!3d49.8954327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73fa4b2d6d3b%3A0x8f8f8f8f8f8f8f8f!2sR3G%202H5%2C%20Winnipeg%2C%20MB%2C%20Canada!5e0!3m2!1sen!2sca!4v1735378800000!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{
                border: 0,
                borderRadius: '12px',
                minHeight: '300px'
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="col-lg-4">
            <div className="join-us-card" style={{
              padding: '35px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '2px solid #e5e7eb',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <h3 className="mb-3" style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaBriefcase />
                <span>Join Us</span>
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#1a1a1a', marginBottom: '15px', fontWeight: '500' }}>
                We&apos;re currently expanding our team.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: '#6c757d', marginBottom: '25px' }}>
                Interested in joining us? Learn more about our process and flexible scheduling.
              </p>
              <a href="/apply" className="btn btn-md hero-btn-primary" style={{
                padding: '12px 28px'
              }}>
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
