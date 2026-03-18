
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const OFFER_URL = "https://t.acrsmartcam.com/402888/8873/0?aff_sub5=SF_006OG000004lmDN";
  const [status, setStatus] = useState<'checking' | 'eligible' | 'blocked_country' | 'blocked_device'>('checking');
  const [msgIndex, setMsgIndex] = useState(0);

  const messages = [
    "Jessica from your area just joined",
    "Anna is waiting for a private chat",
    "3 members are online near you"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkAccess = async () => {
      // Device detection (Mobile/Tablet)
      const isMobileOrTablet = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Tablet|PlayBook/i.test(navigator.userAgent);
      
      if (isMobileOrTablet) {
        setStatus('blocked_device');
        return;
      }

      try {
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code === 'US') {
          setStatus('eligible');
          
          // Random delay redirect (1500ms ~ 2500ms)
          const delay = Math.floor(Math.random() * (2500 - 1500 + 1)) + 1500;
          setTimeout(() => {
            window.location.href = OFFER_URL;
          }, delay);
        } else {
          setStatus('blocked_country');
        }
      } catch (error) {
        console.error("IP check failed:", error);
        setStatus('blocked_country');
      }
    };

    checkAccess();
  }, []);

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = OFFER_URL;
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 md:p-6 font-sans text-white">
      {/* Custom animations */}
      <style>{`
        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.02); opacity: 0.95; }
        }
        @keyframes fade {
          0%, 100% { opacity: 0; transform: translateY(5px); }
          10%, 90% { opacity: 1; transform: translateY(0); }
        }
        .animate-breathe {
          animation: breathe 3s ease-in-out infinite;
        }
        .animate-fade {
          animation: fade 2s ease-in-out infinite;
        }
      `}</style>

      <div className="w-full max-w-[520px] bg-zinc-900/50 backdrop-blur-xl border border-white/10 p-8 md:p-14 rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.8)] text-center space-y-10">
        
        {/* Header Section */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Private Access Community
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-light">
            Instant access to active member profiles
          </p>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {/* Status Messages */}
          <div className="min-h-[60px] flex items-center justify-center">
            {status === 'checking' && (
              <p className="text-zinc-500 animate-pulse">Verifying access...</p>
            )}
            {status === 'blocked_country' && (
              <p className="text-red-400 font-medium">This content is available for US visitors only.</p>
            )}
            {status === 'blocked_device' && (
              <p className="text-red-400 font-medium">Desktop access required to continue.</p>
            )}
            {status === 'eligible' && (
              <div className="h-5 overflow-hidden">
                <p className="text-[10px] font-bold text-emerald-300 animate-fade tracking-wide">
                  {messages[msgIndex]}
                </p>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-zinc-300 tracking-wide">
                Free signup • Instant access
              </p>
              <button
                onClick={handleButtonClick}
                className="block w-full py-6 bg-white text-black text-xl font-black rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-all duration-300 animate-breathe text-center"
              >
                View Private Profiles
              </button>
              <p className="text-[9px] font-bold text-orange-400 uppercase tracking-[0.2em] py-1">
                Only 3 spots left in your area
              </p>
              <p className="text-xs text-zinc-500 font-medium">
                18+ only
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <footer className="mt-12 text-[10px] text-zinc-600 tracking-[0.3em] uppercase">
        &copy; 2026 Private Access Community • softdesireroom.com
      </footer>
    </div>
  );
};

export default App;
