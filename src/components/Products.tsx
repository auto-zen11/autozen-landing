import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FileText, Users, ArrowUpRight } from 'lucide-react';

const products = [
  {
    id: 'product-01',
    title: 'Facturación Autónoma',
    label: 'Finance_Automation',
    description: 'Elimina el error humano y recupera el 80% del tiempo administrativo. Un flujo que gestiona, valida y procesa facturas en su totalidad de forma autónoma.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=1200',
    icon: <FileText className="w-8 h-8" />,
    features: ['Validación IA', 'Integración ERP', 'Conciliación Automática']
  },
  {
    id: 'product-02',
    title: 'Lead-Gen B2B Pro',
    label: 'Growth_Engine',
    description: 'Captación de leads de alto valor diseñada específicamente para agencias de marketing y consultoras. Escala tu pipeline con precisión quirúrgica.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    icon: <Users className="w-8 h-8" />,
    features: ['Segmentación Hyper-Target', 'Shadow Personalization', 'Automatización de Alcance']
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
            Nuestra Tecnología_
          </span>
          <h2 className="text-5xl md:text-7xl font-sans font-bold uppercase tracking-tighter mb-8 leading-none">
            Soluciones de <span className="font-serif italic text-primary lowercase tracking-normal">Escalabilidad</span>
          </h2>
          <div className="w-24 h-px bg-primary/30 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {products.map((product, index) => (
            <div
              key={product.id}
              ref={el => { cardsRef.current[index] = el; }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[3rem] border border-white/5 bg-surface/50 backdrop-blur-xl transition-all duration-500 hover:border-primary/30">
                {/* Product Image */}
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000 ease-in-out grayscale group-hover:grayscale-0"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-lg border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                      {product.icon}
                    </div>
                    <span className="font-mono text-[10px] tracking-widest uppercase text-primary border border-primary/20 px-3 py-1 rounded-full bg-primary/5">
                      {product.label}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors duration-300">
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

                  <button className="w-full btn-magnetic border border-white/10 hover:border-primary/50 bg-white/5 backdrop-blur-md rounded-2xl py-4 flex items-center justify-center gap-2 group/btn transition-all duration-300 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/10 translate-y-full hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
                    <span className="font-sans font-bold text-xs uppercase tracking-widest relative z-10">Ver Detalles_</span>
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform relative z-10" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
