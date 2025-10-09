import React, { useEffect, useState, useRef } from "react";

const NewsSlider = ({ slides = [], interval = 3500 }) => {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);

  useEffect(() => {
    const start = () => {
      stop();
      timer.current = setInterval(() => {
        setIndex((i) => (i + 1) % slides.length);
      }, interval);
    };
    const stop = () => {
      if (timer.current) clearInterval(timer.current);
    };
    start();
    return stop;
  }, [slides, interval]);

  if (!slides.length) return null;

  return (
    <section id="news" className="max-w-6xl px-4 py-8 mx-auto">
      <h3 className="mb-4 text-xl font-semibold">Latest News</h3>
      <div className="relative p-4 bg-white shadow-sm rounded-xl">
        <p className="text-gray-700">{slides[index].text}</p>
        <div className="mt-2 text-xs text-gray-500">{slides[index].date}</div>
      </div>
    </section>
  );
};

export default NewsSlider;
