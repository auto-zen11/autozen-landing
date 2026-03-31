export const Footer = () => {
  return (
    <footer className="bg-surface rounded-t-[3rem] border-t border-white/5 pt-20 pb-8 px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        <h2 className="text-5xl md:text-8xl font-sans font-bold uppercase tracking-tighter mb-12 mix-blend-plus-lighter">
          Inicia la <br/>
          <span className="font-serif italic text-primary/80 normal-case font-light">Secuencia.</span>
        </h2>
        
        <button className="btn-magnetic btn-primary shadow-[0_0_50px_-10px_rgba(123,97,255,0.8)] mb-32 !px-12 !py-6 !text-lg">
          <span className="label font-bold tracking-widest uppercase">Agendar Reunión</span>
        </button>

        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 mt-auto">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="font-mono text-xs text-textGhost/50 uppercase tracking-widest">Aura OS v3.2 / Active</span>
          </div>

          <div className="flex gap-8 font-mono text-xs text-textGhost/50 tracking-widest uppercase">
            <a href="#" className="hover:text-primary transition-colors">Agencia</a>
            <a href="#" className="hover:text-primary transition-colors">Términos</a>
            <a href="#" className="hover:text-primary transition-colors">Privacidad</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};
