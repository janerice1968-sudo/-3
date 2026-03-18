
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const trackingUrl = "https://t.acrsmartcam.com/402888/8873/0?aff_sub5=SF_006OG000004lmDN";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4 glass-effect border-b border-black/5' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 accent-gradient rounded-full flex items-center justify-center font-bold text-lg text-white">S</div>
          <span className={`text-2xl font-serif font-bold tracking-tighter uppercase transition-colors ${isScrolled ? 'text-[#1A1A1A]' : 'text-white'}`}>Secret Desire Lounge</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Live', 'Connect', 'Intimate', 'Safety'].map((item) => (
            <button 
              key={item} 
              className={`text-sm font-medium transition-colors uppercase tracking-widest ${isScrolled ? 'text-[#1A1A1A]/60 hover:text-rose-600' : 'text-white/80 hover:text-white'}`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button 
            className={`text-sm font-medium px-4 py-2 transition-all ${isScrolled ? 'text-[#1A1A1A]/80 hover:text-rose-600' : 'text-white/90 hover:text-white'}`}
          >
            Enter
          </button>
          <button 
            className="accent-gradient px-6 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg hover:shadow-rose-500/40 hover:scale-105 transition-all active:scale-95 text-center"
          >
            Unlock the Secret
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;