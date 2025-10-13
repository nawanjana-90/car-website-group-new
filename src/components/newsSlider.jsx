import React from 'react';
import news1 from '../assets/news1.jpg';
import '../App.css';

const NewsSlider = () => (
  <section className="news-slider">
    <h2>Latest News</h2>
    <div className="slider">
      <div className="slide">
        <img src={news1} alt="News 1" />
        <p>Latest Announcement 1</p>
      </div>
      <div className="slide">
        <img src={news1} alt="News 2" />
        <p>Latest Announcement 2</p>
      </div>
    </div>
  </section>
);

export default NewsSlider;
