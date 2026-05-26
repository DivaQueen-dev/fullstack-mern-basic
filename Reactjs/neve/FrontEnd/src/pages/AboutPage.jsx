import React from 'react';

function AboutPage() {
    return (
        <div className="about-page page-content" style={{ marginTop: '-1px' }}>
            {/* Hero Header with Professional Gradient Background */}
            <div className="page-header text-white" style={{ 
                background: 'linear-gradient(135deg, #222 0%, #444 100%)',
                padding: '100px 0 80px'
            }}>
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">About Neve</h1>
                    <p className="lead">Crafting digital experiences since 2018</p>
                </div>
            </div>

            {/* Our Story Section with Enhanced Layout */}
            <section className="about-intro py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <div className="pe-lg-4">
                                <h2 className="mb-4 position-relative" style={{ 
                                    borderLeft: '4px solid #ffb84d',
                                    paddingLeft: '15px'
                                }}>Our Story</h2>
                                <p className="mb-4 lead">Founded in 2018, Neve has been at the forefront of web design and digital branding. We're a team of passionate designers, developers, and creatives dedicated to helping businesses thrive online.</p>
                                <p>Our approach combines creative design with technical expertise to deliver websites that not only look great but also perform exceptionally well. We believe in creating digital solutions that drive real business results.</p>
                                <div className="mt-5 d-flex justify-content-between">
                                    <div className="text-center">
                                        <h3 className="fw-bold text-dark mb-0">150+</h3>
                                        <p className="text-muted">Projects</p>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="fw-bold text-dark mb-0">45+</h3>
                                        <p className="text-muted">Clients</p>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="fw-bold text-dark mb-0">12</h3>
                                        <p className="text-muted">Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="position-relative">
                                <div style={{ 
                                    position: 'absolute', 
                                    width: '100%', 
                                    height: '100%', 
                                    border: '2px solid #ffb84d', 
                                    top: '15px', 
                                    left: '15px', 
                                    zIndex: '-1',
                                    borderRadius: '8px'
                                }}></div>
                                <img 
                                    src="/team2.jpg"
                                    alt="Our Team" 
                                    className="img-fluid rounded shadow" 
                                    style={{ borderRadius: '8px' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Meet Our Team with Updated Card Design */}
            <section className="team py-5" style={{ background: '#f8f9fa' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="text-dark fw-bold text-uppercase">The Experts</h6>
                        <h2 className="mb-3">Meet Our Team</h2>
                        <div className="mx-auto" style={{ width: '60px', height: '3px', background: '#ffb84d', marginBottom: '30px' }}></div>
                        <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>Our talented professionals are passionate about creating exceptional digital experiences</p>
                    </div>
                    <div className="row">
                        {/* Team Member 1 */}
                        <div className="col-md-4 mb-4">
                            <div className="team-member h-100" style={{ 
                                borderRadius: '10px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                background: 'white',
                                overflow: 'hidden'
                            }}>
                                <div className="position-relative" style={{ 
                                    height: '300px', 
                                    overflow: 'hidden' 
                                }}>
                                    <img 
                                        src="/user2.png" 
                                        alt="aasaf" 
                                        className="img-fluid w-100 h-100" 
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="overlay" style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0',
                                        right: '0',
                                        background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                                        height: '50%'
                                    }}>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mb-1 fw-bold">Assaf</h3>
                                    <p className="text-primary mb-3">Founder & CEO</p>
                                    <p className="text-muted mb-3">With over 15 years of experience in digital strategy and web development.</p>
                                    <div className="social-icons d-flex gap-2">
                                        <a href="#" className="rounded-circle d-flex align-items-center justify-content-center" style={{ 
                                            width: '32px', 
                                            height: '32px', 
                                            backgroundColor: '#f0f0f0', 
                                            color: '#333',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="#" className="rounded-circle d-flex align-items-center justify-content-center" style={{ 
                                            width: '32px', 
                                            height: '32px', 
                                            backgroundColor: '#f0f0f0', 
                                            color: '#333',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Team Member 2 */}
                        <div className="col-md-4 mb-4">
                            <div className="team-member h-100" style={{ 
                                borderRadius: '10px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                background: 'white',
                                overflow: 'hidden'
                            }}>
                                <div className="position-relative" style={{ 
                                    height: '300px', 
                                    overflow: 'hidden' 
                                }}>
                                    <img 
                                        src="/seven.webp" 
                                        alt="Jane Smith" 
                                        className="img-fluid w-100 h-100" 
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="overlay" style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0',
                                        right: '0',
                                        background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                                        height: '50%'
                                    }}>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mb-1 fw-bold">Jane Smith</h3>
                                    <p className="text-primary mb-3">Creative Director</p>
                                    <p className="text-muted mb-3">Award-winning designer with a passion for creating stunning visual identities.</p>
                                    <div className="social-icons d-flex gap-2">
                                        <a href="#" className="rounded-circle d-flex align-items-center justify-content-center" style={{ 
                                            width: '32px', 
                                            height: '32px', 
                                            backgroundColor: '#f0f0f0', 
                                            color: '#333',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="#" className="rounded-circle d-flex align-items-center justify-content-center" style={{ 
                                            width: '32px', 
                                            height: '32px', 
                                            backgroundColor: '#f0f0f0', 
                                            color: '#333',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Team Member 3 */}
                        <div className="col-md-4 mb-4">
                            <div className="team-member h-100" style={{ 
                                borderRadius: '10px',
                                boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                background: 'white',
                                overflow: 'hidden'
                            }}>
                                <div className="position-relative" style={{ 
                                    height: '300px', 
                                    overflow: 'hidden' 
                                }}>
                                    <img 
                                        src="/user1.webp" 
                                        alt="Drew Johnson" 
                                        className="img-fluid w-100 h-100" 
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="overlay" style={{
                                        position: 'absolute',
                                        bottom: '0',
                                        left: '0',
                                        right: '0',
                                        background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                                        height: '50%'
                                    }}>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h3 className="mb-1 fw-bold">Drew Johnson</h3>
                                    <p className="text-primary mb-3">Lead Developer</p>
                                    <p className="text-muted mb-3">Full-stack developer specializing in creating scalable and performant web applications.</p>
                                    <div className="social-icons d-flex gap-2">
                                        <a href="#" className="rounded-circle d-flex align-items-center justify-content-center" style={{ 
                                            width: '32px', 
                                            height: '32px', 
                                            backgroundColor: '#f0f0f0', 
                                            color: '#333',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                        <a href="#" className="rounded-circle d-flex align-items-center justify-content-center" style={{ 
                                            width: '32px', 
                                            height: '32px', 
                                            backgroundColor: '#f0f0f0', 
                                            color: '#333',
                                            transition: 'all 0.3s ease'
                                        }}>
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section with Modern Card Design */}
            <section className="values py-5" style={{ background: '#222' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h6 className="text-white fw-bold text-uppercase opacity-80">What Drives Us</h6>
                        <h2 className="mb-4 text-white">Our Core Values</h2>
                        <div className="mx-auto" style={{ width: '60px', height: '3px', background: '#ffb84d', marginBottom: '30px' }}></div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div className="value-card h-100 p-4 position-relative" style={{ 
                                backgroundColor: '#2d2d2d',
                                borderRadius: '8px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                overflow: 'hidden'
                            }}>
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '0', 
                                    left: '0', 
                                    width: '5px', 
                                    height: '100%', 
                                    background: '#ffb84d'
                                }}></div>
                                <div className="ps-3">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="fas fa-medal me-3" style={{ fontSize: '1.8rem', color: '#ffb84d' }}></i>
                                        <h3 className="mb-0" style={{ color: 'whitesmoke' }}>Excellence</h3>
                                    </div>
                                    <p style={{ color: '#bdc0c7' }}>We strive for excellence in every project we undertake, paying attention to the smallest details. Quality is never an accident; it's the result of intelligent effort.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="value-card h-100 p-4 position-relative" style={{ 
                                backgroundColor: '#2d2d2d',
                                borderRadius: '8px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                overflow: 'hidden'
                            }}>
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '0', 
                                    left: '0', 
                                    width: '5px', 
                                    height: '100%', 
                                    background: '#ffb84d'
                                }}></div>
                                <div className="ps-3">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="fas fa-handshake me-3" style={{ fontSize: '1.8rem', color: '#ffb84d' }}></i>
                                        <h3 className="mb-0" style={{ color: 'whitesmoke' }}>Partnership</h3>
                                    </div>
                                    <p style={{ color: '#bdc0c7' }}>We see our clients as partners and work together to achieve shared goals and success. Your business growth is our mission and priority.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="value-card h-100 p-4 position-relative" style={{ 
                                backgroundColor: '#2d2d2d',
                                borderRadius: '8px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                                overflow: 'hidden'
                            }}>
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '0', 
                                    left: '0', 
                                    width: '5px', 
                                    height: '100%', 
                                    background: '#ffb84d'
                                }}></div>
                                <div className="ps-3">
                                    <div className="d-flex align-items-center mb-3">
                                        <i className="fas fa-lightbulb me-3" style={{ fontSize: '1.8rem', color: '#ffb84d' }}></i>
                                        <h3 className="mb-0" style={{ color: 'whitesmoke' }}>Innovation</h3>
                                    </div>
                                    <p style={{ color: '#bdc0c7' }}>We embrace innovation and continuously explore new technologies and design trends. Staying ahead means we deliver cutting-edge solutions for your business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <div style={{ backgroundColor: 'white' }} className="py-4">
                Empty white section at the bottom
            </div> */}
        </div>
    );
}

export default AboutPage;