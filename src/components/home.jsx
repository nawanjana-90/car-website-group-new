import React from 'react';
import '../App.css'; 

const Home = () => {
  return (
    <div>
      <div className="hero-section" id="home">
        
        <div className="hero-content">
          <div className="hero-text-container">
            <h1>Find Your Perfect Ride Today</h1>
            <h2>Over 1000+ New Cars Available Here</h2>
            <p className="description-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              A aperiam recusandae
              ratione ducimus molestias ab neque accusamus eveniet cumque corrupti.
            </p>
            <div className="hero-buttons">
              <a href="/explore">
                <button className="btn-explore">Explore More</button>
              </a>
              <a href="#cars">
                <button className="btn-see-cars">See Cars</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="cars-section" id="cars">
        <h2 className="section-title">Explore Our Top Vehicles</h2>
        <p className="section-subtitle">Find the perfect car that fits your style and budget.</p>

        <div className="car-grid">
          <div className="car-card">
            <img src="https://via.placeholder.com/300x200?text=Luxury+Car" alt="Luxury Sedan" className="car-image"/>
            <div className="car-info">
              <h3>Toyota Camry 2024</h3>
              <p className="car-price">$35,000</p>
              <div className="car-details">
                <span><i className="fas fa-gas-pump"></i> Petrol</span>
                <span><i className="fas fa-tachometer-alt"></i> Automatic</span>
                <span><i className="fas fa-road"></i> 0 km</span>
              </div>
              <button className="btn-view-details">View Details</button>
            </div>
          </div>

          <div className="car-card">
            <img src="https://via.placeholder.com/300x200?text=SUV+Model" alt="Modern SUV" className="car-image"/>
            <div className="car-info">
              <h3>Honda CRV 2023</h3>
              <p className="car-price">$42,500</p>
              <div className="car-details">
                <span><i className="fas fa-gas-pump"></i> Hybrid</span>
                <span><i className="fas fa-tachometer-alt"></i> Automatic</span>
                <span><i className="fas fa-road"></i> 5,000 km</span>
              </div>
              <button className="btn-view-details">View Details</button>
            </div>
          </div>

          <div className="car-card">
            <img src="https://via.placeholder.com/300x200?text=Electric+Vehicle" alt="Electric Hatchback" className="car-image"/>
            <div className="car-info">
              <h3>Nissan Leaf 2022</h3>
              <p className="car-price">$28,900</p>
              <div className="car-details">
                <span><i className="fas fa-gas-pump"></i> Electric</span>
                <span><i className="fas fa-tachometer-alt"></i> Automatic</span>
                <span><i className="fas fa-road"></i> 12,000 km</span>
              </div>
              <button className="btn-view-details">View Details</button>
            </div>
          </div>

        </div>

        <a href="/all-cars">
          <button className="btn-all-cars">View All 1000+ Cars</button>
        </a>
      </section>

      <section className="our-services-section" id="services">
        <h2 className="section-title">Why Choose WheelsDeal?</h2>
        
        <div className="service-card-container">
          
          <div className="service-card">
            <div className="service-icon-wrapper">
              <i className="service-icon fas fa-comments" style={{ color: '#ff8c00' }}></i>
            </div>
            <h3 className="service-title">Expert Consultation</h3>
            <p className="service-description">
              Get personalized advice from our experienced car specialists to find the perfect vehicle for you.
            </p>
            <a href="#" className="service-read-more">Read More &rarr;</a>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <i className="service-icon fas fa-shield-alt" style={{ color: '#0d0d0d' }}></i>
            </div>
            <h3 className="service-title">Trusted Warranty</h3>
            <p className="service-description">
              Every car comes with a comprehensive warranty package for complete peace of mind and protection.
            </p>
            <a href="#" className="service-read-more">Read More &rarr;</a>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <i className="service-icon fas fa-money-check-alt" style={{ color: '#ff8c00' }}></i>
            </div>
            <h3 className="service-title">Easy Financing</h3>
            <p className="service-description">
              We offer flexible and low-interest financing options tailored to suit your budget and needs.
            </p>
            <a href="#" className="service-read-more">Read More &rarr;</a>
          </div>

          <div className="service-card">
            <div className="service-icon-wrapper">
              <i className="service-icon fas fa-wrench" style={{ color: '#0d0d0d' }}></i>
            </div>
            <h3 className="service-title">24/7 Assistance</h3>
            <p className="service-description">
              Enjoy round-the-clock roadside help and support for any unexpected situation you may face.
            </p>
            <a href="#" className="service-read-more">Read More &rarr;</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
