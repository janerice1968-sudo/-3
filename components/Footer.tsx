
import React from 'react';

const Footer: React.FC = () => {
  const trackingUrl = "https://t.acrsmartcam.com/406599/8873/37511?aff_sub5=SF_006OG000004lmDN";

  return (
    <footer className="bg-[#FDFCFB] pt-20 pb-10 border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 accent-gradient rounded-full flex items-center justify-center font-bold text-lg text-white">S</div>
              <span className="text-2xl font-serif font-bold uppercase tracking-tighter text-[#1A1A1A]">Secret Desire Lounge</span>
            </div>
            <p className="text-[#1A1A1A]/50 text-sm leading-relaxed max-w-xs italic">
              "Every heart has a secret. We've built the place to share them."
            </p>
          </div>
          
          <div>
            <h5 className="text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.2em] mb-6">Explore</h5>
            <ul className="space-y-4 text-sm text-[#1A1A1A]/50">
              <li><button onClick={() => window.location.href = trackingUrl} className="hover:text-rose-500 transition-colors">Live Presence</button></li>
              <li><button onClick={() => window.location.href = trackingUrl} className="hover:text-rose-500 transition-colors">Deep Connections</button></li>
              <li><button onClick={() => window.location.href = trackingUrl} className="hover:text-rose-500 transition-colors">Whisper Chat</button></li>
              <li><button onClick={() => window.location.href = trackingUrl} className="hover:text-rose-500 transition-colors">Curated Souls</button></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.2em] mb-6">Presence</h5>
            <ul className="space-y-4 text-sm text-[#1A1A1A]/50">
              <li><button onClick={() => window.location.href = trackingUrl} className="hover:text-rose-500 transition-colors">How it Works</button></li>
              <li><button onClick={() => window.location.href = trackingUrl} className="hover:text-rose-500 transition-colors">Your Sanctuary</button></li>
              <li><button onClick={() => window.location.href = trackingUrl} className="hover:text-rose-500 transition-colors">Private Terms</button></li>
              <li><button onClick={() => window.location.href = trackingUrl} className="hover:text-rose-500 transition-colors">Concierge</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[#1A1A1A] text-xs font-bold uppercase tracking-[0.2em] mb-6">Stay Close</h5>
            <p className="text-[#1A1A1A]/50 text-xs mb-4">Absolute discretion guaranteed.</p>
            <button 
              onClick={() => window.location.href = trackingUrl} 
              className="inline-block accent-gradient px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest text-white hover:scale-105 transition-all"
            >
              Join the Sanctuary
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-black/5 text-[10px] uppercase tracking-widest text-[#1A1A1A]/30">
          <p>© 2024 Secret Desire Lounge Global Entertainment. Adults Only.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <button onClick={() => window.location.href = trackingUrl} className="hover:text-[#1A1A1A] transition-colors">Ethics</button>
            <button onClick={() => window.location.href = trackingUrl} className="hover:text-[#1A1A1A] transition-colors">Cookies</button>
            <button onClick={() => window.location.href = trackingUrl} className="hover:text-[#1A1A1A] transition-colors">Access</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;