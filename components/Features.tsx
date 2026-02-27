
import React from 'react';

const Features: React.FC = () => {
  const features = [
    {
      title: "Total Discretion",
      desc: "Your presence here is a secret between you and the night. Invisible access, absolute peace.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    },
    {
      title: "Intimate Harmony",
      desc: "Connect with spirits that match your own frequency. Discover the chemistry you've been seeking.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    },
    {
      title: "Luminous Clarity",
      desc: "Experience every detail in breathtaking Ultra-HD. It's more than a screen; it's a window.",
      icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    }
  ];

  return (
    <section className="py-24 bg-[#FAF5F5]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <div key={i} className="relative">
              <div className="w-16 h-16 glass-effect rounded-2xl flex items-center justify-center mb-8 text-rose-500 group bg-white shadow-sm">
                <svg className="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                </svg>
              </div>
              <h4 className="text-2xl font-serif mb-4 text-[#1C1C1C]">{f.title}</h4>
              <p className="text-[#1C1C1C]/60 leading-relaxed italic">"{f.desc}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
