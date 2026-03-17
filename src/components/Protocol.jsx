import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ProtocolCard = ({ title, description, step, isLast }) => {
  return (
    <div className={`protocol-card w-full rounded-large bg-obsidian border border-slate p-8 md:p-12 shadow-2xl sticky top-32 ${isLast ? 'mb-0' : 'mb-32'}`}>
      <div className="flex flex-col md:flex-row gap-12 items-center justify-between h-full">
        
        <div className="flex-1 space-y-6">
          <div className="text-champagne font-data text-sm uppercase tracking-widest">
            Fase {step}
          </div>
          <h3 className="text-4xl md:text-5xl font-drama italic text-ivory">
            {title}
          </h3>
          <p className="font-title font-light text-ivory/70 text-lg md:text-xl max-w-md">
            {description}
          </p>
        </div>
        
        <div className="flex-1 flex justify-center items-center w-full min-h-[300px] border border-slate/30 rounded-2xl bg-slate/10 overflow-hidden relative">
          {/* Abstract SVG Animation Placeholder */}
          <svg viewBox="0 0 100 100" className="w-1/2 h-1/2 opacity-50">
           {step === '01' && (
              <circle cx="50" cy="50" r="40" fill="none" stroke="#C9A84C" strokeWidth="2" className="animate-[spin_10s_linear_infinite]" strokeDasharray="10 20" />
            )}
            {step === '02' && (
              <>
                <line x1="10" y1="50" x2="90" y2="50" stroke="#FAF8F5" strokeWidth="1" className="animate-pulse" />
                <path d="M 10 50 Q 30 20 50 50 T 90 50" fill="none" stroke="#C9A84C" strokeWidth="2" />
              </>
            )}
            {step === '03' && (
              <rect x="30" y="30" width="40" height="40" fill="none" stroke="#FAF8F5" strokeWidth="1" className="animate-[spin_4s_linear_infinite]" />
            )}
          </svg>
        </div>

      </div>
    </div>
  );
};

export function Protocol() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card');
      
      cards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 100px",
          endTrigger: containerRef.current,
          end: "bottom bottom",
          pin: true,
          pinSpacing: false,
        });

        if (i < cards.length - 1) {
          gsap.to(card, {
            scale: 0.98,
            opacity: 0.8,
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom",
              end: "top 200px", // Animates out before the next card fully hits top
              scrub: true,
            }
          });
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-32 bg-obsidian z-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 pb-[50vh]" ref={containerRef}>
        
        <div className="mb-24 text-center">
          <h2 className="text-3xl md:text-6xl font-title font-bold text-ivory tracking-tighter mb-6">
            SISTEMA <span className="font-drama italic text-champagne font-normal">Operativo.</span>
          </h2>
          <p className="text-ivory/60 font-data text-sm uppercase tracking-widest max-w-xl mx-auto">
            Secuencia de integración diseñada para eliminar sobrecarga estructural y maximizar rendimiento.
          </p>
        </div>

        <div className="relative">
          <ProtocolCard 
            step="01" 
            title="Diagnóstico" 
            description="Auditoría tecnológica para localizar cuellos de botella y flujos de trabajo redundantes." 
          />
          <ProtocolCard 
            step="02" 
            title="Sintetización" 
            description="Diseño e implementación de sistemas automatizados que reemplazan el esfuerzo manual." 
          />
          <ProtocolCard 
            step="03" 
            title="Escalamiento" 
            description="Duplicación de la eficiencia operativa sin necesidad de aumentar la plantilla laboral." 
            isLast={true}
          />
        </div>

      </div>
    </section>
  );
}
