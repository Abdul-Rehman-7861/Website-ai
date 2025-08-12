import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Team from '../pages/Team';
import Testimonials from '../pages/Testimonials';
import Projects from '../pages/Projects';
import Portfolio from '../pages/Portfolio';
import Milestones from '../pages/Milestones';
import Contact from '../pages/Contact';
import VoiceBot from '../pages/VoiceBot';

const AppRouter: React.FC = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-primary-black text-platinum">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/team" element={<Team />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/milestones" element={<Milestones />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/voicebot" element={<VoiceBot />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default AppRouter;