import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowLeft, MessageSquare, CalendarCheck, CalendarRange, Info, 
  RefreshCcw, UserPlus, XCircle, CheckCircle2,
  TrendingUp, Clock, Euro, ShieldCheck, HeartPulse
} from 'lucide-react';
import { Footer } from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Atención automática 24/7",
    desc: "Asegura que ninguna consulta quede sin respuesta, sin importar la hora."
  },
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Gestión completa de citas",
    desc: "Permite a los pacientes crear, modificar o cancelar sus citas automáticamente."
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "Recordatorios automáticos",
    desc: "Envía avisos de confirmación para evitar ausencias y huecos vacíos en la agenda."
  },
  {
    icon: <Info className="w-6 h-6" />,
    title: "Respuesta a dudas frecuentes",
    desc: "Resuelve consultas recurrentes sobre tratamientos, horarios y aseguradoras."
  },
  {
    icon: <CalendarRange className="w-6 h-6" />,
    title: "Optimización de agenda",
    desc: "Mantiene la agenda siempre actualizada sincronizando en tiempo real."
  },
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Escalado a humano",
    desc: "Deriva inmediatamente a la recepción las urgencias o dudas complejas."
  }
];

const steps = [
  { step: "01", title: "Paciente contacta", desc: "El paciente escribe escribiendo desde la web, WhatsApp, redes sociales u otros canales." },
  { step: "02", title: "Respuesta inmediata", desc: "El sistema responde automáticamente en segundos con las opciones disponibles." },
  { step: "03", title: "Gestión de cita", desc: "El sistema permite al paciente crear, modificar o consultar su cita en el momento." },
  { step: "04", title: "Recordatorios", desc: "Se envían recordatorios automáticos previos a la cita para confirmar asistencia." },
  { step: "05", title: "Derivación al equipo", desc: "Si el paciente lo requiere o hay algo complejo, se notifica de inmediato a recepción." }
];

