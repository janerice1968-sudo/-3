
import React from 'react';

const Philosophy: React.FC = () => {
  const EXTERNAL_LINK = "https://t.acrsmartcam.com/402888/8873/37511?aff_sub5=SF_006OG000004lmDN";

  return (
    <div id="philosophy" className="py-40 bg-lumina-charcoal text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full atmosphere-gradient opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24">
          <div className="lg:w-1/3">
            <h2 className="text-[10px] tracking-[0.8em] uppercase text-red-500 font-bold mb-8">Deep Immersion</h2>
            <h3 className="font-serif text-6xl leading-tight mb-8">Warmth, Breath <br />& Heartbeat</h3>
            <div className="h-px w-16 bg-red-600/40"></div>
          </div>
          
          <div className="lg:w-2/3 space-y-20">
            <p className="font-serif text-4xl md:text-5xl text-white/90 leading-tight font-light">
              Farewell to cold screens. This is a place of unreserved surrender. <span className="text-red-600 italic">softdesireroom.com</span> turns every second of waiting into a soul-stirring tremor.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="space-y-6">
                <span className="text-[10px] tracking-[0.4em] uppercase text-red-500 font-bold">I / Absolute Privacy</span>
                <p className="text-white/40 leading-relaxed font-light italic text-lg">
                  Every secret you share here is safe. Drop your identity, shed your mask. In the midnight hour where no one knows, indulge in a carnival meant only for you.
                </p>
              </div>
              <div className="space-y-6">
                <span className="text-[10px] tracking-[0.4em] uppercase text-red-500 font-bold">II / Fingertip Interaction</span>
                <p className="text-white/40 leading-relaxed font-light italic text-lg">
                  This isn't just a performance; it's a dance across space and time. Through your commands, shift her state in real-time and take control of the tonight's rhythm.
                </p>
              </div>
            </div>
            
            <div className="aspect-[21/9] overflow-hidden bg-black relative group shadow-2xl rounded-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=1500" 
                alt="Intimate Interaction" 
                className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-[4000ms] grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-red-950/20 group-hover:bg-transparent transition-colors duration-1000"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <a 
                    href={EXTERNAL_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-16 py-5 bg-white text-black text-[11px] tracking-widest uppercase font-bold shadow-2xl rounded-full hover:bg-red-600 hover:text-white transition-all"
                 >
                    Break the Barrier
                 </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;
