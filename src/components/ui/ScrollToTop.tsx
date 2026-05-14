import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[100] w-14 h-14 bg-black border-2 border-neon-cyan text-neon-cyan flex flex-col items-center justify-center group shadow-[4px_4px_0px_0px_#00ffd5] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          <FaArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          <span className="text-[7px] font-mono mt-1 font-bold tracking-widest">TOP</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
