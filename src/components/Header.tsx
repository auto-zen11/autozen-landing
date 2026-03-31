import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!headerRef.current) return;
      if (window.scrollY > 50) {
        gsap.to(headerRef.current, {
          backgroundColor: 'rgba(24, 24, 27, 0.7)', // surface with opacity
          backdropFilter: 'blur(12px)',
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.to(headerRef.current, {
          backgroundColor: 'rgba(10, 10, 20, 0)', // transparent
          backdropFilter: 'blur(0px)',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <nav
        ref={headerRef}
        className="pointer-events-auto flex items-center justify-between px-8 py-4 rounded-[3rem] w-full max-w-5xl border border-white/5"
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-xs tracking-widest uppercase text-textGhost">Autozen</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-sans">
          <a href="#features" className="text-white/70 hover:text-white transition-colors">Sistemas</a>
          <a href="#philosophy" className="text-white/70 hover:text-white transition-colors">Filosofía</a>
          <a href="#protocol" className="text-white/70 hover:text-white transition-colors">Protocolo</a>
          <a href="#products" className="text-white/70 hover:text-white transition-colors">Productos</a>
        </div>
        <button className="btn-magnetic btn-primary !py-2 !px-6 !text-xs hidden md:inline-flex">
          <span className="label">Agendar Reunión</span>
        </button>
      </nav>
    </header>
  );
};
