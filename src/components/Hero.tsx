import { ChevronDown, Heart, Instagram, Music, Youtube } from 'lucide-react';
import React from 'react';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1517457224213-91db4da9236d?q=80&w=2940&auto=format&fit=crop)' }}
      >
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white">
          <h1 className="font-serif text-6xl md:text-8xl leading-tight mb-4">
            Аня<br />Иванова
          </h1>
          
          <div className="flex items-center gap-4 my-6">
            <span className="text-xl tracking-widest">2012 — 2024</span>
          </div>
          
          <div className="flex items-center gap-4 mb-8 w-64">
            <div className="h-px bg-white/60 flex-1"></div>
            <Heart className="w-4 h-4 text-white/80" strokeWidth={1.5} />
            <div className="h-px bg-white/60 flex-1"></div>
          </div>

          <p className="text-lg md:text-xl font-light italic opacity-90 max-w-sm">
            Она любила жизнь<br />и умела делать её светлее.
          </p>
        </div>
      </div>

      {/* Social Links - Right Side */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 text-white z-10">
        <a href="#" className="hover:opacity-80 transition-opacity"><Instagram className="w-5 h-5" /></a>
        <a href="#" className="hover:opacity-80 transition-opacity"><Youtube className="w-5 h-5" /></a>
        <a href="#" className="hover:opacity-80 transition-opacity"><Music className="w-5 h-5" /></a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 z-10 cursor-pointer hover:text-white transition-colors">
        <ChevronDown className="w-8 h-8 animate-bounce" strokeWidth={1} />
      </div>
    </section>
  );
}
