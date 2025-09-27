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
            <span>Future construction</span>
            <h3>
              Make your dream home
              <br />
              with sintac
            </h3>
            <a className="main_btn" href="#">
              get a quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
