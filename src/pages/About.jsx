import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Intro animations
      gsap.from('.about-text', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });

      // Misssion paragraph animations on scroll
      const paragraphs = gsap.utils.toArray('.mission-p');
      paragraphs.forEach((p, i) => {
        gsap.from(p, {
          scrollTrigger: {
            trigger: p,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="pt-32 pb-32">
      {/* About Hero Section */}
      <section className="relative min-h-[60vh] w-full flex items-center justify-center px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="about-text inline-flex items-center gap-2 px-4 py-2 rounded-full border border-champagne/30 bg-obsidian/50 backdrop-blur-sm text-champagne text-xs font-data uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
            Identidad del Sistema
          </div>
          <h1 className="about-text text-5xl md:text-7xl lg:text-8xl font-title font-bold tracking-tighter text-ivory leading-[0.9]">
            PRECISIÓN COMO
            <span className="block font-drama italic font-normal text-champagne tracking-normal mt-2">
              única directiva.
            </span>
          </h1>
          <p className="about-text max-w-2xl mx-auto text-lg text-ivory/70 font-title font-light leading-relaxed text-balance">
            Autozen no es una agencia de consultoría. Somos arquitectos de eficiencia. Desarrollamos instrumentos digitales que erradican la sobrecarga operativa.
          </p>
        </div>
      </section>

      {/* Mission / History Section */}
      <section className="relative max-w-4xl mx-auto px-6 mt-24">
        
        {/* Decorative Line */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent mb-24" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <h2 className="text-sm font-data text-champagne uppercase tracking-widest sticky top-32">
              Nuestra Postura
            </h2>
          </div>
          
          <div className="md:col-span-8 space-y-12 text-lg md:text-xl font-title font-light text-ivory/80 leading-relaxed">
            <p className="mission-p">
              Nacimos de la frustración al observar cómo corporaciones brillantes quedaban atrapadas en <span className="text-ivory font-medium">cuellos de botella sistémicos</span>. El esfuerzo humano debería dedicarse a la innovación, no a la fricción de procesos intermedios.
            </p>
            <p className="mission-p">
              Nuestra filosofía se basa en la <span className="font-drama italic text-champagne text-2xl">sintetización absoluta</span>. Analizamos tu infraestructura de negocio como si fuera un motor hipercomplejo, extraemos las piezas redundantes y las reemplazamos con flujos automatizados impenetrables.
            </p>
            <p className="mission-p">
              No creemos en el software por el software. Creemos en herramientas silenciosas que magnifican la eficiencia operativa de tu equipo hasta llevarla al 100%, sin requerir un gramo más de inversión en personal estructurado.
            </p>
            
            <div className="mission-p pt-12">
              <div className="p-8 rounded-2xl border border-slate/50 bg-slate/10 backdrop-blur-sm">
                <blockquote className="font-drama italic text-3xl text-ivory leading-tight">
                  "El diseño supremo no es cuando ya no hay nada que añadir, sino cuando ya no queda nada que se pueda quitar."
                </blockquote>
              </div>
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}
