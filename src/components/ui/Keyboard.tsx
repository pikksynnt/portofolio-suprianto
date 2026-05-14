import { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { SKILLS_DATA } from '../../utils/skillsData';
import { cn } from '../../utils/cn';

const Key = ({ skill, onClick, isActive }: { skill: any; onClick: () => void; isActive: boolean }) => {
  return (
    <motion.button
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ y: 2, scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "relative w-16 h-16 sm:w-24 sm:h-24 rounded-xl flex flex-col items-center justify-center transition-all duration-300",
        "bg-[#151515] border-b-4 border-black shadow-[0_6px_0_#000]",
        "hover:border-neon-cyan hover:shadow-[0_4px_0_rgba(0,255,213,0.5)] hover:bg-[#1a1a1a]",
        isActive && "bg-neon-cyan border-b-0 shadow-none translate-y-[6px]"
      )}
    >
      <div className="text-2xl sm:text-4xl mb-1 transition-colors" style={{ color: isActive ? '#000' : '#888' }}>
        <skill.icon />
      </div>
      <span className={cn(
        "text-[9px] font-mono uppercase tracking-widest",
        isActive ? "text-black font-bold" : "text-zinc-600"
      )}>
        {skill.name}
      </span>
    </motion.button>
  );
};

export const Keyboard = () => {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const springConfig = { damping: 35, stiffness: 150 };
  const rotateX = useSpring(useMotionValue(0), springConfig);
  const rotateY = useSpring(useMotionValue(0), springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    rotateX.set(-y / 40);
    rotateY.set(x / 40);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto py-10 px-4">
      {/* Keyboard Case */}
      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove as any}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, perspective: 2000 }}
        className="relative bg-[#0d0d0d] p-8 sm:p-12 rounded-[30px] border-8 border-[#1a1a1a] shadow-[0_50px_100px_rgba(0,0,0,0.9)] w-full"
      >
        {/* Case Detail */}
        <div className="absolute top-6 left-10 flex gap-3">
          <div className="w-3 h-3 rounded-full bg-neon-cyan animate-pulse shadow-[0_0_10px_rgba(0,255,213,0.5)]" />
          <div className="w-3 h-3 rounded-full bg-zinc-800" />
          <div className="w-3 h-3 rounded-full bg-zinc-800" />
        </div>
        
        {/* Keys Grid - 2 Rows (Approx 7 per row) */}
        <div className="grid grid-cols-3 md:grid-cols-7 gap-4 sm:gap-6 pt-8">
          {SKILLS_DATA.map((skill) => (
            <Key 
              key={skill.id} 
              skill={skill} 
              onClick={() => setSelectedSkill(skill)}
              isActive={selectedSkill?.id === skill.id}
            />
          ))}
          
          {/* Filler Keys to make it look like a real keyboard layout if needed */}
          <div className="hidden md:flex w-24 h-24 bg-[#111] rounded-xl border-b-4 border-black opacity-30 items-center justify-center font-mono text-xs text-zinc-700">ESC</div>
        </div>

        {/* Spacebar Area */}
        <div className="mt-10 flex justify-center w-full">
          <motion.button
            whileHover={{ y: 2, shadow: 'none' }}
            whileTap={{ y: 4, shadow: 'none' }}
            className="w-full max-w-2xl h-14 bg-[#151515] rounded-xl border-b-8 border-black flex items-center justify-center relative overflow-hidden group shadow-[0_10px_0_#000]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan/5 to-transparent group-hover:via-neon-cyan/10 transition-all duration-500" />
            <div className="w-48 h-[2px] bg-neon-cyan/30 group-hover:bg-neon-cyan/50 transition-colors" />
          </motion.button>
        </div>
      </motion.div>

      {/* Skill Detail Pop-up Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 backdrop-blur-md bg-black/60"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#0d0d0d] border border-neon-cyan/30 p-8 shadow-[0_0_50px_rgba(0,255,213,0.1)] rounded-2xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-neon-cyan/5 -translate-y-12 translate-x-12 rotate-45" />

              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 bg-neon-cyan/10 flex items-center justify-center rounded-xl border border-neon-cyan/20">
                  <selectedSkill.icon className="text-4xl text-neon-cyan" />
                </div>
                <div>
                  <h3 className="text-4xl font-black text-white uppercase tracking-tighter">
                    {selectedSkill.name}
                  </h3>
                  <div className="h-[2px] w-12 bg-neon-cyan mt-2" />
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-zinc-400 font-mono text-sm uppercase tracking-widest leading-relaxed">
                  {selectedSkill.description}
                </p>
                
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <div className="font-mono text-[10px] text-zinc-600 uppercase tracking-[0.3em]">
                    MODULE_STATUS: LOADED
                  </div>
                  <button 
                    onClick={() => setSelectedSkill(null)}
                    className="text-neon-cyan font-mono text-xs uppercase tracking-widest hover:text-white transition-colors"
                  >
                    [ CLOSE_X ]
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
