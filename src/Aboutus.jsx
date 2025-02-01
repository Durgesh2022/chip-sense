import React from "react";
import "./Aboutus.css";

const Mission = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-text">
          <h1>About Us</h1>
          <p>
          We are a team of dedicated professionals with deep
          technological expertise, on a mission to make AI accessible to all.
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

