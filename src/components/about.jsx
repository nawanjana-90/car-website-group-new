import React from "react";
import "./about.css";        
import Mission from "./Mission";  
import Vision from "./Vision"; 

const About = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-content">
          <h1>About Our Car Sale Shop</h1>
          <p>
            Welcome to <span>AutoDrive Motors</span> — your trusted destination
            for high-quality vehicles at unbeatable prices. We specialize in both
            brand-new and certified pre-owned cars, offering a reliable and
            transparent car-buying experience.
          </p>
          <p>
            Since our founding in 2020, we have built a reputation for honesty,
            quality, and service excellence. Our team of automotive experts is
            passionate about helping you find the perfect vehicle that fits your
            lifestyle and budget.
          </p>
          <p>
            Whether you’re buying your first car, upgrading to something new, or
            selling your old one — <span>AutoDrive Motors</span> is here to make
            your journey smooth and enjoyable. Visit our showroom or explore our
            website to discover our latest collection!
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80"
            alt="Car showroom"
          />
        </div>
      </div>

      {/* Mission & Vision Sections */}
      <Mission />
      <Vision />
    </div>
  );
};

export default About;
