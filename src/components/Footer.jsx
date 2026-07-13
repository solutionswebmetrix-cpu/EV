import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setNewsletterMessage('Thank you for subscribing!');
      setEmail('');
      setTimeout(() => setNewsletterMessage(''), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <div className="footer-logo-container">
              <img src={logo} alt="AeroVolt" className="footer-logo-img" />
              <h3 className="footer-logo-text">AeroVolt</h3>
            </div>
            <p className="footer-tagline">by Priya Global</p>
            <p className="footer-description">
              Premium electric vehicles for a sustainable future. Experience luxury, performance, and innovation with AeroVolt.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/technology">Technology</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><Link to="/products">High Speed Scooters</Link></li>
              <li><Link to="/products">Low Speed Scooters</Link></li>
              <li><Link to="/dealership">Become a Dealer</Link></li>
              <li><Link to="/enquiry">Book Test Ride</Link></li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4>Contact Us</h4>
            <div className="contact-info">
              <div className="address-item">
                <span className="contact-icon">📍</span>
                <div className="address-text">
                  <span className="address-label">Address 1</span>
                  <span>A-33, Sector-5,</span>
                  <span>Noida, UP-201301,</span>
                  <span>India</span>
                </div>
              </div>

              <div className="address-item">
                <span className="contact-icon">📍</span>
                <div className="address-text">
                  <span className="address-label">Address 2</span>
                  <span>Beleghata Main Rd,</span>
                  <span>Subhas Sarobar Park,</span>
                  <span>Phoolbagan, Beleghata,</span>
                  <span>Kolkata, West Bengal 700010,</span>
                  <span>India</span>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 98115 44858</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <span>+91 9339720467</span>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>aerovoltelectric@gmail.com</span>
              </div>
            </div>
            <div className="footer-newsletter">
              <h5>Subscribe to Newsletter</h5>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">Subscribe</button>
              </form>
              {newsletterMessage && (
                <p className="newsletter-message">{newsletterMessage}</p>
              )}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 AeroVolt. All Rights Reserved. | Designed by{' '}
            <a
              href="https://www.webmetrixsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="designer-link"
            >
              Webmetrix Solutions
            </a>
          </p>
          <div className="social-links">
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">📷</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">📺</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
