import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
          <img src="/src/assets/iso-white.png" alt="Autozen" className="h-[56px] md:h-[64px] object-contain" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-data text-sm tracking-wider text-ivory/80 uppercase">
          <Link to="/about" className="hover:text-champagne transition-colors">¿Quiénes somos?</Link>
          <a href="/#features" className="hover:text-champagne transition-colors">Protocolo</a>
          <a href="/#philosophy" className="hover:text-champagne transition-colors">Filosofía</a>
        </div>

        <a href="https://www.cal.eu/auto-zen/30min?user=auto-zen&overlayCalendar=true&date=2026-03-17" target="_blank" rel="noopener noreferrer" className="btn-magnetic bg-ivory text-obsidian px-6 py-2 rounded-full text-sm inline-block">
          <span>Iniciar Sistema</span>
        </a>
      </nav>
    </header>
  );
}
