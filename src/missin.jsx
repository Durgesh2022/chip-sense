import React from "react";
import "./Aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
      <img
          src="/image1.jpg"
          alt="About Us"
          className="about-us-image"
        />
        <div className="about-us-text">
          <h2>Mission and Vision</h2>
          <p>
          Our vision is to create a smarter and safer future by providing advanced Edge AI technology to businesses. To achieve this, our mission is to deliver top-edge Edge AI solutions that improve efficiency, enhance security, and provide real-time insights, helping businesses thrive in a changing technology landscape.
          </p>
         
        </div>
      
      </div>
    </div>
  );
};

export default AboutUs;

