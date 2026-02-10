import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;