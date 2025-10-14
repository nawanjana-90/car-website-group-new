import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import { FaMoneyBillWave, FaUsers, FaTruck } from "react-icons/fa";
import car1 from "../assets/car1.png";
import car2 from "../assets/car2.png";
import car3 from "../assets/car3.jpg";
import car4 from "../assets/car4.png";

function Home() {
  const featuredCars = [car1, car2, car3, car4];
  const [currentImage, setCurrentImage] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % featuredCars.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [featuredCars.length]);

  const handleViewDetails = () => {
    setShowVideo(true);
  };

  // 📰 News Data
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

  const [currentNews, setCurrentNews] = useState(0);

  // Auto scroll news every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNews((prev) => (prev + 1) % newsItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  return (
    <div
      className="home-container"
      style={{
        textAlign: "center",
        minHeight: "100vh",
        backgroundColor: "black",
        color: "white",
        padding: "50px",
      }}
    >
      <h1 style={{ color: "orange", marginTop: "50px" }}>
        Welcome to Apex Auto Group
      </h1>
      <p style={{ color: "white", marginTop: "20px" }}>
        Apex Auto Group offers high-quality Mahindra and luxury cars with
        trusted service, affordable prices, and excellent customer satisfaction.
      </p>

      {/* Featured Car Slider */}
      <div
        className="featured-slider"
        style={{
          position: "relative",
          width: "80%",
          margin: "40px auto",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        {!showVideo ? (
          <>
            <img
              src={featuredCars[currentImage]}
              alt="Featured Car"
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "15px",
              }}
            />
            <button
              onClick={handleViewDetails}
              style={{
                marginTop: "15px",
                padding: "10px 20px",
                backgroundColor: "orange",
                border: "none",
                borderRadius: "8px",
                color: "black",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              View Details
            </button>

            {/* Dots for slider */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              {featuredCars.map((_, index) => (
                <span
                  key={index}
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor:
                      index === currentImage ? "orange" : "gray",
                    borderRadius: "50%",
                    margin: "0 5px",
                    display: "inline-block",
                  }}
                ></span>
              ))}
            </div>
          </>
        ) : (
          <video
            controls
            autoPlay
            style={{
              width: "100%",
              height: "400px",
              borderRadius: "15px",
            }}
          >
            {/* NOTE: Make sure you have a video file at 'public/videos/carVideo.mp4' */}
            <source src="/videos/carVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      {/* 🟧 Why Choose Section */}
      <section
        style={{
          backgroundColor: "black",
          padding: "60px 0",
        }}
      >
        <h2 style={{ color: "white", fontSize: "2em", marginBottom: "10px" }}>
          Why choose <span style={{ color: "orange" }}>WheelsDeal</span> ?
        </h2>
        <p style={{ color: "white", marginBottom: "40px" }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
          voluptatem.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px",
            width: "80%",
            margin: "auto",
          }}
        >
          {/* Financing Options */}
          <div
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "10px",
              padding: "30px",
              width: "300px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(255, 165, 0, 0.2)",
            }}
          >
            <FaMoneyBillWave size={40} color="orange" />
            <h3 style={{ color: "orange", marginTop: "15px" }}>
              Financing Options
            </h3>
            <p style={{ color: "white", marginTop: "10px" }}>
              Flexible car financing options designed to fit your budget.
            </p>
          </div>

          {/* Satisfied Customers */}
          <div
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "10px",
              padding: "30px",
              width: "300px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(255, 165, 0, 0.2)",
            }}
          >
            <FaUsers size={40} color="orange" />
            <h3 style={{ color: "orange", marginTop: "15px" }}>
              Satisfied Customers
            </h3>
            <p style={{ color: "white", marginTop: "10px" }}>
              Thousands of happy customers trust us for quality and service.
            </p>
          </div>

          {/* Fast & Easy Booking */}
          <div
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: "10px",
              padding: "30px",
              width: "300px",
              textAlign: "center",
              boxShadow: "0 0 10px rgba(255, 165, 0, 0.2)",
            }}
          >
            <FaTruck size={40} color="orange" />
            <h3 style={{ color: "orange", marginTop: "15px" }}>
              Fast & Easy Booking
            </h3>
            <p style={{ color: "white", marginTop: "10px" }}>
              Book your dream car instantly with just a few clicks.
            </p>
          </div>
        </div>
      </section>

      {/* 📰 News Slider Section */}
      <section style={{ marginTop: "80px", marginBottom: "80px" }}>
        <h2 style={{ color: "white", fontSize: "2em", marginBottom: "30px" }}>
          Latest <span style={{ color: "orange" }}>News & Updates</span>
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            position: "relative",
            width: "80%",
            margin: "auto",
          }}
        >
          {/* FIX: The style attribute now correctly uses a single set of curly braces {} 
                   and backticks `` for the template literal string. */}
          <div
            style={{
              display: "flex",
              transition: "transform 0.8s ease",
              transform: `translateX(-${currentNews * 100}%)`,
              width: `${newsItems.length * 100}%`,
            }}
          >
            {newsItems.map((news, index) => (
              <div
                key={index}
                style={{
                  minWidth: `${100 / newsItems.length}%`, // FIX: Use percentage width for items inside slider
                  backgroundColor: "#1a1a1a",
                  borderRadius: "10px",
                  padding: "20px",
                  color: "white",
                  textAlign: "center",
                  boxShadow: "0 0 10px rgba(255,165,0,0.2)",
                  // Set width relative to the number of items
                  boxSizing: "border-box", 
                }}
              >
                <img
                  src={news.image}
                  alt={news.title}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    marginBottom: "15px",
                  }}
                />
                <h3 style={{ color: "orange" }}>{news.title}</h3>
                <p style={{ marginTop: "10px", color: "white" }}>
                  {news.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;