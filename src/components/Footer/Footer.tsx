import React from 'react'
import Link from 'next/link'

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
                        <Link href="/">Home</Link>
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