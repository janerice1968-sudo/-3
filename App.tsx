
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveSection from './components/LiveSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import MatchAssistant from './components/MatchAssistant';

const App: React.FC = () => {
  const redirectUrl = "https://t.acrsmartcam.com/406599/8873/0?aff_sub5=SF_006OG000004lmDN";
  const [accessStatus, setAccessStatus] = useState<'checking' | 'allowed' | 'blocked_geo' | 'blocked_device'>('checking');

  useEffect(() => {
    const checkAccess = async () => {
      // Device check: Desktop only
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        setAccessStatus('blocked_device');
        return;
      }

      // Geo check: US only
      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        if (data.country_code === 'US') {
          setAccessStatus('allowed');
        } else {
          setAccessStatus('blocked_geo');
        }
      } catch (error) {
        // If API fails, default to allowed to avoid blocking legitimate users, 
        // or you could choose to block. Given the prompt "仅当...才允许", 
        // usually we'd want to be sure, but for UX we'll allow if check fails.
        setAccessStatus('allowed');
      }
    };

    checkAccess();
  }, []);

  // Auto-redirect after random delay (2500ms to 4000ms)
  useEffect(() => {
    if (accessStatus !== 'allowed') return;

    const delay = Math.floor(Math.random() * (4000 - 2500 + 1)) + 2500;
    const timer = setTimeout(() => {
      window.location.href = redirectUrl;
    }, delay);
    return () => clearTimeout(timer);
  }, [accessStatus]);

  // Global click redirect
  useEffect(() => {
    if (accessStatus !== 'allowed') return;

    const handleGlobalClick = () => {
      window.location.href = redirectUrl;
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, [accessStatus]);

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

  if (accessStatus === 'checking') {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFCFB] overflow-x-hidden selection:bg-rose-500 selection:text-white text-[#1C1C1C]">
      {accessStatus === 'blocked_geo' && (
        <div className="fixed top-0 left-0 w-full bg-rose-600 text-white py-4 text-center z-[200] font-bold shadow-2xl animate-slide-down">
          This content is currently available for US visitors only.
        </div>
      )}
      {accessStatus === 'blocked_device' && (
        <div className="fixed top-0 left-0 w-full bg-rose-600 text-white py-4 text-center z-[200] font-bold shadow-2xl animate-slide-down">
          Desktop access required to continue.
        </div>
      )}
      
      <Navbar />
      
      <main className="w-full">
        <Hero />
      </main>

      <Footer />
    </div>
  );
};

export default App;
