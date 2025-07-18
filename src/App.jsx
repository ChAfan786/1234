import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import LuxuryNavbar from './pages/LuxuryNavbar';
import About from './pages/About';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './pages/Footer';
import ServicesPage from './pages/ServicesPage';
import CookiePolicy from './pages/CookiePolicy';
import ProjectsPage from './pages/ProjectsPage';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="app">
        <LuxuryNavbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
