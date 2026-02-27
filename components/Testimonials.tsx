
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  // Overriding constants locally to avoid file complexity while meeting user request
  const REFINED_TESTIMONIALS = [
    {
      id: 't1',
      quote: "A sanctuary where I can truly be myself. The connections here feel impossibly real.",
      author: "D. Ross",
      role: "Insider"
    },
    {
      id: 't2',
      quote: "The visual quality is stunning. I've never felt so close to someone through a screen.",
      author: "E. Mitchell",
      role: "Regular Guest"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-sm uppercase tracking-[0.4em] text-rose-500 font-bold mb-4">Whispers</h2>
        <h3 className="text-4xl font-serif mb-16 text-[#1C1C1C]">From the Inner Circle</h3>
        
        <div className="grid md:grid-cols-2 gap-12">
          {REFINED_TESTIMONIALS.map((t) => (
            <div key={t.id} className="glass-effect p-12 rounded-3xl text-left relative overflow-hidden group bg-[#FAF9F6] shadow-sm">
              <div className="absolute top-0 right-0 p-8 text-rose-500/5 group-hover:text-rose-500/10 transition-colors">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6739 6 22.017 7.34315 22.017 9V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V12C3.017 12.5523 2.56928 13 2.017 13H0.017C-0.535282 13 -1.017 12.5523 -1.017 12V9C-1.017 7.34315 0.326142 6 2.017 6H8.017C9.67386 6 11.017 7.34315 11.017 9V15C11.017 18.3137 8.33071 21 5.017 21H3.017Z" /></svg>
              </div>
              <p className="text-xl md:text-2xl font-serif italic mb-8 leading-relaxed relative z-10 text-[#1C1C1C]">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full accent-gradient"></div>
                <div>
                  <p className="font-bold text-[#1C1C1C]">{t.author}</p>
                  <p className="text-xs text-rose-500 uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
