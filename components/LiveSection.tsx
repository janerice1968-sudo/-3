
import React from 'react';
import { STREAMERS } from '../constants';

const LiveSection: React.FC = () => {
  const trackingUrl = "https://www.google.com";

  return (
    <section id="live" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-rose-500 font-bold mb-4">Waiting for You</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-[#1A1A1A]">Unveiling Tonight</h3>
          </div>
          <a href={trackingUrl} className="text-sm font-semibold border-b border-black/10 pb-1 hover:text-rose-600 hover:border-rose-600 transition-all uppercase tracking-widest text-[#1A1A1A]/60">
            See More Secrets
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STREAMERS.map((streamer) => (
            <div key={streamer.id} className="group relative aspect-[2/3] overflow-hidden rounded-3xl cursor-pointer card-shadow">
              {/* Background Image */}
              <img 
                src={streamer.imageUrl} 
                alt={streamer.name} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              
              {/* Gradient Overlays for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 transition-opacity group-hover:opacity-80"></div>
              
              {/* Top Badges */}
              <div className="absolute top-5 left-5 z-20 flex items-center gap-2">
                {streamer.isLive && (
                  <span className="bg-[#E11D48] text-[9px] font-black px-2.5 py-1.5 rounded-md flex items-center gap-1.5 text-white tracking-widest">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    ACTIVE
                  </span>
                )}
                <span className="bg-white/95 backdrop-blur-sm text-[9px] font-black px-2.5 py-1.5 rounded-md text-[#1A1A1A] tracking-widest uppercase">
                  {streamer.viewers.toLocaleString()} WITNESSING
                </span>
              </div>

              {/* Character Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <p className="text-rose-400 text-[10px] uppercase tracking-[0.2em] font-black mb-1 drop-shadow-sm">{streamer.category}</p>
                <h4 className="text-3xl font-serif mb-1 text-white tracking-tight">{streamer.name}, {streamer.age}</h4>
                <p className="text-white/90 text-xs mb-6 flex items-center gap-1.5 opacity-80">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {streamer.location}
                </p>
                
                {/* Enticing CTA on hover */}
                <a 
                  href={trackingUrl} 
                  className="block w-full bg-white text-rose-600 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 active:scale-95 shadow-xl text-center"
                >
                  Join Her Room
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveSection;