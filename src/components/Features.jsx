import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const ShufflerCard = () => {
  const [activeItem, setActiveItem] = useState(0);
  const items = ['Tareas Diarias', 'Flujos de Aprobación', 'Comunicación', 'Documentación'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div className="h-64 rounded-large bg-obsidian border border-slate flex flex-col items-center justify-center p-6 relative overflow-hidden group">
      <div className="absolute top-4 left-4 text-xs font-data text-slate uppercase">01 // Eliminar</div>
      <div className="text-xl font-title text-champagne mb-4">Cuellos de Botella</div>
      
      <div className="w-full relative h-12 flex items-center justify-center overflow-hidden bg-slate/30 rounded-full border border-slate/50">
        <div key={activeItem} className="font-data text-sm text-ivory/80 animate-[slideUp_0.5s_ease-out]">
          Resolviendo: {items[activeItem]}
        </div>
      </div>
    </div>
  );
};

const TypewriterCard = () => {
  const [text, setText] = useState('');
  const fullText = "RENDIMIENTO: +200%\nLATENCIA: 0.0s\nSISTEMA OPTIMIZADO.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) i = 0; // Restart loop
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-64 rounded-large bg-obsidian border border-slate flex flex-col p-6 relative overflow-hidden">
      <div className="absolute top-4 left-4 text-xs font-data text-slate uppercase">02 // Escalar</div>
      <div className="mt-8 text-xl font-title tracking-tight text-ivory mb-2">Duplicar Eficiencia</div>
      
      <div className="flex-1 w-full bg-[#111] rounded-xl p-4 mt-2 font-data text-xs text-champagne/80 whitespace-pre-line border border-slate/40 flex items-start">
        {text}<span className="w-1.5 h-3 bg-champagne inline-block ml-1 animate-ping"></span>
      </div>
    </div>
  );
};

const SchedulerCard = () => {
  return (
    <div className="h-64 rounded-large bg-obsidian border border-slate flex flex-col p-6 relative overflow-hidden">
      <div className="absolute top-4 left-4 text-xs font-data text-slate uppercase">03 // Liberar</div>
      <div className="mt-8 text-xl font-title text-ivory mb-4">Menor Carga de Trabajo</div>
      
      {/* Micro-UI Timeline */}
      <div className="relative flex-1 w-full flex flex-col justify-center gap-4">
        <div className="h-2 w-full bg-slate rounded-full overflow-hidden">
          <div className="h-full bg-champagne w-1/4 animate-[expand_3s_ease-in-out_infinite]" />
        </div>
        <div className="flex justify-between text-[10px] font-data text-slate uppercase">
          <span>Manual</span>
          <span className="text-champagne">Automatizado</span>
        </div>
      </div>
    </div>
  );
};

export function Features() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-32 px-6 bg-obsidian relative z-10 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-sm font-data text-champagne uppercase tracking-widest mb-6 border border-champagne/30 rounded-full px-4 py-1 inline-block">
            Métricas de Sistema
          </h2>
          <p className="text-4xl md:text-5xl font-drama italic text-ivory mx-auto max-w-2xl text-balance">
            La precisión arquitectónica para escalar operaciones de alto nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="feature-card"><ShufflerCard /></div>
          <div className="feature-card"><TypewriterCard /></div>
          <div className="feature-card"><SchedulerCard /></div>
        </div>
      </div>
    </section>
  );
}
