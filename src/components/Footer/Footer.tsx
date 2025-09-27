import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="footer-area ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-md-6">
              <div className="single-footer-widget">
                <h6>Quick Links</h6>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="footer-nav">
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="/about-us">About Us</a>
                      </li>
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="/services">Our Services</a>
                      </li>
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="footer-nav">
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="#">Standard Cleaning</a>
                      </li>
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="#">Move-In/Move-Out</a>
                      </li>
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="#">Custom Plans</a>
                      </li>
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="/privacy-policy">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-6">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20">Business Hours</h6>
                <ul className="business-hour">
                  <li>
                    Monday - Friday : <span>9 am - 5 pm</span>{" "}
                  </li>
                  <li>
                    Saturday - Sunday :<span>Flexible Scheduling</span>
                  </li>
                </ul>
                <p>Convenient and flexible scheduling options to fit the busy lifestyles of our clients.</p>
              </div>
            </div>
            <div className="col-lg-4  col-md-12">
              <div className="single-footer-widget newsletter">
                <h6>Email Newsletter</h6>
                <div id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get"
                    className="form-inline"
                  >
                    <div className="form-group row no-gutters">
                      <div className="col-lg-8 col-md-8 col-7">
                        <input
                          name="EMAIL"
                          placeholder="Your Email Address"
                          required={true}
                          type="email"
                        />
                      </div>
                      <div className="col-lg-4 col-md-4 col-5">
                        <button className="nw-btn main_btn circle">
                          subscribe
                          <span className="lnr lnr-arrow-right"></span>
                        </button>
                      </div>
                    </div>
                    <div className="info"></div>
                  </form>
                </div>
                <p>
                  Sign up for cleaning tips, special offers, and updates from
                  Sponge Pro Cleaning Services.
                </p>
                <a className="footer-link" href="/privacy-policy">
                  privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row ">
              <p className="col-lg-12 footer-text ">
                Copyright &copy; 2025 Sponge Pro Cleaning Services. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer