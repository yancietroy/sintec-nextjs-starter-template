'use client'

import React, { useOptimistic, useRef } from "react";

type Props = {}

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'pending' | 'sent' | 'error';
};

const ContactSection = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [optimisticMessages, addOptimisticMessage] = useOptimistic<ContactMessage[], ContactMessage>(
    [],
    (state, newMessage) => [...state, newMessage]
  );

  async function sendMessage(formData: FormData) {
    const message: ContactMessage = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      subject: formData.get('subject') as string,
      message: formData.get('message') as string,
      status: 'pending'
    };

    addOptimisticMessage(message);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      formRef.current?.reset();
      console.log('Message sent successfully:', message);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  }

  return (
    <section className="contact-area area-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5" data-aos="fade-right" suppressHydrationWarning>
            <div className="section-title text-center mb-5">
              <h2 style={{ color: '#000000', fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '20px' }}>Get In Touch</h2>
              <p style={{ fontSize: '1.1rem' }}>
                Ready to experience professional cleaning? Contact us today for a free quote
                and let us take care of your cleaning needs.
              </p>
            </div>
            <form
              ref={formRef}
              className="form-contact contact_form"
              action={sendMessage}
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
                  </div>
                </div>
              </div>
              <div className="form-group mt-3">
                <button type="submit" className="button button-contactForm">
                  {optimisticMessages.length > 0 && optimisticMessages[optimisticMessages.length - 1]?.status === 'pending'
                    ? 'Sending...'
                    : 'Send Message'
                  }
                </button>
              </div>
            </form>

            {optimisticMessages.length > 0 && (
              <div className="mt-3">
                {optimisticMessages.map((msg) => (
                  <div key={msg.id} className={`alert ${msg.status === 'pending' ? 'alert-info' : 'alert-success'}`}>
                    {msg.status === 'pending' ? 'Sending your message...' : 'Message sent successfully!'}
                  </div>
                ))}
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
                Interested in joining us? Learn more about our process, and flexible scheduling. Currently hiring for part-time positions.
              </p>
              <a href="/contact" className="btn btn-md hero-btn-primary" style={{
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