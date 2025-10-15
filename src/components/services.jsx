import React, { useRef } from "react";
import ProcessSection from "./processSection";
import BookingSection from "./bookingSection";
import "./processSection.css";

const Service = () => {
  // Create a ref for the BookingSection
  const bookingRef = useRef(null);

  return (
    <div className="service-page">

      {/* Process Section */}
      <ProcessSection bookingRef={bookingRef} />

      {/* Booking Section */}
      <BookingSection ref={bookingRef} />
    </div>
  );
};

export default Service;
