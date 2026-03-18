
import React from 'react';

const Hero: React.FC = () => {
  const EXTERNAL_LINK = "https://t.acrsmartcam.com/402888/8873/37511?aff_sub5=SF_006OG000004lmDN";

  return (
    <div id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden atmosphere-gradient text-center">
      {/* Full screen background with subtle overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/S7NSTh5T/15a8a5f4-8130-4fb1-9bc6-fed5ec35c1a1.png" 
          alt="Intimate Background" 
          className="w-full h-full object-cover scale-110 object-center transition-transform duration-[10000ms] hover:scale-100 opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lumina-charcoal via-transparent to-lumina-charcoal opacity-90"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* 1. Large Title */}
        <h1 className="font-serif text-7xl md:text-[140px] leading-[0.8] text-white mb-12 fade-in tracking-tighter uppercase">
          Unleash <br />
          <span className="italic font-light text-red-600">Forbidden</span>
        </h1>

        {/* 2. Two-line Description */}
        <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed mb-16 fade-in [animation-delay:200ms] max-w-2xl">
          A digital sanctuary crafted for ultimate sensory experiences.<br />
          Every play of light and shadow moves exclusively for you.
        </p>
        
        {/* 3. One Button */}
        <div className="fade-in [animation-delay:400ms] mb-20">
          <a 
            href={EXTERNAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-20 py-6 bg-white text-black text-[14px] tracking-[0.6em] font-bold uppercase transition-all duration-500 hover:bg-red-600 hover:text-white shadow-[0_30px_100px_rgba(255,255,255,0.1)] overflow-hidden rounded-full inline-block"
          >
            <span className="relative z-10">Start Private Access</span>
          </a>
        </div>

        {/* 4. Three Short Selling Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 fade-in [animation-delay:600ms] border-t border-white/10 pt-12 w-full">
          {[
            { label: '1-on-1 Private', desc: 'Absolute Solitude' },
            { label: '4K Ultra HD', desc: 'Crystal Clarity' },
            { label: 'Total Anonymity', desc: 'Encrypted Connection' },
          ].map((point, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-red-500 text-[10px] tracking-[0.4em] font-bold uppercase mb-2">{point.label}</span>
              <span className="text-white/30 text-[9px] tracking-[0.2em] uppercase">{point.desc}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 flex flex-col items-center space-y-4 z-10 opacity-20">
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;