export const DentalClinicProduct = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });

      elementsRef.current.forEach((el) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-primary/30 selection:text-white bg-background overflow-x-hidden pt-24 pb-0">
      
      {/* Header */}
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
        {/* Hero Section */}
        <section ref={heroRef} className="pt-20 pb-24 text-center relative pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px]" />
          
          <div className="relative z-10 pointer-events-auto">
            <span className="inline-block px-4 py-1.5 border border-primary/20 rounded-full font-mono text-xs tracking-widest uppercase text-primary bg-primary/5 mb-8">
              Dental_Clinics
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold uppercase tracking-tighter mb-8 leading-[1.1] max-w-5xl mx-auto">
              Convierte más consultas en <br />
              <span className="font-serif italic text-primary/90 normal-case font-light lowercase">citas confirmadas</span>
            </h1>
            <p className="max-w-3xl mx-auto text-textGhost/70 font-sans text-lg md:text-xl leading-relaxed mb-12">
              Un sistema automatizado para clínicas dentales que responde al instante a pacientes, gestiona citas, reduce cancelaciones y optimiza la agenda sin necesidad de ampliar el equipo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://cal.com/javiergg/30min?user=javiergg&overlayCalendar=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-magnetic border border-primary/50 bg-primary/10 hover:bg-primary/20 backdrop-blur-md rounded-2xl py-4 px-8 flex items-center justify-center gap-2 transition-all duration-300 w-full sm:w-auto"
              >
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-primary">Solicitar demo</span>
              </a>
              <a 
                href="#como-funciona"
                className="btn-magnetic border border-white/10 hover:border-white/30 bg-white/5 backdrop-blur-md rounded-2xl py-4 px-8 flex items-center justify-center gap-2 transition-all duration-300 w-full sm:w-auto"
              >
                <span className="font-sans font-bold text-xs uppercase tracking-widest text-white">Ver cómo funciona</span>
              </a>
            </div>
          </div>
        </section>

        {/* El Problema */}
        <section className="py-24 border-t border-white/5" ref={addToRefs}>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="font-mono text-xs tracking-widest uppercase text-red-500 mb-4 block">El Problema</span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8">
              Muchas clínicas pierden pacientes diariamente por una <span className="text-red-500">mala gestión</span> del contacto inicial.
            </h2>
            <p className="text-xl md:text-3xl font-serif italic text-textGhost/80 mb-12">
              "Cada paciente que no recibe respuesta rápida o no reserva es una oportunidad de ingreso perdida."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Llamadas perdidas en pico de trabajo.",
              "WhatsApp pendientes sin responder por horas.",
              "Pacientes que preguntan pero no reservan.",
              "Recepción saturada con tareas repetitivas.",
              "Citas olvidadas sin avisar.",
              "Cancelaciones de última hora sin recuperar."
            ].map((text, i) => (
              <div key={i} className="bg-surface/30 border border-red-500/10 p-6 rounded-[1.5rem] flex items-start gap-4">
                <XCircle className="w-6 h-6 text-red-500/50 flex-shrink-0" />
                <span className="text-textGhost/80 font-sans text-sm">{text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* La Solución */}
        <section className="py-24 border-t border-white/5" ref={addToRefs}>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="font-mono text-xs tracking-widest uppercase text-primary mb-4 block">La Solución</span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8">
              Una extensión de tu recepción disponible <span className="font-serif italic normal-case text-primary">24/7</span>
            </h2>
            <p className="text-lg md:text-xl font-sans text-textGhost/80 max-w-3xl mx-auto mb-12">
              El sistema asegura que cada paciente sea atendido al momento y tenga la opción de reservar su cita sin fricciones, automatizando la interacción inicial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              "Responder automáticamente",
              "Gestionar citas",
              "Confirmar y recordar citas",
              "Resolver dudas frecuentes",
              "Derivar al equipo si se requiere"
            ].map((text, i) => (
              <div key={i} className="bg-primary/5 border border-primary/20 p-5 rounded-[1.5rem] flex items-center justify-center text-center">
                <span className="text-textGhost/90 font-sans text-sm font-bold flex flex-col items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {text}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Cómo Funciona */}
        <section id="como-funciona" className="py-24 border-t border-white/5" ref={addToRefs}>
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-4">
              ¿Cómo <span className="font-serif italic text-primary lowercase tracking-normal">Funciona?</span>
            </h2>
            <div className="w-16 h-px bg-primary/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-surface/30 border border-white/5 p-8 rounded-[2rem] hover:border-white/20 transition-colors relative overflow-hidden group">
                <span className="absolute top-4 right-6 font-mono text-5xl font-bold text-white/5 group-hover:text-primary/10 transition-colors">
                  {step.step}
                </span>
                <h3 className="font-sans font-bold text-xl uppercase tracking-tighter mb-4 text-white relative z-10 mt-8">
                  {step.title}
                </h3>
                <p className="text-textGhost/60 font-sans text-sm leading-relaxed relative z-10">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Funcionalidades Principales */}
        <section className="py-24 border-t border-white/5" ref={addToRefs}>
           <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-4">
              Funcionalidades <span className="font-serif italic text-primary lowercase tracking-normal">Principales</span>
            </h2>
            <div className="w-16 h-px bg-primary/40" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <div key={index} className="bg-surface/30 border border-white/5 p-8 rounded-[2rem] hover:border-primary/30 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 border border-primary/20">
                  {item.icon}
                </div>
                <h3 className="font-sans font-bold text-lg uppercase tracking-tight mb-3 text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-textGhost/60 font-sans text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Valor para la Clínica */}
        <section className="py-24 border-t border-white/5" ref={addToRefs}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-xs tracking-widest uppercase text-primary mb-4 block">Valor Comercial</span>
              <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8">
                Optimización y <span className="text-primary italic font-serif lowercase tracking-normal">rentabilidad</span>
              </h2>
              <p className="font-sans text-lg text-textGhost/80 mb-6 leading-relaxed">
                Menos frustración en recepción y un proceso muchísimo más limpio donde cada lead cuenta. Al recuperar a los pacientes que se pierden en el proceso inicial, los ingresos aumentan de manera orgánica.
              </p>
              <p className="text-xl md:text-2xl font-serif italic text-white mb-8 border-l-2 border-primary pl-4">
                "Una agenda más optimizada significa más ingresos con los mismos recursos."
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <TrendingUp className="w-5 h-5" />, text: "Más citas confirmadas" },
                { icon: <CalendarRange className="w-5 h-5" />, text: "Menos huecos vacíos" },
                { icon: <ShieldCheck className="w-5 h-5" />, text: "Menos cancelaciones" },
                { icon: <Clock className="w-5 h-5" />, text: "Menos carga para recepción" },
                { icon: <HeartPulse className="w-5 h-5" />, text: "Mejor experiencia al paciente" },
                { icon: <Euro className="w-5 h-5" />, text: "Más ingresos sin más personal" }
              ].map((item, i) => (
                <div key={i} className="bg-surface/50 border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                  <div className="text-primary bg-primary/10 p-2 rounded-lg">{item.icon}</div>
                  <span className="font-sans text-sm text-textGhost/90 font-bold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparativa */}
        <section className="py-24 border-t border-white/5" ref={addToRefs}>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Gestión Manual */}
            <div className="bg-[#111] border border-red-500/10 p-10 md:p-14 rounded-[3rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 text-red-500/20">
                <XCircle className="w-24 h-24 stroke-[1]" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-red-400/80 mb-6 block">El Modelo Antiguo</span>
              <h3 className="text-2xl md:text-4xl font-sans font-bold mb-8">
                Gestión manual
              </h3>
              <ul className="space-y-6">
                {[
                  "Respuestas tardías a solicitudes vitales.",
                  "Citas mal gestionadas o traspapeladas.",
                  "Altas tasas de cancelaciones o ausencias.",
                  "Desorganización general del front-desk."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4 text-textGhost/60 font-sans">
                    <XCircle className="w-5 h-5 text-red-400/50 flex-shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Con el Sistema */}
            <div className="bg-primary/5 border border-primary/20 p-10 md:p-14 rounded-[3rem] relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 right-0 p-8 text-primary/10">
                <CheckCircle2 className="w-24 h-24 stroke-[1]" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-primary mb-6 block">Tu Clínica Autónoma</span>
              <h3 className="text-2xl md:text-4xl font-sans font-bold mb-8">
                Con el Sistema
              </h3>
              <ul className="space-y-6">
                {[
                  "Respuesta inmediata constante.",
                  "Agenda optimizada automáticamente.",
                  "Menos ausencias gracias a recordatorios.",
                  "Más control y estructura sólida."
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

        {/* CTA Final */}
        <section className="py-32 text-center" ref={addToRefs}>
          <div className="max-w-4xl mx-auto bg-surface border border-white/5 p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-bold uppercase tracking-tighter mb-8 leading-[1.1]">
                Deja de perder pacientes por <span className="font-serif italic text-primary lowercase tracking-normal">mala gestión</span> de citas
              </h2>
              <p className="font-sans text-lg md:text-xl text-textGhost/80 mb-12 max-w-2xl mx-auto">
                Te mostramos cómo funcionaría el sistema en tu clínica, integrándose sin problemas en tus operaciones diarias.
              </p>
              
              <a 
                href="https://cal.com/javiergg/30min?user=javiergg&overlayCalendar=true"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic border border-primary/50 bg-primary/20 hover:bg-primary/30 backdrop-blur-md rounded-2xl py-5 flex items-center justify-center gap-2 transition-all duration-300 w-full md:w-auto md:inline-flex px-12 group/btn"
              >
                <span className="font-sans font-bold text-sm uppercase tracking-widest text-primary">Solicitar demo gratis</span>
              </a>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
};
