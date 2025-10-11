'use client'

import React, { useState, useRef } from "react";

type Props = {}

const ApplicationForm = (props: Props) => {
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
      setResult("Thank you for applying! We've received your application and will review it shortly. We'll be in touch soon.");
      formRef.current?.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <section className="application-section area-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="application-header text-center mb-5">
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '800', marginBottom: '20px', color: '#1a1a1a' }}>
                Application
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#6c757d' }}>
                Fill in your personal information below.
              </p>
            </div>

            <form
              ref={formRef}
              className="application-form"
              onSubmit={onSubmit}
            >
              <div className="row">
                <div className="col-12">
                  <label style={{ fontWeight: '600', marginBottom: '8px', display: 'block', color: '#1a1a1a' }}>
                    Name <span style={{ color: '#dc3545' }}>*</span>
                  </label>
                </div>
                <div className="col-sm-6">
                  <div className="form-group mb-4">
                    <input
                      className="form-control"
                      name="firstName"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                      required
                      aria-required="true"
                      style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group mb-4">
                    <input
                      className="form-control"
                      name="lastName"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                      required
                      aria-required="true"
                      style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-4">
                    <label htmlFor="email" style={{ fontWeight: '600', marginBottom: '8px', display: 'block', color: '#1a1a1a' }}>
                      Email <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input
                      className="form-control"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      aria-required="true"
                      style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-4">
                    <label htmlFor="phone" style={{ fontWeight: '600', marginBottom: '8px', display: 'block', color: '#1a1a1a' }}>
                      Phone <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input
                      className="form-control"
                      name="phone"
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      aria-required="true"
                      style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-4">
                    <label htmlFor="resume_link" style={{ fontWeight: '600', marginBottom: '8px', display: 'block', color: '#1a1a1a' }}>
                      Resume Link <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <input
                      className="form-control"
                      name="resume_link"
                      id="resume_link"
                      type="url"
                      placeholder="Paste link to your resume (Google Drive, Dropbox, OneDrive, etc.)"
                      required
                      aria-required="true"
                      style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                    />
                    <small style={{ display: 'block', marginTop: '8px', color: '#6c757d' }}>
                      Please share a link to your resume from Google Drive, Dropbox, or OneDrive
                    </small>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group mb-4">
                    <label htmlFor="message" style={{ fontWeight: '600', marginBottom: '8px', display: 'block', color: '#1a1a1a' }}>
                      Message <span style={{ color: '#dc3545' }}>*</span>
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      rows={6}
                      placeholder="Describe your past experience with cleaning & the skills you possess."
                      required
                      aria-required="true"
                      style={{ padding: '12px 16px', borderRadius: '8px', border: '1px solid #e5e7eb' }}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="form-group mt-3">
                <button type="submit" className="btn btn-lg hero-btn-primary" style={{ padding: '14px 40px', width: '100%' }}>
                  Submit
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
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;
