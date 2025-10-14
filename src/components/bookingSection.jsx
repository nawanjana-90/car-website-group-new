// src/BookingSection.jsx
import React, { useState, forwardRef } from 'react';
import "../components/processSection.css"

// Use forwardRef to allow the parent (App) component to attach a ref for scrolling
const BookingSection = forwardRef((props, ref) => {
    // State to manage form data
    const [formData, setFormData] = useState({
        service: '',
        name: '',
        mobile: '',
        branch: '',
    });

    // Handle input/select changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        const { service, name, mobile, branch } = formData;

        // Basic validation
        if (!service || !name.trim() || !mobile.trim() || !branch) {
            alert('⚠ Please fill out all fields.');
            return;
        }

        // Get display names for the alert
        const serviceText = event.target.serviceList.options[event.target.serviceList.selectedIndex].text;
        const branchText = event.target.branchList.options[event.target.branchList.selectedIndex].text;

        // Success alert message
        alert(`✅ Service Booked Successfully!
Name: ${name}
Service: ${serviceText}
Branch: ${branchText}
We'll call you shortly on ${mobile} to confirm.`);

        // Reset the form after successful submission
        setFormData({
            service: '',
            name: '',
            mobile: '',
            branch: '',
        });
    };

    return (
        // Attach the received ref to the section element for scrolling
        <section className="booking-section" id="booking-section" ref={ref}>
            <div className="booking-header">
                <h2 className="title-main">
                    <span className="title-black">BOOK</span> <span className="title-orange">YOUR SERVICE</span>
                </h2>
                <p className="subtitle">RIDE AND SHINE</p>
            </div>

            <div className="form-container">
                <form id="serviceForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <select 
                            id="serviceList" 
                            value={formData.service} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="" disabled>Service List</option>
                            <option value="oil-change">Oil Change</option>
                            <option value="full-service">Full Service</option>
                            <option value="body-wash">Body Wash</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <input 
                            type="text" 
                            id="name" 
                            placeholder="Name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <input 
                            type="tel" 
                            id="mobile" 
                            placeholder="Mobile" 
                            value={formData.mobile} 
                            onChange={handleChange} 
                            required 
                            pattern="[0-9]{10,15}"
                        />
                    </div>
                    
                    <div className="form-group">
                        <select 
                            id="branchList" 
                            value={formData.branch} 
                            onChange={handleChange} 
                            required
                        >
                            <option value="" disabled>Branch List</option>
                            <option value="main-branch">Main Branch (City Center)</option>
                            <option value="west-branch">West Side Branch</option>
                            <option value="east-branch">East Side Branch</option>
                        </select>
                    </div>

                    <button type="submit" className="btn-submit">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
});

export default BookingSection;