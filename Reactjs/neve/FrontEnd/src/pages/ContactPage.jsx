import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ContactPage() {
  useEffect(() => window.scrollTo(0, 0), []);
  const navigate = useNavigate();

  const contactDetails = [
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Address',
      text: '123 Design Street, Creative City, 12345',
    },
    {
      icon: 'fas fa-phone-alt',
      label: 'Phone',
      text: '+91-8657335082',
    },
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      text: 'info@neveagency.com',
      isEmail: true,
    },
    {
      icon: 'fas fa-clock',
      label: 'Business Hours',
      text: 'Monday – Friday: 9:00 AM – 5:00 PM',
    },
  ];

  return (
    <div className="contact-page page-content fade-in" style={{ marginTop: '-1px' }}>
      {/* Hero Section */}
      <div className="page-header text-white text-center" style={{ backgroundColor: '#222', padding: '80px 0' }}>
        <h1>Connect with Neve Agency</h1>
        <p className="hero-subtitle" style={{ fontSize: '1.1rem', maxWidth: '650px', margin: '0 auto' }}>
          Let’s create something amazing together. Whether you're looking to collaborate or get work done, we're here for you.
        </p>
      </div>

      {/* Cards Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="bg-white rounded shadow-sm border p-4 h-100 d-flex flex-column justify-content-between" style={{ minHeight: '300px' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: '#000' }}>Your Project, Our Expertise</h3>
                  <hr style={{ borderTop: '3px solid #f4b400', width: '40px' }} />
                  <p style={{ fontSize: '1rem', color: '#555' }}>
                    Need branding, design, or development services? We’ll craft a solution tailored to your vision and goals.
                  </p>
                </div>
                <button 
                  onClick={() => navigate('/get-work-done')} 
                  className="btn mt-3"
                  style={{ 
                    fontSize: '1rem', 
                    padding: '10px 25px', 
                    backgroundColor: '#f4b400', 
                    color: '#000', 
                    border: 'none' 
                  }}>
                  Learn More
                </button>
              </div>
            </div>

            <div className="col-md-6">
              <div className="bg-white rounded shadow-sm border p-4 h-100 d-flex flex-column justify-content-between" style={{ minHeight: '300px' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: '600', color: '#000' }}>Join Our Creative Team</h3>
                  <hr style={{ borderTop: '3px solid #f4b400', width: '40px' }} />
                  <p style={{ fontSize: '1rem', color: '#555' }}>
                    Are you a designer, developer, or strategist? Let’s work together on exciting projects that inspire.
                  </p>
                </div>
                <button 
                  onClick={() => navigate('/work-with-us')} 
                  className="btn mt-3"
                  style={{ 
                    fontSize: '1rem', 
                    padding: '10px 25px', 
                    backgroundColor: '#f4b400', 
                    color: '#000', 
                    border: 'none' 
                  }}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <p style={{ fontSize: '1.2rem', color: '#000', fontWeight: 500 }}>
              Feel free to drop by or reach out — we’d love to hear from you!
            </p>
          </div>

          <div className="row">
            {/* Contact Info Section */}
            <div className="col-md-6 mb-4 text-center">
              <h3 style={{ fontSize: '2rem', fontWeight: '600', color: '#000' }}>Contact Information</h3>
              <div
                style={{
                  backgroundColor: '#eaeef3',
                  padding: '25px 30px',
                  borderRadius: '10px',
                  height: '350px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  textAlign: 'left'
                }}
              >
                {contactDetails.map((item, idx) => (
                  <div key={idx}>
                    <p style={{ marginBottom: 4, fontWeight: 500 }}>
                      <i className={item.icon} style={{ color: '#f4b400', marginRight: 10 }}></i>
                      {item.label}
                    </p>
                    {item.isEmail ? (
                      <a href={`mailto:${item.text}`} style={{ color: '#333', textDecoration: 'none', fontSize: '1rem' }}>
                        {item.text}
                      </a>
                    ) : (
                      <p style={{ marginTop: 0, fontSize: '1rem', color: '#333' }}>{item.text}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Map Section */}
            <div className="col-md-6 text-center">
              <h3 style={{ fontSize: '2rem', fontWeight: '600', color: '#000' }}>Our Location</h3>
              <div className="bg-white rounded overflow-hidden shadow-sm" style={{ height: '350px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122103.70344881937!2d81.80635805!3d16.9872987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a3f2440c9fff%3A0x86b24503e305ca21!2sRajamahendravaram%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1745657664432!5m2!1sen!2sin"
                  width="100%" height="100%" style={{ border: 0 }} loading="lazy" allowFullScreen="" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
