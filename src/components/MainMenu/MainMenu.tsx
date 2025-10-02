'use client'

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {}

const MainMenu = (props: Props) => {
  const pathname = usePathname();

  return (
    <div className="main_menu">
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link className="navbar-brand logo_h" href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Image
            src="/images/logo.png"
            alt="Sponge Pro Cleaning Services"
            width={50}
            height={50}
            style={{ height: 'auto', marginRight: '10px' }}
          />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1e3a8a', textTransform: 'capitalize' }}>
            sponge pro cleaning services
          </span>
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
            <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link" href="/" style={{ fontWeight: '600' }}>
                Home
              </Link>
            </li>
            <li className={`nav-item ${pathname === '/about-us' ? 'active' : ''}`}>
              <Link className="nav-link" href="/about-us" style={{ fontWeight: '600' }}>
                About
              </Link>
            </li>
            <li className={`nav-item ${pathname === '/services' ? 'active' : ''}`}>
              <Link className="nav-link" href="/services" style={{ fontWeight: '600' }}>
                Services
              </Link>
            </li>
            <li className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>
              <Link className="nav-link" href="/contact" style={{ fontWeight: '600' }}>
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