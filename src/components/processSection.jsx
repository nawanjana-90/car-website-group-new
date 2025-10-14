import React from 'react';
import "./processSection.css"
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import d from "../assets/d.jpg";    

const ProcessSection = ({ bookingRef }) => {
    // Function to handle the smooth scroll
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
                {/* Step 1: Booking */}
                <div className="step">
                    <div className="step-icon"></div>
                    {/* Assuming you have a.png in your public folder */}
                    <img src="a.jpg" alt="Booking" className="section-img" /> 
                    <h3>Booking</h3>
                    <p>Book your vehicle service with us to give the best treatment for your vehicle.</p>
                </div>
                
                <div className="arrow">→</div>

                {/* Step 2: Inspection */}
                <div className="step">
                    <div className="step-icon"></div>
                    <img src="b.jpg" alt="Inspection" className="section-img" />
                    <h3>Inspection</h3>
                    <p>Our process starts with this stage where our team will inspect the cause behind the fault.</p>
                </div>
                
                <div className="arrow">→</div>

                {/* Step 3: Execution */}
                <div className="step">
                    <div className="step-icon"></div>
                    <img src="c.jpg" alt="Execution" className="section-img" />
                    <h3>Execution</h3>
                    <p>Our team is specialized in finding the perfect solution for your vehicle problems.</p>
                </div>
                
                <div className="arrow">→</div>

                {/* Step 4: Completion */}
                <div className="step">
                    <div className="step-icon"></div>
                    <img src="d.jpg" alt="Completion" className="section-img" />
                    <h3>Completion</h3>
                    <p>We deliver your vehicle to your hands only after ensuring that it is ready for your ride.</p>
                </div>
            </div>
            
        </section>
    );
};

export default ProcessSection;