import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Solutions from './components/Solutions';
import ServicesCards from './components/ServicesCards';
import BlogSection from './components/BlogSection';

function App() {
  const [language, setLanguage] = useState<'tr' | 'en'>('tr');

  return (
    <div className="App">
      <Header language={language} setLanguage={setLanguage} />
      <main>
        <Hero language={language} />
        <FeaturedProducts language={language} />
        <Solutions language={language} />
        <ServicesCards language={language} />
        <BlogSection language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
