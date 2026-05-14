import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Import Assets
import aboutProfileImg from '../../assets/about-profile.png';

// Import Portfolio Assets
import projectDental from '../../assets/portfolio/project-dental.png';
import projectSnapora from '../../assets/portfolio/project-snapora.png';
import projectEcommerce from '../../assets/portfolio/project-ecommerce.png';
import pkmImg from '../../assets/portfolio/pkm.png';
import hakiImg from '../../assets/portfolio/haki.png';
import pkm2Img from '../../assets/portfolio/pkm-2.png';
import kpImg from '../../assets/portfolio/kp.png';

const projects = [
  {
    title: 'DENTAL LAB SYSTEM',
    category: 'Project',
    description: 'Sistem manajemen laboratorium gigi terintegrasi untuk tracking order dan manajemen stok bahan baku secara real-time.',
    link: 'https://in-dente-lab.vercel.app/',
    image: projectDental,
  },
  {
    title: 'SNAPORA PHOTOBOOTH',
    category: 'Project',
    description: 'Platform SaaS photobooth dengan sistem pembayaran otomatis dan integrasi cloud storage untuk pengiriman foto instan.',
    link: 'https://www.photoboothsnapora.com/',
    image: projectSnapora,
  },
  {
    title: 'E-COMMERCE',
    category: 'Project',
    description: 'Aplikasi monitoring produksi pabrik yang membantu optimasi alur kerja dan pelaporan efisiensi mesin otomatis.',
    link: 'https://retail-pro-eta.vercel.app/',
    image: projectEcommerce,
  },
  {
    title: 'PENGABDIAN KEPADA MASYARKAT',
    category: 'Sertifikasi',
    description: 'Sertifikasi Dalam Kegiatan Pengabdian Kepada Masyarakat Dengan Judul PEMBUATAN PORTOFOLIO DIGITAL MELALUI HTML/CSS & NO-CODE',
    image: pkmImg,
  },
  {
    title: 'SERTIKAT HAKI E-BOOK',
    category: 'Sertifikasi',
    description: 'Sertifikat Pembuatan Buku Dengan Judul PEMBUATAN PORTOFOLIO DIGITAL MELALUI HTML/CSS & NO-CODE ',
    image: hakiImg,
  },
  {
    title: 'PENGABDIAN KEPADA MASYARAKAT',
    category: 'Artikel',
    description: 'Mahasiswa Universitas Pamulang Gelar Kegiatan PKM Pembuatan Portofolio Digital melalui HTML, CSS, dan No Code Di SMK Techno Media Tangerang Selatan.',
    link: 'https://radarkini.com/index.php/2025/07/24/mahasiswa-universitas-pamulang-gelar-kegiatan-pkm-pembuatan-portofolio-digital-melalui-html-css-dan-no-code-di-smk-techno-media-tangerang-selatan/',
    image: pkm2Img,
  },
  {
    title: 'Kerja Praktek',
    category: 'Artikel',
    description: 'Sinergi Akademisi dan Industri: Suprianto Kembangkan Ekosistem Marketplace Digital untuk CV Tartila Grup.',
    link: 'https://radarkini.com/index.php/2026/05/13/sinergi-akademisi-dan-industri-suprianto-kembangkan-ekosistem-marketplace-digital-untuk-cv-tartila-grup/',
    image: kpImg,
  },
];

const ProjectCard = ({ project, onClick }: { project: any; onClick: () => void }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['10deg', '-10deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-10deg', '10deg']);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      onClick={onClick}
      onMouseMove={handleMouseMove as any}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className="relative h-[320px] sm:h-[400px] w-full bg-[#0a0a0a] border border-white/5 overflow-hidden group cursor-pointer"
    >
      <div 
        className="absolute inset-0 z-10 bg-contain bg-center bg-no-repeat transition-all duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${project.image})` }}
      />
      
      <div className="absolute inset-0 z-20 bg-black/10 transition-colors" />
      <div className="absolute inset-0 z-25 bg-gradient-to-t from-black via-black/20 to-transparent" />
      
      <div className="absolute bottom-0 left-0 w-full p-8 z-30">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="h-[1px] w-6 bg-neon-cyan shadow-[0_0_8px_#00f3ff]" />
            <span className="text-neon-cyan font-mono text-[10px] tracking-widest uppercase drop-shadow-lg">
              {project.category}
            </span>
          </div>
          <h3 className="text-3xl font-black text-white uppercase tracking-tighter group-hover:text-neon-cyan transition-colors drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {project.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('Project');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const tabs = ['Project', 'Sertifikasi', 'Artikel'];

  const filteredProjects = projects.filter(p => p.category === activeTab);

  return (
    <section className="py-20 bg-background overflow-hidden" id="projects">
      {/* Small Infinite Marquee */}
      <div className="flex overflow-hidden whitespace-nowrap mb-12 select-none border-y border-white/5 py-2">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="text-2xl font-black text-white uppercase flex gap-12 items-center"
        >
          {[...Array(15)].map((_, i) => (
            <div key={i} className="flex items-center gap-6">
              <span>Selected Portfolio</span>
              <div className="w-8 h-[2px] bg-white/50" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 font-mono text-xs tracking-widest uppercase transition-all relative overflow-hidden ${
                activeTab === tab 
                  ? 'text-neon-cyan border border-neon-cyan/50 bg-neon-cyan/5' 
                  : 'text-zinc-500 border border-white/5 hover:border-white/20 hover:text-white'
              }`}
            >
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-neon-cyan/5"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-20 flex flex-col items-center gap-8">
          <div className="h-16 w-[1px] bg-gradient-to-b from-neon-cyan/50 to-transparent" />
          <a href="#contact" className="btn-cyber">
            LET'S_COLLABORATE
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[300] flex items-center justify-center p-4 backdrop-blur-xl bg-black/80"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl bg-[#0d0d0d] border border-white/10 p-8 rounded-2xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)]"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-neon-cyan/5 rounded-full -translate-y-20 translate-x-20 blur-3xl" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-8 bg-neon-cyan" />
                    <span className="text-neon-cyan font-mono text-[10px] tracking-[0.3em] uppercase">
                      {selectedProject.category}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-neon-cyan/50">
                      <img src={aboutProfileImg} alt="OPIK" className="w-full h-full object-cover" />
                    </div>
                    <span className="font-mono text-[8px] text-zinc-400 uppercase tracking-widest">Opik</span>
                  </div>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                  {selectedProject.title}
                </h3>

                <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-8 font-medium">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-4 pt-8 border-t border-white/5">
                  {(selectedProject.link || selectedProject.category === 'Sertifikasi') && (
                    <a 
                      href={selectedProject.category === 'Sertifikasi' ? selectedProject.image : selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cyber px-10"
                    >
                      {selectedProject.category === 'Sertifikasi' ? 'LIHAT SERTIFIKASI' : 
                       selectedProject.category === 'Artikel' ? 'BACA ARTIKEL' : 'VIEW_LIVE_PROJECT'}
                    </a>
                  )}
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-8 py-3.5 border border-white/10 text-zinc-500 font-mono text-[10px] uppercase tracking-widest hover:text-white hover:border-white/30 transition-all"
                  >
                    [ CLOSE ]
                  </button>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 font-mono text-[8px] text-zinc-800">
                REF: {selectedProject.title.replace(/\s+/g, '_')}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
