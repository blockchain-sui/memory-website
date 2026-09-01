import { Heart } from 'lucide-react';
import React from 'react';

const thumbnails = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=2776&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=2787&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=2864&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2787&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526413232644-8a40f4110330?q=80&w=2940&auto=format&fit=crop"
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Text Content */}
        <div className="lg:col-span-5 flex flex-col justify-center h-full pt-12">
          <p className="text-sm tracking-[0.2em] uppercase text-[var(--color-brand-muted)] mb-4">О ней</p>
          <div className="flex items-start gap-4 mb-8">
            <h2 className="font-serif text-5xl md:text-6xl text-[var(--color-brand-text)] leading-tight">
              Она была<br />особенной
            </h2>
            <Heart className="w-12 h-12 text-[var(--color-brand-accent)] mt-2 opacity-80" strokeWidth={1} />
          </div>
          
          <div className="text-[var(--color-brand-text)] opacity-80 space-y-4 text-lg leading-relaxed mb-10 max-w-md">
            <p>
              Аня была доброй, искренней и очень светлой. Она любила музыку, танцы, котов и путешествия. Умела смеяться так, что смеялись все вокруг. Верила в людей и всегда старалась помочь. Она оставила в наших сердцах столько тепла и света.
            </p>
          </div>

          <button className="bg-[var(--color-brand-accent)] text-white px-8 py-3 rounded-full w-fit hover:bg-opacity-90 transition-all font-medium text-sm">
            Читать больше о ней
          </button>
        </div>

        {/* Image Grid */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop" 
              alt="Аня" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {thumbnails.map((src, i) => (
              <div key={i} className="aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
                <img 
                  src={src} 
                  alt={`Фото ${i+1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
