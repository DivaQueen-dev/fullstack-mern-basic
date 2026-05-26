import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="footer-brand mb-4">
              <h4>Neve Agency</h4>
              <p>Creating beautiful digital experiences that drive results for our clients.</p>
            </div>
            <ul className="social-links">
              <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </div>
          
          <div className="col-md-2 col-6 mb-4 mb-md-0">
            <h4>Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-md-2 col-6 mb-4 mb-md-0">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Branding</a></li>
              <li><a href="#">UI/UX Design</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">SEO</a></li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h4>Contact Info</h4>
            <ul className="footer-links">
              <li><i className="fas fa-map-marker-alt me-2"></i> 123 Design Street, Creative City</li>
              <li><i className="fas fa-phone me-2"></i> +91-8657335082</li>
              <li><i className="fas fa-envelope me-2"></i> info@neveagency.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom text-center">
          <p className="mb-0">© {new Date().getFullYear()} Neve Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;