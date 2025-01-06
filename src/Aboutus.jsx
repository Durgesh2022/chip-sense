import React from "react";
import "./Aboutus.css";

const Mission = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text">
          <h1>About Us</h1>
          <p>
          ChipSense Technology leads the way in advanced innovation, focusing on Edge AI solutions across a wide range of industries. By offering Systems, Solutions and Services that boost efficiency, strengthen security, and elevate intelligence, the company helps organizations excel in an ever-evolving tech world—driving progress toward a smarter and more secure future.
          </p>
          <button className="about-us-button">Learn More</button>
        </div>
        <img
          src="/image.jpg"
          alt="About Us"
          className="about-us-image"
        />
      </div>
    </div>
  );
};

export default Mission;

