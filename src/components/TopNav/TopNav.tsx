import React from 'react'

type Props = {}

const TopNav = (props: Props) => {
  return (
    <div className="top_menu row m-0">
          <div className="container">
            <div className="float-start">
              {/* Future social media links when client is ready */}
            </div>
            <div className="float-end">
              <a className="dn_btn" href="tel:+12042028257">
                <i className="ti-mobile"></i>+1-204 202 8257
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