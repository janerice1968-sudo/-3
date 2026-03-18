
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const EXTERNAL_LINK = "https://t.acrsmartcam.com/402888/8873/37511?aff_sub5=SF_006OG000004lmDN";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? 'py-4 glass-panel' : 'py-10'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="flex items-center space-x-4 cursor-pointer group"
          onClick={() => scrollToSection('home')}
        >
          <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center animate-pulse group-hover:scale-110 transition-transform">
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </div>
          <span className="font-serif text-lg tracking-tighter font-bold uppercase text-white">softdesireroom.com</span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {[
            { id: 'home', label: 'Entrance' },
            { id: 'philosophy', label: 'Rhythm' },
            { id: 'gallery', label: 'Archives' },
            { id: 'experience', label: 'Encounter' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-[10px] tracking-[0.4em] font-medium text-white/40 hover:text-white transition-all duration-300 uppercase"
            >
              {item.label}
            </button>
          ))}
        </div>

        <a 
          href={EXTERNAL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-2.5 bg-white text-black text-[10px] tracking-[0.3em] font-bold hover:bg-red-600 hover:text-white transition-all duration-500 uppercase rounded-full text-center"
        >
          Access
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
