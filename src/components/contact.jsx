import React from "react";
import "./ContactUs.css";

const contact = () => {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d Love to Hear From You</p>
      </section>

      {/* Contact Details + Form */}
      <section className="contact-main">
        <div className="contact-details">
          <h2>Contact Details</h2>
          <p>
            Have any questions regarding our services? Get in touch with us!
            Find your dream vehicle or get the best treatment for your vehicle with
            WheelsDeal.
          </p>

          <ul>
            <li>📍 WheelsDeal, Main Office, Colombo, Sri Lanka</li>
            <li>📞 +94 77 123 4567</li>
            <li>📧 info@wheelsdeal.lk</li>
          </ul>

          <div className="social-links">
            <p>Follow Us:</p>
            <div className="icons">
              <a href="#">🌐</a>
              <a href="#">📘</a>
              <a href="#">📸</a>
              <a href="#">🐦</a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Reach Out to Us to Find Your Dream Vehicle</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number" />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Message"></textarea>
            <button type="button">Send</button>
          </form>
        </div>
      </section>

      {/* Branch Network */}
      <section className="branches">
        <h2>Branch Network</h2>
        <div className="branch-grid">
          <div className="branch-card">
            <h3>Colombo</h3>
            <p>No. 80, Ramakrishna Road, Colombo 06, Sri Lanka</p>
          </div>
          <div className="branch-card">
            <h3>Kandy</h3>
            <p>No. 14/76, Katugastota Road, Kandy, Sri Lanka</p>
          </div>
          <div className="branch-card">
            <h3>Matara</h3>
            <p>No. 186, Matara Galle Road, Matara, Sri Lanka</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contact;
