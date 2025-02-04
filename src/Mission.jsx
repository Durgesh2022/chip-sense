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
          Our vision is to create a world where AI empowers
individuals, businesses, and society, leading to a better future.


Our objective is to keep the statements short and simple and not to repeat
the same statement again and again.</p>
         
        </div>
      
      </div>
    </div>
  );
};

export default AboutUs;

