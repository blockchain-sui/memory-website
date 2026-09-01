import React from 'react';

const DrawnHeart = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 100 100" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M50 83 C18 56 10 38 14 22 C17 10 30 8 40 16 C45 20 48 27 50 31 C52 27 57 18 63 14 C73 7 86 10 87 23 C89 39 79 57 50 83" />
  </svg>
);

const thumbnails = [
  "/about1.webp",
  "/about2.webp",
  "/about3.webp",
  "/about4.webp",
  "/about5.webp",
  "/about6.webp"
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* Text Content */}
        <div className="lg:col-span-4 flex flex-col justify-center h-full pt-4 md:pt-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-brand-muted)] mb-4">О ней</p>
          <div className="mb-6">
            <h2 className="font-serif text-3xl md:text-[40px] text-[var(--color-brand-text)] leading-[1.2]">
              <span className="relative inline-block">
                Она была
                <DrawnHeart className="absolute -right-16 top-1/2 -translate-y-[45%] w-10 h-10 text-[var(--color-brand-accent)] opacity-80" />
              </span><br />
              особенной
            </h2>
          </div>
          
          <div className="text-[var(--color-brand-text)] opacity-80 text-[13px] md:text-[14px] leading-[1.8] mb-8">
            <p>
              Аня была доброй, искренней и очень светлой.<br />
              Она любила музыку, танцы, котов и путешествия.<br />
              Умела смеяться так, что смеялись все вокруг.<br />
              Верила в людей и всегда старалась помочь.<br />
              Она оставила в наших сердцах<br />
              столько тепла и света.
            </p>
          </div>

          <button className="bg-[var(--color-brand-accent)] text-white px-7 py-2.5 rounded-full w-fit hover:bg-opacity-90 transition-all font-medium text-[13px]">
            Читать больше о ней
          </button>
        </div>

        {/* Image Grid */}
        <div className="lg:col-span-8 flex flex-col gap-3">
          <div className="w-full aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="/about1.webp" 
              alt="Аня" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
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
