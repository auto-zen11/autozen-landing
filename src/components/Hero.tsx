import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo('.hero-text-1', 
        { y: 100, opacity: 0, rotate: 5 },
        { y: 0, opacity: 1, rotate: 0, duration: 1.2, delay: 0.2 }
      )
      .fromTo('.hero-text-2',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 },
        "-=0.9"
      )
      .fromTo('.hero-desc',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      .fromTo('.hero-cta',
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: 'back.out(1.7)' },
        "-=0.6"
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-20">
      {/* Background with bioluminescence feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1614729939124-032f0b5610ce?auto=format&fit=crop&w=2000&q=80" 
          alt="Bioluminescence fluid neon" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
        {/* Gradient overlays to blend smoothly into the deep void background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background h-full w-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background h-full w-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="mb-4 overflow-hidden inline-block">
          <div className="hero-text-1 bg-surface/50 backdrop-blur-md border border-primary/20 text-primary font-mono text-xs uppercase tracking-[0.2em] py-2 px-4 rounded-full">
            Secuenciación de Procesos Activa
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tighter mix-blend-plus-lighter mb-8 flex flex-col gap-2">
          <span className="hero-text-1 font-sans font-bold text-white uppercase overflow-hidden">
            Erradica
          </span>
          <span className="hero-text-2 font-serif italic text-primary/90 font-light overflow-hidden">
            los Cuellos de Botella.
          </span>
        </h1>
        
        <p className="hero-desc font-sans text-textGhost/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 tracking-wide font-light">
          Instalamos sistemas de IA y automatización que permiten escalar operaciones de forma fluida, sin multiplicar tu inversión.
        </p>
        
        <div className="hero-cta">
          <button className="btn-magnetic btn-primary shadow-[0_0_40px_-10px_rgba(123,97,255,0.6)]">
            <span className="label font-bold tracking-widest uppercase">Agendar Reunión</span>
          </button>
        </div>
      </div>
    </section>
  );
};
