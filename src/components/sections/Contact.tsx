import { motion } from 'framer-motion';

export const Contact = () => {
  const contactLinks = [
    { label: 'Email', value: 'pikksynnt@gmail.com', href: 'mailto:pikksynnt@gmail.com' },
    { label: 'LinkedIn', value: 'SUPRIANTO (OPIK)', href: 'https://www.linkedin.com/in/supriantoopik/' },
    { label: 'WhatsApp', value: '+62 857 8091 6227', href: 'https://wa.me/085780916227' },
    { label: 'Instagram', value: '@PIKKSYNNT_', href: 'https://www.instagram.com/pikksynnt_' },
  ];

  return (
    <section className="py-40 bg-background overflow-hidden relative" id="contact">
      {/* Decorative Grid */}
      <div className="absolute inset-0 z-0 bg-grid-cyan opacity-[0.02]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-24"
          >
            <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tighter text-center">
              <span className="text-white">CONTACT</span>{' '}
              <span className="text-neon-cyan text-glow-cyan">: SYSTEM</span>
            </h2>
            <div className="flex justify-center mt-4">
              <div className="h-[2px] w-24 bg-neon-cyan/30" />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 w-full max-w-6xl items-center mt-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
              {contactLinks.map((link, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block mb-2 group-hover:text-neon-cyan transition-colors">
                    {link.label}
                  </span>
                  <a 
                    href={link.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg sm:text-xl font-bold text-white hover:text-neon-cyan transition-colors block break-all"
                  >
                    {link.value}
                  </a>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-center md:items-end gap-12">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-10 border-2 border-neon-cyan relative bg-black/40 backdrop-blur-sm"
              >
                <div className="absolute -top-1 -left-1 w-4 h-4 bg-neon-cyan" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-neon-cyan" />
                
                {/* Simulated QR or Code detail */}
                <div className="grid grid-cols-10 gap-1 w-40 h-40">
                  {[...Array(100)].map((_, i) => (
                    <div 
                      key={i} 
                      className={Math.random() > 0.7 ? "bg-neon-cyan/80" : "bg-transparent"} 
                    />
                  ))}
                </div>
              </motion.div>
              
              <a 
                href="https://wa.me/085780916227" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-cyber w-full md:w-auto text-center"
              >
                HUBUNGI_SAYA_SEKARANG
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
