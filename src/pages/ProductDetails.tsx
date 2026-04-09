import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowLeft, Target, Database, Settings, Server, 
  FolderTree, RefreshCcw, XCircle, CheckCircle2 
} from 'lucide-react';
import { Footer } from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Prospección automatizada",
    desc: "Búsqueda de empresas por tipo de negocio y ubicación. Generación automática de listas de leads."
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Extracción de datos clave",
    desc: "Nombre, Email, Teléfono, Web, Dirección, Rating y Categoría por cada empresa de forma estructurada."
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Automatización continua",
    desc: "Funcionamiento recurrente. Ejecutable manualmente, por horario estricto o mediante triggers."
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Infraestructura propia",
    desc: "Instalado en instancia privada de n8n. Sin depender de SaaS externos. Control total sobre tus datos."
  },
  {
    icon: <FolderTree className="w-6 h-6" />,
    title: "Organización de datos",
    desc: "Leads guardados de forma automática en Google Sheets o tu CRM favorito, listos para tu equipo comercial."
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "Sistema de enriquecimiento",
    desc: "Acceso web, extracción de emails desde URLs y filtrado automático de información irrelevante."
  }
];

export const ProductDetails = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLDivElement | null)[]>([]);
  const problemRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      // Hero Animation
      gsap.from(heroRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });

      // Features Grid Animation
      featuresRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out'
        });
      });

      // Problem vs Solution Animation
      gsap.from([problemRef.current, solutionRef.current], {
        scrollTrigger: {
          trigger: problemRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out'
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-primary/30 selection:text-white bg-background overflow-x-hidden pt-24">
      {/* Dynamic Background Noise overlay would technically be inherited via index.css or we could reimplement the SVG here if needed */}
      
      {/* Simplified Header */}
      <div className="fixed top-0 left-0 w-full z-50 px-6 py-6 border-b border-white/5 bg-background/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-textGhost hover:text-primary transition-colors group">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-mono text-xs uppercase tracking-widest font-bold">Volver_</span>
          </Link>
          <span className="font-sans font-bold tracking-widest uppercase text-xs">AUTOZEN</span>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 pb-32">
        {/* Detail Hero Section */}
        <section ref={heroRef} className="pt-20 pb-32 text-center relative pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 pointer-events-auto">
            <span className="inline-block px-4 py-1.5 border border-primary/20 rounded-full font-mono text-xs tracking-widest uppercase text-primary bg-primary/5 mb-8">
              Infraestructura_
            </span>
            <h1 className="text-5xl md:text-8xl font-sans font-bold uppercase tracking-tighter mb-8 leading-[1.1]">
              Captación<br />
              <span className="font-serif italic text-primary/90 normal-case font-light lowercase">Automatizada</span>
            </h1>
            <p className="max-w-2xl mx-auto text-textGhost/70 font-sans text-lg md:text-xl leading-relaxed">
              Creamos y desplegamos un sistema interno que identifica, recopila y organiza oportunidades de negocio sin depender de procesos manuales ni de costosas herramientas SaaS.
            </p>
          </div>
        </section>

        {/* What it includes - Grid */}
        <section className="py-24 border-t border-white/5 relative">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-4">
              Características del <span className="font-serif italic text-primary lowercase tracking-normal">Sistema</span>
            </h2>
            <div className="w-16 h-px bg-primary/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((item, index) => (
              <div 
                key={index}
                ref={el => { featuresRef.current[index] = el; }}
                className="bg-surface/30 border border-white/5 p-8 rounded-[2rem] hover:border-primary/30 transition-colors group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 border border-primary/20">
                  {item.icon}
                </div>
                <h3 className="font-sans font-bold text-xl uppercase tracking-tighter mb-4 text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-textGhost/60 font-sans text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Problem vs Solution Compare */}
        <section className="py-24 border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* The Problem */}
            <div ref={problemRef} className="bg-[#111] border border-red-500/10 p-10 md:p-14 rounded-[3rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-red-500/20">
                <XCircle className="w-24 h-24 stroke-[1]" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-red-400/80 mb-6 block">Problema Común</span>
              <h3 className="text-2xl md:text-4xl font-sans font-bold mb-8">
                El Antiguo Enfoque
              </h3>
              <ul className="space-y-6">
                {[
                  "Dependencia de herramientas limitadas (Apollo, etc.)",
                  "Procesos de búsqueda y volcado 100% manuales",
                  "Bases de datos pobres, sucias o desactualizadas",
                  "Pérdida de horas valiosas del equipo comercial"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-textGhost/60 font-sans">
                    <XCircle className="w-5 h-5 text-red-400/50 flex-shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Solution */}
            <div ref={solutionRef} className="bg-primary/5 border border-primary/20 p-10 md:p-14 rounded-[3rem] relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 p-8 text-primary/10">
                <CheckCircle2 className="w-24 h-24 stroke-[1]" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary mb-6 block">La Solución Autozen</span>
              <h3 className="text-2xl md:text-4xl font-sans font-bold mb-8">
                El Nuevo Paradigma
              </h3>
              <ul className="space-y-6">
                {[
                  "Independencia total y control sobre los datos",
                  "Flujo constante de oportunidades cualificadas",
                  "Mayor volumen de leads 24/7 sin intervención",
                  "Datos altamente enriquecidos y listos para uso"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-textGhost/90 font-sans">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </section>

      </main>
      
      {/* Existing global Footer with updated spacing adjustments if needed */}
      <Footer />
    </div>
  );
};
