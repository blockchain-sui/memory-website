import { Heart } from 'lucide-react';
import React from 'react';

export function Footer() {
  return (
    <footer className="relative h-[400px] w-full flex items-center justify-center overflow-hidden bg-[#e6e2db]">
      {/* Background Image / Collage */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: 'url(/footer.webp)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#fbfaf8]/80 to-[#fbfaf8]/20" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center gap-6 px-6">
        <h2 className="font-hand text-4xl md:text-5xl text-[var(--color-brand-text)] max-w-lg leading-tight">
          Мы помним. Мы любим.<br/>Она всегда с нами.
        </h2>
        <Heart className="w-8 h-8 text-[var(--color-brand-accent)]" strokeWidth={1} />
      </div>
    </footer>
  );
}
