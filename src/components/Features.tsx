import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Typewriter effect
      const textToType = "SEC_09 >> Optimizando flujos operativos...";
      const typeTarget = document.querySelector('.typewriter-target');
      if (typeTarget) {
        gsap.to(typeTarget, {
          text: textToType,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: typeTarget,
            start: "top 85%",
            once: true
          }
        });
      }

      // Shuffler effect
      gsap.fromTo('.shuffler-item', 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.shuffler-container',
            start: "top 80%"
          }
        }
      );

      // Card entrance stagger
      gsap.fromTo('.feature-card',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%"
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-32 px-4 max-w-7xl mx-auto">
      <div className="mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-sans font-medium uppercase tracking-tighter mb-4">
          Vector de <span className="font-serif italic text-primary lowercase tracking-normal">Escalabilidad</span>
        </h2>
        <p className="font-mono text-textGhost/50 text-sm tracking-widest uppercase">3 Propuestas Base // Autozen</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Shuffler */}
        <div className="feature-card bg-surface/40 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-20">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
          </div>
          <div className="h-40 mb-8 border border-white/10 rounded-[1.5rem] bg-[#0d0d18] p-4 flex flex-col justify-center shuffler-container overflow-hidden">
             <div className="font-mono text-xs text-textGhost/60 space-y-2">
               <div className="shuffler-item flex justify-between"><span>CAPEX</span><span className="text-red-400">-45%</span></div>
               <div className="shuffler-item flex justify-between"><span>OPEX</span><span className="text-red-400">-30%</span></div>
               <div className="shuffler-item flex justify-between"><span>OUTPUT</span><span className="text-primary">+300%</span></div>
             </div>
          </div>
          <h3 className="font-sans text-xl font-medium mb-3">Escalar sin invertir excesivamente</h3>
          <p className="font-sans text-sm text-textGhost/60 font-light leading-relaxed">
            Sistemas ligeros que amplifican tu capacidad operativa sin la necesidad de inflar tu estructura de costos.
          </p>
        </div>

        {/* Card 2: Typewriter */}
        <div className="feature-card bg-surface/40 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-20">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          </div>
          <div className="h-40 mb-8 border border-white/10 rounded-[1.5rem] bg-[#0d0d18] p-4 flex flex-col justify-end">
             <div className="font-mono text-xs text-primary mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>TERMINAL_ACTIVA</span>
             </div>
             <div className="font-mono text-xs text-textGhost/80 typewriter-target border-r-2 border-primary pr-1 min-h-[1rem]">
                {/* Text injected by GSAP */}
             </div>
          </div>
          <h3 className="font-sans text-xl font-medium mb-3">Eliminar cuellos de botella</h3>
          <p className="font-sans text-sm text-textGhost/60 font-light leading-relaxed">
            Identificamos puntos de fricción estructurales y desplegamos secuencias automáticas para erradicar la latencia operativa.
          </p>
        </div>

        {/* Card 3: Scheduler */}
        <div className="feature-card bg-surface/40 border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-6 opacity-20">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
          </div>
          <div className="h-40 mb-8 border border-white/10 rounded-[1.5rem] bg-[#0d0d18] p-4 flex flex-col justify-center relative">
             <div className="absolute top-1/2 left-4 right-4 h-px bg-white/10 -translate-y-1/2" />
             <div className="absolute top-1/2 left-1/4 w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(123,97,255,0.8)] -translate-y-1/2 transform transition-transform group-hover:translate-x-[400%] duration-1000 ease-in-out" />
             
             <div className="flex justify-between w-full relative z-10 px-2 mt-6">
                <span className="font-mono text-[10px] text-textGhost/40">INPUT</span>
                <span className="font-mono text-[10px] text-primary">MAX_EFFICIENCY</span>
             </div>
          </div>
          <h3 className="font-sans text-xl font-medium mb-3">Multiplicar la eficiencia</h3>
          <p className="font-sans text-sm text-textGhost/60 font-light leading-relaxed">
            Protocolos de IA que ejecutan a la velocidad del código, permitiendo a tu equipo humano enfocarse en trabajo de alto valor.
          </p>
        </div>

      </div>
    </section>
  );
};
