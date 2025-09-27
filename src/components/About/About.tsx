import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <section className="about-area area-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="about-img">
                <Image width={555} height={485} src="/images/about1.png.webp" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h4>
                  PREMIER HOME CLEANING <br />
                  COMPANY DEDICATED TO
                  <br />
                  TOP-QUALITY SOLUTIONS.
                </h4>
                <p>
                  Sponge Pro Cleaning Services is a premier home cleaning company dedicated to providing top-quality cleaning solutions tailored to meet the unique needs of each client. Our mission is to create spotless, comfortable, and hygienic living spaces, ensuring that our customers can enjoy the tranquility and peace of mind that comes with a clean home.
                </p>
                <a className="main_btn" href="/services">
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About