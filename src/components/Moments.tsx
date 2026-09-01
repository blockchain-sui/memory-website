import { ChevronRight } from 'lucide-react';
import React from 'react';

const moments = [
  {
    title: 'Фотографии',
    count: '523 фото',
    image: '/save1.webp',
    href: '#photos'
  },
  {
    title: 'Видео',
    count: '32 видео',
    image: '/save2.webp',
    href: '#videos'
  },
  {
    title: 'Истории',
    count: '18 историй',
    image: '/save3.webp',
    href: '#stories'
  },
  {
    title: 'Воспоминания',
    count: '67 воспоминаний',
    image: '/save4.webp',
    href: '#memories'
  }
];

export function Moments() {
  return (
    <section className="py-24 bg-[#f8f6f2]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h3 className="text-center text-sm tracking-[0.3em] uppercase text-[var(--color-brand-muted)] mb-12">
          Сохранённые моменты
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moments.map((moment, index) => (
            <a 
              key={index} 
              href={moment.href}
              className="group relative h-[320px] rounded-2xl overflow-hidden block"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${moment.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <h4 className="font-serif text-3xl mb-1">{moment.title}</h4>
                  <p className="text-sm font-light opacity-80">{moment.count}</p>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
