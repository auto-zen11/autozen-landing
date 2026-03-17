export function Footer() {
  return (
    <footer className="relative bg-obsidian text-ivory/60 pb-8 mt-12 z-30">
      <div className="bg-slate rounded-t-huge pt-24 px-6 relative overflow-hidden">
        
        {/* Top Arc decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-champagne/30 to-transparent"></div>

        <div className="max-w-7xl mx-auto flex flex-col items-center">
          
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-8xl font-title font-bold tracking-tighter text-ivory mb-6">
              INICIAR <span className="font-drama italic text-champagne font-normal">Escala.</span>
            </h2>
            <a href="https://www.cal.eu/auto-zen/30min?user=auto-zen&overlayCalendar=true&date=2026-03-17" target="_blank" rel="noopener noreferrer" className="btn-magnetic bg-champagne text-obsidian px-12 py-5 text-lg mt-4 shadow-[0_0_40px_rgba(201,168,76,0.2)] inline-block">
              <span>Agendar Reunión de Evaluación</span>
            </a>
          </div>

          <div className="w-full h-[1px] bg-obsidian/50 mb-8" />
          
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 font-data text-xs uppercase tracking-widest text-ivory/40">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></span>
              Sistemas Operativos 100%
            </div>
            
            <div className="flex items-center gap-3 font-title normal-case text-sm">
              <img src="/src/assets/iso-dark.png" alt="" className="h-[20px] opacity-40 hover:opacity-100 transition-opacity" />
              <span>&copy; {new Date().getFullYear()} Autozen. Precisión Absoluta.</span>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-champagne transition-colors">Privacidad</a>
              <a href="#" className="hover:text-champagne transition-colors">Protocolos</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
