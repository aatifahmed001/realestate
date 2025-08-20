import { useEffect, useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1600&auto=format&fit=crop',
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % images.length), 3500);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="relative overflow-hidden rounded-lg h-64 md:h-80">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`slide-${i}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i===index?'opacity-100':'opacity-0'}`} />
          ))}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`w-2.5 h-2.5 rounded-full ${i===index?'bg-white':'bg-white/50'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
