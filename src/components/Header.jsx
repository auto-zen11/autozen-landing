import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import logoImg from '../assets/iso-white.png';

gsap.registerPlugin(ScrollTrigger);

export function Header() {
  const headerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 'top -50',
        end: 99999,
        toggleClass: {
          className: 'bg-obsidian/70 backdrop-blur-md border-slate shadow-lg',
          targets: headerRef.current,
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-4 md:px-12 md:py-6 pointer-events-none">
      <nav
        ref={headerRef}
        className="pointer-events-auto flex items-center justify-between transition-colors duration-300 rounded-2xl px-6 py-4"
      >
        <Link to="/" className="flex items-center">
          <img src={logoImg} alt="Autozen" className="h-[56px] md:h-[64px] object-contain" />
        </Link>
        
        {/* Pill nav — Midnight Luxe */}
        <div className="hidden md:flex items-center gap-1 bg-obsidian/20 border border-champagne/15 backdrop-blur-xl rounded-full px-3 py-1.5">
          <Link
            to="/"
            className="relative px-4 py-1.5 font-data text-xs tracking-widest uppercase text-ivory/70 hover:text-champagne transition-colors duration-300 group"
          >
            Inicio
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-champagne group-hover:w-3/4 transition-all duration-300 rounded-full" />
          </Link>
          <span className="w-px h-3 bg-champagne/20 mx-1" />
          <Link
            to="/about"
            className="relative px-4 py-1.5 font-data text-xs tracking-widest uppercase text-ivory/70 hover:text-champagne transition-colors duration-300 group"
          >
            ¿Quiénes somos?
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-champagne group-hover:w-3/4 transition-all duration-300 rounded-full" />
          </Link>
          <span className="w-px h-3 bg-champagne/20 mx-1" />
          <a
            href="/#features"
            className="relative px-4 py-1.5 font-data text-xs tracking-widest uppercase text-ivory/70 hover:text-champagne transition-colors duration-300 group"
          >
            Proceso
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-champagne group-hover:w-3/4 transition-all duration-300 rounded-full" />
          </a>
          <span className="w-px h-3 bg-champagne/20 mx-1" />
          <a
            href="/#philosophy"
            className="relative px-4 py-1.5 font-data text-xs tracking-widest uppercase text-ivory/70 hover:text-champagne transition-colors duration-300 group"
          >
            Filosofía
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-champagne group-hover:w-3/4 transition-all duration-300 rounded-full" />
          </a>
        </div>

        <a href="https://www.cal.eu/auto-zen/30min?user=auto-zen&overlayCalendar=true&date=2026-03-17" target="_blank" rel="noopener noreferrer" className="btn-magnetic bg-ivory text-obsidian px-6 py-2 rounded-full text-sm inline-block">
          <span>Iniciar Sistema</span>
        </a>
      </nav>
    </header>
  );
}
