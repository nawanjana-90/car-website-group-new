import React from "react";
import "./About.css";
import visionImg from "../assets/vision.jpg";

const Vision = () => {
  return (
    <div className="vision-container">
      <div className="vision-text">
        <h2>Our Vision</h2>
        <p>
          At <span>AutoDrive Motors</span>, our vision is to become the most
          trusted and innovative car dealership in the region, offering a
          diverse range of vehicles while maintaining the highest standards of
          customer satisfaction and ethical business practices.
        </p>
      </div>
      <div className="vision-image">
        <img src={visionImg} alt="Vision" />
      </div>
    </div>
  );
};

export default Vision;
