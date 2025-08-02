import React from 'react';
import { Link } from 'react-router-dom';
import footerLogo from '../../public/images/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-between">
          {/* Logo and Social Icons */}
          <div className="col-md-4 mb-4">
            <img
              className="footer_logo"
              src={footerLogo}
              alt="footer logo"
            />
            <div className="social-icons">
              <ul>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Sitemap */}
          <div className="col-md-7 col-lg-5">
            <div className="row">
              <div className="col-md-6 mb-4">
                <ul className="list-unstyled footer-links">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/order">Order</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="container-fluid">
        <div className="footer-line my-4"></div>
        <div className="text-center copyright_text">
          <p className="mb-0">© {new Date().getFullYear()} Luxsmell</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
