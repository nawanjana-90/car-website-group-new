// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/mahindra-logo.png";
import car21 from "../assets/car21.jpeg";
import car22 from "../assets/car22.png";
import car23 from "../assets/car23.png";

function Navbar() {
  const [active, setActive] = useState("Cars");
  const [currentImage, setCurrentImage] = useState(0);

  const slideshowImages = [car21,car22, car23];

  // Auto slide between car22 and car23
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slideshowImages.length);
    }, 2500); // change every 2.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="navbar-section">
      {/* Navbar */}
      <nav
        className="navbar"
  
      >
        <div className="navbar-left">
          <img src={logo} alt="Mahindra Logo" className="navbar-logo" />
          <h1 className="navbar-title">Apex Auto Group</h1>
        </div>

        <ul className="nav-links">
          {["Home", "About Us", "Cars", "Services", "Career"].map((page) => (
            <li
              key={page}
              className={`nav-item ${active === page ? "active" : ""}`}
              onClick={() => setActive(page)}
            >
              {page}
            </li>
          ))}
        </ul>

        <button className="login-btn">Login</button>
      </nav>

      {/* Slideshow Section */}
      <div className="slideshow">
        <img
          src={slideshowImages[currentImage]}
          alt="Car slideshow"
          className="slide-image"
        />
        <div className="dots">
          {slideshowImages.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentImage ? "active-dot" : ""}`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
