'use client'

import React, { useState, useRef } from "react";
import { FaBriefcase, FaClock, FaInfoCircle } from 'react-icons/fa';

type Props = {}

const ContactSection = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "cfd29dbd-d912-4b5e-8b3b-f4ceeec59fbe");

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
    <section className="contact-area area-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5" data-aos="fade-right" suppressHydrationWarning>
            <div className="section-title text-center mb-5">
              <h2 style={{ color: '#000000', fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '20px' }}>Request a Quote</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#6c757d' }}>
                Tell us about your space — and we&apos;ll provide a quote tailored to your cleaning needs and schedule.
                Whether it&apos;s your home or business, we&apos;re here to help make your space spotless.
              </p>
              <div className="mt-3">
                <p style={{ fontSize: '0.95rem', color: '#6c757d', marginBottom: '12px' }}>
                  Prefer to talk? Call us at <a href="tel:+12042028257" style={{ color: '#1e3a8a', fontWeight: '600' }}>+1-204 202 8257</a> or{' '}
                  <a href="tel:+12042028450" style={{ color: '#1e3a8a', fontWeight: '600' }}>+1-204 202 8450</a>, or{' '}
                  <a href="/book" style={{ color: '#1e3a8a', fontWeight: '600' }}>schedule a consultation</a>
                </p>
              </div>
            </div>
            <form
              ref={formRef}
              className="form-contact contact_form"
              onSubmit={onSubmit}
            >
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="name" className="visually-hidden">Name</label>
                    <input
                      className="form-control"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="email" className="visually-hidden">Email</label>
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Enter email address"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="subject" className="visually-hidden">Subject</label>
                    <input
                      className="form-control"
                      name="subject"
                      id="subject"
                      type="text"
                      placeholder="Enter Subject"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="message" className="visually-hidden">Message</label>
                    <textarea
                      className="form-control w-100"
                      name="message"
                      id="message"
                      cols={30}
                      rows={9}
                      placeholder="Enter Message"
                      required
                      aria-required="true"
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

          <div className="col-lg-6 offset-lg-1" data-aos="fade-left" suppressHydrationWarning>
            <div className="join-us-card mb-5" style={{
              padding: '30px 30px 20px 30px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '2px solid #e5e7eb',
              display: 'inline-block',
              width: 'auto',
              maxWidth: '100%'
            }}>
              <h3 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e3a8a', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaBriefcase />
                <span>Join Us</span>
              </h3>
              <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#1a1a1a', marginBottom: '12px', fontWeight: '500' }}>
                We&apos;re currently expanding our team.
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#6c757d', marginBottom: '15px' }}>
                Interested in joining us? Learn more about our process and flexible scheduling.
              </p>
              <a href="/apply" className="btn btn-md hero-btn-primary" style={{
                padding: '12px 28px',
                display: 'inline-block'
              }}>
                Apply Now
              </a>
            </div>

            <div className="business-hours-card">
              <h3 className="mb-4" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FaClock />
                <span>Business Hours</span>
              </h3>
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
                <p style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <FaInfoCircle />
                  <span>We offer flexible scheduling options on weekends to accommodate your busy lifestyle.</span>
                </p>
              </div>
            </div>

            {/* BBB Get Quote Badge - Commented out to avoid confusion with main contact form */}
            {/* <div className="mt-4 text-center" style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              padding: '20px'
            }}>
              <h4 style={{ fontSize: '1rem', fontWeight: '600', color: '#1e3a8a', marginBottom: '15px' }}>
                Request a Quote via BBB
              </h4>
              <a
                href="https://www.bbb.org/centralcanada/quote/request-sponge-pro-cleaning-services-1000007944/#buttonclick"
                target="_blank"
                rel="nofollow"
              >
                <img
                  src="https://seal-manitoba.bbb.org/request-a-quote/blue-badge-160-51-blue-bbb-1000007944.png"
                  style={{ border: 0, maxWidth: '100%', height: 'auto' }}
                  alt="Sponge Pro Cleaning Services BBB Business Review"
                />
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection