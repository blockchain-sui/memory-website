import { ChevronDown, Heart, Instagram, Music, Youtube } from 'lucide-react';
import React from 'react';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero.webp)' }}
      >
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        <div className="max-w-2xl text-white mt-12">
          <h1 className="font-serif text-6xl md:text-[5.5rem] leading-[1.1] mb-16 md:mb-20">
            Аня<br />Иванова
          </h1>
          
          <div className="flex items-center gap-4 mb-10 md:mb-12">
            <span className="text-xl md:text-2xl tracking-widest">2012 — 2024</span>
          </div>
          
          <div className="flex items-center gap-4 mb-16 md:mb-20 w-72">
            <div className="h-px bg-white/60 flex-1"></div>
            <Heart className="w-4 h-4 text-white/80" strokeWidth={1.5} />
            <div className="h-px bg-white/60 flex-1"></div>
          </div>

          <p className="text-lg md:text-2xl font-light italic opacity-90 max-w-sm leading-relaxed">
            Она любила жизнь<br />и умела делать её светлее.
          </p>
        </div>
      </div>

      {/* Social Links - Right Side */}
      <div className="absolute right-6 md:right-12 bottom-16 md:bottom-24 flex flex-col gap-8 text-white z-10">
        <a href="#" className="hover:opacity-80 transition-opacity"><Instagram className="w-5 h-5 md:w-6 md:h-6" /></a>
        <a href="#" className="hover:opacity-80 transition-opacity"><Youtube className="w-5 h-5 md:w-6 md:h-6" /></a>
        <a href="#" className="hover:opacity-80 transition-opacity"><Music className="w-5 h-5 md:w-6 md:h-6" /></a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 z-10 cursor-pointer hover:text-white transition-colors">
        <ChevronDown className="w-8 h-8 animate-bounce" strokeWidth={1} />
      </div>
    </section>
  );
}
