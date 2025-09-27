import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

const MainMenu = (props: Props) => { 

  return (
    <div className="main_menu">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand logo_h" href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', textDecoration: 'none' }}>
          Sponge Pro Cleaning Services
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <div
          className="collapse navbar-collapse offset"
          id="navbarSupportedContent"
        >
          <ul className="nav navbar-nav menu_nav ms-auto">
            <li className="nav-item active">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about-us">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default MainMenu