import React from 'react'

type Props = {}

const TopNav = (props: Props) => {
  return (
    <div className="top_menu row m-0">
          <div className="container">
            <div className="float-start">
              <a className="dn_btn" href="https://www.facebook.com/profile.php?id=61559035156842" target="_blank" rel="noopener noreferrer">
                <i className="ti-facebook"></i> Follow us on Facebook
              </a>
            </div>
            <div className="float-end">
              <a className="dn_btn" href="tel:+12042028257">
                <i className="ti-mobile"></i>+1-204 202 8257
              </a>
              <a className="dn_btn" href="tel:+12042028450">
                <i className="ti-mobile"></i>+1-204 202 8450
              </a>
              <span className="dn_btn">
                {" "}
                <i className="ti-location-pin"></i> Winnipeg, MB R3G 2H5, Canada
              </span>
            </div>
          </div>
        </div>
  )
}

export default TopNav