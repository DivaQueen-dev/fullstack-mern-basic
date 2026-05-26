import React from 'react';
import webdesignImg from '../assets/webdesign.webp';

function WebDesign() {
  return (
    <section className="web-design py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src={webdesignImg} alt="Web Design" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-3">Web Design</h2>
            <p className="text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus</p>
            <a href="#" className="btn btn-primary">READ MORE</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WebDesign;