import React from 'react'

type Props = {}

const TopNav = (props: Props) => {
  return (
    <div className="top_menu row m-0">
          <div className="container">
            <div className="float-start">
              <a className="dn_btn" href="tel:+12042028257">
                <i className="ti-mobile"></i>+1-204 202 8257
              </a>
              <span className="dn_btn">
                {" "}
                <i className="ti-location-pin"></i> Winnipeg, MB R3G 2H5, Canada
              </span>
            </div>
            <div className="float-end">
              {/* Future social media links when client is ready */}
              {/*
              <span className="follow_us">Follow us: </span>
              <ul className="list header_social">
                <li>
                  <a href="#">
                    <i className="ti-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-skype"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-vimeo"></i>
                  </a>
                </li>
              </ul>
              */}
            </div>
          </div>
        </div>
  )
}

export default TopNav