import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    id: '01',
    title: 'Auditoría Neuronal',
    description: 'Mapeamos cada flujo de datos y proceso de la organización. Descubrimos ineficiencias ocultas térmicamente en tiempo real.',
    color: 'from-blue-600/20 to-transparent',
    svg: (
      <svg className="w-full h-full text-blue-500 opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path className="waveform-path" fill="none" stroke="currentColor" strokeWidth="0.5" d="M0,50 Q25,10 50,50 T100,50" />
        <path className="waveform-path" fill="none" stroke="currentColor" strokeWidth="0.2" d="M0,50 Q25,30 50,50 T100,50" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'Síntesis Estructural',
    description: 'Arquitectamos los modelos predictivos y autómatas necesarios para sustituir el esfuerzo manual de bajo nivel.',
    color: 'from-purple-600/20 to-transparent',
    svg: (
      <svg className="w-full h-full text-purple-500 opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
        <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="spin-slow" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1" className="spin-reverse-fast" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'Inyección de Escalabilidad',
    description: 'Despliegue de los sistemas. La empresa muta instantáneamente hacia una entidad quirúrgica y escalable.',
    color: 'from-primary/20 to-transparent',
    svg: (
      <svg className="w-full h-full text-primary opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
        <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="2" className="laser-beam" />
        <rect x="40" y="20" width="20" height="60" fill="none" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    )
  }
];

export const Protocol = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // SVG Animations
      gsap.to('.waveform-path', {
        attr: { d: "M0,50 Q25,90 50,50 T100,50" },
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      gsap.to('.spin-slow', { rotation: 360, duration: 20, repeat: -1, ease: 'none', transformOrigin: '50% 50%' });
      gsap.to('.spin-reverse-fast', { rotation: -360, duration: 10, repeat: -1, ease: 'none', transformOrigin: '50% 50%' });
      
      gsap.fromTo('.laser-beam', 
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.5, repeat: -1, yoyo: true, ease: 'power4.inOut', transformOrigin: 'left center' }
      );

      // Stacking Cards Logic
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const isLastCard = i === phases.length - 1;

        ScrollTrigger.create({
          trigger: card,
          start: 'top top',
          endTrigger: containerRef.current,
          end: 'bottom bottom',
          pin: true,
          pinSpacing: false,
          scrub: true,
          animation: !isLastCard ? gsap.to(card, {
            scale: 0.9 + (i * 0.02),
            y: `-${10 + (i * 2)}%`,
            opacity: 0.3,
            ease: 'none'
          }) : undefined
        });
      });
      
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section id="protocol" ref={containerRef} className="relative pb-32">
      <div className="pt-32 pb-16 text-center sticky top-0 z-0">
        <h2 className="text-4xl md:text-6xl font-sans font-medium uppercase tracking-tighter mb-4">
          Protocolo de <span className="font-serif italic text-primary lowercase tracking-normal">Instalación</span>
        </h2>
      </div>

      <div className="relative z-10">
        {phases.map((phase, index) => (
          <div 
            key={phase.id}
            ref={el => { cardsRef.current[index] = el; }}
            className="h-screen w-full flex items-center justify-center p-4 sticky top-0"
          >
            <div className={`w-full max-w-5xl h-[80vh] bg-surface rounded-[3rem] border border-white/10 overflow-hidden relative flex flex-col md:flex-row shadow-[0_0_50px_rgba(0,0,0,0.8)]`}>
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-40 pointer-events-none`} />
              
              {/* SVG Animation Area */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 md:inset-y-0 md:right-0 md:left-1/2 md:h-full z-0 overflow-hidden mix-blend-screen pointer-events-none">
                {phase.svg}
              </div>

              {/* Content */}
              <div className="relative z-10 p-12 md:p-24 flex flex-col justify-center w-full md:w-1/2 h-full">
                <span className="font-mono text-primary text-sm mb-6 flex items-center gap-4">
                  <span className="w-12 h-px bg-primary" /> PHASE_{phase.id}
                </span>
                <h3 className="text-4xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-6">
                  {phase.title}
                </h3>
                <p className="font-sans text-lg text-textGhost/70 font-light leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
