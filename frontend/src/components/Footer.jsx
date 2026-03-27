import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <p className="footer-logo">
            Akshita <span className="highlight">Dhaka</span>
          </p>
          <p className="copyright">
            © {new Date().getFullYear()} Akshita Dhaka. Designed and Built with standard engineering principles.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
