import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Intro animation
      gsap.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.2
      });
      
      gsap.from('.hero-badge', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'back.out(1.7)',
        delay: 0.8
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Fade to Obsidian at bottom */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")',
          opacity: 0.7 
        }}
      />
      {/* Añadiendo un gradiente azul para forzar la tonalidad tecnológica */}
      <div className="absolute inset-0 z-1 bg-[#0A192F]/60 mix-blend-color" />
      <div className="absolute inset-0 z-2 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-center space-y-12 flex flex-col items-center">
        <h1 className="hero-text text-5xl md:text-7xl lg:text-9xl font-title font-bold tracking-tighter text-ivory leading-[0.9]">
          ESCALA SIN
          <span className="block font-drama italic font-normal text-champagne tracking-normal mt-2 lg:mt-4">
            inversión exagerada.
          </span>
        </h1>

        <p className="hero-text max-w-2xl mx-auto text-lg md:text-xl text-ivory/70 font-title font-light leading-relaxed text-balance">
          Elimina los cuellos de botella en tu empresa. Duplica la eficiencia absoluta haciendo posible la menor carga de trabajo estructural.
        </p>

        <div className="hero-text pt-8">
          <a href="https://www.cal.eu/auto-zen/30min?user=auto-zen&overlayCalendar=true&date=2026-03-17" target="_blank" rel="noopener noreferrer" className="btn-magnetic bg-champagne text-obsidian px-10 py-5 text-lg shadow-[0_0_40px_rgba(201,168,76,0.3)] inline-block">
            <span>Agendar una Reunión</span>
          </a>
        </div>
      </div>
    </section>
  );
}
