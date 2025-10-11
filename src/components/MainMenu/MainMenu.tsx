'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {}

const MainMenu = (props: Props) => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
            style={{ height: 'auto', marginRight: '10px', flexShrink: 0 }}
          />
          <span className="brand-text" style={{ fontWeight: 'bold', color: '#1e3a8a', textTransform: 'capitalize' }}>
            sponge pro cleaning services
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-controls="navbarSupportedContent"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <div
          className={`collapse navbar-collapse offset ${isMenuOpen ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="nav navbar-nav menu_nav ms-auto">
            <li className={`nav-item ${pathname === '/' ? 'active' : ''}`}>
              <Link className="nav-link" href="/" style={{ fontWeight: '600' }} onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className={`nav-item ${pathname === '/about-us' ? 'active' : ''}`}>
              <Link className="nav-link" href="/about-us" style={{ fontWeight: '600' }} onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className={`nav-item ${pathname === '/services' ? 'active' : ''}`}>
              <Link className="nav-link" href="/services" style={{ fontWeight: '600' }} onClick={closeMenu}>
                Services
              </Link>
            </li>
            <li className={`nav-item ${pathname === '/contact' ? 'active' : ''}`}>
              <Link className="nav-link" href="/contact" style={{ fontWeight: '600' }} onClick={closeMenu}>
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