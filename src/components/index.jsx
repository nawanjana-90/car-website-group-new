// src/components/Home.jsx
import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { FaMoneyBillWave, FaUsers, FaTruck } from "react-icons/fa";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.png";
import "./home.css"; // ✅ External CSS import

function home() {
  const featuredCars = [car1, car2, car3, car4];
  const [currentImage, setCurrentImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [currentNews, setCurrentNews] = useState(0);

  // Auto slide cars
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % featuredCars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [featuredCars.length]);

  // Auto slide news
  const newsItems = [
    {
      title: "Auto Apex Group Launches New SUV 2025",
      description:
        "Auto Apex Group introduces the new 2025 SUV model with advanced safety features and a modern design.",
      image: car1,
    },
    {
      title: "Luxury Car Fair in Colombo",
      description:
        "Join us at the Colombo Auto Show to explore a range of luxury vehicles and exclusive offers.",
      image: car2,
    },
    {
      title: "Electric Cars Coming Soon",
      description:
        "Our eco-friendly electric cars will hit the market soon, combining power with sustainability.",
      image: car3,
    },
    {
      title: "Apex Auto Wins Excellence Award",
      description:
        "We are proud to receive the Best Automotive Dealer Award 2025 for outstanding service.",
      image: car4,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div className="home-container">
      <h1>Welcome to Apex Auto Group</h1>
      <p>
        Apex Auto Group offers high-quality Mahindra and luxury cars with
        trusted service, affordable prices, and excellent customer satisfaction.
      </p>

      {/* Featured Car Slider */}
      <div className="featured-slider">
        {!showVideo ? (
          <>
            <img
              src={featuredCars[currentImage]}
              alt="Featured Car"
              className="featured-image"
            />
            <button onClick={() => setShowVideo(true)} className="view-btn">
              View Details
            </button>
            <div className="dots">
              {featuredCars.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentImage ? "active" : ""}`}
                ></span>
              ))}
            </div>
          </>
        ) : (
          <video controls autoPlay className="featured-video">
            <source src="/videos/carVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* Why Choose Section */}
      <section className="why-choose">
        <h2>
          Why choose <span>WheelsDeal</span> ?
        </h2>
        <p>Discover why thousands of customers choose us for their dream cars.</p>

        <div className="features">
          <div className="feature-box">
            <FaMoneyBillWave size={40} color="orange" />
            <h3>Financing Options</h3>
            <p>Flexible car financing options designed to fit your budget.</p>
          </div>
          <div className="feature-box">
            <FaUsers size={40} color="orange" />
            <h3>Satisfied Customers</h3>
            <p>Thousands of happy customers trust us for quality and service.</p>
          </div>
          <div className="feature-box">
            <FaTruck size={40} color="orange" />
            <h3>Fast & Easy Booking</h3>
            <p>Book your dream car instantly with just a few clicks.</p>
          </div>
        </div>
      </section>

      {/* News Slider */}
      <section className="news-section">
        <h2>
          Latest <span>News & Updates</span>
        </h2>
        <div className="news-slider">
          <div
            className="news-track"
            style={{
              transform: `translateX(-${currentNews * 100}%)`,
              width: `${newsItems.length * 100}%`,
            }}
          >
            {newsItems.map((news, index) => (
              <div key={index} className="news-card">
                <img src={news.image} alt={news.title} />
                <h3>{news.title}</h3>
                <p>{news.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default home;
