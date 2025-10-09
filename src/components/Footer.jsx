import React from 'react';
import footerBg from '../assets/footer-bg.jpg';
import '../App.css';

const Footer = () => (
  <footer className="footer" style={{ backgroundImage: `url(${footerBg})` }}>
    <div className="footer-content">
      <p>© 2025 Indra Traders - All rights reserved.</p>
      <p>Contact us for more information about our services.</p>
    </div>
  </footer>
);

export default Footer;
