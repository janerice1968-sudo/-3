
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const redirectUrl = "https://t.acrsmartcam.com/406599/8873/0?aff_sub5=SF_006OG000004lmDN";
  const [accessStatus, setAccessStatus] = useState<'checking' | 'allowed' | 'blocked_geo' | 'blocked_device' | 'blocked_proxy'>('checking');
  const [notice, setNotice] = useState<string | null>(null);
  const [activityIndex, setActivityIndex] = useState(0);

  const activityLines = [
    "Anna is waiting for a private chat",
    "Jessica from your area just joined",
    "3 members are online near you"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % activityLines.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkAccess = async () => {
      // 设备检测
      const isDesktop = !/Mobi|Android|iPhone|iPad|Tablet/i.test(navigator.userAgent);
      
      if (!isDesktop) {
        setNotice('Desktop access required to continue.');
        setAccessStatus('blocked_device');
        return;
      }

      // 先获取IP基础信息
      let ipData: any = {};
      try {
        const res = await fetch("https://ipapi.co/json/");
        ipData = await res.json();
      } catch(e) {
        console.log("ipapi error", e);
      }

      const country = ipData.country;
      const ip = ipData.ip;

      // 再检测代理/VPN/机房
      try {
        const proxyRes = await fetch(`https://proxycheck.io/v2/${ip}?vpn=1&asn=1`);
        const proxyData = await proxyRes.json();
        const detail = proxyData[ip] || {};

        const isp = (detail.provider || "").toLowerCase();
        const type = (detail.type || "").toLowerCase();
        const proxy = (detail.proxy || "").toLowerCase();

        console.log({
          country,
          isDesktop,
          proxy,
          type,
          isp
        });

        if (country && country !== "US") {
          setNotice('This content is available for US visitors only.');
          setAccessStatus('blocked_geo');
          return;
        }

        const isBlockedProxy = proxy === "yes" || type === "hosting" || type === "vpn";
        if (isBlockedProxy) {
          setNotice('Residential US IP required. Proxy/VPN detected.');
          setAccessStatus('blocked_proxy');
          return;
        }

        setAccessStatus('allowed');
      } catch (e) {
        console.log("check error", e);
        if (country && country !== "US") {
          setNotice('This content is available for US visitors only.');
          setAccessStatus('blocked_geo');
          return;
        }
        setAccessStatus('allowed');
      }
    };

    checkAccess();
  }, []);

  useEffect(() => {
    if (accessStatus === 'allowed') {
      const delay = Math.floor(Math.random() * (3500 - 1500 + 1)) + 1500;
      const timer = setTimeout(() => {
        window.location.href = redirectUrl;
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [accessStatus, redirectUrl]);

  if (accessStatus === 'checking') {
    return (
      <div className="min-h-screen bg-[#05060a] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#ff2f68] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#05060a] text-[#f5f7fb] font-sans flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_#111423_0%,_#05060a_48%)] pointer-events-none"></div>

      <div className="w-full max-w-[420px] relative z-10">
        {notice && (
          <div className="mb-3.5 p-3 px-3.5 rounded-xl bg-white/5 border border-white/10 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">
            {notice}
          </div>
        )}

        <div className="bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.45)] p-8 px-6 pb-6 text-center">
          <div className="inline-block px-3.5 py-2 rounded-full bg-[#ff2f68]/15 text-[#ffd6e0] text-[12px] tracking-[0.16em] uppercase mb-4.5">
            Private Access
          </div>
          
          <h1 className="m-0 text-[44px] leading-[0.95] tracking-[-0.04em] font-bold">
            Private<br />Access<br />Community
          </h1>
          
          <p className="mt-4 mb-0 text-[#aeb5c2] text-[16px] leading-relaxed">
            Instant access to active member profiles.
          </p>
          
          <div className="mt-4.5 mx-auto min-h-[20px] text-[#8ff0b5] text-[13px] font-semibold transition-all duration-300">
            {activityLines[activityIndex]}
          </div>
          
          <a 
            href={accessStatus === 'allowed' ? redirectUrl : undefined}
            className={`
              inline-flex items-center justify-center w-full mt-5.5 min-h-[58px] rounded-full
              bg-gradient-to-r from-[#ff2f68] to-[#ff5b86] text-white text-[20px] font-bold no-underline
              shadow-[0_16px_36px_rgba(255,47,104,0.35)] transition-all duration-200
              hover:translate-y-[-1px] hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_18px_42px_rgba(255,47,104,0.42)]
              active:scale-[0.99] animate-breathe cursor-pointer
              ${accessStatus !== 'allowed' ? 'opacity-50 cursor-not-allowed grayscale' : ''}
            `}
            onClick={(e) => {
              if (accessStatus !== 'allowed') e.preventDefault();
            }}
          >
            View Private Profiles
          </a>
          
          <div className="mt-3 text-[#ffb38a] text-[12px] font-bold tracking-[0.08em] uppercase">
            Only 3 spots left in your area
          </div>
          
          <div className="mt-2 text-[#848c99] text-[12px]">
            18+ only
          </div>
        </div>

        <div className="mt-3.5 text-center text-[#5d6574] text-[11px] tracking-[0.18em] uppercase">
          Private Access Community
        </div>
      </div>

      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .animate-breathe {
          animation: breathe 2.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
