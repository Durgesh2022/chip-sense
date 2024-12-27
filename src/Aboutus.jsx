import React from "react";
import "./Aboutus.css";

const Mission = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text">
          <h1>About Us</h1>
          <p>
          Chip Sense Technology is an innovative company specializing in providing advanced technological solutions to empower businesses in a fast-evolving landscape. They focus on Edge AI Solutions, Cybersecurity offerings, and Smart Factory technologies, aiming to enhance operational efficiency, security, and intelligence. By bridging the gap between cutting-edge innovations and practical applications, Chip Sense Technology positions itself as a trusted partner for niche technology reselling, driving organizations toward a smarter, more secure, and automated future.
          </p>
          <button className="about-us-button">Learn More</button>
        </div>
        <img
          src="/image.webp"
          alt="About Us"
          className="about-us-image"
        />
      </div>
    </div>
  );
};

export default Mission;

