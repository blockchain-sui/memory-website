import { Heart } from 'lucide-react';
import React from 'react';

const stories = [
  {
    quote: "Аня умела превращать обычный день в праздник. Даже если просто шли домой после школы.",
    author: "Маша, подруга",
    year: "2019",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "С ней можно было говорить часами обо всём на свете. Она всегда понимала и поддерживала.",
    author: "Катя, одноклассница",
    year: "2020",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "Она была лучиком света в нашем классе. Мы скучаем по ней каждый день.",
    author: "Елена Сергеевна, классный руководитель",
    year: "2021",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=150&auto=format&fit=crop"
  }
];

export function Stories() {
  return (
    <section id="stories" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center mb-16">
        <h3 className="text-center text-sm tracking-[0.3em] uppercase text-[var(--color-brand-muted)] mb-4">
          Истории и воспоминания
        </h3>
        <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 6C15 6 15 1 30 1C45 1 45 11 59 11" stroke="#c29b99" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stories.map((story, i) => (
          <div key={i} className="bg-white rounded-2xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-[#f0eee9] flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="text-4xl font-serif text-[var(--color-brand-accent)] opacity-40 mb-2">"</div>
              <p className="text-[var(--color-brand-text)] leading-relaxed text-[15px] mb-8 relative z-10">
                {story.quote}
              </p>
            </div>
            <div className="flex items-center gap-3 relative z-10">
              <img src={story.avatar} alt={story.author} className="w-10 h-10 rounded-full object-cover" />
              <div>
                <p className="text-xs font-medium text-[var(--color-brand-text)]">{story.author}</p>
                <p className="text-xs text-[var(--color-brand-muted)]">{story.year}</p>
              </div>
            </div>
            {/* Decorative floral element (simplified via SVG) */}
            <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none transform translate-x-4 translate-y-4">
               <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#c29b99" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c4-4 4-10 0-14-4 4-4 10 0 14z"/><path d="M12 8c4-4 10-4 14 0-4 4-10 4-14 0z" transform="rotate(45 12 8)"/></svg>
            </div>
          </div>
        ))}
        
        {/* Call to action card */}
        <div className="bg-[#f9f7f4] rounded-2xl p-8 flex flex-col justify-center items-center text-center border border-[#f0eee9]">
          <div className="flex items-center gap-2 mb-4">
            <h4 className="text-sm font-semibold tracking-wider text-[var(--color-brand-text)] uppercase">Поделиться<br/>воспоминанием</h4>
            <Heart className="w-5 h-5 text-[var(--color-brand-accent)]" strokeWidth={1.5} />
          </div>
          <p className="text-sm text-[var(--color-brand-muted)] mb-8">
            Если у вас есть история, связанная с Аней, поделитесь ей с нами.
          </p>
          <button className="border border-[var(--color-brand-accent)] text-[var(--color-brand-accent)] px-8 py-2.5 rounded-full text-sm font-medium hover:bg-[var(--color-brand-accent)] hover:text-white transition-colors w-full">
            Поделиться
          </button>
        </div>
      </div>

      <div className="flex justify-center">
        <button className="bg-[var(--color-brand-accent)] text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all font-medium text-sm">
          Читать все истории
        </button>
      </div>
    </section>
  );
}
