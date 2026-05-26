import React from 'react';
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import WebDesign from '../components/WebDesign.jsx';
import Branding from '../components/Branding.jsx';
import Values from '../components/Values.jsx';
import FeaturedWork from '../components/FeaturedWork.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CallToAction from '../components/CallToAction.jsx';

function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <WebDesign />
      <Branding />
      <Values />
      <FeaturedWork />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

export default HomePage;