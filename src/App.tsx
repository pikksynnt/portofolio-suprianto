import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { Navbar } from './components/layout/Navbar';
import { Preloader } from './components/ui/Preloader';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { motion, useScroll, useSpring } from 'framer-motion';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-background text-white selection:bg-neon-cyan selection:text-black grainy-bg">
      <Preloader />
      <Navbar />
      <ScrollToTop />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-cyan origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />

      {/* Decorative Overlays */}
      <div className="fixed inset-0 pointer-events-none z-40 border-[20px] border-black hidden lg:block" />
    </div>
  );
};

export default App;
