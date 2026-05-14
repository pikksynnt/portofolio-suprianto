import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useState } from 'react';
import aboutProfileImg from '../../assets/about-profile.png';
import resumeFile from '../../assets/cv-suprianto.pdf';

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.2, 0.65, 0.3, 0.9],
    }
  })
};

export const About = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section className="py-40 bg-background border-y border-white/5 relative overflow-hidden" id="about">
      <div className="container mx-auto px-4">
        {/* Centered Section Title */}
        <div className="text-center mb-32">
          <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter">
            <span className="text-white">ABOUT</span>{' '}
            <span className="text-neon-cyan text-glow-cyan">ME</span>
          </h2>
          <div className="flex justify-center mt-4">
            <div className="h-[2px] w-24 bg-neon-cyan/30" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content (Left) */}
          <div className="space-y-12">
            <div className="space-y-12">
              {[
                "Halo! Saya Opik, mahasiswa tingkat akhir Informatika di Universitas Pamulang. Saya punya background unik sebagai Expert Housekeeping yang bikin saya punya standar ketelitian tinggi dan hobi bikin semuanya rapi—termasuk dalam urusan coding.",
                "Fokus saya nggak cuma di satu titik. Saya suka banget eksplorasi berbagai sisi web development, mulai dari arsitektur full-stack, integrasi CRM, sampai optimasi sistem berlangganan (SaaS). Intinya, saya suka ngulik gimana caranya bikin sistem yang nggak cuma jalan, tapi juga punya UI/UX yang clean dan smooth.",
                "Bagi saya, coding itu cara paling asik buat beresin masalah yang berantakan. Dari proses manual yang ribet, saya sulap jadi platform digital yang simpel dan fungsional. Always up for new challenges and cool collaborations!"
              ].map((para, pIdx) => (
                <motion.p
                  key={pIdx}
                  custom={pIdx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={wordVariants}
                  className="text-white text-xl font-medium leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              <button 
                onClick={() => setShowPreview(true)}
                className="btn-cyber"
              >
                PREVIEW RESUME / CV
              </button>
            </motion.div>
          </div>

          {/* Image Content (Right) - LANYARD EFFECT (ADJUSTED POSITION) */}
          <div className="relative flex justify-center lg:justify-center pt-8">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-0 right-1/2 w-[2px] bg-gradient-to-b from-neon-cyan/50 to-neon-cyan z-0"
            />

            <motion.div
              initial={{ y: -800, opacity: 0, rotate: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              animate={{ 
                rotate: [0, 5, 0, -5, 0],
                x: [0, 10, 0, -10, 0],
              }}
              transition={{ 
                y: { type: "spring", stiffness: 40, damping: 12, mass: 1 },
                opacity: { duration: 0.5 },
                rotate: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
                x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
              }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative z-10 origin-top"
            >
              <div className="relative w-full max-w-[320px] sm:max-w-96 h-[30rem] sm:h-[34rem] bg-[#0a0a0a] border-4 border-zinc-800 p-6 shadow-[0_40px_80px_rgba(0,0,0,1)] overflow-hidden group">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-zinc-700 rounded-full border border-white/5" />
                
                <div className="relative w-full h-full bg-zinc-900 overflow-hidden">
                  <img 
                    src={aboutProfileImg} 
                    alt="About Suprianto ID" 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-grid-cyan opacity-[0.05]" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="h-[1px] w-full bg-neon-cyan/20 mb-2" />
                    <div className="flex justify-between items-end">
                      <div className="font-mono text-[10px] text-neon-cyan/40 tracking-widest">ID_7890-X</div>
                      <div className="font-mono text-[10px] text-neon-cyan/40 tracking-widest uppercase">VERIFIED</div>
                    </div>
                  </div>
                </div>

                <motion.div
                  animate={{ y: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 w-full h-[2px] bg-neon-cyan/20 z-10 pointer-events-none"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* PDF Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-12 backdrop-blur-xl bg-black/80"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl h-full max-h-[90vh] bg-[#050505] border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex justify-between items-center">
                <div className="font-mono text-neon-cyan text-xs tracking-[0.3em] uppercase">
                  FILE_PREVIEW: CV_SUPRIANTO.PDF
                </div>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="text-white/40 hover:text-white transition-colors uppercase font-mono text-[10px]"
                >
                  [ CLOSE_X ]
                </button>
              </div>

              {/* Preview Content (PDF iframe) */}
              <div className="flex-1 overflow-hidden bg-zinc-900/50 flex justify-center items-center">
                <iframe 
                  src={resumeFile} 
                  className="w-full h-full border-none"
                  title="Full CV PDF Preview"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-8 border-t border-white/10 flex justify-center gap-6">
                <a 
                  href={resumeFile} 
                  download="CV_Suprianto.pdf"
                  className="btn-cyber"
                >
                  DOWNLOAD FILE_
                </a>
                <button 
                  onClick={() => setShowPreview(false)}
                  className="px-8 py-4 border border-white/20 text-white font-black uppercase tracking-tighter hover:bg-white hover:text-black transition-all"
                >
                  BACK
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
