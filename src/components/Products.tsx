import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Target, ArrowUpRight, Building } from 'lucide-react';

const products = [
  {
    id: 'product-03',
    title: 'Infraestructura de Captación de Clientes',
    label: 'Lead_Generation',
    description: 'Convierte tu empresa en una máquina de generar oportunidades automáticamente. Instalamos un sistema interno que encuentra y organiza clientes potenciales cada día (emails, teléfonos, webs). Tu sistema propio funcionando 24/7.',
    image: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?auto=format&fit=crop&q=80&w=1200',
    icon: <Target className="w-8 h-8" />,
    features: ['Autonomía 24/7', 'Datos Listos', 'Sin Intermediarios'],
    ctaText: 'Ver Detalles_',
    link: '/producto/infraestructura',
    isExternal: false
  },
  {
    id: 'product-04',
    title: 'Sistema de Conversión para Inmobiliarias',
    label: 'Real_Estate',
    description: 'Sistema automatizado para promotoras e inmobiliarias que responde al instante a los leads, los cualifica, resuelve dudas sobre inmuebles, muestra información e imágenes de propiedades y agenda visitas de forma automática.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    icon: <Building className="w-8 h-8" />,
    features: ['Respuesta 24/7', 'Cualificación', 'Agenda Automática'],
    ctaText: 'Ver Detalles_',
    link: 'https://cal.com/javiergg/30min?user=javiergg&overlayCalendar=true',
    isExternal: true
  }
];

export const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation for cards
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 60,
          opacity: 0,
          duration: 1,
          delay: i * 0.2,
          ease: 'power3.out'
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={sectionRef} className="py-32 px-4 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <span className="font-mono text-primary text-xs tracking-widest uppercase mb-4 block animate-fade-in">
            Nuestros Servicios_
          </span>
          <h2 className="text-5xl md:text-7xl font-sans font-bold uppercase tracking-tighter mb-8 leading-none">
            Soluciones de <span className="font-serif italic text-primary lowercase tracking-normal">Escalabilidad</span>
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto gap-8 lg:gap-12">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={el => { cardsRef.current[index] = el; }}
              className="group relative h-full flex"
            >
              <div className="relative w-full h-full min-h-[550px] md:min-h-[600px] lg:min-h-[650px] overflow-hidden rounded-[3rem] border border-white/5 bg-surface/50 backdrop-blur-xl transition-all duration-500 hover:border-primary/30 flex flex-col">
                {/* Product Image */}
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 ease-in-out grayscale group-hover:grayscale-0"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />

                {/* Content Overlay */}
                <div className="relative z-10 w-full h-full p-6 md:p-8 lg:p-10 flex flex-col justify-end flex-grow mt-auto">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-lg border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      {product.icon}
                    </div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 px-3 py-1 rounded-full bg-primary/5">
                      {product.label}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-sans font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  <p className="text-textGhost/70 font-sans text-sm md:text-base leading-relaxed mb-8 max-w-sm">
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((feature, fIndex) => (
                      <span 
                        key={fIndex}
                        className="text-[10px] font-mono text-textGhost/40 bg-white/5 px-3 py-1 rounded-full border border-white/5 whitespace-nowrap"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {product.isExternal ? (
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full btn-magnetic border border-white/10 hover:border-primary/50 bg-white/5 backdrop-blur-md rounded-2xl py-4 flex items-center justify-center gap-2 group/btn transition-all duration-300 overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-primary/10 translate-y-full hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                      <span className="font-sans font-bold text-xs uppercase tracking-widest relative z-10">{product.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform relative z-10" />
                    </a>
                  ) : (
                    <Link 
                      to={product.link} 
                      className="w-full btn-magnetic border border-white/10 hover:border-primary/50 bg-white/5 backdrop-blur-md rounded-2xl py-4 flex items-center justify-center gap-2 group/btn transition-all duration-300 overflow-hidden relative"
                    >
                      <div className="absolute inset-0 bg-primary/10 translate-y-full hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                      <span className="font-sans font-bold text-xs uppercase tracking-widest relative z-10">{product.ctaText}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform relative z-10" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
