import React from 'react';

function Features() {
  return (
    <section className="features py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div className="feature-icon">
              <i className="fas fa-check-circle"></i>
            </div>
            <h3 className="mt-3">Fixed Price Projects</h3>
            <p className="text-muted">Lorem ipsum dolor sit amet elit do eiusmod tempor incididunt labore et dolore</p>
          </div>
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div className="feature-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3 className="mt-3">Receive on time</h3>
            <p className="text-muted">Lorem ipsum dolor sit amet elit do eiusmod tempor incididunt labore et dolore</p>
          </div>
          <div className="col-md-4 text-center">
            <div className="feature-icon">
              <i className="fa-solid fa-gauge-high"></i>
            </div>
            <h3 className="mt-3">Fast work turnaround</h3>
            <p className="text-muted">Lorem ipsum dolor sit amet elit do eiusmod tempor incididunt labore et dolore</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;