import React, { useEffect, useState } from 'react';

function PortfolioPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [filter, setFilter] = useState('all');
  
  const portfolioItems = [
    {
      id: 1,
      title: 'Branding Project',
      category: 'branding',
      image: '/team.webp',
      description: 'Brand identity design for a tech startup'
    },
    {
      id: 2,
      title: 'Web Design',
      category: 'web',
      image: '/web-development.webp',
      description: 'Modern responsive website for a creative agency'
    },
    {
      id: 3,
      title: 'Mobile App',
      category: 'mobile',
      image: '/user3.jpg',
      description: 'User-friendly mobile application for productivity'
    },
    {
      id: 4,
      title: 'Logo Design',
      category: 'branding',
      image: '/dsa.png',
      description: 'Minimalist logo design for a luxury brand'
    },
    {
      id: 5,
      title: 'E-commerce Website',
      category: 'web',
      image: '/five.webp',
      description: 'Full-featured online store with payment integration'
    },
    {
      id: 6,
      title: 'UI/UX Design',
      category: 'web',
      image: '/uiux.jpg',
      description: 'User interface design for a dashboard application'
    }
  ];
  
  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <div className="portfolio-page page-content" style={{ marginTop: '-1px' }}>
      <div className="page-header text-white" style={{ 
        background: 'linear-gradient(135deg, #222 0%, #444 100%)',
        padding: '100px 0 80px'
      }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Our Portfolio</h1>
          <p className="lead">Showcasing our best work</p>
        </div>
      </div>
      
      <section className="portfolio-content py-5">
        <div className="container">
          <div className="portfolio-filters mb-5 text-center">
            <button 
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-secondary'} me-2 mb-2`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button 
              className={`btn ${filter === 'web' ? 'btn-primary' : 'btn-outline-secondary'} me-2 mb-2`}
              onClick={() => setFilter('web')}
            >
              Web Design
            </button>
            <button 
              className={`btn ${filter === 'branding' ? 'btn-primary' : 'btn-outline-secondary'} me-2 mb-2`}
              onClick={() => setFilter('branding')}
            >
              Branding
            </button>
            <button 
              className={`btn ${filter === 'mobile' ? 'btn-primary' : 'btn-outline-secondary'} me-2 mb-2`}
              onClick={() => setFilter('mobile')}
            >
              Mobile Apps
            </button>
          </div>
          
          <div className="row">
            {filteredItems.map(item => (
              <div key={item.id} className="col-md-6 col-lg-4 mb-4">
                <div className="portfolio-item shadow-sm rounded overflow-hidden">
                  <div className="portfolio-img position-relative">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="img-fluid w-100"
                      style={{
                        height: '250px',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                    />
                    <div className="portfolio-overlay position-absolute" style={{
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'rgba(255, 184, 77, 0.85)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      cursor: 'pointer'
                    }}>
                      <div className="text-center text-white p-3">
                        <h4>{item.title}</h4>
                        <p className="mb-0">{item.description}</p>
                        <button className="btn btn-sm btn-light mt-3">View Project</button>
                      </div>
                    </div>
                  </div>
                  <div className="portfolio-info p-3 bg-white">
                    <h3 className="h5 mb-1">{item.title}</h3>
                    <p className="text-capitalize text-muted mb-0">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Add Call To Action */}
      <section className="cta py-5 text-white text-center" style={{backgroundColor: "#ffb84d"}}>
        <div className="container">
          <h2 className="mb-3">Ready to start your project?</h2>
          <p className="mb-4">Contact us today and let's discuss how we can bring your vision to life.</p>
          <a href="#" className="btn btn-primary">GET IN TOUCH</a>
        </div>
      </section>
    </div>
  );
}

export default PortfolioPage;