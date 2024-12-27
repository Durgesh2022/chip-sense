import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-flex">
          {/* About Section (70%) */}
          <div className="footer-about">
            <h1 className="footer-title">Chip Sense Technology</h1>
            <p className="footer-description">
            At Chip Sense Technology, we are at the forefront of innovation, specializing in delivering cutting-edge solutions that empower businesses to thrive in a rapidly evolving technological landscape. As a trusted partner for niche technology reselling, we focus on providing advanced Edge AI Solutions, robust Cybersecurity offerings, and transformative Smart Factory technologies.            </p>
          </div>

          {/* Legals Section (30%) */}
          <div className="footer-legals">
            <div className="legals-container">
              <h3 className="legals-title">Contact Us</h3>
              <ul className="legals-list">
                <li className="legals-item">
                  <Link to="/" className="legals-link">Email</Link>
                </li>
                <li className="legals-item">
                  <Link to="/" className="legals-link">Phone Number</Link>
                </li>
                <li className="legals-item">
                  <Link to="/" className="legals-link">Instagram</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
