import React from 'react';
import valuesImg from '../assets/values.jpg';

function Values() {
  return (
    <section className="values py-5 bg-dark text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img src={valuesImg} alt="Our Values" className="img-fluid" />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-3">We are driven by values</h2>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus</p>
            <a href="#" className="btn btn-primary">READ MORE</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;