
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
      // 设备检测
      const isDesktop = !/Mobi|Android|iPhone|iPad|Tablet/i.test(navigator.userAgent);
      
      // 先获取IP基础信息
      let ipData: any = {};
      try {
        const res = await fetch("https://ipapi.co/json/");
        ipData = await res.json();
        console.log("ipapi:", ipData);
      } catch(e) {
        console.log("ipapi error", e);
      }

      const country = ipData.country;
      const ip = ipData.ip;

      // 再检测代理/VPN/机房
      try {
        const proxyRes = await fetch(`https://ipapi.co/${ip}/json/`);
        const proxyData = await proxyRes.json();

        let isp = (proxyData.org || "").toLowerCase();
        let type = "";

        if (
          isp.includes("amazon") ||
          isp.includes("aws") ||
          isp.includes("google") ||
          isp.includes("microsoft") ||
          isp.includes("azure") ||
          isp.includes("digitalocean") ||
          isp.includes("linode") ||
          isp.includes("ovh") ||
          isp.includes("vultr")
        ) {
          type = "hosting";
        }

        if (
          country !== "US" ||
          !isDesktop ||
          type === "hosting"
        ) {
          document.body.innerHTML = "Access restricted";
          return;
        }

        setAccessStatus('allowed');
        setAllowRedirect(false);
      } catch (e) {
        console.log("check error", e);
        if (country !== "US" || !isDesktop) {
          document.body.innerHTML = "Access restricted";
          return;
        }
        setAccessStatus('allowed');
        setAllowRedirect(false);
      }
    };

    checkAccess();
  }, []);

  // Global click interceptor - disabled for now
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // e.preventDefault();
      // window.location.href = redirectUrl;
    };

    // window.addEventListener('click', handleGlobalClick, true);
    // return () => window.removeEventListener('click', handleGlobalClick, true);
  }, []);

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
