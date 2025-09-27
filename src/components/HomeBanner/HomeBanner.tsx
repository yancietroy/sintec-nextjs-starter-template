import React from "react";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="home_banner_area">
      <div
        className="container-fluid banner_inner d-flex"
        style={{
          backgroundImage: "url('/images/home-banner.jpg.webp')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div className="container">
          <div className="banner_content text-center">
            <span>Professional Cleaning Services</span>
            <h3>
              Keep your space spotless
              <br />
              with Sponge Pro Cleaning Services
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#ffffff', margin: '20px auto 30px', maxWidth: '600px', lineHeight: '1.6' }}>
              Our highly trained and experienced cleaning professionals are dedicated to delivering exceptional service with attention to detail.
            </p>
            <a className="main_btn" href="/contact">
              Get Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
