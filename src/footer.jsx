import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faClipboard } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-flex">
          {/* About Section (70%) */}
          <div className="footer-about">
            <h1 className="footer-title">ChipSense Technology</h1>
            <p className="footer-description">
             </p>
          </div>

          {/* Legals Section (30%) */}
          <div className="footer-legals">
            <div className="legals-container">
              <h3 className="legals-title">Contact Us</h3>
              <ul className="legals-list">
                <li className="legals-item">
                  <a href="mailto:Inquiry@chip-sense.com" className="legals-link">
                  <FontAwesomeIcon icon={faEnvelope} className="legals-icon" />
                  Email</a>
                </li>
                <li className="legals-item">
                  <Link to="/" className="legals-link">
                  <FontAwesomeIcon icon={faClipboard} className="legals-icon" />
                  Business Form</Link>
                </li>
                <li className="legals-item">
                  <Link to="/" className="legals-link">
                  <FontAwesomeIcon icon={faLinkedin} className="legals-icon" />
                  Linked In</Link>
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
