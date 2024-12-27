import React from "react";
import "./Aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
      <img
          src="image1.jpg"
          alt="About Us"
          className="about-us-image"
        />
        <div className="about-us-text">
          <h2>Mission and Vision</h2>
          <p>
          Chip Sense Technology's mission is to empower businesses by delivering innovative solutions in Edge AI, Cybersecurity, and Smart Factory technologies, bridging the gap between advanced technology and practical implementation to enhance efficiency, security, and intelligence. Their vision is to drive a smarter, more secure, and automated future, helping businesses thrive in an ever-evolving technological landscape.
          </p>
         
        </div>
      
      </div>
    </div>
  );
};

export default AboutUs;

