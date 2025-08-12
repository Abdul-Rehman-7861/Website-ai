import React from 'react';
import Hero from '../components/Home/Hero';
import Stats from '../components/Home/Stats';
import Expertise from '../components/Home/Expertise';
import ClientLogos from '../components/Home/ClientLogos';

const Home: React.FC = () => {
  return (
    <div className="pt-16">
      <Hero />
      <Stats />
      <Expertise />
      <ClientLogos />
    </div>
  );
};

export default Home;