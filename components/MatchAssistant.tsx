
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

interface MatchAssistantProps {
  onClose: () => void;
}

const MatchAssistant: React.FC<MatchAssistantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<{role: 'ai' | 'user', text: string}[]>([
    { role: 'ai', text: "Welcome to Romantic. I'm here to guide you to the connection you've been dreaming of. What is it that you truly desire tonight?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are an alluring and sophisticated guide for 'Romantic', a high-end adult dating and streaming sanctuary. 
                  The user said: "${userMsg}". 
                  Respond in a sultry, inviting, and professional tone. Avoid words like 'membership', 'elite', or 'concierge'.
                  Keep it brief (under 50 words). Focus on making them feel seen and understood.`,
        config: { temperature: 0.9 }
      });

      setMessages(prev => [...prev, { role: 'ai', text: response.text || "I'm lost in thought for a moment... but the magic is still here." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', text: "A momentary lapse in our connection. Tell me again, what are you seeking?" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-lg glass-effect rounded-3xl overflow-hidden animate-in fade-in zoom-in duration-300 flex flex-col h-[600px] bg-white shadow-2xl">
        <div className="p-6 border-b border-black/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 accent-gradient rounded-full flex items-center justify-center text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </div>
            <div>
              <h3 className="font-serif text-lg text-[#1C1C1C]">Your Guide</h3>
              <p className="text-[10px] text-rose-500 uppercase tracking-widest font-bold">Waiting for You</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors text-[#1C1C1C]">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth bg-[#FAF9F6]">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
                m.role === 'user' ? 'bg-rose-600 rounded-tr-none text-white' : 'bg-white rounded-tl-none border border-black/5 text-[#1C1C1C]'
              }`}>
                <p className="text-sm leading-relaxed">{m.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl animate-pulse shadow-sm border border-black/5">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-black/20 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-black/20 rounded-full"></div>
                  <div className="w-1.5 h-1.5 bg-black/20 rounded-full"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-black/5 bg-white">
          <div className="relative flex items-center">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Whisper your thoughts..."
              className="w-full bg-[#FAF9F6] border border-black/10 rounded-2xl px-6 py-4 pr-16 focus:outline-none focus:border-rose-500 transition-colors text-[#1C1C1C]"
            />
            <button 
              onClick={handleSend}
              className="absolute right-2 accent-gradient p-3 rounded-xl hover:scale-105 active:scale-95 transition-all text-white"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </button>
          </div>
          <p className="text-center text-[10px] text-[#1C1C1C]/30 mt-4 italic">
            Romantic Sanctuary • Absolute Discretion • Your Secret is Safe
          </p>
        </div>
      </div>
    </div>
  );
};

export default MatchAssistant;
