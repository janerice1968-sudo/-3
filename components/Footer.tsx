
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lumina-charcoal py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 atmosphere-gradient opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
              <span className="font-serif text-2xl tracking-tight font-bold uppercase text-white">SOFTDESIREROOM.COM</span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-12 text-lg font-light italic">
              A midnight sanctuary designed for those seeking deep interaction and authentic sensory experiences. At the intersection of thought and desire, we await your presence.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-red-500 font-bold mb-8">Navigation</h4>
            <ul className="space-y-5 text-sm text-white/40 font-light tracking-widest">
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white transition-colors">Entrance</button></li>
              <li><button onClick={() => document.getElementById('philosophy')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white transition-colors">Midnight Rhythm</button></li>
              <li><button onClick={() => document.getElementById('gallery')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white transition-colors">Secret Archives</button></li>
              <li><button onClick={() => document.getElementById('experience')?.scrollIntoView({behavior:'smooth'})} className="hover:text-white transition-colors">Sensory Encounter</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] tracking-[0.5em] uppercase text-red-500 font-bold mb-8">Contact</h4>
            <ul className="space-y-5 text-sm text-white/40 font-light tracking-widest">
              <li>concierge@softdesireroom.com</li>
              <li>Tokyo • Paris • Bangkok</li>
              <li>@softdesireroom.official</li>
            </ul>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 text-[9px] tracking-[0.4em] uppercase text-white/20 font-bold">
          <p>© {new Date().getFullYear()} softdesireroom.com. All Rights Reserved.</p>
          <div className="flex space-x-12">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
