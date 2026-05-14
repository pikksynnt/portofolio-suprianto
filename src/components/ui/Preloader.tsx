import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const techLogs = [
  "BOOTING SYSTEM_CORE_v4.0.2...",
  "LOADING NEURAL_INTERFACE...",
  "INITIALIZING GRAPHICS_ENGINE...",
  "CONNECTING TO CLOUD_DATABASE...",
  "INJECTING CUSTOM_STYLES...",
  "ESTABLISHING SECURE_TUNNEL...",
  "OPTIMIZING ASSET_PIPELINE...",
  "FETCHING USER_PREFERENCES...",
  "HANDSHAKE PROTOCOL_v2...",
  "PREPARING VISUAL_RENDERER...",
  "SYSTEM STATUS: OPTIMAL",
  "DECRYPTING PORTFOLIO_DATA...",
  "SYNCING PROJECT_MODULES...",
];

export const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [activeLog, setActiveLog] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 800);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 5) + 1;
        return next > 100 ? 100 : next;
      });
    }, 60);

    const logInterval = setInterval(() => {
      setActiveLog(prev => (prev + 1) % techLogs.length);
    }, 400);

    return () => {
      clearInterval(interval);
      clearInterval(logInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px) contrast(200%)",
            transition: { duration: 0.8, ease: "circIn" }
          }}
          className="fixed inset-0 z-[1000] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Scanlines Effect */}
          <div className="absolute inset-0 pointer-events-none z-50 opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,4px_100%]" />

          {/* Dynamic Grid Background */}
          <div className="absolute inset-0 opacity-[0.05] z-0">
            <div className="absolute inset-0 bg-grid-cyan bg-[length:50px_50px]" />
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-t from-neon-cyan/20 to-transparent"
            />
          </div>

          <div className="relative z-10 w-full max-w-2xl px-12">
            {/* Header Detail */}
            <div className="flex justify-between items-end mb-12 border-b border-white/10 pb-4">
              <div className="font-mono text-neon-cyan text-[10px] tracking-[0.3em]">
                SYST_BOOT_PROCESS
              </div>
              <div className="font-mono text-neon-cyan text-[8px] tracking-widest uppercase">
                PORTOFOLIO_SUPRIANTO // ACTIVE
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-end gap-12">
              {/* Giant Percentage (Brutalist) */}
              <div className="relative shrink-0">
                <span
                  className="text-[5rem] md:text-[7rem] font-black leading-none text-white tracking-tighter block"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  {Math.min(count, 100)}
                </span>
                <div className="absolute -top-4 -right-8 font-mono text-neon-cyan text-4xl font-bold italic opacity-80">%</div>
              </div>

              {/* Technical Log Section */}
              <div className="flex-1 w-full space-y-6">
                <div className="h-40 overflow-hidden relative">
                  <div className="absolute bottom-0 left-0 space-y-1">
                    {techLogs.slice(0, activeLog + 1).map((log, i) => (
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        key={i}
                        className="font-mono text-[9px] md:text-[11px] text-neon-cyan/60 tracking-wider flex gap-4"
                      >
                        <span className="text-neon-cyan/20">[{i.toString().padStart(2, '0')}]</span>
                        <span>{log}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Progress Bar (Brutalist Style) */}
                <div className="space-y-3">
                  <div className="flex justify-between font-mono text-[9px] text-white/40 uppercase">
                    <span>loading_assets</span>
                    <span>{count}/100</span>
                  </div>
                  <div className="w-full h-8 border border-white/10 p-1">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: count / 100 }}
                      className="h-full bg-neon-cyan origin-left shadow-[0_0_20px_rgba(0,255,213,0.4)]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Detail */}
            <div className="mt-20 flex justify-center">
              <motion.div
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="font-mono text-[10px] text-neon-cyan/40 tracking-[0.5em] uppercase"
              >
                Connecting to Neural Interface...
              </motion.div>
            </div>
          </div>

          {/* Glitch Decorative Boxes */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l border-t border-neon-cyan/20 m-8" />
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r border-b border-neon-cyan/20 m-8" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
