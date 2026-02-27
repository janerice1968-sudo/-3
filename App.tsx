
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveSection from './components/LiveSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MatchAssistant from './components/MatchAssistant';

const App: React.FC = () => {
  const [showAssistant, setShowAssistant] = useState(false);

  // Smooth appearance of elements on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] overflow-x-hidden selection:bg-rose-500 selection:text-white text-[#1C1C1C]">
      <Navbar />
      
      <main>
        <Hero onCtaClick={() => setShowAssistant(true)} />
        
        <div id="live" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <LiveSection />
        </div>
        
        <div id="features" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out delay-200">
          <Features />
        </div>
        
        <div id="testimonials" className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-1000 ease-out">
          <Testimonials />
        </div>
      </main>

      <Footer />

      {/* Persistent Floating Action Button */}
      <button 
        onClick={() => setShowAssistant(true)}
        className="fixed bottom-8 right-8 z-50 accent-gradient p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group overflow-hidden text-white"
      >
        <span className="relative z-10 font-medium">Find Matches</span>
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
      </button>

      {showAssistant && <MatchAssistant onClose={() => setShowAssistant(false)} />}
    </div>
  );
};

export default App;
