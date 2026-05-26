import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''} light-navbar`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <div className="neve-logo" style={{ fontWeight: 'bold' }}>N</div> Neve
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">HOME</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT US</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio">PORTFOLIO</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/news">NEWS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">CONTACT US</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;