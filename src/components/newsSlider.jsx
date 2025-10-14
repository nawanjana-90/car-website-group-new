import React from "react";
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import "../App.css";

const NewsSlider = () => (
  <section className="news-slider" style={{ textAlign: "center", marginTop: "50px" }}>
    <h2 style={{ color: "orange", marginBottom: "20px" }}>Latest News</h2>

    <div
      className="slider"
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      <div
        className="slide"
        style={{
          backgroundColor: "#1a1a1a",
          borderRadius: "10px",
          padding: "20px",
          width: "250px",
          color: "white",
        }}
      >
        <img
          src={news1}
          alt="News 1"
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <p style={{ marginTop: "10px" }}>Latest Announcement 1</p>
      </div>

      <div
        className="slide"
        style={{
          backgroundColor: "#1a1a1a",
          borderRadius: "10px",
          padding: "20px",
          width: "250px",
          color: "white",
        }}
      >
        <img
          src={news2}
          alt="News 2"
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
        <p style={{ marginTop: "10px" }}>Latest Announcement 2</p>
      </div>
    </div>
  </section>
);

export default NewsSlider;
