import React, { useState } from 'react';
import './Careers.css';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    message: '',
    cv: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      cv: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will contact you soon.');
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      message: '',
      cv: null
    });
  };

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <div className="careers-hero-content">
            <h1>CAREERS AT INDRA TRADERS</h1>
            <p className="hero-subtitle">Name: Careers</p>
          </div>
        </div>
      </section>

      {/* Life at Indra Traders Section */}
      <section className="life-at-indra section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Life At Indra Traders</h2>
            <p className="section-description">
              Working at Indra Traders will mean not only your extensive knowledge about the latest vehicle models, 
              but also becoming a part of a team that is tightly woven together as a family.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>What You Can Achieve</h3>
              <p>
                Indra Traders is ever-changing, ever-expanding. Opportunities at Indra are immense and varied, 
                and give you ample space to grow in the corporate field.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Win With Us</h3>
              <p>
                Join with us and become a part of Indra Traders, and tie up with the winning streak of a long 
                lasting and established vehicle trade company in Sri Lanka.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Online Section */}
      <section className="apply-section section">
        <div className="container">
          <div className="apply-content">
            <div className="apply-header">
              <h2 className="section-title">Apply Online</h2>
              <p className="apply-description">
                Apply online by filling the below form and attach your CV. We will contact you as soon as we find 
                the best opportunity for you.
              </p>
            </div>

            <form className="application-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="position">Applying Position (Required)</label>
                  <select
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select a position</option>
                    <option value="sales-executive">Sales Executive</option>
                    <option value="sales-manager">Sales Manager</option>
                    <option value="vehicle-specialist">Vehicle Specialist</option>
                    <option value="customer-service">Customer Service Representative</option>
                    <option value="finance-advisor">Finance Advisor</option>
                    <option value="service-technician">Service Technician</option>
                    <option value="marketing-specialist">Marketing Specialist</option>
                    <option value="administrative-assistant">Administrative Assistant</option>
                  </select>
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Tell us why you want to join Indra Traders..."
                ></textarea>
              </div>

              <div className="form-group full-width">
                <label htmlFor="cv" className="file-label">
                  Upload Your CV (Required)
                </label>
                <div className="file-input-wrapper">
                  <input
                    type="file"
                    id="cv"
                    name="cv"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <span className="file-custom">
                    {formData.cv ? formData.cv.name : 'No file chosen'}
                  </span>
                </div>
                <small className="file-hint">Accepted formats: PDF, DOC, DOCX</small>
              </div>

              <button type="submit" className="submit-btn">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;