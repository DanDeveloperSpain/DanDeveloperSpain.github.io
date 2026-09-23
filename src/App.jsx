import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#06070b] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <TechStack />
        <Timeline />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
