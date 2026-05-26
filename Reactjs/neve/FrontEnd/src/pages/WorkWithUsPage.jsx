import React, { useState, useEffect } from 'react';
import '../App.css';
import { FaHandsHelping } from 'react-icons/fa'; // add this icon package

function WorkWithUsPage() {
  useEffect(() => window.scrollTo(0, 0), []);

  const [formData, setFormData] = useState({
    name: '', email: '', skills: '', portfolio: '', bio: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.skills) formErrors.skills = 'Skills are required';
    if (!formData.portfolio && formData.portfolio !== '') formErrors.portfolio = 'Portfolio link is required';
    if (!formData.bio) formErrors.bio = 'Bio is required';
    return formErrors;
  };

// Updated WorkWithUsPage.jsx - Only the handleSubmit function changes
const handleSubmit = async (e) => {
  e.preventDefault();

  const formErrors = validateForm();
  if (Object.keys(formErrors).length > 0) {
    setErrors(formErrors);
    return;
  }

  try {
    // Send form data to backend
    const response = await fetch('http://localhost:5000/api/forms/work-with-us', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    
    if (data.success) {
      console.log('Form submitted successfully:', formData);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', skills: '', portfolio: '', bio: '' });
      setTimeout(() => setFormSubmitted(false), 4000);
    } else {
      // Handle error response from server
      alert('Error: ' + data.message);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Failed to submit form. Please try again later.');
  }
};

  return (
    <div className="page-content fade-in" style={{ marginTop: '-1px' }}>
      <div className="page-header text-white text-center" style={{ backgroundColor: '#222' }}>
        <div className="container">
          <h1 className="mb-3">Join Our Team</h1>
        </div>
      </div>

      <section className="py-5 position-relative form-section-upgraded">
        <div className="container d-flex flex-column flex-lg-row align-items-stretch gap-5">
          {/* Left Side: Heading with Icon and Subtext */}
          <div className="col-lg-5 d-flex flex-column justify-content-center text-section">
            <h2 className="mb-2">
             <FaHandsHelping
  className="me-2 text-primary icon-silver"
  style={{ fontSize: '2rem', verticalAlign: 'middle' }}  // Inline style keeps the size and alignment
/>

              Work With Us
            </h2>
            <p className="text-muted small-text">
              Ready to collaborate, create and innovate? Drop us your details and let’s build something amazing.
            </p>
          </div>

          {/* Right Side: Form */}
          <div className="col-lg-7 form-box p-4 shadow-sm rounded bg-white">
            {formSubmitted ? (
              <div className="alert alert-success">🎉 Thank you! We’ll get in touch soon.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                {['name', 'email', 'skills', 'portfolio', 'bio'].map((field, index) => (
                  <div className="mb-3" key={index}>
                    <label className="form-label text-capitalize" htmlFor={field}>
                      {field === 'bio' ? 'Tell us about yourself' : field === 'portfolio' ? 'Portfolio Link' : `Your ${field}`}
                    </label>
                    {field === 'bio' ? (
                      <textarea
                        name={field}
                        id={field}
                        className="form-control"
                        value={formData[field]}
                        onChange={handleChange}
                        required
                        rows="4"
                        aria-label={`Enter your ${field}`}
                      />
                    ) : (
                      <input
                        name={field}
                        id={field}
                        type={field === 'email' ? 'email' : 'text'}
                        className="form-control"
                        value={formData[field]}
                        onChange={handleChange}
                        required={field !== 'portfolio'}
                        aria-label={`Enter your ${field}`}
                      />
                    )}
                    {errors[field] && <small className="text-danger">{errors[field]}</small>}
                  </div>
                ))}
                <button type="submit" className="btn btn-primary">Submit Application</button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkWithUsPage;
