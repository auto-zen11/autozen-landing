import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Philosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on image
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
      
      // Text reveal
      gsap.fromTo('.phil-text',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%"
          }
        }
      );
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={containerRef} className="relative py-40 overflow-hidden bg-background">
      {/* Parallax Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <img 
          ref={imageRef}
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=2000&q=80" 
          alt="Abstract dark macro texture" 
          className="w-full h-[120%] object-cover scale-110 grayscale brightness-50 mix-blend-plus-lighter"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div className="phil-text">
          <h2 className="text-5xl md:text-7xl font-sans font-bold uppercase tracking-tighter mb-8 leading-[0.9]">
            La Industria <br/>
            <span className="font-serif italic font-light text-primary normal-case text-6xl md:text-8xl">Añade Peso.</span>
          </h2>
          <p className="font-sans text-lg text-textGhost/70 font-light max-w-md leading-relaxed">
            El paradigma clásico indica que para crecer debes contratar más, comprar más software y crear más procesos burocráticos. Nosotros creemos lo contrario.
          </p>
        </div>

        <div className="phil-text bg-surface/60 backdrop-blur-xl border border-primary/20 rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <h3 className="text-3xl font-sans font-medium mb-6 uppercase tracking-tight">Autozen Extrae</h3>
          <p className="font-sans text-textGhost font-light leading-relaxed mb-8">
            Diseñamos e implementamos sistemas autónomos precisos. Eliminamos el ruido operativo, permitiendo que tu organización opere como un instrumento perfectamente calibrado. Cada línea de código que desplegamos es un cuello de botella destruido.
          </p>
          
          <div className="flex items-center gap-4 font-mono text-xs tracking-widest uppercase text-primary">
            <span className="flex-1 h-px bg-primary/30" />
            <span>Precisión // Cero Fricción</span>
          </div>
        </div>

      </div>
    </section>
  );
};
