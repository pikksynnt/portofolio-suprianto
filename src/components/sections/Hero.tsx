import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import profileImg from '../../assets/profile.png';
import { FaWhatsapp, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const LoopTypewriter = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timeout: any;
    const currentWord = words[index];
    
    const handleType = () => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          timeout = setTimeout(handleType, 100);
        } else {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          timeout = setTimeout(handleType, 50);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    };
    
    timeout = setTimeout(handleType, 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, words]);

  return <span className="text-neon-cyan">{displayText}<span className="animate-pulse">_</span></span>;
};

const ScrambleText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    let iteration = 0;
    let interval: any;
    let timeout: any;
    let loopTimeout: any;

    const start = () => {
      iteration = 0;
      clearInterval(interval);
      interval = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((_, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= text.length) {
          clearInterval(interval);
          // Set loop to repeat every 10 seconds
          loopTimeout = setTimeout(start, 10000);
        }

        iteration += 1 / 10; // More steps for smoother reveal
      }, 50); // Slightly slower tick
    };

    timeout = setTimeout(start, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
      clearTimeout(loopTimeout);
    };
  }, [text, delay]);

  return <span>{displayText}</span>;
};

export const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background py-32 px-8 sm:px-20">
      {/* Grid Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-cyan opacity-[0.03] bg-grid-animate" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      </div>

      {/* Decorative Scanline */}
      <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.02] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />

      <div className="relative z-20 w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-left"
        >
          <div className="inline-block px-4 py-1 border border-neon-cyan/30 text-neon-cyan font-mono text-[10px] tracking-[0.5em] uppercase mb-12 animate-pulse">
            [ AVAILABLE FREELANCE ]
          </div>
          
          <h1 className="font-mono text-2xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight uppercase mb-8">
            <span className="text-zinc-500">const</span> <span className="text-white">NAME</span> = <span className="text-neon-cyan">"</span>
            <span className="text-white">
              <ScrambleText text="SUPRIANTO" delay={800} />
            </span>
            <span className="text-neon-cyan">"</span>;
            <br />
            <span className="text-zinc-500">const</span> <span className="text-white">ALIAS</span> = <span className="text-neon-cyan">"</span>
            <span className="text-neon-cyan text-glow-cyan">
              <ScrambleText text="(OPIK)" delay={1500} />
            </span>
            <span className="text-neon-cyan">"</span>;
          </h1>
          
          <div className="flex items-center gap-6 mt-12 mb-8">
            <div className="h-[2px] w-6 bg-neon-cyan" />
            <h2 className="text-xl sm:text-3xl font-mono font-bold text-white uppercase tracking-widest min-h-[1.5em] flex items-center">
              <LoopTypewriter words={['Full Stack WEB Developer', 'UI/UX Designer', 'Housekeeping']} />
            </h2>
          </div>

          <p className="text-zinc-400 font-medium max-w-xl leading-relaxed mb-12">
            Halo, saya Opik. Mahasiswa akhir Informatika Universitas Pamulang yang memadukan ketelitian expert housekeeping ke dalam web development. 
            Saya fokus menciptakan clean code dan antarmuka yang rapi. 
            Berpengalaman membangun sistem monitoring serta platform SaaS yang efisien dan sistematis.
          </p>

          <div className="mt-20 flex flex-wrap gap-6">
            {[
              { Icon: FaWhatsapp, href: "https://wa.me/085780916227", label: "WhatsApp" },
              { Icon: FaInstagram, href: "https://www.instagram.com/pikksynnt_", label: "Instagram" },
              { Icon: FaGithub, href: "https://github.com/pikksynnt", label: "GitHub" },
              { Icon: FaLinkedin, href: "https://www.linkedin.com/in/supriantoopik/", label: "LinkedIn" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 flex items-center justify-center border-2 border-white/20 text-white hover:border-neon-cyan hover:text-neon-cyan transition-all relative group"
                title={social.label}
              >
                <div className="absolute inset-0 bg-neon-cyan/0 group-hover:bg-neon-cyan/5 transition-all" />
                <social.Icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Profile Image (Larger & No Box) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-xl aspect-square flex items-center justify-center">
            {/* Floating Slogans */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-20 z-20 px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 font-mono text-neon-cyan text-xs tracking-[0.5em] uppercase font-bold"
            >
              INHALE
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-1/2 -right-24 z-20 px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 font-mono text-neon-cyan text-xs tracking-[0.5em] uppercase font-bold"
            >
              EXHALE
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 -left-20 z-20 px-6 py-2 bg-white/5 backdrop-blur-md border border-white/10 font-mono text-neon-cyan text-xs tracking-[0.5em] uppercase font-bold"
            >
              SMILE
            </motion.div>

            {/* Subject Detection Lines */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-neon-cyan/40" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-neon-cyan/40" />

            <div className="w-full h-full relative">
              <img 
                src={profileImg} 
                alt="Suprianto Profile" 
                className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(0,255,213,0.2)]"
              />
              
              {/* Scan Overlay (Subtle) */}
              <motion.div
                animate={{ y: ['0%', '100%', '0%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-[1px] bg-neon-cyan/20 z-10 pointer-events-none"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mouse Glow */}
      <motion.div
        className="fixed pointer-events-none z-50 w-[600px] h-[600px] rounded-full opacity-[0.05] blur-[120px]"
        style={{
          background: 'radial-gradient(circle, #00ffd5 0%, transparent 70%)',
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
      />
    </section>
  );
};
