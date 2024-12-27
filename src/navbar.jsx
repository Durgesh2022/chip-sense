import React, { useState, useEffect } from "react";
import "./navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setShowComingSoon(true);
  };

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <div className="nav">
          <div className="logo">Chip Sense</div>
          <nav className="navbar">
            <a href="#" className="nav-link" >
              Home
            </a>
            <a href="#" className="nav-link" onClick={handleClick}>
              Products and Services
            </a>
            <a href="#" className="nav-link" onClick={handleClick}>
              Markets We Serve
            </a>
            <a href="#" className="nav-link" onClick={handleClick}>
              About Us
            </a>
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
