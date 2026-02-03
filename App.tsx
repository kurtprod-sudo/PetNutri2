
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
