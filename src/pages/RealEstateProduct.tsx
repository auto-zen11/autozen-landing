import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowLeft, MessageSquare, Filter, Info, 
  Image as ImageIcon, Calendar, RefreshCcw, 
  UserPlus, FolderOpen, XCircle, CheckCircle2,
  Euro, Clock, TrendingUp
} from 'lucide-react';
import { Footer } from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Respuesta automática 24/7",
    desc: "Atiende leads incluso fuera del horario comercial."
  },
  {
    icon: <Filter className="w-6 h-6" />,
    title: "Cualificación inteligente",
    desc: "Filtra contactos según zona, presupuesto, urgencia, tipo de operación e intención real."
  },
  {
    icon: <Info className="w-6 h-6" />,
    title: "Información real de inmuebles",
    desc: "Responde dudas sobre precio, ubicación, disponibilidad, características, extras y amenities."
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: "Envío de imágenes",
    desc: "Muestra imágenes de las propiedades dentro de la conversación para mantener el interés del cliente."
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Agenda automática",
    desc: "Permite reservar llamadas o visitas sin intervención manual."
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "Seguimiento automático",
    desc: "Reactiva leads dormidos y evita que oportunidades reales queden olvidadas."
  },
  {
    icon: <UserPlus className="w-6 h-6" />,
    title: "Escalado humano",
    desc: "Deriva al equipo cuando detecta una oportunidad importante o una duda compleja."
  },
  {
    icon: <FolderOpen className="w-6 h-6" />,
    title: "Organización comercial",
    desc: "Ayuda a centralizar la información y reducir el desorden entre canales."
  }
];

const steps = [
  { step: "01", title: "Entrada del lead", desc: "El contacto llega desde la web, WhatsApp, formulario, campaña o portal inmobiliario." },
  { step: "02", title: "Respuesta inmediata", desc: "El sistema responde en segundos para mantener el interés del cliente." },
  { step: "03", title: "Cualificación automática", desc: "Recoge información como zona, presupuesto, tipo de inmueble, urgencia agrícola, financiación o interés real." },
  { step: "04", title: "Información del inmueble", desc: "Responde preguntas sobre características, metros, habitaciones, precio, ubicación, disponibilidad y envía imágenes." },
  { step: "05", title: "Agenda o derivación", desc: "Si el lead está interesado, propone llamada o visita. Si hay consulta compleja, avisa al equipo." },
  { step: "06", title: "Seguimiento", desc: "Si el lead no agenda o deja de responder, el sistema puede activar seguimientos automáticos para recuperar la oportunidad." }
];

const useCases = [
  { title: "Comprador interesado", desc: "Un usuario pregunta por un piso. El sistema responde con información, imágenes, características, disponibilidad y propone una visita." },
  { title: "Propietario que quiere vender", desc: "El sistema recoge datos del inmueble, urgencia, precio esperado y estado de la propiedad. Si detecta oportunidad, avisa al equipo para captación." },
  { title: "Lead fuera de horario", desc: "El usuario escribe por la noche. El sistema responde, cualifica y deja preparada una llamada o visita." },
  { title: "Consulta compleja", desc: "Si el cliente pregunta algo que requiere intervención humana, el sistema crea un ticket o avisa al comercial correspondiente." }
];

