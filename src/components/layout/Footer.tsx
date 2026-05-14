export const Footer = () => {
  return (
    <footer className="py-12 bg-background border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col items-center gap-10 text-center">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <a href="#projects" className="text-white/60 hover:text-neon-cyan transition-colors uppercase font-bold text-[10px] tracking-widest">PROJECTS</a>
          <a href="#contact" className="text-white/60 hover:text-neon-cyan transition-colors uppercase font-bold text-[10px] tracking-widest">CONTACT</a>
          <a href="#about" className="text-white/60 hover:text-neon-cyan transition-colors uppercase font-bold text-[10px] tracking-widest">ABOUT</a>
        </div>
        
        {/* Simple Copyright */}
        <div className="flex flex-col items-center gap-4">
          <div className="h-[1px] w-12 bg-white/10" />
          <div className="text-zinc-500 font-mono text-[9px] uppercase tracking-widest">
            © 2026 SUPRIANTO OPIK • COOKED_WITH_PURE_VIBES_FR_FR
          </div>
        </div>
      </div>
    </footer>
  );
};
