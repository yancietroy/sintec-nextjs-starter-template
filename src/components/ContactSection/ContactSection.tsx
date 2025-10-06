'use client'

import React, { useState, useRef } from "react";

type Props = {}

const ContactSection = (props: Props) => {
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
    <section className="contact-area area-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5" data-aos="fade-right" suppressHydrationWarning>
            <div className="section-title text-center mb-5">
              <h2 style={{ color: '#000000', fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '20px' }}>Request a Quote</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#6c757d' }}>
                Tell us about your space — and we'll provide a quote tailored to your cleaning needs and schedule.
                Whether it's your home or business, we're here to help make your space spotless.
              </p>
            </div>
            <form
              ref={formRef}
              className="form-contact contact_form"
              onSubmit={onSubmit}
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

          <div className="col-lg-6 offset-lg-1" data-aos="fade-left" suppressHydrationWarning>
            <div className="join-us-card mb-5" style={{
              padding: '35px',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              border: '2px solid #e5e7eb'
            }}>
              <h3 className="mb-3" style={{ fontSize: '1.75rem', fontWeight: '700', color: '#1e3a8a' }}>
                <i className="ti-briefcase me-2"></i>Join Us
              </h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#1a1a1a', marginBottom: '15px', fontWeight: '500' }}>
                We're currently expanding our team.
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

            <div className="business-hours-card">
              <h3 className="mb-4">
                <i className="ti-time me-2"></i>Business Hours
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
                <p>
                  <i className="ti-info-alt"></i>
                  We offer flexible scheduling options on weekends to accommodate your busy lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection