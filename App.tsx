/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Heart, 
  Video, 
  ShieldCheck, 
  Users, 
  Sparkles, 
  ChevronRight, 
  Play, 
  MessageSquare,
  Globe,
  Lock
} from "lucide-react";

const AFFILIATE_URL = "https://t.acrsmartcam.com/406599/8873/0?aff_sub5=SF_006OG000004lmDN";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 glass border-b-0 bg-black/20">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center">
        <Heart className="w-5 h-5 text-white fill-current" />
      </div>
      <span className="text-xl font-bold tracking-tighter uppercase italic">SecretDesireLounge</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
      <a href={AFFILIATE_URL} className="hover:text-white transition-colors">Dating</a>
      <a href={AFFILIATE_URL} className="hover:text-white transition-colors">Live Shows</a>
      <a href={AFFILIATE_URL} className="hover:text-white transition-colors">Premium</a>
      <a href={AFFILIATE_URL} className="hover:text-white transition-colors">Safety</a>
    </div>
    <div className="flex items-center gap-4">
      <a href={AFFILIATE_URL} className="text-sm font-medium uppercase tracking-widest hover:text-rose-500 transition-colors">Login</a>
      <a href={AFFILIATE_URL} className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-rose-600/20">
        Join Now
      </a>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-mesh">
    <div className="absolute inset-0 z-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-600/10 rounded-full blur-[120px]" />
    </div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block px-4 py-1 mb-6 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-400 text-xs font-bold uppercase tracking-[0.2em]">
          The Elite Experience
        </span>
        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-[0.9] text-gradient">
          BEYOND<br />
          <span className="italic font-serif text-rose-500">CONNECTION</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 font-light leading-relaxed">
          Experience the most sophisticated adult dating and live streaming platform in the US. 
          Where elegance meets raw desire.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            id="enterBtn" 
            className="btn w-full sm:w-auto bg-white text-black hover:bg-rose-500 hover:text-white group" 
            href={AFFILIATE_URL}
          >
            Enter Now
            <ChevronRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a href={AFFILIATE_URL} className="btn w-full sm:w-auto glass px-10 py-4 rounded-full text-base font-bold uppercase tracking-widest hover:bg-white/10 transition-all">
            Watch Live
          </a>
        </div>
      </motion.div>
    </div>

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
      <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
      <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
    </div>
  </section>
);

const LiveNow = () => (
  <section className="py-24 bg-black">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">LIVE NOW</h2>
          <p className="text-white/40 uppercase tracking-widest text-sm">Top performers currently streaming</p>
        </div>
        <a href={AFFILIATE_URL} className="text-rose-500 font-bold uppercase tracking-widest text-sm flex items-center gap-2 hover:text-rose-400 transition-colors">
          View All Streams <ChevronRight className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <a href={AFFILIATE_URL} key={i} className="block">
            <motion.div 
              whileHover={{ y: -10 }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden glass cursor-pointer"
            >
            <img 
              src={`https://picsum.photos/seed/adult${i}/600/800`} 
              alt="Performer" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-rose-600 text-[10px] font-bold uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Live
              </span>
              <span className="px-2 py-1 rounded bg-black/50 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">
                <Users className="w-3 h-3 inline mr-1" /> 1.2k
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="text-xl font-bold mb-1">Jessica, 24</h3>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-4">Los Angeles, CA</p>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2 rounded-full bg-white/20 backdrop-blur-md">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">Enter Stream</span>
              </div>
            </div>
          </motion.div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="p-8 rounded-3xl glass hover:bg-white/10 transition-all group">
    <div className="w-12 h-12 bg-rose-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-600 transition-colors">
      <Icon className="w-6 h-6 text-rose-500 group-hover:text-white transition-colors" />
    </div>
    <h3 className="text-xl font-bold mb-4 tracking-tight">{title}</h3>
    <p className="text-white/50 leading-relaxed text-sm">{description}</p>
  </div>
);

const Features = () => (
  <section className="py-24 bg-zinc-950 relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    
    <div className="container mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">REDESIGNING DESIRE</h2>
        <p className="text-white/40 text-lg font-light">
          We've built a platform that respects your privacy while celebrating your passions. 
          Discover a community of like-minded individuals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={ShieldCheck} 
          title="Verified Profiles" 
          description="Every member is verified to ensure a safe and authentic environment for everyone."
        />
        <FeatureCard 
          icon={Lock} 
          title="Total Privacy" 
          description="Your data is encrypted and your identity is protected with military-grade security."
        />
        <FeatureCard 
          icon={Sparkles} 
          title="Premium Matching" 
          description="Our advanced algorithm connects you with people who share your specific interests."
        />
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-rose-600 z-0" />
    <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1920/1080')] opacity-10 mix-blend-overlay z-10" />
    
    <div className="container mx-auto px-6 relative z-20 text-center">
      <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">
        READY TO UNLOCK<br />YOUR FANTASIES?
      </h2>
      <p className="text-white/80 text-xl mb-12 max-w-xl mx-auto font-medium">
        Join the most exclusive adult community in the United States today.
      </p>
      <a href={AFFILIATE_URL} className="inline-block bg-black text-white px-12 py-5 rounded-full text-lg font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl">
        Create Your Account
      </a>
      
      <div className="mt-12 flex items-center justify-center gap-8 text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> 100% Secure</div>
        <div className="flex items-center gap-2"><Users className="w-4 h-4" /> 5M+ Members</div>
        <div className="flex items-center gap-2"><Globe className="w-4 h-4" /> US Based</div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-black border-t border-white/5">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
        <div className="flex items-center gap-2">
          <Heart className="w-6 h-6 text-rose-600 fill-current" />
          <span className="text-xl font-bold tracking-tighter uppercase italic">SecretDesireLounge</span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-[10px] font-bold uppercase tracking-widest text-white/40">
          <a href={AFFILIATE_URL} className="hover:text-white transition-colors">Terms</a>
          <a href={AFFILIATE_URL} className="hover:text-white transition-colors">Privacy</a>
          <a href={AFFILIATE_URL} className="hover:text-white transition-colors">Cookies</a>
          <a href={AFFILIATE_URL} className="hover:text-white transition-colors">Support</a>
          <a href={AFFILIATE_URL} className="hover:text-white transition-colors">Affiliates</a>
        </div>
      </div>
      <div className="text-center text-[10px] text-white/20 uppercase tracking-[0.3em]">
        © 2026 Velvet Elite Media. All rights reserved. 18+ Only.
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-black selection:bg-rose-500/30">
      <Navbar />
      <Hero />
      <LiveNow />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
