'use client'

import React, { useOptimistic, useRef } from "react";

type Props = {};

type ContactMessage = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: 'pending' | 'sent' | 'error';
};

const ContactUs = (props: Props) => {
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

    // Optimistically add the message
    addOptimisticMessage(message);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Reset form on success
      formRef.current?.reset();

      // In a real app, you'd handle the response here
      console.log('Message sent successfully:', message);
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  }

  return (
    <section className="contact-section area-padding">
      <div className="container">
        <div className="d-none d-sm-block mb-5 pb-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2571.8434727883!2d-97.2019435!3d49.8954327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52ea73fa4b2d6d3b%3A0x8f8f8f8f8f8f8f8f!2sR3G%202H5%2C%20Winnipeg%2C%20MB%2C%20Canada!5e0!3m2!1sen!2sca!4v1735378800000!5m2!1sen!2sca"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="contact-title">Get in Touch</h2>
          </div>
          <div className="col-lg-8">
            <form
              ref={formRef}
              className="form-contact contact_form"
              action={sendMessage}
              id="contactForm"
            >
              <div className="row">
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

            {/* Show optimistic feedback */}
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
          <div className="col-lg-4">
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-home"></i>
              </span>
              <div className="media-body">
                <h3>Winnipeg, Manitoba</h3>
                <p>R3G 2H5, Canada</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-tablet"></i>
              </span>
              <div className="media-body">
                <h3>
                  <a href="tel:+12042028257">+1-204 202 8257</a>
                </h3>
                <p>9 am - 5 pm Flexible Scheduling</p>
              </div>
            </div>
            <div className="media contact-info">
              <span className="contact-info__icon">
                <i className="ti-email"></i>
              </span>
              <div className="media-body">
                <h3>
                  <a href="mailto:admin@spongeprocleaningservices.com">
                    admin@spongeprocleaningservices.com
                  </a>
                </h3>
                <p>Convenient and flexible scheduling options to fit the busy lifestyles of our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
