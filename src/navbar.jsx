import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [industriesDropdownVisible, setIndustriesDropdownVisible] = useState(false);
  const [aboutUsDropdownVisible, setAboutUsDropdownVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleIndustriesDropdown = () => {
    setIndustriesDropdownVisible((prev) => !prev);
    setAboutUsDropdownVisible(false); // Close the other dropdown
  };

  const handleAboutUsDropdown = () => {
    setAboutUsDropdownVisible((prev) => !prev);
    setIndustriesDropdownVisible(false); // Close the other dropdown
  };

  const handleClick = () => {
    setShowComingSoon(true);
  };

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <div className="nav">
          <div className="logo">
          <a href="/" className="nav-link" onClick={handleClick}>
          ChipSense
          </a></div>
         
          <nav className="navbar">
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link" onClick={handleClick}>
              Products and Services
            </a>
            <div className="nav-dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                onClick={handleIndustriesDropdown}
              >
                Industries We Serve
              </a>
              {industriesDropdownVisible && (
                <ul className="dropdown-menu">
                <li className="dropdown-item">
                <a href="#" className="nav-link" onClick={handleClick}>Academia</a>
                    </li>
                    <li className="dropdown-item">
                    <a href="#" className="nav-link" onClick={handleClick}>Automotive</a>
                    </li>
                    <li className="dropdown-item">
                    <a href="#" className="nav-link" onClick={handleClick}>Banking & Financial Institutions</a>
                    </li>
                    <li className="dropdown-item">
                    <a href="#" className="nav-link" onClick={handleClick}>Broadcast Industry</a>
                    </li>
                    <li className="dropdown-item">
                    <a href="#" className="nav-link" onClick={handleClick}>Consumer Electronics & Wearables</a>
                    </li>
                    <li className="dropdown-item">
                    <a href="#" className="nav-link" onClick={handleClick}>Defense</a>
                    </li>
                    <li className="dropdown-item">
                    <a href="#" className="nav-link" onClick={handleClick}>Drones & Robotics</a>
                    </li>
                    <li className="dropdown-item">
                    <a href="#" className="nav-link" onClick={handleClick}>Enterprises</a>
                    </li>
                    <li className="dropdown-item">
                    <a href="#" className="nav-link" onClick={handleClick}>Healthcare & Medical</a>
                    </li>
                    <li className="dropdown-item">
                    <a href="#" className="nav-link" onClick={handleClick}>Smart Manufacturing</a>
                    </li>
                    <li className="dropdown-item">
                    <a href="#" className="nav-link" onClick={handleClick}>Logistics & Warehousing</a>
                    </li>
                    <li className="dropdown-item">
                    <a href="#" className="nav-link" onClick={handleClick}>Retail</a>
                    </li>
                    <li className="dropdown-item">
                    <a href="#" className="nav-link" onClick={handleClick}>Security</a>
                    </li>
                    <li className="dropdown-item">
                    <a href="#" className="nav-link" onClick={handleClick}>Smart & Sensible Cities</a>
                    </li>
                </ul>
              )}
            </div>
            <div className="nav-dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                onClick={handleAboutUsDropdown}
              >
                About Us
              </a>
              {aboutUsDropdownVisible && (
                <ul className="dropdown-menu">
                 
                  <li className="dropdown-item">
                  <a href="#" className="nav-link" onClick={handleClick}>Our Team</a>
                  </li>
                  <li className="dropdown-item">
                  <a href="#" className="nav-link" onClick={handleClick}>Our Partners</a>
                  </li>
                  <li className="dropdown-item">
                  <a href="#" className="nav-link" onClick={handleClick}>Blogs & Events</a>
                  </li>
                  <li className="dropdown-item">
                  <a href="#" className="nav-link" onClick={handleClick}>Leadership Team</a>
                  </li>
                  <li className="dropdown-item">
                  <a href="#" className="nav-link" onClick={handleClick}>Advisory Board</a>
                  </li>
                  <li className="dropdown-item">
                  <a href="#" className="nav-link" onClick={handleClick}>Board of Directors</a>
                  </li>
                </ul>
              )}
            </div>
            <a href="#" className="nav-link" onClick={handleClick}>
              Contact Us
            </a>
          </nav>
        </div>
      </header>

      {showComingSoon && (
        <div className="coming-soon">
          <h1>Coming Soon</h1>
          <p>This page is under construction. Stay tuned!</p>
        </div>
      )}
    </>
  );
};

export default Navbar;
