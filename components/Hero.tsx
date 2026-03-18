
import React from 'react';

const Hero: React.FC = () => {
  const trackingUrl = "https://t.acrsmartcam.com/406599/8873/0?aff_sub5=SF_006OG000004lmDN";
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden bg-[#FDFCFB]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/m-infra.appspot.com/v/a/0195a443-3564-7541-92f7-e23118a807f4.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-30 flex flex-col items-center text-center">
        <div className="max-w-[1200px] w-full flex flex-col items-center">
          <span className="inline-block accent-gradient px-6 py-2 rounded-full text-[12px] uppercase tracking-[0.4em] font-bold mb-10 text-white shadow-lg">
            Pure • Passionate • Hidden
          </span>
          <h1 className="text-6xl md:text-7xl font-serif leading-tight mb-10 text-white drop-shadow-lg">
            Satisfy <br />
            <span className="italic font-normal text-rose-400">Your Deepest</span> <br />
            Curiosity.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-16 drop-shadow-md">
            The world's most discrete sanctuary for adult connection and visual pleasure. A space where boundaries blur and your every fantasy is just a breath away.
          </p>
          
          <div className="flex flex-col items-center gap-8 w-full">
            <button 
              className="animate-breathe accent-gradient px-16 py-7 rounded-full text-2xl font-bold text-white shadow-2xl transition-all group flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              Continue Access
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button 
              className="glass-effect px-12 py-5 rounded-full text-lg font-bold bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all border border-white/20 text-white flex items-center justify-center"
            >
              View Private Profiles
            </button>
          </div>

          <div className="mt-24 flex flex-wrap justify-center items-center gap-12 border-t border-white/10 pt-12 w-full">
            <div className="text-center">
              <p className="text-3xl font-serif text-white">15k+</p>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold mt-1">Beautiful Souls</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif text-white">Active</p>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold mt-1">In the Moment</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-serif text-white">4K</p>
              <p className="text-[10px] uppercase tracking-widest text-white/70 font-bold mt-1">Sensory Clarity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
