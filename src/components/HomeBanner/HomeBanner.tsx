import React from "react";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="home_banner_area">
      <div
        className="container-fluid banner_inner d-flex"
        style={{
          backgroundImage: "url('/images/volodymyr-hryshchenko-WU9dA3C4R28-unsplash.jpg')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1
          }}
        ></div>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="banner_content text-center">
            <h3>
              Keep your space spotless
              <br />
              with <strong>Sponge Pro Cleaning Services</strong>
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
