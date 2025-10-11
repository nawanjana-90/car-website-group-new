import React from "react";
import "./Footer.css";
import logo from "../assets/mahindra-logo.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      {/* Left Side */}
      <div className="footer-left">
        <div className="footer-logo-section">
          <img src={logo} alt="Mahindra Logo" className="footer-logo" />
          <div className="social-section">
            <p className="follow-text">Follow Us On</p>
            <div className="social-icons">
              <FaFacebookF className="icon" />
              <FaInstagram className="icon" />
              <FaTwitter className="icon" />
              <FaYoutube className="icon" />
            </div>
          </div>
        </div>
        <div className="contact-info">
          <p>📞 +94 123 456 789</p>
          <p>📍 123 Main St, Colombo, Sri Lanka</p>
          <p>✉️ info@mahindra.com</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="footer-right">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="#">Cars</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Career</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
