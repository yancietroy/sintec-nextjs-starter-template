import Image from 'next/image'
import React from 'react'

type Props = {}

const Stats = (props: Props) => {
  return (
    <section className="number-area" id="number-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-5">
          <div className="number-img">
            <Image width={368} height={462} src="/images/premium_photo-1677234147127-36046f5fbe78.avif" alt="Professional cleaning service" />
            
          </div>
        </div>
        <div className="col-md-7 col-lg-6">
          <div className="number-content">
            <h4>
              Providing Personalized And <br />
              High Quality Service
            </h4>
            <p>
              At Sponge Pro Cleaning Services, we understand that every home and office is unique. That&apos;s why we provide personalized cleaning solutions tailored to your specific needs, ensuring exceptional results every time.
            </p>
            {/* Stats will be added when client provides actual data
            <div className="number-wrapper">
              <div className="single-number">
                <h5>
                  <span className="counter">15</span>K+
                </h5>
                <p>happy customer</p>
              </div>
              <div className="single-number">
                <h5>
                  <span className="counter">10</span>K+
                </h5>
                <p>Project Done</p>
              </div>
              <div className="single-number">
                <h5>
                  <span className="counter">9</span>/
                  <span className="counter">10</span>
                </h5>
                <p>Average Rating</p>
              </div>
            </div>
            */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Stats