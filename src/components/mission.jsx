import React from "react";
import "./about.css"; // Correct import
import missionImg from "../assets/mission.jpg";

const Mission = () => {
  return (
    <div className="mission-container">
      <div className="mission-image">
        <img src={missionImg} alt="Mission" />
      </div>
      <div className="mission-text">
        <h2>Our Mission</h2>
        <p>
          At <span>AutoDrive Motors</span>, our mission is to provide exceptional
          vehicles and services with integrity and dedication. We strive to
          exceed customer expectations and ensure a seamless car-buying
          experience for everyone.
        </p>
      </div>
    </div>
  );
};

export default Mission;
