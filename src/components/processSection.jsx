// src/ProcessSection.jsx
import React from 'react';
import "./processSection.css";

// Import images
import aImg from "../assets/a.jpg";
import bImg from "../assets/b.jpg";
import cImg from "../assets/c.jpg";
import dImg from "../assets/d.jpg";

const ProcessSection = ({ bookingRef }) => {
    const handleScrollToBooking = () => {
        if (bookingRef && bookingRef.current) {
            bookingRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="process-section">
            <h2 className="title-main">
                <span className="title-black">OUR</span> <span className="title-orange">PROCESS.</span>
            </h2>
            <p className="subtitle">OUR STRATEGIC PRACTICES</p>

            <div className="process-steps">
                <div className="step">
                    <img src={aImg} alt="Booking" className="section-img" />
                    <h3>Booking</h3>
                    <p>Book your vehicle service with us to give the best treatment for your vehicle.</p>
                </div>
                <div className="arrow">→</div>
                <div className="step">
                    <img src={bImg} alt="Inspection" className="section-img" />
                    <h3>Inspection</h3>
                    <p>Our process starts with this stage where our team will inspect the cause behind the fault.</p>
                </div>
                <div className="arrow">→</div>
                <div className="step">
                    <img src={cImg} alt="Execution" className="section-img" />
                    <h3>Execution</h3>
                    <p>Our team is specialized in finding the perfect solution for your vehicle problems.</p>
                </div>
                <div className="arrow">→</div>
                <div className="step">
                    <img src={dImg} alt="Completion" className="section-img" />
                    <h3>Completion</h3>
                    <p>We deliver your vehicle to your hands only after ensuring that it is ready for your ride.</p>
                </div>
            </div>

            <button 
                className="btn-orange" 
                onClick={handleScrollToBooking}
            >
                Book Your Services
            </button>
        </section>
    );
};

export default ProcessSection;