export const RealEstateProduct = () => {
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
              Real_Estate
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold uppercase tracking-tighter mb-8 leading-[1.1] max-w-5xl mx-auto">
              Convierte más leads inmobiliarios en <br />
              <span className="font-serif italic text-primary/90 normal-case font-light lowercase">visitas y ventas</span>
            </h1>
            <p className="max-w-3xl mx-auto text-textGhost/70 font-sans text-lg md:text-xl leading-relaxed mb-12">
              Un sistema automatizado para inmobiliarias y promotoras que responde al instante a cada lead, lo cualifica, resuelve dudas sobre inmuebles, muestra imágenes de propiedades y lo dirige hacia una llamada o visita.
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
              Muchas inmobiliarias no pierden oportunidades por falta de leads, sino por una <span className="text-red-500">mala gestión</span> de los contactos.
            </h2>
            <p className="text-xl md:text-3xl font-serif italic text-textGhost/80 mb-12">
              "Cada lead no atendido a tiempo puede convertirse en una venta perdida."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              "Respuestas tardías a leads de portales, web o WhatsApp.",
              "Contactos que entran fuera de horario y se enfrían.",
              "Leads sin cualificar correctamente.",
              "Seguimiento irregular dependiendo de cada comercial.",
              "Información dispersa entre WhatsApp, formularios, CRM y portales.",
              "Oportunidades reales que no llegan nunca a convertirse en visitas."
            ].map((text, i) => (
              <div key={i} className="bg-surface/30 border border-red-500/10 p-6 rounded-[1.5rem] flex items-start gap-4">
                <XCircle className="w-6 h-6 text-red-500/50 flex-shrink-0" />
                <span className="text-textGhost/80 font-sans text-sm">{text}</span>
              </div>
            ))}
          </div>

          <div className="bg-red-500/5 border border-red-500/20 rounded-[2rem] p-8 text-center max-w-3xl mx-auto">
            <p className="font-sans text-sm md:text-base text-textGhost/90">
              <strong className="text-white">Dato orientativo:</strong> Una mala gestión de leads puede hacer que una inmobiliaria pierda entre un <strong>15% y un 30%</strong> de sus oportunidades mensuales, lo que puede suponer miles de euros en comisiones no generadas.
            </p>
          </div>
        </section>

        {/* La Solución */}
        <section className="py-24 border-t border-white/5" ref={addToRefs}>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="font-mono text-xs tracking-widest uppercase text-primary mb-4 block">La Solución</span>
            <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8">
              El sistema actúa como una primera capa comercial disponible <span className="font-serif italic normal-case text-primary">24/7</span>
            </h2>
            <p className="text-lg md:text-xl font-sans text-textGhost/80 max-w-3xl mx-auto mb-12">
              El sistema atiende al lead en el momento exacto en el que muestra interés, evita que se enfríe y conduce la conversación hacia una llamada, visita o derivación al equipo comercial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Responde automáticamente al lead en segundos.",
              "Recoge datos importantes.",
              "Cualifica al cliente según intención real.",
              "Diferencia entre comprador, vendedor, inversor o alquiler.",
              "Resuelve dudas sobre inmuebles.",
              "Puede enviar imágenes de propiedades.",
              "Agenda llamadas o visitas.",
              "Avisa al equipo cuando detecta una oportunidad."
            ].map((text, i) => (
              <div key={i} className="bg-primary/5 border border-primary/20 p-6 rounded-[1.5rem] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-textGhost/90 font-sans text-sm">{text}</span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Valor para la Inmobiliaria */}
        <section className="py-24 border-t border-white/5" ref={addToRefs}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-mono text-xs tracking-widest uppercase text-primary mb-4 block">Valor para la inmobiliaria</span>
              <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight mb-8">
                Más oportunidades, <span className="text-primary italic font-serif lowercase tracking-normal">menos tiempo perdido</span>
              </h2>
              <p className="font-sans text-lg text-textGhost/80 mb-6 leading-relaxed">
                El valor del sistema no está solo en responder mensajes. Está en recuperar oportunidades que hoy se pierden, ahorrar tiempo al equipo comercial y aumentar la probabilidad de que cada lead termine en una visita o venta.
              </p>
              <p className="text-xl md:text-2xl font-serif italic text-white mb-8 border-l-2 border-primary pl-4">
                "Una sola operación recuperada puede cubrir varias veces el coste del sistema."
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <TrendingUp className="w-5 h-5" />, text: "Reducir leads perdidos" },
                { icon: <Clock className="w-5 h-5" />, text: "Aumentar visitas agendadas" },
                { icon: <Euro className="w-5 h-5" />, text: "Ahorrar tiempo al comercial" },
                { icon: <Info className="w-5 h-5" />, text: "Priorizar oportunidades reales" },
                { icon: <MessageSquare className="w-5 h-5" />, text: "Responder antes que la competencia" },
                { icon: <RefreshCcw className="w-5 h-5" />, text: "Mantener seguimiento constante" }
              ].map((item, i) => (
                <div key={i} className="bg-surface/50 border border-white/5 p-4 rounded-2xl flex items-center gap-3">
                  <div className="text-primary bg-primary/10 p-2 rounded-lg">{item.icon}</div>
                  <span className="font-sans text-sm text-textGhost/90 font-bold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personalización & Casos de Uso */}
        <section className="py-24 border-t border-white/5" ref={addToRefs}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Personalización */}
            <div>
              <h2 className="text-2xl md:text-4xl font-sans font-bold uppercase tracking-tight mb-6">
                No es un chatbot genérico
              </h2>
              <p className="text-lg font-sans text-textGhost/80 mb-8">
                El sistema se adapta a la forma real de vender de cada inmobiliaria.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {[
                  "Zonas de trabajo", "Tipo de inmuebles", "Rangos de precio",
                  "Perfil de cliente", "Tono de marca", "Preguntas de cualificación",
                  "Proceso comercial", "Calendario", "CRM", "WhatsApp", 
                  "Formularios", "Web actual"
                ].map((tag, i) => (
                  <span key={i} className="font-mono text-xs border border-white/10 bg-white/5 px-4 py-2 rounded-full text-textGhost/70">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Casos de uso */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-sans font-bold uppercase tracking-tight mb-6">
                Casos de Uso Prácticos
              </h2>
              {useCases.map((useCase, i) => (
                <div key={i} className="bg-surface/30 border border-white/5 p-6 rounded-[1.5rem]">
                  <h4 className="font-sans font-bold text-white mb-2">{useCase.title}</h4>
                  <p className="font-sans text-sm text-textGhost/70">{useCase.desc}</p>
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
              <span className="font-mono text-xs uppercase tracking-widest text-red-400/80 mb-6 block">El Riesgo del Descontrol</span>
              <h3 className="text-2xl md:text-4xl font-sans font-bold mb-8">
                Gestión Manual
              </h3>
              <ul className="space-y-6">
                {[
                  "Respuestas tardías.",
                  "Leads sin cualificar.",
                  "Seguimiento irregular.",
                  "Información dispersa e inconexa.",
                  "Comerciales perdiendo tiempo en tareas repetitivas."
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
              <span className="font-mono text-xs uppercase tracking-widest text-primary mb-6 block">Tu Agencia Evolucionada</span>
              <h3 className="text-2xl md:text-4xl font-sans font-bold mb-8">
                Con el Sistema
              </h3>
              <ul className="space-y-6">
                {[
                  "Respuesta inmediata y perfecta 24/7.",
                  "Leads siempre filtrados y perfilados.",
                  "Seguimiento constante automático.",
                  "Información consolidada para el equipo.",
                  "Comerciales centrados en cerrar ventas reales."
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
                Deja de perder <span className="font-serif italic text-primary lowercase tracking-normal">oportunidades</span> inmobiliarias
              </h2>
              <p className="font-sans text-lg md:text-xl text-textGhost/80 mb-12 max-w-2xl mx-auto">
                Te mostramos cómo funcionaría el sistema aplicado a tu inmobiliaria o promotora, con tus inmuebles, tus zonas y tu proceso comercial.
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
