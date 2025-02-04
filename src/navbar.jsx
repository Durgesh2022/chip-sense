import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [industriesDropdownVisible, setIndustriesDropdownVisible] = useState(false);
  const [aboutUsDropdownVisible, setAboutUsDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIndustriesDropdown = () => {
    setIndustriesDropdownVisible(!industriesDropdownVisible);
    setAboutUsDropdownVisible(false);
  };

  const handleAboutUsDropdown = () => {
    setAboutUsDropdownVisible(!aboutUsDropdownVisible);
    setIndustriesDropdownVisible(false);
  };

  const closeDropdowns = () => {
    setIndustriesDropdownVisible(false);
    setAboutUsDropdownVisible(false);
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="nav">
        <div className="logo">
          <Link to="/" className="nav-link">ChipSense</Link>
        </div>
        <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/coming-soon" className="nav-link">Products and Services</Link>

          {/* Industries Dropdown */}
          <div className="nav-dropdown">
            <span className="nav-link dropdown-toggle" onClick={handleIndustriesDropdown}>
              Industries We Serve
            </span>
            {industriesDropdownVisible && (
              <ul className="dropdown-menu">
                {[
                  "Academia", "Automotive", "Banking & Financial Institutions",
                  "Broadcast Industry", "Consumer Electronics & Wearables",
                  "Defense", "Drones & Robotics", "Enterprises",
                  "Healthcare & Medical", "Smart Manufacturing",
                  "Logistics & Warehousing", "Retail", "Security",
                  "Smart & Sensible Cities"
                ].map((industry, index) => (
                  <li key={index} className="dropdown-item">
                    <Link to="/coming-soon" className="nav-link" onClick={closeDropdowns}>{industry}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* About Us Dropdown */}
          <div className="nav-dropdown">
            <span className="nav-link dropdown-toggle" onClick={handleAboutUsDropdown}>
              About Us
            </span>
            {aboutUsDropdownVisible && (
              <ul className="dropdown-menu">
                {[
                  "Our Team", "Our Partners", "Blogs & Events",
                  "Leadership Team", "Advisory Board", "Board of Directors"
                ].map((item, index) => (
                  <li key={index} className="dropdown-item">
                    <Link to="/coming-soon" className="nav-link" onClick={closeDropdowns}>{item}</Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link to="/contact-us" className="nav-link">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
