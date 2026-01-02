
import React from 'react';

// --- DATA ---
const BAND_NAME = "LUMINA & VINE";
const TAGLINE = "Analog Soul. Digital Heart.";
const BIO_LONG = `Lumina & Vine are a Portland-based alt-pop duo blending 80s synth nostalgia with futuristic minimalism. Their signature "Pastel Noir" sound—characterized by atmospheric soundscapes and velvet-toned vocals—has garnered over 12 million streams since their 2022 debut. 

Driven by a highly visual creative process, the duo crafts immersive experiences that bridge the gap between high-fashion aesthetics and raw, vulnerable songwriting. They create music that feels like a faded polaroid coming to life in a neon-lit room.`;

const HERO_BG = "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=2000";

const GALLERY = [
  { url: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800", alt: "Studio Session" },
  { url: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=800", alt: "Live Performance" },
  { url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800", alt: "Promotional Portrait" },
  { url: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=800", alt: "Mood Visual" },
  { url: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=800", alt: "Neon Aesthetic" },
  { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800", alt: "Stage Fog" }
];

const SONGS = [
  { id: "1", title: "Static Flowers", duration: "3:42", cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600", tag: "Focus Track" },
  { id: "2", title: "Velvet Transit", duration: "4:15", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600", tag: "New Release" },
  { id: "3", title: "Neon Lullaby", duration: "3:10", cover: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=600", tag: "Single" },
  { id: "4", title: "Analog Dreams", duration: "3:58", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600", tag: "" },
  { id: "5", title: "Echo Chamber", duration: "4:02", cover: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?auto=format&fit=crop&q=80&w=600", tag: "" },
  { id: "6", title: "Midnight Transit", duration: "2:45", cover: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600", tag: "" },
  { id: "7", title: "Velvet Sky", duration: "4:30", cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80&w=600", tag: "" },
  { id: "8", title: "Digital Solace", duration: "3:22", cover: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=600", tag: "Demo" },
  { id: "9", title: "Rain Rituals", duration: "5:12", cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=600", tag: "" },
];

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#faf9f6] text-slate-800 font-['Plus_Jakarta_Sans'] flex flex-col selection:bg-pink-100 selection:text-pink-900">
      
      {/* Background Image Container (Hero Section Only) */}
      <div className="absolute top-0 left-0 w-full h-[80vh] overflow-hidden pointer-events-none z-0">
        <img 
          src={HERO_BG} 
          className="w-full h-full object-cover opacity-30 animate-in fade-in zoom-in duration-1000"
          alt=""
        />
        {/* Soft bottom fade to blend with page content */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#faf9f6]/40 to-[#faf9f6]" />
      </div>

      {/* Fixed Ambient Background Effects (Layers on top of hero image) */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-pink-50/40 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-blue-50/40 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 md:py-24 space-y-20 md:space-y-28">
        
        {/* SECTION 1: HERO & HEADER */}
        <header className="text-center md:text-left space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 min-h-[40vh] flex flex-col justify-end">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between border-b border-slate-100 pb-12 gap-8">
            <div className="space-y-4">
              <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400 block">Electronic Press Kit</span>
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-none text-slate-900 uppercase">
                {BAND_NAME}
              </h1>
              <p className="text-xl md:text-2xl font-light italic text-slate-500 tracking-wide">{TAGLINE}</p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
               <span className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-white/40">v3.5 Digital</span>
               <span className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-white/40">Portland Base</span>
            </div>
          </div>
        </header>

        {/* SECTION 2: EDITORIAL BIOGRAPHY */}
        <section className="space-y-10 pt-12">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-pink-400 shrink-0">01 / The Story</span>
            <div className="h-px w-full bg-slate-100" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              <p className="text-lg md:text-xl font-light leading-relaxed text-slate-600 whitespace-pre-line text-justify md:text-left italic tracking-tight">
                {BIO_LONG}
              </p>
            </div>
            <div className="space-y-10 bg-white/40 glass p-8 rounded-[32px] h-fit self-start">
               <div>
                  <p className="text-4xl font-black text-slate-900 leading-none tracking-tighter">12M+</p>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 mt-2">Spotify Streams</p>
               </div>
               <div>
                  <p className="text-4xl font-black text-slate-900 leading-none tracking-tighter">84%</p>
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300 mt-2">Listener Growth</p>
               </div>
               <div className="pt-6 border-t border-slate-50">
                  <p className="text-[9px] font-black uppercase tracking-widest text-slate-300 mb-2">Management</p>
                  <p className="text-sm font-bold text-slate-600">mgmt@luminaandvine.com</p>
               </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: DISCOGRAPHY / MUSIC */}
        <section className="space-y-12">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-400 shrink-0">02 / Music Catalog</span>
            <div className="h-px w-full bg-slate-100" />
          </div>
          
          <div className="bg-white/40 glass rounded-[40px] p-8 md:p-12 overflow-hidden">
            <div className="flex justify-between items-center mb-12">
               <h3 className="text-3xl font-black tracking-tight text-slate-900">Focus & New Releases</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
              {SONGS.map(song => (
                <div key={song.id} className="group flex items-center justify-between p-4 rounded-3xl hover:bg-white transition-all cursor-pointer border border-transparent hover:border-slate-50 hover:shadow-sm">
                  <div className="flex items-center gap-5">
                    <img src={song.cover} className="w-14 h-14 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform" alt="" />
                    <div>
                      <p className="text-base font-bold text-slate-800 group-hover:text-pink-500 transition-colors flex items-center gap-3">
                        {song.title}
                        {song.tag && <span className="text-[8px] bg-slate-50 px-2 py-1 rounded-full uppercase tracking-widest text-slate-400 font-black">{song.tag}</span>}
                      </p>
                      <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.2em]">Master Quality Audio</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-300 group-hover:text-slate-500 transition-colors">{song.duration}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 flex flex-wrap gap-4 items-center justify-center">
               <a href="#" target="_blank" rel="noopener noreferrer" className="flex-grow md:flex-none px-10 py-5 bg-white border border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:text-slate-900 hover:border-slate-900 transition-all text-center shadow-sm">
                 Spotify
               </a>
               <a href="#" target="_blank" rel="noopener noreferrer" className="flex-grow md:flex-none px-10 py-5 bg-white border border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:text-slate-900 hover:border-slate-900 transition-all text-center shadow-sm">
                 Apple Music
               </a>
               <a href="#" target="_blank" rel="noopener noreferrer" className="flex-grow md:flex-none px-10 py-5 bg-white border border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] rounded-2xl hover:text-slate-900 hover:border-slate-900 transition-all text-center shadow-sm">
                 YouTube
               </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: VISUALS / GALLERY */}
        <section className="space-y-12">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-purple-400 shrink-0">03 / Visual Identity</span>
            <div className="h-px w-full bg-slate-100" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY.map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-[40px] group shadow-sm ${i === 0 ? 'lg:col-span-2 lg:row-span-2' : 'aspect-square'}`}>
                <img 
                  src={img.url} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1" 
                  alt={img.alt} 
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white bg-black/20 backdrop-blur-md px-4 py-2 rounded-full">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-24 pb-12 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left space-y-6">
               <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">{BAND_NAME}</h2>
               <div className="flex flex-wrap gap-6 justify-center md:justify-start items-center">
                 {['Spotify', 'Instagram', 'Apple Music', 'YouTube'].map(s => (
                   <a key={s} href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors">{s}</a>
                 ))}
                 <a href="#" className="px-6 py-3 bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.3em] rounded-full hover:bg-pink-500 transition-all shadow-xl active:scale-95">
                   Download PDF EPK
                 </a>
               </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2 text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">
               <span>© {new Date().getFullYear()} Pastel Noir Records</span>
               <div className="flex gap-4 items-center">
                 <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                 <span>Link Encrypted & Secure</span>
               </div>
            </div>
          </div>
        </footer>
      </div>

      {/* FLOATING ACTION BUTTON: LINK TO MAIN PAGE */}
      <a 
        href="https://luminaandvine.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-white/60 glass rounded-full shadow-lg hover:shadow-pink-100/50 hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
        aria-label="Official Website"
      >
        <svg 
          className="w-6 h-6 text-slate-400 group-hover:text-pink-500 transition-colors" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
          />
        </svg>
        <span className="absolute right-16 bg-white/80 glass px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-white/40 shadow-sm">
          L&V Official Site
        </span>
      </a>

      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}
