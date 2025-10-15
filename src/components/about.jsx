import React from "react";
import "./about.css";  
import car1 from "../assets/car1.png";
import showroom from "../assets/showroom.jpg"; // add your own showroom image
import team1 from "../assets/team1.jpg"; // add your own team images
import team2 from "../assets/team2.jpg";
import team3 from "../assets/team3.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Card Section */}
      <div className="hero-card-section">
        <div className="hero-card">
          <div className="card-glow"></div>
          <div className="hero-card-content">
            <div className="hero-badge">Since 2020</div>
            <h1 className="hero-title">Our Story</h1>
            <p className="hero-subtitle">
              Driving automotive excellence with passion and innovation
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">1K+</div>
                <div className="stat-label">Customers</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Brands</div>
              </div>
            </div>
          </div>
          <div className="hero-card-visual">
            <div className="floating-element"></div>
            <img src={car1} alt="Luxury Car" className="hero-car-image" />
          </div>
        </div>
      </div>

      {/* Company Story */}
      <div className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <h2>Welcome to AutoDrive Motors</h2>
              <p>
                Founded in 2020, AutoDrive Motors began with a simple vision: to transform 
                the car-buying experience into something transparent, enjoyable, and trustworthy. 
                What started as a small family business has grown into one of the region's 
                most respected automotive dealerships.
              </p>
              <p>
                Our journey began when our founder, John Anderson, noticed a gap in the market 
                for honest, customer-focused car dealerships. With over 15 years of experience 
                in the automotive industry, he set out to create a place where customers could 
                feel confident and valued throughout their car-buying journey.
              </p>
              <div className="founder-quote">
                <div className="quote-icon">❝</div>
                <div className="quote-text">
                  "Our commitment has always been to treat every customer like family. 
                  When you choose AutoDrive Motors, you're not just buying a car - 
                  you're joining a community that cares about your automotive journey."
                </div>
                <div className="quote-author">
                  - John Anderson, Founder & CEO
                </div>
              </div>
            </div>
            <div className="story-image">
              <img src={showroom} alt="AutoDrive Motors Showroom" />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust & Transparency</h3>
              <p>
                We believe in complete honesty with our customers. No hidden fees, 
                no surprises - just straightforward, transparent pricing and service.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Quality Assurance</h3>
              <p>
                Every vehicle in our inventory undergoes rigorous inspection to ensure 
                it meets our high standards of quality and reliability.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">💝</div>
              <h3>Customer First</h3>
              <p>
                Your satisfaction is our priority. We go above and beyond to ensure 
                every customer has an exceptional experience with us.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>
                We continuously embrace new technologies and practices to improve 
                our services and stay ahead in the automotive industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-image">
                <img src={team1} alt="John Anderson" />
              </div>
              <div className="team-info">
                <h3>John Anderson</h3>
                <p className="team-role">Founder & CEO</p>
                <p className="team-bio">
                  With over 15 years in the automotive industry, John leads our 
                  company with passion and dedication to customer satisfaction.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src={team2} alt="Sarah Chen" />
              </div>
              <div className="team-info">
                <h3>Sarah Chen</h3>
                <p className="team-role">Sales Director</p>
                <p className="team-bio">
                  Sarah brings 8 years of sales expertise and a genuine love for 
                  helping customers find their perfect vehicle.
                </p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-image">
                <img src={team3} alt="Michael Rodriguez" />
              </div>
              <div className="team-info">
                <h3>Michael Rodriguez</h3>
                <p className="team-role">Service Manager</p>
                <p className="team-bio">
                  Michael ensures every vehicle meets our quality standards with 
                  his extensive mechanical expertise and attention to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <div className="card-header">
                <div className="card-icon">🎯</div>
                <h2>Our Mission</h2>
              </div>
              <p>
                To provide exceptional automotive solutions through transparent practices, 
                quality vehicles, and unparalleled customer service. We strive to make 
                car ownership accessible and enjoyable for everyone.
              </p>
              <div className="mission-points">
                <div className="point">✓ Quality Vehicles</div>
                <div className="point">✓ Honest Pricing</div>
                <div className="point">✓ Exceptional Service</div>
              </div>
            </div>
            <div className="vision-card">
              <div className="card-header">
                <div className="card-icon">🔭</div>
                <h2>Our Vision</h2>
              </div>
              <p>
                To become the most trusted automotive destination, setting new standards 
                in customer experience while embracing innovation and sustainable practices 
                in everything we do.
              </p>
              <div className="vision-points">
                <div className="point">✓ Industry Leadership</div>
                <div className="point">✓ Customer Trust</div>
                <div className="point">✓ Sustainable Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Ready to Experience the AutoDrive Difference?</h2>
            <p>Visit us today and discover why thousands of customers trust us with their automotive needs.</p>
            <div className="cta-buttons">
              <button className="cta-button primary">Visit Our Showroom</button>
              <button className="cta-button secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
