import React from 'react';
import work1Img from '../assets/work1.avif';
import work2Img from '../assets/work2.avif';

function FeaturedWork() {
  return (
    <section className="featured-work py-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="mb-0">Featured Work</h2>
          <a href="#" className="btn btn-dark">SEE PORTFOLIO</a>
        </div>
        <div className="row">
          <div className="col-md-6 mb-4 picture">
            <img src={work1Img} style={{height:393, width:700}} alt="Featured Work" className="img-fluid" />
          </div>
          <div className="col-md-6 mb-4 picture">
            <img src={work2Img} alt="Featured Work" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedWork;