
import React from 'react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const trackingUrl = "https://t.acrsmartcam.com/403638/7083?bo=2779,2778,2777,2776,2775&aff_sub5=SF_006OG000004lmDN";
  
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <img 
          src="https://i.ibb.co/wZx2821D/0596d0c9-1a71-4959-87fc-c89e1e40259c.png" 
          alt="Atmospheric background" 
          className="w-full h-full object-cover"
        />
        {/* Adjusted overlay for better contrast with the specific image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/40 to-transparent z-20"></div>
        <div className="absolute inset-0 gradient-overlay z-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-30">
        <div className="max-w-4xl">
          <span className="inline-block accent-gradient px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold mb-6 animate-pulse text-white">
            Pure • Passionate • Hidden
          </span>
          <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8 text-[#1C1C1C]">
            Satisfy <br />
            <span className="italic font-normal text-rose-600">Your Deepest</span> <br />
            Curiosity.
          </h1>
          <p className="text-lg md:text-xl text-[#1C1C1C]/80 max-w-2xl leading-relaxed mb-12">
            The world's most discrete sanctuary for adult connection and visual pleasure. A space where boundaries blur and your every fantasy is just a breath away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button 
              onClick={onCtaClick}
              className="accent-gradient px-10 py-5 rounded-full text-lg font-bold text-white shadow-2xl hover:shadow-rose-500/60 transition-all group flex items-center justify-center gap-2"
            >
              Begin the Affair
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <a href={trackingUrl} className="glass-effect px-10 py-5 rounded-full text-lg font-bold hover:bg-white/80 transition-all border border-black/5 text-[#1C1C1C] flex items-center justify-center">
              Peek Inside
            </a>
          </div>

          <div className="mt-20 flex items-center gap-8 border-l border-black/10 pl-8">
            <div>
              <p className="text-2xl font-serif text-[#1C1C1C]">15k+</p>
              <p className="text-xs uppercase tracking-widest text-[#1C1C1C]/40">Beautiful Souls</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-[#1C1C1C]">Active</p>
              <p className="text-xs uppercase tracking-widest text-[#1C1C1C]/40">In the Moment</p>
            </div>
            <div>
              <p className="text-2xl font-serif text-[#1C1C1C]">4K</p>
              <p className="text-xs uppercase tracking-widest text-[#1C1C1C]/40">Sensory Clarity</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-12 bottom-0 w-px h-32 bg-gradient-to-t from-rose-500 to-transparent"></div>
    </section>
  );
};

export default Hero;
