import React from 'react';
import brandingImg from '../assets/branding.jpg';

function Branding() {
  return (
    <section className="branding py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <img src={brandingImg} alt="Branding" className="img-fluid" />
          </div>
          <div className="col-lg-6 order-lg-1">
            <h2 className="mb-3">Branding</h2>
            <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus</p>
            <a href="#" className="btn btn-primary">READ MORE</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Branding;