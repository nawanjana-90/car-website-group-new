import React, { useRef } from "react";
import ProcessSection from "./processSection";
import BookingSection from "./bookingSection";
import "./processSection.css";

const Service = () => {
  // Create a ref for the BookingSection
  const bookingRef = useRef(null);

  return (
    <div className="service-page">
      {/* Hero / Intro section */}
      <section className="service-hero">
        <h1>Our Services</h1>
        <p>Quality vehicle care with integrity and speed.</p>
      </section>

      {/* Process Section */}
      <ProcessSection bookingRef={bookingRef} />

      {/* Booking Section */}
      <BookingSection ref={bookingRef} />
    </div>
  );
};

export default Service;
