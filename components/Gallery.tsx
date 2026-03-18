
import React from 'react';
import { GalleryItem } from '../types';

const COLLECTIONS: GalleryItem[] = [
  { 
    id: '1', 
    url: 'https://i.ibb.co/Q34hhhxL/c0449d6a-e83c-44f7-b398-8e5055b2837c.png', 
    title: 'Vera', 
    category: 'Midnight Glow · Live Now' 
  },
  { 
    id: '2', 
    url: 'https://i.ibb.co/G32XDH4q/a0e66ad2-3f5e-4664-bcac-578750e319b9.png', 
    title: 'Eileen', 
    category: 'Neon Pulse · Private Invite' 
  },
  { 
    id: '3', 
    url: 'https://i.ibb.co/WWDTWyyH/aa5aa43f-da01-446e-b715-339b555104a5.png', 
    title: 'Sophia', 
    category: 'Forbidden Gaze · Immersive' 
  },
  { 
    id: '4', 
    url: 'https://i.ibb.co/XrYHM2Gp/25efda4d-e738-46ac-a45b-c771a2b8e680.png', 
    title: 'Nora', 
    category: 'Scarlet Imprint · New Arrival' 
  },
];

const Gallery: React.FC = () => {
  const EXTERNAL_LINK = "https://t.acrsmartcam.com/402888/8873/37511?aff_sub5=SF_006OG000004lmDN";

  return (
    <div id="gallery" className="py-48 bg-lumina-charcoal overflow-hidden relative">
      <div className="absolute inset-0 atmosphere-gradient opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-px w-12 bg-red-600/40"></div>
              <h2 className="text-[10px] tracking-[0.8em] uppercase text-red-500 font-bold">The Archives</h2>
            </div>
            <h3 className="font-serif text-7xl md:text-9xl mb-8 text-white leading-none tracking-tighter">
              Timeless <br />
              <span className="italic text-red-600/80 pl-16 md:pl-32 font-light">Muses</span>
            </h3>
          </div>
          <div className="md:text-right max-w-sm">
            <p className="text-white/40 text-sm tracking-[0.2em] leading-relaxed font-light mb-8 italic">
              "Beauty is the only truth." We traverse the globe just to preserve a spark of pure resonance for you on the other side of the screen.
            </p>
            <div className="inline-flex items-center space-x-4 px-8 py-3 glass-panel text-white rounded-full">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
              <span className="text-[9px] tracking-[0.3em] font-bold uppercase">42 Artists Awaiting Your Arrival</span>
            </div>
          </div>
        </div>

        {/* 2x2 Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {COLLECTIONS.map((item, index) => (
            <a 
              key={item.id} 
              href={EXTERNAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`group cursor-pointer relative block ${index % 2 !== 0 ? 'md:translate-y-40' : ''}`}
            >
              {/* Background Index */}
              <div className="absolute -top-12 -left-8 text-[12vw] font-serif text-white/[0.02] select-none pointer-events-none italic group-hover:text-red-900/[0.05] transition-all duration-1000">
                0{index + 1}
              </div>

              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-black rounded-2xl shadow-2xl transition-all duration-1000 group-hover:shadow-[0_80px_150px_-40px_rgba(153,27,27,0.3)] border border-white/5">
                <img 
                  src={item.url} 
                  alt={item.title} 
                  loading="eager"
                  className="w-full h-full object-cover transform transition-transform duration-[4000ms] group-hover:scale-110 ease-out opacity-80 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-red-950/0 group-hover:bg-red-950/10 transition-colors duration-1000"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <div className="bg-white text-black px-12 py-4 text-[10px] tracking-[0.4em] font-bold uppercase shadow-2xl rounded-full">
                    Connect Now
                  </div>
                </div>

                <div className="absolute top-8 right-8">
                   <div className="flex items-center space-x-2 glass-panel px-4 py-1.5 rounded-full">
                      <span className="w-1 h-1 bg-red-500 rounded-full animate-pulse"></span>
                      <span className="text-[8px] tracking-[0.2em] text-white font-bold uppercase">Online</span>
                   </div>
                </div>
              </div>

              {/* Info Area */}
              <div className="mt-12 space-y-4">
                <div className="flex items-end justify-between border-b border-white/5 pb-6">
                  <h4 className="font-serif text-5xl text-white/90 group-hover:text-red-600 transition-colors duration-500 font-light">{item.title}</h4>
                  <span className="text-[9px] tracking-[0.3em] uppercase text-red-500 font-bold mb-1">
                    Enter Room
                  </span>
                </div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-white/20 font-medium pl-1 flex items-center">
                  <span className="w-8 h-px bg-white/10 mr-4"></span>
                  {item.category}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-80 flex flex-col items-center">
          <div className="w-px h-32 bg-gradient-to-b from-white/10 to-transparent mb-16"></div>
          
          <a 
            href={EXTERNAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-32 py-8 bg-white text-black text-[12px] tracking-[0.6em] font-bold uppercase transition-all duration-1000 hover:bg-red-600 hover:text-white shadow-2xl rounded-full overflow-hidden text-center block"
          >
            <span className="relative z-10">Explore Private Vault</span>
          </a>
          
          <div className="mt-24 flex items-center space-x-12 opacity-20">
             <span className="text-[8px] tracking-[0.4em] uppercase font-bold">Curated by softdesireroom.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
