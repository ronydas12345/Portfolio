'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';

type ActiveSection = 'home' | 'about' | 'portfolio' | 'contacts';

export default function Home() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section as ActiveSection);
    // Smooth scroll to the section
    setTimeout(() => {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Navigation */}
      <div className="sticky top-0 z-50">
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      </div>

      {/* Hero / Home Section */}
      <div id="home" className="w-full">
        <Hero />
      </div>

      {/* About Section */}
      <div id="about" className="w-full">
        <About />
      </div>

      {/* Portfolio Section */}
      <div id="portfolio" className="w-full">
        <Portfolio />
      </div>

      {/* Contacts Section */}
      <div id="contacts" className="w-full">
        <Contacts />
      </div>

      {/* Footer */}
      <footer className="w-full bg-slate-950 text-white py-8 px-8">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <p>&copy; 2024 Raunak Das. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-blue-100 transition-colors">Twitter</a>
            <a href="#" className="hover:text-blue-100 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-blue-100 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
