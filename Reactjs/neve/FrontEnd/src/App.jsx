import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import PortfolioPage from './pages/PortfolioPage.jsx';
import NewsPage from './pages/NewsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFound from './pages/NotFound.jsx';
import WorkWithUsPage from './pages/WorkWithUsPage.jsx';
import GetWorkDonePage from './pages/GetWorkDonePage.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/work-with-us" element={<WorkWithUsPage />} />
          <Route path="/get-work-done" element={<GetWorkDonePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;