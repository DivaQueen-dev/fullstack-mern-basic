import React from 'react';
import testimonial1Img from '../assets/user1.png';
import testimonial2Img from '../assets/user2.jpg';
import testimonial3Img from '../assets/user3.png';

function Testimonials() {
  return (
    <section className="testimonials py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="testimonial-item d-flex" style={{ flexDirection: 'column', alignItems: 'start', textAlign: 'start' }}>
              <img src={testimonial1Img} alt="Testimonial" />
              <div className="testimonial-content ms-3">
                <p className="testimonial-text">"Here's the point of telling story if you dress up words by to an advertising vernacular?"</p>
                <p className="testimonial-author mb-0">John Doe</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4 mb-md-0">
            <div className="testimonial-item d-flex" style={{ flexDirection: 'column', alignItems: 'left', textAlign: 'start' }}>
              <img src={testimonial2Img} alt="Testimonial" />
              <div className="testimonial-content ms-3">
                <p className="testimonial-text">"Here's the point of telling story if you dress up words by to an advertising vernacular?"</p>
                <p className="testimonial-author mb-0">David Wilson</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="testimonial-item d-flex" style={{ flexDirection: 'column', alignItems: 'start', textAlign: 'start' }}>
              <img src={testimonial3Img} alt="Testimonial" className='img3'/>
              <div className="testimonial-content ms-3">
                <p className="testimonial-text">"Here's the point of telling story if you dress up words by to an advertising vernacular?"</p>
                <p className="testimonial-author mb-0">Liam Johnson</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;