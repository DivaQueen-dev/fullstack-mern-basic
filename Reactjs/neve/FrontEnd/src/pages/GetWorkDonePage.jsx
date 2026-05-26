import React, { useState, useEffect } from 'react';
import { FaRegHandshake } from 'react-icons/fa';

function GetWorkDonePage() {
  useEffect(() => window.scrollTo(0, 0), []);

  const [formData, setFormData] = useState({
    name: '', email: '', company: '', projectType: '', budget: '', message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/forms/get-work-done', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (data.success) {
        console.log('Client form submitted successfully:', formData);
        setFormSubmitted(true);
        setFormData({ name: '', email: '', company: '', projectType: '', budget: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        alert('Error: ' + data.message);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };

  return (
    <div className="page-content fade-in" style={{ marginTop: '-1px' }}>
      <div className="page-header text-white text-center" style={{ backgroundColor: '#222', padding: '27px' }}>
        <div className="container">
          <h1 className="mb-3" style={{ marginTop: '40px' }}>Start Your Project With Us</h1>
          <p className="text-muted small-text">
            Tell us what you need, and we'll make it happen.
          </p>
        </div>
      </div>

      <section className="py-5 position-relative form-section-upgraded">
        <div className="container d-flex flex-column flex-lg-row align-items-stretch gap-5">
          {/* Left Side: Form Section */}
          <div className="col-lg-7 form-box p-4 shadow-sm rounded bg-white">
            {formSubmitted ? (
              <div className="alert alert-success">🎉 Thanks for reaching out! We'll contact you soon.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-capitalize">Your Name</label>
                  <input
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-control"
                    aria-label="Enter your name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-capitalize">Your Email</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-control"
                    aria-label="Enter your email address"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-capitalize">Company Name</label>
                  <input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="form-control"
                    aria-label="Enter your company name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-capitalize">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="form-select"
                    required
                    aria-label="Select project type"
                  >
                    <option value="">Select</option>
                    <option value="web">Web Design</option>
                    <option value="branding">Branding</option>
                    <option value="marketing">Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label text-capitalize">Budget Range</label>
                  <input
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="form-control"
                    aria-label="Enter your budget range"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-capitalize">Project Details</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    required
                    aria-label="Enter project details"
                  />
                </div>
                <button type="submit" className="btn btn-primary">Submit Request</button>
              </form>
            )}
          </div>

          {/* Right Side: Text Content Section */}
          <div className="col-lg-5 d-flex flex-column justify-content-center text-section">
            <h2 className="mb-3">
              <FaRegHandshake
                className="me-2 text-primary icon-silver"
                style={{ fontSize: '2rem', verticalAlign: 'middle' }}
              />
              Let's Get Started
            </h2>
            <p className="text-muted">
              We’re excited to hear about your project. Share your ideas with us, and we’ll help bring them to life!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GetWorkDonePage;
