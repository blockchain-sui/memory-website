import { Heart, Instagram, Menu, Music, Youtube } from 'lucide-react';
import React from 'react';

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 text-white p-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <span className="font-hand text-3xl">Аня</span>
        <Heart className="w-4 h-4" strokeWidth={1.5} />
      </div>
      
      <div className="hidden md:flex items-center gap-10 lg:gap-16 text-sm font-medium tracking-wide">
        <a href="#about" className="hover:opacity-80 transition-opacity">О ней</a>
        <a href="#photos" className="hover:opacity-80 transition-opacity">Фотографии</a>
        <a href="#videos" className="hover:opacity-80 transition-opacity">Видео</a>
        <a href="#stories" className="hover:opacity-80 transition-opacity">Истории</a>
        <a href="#memories" className="hover:opacity-80 transition-opacity">Воспоминания</a>
      </div>

      <button className="md:hidden">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}
