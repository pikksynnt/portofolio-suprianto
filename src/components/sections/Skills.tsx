import { motion } from 'framer-motion';
import { Keyboard } from '../ui/Keyboard';

export const Skills = () => {
  return (
    <section className="relative py-40 bg-background overflow-hidden" id="skills">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-col items-center"
        >
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-center">
            <span className="text-white">TECHNICAL</span>{' '}
            <span className="text-neon-cyan text-glow-cyan">MODULES</span>
          </h2>
          
          {/* Decorative line */}
          <div className="mt-8 flex items-center gap-4 w-full max-w-xs">
            <div className="h-[1px] flex-1 bg-neon-cyan/20" />
            <div className="w-2 h-2 rotate-45 border border-neon-cyan" />
            <div className="h-[1px] flex-1 bg-neon-cyan/20" />
          </div>
        </motion.div>

        <Keyboard />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan/20 to-transparent" />
    </section>
  );
};
