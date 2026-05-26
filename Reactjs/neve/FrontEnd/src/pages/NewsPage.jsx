import React, { useEffect, useState } from 'react';
import axios from 'axios';

function NewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State for newsletter subscription
  const [email, setEmail] = useState('');
  const [subscriptionStatus, setSubscriptionStatus] = useState({
    loading: false,
    success: false,
    error: null
  });

  // Handle form submission for newsletter
  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscriptionStatus({
        loading: false,
        success: false,
        error: 'Please enter a valid email address'
      });
      return;
    }
    
    setSubscriptionStatus({
      loading: true,
      success: false,
      error: null
    });
    
    try {
      // Make API call to your backend
      const response = await axios.post('/api/forms/newsletter-subscribe', { email });
      
      if (response.data.success) {
        setSubscriptionStatus({
          loading: false,
          success: true,
          error: null
        });
        setEmail(''); // Clear the input field
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubscriptionStatus(prev => ({
            ...prev,
            success: false
          }));
        }, 5000);
      } else {
        throw new Error(response.data.message || 'Subscription failed');
      }
    } catch (error) {
      setSubscriptionStatus({
        loading: false,
        success: false,
        error: error.response?.data?.message || 'Failed to subscribe. Please try again.'
      });
    }
  };

  const newsItems = [
    {
      id: 1,
      title: 'Neve Wins Design Award 2025',
      date: 'April 15, 2025',
      excerpt: 'We are thrilled to announce that Neve has been recognized with the prestigious Design Excellence Award for our innovative approach to web design.',
      image: './six.webp'
    },
    {
      id: 2,
      title: 'The Future of Web Design: Trends to Watch',
      date: 'April 10, 2025',
      excerpt: 'Our design team explores the emerging trends that will shape the future of web design in the coming years, from AI-driven interfaces to immersive experiences.',
      image: '/four.png'
    },
    {
      id: 3,
      title: 'Neve Partners with Local Tech Startup',
      date: 'April 5, 2025',
      excerpt: 'We are excited to announce our new partnership with TechFuture, a promising local startup focused on sustainable technology solutions.',
      image: '/three.png'
    },
    {
      id: 4,
      title: 'How to Optimize Your Website for Conversions',
      date: 'March 28, 2025',
      excerpt: 'Our conversion specialists share their top tips for transforming your website visitors into loyal customers through strategic design and UX improvements.',
      image: '/two.jpg'
    },
    {
      id: 5,
      title: 'Neve Expands Design Team',
      date: 'March 20, 2025',
      excerpt: 'To meet growing demand, we are pleased to welcome three new talented designers to our creative team, each bringing unique expertise and fresh perspectives.',
      image: '/eight.png'
    },
    {
      id: 6,
      title: 'The Impact of Color Psychology in Branding',
      date: 'March 15, 2025',
      excerpt: 'Our branding experts delve into how color choices influence consumer perception and how to leverage color psychology for more effective brand communication.',
      image: '/one.jpg'
    }
  ];

  const team = [
    { name: 'Ava Chen', title: 'Creative Director', img: '/bill1.jpg' },
    { name: 'Liam Brooks', title: 'UX Specialist', img: '/bill2.jpg' },
    { name: 'Maya Patel', title: 'Visual Designer', img: '/bill3.jpg' }
  ];

  return (
    <div className="news-page page-content" style={{ marginTop: '-1px' }}>
      {/* Header */}
      <div className="page-header" style={{ background: 'linear-gradient(to right, #6e6e6e, #bcbcbc)', color: 'white', padding: '60px 0' }}>
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Latest News</h1>
          <p className="lead">Stay updated with our latest projects and insights</p>
        </div>
      </div>

      {/* News Section */}
      <section className="news-content py-5">
        <div className="container">
          <div className="row">
            {newsItems.map(item => (
              <div key={item.id} className="col-md-6 col-lg-4 mb-4 d-flex">
                <div className="card shadow-sm border-0 rounded h-100 d-flex flex-column">
                  <div
                    className="card-img-top"
                    style={{
                      height: '200px',
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      borderTopLeftRadius: '12px',
                      borderTopRightRadius: '12px'
                    }}
                  ></div>
                  <div className="card-body d-flex flex-column">
                    <span className="text-muted small mb-2">{item.date}</span>
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text flex-grow-1">{item.excerpt}</p>
                    <a href="#" className="btn btn-sm mt-3" style={{ backgroundColor: '#FFD700', fontWeight: 'bold', borderRadius: '20px' }}>
                      Read More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter py-5" style={{ background: 'linear-gradient(to right, #6e6e6e, #bcbcbc)', color: 'white' }}>
        <div className="container text-center">
          <h2 className="mb-3">Join Our Newsletter</h2>
          <p className="mb-4">Get insights, updates, and stories delivered straight to your inbox.</p>
          
          <form className="d-flex justify-content-center flex-wrap gap-2" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="form-control form-control-lg"
              style={{ maxWidth: '400px' }}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={subscriptionStatus.loading || subscriptionStatus.success}
            />
            <button 
              type="submit" 
              className="btn btn-lg" 
              style={{ 
                backgroundColor: subscriptionStatus.success ? '#28a745' : '#FFD700', 
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease'
              }}
              disabled={subscriptionStatus.loading || subscriptionStatus.success}
            >
              {subscriptionStatus.loading ? (
                <span>
                  <i className="fas fa-spinner fa-spin me-2"></i>
                  Subscribing...
                </span>
              ) : subscriptionStatus.success ? (
                <span>
                  <i className="fas fa-check me-2"></i>
                  Subscribed!
                </span>
              ) : (
                'Subscribe'
              )}
            </button>
          </form>
          
          {/* Error Message */}
          {subscriptionStatus.error && (
            <div className="mt-3 text-center">
              <p className="text-warning">
                <i className="fas fa-exclamation-triangle me-2"></i>
                {subscriptionStatus.error}
              </p>
            </div>
          )}
          
          {/* Success Message */}
          {subscriptionStatus.success && (
            <div className="mt-3 text-center fade-in">
              <p className="text-white">
                <i className="fas fa-envelope me-2"></i>
                Thank you for subscribing! Please check your inbox for confirmation.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Meet the Team */}
      <section className="team py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-5">Meet Our Design Team</h2>
          <div className="row">
            {team.map((member, idx) => (
              <div key={idx} className="col-md-4 mb-4">
                <div className="card border-0 shadow-sm h-100">
                  <img src={member.img} alt={member.name} className="card-img-top" style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text text-muted">{member.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsPage;