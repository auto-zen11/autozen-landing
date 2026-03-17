import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
  const containerRef = useRef(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.philosophy-item', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="philosophy" ref={containerRef} className="py-32 px-6 bg-slate relative overflow-hidden">
      {/* Organic Parallax Background (simulated with CSS/SVG) */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
           style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #FAF8F5 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="philosophy-item space-y-8">
            <h2 className="text-3xl md:text-5xl font-drama italic text-champagne leading-tight">
              La diferencia entre crecimiento y sobrecarga.
            </h2>
            <p className="text-ivory/80 font-title font-light leading-relaxed text-lg">
              La mayoría de las empresas intentan escalar sumando recursos de forma desproporcionada. Creemos que el crecimiento elegante proviene de restar fricción tecnológica.
            </p>
          </div>

          <div className="space-y-6">
            <div className="philosophy-item bg-obsidian/50 p-6 rounded-large border border-obsidian">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-obsidian flex items-center justify-center text-slate">
                  <X size={16} />
                </div>
                <h3 className="font-title text-ivory/60">Enfoque Tradicional</h3>
              </div>
              <ul className="space-y-3 font-data text-sm text-ivory/50">
                <li>+ Inversión masiva en personal</li>
                <li>+ Sistemas fragmentados</li>
                <li>+ Cuellos de botella constantes</li>
              </ul>
            </div>

            <div className="philosophy-item bg-champagne text-obsidian p-6 rounded-large transform scale-105 origin-left shadow-2xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-8 rounded-full bg-obsidian text-champagne flex items-center justify-center">
                  <Check size={16} />
                </div>
                <h3 className="font-title font-bold">El Método Autozen</h3>
              </div>
              <ul className="space-y-3 font-data text-sm font-medium">
                <li>+ Arquitectura unificada</li>
                <li>+ Zero latencia operativa</li>
                <li>+ Eficiencia multiplicada</li>
              </ul>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
