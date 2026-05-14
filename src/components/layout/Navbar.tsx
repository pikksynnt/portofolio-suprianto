import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const navLinks = [
  { name: 'HOME.SYS', href: '#' },
  { name: 'BIO.DATA', href: '#about' },
  { name: 'TECH.STACK', href: '#skills' },
  { name: 'PROJECTS.OBJ', href: '#projects' },
  { name: 'WORK.HISTORY', href: '#experience' },
  { name: 'CONTACT.SYS', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-[100] px-6 sm:px-20 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 bg-black/80 backdrop-blur-xl border-b border-white/5' 
            : 'py-8 bg-transparent'
        } flex justify-between items-center`}
      >
        {/* Brand / Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-white font-black text-lg tracking-tighter uppercase flex items-center gap-2 group cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span style={{ fontFamily: "'Syne', sans-serif" }}>PIKk<span className="text-neon-cyan">SYNNT</span></span>
        </motion.div>

        {/* Nav Links (Desktop) */}
        <div className="hidden lg:flex gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`px-4 py-2 font-bold text-[10px] tracking-widest transition-all uppercase relative group ${
                isScrolled ? 'text-white' : 'text-white/50'
              } hover:text-neon-cyan`}
            >
              <span className="relative z-10">{link.name}</span>
              <div className="absolute inset-0 bg-neon-cyan opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-neon-cyan group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Burger Button (Mobile) */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[110]"
        >
          <motion.div 
            animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }}
            className="w-6 h-[2px] bg-white" 
          />
          <motion.div 
            animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
            className="w-6 h-[2px] bg-white" 
          />
          <motion.div 
            animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0 }}
            className="w-6 h-[2px] bg-white" 
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-black text-white hover:text-neon-cyan tracking-tighter uppercase"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {link.name.replace('.SYS', '').replace('.DATA', '').replace('.OBJ', '')}
                </motion.a>
              ))}
            </div>
            
            {/* Decoration for mobile menu */}
            <div className="absolute bottom-10 font-mono text-[10px] text-white/20 tracking-widest uppercase">
              // PORTFOLIO_MOBILE_NAV_v1.0
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
