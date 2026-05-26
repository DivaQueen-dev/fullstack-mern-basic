import React from 'react';

function CallToAction() {
  return (
    <section className="cta py-5 text-white text-center" style={{backgroundColor: "#f0f0f0 !important"}}>
      <div className="container">
        <h2 className="mb-3">Let's work together on your<br></br> next web project</h2>
        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut elit tellus, luctus<br></br> nec ullamcorper mattis, pulvinar dapibus leo.</p>
        <a href="#" className="btn btn-primary">LEARN MORE</a>
      </div>
      {/* <hr style={{ marginTop: "50px" }} /> */}
    </section>
  );
}

export default CallToAction;