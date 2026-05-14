import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'ASTON BINTARO HOTEL',
    role: 'DW HOUSEKEEPING',
    period: '2024 - 2026',
    description: 'Bagian dari tim Pre-Opening yang bertanggung jawab dalam menjaga standar kualitas pelayanan kamar dan area publik agar tetap eksklusif dan nyaman bagi tamu.'
  },
  {
    company: 'PT. CREATIVE EVENT ENTERTAINMENT',
    role: 'STAFF GENERAL AFFAIR',
    period: '2023 - 2024',
    description: 'Mendukung operasional kantor melalui pengelolaan aset dan kebersihan area kerja, serta memastikan alur distribusi dokumen berjalan dengan efisien dan sistematis.'
  },
  {
    company: 'HOTEL HORIZON CILEDUG',
    role: 'PKL - DW HOUSEKEEPING',
    period: '2020 - 2021',
    description: 'Mengawali karir melalui praktik kerja lapangan hingga dipercaya menjadi Daily Worker, fokus pada ketelitian dan kecepatan dalam layanan room attendant.'
  }
];

export const Experience = () => {
  return (
    <section className="py-40 bg-background relative" id="experience">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-24">
          <div className="md:w-1/3">
            <div className="sticky top-40 space-y-8">
              <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tighter leading-none">
                PENGALAMAN<br />
                <span className="text-neon-cyan">KERJA.</span>
              </h2>
              <div className="h-1 w-20 bg-neon-cyan/30" />
              <p className="text-white font-mono text-[10px] uppercase tracking-widest leading-relaxed">
                [ Arsip perjalanan profesional dan rekam jejak operasional ]
              </p>
            </div>
          </div>
          
          <div className="md:w-2/3 space-y-1">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-12 bg-[#080808] border border-white/5 hover:border-neon-cyan/50 transition-all duration-500 overflow-hidden"
              >
                {/* Background Detail */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-grid-cyan opacity-0 group-hover:opacity-[0.05] transition-opacity pointer-events-none" />
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                  <h3 className="text-3xl font-black text-white uppercase group-hover:text-neon-cyan transition-colors">
                    {exp.role}
                  </h3>
                  <div className="text-zinc-500 font-mono text-xs border border-zinc-800 px-3 py-1">
                    {exp.period}
                  </div>
                </div>
                
                <div className="text-neon-cyan font-mono mb-6 uppercase tracking-[0.3em] text-xs font-bold">
                  {exp.company}
                </div>
                
                <p className="text-zinc-500 font-medium leading-relaxed max-w-xl group-hover:text-zinc-300 transition-colors">
                  {exp.description}
                </p>
                
                {/* Decorative dots */}
                <div className="mt-8 flex gap-1">
                  {[...Array(10)].map((_, j) => (
                    <div key={j} className="w-1 h-1 bg-zinc-800 group-hover:bg-neon-cyan/50 transition-colors" style={{ transitionDelay: `${j * 50}ms` }} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
